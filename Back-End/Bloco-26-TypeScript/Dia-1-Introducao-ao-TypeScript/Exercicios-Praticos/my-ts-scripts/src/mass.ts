enum ConversionValuesInGrams {
  kg = 1000,
  hg = 100,
  dag = 10,
  g = 1,
  dg = 0.1,
  cg = 0.01,
  mg = 0.001,
}

type MassUnits = "kg" | "hg" | "dag" | "g" | "dg" | "cg" | "mg"

export function convert (value: number, baseUnity: MassUnits, convertUnity: MassUnits): string {
  const convertedValue = (value / ConversionValuesInGrams[baseUnity]) * ConversionValuesInGrams[convertUnity];

  return `${convertedValue} ${convertUnity}`;
};