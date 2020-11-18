// $(document).ready(function () {
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
            // var self = $(this);
            // let id = self.attr('id');
            // self.data( 'number', id );
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

            // var self = $(this);
            // self.find(".list_items1").remove();
            // // var dropId = ui.draggable.attr('id');
            // var target_ui_object_html = ui.item.context.id;
            // self.appendChild(target_ui_object_html);

            // var itemid = $(event.originalEvent.toElement).attr("itemid");
            // $('.box-item').each(function(index, item) {
            //     console.log($(this).attr("itemid"), itemid);
            //     if ($(this).attr("itemid") === itemid) {
            //         $(this).appendTo("#" + itemid);
            //     }
            // });

        }
    });
});