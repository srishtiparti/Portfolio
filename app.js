// Dataset 

const data = [{
        name: "Color Flipper",
        img: "./images/color-flipper.jpg",
        path: "./Portfolio-items/ColorFlipper/index.html",
        language: ["Html", "CSS", "JS"],
        github: "https://github.com/srishtiparti/VanillaJS"
    },
    {
        name: "Count down",
        img: "images/countdown.jpg",
        path: "./Portfolio-items/Countdown/index.html",
        language: ["Html", "CSS", "JS"],
        github: "https://github.com/srishtiparti/VanillaJS"
    },
    {
        name: "Counter",
        img: "./images/counter.jpg",
        path: "./Portfolio-items/Counter/index.html",
        language: ["Html", "CSS", "JS"],
        github: "https://github.com/srishtiparti/VanillaJS"
    },
    {
        name: "Garage Sale",
        img: "./images/garage-sale.jpg",
        path: "./Portfolio-items/GarageSale/index.html",
        language: ["Html", "CSS", "JS"],
        github: "https://github.com/srishtiparti/VanillaJS"
    },
    {
        name: "Grocery List",
        img: "./images/grocery-list.jpg",
        path: "./Portfolio-items/GroceryList/index.html",
        language: ["Html", "CSS", "JS"],
        github: "https://github.com/srishtiparti/VanillaJS"
    },
    {
        name: "Menu",
        img: "./images/menu.jpg",
        path: "./Portfolio-items/Menu/index.html",
        language: ["Html", "CSS", "JS"],
        github: "https://github.com/srishtiparti/VanillaJS"
    },
    {
        name: "Modal",
        img: "./images/modal.jpg",
        path: "./Portfolio-items/Modal/index.html",
        language: ["Html", "CSS", "JS"],
        github: "https://github.com/srishtiparti/VanillaJS"
    },
    {
        name: "Nav-bar",
        img: "./images/navigation.jpg",
        path: "./Portfolio-items/Modal/index.html",
        language: ["Html", "CSS", "JS"],
        github: "https://github.com/srishtiparti/VanillaJS"
    },
    {
        name: "Questions",
        img: "./images/questions.jpg",
        path: "./Portfolio-items/Questions/index.html",
        language: ["Html", "CSS", "JS"],
        github: "https://github.com/srishtiparti/VanillaJS"
    },
    {
        name: "Review Project",
        img: "./images/review-project.jpg",
        path: "./Portfolio-items/Review-Project/index.html",
        language: ["Html", "CSS", "JS"],
        github: "https://github.com/srishtiparti/VanillaJS"
    },
    {
        name: "Scroll",
        img: "./images/scroll.jpg",
        path: "./Portfolio-items/Scroll/index.html",
        language: ["Html", "CSS", "JS"],
        github: "https://github.com/srishtiparti/VanillaJS"
    },
    {
        name: "Side-bar",
        img: "./images/side-bar.jpg",
        path: "./Portfolio-items/Side-bar/index.html",
        language: ["Html", "CSS", "JS"],
        github: "https://github.com/srishtiparti/VanillaJS"
    },
    {
        name: "Store Page",
        img: "./images/store-page.jpg",
        path: "./Portfolio-items/StorePage/HomePage.html",
        language: ["Html", "CSS", "JS"],
        github: "https://github.com/srishtiparti/VanillaJS"
    },
    {
        name: "Tabs",
        img: "./images/tabs.jpg",
        path: "./Portfolio-items/tabs/index.html",
        language: ["Html", "CSS", "JS"],
        github: "https://github.com/srishtiparti/VanillaJS"
    },
    {
        name: "Timer",
        img: "./images/timer.jpg",
        path: "./Portfolio-items/Timer/index.html",
        language: ["Html", "CSS", "JS"],
        github: "https://github.com/srishtiparti/VanillaJS"
    },
    {
        name: "Video",
        img: "./images/video.jpg",
        path: "./Portfolio-items/video/index.html",
        language: ["Html", "CSS", "JS"],
        github: "https://github.com/srishtiparti/VanillaJS"
    },
    {
        name: "Grocery",
        img: "./images/grocery.jpg",
        path: "./Portfolio-items/Grocery/index.html",
        language: ["Html", "JS"],
        github: "https://github.com/srishtiparti/VanillaJS"
    },
    {
        name: "Event Page",
        img: "./images/event.jpg",
        path: "./Portfolio-items/EventPage/index.html",
        language: ["Html", "JS"],
        github: "https://github.com/srishtiparti/VanillaJS"
    },
    {
        name: "Adoption Center",
        img: "./images/adoption.jpg",
        path: "./Portfolio-items/Adoption-center/index.html",
        language: ["Html", "JS"],
        github: "https://github.com/srishtiparti/VanillaJS"
    },
    {
        name: "Bookfair",
        img: "./images/bookfair.jpg",
        path: "./Portfolio-items/Bookfair/index.html",
        language: ["Html", "JS"],
        github: "https://github.com/srishtiparti/VanillaJS"
    },
]

var filter = document.getElementById("filterButton");
const project = document.querySelector(".project-items")
var selected = filter.options[filter.selectedIndex].value;
if (selected == "all") {
    console.log("all selected");
}

window.addEventListener("DOMContentLoaded", function() {
    displayData(data);
})

function displayData(data) {
    let displayData = data.map(function(item) {
        var languageUsed = ''
        item.language.forEach(element => {
            languageUsed = languageUsed + `<h4 class="language-used">${element}</h4>`
        });
        // displaying array items for given category
        return ` <article class="project-item">
        <div class="img-container">
            <a href=${item.path}>
                <img src=${item.img} class="cover-image" />
            </a>
        </div>
        <article class="item-details">
            <h2 class="title">${item.name}</h2>
            ${languageUsed}
        </article>
        <h3 class="source-code-text"><a href=${item.github} class="source-code">Source Code</a></h3>
                </article>`
    });
    // so map gives us an array.. we need to join all the elements without coma(",") thus giving no parameter("")
    displayData = displayData.join("");
    //displaying it in class - menu-item
    project.innerHTML = displayData
}