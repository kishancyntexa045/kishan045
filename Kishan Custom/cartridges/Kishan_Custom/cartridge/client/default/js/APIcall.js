      // ////////////////////
/*
      $('#hello').on('click', function () {
        // gives value that we search in the search box
        var movieName = document.getElementById('input').value;
        console.log(movieName);

        var apikey = 'https://www.omdbapi.com/?s=' + movieName + '&apikey=f638a6ad';
       // http://www.omdbapi.com/?i=tt3896198&apikey=f638a6ad
        // created the json here to send it to the controller
        // var dat
        // let apikey1 = "http://www.omdbapi.com/?apikey=7820414f&s=dil"
        //datatype:'json';

        $.ajax({
          url:  ,
          method: 'GET',
          data: { movietitle: movieName },
              // pass the json here


          success: function (data) {
            alert('congrats');
            console.log('titile name ' + JSON.stringify(data));
            console.log('data that we got ' + JSON.stringify(data.data));
            var object = JSON.parse(data.data);
            // make the json array to store in the table
            
              console.log('this is json array');
              var arr = [];
                // loop for putting json object in to the array
              for (var i = 0; i < object; i++) {
                arr.push(object[i]);
              }
            createTable(arr[0],arr[1]);
           
          },
          error: function (data) {
            console.log('error');
               // alert(JSON.stringify(data));
            console.log(JSON.stringify(data));
          }
        });
        $('#hello1').on('click' , function(){
          var url = $('#call').value;
          method: 'GET',
          url: 'https://www.omdbapi.com/?s=' + movieName + '&apikey=66b6386',

          //run the success function
          success: function (data, xhr, status) {
            alert('Added' + JSON.stringify(data));
            console.log('url ' + url);
            console.log('xhr ' + xhr);
            console.log(data);
            create(data);
          },
          
          error: function (data) {
            alert('error not added' + JSON.stringify(data));
          }
        });

      });

      function createTable(data , totalMovies) {

        console.log(document.getElementById("t1"));
        
        var employee_data = ' ';
        $.each(data, function (key, value) {
          employee_data = '<tr>';
          employee_data = '<td>' + value.Name + '</td>';
          employee_data = '<td>' + value.Type + '</td>';
          employee_data = '<td>' + value.id + '</td>';
          employee_data = '<td>' + value.Poster + '</td>';
          employee_data = '</tr>';
        });
       // $('#emp-table').append(employee_data);
      }
*/