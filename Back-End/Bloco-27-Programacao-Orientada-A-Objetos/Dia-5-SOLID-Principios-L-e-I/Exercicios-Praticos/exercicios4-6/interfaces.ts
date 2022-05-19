// ./interfaces.ts
export interface IVehicle {
  drive(): void;
}

export interface IAirPlane {
  fly(): void;
}

export interface IFuturisticVehicle extends IVehicle, IAirPlane {}