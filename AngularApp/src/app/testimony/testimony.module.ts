import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from 'src/app/shared/shared.module';
import { TestimonyRoutingModule } from './testimony-routing.module';
import { MainComponent } from './main/main.component';
import {CarouselModule} from 'primeng/carousel';
import { PaginateDirective } from './directive/paginate.directive';

@NgModule({
  declarations: [
    MainComponent,
    PaginateDirective
  ],
  imports: [
    CommonModule,
    TestimonyRoutingModule,
    SharedModule,
    CarouselModule
  ],
  exports: [
    MainComponent
  ]
})
export class TestimonyModule { }
