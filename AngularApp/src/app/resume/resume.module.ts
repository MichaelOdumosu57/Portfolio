import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { MainComponent } from './main/main.component';
import { SkillsSunChartDirective } from './directive/skills-sun-chart.directive';
import { DownloadPDFDirective } from './directive/download-pdf.directive';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    SkillsSunChartDirective,
    DownloadPDFDirective,

  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    SharedModule
  ],
  exports: [
    MainComponent
  ]
})
export class ResumeModule { }
