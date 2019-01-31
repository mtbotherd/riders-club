$(document).ready(function() {
    // Move Ridematch nav menubar
    var rmNav = $(".ridematch-nav").detach();
    $(rmNav).appendTo("header.navbar");

    // Move modal to body target
    var moveModal = $(".ridematch .modal").detach();
    $("body form").append(moveModal);

    // Set class for active link
    $('.ridematch .navbar-default a').click(function() {
        $('.ridematch .navbar-default a').removeClass('active');
        $(this).addClass('active');
    });

    // Toggle class for days of week
    $('.ridematch input.btnSch').click(function() {
        $(this).toggleClass('active');
    });

    // Ridematch message sent confirmation
    $('.ridematch #sendMessage').click(function() {
        $('.modal-body h2, .modal-body .form-group, .modal-footer').hide();
        $('.modal-body p').show();
        return;
    });

    // Show message as read on click
    $('.ridematch .panel-heading.new').click(function() {
        $(this).closest('.panel-heading').removeClass('new');
    });

});
