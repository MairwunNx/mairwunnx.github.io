function scrollPage() {
    var height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    scroll(0, height, 'smooth');
}