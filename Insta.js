/*var fashionArray = [];
var travelArray = [];
var cookingArray = [];
var sarcasmArray = [];


$(document).ready(function() {

  $(".fashion img").each(function() {
    fashionArray.push($(this).attr("src"));
  });

  $(".travel img").each(function() {
    travelArray.push($(this).attr("src"));
  });

  $(".cooking img").each(function() {
    cookingArray.push($(this).attr("src"));
  });

  $(".sarcasm img").each(function() {
    sarcasmArray.push($(this).attr("src"));
  });})*/

  $(document).ready(function() {

    $('.but').click(function(){
      $(this).addClass('buttons').siblings().removeClass('buttons');
      var filter=$(this).attr('data-filter')
      if(filter == 'fashion'){
        $('.fashion').show(400);
      }else{
        $('.fashion').not('.'+filter).hide(200)
        $('.fashion').filter('.'+filter).show(400)
      }
      if(filter == 'travel'){
        $('.travel').show(400);
      }else{
        $('.travel').not('.'+filter).hide(200)
        $('.travel').filter('.'+filter).show(400)
      }
      if(filter == 'cooking'){
        $('.cooking').show(400);
      }else{
        $('.cooking').not('.'+filter).hide(200)
        $('.cooking').filter('.'+filter).show(400)
      }
      if(filter == 'sarcasm'){
        $('.sarcasm').show(400);
      }else{
        $('.sarcasm').not('.'+filter).hide(200)
        $('.sarcasm').filter('.'+filter).show(400)
      }
    })
  })























