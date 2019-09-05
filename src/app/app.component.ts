import { Component } from '@angular/core';
import { ApiCallsService } from './api-calls.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  files = [];
  toggleDragDrop = true;
  register = {
    userId: '',
    password: ''
  }
  constructor(private httpService: ApiCallsService) { }
}
