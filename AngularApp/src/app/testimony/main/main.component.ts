import { Component, OnInit, ChangeDetectionStrategy,ChangeDetectorRef,Input,Renderer2,HostBinding, Host } from '@angular/core';
import { of, Subscription,from ,concat} from 'rxjs';
import{repeat,delay,concatMap, exhaustMap, tap, exhaust} from 'rxjs/operators';
import { mediaPrefix } from '../../customExports';
import { RyberService } from '../../ryber.service';
import { environment as env } from 'src/environments/environment';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {

    //main data
    target = "testimony"
    @HostBinding('class') class =this.ryber.app[this.target].class
    @HostBinding('ngStyle') ngStyle = this.ryber.app[this.target].style;
    subscriptions: Subscription[] = []
    //

    constructor(
        private ryber: RyberService,
        private ref: ChangeDetectorRef,
    ) { }


    story:any ={
        pod:{
            style:{
                "max-width":"1550px"
            }
        },
        items:Array(5).fill(null)
        .map((x:any,i)=>{
            return {
                name:"Story "+(i+1),
                desc:`
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur in ligula justo. Sed sed ullamcorper eros.
                Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia curae; Curabitur tincidunt sem et
                consequat semper. Nullam eleifend tellus vitae est ullamcorper
                porta. Nullam a justo tristique, consequat leo eget, blandit diam.
                Donec sed elit quis eros dignissim sodales. Sed condimentum ipsum
                laoreet fringilla hendrerit.
                `
            }
        }),
    }
    image:any = {
        style:{
            opacity:.5
        }
    }
    paginate = {
        story:this.story
    }

    ngOnInit(): void {
    }

}
