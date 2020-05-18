// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cards = document.querySelector(".cards-container");

axios

.get("https://lambda-times-backend.herokuapp.com/articles")
.then((res) => {
    console.log(res.data.articles);
    const javascriptArticles = res.data.articles.javascript;
    const bootstrapArticles = res.data.articles.bootstrap;
    const jqueryArticles = res.data.articles.jquery;
    const technologyArticles = res.data.articles.technology;
    const nodeArticles = res.data.articles.node;

    javascriptArticles.forEach((arr) => {
        cards.appendChild(newCard(arr))
    })

    bootstrapArticles.forEach((arr) => {
        cards.appendChild(newCard(arr))
    })

    jqueryArticles.forEach((arr) => {
    cards.appendChild(newCard(arr))
    })

    technologyArticles.forEach((arr) => {
        cards.appendChild(newCard(arr))
    })

    nodeArticles.forEach((arr) => {
        cards.appendChild(newCard(arr))
    })

})
.catch((err) => {
    console.log(`Error :( ${err}`);
});

function newCard(arr) {
    const thisCard = document.createElement("div");
    const heading = document.createElement("div");
    const authorBox = document.createElement("div");
    const imgBox = document.createElement("div");
    const imgCred = document.createElement("img");
    const credName = document.createElement("span");

    thisCard.classList.add("card");
    heading.classList.add("heading");
    authorBox.classList.add("author");
    imgBox.classList.add("img-box");

    heading.textContent = (arr.headline);
    imgCred.src = (arr.authorPhoto);
    credName.textContent = (`By ${arr.authorName}`);

    thisCard.appendChild(heading);
    thisCard.appendChild(authorBox);
    authorBox.appendChild(imgBox);
    imgBox.appendChild(credName);
    authorBox.appendChild(credName);

    return thisCard;
}