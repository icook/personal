(function() {
  $("#resume_link").click(function() {
    var h;
    $('#header').transition({
      "font-size": 36,
      height: 45,
      easing: 'easeInBack',
      duration: 200
    }).delay(150).transition({
      "padding-left": 80,
      easing: "ease",
      duration: 200
    }, function() {
      return $('#return').css({
        display: "inline-block"
      });
    });
    $('#name').transition({
      "height": 1,
      opacity: 0,
      delay: 200,
      width: 1
    });
    h = $(document).height() - $('#header').height() - 10;
    return $('#content').transition({
      height: h,
      opacity: 1,
      delay: 500
    }, function() {
      $('#content').addClass("main_show");
      return $('#content').css({
        height: "auto"
      });
    });
  });

  $("#other_link").click(function() {
    return $('#content').transition({
      opacity: 0,
      duration: 300
    }, function() {
      var h;
      h = $('#content').html();
      $('#content').html($('#backbuffer').html());
      return $('#backbuffer').html(h);
    }).transition({
      opacity: 1
    });
  });

  $("#return").click(function() {
    $('#content').transition({
      opacity: 0,
      height: 0,
      duration: 300
    }, function() {
      return $('#content').removeClass("main_show");
    });
    $('#header').transition({
      "font-size": "44pt",
      height: 51,
      easing: 'easeInBack',
      duration: 200
    }).delay(150).transition({
      "padding-left": 300,
      easing: "ease",
      duration: 200
    }, function() {
      return $('#return').css({
        display: "none"
      });
    });
    return $('#name').transition({
      "height": 70,
      opacity: 1,
      delay: 200,
      width: 350
    });
  });

}).call(this);
