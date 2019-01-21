import { Component } from '@angular/core';
import { CourseService } from './services/course.service';
import { courseslist,courses} from './data/courses'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  courselist:courses[];
  constructor(private cs:CourseService){
     this.courselist=cs.getCourses();
  }
}
