import { Component, OnInit, ChangeDetectionStrategy,ChangeDetectorRef,Input,Renderer2,HostBinding, Host } from '@angular/core';
import { of, Subscription,from ,concat} from 'rxjs';
import{repeat,delay,concatMap, exhaustMap, tap, exhaust} from 'rxjs/operators';
import { mediaPrefix } from '../../customExports';
import { RyberService } from '../../ryber.service';
import { environment as env } from 'src/environments/environment';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {

    //main data
    target = "resume"
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
            opacity : .5
        }
    }

    resume:any = {

        parts:[
            {
                item:{
                    animationend:()=>{
                        let {resume,ref} = this
                        resume.parts[0].item.style["margin-top"] = "0px"
                        ref.detectChanges()
                    },
                    style:{

                    }
                }
            },
            {
                projects:{
                    items:Array(3).fill(null)
                    .map((x:any,i)=>{
                        return {
                            image:[
                                "resume_8.png",
                                "resume_9.png",
                                "resume_10.gif"
                            ]
                            .map((y:any,j)=>{
                                return mediaPrefix({media:y})
                            })[i],
                            title:[
                                "Facebook Mock Project​",
                                "Receipt Tracker",
                                "Social Uploader"
                            ][i],
                            desc:[
                                "Created a Simple Mock Version of Facebook, with latest design UI/UX concepts​",
                                `Uses webRTC and the Nanonets ML API to make an app that
                                keeps records, and extracts price info from your receipts`,
                                `Leverages modern auth to help content pro post once
                                and see their work on all platforms`
                            ][i],
                            url:[
                                `https://michaelodumosu57 .github.io/Facebook_Project`,
                                `https://gx8pv.csb.app`,
                                `https://michaelodumosu57 .github.io/SocialMediaApp`
                            ][i]
                        }
                })
                },
                shortBio:{
                    items:Array(3).fill(null)
                    .map((x,i)=>{
                        return {
                            text:[
                                `Teamwork, Dedication, ​Consideration, Encouragement, Simplicity.
                                These are my core traits that help me to perform`,
                                `I have worked for several clients with projects based on personal improvement,
                                demographic data visualization and 3rd party integration.`,
                                `For an application to launch it takes much commitment. I respect the workflow,
                                looking to grow in the skills and patterns of latest trends in tech`
                            ][i]
                        }
                    })
                },
                contact:{
                    items:Array(4).fill(null)
                    .map((x:any,i)=>{
                        return {
                            logo:Array(4).fill(null)
                            .map((y:any,j)=>{
                                return mediaPrefix({media:'resume_'+(4 +j)+'.svg'})
                            })[i],
                            title:["Email","Github","Phone","Website"][i],
                            link:[
                                "michaelodumosu57@gmail.com",
                                "https://github.com/michaelodumosu57",
                                "929-353-8278",
                                "https://myportfolio-7d6b0.firebaseapp.com"
                            ][i]
                        }
                    })
                },
                item:{
                    animationend:()=>{
                        let {resume,ref} = this
                        resume.parts[1].item.style["margin-top"] = "20px"
                        ref.detectChanges()
                    },
                    style:{

                    }
                }
            },
            {
                item:{
                    animationend:()=>{
                        let {resume,ref} = this
                        resume.parts[2].item.style["margin-top"] = "20px"
                        ref.detectChanges()
                    },
                    style:{}
                },
                work:{
                    items:Array(2).fill(null)
                    .map((x:any,i)=>{
                        return {
                            title:["WindMillCode","GuadalupeNDC"][i],
                            position:[
                                "Web Developer, Content Creator",
                                "Catchafire Volunteer Developer"
                            ][i],
                            dates:[
                                "June  2019 – August  2021",
                                "May 2020 – Dec  2020"
                            ][i],
                            tasks:[
                                [
                                    `Constructed Web apps complete with authentication logic,
                                    using best auth practices such as MFA, and In-Memory  Tokens`,
                                    `Assisted in building organization's Docker image and applied latest trends to increase the speed
                                    of CI/CD testing by a factor of 3`,
                                    `Worked with and created over 100 educational videos and labs from many 3rd party
                                    API based on ML, Internationalization and 3d graphics `,
                                ],
                                [
                                    `Built online forms to collect demographic data of thousands of applicants
                                    use in the organization's housing and rental programs.`,
                                    `Attended monthly meetings to discuss best industry practices
                                    for collecting sensitive data such as driver license, date of birth
                                    and monthly income`
                                ]
                            ][i]
                        }
                    })
                }
            }
        ]
    }

    ngOnInit(): void {
        let {ref,image} = this
    }

    ngAfterViewInit(): void {

    }


    ngOnDestroy(): void {
        let {subscriptions} = this
        subscriptions.forEach(x=>x.unsubscribe())
    }

}
