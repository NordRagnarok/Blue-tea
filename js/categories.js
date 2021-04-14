let config = [
    {
        "name": "media",
        "icon": `fas fa-certificate`,
        "link": "media/",
        "size": "lg",
        "default": true,
        "members": [
            {
                "name": "Sonarr",
                "icon": "",
                "link": "http://192.168.1.3:8989"
            },
            {
                "name": "Radarr",
                "icon": "",
                "link": "http://192.168.1.3:7878"
            }
        ]
    },
    {
        "name": "tasmota",
        "icon": `fab fa-swift`,
        "link": "tasmota/",
        "size": "lg",
        "members": [
            {
                "name": "KOKO",
                "icon": "",
                "link": "https://google.com"
            },
            {
                "name": "FOO",
                "icon": "",
                "link": "https://google.com"
            }
        ]
    }
]


let main_card = document.getElementById('main-card-id');
let categories = document.getElementById('categories');

let settings = config

console.log({ settings })
console.log({ categories })

for (var i of settings) {
    categories.innerHTML +=
        `<input type="radio" class="bth_cat" name="categories" id="switch_${i.name}">` +
        `<label for="switch_${i.name}" class="btn_cat"><i class="${i.icon} fa-${i.size || "lg"}"></></label>`;
}

for (var i of settings) {
    var links = '';
    for (var mem of i.members) {
        links +=
            `<a href="${mem.link}" target="_blank">` +
            `   ${mem.icon ? `<div id="${mem.name}_icon"><img src="${mem.icon}"/></div>` : `<i class="${mem.icon}" aria-hidden="true"></i>`}` +
            `</a>`
    }
    main_card.innerHTML +=
        `<div class="${i.name}-card">` +
        `    <div class="links">` +
        `    ${links}` +
        `    </div>` +
        `</div>`;
}

$(document).ready(() => {
    for (var i of settings) {
        for (var mem of i.members) {
            $.ajax({
                url: `${mem.link}/favicon.ico`,
                type: "GET",
                headers: {  
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'image/x-icon',
                    'Access-Control-Allow-Methods': 'GET, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
                },
                // async: true,
                // dataType: 'jsonp',
                // crossDomain: true,
                success: (event) => {
                    console.log(getFavicon(event.body));
                    console.log({event})
                },
                error: (failed) => {
                    console.log({failed})
                }
            })
        }
    }
})

console.log({ main_card })