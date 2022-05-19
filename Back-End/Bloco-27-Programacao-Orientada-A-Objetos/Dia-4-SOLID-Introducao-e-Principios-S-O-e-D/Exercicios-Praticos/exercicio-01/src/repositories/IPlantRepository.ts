import { IPlant } from "../../interfaces/IPlant";
import { Plant } from "../entities/Plant";

export interface IPlantsRepository {
  getPlants(): Promise<Plant[]>;
  getPlantById(id: string): Promise<IPlant | null>;
  removePlantById(id: string): Promise<IPlant | null>;
  getPlantsThatNeedsSunWithId(id: string): Promise<IPlant[]>;
  editPlant(id: string, newPlant: IPlant): Promise<IPlant>
  savePlant(plant: IPlant): Promise<IPlant>;
}