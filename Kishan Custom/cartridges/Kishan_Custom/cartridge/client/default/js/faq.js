var faqList = [];

 $("#showCategoryDiv").on('click', function (event) { 
 
    
    document.getElementById("categoryHeader").style.display = "none";
    document.getElementById("header").style.display = "block";
    document.getElementById("categoryText").innerHTML = '';
    document.getElementsByClassName("related")[0].style.display = "none";
    document.getElementsByClassName("categories")[0].style.display = "block";
    document.getElementById('categoryName').value = '';
    document.getElementsByClassName("element")[0].innerHTML = ''; 
    $('.category').prop("disabled", false);
    
    
   });

 
   $("#submit").on('click', function (event) { 
   
    document.getElementById("header").style.display = "none";
    document.getElementsByClassName("element")[0].innerHTML = ''; 
    var url = document.getElementById('searchMethod').value;
    var categoryName =  document.getElementById('categoryName').value;
    document.getElementsByClassName("categories")[0].style.display = "none";
     if(categoryName.length>2)
      {
        callAjax(url, categoryName);

      }

   else {

         document.getElementsByClassName("categories")[0].style.display = "block";
         document.getElementById("header").style.display = "block";
    
      }

  

   });


   $('#searchForm').on('submit', function(e) {
   { 
      e.preventDefault();
      return false;
   }
  });

  $('.categoryList').on('click', function(e) {
      var categoryName=this.id;
      document.getElementsByClassName("categories")[0].style.display = "none";
      document.getElementsByClassName("related")[0].style.display = "block";
      document.getElementsByClassName("element")[0].innerHTML = ''; 
      document.getElementById("header").style.display = "none";
      document.getElementById("categoryHeader").style.display = "block";
      document.getElementById("categoryText").innerHTML = categoryName;
      var url = document.getElementById('clickedMethod').value;
      callAjax(url, categoryName);
      $("#"+categoryName).prop('disabled', true);
  });
  
  function callAjax(url, categoryName)
  {
    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'html',
      data:  {
          categoryName: categoryName,
      },
      success: function (data, xhr, status) {
         var FaqObjectList = JSON.parse(data);
         faqList = FaqObjectList.faqdata;
          $.each(FaqObjectList.faqdata, function(index, value) {
              $("#faqElement").append('<div class="accordion-itemm" id="faqElement"><button id="accordion-button-1" aria-expanded="false"><span class="accordion-title">' + value.question + '</span><span class="icon" aria-hidden="true"></span></button><div class="accordion-content"><p>' + value.answer + '</p></div></div>');
     
          
              });
     
              var items = document.querySelectorAll(".accordion button");

              function toggleAccordion() {
               var itemToggle = this.getAttribute('aria-expanded');
      
              for (i = 0; i < items.length; i++) {
               items[i].setAttribute('aria-expanded', 'false');
              }
      
             if (itemToggle == 'false') {
              this.setAttribute('aria-expanded', 'true');
                 }
               }
      
          items.forEach(item => item.addEventListener('click', toggleAccordion));
          document.getElementsByClassName("categories")[0].style.display = "none";
          document.getElementsByClassName("related")[0].style.display = "block";
        
      },
      error: function (xhr, textStatus, error) {
           console.log('4 '+error);
      }
  });
  }
  

 













