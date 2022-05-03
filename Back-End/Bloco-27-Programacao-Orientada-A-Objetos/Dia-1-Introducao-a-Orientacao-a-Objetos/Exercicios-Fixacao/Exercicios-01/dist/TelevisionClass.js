"use strict";
class Tv {
    brand;
    size;
    resolution;
    connections;
    connectedTo;
    constructor(brand, size, resolution, connections) {
        this.brand = brand;
        this.size = size;
        this.connections = connections;
        this.resolution = resolution;
    }
    turnOn() {
        console.log(JSON.stringify({
            brand: this.brand,
            size: this.size,
            resolution: this.resolution,
            connections: this.connections
        }, null, 2));
    }
}
const tv1 = new Tv('Samsung', 65, "4k", ['HDMI', 'Ethernet']);
tv1.turnOn();
