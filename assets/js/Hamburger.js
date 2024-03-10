document.addEventListener('DOMContentLoaded', () => {

const iconSun = "/assets/img/sun.png";
const iconMoon = "/assets/img/moon.svg";
const iconLogoLight = "/assets/img/logolight.png";
const iconLogoDark = "/assets/img/logodark.png";

function changeIconImgSrc(src, src2) {
	document.getElementById("theme-toggle-logo").src = src2;
	document.getElementById("theme-toggle-img").src = src;
	document.getElementById("theme-toggle-img--mobile").src = src;
}

// Get all "navbar-burger" elements
const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
// Check if there are any navbar burgers
if ($navbarBurgers.length > 0) {

// Add a click event on each of them
$navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

    // Get the target from the "data-target" attribute
    const target = el.dataset.target;
    const $target = document.getElementById(target);

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    el.classList.toggle('is-active');
    $target.classList.toggle('is-active');

    });
});
}

    var contentParagraph = document.getElementById("latest-notes");
    var contentText = contentParagraph.innerHTML;
    var elements = contentText.split(", ");
    var wrappedContent = elements.map(function(element) {
        return "<a href='#' class='connect-link p-l'>" + element + "</a>";
    });
    contentParagraph.innerHTML = wrappedContent.join(", ");


    var contentParagraph = document.getElementById("log-collections");
    var contentText = contentParagraph.innerHTML;
    var elements = contentText.split(", ");
    var wrappedContent = elements.map(function(element) {
        return "<a href='#' class='connect-link p-l'>" + element + "</a>";
    });
    contentParagraph.innerHTML = wrappedContent.join(", ");

    function modeSwitcher() {
        let theme = sessionStorage.getItem('theme');
        if (theme === "dark") {
            document.documentElement.setAttribute('data-theme', 'light');
            sessionStorage.setItem('theme', 'light');
            changeIconImgSrc(iconSun,iconLogoLight );
            // changeLogoImgSrc(iconLogoLight);
        }	else if (theme === "light") {
            document.documentElement.setAttribute('data-theme', 'dark');
            sessionStorage.setItem('theme', 'dark');
            changeIconImgSrc(iconMoon,iconLogoDark);
            // changeLogoImgSrc(iconLogoDark);
        } else if (systemInitiatedDark.matches) {	
            document.documentElement.setAttribute('data-theme', 'light');
            sessionStorage.setItem('theme', 'light');
            changeIconImgSrc(iconSun,iconLogoLight );
            // changeLogoImgSrc(iconLogoLight);
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            sessionStorage.setItem('theme', 'dark');
            changeIconImgSrc(iconMoon,iconLogoDark);
            // changeLogoImgSrc(iconLogoDark);
        }
    }

    
    let theme = sessionStorage.getItem('theme');
    if (theme==="") {
        document.documentElement.setAttribute('data-theme', 'light');
        changeIconImgSrc(iconSun,iconLogoLight );
    } else if (theme==="dark") {
        document.documentElement.setAttribute('data-theme', 'dark');
        changeIconImgSrc(iconMoon,iconLogoDark);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        changeIconImgSrc(iconSun,iconLogoLight );
    }

});