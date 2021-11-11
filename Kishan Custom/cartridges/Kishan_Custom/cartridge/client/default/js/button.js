/* eslint-disable semi */
  $('#one').on('click', function () {
 	  // $('body').toggleClass('example');
    $.ajax({
      url: '/on/demandware.store/Sites-Ram_Site-Site/default/Promo-Show',
      method: 'GET',
      success: function (data) {
        console.log('Hello1111', JSON.stringify(data));
        alert('congrats');
        $('body').html(data);
        // URLUtils.url('Promo-Show').toString()
      },
      error: function () {
        alert('sorry');
      }
    });
  });
