import readlineSync from 'readline-sync';

type AvalibleScripts = "Area Conversion" | "Length Conversion" | "Mass Conversion" | "Volume Conversion"

function exec(): void {
  const avalibleScripts: AvalibleScripts[] = ["Area Conversion", "Length Conversion", "Mass Conversion", "Volume Conversion"];

  const script = readlineSync.keyInSelect(avalibleScripts, 'Chose the script you need:');

  switch(true) {
    case script === 0:
      require('../dist/area')
    case script === 1:
      require('../dist/length')
    case script === 2:
      require('../dist/mass')
    case script === 3:
      require('../dist/volume')
    default:
      console.log('Until Later...');
  }
}

exec()