let array1 = ["test", "test", "test", "test", "test"];
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
});