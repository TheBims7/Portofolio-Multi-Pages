const words = ["Fariz Bima Prayoga "];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
    const target = document.getElementById("typing");

    if (i < words.length) {
    currentWord = words[i];
    if (!isDeleting && j <= currentWord.length) {
        target.textContent = currentWord.substring(0, j);
        j++;
    } else if (isDeleting && j >= 0) {
        target.textContent = currentWord.substring(0, j);
        j--;
    }

    if (j === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 2000); // Pause after typing
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }
    }

    setTimeout(type, isDeleting ? 150 : 150);
}

document.addEventListener("DOMContentLoaded", type);

let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

//navbar
// function toggleMenu(){
//     if(menuList.style.maxHeight == "0px"){
//         menuList.style.maxHeight = "300px";
//     }
//     else{
//         menuList.style.maxHeight = "0px";
//     }
// }
function toggleMenu(){
    const menuList = document.getElementById("menuList");
    const header = document.querySelector("header");

    if(menuList.style.maxHeight === "0px" || menuList.style.maxHeight === "" || !menuList.classList.contains("active")){
        menuList.style.maxHeight = "300px";
         // Buka menu
         menuList.classList.add("active");
         header.classList.add("menu-active");
    } else {
        menuList.style.maxHeight = "0px";
       // Tutup menu
       menuList.classList.remove("active");
        
       // Tunggu sampai animasi selesai baru hilangkan efek header
       setTimeout(() => {
           header.classList.remove("menu-active");
       }, 500); // 500ms = waktu yang sama dengan transition CSS
    }
}

