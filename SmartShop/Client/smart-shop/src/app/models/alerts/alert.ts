import { AlertStatus } from './alert-status';
export interface Alert{
    id: number;
    message: string;
    alertStatus: AlertStatus;
}
