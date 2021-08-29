import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // CLI imports
import { environment as env } from 'src/environments/environment';

if(env.production){

    Object.entries(console)
    .forEach((x,i)=>{
        let [key,val] = x
        if(typeof val === "function"){
            (console[key] as any) = ()=>{}
        }
    })
}
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
