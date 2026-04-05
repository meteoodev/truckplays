class UI {
    constructor() {
        this.speed = 0;
        this.fuel = 0;
        this.money = 0;
    }

    updateSpeed(newSpeed) {
        this.speed = newSpeed;
        this.render();
    }

    updateFuel(newFuel) {
        this.fuel = newFuel;
        this.render();
    }

    updateMoney(newMoney) {
        this.money = newMoney;
        this.render();
    }

    render() {
        // Code to update HUD display with speed, fuel, and money
        console.log(`Speed: ${this.speed}, Fuel: ${this.fuel}, Money: ${this.money}`);
    }

    showControlsInstructions() {
        // Display control instructions
        console.log('Control Instructions: ...');
    }

    showShopInterface() {
        // Display shop interface
        console.log('Shop Interface: ...');
    }
}

// Usage example:
const ui = new UI();
ui.updateSpeed(100);
ui.updateFuel(50);
ui.updateMoney(200);
ui.showControlsInstructions();
ui.showShopInterface();
