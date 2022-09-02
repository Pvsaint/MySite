const MyDesc = document.querySelector('.my_info');
const homeMyInfo = document.querySelector('.my_details');
const homeMyPic = document.querySelector('.my_pic');
const contactInfo = document.querySelector('.contact_details');
const contactForm = document.querySelector('.form');
const imgBg = document.querySelector('.img__background');
const contactMeBtn = document.getElementById('contact_btn');
const homeBtn = document.getElementById('home_btn');

// Mobile Nav
const menu = document.querySelector(".action_buttons");
const openBtn = document.querySelector(".open_btn");
const closeBtn = document.querySelector(".close_btn");

// Open Mobile Men
openBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    openBtn.style.display = "none";
})

// Close Mobile Menu
const closeMenu = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeMenu)


contactMeBtn.addEventListener('click', () => {
    homeMyInfo.style.height = "0";
    homeMyPic.style.height = "0";
    contactInfo.style.height = "100%";
    contactForm.style.height = "100%";
    imgBg.style.width = "0";
    MyDesc.style.display = "none";
    contactMeBtn.classList.add("sellected")
    homeBtn.classList.remove("sellected")
})

homeBtn.addEventListener('click', () => {
    contactInfo.style.height = "0";
    contactForm.style.height = "0";
    homeMyInfo.style.height = "100%";
    homeMyPic.style.height = "100%";
    imgBg.style.width = "45%";
    MyDesc.style.display = "block";
    // homeBtn.classList.add("sellected")
    contactMeBtn.classList.remove("sellected")
})