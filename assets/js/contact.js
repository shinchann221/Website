$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                },
                subject: {
                    required: true,
                },
                number: {
                    required: true,
                    minlength: 10
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Name is required",
                },
                subject: {
                    required: "Subject is required",
                },
                number: {
                    required: "Phone Number is required",
                    minlength: "your Number must consist of at least 10 characters"
                },
                email: {
                    required: "Email Address is mandatory"
                },
                message: {
                    required: "Message field cannot be left blank",
                }
            },

        })
    })
        
 })(jQuery)
})