// QUIZ
$(document).ready(function () {
    $(".btn_submit_quiz").click(function(e){

        let value = [];
        let answer = 6;
        $('.slot_quiz_090 select').each((index, item) => {
            console.log(index, '---', item);
            let i = 'select[name=quiz0' + index + ']';
            let a = $(i).val();
            value.push(a);
        });

        console.log(value, '----', value.length);
        let status = true;
        if(value.length == answer){
            for(var i in value) {
                if(value[i] != 'true'){
                    status = false;
                }
                console.log(value[i]) //note i returns index
            }
        }else {
            status = false;
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

        console.log(item_icons_incorrect, item_icons_correct);

        if(status == true){
            // Correct
            $('.modal-title').text('Correct');
            $('.modal-header').addClass('correct');
            $('.notify').text("Đúng rồi !");
            $('#audio').attr('src', '../../../audio/correct/02.m4a');
            $('.icon_status').attr('src', item_icons_correct);
            $('.btn_reset_hide_continue').show();
            $('.btn_modal').click();
        }else {
            // Incorrect
            $('.modal-title').text('Incorrect');
            $('.modal-header').addClass('incorrect');
            $('.notify').text("Chưa chính xác");
            $('.btn_reset_hide').show();
            $('.icon_status').attr('src', item_icons_incorrect);
            $('#audio').attr('src', '../../../audio/incorrect/02.m4a');
            $('.btn_modal').click();
        }

        $(".btn_reset").click(function(e){
            location.reload();
        });

        $('.btn_reset_hide_continue').click(function(e){
            let url = $('.btn_continue').attr('data-url');
            window.location = url;
        });
    });
});
// QUIZ