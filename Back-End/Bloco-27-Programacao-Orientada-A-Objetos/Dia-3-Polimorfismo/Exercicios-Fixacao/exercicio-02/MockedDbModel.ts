import { Character, DbCharacter } from "./Character";
import IModel from "./IModel";

export class MockedDbModel implements IModel {
  async delete(id: number): Promise<boolean> {
      console.log('Character deleted');

      return true;
  }

  async update(id: number, character: Character): Promise<DbCharacter> {
    console.log('Character updated');

    return { id: 1, name: 'P01', specialMove: 'Attack01' }
  }

  async create(character: Character): Promise<DbCharacter> {
    console.log('Character create');

    return { id: 1, name: 'P01', specialMove: 'Attack01' }
  }

  async getAll(): Promise<DbCharacter[]> {
    console.log('All characters');

    return [
      { id: 1, name: 'P01', specialMove: 'Attack01' },
      { id: 2, name: 'P02', specialMove: 'Attack02' }
    ]
  }

  async getById(id: number): Promise<DbCharacter> {
    console.log(`Character with id: ${id}`);

    return { id: 1, name: 'P01', specialMove: 'Attack01' }
  }
}