import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroRoutingModule} from './intro-routing.module';
import { SliderComponent } from '../slider/slider.component';



@NgModule({
    declarations: [
        SliderComponent
    ],
    imports: [
        CommonModule,
        IntroRoutingModule
    ],

})
export class IntroModule { }
