$(document)
  .ready(function () {

    //create aray of url
    var pathArray = window.location.href.split( '/' );
    console.log(pathArray[pathArray.length-3]);
    if ((pathArray[pathArray.length-2] =='events-testing'  && (pathArray[pathArray.length-1]).length > 1) || pathArray[pathArray.length-3] == 'events-testing'){
      window.location.href = "https://www.stanfordcourt.com/events-testing/";
    }

    //Offer Promo function
    function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    //Offer Promo Popup

    var nowTime = new Date()
      .getTime();

    var exposedofferPopup = localStorage.getItem('exposedofferPopup');
    if (!exposedofferPopup) {
      $('.message')
        .css('display', 'none');
      $('.promo-code-reminder')
        .css('display', 'none');
      $('.signup')
        .css('display', 'block');
    } else {
      $('.message')
        .css('display', 'none');
      $('.promo-code-reminder')
        .css('display', 'none');
      $('.unlock')
        .css('display', 'none');
    }
    /*$('#mclose').click(function(){
			   document.location.href = '/';
		   });*/
    if ($.cookie('signupTime')) {
      if ($.cookie('signupTime')) {
        $('.promo-code-reminder')
          .css('display', 'block');
      }
    }
    /*$('#mclose').click(function(){
			   document.location.href = '/';
		   });*/
    if (getParameterByName('submit')) {
      if (getParameterByName('submit') == 'success') {
        if (!$.cookie('signupTime')) {
          $.cookie('signupDone', '1', {
            expires: 5,
            url: '/'
          });
          $.cookie('signupTime', '1', {
            expires: 3,
            url: '/'
          });
        }
        localStorage.setItem('exposedofferPopup', true);
        $('.message')
          .css('display', 'block');
        $('.promo-code-reminder')
          .css('display', 'block');
        $('.signup')
          .css('display', 'none');
        $('#offer-promo-popup')
          .modal('show');
        $('.unlock')
          .css('display', 'none');
      }
    }

    $('.carousel')
      .carousel({
        interval: 4500
      });


    var bigimage = $("#big");
    var thumbs = $("#thumbs");
    var totalslides = 10;
    var syncedSecondary = true;
    if ($(window)
      .width() > 992) {
      $("#big, #big .item")
        .css('height', $(window)
          .height() + 'px');
    } else {
      $("#big, #big .item")
        .css('height', '480px');

    }
    $('#hamburger')
      .click(function () {
        $(this)
          .toggleClass('open');
      });


    bigimage.owlCarousel({
      items: 1,
      slideSpeed: 9000,
      autoplay: false,
      dots: false,
      loop: true,
      nav: true,
      video: true,
      responsiveRefreshRate: 200,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
    });


    bigimage.on('translate.owl.carousel', function (e) {
      $('.owl-item video')
        .each(function () {
          $(this)
            .get(0)
            .pause();
        });
    });

    bigimage.on('translated.owl.carousel', function (e) {
      $('.owl-item.active video')
        .get(0)
        .play();
    });

    function syncPosition(el) {
      //if loop is set to false, then you have to uncomment the next line
      //var current = el.item.index;

      //to disable loop, comment this block
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - (el.item.count / 2) - .5);

      if (current < 0) {
        current = count;
      }
      if (current > count)  {
        current = 0;
      }
      //to this
      thumbs
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = thumbs.find('.owl-item.active')
        .length - 1;
      var start = thumbs.find('.owl-item.active')
        .first()
        .index();
      var end = thumbs.find('.owl-item.active')
        .last()
        .index();

      if (current > end) {
        thumbs.data('owl.carousel')
          .to(current, 100, true);
      }
      if (current < start) {
        thumbs.data('owl.carousel')
          .to(current - onscreen, 100, true);
      }
    }

    function syncPosition2(el) {
      if (syncedSecondary) {
        var number = el.item.index;
        bigimage.data('owl.carousel')
          .to(number, 100, true);
      }
    }

    thumbs.on("click", ".owl-item", function (e) {
      e.preventDefault();
      var number = $(this)
        .index();
      bigimage.data('owl.carousel')
        .to(number, 300, true);
    });

    //offers info


    /// decrease size for minimal devices
    setTimeout(function () {

      //divide in 2 column
      var largerFont = 100;
      if ($('.rate-block .title2')
        .text()
        .length < 20) {
        largerFont = (($('.main-image img')
          .height()) / 4);
      } else {
        largerFont = (($('.main-image img')
          .height()) / 5);
      }

      $('.rate-block .title2')
        .css({
          'font-size': largerFont + 'px',
          'line-height': largerFont + 'px'
        });

      var largerFontSlider = 100;
      if ($('#roomsSlider')
        .find('.title2')
        .text()
        .length < 20) {
        largerFontSlider = (($('#roomsSlider')
          .find('img')
          .height()) / 4);
      } else {
        largerFontSlider = (($('#roomsSlider')
          .find('img')
          .height()) / 5.5);
      }
      $('#roomsSlider')
        .find('.title2')
        .css({
          'font-size': largerFontSlider + 'px',
          'line-height': largerFontSlider + 'px'
        });

      $('.loading')
        .css('display', 'none');
    }, 4500);

    $(" #home-carousel-2")
      .owlCarousel({



        items: 2,
        nav: true,
        navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
        smartSpeed: 200,
        slideSpeed: 500,
        margin: 20,
        responsiveRefreshRate: 100,
        responsive: {
          // breakpoint from 0 up
          0: {
            items: 1
          },
          // breakpoint from 480 up
          600: {
            items: 2
          },
          // breakpoint from 768 up
          900: {
            items: 2
          },
          1600: {
            items: 2
          }
        }


      });
    setTimeout(function () {
      $(".price-wrap, .recentBookingsInner")
        .css('display', 'block');
    }, 2000);

    $(".wedding-date")
      .datepicker();
    $(".menu-btn")
      .click(function () {
        $(".main-menu")
          .slideToggle(300);
      });
    $('#lightgallery')
      .lightGallery({
        selector: '.item',
        counter: false,
        fullScreen: false
      });
    $('.video-player-param')
      .lightGallery({
        youtubePlayerParams: {
          modestbranding: 1,
          showinfo: 0,
          rel: 0,
          controls: 0
        },
        vimeoPlayerParams: {
          byline: 0,
          portrait: 0,
          color: 'A90707'
        }
      });
    $(".home-banner-wrap .item")
      .hover(function () {
        $(this)
          .find(".transparent-bg")
          .toggle();
      });
    $(".filter")
      .on("click", function () {
        var $this = $(this);
        // if we click the active tab, do nothing
        if (!$this.hasClass("active")) {
          $(".filter")
            .removeClass("active");
          $this.addClass("active"); // set the active tab
          var $filter = $this.data("rel"); // get the data-rel value from selected tab and set as filter
          $filter == 'all' ? // if we select "view all", return to initial settings and show all
            $(".fancybox")
            .attr("data-fancybox-group", "gallery")
            .not(":visible")
            .fadeIn() : // otherwise
            $(".fancybox")
            .fadeOut(0)
            .filter(function () {
              return $(this)
                .data("filter") == $filter; // set data-filter value as the data-rel value of selected tab
            })
            .attr("data-fancybox-group", $filter)
            .fadeIn(1000); // set data-fancybox-group and show filtered elements
        } // if
      }); // on
    $(".accord-item")
      .click(function () {

        $(".accord-item")
          .not(this)
          .next(".accord-content")
          .slideUp();
        $(".accord-item")
          .not(this)
          .removeClass("-minus");

        $(this)
          .next(".accord-content")
          .slideToggle();
        $(this)
          .toggleClass("-minus");


      });

    // get instagram feed
    // var instaurl = 'https://api.instagram.com/v1/users/458067763/media/recent/?access_token=458067763.1677ed0.128c22ee3cd94d3f9db3be61fa42e26c&callback=?';
    // $.ajax({
    //   url: instaurl,
    //   dataType: "jsonp",
    //   success: function (response) {
    //     console.log('ok insta');
    //     setTimeout(function () {
    //       $.each(response.data, function (i, item) {
    //         if ($(window)
    //           .width() >= 767) {
    //           if (i > 5) return false;
    //         } else {
    //           if (i > 5) return false;
    //         }
    //
    //         $('<div class="col-sm-4 col-md-2 insta-image p-0"><a href="' + item.link + '" target="_blank"><figure style="background-image:url(' + item.images.standard_resolution.url + ');"> </figure> </a></div>')
    //           .appendTo('#instafeed');
    //       });
    //       var heightDIV = $('#instafeed div:first-child')
    //         .innerWidth();
    //       $('#instafeed div')
    //         .each(function () {
    //           $(this)
    //             .css('height', heightDIV + 'px');
    //         });
    //       $('#instafeed')
    //         .slideDown('slow');
    //     }, 1000);
    //   }
    // });

    // Instagram API script
    $(window)
      .on("load", function (e) {
        var ownerId = '6142505566';
        var instaurl = 'https://apinsta.herokuapp.com/u/stanfordcourtsf/';
        var instaFeedUrl = "https://www.instagram.com/p/";
        $.ajax({
          url: instaurl,
          dataType: "json",
          success: function (response) {

            console.log('ok insta', response);
            var showInstaFeeds = [],
              feedCount = 0;
            var allFeeds = response.graphql.user.edge_owner_to_timeline_media.edges;
            showInstaFeeds = $.grep(allFeeds, function (ele, i) {
              return ele.node.owner.id == ownerId;
            });
            //console.log('testtt', showInstaFeeds);
            if (showInstaFeeds.length < 6) {
              for (var j = 0; j < allFeeds.length; j++) {
                if (allFeeds[j].node.owner.id != ownerId) {
                  showInstaFeeds.push(allFeeds[j]);
                  feedCount++;
                  if (feedCount > 7)
                    break;
                }
              }
            }


            setTimeout(function () {
              $.each(showInstaFeeds, function (i, item) {
                if ($(window)
                  .width() >= 767) {
                  if (i > 5) return false;
                } else {
                  if (i > 3) return false;
                }

                $('<div class="col-sm-4 col-md-2 insta-image p-0"><a href="' + instaFeedUrl + item.node.shortcode + '" target="_blank"><figure style="background-image:url(' + item.node.thumbnail_src + ');"> </figure> </a></div>')
                  .appendTo('#instafeed');
              });
              var heightDIV = $('#instafeed div:first-child')
                .innerWidth();
              $('#instafeed div')
                .each(function () {
                  $(this)
                    .css('height', heightDIV + 'px');
                });
              $('#instafeed')
                .slideDown('slow');
            }, 500);
          }
        });
      });

    // get rt3 offers in gallery
    $('#lightgallery')
      .rezGallery({
        hotelID: 'SFOSTF',
        portalID: 'stanfordcourt',
        buttonClass: 'btn-common btn-od-form',
        pageLink: true,
        description: true,
        offerdetailPage: '/special/'
      });


    /*var configProfile = {
    	"domId": 'soicalfeed',
    	"maxTweets": 7,
    	"enableLinks": true,
    	"showUser": true,
    	"showTime": true,
    	"showImages": false,
    	"lang": 'en'
    };*/

    //google map
    function initMap() {
      var myLatLng = {
        lat: 37.791529,
        lng: -122.409594
      };

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,

        center: new google.maps.LatLng(37.791529, -122.409594),
        scrollwheel: false,
        styles: [
          {
            elementType: 'geometry',
            stylers: [{
              color: '#e4e1dc'
            }]
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [{
              color: '#fefefe'
            }]
          },
          {
            elementType: 'labels.text.fill',
            stylers: [{
              color: '#746855'
            }]
          },
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{
              color: '#d59563'
            }]
    	      },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{
              color: '#d59563'
            }]
    	      },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{
              color: '#a3a3a3'
            }]
    	      },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{
              color: '#6b9a76'
            }]
    	      },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{
              color: '#fefefe'
            }]
    	      },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{
              color: '#fefefe'
            }]
    	      },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{
              color: '#9ca5b3'
            }]
    	      },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{
              color: '#fefefe'
            }]
    	      },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{
              color: '#fefefe'
            }]
    	      },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{
              color: '#f3d19c'
            }]
    	      },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{
              color: '#2f3948'
            }]
    	      },
          {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{
              color: '#d59563'
            }]
    	      },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{
              color: '#9cb9bf'
            }]
    	      },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{
              color: '#515c6d'
            }]
    	      },
          {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{
              color: '#9cb9bf'
            }]
    	      }
    	    ]
      });
      var iconBase = '/images/';
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Stanford Court Hotel',
        icon: iconBase + 'loc.png'
      });

    }
    if ($("#map")
      .length > 0) {
      google.maps.event.addDomListener(window, 'load', initMap);
    }
  });

//Ends here

function init() {
  window.addEventListener('scroll', function (e) {
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 100,
      header = document.querySelector("nav");
    if (distanceY > shrinkOn) {

      classie.add(header, "smaller");
    } else {
      if (classie.has(header, "smaller")) {
        classie.remove(header, "smaller");
      }
    }
  });


  setTimeout(function () {
    var imageHolder = $('.first-holder')
      .height();
    $('.attrcation-cards :not(.first-holder)')
      .find('.img-holder')
      .css('max-height', imageHolder);

    var newHeight = 0;
    $('.attrcation-cards')
      .find('.details')
      .each(function () {
        var temp = $(this)
          .height();
        newHeight = temp > newHeight ? temp : newHeight;
      });
    $('.attrcation-cards')
      .find('.details')
      .each(function () {
        $(this)
          .height(newHeight);
      });
  }, 1000);

}
window.onload = init();


//
$(function () {
  var today = new Date();
  //   var firstdate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  //   var lastdate = today.getFullYear()+'-'+(today.getMonth()+7)+'-'+today.getDate();
  //
  //   var dayrates = [{}];
  //    $.ajax({
  //        url: 'https://rt3api-prd.ttaws.com/hotels/rate_calendar.json?hotel_id=MIAWPH&portal_id=wphsouthbeach&locale=en&currency=USD&ip_address=124.123.205.34&start_date='+firstdate+'&end_date='+lastdate+'&adults_0=1&children_0=0&rooms=1',
  //        type: 'GET',
  //        success: function(res) {
  //          $.each( res.rate_calendar_dates, function( index, value ){
  //             //dayrates[0]["'"+value.date+"'"] = value.best_available_rate;
  //             dayrates[0][value.date]=  value.best_available_rate;
  //          });
  //        }
  //
  //    });
  //    // Works with $.get too!

  var dateFormat = "yy-mm-dd";
  $("#datepicker")
    .datepicker({
      minDate: 0,
      dateFormat: dateFormat,
      showOn: 'focus'
    });

  $("#datePick")
    .datepicker({
      showOn: 'focus',
      onSelect: function(dateText, inst) {
           this.focus();
           this.fixFocusIE = true;
           $('#'+inst.id).attr('value',dateText);


      },
      onClose: function (dateText, inst) {
		            this.fixFocusIE = true;
		            this.focus();
		        },
      beforeShow: function (input, inst) { 
         var d = new Date();
        var todaydate =  ('0'+d.getDate()).slice(-2)+ '/' + ('0'+(d.getMonth()+1)).slice(-2) + '/' +d.getFullYear() ;
               $('#'+inst.id).attr('value',todaydate);
		        }
    });





});


//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
  $('.rooms-nav li a, .link')
    .bind('click', function (event) {
      var $anchor = $(this);
      $('html, body')
        .stop()
        .animate({
          scrollTop: $($anchor.attr('href'))
            .offset()
            .top - 100
        }, 1500, 'easeInOutExpo');
      //event.preventDefault();
    });

  $("#roomBooking")
    .submit(function () {
      $("#arrival_date")
        .val($("#checkin")
          .val());
      $("#departure_date")
        .val($("#checkout")
          .val());

    });
  setTimeout(function () {
    var hash = window.location.hash;
    if (hash != "") {
      if ($(hash)
        .offset()) {
        $(document)
          .scrollTop($(hash)
            .offset()
            .top);
      }

    }
  }, 2000);
});


//FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
autoPlayYouTubeModal();

function autoPlayYouTubeModal() {
  var trigger = $("body")
    .find('[data-toggle="modal"]');
  trigger.click(function () {
    var theModal = $(this)
      .data("target"),
      videoSRC = $(this)
      .attr("data-theVideo"),
      videoSRCauto = videoSRC + "?autoplay=1";
    $(theModal + ' iframe')
      .attr('src', videoSRCauto);
    $(theModal + ' button.close')
      .click(function () {
        $(theModal + ' iframe')
          .attr('src', videoSRC);
      });
  });
}

//Date Picker

$("#od_arrival")
  .datepicker({
    dateFormat: "yy-mm-dd",
    altField: '#arrival_date',
    altFormat: 'yy-mm-dd',
    minDate: 0,
    onSelect: function (date) {
      var date2 = $('#od_arrival')
        .datepicker('getDate');
      date2.setDate(date2.getDate() + 1);
      $('#od_departure')
        .datepicker('setDate', date2);
      //sets minDate to dt1 date + 1
      $('#od_departure')
        .datepicker('option', 'minDate', date2);
    }
  });
$('#od_departure')
  .datepicker({
    dateFormat: "yy-mm-dd",
    altField: '#departure_dates',
    altFormat: 'yy-mm-dd',
    onClose: function () {
      var dt1 = $('#v')
        .datepicker('getDate');
      console.log(dt1);
      var dt2 = $('#od_departure')
        .datepicker('getDate');
      if (dt2 <= dt1) {
        var minDate = $('#od_departure')
          .datepicker('option', 'minDate');
        $('#od_departure')
          .datepicker('setDate', minDate);
      }
    }
  });
$("#ui-datepicker-div")
  .addClass("od-cal");


$("#arrival_date, .main-date, .main-date-1")
  .datepicker({
    dateFormat: "yy-mm-dd",
    altField: '#arrival_date',
    altFormat: 'yy-mm-dd',
    minDate: 0,
    onSelect: function (date) {
      var date2 = $('#arrival_date')
        .datepicker('getDate');
      date2.setDate(date2.getDate() + 1);
      $('#departure_date')
        .datepicker('setDate', date2);
      //sets minDate to dt1 date + 1
      $('#departure_date')
        .datepicker('option', 'minDate', date2);
    }
  });
$('#departure_date, #departure_date_1, .alternate-date, .alternate-date-1')
  .datepicker({
    dateFormat: "yy-mm-dd",
    altField: '#departure_dates',
    altFormat: 'yy-mm-dd',
    onClose: function () {
      var dt1 = $('#v')
        .datepicker('getDate');
      console.log(dt1);
      var dt2 = $('#departure_date')
        .datepicker('getDate');
      if (dt2 <= dt1) {
        var minDate = $('#departure_date')
          .datepicker('option', 'minDate');
        $('#departure_date')
          .datepicker('setDate', minDate);
      }
    }
  });

$(window)
  .load(function () {
    if ($(window)
      .width() > 768) {

      jQuery('ul.mr-auto li.dropdown a')
        .attr('data-toggle', 'disable');
      //Add Hover effect to menus
      jQuery('ul.mr-auto li.nav-item')
        .hover(function () {
          jQuery(this)
            .find('.dropdown-menu')
            .stop(true, true)
            .delay(100)
            .fadeIn();
        }, function () {
          jQuery(this)
            .find('.dropdown-menu')
            .stop(true, true)
            .delay(100)
            .fadeOut();
        });

    } else {
      //jQuery('ul.nav li.dropdown a.dropdown-toggle').removeAttr('data-toggle');
    }
    jQuery('.nav-item a')
      .click(function () {
        window.location.href = $(this)
          .attr("href");
      });

  });
