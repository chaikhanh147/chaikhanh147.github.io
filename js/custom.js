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

// Matching Quiz
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

        var icons_correct = [
            '../../../audio/correct/1.jpg', 
            '../../../audio/correct/2.gif', 
            '../../../audio/correct/3.gif', 
            '../../../audio/correct/4.gif', 
            '../../../audio/correct/5.gif', 
            '../../../audio/correct/6.gif', 
            '../../../audio/correct/7.gif', 
            '../../../audio/correct/8.gif'
        ];

        var icons_incorrect = [
            '../../../audio/incorrect/1.gif', 
            '../../../audio/incorrect/2.png', 
            '../../../audio/incorrect/3.gif', 
            '../../../audio/incorrect/4.gif', 
            '../../../audio/incorrect/5.gif', 
            '../../../audio/incorrect/6.gif'
        ];

        var item_icons_correct = icons_correct[Math.floor(Math.random() * icons_correct.length)];
        var item_icons_incorrect = icons_incorrect[Math.floor(Math.random() * icons_incorrect.length)];
        
        if(status == true){
            // Correct
            $('.modal-title').text('Correct');
            $('.modal-header').addClass('correct');
            $('.notify').text("Đúng rồi !");
            $('#audio').attr('src', '../../../audio/correct/01.m4a');
            $('.btn_reset_hide_continue').show();
            $('.icon_status').attr('src', item_icons_correct);
            $('.btn_modal').click();
        }else {
            // Incorrect
            $('.modal-title').text('Incorrect');
            $('.modal-header').addClass('incorrect');
            $('.notify').text("Chưa chính xác");
            $('.btn_reset_hide').show();
            $('.icon_status').attr('src', item_icons_incorrect);
            $('#audio').attr('src', '../../../audio/incorrect/01.m4a');
            $('.btn_modal').click();
        }
    });

    $(".btn_reset").click(function(e){
        location.reload();
    });

    $('.btn_reset_hide_continue').click(function(e){
        let url = $('.btn_continue').attr('data-url');
        window.location = url;
    });
});

// End Matching Quiz
