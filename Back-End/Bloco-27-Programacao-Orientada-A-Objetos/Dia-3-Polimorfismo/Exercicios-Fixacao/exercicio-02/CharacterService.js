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
exports.CharacterService = void 0;
class CharacterService {
    constructor(model) {
        this.model = model;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const allCharacters = yield this.model.getAll();
            return ({ status: 200, data: allCharacters });
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const character = yield this.model.getById(id);
            return ({ status: 200, data: character });
        });
    }
    create(character) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCharacter = yield this.model.create(character);
            return ({ status: 201, data: newCharacter });
        });
    }
    update(id, character) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedCharacter = yield this.model.update(id, character);
            return ({ status: 200, data: updatedCharacter });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.delete(id);
            return ({ status: 200 });
        });
    }
}
exports.CharacterService = CharacterService;
