$(document).ready(function(){
  $('#bootbox').click(function() {
    $("#myModal").modal({
      "backdrop"  : "static",
      "keyboard"  : true,
      "show"      : true
    });
  })

  $("#OK").on("click", function(e) {
      console.log("[OKボタン]が押されました");
      $("#myModal").modal('hide');
  });

});
