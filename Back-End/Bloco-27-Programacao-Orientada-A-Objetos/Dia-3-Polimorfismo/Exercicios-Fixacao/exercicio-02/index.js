"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MockedDbModel_1 = require("./MockedDbModel");
const LocalDbModel_1 = require("./LocalDbModel");
const CharacterService_1 = require("./CharacterService");
const localModel = new CharacterService_1.CharacterService(new LocalDbModel_1.LocalDbModel());
localModel.getAll().then(console.log);
const mockedModel = new CharacterService_1.CharacterService(new MockedDbModel_1.MockedDbModel());
mockedModel.getAll().then(console.log);
