import { Component,Output,Input,ViewChildren, ViewContainerRef, QueryList } from '@angular/core';
import { RyberService } from './ryber.service';
import { combineLatest, of, Subscription } from 'rxjs';
import { delay,take,tap } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';

declare global{
    var Plotly
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {


    // metadata
    subscriptions:Subscription[] = [];
    //


    @ViewChildren('mySlider',{read:ViewContainerRef}) mySlider:QueryList<any>

    constructor(
        public ryber:RyberService,

    ){}


    ngAfterViewInit() {

        let {ryber,mySlider,subscriptions} =this
        let {router} = ryber
        // immediatly navigate to the intro only if we are at the intro
            // then whats the point?
        if(router.url === env.startUrl){
            // router.navigateByUrl(env.startUrl)
        }
        //
        of({})
        .pipe(
           delay(2000),
           take(1)
        )
        .subscribe(()=>{
            if(env.startUrl === "/" && router.url === "/"){
                router.navigateByUrl('/intro')
            }
        })
        //

        ryber.parentData.next({
            "hook":"appInit"
        })
    }

    ngOnDestroy(){
        let{subscriptions} = this
        subscriptions.forEach((x:Subscription)=>{
            x.unsubscribe()
        })
    }
}
