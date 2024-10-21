chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'click') {
        // const more_but = document.querySelector("button#ember549");
        // if (more_but) sendResponse({ "status": "yes" })
        // else sendResponse({ "status": "no" })
        // setInterval(() => {

        // }, 1000);

        let counter = 0;
        let intervalId = setInterval(() => {
            window.scrollBy(0, 200);
            counter++;
            console.log('Counter:', counter);

            // Stop the interval after 5 iterations
            if (counter >= 30) {
                clearInterval(intervalId);
                console.log('Interval stopped after 5 iterations');
            }
        }, 1000);

        persons = document.querySelectorAll("li.reusable-search__result-container");
        sendResponse({ len: persons.length });

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