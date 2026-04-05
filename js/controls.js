'use strict';

// Initialize truck movement variables
let isAccelerating = false;
let isBraking = false;
let direction = { x: 0, y: 0 };

// Function to handle keyboard input
function handleKeydown(event) {
    switch (event.key) {
        case 'w': // Move forward
            isAccelerating = true;
            break;
        case 's': // Move backward
            isBraking = true;
            break;
        case 'a': // Turn left
            direction.x = -1;
            break;
        case 'd': // Turn right
            direction.x = 1;
            break;
    }
}

function handleKeyup(event) {
    switch (event.key) {
        case 'w':
            isAccelerating = false;
            break;
        case 's':
            isBraking = false;
            break;
        case 'a':
        case 'd':
            direction.x = 0;
            break;
    }
}

// Event listeners for key down and up
window.addEventListener('keydown', handleKeydown);
window.addEventListener('keyup', handleKeyup);

// Truck movement update loop
function update() {
    if (isAccelerating) {
        moveTruck(1); // Acceleration logic
    }
    if (isBraking) {
        moveTruck(-1); // Braking logic
    }
    // Logic to handle turning
    turnTruck(direction.x);
    requestAnimationFrame(update);
}

function moveTruck(amount) {
    // Implement truck movement logic based on acceleration
}

function turnTruck(direction) {
    // Implement truck turning logic
}

// Start the update loop
requestAnimationFrame(update);
