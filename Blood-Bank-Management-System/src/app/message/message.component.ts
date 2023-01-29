import { Component, OnInit } from '@angular/core';
import { Message } from 'src/model/Message.model';
import { RequestService } from '../Service/request.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messages!: Message[];

  constructor(private requestService:RequestService) { }

  ngOnInit(): void {
    this.requestService.getMessagesByPatientId(7).subscribe((data) => {
      this.messages = data;
      console.log(this.messages);
    });
  }

}
