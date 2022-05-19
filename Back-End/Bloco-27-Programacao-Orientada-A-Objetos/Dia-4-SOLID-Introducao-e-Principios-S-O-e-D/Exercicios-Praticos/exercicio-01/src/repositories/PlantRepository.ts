import fs from "fs/promises";
import { IOpsInfo } from "../../interfaces/IOpsInfo";
import { IPlant } from "../../interfaces/IPlant";
import { Plant } from "../entities/Plant";
import { IPlantsRepository } from "./IPlantRepository";

export default class plantRepository implements IPlantsRepository {
  async getPlants(): Promise<IPlant[]> {
    const plantsRaw = await fs.readFile('plantsData.json', { encoding: 'utf8' });

    const plants: IPlant[] = JSON.parse(plantsRaw);

    return plants;
  }

  async getPlantById(id: string): Promise<IPlant | null> {
    const plantsRaw = await fs.readFile('plantsData.json', { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const plantById = plants.find((plant) => plant.id === id);

    if (!plantById) return null;

    return plantById;
  }

  async removePlantById(id: string): Promise<IPlant | null> {
    const plantsRaw = await fs.readFile('plantsData.json', { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const removedPlant = plants.find((plant) => plant.id === id);
    if (!removedPlant) return null;

    const newPlants = plants.filter((plant) => plant.id !== id);
    await fs.writeFile('plantsData.json', JSON.stringify(newPlants));

    return removedPlant;
  }

  async getPlantsThatNeedsSunWithId(id: string): Promise<IPlant[]> {
    const plantsRaw = await fs.readFile('plantsData.json', { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const filteredPlants = plants.filter((plant) =>
      plant.id === id
      && plant.needsSun
      && (!plant.specialCare || plant.specialCare.waterFrequency > 2)
    );

    return filteredPlants;
  }

  editPlant(id: string, newPlant: IPlant): Promise<IPlant> {
    throw new Error("Method not implemented.");
  }

  async savePlant(newPlant: IPlant): Promise<IPlant> {
    const plantsRaw = await fs.readFile('plantsData.json', { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    plants.push(newPlant);

    const opsInfoRaw = await fs.readFile('opsInfo.json', { encoding: 'utf8' });
    let { createdPlants }: IOpsInfo = JSON.parse(opsInfoRaw);
    createdPlants += 1;
    await fs.writeFile('opsInfo.json', JSON.stringify({ createdPlants }));

    await fs.writeFile('plantsData.json', JSON.stringify(plants));
    return newPlant;
  }
  
}