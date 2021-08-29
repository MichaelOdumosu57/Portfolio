let links = Array.from(document.querySelectorAll('.a_p_p_ResumePod a'));
let section =Array.from(document.querySelectorAll('.a_p_p_ResumeItem'))
let resume  = document.querySelector('.a_p_p_ResumePod')
;(resume as HTMLElement).style.height = "auto"
section.forEach((x,i)=>{
    renderer2.setStyle(x,'opacity','1');
    // renderer2.setStyle(x,'animation','""');
})
links
.forEach((x,i)=>{
    renderer2.setStyle(x,'text-decoration','none');
})
ref.detectChanges();
//


let generatePDF = from(
    html2canvas(
        (resume as HTMLElement),
        {
            logging:true,
            backgroundColor:"#1a2632",
            // height:1000,


        }
    )
)
.subscribe({
    next:(canvas:any)=>{
        console.log(canvas)
        var imgWidth = 205;
        // var imgHeight = canvas.height * imgWidth / canvas.width ;
        // imgHeight += 60;
        var imgHeight = 285.1243455497382;
        const contentDataURL = canvas.toDataURL('image/png')
        let pdf = new jsPDF('p', 'mm', 'a4');
        var x = 2;
        var y = 2;
        pdf.addImage(contentDataURL, 'PNG', x, y, imgWidth, imgHeight)
        pdf.save('resume.pdf');
        // revert to originial
        section.forEach((x,i)=>{
            renderer2.removeStyle(x,'opacity');
        })
        links
        .forEach((x,i)=>{
            renderer2.removeStyle(x,'text-decoration');
        })
        ;(resume as any).style.height = ""
        ref.detectChanges();
        //
    },
    error:(err:any)=>{

    }
})
this.subscriptions.push(generatePDF)
