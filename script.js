$(document).ready(function () {
  $(".image").draggable({
    helper: "clone",
    revert: "invalid",
  });

  $("#parent").droppable({
    accept: ".image",
    drop: function (event, ui) {
      var sourceDiv = ui.helper[0];
      var targetDiv = $(this)[0];

      var sourceImage = $(sourceDiv).css("background-image");
      var targetImage = $(targetDiv).css("background-image");
      $(sourceDiv).css("background-image", targetImage);
      $(targetDiv).css("background-image", sourceImage);
    },
  });
});
