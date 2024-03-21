let pages = ["contact", "games", "work", "about"];

let menuStyles = {};
// let homeStyles = {
//   position: "fixed",
//   top: "10px",
//   left: "20px",
//   height: "45px",
//   width: "45px",
//   "background-image": "URL(images/fancyZ.png)",
//   "background-size": "contain",
//   "background-position": "center",
// };
let barStyles = {};

buildMenu(document.body);
applyListeners();

function buildMenu(buildTarget) {
  let menuDiv = document.createElement("div");
  menuDiv.id = "menuDiv";
  menuDiv.classList.add("menuDiv");
  repeat(() => {
    let bar = document.createElement("div");
    // applyStyles(bar, barStyles);
    bar.classList.add("blackBar");
    menuDiv.appendChild(bar);
  }, 3);
  buildTarget.appendChild(menuDiv);

  let homeDiv = document.createElement("a");
  homeDiv.href = "home.html";
  homeDiv.id = "homeDiv";
  homeDiv.classList.add("homeButton");
  // applyStyles(homeDiv, homeStyles);
  buildTarget.appendChild(homeDiv);

  let menuBar = document.createElement("div");
  menuBar.id = "menuBar";
  menuBar.classList.add("menuBar");
  repeat((c) => {
    let page = pages[c - 1];
    let link = document.createElement("a");
    link.href = `${page}.html`;
    link.innerHTML = `
      <img src="/images/${page}.png" />
      <span>${page.toUpperCase()}</span>
    `;
    menuBar.appendChild(link);
  }, pages.length);
  // applyStyles(menuBar, menuBarStyles);
  buildTarget.appendChild(menuBar);
}

function repeat(func, x = 0) {
  while (x > 0) {
    func(x);
    x--;
  }
}

function applyStyles(target, styles) {
  for (let style in styles) {
    target.style[style] = styles[style];
  }
}

function applyListeners() {
  let target = document.getElementById("menuBar");
  menuDiv.addEventListener("click", function (e) {
    // console.log("click");
    target.classList.toggle("menuBarVisible");
  });
}
