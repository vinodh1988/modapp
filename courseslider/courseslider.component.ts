import { Component, OnInit } from '@angular/core';
import {courses,courseslist} from '../data/courses'

@Component({
  selector: 'app-courseslider',
  templateUrl: './courseslider.component.html',
  styleUrls: ['./courseslider.component.css']
})
export class CoursesliderComponent implements OnInit {
current:number=0;
courses:courses[];
  constructor() { 

  }

  ngOnInit() {
    setInterval(()=>{
      this.courses=[];
      this.current++;
      if(this.current==courseslist.length)
        this.current=0;

      for(let x=0,y=this.current;x<12;x++){
          this.courses.push(courseslist[y]);
          y++;
          if(y==courseslist.length)
            y=0;
      }
      
    },5000);
  }

}
