import { Component, OnInit, OnDestroy } from '@angular/core';
import { Alert } from '../../../models/alerts/alert';
import { AlertService } from '../../../services/alert.service';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {

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
