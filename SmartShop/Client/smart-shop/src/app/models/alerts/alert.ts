import { AlertStatus } from './alert-status.enum';

export class Alert {

  constructor(
    public id: number,
    public message: string,
    public alertStatus: AlertStatus) { }

}
