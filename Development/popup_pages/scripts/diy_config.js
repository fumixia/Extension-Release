const storage = chrome.storage.local;
storage.set({edit_state_profile: null, duplicate_profile: null});

const diy_name = document.getElementById("diy_name");
const diy_site_url = document.getElementById("diy_site_url");
const diy_type = document.getElementById("diy_type");
const diy_keywords = document.getElementById("diy_keywords");
const diy_input_value = document.getElementById("diy_input_value");
const diy_delay = document.getElementById("diy_delay");

const diy_save = document.getElementById("diy_save");

function initDIY() {
    storage.get({diy_config: {}}, result => {
        const diy_config = result.diy_config;
        if (diy_config.diy_name || diy_config.diy_site_url || diy_config.diy_type || diy_config.diy_keywords || diy_config.diy_input_value || diy_config.diy_delay) {
            diy_name.value = result.diy_config.diy_name;
            diy_site_url.value = result.diy_config.diy_site_url;
            diy_type.value = result.diy_config.diy_type;
            diy_keywords.value = result.diy_config.diy_keywords;
            diy_input_value.value = result.diy_config.diy_input_value;
            diy_delay.value = result.diy_config.diy_delay;
        }
    })
}

initDIY();

diy_save.addEventListener('click', function () {
    const diy_values = {
        diy_name: diy_name.value,
        diy_site_url: diy_site_url.value,
        diy_type: diy_type.value,
        diy_keywords: diy_keywords.value,
        diy_input_value: diy_input_value.value,
        diy_delay: diy_delay.value
    };

    storage.set({diy_config: diy_values}, (result) => {
        notificationDisplay('DIY config saved successfully!');
    });
});

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
