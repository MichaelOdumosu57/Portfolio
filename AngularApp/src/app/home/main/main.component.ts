import { Component, OnInit, ChangeDetectionStrategy,ChangeDetectorRef,Input,Renderer2,HostBinding, Host } from '@angular/core';
import { of, Subscription,from ,concat} from 'rxjs';
import{repeat,delay,concatMap, exhaustMap, tap, exhaust} from 'rxjs/operators';
import { mediaPrefix } from '../../customExports';
import { RyberService } from '../../ryber.service';
@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {

    //main data
    target = "main"
    @HostBinding('class') class =this.ryber.app[this.target].class
    @HostBinding('ngStyle') ngStyle = this.ryber.app[this.target].style;
    subscriptions: Subscription[] = []
    //

    constructor(
        private ryber: RyberService,
        private ref: ChangeDetectorRef,
    ) { }



    image:any = {
        style:{}
    }

    name:any = {
        text:"Michael Odumosu.",
        class:"a_p_p_MainNameText"
    }

    description:any = {
        text:`Software Developer with experience in building full-fledged web
        applications and Implementing many 3rd party solutions.
        Implementing modern industry concepts such as the Cloud, WebGL,
        and Containerization to bring seamless experience to the end user.`,
        class:"a_p_p_MainDescText"
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        let {ref,image,subscriptions} = this


        // slowly show the image
        let imageToLight = of({})
        .pipe(
            delay(3000),
            tap(()=>{
                image.style.opacity = .5
                ref.detectChanges()
            }),
        )
        //


        // "animation"
        let myAnimation = imageToLight
        .subscribe()
        subscriptions.push(myAnimation)
        //
    }

    ngOnDestroy(): void {
        let {subscriptions} = this
        subscriptions.forEach(x=>x.unsubscribe())
    }

}
