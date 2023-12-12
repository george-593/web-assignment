const mobileMenuBtn = document.querySelector("#mobile-menu-btn")
const mobileMenu = document.querySelector("#mobile-menu")

classList = "bg-black w-[90%] py-8 mx-auto rounded-xl hidden"
mobileMenuBtn.addEventListener("click", () => {
    if (mobileMenu.classList == classList) {
        mobileMenu.classList.remove("hidden")
        mobileMenuBtn.src = "/assets/icons/close.png"
    } else {
        mobileMenu.classList = classList
        mobileMenuBtn.src = "/assets/icons/menu.png"
    }
})