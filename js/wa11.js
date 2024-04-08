const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pics = ["../img/wa11Img/pic1.jpeg","../img/wa11Img/pic2.jpeg","../img/wa11Img/pic3.jpeg","../img/wa11Img/pic4.jpeg","../img/wa11Img/pic5.jpeg"];
/* Declaring the alternative text for each image file */
const alts = ["mountains", "forest", "beach", "arches", "waterfall"];
/* Looping through images */
for (let i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', pics[i]);
    newImage.setAttribute('alt', alts[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click" , ()=>{
        displayedImage.setAttribute('src', pics[i]);
        displayedImage.setAttribute('alt', alts[i]);
    });
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', ()=>{
    const button = btn.getAttribute("class")
if (button == "dark"){
    btn.setAttribute("class", "light");
    btn.textContent = "lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
} else {
    btn.setAttribute("class", "dark"); 
    btn.textContent = "darken"; 
    overlay.style.backgroundColor = "rgb(0 0 0 / 0%)"
}
})
