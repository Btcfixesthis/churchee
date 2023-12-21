document.querySelector("button").style.backgroundColor = "#a96534";
document.querySelector(".btn1 button").style.backgroundColor = "#a96534";
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  $("button").on("click", function(slide){
    $("button").slideUp().slideDown().fadeOut().fadeIn().css("backgroundColor", "purple")
    alert("You are finding more about us")
    
  })

  $(".people").slideUp().slideDown();
  $(".people").on("click", function(){
    $(".people").fadeOut().fadeIn()
  })