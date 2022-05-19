import { randomUUID } from "crypto";
import { IPlant } from "../../interfaces/IPlant";
import { IPlantSpecialCare } from "../../interfaces/IPlantSpecialCare";

export class Plant {
  public readonly id: string;
  public breed: string;
  public size: number;
  public needsSun: boolean;
  public origin: string;
  public specialCare?: IPlantSpecialCare;

  constructor(props: Omit<IPlant, 'id'>, id?: string) {
   this.breed = props.breed;
   this.size = props.size;
   this.needsSun = props.needsSun;
   this.origin = props.origin;
   this.specialCare = props.specialCare;

   if(id) {
     this.id = id
     return;
    }
    
    this.id = randomUUID()
  }
}