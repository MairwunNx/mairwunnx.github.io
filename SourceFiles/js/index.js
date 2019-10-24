if (document.readyState !== 'loading') {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    let bottomArrow = document.getElementById('bottom-button')
    subscribeEvents(bottomArrow)
    processVisibilityUlSwitchers()
    addResizeListener()
} else {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    let bottomArrow = document.getElementById('bottom-button')
    document.addEventListener('DOMContentLoaded', function () {
        subscribeEvents(bottomArrow)
    });
    processVisibilityUlSwitchers()
    addResizeListener()
}

function subscribeEvents(element) {
    element.addEventListener('click', function () {
        scrollPage('mairwunnx-summary')
    })
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

    let projectsCheckBox = document.getElementById('projects-checkbox')
    let projectsList = document.getElementById('projects-list')

    let funFactsCheckBox = document.getElementById('fun-facts-checkbox')
    let funFactsList = document.getElementById('fun-facts-list')

    let contactCheckBox = document.getElementById('contact-checkbox')
    let contactList = document.getElementById('contact-list')

    aboutCheckBox.checked = true
    skillsCheckBox.checked = false
    projectsCheckBox.checked = false
    funFactsCheckBox.checked = false
    contactCheckBox.checked = false
    
    subscribeEvents(aboutCheckBox, aboutList, "About MairwunNx")
    subscribeEvents(skillsCheckBox, skillsList, "MairwunNx's Skills")
    subscribeEvents(projectsCheckBox, projectsList, "MairwunNx's Projects")
    subscribeEvents(funFactsCheckBox, funFactsList, "MairwunNx's Fun Facts")
    subscribeEvents(contactCheckBox, contactList, "Contact with Me")

    function subscribeEvents(checkbox, list, caption) {
        checkbox.addEventListener('click', function() {
            if (checkbox.checked) {
                checkbox.checked = false
                checkbox.innerHTML = "\\ " + caption
                list.style = "display: none;"
            } else {
                checkbox.checked = true
                checkbox.innerHTML = "/ " + caption
                list.style = "display: block;"
            }
        })
    }
}
