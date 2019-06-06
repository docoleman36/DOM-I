const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//nav
let navText = document.getElementsByTagName("a");
navText[0].textContent = siteContent.nav["nav-item-1"];
navText[1].textContent = siteContent.nav["nav-item-2"];
navText[2].textContent = siteContent.nav["nav-item-3"];
navText[3].textContent = siteContent.nav["nav-item-4"];
navText[4].textContent = siteContent.nav["nav-item-5"];
navText[5].textContent = siteContent.nav["nav-item-6"];

const hello = document.createElement("a");
hello.textContent = "Hello";
const nav = document.querySelector("nav");

nav.prepend(hello);

const world = document.createElement("a");
world.textContent = "World";
const navBar = document.querySelector("nav");

navBar.appendChild(world);

navText[0].style.color = "green";
navText[1].style.color = "green";
navText[2].style.color = "green";
navText[3].style.color = "green";
navText[4].style.color = "green";
navText[5].style.color = "green";
navText[6].style.color = "green";
navText[7].style.color = "green";

//cta img
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

//cta h1
let dom = document.querySelector("h1");
dom.textContent = siteContent.cta["h1"];

//cta button
let btn = document.querySelector(".cta button");
btn.textContent = siteContent.cta["button"];

//main-content
let main = document.querySelectorAll(".main-content h4");
main[0].textContent = siteContent["main-content"]["features-h4"];
main[1].textContent = siteContent["main-content"]["about-h4"];
main[2].textContent = siteContent["main-content"]["services-h4"];
main[3].textContent = siteContent["main-content"]["product-h4"];
main[4].textContent = siteContent["main-content"]["vision-h4"];

let content = document.querySelectorAll(".main-content p");
content[0].textContent = siteContent["main-content"]["features-content"];
content[1].textContent = siteContent["main-content"]["about-content"];
content[2].textContent = siteContent["main-content"]["services-content"];
content[3].textContent = siteContent["main-content"]["product-content"];
content[4].textContent = siteContent["main-content"]["vision-content"];

//main img
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//contact
let contact = document.querySelector(".contact h4");
contact.textContent = siteContent["contact"]["contact-h4"];

let contactText = document.querySelectorAll(".contact p");
contactText[0].textContent = siteContent["contact"]["address"];
contactText[1].textContent = siteContent["contact"]["phone"];
contactText[2].textContent = siteContent["contact"]["email"];

//footer
let footer = document.querySelector("footer p");
footer.textContent = siteContent.footer["copyright"];
