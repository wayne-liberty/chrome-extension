chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    switch (request.action) {
        case 'update': {
            chrome.storage.sync.set(request.storage);
            break;
        }

        case 'check' : {
            chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
                chrome.storage.sync.get(tabs[0].url, function (data) {
                    let b;
                    for (let i in data)
                        b = data[i];

                    if (b) {
                        chrome.tabs.sendMessage(tabs[0].id, {action: 'on'});
                    }
                });
            });
            break;
        }
    }
});


