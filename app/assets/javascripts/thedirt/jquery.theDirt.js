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
		debugger
	};

	TheDirt.settings = {
		"thing": "thing"
	}
	TheDirt.version = "0.0.1";
	// jQuery aliases
	$.fn.TheDirt = TheDirt;
	$.fn.theDirt = TheDirt;
	$.fn.theDirtSettings = TheDirt.settings;
})
