import { AlertStatus } from './alert-status.enum';

export class Alert {

  constructor(
    public index: number,
    public message: string,
    public alertStatus: AlertStatus) { }

}
