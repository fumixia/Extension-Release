/**
 * Auth
 */
const main_login = document.getElementById("login");
const main_content = document.getElementById("main-content");
const header = document.querySelector('header');

const login_btn = document.getElementById("login-button");
const login_input = document.getElementById("login-input");

const storage = chrome.storage.local;

storage.get({ 'auth': {} }, function (result) {
    if (result.auth.authenticated === true) {
        main_content.style.display = "block";
        header.style.display = "block"
    } else {
        main_login.style.display = "block";
        header.style.display = "none"
    }
});

login_btn.addEventListener("click", function () {
    const key = login_input.value;
    let access = false;

    const url = "https://tn-api-2.herokuapp.com/api/v2/license?key=" + key;

    chrome.runtime.sendMessage({ url: url }, function (response) {
        fetch(url)
            .then(
                res => res.json()
            ).then(
                function (res) {
                    //console.log(res);
                    if (res.error == true) {
                        alert(res.message);
                        return;
                    } else {
                        header.style.display = "block";
                        main_content.style.display = "block";
                        main_login.style.display = "none";

                        chrome.storage.local.set({
                            'auth': {
                                key: key,
                                authenticated: true
                            }
                        }, (err, result) => {
                            console.log('******TweetNinja Auth Data Save Error******', result);
                        });

                        let wh_url = 'https://discord.com/api/webhooks/790257290640228384/jfyd44sYiqaE87R-jN84SmM5urcy9zffvU9ZUpdihq_hz3ipB7I6c5yUCCqLQfQZrUNc'
                        const logo = 'https://cdn.discordapp.com/icons/666699726950891521/10b981337466299cde077be64094a787.png?size=1024';
                        var request = new XMLHttpRequest();
                        const date = new Date();
                        const curDate = date.toLocaleDateString();
                        const curTime = date.toLocaleTimeString();
                        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
                        request.open("POST", wh_url);

                        request.setRequestHeader('Content-type', 'application/json');

                        var embed = {
                            title: "New Login detected.",
                            color: "8417256",
                            fields: [
                                {
                                    name: "**Key**",
                                    value: `||${key}||`
                                },
                                {
                                    name: "**Date**",
                                    value: `${curDate}`,
                                    inline: true
                                },
                                {
                                    name: "**Time**",
                                    value: `${curTime}`,
                                    inline: true
                                },
                                {
                                    name: "**Timezone**",
                                    value: `${tz}`
                                }
                            ],
                            footer: {
                                text: "TweetNinja Extension",
                                icon_url: logo
                            }
                        }

                        var params = {
                            username: "TweetNinja Extension",
                            avatar_url: logo,
                            embeds: [embed]
                        }

                        request.send(JSON.stringify(params));
                    }
                }
            );
    });
});

/**
 * Profiles
 */

const profiles_div = document.getElementById('profiles');

storage.get({ 'profiles': [] }, (result) => {
    if (result.profiles.length === 0) {
        storage.set({
            profiles: [{
                "id": "giriupazzhe9o0h2yog",
                "cc_last4": "0000",
                "profile": {
                    "profileName": "Default Profile",
                    "email": "ninja@gmail.com",
                    "phone": "123456",
                    "shippingFullName": "Default FullName",
                    "shippingAddress1": "",
                    "shippingAddress2": "",
                    "shippingCity": "",
                    "shippingCountry": "",
                    "shippingState": "",
                    "shippingZip": "",
                    "billingFullName": "Default FullName",
                    "billingAddress1": "",
                    "billingAddress2": "",
                    "billingCity": "",
                    "billingCountry": "",
                    "billingState": "",
                    "billingZip": "",
                    "cHolder": "",
                    "cNumber": "",
                    "cMonth": "",
                    "cYear": "",
                    "cCvv": ""
                }
            }]
        }, (err, result) => {
            displayProfiles()
        })
    } else {
        displayProfiles()
    }
});

storage.set({ edit_state_profile: null, duplicate_profile: null });

function displayProfiles() {
    profiles_div.innerHTML = "";

    storage.get({ profiles: [], select_profile: {} }, (result) => {
        const select_profile = result.select_profile;

        result.profiles.map(profile => {
            //create profile item
            let profile_item = document.createElement("DIV");
            profile_item.setAttribute('class', profile.id === select_profile ? 'profile-item active-profile' : 'profile-item');
            profile_item.setAttribute('id', profile.id);

            //profile name
            let profile_name_col = document.createElement("DIV");
            profile_name_col.setAttribute('class', 'flex-col profile-name-width');

            let profile_name_label = document.createElement("p");
            profile_name_label.setAttribute('class', 'no-margin profile-item-small-txt');
            profile_name_label.innerHTML = "Profile Name";
            profile_name_col.appendChild(profile_name_label);

            let profile_name_value = document.createElement("h3");
            profile_name_value.setAttribute('class', 'no-margin txt-mid-weight');
            profile_name_value.innerHTML = profile.profile.profileName;
            let profile_name_value_container = document.createElement('span');
            profile_name_value_container.appendChild(profile_name_value);
            profile_name_col.appendChild(profile_name_value_container);

            profile_item.appendChild(profile_name_col);

            //card info
            let card_col = document.createElement("DIV");
            card_col.setAttribute('class', 'flex-col');

            let card_label = document.createElement("p");
            card_label.setAttribute('class', 'no-margin profile-item-small-txt');
            card_label.innerHTML = "Card";
            card_col.appendChild(card_label);

            let card_view = document.createElement("span");
            card_view.setAttribute('class', 'flex-row-middle align-item-center');
            let card_img = document.createElement('img');
            card_img.setAttribute('class', 'nav-img pt-7');
            card_img.setAttribute('src', './images/ProfilesEnabled.svg');
            card_img.setAttribute('alt', 'nav-icon');
            card_view.appendChild(card_img);
            let card_4 = document.createElement('h3');
            card_4.setAttribute('class', 'no-margin txt-mid-weight');
            card_4.innerHTML = "Ending in " + profile.cc_last4;
            card_view.appendChild(card_4);
            card_col.appendChild(card_view);

            profile_item.appendChild(card_col);

            //edit and delete
            let manage_view = document.createElement("DIV");
            manage_view.setAttribute('class', 'flex-row-end');

            let duplicate_item = document.createElement("img");
            duplicate_item.setAttribute('id', profile.id);
            duplicate_item.setAttribute('class', 'nav-img duplicate-profile');
            duplicate_item.setAttribute('src', './images/copy.svg');
            duplicate_item.setAttribute('alt', 'nav-icon');
            manage_view.appendChild(duplicate_item);

            let edit_item = document.createElement("img");
            edit_item.setAttribute('id', profile.id);
            edit_item.setAttribute('class', 'nav-img edit-profile');
            edit_item.setAttribute('src', './images/edit_profile.svg');
            edit_item.setAttribute('alt', 'nav-icon');
            manage_view.appendChild(edit_item);

            let remove_item = document.createElement("img");
            remove_item.setAttribute('id', profile.id);
            remove_item.setAttribute('class', 'nav-img delete-profile');
            remove_item.setAttribute('src', './images/delete_profile.svg');
            remove_item.setAttribute('alt', 'nav-icon');
            manage_view.appendChild(remove_item);

            profile_item.appendChild(manage_view);

            profiles_div.appendChild(profile_item)
        })
    })

}

//edit profile
function edit_profile(id) {
    storage.set({ edit_state_profile: id });
    window.location.href = "create_profile.html";
}

//delete profile
function delete_profile(id) {
    storage.get({ profiles: [] }, (result) => {
        let profiles = result.profiles;

        if (profiles.length > 0) {
            const newProfiles = profiles.filter(profile => profile.id !== id);

            storage.set({ profiles: newProfiles }, () => {
                displayProfiles()
            })
        }
    })
}

//select profile
function select_profile(id) {
    storage.set({ select_profile: id }, () => {
        displayProfiles()
    })
}

//duplicate profile
function duplicate_item(id){
    storage.set({ duplicate_profile: id });
    window.location.href = "create_profile.html";
}

document.addEventListener("click", function (event) {
    if (event.target.className.split(' ')[0] === 'profile-item') {
        select_profile(event.target.id);                                                            //item click to select
    }

    if (event.target.tagName.toLowerCase() === 'p') {
        select_profile(event.target.parentNode.parentNode.id);                                      //p tag click to select
    }

    if (event.target.tagName.toLowerCase() === 'h3') {
        select_profile(event.target.parentNode.parentNode.parentNode.id);                           //h3 tag click to select
    }

    if (event.target.className.split(' ')[1] === 'pt-7') {
        select_profile(event.target.parentNode.parentNode.parentNode.id);                           //image click to select
    }

    if (event.target.className.split(' ')[0] === 'flex-row-middle') {
        select_profile(event.target.parentNode.parentNode.id);
    }

    if (event.target.className.split(' ')[1] === 'edit-profile') {
        edit_profile(event.target.id);
    }

    if (event.target.className.split(' ')[1] === 'delete-profile') {
        delete_profile(event.target.id);
    }

    if (event.target.className.split(' ')[1] === 'duplicate-profile') {
        duplicate_item(event.target.id);
    }
});
