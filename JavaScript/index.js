//Global variables for the concept slideshow
var slideshowArry= ["Assets/PiratePlusMockup.jpg",
                    "Assets/Caleb_snow.jpg",
                    "Assets/thumbnail_Megan's Picture.jpg"];
var slideshowCounter = 0;

function changeSlide (dir) {
    //Check which direction to move slideshow
    if (dir == "prev") {
        //Move tracker to the previous photo
        slideshowCounter --;

        //If tracker is -1, move it to end of array
        if (slideshowCounter < 0) {
            slideshowCounter = (slideshowArry.length - 1);
        }
    }
    else {
        //Move forward thru slideshow
        slideshowCounter++;

        //If counter goes past end of slideshow, reset to beginning
        if (slideshowCounter >= slideshowArry.length) {
            slideshowCounter = 0;
        }
    }

    //Get the pic span
    var p = document.getElementById('slideshowPic');

    //Put the new pic into the span
    p.innerHTML = ("<img src=\"" + slideshowArry[slideshowCounter] + "\"alt=\"App mockup\" id=\"mockup\">");
}