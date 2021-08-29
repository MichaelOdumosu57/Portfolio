import { Directive,Input,ChangeDetectorRef } from '@angular/core';
import {of,Subscription} from 'rxjs';
import { delay,tap,repeat } from 'rxjs/operators';
import {LinkedList} from 'src/app/customExports'

@Directive({
    selector: '[appColorfall]',

})
export class ColorfallDirective {

    subscriptions: Subscription[] = [];
    @Input('contact') myContact:any
    constructor(
        private ref: ChangeDetectorRef
    ) { }

    ngOnInit() {
        let {myContact,ref} =this;
        // console.log(myContact);
        let targets = [...myContact.logos.items]
        // set the intial gradient
        targets.unshift(myContact.title)
        targets[0].name.style["background"] = targets[0].colorGradient
        targets[0].name.style["-webkit-text-fill-color"] = targets[0].colorGradient
        //
        let myLinkedList = new LinkedList(0)
        targets
        .forEach((x,i)=>{
            myLinkedList.addNode({val:i+1})
        })

        let currentNode:any = myLinkedList.head()

        let colorFall$ = of({})
        .pipe(
            delay(3000),
            tap(()=>{
                let prev =currentNode.val
                currentNode= currentNode.next
                if(currentNode.next === null){
                    currentNode = myLinkedList.head()
                }
                let i = currentNode.val
                delete targets[prev].name.style["background"]
                // delete targets[prev].name.style["color"]
                targets[i].name.style["background"] = targets[i].colorGradient
                // targets[i].name.style["color"] = "transparent"
                ref.detectChanges()
                
            })
        )
        let colorFallSub = colorFall$
        .pipe(repeat(9999))
        .subscribe()
        this.subscriptions.push(colorFallSub)


    }

    ngOnDestroy() {
        let {subscriptions} = this;
        subscriptions
        .forEach((x,i)=>{
            x.unsubscribe();
        })
    }

}
