"use strict";
class Tv {
    _brand;
    _size;
    _resolution;
    _connections;
    _connectedTo;
    constructor(brand, size, resolution, connections) {
        this._brand = brand;
        this._size = size;
        this._connections = connections;
        this._resolution = resolution;
        this._connectedTo = '';
    }
    turnOn() {
        console.log(JSON.stringify({
            brand: this._brand,
            size: this._size,
            resolution: this._resolution,
            connections: this._connections
        }, null, 2));
    }
    showConnections() {
        console.log(this._connectedTo);
    }
    connect(connection) {
        if (this._connections.includes(connection)) {
            return this._connectedTo = connection;
        }
        console.log('Sorry, connection unavailable!');
    }
}
const tv1 = new Tv('Samsung', 65, "4k", ['HDMI', 'Ethernet']);
tv1.turnOn();
tv1.connect('HDMI');
tv1.showConnections();
