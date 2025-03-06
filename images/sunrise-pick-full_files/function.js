function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}
function MM_disPlayLayers() { //v6.0
  var i,p,v,obj,args=MM_disPlayLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'':(v=='hide')?'none':v; }
    obj.display=v; }
}
function showLayer(id) {
	document.all[id].style.visibility = "visible";
}
function hideLayer(id) {
	document.all[id].style.visibility = "hidden";
}

function setCookie( name, value, expiredays ) {
	var todayDate = new Date();
	todayDate.setDate( todayDate.getDate() + expiredays );
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}
function getCookie( name ) {
	var nameOfCookie = name + "=";
	var x = 0;
	while ( x <= document.cookie.length ) {
		var y = (x+nameOfCookie.length);
		if ( document.cookie.substring( x, y ) == nameOfCookie ) {
					 if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
									 endOfCookie = document.cookie.length;
					 return unescape( document.cookie.substring( y, endOfCookie ) );
		}
		x = document.cookie.indexOf( " ", x ) + 1;
		if ( x == 0 )
		break;
	}
	return "";
}
function autoResizePopup() {
	var winW, winH, sizeToW, sizeToH;
	if ( parseInt(navigator.appVersion) > 3 ) {
		 if ( navigator.appName=="Netscape" ) {
				winW = window.innerWidth;
				winH = window.innerHeight;
		 }
		 if ( navigator.appName.indexOf("Microsoft") != -1 ) {
				winW = document.body.scrollWidth;
				winH = document.body.scrollHeight;
		 }
	}
	sizeToW = 0;
	sizeToH = 0;
	if ( winW > 1000 ) {
		 sizeToW = 1000 - document.body.clientWidth;
	} else if ( Math.abs(document.body.clientWidth - winW ) > 3 ) {
		 sizeToW = winW - document.body.clientWidth;
	}
	if ( winH > 680 ) {
		 szeToH = 680 - document.body.clientHeight;
	} else if ( Math.abs(document.body.clientHeight - winH) > 4 ) {
		 sizeToH = winH - document.body.clientHeight;
	}
	if ( sizeToW != 0 || sizeToH != 0 )
		 window.resizeBy(sizeToW, sizeToH);
	//alert(winW + ":" + winH + ":"  +document.body.clientWidth);
}
var previd = null;
function displaySub(subID) {
	if (previd != null) {
		if (previd != subID)	{
			previd.style.display = "none";
		}
	}
	if (subID.style.display == "none") {
		subID.style.display = "block";
	}	else {
		subID.style.display = "none";
	}
	previd = subID;
}
function MM_swapImage_sub(m1)
{
	for(i=1;i<=8;i++)
	{
		eval("document.img"+i).src = (m1=="img"+i)?"/intro/img/0"+i+"_on.gif":"/intro/img/0"+i+".gif";
	}
}
function switchCell(n) {
    for (i=0; i < tb.length; i++) {
        tb[i].style.display = "none";
        cell[i].src = "/cyber/img/tab_btn_0"+(i+1)+".gif";
    }
    tb[n-1].style.display = "block";
    cell[n-1].src = "/cyber/img/tab_btn_0"+ n +"o.gif";
}
function scFrmChk()
{
	f = document.scFrm;
	if(f.search_typ[0].checked==true) {
		f.action = '/service/search.php';
	} else if(f.search_typ[1].checked==true) {
		f.action = '/service/search_staff.php';
	}
	if(f.scClkChk.value=="0") { alert("검색어를 입력하세요."); f.sc_kword.value=""; f.scClkChk.value="1"; f.sc_kword.focus(); return false; }
	else if(!f.sc_kword.value) { alert("검색어를 입력하세요."); f.sc_kword.focus(); return false; }
	else return true;
}
function scFrmTogg()
{
	f = document.scFrm;
	f.sc_kword.value="";
	f.scClkChk.value="1";
}

function swf_include(swfUrl,swfWidth,swfHeight,swfTitle,bgColor,swfName,access,flashVars){
	// 플래시 코드 정의
	var flashStr=
	"<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0' width='"+swfWidth+"' height='"+swfHeight+"' title='"+swfTitle+"' id='"+swfName+"' align='middle'>"+
	"<param name='allowScriptAccess' value='"+access+"' />"+
	"<param name='movie' value='"+swfUrl+"' />"+
	"<param name='FlashVars' value='"+flashVars+"' />"+
	//"<param name='loop' value='false' />"+
	"<param name='menu' value='false' />"+
	"<param name='quality' value='high' />"+
    "<param name='scale' value='noscale' />"+
	"<param name='wmode' value='transparent' />"+
	"<param name='bgcolor' value='"+bgColor+"' />"+
	"<embed src='"+swfUrl+"' FlashVars='"+flashVars+"'  wmode='transparent' quality='best' bgcolor='#EEF8FF' width='"+swfWidth+"' height='"+swfHeight+"' title='"+swfTitle+"' name='"+swfName+"' align='middle' allowScriptAccess='sameDomain' type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' />"+
	"</object>";

	// 플래시 코드 출력
	document.write(flashStr);
};

<!-- Tab -->
function dEI(elementID){
	return document.getElementById(elementID);
}
	
function tabCheck_info(dotabid, num){
		var inum=parseInt(num)-1;
		var linkTab=dEI(dotabid).getElementsByTagName("a");
		for (i=0;i<linkTab.length;i++) {
			var tabimg = linkTab.item(i).getElementsByTagName("img").item(0);
			var  tabContents= dEI(dotabid+(1+i));
			if (i==inum) {
				if(tabContents.style.display!="block"){
					tabimg.src=tabimg.src.replace(".gif", "on.gif");
					tabContents.style.display="block";
				}
			} else {
			tabimg.src=tabimg.src.replace("on.gif", ".gif");
			tabContents.style.display="none";
			}
		}
}

<!-- Tab_02 -->

function tabCheck(dotabid, num){
		var inum=parseInt(num)-1;
		var linkTab=dEI(dotabid).getElementsByTagName("a");
		for (i=0;i<linkTab.length;i++) {
			var tabimg = linkTab.item(i).getElementsByTagName("img").item(0);
			var  tabContents= dEI(dotabid+(1+i));
			if (i==inum) {
				if(tabContents.style.display!="block"){
					tabimg.src=tabimg.src.replace(".gif", "on.gif");
					tabContents.style.display="block";
				}
		}else{
			tabimg.src=tabimg.src.replace("on.gif", ".gif");
			tabContents.style.display="none";
		}
	}
}

<!--지적재산권등록-->
function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}
function goUrlSel(num){
	var obj = document.getElementById('goUrlSel_'+num);
	if(obj.value != ''){
		window.open(obj.value);
	}
}