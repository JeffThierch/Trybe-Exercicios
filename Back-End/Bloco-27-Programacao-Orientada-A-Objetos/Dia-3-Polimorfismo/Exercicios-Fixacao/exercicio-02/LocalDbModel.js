"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalDbModel = void 0;
const Character_1 = require("./Character");
class LocalDbModel {
    constructor() {
        this.findIndexById = (id) => {
            const index = Character_1.db.findIndex((character) => character.id === id);
            if (index < 0) {
                throw new Error('Character not found.');
            }
            return index;
        };
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const dbCharacterIndex = this.findIndexById(id);
            const deletedItem = Character_1.db.splice(dbCharacterIndex, 1);
            if (deletedItem.length > 0) {
                return true;
            }
            return false;
        });
    }
    update(id, character) {
        return __awaiter(this, void 0, void 0, function* () {
            const dbCharacterIndex = this.findIndexById(id);
            Character_1.db[dbCharacterIndex] = Object.assign(Object.assign({}, Character_1.db[dbCharacterIndex]), character);
            return Character_1.db[dbCharacterIndex];
        });
    }
    create(character) {
        return __awaiter(this, void 0, void 0, function* () {
            const lastId = Character_1.db.length > 0 ? Character_1.db[Character_1.db.length - 1].id : 0;
            const newCharacter = Object.assign({ id: lastId + 1 }, character);
            Character_1.db.push(newCharacter);
            return newCharacter;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return Character_1.db;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const indexToGet = this.findIndexById(id);
            return Character_1.db[indexToGet];
        });
    }
}
exports.LocalDbModel = LocalDbModel;
