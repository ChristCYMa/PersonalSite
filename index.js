//create playsound function using switch
function playSound(input) {
  switch (input) {
    case "1":
      let button1 = new Audio("sounds/c4.mp3");
      button1.play();
      break;

    case "2":
      let button2 = new Audio("sounds/d4.mp3");
      button2.play();
      break;

    case "3":
      let button3 = new Audio("sounds/e4.mp3");
      button3.play();
      break;

    case "4":
      let button4 = new Audio("sounds/f4.mp3");
      button4.play();
      break;

    case "5":
      let button5 = new Audio("sounds/g4.mp3");
      button5.play();
      break;

    case "6":
      let button6 = new Audio("sounds/a5.mp3");
      button6.play();
      break;

    case "7":
      let button7 = new Audio("sounds/b5.mp3");
      button7.play();
      break;

    case "8":
      let button8 = new Audio("sounds/c5.mp3");
      button8.play();
      break;

    default:
      console.log(input);

  }
}

function buttonAnimation(buttonPressed) {
  let activeButton = $(".pianoButton")[buttonPressed - 1];
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
};




//use jquery to add click event listeners to all buttons
for (i = 0; i < $(".pianoButton").length; i++) {
  $(".pianoButton")[i].addEventListener("click", function() {

    //assign clicked button's name property to variable
    let pianoButtonName = this.name;

    //using variable, pass into function that plays corresponding note and animation
    playSound(pianoButtonName);
    buttonAnimation(pianoButtonName);
  })
}

//jquery to add fade in animations
//wait for document to be ready
$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.fadein').each( function(){

            const bottom_of_object = $(this).position().top + $(this).outerHeight();
            const bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);
            }
        });
    });
});
