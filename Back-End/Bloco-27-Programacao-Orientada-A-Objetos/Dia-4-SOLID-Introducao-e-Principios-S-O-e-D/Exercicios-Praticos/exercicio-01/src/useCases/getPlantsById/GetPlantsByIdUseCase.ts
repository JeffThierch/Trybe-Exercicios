import { IPlant } from "../../../interfaces/IPlant";
import { Plant } from "../../entities/Plant";
import { IPlantsRepository } from "../../repositories/IPlantRepository";

export class GetPlantsByIdUseCase {
  constructor(
    private plantRepository: IPlantsRepository
  ) {};

  async execute(id: string): Promise<IPlant | null> {
    const plant = await this.plantRepository.getPlantById(id)

    return plant
  }
}