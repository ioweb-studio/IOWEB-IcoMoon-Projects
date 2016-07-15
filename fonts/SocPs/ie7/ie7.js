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
		el.innerHTML = '<span style="font-family: \'SocPs\'">' + entity + '</span>' + html;
	}
	var icons = {
		'sc-ico01': '&#xe900;',
		'sc-ico02': '&#xe901;',
		'sc-ico03': '&#xe902;',
		'sc-ico04': '&#xe903;',
		'sc-ico05': '&#xe904;',
		'sc-ico06': '&#xe90a;',
		'sc-ico07': '&#xe90b;',
		'sc-ico08': '&#xe90c;',
		'sc-ico09': '&#xe914;',
		'sc-ico10': '&#xe915;',
		'sc-ico11': '&#xe916;',
		'sc-ico12': '&#xe917;',
		'sc-ico13': '&#xe918;',
		'sc-ico14': '&#xe90d;',
		'sc-ico15': '&#xe90e;',
		'sc-ico16': '&#xe90f;',
		'sc-ico17': '&#xe910;',
		'sc-ico18': '&#xe911;',
		'sc-ico19': '&#xe912;',
		'sc-ico20': '&#xe913;',
		'sc-ico21': '&#xe921;',
		'sc-ico22': '&#xe922;',
		'sc-ico23': '&#xe923;',
		'sc-ico24': '&#xe924;',
		'sc-ico25': '&#xe92d;',
		'sc-ico26': '&#xe919;',
		'sc-ico27': '&#xe91a;',
		'sc-ico28': '&#xe91b;',
		'sc-ico29': '&#xe91c;',
		'sc-ico30': '&#xe91d;',
		'sc-ico31': '&#xe91f;',
		'sc-ico32': '&#xe91e;',
		'sc-ico33': '&#xe920;',
		'sc-ico34': '&#xe92e;',
		'sc-ico35': '&#xe92f;',
		'sc-ico36': '&#xe930;',
		'sc-ico37': '&#xe931;',
		'sc-ico38': '&#xe925;',
		'sc-ico39': '&#xe926;',
		'sc-ico40': '&#xe927;',
		'sc-ico41': '&#xe928;',
		'sc-ico42': '&#xe929;',
		'sc-ico43': '&#xe92a;',
		'sc-ico44': '&#xe92b;',
		'sc-ico45': '&#xe92c;',
		'sc-ico46': '&#xe933;',
		'sc-ico47': '&#xe934;',
		'sc-ico48': '&#xe935;',
		'sc-ico49': '&#xe936;',
		'sc-ico50': '&#xe937;',
		'sc-ico51': '&#xe932;',
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
		c = c.match(/sc-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
