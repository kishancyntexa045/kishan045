$("#chkNo").click();
$(function () {
    $("input[name='optradio']").click(function () {
        if ($("#chkYes").is(":checked")) {
            $("#upload").removeAttr("disabled");
            $("#upload").focus();
        } else {
            $("#upload").attr("disabled", "disabled");
        }
    });
});


// function validate_input()
$(function () {
    $("#btnsub").click(function ()
{  
    
    $(".e_fname")[0].style.visibility = "hidden"; 
    $(".e_lname")[0].style.visibility  = "hidden"; 
    $(".e_addr")[0].style.visibility   = "hidden"; 
    $(".e_city")[0].style.visibility   = "hidden"; 
    $(".e_zip")[0].style.visibility    = "hidden"; 
    $(".e_email")[0].style.visibility  = "hidden"; 
    $(".e_phone")[0].style.visibility  = "hidden"; 
    $(".e_subject")[0].style.visibility    = "hidden"; 
    $(".e_product_color")[0].style.visibility  = "hidden"; 
    $(".e_model_number")[0].style.visibility   =  "hidden"; 
    $(".upload_error")[0].style.visibility   =  "hidden"; 

        var fname   =       $('#fname')[0].value;
        var lname   =       $('#lname')[0].value;
        var address =       $('#addr')[0].value;
        var city    =       $('#city')[0].value;
        var zip     =       $('#zip')[0].value;
        var email   =       $('#email')[0].value;
        var phone   =       $('#phone')[0].value;
        var subject =       $('#subject')[0].value;
        var product_color = $('#product_color')[0].value;
        var model_number =  $('#model_number')[0].value;

        var flag = 0;

        //required

        if(fname== null || fname == ''){
            $(".e_fname")[0].innerHTML="This field can't be empty!";
            $(".e_fname")[0].style.visibility  = "visible"; 
            flag=1;
        }
        if(lname== null || lname == ''){
            $(".e_lname")[0].innerHTML="This field can't be empty!";
            $(".e_lname")[0].style.visibility  = "visible"; 
            flag=1;
        }
        if(address  == null || address == ''){
            $(".e_addr")[0].innerHTML="This field can't be empty!";
            $(".e_addr")[0].style.visibility  = "visible"; 
            flag=1;
        }
        if(city == null || city == ''){
            $(".e_city")[0].innerHTML="This field can't be empty!";
            $(".e_city")[0].style.visibility  = "visible"; 
            flag=1;
        }
        if(zip  == null || zip == ''){
            $(".e_zip")[0].innerHTML="This field can't be empty!";
            $(".e_zip")[0].style.visibility  = "visible"; 
            flag=1;
            var zipnull=1;
        }
        if(email== null || email == ''){
            $(".e_email")[0].innerHTML="This field can't be empty!";
            $(".e_email")[0].style.visibility  = "visible"; 
            flag=1;
            var emailnull=1;
        }
        if(phone== null || phone == ''){
            $(".e_phone")[0].innerHTML="This field can't be empty!";
            $(".e_phone")[0].style.visibility  = "visible"; 
            flag=1;
            var phonenull=1;
        }
        if(subject== null || subject == ''){
            $(".e_subject")[0].innerHTML="This field can't be empty!";
            $(".e_subject")[0].style.visibility  = "visible"; 
            flag=1;
        }
        if(product_color == null || product_color  == ''){
            $(".e_product_color")[0].innerHTML="This field can't be empty!";
            $(".e_product_color")[0].style.visibility  = "visible"; 
            flag=1;
        }
        if(model_number == null || model_number  == ''){
            $(".e_model_number")[0].innerHTML="This field can't be empty!";
            $(".e_model_number")[0].style.visibility  = "visible"; 
            flag=1;
        }
        if ($("#chkYes").is(":checked")) {
            var upload_file = $('#upload')[0].files[0];
                if (upload_file == null){
                    $(".upload_error")[0].innerHTML="Please choose a file!";
                    $(".upload_error")[0].style.visibility  = "visible"; 
                    flag=1;
                }
        }
        if(! ($("#chkYes").is(":checked")  ||  $("#chkNo").is(":checked"))  ) 
        {
                    $(".upload_error")[0].innerHTML="Please choose Yes/No!";
                    $(".upload_error")[0].style.visibility  = "visible"; 
                    flag=1;
        }

        // var zipRegex = /^\d{6}$/;  // 6 digit only 

        var zipRegex = /^[0-9]*$/;  // Change this regex based on requirement
         if (! zip.match(zipRegex) && zipnull!=1) {
            $(".e_zip")[0].innerHTML="Please enter a valid zip code!";
            $(".e_zip")[0].style.visibility  = "visible"; 
            flag=1; 
        }

        var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   // Change this regex based on requirement
         if (! email.match(regexEmail) && emailnull!=1) {
            $(".e_email")[0].innerHTML="Please enter a valid Email Address!";
            $(".e_email")[0].style.visibility  = "visible"; 
            flag=1; 
        }

        // var phoneRegex = /^(\+91-|\+91|0)?\d{10}$/; // Change this regex based on requirement
        var phoneRegex = /^(\+91-|\+91|0)?[1-9]\d{9}$/;
        if (! phone.match(phoneRegex) && phonenull!=1) {
            $(".e_phone")[0].innerHTML="Please enter a valid Phone number!";
            $(".e_phone")[0].style.visibility  = "visible"; 
            flag=1; 
        }
        
        if (flag==0){
            buttonClicked();
        }

//}
});
});

function buttonClicked()
{  
        var fname   =       $('#fname')[0].value;
        var lname   =       $('#lname')[0].value;
        var address =       $('#addr')[0].value;
        var city    =       $('#city')[0].value;
        var zip     =       $('#zip')[0].value;
        var email   =       $('#email')[0].value;
        var phone   =       $('#phone')[0].value;
        var subject =       $('#subject')[0].value;
        var product_color = $('#product_color')[0].value;
        var model_number =  $('#model_number')[0].value;

        if ($("#chkYes").is(":checked")) {
                var upload_file = $('#upload')[0].files[0];
                if (upload_file == null){
                    alert('Please choose a file');
                }
        }

        var formData = new FormData();

        formData.append('fname',fname);
        formData.append('lname',lname);
        formData.append('address',address);
        formData.append('city',city );
        formData.append('zip',zip );
        formData.append('email',email);
        formData.append('phone',phone);
        formData.append('subject',subject);
        formData.append('product_color',product_color);
        formData.append('model_number',model_number);
        formData.append('upload_file',upload_file);
        
        var url =   $('#send_mail')[0].value;
        console.log(formData);

        console.log(upload_file);

        var  Form= {
                        'fname':fname,
                        'lname':lname,
                        'address':address,
                        'city':city ,
                        'zip':zip ,
                    
                        'email':email,
                        'phone':phone,
                        'subject':subject,
                        'product_color':product_color,
                        'model_number':model_number,
                        // 'upload_file':upload_file
                    };
                    console.log(Form);

    $.ajax({
        type: 'POST',
        method:'POST',
        url: url,
        data: formData,
        contentType: false,
        processData: false,
        cache: false,
        success: function (data, xhr, status) {
            
            console.log('url '+url);
            console.log('xhr '+xhr);
            console.log('xhr '+data);
            console.log('sts '+JSON. stringify(status));
            console.log('status code '+status.status);
            console.log('ajax called');

        },
        error: function (xhr, textStatus, error) {
            console.log('2 '+xhr.statusText);
            console.log('3 '+textStatus);
            console.log('4 '+error);
            console.log('1 '+textStatus.data);
        }
    });
}

