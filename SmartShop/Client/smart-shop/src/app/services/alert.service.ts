import { AlertStatus } from '../models/alerts/alert-status.enum';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Alert } from '../models/alerts/alert';

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    private counter = 0;

    public alert$: Subject<Alert> = new Subject();

    public alert(message: string, alertStatus: AlertStatus) {
        const index = ++this.counter;
        this.alert$.next({index, message, alertStatus});
    }
}
