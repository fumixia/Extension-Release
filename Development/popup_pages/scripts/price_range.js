const storage = chrome.storage.local;
storage.set({edit_state_profile: null, duplicate_profile: null});

const min_price = document.getElementById("min_price");
const max_price = document.getElementById("max_price");
const price_range_state = document.getElementById("price_range_state");
const price_range_save = document.getElementById("price_range_save");

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

function initLoad() {
    storage.get({settings: {}, price_range: {}}, result => {
        const pr_config = result.settings.shopify_pr_request;
        min_price.value = result.price_range.min_price ? result.price_range.min_price : '';
        max_price.value = result.price_range.max_price ? result.price_range.max_price : '';
        price_range_state.innerHTML = pr_config ? "On" : "Off";
        price_range_state.class = pr_config ? price_range_state.classList.add('active-state') : price_range_state.classList.remove('active-state');
    })
}
initLoad();

price_range_state.addEventListener('click', function() {
    storage.get({settings: {}}, function(result) {
        if (result.settings.shopify_pr_request !== undefined) {
            storage.set({
                settings: {
                    ...result.settings,
                    shopify_pr_request: result.settings.shopify_pr_request ? false : true
                }
            });
            if (!result.settings.shopify_pr_request) {
                price_range_state.innerHTML = "On";
                price_range_state.classList.add('active-state');
            } else {
                price_range_state.innerHTML = "Off";
                price_range_state.classList.remove('active-state');
            }
        } else {
            storage.set({
                settings: {
                    ...settings,
                    shopify_pr_request: true,
                }
            });
            price_range_state.innerHTML = "On";
            price_range_state.classList.add('active-state');
        }
    })
});

price_range_save.addEventListener('click', function() {
    const price_range = {
        min_price: min_price.value,
        max_price: max_price.value
    };

    storage.set({price_range: price_range}, (result) => {
        notificationDisplay('Price Range saved successfully!');
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
