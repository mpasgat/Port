(()=>{var t={353:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",r="second",i="minute",s="hour",a="day",u="week",o="month",c="quarter",f="year",h="date",d="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},p={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,o),s=n-i<0,a=e.clone().add(r+(s?-1:1),o);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:f,w:u,d:a,D:h,h:s,m:i,s:r,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",M={};M[v]=m;var g="$isDayjsObject",D=function(t){return t instanceof O||!(!t||!t[g])},w=function t(e,n,r){var i;if(!e)return v;if("string"==typeof e){var s=e.toLowerCase();M[s]&&(i=s),n&&(M[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var u=e.name;M[u]=e,i=u}return!r&&i&&(v=i),i||!r&&v},S=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new O(n)},_=p;_.l=w,_.i=D,_.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var O=function(){function m(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[g]=!0}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(_.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return _},y.isValid=function(){return!(this.$d.toString()===d)},y.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return S(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<S(t)},y.$g=function(t,e,n){return _.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,c=!!_.u(e)||e,d=_.p(t),l=function(t,e){var r=_.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?r:r.endOf(a)},$=function(t,e){return _.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,y=this.$M,p=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case f:return c?l(1,0):l(31,11);case o:return c?l(1,y):l(0,y+1);case u:var M=this.$locale().weekStart||0,g=(m<M?m+7:m)-M;return l(c?p-g:p+(6-g),y);case a:case h:return $(v+"Hours",0);case s:return $(v+"Minutes",1);case i:return $(v+"Seconds",2);case r:return $(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var u,c=_.p(t),d="set"+(this.$u?"UTC":""),l=(u={},u[a]=d+"Date",u[h]=d+"Date",u[o]=d+"Month",u[f]=d+"FullYear",u[s]=d+"Hours",u[i]=d+"Minutes",u[r]=d+"Seconds",u[n]=d+"Milliseconds",u)[c],$=c===a?this.$D+(e-this.$W):e;if(c===o||c===f){var m=this.clone().set(h,1);m.$d[l]($),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[_.p(t)]()},y.add=function(n,c){var h,d=this;n=Number(n);var l=_.p(c),$=function(t){var e=S(d);return _.w(e.date(e.date()+Math.round(t*n)),d)};if(l===o)return this.set(o,this.$M+n);if(l===f)return this.set(f,this.$y+n);if(l===a)return $(1);if(l===u)return $(7);var m=(h={},h[i]=t,h[s]=e,h[r]=1e3,h)[l]||1,y=this.$d.getTime()+n*m;return _.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=_.z(this),s=this.$H,a=this.$m,u=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},l=function(t){return _.s(s%12||12,t,"0")},m=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace($,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return _.s(e.$y,4,"0");case"M":return u+1;case"MM":return _.s(u+1,2,"0");case"MMM":return h(n.monthsShort,u,c,3);case"MMMM":return h(c,u);case"D":return e.$D;case"DD":return _.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return _.s(s,2,"0");case"h":return l(1);case"hh":return l(2);case"a":return m(s,a,!0);case"A":return m(s,a,!1);case"m":return String(a);case"mm":return _.s(a,2,"0");case"s":return String(e.$s);case"ss":return _.s(e.$s,2,"0");case"SSS":return _.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,d){var l,$=this,m=_.p(h),y=S(n),p=(y.utcOffset()-this.utcOffset())*t,v=this-y,M=function(){return _.m($,y)};switch(m){case f:l=M()/12;break;case o:l=M();break;case c:l=M()/3;break;case u:l=(v-p)/6048e5;break;case a:l=(v-p)/864e5;break;case s:l=v/e;break;case i:l=v/t;break;case r:l=v/1e3;break;default:l=v}return d?l:_.a(l)},y.daysInMonth=function(){return this.endOf(o).$D},y.$locale=function(){return M[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return _.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),b=O.prototype;return S.prototype=b,[["$ms",n],["$s",r],["$m",i],["$H",s],["$W",a],["$M",o],["$y",f],["$D",h]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,O,S),t.$i=!0),S},S.locale=w,S.isDayjs=D,S.unix=function(t){return S(1e3*t)},S.en=M[v],S.Ls=M,S.p={},S}()},279:function(t){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var r=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(t,e,n,i){return r.fromToBase(t,e,n,i)}n.en.relativeTime=i,r.fromToBase=function(e,r,s,a,u){for(var o,c,f,h=s.$locale().relativeTime||i,d=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],l=d.length,$=0;$<l;$+=1){var m=d[$];m.d&&(o=a?n(e).diff(s,m.d,!0):s.diff(e,m.d,!0));var y=(t.rounding||Math.round)(Math.abs(o));if(f=o>0,y<=m.r||!m.r){y<=1&&$>0&&(m=d[$-1]);var p=h[m.l];u&&(y=u(""+y)),c="string"==typeof p?p.replace("%d",y):p(y,r,m.l,f);break}}if(r)return c;var v=f?h.future:h.past;return"function"==typeof v?v(c):v.replace("%s",c)},r.to=function(t,e){return s(t,e,this,!0)},r.from=function(t,e){return s(t,e,this)};var a=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(a(this),t)},r.fromNow=function(t){return this.from(a(this),t)}}}()},927:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(353)),s=r(n(279));i.default.extend(s.default),fetch("https://fwd.innopolis.university/api/hw2?email=".concat("a.keruly@innopolis.university")).then((function(t){return t.json()})).then((function(t){return fetch("https://fwd.innopolis.university/api/comic?id=".concat(t))})).then((function(t){return t.json()})).then((function(t){var e=document.getElementById("comic-container");if(e){var n=new Date(parseInt(t.year),parseInt(t.month)-1,parseInt(t.day)),r=n.toLocaleDateString(),s=(0,i.default)(n).fromNow(),a=document.createElement("img");a.src=t.img,a.alt=t.alt;var u=document.createElement("p");u.textContent="Date: ".concat(r," (").concat(s,")");var o=document.createElement("h1");o.textContent=t.safe_title,e.appendChild(o),e.appendChild(a),e.appendChild(u)}}))}},e={};!function n(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,n),s.exports}(927)})();