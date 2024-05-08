const div = document.createElement('div');

const copyIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>`;
const okIcon = `<svg xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>`;
const copyElement = `<div class="tooltip-copy">${copyIcon}</div>`;
const okElement = `<div class="tooltip-copy">${okIcon}</div>`;

div.innerHTML = copyElement; 
div.className = 'div-copy'; 

const allPres = document.querySelectorAll('pre'); 
allPres.forEach(function(pre) { 
    let timeout = null;
    const copy = div.cloneNode(true); 
    pre.appendChild(copy);
    pre.onmouseleave = function() { 
        clearTimeout(timeout); 
        copy.innerHTML = copyElement;
    }; 
    copy.onclick = function() { 
        navigator.clipboard.writeText(pre.textContent);
        copy.innerHTML = okElement;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            copy.innerHTML = copyElement;
        }, 3000); 
    }; 
}); 