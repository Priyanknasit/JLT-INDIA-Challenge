$("button").click( function() {
 $.getJSON( "article.json", function(obj) {
  $.each(obj, function(key, value) {
         $("ul").append("<li>"+value.name+"'s age is : "+value.age+"</li>");
  });
 });
});