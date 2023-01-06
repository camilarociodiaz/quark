function rand(n) {
    return (Math.floor(Math.random() * n + 1));
}

var switch_image = new Array();
switch_image[0] = "/images/option-01.jpg";
switch_image[1] = "/images/option-02.jpg";
switch_image[2] = "/images/option-03.jpg";
switch_image[3] = "/images/option-04.jpg";
switch_image[4] = "/images/option-05.jpg";
switch_image[5] = "/images/option-06.jpg";
switch_image[6] = "/images/option-07.jpg";
switch_image[7] = "/images/option-08.jpg";
switch_image[8] = "/images/option-09.jpg";


function change() {
    document.getElementById("switch-img").src = switch_image[rand(8) - 1];
}

window.addEventListener("load", change, false);