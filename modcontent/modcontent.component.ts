import { Component, OnInit } from '@angular/core';
import {topic} from './topic';
import { ModuleService } from 'app/module.service';
@Component({
  selector: 'modcontent',
  templateUrl: './modcontent.component.html',
  styleUrls: ['./modcontent.component.css']
})
export class ModcontentComponent implements OnInit {
topics:topic[];
  constructor(private ms:ModuleService) { }

  ngOnInit() {
    this.ms.getModule('D80186GC11S').subscribe(
      data=>this.topics=data.topic,
      error=>console.log("No Data received")
    );
  }

  toggleValue(x){
    this.topics[x].expand= this.topics[x].expand=='minus'?'plus':'minus';
    this.topics[x].status=!this.topics[x].status;
  }
}
