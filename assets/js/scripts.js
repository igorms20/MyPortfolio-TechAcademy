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