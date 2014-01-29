var formHelperFun;

formHelperFun = function() {

  // random form helpers
  $('textarea').autosize();
  $(".tab-pane").fitVids();

  // form success
  $('form').ajaxError(function(e, request, settings) {
    var $form = $(e.currentTarget),
        $textarea = $form.find('textarea');
    $form.addClass('active.error');
    $form.find("input[type='submit']").val('Not Saved... Try Again...');
    $textarea.attr('data-start', $textarea.val() );
  });

  // form success
  $('form').bind('ajax:success', function(e, data, status, xhr){
    var $form = $(e.currentTarget),
        $textarea = $form.find('textarea');
    $form.removeClass('active');
    $form.removeClass('error');
    $form.find("input[type='submit']").val('Saved');
    $textarea.attr('data-start', $textarea.val() );
  });

// store a copy of the current content
  var $textfields = $('textarea');
  for (var i = $textfields.length - 1; i >= 0; i--) {
    var $textarea = $( $textfields[i] );
    $textarea.attr('data-start', $textarea.val() );
  };

// when anything changes on an input, change the button to 'saving...' or 'saved' whenever it should
  $textfields.bind('input propertychange', function(e) {
    var $textarea = $( e.currentTarget );
    var $form = $textarea.closest('form');
    if( $textarea.val() != $textarea.data("start") ){
      $form.addClass('active');
      $form.find("input[type='submit']").val('Saving...');
    } else {
      $form.removeClass('active');
      $form.find("input[type='submit']").val('Saved');
    }
  });


  // create a funtion to set a countdown timer to save the changes
  var throttle = function throttle(f, delay){
    var timer = null;
    return function(){
      var context = this, args = arguments;
      clearTimeout(timer);
      timer = window.setTimeout(function(){
        f.apply(context, args);
      }, delay || 3000);
    };
  }

  // when a user starts typing, call the timer to save 
  $('textarea').keyup(throttle(function(e){
    var $textarea = $(e.currentTarget);
    if( $textarea.val() != $textarea.data("start") ){
      $textarea.closest('form').submit();
    }
  }));

  //  when a suer leave a text box, save the data
  $('textarea').blur(function(e) {
    var $textarea = $(e.currentTarget);
    if( $textarea.val() != $textarea.data("start") ){
      $textarea.closest('form').submit();
    }
  });

};

// run these functions on $(document).ready  and turbolinks 'page:load'
$(document).ready(formHelperFun);
$(document).on('page:load', formHelperFun);