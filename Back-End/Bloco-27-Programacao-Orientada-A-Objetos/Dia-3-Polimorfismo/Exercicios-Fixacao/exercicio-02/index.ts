import { MockedDbModel } from "./MockedDbModel";
import { LocalDbModel } from "./LocalDbModel";
import { CharacterService } from "./CharacterService";

const localModel = new CharacterService(new LocalDbModel());
localModel.getAll().then(console.log)

const mockedModel = new CharacterService(new MockedDbModel());
mockedModel.getAll().then(console.log)

