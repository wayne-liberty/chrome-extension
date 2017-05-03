// chrome.runtime.sendMessage({
//     action: "show"
// });
chrome.runtime.onMessage.addListener(function(req, sender, sendResponse) {
    if (req.action == 'test') {
        // alert('test');
        $('div').toggleClass('outline');
    }
});
