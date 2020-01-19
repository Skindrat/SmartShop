import { AlertStatus } from '../models/alerts/alert-status';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertService } from '../services/alert.service';
import {interval, from} from 'rxjs';
import { Alert } from '../models/alerts/alert';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {

  // todo: add queue of alerts
  // https://stackblitz.com/edit/angular-8-alerts?file=app%2F_alert%2Falert.service.ts

  readonly timeout: number = 3000;

  alerts: Alert[] = new Array<Alert>();

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.alert$
    .subscribe(async message => await this.showAlert(message));
  }

  ngOnDestroy(): void {
    this.alertService.alert$.unsubscribe();
  }

  private async delay(ms: number) {
    return await new Promise(resolve => setTimeout(resolve, ms));
  }

  private async showAlert(newAlert: Alert) {
    const id = newAlert.id;
    this.alerts.push(newAlert);

    await this.delay(3000);

    this.alerts = this.alerts.filter(x => x.id !== id);
  }

}
