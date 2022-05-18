import ICepAPI from "./ICepAPI";

export default class MockedCepApi implements ICepAPI {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `O endereço para o "CEP:${cep}, n°:${number}" é "endereço mocked"`;
  }

  async getCepByAddress(address: string, number: number): Promise<string> {
    return `O CEP para: "${address}, n°: ${number}" é "CEP mocked"`;
  }
}