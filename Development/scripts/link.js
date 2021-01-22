window.addEventListener('load', () => {
    chrome.storage.local.get({ auth: {}, settings: {}, link_config: {} }, async (results) => {
        const settings = results.settings;
        const auth = results.auth.authenticated;
        const link = results.link_config;

        if (auth != true) return;

        if (settings.link_appender) {
            let base_link = link.link_site_url;
            runLinkAppender(base_link);
            // runDesktopCopy(base_link);                                   //TODO none completed for copy event for desktop anywhere
        }
    });
});

async function runLinkAppender(base_url) {
    window.addEventListener('copy', event => {
        const url = base_url + event.target.textContent;
        openUrl(url);
    });
}

async function runDesktopCopy(base_url) {
    setInterval(async () => {
        const txt = await navigator.clipboard.readText();
        const url = base_url + txt;
        openUrl(url);
    }, 200);
}

async function openUrl(url) {
    chrome.runtime.sendMessage({ action: "openURL", url: url });
}
