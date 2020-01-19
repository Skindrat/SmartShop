import { AlertStatus } from './../models/alerts/alert-status';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Alert } from '../models/alerts/alert';

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    private counter: number = 0;

    public alert$: Subject<Alert> = new Subject();

    public alert(message: string, alertStatus: AlertStatus) {
        const id = ++this.counter;
        this.alert$.next({id, message, alertStatus});
    }
}
