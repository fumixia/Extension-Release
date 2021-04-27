const storage = chrome.storage.local;
storage.set({edit_state_profile: null, duplicate_profile: null});

const supreme_size = document.getElementById("supreme_size");
const supreme_category = document.getElementById("supreme_category");
const supreme_delay = document.getElementById("supreme_delay");
const supreme_positive_keywords = document.getElementById("supreme_positive_keywords");
const supreme_negative_keywords = document.getElementById("supreme_negative_keywords");
const supreme_atc = document.getElementById('supreme_atc');
const supreme_aco = document.getElementById('supreme_aco');
const supreme_start = document.getElementById('supreme_start');

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
    supreme_aco: false,
    velo_aco: false,
    shrey_aco: false,
    tl_dash_aco: false,
    tl_dash_request: false,
    mercury_aco: false,
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

supreme_atc.addEventListener("click", function(){
    storage.get({settings: {}, supreme_config: {}}, function(result) {
        if (result.supreme_config.supreme_aco !== undefined) {
            storage.set({
                supreme_config: {
                    ...result.supreme_config,
                    supreme_atc: result.supreme_config.supreme_atc ? false : true
                }
            });
            if (!result.supreme_config.supreme_atc) {
                supreme_atc.classList.add('active-state');
            } else {
                supreme_atc.classList.remove('active-state');
            }
        } else {
            storage.set({
                supreme_config: {
                    ...result.supreme_config,
                    supreme_atc: true
                }
            });
            supreme_atc.classList.add('active-state');
        }
    })
});

supreme_aco.addEventListener("click", function(){
    storage.get({settings: {}, supreme_config: {}}, function(result) {
        if (result.supreme_config.supreme_aco !== undefined) {
            storage.set({
                supreme_config: {
                    ...result.supreme_config,
                    supreme_aco: result.supreme_config.supreme_aco ? false : true
                }
            });
            if (!result.supreme_config.supreme_aco) {
                supreme_aco.classList.add('active-state');
            } else {
                supreme_aco.classList.remove('active-state');
            }
        } else {
            storage.set({
                supreme_config: {
                    ...result.supreme_config,
                    supreme_aco: true
                }
            });
            supreme_aco.classList.add('active-state');
        }
    })
});

supreme_start.addEventListener("click", function(){
    storage.get({settings: {}, supreme_config: {}}, function(result) {
        if (result.supreme_config.supreme_start !== undefined) {
            storage.set({
                settings: {
                    ...result.settings,
                    supreme_aco: result.supreme_config.supreme_start ? false : true
                },
                supreme_config: {
                    ...result.supreme_config,
                    supreme_start: result.supreme_config.supreme_start ? false : true
                }
            });
            if (!result.supreme_config.supreme_start) {
                supreme_start.classList.add('active-state');
                chrome.runtime.sendMessage({ action: 'supreme-monitor-start', data: result.supreme_config });          //send to background monitor start
            } else {
                supreme_start.classList.remove('active-state');
                chrome.runtime.sendMessage({ action: 'supreme-monitor-start', data: result.supreme_config });          //send to background monitor stop
            }
        } else {
            storage.set({
                settings: {
                    ...result.settings,
                    supreme_aco: true
                },
                supreme_config: {
                    ...result.supreme_config,
                    supreme_start: true
                }
            });
            supreme_start.classList.add('active-state');
        }
    })
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

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'supreme-monitor-start-accept-state' && !message.data.state) {
        notificationDisplay(`Off and try to start after ${message.data.delay} sec`);
    }
});

supreme_size.addEventListener("change", event => {
    storage.get({ supreme_config: {} }, result => {
        storage.set({
            supreme_config: {
                ...result.supreme_config,
                supreme_size: event.target.value
            }
        });
    })
});

supreme_category.addEventListener("change", event => {
    storage.get({ supreme_config: {} }, result => {
        storage.set({
            supreme_config: {
                ...result.supreme_config,
                supreme_category: event.target.value
            }
        });
    })
});

supreme_delay.addEventListener("change", event => {
    storage.get({ supreme_config: {} }, result => {
        storage.set({
            supreme_config: {
                ...result.supreme_config,
                supreme_delay: event.target.value
            }
        });
    })
});

supreme_positive_keywords.addEventListener("change", event => {
    storage.get({ supreme_config: {} }, result => {
        storage.set({
            supreme_config: {
                ...result.supreme_config,
                supreme_positive_keywords: event.target.value
            }
        });
    })
});

supreme_negative_keywords.addEventListener("change", event => {
    storage.get({ supreme_config: {} }, result => {
        storage.set({
            supreme_config: {
                ...result.supreme_config,
                supreme_negative_keywords: event.target.value
            }
        });
    })
});

function initSupreme() {
    storage.get({supreme_config: {}, settings: {}}, result => {
        const supreme_config = result.supreme_config;

        supreme_size.value = supreme_config.supreme_size ? supreme_config.supreme_size : 'default';
        supreme_category.value = supreme_config.supreme_category ? supreme_config.supreme_category : 'default';
        supreme_delay.value = supreme_config.supreme_delay ? supreme_config.supreme_delay : 'default';
        supreme_positive_keywords.value = supreme_config.supreme_positive_keywords ? supreme_config.supreme_positive_keywords : '';
        supreme_negative_keywords.value = supreme_config.supreme_negative_keywords ? supreme_config.supreme_negative_keywords : '';

        supreme_atc.class = supreme_config.supreme_atc ? supreme_atc.classList.add('active-state') : supreme_atc.classList.remove('active-state');
        supreme_aco.class = supreme_config.supreme_aco ? supreme_aco.classList.add('active-state') : supreme_aco.classList.remove('active-state');
        supreme_start.class = supreme_config.supreme_start ? supreme_start.classList.add('active-state') : supreme_start.classList.remove('active-state');
    })
}

initSupreme();

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
