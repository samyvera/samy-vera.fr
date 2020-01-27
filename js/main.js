window.onload = () => {
    document.getElementById("title").style.transition = '.3s';

    document.getElementById("title").onmouseover = event => {
        document.getElementById("title-container").style.mixBlendMode = "hard-light";
    }

    document.getElementById("title").onmouseout = event => {
        document.getElementById("title-container").style.mixBlendMode = "lighten";
    }
}