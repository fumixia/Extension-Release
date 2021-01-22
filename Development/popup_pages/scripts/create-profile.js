const profile_name = document.getElementById("profile_name");
const profile_email = document.getElementById("profile_email");
const profile_phone = document.getElementById("profile_phone");

const shipping_fullname = document.getElementById("shipping_fullname");
const shipping_address1 = document.getElementById("shipping_address1");
const shipping_address2 = document.getElementById("shipping_address2");
const shipping_country = document.getElementById("shipping_country");
const shipping_state = document.getElementById("shipping_state");
const shipping_city = document.getElementById("shipping_city");
const shipping_zip = document.getElementById("shipping_zip");

const billing_fullname = document.getElementById("billing_fullname");
const billing_address1 = document.getElementById("billing_address1");
const billing_address2 = document.getElementById("billing_address2");
const billing_country = document.getElementById("billing_country");
const billing_state = document.getElementById("billing_state");
const billing_city = document.getElementById("billing_city");
const billing_zip = document.getElementById("billing_zip");

const card_holder = document.getElementById("card_holder");
const card_number = document.getElementById("card_number");
const card_cvv = document.getElementById("card_cvv");
const expiry_month = document.getElementById("expiry_month");
const expiry_year = document.getElementById("expiry_year");

const same_as_shipping = document.getElementById("same_as_shipping");

const profile_save = document.getElementById("profile_save");

const storage = chrome.storage.local;
let countryData = [];

async function getCountryAndStates () {
    const stmResult = await fetch('https://api.printful.com/countries');
    const result = await stmResult.json();
    const data = result.result;
    data.forEach(country => {
        let optionElm = document.createElement('option');
        optionElm.textContent = country.name;
        optionElm.value = country.code;
        shipping_country.append(optionElm);
    });

    data.forEach(country => {
        let optionElm = document.createElement('option');
        optionElm.textContent = country.name;
        optionElm.value = country.code;
        billing_country.append(optionElm);
    });

    countryData = data;
}
getCountryAndStates();

shipping_country.addEventListener('change', (event) => {
    shipping_state.innerHTML = '<option disabled selected value="">State</option>';
    countryData.forEach(country => {
        if (country.code === event.target.value && country.states !== null) {
            country.states.forEach(state => {
                let stateElm = document.createElement('option');
                stateElm.textContent = state.name;
                stateElm.value = state.code;
                shipping_state.appendChild(stateElm);
            });

            country.states.forEach(state => {
                let stateElm = document.createElement('option');
                stateElm.textContent = state.name;
                stateElm.value = state.code;
                billing_state.appendChild(stateElm);
            })
        }
        return
    })
});

billing_country.addEventListener('change', (event) => {
    billing_state.innerHTML = '<option disabled selected value="">State</option>';
    countryData.forEach(country => {
        if (country.code === event.target.value && country.states !== null) {
            country.states.forEach(state => {
                let stateElm = document.createElement('option');
                stateElm.textContent = state.name;
                stateElm.value = state.code;
                billing_state.appendChild(stateElm);
            })
        }
        return
    })
});

//profile save button listener
profile_save.addEventListener("click", function () {
    profileSave();
});

same_as_shipping.addEventListener("click", function () {
    countryData.forEach(country => {
        if (country.code === shipping_country.value && country.states !== null) {
            country.states.forEach(state => {
                let stateElm = document.createElement('option');
                stateElm.textContent = state.name;
                stateElm.value = state.code;
                billing_state.appendChild(stateElm);
            })
        }
        return
    });

    if (same_as_shipping.checked) {
        billing_fullname.value = shipping_fullname.value;
        billing_address1.value = shipping_address1.value;
        billing_address2.value = shipping_address2.value;
        billing_country.value = shipping_country.value;
        billing_state.value = shipping_state.value;
        billing_city.value = shipping_city.value;
        billing_zip.value = shipping_zip.value;
        billing_fullname.disabled = true;
        billing_address1.disabled = true;
        billing_address2.disabled = true;
        billing_country.disabled = true;
        billing_state.disabled = true;
        billing_city.disabled = true;
        billing_zip.disabled = true;
    } else {
        billing_fullname.value = "";
        billing_address1.value = "";
        billing_address2.value = "";
        billing_country.value = "default";
        billing_state.value = "default";
        billing_city.value = "";
        billing_zip.value = "";
        billing_fullname.disabled = false;
        billing_address1.disabled = false;
        billing_address2.disabled = false;
        billing_country.disabled = false;
        billing_state.disabled = false;
        billing_city.disabled = false;
        billing_zip.disabled = false;
    }
});

function edit_profile() {
    storage.get({ edit_state_profile: '', profiles: [] }, function (result) {
        let edit_state_profile = result.edit_state_profile;

        let edit_profile = result.profiles.filter(profile => profile.id === edit_state_profile)[0];

        if (edit_state_profile) {
            profile_name.value = edit_profile.profile.profileName;
            profile_email.value = edit_profile.profile.email;
            profile_phone.value = edit_profile.profile.phone;
            shipping_fullname.value = edit_profile.profile.shippingFullName;
            shipping_address1.value = edit_profile.profile.shippingAddress1;
            shipping_address2.value = edit_profile.profile.shippingAddress2;
            shipping_country.value = edit_profile.profile.shippingCountry;
            shipping_state.value = edit_profile.profile.shippingState;
            shipping_city.value = edit_profile.profile.shippingCity;
            shipping_zip.value = edit_profile.profile.shippingZip;
            billing_fullname.value = edit_profile.profile.billingFullName;
            billing_address1.value = edit_profile.profile.billingAddress1;
            billing_address2.value = edit_profile.profile.billingAddress2;
            billing_country.value = edit_profile.profile.billingCountry;
            billing_state.value = edit_profile.profile.billingState;
            billing_city.value = edit_profile.profile.billingCity;
            billing_zip.value = edit_profile.profile.billingZip;
            card_holder.value = edit_profile.profile.cHolder;
            card_number.value = edit_profile.profile.cNumber;
            card_cvv.value = edit_profile.profile.cCvv;
            expiry_month.value = edit_profile.profile.cMonth;
            expiry_year.value = edit_profile.profile.cYear;
        }
    });
}
edit_profile();

function profileSave() {
    storage.get('edit_state_profile', function (result) {
        let edit_state_profile = result.edit_state_profile;

        storage.get({ profiles: [], duplicate_profile: {} }, (result) => {
            let profiles = result.profiles;
            let duplicate_item = result.duplicate_profile;

            const newProfile = {
                "id": edit_state_profile ? edit_state_profile : generateId(),
                "cc_last4": card_number.value ? card_number.value.slice(-4) : "0000",
                "profile": {
                    "profileName": profile_name.value ? profile_name.value : "Default Profile",
                    "email": profile_email.value,
                    "phone": profile_phone.value,
                    "shippingFullName": shipping_fullname.value,
                    "shippingAddress1": shipping_address1.value,
                    "shippingAddress2": shipping_address2.value,
                    "shippingCity": shipping_city.value,
                    "shippingCountry": shipping_country.value,
                    "shippingState": shipping_state.value,
                    "shippingZip": shipping_zip.value,
                    "billingFullName": billing_fullname.value,
                    "billingAddress1": billing_address1.value,
                    "billingAddress2": billing_address2.value,
                    "billingCity": billing_city.value,
                    "billingCountry": billing_country.value,
                    "billingState": billing_state.value,
                    "billingZip": billing_zip.value,
                    "cHolder": card_holder.value,
                    "cNumber": card_number.value ? card_number.value : "4242424242424242",
                    "cMonth": expiry_month.value,
                    "cYear": expiry_year.value,
                    "cCvv": card_cvv.value,
                }
            };

            let newProfiles = profiles.map(profile => {
                if (profile.id === edit_state_profile) {
                    return newProfile
                } else {
                    return profile
                }
            });

            if (!edit_state_profile) {
                newProfiles = [newProfile].concat(profiles);
            }

            //init data
            profile_name.value = "";
            profile_email.value = "";
            profile_phone.value = "";
            shipping_fullname.value = "";
            shipping_address1.value = "";
            shipping_address2.value = "";
            shipping_country.value = "default";
            shipping_state.value = "default";
            shipping_city.value = "";
            shipping_zip.value = "";
            billing_fullname.value = "";
            billing_address1.value = "";
            billing_address2.value = "";
            billing_country.value = "default";
            billing_state.value = "default";
            billing_city.value = "";
            billing_zip.value = "";
            card_holder.value = "";
            card_number.value = "";
            card_cvv.value = "";
            expiry_month.value = "";
            expiry_year.value = "";

            storage.set({ profiles: newProfiles }, (result) => {
                if (edit_state_profile) {
                    notificationDisplay("Profile has been updated!");
                    storage.set({ edit_state_profile: null });
                }else if(duplicate_item){
                    notificationDisplay("Profile has been duplicated!");
                    storage.set({ duplicate_profile: null });
                } else {
                    notificationDisplay("Profile has been created!");
                }
            })
        })
    });
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function notificationDisplay(msg) {
    let notification = document.getElementById("notification");
    notification.style.display = "block";

    let elem = document.getElementById("notification-loader");
    let msgElement = document.getElementById("notification-text");
    let width = 50;
    let id = setInterval(frame, 20);
    function frame() {
        if (width === 0) {
            clearInterval(id);
            notification.style.display = "none"
        } else {
            width--;
            elem.style.width = width + '%';
            msgElement.innerHTML = msg
        }
    }
}

function duplicate_profile() {
    storage.get({ duplicate_profile: '', profiles: [] }, function (result) {
        let duplicate_profile = result.duplicate_profile;

        let duplicate = result.profiles.filter(profile => profile.id === duplicate_profile)[0];

        if (duplicate_profile) {
            profile_name.value = duplicate.profile.profileName + " Copy";
            profile_email.value = duplicate.profile.email;
            profile_phone.value = duplicate.profile.phone;
            shipping_fullname.value = duplicate.profile.shippingFullName;
            shipping_address1.value = duplicate.profile.shippingAddress1;
            shipping_address2.value = duplicate.profile.shippingAddress2;
            shipping_country.value = duplicate.profile.shippingCountry;
            shipping_state.value = duplicate.profile.shippingState;
            shipping_city.value = duplicate.profile.shippingCity;
            shipping_zip.value = duplicate.profile.shippingZip;
            billing_fullname.value = duplicate.profile.billingFullName;
            billing_address1.value = duplicate.profile.billingAddress1;
            billing_address2.value = duplicate.profile.billingAddress2;
            billing_country.value = duplicate.profile.billingCountry;
            billing_state.value = duplicate.profile.billingState;
            billing_city.value = duplicate.profile.billingCity;
            billing_zip.value = duplicate.profile.billingZip;
            card_holder.value = duplicate.profile.cHolder;
            card_number.value = duplicate.profile.cNumber;
            card_cvv.value = duplicate.profile.cCvv;
            expiry_month.value = duplicate.profile.cMonth;
            expiry_year.value = duplicate.profile.cYear;

            profile_save.innerHTML = "Duplicate"
        }
    });
}
duplicate_profile();
