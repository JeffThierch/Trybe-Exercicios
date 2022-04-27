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

export function convert(value: number, baseUnity: CubicUnits, convertUnity: CubicUnits): string {
  const convertedValue = (value * ConversionValuesInCubicValues[baseUnity]) / ConversionValuesInCubicValues[convertUnity];

  return `${convertedValue} ${convertUnity}³`;
};
