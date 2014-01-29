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

(function( window, document, undefined ) {

(function( factory ) {
	"use strict";

	// Define as an AMD module if possible
	if ( typeof define === 'function' && define.amd )
	{
		define( ['jquery'], factory );
	}
	/* Define using browser globals otherwise
	 * Prevent multiple instantiations if the script is loaded twice
	 */
	else if ( jQuery && !jQuery.fn.theDirt )
	{
		factory( jQuery );
	}
}
(function( $ ) {
	"use strict";
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
	var TheDirt = function( options ){
		console.log("Print a bunch of shit")
		console.log("Print a bunch of shit")
		console.log("Print a bunch of shit")
		console.log("Print a bunch of shit")
		console.log("Print a bunch of shit")
		console.log("Print a bunch of shit")
		console.log("Print a bunch of shit")
		console.log("Print a bunch of shit")
		debugger
	};

	TheDirt.runner = function( options ){
		console.log("Start the runner")
		console.log("Start the runner")
		console.log("Start the runner")
		console.log("Start the runner")
		console.log("Start the runner")
		debugger
	};
	TheDirt.version = "0.0.1";
	// jQuery aliases
	$.fn.TheDirt = TheDirt;
	$.fn.theDirt = TheDirt;
	$.fn.theDirtSettings = TheDirt.settings;

}(window, document));
