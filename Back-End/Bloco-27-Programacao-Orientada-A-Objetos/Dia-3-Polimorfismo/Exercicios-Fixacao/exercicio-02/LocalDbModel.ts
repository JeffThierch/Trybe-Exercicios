import { db, DbCharacter, Character } from "./Character";
import IModel from "./IModel";

export class LocalDbModel implements IModel {
  findIndexById = (id: number) => {
    const index = db.findIndex((character) => character.id === id)
    if(index < 0) {
      throw new Error('Character not found.')
    }

    return index;
  }
  async delete(id: number) {
      const dbCharacterIndex = this.findIndexById(id);

      const deletedItem = db.splice(dbCharacterIndex, 1);

      if(deletedItem.length > 0) {
        return true;
      }

      return false;
  }

  async update(id: number, character: DbCharacter) {
    const dbCharacterIndex = this.findIndexById(id);

    db[dbCharacterIndex] = {...db[dbCharacterIndex], ...character};

    return db[dbCharacterIndex];
  }

  async create(character: Character) {
      const lastId = db.length > 0 ? db[db.length - 1].id : 0;

      const newCharacter = {id: lastId + 1, ...character};

      db.push(newCharacter);

      return newCharacter;
  }

  async getAll() {
      return db;
  }

  async getById(id: number) {
      const indexToGet = this.findIndexById(id);

      return db[indexToGet];
  }
}