import { BloodGroup } from "./BloodGroup.model";
import { Message } from "./Message.model";

export class Patient {
  idpatient!: number;
  name!: string;
  age!: number;
  gender!: string;
  phone!: string;
  address!: string;
  bloodGroup!: BloodGroup;
  message!:Message;
}
