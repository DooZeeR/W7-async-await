const renderCountryNames = (countries) => {
    let returnHTML = "";
    for (const item of countries) {
        returnHTML += `<div> ${item.name.official}</div>`;
    }
    return returnHTML;
};
const renderCountryFlags = (countries) => {
    let returnHTML = "";
    for (const item of countries) {
        returnHTML += `<img src="${item.flags.png}">`;
    }
    return returnHTML;
};

    




async function loadEvent() {
    const rootElement = document.getElementById('root');


    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    const countryArr = await countryRes.json();
    rootElement.insertAdjacentHTML("beforeend", `<div id="countrie-names">${renderCountryNames(countryArr)}</div>`);
    rootElement.insertAdjacentHTML("beforeend", `<div id="countrie-flags">${renderCountryFlags(countryArr)}</div>`);


}
  
window.addEventListener("load", loadEvent);















/* function parseXml(str) {
    const parse = new DOMParser();
    return parse.parseFromString(str, "text/xml");
}

function parseHtml(str) {
    const parse = new DOMParser();
    return parse.parseFromString(str, "text/html");
}

function renderFeed(feed) {
    const news = document.getElementById("news");
    const items = feed.getElementsByTagName("item");
    for (const item of items) {

        const title = item.getElementsByTagName("title")[0].textContent;
        const description = item.getElementsByTagName("description")[0].textContent;
        const link = item.getElementsByTagName("link")[0].textContent;

        const article = document.createElement("article");
        const titleEl = document.createElement("h1");
        const descEl = document.createElement("p");
        const linkEl = document.createElement("a");

        const shortDesc = parseHtml(description).body.textContent.substring(0, 128);

        titleEl.textContent = title;
        descEl.textContent = shortDesc;
        linkEl.textContent = link;
        linkEl.href = link;
        article.append(titleEl, descEl, linkEl);
        news.append(article);
    }
}

window.addEventListener("load", function() {
    fetch("https://dev.to/feed/").then(r => r.text()).then(parseXml).then(renderFeed);
}); */