
console.log("JavaScript is running!");
document.addEventListener("DOMContentLoaded", function () {
    var bannertwo = document.getElementsByClassName("bannertwo");
    var images = [
        "H1.jpg",
        "H2.jpg",
        "H3.jpg",
        "H4.jpg"
    ];
    var length = images.length;
    var i = 0;

    function rotateBackground() {
        if (i >= length) {
            i = 0;
        }
        bannertwo[0].style.backgroundImage = 'url(' + images[i] + ')';
        i++;

        console.log(i);

        // Move the setInterval call outside of the rotateBackground function.
        // Set an interval to call the rotateBackground function every 3000 milliseconds.
    }

    rotateBackground(); // Initial call

    // Set an interval to call the rotateBackground function every 3000 milliseconds.
    setInterval(rotateBackground, 3000);
});




