const addbtn = document.getElementById("add-btn")
const savebtn = document.getElementById("save-btn")
const customdiv = document.getElementById("custom-div")
const taskdelbtn = document.getElementById("delete-btn")

//Generate random key
function generateProductKey() {
    var tokens = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
     chars = 3,
     segments = 1,
     keyString = "";


    function getRandomInt( min, max ) {
        return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    }
     
    for( var i = 0; i < segments; i++ ) {
        var segment = "";
        
        for( var j = 0; j < chars; j++ ) {
            var k = getRandomInt( 0, 35 );
            segment += tokens[k];
        }
        keyString += segment;
    }
    return keyString;
}

var allCustoms = []

chrome.storage.local.get({'clicks' : {}}, function(result) {

    if(result.clicks === undefined){
        chrome.storage.local.set({'clicks': [
        ]}, (err, result) => {
        });
    }else{
        result.clicks.forEach(c =>{
            allCustoms.push(c)
        })
        displayAll()
    }
});

function displayAll(){
    customdiv.innerHTML = '';
    allCustoms.forEach(c =>{
        var node = document.createElement("DIV");
        node.setAttribute("id", "custom-li");

        var key = document.createElement("INPUT");
        key.setAttribute("id", "custom-key");
        key.setAttribute("placeholder", "URL");
        key.setAttribute("class", "key" + c.id);
        key.setAttribute("value", c.website);

        var value = document.createElement("INPUT");
        value.setAttribute("id", "custom-value");
        value.setAttribute("placeholder", "Keyword");
        value.setAttribute("class", "value" + c.id);
        value.setAttribute("value", c.value);

        var delay = document.createElement("INPUT");
        delay.setAttribute("id", "custom-delay");
        delay.setAttribute("placeholder", "Delay");
        delay.setAttribute("class", "delay" + c.id);
        delay.setAttribute("value", c.delay);

        var del = document.createElement("BUTTON");
        del.setAttribute("id", "delete-btn");
        del.setAttribute("class", c.id);

        var img = document.createElement("IMG");
        img.setAttribute("src", "delete.png");
        img.setAttribute("id", "delimg");
        img.setAttribute("class", c.id);

        del.appendChild(img)    
        node.appendChild(key);
        node.appendChild(value);
        node.appendChild(delay);
        node.appendChild(del);
        customdiv.appendChild(node)   
    })
}

addbtn.addEventListener('click', function(){
    const id = generateProductKey()
    saveItems()
    allCustoms.push({
        id: id,
        value: "",
        website: "",
        delay: "500"
    })
    displayAll()
})

savebtn.addEventListener('click', function(){
    saveItems()
})

document.addEventListener("click", function(event){
    if(event.target.id === "delimg"){
        console.log(event.target.className)

        const newCustoms = allCustoms.filter(c=> c.id != event.target.className)

        console.log(newCustoms)

        chrome.storage.local.set({'clicks': newCustoms}, (err, result) => {
        });

        allCustoms = newCustoms

        displayAll()
    }
})

function saveItems(){
    const newCustoms = []

    allCustoms.forEach(c=>{
        const value = document.getElementsByClassName("value" + c.id)[0].value
        const key = document.getElementsByClassName("key" + c.id)[0].value
        const delay = document.getElementsByClassName("delay" + c.id)[0].value

        newCustoms.push({
            id: c.id,
            website: key,
            value: value,
            delay: delay
        })

        console.log(value)
    })

    chrome.storage.local.set({'clicks': newCustoms}, (err, result) => {
    });

    allCustoms = newCustoms
}