const storage = chrome.storage.local;
storage.set({edit_state_profile: null, duplicate_profile: null});

const link_site_url = document.getElementById("link_site_url");
const link_state = document.getElementById('link_state');
const link_save = document.getElementById("link_save");

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
    single_free_meta_aco: false,
    ten_free_meta_aco: false,
    single_paid_meta_aco: false,
    ducky_aco: false,
    aio_atf: false,
    animation_remover: false,
    link_appender: false,
    google_form_aco: false,
    discord_auth: false,
};

link_state.addEventListener("click", function(){
    storage.get({settings: {}}, function(result) {
        if (result.settings.link_appender !== undefined) {
            storage.set({
                settings: {
                    ...result.settings,
                    link_appender: result.settings.link_appender ? false : true
                }
            });
            if (!result.settings.link_appender) {
                link_state.innerHTML = "On";
                link_state.classList.add('active-state');
            } else {
                link_state.innerHTML = "Off";
                link_state.classList.remove('active-state');
            }
        } else {
            storage.set({
                settings: {
                    ...settings,
                    link_appender: true,
                }
            });
            link_state.innerHTML = "On";
            link_state.classList.add('active-state');
        }
    })
});

function initLink() {
    storage.get({link_config: {}, settings: {}}, result => {
        const link_config = result.link_config;
        if (link_config.link_site_url) {
            link_site_url.value = result.link_config.link_site_url;
            link_state.innerHTML = result.settings.link_appender ? "On" : "Off";
            link_state.class = result.settings.link_appender ? link_state.classList.add('active-state') : link_state.classList.remove('active-state');
        }
    })
}

initLink();

link_save.addEventListener('click', function () {
    const link_value = {
        link_site_url: link_site_url.value
    };

    storage.set({link_config: link_value}, (result) => {
        notificationDisplay('Config saved successfully!');
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
