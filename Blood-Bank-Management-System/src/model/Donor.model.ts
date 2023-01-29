import { BloodGroup } from './BloodGroup.model';

export class Donor {
  iddonor!: number;
  name!: string;
  age!: number;
  gender!: string;
  phone!: string;
  address!: string;
  bloodGroup!: BloodGroup;
}
