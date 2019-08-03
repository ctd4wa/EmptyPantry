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

      var titleOne = $("<h5 class='card-title'>").text(title);
      var pubOne = $("<p class='card-text'>").text("Publisher: " + publisher);
      var sourceOne = $("<a>").attr("href", sourceURL);
      sourceOne.text("Source");
      var imageOne = $("<img class='card-img-top'>").attr("src", imgURL);
      var buttoneOne = $("<i class = 'fa fa-thumbs-up '>").addClass(
        "btn btn-primary"
      );
      var buttonTwo = $("<i class = 'fa fa-thumbtack'>").addClass(
        "btn btn-danger"
      );
      // <a href="#" class="btn btn-primary" id = "thumbs-up"><i class="fa fa-thumbs-up"></i></a>
      recipeDiv.append(titleOne);
      recipeDiv.append(sourceOne);
      recipeDiv.append(pubOne);
      recipeDiv.append(imageOne);
      //   recipeDiv.append(buttoneOne);
      //   recipeDiv.append(buttonTwo);

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
