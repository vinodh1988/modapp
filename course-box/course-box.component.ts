import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'course-box',
  templateUrl: './course-box.component.html',
  styleUrls: ['./course-box.component.css']
})
export class CourseBoxComponent implements OnInit {
@Input('url') url:string;
@Input('name') name:string;

  constructor() { }

  ngOnInit() {
  }

}
