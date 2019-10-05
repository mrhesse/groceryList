$("ul").on("click", "li", function(){
  $(this).toggleClass("done");
});

$("ul").on("click", "i", function(e){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  })
  e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
  if(e.which === 13){
    $("ul").append("<li><i class='fa fa-trash'></i> " + $(this).val() + "</li>");
    $(this).val("");
  }
});