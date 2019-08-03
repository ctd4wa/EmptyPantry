$(document).ready(function() {
  $("#result-box").hide();
});
var key = "590f612b2e3dc1a3d83a79d076599e77";
var userInput = [];
var terms = "";

function searchIngredient() {
  var QueryURL =
    "https://www.food2fork.com/api/search?key=" +
    key +
    "&q=" +
    terms +
    "&page=1";
  $.ajax({
    url: QueryURL,
    method: "GET"
  }).then(function(response) {
    $("result-box").show();
    var test = JSON.parse(response);
    for (let i = 0; i < 8; i++) {
      var recipeDiv = $("<div class='card'>");
      var title = test.recipes[i].title;
      var sourceURL = test.recipes[i].source_url;
      var imgURL = test.recipes[i].image_url;
      var publisher = test.recipes[i].publisher;
      var recipeId = test.recipes[i].recipe_id;

      var titleOne = $("<h5 class='card-title'>").text(title);
      var pubOne = $("<p class='card-text'>").text("Publisher: " + publisher);
      var sourceOne = $("<a>").attr("href", sourceURL);
      sourceOne.text("Source");
      var imageOne = $("<img class='card-img-top'>").attr("src", imgURL);
      var recipeIdOne = $("<p class='card-text'>").text("ID: " + recipeId);
      var buttonLike = $("<button class='btn btn-primary'>").on(
        "click",
        function() {
          event.preventDefault();
          var query =
            "https://www.food2fork.com/api/get?key=" +
            key +
            "&rId=" +
            test.recipes[i].recipe_id;
          $.ajax({
            url: query,
            method: "GET"
          }).then(function(response) {
            var likeSearch = JSON.parse(response);
            console.log(likeSearch);
          });
        }
      );
      var buttonPin = $("<button class='btn btn-danger'>").on(
        "click",
        function() {
          event.preventDefault();
          var query2 =
            "https://www.food2fork.com/api/get?key=" +
            key +
            "&rId=" +
            test.recipes[i].recipe_id;
          $.ajax({
            url: query2,
            method: "GET"
          }).then(function(response) {
            var pinSearch = JSON.parse(response);
            console.log(pinSearch);
          });
        }
      );
      recipeDiv.append(titleOne);
      recipeDiv.append(sourceOne);
      recipeDiv.append(pubOne);
      recipeDiv.append(imageOne);
      recipeDiv.append(recipeIdOne);
      recipeDiv.append(buttonLike);
      recipeDiv.append(buttonPin);

      var check = $("#result-box-row").append(recipeDiv);
      $("#result-box").append(check);
    }
  });
}

$("#add-ingredient").on("click", function() {
  $("#result-box").toggle();
  $("result-box").show();
  event.preventDefault();

  userInput.push($("#ingredient-one").val());
  userInput.push($("#ingredient-two").val());
  userInput.push($("#ingredient-three").val());
  userInput.push($("#ingredient-four").val());
  userInput.push($("#ingredient-five").val());
  for (let i = 0; i < userInput.length; i++) {
    terms += userInput[i];
    terms += ", ";
  }

  searchIngredient();

  $("#ingredient-one").val("");
  $("#ingredient-two").val("");
  $("#ingredient-three").val("");
  $("#ingredient-four").val("");
  $("#ingredient-five").val("");

  userInput = [];
  terms = "";
});
