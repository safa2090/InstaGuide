/*let array1 = ["test", "test", "test", "test", "test"];
let array2 = ["hello", "hello", "hello", "hello", "hello"];
let array3 = ["world", "world", "world", "world", "world", "world"];

function showCategories(array) {
  $("#btn1").hide();
  $("#btn2").hide();
  $("#btn3").hide();
  $("#container").empty();
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    $("#container").append(<p> ${element} </p>);
  }
}

$("#btn1").on("click", () => {
  showCategories(array1);
});

$("#btn2").on("click", () => {
  showCategories(array2);
});

$("#btn3").on("click", () => {
  showCategories(array3);
});

$("#show").on("click", () => {
  $("#container").empty();
  $("#btn1").show();
  $("#btn2").show();
  $("#btn3").show();
});*/

var images = []; // Initialize an empty array

var imagesArray = [];
		$(document).ready(function(){
			$.ajax({
				url: 'photos', // Path to the folder containing the images
				success: function (data) {
					$(data).find("a").attr("href", function (i, val) {
						if (val.match(/\.(jpe?g|png|gif)$/)) { // Filter out non-image files
							imagesArray.push('<img src="img/' + val + '">');
						}
					});
				}
			});
		});
