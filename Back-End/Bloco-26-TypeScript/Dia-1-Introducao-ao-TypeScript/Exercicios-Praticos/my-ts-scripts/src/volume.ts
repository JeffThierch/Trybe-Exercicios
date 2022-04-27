import readlineSync from 'readline-sync';

enum ConversionValuesInCubicValues {
  km = 10 ** 9,
  hm = 10 ** 6,
  dam = 10 ** 3,
  m = 1 ** 3,
  dm = 10 ** -3,
  cm = 10 ** -6,
  mm = 10 ** -9,
}

type CubicUnits = "km" | "hm" | "dam" | "m" | 'dm' | 'cm' | 'mm'

function convert(value: number, baseUnity: CubicUnits, convertUnity: CubicUnits): string {
  const convertedValue = (value * ConversionValuesInCubicValues[baseUnity]) / ConversionValuesInCubicValues[convertUnity];

  return `${convertedValue} ${convertUnity}³`;
};

function exec(): void {
  const avalibleUnits: CubicUnits[] = ["km", "hm", "dam", "m", 'dm', 'cm', 'mm'];

  const value = readlineSync.questionFloat('Enter a value: ');
  const baseUnity = readlineSync.keyInSelect(avalibleUnits, 'Chose the base unity:');
  const convertUnity = readlineSync.keyInSelect(avalibleUnits, 'Chose the convert unity:');
  
  const convertedValue = convert(value, avalibleUnits[baseUnity] , avalibleUnits[convertUnity]);

  console.log(`${value}${avalibleUnits[baseUnity]}³ e igual a ${convertedValue}`);
};

exec();
