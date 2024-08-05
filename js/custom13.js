// Matching Quiz
$(document).ready(function () {
    
    var icons_correct = [
        './finish/video/01.mp4', 
        './finish/video/02.mp4', 
        './finish/video/03.mp4', 
        './finish/video/04.mp4', 
        './finish/video/05.mp4', 
        './finish/video/06.mp4', 
        './finish/video/07.mp4', 
        './finish/video/08.mp4',
        './finish/video/09.mp4',
        './finish/video/10.mp4',
        './finish/video/11.mp4',
        './finish/video/12.mp4',
        './finish/video/13.mp4',
        './finish/video/14.mp4',
        './finish/video/15.mp4',
        './finish/video/16.mp4',
        './finish/video/17.mp4',
    ];

    var item_icons_correct = icons_correct[Math.floor(Math.random() * icons_correct.length)];
    
    var html = "<video width='100%' height='100%' controls autoplay><source  src='"+ item_icons_correct +"' type='video/mp4'></video>";
    $('#vid').html(html);
        
});


// End Matching Quiz
