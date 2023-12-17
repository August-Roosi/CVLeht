// Kui leht laaditakse
document.addEventListener("DOMContentLoaded", function () {
    // Leia nupud ja banner
    const homeLink = document.getElementsByClassName("nav-item");
    const aboutLink = document.getElementById("about-link");
    const contactLink = document.getElementById("contact-link");
    const mainBanner = document.getElementById("main-banner");
  
    // Lisa nuppudele hover-efekt
    homeLink.forEach(link => {
      link.addEventListener("mouseover", function () {
        link.style.transform = "scale(2)"; // Muuda hover-efekti vastavalt soovile
      });
  
      link.addEventListener("mouseout", function () {
        link.style.transform = "scale(1)";
      });
    });
  
    // Lisa bannerile hover-efekt
    mainBanner.addEventListener("mouseover", function () {
      mainBanner.style.backgroundColor = "#ff9933"; // Muuda hover-efekti vastavalt soovile
    });
  
    mainBanner.addEventListener("mouseout", function () {
      mainBanner.style.backgroundColor = "#66ccff";
    });
  });
  