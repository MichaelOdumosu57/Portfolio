import { Component, OnInit, ChangeDetectionStrategy,ChangeDetectorRef,Input,Renderer2,HostBinding } from '@angular/core';
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
    target = "contact"
    @HostBinding('class') class =this.ryber.app[this.target].class
    @HostBinding('ngStyle') ngStyle = this.ryber.app[this.target].style;
    subscriptions: Subscription[] = []
    //

    constructor(
        private ryber: RyberService,
        private ref: ChangeDetectorRef,
    ) { }

    image:any = {
        style:{
            opacity:.5,
            "justify-self":"center"
        }
    }

    contact:any = {
        logos:{
            items:Array(6).fill(null)
            .map((x:any,i)=>{
                return {
                    src:mediaPrefix({media:'contact_'+(i-1)+".png"}),
                    name:{
                        text:[
                            "Linkedin",
                            "Gmail",
                            "Facebook",
                            "Twitter",
                            "Slack",
                            "Discord",
                        ][i],
                        style:{},
                        click:()=>{
                            window.location.href = [
                                "https://www.linkedin.com/in/michael-odumosu-a58367b1",
                                "mailto:michaelodumosu57@gmail.com",
                                "https://www.facebook.com/mchael.odumosu/",
                                "https://twitter.com/MOdumosu",
                                "https://app.slack.com/client/T02A6UJ4EJD/setup-invites",
                                "https://discord.com/channels/michaelodumosu57#0118"
                            ][i]
                        }
                    },
                    img:{
                        click:()=>{
                            window.location.href = [
                                "https://www.linkedin.com/in/michael-odumosu-a58367b1",
                                "mailto:michaelodumosu57@gmail.com",
                                "https://www.facebook.com/mchael.odumosu/",
                                "https://twitter.com/MOdumosu",
                                "https://app.slack.com/client/T02A6UJ4EJD/setup-invites",
                                "https://discord.com/channels/michaelodumosu57#0118"
                            ][i]
                        }
                    },
                    cover:{
                        style:{}
                    },
                    colorGradient:[
                        "radial-gradient(farthest-corner at 100% 0px, royalblue 0%, navy 200%)",
                        "radial-gradient(farthest-corner at 100% 0px, red 0%, white 250%)",
                        "radial-gradient(farthest-corner at 100% 0px, cyan 0%, blue 200%)",
                        "radial-gradient(farthest-corner at 100% 0px, cyan 0%, skyblue 200%)",
                        "radial-gradient(farthest-corner at 100% 0px, aquamarine 0%, green 200%)",
                        "radial-gradient(farthest-corner at 100% 0px, aquamarine 0%, purple 200%)"
                    ][i]
                }
            })
        },
        title:{
            name:{
                style:{}
            },
            cover:{
                style:{}
            },
            mask:{
                style:{}
            },
            colorGradient:"radial-gradient(farthest-corner at 100% 0px, grey 0%, black 150%)",
        }

    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        let {contact} = this

    }

}
