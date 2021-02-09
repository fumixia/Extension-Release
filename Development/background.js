const storage = chrome.storage.local;

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action == "openURL") {
        window.open(message.url);
    }
});

function runLinkAppender(base_link, prev_data) {
    let pasteTarget = document.createElement("div");
    pasteTarget.contentEditable = true;
    var actElem = document.activeElement.appendChild(pasteTarget).parentNode;
    pasteTarget.focus();
    document.execCommand("Paste", null, null);
    let paste = pasteTarget.innerText;
    actElem.removeChild(pasteTarget);

    if (paste !== prev_data) {
        window.open(base_link + paste);
    }

    chrome.storage.local.set({clipboard_data: paste});
}

setInterval(() => {
    chrome.storage.local.get({ auth: {}, settings: {}, link_config: {}, clipboard_data: '' }, async (results) => {
        const settings = results.settings;
        const auth = results.auth.authenticated;
        const link = results.link_config;
        const clipboard_data = results.clipboard_data;

        if (auth != true) return;

        if (settings.link_appender) {
            let base_link = link.link_site_url;
            runLinkAppender(base_link, clipboard_data);
        }
    });
}, 100);

setInterval(() => {
    storage.get({ auth: {} }, async (results) => {
        const authentication = results.auth;
        const url = "https://tn-api-2.herokuapp.com/api/v2/license?key=" + authentication.key;

        const result = await fetch(url);

        if (result.statusText === "UNAUTHORIZED") {
            storage.clear();
        }
    })
}, 900000);
