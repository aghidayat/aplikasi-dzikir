$("body").click(function(){
  var hidden_count = $("#hidden_count").val();
  var count = parseInt(hidden_count)+1;
  $("#hidden_count").val(count);
  $("#count").html(parseInt(hidden_count)+1);

    if($("#hidden_dzikir").val() == "dzikir1" && count > 33){
      $("#dzikir").html("Alhamdulillah");
      $("#hidden_dzikir").val("dzikir2");
      $("#hidden_count").val(0);
      $("#count").html('0');
    }else if($("#hidden_dzikir").val() == "dzikir2" && count > 33){
      $("#dzikir").html("Allahuakbar");
      $("#hidden_dzikir").val("dzikir3");
      $("#hidden_count").val(0);
      $("#count").html('0');
    }else if($("#hidden_dzikir").val() == "dzikir3" && count > 33){
      $("#dzikir").html("Subhanallah");
      $("#hidden_dzikir").val("dzikir1");
      $("#hidden_count").val(0);
      $("#count").html('0');
    }
});

$("#reset").click(function(){  
  $("#dzikir").html("Subhanallah");
  $("#hidden_dzikir").val("dzikir1");
  $("#hidden_count").val(-1);
  $("#count").html('0');
})
