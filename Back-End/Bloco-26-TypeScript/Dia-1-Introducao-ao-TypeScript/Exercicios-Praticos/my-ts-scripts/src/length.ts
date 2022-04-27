import readlineSync from 'readline-sync';

enum ConversionValuesInMeters {
  km = 1000,
  hm = 100,
  dam = 10,
  m = 1,
  dm = 0.1,
  cm = 0.01,
  mm = 0.001,
}

type DistanceUnits = "km" | "hm" | "dam" | "m" | 'dm' | 'cm' | 'mm'

function convert (value: number, baseUnity: DistanceUnits, convertUnity: DistanceUnits ): string {
  const convertedValue = (value * ConversionValuesInMeters[baseUnity]) / ConversionValuesInMeters[convertUnity];

  return `${convertedValue} ${convertUnity}`;
}

function exec(): void {
  const avalibleUnits: DistanceUnits[] = ["km", "hm", "dam", "m", 'dm', 'cm', 'mm'];

  const value = readlineSync.questionFloat('Enter a value: ');
  const baseUnity = readlineSync.keyInSelect(avalibleUnits, 'Chose the base unity:');
  const convertUnity = readlineSync.keyInSelect(avalibleUnits, 'Chose the convert unity:');
  
  const convertedValue = convert(value, avalibleUnits[baseUnity] , avalibleUnits[convertUnity]);

  console.log(`${value}${avalibleUnits[baseUnity]} e igual a ${convertedValue}`);
}

exec()

