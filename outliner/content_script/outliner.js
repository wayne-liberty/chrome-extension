chrome.runtime.sendMessage({action: 'check'});

chrome.runtime.onMessage.addListener(function (req, sender, sendResponse) {
    switch (req.action) {
        case 'toggleOutline': {
            $('*').toggleClass('outline');
            updateStorage(req.url, $('body').hasClass('outline'));
            break;
        }

        case 'on': {
            $('*').toggleClass('outline');
            break;
        }
    }

    function updateStorage(url, outline) {
        const storage = {};
        storage[url] = outline;
        chrome.runtime.sendMessage({
            action: 'update',
            storage: storage
        })
    }
});
