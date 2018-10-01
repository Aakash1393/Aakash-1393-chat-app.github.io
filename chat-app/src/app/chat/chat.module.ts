import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RemoveSpecialCharPipe} from './../shared/pipe/remove-special-char.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'chat',component:ChatBoxComponent}
    ]),
    SharedModule
  ],
  declarations: [ChatBoxComponent,RemoveSpecialCharPipe]
})
export class ChatModule { }
