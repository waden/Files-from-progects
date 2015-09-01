//Display message from server (MODX) in form, without reload page.

$(document).ready(function(){

	$(".loginLoginForm").bind("submit", function() {

        $(".auth_error").text("");
        
        if ($("input#authLogin").val().length < 1 || $("input#authPass").val().length < 1) {
          $(".auth_error").text("Для авторизации введите логин и пароль");
          return false;
        }

      $.ajax({
                type    : "POST",
                cache   : false,
                timeout : 3000,
                url     : "#",
                data    : $(this).serializeArray(),
                success: function(data) {
                        var errMessage = $(data).find(".auth_error").text();
                        if(errMessage == ""){
                                location.reload();
                        }else{
                                $(".auth_error").text(errMessage);
                        }
                }
        });

        return false;
    });
        
});
