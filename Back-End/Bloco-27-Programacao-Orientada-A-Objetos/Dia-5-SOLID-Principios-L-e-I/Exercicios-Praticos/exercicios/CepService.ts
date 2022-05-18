// ./CepService.ts
import FooCepAPI from './FooCepAPI';
import ICepAPI from './ICepAPI';

class CepService {
  private readonly cepApi: ICepAPI;

  constructor(cepAPI: ICepAPI) {
    this.cepApi = cepAPI;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;