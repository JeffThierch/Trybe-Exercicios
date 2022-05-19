import { IPlant } from "../../../interfaces/IPlant";
import { Plant } from "../../entities/Plant";
import { IPlantsRepository } from "../../repositories/IPlantRepository";

export class EditPlantUseCase {
  constructor(
    private plantRepository: IPlantsRepository
  ) {};

  async execute(id: string, data: IPlant): Promise<IPlant> {
    const newPlant = new Plant(data, id)

    const editedPlant = await this.plantRepository.editPlant(id, newPlant)

    return editedPlant
  }
}