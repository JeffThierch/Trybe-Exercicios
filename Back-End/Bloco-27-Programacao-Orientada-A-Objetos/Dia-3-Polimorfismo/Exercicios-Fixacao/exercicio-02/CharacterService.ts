import { Character } from "./Character";
import IModel from "./IModel";

export class CharacterService {
  constructor(readonly model: IModel){}

  async getAll() {
    const allCharacters = await this.model.getAll();

    return ({status: 200, data: allCharacters})
  }

  async getById(id: number) {
    const character = await this.model.getById(id);

    return ({status: 200, data: character});
  }

  async create(character: Character) {
    const newCharacter = await this.model.create(character);

    return ({status: 201, data: newCharacter});
  }

  async update(id: number, character: Character) {
    const updatedCharacter = await this.model.update(id, character);

    return ({status: 200, data: updatedCharacter});
  }

  async delete(id: number) {
    await this.model.delete(id);

    return ({status: 200})
  }
}