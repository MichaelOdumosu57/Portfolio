# E2E Tests

## Overlay
* test that the app is at 100vw and 100vh on prod
## Intro Module

### Slider 
* test that the text appears on the screens according to the slidin in and reveal animations and the text is changing
* test that after the intro module we get to the home module


## Home Module
* test that the navigation opacity reveal accordingly
* test that you can navigate back to intro and home respectively

## Resume Module 
* test that the links to the projects are working   

### Download now
* test that the canvas can at least get the proper resume by
    * setting the opacity to 1 for the resumeItems
    * removing text decorations for the links
    * setting the height on the resume container to auto so html2canvas can capture the whole thing
    * make sure it resets
* on prod animation makes it end up lower on the pdf make sure it doesnt
* make sure the user can click the download button


## Testimony module
* make sure that on start we are automatically paginating
* make sure that when hit pause we pause and when we hit resume we resume

## Contact Module
* make sure that the link sto the professional sites are working
* make sure that there is a url expandable
* or make sure that if you use python for people to send message that all the endpoints are working
