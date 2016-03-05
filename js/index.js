$( document ).ready(function() {

  $("section figure").click(function(){
    var projectid = $(this)[0].id;
    // showing project id that is up till my -
    projectid = projectid.substr(0, projectid.indexOf('-'));
    console.log ("project ", projectid);
    $(".projects > *").css("display","none");
    $("#"+projectid).css("display","flex");

  })

});
