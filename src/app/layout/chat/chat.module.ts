import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { ChatRoutingModule } from './chat-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    ChatRoutingModule
  ],
  declarations: [ChatComponent]
})
export class ChatModule { }
