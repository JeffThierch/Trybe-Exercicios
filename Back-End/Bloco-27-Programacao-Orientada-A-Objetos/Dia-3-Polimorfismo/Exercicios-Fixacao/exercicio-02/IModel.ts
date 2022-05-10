import { DbCharacter, Character } from "./Character";

export default interface IModel {
  create(character: Character): Promise<DbCharacter>;
  getAll(): Promise<DbCharacter[]>;
  getById(id: number): Promise<DbCharacter>
  update(id: number, character: Character): Promise<DbCharacter>;
  delete(id: number): Promise<boolean>;
}