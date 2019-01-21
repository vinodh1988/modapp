import { Component, OnInit,Input } from '@angular/core';
import  {info} from '../data/info';
@Component({
  selector: 'app-infobox',
  templateUrl: './infobox.component.html',
  styleUrls: ['./infobox.component.css']
})
export class InfoboxComponent implements OnInit {
@Input("info") information:info;
  constructor() { }

  ngOnInit() {
  }

}
