class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[]
  private _connectedTo: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._connections = connections;
    this._resolution = resolution;
    this._connectedTo = ''
  }

  turnOn() {
    console.log(JSON.stringify({ 
     brand: this._brand,
     size: this._size,
     resolution: this._resolution,
     connections: this._connections
    }, null, 2)
    )
  }

  showConnections() {
    console.log(this._connectedTo)
  }

  connect(connection: string) {
    if(this._connections.includes(connection)) {
      return this._connectedTo = connection
    }

    console.log('Sorry, connection unavailable!');
  }


}

const tv1 = new Tv('Samsung', 65, "4k", ['HDMI', 'Ethernet'])

tv1.turnOn()

tv1.connect('HDMI');
tv1.showConnections();