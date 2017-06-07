$(document).ready(function () {
  app.loadInstagramFeed();
  app.createBookingWidget();
});


var app = {

  loadInstagramFeed: function () {
    $.ajax({
      url: 'https://api.instagram.com/v1/users/self/media/recent',
      type: 'get',
      dataType: 'jsonp',
      data: {
        access_token: '315310155.3a81a9f.092b90b913d34aafa72f8744cec91170',
        count: 9
      }
    }).done(function (media) {
      var html = '';

      $.each(media.data, function (index, photo) {
        html += '<img src="' + photo.images.thumbnail.url + '"></img>';
      });

      $('.instagram-feed').html(html);
    });
  },

  createBookingWidget: function () {

    if (document.location.pathname !== '/book-appointment') {
      return;
    }

    var $bookingWidget = $('#booking-widget');
    var $spinner = $bookingWidget.find('.loading-spinner');
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      $spinner.hide();
      var htmlMsg = '<p>Click the following button to book your appointment:</p>' +
      '<a href="https://www.vagaro.com/beautyrefuge/about#online-scheduling" target="_blank" ' +
      'rel="noopener" class="btn btn-primary btn-lg">Vagaro Beauty Refuge Website</a>';
      $bookingWidget.find('p').html(htmlMsg);
      return;
    }

    var iframe = document.createElement('iframe');
    var $iframe = $(iframe);

    iframe.src = '//www.vagaro.com/Users/BusinessWidget.aspx?' +
      'enc=MMLjhIwJMcwFQhXLL7ifVFe2WD4QgtXLj5n/xLaCmsKxBWWioXABxhc5C5oT/' +
      'RU1KJfXeDHpMc0fJ+Qas1NOhIkWb1tBFTASY5r/0+axnVkRmW1YUSgt27P/cEwpJVjg#';
    iframe.scrolling = 'no';
    iframe.frameborder = '0';
    iframe.width = '780px';
    iframe.height = '600px';
    iframe.style.display = 'none';
    $bookingWidget.append(iframe);

    $iframe.on('load', function () {
      $spinner.hide();
      $iframe.height(750).show();
    });

  }

};
