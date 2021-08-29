import { Component, OnInit, ChangeDetectionStrategy,HostBinding,ChangeDetectorRef } from '@angular/core';
import { of, Subscription,from ,concat} from 'rxjs';
import{repeat,delay,concatMap, exhaustMap, tap, exhaust} from 'rxjs/operators';
import { RyberService } from 'src/app/ryber.service';
@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {
    @HostBinding('class') class = "a_p_p_NavComponent";
    subscriptions: Subscription[] = [];
    constructor(
        private ref: ChangeDetectorRef,
        private ryber:RyberService
    ) { }



    links:Array<any> = [
        {
            path:'intro',
            text:'Intro',
        },
        {
            path:'home',
            text:'Home',
        },
        {
            path:'resume',
            text:'Resume',
        },
        {
            path:'testimony',
            text:'Stories',
        },
        {
            path:'contact',
            text:'Contact',
        },
    ]
    .map((x:any,i)=>{
        x.style=== undefined ? x.style = {} :null
        return x
    })

    menu:any ={
        overlay:{
            style:{}
        },
        icon:{
            click:(evt)=>{
                let {links,ref} = this
                links
                .forEach((x,i)=>{
                    if(x.style.display === "block"){
                        x.style.display = "none"
                        this.menu.overlay.style.display = "none"
                    }
                    else{
                        x.style.display = "block"
                        this.menu.overlay.style.display = "block"
                    }
                    x.style.transition = "none"
                    x.style.opacity = 1
                })
                ref.detectChanges()
            }
        }
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        let {links,ref,subscriptions,ryber} = this;
        let {router}=ryber

        if(["/home"].includes(router.url) ){
            // slowly reveal the links one by one
            let i = 0
            let linksToLight = of({})
            .pipe(
                tap(()=>{
                    links[i].style.opacity = 1
                    i += 1
                    ref.detectChanges()
                }),
                delay(500)
            )
            //

            // "animation"
            let myAnimation = linksToLight
            .pipe(repeat(links.length))
            .subscribe()
            subscriptions.push(myAnimation)
            //
        }
        else{
            links
            .forEach((x,i)=>{
                x.style.opacity = 1
            })
            ref.detectChanges()
        }

    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(x=>x.unsubscribe())
    }

}
