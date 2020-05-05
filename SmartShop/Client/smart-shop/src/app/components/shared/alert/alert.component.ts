import { Component, OnInit, OnDestroy } from '@angular/core';
import { Alert } from '../../../models/alerts/alert';
import { AlertService } from '../../../services/alert.service';
import {Timer} from '../../../helpers/timer';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {

  private readonly timeout: number = 3000;
  private alertSubscription;
  public alerts: Alert[] = new Array<Alert>();

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertSubscription = this.alertService.alert$
      .subscribe(async alert => {
        const index = alert.index;
        this.alerts.push(alert);
        await Timer.delay(this.timeout);
        this.alerts = this.alerts.filter(x => x.index !== index);
      });
  }

  ngOnDestroy(): void {
   this.alertSubscription.unsubscribe();
  }
}
