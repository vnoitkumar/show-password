chrome.browserAction.onClicked.addListener(function(tab) {
    toggle = !toggle;
    console.log('onClicked');
    if (toggle) {
        chrome.browserAction.setIcon({
            path: "icon-16X16.png" // Show
        });
        chrome.tabs.executeScript(null, {
            file: "show_password.js"
        });
    } else {
        chrome.browserAction.setIcon({
            path: "icon-16X16.png" // Hide
        });
        chrome.tabs.executeScript(null, {
            file: "hide_password.js"
        });
    }

});