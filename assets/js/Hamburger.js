let siteUrl = window.location.href;
let siteBaseUrl = '';
if(siteUrl.split('.')[1] =='github')
{
    siteBaseUrl = '/' + siteUrl.split('/')[1];
}
const iconSun = siteBaseUrl + "./assets/img/sun.png";
const iconMoon = siteBaseUrl + "./assets/img/moon.svg";
const iconLogoLight = siteBaseUrl + "./assets/img/logolight.png";
const iconLogoDark = siteBaseUrl + "./assets/img/logodark.png";
let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)"); 
let theme = sessionStorage.getItem('theme');

function changeIconImgSrc(src, src2) {
	document.getElementById("theme-toggle-logo").src = src2;
	document.getElementById("theme-toggle-img").src = src;
	document.getElementById("theme-toggle-img--mobile").src = src;
}

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

window.addEventListener('DOMContentLoaded', () => {

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
    if(contentParagraph != null || contentParagraph != undefined)
    {
        var contentText = contentParagraph.innerHTML;
        var elements = contentText.split(", ");
        var wrappedContent = elements.map(function(element) {
            return "<a href='#' class='connect-link p-l'>" + element + "</a>";
        });
        contentParagraph.innerHTML = wrappedContent.join(", ");
    }

    if(contentParagraph != null)
    {
        var contentParagraph = document.getElementById("log-collections");
        var contentText = contentParagraph.innerHTML;
        var elements = contentText.split(", ");
        var wrappedContent = elements.map(function(element) {
            return "<a href='#' class='connect-link p-l'>" + element + "</a>";
        });
        contentParagraph.innerHTML = wrappedContent.join(", ");
    }
    
    let theme = sessionStorage.getItem('theme');
    if (theme==="") {
        document.documentElement.setAttribute('data-theme', 'light');
        changeIconImgSrc(iconSun,iconLogoLight);
    } else if (theme==="dark") {
        document.documentElement.setAttribute('data-theme', 'dark');
        changeIconImgSrc(iconMoon,iconLogoDark);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        changeIconImgSrc(iconSun,iconLogoLight );
    }

});