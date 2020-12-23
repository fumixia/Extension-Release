setInterval(() => {
	chrome.storage.local.get({ select_profile:{}, profiles: [], auth:{}, settings: {} }, (results) => {
        settings = results.settings;
        auth = results.auth.authenticated;
        profiles = results.profiles;
        selected = results.select_profile;

        const profile = profiles.filter(profile=> profile.id === selected)[0].profile;

		if(auth != true) return;
			
			if(settings.ducky_aco){
                //console.log("ducky");
				if (profile) {
					fill('email', profile.email);
					fill('name', profile.billingFullName);
					fill('cc-exp', `${profile.cMonth} / ${profile.cYear}`); 
					fill('cc-csc', profile.cCvv);
	                fill('cc-number', profile.cNumber);
                    fill('postal-code', profile.billingZip);

                    //fill('cardNumber', profile.cNumber);
                    //fill('cardCvc', profile.cCvv);
                }
			}
	});
}, 200);

function fill(name, value) {
	fillByAutocomplete(name, value);
	fillByName(name, value);
	fillByAriaLabel(name, value);
	fillByPlaceholder(name, value);
	fillByType(name, value);
	fillById(name, value);
    fillByControlName(name, value);
}

function fillById(name, value) {
    let elements = document.querySelectorAll(`[id*=${name} i]`);

	elements.forEach(function (element) {
		autofill(element, value);
	});
}

function fillByControlName(name, value) {
    let elements = document.querySelectorAll(`[formcontrolname*=${name} i]`);

	elements.forEach(function (element) {
		autofill(element, value);
	});
}

function fillByClass(name, value) {
	let elements = document.querySelectorAll(`[class*=${name} i]`);

	elements.forEach(function (element) {
		autofill(element, value);
	});
}

function fillByName(name, value) {
	let elements = document.querySelectorAll(`[name*=${name} i]`);

	elements.forEach(function (element) {
		autofill(element, value);
	});
}

function fillByAutocomplete(name, value) {
	let elements = document.querySelectorAll(`[autocomplete*=${name} i]`);

	elements.forEach(function (element) {
		autofill(element, value);
	});
}

function fillByPlaceholder(name, value) {
	let elements = document.querySelectorAll(`[placeholder*=${name} i]`);
	
	elements.forEach(function (element) {
		autofill(element, value);
	});
}

function fillByAriaLabel(name, value) {
	let elements = document.querySelectorAll(`[aria-label*=${name} i]`);

	elements.forEach(function (element) {
		autofill(element, value);
	});
}

function fillByType(name, value) {
	let elements = document.querySelectorAll(`[type=${name}]`);

	elements.forEach(function (element) {
		autofill(element, value);
	});
}


function autofill(element, value) {
	let filled = false
	
	if(element.getAttribute("AlreadyFilled") != "true"){

		if(element.type){
			if(element.type.toLocaleLowerCase().includes("select")){
				let options = element.getElementsByTagName("option")

				options = Array.from(options)
				options.map(option=>{
					if(filled === false){
						if(option.innerHTML.toLocaleLowerCase().includes(value.toLocaleLowerCase())){
							filled = true
							//console.log(option)
							let event = document.createEvent("HTMLEvents");
							element.focus()
							event.initEvent('change', true, false);
							element.value = option.value;
							element.blur()
							element.dispatchEvent(event);
                            element.setAttribute("AlreadyFilled", "true")
                            //console.log("filled");
						}
					}
				})
			}else{
                let event = document.createEvent("HTMLEvents");
                //element.focus()
                //element.click()
                event.initEvent('change', true, false);
                element.value = value;
                //element.blur()
                element.dispatchEvent(event);
                element.setAttribute("AlreadyFilled", "true")
                //console.log("filled");
                //console.log(element);
            }
		}
	}
}