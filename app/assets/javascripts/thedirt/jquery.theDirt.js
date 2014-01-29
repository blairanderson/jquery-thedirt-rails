/**
 * @summary     theDirt
 * @description handle dirty rails forms
 * @version     0.0.1
 * @file        jquery.theDirt.js
 * @author      Blair Anderson (www.blairanderson.co)
 * @contact     www.blairandersom.co
 *
 * @copyright Copyright 2014 Blair Anderson
 *
 */

	/**
	 *  @example
	 *    // Basic initialisation
	 *    $(document).ready( function {
	 *      $('#example').theDirt();
	 *    } );
	 *
	 *  @example
	 *    // Initialisation with configuration options - in this case, Green
	 *    $(document).ready( function {
	 *      $('#example').theDirt( {"color": 'green'} );
	 *    } );
	 */
$(function(){
	var TheDirt = function( options ){
		$el = $(this);

		$el.attr('data-remote', true)
		debugger

		// form error
	  $el.ajaxError(function(e, request, settings) {
	    var $form = $(e.currentTarget),
	        $textarea = $form.find('textarea');
	    $form.addClass('active.error');
	    $form.find("input[type='submit']").val('Not Saved... Try Again...');
	    $textarea.attr('data-start', $textarea.val() );
	  });

	  // form success
	  $el.bind('ajax:success', function(e, data, status, xhr){
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
	
	TheDirt.version = "0.0.1";
	// jQuery aliases
	$.fn.TheDirt = TheDirt;
	$.fn.theDirt = TheDirt;
	$.fn.theDirtSettings = TheDirt.settings;
})
