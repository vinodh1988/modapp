import { Injectable } from '@angular/core';
interface  block
{
  block:string;
  type:string;
}
@Injectable()
export class CourselistService {
private blocks:block[]=[
  {
    block:"Oracle courses",
    type: "Oracle"
  },
  {
    block: "Java Technology Courses",
    type:"Java"
  },
  {
    block:"Web Technology and Mobile Courses",
    type:"UI and Mobile"
  },
  {
    block:"Application Development and Scripting courses",
    type:"Application"
  },
  {
    block:"System Administration and Scripting courses",
    type:"System"
  }

]


  constructor() { }

  public getBlocks():block[]
  {
    return this.blocks;
  }
}
