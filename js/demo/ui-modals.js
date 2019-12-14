
// UI-Modals.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - ThemeOn.net -


 $(document).ready(function() {

    // BOOTBOX - ALERT MODAL
    // =================================================================
    // Require Bootbox
    // http://bootboxjs.com/
    // =================================================================
    $('#demo-bootbox-alert').on('click', function(){
        bootbox.alert("Hello world!", function(){
            $.niftyNoty({
                type: 'info',
                icon : 'pli-exclamation icon-2x',
                message : 'Hello world callback',
                container : 'floating',
                timer : 5000
            });
        });
    });



    // BOOTBOX - CONFIRM MODAL
    // =================================================================
    // Require Bootbox
    // http://bootboxjs.com/
    // =================================================================
    $('#demo-bootbox-confirm').on('click', function(){
        bootbox.confirm("Are you sure?", function(result) {
            if (result) {
                $.niftyNoty({
                    type: 'success',
                    icon : 'pli-like-2 icon-2x',
                    message : 'User confirmed dialog',
                    container : 'floating',
                    timer : 5000
                });
            }else{
                $.niftyNoty({
                    type: 'danger',
                    icon : 'pli-cross icon-2x',
                    message : 'User declined dialog.',
                    container : 'floating',
                    timer : 5000
                });
            };

        });
    });



    // BOOTBOX - PROMPT MODAL
    // =================================================================
    // Require Bootbox
    // http://bootboxjs.com/
    // =================================================================
    $('#demo-bootbox-prompt').on('click', function(){
        bootbox.prompt("What is your name?", function(result) {
            if (result) {
                $.niftyNoty({
                    type: 'success',
                    icon : 'pli-consulting icon-2x',
                    message : 'Hi ' + result,
                    container : 'floating',
                    timer : 5000
                });
            }else{
                $.niftyNoty({
                    type: 'danger',
                    icon : 'pli-cross icon-2x',
                    message : 'User declined dialog.',
                    container : 'floating',
                    timer : 5000
                });
            };
        });
    });



    // BOOTBOX - CUSTOM DIALOG
    // =================================================================
    // Require Bootbox
    // http://bootboxjs.com/
    // =================================================================
    $('#demo-bootbox-custom').on('click', function(){
        bootbox.dialog({
            message: "I am a custom dialog",
            title: "Custom title",
            buttons: {
                success: {
                    label: "Success!",
                    className: "btn-success",
                    callback: function() {
                        $.niftyNoty({
                            type: 'success',
                            message : '<strong>Well done!</strong> You successfully read this important alert message. ',
                            container : 'floating',
                            timer : 5000
                        });
                    }
                },

                danger: {
                    label: "Danger!",
                    className: "btn-danger",
                    callback: function() {
                        $.niftyNoty({
                            type: 'danger',
                            message : '<strong>Oh snap!</strong> Change a few things up and try submitting again.',
                            container : 'floating',
                            timer : 5000
                        });
                    }
                },

                main: {
                    label: "Click ME!",
                    className: "btn-primary",
                    callback: function() {
                        $.niftyNoty({
                            type: 'primary',
                            message : "<strong>Heads up!</strong> This alert needs your attention, but it's not super important.",
                            container : 'floating',
                            timer : 5000
                        });
                    }
                }
            }
        });
    });



    // BOOTBOX - CUSTOM HTML CONTENTS
    // =================================================================
    // Require Bootbox
    // http://bootboxjs.com/
    // =================================================================
    $('#demo-bootbox-custom-h-content').on('click', function(){
        bootbox.dialog({
            title: "That html",
            message: '<div class="media"><div class="media-left"><img class="media-object img-lg img-circle" src="img/profile-photos/3.png" alt="Profile picture"></div><div class="media-body"><p class="text-semibold text-main">You can also use <strong class="text-primary">HTML</strong></p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.</div></div>',
            buttons: {
                confirm: {
                    label: "Save"
                }
            }
        });
    });



    // BOOTBOX - CUSTOM HTML FORM
    // =================================================================
    // Require Bootbox
    // http://bootboxjs.com/
    // =================================================================
    $('#demo-bootbox-custom-h-form').on('click', function(){
        bootbox.dialog({
            title: "This is a form in a modal.",
            message:'<div class="row"> ' + '<div class="col-md-12"> ' +
                    '<form class="form-horizontal"> ' + '<div class="form-group"> ' +
                    '<label class="col-md-4 control-label" for="name">Name</label> ' +
                    '<div class="col-md-4"> ' +
                    '<input id="name" name="name" type="text" placeholder="Your name" class="form-control input-md"> ' +
                    '<span class="help-block"><small>Here goes your name</small></span> </div> ' +
                    '</div> ' + '<div class="form-group"> ' +
                    '<label class="col-md-4 control-label" for="awesomeness">How awesome is this?</label> ' +
                    '<div class="col-md-8"> <div class="form-block"> ' +
                    '<label class="form-radio form-icon demo-modal-radio active"><input type="radio" autocomplete="off" name="awesomeness" value="Really awesome" checked> Really awesome</label>' +
                    '<label class="form-radio form-icon demo-modal-radio"><input type="radio" autocomplete="off" name="awesomeness" value="Super awesome"> Super awesome </label> </div>' +
                    '</div> </div>' + '</form> </div> </div><script></script>',
            buttons: {
                success: {
                    label: "Save",
                    className: "btn-purple",
                    callback: function() {
                        var name = $('#name').val();
                        var answer = $("input[name='awesomeness']:checked").val();

                        $.niftyNoty({
                            type: 'purple',
                            icon : 'fa fa-check',
                            message : "Hello " + name + ".<br> You've chosen <strong>" + answer + "</strong>",
                            container : 'floating',
                            timer : 4000
                        });
                    }
                }
            }
        });

        $(".demo-modal-radio").niftyCheck();
    });



    // BOOTBOX - ZOOM IN/OUT ANIMATION
    // =================================================================
    // Require Bootbox
    // http://bootboxjs.com/
    //
    // Animate.css
    // http://daneden.github.io/animate.css/
    // =================================================================
    $('#demo-bootbox-zoom').on('click', function(){
        bootbox.confirm({
            message : "<p class='text-semibold text-main'>Zoom In/Out</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>",
            buttons: {
                confirm: {
                    label: "Save"
                }
            },
            callback : function(result) {
                //Callback function here
            },
            animateIn: 'zoomInDown',
            animateOut : 'zoomOutUp'
        });
    });



    // BOOTBOX - BOUNCE IN/OUT ANIMATION
    // =================================================================
    // Require Bootbox
    // http://bootboxjs.com/
    //
    // Animate.css
    // http://daneden.github.io/animate.css/
    // =================================================================
    $('#demo-bootbox-bounce').on('click', function(){
        bootbox.confirm({
            message : "<p class='text-semibold text-main'>Bounce</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>",
            buttons: {
                confirm: {
                    label: "Save"
                }
            },
            callback : function(result) {
                //Callback function here
            },
            animateIn: 'bounceIn',
            animateOut : 'bounceOut'
        });
    });



    // BOOTBOX - RUBBERBAND & WOBBLE ANIMATION
    // =================================================================
    // Require Bootbox
    // http://bootboxjs.com/
    //
    // Animate.css
    // http://daneden.github.io/animate.css/
    // =================================================================
    $('#demo-bootbox-ruberwobble').on('click', function(){
        bootbox.confirm({
            message : "<p class='text-semibold text-main'>RubberBand & Wobble</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>",
            buttons: {
                confirm: {
                    label: "Save"
                }
            },
            callback : function(result) {
                //Callback function here
            },
            animateIn: 'rubberBand',
            animateOut : 'wobble'
        });
    });



    // BOOTBOX - FLIP IN/OUT ANIMATION
    // =================================================================
    // Require Bootbox
    // http://bootboxjs.com/
    //
    // Animate.css
    // http://daneden.github.io/animate.css/
    // =================================================================
    $('#demo-bootbox-flip').on('click', function(){
        bootbox.confirm({
            message : "<p class='text-semibold text-main'>Flip</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>",
            buttons: {
                confirm: {
                    label: "Save"
                }
            },
            callback : function(result) {
                //Callback function here
            },
            animateIn: 'flipInX',
            animateOut : 'flipOutX'
        });
    });



    // BOOTBOX - LIGHTSPEED IN/OUT ANIMATION
    // =================================================================
    // Require Bootbox
    // http://bootboxjs.com/
    //
    // Animate.css
    // http://daneden.github.io/animate.css/
    // =================================================================
    $('#demo-bootbox-lightspeed').on('click', function(){
        bootbox.confirm({
            message : "<p class='text-semibold text-main'>Light Speed</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>",
            buttons: {
                confirm: {
                    label: "Save"
                }
            },
            callback : function(result) {
                //Callback function here
            },
            animateIn: 'lightSpeedIn',
            animateOut : 'lightSpeedOut'
        });
    });



    // BOOTBOX - SWING & HINGE IN/OUT ANIMATION
    // =================================================================
    // Require Bootbox
    // http://bootboxjs.com/
    //
    // Animate.css
    // http://daneden.github.io/animate.css/
    // =================================================================
    $('#demo-bootbox-swing').on('click', function(){
        bootbox.confirm({
            message : "<p class='text-semibold text-main'>Swing & Hinge</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>",
            buttons: {
                confirm: {
                    label: "Save"
                }
            },
            callback : function(result) {
                //Callback function here
            },
            animateIn: 'swing',
            animateOut : 'hinge'
        });
    });


 })
