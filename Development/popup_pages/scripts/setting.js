const storage = chrome.storage.local;

storage.set({edit_state_profile: null, duplicate_profile: null});

const shopify_atf = document.getElementById("shopify_atf");
const shopify_aco = document.getElementById("shopify_aco");
const shopify_auto_atc = document.getElementById("shopify_auto_atc");
const shopify_cart_bypass = document.getElementById("shopify_cart_bypass");
const shopify_math_solver = document.getElementById("shopify_math_solver");
const shopify_basic_request = document.getElementById("shopify_basic_request");
const shopify_pr_request = document.getElementById("shopify_pr_request");
const price_range_state = document.getElementById("price_range_state");
const stripe_atf = document.getElementById("stripe_atf");
const stripe_aco = document.getElementById("stripe_aco");
const supreme_aco = document.getElementById("supreme_aco");

const velo_aco = document.getElementById("velo_aco");
const shrey_aco = document.getElementById("shrey_aco");
const tl_dash_aco = document.getElementById("tl_dash_aco");
const tl_dash_request = document.getElementById("tl_dash_request");
const mercury_aco = document.getElementById("mercury_aco");
const freddy_dash_aco_dom = document.getElementById("freddy_dash_aco_dom");
const freddy_dash_aco_request = document.getElementById("freddy_dash_aco_request");
const multi_meta_aco = document.getElementById("multi_meta_aco");
const meta_aco = document.getElementById("meta_aco");
const meta_atf_aco = document.getElementById("meta_atf_aco");
const ducky_aco = document.getElementById("ducky_aco");

const aio_atf = document.getElementById("aio_atf");
const diy = document.getElementById("diy");
const animation_remover = document.getElementById("animation_remover");
const link_appender = document.getElementById("link_appender");
const google_form_aco = document.getElementById("google_form_aco");
const discord_auth = document.getElementById("discord_auth");
const captcha = document.getElementById("captcha");

const settings = {
    shopify_atf: false,
    shopify_aco: false,
    shopify_auto_atc: false,
    shopify_cart_bypass: false,
    shopify_math_solver: false,
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
    multi_meta_aco: false,
    meta_aco: false,
    meta_atf_aco: false,
    ducky_aco: false,
    aio_atf: false,
    diy_state: false,
    animation_remover: false,
    link_appender: false,
    google_form_aco: false,
    discord_auth: false,
    captcha: false
};

function initSetting() {
    storage.get({settings: {}}, function(result) {
        const setting = result.settings;
        shopify_atf.className = setting.shopify_atf ? 'button-setting active-setting' : 'button-setting';
        shopify_aco.className = setting.shopify_aco ? 'button-setting active-setting' : 'button-setting';
        shopify_auto_atc.className = setting.shopify_auto_atc ? 'button-setting active-setting' : 'button-setting';
        shopify_cart_bypass.className = setting.shopify_cart_bypass ? 'button-setting active-setting' : 'button-setting';
        shopify_math_solver.className = setting.shopify_math_solver ? 'button-setting active-setting' : 'button-setting';
        shopify_basic_request.className = setting.shopify_basic_request ? 'button-setting active-setting' : 'button-setting';
        shopify_pr_request.className = setting.shopify_pr_request ? 'button-setting active-setting' : 'button-setting';
        stripe_atf.className = setting.stripe_atf ? 'button-setting active-setting' : 'button-setting';
        stripe_aco.className = setting.stripe_aco ? 'button-setting active-setting' : 'button-setting';
        supreme_aco.className = setting.supreme_aco ? 'button-setting active-setting' : 'button-setting';

        velo_aco.className = setting.velo_aco ? 'button-setting-dashboard active-setting' : 'button-setting-dashboard';
        shrey_aco.className = setting.shrey_aco ? 'button-setting-dashboard active-setting' : 'button-setting-dashboard';
        tl_dash_aco.className = setting.tl_dash_aco ? 'button-setting-dashboard active-setting' : 'button-setting-dashboard';
        tl_dash_request.className = setting.tl_dash_request ? 'button-setting-dashboard active-setting' : 'button-setting-dashboard';
        mercury_aco.className = setting.mercury_aco ? 'button-setting-dashboard active-setting' : 'button-setting-dashboard';
        freddy_dash_aco_dom.className = setting.freddy_dash_aco_dom ? 'button-setting-dashboard active-setting' : 'button-setting-dashboard';
        freddy_dash_aco_request.className = setting.freddy_dash_aco_request ? 'button-setting-dashboard active-setting' : 'button-setting-dashboard';
        multi_meta_aco.className = setting.multi_meta_aco ? 'button-setting-dashboard active-setting' : 'button-setting-dashboard';
        meta_aco.className = setting.meta_aco ? 'button-setting-dashboard active-setting' : 'button-setting-dashboard';
        meta_atf_aco.className = setting.meta_atf_aco ? 'button-setting-dashboard active-setting' : 'button-setting-dashboard';
        ducky_aco.className = setting.ducky_aco ? 'button-setting-dashboard active-setting' : 'button-setting-dashboard';

        aio_atf.className = setting.aio_atf ? 'button-setting active-setting' : 'button-setting';
        diy.className = setting.diy_state ? 'button-setting active-setting' : 'button-setting';
        animation_remover.className = setting.animation_remover ? 'button-setting active-setting' : 'button-setting';
        link_appender.className = setting.link_appender ? 'button-setting active-setting' : 'button-setting';
        google_form_aco.className = setting.google_form_aco ? 'button-setting active-setting' : 'button-setting';
        discord_auth.className = setting.discord_auth ? 'button-setting active-setting' : 'button-setting';
        captcha.className = setting.captcha ? 'button-setting active-setting' : 'button-setting';
    })
}

initSetting();

//Modules
shopify_atf.addEventListener('click', function() {
    storage.get({settings: {}}, function(result) {
        if (result.settings.shopify_atf !== undefined) {
            storage.set({
                settings: {
                    ...result.settings,
                    shopify_atf: result.settings.shopify_atf ? false : true
                }
            });
        } else {
            storage.set({
                settings: {
                    ...settings,
                    shopify_atf: true,
                }
            });
        }

        if (result.settings.shopify_atf) {
            shopify_atf.className = 'button-setting';
        } else {
            shopify_atf.className = 'button-setting active-setting';
        }
    })
});

shopify_aco.addEventListener('click', function() {
    storage.get({settings: {}}, function(result) {
        if (result.settings.shopify_aco !== undefined) {
            storage.set({
                settings: {
                    ...result.settings,
                    shopify_aco: result.settings.shopify_aco ? false : true
                }
            });
        } else {
            storage.set({
                settings: {
                    ...settings,
                    shopify_aco: true,
                }
            });
        }

        if (result.settings.shopify_aco) {
            shopify_aco.className = 'button-setting';
        } else {
            shopify_aco.className = 'button-setting active-setting';
        }
    })
});

shopify_auto_atc.addEventListener('click', function() {
    storage.get({settings: {}}, function(result) {
      if (result.settings.shopify_auto_atc !== undefined) {
        storage.set({
            settings: {
                ...result.settings,
                shopify_auto_atc: result.settings.shopify_auto_atc ? false : true
            }
        });
      } else {
          storage.set({
              settings: {
                  ...settings,
                  shopify_auto_atc: true
              }
          });
      }

      if (result.settings.shopify_auto_atc) {
          shopify_auto_atc.className = 'button-setting';
      } else {
          shopify_auto_atc.className = 'button-setting active-setting';
      }
    })
});

shopify_cart_bypass.addEventListener('click', function() {
    storage.get({settings: {}}, function(result) {
        if (result.settings.shopify_cart_bypass !== undefined) {
            storage.set({
                settings: {
                    ...result.settings,
                    shopify_cart_bypass: result.settings.shopify_cart_bypass ? false : true
                }
            });
        } else {
            storage.set({
                settings: {
                    ...settings,
                    shopify_cart_bypass: true,
                }
            });
        }

        if (result.settings.shopify_cart_bypass) {
            shopify_cart_bypass.className = 'button-setting';
        } else {
            shopify_cart_bypass.className = 'button-setting active-setting';
        }
    })
});

shopify_math_solver.addEventListener('click', function() {
    storage.get({settings: {}}, function(result) {
        if (result.settings.shopify_math_solver !== undefined) {
            storage.set({
                settings: {
                    ...result.settings,
                    shopify_math_solver: result.settings.shopify_math_solver ? false : true
                }
            });
        } else {
            storage.set({
                settings: {
                    ...settings,
                    shopify_math_solver: true,
                }
            });
        }

        if (result.settings.shopify_math_solver) {
            shopify_math_solver.className = 'button-setting';
        } else {
            shopify_math_solver.className = 'button-setting active-setting';
        }
    })
});

shopify_basic_request.addEventListener('click', function() {
    storage.get({settings: {}}, function(result) {
        if (result.settings.shopify_basic_request !== undefined) {
            storage.set({
                settings: {
                    ...result.settings,
                    shopify_basic_request: result.settings.shopify_basic_request ? false : true
                }
            });
        } else {
            storage.set({
                settings: {
                    ...settings,
                    shopify_basic_request: true,
                }
            });
        }

        if (result.settings.shopify_basic_request) {
            shopify_basic_request.className = 'button-setting';
        } else {
            shopify_basic_request.className = 'button-setting active-setting';
        }
    })
});

shopify_pr_request.addEventListener('click', function() {
    window.location.href = 'price_range.html';
});

stripe_atf.addEventListener('click', function() {
    storage.get({settings: {}}, function(result) {
        if (result.settings.stripe_atf !== undefined) {
            storage.set({
                settings: {
                    ...result.settings,
                    stripe_atf: result.settings.stripe_atf ? false : true
                }
            });
        } else {
            storage.set({
                settings: {
                    ...settings,
                    stripe_atf: true,
                }
            });
        }

        if (result.settings.stripe_atf) {
            stripe_atf.className = 'button-setting';
        } else {
            stripe_atf.className = 'button-setting active-setting';
        }
    })
});

stripe_aco.addEventListener('click', function() {
    storage.get({settings: {}}, function(result) {
        if (result.settings.stripe_aco !== undefined) {
            storage.set({
                settings: {
                    ...result.settings,
                    stripe_aco: result.settings.stripe_aco ? false : true
                }
            });
        } else {
            storage.set({
                settings: {
                    ...settings,
                    stripe_aco: true,
                }
            });
        }

        if (result.settings.stripe_aco) {
            stripe_aco.className = 'button-setting';
        } else {
            stripe_aco.className = 'button-setting active-setting';
        }
    })
});

//Scripts
velo_aco.addEventListener('click', function() {
    storage.get({settings: {}}, function(result) {
        if (result.settings.velo_aco !== undefined) {
            storage.set({
                settings: {
                    ...result.settings,
                    velo_aco: result.settings.velo_aco ? false : true
                }
            });
        } else {
            storage.set({
                settings: {
                    ...settings,
                    velo_aco: true
                }
            });
        }

        if (result.settings.velo_aco) {
            velo_aco.className = 'button-setting-dashboard';
        } else {
            velo_aco.className = 'button-setting-dashboard active-setting';
        }
    })
});

shrey_aco.addEventListener('click', function() {
    storage.get({settings: {}}, function(result) {
        if (result.settings.shrey_aco !== undefined) {
            storage.set({
                settings: {
                    ...result.settings,
                    shrey_aco: result.settings.shrey_aco ? false : true
                }
            });
        } else {
            storage.set({
                settings: {
                    ...settings,
                    shrey_aco: true,
                }
            });
        }

        if (result.settings.shrey_aco) {
            shrey_aco.className = 'button-setting-dashboard';
        } else {
            shrey_aco.className = 'button-setting-dashboard active-setting';
        }
    })
});

tl_dash_aco.addEventListener('click', function() {
    storage.get({settings: {}}, function(result) {
        if (result.settings.tl_dash_aco !== undefined) {
            storage.set({
                settings: {
                    ...result.settings,
                    tl_dash_aco: result.settings.tl_dash_aco ? false : true
                }
            });
        } else {
            storage.set({
                settings: {
                    ...settings,
                    tl_dash_aco: true,
                }
            });
        }

        if (result.settings.tl_dash_aco) {
            tl_dash_aco.className = 'button-setting-dashboard';
        } else {
            tl_dash_aco.className = 'button-setting-dashboard active-setting';
        }
    })
});

tl_dash_request.addEventListener('click', function() {
    storage.get({settings: {}}, function(result) {
        if (result.settings.tl_dash_request !== undefined) {
            storage.set({
                settings: {
                    ...result.settings,
                    tl_dash_request: result.settings.tl_dash_request ? false : true
                }
            });
        } else {
            storage.set({
                settings: {
                    ...settings,
                    tl_dash_request: true,
                }
            });
        }

        if (result.settings.tl_dash_request) {
            tl_dash_request.className = 'button-setting-dashboard';
        } else {
            tl_dash_request.className = 'button-setting-dashboard active-setting';
        }
    })
});

mercury_aco.addEventListener('click', function() {
    storage.get({settings: {}}, function(result) {
        if (result.settings.mercury_aco !== undefined) {
            storage.set({
                settings: {
                    ...result.settings,
                    mercury_aco: result.settings.mercury_aco ? false : true
                }
            });
        } else {
            storage.set({
                settings: {
                    ...settings,
                    mercury_aco: true,
                }
            });
        }

        if (result.settings.mercury_aco) {
            mercury_aco.className = 'button-setting-dashboard';
        } else {
            mercury_aco.className = 'button-setting-dashboard active-setting';
        }
    })
});

freddy_dash_aco_dom.addEventListener('click', function() {
    storage.get({settings: {}}, function(result) {
        if (result.settings.freddy_dash_aco_dom !== undefined) {
            storage.set({
                settings: {
                    ...result.settings,
                    freddy_dash_aco_dom: result.settings.freddy_dash_aco_dom ? false : true,
                }
            });
        } else {
            storage.set({
                settings: {
                    ...settings,
                    freddy_dash_aco_dom: true,
                }
            });
        }

        if (result.settings.freddy_dash_aco_dom) {
            freddy_dash_aco_dom.className = 'button-setting-dashboard';
        } else {
            freddy_dash_aco_dom.className = 'button-setting-dashboard active-setting';
        }
    })
});

freddy_dash_aco_request.addEventListener('click', function() {
    storage.get({settings: {}}, function(result) {
        if (result.settings.freddy_dash_aco_request !== undefined) {
            storage.set({
                settings: {
                    ...result.settings,
                    freddy_dash_aco_request: result.settings.freddy_dash_aco_request ? false : true,
                }
            });
        } else {
            storage.set({
                settings: {
                    ...settings,
                    freddy_dash_aco_request: true,
                    freddy_dash_aco_dom: false
                }
            });
        }

        if (result.settings.freddy_dash_aco_request) {
            freddy_dash_aco_request.className = 'button-setting-dashboard';
        } else {
            freddy_dash_aco_request.className = 'button-setting-dashboard active-setting';
        }
    })
});

multi_meta_aco.addEventListener('click', function() {
    storage.get({settings: {}}, function(result) {
        if (result.settings.multi_meta_aco !== undefined) {
            storage.set({
                settings: {
                    ...result.settings,
                    multi_meta_aco: result.settings.multi_meta_aco ? false : true
                }
            });
        } else {
            storage.set({
                settings: {
                    ...settings,
                    multi_meta_aco: true,
                }
            });
        }

        if (result.settings.multi_meta_aco) {
            multi_meta_aco.className = 'button-setting-dashboard';
        } else {
            multi_meta_aco.className = 'button-setting-dashboard active-setting';
        }
    })
});

meta_aco.addEventListener('click', function() {
    storage.get({settings: {}}, function(result) {
        if (result.settings.meta_aco !== undefined) {
            storage.set({
                settings: {
                    ...result.settings,
                    meta_aco: result.settings.meta_aco ? false : true
                }
            });
        } else {
            storage.set({
                settings: {
                    ...settings,
                    meta_aco: true,
                }
            });
        }

        if (result.settings.meta_aco) {
            meta_aco.className = 'button-setting-dashboard';
        } else {
            meta_aco.className = 'button-setting-dashboard active-setting';
        }
    })
});

meta_atf_aco.addEventListener('click', function() {
    storage.get({settings: {}}, function(result) {
        if (result.settings.meta_atf_aco !== undefined) {
            storage.set({
                settings: {
                    ...result.settings,
                    meta_atf_aco: result.settings.meta_atf_aco ? false : true
                }
            });
        } else {
            storage.set({
                settings: {
                    ...settings,
                    meta_atf_aco: true,
                }
            });
        }

        if (result.settings.meta_atf_aco) {
            meta_atf_aco.className = 'button-setting-dashboard';
        } else {
            meta_atf_aco.className = 'button-setting-dashboard active-setting';
        }
    })
});

ducky_aco.addEventListener('click', function() {
    storage.get({settings: {}}, function(result) {
        if (result.settings.ducky_aco !== undefined) {
            storage.set({
                settings: {
                    ...result.settings,
                    ducky_aco: result.settings.ducky_aco ? false : true
                }
            });
        } else {
            storage.set({
                settings: {
                    ...settings,
                    ducky_aco: true,
                }
            });
        }

        if (result.settings.ducky_aco) {
            ducky_aco.className = 'button-setting-dashboard';
        } else {
            ducky_aco.className = 'button-setting-dashboard active-setting';
        }
    })
});


// Other
aio_atf.addEventListener('click', function() {
    storage.get({settings: {}}, function(result) {
        if (result.settings.aio_atf !== undefined) {
            storage.set({
                settings: {
                    ...result.settings,
                    aio_atf: result.settings.aio_atf ? false : true
                }
            });
        } else {
            storage.set({
                settings: {
                    ...settings,
                    aio_atf: true,
                }
            });
        }

        if (result.settings.aio_atf) {
            aio_atf.className = 'button-setting';
        } else {
            aio_atf.className = 'button-setting active-setting';
        }
    })
});

diy.addEventListener('click', function () {
    window.location.href = 'diy_config.html';
});

supreme_aco.addEventListener('click', function () {
    window.location.href = 'supreme_config.html';
});

animation_remover.addEventListener('click', function() {
    storage.get({settings: {}}, function(result) {
        if (result.settings.animation_remover !== undefined) {
            storage.set({
                settings: {
                    ...result.settings,
                    animation_remover: result.settings.animation_remover ? false : true
                }
            });
        } else {
            storage.set({
                settings: {
                    ...settings,
                    animation_remover: true,
                }
            });
        }

        if (result.settings.animation_remover) {
            animation_remover.className = 'button-setting';
        } else {
            animation_remover.className = 'button-setting active-setting';
        }
    })
});

link_appender.addEventListener('click', function(){
    window.location.href = 'link_appender.html';
});

google_form_aco.addEventListener('click', function() {
    storage.get({settings: {}}, function(result) {
        if (result.settings.google_form_aco !== undefined) {
            storage.set({
                settings: {
                    ...result.settings,
                    google_form_aco: result.settings.google_form_aco ? false : true
                }
            });
        } else {
            storage.set({
                settings: {
                    ...settings,
                    google_form_aco: true
                }
            });
        }

        if (result.settings.google_form_aco) {
            google_form_aco.className = 'button-setting';
        } else {
            google_form_aco.className = 'button-setting active-setting';
        }
    })
});

discord_auth.addEventListener('click', function() {
    storage.get({settings: {}}, function(result) {
        if (result.settings.discord_auth !== undefined) {
            storage.set({
                settings: {
                    ...result.settings,
                    discord_auth: result.settings.discord_auth ? false : true
                }
            });
        } else {
            storage.set({
                settings: {
                    ...settings,
                    discord_auth: true
                }
            });
        }

        if (result.settings.discord_auth) {
            discord_auth.className = 'button-setting';
        } else {
            discord_auth.className = 'button-setting active-setting';
        }
    })
});

captcha.addEventListener('click', function() {
    storage.get({settings: {}}, function(result) {
        if (result.settings.captcha !== undefined) {
            storage.set({
                settings: {
                    ...result.settings,
                    captcha: result.settings.captcha ? false : true
                }
            });
        } else {
            storage.set({
                settings: {
                    ...settings,
                    captcha: true
                }
            });
        }

        if (result.settings.captcha) {
            captcha.className = 'button-setting';
        } else {
            captcha.className = 'button-setting active-setting';
        }
    })
});
