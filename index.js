console.log("Hello the retruns");
let emailInput = document.getElementById("InputEmail1");

// Getting Email through onClick by button clicks
function getEmail() {
  let emailInputValue = emailInput.value;
  console.log(emailInputValue);
}

// This code for color changing
function Themechanger() {
  let BgColorArray = [
    "red",
    "green",
    "chartreuse",
    "#890B3B",
    "#00818A",
    "#E4491C",
    "#b805ff",
    "#ff05c8",
    "#c405ff",
  ];
  let gettingColors =
    BgColorArray[Math.floor(Math.random() * BgColorArray.length)];
  document.documentElement.style.setProperty("--tertiary", `${gettingColors}`);
  let BtnThemeChanger = document.getElementById("BtnThemeChanger");
  BtnThemeChanger.classList.add("BtnAnimation");
  setTimeout(() => {
    BtnThemeChanger.classList.remove("BtnAnimation");
  }, 1000);
  let navLinks = document.getElementById("nav-link");
  navLinks.style.setProperty("color", gettingColors);
}

//Search how to connect to google shhet and store it
