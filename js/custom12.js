// Matching Quiz
$(document).ready(function () {
    
    var icons_correct = [
        './finish/images/02.png', 
        './finish/images/01.jpg', 
        './finish/images/03.jpg', 
        './finish/images/04.jpg', 
        './finish/images/05.png', 
        './finish/images/06.jpg', 
        './finish/images/07.png', 
        './finish/images/08.png'
    ];

    var item_icons_correct = icons_correct[Math.floor(Math.random() * icons_correct.length)];
    
    $('#img_success').attr('src', item_icons_correct);

    setTimeout(function(){ 
        window.location.href = './success.html';
    }, 5000);
        
});


// End Matching Quiz
