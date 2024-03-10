---
---

/* 
Copied from https://github.com/derekkedziora/jekyll-demo/blob/master/scripts/mode-switcher.js
https://github.com/derekkedziora/jekyll-demo
Creative Commons Attribution 4.0 International License
*/

let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)"); 
let theme = sessionStorage.getItem('theme');

const iconSun = "{{ site.baseurl }}/assets/img/sun.png";
const iconMoon = "{{ site.baseurl }}/assets/img/moon.svg";
const iconLogoLight = "{{ site.baseurl }}/assets/img/logolight.png";
const iconLogoDark = "{{ site.baseurl }}/assets/img/logodark.png";


function changeIconImgSrc(src, src2) {
	document.getElementById("theme-toggle-logo").src = src2;
	document.getElementById("theme-toggle-img").src = src;
	document.getElementById("theme-toggle-img--mobile").src = src;
}

function changeLogoImgSrc(src) {
	document.getElementById("theme-toggle-logo").src = src;
}

if (systemInitiatedDark.matches) {
	changeIconImgSrc(iconMoon);
	changeLogoImgSrc(iconLogoDark);
} else {
	changeIconImgSrc(iconSun);
	changeLogoImgSrc(iconLogoLight);
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
  	document.documentElement.setAttribute('data-theme', 'dark');		
   	changeIconImgSrc(iconMoon);
	changeLogoImgSrc(iconLogoDark);
   	sessionStorage.setItem('theme', 'dark');
  } else {
  	document.documentElement.setAttribute('data-theme', 'light');
    changeIconImgSrc(iconSun);
	changeLogoImgSrc(iconLogoLight);
    sessionStorage.setItem('theme', 'light');
  }
}
systemInitiatedDark.addListener(prefersColorTest);

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

if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	sessionStorage.setItem('theme', 'dark');
	changeIconImgSrc(iconMoon);
	changeLogoImgSrc(iconLogoDark);
} else if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'light');
	sessionStorage.setItem('theme', 'light');
	changeIconImgSrc(iconSun);
	changeLogoImgSrc(iconLogoLight);
}