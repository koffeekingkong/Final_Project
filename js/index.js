$( document ).ready(function() {

  $("section figure").click(function(){
    var projectid = $(this)[0].id;
    // showing project id that is up till my hyphen
    // on click, the projectid will be loaded
    projectid = projectid.substr(0, projectid.indexOf('-'));
    console.log ("project ", projectid);
    $(".projects > *").css("display","none");
    $(".works").slideDown();
    $("#"+projectid).css("display","flex");
    $('html, body').animate({scrollTop : 0},800);
    		return false;
  })

});
