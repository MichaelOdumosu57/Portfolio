import {mediaPrefix} from '../app/customExports'
export const environment = {
    production: true,
    startUrl:'/',
    directives:{
        downloadPDF:{
            grabPDF:true,
            href:mediaPrefix({media:'my_resume.pdf'})
        }
    }
};
