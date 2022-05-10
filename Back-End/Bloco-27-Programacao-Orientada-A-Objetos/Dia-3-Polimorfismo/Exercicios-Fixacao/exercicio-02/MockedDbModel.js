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
exports.MockedDbModel = void 0;
class MockedDbModel {
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Character deleted');
            return true;
        });
    }
    update(id, character) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Character updated');
            return { id: 1, name: 'P01', specialMove: 'Attack01' };
        });
    }
    create(character) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Character create');
            return { id: 1, name: 'P01', specialMove: 'Attack01' };
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('All characters');
            return [
                { id: 1, name: 'P01', specialMove: 'Attack01' },
                { id: 2, name: 'P02', specialMove: 'Attack02' }
            ];
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Character with id: ${id}`);
            return { id: 1, name: 'P01', specialMove: 'Attack01' };
        });
    }
}
exports.MockedDbModel = MockedDbModel;
