(function(g){var window=this;var x4=function(a,b){g.mf(a.u,8*b+2);var c=a.u.end();a.C.push(c);a.B+=c.length;c.push(a.B);return c},y4=function(a,b){var c=b.pop();
for(c=a.B+a.u.length()-c;127<c;)b.push(c&127|128),c>>>=7,a.B++;b.push(c);a.B++},OFa=function(a,b,c){null!=c&&(g.mf(a.u,8*b+1),a=a.u,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.zf=b,g.Af=c,g.pf(a,g.zf),g.pf(a,g.Af))},z4=function(a,b,c){null!=c&&(g.mf(a.u,8*b),a.u.u.push(c?1:0))},A4=function(a,b,c){if(null!=c){b=x4(a,b);
for(var d=a.u,e=0;e<c.length;e++){var f=c.charCodeAt(e);if(128>f)d.u.push(f);else if(2048>f)d.u.push(f>>6|192),d.u.push(f&63|128);else if(65536>f)if(55296<=f&&56319>=f&&e+1<c.length){var h=c.charCodeAt(e+1);56320<=h&&57343>=h&&(f=1024*(f-55296)+h-56320+65536,d.u.push(f>>18|240),d.u.push(f>>12&63|128),d.u.push(f>>6&63|128),d.u.push(f&63|128),e++)}else d.u.push(f>>12|224),d.u.push(f>>6&63|128),d.u.push(f&63|128)}y4(a,b)}},B4=function(a,b,c,d){null!=c&&(b=x4(a,b),d(c,a),y4(a,b))},C4=function(a,b,c,d){if(null!=
c)for(var e=0;e<c.length;e++){var f=x4(a,b);
d(c[e],a);y4(a,f)}},PFa=function(a,b){var c=(b-a.u)/(a.B-a.u);
if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,h=0;8>h;h++){f=g.Dn(a,c);var l=(g.Dn(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(l))break;else f<b?d=c:e=c,c-=(f-b)/l}for(h=0;1E-6<Math.abs(f-b)&&8>h;h++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=g.Dn(a,c);return c},D4=function(a,b,c){a.u||(a.u={});
if(!a.u[c]){var d=g.Kf(a,c);d&&(a.u[c]=new b(d))}return a.u[c]},QFa=function(a,b,c){a.u||(a.u={});
c=c||[];for(var d=[],e=0;e<c.length;e++)d[e]=c[e].Nf;a.u[b]=c;g.Mf(a,b,d)},E4=function(a,b,c,d){(c=g.If(a,c))&&c!==b&&void 0!==d&&(a.u&&c in a.u&&(a.u[c]=void 0),g.Mf(a,c,void 0));
g.Mf(a,b,d)},F4=function(){return{G:"svg",
U:{height:"100%",version:"1.1",viewBox:"0 0 110 26",width:"100%"},R:[{G:"path",wb:!0,L:"ytp-svg-fill",U:{d:"M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"}}]}},
RFa=function(a){this.uC=a},G4=function(a,b,c){this.D=a;
this.B=b;this.u=c||[];this.Un=new Map},H4=function(a,b){G4.call(this,a,3,b)},TFa=function(){this.I=new SFa;
this.B=new Map;this.F=new Set;this.C=0;this.D=100;this.flushInterval=3E4;this.u=new g.Km(this.flushInterval);this.u.wa("tick",this.OH,!1,this)},UFa=function(a,b){return a.F.has(b)?void 0:a.B.get(b)},VFa=function(a){for(var b=0;b<a.length;b++)a[b].clear()},WFa=function(){if(!I4){I4=new TFa;
var a=g.wo("client_streamz_web_flush_count",-1);-1!==a&&(I4.D=a)}this.u=I4;this.u.HJ("/client_streamz/youtube/web/debug/third_party_apisid_cookie_reissue_iframe",{nK:3,mK:"client_name"})},YFa=function(a){g.Jf(this,a,XFa,null)},ZFa=function(a){g.Jf(this,a,null,null)},aGa=function(a,b){var c=g.Of(a,ZFa,1);
0<c.length&&C4(b,1,c,$Fa)},$Fa=function(a,b){var c=g.Kf(a,1);
null!=c&&g.Df(b,1,c);c=g.Kf(a,2);null!=c&&g.Cf(b,2,c)},cGa=function(a){g.Jf(this,a,bGa,null)},eGa=function(a){g.Jf(this,a,null,dGa)},fGa=function(a){g.Jf(this,a,null,null)},gGa=function(a){g.Jf(this,a,null,null)},J4=function(a){g.Jf(this,a,hGa,null)},L4=function(a){g.Jf(this,a,null,K4)},N4=function(a){g.Jf(this,a,null,M4)},kGa=function(a,b){var c=D4(a,fGa,1);
null!=c&&B4(b,1,c,iGa);c=D4(a,gGa,2);null!=c&&B4(b,2,c,jGa)},iGa=function(a,b){var c=g.Kf(a,1);
null!=c&&A4(b,1,c);c=g.Kf(a,2);null!=c&&A4(b,2,c);c=g.Kf(a,3);null!=c&&z4(b,3,c)},jGa=function(a,b){var c=g.Kf(a,1);
null!=c&&A4(b,1,c);c=g.Kf(a,2);null!=c&&A4(b,2,c);c=g.Kf(a,3);null!=c&&g.yf(b,3,c);c=g.Kf(a,4);null!=c&&z4(b,4,c)},nGa=function(a,b){var c=g.Of(a,L4,1);
0<c.length&&C4(b,1,c,lGa);c=D4(a,N4,2);null!=c&&B4(b,2,c,mGa)},lGa=function(a,b){var c=g.Kf(a,1);
null!=c&&A4(b,1,c);c=g.Kf(a,2);null!=c&&g.yf(b,2,c);c=g.Kf(a,3);null!=c&&z4(b,3,c)},mGa=function(a,b){var c=g.Kf(a,1);
null!=c&&g.Cf(b,1,c);c=g.Kf(a,2);null!=c&&g.Df(b,2,c);c=D4(a,YFa,3);null!=c&&B4(b,3,c,aGa)},SFa=function(){},O4=function(a){g.B.call(this);
this.callback=a;this.B=new g.Cn(0,0,.4,0,.2,1,1,1);this.delay=new g.gn(this.next,window,this);this.startTime=this.duration=this.u=this.from=NaN;g.D(this,this.delay)},P4=function(a){g.V.call(this,{G:"div",
L:"ytp-related-on-error-overlay"});var b=this;this.api=a;this.I=this.B=0;this.animationDelay=1E3;this.S=new g.uR(this);this.D=[];this.u=[];this.F=0;this.title=new g.V({G:"h2",L:"ytp-related-title",Z:"{{title}}"});this.previous=new g.V({G:"button",la:["ytp-button","ytp-previous"],U:{"aria-label":"Hi\u1ec3n th\u1ecb c\u00e1c video \u0111\u1ec1 xu\u1ea5t tr\u01b0\u1edbc \u0111\u00f3"},R:[g.WN()]});this.Y=new O4(function(f){b.suggestions.element.scrollLeft=-f});
this.tileWidth=this.C=0;this.K=!0;this.next=new g.V({G:"button",la:["ytp-button","ytp-next"],U:{"aria-label":"Hi\u1ec3n th\u1ecb th\u00eam video \u0111\u1ec1 xu\u1ea5t"},R:[g.XN()]});g.D(this,this.S);a=a.T();this.X=a.B;g.D(this,this.title);this.title.ga(this.element);this.suggestions=new g.V({G:"div",L:"ytp-suggestions"});g.D(this,this.suggestions);this.suggestions.ga(this.element);g.D(this,this.previous);this.previous.ga(this.element);this.previous.wa("click",this.nM,this);g.D(this,this.Y);for(var c=
0;16>c;c++){var d=new g.V({G:"a",L:"ytp-suggestion-link",U:{href:"{{link}}",target:a.F,"aria-label":"{{aria_label}}"},R:[{G:"div",L:"ytp-suggestion-image",R:[{G:"div",U:{"data-is-live":"{{is_live}}"},L:"ytp-suggestion-duration",Z:"{{duration}}"}]},{G:"div",L:"ytp-suggestion-title",U:{title:"{{hover_title}}"},Z:"{{title}}"},{G:"div",L:"ytp-suggestion-author",Z:"{{views_or_author}}"}]});g.D(this,d);d.ga(this.suggestions.element);var e=d.ia("ytp-suggestion-link");g.ug(e,"transitionDelay",c/20+"s");this.S.N(e,
"click",g.Ta(this.oM,c));this.D.push(d)}g.D(this,this.next);this.next.ga(this.element);this.next.wa("click",this.mM,this);this.S.N(this.api,"videodatachange",this.Ra);this.resize(g.dG(this.api).getPlayerSize());this.Ra();this.show()},Q4=function(a){a.next.element.style.bottom=a.I+"px";
a.previous.element.style.bottom=a.I+"px";var b=a.C,c=a.F-a.u.length*(a.tileWidth+a.B);g.K(a.element,"ytp-scroll-min",0<=b);g.K(a.element,"ytp-scroll-max",b<=c)},oGa=function(a){for(var b=0;b<a.u.length;b++){var c=b,d=a.u[b].Ma();
c=a.D[c];var e=d.shortViewCount?d.shortViewCount:d.author,f=d.Uk();g.iD(a.api.T())&&(f=g.Md(f,g.hV({},"emb_rel_err")));c.element.style.display="";var h=c.ia("ytp-suggestion-title");g.An.test(d.title)?h.dir="rtl":g.yBa.test(d.title)&&(h.dir="ltr");h=c.ia("ytp-suggestion-author");g.An.test(e)?h.dir="rtl":g.yBa.test(e)&&(h.dir="ltr");h=d.isLivePlayback?"Tr\u1ef1c ti\u1ebfp":d.lengthSeconds?g.cP(d.lengthSeconds):"";c.update({views_or_author:e,duration:h,link:f,hover_title:d.title,title:d.title,aria_label:d.Qp||
null,is_live:d.isLivePlayback});c=c.ia("ytp-suggestion-image");d=d.oe();c.style.backgroundImage=d?"url("+d+")":""}for(;b<a.D.length;b++)a.D[b].element.style.display="none";Q4(a)},R4=function(a){g.IU.call(this,a);
var b=this,c=a.T();c=new g.V({G:"a",L:"ytp-small-redirect",U:{href:g.UD(c),target:c.F,"aria-label":"Truy c\u1eadp v\u00e0o YouTube \u0111\u1ec3 t\u00ecm ki\u1ebfm nhi\u1ec1u video h\u01a1n"},R:[{G:"svg",U:{fill:"#fff",height:"100%",viewBox:"0 0 24 24",width:"100%"},R:[{G:"path",U:{d:"M0 0h24v24H0V0z",fill:"none"}},{G:"path",U:{d:"M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"}}]}]});
c.ga(this.element);g.D(this,c);this.u=new P4(a);this.u.ga(this.element);g.D(this,this.u);this.N(a,"videodatachange",function(){b.show()});
this.resize(g.dG(this.api).getPlayerSize())},pGa=function(a,b){a.ia("ytp-error-content").style.paddingTop="0px";
var c=a.ia("ytp-error-content"),d=c.clientHeight;a.u.resize(b,b.height-d);c.style.paddingTop=(b.height-a.u.element.clientHeight)/2-d/2+"px"},qGa=function(a,b){var c=a.api.T(),d;
b.reason&&(S4(b.reason)?d=g.zH(b.reason):d=g.JU(g.T(b.reason)),a.Gc(d,"content"));var e;b.subreason&&(S4(b.subreason)?e=g.zH(b.subreason):e=g.JU(g.T(b.subreason)),a.Gc(e,"subreason"));if(g.Q(c.experiments,"embeds_enable_age_gating_playability_check")&&b.proceedButton&&b.proceedButton.buttonRenderer&&(e=b.proceedButton.buttonRenderer,c=a.ia("ytp-error-content-wrap-subreason"),d=g.Fe("A"),e.text&&e.text.simpleText)){var f=e.text.simpleText;d.textContent=f;a:{for(var h=(c||document).getElementsByTagName("A"),
l=0;l<h.length;l++)if(h[l].textContent===f){f=!0;break a}f=!1}f||(e.navigationEndpoint&&e.navigationEndpoint.urlEndpoint&&((f=e.navigationEndpoint.urlEndpoint.url)&&d.setAttribute("href",f),(e=e.navigationEndpoint.urlEndpoint.target)&&d.setAttribute("target",e)),c.appendChild(d))}},S4=function(a){if(a.runs)for(var b=0;b<a.runs.length;b++)if(a.runs[b].navigationEndpoint)return!0;
return!1},T4=function(a,b){g.V.call(this,{G:"a",
la:["ytp-impression-link"],U:{target:"{{target}}",href:"{{url}}","aria-label":"Xem tr\u00ean YouTube"},R:[{G:"div",L:"ytp-impression-link-content",U:{"aria-hidden":"true"},R:[{G:"div",L:"ytp-impression-link-text",Z:"Xem tr\u00ean"},{G:"div",L:"ytp-impression-link-logo",R:[F4()]}]}]});this.api=a;this.B=b;this.ya("target",a.T().F);g.bU(this.api,this.element,this,96714);this.N(this.api,"presentingplayerstatechange",this.C);this.N(this.api,"videoplayerreset",this.u);this.N(this.element,"click",this.onClick);
this.u()},U4=function(a){g.V.call(this,{G:"div",
L:"ytp-muted-autoplay-endscreen-overlay",R:[{G:"div",L:"ytp-muted-autoplay-end-panel",R:[{G:"div",L:"ytp-muted-autoplay-end-text",Z:"{{text}}"}]}]});this.api=a;this.B=this.ia("ytp-muted-autoplay-end-panel");this.u=new g.BU(this.api);g.D(this,this.u);this.u.ga(this.B,0);g.bU(this.api,this.element,this,52428);this.N(this.api,"presentingplayerstatechange",this.C);this.wa("click",this.onClick);this.hide()},V4=function(a){g.V.call(this,{G:"div",
L:"ytp-muted-autoplay-overlay",R:[{G:"div",L:"ytp-muted-autoplay-bottom-buttons",R:[{G:"button",la:["ytp-muted-autoplay-equalizer","ytp-button"],R:[{G:"div",la:["ytp-muted-autoplay-equalizer-icon"],R:[{G:"svg",U:{height:"100%",version:"1.1",viewBox:"-4 -4 24 24",width:"100%"},R:[{G:"g",U:{fill:"#fff"},R:[{G:"rect",L:"ytp-equalizer-bar-left",U:{height:"9",width:"4",x:"1",y:"7"}},{G:"rect",L:"ytp-equalizer-bar-middle",U:{height:"14",width:"4",x:"6",y:"2"}},{G:"rect",L:"ytp-equalizer-bar-right",U:{height:"12",
width:"4",x:"11",y:"4"}}]}]}]}]}]}]});this.api=a;this.bottomButtons=this.ia("ytp-muted-autoplay-bottom-buttons");this.ia("ytp-muted-autoplay-equalizer");this.C=new g.F(this.B,4E3,this);g.bU(a,this.element,this,39306);this.N(a,"presentingplayerstatechange",this.u);this.N(a,"onMutedAutoplayStarts",this.u);this.wa("click",this.onClick);this.hide()},W4=function(a,b){g.V.call(this,{G:"div",
L:"ytp-pause-overlay"});var c=this;this.api=a;this.S=b;this.animationDelay=1E3;this.B=new g.uR(this);this.I=new g.nO(this,1E3,!1,100);this.D=[];this.u=[];this.F=0;this.K=!1;this.fa=0;this.title=new g.V({G:"h2",L:"ytp-related-title",Z:"{{title}}"});this.previous=new g.V({G:"button",la:["ytp-button","ytp-previous"],U:{"aria-label":"Hi\u1ec3n th\u1ecb c\u00e1c video \u0111\u1ec1 xu\u1ea5t tr\u01b0\u1edbc \u0111\u00f3"},R:[g.WN()]});this.Y=new O4(function(m){c.suggestions.element.scrollLeft=-m});
this.ca=this.tileWidth=this.C=0;this.next=new g.V({G:"button",la:["ytp-button","ytp-next"],U:{"aria-label":"Hi\u1ec3n th\u1ecb th\u00eam video \u0111\u1ec1 xu\u1ea5t"},R:[g.XN()]});this.expandButton=new g.V({G:"button",la:["ytp-button","ytp-expand"],Z:"Video kh\u00e1c"});g.D(this,this.B);g.D(this,this.I);var d=a.T();"0"===d.controlsType&&g.I(a.getRootNode(),"ytp-pause-overlay-controls-hidden");this.X=d.B;g.D(this,this.title);this.title.ga(this.element);this.suggestions=new g.V({G:"div",L:"ytp-suggestions"});
g.D(this,this.suggestions);this.suggestions.ga(this.element);g.D(this,this.previous);this.previous.ga(this.element);this.previous.wa("click",this.kM,this);var e=g.pB||g.xg?{style:"will-change: opacity"}:void 0;g.D(this,this.Y);for(var f=0;16>f;f++){var h=new g.V({G:"a",L:"ytp-suggestion-link",U:{href:"{{link}}",target:d.F,"aria-label":"{{aria_label}}"},R:[{G:"div",L:"ytp-suggestion-image"},{G:"div",L:"ytp-suggestion-overlay",U:e,R:[{G:"div",L:"ytp-suggestion-title",Z:"{{title}}"},{G:"div",L:"ytp-suggestion-author",
Z:"{{author_and_views}}"},{G:"div",U:{"data-is-live":"{{is_live}}"},L:"ytp-suggestion-duration",Z:"{{duration}}"}]}]});g.D(this,h);h.ga(this.suggestions.element);var l=h.ia("ytp-suggestion-link");g.ug(l,"transitionDelay",f/20+"s");this.B.N(l,"click",g.Ta(this.lM,f));this.D.push(h)}g.D(this,this.next);this.next.ga(this.element);this.next.wa("click",this.jM,this);d=new g.V({G:"button",la:["ytp-button","ytp-collapse"],U:{"aria-label":"\u1ea8n ph\u1ea7n Video kh\u00e1c"},R:[{G:"svg",U:{height:"100%",
viewBox:"0 0 16 16",width:"100%"},R:[{G:"path",U:{d:"M13 4L12 3 8 7 4 3 3 4 7 8 3 12 4 13 8 9 12 13 13 12 9 8z",fill:"#fff"}}]}]});g.D(this,d);d.ga(this.element);d.wa("click",this.NO,this);g.D(this,this.expandButton);this.expandButton.ga(this.element);this.expandButton.wa("click",this.OO,this);this.B.N(this.api,"appresize",this.Va);this.B.N(this.api,"fullscreentoggled",this.lk);this.B.N(this.api,"presentingplayerstatechange",this.lc);this.B.N(this.api,"videodatachange",this.Ra);this.Va(g.dG(this.api).getPlayerSize());
this.Ra()},X4=function(a){var b=a.S.ge()?32:16;
b=a.ca/2+b;a.next.element.style.bottom=b+"px";a.previous.element.style.bottom=b+"px";b=a.C;var c=a.F-a.u.length*(a.tileWidth+8);g.K(a.element,"ytp-scroll-min",0<=b);g.K(a.element,"ytp-scroll-max",b<=c)},rGa=function(a){for(var b=0;b<a.u.length;b++){var c=a.u[b].Ma(),d=a.D[b],e=c.shortViewCount?c.author+" \u2022 "+c.shortViewCount:c.author;
d.element.style.display="";g.xBa.test(c.title)&&(d.ia("ytp-suggestion-title").dir="rtl");g.xBa.test(e)&&(d.ia("ytp-suggestion-author").dir="rtl");var f=c.isLivePlayback?"Tr\u1ef1c ti\u1ebfp":c.lengthSeconds?g.cP(c.lengthSeconds):"";var h=c.Uk();g.iD(a.api.T())&&(h=g.Md(h,g.hV({},"emb_rel_pause")));d.update({author_and_views:e,duration:f,link:h,title:c.title,aria_label:c.Qp||null,is_live:c.isLivePlayback});d=d.ia("ytp-suggestion-image");c=c.oe();d.style.backgroundImage=c?"url("+c+")":""}for(;b<a.D.length;b++)a.D[b].element.style.display=
"none";X4(a)},Y4=function(a){var b=a.T();
g.V.call(this,{G:"a",la:["ytp-watermark","yt-uix-sessionlink"],U:{target:b.F,href:"{{url}}","aria-label":g.vL("Xem tr\u00ean $WEBSITE",{WEBSITE:g.ED(b)}),"data-sessionlink":"feature=player-watermark"},R:[F4()]});this.api=a;this.u=null;this.B=!1;this.state=g.wK(a);g.bU(a,this.element,this,76758);this.N(a,"videodatachange",this.kB);this.N(a,"videodatachange",this.Ra);this.N(a,"presentingplayerstatechange",this.pM);this.N(a,"appresize",this.Va);b=this.state;this.state!==b&&(this.state=b);this.kB();this.Ra();
this.Va(g.dG(a).getPlayerSize())},Z4=function(a){g.LS.call(this,a);
this.J=a;this.C=new g.uR(this);g.D(this,this.C);this.load()};g.k=G4.prototype;g.k.eS=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.Un.set(this.rD(c),[new RFa(a)])};
g.k.iD=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];b=this.rD(b);return this.Un.has(b)?this.Un.get(b):void 0};
g.k.uK=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return(b=this.iD(b))&&b.length?b[0]:void 0};
g.k.clear=function(){this.Un.clear()};
g.k.rD=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return b?b.join(","):"key"};g.u(H4,G4);H4.prototype.C=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=0;var e=this.uK(c);e&&(d=e.uC);this.eS(d+a,c)};g.k=TFa.prototype;g.k.OH=function(){var a=this.B.values();a=[].concat(g.ma(a)).filter(function(b){return b.Un.size});
a.length&&this.I.flush(a);VFa(a);this.C=0;this.u.enabled&&this.u.stop()};
g.k.HJ=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.B.has(a)||this.B.set(a,new H4(a,c))};
g.k.PL=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.QL.apply(this,[a,1].concat(g.ma(c)))};
g.k.QL=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];(e=UFa(this,a))&&e instanceof H4&&(e.C(b,d),this.u.enabled||this.u.start(),this.C++,this.C>=this.D&&this.OH())};
g.k.rH=function(a,b,c){for(var d=2;d<arguments.length;++d);UFa(this,a)};g.Va(YFa,g.Ef);g.Va(ZFa,g.Ef);var XFa=[1];g.Va(cGa,g.Ef);g.Va(eGa,g.Ef);g.Va(fGa,g.Ef);g.Va(gGa,g.Ef);g.Va(J4,g.Ef);g.Va(L4,g.Ef);g.Va(N4,g.Ef);var bGa=[3,6,4],dGa=[[1,2]],hGa=[1],K4=[[1,2,3]],M4=[[1,2,3]];SFa.prototype.flush=function(a){a=void 0===a?[]:a;if(g.vo("enable_client_streamz_web")){a=g.q(a);for(var b=a.next();!b.done;b=a.next()){b=b.value;var c=new cGa;c=g.Mf(c,1,b.D);for(var d=b,e=[],f=0;f<d.u.length;f++)e.push(d.u[f].mK);c=g.Mf(c,3,e||[]);d=[];e=[];f=g.q(b.Un.keys());for(var h=f.next();!h.done;h=f.next())e.push(h.value.split(","));for(f=0;f<e.length;f++){h=e[f];var l=b.B;for(var m=b.iD(h)||[],n=[],p=0;p<m.length;p++){var r=m[p];r=r&&r.uC;var t=new N4;switch(l){case 3:E4(t,1,M4[0],Number(r));
break;case 2:E4(t,2,M4[0],Number(r))}n.push(t)}l=n;for(m=0;m<l.length;m++){p=l[m];n=new J4;n.u||(n.u={});r=p?p.Nf:p;n.u[2]=p;n=g.Mf(n,2,r);p=h;r=[];t=b;for(var w=[],x=0;x<t.u.length;x++)w.push(t.u[x].nK);t=w;for(w=0;w<t.length;w++){x=t[w];var y=p[w],C=new L4;switch(x){case 3:E4(C,1,K4[0],String(y));break;case 2:E4(C,2,K4[0],Number(y));break;case 1:E4(C,3,K4[0],"true"==y)}r.push(C)}QFa(n,1,r);d.push(n)}}QFa(c,4,d);d=b=new g.wf;e=g.Kf(c,1);null!=e&&A4(d,1,e);e=g.Kf(c,5);null!=e&&OFa(d,5,e);e=D4(c,eGa,
2);null!=e&&B4(d,2,e,kGa);e=g.Kf(c,3);if(0<e.length&&null!=e)for(f=0;f<e.length;f++)A4(d,3,e[f]);e=g.Kf(c,6);if(0<e.length&&null!=e)for(f=0;f<e.length;f++)OFa(d,6,e[f]);e=g.Of(c,J4,4);0<e.length&&C4(d,4,e,nGa);b=g.xf(b);b={serializedIncrementBatch:g.sf(b)};g.Nq("streamzIncremented",b)}}};var I4;g.u(O4,g.B);O4.prototype.start=function(a,b,c){this.from=a;this.u=b;this.duration=c;this.startTime=(0,g.N)();this.next()};
O4.prototype.next=function(){var a=(0,g.N)()-this.startTime;var b=this.B;a=PFa(b,a/this.duration);if(0==a)b=b.F;else if(1==a)b=b.P;else{var c=g.ee(b.F,b.I,a),d=g.ee(b.I,b.K,a);b=g.ee(b.K,b.P,a);c=g.ee(c,d,a);d=g.ee(d,b,a);b=g.ee(c,d,a)}b=g.ce(b,0,1);this.callback((this.u-this.from)*b+this.from);1>b&&this.delay.start()};g.u(P4,g.V);g.k=P4.prototype;g.k.hide=function(){this.K=!0;g.V.prototype.hide.call(this)};
g.k.show=function(){this.K=!1;g.V.prototype.show.call(this)};
g.k.isHidden=function(){return this.K};
g.k.mM=function(){this.scrollTo(this.C-this.F)};
g.k.nM=function(){this.scrollTo(this.C+this.F)};
g.k.oM=function(a,b){var c=this.u[a],d=c.Ad;g.DU(b,this.api,this.X,d||void 0)&&g.JT(this.api,c.Ma().videoId,d,c.getPlaylistId())};
g.k.resize=function(a,b){var c=this.api.T(),d=16/9,e=650<=a.width,f=480>a.width||290>a.height,h=Math.min(this.u.length,this.D.length);if(150>=Math.min(a.width,a.height)||0===h||!c.ub)this.hide();else{var l;if(e){var m=l=28;this.B=16}else this.B=m=l=8;if(f){var n=6;e=14;var p=12;f=24;c=12}else n=8,e=18,p=16,f=36,c=16;l=a.width-(48+l+m);m=Math.ceil(l/150);m=Math.min(3,m);m=l/m-this.B;var r=Math.floor(m/d);b&&r+100>b&&50<m&&(r=Math.max(b,50/d),m=Math.ceil(l/(d*(r-100)+this.B)),m=l/m-this.B,r=Math.floor(m/
d));50>m||g.QT(this.api)?this.hide():this.show();for(d=0;d<h;d++){var t=this.D[d],w=t.ia("ytp-suggestion-image");w.style.width=m+"px";w.style.height=r+"px";t.ia("ytp-suggestion-title").style.width=m+"px";t.ia("ytp-suggestion-author").style.width=m+"px";t=t.ia("ytp-suggestion-duration");t.style.display=t&&100>m?"none":""}h=e+n+p+4;this.I=h+c+(r-f)/2;this.suggestions.element.style.height=r+h+"px";this.tileWidth=m;this.F=l;this.C=0;this.suggestions.element.scrollLeft=-0;Q4(this)}};
g.k.Ra=function(){var a=this,b=this.api.getVideoData(),c=this.api.T();this.X=b.qc?!1:c.B;if(b.suggestions){var d=g.Ke(b.suggestions,function(e){return e&&!e.list});
this.u=g.Oc(d,function(e){e=g.xW(c,e);g.D(a,e);return e})}else this.u.length=0;
oGa(this);b.qc?this.title.update({title:g.vL("Video kh\u00e1c t\u1eeb $DNI_RELATED_CHANNEL",{DNI_RELATED_CHANNEL:b.author})}):this.title.update({title:"Xem th\u00eam video tr\u00ean YouTube"})};
g.k.scrollTo=function(a){a=g.ce(a,this.F-this.u.length*(this.tileWidth+this.B),0);this.Y.start(this.C,a,this.animationDelay);this.C=a;Q4(this)};g.u(R4,g.IU);R4.prototype.show=function(){g.IU.prototype.show.call(this);pGa(this,g.dG(this.api).getPlayerSize())};
R4.prototype.resize=function(a){g.IU.prototype.resize.call(this,a);pGa(this,a);g.K(this.element,"related-on-error-overlay-visible",!this.u.isHidden())};
R4.prototype.B=function(a){g.IU.prototype.B.call(this,a);var b=this.api.getVideoData();if(g.Q(this.api.T().experiments,"embed_parse_error_renderer_killswitch")||!b.TC&&!b.playerErrorMessageRenderer){var c;a.Mi&&(b.Kt?S4(b.Kt)?c=g.zH(b.Kt):c=g.JU(g.T(b.Kt)):c=g.JU(a.Mi),this.Gc(c,"subreason"))}else(a=b.TC)?qGa(this,a):b.playerErrorMessageRenderer&&qGa(this,b.playerErrorMessageRenderer)};g.u(T4,g.V);T4.prototype.C=function(){g.wK(this.api).isCued()||(this.hide(),g.RN(this.api,this.element,!1))};
T4.prototype.u=function(){var a=this.api.getVideoData(),b=this.api.T(),c=this.api.getVideoData().qc,d=b.Mb;b=!b.ub;var e=this.B.Ke();d||e||c||b||!a.videoId?(this.hide(),g.RN(this.api,this.element,!1)):(a=g.Md(this.api.getVideoUrl(),g.hV({},"emb_imp_woyt")),this.ya("url",a),this.show())};
T4.prototype.onClick=function(a){var b=g.Md(this.api.getVideoUrl(),g.hV({},"emb_imp_woyt"));g.EU(b,this.api,a);g.cU(this.api,this.element)};
T4.prototype.show=function(){g.wK(this.api).isCued()&&(g.V.prototype.show.call(this),g.QN(this.api,this.element)&&g.RN(this.api,this.element,!0))};g.u(U4,g.V);U4.prototype.C=function(){var a=g.wK(this.api),b=this.api.getVideoData();g.Q(this.api.T().experiments,"embeds_enable_muted_autoplay")&&b.mutedAutoplay&&(g.U(a,2)&&!this.fb?(this.show(),this.u.show(),a=this.api.getVideoData(),this.ya("text",a.CF),g.K(this.element,"ytp-muted-autoplay-show-end-panel",!0),g.RN(this.api,this.element,this.fb),this.api.xa("onMutedAutoplayEnds")):this.hide())};
U4.prototype.onClick=function(){var a=this.api.getVideoData(),b=this.api.getCurrentTime();a.mutedAutoplay=!1;a.endSeconds=NaN;a.rh();this.api.loadVideoById(a.videoId,b);g.cU(this.api,this.element);this.hide()};g.u(V4,g.V);V4.prototype.u=function(){var a=g.wK(this.api),b=this.api.getVideoData();g.Q(this.api.T().experiments,"embeds_enable_muted_autoplay")&&b.mutedAutoplay&&!g.U(a,2)?this.fb||(g.V.prototype.show.call(this),this.C.start(),g.RN(this.api,this.element,this.fb)):this.hide()};
V4.prototype.B=function(){g.K(this.element,"ytp-muted-autoplay-hide-watermark",!0)};
V4.prototype.onClick=function(){var a=this.api.getVideoData(),b=this.api.getCurrentTime();a.mutedAutoplay=!1;a.endSeconds=NaN;a.rh();this.api.loadVideoById(a.videoId,b);g.cU(this.api,this.element)};g.u(W4,g.V);g.k=W4.prototype;g.k.hide=function(){g.sn(this.api.getRootNode(),"ytp-expand-pause-overlay");g.V.prototype.hide.call(this)};
g.k.NO=function(){this.K=!0;g.sn(this.api.getRootNode(),"ytp-expand-pause-overlay");this.expandButton.focus()};
g.k.OO=function(){this.K=!1;g.I(this.api.getRootNode(),"ytp-expand-pause-overlay")};
g.k.jM=function(){this.scrollTo(this.C-this.F)};
g.k.kM=function(){this.scrollTo(this.C+this.F)};
g.k.lM=function(a,b){if(1E3>(0,g.N)()-this.fa)g.ip(b),document.activeElement.blur();else{var c=this.u[a],d=c.Ad;g.DU(b,this.api,this.X,d||void 0)&&g.JT(this.api,c.Ma().videoId,d,c.getPlaylistId())}};
g.k.lk=function(){this.Va(g.dG(this.api).getPlayerSize())};
g.k.lc=function(a){if(!(g.U(a.state,1)||g.U(a.state,16)||g.U(a.state,32))){var b=!g.Q(this.api.T().experiments,"embeds_disable_pauseoverlay_on_autoplay_blocked_killswitch")&&g.U(a.state,2048);!g.U(a.state,4)||g.U(a.state,2)||b?this.I.hide():this.u.length&&(this.K||(g.I(this.api.getRootNode(),"ytp-expand-pause-overlay"),X4(this)),this.I.show(),this.fa=(0,g.N)())}};
g.k.Va=function(a){var b=16/9,c=this.S.ge();a=a.width-(c?112:58);c=Math.ceil(a/(c?320:192));c=(a-8*c)/c;b=Math.floor(c/b);for(var d=0;d<this.D.length;d++){var e=this.D[d].ia("ytp-suggestion-image");e.style.width=c+"px";e.style.height=b+"px"}this.suggestions.element.style.height=b+"px";this.tileWidth=c;this.ca=b;this.F=a;this.C=0;this.suggestions.element.scrollLeft=-0;X4(this)};
g.k.Ra=function(){var a=this,b=this.api.T(),c=this.api.getVideoData();this.X=c.qc?!1:b.B;if(c.suggestions){var d=g.Ke(c.suggestions,function(e){return e&&!e.list});
this.u=g.Oc(d,function(e){e=g.xW(b,e);g.D(a,e);return e})}else this.u.length=0;
rGa(this);c.qc?this.title.update({title:g.vL("Video kh\u00e1c t\u1eeb $DNI_RELATED_CHANNEL",{DNI_RELATED_CHANNEL:c.author})}):this.title.update({title:"Video kh\u00e1c"})};
g.k.scrollTo=function(a){a=g.ce(a,this.F-this.u.length*(this.tileWidth+8),0);this.Y.start(this.C,a,this.animationDelay);this.C=a;X4(this)};g.u(Y4,g.V);g.k=Y4.prototype;g.k.kB=function(){var a=this.api.getVideoData(),b=this.api.getVideoData(1).qc,c=this.api.T();a=(a.mutedAutoplay||c.Mb&&!g.U(this.state,2))&&!(b&&c.pfpChazalUi);g.KN(this,a);g.RN(this.api,this.element,a)};
g.k.pM=function(a){a=a.state;this.state!==a&&(this.state=a);this.kB()};
g.k.Ra=function(){if(this.api.getVideoData().videoId){var a=this.api.getVideoUrl(!0,!1,!1,!0);this.ya("url",a);this.u||(this.u=this.wa("click",this.onClick))}else this.u&&(this.ya("url",null),this.Nb(this.u),this.u=null)};
g.k.onClick=function(a){var b=this.api.getVideoUrl(!g.dP(a),!1,!0,!0);g.EU(b,this.api,a);g.cU(this.api,this.element)};
g.k.Va=function(a){if((a=480>a.width)&&!this.B||!a&&this.B){var b=new g.V(F4()),c=this.ia("ytp-watermark");g.K(c,"ytp-watermark-small",a);g.He(c);b.ga(c);this.B=a}};g.u(Z4,g.LS);g.k=Z4.prototype;g.k.li=function(){return!1};
g.k.create=function(){var a=this.J.T(),b=g.ET(this.J);a.ub&&(this.I=new W4(this.J,b),g.D(this,this.I),g.CP(this.J,this.I.element,4));g.Q(a.experiments,"embeds_enable_muted_autoplay")&&(this.B=new V4(this.J),g.D(this,this.B),g.CP(this.J,this.B.element,4),this.F=new U4(this.J),g.D(this,this.F),g.CP(this.J,this.F.element,4));if(a.Mb||this.B)this.watermark=new Y4(this.J),g.D(this,this.watermark),g.CP(this.J,this.watermark.element,7);g.Q(a.experiments,"embeds_impression_link")&&(this.D=new T4(this.J,b),
g.D(this,this.D),g.CP(this.J,this.D.element,7));this.C.N(this.J,"appresize",this.Va);this.C.N(this.J,"presentingplayerstatechange",this.iM);this.C.N(this.J,"videodatachange",this.NS);this.C.N(this.J,"onMutedAutoplayStarts",this.MP);this.vb(g.wK(this.J));this.player.Yc("embed");g.Q(a.experiments,"enable_cookie_reissue_iframe")&&a.Ae&&!g.xq("__Secure-3PAPISID")&&(a=a.deviceParams.c,a=void 0===a?"WEB":a,(new WFa).u.PL("/client_streamz/youtube/web/debug/third_party_apisid_cookie_reissue_iframe",a),a=
g.Fe("IFRAME"),a.src="/signin?go=true",a.style.display="none",document.body.appendChild(a))};
g.k.Va=function(){var a=g.dG(this.J).getPlayerSize();this.u&&this.u.resize(a)};
g.k.iM=function(a){this.vb(a.state)};
g.k.vb=function(a){g.U(a,128)?(this.u||(this.u=new R4(this.J),g.D(this,this.u),g.CP(this.J,this.u.element,4)),this.u.B(a.getData()),this.u.show(),g.I(this.J.getRootNode(),"ytp-embed-error")):this.u&&(this.u.dispose(),this.u=null,g.sn(this.J.getRootNode(),"ytp-embed-error"))};
g.k.MP=function(){this.J.getVideoData().mutedAutoplay&&this.B&&this.watermark&&this.watermark.ga(this.B.bottomButtons,0)};
g.k.NS=function(){var a=this.J.getVideoData();this.watermark&&this.B&&!a.mutedAutoplay&&g.Me(this.B.element,this.watermark.element)&&g.CP(this.J,this.watermark.element,7)};g.tU.embed=Z4;})(_yt_player);
