import { Component, OnInit, ChangeDetectionStrategy,ChangeDetectorRef,Input,Renderer2,HostBinding, Host } from '@angular/core';
import { of, Subscription,from ,concat} from 'rxjs';
import{repeat,delay,concatMap, exhaustMap} from 'rxjs/operators';
import { mediaPrefix } from '../customExports';
import { RyberService } from '../ryber.service';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],

    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements OnInit {

    // main data
    @HostBinding('class') class = this.ryber.app.slider.class;
    @HostBinding('ngStyle') ngStyle = this.ryber.app.slider.style;
    //

    // metadata
    subscriptions:Subscription[] = []
    //

    constructor(
        private ryber: RyberService,
        private ref: ChangeDetectorRef,
    ) { }

    ngOnInit(): void {
        let{ryber,subscriptions} = this;
        // grab the needed values from the app parent
        let grabParentMetadata = ryber.parentData
        .subscribe({
            next:(result:any)=>{

            },
            error:(err:any)=>{

            }
        });
        console.log(this)
        subscriptions.push(grabParentMetadata)
        //
    }

    ngAfterViewInit(): void {
        let {card,cardMetadata,subscriptions,ref} = this;


        let changeCard = concat(
            of({}).pipe(delay(3100)),
            of({}).pipe(delay(3100))
        )
        .subscribe({
            next:(result:any)=>{

                card.index+= 1
                let cardAlignOptions = ["flex-end","flex-start"]
                // change the text on every animation iteration
                card.current.text = cardMetadata[card.index].text
                card.current.pic = cardMetadata[card.index].pic
                card.current.textStyle["align-self"] = cardAlignOptions.splice(0,Math.floor(Math.random()*2))
                card.current.picStyle["align-self"] =  cardAlignOptions[0]
                ref.detectChanges()
                //

            },
            error:(err:any)=>{

            }
        })
        subscriptions.push(changeCard)

    }

    ngOnDestroy(): void {
        let {ryber,subscriptions} = this;
        subscriptions.forEach((x:Subscription)=>{
            x.unsubscribe();
        })
    }


    cardMetadata= [
        {
            text:"Find the Problem, Find the Solution.",
            pic:mediaPrefix({media:'intro_1.jpg'})
        },
        {
            text:"Demo. Design. Develop. Deploy.",
            pic:mediaPrefix({media:'intro_2.png'})
        },
        {
            text:"Believe in the mission and the team.",
            pic:mediaPrefix({media:'intro_3.png'})
        }
    ]

    card:any = {
        current:{
            text: this.cardMetadata[0].text,
            pic: this.cardMetadata[0].pic,
            textClass:"a_p_p_IntroPhraseText a_p_p_IntroPhraseReveal",
            picClass:"a_p_p_IntroPhraseImage a_p_p_IntroPhraseReveal",
            textStyle:{

            },
            picStyle:{

            }
        },
        index:0
    }

    image = {
        // show the homepage
        animationend:(ev)=>{
            let{ryber,subscriptions,ref,card,cardMetadata} = this;
            let {router} = ryber;
            if(ev.animationName === 'reveal'){
                router.navigateByUrl('/home')

            }

        }
        //
    }
}
