chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'click') {
        const more_but = document.querySelector("button#ember549");
        if (more_but) next_but.click();
        sendResponse({ "status": "clicked" })
    }

    if (message.action === 'getProfile') {
        persons = document.querySelectorAll("li.reusable-search__result-container");
        const links = new Array();

        for (const person of persons) {
            const a = person.querySelector("a.app-aware-link");
            links.push(a.getAttribute('href'));
        }
        sendResponse({ links: links });
    }
});