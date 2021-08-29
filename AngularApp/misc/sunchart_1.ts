var data = [{
    type: "sunburst",
    ids: [
        "Frontend", "Testing", "Backend", "Cloud", "SQL", "Version",
        "Frontend - Angular",
        ...["primeNG", "agGrid", "ngModules", "sentry", "qrxcode", "ChangeDetection"]
            .map((x, i) => "Angular - " + x),
        "Frontend - Typescript",
        ...["plotly", "tsParticles", "VanillaTilt", "faker.js", "three.js", "tween.js", "gsap"]
            .map((x, i) => "Typescript - " + x),
        "Frontend - Hosting",
        ...["Firebase", "CodeSandbox", "GH Pages", "", "", ""]
            .map((x, i) => "Hosting - " + x),


        "Testing - Ruby",
        ...["RSpec", "ROTP", "Puffing Billy", "Mailslurp", "Capybara"]
            .map((x, i) => "Ruby - " + x),
        "Testing - CI/CD",
        ...["CircleCI","Docker"]
            .map((x, i) => "Ruby - " + x),

        "Backend - Python",
        ...["lorem", "tornado", "watchdog", "dropbox", "boto3", "Nanonets ML"]
            .map((x, i) => "Python - " + x),
        "Backend - Heroku",
        ...["buildpacks", "addons", "quotaGuard"]
            .map((x, i) => "Heroku - " + x),

        "Cloud - GCP",
        // ...["drive API","bigquery API","spreadsheets API"]
        // .map((x, i) => "GCP - " + x),
        "Cloud - AWS",
        ...["Cognito", "STS"]
            .map((x, i) => "AWS - " + x),
        "Cloud - Azure",
        ...["storage-blob"]
            .map((x, i) => "Azure - " + x),
        "Cloud - IBM",

        ...["Azure-SQL", "MySQL", "Bigquery", "ODBC"]
            .map((x, i) => "SQL - " + x),

        ...["Github", "", "", ""]
            .map((x, i) => "Version - " + x),
    ],
    labels: [
        "Frontend", "Testing", "Backend", "Cloud", "SQL", "Version<br>Control",
        "Angular",
        "primeNG", "agGrid", "ngModules", "sentry", "qrxcode", "Change<br>Detection",
        "Typescript",
        "Plotly", "tsParticles", "VanillaTilt", "faker.js", "three.js", "tween.js", "gsap",
        "Hosting",
        "Firebase", "CodeSandbox", "GH Pages", "", "", "",

        "Ruby",
        "RSpec", "ROTP", "Puffing<br>Billy", "Mailslurp", "Capybara",
        "CI/CD",
        "CircleCI","Docker",

        "Python",
        "lorem", "tornado", "watchdog", "dropbox", "boto3", "Nanonets<br>ML",
        "Heroku",
        "buildpacks", "addons", "quotaGuard",

        "GCP",
        // "drive API","bigquery API","spread<br>sheets<br>API",
        "AWS",
        "Cognito", "STS",
        "Azure",
        "storage-blob",
        "IBM",

        "Azure-SQL", "MySQL", "Bigquery", "ODBC",

        "Github", "", "", ""



    ],
    parents: [
        "", "", "", "", "", "",
        "Frontend",
        ...Array(6).fill(null).map((_, i) => "Frontend - Angular"),
        "Frontend",
        ...Array(7).fill(null).map((_, i) => "Frontend - Typescript"),
        "Frontend",
        ...Array(6).fill(null).map((_, i) => "Frontend - Hosting"),


        "Testing",
        ...Array(5).fill(null).map((_, i) => "Testing - Ruby"),
        "Testing",
        ...Array(2).fill(null).map((_, i) => "Testing - CI/CD"),


        "Backend",
        ...Array(6).fill(null).map((_, i) => "Backend - Python"),
        "Backend",
        ...Array(3).fill(null).map((_, i) => "Backend - Heroku"),


        "Cloud",
        // ...Array(3).fill(null).map((_, i) => "Cloud - GCP"),
        "Cloud",
        ...Array(2).fill(null).map((_, i) => "Cloud - AWS"),
        "Cloud",
        ...Array(1).fill(null).map((_, i) => "Cloud - Azure"),
        "Cloud",
        // ...Array(3).fill(null).map((_, i) => "Cloud - IBM"),


        ...Array(4).fill(null).map((_, i) => "SQL"),

        ...Array(4).fill(null).map((_, i) => "Version"),
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
    sunburstcolorway: ["rgb(250,237,16)", "black", "#00BFFF", "1a2632"],
};

// intitiate the plotly div
Plotly.newPlot("plotlySkillsChart", data, layout);
//
