
function ReturnDivByClass(class_parent){
	var DIVcoll = document.getElementsByTagName("DIV"), hiddenDivs = new Array();
	for (LC = 0; LC < DIVcoll.length; LC ++) {
		if (DIVcoll[LC].className==class_parent){
			return DIVcoll[LC];
		}
	}
}


var tempBL;
function PrevuImpression(){
    var disp_setting="toolbar=no,location=no,directories=no,menubar=no,status=no,";
    disp_setting+="scrollbars=yes,width=700, height=600, left=25, top=25";
    var docprint=window.open("","PrintWindow",disp_setting);
    tempBL = ReturnDivByClass("Content");
    var head=document.getElementsByTagName("head")[0].innerHTML;
    var body=document.getElementsByTagName("body")[0].innerHTML;
    var strprint=
	'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"\n'
	+ '"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n'
	+ '<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">'
	+ '<head>\n'
          + head
          + '<style type="text/css"> .offset3 { margin-left: 40px; }</style>'
        + '</head>\n'
	+ '<body id="Print">\n' + body + '</body>\n'
	+ '</html>';
    docprint.document.write(strprint);
    docprint.focus();
}

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

$(function(){
  $("a").each(function(){
          var href = $(this).attr("href");
          if (window.location.pathname.substr(-href.length) == href) {
              console.log("found");
              $(this).addClass("current");
          }
      })
      })

