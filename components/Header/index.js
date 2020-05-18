// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const heading = document.createElement("div");
    const day = document.createElement("span");
    const title = document.createElement("h1");
    const temperature = document.createElement("span");

    heading.classList.add("header");
    day.classList.add("date");
    temperature.classList.add("temp");

    day.textContent = ("March 28, 2019");
    title.textContent = ("Lambda Times");
    temperature.textContent = ("98°");

    heading.appendChild(day);
    heading.appendChild(title);
    heading.appendChild(temperature);

    return heading;
}

const headContainer = document.querySelector(".header-container")

headContainer.appendChild(Header());
