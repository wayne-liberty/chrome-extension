$(function() {
    $('#only').on('click', function() {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                action: 'test'
            });
        });
        // $('button').css('border', '2px solid pink');
        console.log('soemt');
        // alert('something');
    })
})
