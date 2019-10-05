$("ul").on("click", "li", function(){
  $(this).toggleClass("done");
});

$("ul").on("click", "span", function(e){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  })
  e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
  if(e.which === 13 && $(this).val() !== ""){
    $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + $(this).val() + "</li>");
    $(this).val("");
  }
});