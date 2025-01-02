const fakeGamepad = {
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
        }
    ],
    connected: false,
    id: 'Xbox 360 Controller (XInput STANDARD GAMEPAD)',
    index: 0,
    mapping: 'standard',
    timestamp: performance.now(),
    hapticActuators: [],
};

const SetAxes = (x, y) => {

}

/* MOUSE MOVEMENT SCRIPT */

let sensitivity = 10;
let stopMovingTimer;
let requestAnimationFrameEnabled = true; // used for requestAnimationFrame to only trigger at 60fps

let movementX = 0;
let movementY = 0;

const handleMouseMove = () => {
    requestAnimationFrameEnabled = true;
    clearTimeout(stopMovingTimer);
    stopMovingTimer = setTimeout(() => {
        if (setMouseToAnalog == 1){
            fakeController.axes[0] = 0;
            fakeController.axes[1] = 0;
            fakeController.timestamp = performance.now();
            simulateButtonPress(16);
        }else if (setMouseToAnalog == 2){
            fakeController.axes[2] = 0;
            fakeController.axes[3] = 0;
            fakeController.timestamp = performance.now();
            simulateButtonPress(16);
        }
     
    }, 50);
    // trigger the joystick on move
    const clampedX = movementX === 0 ? 0 : Math.max(Math.min(movementX / sensitivity, 1), -1);
    const clampedY = movementY === 0 ? 0 : Math.max(Math.min(movementY / sensitivity, 1), -1);

    console.log(clampedX, clampedY)

    movementX = 0;
    movementY = 0;
    if (setMouseToAnalog == 1){
        fakeController.axes[0] = clampedX;
        fakeController.axes[1] = clampedY;
        fakeController.timestamp = performance.now();
        simulateButtonPress(16);
    }else if (setMouseToAnalog == 2){
        fakeController.axes[2] = clampedX;
        fakeController.axes[3] = clampedY;
        fakeController.timestamp = performance.now();
        simulateButtonPress(16);
    }
};
// Listen to mouse move - only added once pointer lock is engaged
listeners.mousemove = function onMouseMove(e) {
    console.log('move')
    if (enabled){
        const { movementX: mx, movementY: my } = e;
        movementX += mx;
        movementY += my;
        console.log('MouseMove')
        if (requestAnimationFrameEnabled) {
            requestAnimationFrameEnabled = false;
            // Queue processing
            requestAnimationFrame(handleMouseMove);
        }
    }

};

document.addEventListener('mousemove', listeners.mousemove);

/* END MOUSE MOVEMENT SCRIPT */

alert(localStorage.getItem('minhaChave'))