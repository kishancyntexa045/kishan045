
function buttonClicked()
{  
    var url = document.getElementById('call').value;
    var inp = document.getElementById('input').value;
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'text',
        data:  {
            'email':inp,
        },
        success: function (data, xhr, status) {
            
            console.log('url '+url);
            console.log('xhr '+xhr);
            console.log('xhr '+data);
            console.log('sts '+JSON. stringify(status));
            console.log('status code '+status.status);
            console.log('ajax called');

             if(status.status==201 || status.status==200)
             {
                $(".message")[0].innerHTML="Unsubscribed Successfully!!!";
                $(".message")[0].style.color="green";
                $(".message")[0].style.display="block";

                // document.getElementsByClassName("message")[0].innerHTML="Unsubscribed Successfully!!!";
                // document.getElementsByClassName("message")[0].style.color="green";
                // document.getElementsByClassName("message")[0].style.display="block";
             }
             else{

                $(".message:first")[0].innerHTML="Email not found!!!";
                $(".message:first")[0].style.color="red";
                $(".message:first")[0].style.display="block";

                // document.getElementsByClassName("message")[0].innerHTML="Email not found!!!";
                // document.getElementsByClassName("message")[0].style.color="red";
                // document.getElementsByClassName("message")[0].style.display="block";
             }
        },
        error: function (xhr, textStatus, error) {
            console.log('2 '+xhr.statusText);
            console.log('3 '+textStatus);
            console.log('4 '+error);
            console.log('1 '+textStatus.data);
        }
    });
}