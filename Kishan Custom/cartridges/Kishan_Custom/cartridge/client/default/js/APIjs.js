var movieTest = '';

    $("#btn1").on('click',function() {


      var movieTitle=document.getElementById("fname").value;  
      alert(movieTitle);

      var dat = {"movieT": movieTitle};
  
      $.ajax({
          url: '/on/demandware.store/Sites-Ram_Site-Site/default/moviename1-Start',
          method: 'GET',
          data: dat,
          success: function (data) {
            console.log(data);
              console.log(data.data);
               var dataArr = [];
               dataArr = data.data;
               var obj = JSON.parse(data.data);
               var re=[];

               for(var i in obj)
                re.push(obj[i]);

  
               createTable(re[0],re[1]);
          },
          error: function (data) {
              // no reporting urls hit on the server
              alert('hi: ' + JSON.stringify(data));
          }
      });  
        
      $('#btn2').on('click', function () {
                console.log("hello"); 
              var url = $('#call').value;
              $.ajax({
                method: 'GET',
                url: 'https://www.omdbapi.com/?i=' + movieTest + '&apikey=7820414f',
                success: function (data, xhr, status) {
                 // alert('Added' + JSON.stringify(data));
                  console.log('url ' + url);
                  console.log('xhr ' + xhr);
                  console.log(data);
                },
                error: function (data) {
                  alert('not Added' + JSON.stringify(data));
                }
              });
            });
  });

  function add(){
    console.log("hello");
 }
 
    function create1(my_obj)
    {
        console.log(my_obj);
        var my_json = JSON.stringify(my_obj);
        var parsed_obj = JSON.parse(my_json);
        var json_to_html_tag = document.getElementById("json_to_html"); 

         json_to_html_tag.innerHTML =  " <br><br>" + 
                                "Title: " + parsed_obj.Title + 
                                "<br>Rated: " + parsed_obj.Rated +
                                "<br>Released: " + parsed_obj.Released +
                                "<br>Year: " + parsed_obj.Year + 
                                "<br> Runtime:: " + parsed_obj.Runtime+
                                "<br>Actors: " + parsed_obj.Actors +
                                "<br>Genre: " + parsed_obj.Genre+
                                "<br><img class=\"imgZi\" src="+parsed_obj.Poster+"/>"
                                    ;

        //alert(my_json);
        //document.getElementById('tabel1').appendChild(json_to_html_tag);
 
    }

  function createTable(dat, totalMovies) {
    console.log(document.getElementById("t1"));
    // if(document.getElementById("tableOutput") != null) {
    //     $('#tableOutput').empty();
    // }
    document.getElementById("t1").innerHTML = "";
    console.log(dat);    
    console.log("totalMovies : " + totalMovies);
    
    var table = document.getElementById('t1');
    var tr = document.createElement('tr');

        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');

        
        var text1 = document.createTextNode("Movie Name");
        var text2 = document.createTextNode("Year");
        var text3 = document.createTextNode("IMDB Value");
        var text4 = document.createTextNode("Type");

        
        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);
        td4.appendChild(text4);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
       // tr.appendChild(td5);

        table.appendChild(tr);

    for (var i = 0; i < totalMovies; i++){
        var tr = document.createElement('tr');   

        var td1 = document.createElement('a');
        td1.id=dat[i].imdbID;
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');  
        //var td6 = document.createElement('td');      

        var link=document.createTextNode(dat[i].Title);
        
        //var text1 = document.createTextNode(dat[i].Title);
        var text2 = document.createTextNode(dat[i].Year);
        var text3 = document.createTextNode(dat[i].imdbID);
        var text4 = document.createTextNode(dat[i].Type);
       // var text4 = document.createTextNode(dat[i].);
        var imag = document.createElement('img');
        if(dat[i].Poster === 'N/A') {
            imag.src = "https://image.shutterstock.com/image-vector/no-image-available-vector-illustration-600w-744886198.jpg";
            imag.className = "imgZ";
        } else {
            imag.src = dat[i].Poster;
            imag.className = "imgZ";       
        }
        

        //var re=text1.link("https://www.w3schools.com");

        //.href="https://www.geeksforgeeks.org"; 
        td1.appendChild(link);
        td2.appendChild(text2);
        td3.appendChild(text3);
        td4.appendChild(text4);
        td5.appendChild(imag);
        //var idd = dat[i].imdbID;
        td1.onclick =  function (event) {
            //idd = 
            movieTest = event.target.id;
            //alert('imdb id: ' + movieTest);
             document.querySelector('#btn2').click();
        }        
        //td1.href="javascript:add()";    
        
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        table.appendChild(tr);
    }
  document.getElementById('tabelid').appendChild(table);
  
      
  }
 