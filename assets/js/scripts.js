function scrollEvent() {
    const aboutmeSection = document.getElementById('aboutme')
    if (innerWidth <= 1000) {
        if (scrollY >= 3500) {
            aboutmeSection.classList.add('active')        
        }
    } 
    if (innerWidth > 1000) {
        if (scrollY >= 1500) {
            aboutmeSection.classList.add('active')
        }
    }
}