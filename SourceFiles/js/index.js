document.addEventListener('DOMContentLoaded', function () {
    alert("Loaded")
    let bottomArrow = document.getElementById('bottom-button')
    bottomArrow.addEventListener('click', function () {
        scrollPage('description')
    })
})

let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
});

function scrollPage(div) {
    let target = document.getElementById(div)
    target.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    })
}
