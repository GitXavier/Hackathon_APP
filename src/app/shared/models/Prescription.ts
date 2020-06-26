
export class Prescription {
  id: number;
  quantity: number;
  frequency: number;
  duration: number;
  startDate: Date;
  moment: String;
  hours: Date;
  comment: String;
  pillDispenser: object[];
  drug: object[];

  constructor(){}
}
