
 function myFunction(x) {
    x.classList.toggle("change");
       
  }
 
     
  $('.container').on('click', function() {
    console.log("true");
	$('.nav').toggleClass('active');
});