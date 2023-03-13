// to create a responsive navbar

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar-right") {
      x.className += " responsive";
    } else {
      x.className = "navbar-right";
    }
  }

//to navigate in other pages

function newpage(){
  window.location.href='book class.html'
}

function NewpageAgain(){
  window.location.href='schedule.html'
}

function newpageEvents(){
  window.location.href='events.html'
}

function newPageContact(){
  window.location.href='contact.html'
}

//for calendar

function changeColor(){
  document.getElementById("1").style.color = '#ffffff';
  document.getElementById("1").style.background = '#d3a461';
  document.getElementById("1").style.borderRadius = '20px';
}

function changeColorr(){
  document.getElementById("5").style.color = '#ffffff';
  document.getElementById("5").style.background = '#d3a461';
  document.getElementById("5").style.borderRadius = '20px';
}

function c(){
  document.getElementById("2").style.color = '#ffffff';
  document.getElementById("2").style.background = '#d3a461';
  document.getElementById("2").style.borderRadius = '20px';
}

function ch(){
  document.getElementById("3").style.color = '#ffffff';
  document.getElementById("3").style.background = '#d3a461';
  document.getElementById("3").style.borderRadius = '20px';
}

function cha(){
  document.getElementById("4").style.color = '#ffffff';
  document.getElementById("4").style.background = '#d3a461';
  document.getElementById("4").style.borderRadius = '20px';
}

function chan(){
  document.getElementById("6").style.color = '#ffffff';
  document.getElementById("6").style.background = '#d3a461';
  document.getElementById("6").style.borderRadius = '20px';
}

function chang(){
  document.getElementById("7").style.color = '#ffffff';
  document.getElementById("7").style.background = '#d3a461';
  document.getElementById("7").style.borderRadius = '20px';
}

function change(){
  document.getElementById("8").style.color = '#ffffff';
  document.getElementById("8").style.background = '#d3a461';
  document.getElementById("8").style.borderRadius = '20px';
}

function changeC(){
  document.getElementById("9").style.color = '#ffffff';
  document.getElementById("9").style.background = '#d3a461';
  document.getElementById("9").style.borderRadius = '20px';
}

function changeCo(){
  document.getElementById("11").style.color = '#ffffff';
  document.getElementById("11").style.background = '#d3a461';
  document.getElementById("11").style.borderRadius = '20px';
}


function changeCol(){
  document.getElementById("12").style.color = '#ffffff';
  document.getElementById("12").style.background = '#d3a461';
  document.getElementById("12").style.borderRadius = '20px';
}


function changeColo(){
  document.getElementById("13").style.color = '#ffffff';
  document.getElementById("13").style.background = '#d3a461';
  document.getElementById("13").style.borderRadius = '20px';
}

function changeColorrr(){
  document.getElementById("14").style.color = '#ffffff';
  document.getElementById("14").style.background = '#d3a461';
  document.getElementById("14").style.borderRadius = '20px';
}

function cc(){
  document.getElementById("15").style.color = '#ffffff';
  document.getElementById("15").style.background = '#d3a461';
  document.getElementById("15").style.borderRadius = '20px';
}

function ccc(){
  document.getElementById("16").style.color = '#ffffff';
  document.getElementById("16").style.background = '#d3a461';
  document.getElementById("16").style.borderRadius = '20px';
}

function cccc(){
  document.getElementById("17").style.color = '#ffffff';
  document.getElementById("17").style.background = '#d3a461';
  document.getElementById("17").style.borderRadius = '20px';
}

function chh(){
  document.getElementById("18").style.color = '#ffffff';
  document.getElementById("18").style.background = '#d3a461';
  document.getElementById("18").style.borderRadius = '20px';
}

function chhh(){
  document.getElementById("19").style.color = '#ffffff';
  document.getElementById("19").style.background = '#d3a461';
  document.getElementById("19").style.borderRadius = '20px';
}

function chhhh(){
  document.getElementById("20").style.color = '#ffffff';
  document.getElementById("20").style.background = '#d3a461';
  document.getElementById("20").style.borderRadius = '20px';
}

function chhhhh(){
  document.getElementById("21").style.color = '#ffffff';
  document.getElementById("21").style.background = '#d3a461';
  document.getElementById("21").style.borderRadius = '20px';
}

function changee(){
  document.getElementById("22").style.color = '#ffffff';
  document.getElementById("22").style.background = '#d3a461';
  document.getElementById("22").style.borderRadius = '20px';
}


function changeee(){
  document.getElementById("23").style.color = '#ffffff';
  document.getElementById("23").style.background = '#d3a461';
  document.getElementById("23").style.borderRadius = '20px';
}

function changeeee(){
  document.getElementById("24").style.color = '#ffffff';
  document.getElementById("24").style.background = '#d3a461';
  document.getElementById("24").style.borderRadius = '20px';
}

function ndrysho(){
  document.getElementById("25").style.color = '#ffffff';
  document.getElementById("25").style.background = '#d3a461';
  document.getElementById("25").style.borderRadius = '20px';
}

function ndrysh(){
  document.getElementById("26").style.color = '#ffffff';
  document.getElementById("26").style.background = '#d3a461';
  document.getElementById("26").style.borderRadius = '20px';
}

function ndrys(){
  document.getElementById("27").style.color = '#ffffff';
  document.getElementById("27").style.background = '#d3a461';
  document.getElementById("27").style.borderRadius = '20px';
}

function ndry(){
  document.getElementById("28").style.color = '#ffffff';
  document.getElementById("28").style.background = '#d3a461';
  document.getElementById("28").style.borderRadius = '20px';
}

function ndr(){
  document.getElementById("29").style.color = '#ffffff';
  document.getElementById("29").style.background = '#d3a461';
  document.getElementById("29").style.borderRadius = '20px';
}

function nd(){
  document.getElementById("30").style.color = '#ffffff';
  document.getElementById("30").style.background = '#d3a461';
  document.getElementById("30").style.borderRadius = '20px';
}

function n(){
  document.getElementById("31").style.color = '#ffffff';
  document.getElementById("31").style.background = '#d3a461';
  document.getElementById("31").style.borderRadius = '20px';
}

//for scrolling back on top

function topFunction(){
  document.documentElement.scrollTop = 0;
}

//the submit button

function MySubmit(event){
  event.preventDefault();
  document.getElementById("con").innerHTML = "Message was sent!";
}

//some snackbars appearing on the schedule page

function Anatomy(){
  var an = document.getElementById("anatomy");
  an.className = "show";
  setTimeout(function(){ an.className.replace("show", "");}, 3000);
}

function Yinspiration(){
  var yin = document.getElementById("yinspiration");
  yin.className = "show";
  setTimeout(function(){ yin.className.replace("show", "");}, 3000);
}