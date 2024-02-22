const primary_nav = '#040b1bb7';
const secondary_nav = 'rgba(255, 255, 255, 0.8)';
const secondary = '#ffffff';
var hero = document.getElementById('hero');
function nav() {
    if (document.scrollingElement.scrollTop == 0) {
        document.getElementById('nav-box').style.backdropFilter = 'blur(0px)';
        document.getElementById('nav-box').style.background = 'none';
        document.getElementById('nav').classList.remove('ontop-nav');
        document.getElementById('nav-box').classList.remove('ontop-nav-box');
        document.getElementById('nav-box').classList.remove('ontop-nav-box-high');
    }
    if (document.scrollingElement.scrollTop > 0) {
        document.getElementById('nav-box').style.backdropFilter = 'blur(10px)';
        document.getElementById('nav-box').style.background = secondary;
        document.getElementById('nav-box').classList.add('ontop-nav-box');
        document.getElementById('nav').classList.add('ontop-nav');
    }


}

var box_random = document.getElementById('train');
var edges = ['tleft', 'tright', 'bleft', 'bright'];
var indexes = 1;
setInterval(function () {
    var randomElement = edges[Math.floor(Math.random() * edges.length)];
    var randomedge = Math.floor(Math.random() * 500);
    if (randomElement == 'tleft') {
        box_random.style.borderTopLeftRadius = randomedge + 'px';
    }
    else if (randomElement == 'bleft') {
        box_random.style.borderBottomLeftRadius = randomedge + 'px';
    }
    else if (randomElement == 'tright') {
        box_random.style.borderTopRightRadius = randomedge + 'px';
    }
    else {
        box_random.style.borderBottomRightRadius = randomedge + 'px';
    }
}, 100);