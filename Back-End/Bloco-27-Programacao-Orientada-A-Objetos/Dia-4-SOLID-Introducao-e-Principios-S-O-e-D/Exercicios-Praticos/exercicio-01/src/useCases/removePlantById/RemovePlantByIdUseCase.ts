import { IPlant } from "../../../interfaces/IPlant";
import { IPlantsRepository } from "../../repositories/IPlantRepository";

export class RemovePlantByIdUseCase {
  constructor(
    private plantRepository: IPlantsRepository
  ) {};

  async execute(id: string): Promise<IPlant | null> {
    const plant = await this.plantRepository.removePlantById(id)

    return plant
  }
}