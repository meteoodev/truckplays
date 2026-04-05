// shop.js

class Shop {
    constructor() {
        this.trucks = [];
        this.currency = 0;
    }

    addTruck(truck) {
        this.trucks.push(truck);
    }

    purchaseTruck(truckName) {
        const truck = this.trucks.find(t => t.name === truckName);
        if (!truck) { 
            console.log('Truck not found!');
            return;
        }

        if (this.currency >= truck.price) {
            this.currency -= truck.price;
            console.log(`Purchased ${truck.name}`);
        } else {
            console.log('Not enough currency!');
        }
    }

    earnCurrency(amount) {
        this.currency += amount;
        console.log(`Earned ${amount} currency. Total: ${this.currency}`);
    }

    displayTrucks() {
        console.log('Available Trucks:');
        this.trucks.forEach(truck => {
            console.log(`- ${truck.name}: ${truck.price} currency`);
        });
    }
}

// Example usage:
const shop = new Shop();
shop.addTruck({ name: 'Truck A', price: 100 });
shop.addTruck({ name: 'Truck B', price: 150 });
shop.earnCurrency(200);
shop.displayTrucks();
shop.purchaseTruck('Truck A');
shop.displayTrucks();