(function(h){h.className = h.className.replace('no-js', 'js')})(document.documentElement)

var element = document.getElementsByTagName('html')[0];

if (bowser.mobile) {
		//var element = document.getElementsByTagName('html')[0];
		element.className += " mobile";
}else{
	if (bowser.msie) {
		var version = bowser.version;
		if (version<9){
			/* Be better to move this warning message out into its own function to call from old browsers */
			onload = function(){
			var _body = document.body;
			var _div = document.createElement('div');
			var _text = document.createTextNode('Please use a modern internet browser to view this website at its best');
			/* http://browsehappy.com/ */
			_div.className=('browserx warning message');
			_div.appendChild(_text);
			_body.insertBefore(_div, _body.firstChild);
			}
			//alert('Please use a modern internet browser to view this website correctly');
		}
	//console.log('IE '+version);
/*
		var ss = document.createElement("link");
		ss.type = "text/css";
		ss.rel = "stylesheet";
		ss.id = "ie-css";
		ss.href = "/wp-content/themes/8wire/ie.css?ver=1";
		document.getElementsByTagName('head')[0].appendChild(ss);
*/
/*
		if (version<=9){
			var jsx = document.createElement('script');
			jsx.src = 'js/html5shiv.min.js?ver=3.7.2';
			document.getElementsByTagName('head')[0].appendChild(jsx);
			var jsy = document.createElement('script');
			jsy.src = 'js/respond.min.js?ver=1.4.2';
			document.getElementsByTagName('head')[0].appendChild(jsy);
			var jsz = document.createElement('script');
			jsz.src = 'js/flexie.min.js?ver=1.0.3';
			document.head.appendChild(jsz);
		}
*/	
		
		var bowserClass = {
			maxVersion: 11, // add classes up to IE 11,
			minVersion: 6 // add classes down to IE 6
		};
	
		//var element = document.getElementsByTagName('html')[0];
	
	//	// stub for dev testing...
	//	bowser.msie = true;
	//	bowser.version = '10.2';

		var classes = [];
		

		// add signature class for traceability
		//classes = "ie-classes-by-bowser-class-js";
		element.className += " ie";


		// safe transform string to to integer - e.g. "11.2" -> 11
		try {
			var intVersion = parseInt(parseFloat(version).toFixed(0));
		}
		catch (e) {
			// fail
			element.className += " " + classes;
		}
		element.className += " ie" + intVersion;

		// add "lt" classes
		var lt;
		for ( lt = intVersion + 1; lt <= bowserClass.maxVersion; ++lt ) {
			element.className += " ielt" + lt;

		}
		var gt;
		for ( gt = intVersion - 1; gt >= bowserClass.minVersion; --gt ) {
			element.className += " iegt" + gt;
		}
	}else{
		//var element = document.getElementsByTagName('html')[0];
		var brs;
		if (bowser.firefox){
		  brs='firefox';
		} else if (bowser.chrome){
		  brs='chrome';
		} else if (bowser.safari){
		  brs='safari';
		} else if(bowser.iphone){
		  brs='iphone';
		} else if(bowser.android){
		  brs='android';
		}
		var version = bowser.version;
		try {
			var intVersion = parseInt(parseFloat(version).toFixed(0));
		}
		catch (e) {
			// fail
			intVersion=version;
		}
		element.className += " "+brs+" v"+intVersion;
	}
}