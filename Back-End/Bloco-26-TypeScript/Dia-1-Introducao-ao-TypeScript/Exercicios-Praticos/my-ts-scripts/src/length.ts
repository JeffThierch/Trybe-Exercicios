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

export function convert (value: number, baseUnity: DistanceUnits, convertUnity: DistanceUnits ): string {
  const convertedValue = (value * ConversionValuesInMeters[baseUnity]) / ConversionValuesInMeters[convertUnity];

  return `${convertedValue} ${convertUnity}`;
}
