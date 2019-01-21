import { Injectable } from '@angular/core';
import {courses,courseslist} from '../data/courses';
@Injectable()
export class CourseService {
 
  constructor() { }

  getCourses(){
     return courseslist;
  }
}
