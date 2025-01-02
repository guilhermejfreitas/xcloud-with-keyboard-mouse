let CAN_SET_BUTTON = {can: false, button_id: null};

let second_click = false;

const DEFAULT_GAMEPAD_CONFIG = {
    active:true,
    profiles:[
        {
            name:'Default',
            sensitivity: 10,
            mouse_to_analog:2,
            mapped_buttons:{}
        }
    ]
}

const ConfigLoader = () => {

    const config = GetGamepadConfig();

    const profiles = config.profiles;

    const active = document.getElementById('active');
   
    if (config.active){
        active.checked = true;
        setText('active_value', "Desativar XPAD");
    }else{
        active.checked = false;
        setText('active_value', "Ativar XPAD");
    }

    for (const profile of profiles){

        const profile_ = GetProfile();

        if (profile.name == profile_){

            let keys = Object.keys(profile.mapped_buttons);
            let values = Object.values(profile.mapped_buttons);

            let index = 0;
            for (const button of keys){
                if (values[index] == null){
                    setText(button, "Selecionar");
                }else{
                    setText(button, values[index]);
                }
                index += 1;
            }
            
            setText('sensitivity_value', profile.sensitivity);
            SetInputValue('sensitivity', profile.sensitivity);

            if (profile.mouse_to_analog == 0){
                const mouse_to_analog_stick_none = document.getElementById('mouse_to_analog_stick_none');
                mouse_to_analog_stick_none.checked = true;
            }else if (profile.mouse_to_analog == 1){
                const mouse_to_analog_stick_left = document.getElementById('mouse_to_analog_stick_left');
                mouse_to_analog_stick_left.checked = true;
            }else if (profile.mouse_to_analog == 2){
                const mouse_to_analog_stick_right = document.getElementById('mouse_to_analog_stick_right');
                mouse_to_analog_stick_right.checked = true;
            }

        }

    }

}

const InitExtension = () => {
    const gamepad_config = localStorage.getItem('GAMEPAD_CONFIG');
    if (!gamepad_config){
        localStorage.setItem('GAMEPAD_CONFIG', JSON.stringify(DEFAULT_GAMEPAD_CONFIG));
    }
    ConfigLoader();
}

const GetGamepadConfig = () => {
    const gamepad_config = localStorage.getItem('GAMEPAD_CONFIG');
    if (!gamepad_config){
        localStorage.setItem('GAMEPAD_CONFIG', JSON.stringify(DEFAULT_GAMEPAD_CONFIG));
        return DEFAULT_GAMEPAD_CONFIG;
    }
    return JSON.parse(gamepad_config);
}

const SaveGamepadConfig = (gamepad_config) => {
    localStorage.setItem('GAMEPAD_CONFIG', JSON.stringify(gamepad_config));
}

const SaveSensitivity = (name, sensitivity) => {
    const gamepad_config = GetGamepadConfig();
    const profiles = gamepad_config.profiles;
    for (const profile_ of profiles){
        if (name == profile_.name){
            profile_.sensitivity = sensitivity;
        }
    }

    gamepad_config.profiles = profiles;

    localStorage.setItem('GAMEPAD_CONFIG', JSON.stringify(gamepad_config));
}

const SaveMouseToAnalog = (mouse_to_analog) => {
    const gamepad_config = GetGamepadConfig();
    const profiles = gamepad_config.profiles;
    for (const profile of profiles){
        if (GetProfile() == profile.name){
            profile.mouse_to_analog = mouse_to_analog;
        }
    }

    gamepad_config.profiles = profiles;

    localStorage.setItem('GAMEPAD_CONFIG', JSON.stringify(gamepad_config));
}

const SetInputValue = (id, value) => {
    document.getElementById(id).value = value;
}

const SetProfileButtons = (profile, mapped_buttons) => {
    const gamepad_config = GetGamepadConfig();
    const profiles = gamepad_config.profiles;
    for (const profile_ of profiles){
        if (profile == profile_.name){
            profile_.mapped_buttons = mapped_buttons;
        }
    }

    gamepad_config.profiles = profiles;

    localStorage.setItem('GAMEPAD_CONFIG', JSON.stringify(gamepad_config));
}

const GetProfile = () => {
    const profiles = document.getElementById("profiles");
    const profile = profiles.value;
    return profile;
}

const SetButton = (key) => {

    if (CAN_SET_BUTTON.can){
        
        const gamepad_config = GetResetedGamepadConfig(key);

        const profiles = gamepad_config.profiles;

        for (const profile of profiles){

            const profile_ = GetProfile();

            if (profile.name == profile_){

                profile.mapped_buttons[CAN_SET_BUTTON.button_id] = key;
                setText(CAN_SET_BUTTON.button_id, key);

                SetProfileButtons(profile_, profile.mapped_buttons);
            }

        }
    }

    CAN_SET_BUTTON.can = false;
    CAN_SET_BUTTON.button_id = null;

    ConfigLoader();

    second_click = false;
}

const GetResetedGamepadConfig = (key) => {
    const gamepad_config = GetGamepadConfig();

    const profiles = gamepad_config.profiles;

    for (const profile of profiles){

        const profile_ = GetProfile();

        if (profile.name == profile_){

            let keys = Object.keys(profile.mapped_buttons);
            
            for (const key_ of keys){

                console.log(profile.mapped_buttons[key_], key)

                if (profile.mapped_buttons[key_] == key){
                    profile.mapped_buttons[key_] = null;

                    SetProfileButtons(profile_, profile.mapped_buttons);
                }
            }

        }

    }

    return GetGamepadConfig();
}

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    if (event.keyCode != 27 && event.keyCode === 32) {
        SetButton('SPACE');
    }else if (event.keyCode != 27 && event.keyCode != 32){
        SetButton(event.key.toUpperCase());
    }
});

document.addEventListener('click', function(event) {
    // Verifica se o botão esquerdo do mouse foi clicado (valor de event.button é 0)
    if (event.button === 0) {
        if (!second_click){
            second_click = true;
        }else{
            SetButton('left_click');
            second_click = false;
        }
    }
});
  
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    // Verifica se o botão direito do mouse foi clicado (valor de event.button é 2)
    if (event.button === 2) {
       
        SetButton('right_click');
    }
});

function handleClick(event) {
    console.log(event)
    CAN_SET_BUTTON.can = true;
    CAN_SET_BUTTON.button_id = event.target.id;
    setText(event.target.id, "Selecionar")
}

const setText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const sensitivity = document.getElementById('sensitivity');

sensitivity.addEventListener('change', function() {
    
    const sensitivity_value = sensitivity.value;

    const profile_ = GetProfile();

    SaveSensitivity(profile_, sensitivity_value)

    document.getElementById('sensitivity_value').innerText = sensitivity_value;
});
  
const mouse_to_analog_stick_left = document.getElementById('mouse_to_analog_stick_left');
const mouse_to_analog_stick_right = document.getElementById('mouse_to_analog_stick_right');
const mouse_to_analog_stick_none = document.getElementById('mouse_to_analog_stick_none');

// Adiciona o ouvinte de eventos "change" para cada radio button
mouse_to_analog_stick_left.addEventListener('change', handleRadioButtonChange);
mouse_to_analog_stick_right.addEventListener('change', handleRadioButtonChange);
mouse_to_analog_stick_none.addEventListener('change', handleRadioButtonChange);

// Função para lidar com o evento "change" nos radio buttons
function handleRadioButtonChange(event) {
  // Verifica qual radio button foi selecionado
  if (event.target.checked) {
    switch(event.target.id){
        case 'mouse_to_analog_stick_left': SaveMouseToAnalog(1); break;
        case 'mouse_to_analog_stick_right': SaveMouseToAnalog(2); break;
        case 'mouse_to_analog_stick_none': SaveMouseToAnalog(0); break;
    }
  }
}

const container = document.getElementById('set-buttons');

container.addEventListener('click', function(event) {
  if (event.target.classList.contains('set-button')) {
    handleClick(event);
  }
});

const active = document.getElementById('active');

active.addEventListener('click', function(event) {

    const gamepad_config = GetGamepadConfig();

    if (active.checked) {
        gamepad_config.active = true;
        setText('active_value', "Desativar XPAD");
    } else {
        gamepad_config.active = false;
        setText('active_value', "Ativar XPAD");
    }

    SaveGamepadConfig(gamepad_config);
});

InitExtension();

setInterval(()=>{
    chrome.storage.local.set({GAMEPAD_CONFIG:JSON.stringify(GetGamepadConfig())});
}, 1000);