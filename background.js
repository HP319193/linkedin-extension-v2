chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'start') {
        console.log("Scraping is started!");
        const links = message.links;

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            // let counter = 0;

            // setInterval(() => {
            // chrome.tabs.update(tabs[0].id, { url: links[counter] });

            // setTimeout(() => {

            // setInterval(() => {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'click' }, function (response) {
                console.log(response.len);
                // send_data(response.data);
            });
            // }, 1000);
            // }, 1000);

            // counter++;
            // }, 60000);
        });
    }
});

function send_data(data) {
    const server_url = 'https://19cb-45-126-3-252.ngrok-free.app/save';

    fetch(server_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
}