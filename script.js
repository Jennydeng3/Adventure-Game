 $(".one").show();

 $(".yes-button").click(function() {
     $(".two").slideDown();
     $(".one").hide();
     $(".good2-img").hide();
 });

 $(".yes-button2").click(function() {
     $(".Story-Ending-Yes").slideDown();
     $(".two").hide();
 });

 $(".yes-button3").click(function() {
     $(".Story-Ending-Yes").show();
$(".Story-Ending-yess").slideDown();
      $(".good2-img").show();
    
 });

 $(".no-button3").click(function() {
     $(".two").hide();
     $(".three").slideDown();
     $(".yes-button2").hide();
 });

 $(".no-button4").click(function() {
     $(".Story-Ending-no").hide();
     $(".Story-Ending-noo").show();
 });

 $(".good2-img").click(function() {
     $(".good").slideDown();
$(".good2-img").css("height", "500px");
      $(".good2-img").show();
   $(".good2-img").attr("src", "https://bible2blog.files.wordpress.com/2015/06/treasurechest.png");
      $(".Story-Ending-yesss").slideDown();
      $(".good3-img").slideDown();
 });

 $(".bad2-img").click(function() {
     $(".bad").slideDown();
     $(".Story-Ending-nooo").css("font-size","50px");
     $(".Story-Ending-nooo").text("The end of the game...there was empty...😑 you know what, other group of people already dug the treasure and gold out when you were enjoying on the boat.");
     $(".bad2-img").css("height", "200px");
     $(".bad2-img").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgKBV4eo6lJd2BFOrAHP4pyvVwQob3Fc7Nhg&usqp=CAU");
 });


 $(".no-button").click(function() {
     $(".Part-Two-No").slideDown();
     $(".two").hide();
     $(".three").show();
     $(".one").hide();
     $(".yes-button2").hide();
     $(".no-button3").hide();
 });
 $(".no-button2").dblclick(function() {
     $(".Story-Ending-No").slideDown();
     $(".Story-Ending-noo").hide();
     $(".three").hide();
     $(".one").hide();
 });