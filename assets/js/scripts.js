function scrollEvent() {
    const aboutmeSection = document.getElementById('aboutme')
    const backtopButton = document.getElementById('back-top')
    if (innerWidth <= 1000) {
        if (scrollY >= 3500) {
            aboutmeSection.classList.add('active')        
        }
    } 
    if (innerWidth > 1000) {
        if (scrollY >= 1500) {
            aboutmeSection.classList.add('active')
        }

        if (scrollY >= 1220) {
            backtopButton.classList.add('show')
        } else {
            backtopButton.classList.remove('show')
        }
    }
}


const nav = document.querySelector('.navigator')
const menuBtn = document.querySelector('.menu-button')

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active")
    nav.classList.toggle("active")
})

const menuItems = document.getElementsByClassName('menu-item')

for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];

    menuItem.addEventListener("click", () => {
        nav.classList.remove('active')
        menuBtn.classList.remove('active')
    })
    
}