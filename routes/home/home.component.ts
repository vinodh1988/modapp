import { Component, OnInit } from '@angular/core';
import {info,information} from '../../data/info';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
information:info[];
  constructor() {
      this.information=information;
   }

  ngOnInit() {
  }

}
