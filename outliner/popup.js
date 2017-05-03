$(function () {
    $('#only').on('click', function () {
        toggleOutline();
    });

    function toggleOutline() {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                action: 'toggleOutline',
                url: tabs[0].url
            });
        });
    }
});
