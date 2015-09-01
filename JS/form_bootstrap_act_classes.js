//Added classes with errors in bootstrap form (For MODX)

$(form).bind('submit', function(event) {
        $(formfields).each(function(){
        if(!$(this).val().length) {
                if(!$(this).parent().hasClass('has-error')){
                $(this).parent().addClass('has-error has-feedback');
                $(this).after('<span class="glyphicon glyphicon-remove form-control-feedback"></span>');
                $(this).after("<span>Заполните пожалуйста это поле!</span>");
                }
            event.preventDefault();
            return;
            }
        else
            if($(this).parent().hasClass('has-error')){
            $(this).parent().removeClass('has-error has-feedback');
            $(this).next('span').remove();
            $(this).next('span').remove();
            }
    });
});