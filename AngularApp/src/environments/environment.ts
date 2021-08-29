import {mediaPrefix} from '../app/customExports'
export const environment = {
    production: false,
    startUrl:'/testimony',
    directives:{
        downloadPDF:{
            grabPDF:true,
            href:mediaPrefix({media:'my_resume.pdf'})
        }
    }
};

