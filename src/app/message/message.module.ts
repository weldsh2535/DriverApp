import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagePageRoutingModule } from './message-routing.module';

import { MessagePage } from './message.page';
// import { AutosizeModule } from 'ngx-autosize';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagePageRoutingModule,
    ReactiveFormsModule,
    // AutosizeModule
  ],
  declarations: [MessagePage]
})
export class MessagePageModule {}
