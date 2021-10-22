import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { MessageService } from '../Service/message.service';
import { SharedService } from '../Service/shared.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  driverId: any;
  customerId: any;
  listOfMessage: any[];
  newMsg: any;
  @ViewChild(IonContent) content:IonContent  
  currentUser: any;
  customerName: any;
    constructor(private sharedService:SharedService,
      private messageService:MessageService){}
   ngOnInit(){
    this.customerName = this.sharedService.getCustomerName().value;
    this.driverId = this.sharedService.getDriverId().value;
    this.customerId = this.sharedService.getCustomerId().value;
    this.currentUser =this.customerId;
    this.getMessage();
   }
  getMessage(){
    this.messageService.getAllMessage().subscribe(res=>{
      let messages = res.filter(c=>c.driverId==localStorage.getItem('userId') 
                              && c.driverId == this.driverId &&  c.userId == this.customerId);
      this.listOfMessage = messages.sort((a,b)=> new Date(a.date).getTime() - new Date(b.date).getTime());
      this.currentUser = localStorage.getItem("userId");
    })
  }
 sendMessage(){
   let data ={
    msgcontent:this.newMsg,
    date:new Date(),
    userId:this.customerId,
    driverId:this.driverId,
    sessionId: localStorage.getItem("userId")
   }
   this.listOfMessage.push(data);
   this.listOfMessage.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  this.messageService.create(data).subscribe(res=>{
    // alert(res.toString());
  });
  this.newMsg = '';
  setTimeout(() => {
    this.content.scrollToBottom(200);
  });
 }
}
