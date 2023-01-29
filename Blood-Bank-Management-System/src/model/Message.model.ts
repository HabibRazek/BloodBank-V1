import { Patient } from "./Patient.model";

export class Message {
  idmessage!: number;
  subject!: string;
  message!: string;
  patient!: Patient;
}
