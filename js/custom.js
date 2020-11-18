$(function(){
    $('.draggable').draggable({
        containment: '.box_question',
        opacity: 0.6,
        // helper: "clone",
        cursor: 'move',
        revert: function(event, ui) {
            // on older version of jQuery use "draggable"
            // $(this).data("draggable")
            $(this).data("draggable").originalPosition = {
                top : 0,
                left : 0
            };
            // on 2.x versions of jQuery use "ui-draggable"
            // console.log($(this).data("ui-draggable"));
            // $(this).data("ui-draggable").originalPosition = {
            //     top : 0,
            //     left : 0
            // };
            return !event;
        },
        start: function(event, ui) {
            $(ui.helper).addClass("ui-draggable-helper");
            // console.log(ui.helper.context);
            // console.log(ui.helper.clone());
        },
        drag: function( event, ui ) {
        },
        stop:function( event, ui ) {
        }
    })

    $( ".droparea" ).droppable({
        disabled: false,
        drop: function( event, ui ) {
            // $(this).append(ui.draggable.clone(true));
            // $(this).droppable( "option", "disabled", true )

            var dropId = ui.draggable.attr('id');
            $(this).attr('selected', dropId);
        }
    });

});

$(document).ready(function () {
    $(".btn_submit_quiz").click(function(e){
        e.preventDefault();
        let winners_array = [];
        $('.droparea').each((index, item) => {
            winners_array.push(
                {
                    answer : $(item).attr('answer'),
                    selected : $(item).attr('selected')
                }
            )
        });

        let status = true;
        if(winners_array.length > 0){
            for (var key in winners_array) {
                if(winners_array[key].answer != '' && winners_array[key].selected != ''){
                    console.log(winners_array[key].answer, '---', winners_array[key].selected);
                    if(winners_array[key].answer == winners_array[key].selected){
                        status = true;
                    }else{
                        status = false;
                    }
                }else {
                    status = false;
                }
                
            }
        }

        console.log('status', status);
        
        if(status == true){
            // Correct
            $('.modal-title').text('Correct');
            $('.modal-header').addClass('correct');
            $('.notify').text("Đúng rồi !");
            $('#audio').attr('src', '/audio/correct/01.m4a');
            $('.btn_reset_hide_continue').show();
            $('.btn_modal').click();
        }else {
            // Incorrect
            $('.modal-title').text('Incorrect');
            $('.modal-header').addClass('incorrect');
            $('.notify').text("Chưa chính xác");
            $('.btn_reset_hide').show();
            $('#audio').attr('src', '/audio/incorrect/01.m4a');
            $('.btn_modal').click();
        }
    });

    $(".btn_reset").click(function(e){
        location.reload();
    });

    $('.btn_reset_hide_continue').click(function(e){
        window.location = "/weeks/week01/matching/lesson02.html";
    });
});