$(document).ready(function(){
    $("#button-algorithm").click(function(){
        $("#loader1").css("display", "block");
        $.ajax({
            url: "/performance",
            type: 'GET',
            success: function(result){
                $("#div1").html(result);
                $("#loader1").css("display", "none");
            }
        });
    });
});

$(document).ready(function(){
    $("#button-request-strike").click(function(){
        $("#loader2").css("display", "block");
        $.ajax({
            url: "/performance",
            type: 'GET',
            success: function(result){
                $("#div2").html(result);
                $("#loader2").css("display", "none");
            }
        });
    });
});