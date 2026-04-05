class Player {
    constructor() {
        this.currentTruck = null;
        this.money = 0;
        this.purchasedTrucks = [];
        this.fuel = 100; // Assuming 100 is full fuel level
        this.statistics = {
            distanceTraveled: 0,
            tripsCompleted: 0,
        };
    }

    buyTruck(truck) {
        if (this.money >= truck.price) {
            this.money -= truck.price;
            this.purchasedTrucks.push(truck);
        } else {
            console.log('Not enough money to buy truck.');
        }
    }

    setCurrentTruck(truck) {
        if (this.purchasedTrucks.includes(truck)) {
            this.currentTruck = truck;
        } else {
            console.log('Truck not purchased.');
        }
    }

    drive(distance) {
        if (this.currentTruck) {
            const fuelConsumed = distance / this.currentTruck.fuelEfficiency;
            if (fuelConsumed <= this.fuel) {
                this.fuel -= fuelConsumed;
                this.statistics.distanceTraveled += distance;
                this.statistics.tripsCompleted++;
            } else {
                console.log('Not enough fuel for this trip.');
            }
        } else {
            console.log('No truck selected.');
        }
    }

    refuel(amount) {
        this.fuel += amount;
        // Assuming max fuel level is 100
        if (this.fuel > 100) this.fuel = 100;
    }

    showStats() {
        return {
            money: this.money,
            currentTruck: this.currentTruck,
            fuel: this.fuel,
            statistics: this.statistics,
        };
    }
}

module.exports = Player;