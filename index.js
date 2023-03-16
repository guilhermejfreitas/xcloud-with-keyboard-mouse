/*
    0 = Desabilitado
    1 = Define o mouse para funcionar como analógico esquerdo
    2 = Define o mouse para funcionar como analógico direito
*/

let setMouseToAnalog = 0;

/*
    Define o nível de sensibilidade no mouse
*/

let sensibility = 0.6;

/*

    Posição de cada botão Xbox no array de botões do Fake Controller

    0 = A
    1 = B
    2 = X
    3 = Y
    4 = LB
    5 = RB
    6 = LT
    7 = RT
    8 = SELECT
    9 = START
    10 = L3
    11 = R3
    12 = UP
    13 = DOWN
    14 = LEFT
    15 = RIGHT

*/

//Cria o objeto do controle fake que será setado como gamepad
const fakeController = {
    axes: [0, 0, 0, 0],
    buttons: [
        {
            pressed: false,
            touched: false,
            value: 0,
        },
        {
            pressed: false,
            touched: false,
            value: 0,
        },
        {
            pressed: false,
            touched: false,
            value: 0,
        },
        {
            pressed: false,
            touched: false,
            value: 0,
        },
        {
            pressed: false,
            touched: false,
            value: 0,
        },
        {
            pressed: false,
            touched: false,
            value: 0,
        },
        {
            pressed: false,
            touched: false,
            value: 0,
        },
        {
            pressed: false,
            touched: false,
            value: 0,
        },
        {
            pressed: false,
            touched: false,
            value: 0,
        },
        {
            pressed: false,
            touched: false,
            value: 0,
        },
        {
            pressed: false,
            touched: false,
            value: 0,
        },
        {
            pressed: false,
            touched: false,
            value: 0,
        },
        {
            pressed: false,
            touched: false,
            value: 0,
        },
        {
            pressed: false,
            touched: false,
            value: 0,
        },
        {
            pressed: false,
            touched: false,
            value: 0,
        },
        {
            pressed: false,
            touched: false,
            value: 0,
        },
        {
            pressed: false,
            touched: false,
            value: 0,
        },
    ],
    connected: false,
    id: 'Xbox 360 Controller (XInput STANDARD GAMEPAD)',
    index: 0,
    mapping: 'standard',
    timestamp: performance.now(),
    hapticActuators: [],
};


//quando soltar a tecla
window.addEventListener("keyup", (event) => {
    keyboard_keycodes[event.keyCode].pressed = false;

    switch(keyboard_keycodes[event.keyCode].controller_button){
        case 'ANALOG_LEFT_RIGHT':
            controller_buttons.ANALOG_LEFT_RIGHT.pressed = false;
            if (controller_buttons.ANALOG_LEFT_UP.pressed){
                AnalogUp();
            }else if (controller_buttons.ANALOG_LEFT_DOWN.pressed){
                AnalogDown();
            }else{
                ResetAnalog();
            }
        break;
        case 'ANALOG_LEFT_LEFT':
            controller_buttons.ANALOG_LEFT_LEFT.pressed = false;
            if (controller_buttons.ANALOG_LEFT_UP.pressed){
                AnalogUp();
            }else if (controller_buttons.ANALOG_LEFT_DOWN.pressed){
                AnalogDown();
            }else{
                ResetAnalog();
            }
        break;
        case 'ANALOG_LEFT_UP':
            controller_buttons.ANALOG_LEFT_UP.pressed = false;
            if (controller_buttons.ANALOG_LEFT_LEFT.pressed){
                AnalogLeft();
            }else if (controller_buttons.ANALOG_LEFT_RIGHT.pressed){
                AnalogRight();
            }else{
                ResetAnalog();
            }
        break;
        case 'ANALOG_LEFT_DOWN':
            controller_buttons.ANALOG_LEFT_DOWN.pressed = false;
            if (controller_buttons.ANALOG_LEFT_LEFT.pressed){
                AnalogLeft();
            }else if (controller_buttons.ANALOG_LEFT_RIGHT.pressed){
                AnalogRight();
            }else{
                ResetAnalog();
            }
        break;
        case 'ANALOG_RIGHT_RIGHT':
            controller_buttons.ANALOG_RIGHT_RIGHT.pressed = false;
            if (controller_buttons.ANALOG_RIGHT_UP.pressed){
                AnalogUp('right');
            }else if (controller_buttons.ANALOG_RIGHT_DOWN.pressed){
                AnalogDown('right');
            }else{
                ResetAnalog('right');
            }
        break;
        case 'ANALOG_RIGHT_LEFT':
            controller_buttons.ANALOG_RIGHT_LEFT.pressed = false;
            if (controller_buttons.ANALOG_RIGHT_UP.pressed){
                AnalogUp('right');
            }else if (controller_buttons.ANALOG_RIGHT_DOWN.pressed){
                AnalogDown('right');
            }else{
                ResetAnalog('right');
            }
        break;
        case 'ANALOG_RIGHT_UP':
            controller_buttons.ANALOG_RIGHT_UP.pressed = false;
            if (controller_buttons.ANALOG_RIGHT_LEFT.pressed){
                AnalogLeft('right');
            }else if (controller_buttons.ANALOG_RIGHT_RIGHT.pressed){
                AnalogRight('right');
            }else{
                ResetAnalog('right');
            }
        break;
        case 'ANALOG_RIGHT_DOWN':
            controller_buttons.ANALOG_RIGHT_DOWN.pressed = false;
            if (controller_buttons.ANALOG_RIGHT_LEFT.pressed){
                AnalogLeft('right');
            }else if (controller_buttons.ANALOG_RIGHT_RIGHT.pressed){
                AnalogRight('right');
            }else{
                ResetAnalog('right');
            }
        break;
        case 'STICK_RIGHT':
            controller_buttons.STICK_RIGHT.pressed = false;
            simulateButtonUnpress(15)
        break;
        case 'STICK_LEFT':
            controller_buttons.STICK_LEFT.pressed = false;
            simulateButtonUnpress(14)
        break;
        case 'STICK_UP':
            controller_buttons.STICK_UP.pressed = false;
            simulateButtonUnpress(12)
        break;
        case 'STICK_DOWN':
            controller_buttons.STICK_DOWN.pressed = false;
            simulateButtonUnpress(13)
        break;
        case 'A':
            controller_buttons.A.pressed = false;
            simulateButtonUnpress(0)
        break;
        case 'B':
            controller_buttons.B.pressed = false;
            simulateButtonUnpress(1)
        break;
        case 'X':
            controller_buttons.X.pressed = false;
            simulateButtonUnpress(2)
        break;
        case 'Y':
            controller_buttons.Y.pressed = false;
            simulateButtonUnpress(3)
        break;
        case 'START':
            controller_buttons.START.pressed = false;
            simulateButtonUnpress(9)
        break;
        case 'SELECT':
            controller_buttons.SELECT.pressed = false;
            simulateButtonUnpress(8)
        break;
        case 'LT':
            controller_buttons.LT.pressed = false;
            simulateButtonUnpress(6)
        break;
        case 'LB':
            controller_buttons.LB.pressed = false;
            simulateButtonUnpress(4)
        break;
        case 'RT':
            controller_buttons.RT.pressed = false;
            simulateButtonUnpress(7)
        break;
        case 'RB':
            controller_buttons.RB.pressed = false;
            simulateButtonUnpress(5)
        break;
    }
});

/*
    QUANDO MOVER O MOUSE
*/

let timeout;
  
window.addEventListener("mousemove", function(event) {

    clearTimeout(timeout);
    timeout = setTimeout(function(){ //RESETA A POSIÇÃO DO AXIS PARA 0

        if (setMouseToAnalog == 1){
            fakeController.axes[0] = 0;
            fakeController.axes[1] = 0;
        }else if (setMouseToAnalog == 2){
            fakeController.axes[2] = 0;
            fakeController.axes[3] = 0;
        }
        
    }, 50);

    let mouseX = event.clientX;
    let mouseY = event.clientY;
    
    //Calcula a posição x e y em relação ao centro da janela
    let windowCenterX = window.innerWidth / 2;
    let windowCenterY = window.innerHeight / 2;
    let deltaX = mouseX - windowCenterX;
    let deltaY = mouseY - windowCenterY;
    
    //Converte a posição x e y em axis do gamepad
    let maxDelta = Math.max(Math.abs(deltaX), Math.abs(deltaY));
    let axisX = (deltaX / maxDelta) * sensibility;
    let axisY = (deltaY / maxDelta) * sensibility;

    //Seta o axis a posição do analógico
    if (setMouseToAnalog == 1){
        fakeController.axes[0] = axisX;
        fakeController.axes[1] = axisY;
    }else if (setMouseToAnalog == 2){
        fakeController.axes[2] = axisX;
        fakeController.axes[3] = axisY;
    }

     simulateButtonPress(16);
    
});

//quando pressionar a tecla
window.addEventListener("keydown", (event) => {
    keyboard_keycodes[event.keyCode].pressed = true;

    switch(keyboard_keycodes[event.keyCode].controller_button){

        case 'ANALOG_LEFT_RIGHT':
            resetAnalogFromOppositePosition('ANALOG_LEFT_RIGHT');
            controller_buttons.ANALOG_LEFT_RIGHT.pressed = true;
            console.log(controller_buttons.ANALOG_LEFT_UP.pressed)
            if (controller_buttons.ANALOG_LEFT_UP.pressed){ AnalogRightUp(); }
            else if (controller_buttons.ANALOG_LEFT_DOWN.pressed){ AnalogRightDown(); }
            else{
                AnalogRight();
            }
        break;
        case 'ANALOG_LEFT_LEFT':
            resetAnalogFromOppositePosition('ANALOG_LEFT_LEFT');
            controller_buttons.ANALOG_LEFT_LEFT.pressed = true;
            if (controller_buttons.ANALOG_LEFT_UP.pressed){ AnalogLeftUp() }
            else if (controller_buttons.ANALOG_LEFT_DOWN.pressed){ AnalogLeftDown(); }
            else{
                AnalogLeft();
            }
        break;
        case 'ANALOG_LEFT_UP':
            resetAnalogFromOppositePosition('ANALOG_LEFT_UP');
            controller_buttons.ANALOG_LEFT_UP.pressed = true;
            if (controller_buttons.ANALOG_LEFT_RIGHT.pressed){ AnalogRightUp() }
            else if (controller_buttons.ANALOG_LEFT_LEFT.pressed){ AnalogLeftUp() }
            else{
                AnalogUp();
            }
        break;
        case 'ANALOG_LEFT_DOWN':
            resetAnalogFromOppositePosition('ANALOG_LEFT_DOWN');
            controller_buttons.ANALOG_LEFT_DOWN.pressed = true;
            if (controller_buttons.ANALOG_LEFT_RIGHT.pressed){ AnalogRightDown(); }
            else if (controller_buttons.ANALOG_LEFT_LEFT.pressed){ AnalogLeftDown(); }
            else{
                AnalogDown();
            }
        break;
        case 'ANALOG_RIGHT_RIGHT':
            resetAnalogFromOppositePosition('ANALOG_RIGHT_RIGHT');
            controller_buttons.ANALOG_RIGHT_RIGHT.pressed = true;
            console.log(controller_buttons.ANALOG_RIGHT_UP.pressed)
            if (controller_buttons.ANALOG_RIGHT_UP.pressed){ AnalogRightUp('right') }
            else if (controller_buttons.ANALOG_RIGHT_DOWN.pressed){ AnalogRightDown('right') }
            else{
                AnalogRight('right')
            }
        break;
        case 'ANALOG_RIGHT_LEFT':
            resetAnalogFromOppositePosition('ANALOG_RIGHT_LEFT');
            controller_buttons.ANALOG_RIGHT_LEFT.pressed = true;
            if (controller_buttons.ANALOG_RIGHT_UP.pressed){ AnalogLeftUp('right') }
            else if (controller_buttons.ANALOG_RIGHT_DOWN.pressed){ AnalogLeftDown('right') }
            else{
                AnalogLeft('right')
            }
        break;
        case 'ANALOG_RIGHT_UP':
            resetAnalogFromOppositePosition('ANALOG_RIGHT_UP');
            controller_buttons.ANALOG_RIGHT_UP.pressed = true;
            if (controller_buttons.ANALOG_RIGHT_RIGHT.pressed){ AnalogRightUp('right') }
            else if (controller_buttons.ANALOG_RIGHT_LEFT.pressed){ AnalogLeftUp('right') }
            else{
                AnalogUp('right')
            }
        break;
        case 'ANALOG_RIGHT_DOWN':
            resetAnalogFromOppositePosition('ANALOG_RIGHT_DOWN');
            controller_buttons.ANALOG_RIGHT_DOWN.pressed = true;
            if (controller_buttons.ANALOG_RIGHT_RIGHT.pressed){ AnalogRightDown('right') }
            else if (controller_buttons.ANALOG_RIGHT_LEFT.pressed){ AnalogLeftDown('right') }
            else{
                AnalogDown('right')
            }
        break;
        case 'STICK_RIGHT':
            controller_buttons.STICK_RIGHT.pressed = true;
            simulateButtonPress(15)
        break;
        case 'STICK_LEFT':
            controller_buttons.STICK_LEFT.pressed = true;
            simulateButtonPress(14)
        break;
        case 'STICK_UP':
            controller_buttons.STICK_UP.pressed = true;
            simulateButtonPress(12)
        break;
        case 'STICK_DOWN':
            controller_buttons.STICK_DOWN.pressed = true;
            simulateButtonPress(13)
        break;
        case 'A':
            controller_buttons.A.pressed = true;
            simulateButtonPress(0)
        break;
        case 'B':
            controller_buttons.B.pressed = true;
            simulateButtonPress(1)
        break;
        case 'X':
            controller_buttons.X.pressed = true;
            simulateButtonPress(2)
        break;
        case 'Y':
            controller_buttons.Y.pressed = true;
            simulateButtonPress(3)
        break;
        case 'START':
            controller_buttons.START.pressed = true;
            simulateButtonPress(9)
        break;
        case 'SELECT':
            controller_buttons.SELECT.pressed = true;
            simulateButtonPress(8)
        break;
        case 'LT':
            controller_buttons.LT.pressed = true;
            simulateButtonPress(6)
        break;
        case 'LB':
            controller_buttons.LB.pressed = true;
            simulateButtonPress(4)
        break;
        case 'RT':
            controller_buttons.RT.pressed = true;
            simulateButtonPress(7)
        break;
        case 'RB':
            controller_buttons.RB.pressed = true;
            simulateButtonPress(5)
        break;
    }
  

});

function resetAnalogFromOppositePosition(current_position){
    switch(current_position){
        case 'ANALOG_LEFT_RIGHT':
            controller_buttons.ANALOG_LEFT_LEFT.pressed = false;
        break;
        case 'ANALOG_LEFT_LEFT':
            controller_buttons.ANALOG_LEFT_RIGHT.pressed = false;
        break;
        case 'ANALOG_LEFT_UP':
            controller_buttons.ANALOG_LEFT_UP.pressed = false;
        break;
        case 'ANALOG_LEFT_DOWN':
            controller_buttons.ANALOG_LEFT_DOWN.pressed = false;
        break;
        case 'ANALOG_RIGHT_RIGHT':
            controller_buttons.ANALOG_RIGHT_LEFT.pressed = false;
        break;
        case 'ANALOG_RIGHT_LEFT':
            controller_buttons.ANALOG_RIGHT_RIGHT.pressed = false;
        break;
        case 'ANALOG_RIGHT_UP':
            controller_buttons.ANALOG_RIGHT_UP.pressed = false;
        break;
        case 'ANALOG_RIGHT_DOWN':
            controller_buttons.ANALOG_RIGHT_DOWN.pressed = false;
        break;
    }
}

const controller_buttons = {
    ANALOG_LEFT_RIGHT:{pressed: false},
    ANALOG_LEFT_LEFT:{pressed: false},
    ANALOG_LEFT_UP:{pressed: false},
    ANALOG_LEFT_DOWN:{pressed: false},
    ANALOG_RIGHT_RIGHT:{pressed: false},
    ANALOG_RIGHT_LEFT:{pressed: false},
    ANALOG_RIGHT_UP:{pressed: false},
    ANALOG_RIGHT_DOWN:{pressed: false},
    STICK_RIGHT:{pressed: false},
    STICK_LEFT:{pressed: false},
    STICK_UP:{pressed: false},
    STICK_DOWN:{pressed: false},
    A:{pressed: false},
    B:{pressed: false},
    X:{pressed: false},
    Y:{pressed: false},
    START:{pressed: false},
    SELECT:{pressed: false},
    LT:{pressed: false},
    LB:{pressed: false},
    RT:{pressed: false},
    RB:{pressed: false}
}

const keyboard_keycodes = {
    8:{key: 'backspace', controller_button:'B'},
    9:{key: 'tab', controller_button:''},
    13:{key: 'enter', controller_button:'A'},
    16:{key: 'shift', controller_button:'X'},
    17:{key: 'ctrl', controller_button:'Y'},
    18:{key: 'alt', controller_button:''},
    19:{key: 'pause/break', controller_button:''},
    20:{key: 'caps lock', controller_button:''},
    27:{key: 'escape', controller_button:''},
    33:{key: 'page up', controller_button:''},
    32:{key: 'space', controller_button:''},
    34:{key: 'page down', controller_button:''},
    35:{key: 'end', controller_button:''},
    36:{key: 'home', controller_button:''},
    37:{key: 'arrow left', controller_button:'STICK_LEFT'},
    38:{key: 'arrow up', controller_button:'STICK_UP'},
    39:{key: 'arrow right', controller_button:'STICK_RIGHT'},
    40:{key: 'arrow down', controller_button:'STICK_DOWN'},
    44:{key: 'print screen', controller_button:''},
    45:{key: 'insert', controller_button:''},
    46:{key: 'delete', controller_button:''},
    48:{key: '0', controller_button:''},
    49:{key: '1', controller_button:'START'},
    50:{key: '2', controller_button:'SELECT'},
    51:{key: '3', controller_button:''},
    52:{key: '4', controller_button:''},
    53:{key: '5', controller_button:''},
    54:{key: '6', controller_button:''},
    55:{key: '7', controller_button:''},
    56:{key: '8', controller_button:''},
    57:{key: '9', controller_button:''},
    65:{key: 'a', controller_button:'ANALOG_LEFT_LEFT'},
    66:{key: 'b', controller_button:''},
    67:{key: 'c', controller_button:''},
    68:{key: 'd', controller_button:'ANALOG_LEFT_RIGHT'},
    69:{key: 'e', controller_button:''},
    70:{key: 'f', controller_button:''},
    71:{key: 'g', controller_button:''},
    72:{key: 'h', controller_button:''},
    73:{key: 'i', controller_button:'RB'},
    74:{key: 'j', controller_button:'LT'},
    75:{key: 'k', controller_button:'RT'},
    76:{key: 'l', controller_button:''},
    77:{key: 'm', controller_button:''},
    78:{key: 'n', controller_button:''},
    79:{key: 'o', controller_button:''},
    80:{key: 'p', controller_button:''},
    81:{key: 'q', controller_button:''},
    82:{key: 'r', controller_button:''},
    83:{key: 's', controller_button:'ANALOG_LEFT_DOWN'},
    84:{key: 't', controller_button:''},
    85:{key: 'u', controller_button:'LB'},
    86:{key: 'v', controller_button:''},
    87:{key: 'w', controller_button:'ANALOG_LEFT_UP'},
    88:{key: 'x', controller_button:''},
    89:{key: 'y', controller_button:''},
    90:{key: 'z', controller_button:''},
    91:{key: 'left windown key', controller_button:''},
    92:{key: 'right window key', controller_button:''},
    93:{key: 'select key', controller_button:''},
    96:{key: 'numpad 0', controller_button:''},
    97:{key: 'numpad 1', controller_button:''},
    98:{key: 'numpad 2', controller_button:''},
    99:{key: 'numpad 3', controller_button:''},
    100:{key: 'numpad 4', controller_button:'ANALOG_RIGHT_LEFT'},
    101:{key: 'numpad 5', controller_button:'ANALOG_RIGHT_DOWN'},
    102:{key: 'numpad 6', controller_button:'ANALOG_RIGHT_RIGHT'},
    103:{key: 'numpad 7', controller_button:''},
    104:{key: 'numpad 8', controller_button:'ANALOG_RIGHT_UP'},
    105:{key: 'numpad 9', controller_button:''},
    106:{key: 'multiply', controller_button:''},
    107:{key: 'add', controller_button:''},
    109:{key: 'subtract', controller_button:''},
    110:{key: 'decimal point', controller_button:''},
    111:{key: 'divide', controller_button:''},
    112:{key: 'f1', controller_button:''},
    113:{key: 'f2', controller_button:''},
    114:{key: 'f3', controller_button:''},
    115:{key: 'f4', controller_button:''},
    116:{key: 'f5', controller_button:''},
    117:{key: 'f6', controller_button:''},
    118:{key: 'f7', controller_button:''},
    119:{key: 'f8', controller_button:''},
    120:{key: 'f9', controller_button:''},
    121:{key: 'f10', controller_button:''},
    122:{key: 'f11', controller_button:''},
    123:{key: 'f12', controller_button:''},
    144:{key: 'num lock', controller_button:''},
    145:{key: 'scroll lock', controller_button:''},
    182:{key: 'My Computer', controller_button:''},
    183:{key: 'My Calculator', controller_button:''},
    186:{key: 'semi-colon', controller_button:''},
    187:{key: 'equal sign', controller_button:''},
    188:{key: 'comma', controller_button:''},
    189:{key: 'dash', controller_button:''},
    190:{key: 'period', controller_button:''},
    191:{key: 'forward slash', controller_button:''},
    219:{key: 'open bracket', controller_button:''},
    220:{key: 'back slash', controller_button:''},
    221:{key: 'close bracket', controller_button:''},
    222:{key: 'single quote', controller_button:''}
}
  
function simulateButtonPress(buttonIndex) {
    fakeController.buttons[buttonIndex].pressed = true;
    fakeController.buttons[buttonIndex].value = 1;
    fakeController.timestamp = performance.now();
}

function simulateButtonUnpress(buttonIndex) {
    fakeController.buttons[buttonIndex].touched = false;
    fakeController.buttons[buttonIndex].pressed = false;
    fakeController.buttons[buttonIndex].value = 0;
    fakeController.timestamp = performance.now();
}

function AnalogUp(analog_position){

    let x_index = 0;
    let y_index = 1;

    if (analog_position == 'right'){
        x_index = 2;
        y_index = 3;
    }

    fakeController.axes[x_index] = 0;
    fakeController.axes[y_index] = -1;
    
     simulateButtonPress(16);
    
}

function AnalogDown(analog_position){

    let x_index = 0;
    let y_index = 1;

    if (analog_position == 'right'){
        x_index = 2;
        y_index = 3;
    }

    fakeController.axes[x_index] = 0;
    fakeController.axes[y_index] = 1;
    
     simulateButtonPress(16);
    
}

function AnalogLeft(analog_position){

    let x_index = 0;
    let y_index = 1;

    if (analog_position == 'right'){
        x_index = 2;
        y_index = 3;
    }

    fakeController.axes[x_index] = -1;
    fakeController.axes[y_index] = 0;
    
     simulateButtonPress(16);
    
}

function AnalogRight(analog_position){

    let x_index = 0;
    let y_index = 1;

    if (analog_position == 'right'){
        x_index = 2;
        y_index = 3;
    }

    fakeController.axes[x_index] = 1;
    fakeController.axes[y_index] = 0;
    
     simulateButtonPress(16);
    
}

function AnalogRightUp(analog_position){

    let x_index = 0;
    let y_index = 1;

    if (analog_position == 'right'){
        x_index = 2;
        y_index = 3;
    }

    fakeController.axes[x_index] = 1;
    fakeController.axes[y_index] = -1;
    
     simulateButtonPress(16);
    
}

function AnalogRightDown(analog_position){

    let x_index = 0;
    let y_index = 1;

    if (analog_position == 'right'){
        x_index = 2;
        y_index = 3;
    }

    fakeController.axes[x_index] = 1;
    fakeController.axes[y_index] = 1;
    
     simulateButtonPress(16);
    
}

function AnalogLeftUp(analog_position){

    let x_index = 0;
    let y_index = 1;

    if (analog_position == 'right'){
        x_index = 2;
        y_index = 3;
    }

    fakeController.axes[x_index] = -1;
    fakeController.axes[y_index] = -1;
    
     simulateButtonPress(16);
    
}

function AnalogLeftDown(analog_position){

    let x_index = 0;
    let y_index = 1;

    if (analog_position == 'right'){
        x_index = 2;
        y_index = 3;
    }

    fakeController.axes[x_index] = -1;
    fakeController.axes[y_index] = 1;
    
     simulateButtonPress(16);
    
}

function ResetAnalog(analog_position){

    let x_index = 0;
    let y_index = 1;

    if (analog_position == 'right'){
        x_index = 2;
        y_index = 3;
    }

    fakeController.axes[x_index] = 0;
    fakeController.axes[y_index] = 0;
    
    simulateButtonPress(16);
    
}
  
const event = new Event('gamepadconnected');
fakeController.connected = true;
fakeController.timestamp = performance.now();
event.gamepad = fakeController;
navigator.getGamepads = function getGamepads() {
    return [{ ...fakeController }]
};
window.dispatchEvent(event);
