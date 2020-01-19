import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Output() onLogout = new EventEmitter();
  @Input() userRole: string;
  
  constructor() { }

  ngOnInit() {
  }

  logout() {
    this.onLogout.emit();
  }
}
