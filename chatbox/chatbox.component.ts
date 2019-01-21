import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {msgbox} from "./msgbox";

@Component({
  selector: 'chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
current:string;
msgs:msgbox[]=[];
visible:boolean=false;
signal:string="";
@ViewChild('scrollMe') private myScrollContainer: ElementRef;

  constructor() { }

  ngOnInit() {
      setInterval(()=>{
this.signal=this.signal.length===10?' .':this.signal+' .';
      },100)
  }
  addMessage(){
   this.msgs.push({class:"you",message:this.current});
  }

  ngAfterViewChecked() {        
    this.scrollToBottom();        
} 

scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
}

changeState():void{
    this.visible=!this.visible;
}

}
