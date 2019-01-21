import { Component, OnInit } from '@angular/core';
import { CourselistService } from '../../services/courselist.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
blocks:object[];
  constructor(private cl:CourselistService) { 
    this.blocks=cl.getBlocks();
  }

  ngOnInit() {
  }

}
