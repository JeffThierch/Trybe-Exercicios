import { exit } from 'process';
import readlineSync from 'readline-sync';

enum YearMonths {
  Janeiro = 1,
  Fevereiro,
  Março,
  Abril,
  Maio,
  Junho,
  Julho,
  Agosto,
  Setembro,
  Outubro,
  Novembro,
  Dezembro,
}

enum SeasonsOfTheYear {
  OUTONO = 'Outono',
  INVERNO = 'Inverno',
  PRIMAVERA = 'Primavera',
  VERAO = 'Verao'
}

const seasonsNorth = {
  [SeasonsOfTheYear.OUTONO]: [YearMonths['9'], YearMonths['10'], YearMonths['11'], YearMonths['12']],
  [SeasonsOfTheYear.INVERNO]: [YearMonths['12'], YearMonths['1'], YearMonths['2'], YearMonths['3']],
  [SeasonsOfTheYear.PRIMAVERA]: [YearMonths['3'], YearMonths['4'], YearMonths['5'], YearMonths['6']],
  [SeasonsOfTheYear.VERAO]: [YearMonths['6'], YearMonths['7'], YearMonths['8'], YearMonths['9']]
}

const seasonsSouth = {
  [SeasonsOfTheYear.OUTONO]: seasonsNorth.Primavera,
  [SeasonsOfTheYear.INVERNO]: seasonsNorth.Verao,
  [SeasonsOfTheYear.PRIMAVERA]: seasonsNorth.Outono,
  [SeasonsOfTheYear.VERAO]: seasonsNorth.Inverno
}

const hemispheres = {
  "North": seasonsNorth,
  "South": seasonsSouth
}

type Hemisphere = 'North' | "South"

function seasonsByHemisphere(month: YearMonths, hemisphere: Hemisphere ): void {
  const selectedMonth = YearMonths[month]

  const hemisphereSeasons = hemispheres[hemisphere]

  console.log(`Month: ${selectedMonth}`);
  console.log(`Hemisphere: ${hemisphere}`);
  console.log('Seasons:')

  Object.entries(hemisphereSeasons).map((entry) => {
    const season = entry[0]
    const months = entry[1]

    if (months.includes(selectedMonth)) {
      console.log(season)
    }
  })

}

function exec(): void {

  const avaliblesHemisphere: Hemisphere[] = ['North', 'South']

  const month = readlineSync.questionInt('Choose a month between 1 - 12: ');
  if (month < 1 || month > 12) {
    console.log('Invalid month, Exiting...')
    exit();
  }
  const hemisphere = readlineSync.keyInSelect(avaliblesHemisphere, 'Choose a hemisphere');

  if (hemisphere === -1) {
    console.log('Exiting...')
    exit();
  }

  seasonsByHemisphere(month, avaliblesHemisphere[hemisphere]);

};

exec();