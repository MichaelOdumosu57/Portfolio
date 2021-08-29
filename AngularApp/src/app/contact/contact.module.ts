import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ColorfallDirective } from './directive/colorfall.directive';


@NgModule({
  declarations: [
    MainComponent,
    ColorfallDirective,
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ],
  exports: [
    MainComponent
  ]
})
export class ContactModule { }
