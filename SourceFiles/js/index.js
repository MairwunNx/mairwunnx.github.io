if (document.readyState !== 'loading') {
    let bottomArrow = document.getElementById('bottom-button')
    bottomArrow.addEventListener('click', function () {
        scrollPage('mairwunnx-summary')
    })
    processVisibilityUlSwitchers()
} else {
    let bottomArrow = document.getElementById('bottom-button')
    document.addEventListener('DOMContentLoaded', function () {
        bottomArrow.addEventListener('click', function () {
            scrollPage('mairwunnx-summary')
        })
    });
    processVisibilityUlSwitchers()
}

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
        block: "start",
        inline: "nearest"
    })
}

function processVisibilityUlSwitchers() {
    let aboutCheckBox = document.getElementById('about-checkbox')
    let aboutList = document.getElementById('about-list')
    aboutCheckBox.checked = true
    aboutCheckBox.addEventListener('click', function () {
        if (aboutCheckBox.checked) {
            aboutCheckBox.checked = false
            aboutCheckBox.innerHTML = "\\ About MairwunNx"
            aboutList.style = "display: none;"
        } else {
            aboutCheckBox.checked = true
            aboutCheckBox.innerHTML = "/ About MairwunNx"
            aboutList.style = "display: block;"
        }
    })
}
