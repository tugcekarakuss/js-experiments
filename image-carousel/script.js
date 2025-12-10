var index = 0;
var dots = document.getElementsByClassName("dot");
var images = document.getElementsByClassName("image");

show_image(index);

function show_image(step) {
    index += step;

    for (let i = 0; i < images.length; i++)
        images[i].style.display = "none";

    for (let i = 0; i < dots.length; i++)
        dots[i].classList.remove("active");

    if (index > images.length - 1) index = 0;
    if (index < 0) index = images.length - 1;

    images[index].style.display = "block";
    dots[index].classList.add("active");
}

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
        index = i;
        show_image(0);
    });
}
