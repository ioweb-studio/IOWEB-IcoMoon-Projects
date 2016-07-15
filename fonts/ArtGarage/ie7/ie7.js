/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'ArtGarage\'">' + entity + '</span>' + html;
	}
	var icons = {
		'art-map': '&#xe900;',
		'art-work': '&#xe901;',
		'art-mobphone': '&#xe902;',
		'art-email': '&#xe903;',
		'art-sfb': '&#xe904;',
		'art-stw': '&#xe905;',
		'art-svk': '&#xe906;',
		'art-syt': '&#xe907;',
		'art-plus': '&#xe908;',
		'art-home': '&#xe909;',
		'art-folder': '&#xe90a;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/art-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
