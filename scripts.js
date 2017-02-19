function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
	

function flowers(){
		var flowernums = [
		"@>--",
		"@>--"+"\n" + "@>--" + "\n",
		"@>--\r@>--\r@>--\r",
		"@>--\r@>--\r@>--\r@>--\r",
		"@>--\r@>--\r@>--\r@>--\r@>--\r",
		"@>--\r@>--\r@>--\r@>--\r@>--\r@>--\r",
		"@>--\r@>--\r@>--\r@>--\r@>--\r@>--\r@>--\r",
		"@>--\r@>--\r@>--\r@>--\r@>--\r@>--\r@>--\r@>--\r",
		"@>--\r@>--\r@>--\r@>--\r@>--\r@>--\r@>--\r@>--\r@>--\r","no roses❣"];
	var flower = flowernums[getRandomIntInclusive(0,flowernums.length)];
	$(".message1").text(flower);
	}




$(document).ready(function(){
	$(".button1").click(function(){
		flowers();
	})
		

	$(".button").click(function(){
		randomGreeting();
	})

	function randomGreeting() {
		var greetings = ["Happy Valentine's Day!",
                         "You are beautiful!",
                         "Be mine!",
                         "You are my sweetheart",
                         "I love you!", 
                         "Valentine's Day is a holiday made by Hallmark...",
                         "Love and hugs!",
                         "XOXO",
                         "Will you be my valentine?",
                         "I <3 U",
                         "I Heart You!",
                         "You're cute",
                         "Love is in the air",
                         "Have an amazing Valentine's Day!",
                         "Have a lovely Valentine's Day!",
                         "Have a perfect Valentine's Day!",
                         " \"To me, you are perfect.\" (Love Actually, 2003)",
                         "Someone loves you",
                         "You are so sweet!",
                         "I'm yours!",];
      
 
		var greeting = greetings[getRandomIntInclusive(0,greetings.length)];
      
		$(".message").text(greeting);
	}
	
	var hexArray = ['#hexVal','#hexVal','#hexval', '#hexval']
	var randomColor = hexArray[Math.floor(Math.random() * hexArray.length)];

	$(".message").css("color",randomColor);
  
});

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);


