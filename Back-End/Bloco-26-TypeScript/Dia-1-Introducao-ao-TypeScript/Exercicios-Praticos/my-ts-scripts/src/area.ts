import readlineSync from 'readline-sync';

enum ConversionValuesInSquareMeter {
  km = 10 ** 6,
  hm = 10 ** 4,
  dam = 10 ** 2,
  m = 1 ** 2,
  dm = 10 ** -2,
  cm = 10 ** -4,
  mm = 10 ** -6,
}

type DistanceUnits = "km" | "hm" | "dam" | "m" | 'dm' | 'cm' | 'mm';

function convert(value: number, baseUnity: DistanceUnits, convertUnity: DistanceUnits): string {
  const convertedValue = (value * ConversionValuesInSquareMeter[baseUnity]) / ConversionValuesInSquareMeter[convertUnity];

  return `${convertedValue} ${convertUnity}²`;
};

function exec(): void {
  const avalibleUnits: DistanceUnits[] = ["km", "hm", "dam", "m", 'dm', 'cm', 'mm'];

  const value = readlineSync.questionFloat('Enter a value: ');
  const baseUnity = readlineSync.keyInSelect(avalibleUnits, 'Chose the base unity:');
  const convertUnity = readlineSync.keyInSelect(avalibleUnits, 'Chose the convert unity:');
  
  const convertedValue = convert(value, avalibleUnits[baseUnity] , avalibleUnits[convertUnity]);

  console.log(`${value}${avalibleUnits[baseUnity]}² e igual a ${convertedValue}`);
}

exec()
