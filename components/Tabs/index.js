// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector(".topics");

axios

.get("https://lambda-times-backend.herokuapp.com/topics")
.then((res) => {
    const topicStack = res.data.topics;
    topicStack.forEach((topic) => {
        const newTabTopic = makeTab(topic);
        topics.appendChild(newTabTopic)
    })
})
.catch((err) => {
    console.log(`Error :( ${err}`);
});

function makeTab(item) {
    const addTopic = document.createElement("div")
    addTopic.classList.add("tab");
    addTopic.textContent = item;

    return addTopic;
};