const storage = chrome.storage.local;

const discord_webhook = document.getElementById("discord_webhook");
const twitter_username = document.getElementById("twitter_username");
const discord_username = document.getElementById("discord_username");
const discord_id = document.getElementById("discord_id");

const test_webhook = document.getElementById("test_webhook");
const config_save = document.getElementById("config_save");

storage.set({edit_state_profile: null, duplicate_profile: null});

config_save.addEventListener("click", function() {
    let config_data = {
        discord_webhook: discord_webhook.value,
        twitter_username: twitter_username.value,
        discord_username: discord_username.value,
        discord_id: discord_id.value
    };

    storage.set({config: config_data});
    notificationDisplay('Updated config sucessfully!');
});

function get_config_data() {
    storage.get({config: {}}, function(result) {
        let config_data = result.config;
        if (config_data.discord_id || config_data.discord_username || config_data.discord_webhook || config_data.twitter_username) {
            discord_webhook.value = config_data.discord_webhook;
            twitter_username.value = config_data.twitter_username;
            discord_username.value = config_data.discord_username;
            discord_id.value = config_data.discord_id;
        }
    });
}
get_config_data();

discord_webhook.addEventListener("change", (e) => {
    let config_data = {
        discord_webhook: discord_webhook.value,
        twitter_username: twitter_username.value,
        discord_username: discord_username.value,
        discord_id: discord_id.value
    };

    storage.set({config: config_data});
});

test_webhook.addEventListener("click", function() {
    chrome.storage.local.get({ select_profile:{}, profiles: [], config: {} }, (results) => {
        profiles = results.profiles;
        selected = results.select_profile;
        config = results.config;

        const profile = profiles.filter(profile=> profile.id === selected)[0].profile;

        let url = config.discord_webhook;
        //alert(url);
        const logo = 'https://cdn.discordapp.com/icons/666699726950891521/10b981337466299cde077be64094a787.png?size=1024';
        var request = new XMLHttpRequest();
        const date = new Date();
        const curDate = date.toLocaleDateString();
        const curTime = date.toLocaleTimeString();
        request.open("POST", url);

        request.setRequestHeader('Content-type', 'application/json');

        var embed = {
            title: "Success - Your webhook is working! 🎉",
            color: "8417256",
            /*thumbnail: {
                url: logo
            },*/
            fields: [
                {
                    name: "**Selected Profile**",
                    value: `||${profile.profileName}||`
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
    });

    chrome.runtime.sendMessage({
        type: "test",
        website: "Test Webhook",
        action: "Test Webhook"
    })
    notificationDisplay('Test Webhook sent!')
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


