[![CircleCI](https://circleci.com/gh/MichaelOdumosu57/Portfolio.svg?style=svg&branch=master)](<LINK>)


# Summary
* this is my portfolio website made with the latest UX/UI

## Features include
* a plotly.js wheel of my skills
* a resume page
* a contact me page



# Stack 

## Frontend
* Angular v 12.1.4
* CSS Animations
* Plotly.js v 2.3.0
* html2canvas v1.1.4
* jspdf v2.3.1
* primeng v12.0.1

## Backend


## Testing
* Docker, (tes in docker containers from linux VM) v20.10.7

### Unit
* rspec    v3.10.0
* capybara v3.35.3

### Integration
* rspec    v3.10.0
* capybara v3.35.3

### E2E
* rspec    v3.10.0
* capybara v3.35.3
* puffing billy v2.4.1

## Hosting
* Firebase v9.16.0

## CI/CD
* CircleCI
* Docker v20.10.7
* Virtual Box v 6.1.22
* Ubuntu VM 20.04.1


# Structure


## Linting Rules
* if a previous commit had a big mark by saying "PREVIOUS BUG COMMIT"
* for responsive try to keep rules localized to a top level target
* for "container" we use "pods" for brevity 
* for each commit, we append "WORKING COMMIT" so we know the commit is free of bugs
* ruby indentation 2 lines
* ts indentation 4 lines
* for events use ev as the varialbe
how we do nested loops
```ts
item
forEach((x,i)=>{
    x.forEach((y,j)=>{
        y.forEach((z,k)=>{
            z.forEach((w,h)=>{
                w.forEach((xx,ii)=>{
                    ...
                })
            })
        })
    })
})
```
* if you see a_p_p_Specific in the scss that means we know of modern practices however we could not properply implement it and we needed to use a_p_p_Specific to help achieve the task


## Project Directory Mapping

### Frotend
#### Configurations
* the intro is handled in __AngularApp/src/app/intro__
    * slider is a component which was supposed to be part of intro, ng g ran to soon it was a pleasure to still make the app work desipte
* the home is handled in __AngularApp/src/app/home__
* the resume is handled in __AngularApp/src/app/resume__
    * the plotly sunburst chart is handled in  __AngularApp/src/app/resume/directive/skills-sun-chart.directive.ts__
    * resume printing is handled in __AngularApp/src/app/resume/directive/download-pdf.directive.ts__
    * __skills__
        * AWS Amplify
        * AWS Route53
        * AWS S3
        * CI/CD deploy to Amplify and Heroku 
        * Basic Java
        * python news api
        * trello
        * python scheduler
        * ngx-translate
        * Spring Boot
        * log4j2
        * DigitalOcean

### Backend

#### Configurations
* refer to README.md in ignore


### Testing 
* in __AngularApp/testing/TESTS.md__ we have  where we write pseudo code for our unit,e2e and integration tests later
* __AngularApp/testing/e2e/social-e2e-circleci.rb__ - is where all of our e2e tests live, we test on docker in a ubuntu 20.04 to closely represent the circleCI env and write the code 
* in the local testing env we use a gui browser, to oberserve to  make sure the tests work properly, however in circleci we have the browsers run in headless mode. 

### CI/CD
* IN .circle is our config.yml, we make use of the company's Docker image as well as the circleci browser-build tools orb, as a general practice we packages our dependencies into the orb so we dont have to increased build times


### Issues
* say we have issues and we are looking for support with a library language or other 3rd party found here __AngularApp/misc/issues__
### Future Plans
refer to README.md in ignore

### Libraries 
* all utility fn located in __AngularApp/src/app/customExports.ts__

## Site Navigation

* the end user is greeted with an intro presentation that can freely proceed through the website

### Home Page 
* the menu slowly appears, then I appear. 
* the short bio is alreadly on the page

## Resume Page
* my resume appears on the page its scrolls up to be made availbe
* there is a download resume button which will not use html2canvas, and jspdf instead  will be downloaded from the assets, since we cant get it to download properly if there is an animation on it
* there is an interactive plotly.js sunburst chart at the bottom of the screen 
* urls should lead to places accordingly

## Testimony Page
*the testimonials are on the page of all the people I have worked with and progress so far

## Contact Page
* here is the contact page contact me via all means necessary


# Aspects

## Challenges
* too much time on resume scss Its not even fully responsive, its just going to get to a certiain width then resize
* in the contact me section the flex was 0 1 50% for both however flexbox manageed to put the div on the second line making 0 1 49% 50% smh

## Mistakes/Failures
* forgot to generate the slider component to the intro module
* apparently padding has slight issues with flex where you have to correct everything
    * either decrease the flex-basis or manually modify the padding
```scss
    @media (max-width: map.get($media_breakpoint,1)){
        flex: 1 0 90% ;
        // padding:10px;
        // @include outline;

        // & *{
        //     margin: 10px;
        // }

        // & .a_p_p_Specific0{
        //     margin:0 10px !important;
        // }
    }
```
## Enjoyed
* admiring the final product
* working with html2canvas and jspdf

## Leadership
* after zoom of 300% were not going to support responsiveness
    * after zoom 200% not on the stories page

## Conflict
* we been having a lot of issues with primeng
    * remplement component best you can
* can't achieve the effect on vercel without plently of implementation
    * cant even get the gradients to transition
    * good codebut not enough to get to the point of making it work
```scss
    &::before{
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(to bottom, red, orange);
        z-index: 1;
        opacity: 0;
        transition: opacity 0.4s linear;

    }

    &:hover::before {
        opacity: 1;
    }
```

## Done Different
* navigation should be its own module component, along with the background image
* test all components I want to use are working properly


# Issues 
* everything needs lazyloading, 
* the page has a margin of white space,determine whats going on the app should bee 100vh 100vw
* on prod html2canvas or jspdf doesnt print properly

# TODO
* replace stories with certificates
* e2e test facebook popup make test fail do something about it
* decide on keeping projects and adding a testimonials page
    * Allison Gould
    * (Friends)
* provide full url in expandable for contact or setup python backend
* testing 

## Suggestions
* for each project, problem, issue, solution

## Notes
* if responsive issues with the project in resume find and umcomment
```scss
& > a,p{
    word-break: break-word;
}
```

# Resources
[sucessful circle ci build](https://app.circleci.com/pipelines/github/MichaelOdumosu57/Portfolio/35/workflows/0acd7a54-1c59-4262-aad3-2664a22c0ac3/jobs/42)
[firebase login token for ci](https://circleci.com/blog/automatically-deploy-a-gatsby-site-to-firebase-hosting/?utm_medium=SEM&utm_source=gnb&utm_campaign=SEM-gnb-DSA-Eng-ni&utm_content=&utm_term=dynamicSearch-&gclid=CjwKCAjw9aiIBhA1EiwAJ_GTSoZT8FR-H9zjGm2n6_5QLW5dtuk3zIn0XizMYAfVN8QZvY5vayIvdhoC65QQAvD_BwE)
[css word break](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break)
[iconfinder](https://www.iconfinder.com/)
[vercel](https://vercel.com/)
[google fonts](https://fonts.google.com/specimen/Inter?preview.text=Develop.&preview.text_type=custom)
[ng generate](https://angular.io/cli/generate)
[lazy load modules](https://angular.io/guide/lazy-loading-ngmodules)
[router](https://angular.io/guide/router)
[jspdf](http://raw.githack.com/MrRio/jsPDF/master/docs/)
[css media queries](https://www.w3schools.com/css/css3_mediaqueries_ex.asp)
[css units](https://www.w3schools.com/cssref/css_units.asp)
[animationend event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationend_event)
[css animations](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationend_event)
[rspec path of current url](https://stackoverflow.com/a/55883009/7513181)
### Capybara test file download
* https://stackoverflow.com/questions/29309324/how-to-test-csv-file-download-in-capybara-and-rspec
* https://dev.to/coorasse/test-downloaded-files-with-rspec-and-system-tests-55mn

### HTML TO PDF
    * https://www.youtube.com/watch?v=toBdhXwWajY   
    * https://codingshiksha.com/angular/angular-9-tutorial-to-convert-html-to-pdf-using-jspdf-html2canvas-library-full-project-for-beginners/

## Snippets
* download-pdf.directive.ts html to pdf
    * place in 'transform the online resume to be ready for printing'
[link](AngularApp/misc/html2pdf.ts)
* generate a new module 
```ps1
npx ng g module resume --routing=true

```
* generate a new component
```ps1
npx ng g component intro/main --change-detection=OnPush --export=true --module=intro --style=none
```

* generate a new directive
```ps1
npx ng g directive contact/directive/links --module=contact
```

## Media 
[spotlight.jpg](https://www.123rf.com/photo_144868909_vector-spotlight-on-scene-with-light-beams-and-particles-in-the-air-design-for-presentation-your-pro.html?vti=o0cr01nlfiawvvll1c-1-67)

[intro_1.jpg]
```html
<div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
```

[intro_2.jpg]
```html
<div>Icons made by <a href="https://creativemarket.com/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
```

[intro_3.jpg]
```html
<div>Icons made by <a href="" title="Pause08">Pause08</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
```

# Planning
* responsiveness
* lets aim for 1075px
    * intro should center everything
    * navigation should turn to dropdown
