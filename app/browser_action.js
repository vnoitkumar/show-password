var toggle = 0;
chrome.browserAction.onClicked.addListener(function (tab) {
    if (!toggle) {
        toggle = 1;
        chrome.browserAction.setIcon({
            path: "img/show-icon-16X16.png" // Show
        });
        chrome.tabs.executeScript(null, {
            file: "show_password.js"
        });
    } else {
        toggle = 0;
        chrome.browserAction.setIcon({
            path: "img/app-icon-16X16.png" // Hide
        });
        chrome.tabs.executeScript(null, {
            file: "hide_password.js"
        });
    }
});
