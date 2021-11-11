function redirectToCategoryPage(categoryName)
{
    var redirectUrl = 'https://dev05-na-conair.demandware.net/on/demandware.store/Sites-us-conair-Site/default/NewsroomCategory-Show?category='+categoryName;
    location.href = redirectUrl;
}



$("#searchTerm").on('keyup', function (event) { 

 
    document.getElementsByClassName("allArticleContainer")[0].style.display = 'none';
    var searchTerm = document.getElementById('searchTerm').value;
    var url =  document.getElementById('searchMethod').value;
    var currentLocation = window.location;
    var str = currentLocation.search;
    str = str.split('=');
    var categoryTitle = str[length];
    //  var category = document.getElementById('').
   console.log(url);

   if(searchTerm.length>2)
   {
    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'html',
      data:  {
        searchTerm: searchTerm,
        categoryTitle:categoryTitle
      },
      success: function (data, xhr, status) {

        var ArticleList = JSON.parse(data);   
        $("#Articles").empty();
        $.each(ArticleList.Articles, function(index, value) {
           
            $("#Articles").append('<div class="flex articleContainer"><div class="outerDivImg "><img class="articleImg" src="'+value.Img+'" alt="category.png" width="100%" height="100%"/></div><div class="inline articleContent"><a href="https://dev05-na-conair.demandware.net/on/demandware.store/Sites-us-conair-Site/default/ContentRender-'+value.contentAsset+'"><h1 class="articleHeading">'+value.Heading+'</h1><p class="articlePara">'+value.Description+'</p></a></div></div>');
   
        
            });
        document.getElementsByClassName("searchArticleContainer")[0].style.display = 'block';
        
      },
      error: function (xhr, textStatus, error) {
           console.log('error')
      }
  });
 

   }

   else{
    document.getElementsByClassName("allArticleContainer")[0].style.display = 'block';
    document.getElementsByClassName("searchArticleContainer")[0].style.display = 'none';
   }

});












$('#searchForm').on('submit', function(e) {
    { 
       e.preventDefault();
       return false;
    }
   });
 