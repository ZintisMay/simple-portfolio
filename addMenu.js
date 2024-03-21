let pages = ["contact", "games", "work", "about", "home"];

let menuStyles = {
  position: "fixed",
  top: "20px",
  right: "20px",
  height: "30px",
  width: "50px",
  // "background-color": "red",
  display: "flex",
  "flex-direction": "column",
  "justify-content": "space-between",
};
let barStyles = {
  height: "1px",
  "background-color": "black",
};
// let menuBarStyles = {
//   position: "fixed",
//   bottom: "100%",
//   transition: "1s",
//   display: "flex",
//   "justify-content": "space-around",
//   "align-items": "center",
//   height: "70px",
//   width: "100%",
//   "background-color": "red",
// };

buildMenu();
applyListeners();

function buildMenu() {
  let menuDiv = document.createElement("div");
  menuDiv.id = "menuDiv";
  repeat(() => {
    let bar = document.createElement("div");
    applyStyles(bar, barStyles);
    menuDiv.appendChild(bar);
  }, 3);
  applyStyles(menuDiv, menuStyles);
  document.body.appendChild(menuDiv);

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
  document.body.appendChild(menuBar);
}

function repeat(f, c = 0) {
  while (c > 0) {
    f(c);
    c--;
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
    console.log("click");
    target.classList.toggle("menuBarVisible");
  });
}
