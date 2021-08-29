import { Directive,Renderer2 } from '@angular/core';
import {fromEvent} from'rxjs';

@Directive({
    selector: '[appSkillsSunChart]'
})
export class SkillsSunChartDirective {

    constructor(
        private renderer2: Renderer2
    ) { }

    ngAfterViewInit() {
        let {renderer2} =this;


        // go and grab plotly
        let s = renderer2.createElement('script');
        s.src = 'https://cdn.plot.ly/plotly-2.3.0.min.js';
        renderer2.appendChild(document.head, s);
        let  loadScript =fromEvent(s, 'load').
        subscribe({
            next:()=>{
                loadScript.unsubscribe()
                // plotly data
                var data = [{
                    type: "sunburst",
                    ids: [
                        "Frontend", "Testing", "Backend", "Cloud", "SQL", "Logs","Tools",
                        "Frontend - Angular",
                        ...["primeNG", "agGrid", "ngModules", "sentry", "qrxcode", "ChangeDetection","ngx-translate"]
                            .map((x, i) => "Angular - " + x),
                        "Frontend - Typescript",
                        ...["plotly", "tsParticles", "VanillaTilt", "faker.js", "three.js", "tween.js"]
                            .map((x, i) => "Typescript - " + x),
                        "Frontend - Node.js",
                        ...["ngrok", "source-map-explorer"]
                            .map((x, i) => "Node.js - " + x),


                        "Testing - Ruby",
                        ...["RSpec", "ROTP", "Puffing Billy", "Mailslurp", "Capybara"]
                            .map((x, i) => "Ruby - " + x),
                        "Testing - CI/CD",
                        ...["CircleCI","Docker"]
                            .map((x, i) => "Ruby - " + x),

                        "Backend - Python",
                        ...["lorem", "tornado", "watchdog", "dropbox", "boto3", "Nanonets ML","eventbrite"]
                            .map((x, i) => "Python - " + x),
                        "Backend - Heroku",
                        ...["buildpacks", "addons", "quotaGuard"]
                            .map((x, i) => "Heroku - " + x),

                        "Cloud - GCP",
                        // ...["drive API","bigquery API","spreadsheets API"]
                        // .map((x, i) => "GCP - " + x),
                        "Cloud - AWS",
                        ...["Cognito", "STS","Amplify"]
                            .map((x, i) => "AWS - " + x),
                        "Cloud - Azure",
                        ...["storage-blob"]
                            .map((x, i) => "Azure - " + x),
                        "Cloud - IBM",
                        "Cloud - Hosting",
                        ...["Firebase", "CodeSandbox", "GH Pages", "Cosmicjs<br>CMS"]
                            .map((x, i) => "Hosting - " + x),

                        ...["Azure-SQL", "MySQL", "Bigquery", "ODBC"]
                            .map((x, i) => "SQL - " + x),

                        "Logs - Java",
                        ...["SpringBoot", "log4j2","DigitalOcean"]
                            .map((x, i) => "Java - " + x),


                        ...["Github", "", "", ""]
                            .map((x, i) => "Version - " + x),
                    ],
                    labels: [
                        "Frontend", "Testing", "Backend", "Cloud", "SQL","Logs", "Tools",
                        "Angular",
                        "primeNG", "agGrid", "ngModules", "sentry", "qrxcode", "Change<br>Detection","ngx-translate",
                        "Typescript",
                        "Plotly", "tsParticles", "VanillaTilt", "faker.js", "three.js", "tween.js",
                        "Node.js",
                        "ngrok", "source-map-<br>explorer",

                        "Ruby",
                        "RSpec", "ROTP", "Puffing<br>Billy", "Mailslurp", "Capybara",
                        "CI/CD",
                        "CircleCI","Docker",

                        "Python",
                        "lorem", "tornado", "watchdog", "dropbox", "boto3", "Nanonets<br>ML","Eventbrite",
                        "Heroku",
                        "buildpacks", "addons", "quotaGuard",

                        "GCP",
                        // "drive API","bigquery API","spread<br>sheets<br>API",
                        "AWS",
                        "Cognito", "STS","Amplify",
                        "Azure",
                        "storage-blob",
                        "IBM",
                        "Hosting",
                        "Firebase", "CodeSandbox", "GH Pages", "Cosmicjs<br>CMS",

                        "Azure-SQL", "MySQL", "Bigquery", "ODBC",

                        "Java",
                        "SpringBoot","log4j2","DigitalOcean",

                        "Github", "Trello", "", ""
                    ],
                    parents: [
                        "", "", "", "", "", "","",
                        "Frontend",
                        ...Array(7).fill(null).map((_, i) => "Frontend - Angular"),
                        "Frontend",
                        ...Array(6).fill(null).map((_, i) => "Frontend - Typescript"),
                        "Frontend",
                        ...Array(2).fill(null).map((_, i) => "Frontend - Node.js"),


                        "Testing",
                        ...Array(5).fill(null).map((_, i) => "Testing - Ruby"),
                        "Testing",
                        ...Array(2).fill(null).map((_, i) => "Testing - CI/CD"),


                        "Backend",
                        ...Array(7).fill(null).map((_, i) => "Backend - Python"),
                        "Backend",
                        ...Array(3).fill(null).map((_, i) => "Backend - Heroku"),


                        "Cloud",
                        // ...Array(3).fill(null).map((_, i) => "Cloud - GCP"),
                        "Cloud",
                        ...Array(3).fill(null).map((_, i) => "Cloud - AWS"),
                        "Cloud",
                        ...Array(1).fill(null).map((_, i) => "Cloud - Azure"),
                        "Cloud",
                        // ...Array(3).fill(null).map((_, i) => "Cloud - IBM"),
                        "Cloud",
                        ...Array(4).fill(null).map((_, i) => "Cloud - Hosting"),


                        ...Array(4).fill(null).map((_, i) => "SQL"),

                        "Logs",
                        ...Array(3).fill(null).map((_, i) => "Logs - Java"),

                        ...Array(4).fill(null).map((_, i) => "Tools"),
                    ],
                    outsidetextfont: { size: 20, color: "#377eb8" },
                    textposition: 'inside',
                    // insidetextorientation: 'radial',

                    // leaf: {opacity: 0.4},
                    // "values":  [65, 14, 12, 10, 2, 6],
                    marker: { line: { width: 2 } },
                    "branchvalues": 'total'

                }];

                var layout = {
                    // height: 500,
                    // width:  500,
                    font: { size: 24 },
                    margin: { l: 0, r: 0, b: 0, t: 0 },
                    sunburstcolorway: ["rgb(250,237,16)", "black", "#00BFFF", "1a2632","white","#00308F","#ffae42"],
                };

                // intitiate the plotly div
                Plotly.newPlot("plotlySkillsChart", data, layout);
                //
                //
            },
            error:console.log
        })
        //

    }

}
