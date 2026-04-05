'use strict';

// Game Initialization
const canvas = document.getElementById('gameCanvas');
const renderer = new THREE.WebGLRenderer({ canvas });

// Scene Setup
const scene = new THREE.Scene();

// Camera Configuration
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1, 5);

// Renderer Setup
renderer.setSize(window.innerWidth, window.innerHeight);

// Game Loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();