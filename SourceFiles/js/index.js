if (document.readyState !== 'loading') {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    let bottomArrow = document.getElementById('bottom-button')
    bottomArrow.addEventListener('click', function () {
        scrollPage('mairwunnx-summary')
    })
    processVisibilityUlSwitchers()
    addResizeListener()
} else {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    let bottomArrow = document.getElementById('bottom-button')
    document.addEventListener('DOMContentLoaded', function () {
        bottomArrow.addEventListener('click', function () {
            scrollPage('mairwunnx-summary')
        })
    });
    processVisibilityUlSwitchers()
    addResizeListener()
}

function addResizeListener() {
    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
    });
}

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

    let skillsCheckBox = document.getElementById('skills-checkbox')
    let skillsList = document.getElementById('skills-list')

    let funFactsCheckBox = document.getElementById('fun-facts-checkbox')
    let funFactsList = document.getElementById('fun-facts-list')

    let contactCheckBox = document.getElementById('contact-checkbox')
    let contactList = document.getElementById('contact-list')

    aboutCheckBox.checked = true
    skillsCheckBox.checked = false
    funFactsCheckBox.checked = false
    contactCheckBox.checked = false

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
    skillsCheckBox.addEventListener('click', function () {
        if (skillsCheckBox.checked) {
            skillsCheckBox.checked = false
            skillsCheckBox.innerHTML = "\\ MairwunNx's Skills"
            skillsList.style = "display: none;"
        } else {
            skillsCheckBox.checked = true
            skillsCheckBox.innerHTML = "/ MairwunNx's Skills"
            skillsList.style = "display: block;"
        }
    })
    funFactsCheckBox.addEventListener('click', function () {
        if (funFactsCheckBox.checked) {
            funFactsCheckBox.checked = false
            funFactsCheckBox.innerHTML = "\\ MairwunNx's Fun Facts"
            funFactsList.style = "display: none;"
        } else {
            funFactsCheckBox.checked = true
            funFactsCheckBox.innerHTML = "/ MairwunNx's Fun Facts"
            funFactsList.style = "display: block;"
        }
    })
    contactCheckBox.addEventListener('click', function () {
        if (contactCheckBox.checked) {
            contactCheckBox.checked = false
            contactCheckBox.innerHTML = "\\ Contact with Me"
            contactList.style = "display: none;"
        } else {
            contactCheckBox.checked = true
            contactCheckBox.innerHTML = "/ Contact with Me"
            contactList.style = "display: block;"
        }
    })
}
