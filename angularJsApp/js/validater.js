  $(document).ready(function() {
    $('form').each(function () {
	 $(this).bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                    notEmpty: {
                        message: 'Please provide first name'
                    },
					stringLength: {
                        min: 2,
						max:10,
						message: 'First name should be min 2 charecters and max 10 charecters'
                    },
					regexp: {
                        regexp: '^[a-zA-Z]*$',
                        message:'The value is not a valid first name'
                    }
                }
            },
            last_name: {
                validators: {
					notEmpty: {
                        message: 'Please provide last name'
                    },
                    stringLength: {
                        min: 2,
						max:20,
						message: 'Last name should be min 2 charecters and max 20 charecters'
                    },
					regexp: {
                        regexp: '^[a-zA-Z]*$',
                        message:'The value is not a valid last name'
                    }
                    
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please provide Email Address'
                    },
                    regexp: {
                        regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
                        message: 'The value is not a valid email address'
                    }
                }
            },
            phone: {
                validators: {
				    notEmpty: {
                        message: 'Please provide phone number'
                    },
					stringLength: {
                        max: 10,
						min: 10,
                        message: 'Please provide a vaild phone number'
                    },
                    regexp: {
                        regexp: '^[0-9]{10,10}$',
                        message: 'The value should be numeric'
                    }
				}
            },
			user_status: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your User Status'
                    },
                    stringLength: {
                        max: 8,
						message: 'The value should be a Active/Inactive'
                    }
                }
            },           
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        })
		//
	 })	
});