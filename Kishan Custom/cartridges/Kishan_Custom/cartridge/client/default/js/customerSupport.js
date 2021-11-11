var form = document.getElementById('frmCustomerSupport'); 

if(form){
    form.addEventListener('submit', function(e){
        if(e) e.preventDefault(); 
        var formData = new FormData(form); 
        var fornSubmit  = form.querySelector('input[type="submit"]'); // Handle on Submit
        var formErrors  = form.querySelectorAll('.is-invalid'); // Handle on el with errors. 
        var formMsg = form.querySelector('#frmFeedback'); 
        
        fornSubmit.value = 'Sending...';
        formErrors.forEach(function(el,i,a){ // Reset errors. 
            if(el.classList.contains('is-invalid'))
                el.classList.remove('is-invalid'); 
        }); 
        formMsg.className = '';
        formMsg.textContent = '';

        $.ajax({
            type: form.method.toUpperCase(),
            url: form.action,
            data: formData,
            contentType: false,            
            processData: false, // Prevent jQuery trying to convert FormData to string. 
            dataType : "json",
            success: function (data,status) {
                fornSubmit.value = 'Submit Email';
                var errCount = Object.keys(data.errors).length; 
                if(data.errors && errCount > 0){
                    formMsg.classList.add('d-block','alert','alert-danger'); 
                    formMsg.textContent = 'There were some issues with your form submission, please check and try again';
                    for (var prop in data.errors) {
                        var el = form.querySelector('[name="'+prop+'"]');
                        if(el) el.classList.add('is-invalid');
                    }
                } else {
                    if(!data.status){
                        formMsg.classList.add('d-block','alert','alert-danger'); 
                        formMsg.textContent = 'There were some issues with your form submission, please check and try again';                    
                    }else{
                        formMsg.classList.add('d-block','alert','alert-success'); 
                        formMsg.textContent = 'Thank you '+formData.get('fieldName')+' your message was sent successfully';                    
                    }
                }  
            },
            error: function () {
                fornSubmit.value = 'Submit Email';
                formMsg.classList.add('d-block','alert','alert-danger'); 
                formMsg.textContent = 'There were some issues with your form submission, please check and try again';
            }
        });        
    });

}else{
    console.log('Contact form not found'); 
}


