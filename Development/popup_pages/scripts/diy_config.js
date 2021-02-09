const storage = chrome.storage.local;
storage.set({edit_state_profile: null, duplicate_profile: null});

const diy_name = document.getElementById("diy_name");
const diy_site_url = document.getElementById("diy_site_url");
const diy_type = document.getElementById("diy_type");
const diy_keywords = document.getElementById("diy_keywords");
const diy_input_value = document.getElementById("diy_input_value");
const diy_delay = document.getElementById("diy_delay");

const diy_state = document.getElementById("diy_state");
const diy_save = document.getElementById("diy_save");

const settings = {
    shopify_atf: false,
    shopify_aco: false,
    shopify_auto_atc: false,
    shopify_cart_bypass: false,
    shopify_math_solver: false,
    shopify_request: false,
    shopify_pp_request: false,
    shopify_basic_request: false,
    shopify_pr_request: false,
    stripe_atf: false,
    stripe_aco: false,
    velo_aco: false,
    shrey_aco: false,
    tl_dash_aco: false,
    freddy_dash_aco_dom: false,
    freddy_dash_aco_request: false,
    meta_aco: false,
    meta_atf_aco: false,
    ducky_aco: false,
    aio_atf: false,
    diy_state: false,
    animation_remover: false,
    link_appender: false,
    google_form_aco: false,
    discord_auth: false,
};

function initDIY() {
    storage.get({diy_config: {}, settings: {}}, result => {
        const diy_config = result.diy_config;
        if (diy_config.diy_name || diy_config.diy_site_url || diy_config.diy_type || diy_config.diy_keywords || diy_config.diy_input_value || diy_config.diy_delay) {
            diy_name.value = result.diy_config.diy_name;
            diy_site_url.value = result.diy_config.diy_site_url;
            diy_type.value = result.diy_config.diy_type;
            diy_keywords.value = result.diy_config.diy_keywords;
            diy_input_value.value = result.diy_config.diy_input_value;
            diy_delay.value = result.diy_config.diy_delay;
        }
        diy_state.innerHTML = result.settings.diy_state ? "On" : "Off";
        diy_state.class = result.settings.diy_state ? diy_state.classList.add('active-state') : diy_state.classList.remove('active-state');
    })
}

initDIY();

diy_state.addEventListener("click", function(){
    storage.get({settings: {}}, function(result) {
        if (result.settings.diy_state !== undefined) {
            storage.set({
                settings: {
                    ...result.settings,
                    diy_state: result.settings.diy_state ? false : true
                }
            });
            if (!result.settings.diy_state) {
                diy_state.innerHTML = "On";
                diy_state.classList.add('active-state');
            } else {
                diy_state.innerHTML = "Off";
                diy_state.classList.remove('active-state');
            }
        } else {
            storage.set({
                settings: {
                    ...settings,
                    diy_state: true,
                }
            });
            diy_state.innerHTML = "On";
            diy_state.classList.add('active-state');
        }
    })
});

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
