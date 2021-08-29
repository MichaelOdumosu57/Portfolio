import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RyberService {

    constructor(
        public router: Router
    ) { }


    parentData = new ReplaySubject<any>(1)


    app:any = {
        slider:{
            class:"a_p_p_SharedContent",
            style:{}
        },
        contact:{
            class:"a_p_p_SharedContent a_p_p_ContactComponent",
        },
        main:{
            class:"a_p_p_SharedContent a_p_p_MainComponent",
        },
        testimony:{
            class:"a_p_p_SharedContent a_p_p_TestimonyComponent",
        },
        resume:{
            class:"a_p_p_SharedContent a_p_p_ResumeComponent",
            item:[
                {},
                {}
            ]
        }
    }
}
