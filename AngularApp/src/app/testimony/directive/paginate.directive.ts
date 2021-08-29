import { ChangeDetectorRef, Directive,Input } from '@angular/core';
import { of,concat,Subscription,fromEvent } from 'rxjs';
import {delay,tap,repeat} from 'rxjs/operators';
import { eventDispatcher } from 'src/app/customExports';

@Directive({
    selector: '[appPaginate]'
})
export class PaginateDirective {

    @Input('paginate') myPaginate:any
    subscriptions:Subscription[] = [];
    constructor(
        private ref:ChangeDetectorRef
    ) { }

    ngAfterViewInit() {
        let{myPaginate,ref} = this
        let right :any= document.querySelector(".p-carousel-next")
        let left  :any= document.querySelector(".p-carousel-prev")
        let pause :any= document.querySelector(".a_p_p_TestimonyPause")
        console.log(myPaginate,right,left)
        myPaginate.counter = 0
        let target= right

        let paginate$ = of({})
        .pipe(
            delay(3000),
            tap(()=>{
                if(myPaginate.counter ===myPaginate.story.items.length){
                    target = left
                    myPaginate.counter = -myPaginate.counter
                }
                else if(myPaginate.counter === 0){
                    target=right
                }
                myPaginate.counter+= 1
                eventDispatcher({
                    element:(target as HTMLElement),
                    event:'click'
                })
            })
        )

        // automatically paginate$
        let paginateSub = paginate$
        .pipe(repeat(9999))
        .subscribe()
        let paginateIndex = this.subscriptions.push(paginateSub)
        //

        //pause the paginaton
        let pauseEvent = fromEvent( pause,"click")
        .subscribe(()=>{
            if(pause.innerHTML === "Pause"){
                paginateSub.unsubscribe()
                this.subscriptions.splice(paginateIndex-1,1)
                pause.innerHTML = "Resume"
            }
            else if(pause.innerHTML === "Resume"){
                paginateSub = paginate$
                .pipe(repeat(9999))
                .subscribe()
                paginateIndex = this.subscriptions.push(paginateSub)
                pause.innerHTML = "Pause"
            }
            ref.detectChanges()
        })
        this.subscriptions.push(pauseEvent)
        //

    }

    ngOnDestroy() {
        this.subscriptions
        .forEach((x,i)=>{
            x?.unsubscribe()
        })
    }
}
