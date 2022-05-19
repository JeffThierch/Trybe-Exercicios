import { IPlantSpecialCare } from "./IPlantSpecialCare";

export interface IPlant {
  id?: string,
  breed: string,
  needsSun: boolean,
  origin: string,
  size: number,
  specialCare?: IPlantSpecialCare
}