chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action == "openURL") {
        window.open(message.url);
    }
});

/*let running = false
let count = 0
function monitor(delay, positive_keywords, negative_keywords, category, style, size){
    //test
    sendMessages("start", `Monitoring (${count})`)
    if(running=== false){
        sendMessages("stop", ``)
        count = 0
        return
    };
    potential_ids = []
    const request = new Request('https://www.supremenewyork.com/mobile_stock.json');
    //test
    fetch(request)
    .then(response => response.json())
    .then(json => {
        body = json
        console.log(body.products_and_categories[category])
        const objects = body.products_and_categories[category]
        objects.map(object =>{
            const check = object.name.toLowerCase()
            positive_keywords.map(keyword=>{
                if(check.includes(keyword.toLocaleLowerCase())){
                    potential_ids.push(object.id)
                }
            })
            negative_keywords.map(keyword=>{
                if(check.includes(keyword.toLocaleLowerCase())){
                    if(potential_ids.includes(object.id)){
                        potential_ids = potential_ids.filter(id => id === object.id)
                    }
                }
            })
        })
        if(potential_ids.length != 0){
            running = false
            console.log("good")
            getInfoFromID(potential_ids[0], category, style, size)
            //chrome.tabs.create({url: `https://www.supremenewyork.com/shop/${potential_ids[0]}/`})
        }else{
            count++
            setTimeout(function(){
                monitor(delay, positive_keywords, negative_keywords, category, style, size)
            }, delay)
        }
    });
}
function getInfoFromID(id, category, s, product_size){
    console.log(product_size)
    potential_atc = []
    const request = new Request('https://www.supremenewyork.com/shop/' + id + ".json");
    fetch(request)
    .then(response => response.json())
    .then(json => {
        body = json
        body.styles.map(style=>{
            if(style.name.toLocaleLowerCase().includes(s.toLocaleLowerCase())){
                //potential_syle.push(style.id)
                /*potential_atc.push({
                    style: style.id,
                    product: id
                })
                if(product_size === "rs"){
                    const random_size = style.sizes[Math.floor(Math.random() * style.sizes.length)];
                    console.log(random_size)
                    potential_atc.push({
                        style: style.id,
                        size: random_size.id,
                        product: id
                    })
                }else{
                    style.sizes.map(size=>{
                        console.log(size.name)
                        console.log(size.name.toLocaleLowerCase().includes(product_size.toLocaleLowerCase()))
                        if(size.name.toLocaleLowerCase()=== product_size.toLocaleLowerCase()){
                            potential_atc.push({
                                style: style.id,
                                size: size.id,
                                product: id
                            })
                        }
                    })
                }
            }
        })
        if(potential_atc.length != 0){
            chrome.storage.local.set({'atc': {
                style: potential_atc[0].style,
                size: potential_atc[0].size,
                product: id
            }}, (err, result) => {
            });
            chrome.tabs.create({url: `https://www.supremenewyork.com/shop/${category.toLocaleLowerCase()}/${id}/${potential_atc[0].style}`})
        }
    })
}
function sendMessages(type, message){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type: type, message: message}, function(response) {
          console.log(response.farewell);
        });
    });
}
setInterval(() => {
    chrome.storage.local.get({'auth' : {}}, function(result) {
        var key = result.auth.key
        var auth = result.auth.auth
        const request = new Request('https://tweet-ninja.com/api/extension?key=' + key);
            fetch(request)
            .then(response => response.json())
            .then(json => {
                chrome.storage.local.set({'auth': {
                    key: key,
                    authenticated: json
                }}, (err, result) => {
                });
            });
    });
}, 15000);
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.type === "log"){
            var extension_version = chrome.runtime.getManifest().version;
            const req = new Request(`http://178.128.32.114:4000/extension/log?version=${extension_version}&website=${request.website}&action=${request.action}`);
            fetch(req, {method: 'POST'})
            chrome.storage.local.get({'settings' : {}, "webhook": {}}, function(result) {
                var settings = result.settings
                var webhook = result.webhook
                if(settings.discordWebhook){
                    const req = new Request(`http://178.128.32.114:4000/extension/webhook?webhook=${webhook}&version=${extension_version}&website=${request.website}&action=${request.action}`);
                    fetch(req, {method: 'POST'})
                    console.log(webhook)
                }
            });
        }else if(request.type === "test"){
            var extension_version = chrome.runtime.getManifest().version;
            console.log("test")
            chrome.storage.local.get({"webhook": {}}, function(result) {
                var webhook = result.webhook
                    const req = new Request(`http://178.128.32.114:4000/extension/webhook?webhook=${webhook}&version=${extension_version}&website=${request.website}&action=${request.action}`);
                    fetch(req, {method: 'POST'})
                    console.log(webhook)
            });
        }else if(request.type === "start"){
            var extension_version = chrome.runtime.getManifest().version;
            console.log("test")
            chrome.storage.local.get({"task": {}}, function(result) {
                var task = result.task
                const positive_keywords = task.positive_keywords.split(",")
                const negative_keywords = task.negative_keywords.split(",")
                if(running === false){
                    chrome.tabs.create({url: `https://www.supremenewyork.com/`})
                    running = true
                    monitor(task.delay, positive_keywords, negative_keywords, task.category, task.style, task.size)
                }
            });
        }else if(request.type === "stop"){
            running = false
        }else{
            const req = new Request(request.url);
            fetch(req)
                .then(response => response.json())
                .then(json => {
                    console.log(json)
                    sendResponse({login: json});
                });
            return true;
        }
    }
);
*/
