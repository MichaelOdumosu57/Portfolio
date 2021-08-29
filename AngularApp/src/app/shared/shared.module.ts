import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import {SharedRoutingModule} from './shared-routing.module';


@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class SharedModule { }
