import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-slideunit',
  templateUrl: './slideunit.component.html',
  styleUrls: ['./slideunit.component.css']
})
export class SlideunitComponent implements OnInit {
@Input('url') url:string;
@Input('name') cname:string;
  constructor() { }

  ngOnInit() {
  }

}
