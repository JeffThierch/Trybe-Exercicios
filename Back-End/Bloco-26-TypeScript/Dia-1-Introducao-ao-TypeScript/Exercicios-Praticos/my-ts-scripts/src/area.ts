enum ConversionValuesInSquareMeter {
  km = 10 ** 6,
  hm = 10 ** 4,
  dam = 10 ** 2,
  m = 1 ** 2,
  dm = 10 ** -2,
  cm = 10 ** -4,
  mm = 10 ** -6,
}

type DistanceUnits = "km" | "hm" | "dam" | "m" | 'dm' | 'cm' | 'mm'

export function convert(value: number, baseUnity: DistanceUnits, convertUnity: DistanceUnits): string {
  const convertedValue = (value * ConversionValuesInSquareMeter[baseUnity]) / ConversionValuesInSquareMeter[convertUnity];

  return `${convertedValue} ${convertUnity}²`;
};
