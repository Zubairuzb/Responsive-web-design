var myToggle = function(){
  var myLinks = document.querySelector(".nav-links")
  var myLinksA = document.querySelector(".links");

  if(myLinks.style.display === "block"){
    myLinks.style.display = "none";
  }
  else{
    myLinks.style.display = "block";
  }
}

