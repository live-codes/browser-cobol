/*! @live-codes/cobol-wasm - MIT. IIFE build, sets self.cobolWasm.
 *  importScripts('cobol-wasm.global.js') then self.cobolWasm.createCompiler({ baseUrl }).
 *  Bundles @wasm-idle/llvm-core (MIT AND Apache-2.0 WITH LLVM-exception),
 *  @live-codes/clang-wasm (MIT), @bjorn3/browser_wasi_shim (MIT OR Apache-2.0) and fflate (MIT).
 *  The compiler this loads is GnuCOBOL (GPL-3.0-or-later) with its runtime (LGPL-3.0-or-later),
 *  which ships in assets/ rather than in this bundle; see THIRD-PARTY-NOTICES.md. */
var cobolWasm=(()=>{var l_=Object.defineProperty;var as=Object.getOwnPropertyDescriptor;var ds=Object.getOwnPropertyNames;var ls=Object.prototype.hasOwnProperty;var cs=(t,e)=>()=>(t&&(e=t(t=0)),e);var c_=(t,e)=>{for(var n in e)l_(t,n,{get:e[n],enumerable:!0})},fs=(t,e,n,_)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of ds(e))!ls.call(t,i)&&i!==n&&l_(t,i,{get:()=>e[i],enumerable:!(_=as(e,i))||_.enumerable});return t};var us=t=>fs(l_({},"__esModule",{value:!0}),t);var zr={};c_(zr,{AsyncCompress:()=>Ts,AsyncDecompress:()=>As,AsyncDeflate:()=>Dr,AsyncGunzip:()=>Ur,AsyncGzip:()=>Ts,AsyncInflate:()=>R_,AsyncUnzipInflate:()=>Ms,AsyncUnzlib:()=>Fr,AsyncZipDeflate:()=>ws,AsyncZlib:()=>Is,Compress:()=>m_,DecodeUTF8:()=>Ns,Decompress:()=>S_,Deflate:()=>Ue,EncodeUTF8:()=>bs,FlateErrorCode:()=>hs,Gunzip:()=>Lt,Gzip:()=>m_,Inflate:()=>Re,Unzip:()=>Ds,UnzipInflate:()=>vs,UnzipPassThrough:()=>Vr,Unzlib:()=>Ct,Zip:()=>Ls,ZipDeflate:()=>xs,ZipPassThrough:()=>jn,Zlib:()=>g_,compress:()=>gs,compressSync:()=>T_,decompress:()=>ys,decompressSync:()=>Es,deflate:()=>Pr,deflateSync:()=>Jn,gunzip:()=>Or,gunzipSync:()=>Rt,gzip:()=>gs,gzipSync:()=>T_,inflate:()=>C_,inflateSync:()=>On,strFromU8:()=>M_,strToU8:()=>tn,unzip:()=>Ps,unzipSync:()=>Us,unzlib:()=>Gr,unzlibSync:()=>vt,zip:()=>Rs,zipSync:()=>Cs,zlib:()=>Ss,zlibSync:()=>I_});function un(t,e){return typeof t=="function"&&(e=t,t={}),this.ondata=e,t}function Pr(t,e,n){return n||(n=e,e={}),typeof n!="function"&&v(7),Pn(t,e,[Dn],function(_){return _n(Jn(_.data[0],_.data[1]))},0,n)}function Jn(t,e){return fn(t,e||{},0,0)}function C_(t,e,n){return n||(n=e,e={}),typeof n!="function"&&v(7),Pn(t,e,[Mn],function(_){return _n(On(_.data[0],E_(_.data[1])))},1,n)}function On(t,e){return Kn(t,{i:2},e&&e.out,e&&e.dictionary)}function gs(t,e,n){return n||(n=e,e={}),typeof n!="function"&&v(7),Pn(t,e,[Dn,Lr,function(){return[T_]}],function(_){return _n(T_(_.data[0],_.data[1]))},2,n)}function T_(t,e){e||(e={});var n=vn(),_=t.length;n.p(t);var i=fn(t,e,x_(e),8),r=i.length;return N_(i,e),K(i,r-8,n.d()),K(i,r-4,_),i}function Or(t,e,n){return n||(n=e,e={}),typeof n!="function"&&v(7),Pn(t,e,[Mn,Rr,function(){return[Rt]}],function(_){return _n(Rt(_.data[0],_.data[1]))},3,n)}function Rt(t,e){var n=b_(t);return n+8>t.length&&v(6,"invalid gzip data"),Kn(t.subarray(n,-8),{i:2},e&&e.out||new H(Mr(t)),e&&e.dictionary)}function Ss(t,e,n){return n||(n=e,e={}),typeof n!="function"&&v(7),Pn(t,e,[Dn,Cr,function(){return[I_]}],function(_){return _n(I_(_.data[0],_.data[1]))},4,n)}function I_(t,e){e||(e={});var n=Pt();n.p(t);var _=fn(t,e,e.dictionary?6:2,4);return w_(_,e),K(_,_.length-4,n.d()),_}function Gr(t,e,n){return n||(n=e,e={}),typeof n!="function"&&v(7),Pn(t,e,[Mn,vr,function(){return[vt]}],function(_){return _n(vt(_.data[0],E_(_.data[1])))},5,n)}function vt(t,e){return Kn(t.subarray(L_(t,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}function ys(t,e,n){return n||(n=e,e={}),typeof n!="function"&&v(7),t[0]==31&&t[1]==139&&t[2]==8?Or(t,e,n):(t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31?C_(t,e,n):Gr(t,e,n)}function Es(t,e){return t[0]==31&&t[1]==139&&t[2]==8?Rt(t,e):(t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31?On(t,e):vt(t,e)}function tn(t,e){if(e){for(var n=new H(t.length),_=0;_<t.length;++_)n[_]=t.charCodeAt(_);return n}if(pr)return pr.encode(t);for(var i=t.length,r=new H(t.length+(t.length>>1)),s=0,o=function(l){r[s++]=l},_=0;_<i;++_){if(s+5>r.length){var a=new H(s+8+(i-_<<1));a.set(r),r=a}var d=t.charCodeAt(_);d<128||e?o(d):d<2048?(o(192|d>>6),o(128|d&63)):d>55295&&d<57344?(d=65536+(d&1047552)|t.charCodeAt(++_)&1023,o(240|d>>18),o(128|d>>12&63),o(128|d>>6&63),o(128|d&63)):(o(224|d>>12),o(128|d>>6&63),o(128|d&63))}return Pe(r,0,s)}function M_(t,e){if(e){for(var n="",_=0;_<t.length;_+=16384)n+=String.fromCharCode.apply(null,t.subarray(_,_+16384));return n}else{if(A_)return A_.decode(t);var i=Br(t),r=i.s,n=i.r;return n.length&&v(8),r}}function Rs(t,e,n){n||(n=e,e={}),typeof n!="function"&&v(7);var _={};v_(t,"",_,e);var i=Object.keys(_),r=i.length,s=0,o=0,a=r,d=new Array(r),l=[],c=function(){for(var h=0;h<l.length;++h)l[h]()},p=function(h,A){Mt(function(){n(h,A)})};Mt(function(){p=n});var f=function(){var h=new H(o+22),A=s,b=o-s;o=0;for(var y=0;y<a;++y){var u=d[y];try{var T=u.c.length;wn(h,o,u,u.f,u.u,T);var m=30+u.f.length+nn(u.extra),E=o+m;h.set(u.c,E),wn(h,s,u,u.f,u.u,T,o,u.m),s+=16+m+(u.m?u.m.length:0),o=E+T}catch(S){return p(S,null)}}D_(h,s,d.length,b,A),p(null,h)};r||f();for(var I=function(h){var A=i[h],b=_[A],y=b[0],u=b[1],T=vn(),m=y.length;T.p(y);var E=tn(A),S=E.length,N=u.comment,x=N&&tn(N),C=x&&x.length,L=nn(u.extra),ne=u.level==0?0:8,k=function(G,B){if(G)c(),p(G,null);else{var U=B.length;d[h]=qn(u,{size:m,crc:T.d(),c:B,f:E,m:x,u:S!=A.length||x&&N.length!=C,compression:ne}),s+=30+S+L+U,o+=76+2*(S+L)+(C||0)+U,--r||f()}};if(S>65535&&k(v(11,0,1),null),!ne)k(null,y);else if(m<16e4)try{k(null,Jn(y,u))}catch(G){k(G,null)}else l.push(Pr(y,u,k))},g=0;g<a;++g)I(g);return c}function Cs(t,e){e||(e={});var n={},_=[];v_(t,"",n,e);var i=0,r=0;for(var s in n){var o=n[s],a=o[0],d=o[1],l=d.level==0?0:8,c=tn(s),p=c.length,f=d.comment,I=f&&tn(f),g=I&&I.length,h=nn(d.extra);p>65535&&v(11);var A=l?Jn(a,d):a,b=A.length,y=vn();y.p(a),_.push(qn(d,{size:a.length,crc:y.d(),c:A,f:c,m:I,u:p!=s.length||I&&f.length!=g,o:i,compression:l})),i+=30+p+h+b,r+=76+2*(p+h)+(g||0)+b}for(var u=new H(r+22),T=i,m=r-i,E=0;E<_.length;++E){var c=_[E];wn(u,c.o,c,c.f,c.u,c.c.length);var S=30+c.f.length+nn(c.extra);u.set(c.c,c.o+S),wn(u,i,c,c.f,c.u,c.c.length,c.o,c.m),i+=16+S+(c.m?c.m.length:0)}return D_(u,i,_.length,m,T),u}function Ps(t,e,n){n||(n=e,e={}),typeof n!="function"&&v(7);var _=[],i=function(){for(var h=0;h<_.length;++h)_[h]()},r={},s=function(h,A){Mt(function(){n(h,A)})};Mt(function(){s=n});for(var o=t.length-22;oe(t,o)!=101010256;--o)if(!o||t.length-o>65558)return s(v(13,0,1),null),i;var a=we(t,o+8);if(a){var d=a,l=oe(t,o+16),c=oe(t,o-20)==117853008;if(c){var p=oe(t,o-12);c=oe(t,p)==101075792,c&&(d=a=oe(t,p+32),l=oe(t,p+48))}for(var f=e&&e.filter,I=function(h){var A=Wr(t,l,c),b=A[0],y=A[1],u=A[2],T=A[3],m=A[4],E=A[5],S=kr(t,E);l=m;var N=function(C,L){C?(i(),s(C,null)):(L&&(r[T]=L),--a||s(null,r))};if(!f||f({name:T,size:y,originalSize:u,compression:b}))if(!b)N(null,Pe(t,S,S+y));else if(b==8){var x=t.subarray(S,S+y);if(u<524288||y>.8*u)try{N(null,On(x,{out:new H(u)}))}catch(C){N(C,null)}else _.push(C_(x,{size:u},N))}else N(v(14,"unknown compression type "+b,1),null);else N(null,null)},g=0;g<d;++g)I(g)}else s(null,{});return i}function Us(t,e){for(var n={},_=t.length-22;oe(t,_)!=101010256;--_)(!_||t.length-_>65558)&&v(13);var i=we(t,_+8);if(!i)return{};var r=oe(t,_+16),s=oe(t,_-20)==117853008;if(s){var o=oe(t,_-12);s=oe(t,o)==101075792,s&&(i=oe(t,o+32),r=oe(t,o+48))}for(var a=e&&e.filter,d=0;d<i;++d){var l=Wr(t,r,s),c=l[0],p=l[1],f=l[2],I=l[3],g=l[4],h=l[5],A=kr(t,h);r=g,(!a||a({name:I,size:p,originalSize:f,compression:c}))&&(c?c==8?n[I]=On(t.subarray(A,A+p),{out:new H(f)}):v(14,"unknown compression type "+c):n[I]=Pe(t,A,A+p))}return n}var fr,ps,H,Le,Yn,Ln,Rn,Vn,hr,mr,y_,xt,Tr,gr,u_,zn,Ye,q,De,Ke,q,q,q,q,xn,q,Ir,Sr,Ar,yr,Et,Me,Nt,Cn,Pe,hs,Er,v,Kn,Xe,Nn,bt,wt,p_,bn,Dt,h_,Nr,ke,br,xr,vn,Pt,fn,qn,ur,yt,ms,wr,Mn,Dn,Lr,Rr,Cr,vr,_n,E_,Pn,Oe,Un,we,oe,f_,K,N_,b_,Mr,x_,w_,L_,Ue,Dr,Re,R_,m_,Ts,Lt,Ur,g_,Is,Ct,Fr,S_,As,v_,pr,A_,Hr,Br,Ns,bs,Xr,kr,Wr,$r,nn,wn,D_,jn,xs,ws,Ls,Vr,vs,Ms,Ds,Mt,jr=cs(()=>{fr={},ps=(function(t,e,n,_,i){var r=new Worker(fr[e]||(fr[e]=URL.createObjectURL(new Blob([t+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return r.onmessage=function(s){var o=s.data,a=o.$e$;if(a){var d=new Error(a[0]);d.code=a[1],d.stack=a[2],i(d,null)}else i(null,o)},r.postMessage(n,_),r}),H=Uint8Array,Le=Uint16Array,Yn=Int32Array,Ln=new H([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Rn=new H([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Vn=new H([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),hr=function(t,e){for(var n=new Le(31),_=0;_<31;++_)n[_]=e+=1<<t[_-1];for(var i=new Yn(n[30]),_=1;_<30;++_)for(var r=n[_];r<n[_+1];++r)i[r]=r-n[_]<<5|_;return{b:n,r:i}},mr=hr(Ln,2),y_=mr.b,xt=mr.r;y_[28]=258,xt[258]=28;Tr=hr(Rn,0),gr=Tr.b,u_=Tr.r,zn=new Le(32768);for(q=0;q<32768;++q)Ye=(q&43690)>>1|(q&21845)<<1,Ye=(Ye&52428)>>2|(Ye&13107)<<2,Ye=(Ye&61680)>>4|(Ye&3855)<<4,zn[q]=((Ye&65280)>>8|(Ye&255)<<8)>>1;De=(function(t,e,n){for(var _=t.length,i=0,r=new Le(e);i<_;++i)t[i]&&++r[t[i]-1];var s=new Le(e);for(i=1;i<e;++i)s[i]=s[i-1]+r[i-1]<<1;var o;if(n){o=new Le(1<<e);var a=15-e;for(i=0;i<_;++i)if(t[i])for(var d=i<<4|t[i],l=e-t[i],c=s[t[i]-1]++<<l,p=c|(1<<l)-1;c<=p;++c)o[zn[c]>>a]=d}else for(o=new Le(_),i=0;i<_;++i)t[i]&&(o[i]=zn[s[t[i]-1]++]>>15-t[i]);return o}),Ke=new H(288);for(q=0;q<144;++q)Ke[q]=8;for(q=144;q<256;++q)Ke[q]=9;for(q=256;q<280;++q)Ke[q]=7;for(q=280;q<288;++q)Ke[q]=8;xn=new H(32);for(q=0;q<32;++q)xn[q]=5;Ir=De(Ke,9,0),Sr=De(Ke,9,1),Ar=De(xn,5,0),yr=De(xn,5,1),Et=function(t){for(var e=t[0],n=1;n<t.length;++n)t[n]>e&&(e=t[n]);return e},Me=function(t,e,n){var _=e/8|0;return(t[_]|t[_+1]<<8)>>(e&7)&n},Nt=function(t,e){var n=e/8|0;return(t[n]|t[n+1]<<8|t[n+2]<<16)>>(e&7)},Cn=function(t){return(t+7)/8|0},Pe=function(t,e,n){return(e==null||e<0)&&(e=0),(n==null||n>t.length)&&(n=t.length),new H(t.subarray(e,n))},hs={UnexpectedEOF:0,InvalidBlockType:1,InvalidLengthLiteral:2,InvalidDistance:3,StreamFinished:4,NoStreamHandler:5,InvalidHeader:6,NoCallback:7,InvalidUTF8:8,ExtraFieldTooLong:9,InvalidDate:10,FilenameTooLong:11,StreamFinishing:12,InvalidZipData:13,UnknownCompressionMethod:14},Er=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],v=function(t,e,n){var _=new Error(e||Er[t]);if(_.code=t,Error.captureStackTrace&&Error.captureStackTrace(_,v),!n)throw _;return _},Kn=function(t,e,n,_){var i=t.length,r=_?_.length:0;if(!i||e.f&&!e.l)return n||new H(0);var s=!n,o=s||e.i!=2,a=e.i;s&&(n=new H(i*3));var d=function(be){var w=n.length;if(be>w){var Q=new H(Math.max(w*2,be));Q.set(n),n=Q}},l=e.f||0,c=e.p||0,p=e.b||0,f=e.l,I=e.d,g=e.m,h=e.n,A=i*8;do{if(!f){l=Me(t,c,1);var b=Me(t,c+1,3);if(c+=3,b)if(b==1)f=Sr,I=yr,g=9,h=5;else if(b==2){var m=Me(t,c,31)+257,E=Me(t,c+10,15)+4,S=m+Me(t,c+5,31)+1;c+=14;for(var N=new H(S),x=new H(19),C=0;C<E;++C)x[Vn[C]]=Me(t,c+C*3,7);c+=E*3;for(var L=Et(x),ne=(1<<L)-1,k=De(x,L,1),C=0;C<S;){var G=k[Me(t,c,ne)];c+=G&15;var y=G>>4;if(y<16)N[C++]=y;else{var B=0,U=0;for(y==16?(U=3+Me(t,c,3),c+=2,B=N[C-1]):y==17?(U=3+Me(t,c,7),c+=3):y==18&&(U=11+Me(t,c,127),c+=7);U--;)N[C++]=B}}var R=N.subarray(0,m),W=N.subarray(m);g=Et(R),h=Et(W),f=De(R,g,1),I=De(W,h,1)}else v(1);else{var y=Cn(c)+4,u=t[y-4]|t[y-3]<<8,T=y+u;if(T>i){a&&v(0);break}o&&d(p+u),n.set(t.subarray(y,T),p),e.b=p+=u,e.p=c=T*8,e.f=l;continue}if(c>A){a&&v(0);break}}o&&d(p+131072);for(var pe=(1<<g)-1,te=(1<<h)-1,Ae=c;;Ae=c){var B=f[Nt(t,c)&pe],re=B>>4;if(c+=B&15,c>A){a&&v(0);break}if(B||v(2),re<256)n[p++]=re;else if(re==256){Ae=c,f=null;break}else{var ie=re-254;if(re>264){var C=re-257,_e=Ln[C];ie=Me(t,c,(1<<_e)-1)+y_[C],c+=_e}var Y=I[Nt(t,c)&te],D=Y>>4;Y||v(3),c+=Y&15;var W=gr[D];if(D>3){var _e=Rn[D];W+=Nt(t,c)&(1<<_e)-1,c+=_e}if(c>A){a&&v(0);break}o&&d(p+131072);var P=p+ie;if(p<W){var V=r-W,ce=Math.min(W,P);for(V+p<0&&v(3);p<ce;++p)n[p]=_[V+p]}for(;p<P;++p)n[p]=n[p-W]}}e.l=f,e.p=Ae,e.b=p,e.f=l,f&&(l=1,e.m=g,e.d=I,e.n=h)}while(!l);return p!=n.length&&s?Pe(n,0,p):n.subarray(0,p)},Xe=function(t,e,n){n<<=e&7;var _=e/8|0;t[_]|=n,t[_+1]|=n>>8},Nn=function(t,e,n){n<<=e&7;var _=e/8|0;t[_]|=n,t[_+1]|=n>>8,t[_+2]|=n>>16},bt=function(t,e){for(var n=[],_=0;_<t.length;++_)t[_]&&n.push({s:_,f:t[_]});var i=n.length,r=n.slice();if(!i)return{t:ke,l:0};if(i==1){var s=new H(n[0].s+1);return s[n[0].s]=1,{t:s,l:1}}n.sort(function(T,m){return T.f-m.f}),n.push({s:-1,f:25001});var o=n[0],a=n[1],d=0,l=1,c=2;for(n[0]={s:-1,f:o.f+a.f,l:o,r:a};l!=i-1;)o=n[n[d].f<n[c].f?d++:c++],a=n[d!=l&&n[d].f<n[c].f?d++:c++],n[l++]={s:-1,f:o.f+a.f,l:o,r:a};for(var p=r[0].s,_=1;_<i;++_)r[_].s>p&&(p=r[_].s);var f=new Le(p+1),I=wt(n[l-1],f,0);if(I>e){var _=0,g=0,h=I-e,A=1<<h;for(r.sort(function(m,E){return f[E.s]-f[m.s]||m.f-E.f});_<i;++_){var b=r[_].s;if(f[b]>e)g+=A-(1<<I-f[b]),f[b]=e;else break}for(g>>=h;g>0;){var y=r[_].s;f[y]<e?g-=1<<e-f[y]++-1:++_}for(;_>=0&&g;--_){var u=r[_].s;f[u]==e&&(--f[u],++g)}I=e}return{t:new H(f),l:I}},wt=function(t,e,n){return t.s==-1?Math.max(wt(t.l,e,n+1),wt(t.r,e,n+1)):e[t.s]=n},p_=function(t){for(var e=t.length;e&&!t[--e];);for(var n=new Le(++e),_=0,i=t[0],r=1,s=function(a){n[_++]=a},o=1;o<=e;++o)if(t[o]==i&&o!=e)++r;else{if(!i&&r>2){for(;r>138;r-=138)s(32754);r>2&&(s(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(s(i),--r;r>6;r-=6)s(8304);r>2&&(s(r-3<<5|8208),r=0)}for(;r--;)s(i);r=1,i=t[o]}return{c:n.subarray(0,_),n:e}},bn=function(t,e){for(var n=0,_=0;_<e.length;++_)n+=t[_]*e[_];return n},Dt=function(t,e,n){var _=n.length,i=Cn(e+2);t[i]=_&255,t[i+1]=_>>8,t[i+2]=t[i]^255,t[i+3]=t[i+1]^255;for(var r=0;r<_;++r)t[i+r+4]=n[r];return(i+4+_)*8},h_=function(t,e,n,_,i,r,s,o,a,d,l){Xe(e,l++,n),++i[256];for(var c=bt(i,15),p=c.t,f=c.l,I=bt(r,15),g=I.t,h=I.l,A=p_(p),b=A.c,y=A.n,u=p_(g),T=u.c,m=u.n,E=new Le(19),S=0;S<b.length;++S)++E[b[S]&31];for(var S=0;S<T.length;++S)++E[T[S]&31];for(var N=bt(E,7),x=N.t,C=N.l,L=19;L>4&&!x[Vn[L-1]];--L);var ne=d+5<<3,k=bn(i,Ke)+bn(r,xn)+s,G=bn(i,p)+bn(r,g)+s+14+3*L+bn(E,x)+2*E[16]+3*E[17]+7*E[18];if(a>=0&&ne<=k&&ne<=G)return Dt(e,l,t.subarray(a,a+d));var B,U,R,W;if(Xe(e,l,1+(G<k)),l+=2,G<k){B=De(p,f,0),U=p,R=De(g,h,0),W=g;var pe=De(x,C,0);Xe(e,l,y-257),Xe(e,l+5,m-1),Xe(e,l+10,L-4),l+=14;for(var S=0;S<L;++S)Xe(e,l+3*S,x[Vn[S]]);l+=3*L;for(var te=[b,T],Ae=0;Ae<2;++Ae)for(var re=te[Ae],S=0;S<re.length;++S){var ie=re[S]&31;Xe(e,l,pe[ie]),l+=x[ie],ie>15&&(Xe(e,l,re[S]>>5&127),l+=re[S]>>12)}}else B=Ir,U=Ke,R=Ar,W=xn;for(var S=0;S<o;++S){var _e=_[S];if(_e>255){var ie=_e>>18&31;Nn(e,l,B[ie+257]),l+=U[ie+257],ie>7&&(Xe(e,l,_e>>23&31),l+=Ln[ie]);var Y=_e&31;Nn(e,l,R[Y]),l+=W[Y],Y>3&&(Nn(e,l,_e>>5&8191),l+=Rn[Y])}else Nn(e,l,B[_e]),l+=U[_e]}return Nn(e,l,B[256]),l+U[256]},Nr=new Yn([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),ke=new H(0),br=function(t,e,n,_,i,r){var s=r.z||t.length,o=new H(_+s+5*(1+Math.ceil(s/7e3))+i),a=o.subarray(_,o.length-i),d=r.l,l=(r.r||0)&7;if(e){l&&(a[0]=r.r>>3);for(var c=Nr[e-1],p=c>>13,f=c&8191,I=(1<<n)-1,g=r.p||new Le(32768),h=r.h||new Le(I+1),A=Math.ceil(n/3),b=2*A,y=function(Ee){return(t[Ee]^t[Ee+1]<<A^t[Ee+2]<<b)&I},u=new Yn(25e3),T=new Le(288),m=new Le(32),E=0,S=0,N=r.i||0,x=0,C=r.w||0,L=0;N+2<s;++N){var ne=y(N),k=N&32767,G=h[ne];if(g[k]=G,h[ne]=k,C<=N){var B=s-N;if((E>7e3||x>24576)&&(B>423||!d)){l=h_(t,a,0,u,T,m,S,x,L,N-L,l),x=E=S=0,L=N;for(var U=0;U<286;++U)T[U]=0;for(var U=0;U<30;++U)m[U]=0}var R=2,W=0,pe=f,te=k-G&32767;if(B>2&&ne==y(N-te))for(var Ae=Math.min(p,B)-1,re=Math.min(32767,N),ie=Math.min(258,B);te<=re&&--pe&&k!=G;){if(t[N+R]==t[N+R-te]){for(var _e=0;_e<ie&&t[N+_e]==t[N+_e-te];++_e);if(_e>R){if(R=_e,W=te,_e>Ae)break;for(var Y=Math.min(te,_e-2),D=0,U=0;U<Y;++U){var P=N-te+U&32767,V=g[P],ce=P-V&32767;ce>D&&(D=ce,G=P)}}}k=G,G=g[k],te+=k-G&32767}if(W){u[x++]=268435456|xt[R]<<18|u_[W];var be=xt[R]&31,w=u_[W]&31;S+=Ln[be]+Rn[w],++T[257+be],++m[w],C=N+R,++E}else u[x++]=t[N],++T[t[N]]}}for(N=Math.max(N,C);N<s;++N)u[x++]=t[N],++T[t[N]];l=h_(t,a,d,u,T,m,S,x,L,N-L,l),d||(r.r=l&7|a[l/8|0]<<3,l-=7,r.h=h,r.p=g,r.i=N,r.w=C)}else{for(var N=r.w||0;N<s+d;N+=65535){var Q=N+65535;Q>=s&&(a[l/8|0]=d,Q=s),l=Dt(a,l+1,t.subarray(N,Q))}r.i=s}return Pe(o,0,_+Cn(l)+i)},xr=(function(){for(var t=new Int32Array(256),e=0;e<256;++e){for(var n=e,_=9;--_;)n=(n&1&&-306674912)^n>>>1;t[e]=n}return t})(),vn=function(){var t=-1;return{p:function(e){for(var n=t,_=0;_<e.length;++_)n=xr[n&255^e[_]]^n>>>8;t=n},d:function(){return~t}}},Pt=function(){var t=1,e=0;return{p:function(n){for(var _=t,i=e,r=n.length|0,s=0;s!=r;){for(var o=Math.min(s+2655,r);s<o;++s)i+=_+=n[s];_=(_&65535)+15*(_>>16),i=(i&65535)+15*(i>>16)}t=_,e=i},d:function(){return t%=65521,e%=65521,(t&255)<<24|(t&65280)<<8|(e&255)<<8|e>>8}}},fn=function(t,e,n,_,i){if(!i&&(i={l:1},e.dictionary)){var r=e.dictionary.subarray(-32768),s=new H(r.length+t.length);s.set(r),s.set(t,r.length),t=s,i.w=r.length}return br(t,e.level==null?6:e.level,e.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(t.length)))*1.5):20:12+e.mem,n,_,i)},qn=function(t,e){var n={};for(var _ in t)n[_]=t[_];for(var _ in e)n[_]=e[_];return n},ur=function(t,e,n){for(var _=t(),i=t.toString(),r=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),s=0;s<_.length;++s){var o=_[s],a=r[s];if(typeof o=="function"){e+=";"+a+"=";var d=o.toString();if(o.prototype)if(d.indexOf("[native code]")!=-1){var l=d.indexOf(" ",8)+1;e+=d.slice(l,d.indexOf("(",l))}else{e+=d;for(var c in o.prototype)e+=";"+a+".prototype."+c+"="+o.prototype[c].toString()}else e+=d}else n[a]=o}return e},yt=[],ms=function(t){var e=[];for(var n in t)t[n].buffer&&e.push((t[n]=new t[n].constructor(t[n])).buffer);return e},wr=function(t,e,n,_){if(!yt[n]){for(var i="",r={},s=t.length-1,o=0;o<s;++o)i=ur(t[o],i,r);yt[n]={c:ur(t[s],i,r),e:r}}var a=qn({},yt[n].e);return ps(yt[n].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",n,a,ms(a),_)},Mn=function(){return[H,Le,Yn,Ln,Rn,Vn,y_,gr,Sr,yr,zn,Er,De,Et,Me,Nt,Cn,Pe,v,Kn,On,_n,E_]},Dn=function(){return[H,Le,Yn,Ln,Rn,Vn,xt,u_,Ir,Ke,Ar,xn,zn,Nr,ke,De,Xe,Nn,bt,wt,p_,bn,Dt,h_,Cn,Pe,br,fn,Jn,_n]},Lr=function(){return[N_,x_,K,vn,xr]},Rr=function(){return[b_,Mr]},Cr=function(){return[w_,K,Pt]},vr=function(){return[L_]},_n=function(t){return postMessage(t,[t.buffer])},E_=function(t){return t&&{out:t.size&&new H(t.size),dictionary:t.dictionary}},Pn=function(t,e,n,_,i,r){var s=wr(n,_,i,function(o,a){s.terminate(),r(o,a)});return s.postMessage([t,e],e.consume?[t.buffer]:[]),function(){s.terminate()}},Oe=function(t){return t.ondata=function(e,n){return postMessage([e,n],[e.buffer])},function(e){e.data[0]?(t.push(e.data[0],e.data[1]),postMessage([e.data[0].length])):t.flush(e.data[1])}},Un=function(t,e,n,_,i,r,s){var o,a=wr(t,_,i,function(d,l){d?(a.terminate(),e.ondata.call(e,d)):Array.isArray(l)?l.length==1?(e.queuedSize-=l[0],e.ondrain&&e.ondrain(l[0])):(l[1]&&a.terminate(),e.ondata.call(e,d,l[0],l[1])):s(l)});a.postMessage(n),e.queuedSize=0,e.push=function(d,l){e.ondata||v(5),o&&e.ondata(v(4,0,1),null,!!l),e.queuedSize+=d.length,a.postMessage([d,o=l],d.buffer instanceof ArrayBuffer?[d.buffer]:[])},e.terminate=function(){a.terminate()},r&&(e.flush=function(d){a.postMessage([0,d])})},we=function(t,e){return t[e]|t[e+1]<<8},oe=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},f_=function(t,e){return oe(t,e)+oe(t,e+4)*4294967296},K=function(t,e,n){for(;n;++e)t[e]=n,n>>>=8},N_=function(t,e){var n=e.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=e.level<2?4:e.level==9?2:0,t[9]=3,e.mtime!=0&&K(t,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),n){t[3]=8;for(var _=0;_<=n.length;++_)t[_+10]=n.charCodeAt(_)}},b_=function(t){(t[0]!=31||t[1]!=139||t[2]!=8)&&v(6,"invalid gzip data");var e=t[3],n=10;e&4&&(n+=(t[10]|t[11]<<8)+2);for(var _=(e>>3&1)+(e>>4&1);_>0;_-=!t[n++]);return n+(e&2)},Mr=function(t){var e=t.length;return(t[e-4]|t[e-3]<<8|t[e-2]<<16|t[e-1]<<24)>>>0},x_=function(t){return 10+(t.filename?t.filename.length+1:0)},w_=function(t,e){var n=e.level,_=n==0?0:n<6?1:n==9?3:2;if(t[0]=120,t[1]=_<<6|(e.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,e.dictionary){var i=Pt();i.p(e.dictionary),K(t,2,i.d())}},L_=function(t,e){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&v(6,"invalid zlib data"),(t[1]>>5&1)==+!e&&v(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};Ue=(function(){function t(e,n){if(typeof e=="function"&&(n=e,e={}),this.ondata=n,this.o=e||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new H(98304),this.o.dictionary){var _=this.o.dictionary.subarray(-32768);this.b.set(_,32768-_.length),this.s.i=32768-_.length}}return t.prototype.p=function(e,n){this.ondata(fn(e,this.o,0,0,this.s),n)},t.prototype.push=function(e,n){this.ondata||v(5),this.s.l&&v(4);var _=e.length+this.s.z;if(_>this.b.length){if(_>2*this.b.length-32768){var i=new H(_&-32768);i.set(this.b.subarray(0,this.s.z)),this.b=i}var r=this.b.length-this.s.z;this.b.set(e.subarray(0,r),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(e.subarray(r),32768),this.s.z=e.length-r+32768,this.s.i=32766,this.s.w=32768}else this.b.set(e,this.s.z),this.s.z+=e.length;this.s.l=n&1,(this.s.z>this.s.w+8191||n)&&(this.p(this.b,n||!1),this.s.w=this.s.i,this.s.i-=2),n&&(this.s=this.o={},this.b=ke)},t.prototype.flush=function(e){if(this.ondata||v(5),this.s.l&&v(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2,e){var n=new H(6);n[0]=this.s.r>>3;var _=Dt(n,this.s.r,ke);this.s.r=0,this.ondata(n.subarray(0,_>>3),!1)}},t})(),Dr=(function(){function t(e,n){Un([Dn,function(){return[Oe,Ue]}],this,un.call(this,e,n),function(_){var i=new Ue(_.data);onmessage=Oe(i)},6,1)}return t})();Re=(function(){function t(e,n){typeof e=="function"&&(n=e,e={}),this.ondata=n;var _=e&&e.dictionary&&e.dictionary.subarray(-32768);this.s={i:0,b:_?_.length:0},this.o=new H(32768),this.p=new H(0),_&&this.o.set(_)}return t.prototype.e=function(e){if(this.ondata||v(5),this.d&&v(4),!this.p.length)this.p=e;else if(e.length){var n=new H(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length),this.p=n}},t.prototype.c=function(e){this.s.i=+(this.d=e||!1);var n=this.s.b,_=Kn(this.p,this.s,this.o);this.ondata(Pe(_,n,this.s.b),this.d),this.o=Pe(_,this.s.b-32768),this.s.b=this.o.length,this.p=Pe(this.p,this.s.p/8|0),this.s.p&=7},t.prototype.push=function(e,n){this.e(e),this.c(n)},t})(),R_=(function(){function t(e,n){Un([Mn,function(){return[Oe,Re]}],this,un.call(this,e,n),function(_){var i=new Re(_.data);onmessage=Oe(i)},7,0)}return t})();m_=(function(){function t(e,n){this.c=vn(),this.l=0,this.v=1,Ue.call(this,e,n)}return t.prototype.push=function(e,n){this.c.p(e),this.l+=e.length,Ue.prototype.push.call(this,e,n)},t.prototype.p=function(e,n){var _=fn(e,this.o,this.v&&x_(this.o),n&&8,this.s);this.v&&(N_(_,this.o),this.v=0),n&&(K(_,_.length-8,this.c.d()),K(_,_.length-4,this.l)),this.ondata(_,n)},t.prototype.flush=function(e){Ue.prototype.flush.call(this,e)},t})(),Ts=(function(){function t(e,n){Un([Dn,Lr,function(){return[Oe,Ue,m_]}],this,un.call(this,e,n),function(_){var i=new m_(_.data);onmessage=Oe(i)},8,1)}return t})();Lt=(function(){function t(e,n){this.v=1,this.r=0,Re.call(this,e,n)}return t.prototype.push=function(e,n){if(Re.prototype.e.call(this,e),this.r+=e.length,this.v){var _=this.p.subarray(this.v-1),i=_.length>3?b_(_):4;if(i>_.length){if(!n)return}else this.v>1&&this.onmember&&this.onmember(this.r-_.length);this.p=_.subarray(i),this.v=0}Re.prototype.c.call(this,0),this.s.f&&!this.s.l?(this.v=Cn(this.s.p)+9,this.s={i:0},this.o=new H(0),this.push(new H(0),n)):n&&Re.prototype.c.call(this,n)},t})(),Ur=(function(){function t(e,n){var _=this;Un([Mn,Rr,function(){return[Oe,Re,Lt]}],this,un.call(this,e,n),function(i){var r=new Lt(i.data);r.onmember=function(s){return postMessage(s)},onmessage=Oe(r)},9,0,function(i){return _.onmember&&_.onmember(i)})}return t})();g_=(function(){function t(e,n){this.c=Pt(),this.v=1,Ue.call(this,e,n)}return t.prototype.push=function(e,n){this.c.p(e),Ue.prototype.push.call(this,e,n)},t.prototype.p=function(e,n){var _=fn(e,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(w_(_,this.o),this.v=0),n&&K(_,_.length-4,this.c.d()),this.ondata(_,n)},t.prototype.flush=function(e){Ue.prototype.flush.call(this,e)},t})(),Is=(function(){function t(e,n){Un([Dn,Cr,function(){return[Oe,Ue,g_]}],this,un.call(this,e,n),function(_){var i=new g_(_.data);onmessage=Oe(i)},10,1)}return t})();Ct=(function(){function t(e,n){Re.call(this,e,n),this.v=e&&e.dictionary?2:1}return t.prototype.push=function(e,n){if(Re.prototype.e.call(this,e),this.v){if(this.p.length<6&&!n)return;this.p=this.p.subarray(L_(this.p,this.v-1)),this.v=0}n&&(this.p.length<4&&v(6,"invalid zlib data"),this.p=this.p.subarray(0,-4)),Re.prototype.c.call(this,n)},t})(),Fr=(function(){function t(e,n){Un([Mn,vr,function(){return[Oe,Re,Ct]}],this,un.call(this,e,n),function(_){var i=new Ct(_.data);onmessage=Oe(i)},11,0)}return t})();S_=(function(){function t(e,n){this.o=un.call(this,e,n)||{},this.G=Lt,this.I=Re,this.Z=Ct}return t.prototype.i=function(){var e=this;this.s.ondata=function(n,_){e.ondata(n,_)}},t.prototype.push=function(e,n){if(this.ondata||v(5),this.s)this.s.push(e,n);else{if(this.p&&this.p.length){var _=new H(this.p.length+e.length);_.set(this.p),_.set(e,this.p.length)}else this.p=e;this.p.length>2&&(this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(this.o):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(this.o):new this.Z(this.o),this.i(),this.s.push(this.p,n),this.p=null)}},t})(),As=(function(){function t(e,n){S_.call(this,e,n),this.queuedSize=0,this.G=Ur,this.I=R_,this.Z=Fr}return t.prototype.i=function(){var e=this;this.s.ondata=function(n,_,i){e.ondata(n,_,i)},this.s.ondrain=function(n){e.queuedSize-=n,e.ondrain&&e.ondrain(n)}},t.prototype.push=function(e,n){this.queuedSize+=e.length,S_.prototype.push.call(this,e,n)},t})();v_=function(t,e,n,_){for(var i in t){var r=t[i],s=e+i,o=_;Array.isArray(r)&&(o=qn(_,r[1]),r=r[0]),ArrayBuffer.isView(r)?n[s]=[r,o]:(n[s+="/"]=[new H(0),o],v_(r,s,n,_))}},pr=typeof TextEncoder<"u"&&new TextEncoder,A_=typeof TextDecoder<"u"&&new TextDecoder,Hr=0;try{A_.decode(ke,{stream:!0}),Hr=1}catch{}Br=function(t){for(var e="",n=0;;){var _=t[n++],i=(_>127)+(_>223)+(_>239);if(n+i>t.length)return{s:e,r:Pe(t,n-1)};i?i==3?(_=((_&15)<<18|(t[n++]&63)<<12|(t[n++]&63)<<6|t[n++]&63)-65536,e+=String.fromCharCode(55296|_>>10,56320|_&1023)):i&1?e+=String.fromCharCode((_&31)<<6|t[n++]&63):e+=String.fromCharCode((_&15)<<12|(t[n++]&63)<<6|t[n++]&63):e+=String.fromCharCode(_)}},Ns=(function(){function t(e){this.ondata=e,Hr?this.t=new TextDecoder:this.p=ke}return t.prototype.push=function(e,n){if(this.ondata||v(5),n=!!n,this.t){this.ondata(this.t.decode(e,{stream:!0}),n),n&&(this.t.decode().length&&v(8),this.t=null);return}this.p||v(4);var _=new H(this.p.length+e.length);_.set(this.p),_.set(e,this.p.length);var i=Br(_),r=i.s,s=i.r;n?(s.length&&v(8),this.p=null):this.p=s,this.ondata(r,n)},t})(),bs=(function(){function t(e){this.ondata=e}return t.prototype.push=function(e,n){this.ondata||v(5),this.d&&v(4),this.ondata(tn(e),this.d=n||!1)},t})();Xr=function(t){return t==1?3:t<6?2:t==9?1:0},kr=function(t,e){return e+30+we(t,e+26)+we(t,e+28)},Wr=function(t,e,n){var _=we(t,e+28),i=we(t,e+30),r=M_(t.subarray(e+46,e+46+_),!(we(t,e+8)&2048)),s=e+46+_,o=$r(t,s,i,n,oe(t,e+20),oe(t,e+24),oe(t,e+42)),a=o[0],d=o[1],l=o[2];return[we(t,e+10),a,d,r,s+i+we(t,e+32),l]},$r=function(t,e,n,_,i,r,s){var o=i==4294967295,a=r==4294967295,d=s==4294967295,l=e+n,c=o+a+d;if(_&&c){for(;e+4<l;e+=4+we(t,e+2))if(we(t,e)==1)return[o?f_(t,e+4+8*a):i,a?f_(t,e+4):r,d?f_(t,e+4+8*(a+o)):s,1];_<2&&v(13)}return[i,r,s,0]},nn=function(t){var e=0;if(t)for(var n in t){var _=t[n].length;_>65535&&v(9),e+=_+4}return e},wn=function(t,e,n,_,i,r,s,o){var a=_.length,d=n.extra,l=o&&o.length,c=nn(d);K(t,e,s!=null?33639248:67324752),e+=4,s!=null&&(t[e++]=20,t[e++]=n.os),t[e]=20,e+=2,t[e++]=n.flag<<1|(r<0&&8),t[e++]=i&&8,t[e++]=n.compression&255,t[e++]=n.compression>>8;var p=new Date(n.mtime==null?Date.now():n.mtime),f=p.getFullYear()-1980;if((f<0||f>119)&&v(10),K(t,e,f<<25|p.getMonth()+1<<21|p.getDate()<<16|p.getHours()<<11|p.getMinutes()<<5|p.getSeconds()>>1),e+=4,r!=-1&&(K(t,e,n.crc),K(t,e+4,r<0?-r-2:r),K(t,e+8,n.size)),K(t,e+12,a),K(t,e+14,c),e+=16,s!=null&&(K(t,e,l),K(t,e+6,n.attrs),K(t,e+10,s),e+=14),t.set(_,e),e+=a,c)for(var I in d){var g=d[I],h=g.length;K(t,e,+I),K(t,e+2,h),t.set(g,e+4),e+=4+h}return l&&(t.set(o,e),e+=l),e},D_=function(t,e,n,_,i){K(t,e,101010256),K(t,e+8,n),K(t,e+10,n),K(t,e+12,_),K(t,e+16,i)},jn=(function(){function t(e){this.filename=e,this.c=vn(),this.size=0,this.compression=0}return t.prototype.process=function(e,n){this.ondata(null,e,n)},t.prototype.push=function(e,n){this.ondata||v(5),this.c.p(e),this.size+=e.length,n&&(this.crc=this.c.d()),this.process(e,n||!1)},t})(),xs=(function(){function t(e,n){var _=this;n||(n={}),jn.call(this,e),this.d=new Ue(n,function(i,r){_.ondata(null,i,r)}),this.compression=8,this.flag=Xr(n.level)}return t.prototype.process=function(e,n){try{this.d.push(e,n)}catch(_){this.ondata(_,null,n)}},t.prototype.push=function(e,n){jn.prototype.push.call(this,e,n)},t})(),ws=(function(){function t(e,n){var _=this;n||(n={}),jn.call(this,e),this.d=new Dr(n,function(i,r,s){_.ondata(i,r,s)}),this.compression=8,this.flag=Xr(n.level),this.terminate=this.d.terminate}return t.prototype.process=function(e,n){this.d.push(e,n)},t.prototype.push=function(e,n){jn.prototype.push.call(this,e,n)},t})(),Ls=(function(){function t(e){this.ondata=e,this.u=[],this.d=1}return t.prototype.add=function(e){var n=this;if(this.ondata||v(5),this.d&2)this.ondata(v(4+(this.d&1)*8,0,1),null,!1);else{var _=tn(e.filename),i=_.length,r=e.comment,s=r&&tn(r),o=i!=e.filename.length||s&&r.length!=s.length,a=i+nn(e.extra)+30;i>65535&&this.ondata(v(11,0,1),null,!1);var d=new H(a);wn(d,0,e,_,o,-1);var l=[d],c=function(){for(var h=0,A=l;h<A.length;h++){var b=A[h];n.ondata(null,b,!1)}l=[]},p=this.d;this.d=0;var f=this.u.length,I=qn(e,{f:_,u:o,o:s,t:function(){e.terminate&&e.terminate()},r:function(){if(c(),p){var h=n.u[f+1];h?h.r():n.d=1}p=1}}),g=0;e.ondata=function(h,A,b){if(h)n.ondata(h,A,b),n.terminate();else if(g+=A.length,l.push(A),b){var y=new H(16);K(y,0,134695760),K(y,4,e.crc),K(y,8,g),K(y,12,e.size),l.push(y),I.c=g,I.b=a+g+16,I.crc=e.crc,I.size=e.size,p&&I.r(),p=1}else p&&c()},this.u.push(I)}},t.prototype.end=function(){var e=this;if(this.d&2){this.ondata(v(4+(this.d&1)*8,0,1),null,!0);return}this.d?this.e():this.u.push({r:function(){e.d&1&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},t.prototype.e=function(){for(var e=0,n=0,_=0,i=0,r=this.u;i<r.length;i++){var s=r[i];_+=46+s.f.length+nn(s.extra)+(s.o?s.o.length:0)}for(var o=new H(_+22),a=0,d=this.u;a<d.length;a++){var s=d[a];wn(o,e,s,s.f,s.u,-s.c-2,n,s.o),e+=46+s.f.length+nn(s.extra)+(s.o?s.o.length:0),n+=s.b}D_(o,e,this.u.length,_,n),this.ondata(null,o,!0),this.d=2},t.prototype.terminate=function(){for(var e=0,n=this.u;e<n.length;e++){var _=n[e];_.t()}this.d=2},t})();Vr=(function(){function t(){}return t.prototype.push=function(e,n){this.ondata(null,e,n)},t.compression=0,t})(),vs=(function(){function t(){var e=this;this.i=new Re(function(n,_){e.ondata(null,n,_)})}return t.prototype.push=function(e,n){try{this.i.push(e,n)}catch(_){this.ondata(_,null,n)}},t.compression=8,t})(),Ms=(function(){function t(e,n){var _=this;n<32e4?this.i=new Re(function(i,r){_.ondata(null,i,r)}):(this.i=new R_(function(i,r,s){_.ondata(i,r,s)}),this.terminate=this.i.terminate)}return t.prototype.push=function(e,n){this.i.terminate&&(e=Pe(e,0)),this.i.push(e,n)},t.compression=8,t})(),Ds=(function(){function t(e){this.onfile=e,this.k=[],this.o={0:Vr},this.p=ke}return t.prototype.push=function(e,n){var _=this;if(this.onfile||v(5),this.p||v(4),this.c>0){var i=Math.min(this.c,e.length),r=e.subarray(0,i);if(this.c-=i,this.d?this.d.push(r,!this.c):this.k[0].push(r),e=e.subarray(i),e.length)return this.push(e,n)}else{var s=0,o=0,a=void 0,d=void 0;this.p.length?e.length?(d=new H(this.p.length+e.length),d.set(this.p),d.set(e,this.p.length)):d=this.p:d=e;for(var l=d.length,c=this.c,p=c&&this.d,f=function(){var A=oe(d,o);if(A==67324752){s=1,a=o,I.d=null,I.c=0;var b=we(d,o+6),y=we(d,o+8),u=b&2048,T=b&8,m=we(d,o+26),E=we(d,o+28);if(l>o+30+m+E){var S=[];I.k.unshift(S),s=2;var N=oe(d,o+18),x=oe(d,o+22),C=M_(d.subarray(o+30,o+=30+m),!u),L=$r(d,o,E,2,N,x,0),ne=L[0],k=L[1],G=L[3];T&&(ne=-1-G),o+=E,I.c=ne;var B,U={name:C,compression:y,start:function(){if(U.ondata||v(5),!ne)U.ondata(null,ke,!0);else{var R=_.o[y];R||U.ondata(v(14,"unknown compression type "+y,1),null,!1),B=ne<0?new R(C):new R(C,ne,k),B.ondata=function(Ae,re,ie){U.ondata(Ae,re,ie)};for(var W=0,pe=S;W<pe.length;W++){var te=pe[W];B.push(te,!1)}_.k[0]==S&&_.c?_.d=B:B.push(ke,!0)}},terminate:function(){B&&B.terminate&&B.terminate()}};ne>=0&&(U.size=ne,U.originalSize=k),I.onfile(U)}return"break"}else if(c){if(A==134695760)return a=o+=12+(c==-2&&8),s=3,I.c=0,"break";if(A==33639248)return a=o-=4,s=3,I.c=0,"break"}},I=this;o<l-4;++o){var g=f();if(g==="break")break}if(this.p=ke,c<0){var h=s?d.subarray(0,a-12-(c==-2&&8)-(oe(d,a-16)==134695760&&4)):d.subarray(0,o);p?p.push(h,!!s):this.k[+(s==2)].push(h)}if(s&2)return this.push(d.subarray(o),n);this.p=d.subarray(o)}n&&(this.c&&v(13),this.p=null)},t.prototype.register=function(e){this.o[e.compression]=e},t})(),Mt=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(t){t()}});var ec={};c_(ec,{SOURCE_FORMATS:()=>Ql,createCompiler:()=>Zl});function ln(t){if(t.debugMode!==void 0){if(t.debugMode==="none"||t.debugMode==="trace"||t.debugMode==="lldb")return t.debugMode;throw new Error(`unsupported wasm-clang debug mode: ${String(t.debugMode)}`)}return t.debug?"trace":"none"}function yn(t,...e){let n={};for(let _ of e)n[_]=(t[_]||(()=>0)).bind(t);return n}function En(t,e,n=-1){let _=n===-1?t.length:e+n,i="";for(let r=e;r<_&&t[r];++r)i+=String.fromCharCode(t[r]);return i}function lr(t,e,n=-1){let _=n===-1?t.length:e+n,i=[];for(let r=e;r<_&&t[r];++r)i.push(t[r]);return new TextDecoder().decode(Uint8Array.from(i))}function cr(t,e,n){return parseInt(En(t,e,n),8)}var cn=class{memory;view;buffer;u8;u32;constructor(e){this.memory=e,this.buffer=e.buffer,this.view=new DataView(this.buffer),this.u8=new Uint8Array(this.buffer),this.u32=new Uint32Array(this.buffer)}check(){this.buffer.byteLength===0&&(this.buffer=this.memory.buffer,this.view=new DataView(this.buffer),this.u8=new Uint8Array(this.buffer),this.u32=new Uint32Array(this.buffer))}read8(e){return this.u8[e]}read32(e){return this.u32[e>>2]}readInt32(e){return this.view.getInt32(e,!0)}readFloat32(e){return this.view.getFloat32(e,!0)}readFloat64(e){return this.view.getFloat64(e,!0)}readStr(e,n){return En(this.u8,e,n)}readStrR(e,n){return lr(this.u8,e,n)}write8(e,n){this.u8[e]=n}write32(e,n){this.u32[e>>2]=n}write64(e,n,_=0){this.write32(e,n),this.write32(e+4,_)}writeStr(e,n){return e+=this.write(e,n),this.write8(e,0),n.length+1}writeUint8(e,n){return new Uint8Array(this.buffer,e,n.length).set(n),n.length}write(e,n){return n instanceof ArrayBuffer?this.writeUint8(e,new Uint8Array(n)):n instanceof SharedArrayBuffer?this.writeUint8(e,new Uint8Array(n)):typeof n=="string"?this.writeUint8(e,n.split("").map(_=>_.charCodeAt(0))):this.writeUint8(e,n)}};var Ut=new Map,Ot=new Map,Os=t=>t.byteLength>=2&&t[0]===31&&t[1]===139,rn=128*1024*1024,sn=4*1024*1024,Yr=64*1024;async function Kr(t,e,n,_){let i=t.getReader(),r=_,s=!1;if(r?.aborted){s=!0;let I=ue(r);try{Promise.resolve(i.cancel(I)).catch(()=>{})}catch{}try{i.releaseLock()}catch{}throw I}let o,a=r?new Promise((I,g)=>{o=()=>{if(s)return;s=!0;let h=ue(r);try{Promise.resolve(i.cancel(h)).catch(()=>{})}catch{}g(h)},r.addEventListener("abort",o,{once:!0})}):void 0,d=new Uint8Array(Math.min(Yr,n)),l=0,c=!1,p,f;try{for(le(r);;){let I=i.read(),{done:g,value:h}=a?await Promise.race([I,a]):await I;if(le(r),g)break;if(!h)continue;let A=l+h.byteLength;if(A>n)throw new Error(`Runtime asset ${e} decompressed size exceeds the ${n} byte limit`);if(A>d.byteLength){let b=Math.min(n,Math.max(A,Math.max(d.byteLength*2,1))),y=new Uint8Array(b);y.set(d.subarray(0,l)),d=y}d.set(h,l),l=A}le(r),p=d.subarray(0,l),c=!0}catch(I){if(r?.aborted)throw ue(r);if(!s){s=!0;try{Promise.resolve(i.cancel(I)).catch(()=>{})}catch{}}throw I}finally{o&&r?.removeEventListener("abort",o);try{i.releaseLock()}catch(I){c&&(f={error:I})}}if(f)throw f.error;return p}function qr(t){let e;try{e=new URL(t,typeof location<"u"?location.href:void 0)}catch{throw new Error("Runtime asset URL must be absolute outside a browser document")}if(e.protocol!=="http:"&&e.protocol!=="https:")throw new Error("Runtime assets must use HTTP(S)");if(e.username||e.password)throw new Error("Runtime asset URLs must not include credentials");if(e.hash)throw new Error("Runtime asset URLs must not include fragments");return e}function Jr(t){let e=t.headers.get("Content-Length");if(e===null)return 0;let n=Number(e);if(!/^\d+$/u.test(e)||!Number.isSafeInteger(n))throw new Error("Runtime asset has an invalid Content-Length");return n}function ue(t){return t.reason??new DOMException("Runtime asset load aborted","AbortError")}function Zn(t,e,n){return e?new Promise((_,i)=>{let r=!1,s=()=>{r||(r=!0,e.removeEventListener("abort",s),i(ue(e)))};e.addEventListener("abort",s,{once:!0}),t.then(o=>{if(r){n&&Promise.resolve().then(()=>n(o,e.reason)).catch(()=>{});return}r=!0,e.removeEventListener("abort",s),_(o)},o=>{r||(r=!0,e.removeEventListener("abort",s),i(o))}),e.aborted&&s()}):t}function le(t){if(t?.aborted)throw ue(t)}function Ne(t,e){try{t.body?.cancel(e).catch(()=>{})}catch{}}async function Zr(t,e,n,_,i){if(i?.aborted){let h=ue(i);throw Ne(t,h),h}let r;try{r=Jr(t)}catch(h){throw Ne(t,h),h}if(r>n)throw Ne(t),new Error(`Runtime asset ${e} size exceeds the ${n} byte limit`);if(!t.body){let h=new Uint8Array(await Zn(t.arrayBuffer(),i));if(i?.aborted)throw ue(i);if(h.byteLength>n)throw new Error(`Runtime asset ${e} size exceeds the ${n} byte limit`);return _?.set?.(1),h}let s=i,o=t.body.getReader(),a=!1,d=h=>{if(!a){a=!0;try{Promise.resolve(o.cancel(h)).catch(()=>{})}catch{}}};if(s?.aborted){let h=ue(s);d(h);try{o.releaseLock()}catch{}throw h}let l,c=s?new Promise((h,A)=>{l=()=>{let b=ue(s);d(b),A(b)},s.addEventListener("abort",l,{once:!0})}):void 0,p,f=0,I,g;try{for(p=new Uint8Array(Math.min(n,r||Yr));;){le(s);let h=o.read(),{done:A,value:b}=c?await Promise.race([h,c]):await h;if(le(s),A)break;if(!b)continue;let y=f+b.byteLength;if(y>n){let u=new Error(`Runtime asset ${e} size exceeds the ${n} byte limit`);throw d(u),u}if(y>p.byteLength){let u=Math.min(n,Math.max(y,Math.max(p.byteLength*2,1))),T=new Uint8Array(u);T.set(p.subarray(0,f)),p=T}p.set(b,f),f=y,r>0&&_?.set?.(f/r)}le(s),I=p.subarray(0,f)}catch(h){if(s?.aborted){let A=ue(s);throw d(A),A}throw d(h),h}finally{l&&s?.removeEventListener("abort",l);try{o.releaseLock()}catch(h){s?.aborted||(g={error:h})}}if(s?.aborted){let h=ue(s);throw d(h),h}if(g)throw g.error;return I}async function Ft(t,e={}){let n=e.maxBytes??sn;if(!Number.isSafeInteger(n)||n<=0)throw new Error("Runtime JSON byte limit must be a positive safe integer");let _=qr(t.toString()),i=e.label?.trim()||"runtime JSON",r=e.fetchImpl??globalThis.fetch?.bind(globalThis);if(!r)throw new Error(`Fetch is unavailable while loading ${i}`);if(e.signal?.aborted)throw ue(e.signal);let s={cache:"no-store",credentials:"omit",redirect:"error",referrerPolicy:"no-referrer"};e.signal&&(s.signal=e.signal);let o=Promise.resolve(r(_.toString(),s)),a=await Zn(o,e.signal,(c,p)=>{Ne(c,p)});if(e.signal?.aborted){let c=ue(e.signal);throw Ne(a,c),c}if(a.url){let c;try{c=new URL(a.url)}catch{throw Ne(a),new Error(`${i} returned an invalid final URL`)}if(c.href!==_.href)throw Ne(a),new Error(`${i} returned an unexpected final URL`)}if(!a.ok)throw Ne(a),new Error(`Failed to load ${i} from ${_}: ${a.status}`);let d=await Zr(a,_,n,void 0,e.signal),l;try{l=new TextDecoder("utf-8",{fatal:!0}).decode(d)}catch(c){throw new Error(`${i} is not valid UTF-8`,{cause:c})}try{return JSON.parse(l)}catch(c){throw new Error(`${i} is not valid JSON`,{cause:c})}}async function Fs(t,e="runtime asset",n=rn,_){if(!Number.isSafeInteger(n)||n<0)throw new Error("Runtime asset decompression limit must be a non-negative safe integer");if(le(_),!Os(t)){if(t.byteLength>n)throw new Error(`Runtime asset ${e} decompressed size exceeds the ${n} byte limit`);return t}if(typeof DecompressionStream!="function")throw new Error(`Failed to decompress runtime asset ${e}: DecompressionStream('gzip') is unavailable`);try{let i=Uint8Array.from(t),r=new ReadableStream({start(a){a.enqueue(i),a.close()}}),s=new DecompressionStream("gzip"),o=r.pipeThrough({readable:s.readable,writable:s.writable});return await Kr(o,e,n,_)}catch(i){throw _?.aborted?ue(_):new Error(`Failed to decompress runtime asset ${e}: ${i instanceof Error?i.message:String(i)}`)}}async function Gs(t,e,n,_,i){if(i?.aborted){let m=ue(i);throw Ne(t,m),m}let r;try{r=Jr(t)}catch(m){throw Ne(t,m),m}if(r>n)throw Ne(t),new Error(`Runtime asset ${e} download size exceeds the ${n} byte limit`);if(!t.body){let m=new Uint8Array(await Zn(t.arrayBuffer(),i));if(le(i),m.byteLength>n)throw new Error(`Runtime asset ${e} download size exceeds the ${n} byte limit`);let E=await Fs(m,e,n,i);return le(i),_?.set?.(1),E}let s=t.body.getReader(),o=[],a=0,d=0,l=!1,c=!1,p=!1,f=()=>{c||(c=!0,s.releaseLock())},I=m=>{if(!(c||p)){p=!0;try{Promise.resolve(s.cancel(m)).catch(()=>{})}catch{}try{f()}catch{}}};if(i?.aborted){let m=ue(i);throw I(m),m}let g,h=i?new Promise((m,E)=>{g=()=>{let S=ue(i);I(S),E(S)},i.addEventListener("abort",g,{once:!0})}):void 0;try{for(le(i);a<2;){let m=s.read(),{done:E,value:S}=h?await Promise.race([m,h]):await m;if(le(i),E){l=!0,f();break}if(!S)continue;let N=d+S.byteLength;if(N>n){let x=new Error(`Runtime asset ${e} download size exceeds the ${n} byte limit`);throw I(x),x}o.push(S),a+=S.byteLength,d=N,r>0&&_?.set?.(Math.min(d/r,1))}le(i)}catch(m){throw I(m),i?.aborted?ue(i):m}finally{g&&i?.removeEventListener("abort",g)}let A,b;for(let m of o){for(let E of m)if(A===void 0?A=E:b===void 0&&(b=E),b!==void 0)break;if(b!==void 0)break}let y=0,u=new ReadableStream({async pull(m){if(y<o.length){m.enqueue(o[y++]);return}if(l){m.close();return}try{let{done:E,value:S}=await s.read();if(le(i),E){l=!0,f(),m.close();return}if(!S)return;let N=d+S.byteLength;if(N>n){let x=new Error(`Runtime asset ${e} download size exceeds the ${n} byte limit`);I(x),m.error(x);return}d=N,r>0&&_?.set?.(Math.min(d/r,1)),m.enqueue(S)}catch(E){I(E),m.error(E)}},cancel(m){I(m)}}),T=u;if(A===31&&b===139){if(typeof DecompressionStream!="function"){let E=new Error(`Failed to decompress runtime asset ${e}: DecompressionStream('gzip') is unavailable`);throw I(E),E}let m=new DecompressionStream("gzip");T=u.pipeThrough({readable:m.readable,writable:m.writable})}try{let m=await Kr(T,e,n,i);return _?.set?.(1),m}catch(m){throw I(m),i?.aborted?ue(i):new Error(`Failed to decompress runtime asset ${e}: ${m instanceof Error?m.message:String(m)}`)}}async function Hs(t,e,n,_){le(_);let{unzipSync:i}=await Promise.resolve().then(()=>(jr(),zr));le(_);let r,s=i(t,{filter(o){if(o.name.endsWith("/")||r!==void 0)return!1;if(o.originalSize>n)throw new Error(`Runtime asset ${e} extracted size exceeds the ${n} byte limit`);return r=o.name,!0}});le(_);for(let[o,a]of Object.entries(s))if(!o.endsWith("/"))return a;throw new Error("No entry found")}var Qr=async(t,e,n=rn,_)=>{if(!Number.isSafeInteger(n)||n<0)throw new Error("Runtime asset byte limit must be a non-negative safe integer");le(_);let i=`${t}\0${n}`,r=_?void 0:Ot.get(i);r||(r=(async()=>{let o=qr(t),a={credentials:"omit",redirect:"error",referrerPolicy:"no-referrer"};_&&(a.signal=_);let d;try{let c=Promise.resolve(fetch(o,a));d=await Zn(c,_,(p,f)=>{Ne(p,f)})}catch(c){throw _?.aborted?ue(_):c}if(_?.aborted){let c=ue(_);throw Ne(d,c),c}if(d.url){let c;try{c=new URL(d.url)}catch{throw Ne(d),new Error("Runtime asset returned an invalid final URL")}if(c.href!==o.href)throw Ne(d),new Error("Runtime asset returned an unexpected final URL")}if(!d.ok)throw Ne(d),new Error(`Failed to load runtime asset ${o}: ${d.status}`);if(o.pathname.endsWith(".gz"))return await Gs(d,o,n,e,_);let l=await Zr(d,o,n,e,_);return o.pathname.endsWith(".zip")?await Hs(l,o,n,_):l})(),_||(r=r.catch(o=>{throw Ot.get(i)===r&&Ot.delete(i),o}),Ot.set(i,r)));let s=await r;return le(_),e?.set?.(1),s},qe=async(t,e,n=rn,_)=>{let i=await Qr(t,e,n,_);return le(_),Uint8Array.from(i)};async function on(t,e,n,_=rn){le(n);let i=`${t}\0${_}`,r=n?void 0:Ut.get(i);if(r)return r;let s=(async()=>{let o=await Qr(t,e,_,n);le(n);let a=o.buffer;if(!(a instanceof ArrayBuffer))throw new TypeError("Runtime asset compilation requires an ArrayBuffer");let d=new Uint8Array(a,o.byteOffset,o.byteLength),l=await Zn(WebAssembly.compile(d),n);return le(n),l})();return n||(s=s.catch(o=>{throw Ut.get(i)===s&&Ut.delete(i),o}),Ut.set(i,s)),s}function ei(t,e){return WebAssembly.instantiate(t,e)}var Qn=class extends Error{code;constructor(e){super(`process exited with code ${e}.`),this.code=e}},et=class extends Error{constructor(e,n){super(`${e}.${n} not implemented.`)}},pn=class extends Error{constructor(e="abort"){super(e)}},P_=class extends Error{constructor(e){super(e)}};function U_(t){if(!t)throw new P_("assertion failed.")}var Bs=["&&","||","==","!=","<=",">=","+","-","*","/","%","<",">","!"],O_=t=>!!t&&typeof t=="object"&&!Array.isArray(t)&&t.__debugExpressionKind==="array",ni=t=>!!t&&typeof t=="object"&&!Array.isArray(t)&&t.__debugExpressionKind==="object",F_=(t,e)=>{let n=t[e];if(n!=="'"&&n!=='"')throw new Error("expected quoted string");let _=e+1,i="";for(;_<t.length;){let r=t[_];if(!r)break;if(r==="\\"){let s=t[_+1];if(!s)throw new Error("unterminated string literal");s==="n"?i+=`
`:s==="r"?i+="\r":s==="t"?i+="	":i+=s,_+=2;continue}if(r===n)return{value:i,next:_+1};i+=r,_+=1}throw new Error("unterminated string literal")},Xs=t=>{let e=[];for(let n=0;n<t.length;){let _=t[n];if(!_)break;if(/\s/.test(_)){n+=1;continue}if(_==="("||_===")"){e.push({type:"paren",value:_}),n+=1;continue}if(_==="["||_==="]"){e.push({type:"bracket",value:_}),n+=1;continue}if(_==="."){e.push({type:"dot"}),n+=1;continue}let i=Bs.find(o=>t.startsWith(o,n));if(i){e.push({type:"operator",value:i}),n+=i.length;continue}if(_==="'"||_==='"'){let o=F_(t,n);e.push({type:"string",value:o.value}),n=o.next;continue}let r=t.slice(n).match(/^\d+(?:\.\d+)?/);if(r?.[0]){e.push({type:"number",value:r[0]}),n+=r[0].length;continue}let s=t.slice(n).match(/^[A-Za-z_]\w*/);if(s?.[0]){s[0]==="true"||s[0]==="false"||s[0]==="True"||s[0]==="False"?e.push({type:"boolean",value:s[0]==="true"||s[0]==="True"}):s[0]==="null"||s[0]==="None"?e.push({type:"null"}):s[0]==="and"?e.push({type:"operator",value:"&&"}):s[0]==="or"?e.push({type:"operator",value:"||"}):s[0]==="not"?e.push({type:"operator",value:"!"}):e.push({type:"identifier",value:s[0]}),n+=s[0].length;continue}throw new Error(`unsupported token near "${t.slice(n)}"`)}return e},Gt=(t,e=0)=>{let n=e;for(;/\s/.test(t[n]||"");)n+=1;let _=t[n];if(_==="["){n+=1;let r=[];for(;;){for(;/\s/.test(t[n]||"");)n+=1;if(t[n]==="]")return{value:r,next:n+1};if(t.startsWith("...",n)){for(r.truncated=!0,n+=3;/\s/.test(t[n]||"");)n+=1;if(t[n]==="]")return{value:r,next:n+1};throw new Error("unsupported array preview")}let s=Gt(t,n);for(r.push(s.value),n=s.next;/\s/.test(t[n]||"");)n+=1;if(t[n]===","){n+=1;continue}if(t[n]==="]")return{value:r,next:n+1};throw new Error("unsupported array preview")}}if(_==="("){n+=1;let r=[];for(;;){for(;/\s/.test(t[n]||"");)n+=1;if(t[n]===")")return{value:r,next:n+1};if(t.startsWith("...",n)){for(r.truncated=!0,n+=3;/\s/.test(t[n]||"");)n+=1;if(t[n]===")")return{value:r,next:n+1};throw new Error("unsupported tuple preview")}let s=Gt(t,n);for(r.push(s.value),n=s.next;/\s/.test(t[n]||"");)n+=1;if(t[n]===","){n+=1;continue}if(t[n]===")")return{value:r,next:n+1};throw new Error("unsupported tuple preview")}}if(_==="{"){n+=1;let r={};for(;;){for(;/\s/.test(t[n]||"");)n+=1;if(t[n]==="}")return{value:r,next:n+1};if(t.startsWith("...",n))throw new Error("unavailable");let s="";if(t[n]==="'"||t[n]==='"'){let a=F_(t,n);s=a.value,n=a.next}else{let a=t.slice(n).match(/^[A-Za-z_]\w*/)?.[0];if(!a)throw new Error("unsupported object preview");s=a,n+=a.length}for(;/\s/.test(t[n]||"");)n+=1;if(t[n]!==":")throw new Error("unsupported object preview");n+=1;let o=Gt(t,n);for(r[s]=o.value,n=o.next;/\s/.test(t[n]||"");)n+=1;if(t[n]===","){n+=1;continue}if(t[n]==="}")return{value:r,next:n+1};throw new Error("unsupported object preview")}}if(_==="'"||_==='"')return F_(t,n);if(t.startsWith("true",n))return{value:!0,next:n+4};if(t.startsWith("false",n))return{value:!1,next:n+5};if(t.startsWith("True",n))return{value:!0,next:n+4};if(t.startsWith("False",n))return{value:!1,next:n+5};if(t.startsWith("null",n))return{value:null,next:n+4};if(t.startsWith("None",n))return{value:null,next:n+4};let i=t.slice(n).match(/^-?\d+(?:\.\d+)?/);if(i?.[0])return{value:Number(i[0]),next:n+i[0].length};throw new Error("unsupported preview")},ti=t=>{let e=t.trim();if(!e||e==="?")throw new Error("unavailable");if(e==="true"||e==="false"||e==="True"||e==="False")return e==="true"||e==="True";if(e==="null"||e==="None")return null;let n=Number(e);if(!Number.isNaN(n))return n;if(e.startsWith("[")||e.startsWith("(")||e.startsWith("{")||e.startsWith("'")||e.startsWith('"')){let _=Gt(e);if(e.slice(_.next).trim())throw new Error("unsupported preview");return _.value}throw new Error("unsupported preview")},ks=t=>`'${t.replaceAll("\\","\\\\").replaceAll("'","\\'").replaceAll(`
`,"\\n").replaceAll("\r","\\r").replaceAll("	","\\t")}'`,nt=(t,e,n)=>{if(t===null)return"null";if(typeof t=="number"||typeof t=="boolean")return`${t}`;if(typeof t=="string")return e?ks(t):t;if(n>=4)return"...";if(Array.isArray(t)){let s=Math.min(t.length,8);return`[${t.slice(0,s).map(a=>nt(a,!0,n+1)).join(", ")}${t.truncated||t.length>s?", ...":""}]`}if(O_(t)){let s=t.keys?.()||[],o=Math.min(s.length||t.length||0,8),a=[];for(let l=0;l<o;l+=1){let c=s[l]??l;a.push(nt(t.get(c),!0,n+1))}let d=t.truncated||t.length!=null&&t.length>o;return`[${a.join(", ")}${d?", ...":""}]`}if(ni(t)){let s=t.keys?.()||[],o=Math.min(s.length,8);return`{${s.slice(0,o).map(d=>`${d}: ${nt(t.get(d),!0,n+1)}`).join(", ")}${s.length>o?", ...":""}}`}let _=Object.keys(t),i=Math.min(_.length,8);return`{${_.slice(0,i).map(s=>`${s}: ${nt(t[s],!0,n+1)}`).join(", ")}${_.length>i?", ...":""}}`},Ws=t=>nt(t,!1,0),_i=(t,e)=>{let n=t.trim();if(!n)throw new Error("empty expression");let _=Xs(n),i=new Map,r=u=>{if(i.has(u))return i.get(u);let T=e(u);return i.set(u,T),T},s=(u,T)=>{if(!Number.isInteger(T))throw new Error("unsupported index access");if(Array.isArray(u)){if(T<0||T>=u.length)throw new Error("unavailable");return u[T]}if(O_(u)){if(u.length!=null&&(T<0||T>=u.length))throw new Error("unavailable");return u.get(T)}throw new Error("unsupported index access")},o=(u,T)=>{if(Array.isArray(u)||O_(u)||!u)throw new Error("unsupported member access");if(ni(u)){if(!u.has(T))throw new Error("unavailable");return u.get(T)}if(typeof u!="object"||!Object.hasOwn(u,T))throw new Error("unavailable");return u[T]},a=0,d=!0,l=u=>{let T=d;d=!1;try{return u()}finally{d=T}},c=()=>{let u=_[a];if(!u)throw new Error("unexpected end of expression");if(u.type==="number")return a+=1,Number(u.value);if(u.type==="boolean")return a+=1,u.value;if(u.type==="null")return a+=1,null;if(u.type==="string")return a+=1,u.value;if(u.type==="identifier"){a+=1;let T=d?r(u.value):null;for(;;){let m=_[a];if(m?.type==="bracket"&&m.value==="["){a+=1;let E=Number(b()),S=_[a];if(!S||S.type!=="bracket"||S.value!=="]")throw new Error("missing closing bracket");a+=1,T=d?s(T,E):null;continue}if(m?.type==="dot"){a+=1;let E=_[a];if(!E||E.type!=="identifier")throw new Error("missing property name");a+=1,T=d?o(T,E.value):null;continue}break}return T}if(u.type==="paren"&&u.value==="("){a+=1;let T=b(),m=_[a];if(!m||m.type!=="paren"||m.value!==")")throw new Error("missing closing parenthesis");return a+=1,T}throw new Error("expected value")},p=()=>{let u=_[a];return u?.type==="operator"&&u.value==="!"?(a+=1,!p()):u?.type==="operator"&&u.value==="-"?(a+=1,-Number(p())):u?.type==="operator"&&u.value==="+"?(a+=1,Number(p())):c()},f=()=>{let u=p();for(;;){let T=_[a];if(T?.type!=="operator"||!["*","/","%"].includes(T.value))return u;a+=1;let m=p();T.value==="*"&&(u=Number(u)*Number(m)),T.value==="/"&&(u=Number(u)/Number(m)),T.value==="%"&&(u=Number(u)%Number(m))}},I=()=>{let u=f();for(;;){let T=_[a];if(T?.type!=="operator"||!["+","-"].includes(T.value))return u;a+=1;let m=f();T.value==="+"&&(typeof u=="string"||typeof m=="string"?u=`${u??"null"}${m??"null"}`:u=Number(u)+Number(m)),T.value==="-"&&(u=Number(u)-Number(m))}},g=()=>{let u=I();for(;;){let T=_[a];if(T?.type!=="operator"||!["<","<=",">",">="].includes(T.value))return u;a+=1;let m=I(),E=typeof u=="string"&&typeof m=="string"?u:Number(u),S=typeof u=="string"&&typeof m=="string"?m:Number(m);T.value==="<"&&(u=E<S),T.value==="<="&&(u=E<=S),T.value===">"&&(u=E>S),T.value===">="&&(u=E>=S)}},h=()=>{let u=g();for(;;){let T=_[a];if(T?.type!=="operator"||!["==","!="].includes(T.value))return u;a+=1;let m=g();T.value==="=="&&(u=u===m),T.value==="!="&&(u=u!==m)}},A=()=>{let u=h();for(;;){let T=_[a];if(!T||T.type!=="operator"||T.value!=="&&")break;a+=1;let m=d&&u?h():l(h);d&&(u=!!u&&!!m)}return u},b=()=>{let u=A();for(;;){let T=_[a];if(!T||T.type!=="operator"||T.value!=="||")break;a+=1;let m=d&&!u?A():l(A);d&&(u=!!u||!!m)}return u},y=b();if(a!==_.length)throw new Error("unexpected trailing tokens");return Ws(y)};var ri=Int32Array.BYTES_PER_ELEMENT*2,$s=-1,G_=new TextEncoder,Vs=new TextDecoder,ii=t=>t instanceof Int32Array?t:new Int32Array(t),si=t=>new Uint8Array(t.buffer,t.byteOffset+ri,t.byteLength-ri),zs=(t,e)=>{let n=G_.encode(t);if(n.length<=e)return{bytes:n,rest:""};let _=0,i=t.length;for(;_<i;){let s=Math.ceil((_+i)/2);G_.encode(t.slice(0,s)).length<=e?_=s:i=s-1}let r=t.slice(0,_);return{bytes:G_.encode(r),rest:t.slice(_)}},oi=(t,e)=>{if(!t.length)return!1;let n=ii(e),_=si(n),i=t[0]||"",{bytes:r,rest:s}=zs(i,_.length);return _.fill(0),_.set(r),Atomics.store(n,1,r.length),Atomics.add(n,0,1),Atomics.notify(n,0),s?t[0]=s:t.shift(),!0},ai=t=>{let e=ii(t),n=Atomics.load(e,1);if(n===$s)return null;let _=si(e);return Vs.decode(_.slice(0,n))};var M=0,H_=44,Ht=58,Bt=2,di=4,js=16,li=32,ci=64,fi=1<<21,Ys=1<<22,Ks=1,ui=8,pi=4,qs=0,Js=1,Zs=2,Qs=789514,tt=class{ready;mem=null;memfs;instance=null;exports;trace=()=>{};debugSession;useJsReadOverlay=!1;useJsSourceReadOverlay=!1;argv;environ;handles=new Map;nextHandle=1024;syntheticFileHandles=new Set;nextSyntheticInode=1;syntheticInodes=new Map;readFileHandles=new Map;writeFileHandles=new Map;constructor(e,n,_,...i){let r=i.at(-1),s=r&&typeof r=="object"?i.pop():{},o=i;this.argv=[_,...o],this.environ={USER:"wasm-clang"},this.memfs=n,this.useJsReadOverlay=_==="wasm-ld"||_==="ld.lld"||_==="lld",this.useJsSourceReadOverlay=_==="clang"||_==="clang++"||_==="cobc";let a=yn(this,"__wasm_idle_debug_enter","__wasm_idle_debug_leave","__wasm_idle_debug_line","__wasm_idle_debug_value_num","__wasm_idle_debug_value_bool","__wasm_idle_debug_value_addr","__wasm_idle_debug_value_text"),d={...yn(this,"proc_exit","environ_sizes_get","environ_get","args_sizes_get","args_get","random_get","clock_time_get","poll_oneoff","fd_filestat_set_times","path_filestat_set_times","sock_accept","sock_recv","sock_send","sock_shutdown","path_link","path_rename"),...this.memfs.exports,...yn(this,"path_open","path_filestat_get","path_readlink","path_unlink_file","fd_fdstat_get","fd_fdstat_set_flags","fd_filestat_get","fd_filestat_set_size","fd_datasync","fd_read","fd_pread","fd_seek","fd_tell","fd_write","fd_close")},l=s.extraImports?.env||{};this.ready=ei(e,{...s.extraImports,wasi_unstable:d,wasi_snapshot_preview1:d,env:{...l,...a}}).then(c=>{this.instance=c,s.instanceRef&&(s.instanceRef.current=c),this.exports=this.instance.exports,this.mem=new cn(this.exports.memory),this.memfs.hostMem=this.mem})}async run(){await this.ready,this.trace(`start(argv=${JSON.stringify(this.argv)}, exports=${JSON.stringify(Object.keys(this.exports||{}))})`);try{this.exports._start()}catch(e){let n=!0;if(e instanceof Qn){if(this.trace(`proc_exit(code=${e.code})`),e.code===Qs)return this.trace("allow_rAF_after_exit"),!0;if(this.trace(`disallow_rAF_after_exit(code=${e.code})`),e.code==0)return!1;n=!1}e instanceof et&&this.trace(`not_implemented(${e.message})`);let _=`\x1B[91mError: ${e.message}`;throw n&&(_=_+`
${e.stack}`),_+=`\x1B[0m
`,this.memfs.stdout(_),e}this.trace("start() returned without proc_exit")}proc_exit(e){throw this.trace(`proc_exit_throw(code=${e})`),new Qn(e)}toNumber(e){return typeof e=="bigint"?Number(e):e}writeU32(e,n){this.mem.view.setUint32(e,n>>>0,!0)}writeU64(e,n){let _=BigInt(n);this.mem.view.setUint32(e,Number(_&0xffffffffn),!0),this.mem.view.setUint32(e+4,Number(_>>32n&0xffffffffn),!0)}readMemfsFile(e){let n=[e,e.replace(/^\/+/,""),e.replace(/^\.\//,""),e.replace(/^\/+/,"").replace(/^\.\//,"")];for(let _ of n)if(this.memfs.hasFile(_))try{return Uint8Array.from(this.memfs.getFileContents(_))}catch{}return null}shouldUseJsReadForPath(e){return this.useJsReadOverlay?!0:this.useJsSourceReadOverlay}syntheticInodeForPath(e){let _=e.replace(/^\/+/,"").replace(/^\.\//,"")||e,i=this.syntheticInodes.get(_);return i||(i=this.nextSyntheticInode++,this.syntheticInodes.set(_,i)),i}copyFileToIovs(e,n,_,i,r){this.mem.check();let s=0;for(let o=0;o<i;o+=1){let a=this.mem.read32(_);_+=4;let d=this.mem.read32(_);if(_+=4,d<=0)continue;let l=Math.max(0,e.length-n),c=Math.min(d,l);if(c>0&&(this.mem.write(a,e.subarray(n,n+c)),n+=c,s+=c),c<d)break}return this.writeU32(r,s),{copied:s,position:n}}writeRegularFileStat(e,n,_){this.mem.check(),this.writeU64(e,1),this.writeU64(e+8,this.syntheticInodeForPath(_)),this.mem.write8(e+16,pi),this.writeU64(e+24,1),this.writeU64(e+32,n),this.writeU64(e+40,0),this.writeU64(e+48,0),this.writeU64(e+56,0)}seekPosition(e,n,_,i){let r=this.toNumber(_);return i===qs?Math.max(0,r):i===Js?Math.max(0,e+r):i===Zs?Math.max(0,n+r):null}ensureWriteCapacity(e,n){if(e.contents.length>=n)return;let _=Math.max(1024,e.contents.length);for(;_<n;)_*=2;let i=new Uint8Array(_);i.set(e.contents.subarray(0,e.size)),e.contents=i}atomicOutputTarget(e){let n=e.match(/^(.+)-[0-9a-f]+(\.[^.]+)\.tmp$/);return n?`${n[1]}${n[2]}`:null}storeFileContents(e,n){if(this.useJsReadOverlay||this.useJsSourceReadOverlay){this.memfs.setFile(e,n);return}this.memfs.addFile(e,n)}path_open(e,n,_,i,r,s,o,a,d){this.mem.check();let l=this.mem.readStr(_,i),c=this.toNumber(s),p=(c&ci)!==0||(r&(Ks|ui))!==0;this.trace(`path_open_request(path=${JSON.stringify(l)}, rights=${c}, oflags=${r}, write=${p})`);let f=!p&&this.shouldUseJsReadForPath(l)&&(c&Bt)!==0?this.readMemfsFile(l):null;if(!p&&this.shouldUseJsReadForPath(l)&&(c&Bt)!==0&&!f)return this.trace(`path_open_read_missing(path=${JSON.stringify(l)})`),H_;let I=M,g;if(this.useJsReadOverlay&&(p||f))g=this.nextHandle++,this.syntheticFileHandles.add(g),this.writeU32(d,g),this.trace(`path_open_overlay(fd=${g}, path=${JSON.stringify(l)})`);else{if(I=this.memfs.exports.path_open(e,n,_,i,r,s,o,a,d),I!==M)return I;g=this.mem.read32(d)}if(p){let A=(r&ui)===0?this.readMemfsFile(l):null,b=A?Uint8Array.from(A):new Uint8Array(0);return this.writeFileHandles.set(g,{path:l,contents:b,position:0,size:b.length}),this.readFileHandles.delete(g),this.trace(`path_open_write(fd=${g}, path=${JSON.stringify(l)}, size=${b.length})`),I}if(!this.shouldUseJsReadForPath(l)||(c&Bt)===0)return I;let h=f||this.readMemfsFile(l);return h&&(this.readFileHandles.set(g,{path:l,contents:h,position:0}),this.trace(`path_open_read(fd=${g}, path=${JSON.stringify(l)}, size=${h.length})`)),I}path_filestat_get(e,n,_,i,r){this.mem.check();let s=this.mem.readStr(_,i);if(!this.shouldUseJsReadForPath(s))return this.memfs.exports.path_filestat_get(e,n,_,i,r);let o=this.readMemfsFile(s);return o?(this.writeRegularFileStat(r,o.length,s),this.trace(`path_filestat_get(path=${JSON.stringify(s)}, size=${o.length})`),M):this.memfs.exports.path_filestat_get(e,n,_,i,r)}fd_fdstat_get(e,n){let _=this.readFileHandles.get(e)||this.writeFileHandles.get(e);if(!_)return this.memfs.exports.fd_fdstat_get(e,n);let i=this.writeFileHandles.has(e)?ci|di|li|js|fi|Ys:Bt|di|li|fi;return this.mem.check(),this.mem.write8(n,pi),this.mem.write8(n+1,0),this.mem.write8(n+2,0),this.mem.write8(n+3,0),this.writeU64(n+8,i),this.writeU64(n+16,0),this.trace(`fd_fdstat_get(fd=${e}, path=${JSON.stringify(_.path)})`),M}fd_filestat_get(e,n){let _=this.writeFileHandles.get(e),i=this.readFileHandles.get(e),r=_||i;if(!r)return this.memfs.exports.fd_filestat_get(e,n);let s=_?_.size:i?.contents.length||0;return this.writeRegularFileStat(n,s,r.path),this.trace(`fd_filestat_get(fd=${e}, path=${JSON.stringify(r.path)}, size=${s})`),M}fd_filestat_set_size(e,n){let _=this.writeFileHandles.get(e);if(!_)return this.memfs.exports.fd_filestat_set_size(e,n);let i=this.toNumber(n);return this.ensureWriteCapacity(_,i),i>_.size&&_.contents.fill(0,_.size,i),_.size=i,_.position>i&&(_.position=i),this.trace(`fd_filestat_set_size(fd=${e}, size=${i})`),M}fd_read(e,n,_,i){let r=this.readFileHandles.get(e);if(!r)return this.memfs.exports.fd_read(e,n,_,i);let s=this.copyFileToIovs(r.contents,r.position,n,_,i);return r.position=s.position,this.trace(`fd_read(fd=${e}, bytes=${s.copied})`),M}fd_pread(e,n,_,i,r){let s=this.readFileHandles.get(e);if(!s)return this.memfs.exports.fd_pread(e,n,_,i,r);let o=this.copyFileToIovs(s.contents,this.toNumber(i),n,_,r);return this.trace(`fd_pread(fd=${e}, offset=${this.toNumber(i)}, bytes=${o.copied})`),M}fd_seek(e,n,_,i){let r=this.writeFileHandles.get(e);if(r){let a=this.seekPosition(r.position,r.size,n,_);return a==null?this.memfs.exports.fd_seek(e,n,_,i):(r.position=a,this.mem.check(),this.writeU64(i,r.position),this.trace(`fd_seek_write(fd=${e}, offset=${this.toNumber(n)}, whence=${_})`),M)}let s=this.readFileHandles.get(e);if(!s)return this.memfs.exports.fd_seek(e,n,_,i);let o=this.seekPosition(s.position,s.contents.length,n,_);return o==null?this.memfs.exports.fd_seek(e,n,_,i):(s.position=o,this.mem.check(),this.writeU64(i,s.position),this.trace(`fd_seek(fd=${e}, offset=${this.toNumber(n)}, whence=${_})`),M)}fd_tell(e,n){let _=this.writeFileHandles.get(e)?.position??this.readFileHandles.get(e)?.position;if(_==null){let i=this.memfs.exports.fd_tell;return typeof i=="function"?i(e,n):H_}return this.mem.check(),this.writeU64(n,_),this.trace(`fd_tell(fd=${e}, offset=${_})`),M}fd_datasync(e){if(this.writeFileHandles.has(e)||this.readFileHandles.has(e))return M;let n=this.memfs.exports.fd_datasync;return typeof n=="function"?n(e):M}fd_fdstat_set_flags(e,n){if(this.writeFileHandles.has(e)||this.readFileHandles.has(e))return M;let _=this.memfs.exports.fd_fdstat_set_flags;return typeof _=="function"?_(e,n):M}path_readlink(e,n,_,i,r,s){return this.mem.check(),this.writeU32(s,0),this.trace(`path_readlink(path=${JSON.stringify(this.mem.readStr(n,_))})`),H_}path_unlink_file(e,n,_){this.mem.check();let i=this.mem.readStr(n,_);return this.trace(`path_unlink_file(path=${JSON.stringify(i)})`),M}fd_write(e,n,_,i){let r=this.writeFileHandles.get(e);if(!r)return this.memfs.exports.fd_write(e,n,_,i);this.mem.check();let s=0;for(let o=0;o<_;o+=1){let a=this.mem.read32(n);n+=4;let d=this.mem.read32(n);n+=4,!(d<=0)&&(this.ensureWriteCapacity(r,r.position+d),r.contents.set(new Uint8Array(this.mem.buffer,a,d),r.position),r.position+=d,r.size=Math.max(r.size,r.position),s+=d)}return this.writeU32(i,s),this.trace(`fd_write(fd=${e}, bytes=${s})`),M}fd_close(e){let n=this.syntheticFileHandles.delete(e);if(this.readFileHandles.has(e)){this.readFileHandles.delete(e);let i=n?M:this.memfs.exports.fd_close(e);return this.trace(`fd_close_read(fd=${e}, close=${i})`),i}let _=this.writeFileHandles.get(e);if(_){this.writeFileHandles.delete(e);let i=n?M:this.memfs.exports.fd_close(e),r=_.contents.subarray(0,_.size);this.storeFileContents(_.path,r);let s=this.atomicOutputTarget(_.path);return s&&this.storeFileContents(s,r),this.trace(`fd_close_write(fd=${e}, path=${JSON.stringify(_.path)}, size=${_.size}, close=${i}, target=${JSON.stringify(s)})`),M}return n?M:this.memfs.exports.fd_close(e)}debugEvaluate(e){let n=this.debugSession;if(!n)throw new Error("unavailable");let _=[...n.frames].reverse().find(o=>o.functionId===n.currentFunctionId),i=n.currentLine,r=[...n.variableMetadata[n.currentFunctionId]||[]].reverse().filter(o=>i>=o.fromLine&&i<=o.toLine),s=[...n.globalVariableMetadata||[]].reverse().filter(o=>i>=o.fromLine&&i<=o.toLine);return _i(e,o=>{let a=(p,f)=>{let I=p.dimensions?.length?p.dimensions:p.length?[p.length]:[],g=Number(f);if(!Number.isFinite(g)||g<=0||!I.length||!p.elementKind&&!p.structFields?.length)throw new Error("unavailable");this.mem?.check?.();let h=p.structFields?.length&&p.structSize?p.structSize:p.elementKind==="double"?8:p.elementKind==="bool"||p.elementKind==="char"?1:4,A=(u,T)=>{if(u==="bool")return!!this.mem.read8(T);if(u==="char"){let m=this.mem.read8(T);return m>=32&&m<=126?String.fromCharCode(m):m}return u==="float"?this.mem.readFloat32(T):u==="double"?this.mem.readFloat64(T):this.mem.readInt32(T)},b=u=>({__debugExpressionKind:"object",has:T=>!!p.structFields?.some(m=>m.name===T),get:T=>{let m=p.structFields?.find(E=>E.name===T);if(!m)throw new Error("unavailable");return A(m.kind,u+m.offset)},keys:()=>p.structFields?.map(T=>T.name)||[]}),y=(u,T)=>({__debugExpressionKind:"array",length:T[0],truncated:T[0]>8,get:m=>{if(!Number.isInteger(m)||m<0||m>=T[0])throw new Error("unavailable");if(T.length>1){let E=T.slice(1).reduce((S,N)=>S*N,1)*h;return y(u+m*E,T.slice(1))}if(p.structFields?.length&&p.structSize)return b(u+m*p.structSize);if(!p.elementKind)throw new Error("unavailable");return A(p.elementKind,u+m*h)},keys:()=>Array.from({length:Math.min(T[0],8)},(m,E)=>E)});return y(g,I)},d=(p,f)=>{if(f==null||f==="?")throw new Error("unavailable");return p.kind==="array"?a(p,f):ti(f)},l=r.find(p=>p.name===o);if(l)return d(l,_?.values.get(l.slot));let c=s.find(p=>p.name===o);if(c)return d(c,n.globalValues.get(c.slot));throw new Error("unavailable")})}pauseDebugSession(e,n,_,i){let r=e.buffer;if(!r)return M;e.currentFunctionId=n,e.currentLine=_;let s=[...e.frames].reverse().find(f=>f.functionId===n);s&&(s.line=_),e.pauseOnEntry=!1,e.stepArmed=!1,e.nextLineArmed=!1,e.nextLineDepth=0,e.stepOutArmed=!1,this.trace(`pause(function=${n}, line=${_}, reason=${i})`);let o=e.variableMetadata[n]?.flatMap(f=>{if(_<f.fromLine||_>f.toLine)return[];if(f.kind==="array"){this.mem?.check?.();let g=Number(s?.values.get(f.slot)??Number.NaN),h=f.dimensions?.length?f.dimensions:f.length?[f.length]:[];if(!Number.isFinite(g)||g<=0||!h.length||!f.elementKind&&!f.structFields?.length)return[{name:f.name,value:"?"}];if(f.structFields?.length&&f.structSize){let u=Math.min(h[0],8),T=[];for(let m=0;m<u;m+=1){let E=[];for(let S of f.structFields){let N=g+m*f.structSize+S.offset;if(S.kind==="bool"){E.push(`${S.name}: ${this.mem.read8(N)?"true":"false"}`);continue}if(S.kind==="char"){let x=this.mem.read8(N);E.push(`${S.name}: ${x>=32&&x<=126?`'${String.fromCharCode(x)}'`:`${x}`}`);continue}if(S.kind==="float"){E.push(`${S.name}: ${this.mem.readFloat32(N)}`);continue}if(S.kind==="double"){E.push(`${S.name}: ${this.mem.readFloat64(N)}`);continue}E.push(`${S.name}: ${this.mem.readInt32(N)}`)}T.push(`{${E.join(", ")}}`)}return[{name:f.name,value:`[${T.join(", ")}${h[0]>u?", ...":""}]`}]}if(!f.elementKind)return[{name:f.name,value:"?"}];let A=f.elementKind==="double"?8:f.elementKind==="bool"||f.elementKind==="char"?1:4;if(h.length===2){let u=Math.min(h[0],4),T=Math.min(h[1],8),m=[];for(let E=0;E<u;E+=1){let S=[];for(let N=0;N<T;N+=1){let x=g+(E*h[1]+N)*A;if(f.elementKind==="bool"){S.push(this.mem.read8(x)?"true":"false");continue}if(f.elementKind==="char"){let C=this.mem.read8(x);S.push(C>=32&&C<=126?`'${String.fromCharCode(C)}'`:`${C}`);continue}if(f.elementKind==="float"){S.push(`${this.mem.readFloat32(x)}`);continue}if(f.elementKind==="double"){S.push(`${this.mem.readFloat64(x)}`);continue}S.push(`${this.mem.readInt32(x)}`)}m.push(`[${S.join(", ")}${h[1]>T?", ...":""}]`)}return[{name:f.name,value:`[${m.join(", ")}${h[0]>u?", ...":""}]`}]}let b=Math.min(h[0],8),y=[];for(let u=0;u<b;u+=1){let T=g+u*A;if(f.elementKind==="bool"){y.push(this.mem.read8(T)?"true":"false");continue}if(f.elementKind==="char"){let m=this.mem.read8(T);y.push(m>=32&&m<=126?`'${String.fromCharCode(m)}'`:`${m}`);continue}if(f.elementKind==="float"){y.push(`${this.mem.readFloat32(T)}`);continue}if(f.elementKind==="double"){y.push(`${this.mem.readFloat64(T)}`);continue}y.push(`${this.mem.readInt32(T)}`)}return[{name:f.name,value:`[${y.join(", ")}${h[0]>b?", ...":""}]`}]}let I=s?.values.get(f.slot)??"?";return[{name:f.name,value:I}]})||[],a=new Set(o.map(f=>f.name)),d=(e.globalVariableMetadata||[]).flatMap(f=>{if(a.has(f.name))return[];if(_<f.fromLine||_>f.toLine)return[];if(f.kind==="array"){this.mem?.check?.();let g=Number(e.globalValues?.get(f.slot)??Number.NaN),h=f.dimensions?.length?f.dimensions:f.length?[f.length]:[];if(!Number.isFinite(g)||g<=0||!h.length||!f.elementKind&&!f.structFields?.length)return[{name:f.name,value:"?"}];if(f.structFields?.length&&f.structSize){let u=Math.min(h[0],8),T=[];for(let m=0;m<u;m+=1){let E=[];for(let S of f.structFields){let N=g+m*f.structSize+S.offset;if(S.kind==="bool"){E.push(`${S.name}: ${this.mem.read8(N)?"true":"false"}`);continue}if(S.kind==="char"){let x=this.mem.read8(N);E.push(`${S.name}: ${x>=32&&x<=126?`'${String.fromCharCode(x)}'`:`${x}`}`);continue}if(S.kind==="float"){E.push(`${S.name}: ${this.mem.readFloat32(N)}`);continue}if(S.kind==="double"){E.push(`${S.name}: ${this.mem.readFloat64(N)}`);continue}E.push(`${S.name}: ${this.mem.readInt32(N)}`)}T.push(`{${E.join(", ")}}`)}return[{name:f.name,value:`[${T.join(", ")}${h[0]>u?", ...":""}]`}]}if(!f.elementKind)return[{name:f.name,value:"?"}];let A=f.elementKind==="double"?8:f.elementKind==="bool"||f.elementKind==="char"?1:4;if(h.length===2){let u=Math.min(h[0],4),T=Math.min(h[1],8),m=[];for(let E=0;E<u;E+=1){let S=[];for(let N=0;N<T;N+=1){let x=g+(E*h[1]+N)*A;if(f.elementKind==="bool"){S.push(this.mem.read8(x)?"true":"false");continue}if(f.elementKind==="char"){let C=this.mem.read8(x);S.push(C>=32&&C<=126?`'${String.fromCharCode(C)}'`:`${C}`);continue}if(f.elementKind==="float"){S.push(`${this.mem.readFloat32(x)}`);continue}if(f.elementKind==="double"){S.push(`${this.mem.readFloat64(x)}`);continue}S.push(`${this.mem.readInt32(x)}`)}m.push(`[${S.join(", ")}${h[1]>T?", ...":""}]`)}return[{name:f.name,value:`[${m.join(", ")}${h[0]>u?", ...":""}]`}]}let b=Math.min(h[0],8),y=[];for(let u=0;u<b;u+=1){let T=g+u*A;if(f.elementKind==="bool"){y.push(this.mem.read8(T)?"true":"false");continue}if(f.elementKind==="char"){let m=this.mem.read8(T);y.push(m>=32&&m<=126?`'${String.fromCharCode(m)}'`:`${m}`);continue}if(f.elementKind==="float"){y.push(`${this.mem.readFloat32(T)}`);continue}if(f.elementKind==="double"){y.push(`${this.mem.readFloat64(T)}`);continue}y.push(`${this.mem.readInt32(T)}`)}return[{name:f.name,value:`[${y.join(", ")}${h[0]>b?", ...":""}]`}]}let I=e.globalValues?.get(f.slot)??"?";return[{name:f.name,value:I}]})||[],l=new Map(o.map(f=>[f.name,f])),c=new Map(d.map(f=>[f.name,f]));for(let f of l.keys())c.delete(f);e.onPause?.({type:"pause",line:_,reason:i,locals:[...l.values(),...c.values()],callStack:[...e.frames].reverse().map(f=>({functionName:f.functionName,line:f.line}))});let p=Atomics.load(r,0);for(;;){if(e.interruptBuffer?.[0]===2)throw new pn;if(Atomics.wait(r,0,p,100),e.interruptBuffer?.[0]===2)throw new pn;let f=Atomics.exchange(r,1,0);if(f===1)return e.resumeSkipActive=!0,e.resumeSkipFunctionId=e.currentFunctionId,e.resumeSkipLine=e.currentLine,M;if(f===2)return e.stepArmed=!0,e.resumeSkipActive=!0,e.resumeSkipFunctionId=e.currentFunctionId,e.resumeSkipLine=e.currentLine,M;if(f===3)return e.nextLineArmed=!0,e.nextLineFunctionId=e.currentFunctionId,e.nextLineLine=e.currentLine,e.nextLineDepth=e.callDepth,e.resumeSkipActive=!0,e.resumeSkipFunctionId=e.currentFunctionId,e.resumeSkipLine=e.currentLine,M;if(f===4)return e.stepOutArmed=!0,e.stepOutDepth=Math.max(0,e.callDepth-1),e.resumeSkipActive=!0,e.resumeSkipFunctionId=e.currentFunctionId,e.resumeSkipLine=e.currentLine,M;if(f===5){let I=e.watchBuffer?ai(e.watchBuffer):"",g="?";try{g=I?this.debugEvaluate(I):"?"}catch(h){g=h instanceof Error&&h.message==="unavailable"?"?":"error"}e.watchResultBuffer&&oi([g],e.watchResultBuffer)}}}__wasm_idle_debug_enter(e,n){let _=this.debugSession;return _?.buffer?(_.callDepth+=1,_.currentFunctionId=e,_.currentLine=n,_.frames.push({functionId:e,functionName:_.functionMetadata[e]||`fn_${e}`,line:n,values:new Map}),this.trace(`enter(function=${e}, line=${n}, depth=${_.callDepth})`),_.pauseOnEntry?this.pauseDebugSession(_,e,n,"entry"):_.stepArmed?this.pauseDebugSession(_,e,n,"step"):M):M}__wasm_idle_debug_leave(e){let n=this.debugSession;if(!n?.buffer)return M;this.trace(`leave(function=${e}, depth=${n.callDepth})`),n.nextLineArmed&&e===n.nextLineFunctionId&&n.callDepth<=(n.nextLineDepth??n.callDepth)&&(n.nextLineArmed=!1,n.nextLineDepth=0,n.stepArmed=!0),n.callDepth=Math.max(0,n.callDepth-1),n.currentFunctionId===e&&(n.currentFunctionId=0);for(let _=n.frames.length-1;_>=0;_-=1)if(n.frames[_]?.functionId===e){n.frames.splice(_,1);break}return M}__wasm_idle_debug_value_num(e,n,_){let i=this.debugSession;if(!i?.buffer)return M;if(e===0)return i.globalValues.set(n,Number.isInteger(_)?String(_):`${_}`),M;for(let r=i.frames.length-1;r>=0;r-=1){let s=i.frames[r];if(s?.functionId===e){s.values.set(n,Number.isInteger(_)?String(_):`${_}`);break}}return M}__wasm_idle_debug_value_bool(e,n,_){let i=this.debugSession;if(!i?.buffer)return M;if(e===0)return i.globalValues.set(n,_?"true":"false"),M;for(let r=i.frames.length-1;r>=0;r-=1){let s=i.frames[r];if(s?.functionId===e){s.values.set(n,_?"true":"false");break}}return M}__wasm_idle_debug_value_addr(e,n,_){let i=this.debugSession;if(!i?.buffer)return M;if(e===0)return i.globalValues.set(n,String(_>>>0)),M;for(let r=i.frames.length-1;r>=0;r-=1){let s=i.frames[r];if(s?.functionId===e){s.values.set(n,String(_>>>0));break}}return M}__wasm_idle_debug_value_text(e,n,_,i){let r=this.debugSession;if(!r?.buffer)return M;this.mem?.check?.();let s=this.mem?.readStr?this.mem.readStr(_,i):"?";if(e===0)return r.globalValues.set(n,s),M;for(let o=r.frames.length-1;o>=0;o-=1){let a=r.frames[o];if(a?.functionId===e){a.values.set(n,s);break}}return M}__wasm_idle_debug_line(e,n){let _=this.debugSession;if(!_?.buffer)return M;let i=Atomics.load(_.buffer,2);if(i!==_.breakpointVersion){let s=Math.max(0,Atomics.load(_.buffer,3)),o=new Set;for(let a=0;a<s&&a+4<_.buffer.length;a+=1){let d=Atomics.load(_.buffer,a+4);d>0&&o.add(d)}_.breakpoints=o,_.breakpointVersion=i}if(_.resumeSkipActive){if(e===_.resumeSkipFunctionId&&n===_.resumeSkipLine)return M;_.resumeSkipActive=!1,_.resumeSkipFunctionId=0,_.resumeSkipLine=0}let r="";return _.pauseOnEntry?r="entry":_.breakpoints.has(n)?r="breakpoint":_.stepArmed?r="step":_.nextLineArmed&&_.callDepth<=(_.nextLineDepth??_.callDepth)&&e===_.nextLineFunctionId&&n!==_.nextLineLine?r="nextLine":_.stepOutArmed&&_.callDepth<=_.stepOutDepth&&(r="stepOut"),r?this.pauseDebugSession(_,e,n,r):M}environ_sizes_get(e,n){this.mem.check();let _=0,i=Object.getOwnPropertyNames(this.environ);for(let r of i){let s=this.environ[r];_+=r.length+s.length+2}return this.mem.write32(e,i.length),this.mem.write32(n,_),this.trace(`environ_sizes_get(count=${i.length}, bytes=${_})`),M}environ_get(e,n){this.mem.check();let _=Object.getOwnPropertyNames(this.environ);this.trace(`environ_get(entries=${JSON.stringify(_)})`);for(let i of _)this.mem.write32(e,n),e+=4,n+=this.mem.writeStr(n,`${i}=${this.environ[i]}`);return M}args_sizes_get(e,n){this.mem.check();let _=0;for(let i of this.argv)_+=i.length+1;return this.mem.write32(e,this.argv.length),this.mem.write32(n,_),this.trace(`args_sizes_get(count=${this.argv.length}, bytes=${_})`),M}args_get(e,n){this.mem.check(),this.trace(`args_get(argv=${JSON.stringify(this.argv)})`);for(let _ of this.argv)this.mem.write32(e,n),e+=4,n+=this.mem.writeStr(n,_);return M}random_get(e,n){let _=new Uint8Array(this.mem.buffer,e,n);for(let i=0;i<n;++i)_[i]=Math.random()*256|0}clock_time_get(e,n,_){this.mem.check();let i=e===1&&typeof performance<"u"?performance.now():Date.now(),r=BigInt(Math.floor(i*1e6));return this.mem.view.setBigUint64(_,r,!0),this.trace(`clock_time_get(clock=${e}, ns=${r})`),M}poll_oneoff(){throw new et("wasi_unstable","poll_oneoff")}fd_filestat_set_times(){return this.trace("fd_filestat_set_times()"),M}path_filestat_set_times(){return this.trace("path_filestat_set_times()"),M}sock_accept(){return this.trace("sock_accept() unsupported"),Ht}sock_recv(){return this.trace("sock_recv() unsupported"),Ht}sock_send(){return this.trace("sock_send() unsupported"),Ht}sock_shutdown(){return this.trace("sock_shutdown() unsupported"),Ht}path_link(e,n,_,i,r,s,o){this.mem.check();let a=this.mem.readStr(_,i).replace(/^\/+/,""),d=this.mem.readStr(s,o).replace(/^\/+/,"");return this.trace(`path_link(source=${JSON.stringify(a)}, target=${JSON.stringify(d)})`),this.storeFileContents(d,new Uint8Array(this.memfs.getFileContents(a))),M}path_rename(e,n,_,i,r,s){this.mem.check();let o=this.mem.readStr(n,_).replace(/^\/+/,""),a=this.mem.readStr(r,s).replace(/^\/+/,"");return this.trace(`path_rename(source=${JSON.stringify(o)}, target=${JSON.stringify(a)})`),this.storeFileContents(a,new Uint8Array(this.memfs.getFileContents(o))),M}};var mi="wasm32-wasi",Ti=["-fobjc-runtime=gnustep-2.0","-fblocks"];var eo="-std=gnu++20",no="-std=gnu11";function gi(t){return(t||"").trim().toUpperCase().replaceAll(/\s+/g,"")}function to(t){switch(gi(t)){case"03":case"CPP03":case"C++03":case"GNU++03":case"GNUC++03":return"-std=gnu++03";case"11":case"CPP11":case"C++11":case"GNU++11":case"GNUC++11":return"-std=gnu++11";case"14":case"CPP14":case"C++14":case"GNU++14":case"GNUC++14":return"-std=gnu++14";case"17":case"CPP17":case"C++17":case"GNU++17":case"GNUC++17":return"-std=gnu++17";case"20":case"CPP20":case"C++20":case"GNU++20":case"GNUC++20":return"-std=gnu++20";case"23":case"CPP23":case"C++23":case"GNU++23":case"GNUC++23":return"-std=gnu++23";case"26":case"CPP26":case"C++26":case"GNU++26":case"GNUC++26":return"-std=gnu++26";default:return eo}}function hi(t){switch(gi(t)){case"99":case"C99":case"GNU99":case"GNUC99":return"-std=gnu99";case"11":case"C11":case"GNU11":case"GNUC11":return"-std=gnu11";case"17":case"18":case"C17":case"C18":case"GNU17":case"GNU18":case"GNUC17":case"GNUC18":return"-std=gnu17";default:return no}}function Ii(t,e){return t==="C"?{languageArg:"c",standardArg:hi(e.cVersion)}:t==="OBJC"?{languageArg:"objective-c",standardArg:hi(e.cVersion)}:{languageArg:"c++",standardArg:to(e.cppVersion)}}function Si(t,e="",n){return[...["CPP","OBJCXX"].includes(t)?[`${e}/include/c++/v1`,`${e}/include/wasm32-wasi/c++/v1`]:[],...n?[`${n.replace(/\/+$/,"")}/include`]:[],`${e}/include/wasm32-wasi`,`${e}/include`]}var _o=String.raw`#ifndef WASM_CLANG_EXT_PB_DS_TREE_POLICY_HPP
#define WASM_CLANG_EXT_PB_DS_TREE_POLICY_HPP

#include <cstddef>

namespace __gnu_pbds {

struct null_type {};
struct rb_tree_tag {};
struct splay_tree_tag {};
struct ov_tree_tag {};

template <typename Node_CItr, typename Node_Itr, typename Cmp_Fn, typename Allocator>
class null_node_update {
public:
	typedef Node_CItr node_const_iterator;
	typedef Node_Itr node_iterator;
	typedef Cmp_Fn cmp_fn;
	typedef Allocator allocator_type;
};

template <typename Node_CItr, typename Node_Itr, typename Cmp_Fn, typename Allocator>
class tree_order_statistics_node_update {
public:
	typedef Node_CItr node_const_iterator;
	typedef Node_Itr node_iterator;
	typedef Cmp_Fn cmp_fn;
	typedef Allocator allocator_type;
};

} // namespace __gnu_pbds

#endif
`,ro=String.raw`#ifndef WASM_CLANG_EXT_PB_DS_ASSOC_CONTAINER_HPP
#define WASM_CLANG_EXT_PB_DS_ASSOC_CONTAINER_HPP

#include <algorithm>
#include <cstddef>
#include <functional>
#include <iterator>
#include <map>
#include <memory>
#include <set>
#include <type_traits>
#include <unordered_map>
#include <unordered_set>
#include <utility>
#include <ext/pb_ds/tree_policy.hpp>

namespace __gnu_pbds {

namespace detail {

template <typename Allocator, typename Value>
struct rebind_allocator {
	typedef typename std::allocator_traits<Allocator>::template rebind_alloc<Value> type;
};

template <typename Iterator>
Iterator advance_to_order(Iterator first, Iterator last, std::size_t order) {
	if (order >= static_cast<std::size_t>(std::distance(first, last))) return last;
	std::advance(
		first,
		static_cast<typename std::iterator_traits<Iterator>::difference_type>(order)
	);
	return first;
}

template <
	typename Key,
	typename Mapped,
	typename Hash_Fn,
	typename Eq_Fn,
	typename Allocator
>
struct hash_table_selector {
	typedef std::pair<const Key, Mapped> value_type;
	typedef typename rebind_allocator<Allocator, value_type>::type allocator_type;
	typedef std::unordered_map<Key, Mapped, Hash_Fn, Eq_Fn, allocator_type> type;
};

template <typename Key, typename Hash_Fn, typename Eq_Fn, typename Allocator>
struct hash_table_selector<Key, null_type, Hash_Fn, Eq_Fn, Allocator> {
	typedef typename rebind_allocator<Allocator, Key>::type allocator_type;
	typedef std::unordered_set<Key, Hash_Fn, Eq_Fn, allocator_type> type;
};

} // namespace detail

template <
	typename Key,
	typename Mapped,
	typename Cmp_Fn = std::less<Key>,
	typename Tag = rb_tree_tag,
	template <typename Node_CItr, typename Node_Itr, typename Cmp_Fn_, typename Allocator_>
	class Node_Update = null_node_update,
	typename Allocator = std::allocator<char>
>
class tree {
public:
	typedef Key key_type;
	typedef Mapped mapped_type;
	typedef std::pair<const Key, Mapped> value_type;
	typedef Cmp_Fn cmp_fn;
	typedef Tag container_category;
	typedef Allocator allocator_type;
	typedef std::size_t size_type;

private:
	typedef typename detail::rebind_allocator<Allocator, value_type>::type value_allocator_type;
	typedef std::map<Key, Mapped, Cmp_Fn, value_allocator_type> container_type;

public:
	typedef typename container_type::iterator iterator;
	typedef typename container_type::const_iterator const_iterator;
	typedef typename container_type::iterator point_iterator;
	typedef typename container_type::const_iterator const_point_iterator;
	typedef typename container_type::reverse_iterator reverse_iterator;
	typedef typename container_type::const_reverse_iterator const_reverse_iterator;

	tree() = default;
	explicit tree(const Cmp_Fn& compare) : values_(compare) {}

	template <typename InputIt>
	tree(InputIt first, InputIt last) : values_(first, last) {}

	bool empty() const { return values_.empty(); }
	size_type size() const { return values_.size(); }
	size_type max_size() const { return values_.max_size(); }

	iterator begin() { return values_.begin(); }
	const_iterator begin() const { return values_.begin(); }
	const_iterator cbegin() const { return values_.cbegin(); }
	iterator end() { return values_.end(); }
	const_iterator end() const { return values_.end(); }
	const_iterator cend() const { return values_.cend(); }
	reverse_iterator rbegin() { return values_.rbegin(); }
	const_reverse_iterator rbegin() const { return values_.rbegin(); }
	reverse_iterator rend() { return values_.rend(); }
	const_reverse_iterator rend() const { return values_.rend(); }

	std::pair<iterator, bool> insert(const value_type& value) { return values_.insert(value); }
	std::pair<iterator, bool> insert(value_type&& value) { return values_.insert(std::move(value)); }

	template <typename InputIt>
	void insert(InputIt first, InputIt last) {
		values_.insert(first, last);
	}

	mapped_type& operator[](const key_type& key) { return values_[key]; }
	mapped_type& at(const key_type& key) { return values_.at(key); }
	const mapped_type& at(const key_type& key) const { return values_.at(key); }

	iterator find(const key_type& key) { return values_.find(key); }
	const_iterator find(const key_type& key) const { return values_.find(key); }
	bool contains(const key_type& key) const { return values_.find(key) != values_.end(); }
	size_type count(const key_type& key) const { return values_.count(key); }

	iterator lower_bound(const key_type& key) { return values_.lower_bound(key); }
	const_iterator lower_bound(const key_type& key) const { return values_.lower_bound(key); }
	iterator upper_bound(const key_type& key) { return values_.upper_bound(key); }
	const_iterator upper_bound(const key_type& key) const { return values_.upper_bound(key); }

	size_type erase(const key_type& key) { return values_.erase(key); }
	iterator erase(const_iterator position) { return values_.erase(position); }
	iterator erase(const_iterator first, const_iterator last) { return values_.erase(first, last); }
	void clear() { values_.clear(); }
	void swap(tree& other) { values_.swap(other.values_); }

	iterator find_by_order(size_type order) {
		return detail::advance_to_order(values_.begin(), values_.end(), order);
	}

	const_iterator find_by_order(size_type order) const {
		return detail::advance_to_order(values_.begin(), values_.end(), order);
	}

	size_type order_of_key(const key_type& key) const {
		return static_cast<size_type>(std::distance(values_.begin(), values_.lower_bound(key)));
	}

	void join(tree& other) {
		values_.insert(other.values_.begin(), other.values_.end());
		other.values_.clear();
	}

	void split(const key_type& key, tree& other) {
		iterator first = values_.upper_bound(key);
		other.values_.insert(first, values_.end());
		values_.erase(first, values_.end());
	}

private:
	container_type values_;
};

template <
	typename Key,
	typename Cmp_Fn,
	typename Tag,
	template <typename Node_CItr, typename Node_Itr, typename Cmp_Fn_, typename Allocator_>
	class Node_Update,
	typename Allocator
>
class tree<Key, null_type, Cmp_Fn, Tag, Node_Update, Allocator> {
public:
	typedef Key key_type;
	typedef null_type mapped_type;
	typedef Key value_type;
	typedef Cmp_Fn cmp_fn;
	typedef Tag container_category;
	typedef Allocator allocator_type;
	typedef std::size_t size_type;

private:
	typedef typename detail::rebind_allocator<Allocator, value_type>::type value_allocator_type;
	typedef std::set<Key, Cmp_Fn, value_allocator_type> container_type;

public:
	typedef typename container_type::iterator iterator;
	typedef typename container_type::const_iterator const_iterator;
	typedef typename container_type::iterator point_iterator;
	typedef typename container_type::const_iterator const_point_iterator;
	typedef typename container_type::reverse_iterator reverse_iterator;
	typedef typename container_type::const_reverse_iterator const_reverse_iterator;

	tree() = default;
	explicit tree(const Cmp_Fn& compare) : values_(compare) {}

	template <typename InputIt>
	tree(InputIt first, InputIt last) : values_(first, last) {}

	bool empty() const { return values_.empty(); }
	size_type size() const { return values_.size(); }
	size_type max_size() const { return values_.max_size(); }

	iterator begin() { return values_.begin(); }
	const_iterator begin() const { return values_.begin(); }
	const_iterator cbegin() const { return values_.cbegin(); }
	iterator end() { return values_.end(); }
	const_iterator end() const { return values_.end(); }
	const_iterator cend() const { return values_.cend(); }
	reverse_iterator rbegin() { return values_.rbegin(); }
	const_reverse_iterator rbegin() const { return values_.rbegin(); }
	reverse_iterator rend() { return values_.rend(); }
	const_reverse_iterator rend() const { return values_.rend(); }

	std::pair<iterator, bool> insert(const value_type& value) { return values_.insert(value); }
	std::pair<iterator, bool> insert(value_type&& value) { return values_.insert(std::move(value)); }

	template <typename InputIt>
	void insert(InputIt first, InputIt last) {
		values_.insert(first, last);
	}

	iterator find(const key_type& key) { return values_.find(key); }
	const_iterator find(const key_type& key) const { return values_.find(key); }
	bool contains(const key_type& key) const { return values_.find(key) != values_.end(); }
	size_type count(const key_type& key) const { return values_.count(key); }

	iterator lower_bound(const key_type& key) { return values_.lower_bound(key); }
	const_iterator lower_bound(const key_type& key) const { return values_.lower_bound(key); }
	iterator upper_bound(const key_type& key) { return values_.upper_bound(key); }
	const_iterator upper_bound(const key_type& key) const { return values_.upper_bound(key); }

	size_type erase(const key_type& key) { return values_.erase(key); }
	iterator erase(const_iterator position) { return values_.erase(position); }
	iterator erase(const_iterator first, const_iterator last) { return values_.erase(first, last); }
	void clear() { values_.clear(); }
	void swap(tree& other) { values_.swap(other.values_); }

	iterator find_by_order(size_type order) {
		return detail::advance_to_order(values_.begin(), values_.end(), order);
	}

	const_iterator find_by_order(size_type order) const {
		return detail::advance_to_order(values_.begin(), values_.end(), order);
	}

	size_type order_of_key(const key_type& key) const {
		return static_cast<size_type>(std::distance(values_.begin(), values_.lower_bound(key)));
	}

	void join(tree& other) {
		values_.insert(other.values_.begin(), other.values_.end());
		other.values_.clear();
	}

	void split(const key_type& key, tree& other) {
		iterator first = values_.upper_bound(key);
		other.values_.insert(first, values_.end());
		values_.erase(first, values_.end());
	}

private:
	container_type values_;
};

template <
	typename Key,
	typename Mapped,
	typename Hash_Fn = std::hash<Key>,
	typename Eq_Fn = std::equal_to<Key>,
	typename Comb_Hash_Fn = void,
	typename Resize_Policy = void,
	bool Store_Hash = false,
	typename Allocator = std::allocator<char>
>
using gp_hash_table = typename detail::hash_table_selector<
	Key,
	Mapped,
	Hash_Fn,
	Eq_Fn,
	Allocator
>::type;

template <
	typename Key,
	typename Mapped,
	typename Hash_Fn = std::hash<Key>,
	typename Eq_Fn = std::equal_to<Key>,
	typename Comb_Hash_Fn = void,
	typename Resize_Policy = void,
	bool Store_Hash = false,
	typename Allocator = std::allocator<char>
>
using cc_hash_table = typename detail::hash_table_selector<
	Key,
	Mapped,
	Hash_Fn,
	Eq_Fn,
	Allocator
>::type;

} // namespace __gnu_pbds

#endif
`,io=String.raw`#ifndef WASM_CLANG_EXT_PB_DS_HASH_POLICY_HPP
#define WASM_CLANG_EXT_PB_DS_HASH_POLICY_HPP

#include <cstddef>

namespace __gnu_pbds {

template <typename Size_Type = std::size_t>
class direct_mask_range_hashing {
public:
	typedef Size_Type size_type;
};

template <typename Size_Type = std::size_t>
class direct_mod_range_hashing {
public:
	typedef Size_Type size_type;
};

template <typename Size_Type = std::size_t>
class linear_probe_fn {
public:
	typedef Size_Type size_type;
};

template <typename Size_Type = std::size_t>
class quadratic_probe_fn {
public:
	typedef Size_Type size_type;
};

class hash_exponential_size_policy {};
class hash_prime_size_policy {};

template <bool External_Load_Access = false, typename Size_Type = std::size_t>
class hash_load_check_resize_trigger {
public:
	typedef Size_Type size_type;
	explicit hash_load_check_resize_trigger(float = 0.125, float = 0.5) {}
};

template <bool External_Load_Access = false, typename Size_Type = std::size_t>
class cc_hash_max_collision_check_resize_trigger {
public:
	typedef Size_Type size_type;
	explicit cc_hash_max_collision_check_resize_trigger(float = 0.5) {}
};

template <
	typename Size_Policy = hash_exponential_size_policy,
	typename Trigger_Policy = hash_load_check_resize_trigger<>,
	bool External_Size_Access = false,
	typename Size_Type = std::size_t
>
class hash_standard_resize_policy {
public:
	typedef Size_Type size_type;
	hash_standard_resize_policy() = default;
	explicit hash_standard_resize_policy(const Size_Policy&) {}
	hash_standard_resize_policy(const Size_Policy&, const Trigger_Policy&) {}
};

} // namespace __gnu_pbds

#endif
`,so=String.raw`#ifndef WASM_CLANG_EXT_PB_DS_PRIORITY_QUEUE_HPP
#define WASM_CLANG_EXT_PB_DS_PRIORITY_QUEUE_HPP

#include <algorithm>
#include <cstddef>
#include <functional>
#include <memory>
#include <queue>
#include <utility>
#include <vector>

namespace __gnu_pbds {

struct pairing_heap_tag {};
struct binary_heap_tag {};
struct binomial_heap_tag {};
struct rc_binomial_heap_tag {};
struct thin_heap_tag {};

namespace detail {

template <typename Allocator, typename Value>
struct priority_queue_rebind_allocator {
	typedef typename std::allocator_traits<Allocator>::template rebind_alloc<Value> type;
};

} // namespace detail

template <
	typename Value_Type,
	typename Cmp_Fn = std::less<Value_Type>,
	typename Tag = pairing_heap_tag,
	typename Allocator = std::allocator<char>
>
class priority_queue {
public:
	typedef Value_Type value_type;
	typedef Cmp_Fn cmp_fn;
	typedef Tag container_category;
	typedef Allocator allocator_type;
	typedef std::size_t size_type;
	typedef value_type& reference;
	typedef const value_type& const_reference;

private:
	typedef typename detail::priority_queue_rebind_allocator<Allocator, value_type>::type value_allocator_type;
	typedef std::vector<value_type, value_allocator_type> container_type;

public:
	typedef typename container_type::iterator point_iterator;
	typedef typename container_type::const_iterator const_point_iterator;

	priority_queue() : values_(), compare_() {
		std::make_heap(values_.begin(), values_.end(), compare_);
	}

	explicit priority_queue(const Cmp_Fn& compare) : values_(), compare_(compare) {
		std::make_heap(values_.begin(), values_.end(), compare_);
	}

	template <typename InputIt>
	priority_queue(InputIt first, InputIt last) : values_(first, last), compare_() {
		std::make_heap(values_.begin(), values_.end(), compare_);
	}

	bool empty() const { return values_.empty(); }
	size_type size() const { return values_.size(); }
	const_reference top() const { return values_.front(); }
	void clear() { values_.clear(); }
	void swap(priority_queue& other) {
		values_.swap(other.values_);
		std::swap(compare_, other.compare_);
	}

	point_iterator push(const_reference value) {
		values_.push_back(value);
		std::push_heap(values_.begin(), values_.end(), compare_);
		return values_.empty() ? values_.end() : values_.begin();
	}

	void pop() {
		std::pop_heap(values_.begin(), values_.end(), compare_);
		values_.pop_back();
	}

	void modify(point_iterator position, const_reference value) {
		if (position == values_.end()) return;
		*position = value;
		std::make_heap(values_.begin(), values_.end(), compare_);
	}

	void erase(point_iterator position) {
		if (position == values_.end()) return;
		values_.erase(position);
		std::make_heap(values_.begin(), values_.end(), compare_);
	}

	void join(priority_queue& other) {
		values_.insert(values_.end(), other.values_.begin(), other.values_.end());
		other.values_.clear();
		std::make_heap(values_.begin(), values_.end(), compare_);
	}

private:
	container_type values_;
	Cmp_Fn compare_;
};

} // namespace __gnu_pbds

#endif
`,oo=String.raw`#ifndef WASM_CLANG_EXT_ROPE
#define WASM_CLANG_EXT_ROPE

#include <algorithm>
#include <cstddef>
#include <iosfwd>
#include <iterator>
#include <memory>
#include <ostream>
#include <string>
#include <utility>

namespace __gnu_cxx {

template <typename CharT, typename Alloc = std::allocator<CharT>>
class rope {
public:
	typedef CharT value_type;
	typedef Alloc allocator_type;
	typedef std::basic_string<CharT, std::char_traits<CharT>, Alloc> string_type;
	typedef typename string_type::traits_type traits_type;
	typedef typename string_type::size_type size_type;
	typedef typename string_type::difference_type difference_type;
	typedef typename string_type::reference reference;
	typedef typename string_type::const_reference const_reference;
	typedef typename string_type::iterator iterator;
	typedef typename string_type::const_iterator const_iterator;

	static const size_type npos = string_type::npos;

	rope() = default;
	rope(const rope&) = default;
	rope(rope&&) = default;
	rope& operator=(const rope&) = default;
	rope& operator=(rope&&) = default;

	rope(const CharT* value) : data_(value ? value : empty_c_str()) {}
	rope(const CharT* value, size_type count) : data_(value, count) {}
	rope(size_type count, CharT value) : data_(count, value) {}
	rope(const string_type& value) : data_(value) {}
	rope(string_type&& value) : data_(std::move(value)) {}

	template <typename InputIt>
	rope(InputIt first, InputIt last) : data_(first, last) {}

	bool empty() const { return data_.empty(); }
	size_type size() const { return data_.size(); }
	size_type length() const { return data_.length(); }
	size_type max_size() const { return data_.max_size(); }
	void clear() { data_.clear(); }

	const CharT* c_str() const { return data_.c_str(); }
	const string_type& str() const { return data_; }

	iterator begin() { return data_.begin(); }
	const_iterator begin() const { return data_.begin(); }
	const_iterator cbegin() const { return data_.cbegin(); }
	iterator end() { return data_.end(); }
	const_iterator end() const { return data_.end(); }
	const_iterator cend() const { return data_.cend(); }

	reference operator[](size_type index) { return data_[index]; }
	const_reference operator[](size_type index) const { return data_[index]; }
	reference at(size_type index) { return data_.at(index); }
	const_reference at(size_type index) const { return data_.at(index); }
	reference mutable_reference_at(size_type index) { return data_.at(index); }

	void push_back(CharT value) { data_.push_back(value); }
	void pop_back() { data_.pop_back(); }

	rope& append(const rope& value) {
		data_.append(value.data_);
		return *this;
	}

	rope& append(const CharT* value) {
		data_.append(value ? value : empty_c_str());
		return *this;
	}

	rope& append(const CharT* value, size_type count) {
		data_.append(value, count);
		return *this;
	}

	rope& append(size_type count, CharT value) {
		data_.append(count, value);
		return *this;
	}

	rope& insert(size_type position, const rope& value) {
		data_.insert(position, value.data_);
		return *this;
	}

	rope& insert(size_type position, const CharT* value) {
		data_.insert(position, value ? value : empty_c_str());
		return *this;
	}

	rope& insert(size_type position, const CharT* value, size_type count) {
		data_.insert(position, value, count);
		return *this;
	}

	rope& insert(size_type position, size_type count, CharT value) {
		data_.insert(position, count, value);
		return *this;
	}

	rope& erase(size_type position = 0, size_type count = npos) {
		data_.erase(position, count);
		return *this;
	}

	rope& replace(size_type position, size_type count, const rope& value) {
		data_.replace(position, count, value.data_);
		return *this;
	}

	rope& replace(size_type position, size_type count, const CharT* value) {
		data_.replace(position, count, value ? value : empty_c_str());
		return *this;
	}

	rope substr(size_type position = 0, size_type count = npos) const {
		return rope(data_.substr(position, count));
	}

	size_type copy(size_type position, size_type count, CharT* target) const {
		if (position > data_.size()) return 0;
		const size_type copied = std::min(count, data_.size() - position);
		traits_type::copy(target, data_.data() + position, copied);
		return copied;
	}

	int compare(const rope& value) const { return data_.compare(value.data_); }

	rope& operator+=(const rope& value) { return append(value); }
	rope& operator+=(const CharT* value) { return append(value); }
	rope& operator+=(CharT value) {
		push_back(value);
		return *this;
	}

private:
	static const CharT* empty_c_str() {
		static const CharT empty[1] = {};
		return empty;
	}

	string_type data_;
};

template <typename CharT, typename Alloc>
rope<CharT, Alloc> operator+(rope<CharT, Alloc> left, const rope<CharT, Alloc>& right) {
	left += right;
	return left;
}

template <typename CharT, typename Alloc>
bool operator==(const rope<CharT, Alloc>& left, const rope<CharT, Alloc>& right) {
	return left.compare(right) == 0;
}

template <typename CharT, typename Alloc>
bool operator!=(const rope<CharT, Alloc>& left, const rope<CharT, Alloc>& right) {
	return !(left == right);
}

template <typename CharT, typename Alloc>
bool operator<(const rope<CharT, Alloc>& left, const rope<CharT, Alloc>& right) {
	return left.compare(right) < 0;
}

template <typename CharT, typename Alloc>
std::basic_ostream<CharT>& operator<<(
	std::basic_ostream<CharT>& output,
	const rope<CharT, Alloc>& value
) {
	return output << value.str();
}

typedef rope<char> crope;
typedef rope<wchar_t> wrope;

} // namespace __gnu_cxx

#endif
`,ao=String.raw`#ifndef WASM_CLANG_SETJMP_H
#define WASM_CLANG_SETJMP_H

#ifdef __cplusplus
extern "C" {
#endif

typedef long jmp_buf[32];
int setjmp(jmp_buf);
__attribute__((noreturn)) void longjmp(jmp_buf, int);

#ifdef __cplusplus
}
#endif

#endif
`,lo=String.raw`#ifndef WASM_CLANG_BITS_STDCPP_H
#define WASM_CLANG_BITS_STDCPP_H

#include <algorithm>
#include <array>
#include <bitset>
#include <cassert>
#include <cctype>
#include <cerrno>
#include <cfloat>
#include <climits>
#include <cmath>
#include <cstddef>
#include <cstdint>
#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <deque>
#include <functional>
#include <iomanip>
#include <iostream>
#include <iterator>
#include <limits>
#include <list>
#include <map>
#include <memory>
#include <numeric>
#include <queue>
#include <set>
#include <sstream>
#include <stack>
#include <string>
#include <string_view>
#include <tuple>
#include <type_traits>
#include <unordered_map>
#include <unordered_set>
#include <utility>
#include <vector>

#endif
`,co=String.raw`#ifndef WASM_CLANG_BITS_EXTCXX_H
#define WASM_CLANG_BITS_EXTCXX_H

#include <bits/stdc++.h>
#include <ext/hash_map>
#include <ext/hash_set>
#include <ext/rope>
#include <ext/pb_ds/assoc_container.hpp>
#include <ext/pb_ds/hash_policy.hpp>
#include <ext/pb_ds/priority_queue.hpp>
#include <ext/pb_ds/tree_policy.hpp>

#endif
`,fo=[{path:"include/setjmp.h",contents:ao},{path:"include/bits/stdc++.h",contents:lo},{path:"include/bits/extc++.h",contents:co},{path:"include/c++/v1/ext/rope",contents:oo},{path:"include/c++/v1/ext/pb_ds/tree_policy.hpp",contents:_o},{path:"include/c++/v1/ext/pb_ds/assoc_container.hpp",contents:ro},{path:"include/c++/v1/ext/pb_ds/hash_policy.hpp",contents:io},{path:"include/c++/v1/ext/pb_ds/priority_queue.hpp",contents:so}];function Ai(t){t.addDirectory("include/c++/v1/ext/pb_ds"),t.addDirectory("include/bits");for(let e of fo)t.addFile(e.path,e.contents)}var yi=Object.freeze({"builtins.h":`/*===---- builtins.h - Standard header for extra builtins -----------------===*\\
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
\\*===----------------------------------------------------------------------===*/

/// Some legacy compilers have builtin definitions in a file named builtins.h.
/// This header file has been added to allow compatibility with code that was
/// written for those compilers. Code may have an include line for this file
/// and to avoid an error an empty file with this name is provided.
#ifndef __BUILTINS_H
#define __BUILTINS_H

#if defined(__MVS__) && __has_include_next(<builtins.h>)
#include_next <builtins.h>
#endif /* __MVS__ */
#endif /* __BUILTINS_H */
`,"float.h":`/*===---- float.h - Characteristics of floating point types ----------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#if defined(__MVS__) && __has_include_next(<float.h>)
#include <__float_header_macro.h>
#include_next <float.h>
#else

#if !defined(__need_infinity_nan)
#define __need_float_float
#if (defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L) ||              \\
    !defined(__STRICT_ANSI__)
#define __need_infinity_nan
#endif
#include <__float_header_macro.h>
#endif

#ifdef __need_float_float
/* If we're on MinGW, fall back to the system's float.h, which might have
 * additional definitions provided for Windows.
 * For more details see http://msdn.microsoft.com/en-us/library/y0ybw9fy.aspx
 *
 * Also fall back on AIX to allow additional definitions and
 * implementation-defined values.
 */
#if (defined(__MINGW32__) || defined(_MSC_VER) || defined(_AIX)) &&            \\
    __STDC_HOSTED__ && __has_include_next(<float.h>)

#  include_next <float.h>

#endif

#include <__float_float.h>
#undef __need_float_float
#endif

#ifdef __need_infinity_nan
#include <__float_infinity_nan.h>
#undef __need_infinity_nan
#endif

#endif /* __MVS__ */
`,"__float_float.h":`/*===---- __float_float.h --------------------------------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __CLANG_FLOAT_FLOAT_H
#define __CLANG_FLOAT_FLOAT_H

#if (defined(__MINGW32__) || defined(_MSC_VER) || defined(_AIX)) &&            \\
    __STDC_HOSTED__

/* Undefine anything that we'll be redefining below. */
#  undef FLT_EVAL_METHOD
#  undef FLT_ROUNDS
#  undef FLT_RADIX
#  undef FLT_MANT_DIG
#  undef DBL_MANT_DIG
#  undef LDBL_MANT_DIG
#if (defined(__STDC_VERSION__) && __STDC_VERSION__ >= 199901L) ||              \\
    !defined(__STRICT_ANSI__) ||                                               \\
    (defined(__cplusplus) && __cplusplus >= 201103L) ||                        \\
    (__STDC_HOSTED__ && defined(_AIX) && defined(_ALL_SOURCE))
#    undef DECIMAL_DIG
#  endif
#  undef FLT_DIG
#  undef DBL_DIG
#  undef LDBL_DIG
#  undef FLT_MIN_EXP
#  undef DBL_MIN_EXP
#  undef LDBL_MIN_EXP
#  undef FLT_MIN_10_EXP
#  undef DBL_MIN_10_EXP
#  undef LDBL_MIN_10_EXP
#  undef FLT_MAX_EXP
#  undef DBL_MAX_EXP
#  undef LDBL_MAX_EXP
#  undef FLT_MAX_10_EXP
#  undef DBL_MAX_10_EXP
#  undef LDBL_MAX_10_EXP
#  undef FLT_MAX
#  undef DBL_MAX
#  undef LDBL_MAX
#  undef FLT_EPSILON
#  undef DBL_EPSILON
#  undef LDBL_EPSILON
#  undef FLT_MIN
#  undef DBL_MIN
#  undef LDBL_MIN
#if (defined(__STDC_VERSION__) && __STDC_VERSION__ >= 201112L) ||              \\
    !defined(__STRICT_ANSI__) ||                                               \\
    (defined(__cplusplus) && __cplusplus >= 201703L) ||                        \\
    (__STDC_HOSTED__ && defined(_AIX) && defined(_ALL_SOURCE))
#    undef FLT_TRUE_MIN
#    undef DBL_TRUE_MIN
#    undef LDBL_TRUE_MIN
#    undef FLT_DECIMAL_DIG
#    undef DBL_DECIMAL_DIG
#    undef LDBL_DECIMAL_DIG
#    undef FLT_HAS_SUBNORM
#    undef DBL_HAS_SUBNORM
#    undef LDBL_HAS_SUBNORM
#  endif
#if (defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L) ||              \\
    !defined(__STRICT_ANSI__)
#    undef FLT_NORM_MAX
#    undef DBL_NORM_MAX
#    undef LDBL_NORM_MAX
#endif
#endif

#if (defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L) ||              \\
    !defined(__STRICT_ANSI__)
#  undef FLT_SNAN
#  undef DBL_SNAN
#  undef LDBL_SNAN
#endif

/* Characteristics of floating point types, C99 5.2.4.2.2 */

#if (defined(__STDC_VERSION__) && __STDC_VERSION__ >= 199901L) ||              \\
    (defined(__cplusplus) && __cplusplus >= 201103L)
#define FLT_EVAL_METHOD __FLT_EVAL_METHOD__
#endif
#define FLT_ROUNDS (__builtin_flt_rounds())
#define FLT_RADIX __FLT_RADIX__

#define FLT_MANT_DIG __FLT_MANT_DIG__
#define DBL_MANT_DIG __DBL_MANT_DIG__
#define LDBL_MANT_DIG __LDBL_MANT_DIG__

#if (defined(__STDC_VERSION__) && __STDC_VERSION__ >= 199901L) ||              \\
    !defined(__STRICT_ANSI__) ||                                               \\
    (defined(__cplusplus) && __cplusplus >= 201103L) ||                        \\
    (__STDC_HOSTED__ && defined(_AIX) && defined(_ALL_SOURCE))
#  define DECIMAL_DIG __DECIMAL_DIG__
#endif

#define FLT_DIG __FLT_DIG__
#define DBL_DIG __DBL_DIG__
#define LDBL_DIG __LDBL_DIG__

#define FLT_MIN_EXP __FLT_MIN_EXP__
#define DBL_MIN_EXP __DBL_MIN_EXP__
#define LDBL_MIN_EXP __LDBL_MIN_EXP__

#define FLT_MIN_10_EXP __FLT_MIN_10_EXP__
#define DBL_MIN_10_EXP __DBL_MIN_10_EXP__
#define LDBL_MIN_10_EXP __LDBL_MIN_10_EXP__

#define FLT_MAX_EXP __FLT_MAX_EXP__
#define DBL_MAX_EXP __DBL_MAX_EXP__
#define LDBL_MAX_EXP __LDBL_MAX_EXP__

#define FLT_MAX_10_EXP __FLT_MAX_10_EXP__
#define DBL_MAX_10_EXP __DBL_MAX_10_EXP__
#define LDBL_MAX_10_EXP __LDBL_MAX_10_EXP__

#define FLT_MAX __FLT_MAX__
#define DBL_MAX __DBL_MAX__
#define LDBL_MAX __LDBL_MAX__

#define FLT_EPSILON __FLT_EPSILON__
#define DBL_EPSILON __DBL_EPSILON__
#define LDBL_EPSILON __LDBL_EPSILON__

#define FLT_MIN __FLT_MIN__
#define DBL_MIN __DBL_MIN__
#define LDBL_MIN __LDBL_MIN__

#if (defined(__STDC_VERSION__) && __STDC_VERSION__ >= 201112L) ||              \\
    !defined(__STRICT_ANSI__) ||                                               \\
    (defined(__cplusplus) && __cplusplus >= 201703L) ||                        \\
    (__STDC_HOSTED__ && defined(_AIX) && defined(_ALL_SOURCE))
#  define FLT_TRUE_MIN __FLT_DENORM_MIN__
#  define DBL_TRUE_MIN __DBL_DENORM_MIN__
#  define LDBL_TRUE_MIN __LDBL_DENORM_MIN__
#  define FLT_DECIMAL_DIG __FLT_DECIMAL_DIG__
#  define DBL_DECIMAL_DIG __DBL_DECIMAL_DIG__
#  define LDBL_DECIMAL_DIG __LDBL_DECIMAL_DIG__
#  define FLT_HAS_SUBNORM __FLT_HAS_DENORM__
#  define DBL_HAS_SUBNORM __DBL_HAS_DENORM__
#  define LDBL_HAS_SUBNORM __LDBL_HAS_DENORM__
#endif

#if (defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L) ||              \\
    !defined(__STRICT_ANSI__)
   /* C23 5.2.5.3.2p28 */
#  define FLT_SNAN (__builtin_nansf(""))
#  define DBL_SNAN (__builtin_nans(""))
#  define LDBL_SNAN (__builtin_nansl(""))

   /* C23 5.2.5.3.3p32 */
#  define FLT_NORM_MAX __FLT_NORM_MAX__
#  define DBL_NORM_MAX __DBL_NORM_MAX__
#  define LDBL_NORM_MAX __LDBL_NORM_MAX__
#endif

#ifdef __STDC_WANT_IEC_60559_TYPES_EXT__
#  define FLT16_MANT_DIG    __FLT16_MANT_DIG__
#  define FLT16_DECIMAL_DIG __FLT16_DECIMAL_DIG__
#  define FLT16_DIG         __FLT16_DIG__
#  define FLT16_MIN_EXP     __FLT16_MIN_EXP__
#  define FLT16_MIN_10_EXP  __FLT16_MIN_10_EXP__
#  define FLT16_MAX_EXP     __FLT16_MAX_EXP__
#  define FLT16_MAX_10_EXP  __FLT16_MAX_10_EXP__
#  define FLT16_MAX         __FLT16_MAX__
#  define FLT16_EPSILON     __FLT16_EPSILON__
#  define FLT16_MIN         __FLT16_MIN__
#  define FLT16_TRUE_MIN    __FLT16_TRUE_MIN__
#endif /* __STDC_WANT_IEC_60559_TYPES_EXT__ */

#endif /* __CLANG_FLOAT_FLOAT_H */
`,"__float_header_macro.h":`/*===---- __float_header_macro.h -------------------------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __CLANG_FLOAT_H
#define __CLANG_FLOAT_H
#endif /* __CLANG_FLOAT_H */
`,"__float_infinity_nan.h":`/*===---- __float_infinity_nan.h -------------------------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __CLANG_FLOAT_INFINITY_NAN_H
#define __CLANG_FLOAT_INFINITY_NAN_H

/* C23 5.2.5.3.3p29-30 */
#undef INFINITY
#undef NAN

#define INFINITY (__builtin_inff())
#define NAN (__builtin_nanf(""))

#endif /* __CLANG_FLOAT_INFINITY_NAN_H */
`,"inttypes.h":`/*===---- inttypes.h - Standard header for integer printf macros ----------===*\\
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
\\*===----------------------------------------------------------------------===*/

#ifndef __CLANG_INTTYPES_H
// AIX system headers need inttypes.h to be re-enterable while _STD_TYPES_T
// is defined until an inclusion of it without _STD_TYPES_T occurs, in which
// case the header guard macro is defined.
#if !defined(_AIX) || !defined(_STD_TYPES_T)
#define __CLANG_INTTYPES_H
#endif
#if defined(__MVS__) && __has_include_next(<inttypes.h>)
#include_next <inttypes.h>
#else

#if defined(_MSC_VER) && _MSC_VER < 1800
#error MSVC does not have inttypes.h prior to Visual Studio 2013
#endif

#include_next <inttypes.h>

#if defined(_MSC_VER) && _MSC_VER < 1900
/* MSVC headers define int32_t as int, but PRIx32 as "lx" instead of "x".
 * This triggers format warnings, so fix it up here. */
#undef PRId32
#undef PRIdLEAST32
#undef PRIdFAST32
#undef PRIi32
#undef PRIiLEAST32
#undef PRIiFAST32
#undef PRIo32
#undef PRIoLEAST32
#undef PRIoFAST32
#undef PRIu32
#undef PRIuLEAST32
#undef PRIuFAST32
#undef PRIx32
#undef PRIxLEAST32
#undef PRIxFAST32
#undef PRIX32
#undef PRIXLEAST32
#undef PRIXFAST32

#undef SCNd32
#undef SCNdLEAST32
#undef SCNdFAST32
#undef SCNi32
#undef SCNiLEAST32
#undef SCNiFAST32
#undef SCNo32
#undef SCNoLEAST32
#undef SCNoFAST32
#undef SCNu32
#undef SCNuLEAST32
#undef SCNuFAST32
#undef SCNx32
#undef SCNxLEAST32
#undef SCNxFAST32

#define PRId32 "d"
#define PRIdLEAST32 "d"
#define PRIdFAST32 "d"
#define PRIi32 "i"
#define PRIiLEAST32 "i"
#define PRIiFAST32 "i"
#define PRIo32 "o"
#define PRIoLEAST32 "o"
#define PRIoFAST32 "o"
#define PRIu32 "u"
#define PRIuLEAST32 "u"
#define PRIuFAST32 "u"
#define PRIx32 "x"
#define PRIxLEAST32 "x"
#define PRIxFAST32 "x"
#define PRIX32 "X"
#define PRIXLEAST32 "X"
#define PRIXFAST32 "X"

#define SCNd32 "d"
#define SCNdLEAST32 "d"
#define SCNdFAST32 "d"
#define SCNi32 "i"
#define SCNiLEAST32 "i"
#define SCNiFAST32 "i"
#define SCNo32 "o"
#define SCNoLEAST32 "o"
#define SCNoFAST32 "o"
#define SCNu32 "u"
#define SCNuLEAST32 "u"
#define SCNuFAST32 "u"
#define SCNx32 "x"
#define SCNxLEAST32 "x"
#define SCNxFAST32 "x"
#endif

#endif /* __MVS__ */
#endif /* __CLANG_INTTYPES_H */
`,"iso646.h":`/*===---- iso646.h - Standard header for alternate spellings of operators---===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __ISO646_H
#define __ISO646_H
#if defined(__MVS__) && __has_include_next(<iso646.h>)
#include_next <iso646.h>
#else

#ifndef __cplusplus
#define and    &&
#define and_eq &=
#define bitand &
#define bitor  |
#define compl  ~
#define not    !
#define not_eq !=
#define or     ||
#define or_eq  |=
#define xor    ^
#define xor_eq ^=
#endif

#endif /* __MVS__ */
#endif /* __ISO646_H */
`,"limits.h":`/*===---- limits.h - Standard header for integer sizes --------------------===*\\
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
\\*===----------------------------------------------------------------------===*/

#ifndef __CLANG_LIMITS_H
#define __CLANG_LIMITS_H

#if defined(__MVS__) && __has_include_next(<limits.h>)
#include_next <limits.h>
#else

/* The system's limits.h may, in turn, try to #include_next GCC's limits.h.
   Avert this #include_next madness. */
#if defined __GNUC__ && !defined _GCC_LIMITS_H_
#define _GCC_LIMITS_H_
#endif

/* System headers include a number of constants from POSIX in <limits.h>.
   Include it if we're hosted. */
#if __STDC_HOSTED__ && __has_include_next(<limits.h>)
#include_next <limits.h>
#endif

/* Many system headers try to "help us out" by defining these.  No really, we
   know how big each datatype is. */
#undef  SCHAR_MIN
#undef  SCHAR_MAX
#undef  UCHAR_MAX
#undef  SHRT_MIN
#undef  SHRT_MAX
#undef  USHRT_MAX
#undef  INT_MIN
#undef  INT_MAX
#undef  UINT_MAX
#undef  LONG_MIN
#undef  LONG_MAX
#undef  ULONG_MAX

#undef  CHAR_BIT
#undef  CHAR_MIN
#undef  CHAR_MAX

/* C90/99 5.2.4.2.1 */
#define SCHAR_MAX __SCHAR_MAX__
#define SHRT_MAX  __SHRT_MAX__
#define INT_MAX   __INT_MAX__
#define LONG_MAX  __LONG_MAX__

#define SCHAR_MIN (-__SCHAR_MAX__-1)
#define SHRT_MIN  (-__SHRT_MAX__ -1)
#define INT_MIN   (-__INT_MAX__  -1)
#define LONG_MIN  (-__LONG_MAX__ -1L)

#define UCHAR_MAX (__SCHAR_MAX__*2  +1)
#if __SHRT_WIDTH__ < __INT_WIDTH__
#define USHRT_MAX (__SHRT_MAX__ * 2 + 1)
#else
#define USHRT_MAX (__SHRT_MAX__ * 2U + 1U)
#endif
#define UINT_MAX  (__INT_MAX__  *2U +1U)
#define ULONG_MAX (__LONG_MAX__ *2UL+1UL)

#ifndef MB_LEN_MAX
#define MB_LEN_MAX 1
#endif

#define CHAR_BIT  __CHAR_BIT__

/* C23 5.2.4.2.1 */
#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
#define BOOL_WIDTH   __BOOL_WIDTH__
#define CHAR_WIDTH   CHAR_BIT
#define SCHAR_WIDTH  CHAR_BIT
#define UCHAR_WIDTH  CHAR_BIT
#define USHRT_WIDTH  __SHRT_WIDTH__
#define SHRT_WIDTH   __SHRT_WIDTH__
#define UINT_WIDTH   __INT_WIDTH__
#define INT_WIDTH    __INT_WIDTH__
#define ULONG_WIDTH  __LONG_WIDTH__
#define LONG_WIDTH   __LONG_WIDTH__
#define ULLONG_WIDTH __LLONG_WIDTH__
#define LLONG_WIDTH  __LLONG_WIDTH__

#define BITINT_MAXWIDTH __BITINT_MAXWIDTH__
#endif

#ifdef __CHAR_UNSIGNED__  /* -funsigned-char */
#define CHAR_MIN 0
#define CHAR_MAX UCHAR_MAX
#else
#define CHAR_MIN SCHAR_MIN
#define CHAR_MAX __SCHAR_MAX__
#endif

/* C99 5.2.4.2.1: Added long long.
   C++11 18.3.3.2: same contents as the Standard C Library header <limits.h>.
 */
#if (defined(__STDC_VERSION__) && __STDC_VERSION__ >= 199901L) ||              \\
    (defined(__cplusplus) && __cplusplus >= 201103L)

#undef  LLONG_MIN
#undef  LLONG_MAX
#undef  ULLONG_MAX

#define LLONG_MAX  __LONG_LONG_MAX__
#define LLONG_MIN  (-__LONG_LONG_MAX__-1LL)
#define ULLONG_MAX (__LONG_LONG_MAX__*2ULL+1ULL)
#endif

/* LONG_LONG_MIN/LONG_LONG_MAX/ULONG_LONG_MAX are a GNU extension. Android's
   bionic also defines them. It's too bad that we don't have something like
   #pragma poison that could be used to deprecate a macro - the code should just
   use LLONG_MAX and friends.
 */
#if (defined(__GNU_LIBRARY__) ? defined(__USE_GNU)                             \\
                              : !defined(__STRICT_ANSI__)) ||                  \\
    defined(__BIONIC__)

#undef   LONG_LONG_MIN
#undef   LONG_LONG_MAX
#undef   ULONG_LONG_MAX

#define LONG_LONG_MAX  __LONG_LONG_MAX__
#define LONG_LONG_MIN  (-__LONG_LONG_MAX__-1LL)
#define ULONG_LONG_MAX (__LONG_LONG_MAX__*2ULL+1ULL)
#endif

#endif /* __MVS__ */
#endif /* __CLANG_LIMITS_H */
`,"stdalign.h":`/*===---- stdalign.h - Standard header for alignment ------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __STDALIGN_H
#define __STDALIGN_H

#if defined(__cplusplus) ||                                                    \\
    (defined(__STDC_VERSION__) && __STDC_VERSION__ < 202311L)
#ifndef __cplusplus
#define alignas _Alignas
#define alignof _Alignof
#endif

#define __alignas_is_defined 1
#define __alignof_is_defined 1
#endif /* __STDC_VERSION__ */

#endif /* __STDALIGN_H */
`,"stdarg.h":`/*===---- stdarg.h - Variable argument handling ----------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

/*
 * This header is designed to be included multiple times. If any of the __need_
 * macros are defined, then only that subset of interfaces are provided. This
 * can be useful for POSIX headers that need to not expose all of stdarg.h, but
 * need to use some of its interfaces. Otherwise this header provides all of
 * the expected interfaces.
 *
 * When clang modules are enabled, this header is a textual header to support
 * the multiple include behavior. As such, it doesn't directly declare anything
 * so that it doesn't add duplicate declarations to all of its includers'
 * modules.
 */
#if defined(__MVS__) && __has_include_next(<stdarg.h>)
#undef __need___va_list
#undef __need_va_list
#undef __need_va_arg
#undef __need___va_copy
#undef __need_va_copy
#include <__stdarg_header_macro.h>
#include_next <stdarg.h>

#else
#if !defined(__need___va_list) && !defined(__need_va_list) &&                  \\
    !defined(__need_va_arg) && !defined(__need___va_copy) &&                   \\
    !defined(__need_va_copy)
#define __need___va_list
#define __need_va_list
#define __need_va_arg
#define __need___va_copy
/* GCC always defines __va_copy, but does not define va_copy unless in c99 mode
 * or -ansi is not specified, since it was not part of C90.
 */
#if (defined(__STDC_VERSION__) && __STDC_VERSION__ >= 199901L) ||              \\
    (defined(__cplusplus) && __cplusplus >= 201103L) ||                        \\
    !defined(__STRICT_ANSI__)
#define __need_va_copy
#endif
#include <__stdarg_header_macro.h>
#endif

#ifdef __need___va_list
#include <__stdarg___gnuc_va_list.h>
#undef __need___va_list
#endif /* defined(__need___va_list) */

#ifdef __need_va_list
#include <__stdarg_va_list.h>
#undef __need_va_list
#endif /* defined(__need_va_list) */

#ifdef __need_va_arg
#include <__stdarg_va_arg.h>
#undef __need_va_arg
#endif /* defined(__need_va_arg) */

#ifdef __need___va_copy
#include <__stdarg___va_copy.h>
#undef __need___va_copy
#endif /* defined(__need___va_copy) */

#ifdef __need_va_copy
#include <__stdarg_va_copy.h>
#undef __need_va_copy
#endif /* defined(__need_va_copy) */

#endif /* __MVS__ */
`,"__stdarg___gnuc_va_list.h":`/*===---- __stdarg___gnuc_va_list.h - Definition of __gnuc_va_list ---------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __GNUC_VA_LIST
#define __GNUC_VA_LIST
typedef __builtin_va_list __gnuc_va_list;
#endif
`,"__stdarg___va_copy.h":`/*===---- __stdarg___va_copy.h - Definition of __va_copy -------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __va_copy
#define __va_copy(d, s) __builtin_va_copy(d, s)
#endif
`,"__stdarg_header_macro.h":`/*===---- __stdarg_header_macro.h ------------------------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __STDARG_H
#define __STDARG_H
#endif
`,"__stdarg_va_arg.h":`/*===---- __stdarg_va_arg.h - Definitions of va_start, va_arg, va_end-------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef va_arg

#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
/* C23 uses a special builtin. */
#define va_start(...) __builtin_c23_va_start(__VA_ARGS__)
#else
/* Versions before C23 do require the second parameter. */
#define va_start(ap, param) __builtin_va_start(ap, param)
#endif
#define va_end(ap) __builtin_va_end(ap)
#define va_arg(ap, type) __builtin_va_arg(ap, type)

#endif
`,"__stdarg_va_copy.h":`/*===---- __stdarg_va_copy.h - Definition of va_copy------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef va_copy
#define va_copy(dest, src) __builtin_va_copy(dest, src)
#endif
`,"__stdarg_va_list.h":`/*===---- __stdarg_va_list.h - Definition of va_list -----------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef _VA_LIST
#define _VA_LIST
typedef __builtin_va_list va_list;
#endif
`,"stdatomic.h":`/*===---- stdatomic.h - Standard header for atomic types and operations -----===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __CLANG_STDATOMIC_H
#define __CLANG_STDATOMIC_H

/* If we're hosted, fall back to the system's stdatomic.h. FreeBSD, for
 * example, already has a Clang-compatible stdatomic.h header.
 *
 * Exclude the MSVC path as well as the MSVC header as of the 14.31.30818
 * explicitly disallows \`stdatomic.h\` in the C mode via an \`#error\`.  Fallback
 * to the clang resource header until that is fully supported.  The
 * \`stdatomic.h\` header requires C++23 or newer.
 */
#if __STDC_HOSTED__ &&                                                         \\
    __has_include_next(<stdatomic.h>) &&                                       \\
    (!defined(_MSC_VER) || (defined(__cplusplus) && __cplusplus >= 202002L))
# include_next <stdatomic.h>
#else

#include <stddef.h>
#include <stdint.h>

#ifdef __cplusplus
extern "C" {
#endif

/* 7.17.1 Introduction */

#define ATOMIC_BOOL_LOCK_FREE       __CLANG_ATOMIC_BOOL_LOCK_FREE
#define ATOMIC_CHAR_LOCK_FREE       __CLANG_ATOMIC_CHAR_LOCK_FREE
#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
#define ATOMIC_CHAR8_T_LOCK_FREE    __CLANG_ATOMIC_CHAR8_T_LOCK_FREE
#endif
#define ATOMIC_CHAR16_T_LOCK_FREE   __CLANG_ATOMIC_CHAR16_T_LOCK_FREE
#define ATOMIC_CHAR32_T_LOCK_FREE   __CLANG_ATOMIC_CHAR32_T_LOCK_FREE
#define ATOMIC_WCHAR_T_LOCK_FREE    __CLANG_ATOMIC_WCHAR_T_LOCK_FREE
#define ATOMIC_SHORT_LOCK_FREE      __CLANG_ATOMIC_SHORT_LOCK_FREE
#define ATOMIC_INT_LOCK_FREE        __CLANG_ATOMIC_INT_LOCK_FREE
#define ATOMIC_LONG_LOCK_FREE       __CLANG_ATOMIC_LONG_LOCK_FREE
#define ATOMIC_LLONG_LOCK_FREE      __CLANG_ATOMIC_LLONG_LOCK_FREE
#define ATOMIC_POINTER_LOCK_FREE    __CLANG_ATOMIC_POINTER_LOCK_FREE

/* 7.17.2 Initialization */
#if (defined(__STDC_VERSION__) && __STDC_VERSION__ < 202311L) ||               \\
    defined(__cplusplus)
/* ATOMIC_VAR_INIT was removed in C23, but still remains in C++23. */
#define ATOMIC_VAR_INIT(value) (value)
#endif

#if ((defined(__STDC_VERSION__) && __STDC_VERSION__ >= 201710L &&              \\
      __STDC_VERSION__ < 202311L) ||                                           \\
     (defined(__cplusplus) && __cplusplus >= 202002L)) &&                      \\
    !defined(_CLANG_DISABLE_CRT_DEPRECATION_WARNINGS)
/* ATOMIC_VAR_INIT was deprecated in C17 and C++20. */
#pragma clang deprecated(ATOMIC_VAR_INIT)
#endif
#define atomic_init __c11_atomic_init

/* 7.17.3 Order and consistency */

typedef enum memory_order {
  memory_order_relaxed = __ATOMIC_RELAXED,
  memory_order_consume = __ATOMIC_CONSUME,
  memory_order_acquire = __ATOMIC_ACQUIRE,
  memory_order_release = __ATOMIC_RELEASE,
  memory_order_acq_rel = __ATOMIC_ACQ_REL,
  memory_order_seq_cst = __ATOMIC_SEQ_CST
} memory_order;

#define kill_dependency(y) (y)

/* 7.17.4 Fences */

/* These should be provided by the libc implementation. */
void atomic_thread_fence(memory_order);
void atomic_signal_fence(memory_order);

#define atomic_thread_fence(order) __c11_atomic_thread_fence(order)
#define atomic_signal_fence(order) __c11_atomic_signal_fence(order)

/* 7.17.5 Lock-free property */

#define atomic_is_lock_free(obj) __c11_atomic_is_lock_free(sizeof(*(obj)))

/* 7.17.6 Atomic integer types */

#ifdef __cplusplus
typedef _Atomic(bool)               atomic_bool;
#else
typedef _Atomic(_Bool)              atomic_bool;
#endif
typedef _Atomic(char)               atomic_char;
typedef _Atomic(signed char)        atomic_schar;
typedef _Atomic(unsigned char)      atomic_uchar;
typedef _Atomic(short)              atomic_short;
typedef _Atomic(unsigned short)     atomic_ushort;
typedef _Atomic(int)                atomic_int;
typedef _Atomic(unsigned int)       atomic_uint;
typedef _Atomic(long)               atomic_long;
typedef _Atomic(unsigned long)      atomic_ulong;
typedef _Atomic(long long)          atomic_llong;
typedef _Atomic(unsigned long long) atomic_ullong;
#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
typedef _Atomic(unsigned char)      atomic_char8_t;
#endif
typedef _Atomic(uint_least16_t)     atomic_char16_t;
typedef _Atomic(uint_least32_t)     atomic_char32_t;
typedef _Atomic(wchar_t)            atomic_wchar_t;
typedef _Atomic(int_least8_t)       atomic_int_least8_t;
typedef _Atomic(uint_least8_t)      atomic_uint_least8_t;
typedef _Atomic(int_least16_t)      atomic_int_least16_t;
typedef _Atomic(uint_least16_t)     atomic_uint_least16_t;
typedef _Atomic(int_least32_t)      atomic_int_least32_t;
typedef _Atomic(uint_least32_t)     atomic_uint_least32_t;
typedef _Atomic(int_least64_t)      atomic_int_least64_t;
typedef _Atomic(uint_least64_t)     atomic_uint_least64_t;
typedef _Atomic(int_fast8_t)        atomic_int_fast8_t;
typedef _Atomic(uint_fast8_t)       atomic_uint_fast8_t;
typedef _Atomic(int_fast16_t)       atomic_int_fast16_t;
typedef _Atomic(uint_fast16_t)      atomic_uint_fast16_t;
typedef _Atomic(int_fast32_t)       atomic_int_fast32_t;
typedef _Atomic(uint_fast32_t)      atomic_uint_fast32_t;
typedef _Atomic(int_fast64_t)       atomic_int_fast64_t;
typedef _Atomic(uint_fast64_t)      atomic_uint_fast64_t;
typedef _Atomic(intptr_t)           atomic_intptr_t;
typedef _Atomic(uintptr_t)          atomic_uintptr_t;
typedef _Atomic(size_t)             atomic_size_t;
typedef _Atomic(ptrdiff_t)          atomic_ptrdiff_t;
typedef _Atomic(intmax_t)           atomic_intmax_t;
typedef _Atomic(uintmax_t)          atomic_uintmax_t;

/* 7.17.7 Operations on atomic types */

#define atomic_store(object, desired) __c11_atomic_store(object, desired, __ATOMIC_SEQ_CST)
#define atomic_store_explicit __c11_atomic_store

#define atomic_load(object) __c11_atomic_load(object, __ATOMIC_SEQ_CST)
#define atomic_load_explicit __c11_atomic_load

#define atomic_exchange(object, desired) __c11_atomic_exchange(object, desired, __ATOMIC_SEQ_CST)
#define atomic_exchange_explicit __c11_atomic_exchange

#define atomic_compare_exchange_strong(object, expected, desired) __c11_atomic_compare_exchange_strong(object, expected, desired, __ATOMIC_SEQ_CST, __ATOMIC_SEQ_CST)
#define atomic_compare_exchange_strong_explicit __c11_atomic_compare_exchange_strong

#define atomic_compare_exchange_weak(object, expected, desired) __c11_atomic_compare_exchange_weak(object, expected, desired, __ATOMIC_SEQ_CST, __ATOMIC_SEQ_CST)
#define atomic_compare_exchange_weak_explicit __c11_atomic_compare_exchange_weak

#define atomic_fetch_add(object, operand) __c11_atomic_fetch_add(object, operand, __ATOMIC_SEQ_CST)
#define atomic_fetch_add_explicit __c11_atomic_fetch_add

#define atomic_fetch_sub(object, operand) __c11_atomic_fetch_sub(object, operand, __ATOMIC_SEQ_CST)
#define atomic_fetch_sub_explicit __c11_atomic_fetch_sub

#define atomic_fetch_or(object, operand) __c11_atomic_fetch_or(object, operand, __ATOMIC_SEQ_CST)
#define atomic_fetch_or_explicit __c11_atomic_fetch_or

#define atomic_fetch_xor(object, operand) __c11_atomic_fetch_xor(object, operand, __ATOMIC_SEQ_CST)
#define atomic_fetch_xor_explicit __c11_atomic_fetch_xor

#define atomic_fetch_and(object, operand) __c11_atomic_fetch_and(object, operand, __ATOMIC_SEQ_CST)
#define atomic_fetch_and_explicit __c11_atomic_fetch_and

/* 7.17.8 Atomic flag type and operations */

typedef struct atomic_flag { atomic_bool _Value; } atomic_flag;

#ifdef __cplusplus
#define ATOMIC_FLAG_INIT {false}
#else
#define ATOMIC_FLAG_INIT { 0 }
#endif

/* These should be provided by the libc implementation. */
#ifdef __cplusplus
bool atomic_flag_test_and_set(volatile atomic_flag *);
bool atomic_flag_test_and_set_explicit(volatile atomic_flag *, memory_order);
#else
_Bool atomic_flag_test_and_set(volatile atomic_flag *);
_Bool atomic_flag_test_and_set_explicit(volatile atomic_flag *, memory_order);
#endif
void atomic_flag_clear(volatile atomic_flag *);
void atomic_flag_clear_explicit(volatile atomic_flag *, memory_order);

#define atomic_flag_test_and_set(object) __c11_atomic_exchange(&(object)->_Value, 1, __ATOMIC_SEQ_CST)
#define atomic_flag_test_and_set_explicit(object, order) __c11_atomic_exchange(&(object)->_Value, 1, order)

#define atomic_flag_clear(object) __c11_atomic_store(&(object)->_Value, 0, __ATOMIC_SEQ_CST)
#define atomic_flag_clear_explicit(object, order) __c11_atomic_store(&(object)->_Value, 0, order)

#ifdef __cplusplus
}
#endif

#endif /* __STDC_HOSTED__ */
#endif /* __CLANG_STDATOMIC_H */

`,"stdbool.h":`/*===---- stdbool.h - Standard header for booleans -------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __STDBOOL_H
#define __STDBOOL_H

#define __bool_true_false_are_defined 1

#if defined(__MVS__) && __has_include_next(<stdbool.h>)
#include_next <stdbool.h>
#else

#if defined(__STDC_VERSION__) && __STDC_VERSION__ > 201710L
/* FIXME: We should be issuing a deprecation warning here, but cannot yet due
 * to system headers which include this header file unconditionally.
 */
#elif !defined(__cplusplus)
#define bool _Bool
#define true 1
#define false 0
#elif defined(__GNUC__) && !defined(__STRICT_ANSI__)
/* Define _Bool as a GNU extension. */
#define _Bool bool
#if defined(__cplusplus) && __cplusplus < 201103L
/* For C++98, define bool, false, true as a GNU extension. */
#define bool bool
#define false false
#define true true
#endif
#endif

#endif /* __MVS__ */
#endif /* __STDBOOL_H */
`,"stdcountof.h":`/*===---- stdcountof.h - Standard header for countof -----------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __STDCOUNTOF_H
#define __STDCOUNTOF_H

#define countof _Countof

#endif /* __STDCOUNTOF_H */
`,"stdckdint.h":`/*===---- stdckdint.h - Standard header for checking integer----------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __STDCKDINT_H
#define __STDCKDINT_H

/* If we're hosted, fall back to the system's stdckdint.h. FreeBSD, for
 * example, already has a Clang-compatible stdckdint.h header.
 *
 * The \`stdckdint.h\` header requires C 23 or newer.
 */
#if __STDC_HOSTED__ && __has_include_next(<stdckdint.h>)
#include_next <stdckdint.h>
#else

/* C23 7.20.1 Defines several macros for performing checked integer arithmetic*/

#define __STDC_VERSION_STDCKDINT_H__ 202311L

// Both A and B shall be any integer type other than "plain" char, bool, a bit-
// precise integer type, or an enumerated type, and they need not be the same.

// R shall be a modifiable lvalue of any integer type other than "plain" char,
// bool, a bit-precise integer type, or an enumerated type. It shouldn't be
// short type, either. Otherwise, it may be unable to hold two the result of
// operating two 'int's.

// A diagnostic message will be produced if A or B are not suitable integer
// types, or if R is not a modifiable lvalue of a suitable integer type or R
// is short type.
#define ckd_add(R, A, B) __builtin_add_overflow((A), (B), (R))
#define ckd_sub(R, A, B) __builtin_sub_overflow((A), (B), (R))
#define ckd_mul(R, A, B) __builtin_mul_overflow((A), (B), (R))

#endif /* __STDC_HOSTED__ */
#endif /* __STDCKDINT_H */
`,"stddef.h":`/*===---- stddef.h - Basic type definitions --------------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

/*
 * This header is designed to be included multiple times. If any of the __need_
 * macros are defined, then only that subset of interfaces are provided. This
 * can be useful for POSIX headers that need to not expose all of stddef.h, but
 * need to use some of its interfaces. Otherwise this header provides all of
 * the expected interfaces.
 *
 * When clang modules are enabled, this header is a textual header to support
 * the multiple include behavior. As such, it doesn't directly declare anything
 * so that it doesn't add duplicate declarations to all of its includers'
 * modules.
 */
#if defined(__MVS__) && __has_include_next(<stddef.h>)
#undef __need_ptrdiff_t
#undef __need_size_t
#undef __need_rsize_t
#undef __need_wchar_t
#undef __need_NULL
#undef __need_nullptr_t
#undef __need_unreachable
#undef __need_max_align_t
#undef __need_offsetof
#undef __need_wint_t
#include <__stddef_header_macro.h>
#include_next <stddef.h>

#else

#if !defined(__need_ptrdiff_t) && !defined(__need_size_t) &&                   \\
    !defined(__need_rsize_t) && !defined(__need_wchar_t) &&                    \\
    !defined(__need_NULL) && !defined(__need_nullptr_t) &&                     \\
    !defined(__need_unreachable) && !defined(__need_max_align_t) &&            \\
    !defined(__need_offsetof) && !defined(__need_wint_t)
#define __need_ptrdiff_t
#define __need_size_t
/* ISO9899:2011 7.20 (C11 Annex K): Define rsize_t if __STDC_WANT_LIB_EXT1__ is
 * enabled. */
#if defined(__STDC_WANT_LIB_EXT1__) && __STDC_WANT_LIB_EXT1__ >= 1
#define __need_rsize_t
#endif
#define __need_wchar_t
#if !defined(__STDDEF_H) || __has_feature(modules)
/*
 * __stddef_null.h is special when building without modules: if __need_NULL is
 * set, then it will unconditionally redefine NULL. To avoid stepping on client
 * definitions of NULL, __need_NULL should only be set the first time this
 * header is included, that is when __STDDEF_H is not defined. However, when
 * building with modules, this header is a textual header and needs to
 * unconditionally include __stdef_null.h to support multiple submodules
 * exporting _Builtin_stddef.null. Take module SM with submodules A and B, whose
 * headers both include stddef.h When SM.A builds, __STDDEF_H will be defined.
 * When SM.B builds, the definition from SM.A will leak when building without
 * local submodule visibility. stddef.h wouldn't include __stddef_null.h, and
 * SM.B wouldn't import _Builtin_stddef.null, and SM.B's \`export *\` wouldn't
 * export NULL as expected. When building with modules, always include
 * __stddef_null.h so that everything works as expected.
 */
#define __need_NULL
#endif
#if (defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L) ||              \\
    defined(__cplusplus)
#define __need_nullptr_t
#endif
#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
#define __need_unreachable
#endif
#if (defined(__STDC_VERSION__) && __STDC_VERSION__ >= 201112L) ||              \\
    (defined(__cplusplus) && __cplusplus >= 201103L)
#define __need_max_align_t
#endif
#define __need_offsetof
/* wint_t is provided by <wchar.h> and not <stddef.h>. It's here
 * for compatibility, but must be explicitly requested. Therefore
 * __need_wint_t is intentionally not defined here. */
#include <__stddef_header_macro.h>
#endif

#if defined(__need_ptrdiff_t)
#include <__stddef_ptrdiff_t.h>
#undef __need_ptrdiff_t
#endif /* defined(__need_ptrdiff_t) */

#if defined(__need_size_t)
#include <__stddef_size_t.h>
#undef __need_size_t
#endif /*defined(__need_size_t) */

#if defined(__need_rsize_t)
#include <__stddef_rsize_t.h>
#undef __need_rsize_t
#endif /* defined(__need_rsize_t) */

#if defined(__need_wchar_t)
#include <__stddef_wchar_t.h>
#undef __need_wchar_t
#endif /* defined(__need_wchar_t) */

#if defined(__need_NULL)
#include <__stddef_null.h>
#undef __need_NULL
#endif /* defined(__need_NULL) */

#if defined(__need_nullptr_t)
#include <__stddef_nullptr_t.h>
#undef __need_nullptr_t
#endif /* defined(__need_nullptr_t) */

#if defined(__need_unreachable)
#include <__stddef_unreachable.h>
#undef __need_unreachable
#endif /* defined(__need_unreachable) */

#if defined(__need_max_align_t)
#include <__stddef_max_align_t.h>
#undef __need_max_align_t
#endif /* defined(__need_max_align_t) */

#if defined(__need_offsetof)
#include <__stddef_offsetof.h>
#undef __need_offsetof
#endif /* defined(__need_offsetof) */

/* Some C libraries expect to see a wint_t here. Others (notably MinGW) will use
__WINT_TYPE__ directly; accommodate both by requiring __need_wint_t */
#if defined(__need_wint_t)
#include <__stddef_wint_t.h>
#undef __need_wint_t
#endif /* __need_wint_t */

#endif /* __MVS__ */
`,"stddefer.h":`/*===---- stddefer.h - Standard header for 'defer' -------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __CLANG_STDDEFER_H
#define __CLANG_STDDEFER_H

/* Provide 'defer' if '_Defer' is supported. */
#ifdef __STDC_DEFER_TS25755__
#define __STDC_VERSION_STDDEFER_H__ 202602L
#define defer _Defer
#endif

#endif /* __CLANG_STDDEFER_H */
`,"__stddef_header_macro.h":`/*===---- __stddef_header_macro.h ------------------------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __STDDEF_H
#define __STDDEF_H
#endif
`,"__stddef_max_align_t.h":`/*===---- __stddef_max_align_t.h - Definition of max_align_t ---------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __CLANG_MAX_ALIGN_T_DEFINED
#define __CLANG_MAX_ALIGN_T_DEFINED

#if defined(_MSC_VER)
typedef double max_align_t;
#elif defined(__APPLE__)
typedef long double max_align_t;
#else
// Define 'max_align_t' to match the GCC definition.
typedef struct {
  long long __clang_max_align_nonce1
      __attribute__((__aligned__(__alignof__(long long))));
  long double __clang_max_align_nonce2
      __attribute__((__aligned__(__alignof__(long double))));
} max_align_t;
#endif

#endif
`,"__stddef_null.h":`/*===---- __stddef_null.h - Definition of NULL -----------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#if !defined(NULL) || !__building_module(_Builtin_stddef)

/* linux/stddef.h will define NULL to 0. glibc (and other) headers then define
 * __need_NULL and rely on stddef.h to redefine NULL to the correct value again.
 * Modules don't support redefining macros like that, but support that pattern
 * in the non-modules case.
 */
#undef NULL

#ifdef __cplusplus
#if !defined(__MINGW32__) && !defined(_MSC_VER)
#define NULL __null
#else
#define NULL 0
#endif
#else
#define NULL ((void*)0)
#endif

#endif
`,"__stddef_nullptr_t.h":`/*===---- __stddef_nullptr_t.h - Definition of nullptr_t -------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

/*
 * When -fbuiltin-headers-in-system-modules is set this is a non-modular header
 * and needs to behave as if it was textual.
 */
#if !defined(_NULLPTR_T) ||                                                    \\
    (__has_feature(modules) && !__building_module(_Builtin_stddef))
#define _NULLPTR_T

#ifdef __cplusplus
#if defined(_MSC_EXTENSIONS) && defined(_NATIVE_NULLPTR_SUPPORTED)
namespace std {
typedef decltype(nullptr) nullptr_t;
}
using ::std::nullptr_t;
#endif
#elif defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
typedef typeof(nullptr) nullptr_t;
#endif

#endif
`,"__stddef_offsetof.h":`/*===---- __stddef_offsetof.h - Definition of offsetof ---------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

/*
 * When -fbuiltin-headers-in-system-modules is set this is a non-modular header
 * and needs to behave as if it was textual.
 */
#if !defined(offsetof) ||                                                      \\
    (__has_feature(modules) && !__building_module(_Builtin_stddef))
#define offsetof(t, d) __builtin_offsetof(t, d)
#endif
`,"__stddef_ptrdiff_t.h":`/*===---- __stddef_ptrdiff_t.h - Definition of ptrdiff_t -------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

/*
 * When -fbuiltin-headers-in-system-modules is set this is a non-modular header
 * and needs to behave as if it was textual.
 */
#if !defined(_PTRDIFF_T) ||                                                    \\
    (__has_feature(modules) && !__building_module(_Builtin_stddef))
#define _PTRDIFF_T

typedef __PTRDIFF_TYPE__ ptrdiff_t;

#endif
`,"__stddef_rsize_t.h":`/*===---- __stddef_rsize_t.h - Definition of rsize_t -----------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

/*
 * When -fbuiltin-headers-in-system-modules is set this is a non-modular header
 * and needs to behave as if it was textual.
 */
#if !defined(_RSIZE_T) ||                                                      \\
    (__has_feature(modules) && !__building_module(_Builtin_stddef))
#define _RSIZE_T

typedef __SIZE_TYPE__ rsize_t;

#endif
`,"__stddef_size_t.h":`/*===---- __stddef_size_t.h - Definition of size_t -------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

/*
 * When -fbuiltin-headers-in-system-modules is set this is a non-modular header
 * and needs to behave as if it was textual.
 */
#if !defined(_SIZE_T) ||                                                       \\
    (__has_feature(modules) && !__building_module(_Builtin_stddef))
#define _SIZE_T

typedef __SIZE_TYPE__ size_t;

#endif
`,"__stddef_unreachable.h":`/*===---- __stddef_unreachable.h - Definition of unreachable ---------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __cplusplus

/*
 * When -fbuiltin-headers-in-system-modules is set this is a non-modular header
 * and needs to behave as if it was textual.
 */
#if !defined(unreachable) ||                                                   \\
    (__has_feature(modules) && !__building_module(_Builtin_stddef))
#define unreachable() __builtin_unreachable()
#endif

#endif
`,"__stddef_wchar_t.h":`/*===---- __stddef_wchar.h - Definition of wchar_t -------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#if !defined(__cplusplus) || (defined(_MSC_VER) && !_NATIVE_WCHAR_T_DEFINED)

/*
 * When -fbuiltin-headers-in-system-modules is set this is a non-modular header
 * and needs to behave as if it was textual.
 */
#if !defined(_WCHAR_T) ||                                                      \\
    (__has_feature(modules) && !__building_module(_Builtin_stddef))
#define _WCHAR_T

#ifdef _MSC_EXTENSIONS
#define _WCHAR_T_DEFINED
#endif

typedef __WCHAR_TYPE__ wchar_t;

#endif

#endif
`,"__stddef_wint_t.h":`/*===---- __stddef_wint.h - Definition of wint_t ---------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef _WINT_T
#define _WINT_T

typedef __WINT_TYPE__ wint_t;

#endif
`,"stdint.h":`/*===---- stdint.h - Standard header for sized integer types --------------===*\\
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
\\*===----------------------------------------------------------------------===*/

#ifndef __CLANG_STDINT_H
// AIX system headers need stdint.h to be re-enterable while _STD_TYPES_T
// is defined until an inclusion of it without _STD_TYPES_T occurs, in which
// case the header guard macro is defined.
#if !defined(_AIX) || !defined(_STD_TYPES_T) || !defined(__STDC_HOSTED__)
#define __CLANG_STDINT_H
#endif

#if defined(__MVS__) && __has_include_next(<stdint.h>)
#include_next <stdint.h>
#else

/* If we're hosted, fall back to the system's stdint.h, which might have
 * additional definitions.
 */
#if __STDC_HOSTED__ && __has_include_next(<stdint.h>)

// C99 7.18.3 Limits of other integer types
//
//  Footnote 219, 220: C++ implementations should define these macros only when
//  __STDC_LIMIT_MACROS is defined before <stdint.h> is included.
//
//  Footnote 222: C++ implementations should define these macros only when
//  __STDC_CONSTANT_MACROS is defined before <stdint.h> is included.
//
// C++11 [cstdint.syn]p2:
//
//  The macros defined by <cstdint> are provided unconditionally. In particular,
//  the symbols __STDC_LIMIT_MACROS and __STDC_CONSTANT_MACROS (mentioned in
//  footnotes 219, 220, and 222 in the C standard) play no role in C++.
//
// C11 removed the problematic footnotes.
//
// Work around this inconsistency by always defining those macros in C++ mode,
// so that a C library implementation which follows the C99 standard can be
// used in C++.
# ifdef __cplusplus
#  if !defined(__STDC_LIMIT_MACROS)
#   define __STDC_LIMIT_MACROS
#   define __STDC_LIMIT_MACROS_DEFINED_BY_CLANG
#  endif
#  if !defined(__STDC_CONSTANT_MACROS)
#   define __STDC_CONSTANT_MACROS
#   define __STDC_CONSTANT_MACROS_DEFINED_BY_CLANG
#  endif
# endif

# include_next <stdint.h>

# ifdef __STDC_LIMIT_MACROS_DEFINED_BY_CLANG
#  undef __STDC_LIMIT_MACROS
#  undef __STDC_LIMIT_MACROS_DEFINED_BY_CLANG
# endif
# ifdef __STDC_CONSTANT_MACROS_DEFINED_BY_CLANG
#  undef __STDC_CONSTANT_MACROS
#  undef __STDC_CONSTANT_MACROS_DEFINED_BY_CLANG
# endif

#else

/* C99 7.18.1.1 Exact-width integer types.
 * C99 7.18.1.2 Minimum-width integer types.
 * C99 7.18.1.3 Fastest minimum-width integer types.
 *
 * The standard requires that exact-width type be defined for 8-, 16-, 32-, and
 * 64-bit types if they are implemented. Other exact width types are optional.
 * This implementation defines an exact-width types for every integer width
 * that is represented in the standard integer types.
 *
 * The standard also requires minimum-width types be defined for 8-, 16-, 32-,
 * and 64-bit widths regardless of whether there are corresponding exact-width
 * types.
 *
 * To accommodate targets that are missing types that are exactly 8, 16, 32, or
 * 64 bits wide, this implementation takes an approach of cascading
 * redefinitions, redefining __int_leastN_t to successively smaller exact-width
 * types. It is therefore important that the types are defined in order of
 * descending widths.
 *
 * We currently assume that the minimum-width types and the fastest
 * minimum-width types are the same. This is allowed by the standard, but is
 * suboptimal.
 *
 * In violation of the standard, some targets do not implement a type that is
 * wide enough to represent all of the required widths (8-, 16-, 32-, 64-bit).
 * To accommodate these targets, a required minimum-width type is only
 * defined if there exists an exact-width type of equal or greater width.
 */

#ifdef __INT64_TYPE__
# ifndef __int8_t_defined /* glibc sys/types.h also defines int64_t*/
typedef __INT64_TYPE__ int64_t;
# endif /* __int8_t_defined */
typedef __UINT64_TYPE__ uint64_t;
# undef __int_least64_t
# define __int_least64_t int64_t
# undef __uint_least64_t
# define __uint_least64_t uint64_t
# undef __int_least32_t
# define __int_least32_t int64_t
# undef __uint_least32_t
# define __uint_least32_t uint64_t
# undef __int_least16_t
# define __int_least16_t int64_t
# undef __uint_least16_t
# define __uint_least16_t uint64_t
# undef __int_least8_t
# define __int_least8_t int64_t
# undef __uint_least8_t
# define __uint_least8_t uint64_t
#endif /* __INT64_TYPE__ */

#ifdef __int_least64_t
typedef __int_least64_t int_least64_t;
typedef __uint_least64_t uint_least64_t;
typedef __int_least64_t int_fast64_t;
typedef __uint_least64_t uint_fast64_t;
#endif /* __int_least64_t */

#ifdef __INT56_TYPE__
typedef __INT56_TYPE__ int56_t;
typedef __UINT56_TYPE__ uint56_t;
typedef int56_t int_least56_t;
typedef uint56_t uint_least56_t;
typedef int56_t int_fast56_t;
typedef uint56_t uint_fast56_t;
# undef __int_least32_t
# define __int_least32_t int56_t
# undef __uint_least32_t
# define __uint_least32_t uint56_t
# undef __int_least16_t
# define __int_least16_t int56_t
# undef __uint_least16_t
# define __uint_least16_t uint56_t
# undef __int_least8_t
# define __int_least8_t int56_t
# undef __uint_least8_t
# define __uint_least8_t uint56_t
#endif /* __INT56_TYPE__ */


#ifdef __INT48_TYPE__
typedef __INT48_TYPE__ int48_t;
typedef __UINT48_TYPE__ uint48_t;
typedef int48_t int_least48_t;
typedef uint48_t uint_least48_t;
typedef int48_t int_fast48_t;
typedef uint48_t uint_fast48_t;
# undef __int_least32_t
# define __int_least32_t int48_t
# undef __uint_least32_t
# define __uint_least32_t uint48_t
# undef __int_least16_t
# define __int_least16_t int48_t
# undef __uint_least16_t
# define __uint_least16_t uint48_t
# undef __int_least8_t
# define __int_least8_t int48_t
# undef __uint_least8_t
# define __uint_least8_t uint48_t
#endif /* __INT48_TYPE__ */


#ifdef __INT40_TYPE__
typedef __INT40_TYPE__ int40_t;
typedef __UINT40_TYPE__ uint40_t;
typedef int40_t int_least40_t;
typedef uint40_t uint_least40_t;
typedef int40_t int_fast40_t;
typedef uint40_t uint_fast40_t;
# undef __int_least32_t
# define __int_least32_t int40_t
# undef __uint_least32_t
# define __uint_least32_t uint40_t
# undef __int_least16_t
# define __int_least16_t int40_t
# undef __uint_least16_t
# define __uint_least16_t uint40_t
# undef __int_least8_t
# define __int_least8_t int40_t
# undef __uint_least8_t
# define __uint_least8_t uint40_t
#endif /* __INT40_TYPE__ */


#ifdef __INT32_TYPE__

# ifndef __int8_t_defined /* glibc sys/types.h also defines int32_t*/
typedef __INT32_TYPE__ int32_t;
# endif /* __int8_t_defined */

# ifndef __uint32_t_defined  /* more glibc compatibility */
# define __uint32_t_defined
typedef __UINT32_TYPE__ uint32_t;
# endif /* __uint32_t_defined */

# undef __int_least32_t
# define __int_least32_t int32_t
# undef __uint_least32_t
# define __uint_least32_t uint32_t
# undef __int_least16_t
# define __int_least16_t int32_t
# undef __uint_least16_t
# define __uint_least16_t uint32_t
# undef __int_least8_t
# define __int_least8_t int32_t
# undef __uint_least8_t
# define __uint_least8_t uint32_t
#endif /* __INT32_TYPE__ */

#ifdef __int_least32_t
typedef __int_least32_t int_least32_t;
typedef __uint_least32_t uint_least32_t;
typedef __int_least32_t int_fast32_t;
typedef __uint_least32_t uint_fast32_t;
#endif /* __int_least32_t */

#ifdef __INT24_TYPE__
typedef __INT24_TYPE__ int24_t;
typedef __UINT24_TYPE__ uint24_t;
typedef int24_t int_least24_t;
typedef uint24_t uint_least24_t;
typedef int24_t int_fast24_t;
typedef uint24_t uint_fast24_t;
# undef __int_least16_t
# define __int_least16_t int24_t
# undef __uint_least16_t
# define __uint_least16_t uint24_t
# undef __int_least8_t
# define __int_least8_t int24_t
# undef __uint_least8_t
# define __uint_least8_t uint24_t
#endif /* __INT24_TYPE__ */

#ifdef __INT16_TYPE__
#ifndef __int8_t_defined /* glibc sys/types.h also defines int16_t*/
typedef __INT16_TYPE__ int16_t;
#endif /* __int8_t_defined */
typedef __UINT16_TYPE__ uint16_t;
# undef __int_least16_t
# define __int_least16_t int16_t
# undef __uint_least16_t
# define __uint_least16_t uint16_t
# undef __int_least8_t
# define __int_least8_t int16_t
# undef __uint_least8_t
# define __uint_least8_t uint16_t
#endif /* __INT16_TYPE__ */

#ifdef __int_least16_t
typedef __int_least16_t int_least16_t;
typedef __uint_least16_t uint_least16_t;
typedef __int_least16_t int_fast16_t;
typedef __uint_least16_t uint_fast16_t;
#endif /* __int_least16_t */


#ifdef __INT8_TYPE__
#ifndef __int8_t_defined  /* glibc sys/types.h also defines int8_t*/
typedef __INT8_TYPE__ int8_t;
#endif /* __int8_t_defined */
typedef __UINT8_TYPE__ uint8_t;
# undef __int_least8_t
# define __int_least8_t int8_t
# undef __uint_least8_t
# define __uint_least8_t uint8_t
#endif /* __INT8_TYPE__ */

#ifdef __int_least8_t
typedef __int_least8_t int_least8_t;
typedef __uint_least8_t uint_least8_t;
typedef __int_least8_t int_fast8_t;
typedef __uint_least8_t uint_fast8_t;
#endif /* __int_least8_t */

/* prevent glibc sys/types.h from defining conflicting types */
#ifndef __int8_t_defined
# define __int8_t_defined
#endif /* __int8_t_defined */

/* C99 7.18.1.4 Integer types capable of holding object pointers.
 */
#define __stdint_join3(a,b,c) a ## b ## c

#ifndef _INTPTR_T
#ifndef __intptr_t_defined
typedef __INTPTR_TYPE__ intptr_t;
#define __intptr_t_defined
#define _INTPTR_T
#endif
#endif

#ifndef _UINTPTR_T
typedef __UINTPTR_TYPE__ uintptr_t;
#define _UINTPTR_T
#endif

/* C99 7.18.1.5 Greatest-width integer types.
 */
typedef __INTMAX_TYPE__  intmax_t;
typedef __UINTMAX_TYPE__ uintmax_t;

/* C99 7.18.4 Macros for minimum-width integer constants.
 *
 * The standard requires that integer constant macros be defined for all the
 * minimum-width types defined above. As 8-, 16-, 32-, and 64-bit minimum-width
 * types are required, the corresponding integer constant macros are defined
 * here. This implementation also defines minimum-width types for every other
 * integer width that the target implements, so corresponding macros are
 * defined below, too.
 *
 * Note that C++ should not check __STDC_CONSTANT_MACROS here, contrary to the
 * claims of the C standard (see C++ 18.3.1p2, [cstdint.syn]).
 */

#ifdef __int_least64_t
#define INT64_C(v) __INT64_C(v)
#define UINT64_C(v) __UINT64_C(v)
#endif /* __int_least64_t */


#ifdef __INT56_TYPE__
#define INT56_C(v) __INT56_C(v)
#define UINT56_C(v) __UINT56_C(v)
#endif /* __INT56_TYPE__ */


#ifdef __INT48_TYPE__
#define INT48_C(v) __INT48_C(v)
#define UINT48_C(v) __UINT48_C(v)
#endif /* __INT48_TYPE__ */


#ifdef __INT40_TYPE__
#define INT40_C(v) __INT40_C(v)
#define UINT40_C(v) __UINT40_C(v)
#endif /* __INT40_TYPE__ */


#ifdef __int_least32_t
#define INT32_C(v) __INT32_C(v)
#define UINT32_C(v) __UINT32_C(v)
#endif /* __int_least32_t */


#ifdef __INT24_TYPE__
#define INT24_C(v) __INT24_C(v)
#define UINT24_C(v) __UINT24_C(v)
#endif /* __INT24_TYPE__ */


#ifdef __int_least16_t
#define INT16_C(v) __INT16_C(v)
#define UINT16_C(v) __UINT16_C(v)
#endif /* __int_least16_t */


#ifdef __int_least8_t
#define INT8_C(v) __INT8_C(v)
#define UINT8_C(v) __UINT8_C(v)
#endif /* __int_least8_t */


/* C99 7.18.2.1 Limits of exact-width integer types.
 * C99 7.18.2.2 Limits of minimum-width integer types.
 * C99 7.18.2.3 Limits of fastest minimum-width integer types.
 *
 * The presence of limit macros are completely optional in C99.  This
 * implementation defines limits for all of the types (exact- and
 * minimum-width) that it defines above, using the limits of the minimum-width
 * type for any types that do not have exact-width representations.
 *
 * As in the type definitions, this section takes an approach of
 * successive-shrinking to determine which limits to use for the standard (8,
 * 16, 32, 64) bit widths when they don't have exact representations. It is
 * therefore important that the definitions be kept in order of decending
 * widths.
 *
 * Note that C++ should not check __STDC_LIMIT_MACROS here, contrary to the
 * claims of the C standard (see C++ 18.3.1p2, [cstdint.syn]).
 */

#ifdef __INT64_TYPE__
# define INT64_MAX           INT64_C( 9223372036854775807)
# define INT64_MIN         (-INT64_C( 9223372036854775807)-1)
# define UINT64_MAX         UINT64_C(18446744073709551615)

#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
# define UINT64_WIDTH         64
# define INT64_WIDTH          UINT64_WIDTH

# define __UINT_LEAST64_WIDTH UINT64_WIDTH
# undef __UINT_LEAST32_WIDTH
# define __UINT_LEAST32_WIDTH UINT64_WIDTH
# undef __UINT_LEAST16_WIDTH
# define __UINT_LEAST16_WIDTH UINT64_WIDTH
# undef __UINT_LEAST8_MAX
# define __UINT_LEAST8_MAX UINT64_MAX
#endif /* __STDC_VERSION__ */

# define __INT_LEAST64_MIN   INT64_MIN
# define __INT_LEAST64_MAX   INT64_MAX
# define __UINT_LEAST64_MAX UINT64_MAX
# undef __INT_LEAST32_MIN
# define __INT_LEAST32_MIN   INT64_MIN
# undef __INT_LEAST32_MAX
# define __INT_LEAST32_MAX   INT64_MAX
# undef __UINT_LEAST32_MAX
# define __UINT_LEAST32_MAX UINT64_MAX
# undef __INT_LEAST16_MIN
# define __INT_LEAST16_MIN   INT64_MIN
# undef __INT_LEAST16_MAX
# define __INT_LEAST16_MAX   INT64_MAX
# undef __UINT_LEAST16_MAX
# define __UINT_LEAST16_MAX UINT64_MAX
# undef __INT_LEAST8_MIN
# define __INT_LEAST8_MIN    INT64_MIN
# undef __INT_LEAST8_MAX
# define __INT_LEAST8_MAX    INT64_MAX
# undef __UINT_LEAST8_MAX
# define __UINT_LEAST8_MAX  UINT64_MAX
#endif /* __INT64_TYPE__ */

#ifdef __INT_LEAST64_MIN
# define INT_LEAST64_MIN   __INT_LEAST64_MIN
# define INT_LEAST64_MAX   __INT_LEAST64_MAX
# define UINT_LEAST64_MAX __UINT_LEAST64_MAX
# define INT_FAST64_MIN    __INT_LEAST64_MIN
# define INT_FAST64_MAX    __INT_LEAST64_MAX
# define UINT_FAST64_MAX  __UINT_LEAST64_MAX

#if defined(__STDC_VERSION__) &&  __STDC_VERSION__ >= 202311L
# define UINT_LEAST64_WIDTH __UINT_LEAST64_WIDTH
# define INT_LEAST64_WIDTH  UINT_LEAST64_WIDTH
# define UINT_FAST64_WIDTH  __UINT_LEAST64_WIDTH
# define INT_FAST64_WIDTH   UINT_FAST64_WIDTH
#endif /* __STDC_VERSION__ */
#endif /* __INT_LEAST64_MIN */


#ifdef __INT56_TYPE__
# define INT56_MAX           INT56_C(36028797018963967)
# define INT56_MIN         (-INT56_C(36028797018963967)-1)
# define UINT56_MAX         UINT56_C(72057594037927935)
# define INT_LEAST56_MIN     INT56_MIN
# define INT_LEAST56_MAX     INT56_MAX
# define UINT_LEAST56_MAX   UINT56_MAX
# define INT_FAST56_MIN      INT56_MIN
# define INT_FAST56_MAX      INT56_MAX
# define UINT_FAST56_MAX    UINT56_MAX

# undef __INT_LEAST32_MIN
# define __INT_LEAST32_MIN   INT56_MIN
# undef __INT_LEAST32_MAX
# define __INT_LEAST32_MAX   INT56_MAX
# undef __UINT_LEAST32_MAX
# define __UINT_LEAST32_MAX UINT56_MAX
# undef __INT_LEAST16_MIN
# define __INT_LEAST16_MIN   INT56_MIN
# undef __INT_LEAST16_MAX
# define __INT_LEAST16_MAX   INT56_MAX
# undef __UINT_LEAST16_MAX
# define __UINT_LEAST16_MAX UINT56_MAX
# undef __INT_LEAST8_MIN
# define __INT_LEAST8_MIN    INT56_MIN
# undef __INT_LEAST8_MAX
# define __INT_LEAST8_MAX    INT56_MAX
# undef __UINT_LEAST8_MAX
# define __UINT_LEAST8_MAX  UINT56_MAX

#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
# define UINT56_WIDTH         56
# define INT56_WIDTH          UINT56_WIDTH
# define UINT_LEAST56_WIDTH   UINT56_WIDTH
# define INT_LEAST56_WIDTH    UINT_LEAST56_WIDTH
# define UINT_FAST56_WIDTH    UINT56_WIDTH
# define INT_FAST56_WIDTH     UINT_FAST56_WIDTH
# undef __UINT_LEAST32_WIDTH
# define __UINT_LEAST32_WIDTH UINT56_WIDTH
# undef __UINT_LEAST16_WIDTH
# define __UINT_LEAST16_WIDTH UINT56_WIDTH
# undef __UINT_LEAST8_WIDTH
# define __UINT_LEAST8_WIDTH  UINT56_WIDTH
#endif /* __STDC_VERSION__ */
#endif /* __INT56_TYPE__ */


#ifdef __INT48_TYPE__
# define INT48_MAX           INT48_C(140737488355327)
# define INT48_MIN         (-INT48_C(140737488355327)-1)
# define UINT48_MAX         UINT48_C(281474976710655)
# define INT_LEAST48_MIN     INT48_MIN
# define INT_LEAST48_MAX     INT48_MAX
# define UINT_LEAST48_MAX   UINT48_MAX
# define INT_FAST48_MIN      INT48_MIN
# define INT_FAST48_MAX      INT48_MAX
# define UINT_FAST48_MAX    UINT48_MAX

# undef __INT_LEAST32_MIN
# define __INT_LEAST32_MIN   INT48_MIN
# undef __INT_LEAST32_MAX
# define __INT_LEAST32_MAX   INT48_MAX
# undef __UINT_LEAST32_MAX
# define __UINT_LEAST32_MAX UINT48_MAX
# undef __INT_LEAST16_MIN
# define __INT_LEAST16_MIN   INT48_MIN
# undef __INT_LEAST16_MAX
# define __INT_LEAST16_MAX   INT48_MAX
# undef __UINT_LEAST16_MAX
# define __UINT_LEAST16_MAX UINT48_MAX
# undef __INT_LEAST8_MIN
# define __INT_LEAST8_MIN    INT48_MIN
# undef __INT_LEAST8_MAX
# define __INT_LEAST8_MAX    INT48_MAX
# undef __UINT_LEAST8_MAX
# define __UINT_LEAST8_MAX  UINT48_MAX

#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
#define UINT48_WIDTH         48
#define INT48_WIDTH          UINT48_WIDTH
#define UINT_LEAST48_WIDTH   UINT48_WIDTH
#define INT_LEAST48_WIDTH    UINT_LEAST48_WIDTH
#define UINT_FAST48_WIDTH    UINT48_WIDTH
#define INT_FAST48_WIDTH     UINT_FAST48_WIDTH
#undef __UINT_LEAST32_WIDTH
#define __UINT_LEAST32_WIDTH UINT48_WIDTH
# undef __UINT_LEAST16_WIDTH
#define __UINT_LEAST16_WIDTH UINT48_WIDTH
# undef __UINT_LEAST8_WIDTH
#define __UINT_LEAST8_WIDTH  UINT48_WIDTH
#endif /* __STDC_VERSION__ */
#endif /* __INT48_TYPE__ */


#ifdef __INT40_TYPE__
# define INT40_MAX           INT40_C(549755813887)
# define INT40_MIN         (-INT40_C(549755813887)-1)
# define UINT40_MAX         UINT40_C(1099511627775)
# define INT_LEAST40_MIN     INT40_MIN
# define INT_LEAST40_MAX     INT40_MAX
# define UINT_LEAST40_MAX   UINT40_MAX
# define INT_FAST40_MIN      INT40_MIN
# define INT_FAST40_MAX      INT40_MAX
# define UINT_FAST40_MAX    UINT40_MAX

# undef __INT_LEAST32_MIN
# define __INT_LEAST32_MIN   INT40_MIN
# undef __INT_LEAST32_MAX
# define __INT_LEAST32_MAX   INT40_MAX
# undef __UINT_LEAST32_MAX
# define __UINT_LEAST32_MAX UINT40_MAX
# undef __INT_LEAST16_MIN
# define __INT_LEAST16_MIN   INT40_MIN
# undef __INT_LEAST16_MAX
# define __INT_LEAST16_MAX   INT40_MAX
# undef __UINT_LEAST16_MAX
# define __UINT_LEAST16_MAX UINT40_MAX
# undef __INT_LEAST8_MIN
# define __INT_LEAST8_MIN    INT40_MIN
# undef __INT_LEAST8_MAX
# define __INT_LEAST8_MAX    INT40_MAX
# undef __UINT_LEAST8_MAX
# define __UINT_LEAST8_MAX  UINT40_MAX

#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
# define UINT40_WIDTH         40
# define INT40_WIDTH          UINT40_WIDTH
# define UINT_LEAST40_WIDTH   UINT40_WIDTH
# define INT_LEAST40_WIDTH    UINT_LEAST40_WIDTH
# define UINT_FAST40_WIDTH    UINT40_WIDTH
# define INT_FAST40_WIDTH     UINT_FAST40_WIDTH
# undef __UINT_LEAST32_WIDTH
# define __UINT_LEAST32_WIDTH UINT40_WIDTH
# undef __UINT_LEAST16_WIDTH
# define __UINT_LEAST16_WIDTH UINT40_WIDTH
# undef __UINT_LEAST8_WIDTH
# define __UINT_LEAST8_WIDTH  UINT40_WIDTH
#endif /* __STDC_VERSION__ */
#endif /* __INT40_TYPE__ */


#ifdef __INT32_TYPE__
# define INT32_MAX           INT32_C(2147483647)
# define INT32_MIN         (-INT32_C(2147483647)-1)
# define UINT32_MAX         UINT32_C(4294967295)

# undef __INT_LEAST32_MIN
# define __INT_LEAST32_MIN   INT32_MIN
# undef __INT_LEAST32_MAX
# define __INT_LEAST32_MAX   INT32_MAX
# undef __UINT_LEAST32_MAX
# define __UINT_LEAST32_MAX UINT32_MAX
# undef __INT_LEAST16_MIN
# define __INT_LEAST16_MIN   INT32_MIN
# undef __INT_LEAST16_MAX
# define __INT_LEAST16_MAX   INT32_MAX
# undef __UINT_LEAST16_MAX
# define __UINT_LEAST16_MAX UINT32_MAX
# undef __INT_LEAST8_MIN
# define __INT_LEAST8_MIN    INT32_MIN
# undef __INT_LEAST8_MAX
# define __INT_LEAST8_MAX    INT32_MAX
# undef __UINT_LEAST8_MAX
# define __UINT_LEAST8_MAX  UINT32_MAX

#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
# define UINT32_WIDTH         32
# define INT32_WIDTH          UINT32_WIDTH
# undef __UINT_LEAST32_WIDTH
# define __UINT_LEAST32_WIDTH UINT32_WIDTH
# undef __UINT_LEAST16_WIDTH
# define __UINT_LEAST16_WIDTH UINT32_WIDTH
# undef __UINT_LEAST8_WIDTH
# define __UINT_LEAST8_WIDTH  UINT32_WIDTH
#endif /* __STDC_VERSION__ */
#endif /* __INT32_TYPE__ */

#ifdef __INT_LEAST32_MIN
# define INT_LEAST32_MIN   __INT_LEAST32_MIN
# define INT_LEAST32_MAX   __INT_LEAST32_MAX
# define UINT_LEAST32_MAX __UINT_LEAST32_MAX
# define INT_FAST32_MIN    __INT_LEAST32_MIN
# define INT_FAST32_MAX    __INT_LEAST32_MAX
# define UINT_FAST32_MAX  __UINT_LEAST32_MAX

#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
# define UINT_LEAST32_WIDTH __UINT_LEAST32_WIDTH
# define INT_LEAST32_WIDTH  UINT_LEAST32_WIDTH
# define UINT_FAST32_WIDTH  __UINT_LEAST32_WIDTH
# define INT_FAST32_WIDTH   UINT_FAST32_WIDTH
#endif /* __STDC_VERSION__ */
#endif /* __INT_LEAST32_MIN */


#ifdef __INT24_TYPE__
# define INT24_MAX           INT24_C(8388607)
# define INT24_MIN         (-INT24_C(8388607)-1)
# define UINT24_MAX         UINT24_C(16777215)
# define INT_LEAST24_MIN     INT24_MIN
# define INT_LEAST24_MAX     INT24_MAX
# define UINT_LEAST24_MAX   UINT24_MAX
# define INT_FAST24_MIN      INT24_MIN
# define INT_FAST24_MAX      INT24_MAX
# define UINT_FAST24_MAX    UINT24_MAX

# undef __INT_LEAST16_MIN
# define __INT_LEAST16_MIN   INT24_MIN
# undef __INT_LEAST16_MAX
# define __INT_LEAST16_MAX   INT24_MAX
# undef __UINT_LEAST16_MAX
# define __UINT_LEAST16_MAX UINT24_MAX
# undef __INT_LEAST8_MIN
# define __INT_LEAST8_MIN    INT24_MIN
# undef __INT_LEAST8_MAX
# define __INT_LEAST8_MAX    INT24_MAX
# undef __UINT_LEAST8_MAX
# define __UINT_LEAST8_MAX  UINT24_MAX

#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
# define UINT24_WIDTH         24
# define INT24_WIDTH          UINT24_WIDTH
# define UINT_LEAST24_WIDTH   UINT24_WIDTH
# define INT_LEAST24_WIDTH    UINT_LEAST24_WIDTH
# define UINT_FAST24_WIDTH    UINT24_WIDTH
# define INT_FAST24_WIDTH     UINT_FAST24_WIDTH
# undef __UINT_LEAST16_WIDTH
# define __UINT_LEAST16_WIDTH UINT24_WIDTH
# undef __UINT_LEAST8_WIDTH
# define __UINT_LEAST8_WIDTH  UINT24_WIDTH
#endif /* __STDC_VERSION__ */
#endif /* __INT24_TYPE__ */


#ifdef __INT16_TYPE__
#define INT16_MAX            INT16_C(32767)
#define INT16_MIN          (-INT16_C(32767)-1)
#define UINT16_MAX          UINT16_C(65535)

# undef __INT_LEAST16_MIN
# define __INT_LEAST16_MIN   INT16_MIN
# undef __INT_LEAST16_MAX
# define __INT_LEAST16_MAX   INT16_MAX
# undef __UINT_LEAST16_MAX
# define __UINT_LEAST16_MAX UINT16_MAX
# undef __INT_LEAST8_MIN
# define __INT_LEAST8_MIN    INT16_MIN
# undef __INT_LEAST8_MAX
# define __INT_LEAST8_MAX    INT16_MAX
# undef __UINT_LEAST8_MAX
# define __UINT_LEAST8_MAX  UINT16_MAX

#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
# define UINT16_WIDTH         16
# define INT16_WIDTH          UINT16_WIDTH
# undef __UINT_LEAST16_WIDTH
# define __UINT_LEAST16_WIDTH UINT16_WIDTH
# undef __UINT_LEAST8_WIDTH
# define __UINT_LEAST8_WIDTH  UINT16_WIDTH
#endif /* __STDC_VERSION__ */
#endif /* __INT16_TYPE__ */

#ifdef __INT_LEAST16_MIN
# define INT_LEAST16_MIN   __INT_LEAST16_MIN
# define INT_LEAST16_MAX   __INT_LEAST16_MAX
# define UINT_LEAST16_MAX __UINT_LEAST16_MAX
# define INT_FAST16_MIN    __INT_LEAST16_MIN
# define INT_FAST16_MAX    __INT_LEAST16_MAX
# define UINT_FAST16_MAX  __UINT_LEAST16_MAX

#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
# define UINT_LEAST16_WIDTH __UINT_LEAST16_WIDTH
# define INT_LEAST16_WIDTH  UINT_LEAST16_WIDTH
# define UINT_FAST16_WIDTH  __UINT_LEAST16_WIDTH
# define INT_FAST16_WIDTH   UINT_FAST16_WIDTH
#endif /* __STDC_VERSION__ */
#endif /* __INT_LEAST16_MIN */


#ifdef __INT8_TYPE__
# define INT8_MAX            INT8_C(127)
# define INT8_MIN          (-INT8_C(127)-1)
# define UINT8_MAX          UINT8_C(255)

# undef __INT_LEAST8_MIN
# define __INT_LEAST8_MIN    INT8_MIN
# undef __INT_LEAST8_MAX
# define __INT_LEAST8_MAX    INT8_MAX
# undef __UINT_LEAST8_MAX
# define __UINT_LEAST8_MAX  UINT8_MAX

#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
# define UINT8_WIDTH         8
# define INT8_WIDTH          UINT8_WIDTH
# undef __UINT_LEAST8_WIDTH
# define __UINT_LEAST8_WIDTH UINT8_WIDTH
#endif /* __STDC_VERSION__ */
#endif /* __INT8_TYPE__ */

#ifdef __INT_LEAST8_MIN
# define INT_LEAST8_MIN   __INT_LEAST8_MIN
# define INT_LEAST8_MAX   __INT_LEAST8_MAX
# define UINT_LEAST8_MAX __UINT_LEAST8_MAX
# define INT_FAST8_MIN    __INT_LEAST8_MIN
# define INT_FAST8_MAX    __INT_LEAST8_MAX
# define UINT_FAST8_MAX  __UINT_LEAST8_MAX

#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
# define UINT_LEAST8_WIDTH __UINT_LEAST8_WIDTH
# define INT_LEAST8_WIDTH  UINT_LEAST8_WIDTH
# define UINT_FAST8_WIDTH  __UINT_LEAST8_WIDTH
# define INT_FAST8_WIDTH   UINT_FAST8_WIDTH
#endif /* __STDC_VERSION__ */
#endif /* __INT_LEAST8_MIN */

/* Some utility macros */
#define  __INTN_MIN(n)  __stdint_join3( INT, n, _MIN)
#define  __INTN_MAX(n)  __stdint_join3( INT, n, _MAX)
#define __UINTN_MAX(n)  __stdint_join3(UINT, n, _MAX)
#define  __INTN_C(n, v) __stdint_join3( INT, n, _C(v))
#define __UINTN_C(n, v) __stdint_join3(UINT, n, _C(v))

/* C99 7.18.2.4 Limits of integer types capable of holding object pointers. */
/* C99 7.18.3 Limits of other integer types. */

#define  INTPTR_MIN  (-__INTPTR_MAX__-1)
#define  INTPTR_MAX    __INTPTR_MAX__
#define UINTPTR_MAX   __UINTPTR_MAX__
#define PTRDIFF_MIN (-__PTRDIFF_MAX__-1)
#define PTRDIFF_MAX   __PTRDIFF_MAX__
#define    SIZE_MAX      __SIZE_MAX__

/* C23 7.22.2.4 Width of integer types capable of holding object pointers. */
#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
/* NB: The C standard requires that these be the same value, but the compiler
   exposes separate internal width macros. */
#define INTPTR_WIDTH  __INTPTR_WIDTH__
#define UINTPTR_WIDTH __UINTPTR_WIDTH__
#endif

/* ISO9899:2011 7.20 (C11 Annex K): Define RSIZE_MAX if __STDC_WANT_LIB_EXT1__
 * is enabled. */
#if defined(__STDC_WANT_LIB_EXT1__) && __STDC_WANT_LIB_EXT1__ >= 1
#define   RSIZE_MAX            (SIZE_MAX >> 1)
#endif

/* C99 7.18.2.5 Limits of greatest-width integer types. */
#define  INTMAX_MIN (-__INTMAX_MAX__-1)
#define  INTMAX_MAX   __INTMAX_MAX__
#define UINTMAX_MAX  __UINTMAX_MAX__

/* C23 7.22.2.5 Width of greatest-width integer types. */
#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
/* NB: The C standard requires that these be the same value, but the compiler
   exposes separate internal width macros. */
#define INTMAX_WIDTH __INTMAX_WIDTH__
#define UINTMAX_WIDTH __UINTMAX_WIDTH__
#endif

/* C99 7.18.3 Limits of other integer types. */
#define SIG_ATOMIC_MIN __INTN_MIN(__SIG_ATOMIC_WIDTH__)
#define SIG_ATOMIC_MAX __INTN_MAX(__SIG_ATOMIC_WIDTH__)
#ifdef __WINT_UNSIGNED__
# define WINT_MIN       __UINTN_C(__WINT_WIDTH__, 0)
# define WINT_MAX       __UINTN_MAX(__WINT_WIDTH__)
#else
# define WINT_MIN       __INTN_MIN(__WINT_WIDTH__)
# define WINT_MAX       __INTN_MAX(__WINT_WIDTH__)
#endif

#ifndef WCHAR_MAX
# define WCHAR_MAX __WCHAR_MAX__
#endif
#ifndef WCHAR_MIN
# if __WCHAR_MAX__ == __INTN_MAX(__WCHAR_WIDTH__)
#  define WCHAR_MIN __INTN_MIN(__WCHAR_WIDTH__)
# else
#  define WCHAR_MIN __UINTN_C(__WCHAR_WIDTH__, 0)
# endif
#endif

/* 7.18.4.2 Macros for greatest-width integer constants. */
#define  INTMAX_C(v) __INTMAX_C(v)
#define UINTMAX_C(v) __UINTMAX_C(v)

/* C23 7.22.3.x Width of other integer types. */
#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
#define PTRDIFF_WIDTH    __PTRDIFF_WIDTH__
#define SIG_ATOMIC_WIDTH __SIG_ATOMIC_WIDTH__
#define SIZE_WIDTH       __SIZE_WIDTH__
#define WCHAR_WIDTH      __WCHAR_WIDTH__
#define WINT_WIDTH       __WINT_WIDTH__
#endif

#endif /* __STDC_HOSTED__ */
#endif /* __MVS__ */
#endif /* __CLANG_STDINT_H */
`,"stdnoreturn.h":`/*===---- stdnoreturn.h - Standard header for noreturn macro ---------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __STDNORETURN_H
#define __STDNORETURN_H

#if defined(__MVS__) && __has_include_next(<stdnoreturn.h>)
#include_next <stdnoreturn.h>
#else

#define noreturn _Noreturn
#define __noreturn_is_defined 1

#endif /* __MVS__ */

#if (defined(__STDC_VERSION__) && __STDC_VERSION__ > 201710L) &&               \\
    !defined(_CLANG_DISABLE_CRT_DEPRECATION_WARNINGS)
/* The noreturn macro is deprecated in C23. We do not mark it as such because
   including the header file in C23 is also deprecated and we do not want to
   issue a confusing diagnostic for code which includes <stdnoreturn.h>
   followed by code that writes [[noreturn]]. The issue with such code is not
   with the attribute, or the use of 'noreturn', but the inclusion of the
   header. */
/* FIXME: We should be issuing a deprecation warning here, but cannot yet due
 * to system headers which include this header file unconditionally.
 */
#endif

#endif /* __STDNORETURN_H */
`,"tgmath.h":`/*===---- tgmath.h - Standard header for type generic math ----------------===*\\
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
\\*===----------------------------------------------------------------------===*/

#ifndef __CLANG_TGMATH_H
#define __CLANG_TGMATH_H

/* C99 7.22 Type-generic math <tgmath.h>. */
#include <math.h>

/*
 * Allow additional definitions and implementation-defined values on Apple
 * platforms. This is done after #include <math.h> to avoid depcycle conflicts
 * between libcxx and darwin in C++ modules builds.
 */
#if defined(__APPLE__) && __STDC_HOSTED__ && __has_include_next(<tgmath.h>)
#  include_next <tgmath.h>
#else

/* C++ handles type genericity with overloading in math.h. */
#ifndef __cplusplus
#include <complex.h>

#define _TG_ATTRSp __attribute__((__overloadable__))
#define _TG_ATTRS __attribute__((__overloadable__, __always_inline__))

// promotion

typedef void _Argument_type_is_not_arithmetic;
static _Argument_type_is_not_arithmetic __tg_promote(...)
  __attribute__((__unavailable__,__overloadable__));
static double               _TG_ATTRSp __tg_promote(int);
static double               _TG_ATTRSp __tg_promote(unsigned int);
static double               _TG_ATTRSp __tg_promote(long);
static double               _TG_ATTRSp __tg_promote(unsigned long);
static double               _TG_ATTRSp __tg_promote(long long);
static double               _TG_ATTRSp __tg_promote(unsigned long long);
static float                _TG_ATTRSp __tg_promote(float);
static double               _TG_ATTRSp __tg_promote(double);
static long double          _TG_ATTRSp __tg_promote(long double);
static float _Complex       _TG_ATTRSp __tg_promote(float _Complex);
static double _Complex      _TG_ATTRSp __tg_promote(double _Complex);
static long double _Complex _TG_ATTRSp __tg_promote(long double _Complex);

#define __tg_promote1(__x)           (__typeof__(__tg_promote(__x)))
#define __tg_promote2(__x, __y)      (__typeof__(__tg_promote(__x) + \\
                                                 __tg_promote(__y)))
#define __tg_promote3(__x, __y, __z) (__typeof__(__tg_promote(__x) + \\
                                                 __tg_promote(__y) + \\
                                                 __tg_promote(__z)))

// acos

static float
    _TG_ATTRS
    __tg_acos(float __x) {return acosf(__x);}

static double
    _TG_ATTRS
    __tg_acos(double __x) {return acos(__x);}

static long double
    _TG_ATTRS
    __tg_acos(long double __x) {return acosl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_acos(float _Complex __x) {return cacosf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_acos(double _Complex __x) {return cacos(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_acos(long double _Complex __x) {return cacosl(__x);}

#undef acos
#define acos(__x) __tg_acos(__tg_promote1((__x))(__x))

// asin

static float
    _TG_ATTRS
    __tg_asin(float __x) {return asinf(__x);}

static double
    _TG_ATTRS
    __tg_asin(double __x) {return asin(__x);}

static long double
    _TG_ATTRS
    __tg_asin(long double __x) {return asinl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_asin(float _Complex __x) {return casinf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_asin(double _Complex __x) {return casin(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_asin(long double _Complex __x) {return casinl(__x);}

#undef asin
#define asin(__x) __tg_asin(__tg_promote1((__x))(__x))

// atan

static float
    _TG_ATTRS
    __tg_atan(float __x) {return atanf(__x);}

static double
    _TG_ATTRS
    __tg_atan(double __x) {return atan(__x);}

static long double
    _TG_ATTRS
    __tg_atan(long double __x) {return atanl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_atan(float _Complex __x) {return catanf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_atan(double _Complex __x) {return catan(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_atan(long double _Complex __x) {return catanl(__x);}

#undef atan
#define atan(__x) __tg_atan(__tg_promote1((__x))(__x))

// acosh

static float
    _TG_ATTRS
    __tg_acosh(float __x) {return acoshf(__x);}

static double
    _TG_ATTRS
    __tg_acosh(double __x) {return acosh(__x);}

static long double
    _TG_ATTRS
    __tg_acosh(long double __x) {return acoshl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_acosh(float _Complex __x) {return cacoshf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_acosh(double _Complex __x) {return cacosh(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_acosh(long double _Complex __x) {return cacoshl(__x);}

#undef acosh
#define acosh(__x) __tg_acosh(__tg_promote1((__x))(__x))

// asinh

static float
    _TG_ATTRS
    __tg_asinh(float __x) {return asinhf(__x);}

static double
    _TG_ATTRS
    __tg_asinh(double __x) {return asinh(__x);}

static long double
    _TG_ATTRS
    __tg_asinh(long double __x) {return asinhl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_asinh(float _Complex __x) {return casinhf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_asinh(double _Complex __x) {return casinh(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_asinh(long double _Complex __x) {return casinhl(__x);}

#undef asinh
#define asinh(__x) __tg_asinh(__tg_promote1((__x))(__x))

// atanh

static float
    _TG_ATTRS
    __tg_atanh(float __x) {return atanhf(__x);}

static double
    _TG_ATTRS
    __tg_atanh(double __x) {return atanh(__x);}

static long double
    _TG_ATTRS
    __tg_atanh(long double __x) {return atanhl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_atanh(float _Complex __x) {return catanhf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_atanh(double _Complex __x) {return catanh(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_atanh(long double _Complex __x) {return catanhl(__x);}

#undef atanh
#define atanh(__x) __tg_atanh(__tg_promote1((__x))(__x))

// cos

static float
    _TG_ATTRS
    __tg_cos(float __x) {return cosf(__x);}

static double
    _TG_ATTRS
    __tg_cos(double __x) {return cos(__x);}

static long double
    _TG_ATTRS
    __tg_cos(long double __x) {return cosl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_cos(float _Complex __x) {return ccosf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_cos(double _Complex __x) {return ccos(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_cos(long double _Complex __x) {return ccosl(__x);}

#undef cos
#define cos(__x) __tg_cos(__tg_promote1((__x))(__x))

// sin

static float
    _TG_ATTRS
    __tg_sin(float __x) {return sinf(__x);}

static double
    _TG_ATTRS
    __tg_sin(double __x) {return sin(__x);}

static long double
    _TG_ATTRS
    __tg_sin(long double __x) {return sinl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_sin(float _Complex __x) {return csinf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_sin(double _Complex __x) {return csin(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_sin(long double _Complex __x) {return csinl(__x);}

#undef sin
#define sin(__x) __tg_sin(__tg_promote1((__x))(__x))

// tan

static float
    _TG_ATTRS
    __tg_tan(float __x) {return tanf(__x);}

static double
    _TG_ATTRS
    __tg_tan(double __x) {return tan(__x);}

static long double
    _TG_ATTRS
    __tg_tan(long double __x) {return tanl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_tan(float _Complex __x) {return ctanf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_tan(double _Complex __x) {return ctan(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_tan(long double _Complex __x) {return ctanl(__x);}

#undef tan
#define tan(__x) __tg_tan(__tg_promote1((__x))(__x))

// cosh

static float
    _TG_ATTRS
    __tg_cosh(float __x) {return coshf(__x);}

static double
    _TG_ATTRS
    __tg_cosh(double __x) {return cosh(__x);}

static long double
    _TG_ATTRS
    __tg_cosh(long double __x) {return coshl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_cosh(float _Complex __x) {return ccoshf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_cosh(double _Complex __x) {return ccosh(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_cosh(long double _Complex __x) {return ccoshl(__x);}

#undef cosh
#define cosh(__x) __tg_cosh(__tg_promote1((__x))(__x))

// sinh

static float
    _TG_ATTRS
    __tg_sinh(float __x) {return sinhf(__x);}

static double
    _TG_ATTRS
    __tg_sinh(double __x) {return sinh(__x);}

static long double
    _TG_ATTRS
    __tg_sinh(long double __x) {return sinhl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_sinh(float _Complex __x) {return csinhf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_sinh(double _Complex __x) {return csinh(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_sinh(long double _Complex __x) {return csinhl(__x);}

#undef sinh
#define sinh(__x) __tg_sinh(__tg_promote1((__x))(__x))

// tanh

static float
    _TG_ATTRS
    __tg_tanh(float __x) {return tanhf(__x);}

static double
    _TG_ATTRS
    __tg_tanh(double __x) {return tanh(__x);}

static long double
    _TG_ATTRS
    __tg_tanh(long double __x) {return tanhl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_tanh(float _Complex __x) {return ctanhf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_tanh(double _Complex __x) {return ctanh(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_tanh(long double _Complex __x) {return ctanhl(__x);}

#undef tanh
#define tanh(__x) __tg_tanh(__tg_promote1((__x))(__x))

// exp

static float
    _TG_ATTRS
    __tg_exp(float __x) {return expf(__x);}

static double
    _TG_ATTRS
    __tg_exp(double __x) {return exp(__x);}

static long double
    _TG_ATTRS
    __tg_exp(long double __x) {return expl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_exp(float _Complex __x) {return cexpf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_exp(double _Complex __x) {return cexp(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_exp(long double _Complex __x) {return cexpl(__x);}

#undef exp
#define exp(__x) __tg_exp(__tg_promote1((__x))(__x))

// log

static float
    _TG_ATTRS
    __tg_log(float __x) {return logf(__x);}

static double
    _TG_ATTRS
    __tg_log(double __x) {return log(__x);}

static long double
    _TG_ATTRS
    __tg_log(long double __x) {return logl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_log(float _Complex __x) {return clogf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_log(double _Complex __x) {return clog(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_log(long double _Complex __x) {return clogl(__x);}

#undef log
#define log(__x) __tg_log(__tg_promote1((__x))(__x))

// pow

static float
    _TG_ATTRS
    __tg_pow(float __x, float __y) {return powf(__x, __y);}

static double
    _TG_ATTRS
    __tg_pow(double __x, double __y) {return pow(__x, __y);}

static long double
    _TG_ATTRS
    __tg_pow(long double __x, long double __y) {return powl(__x, __y);}

static float _Complex
    _TG_ATTRS
    __tg_pow(float _Complex __x, float _Complex __y) {return cpowf(__x, __y);}

static double _Complex
    _TG_ATTRS
    __tg_pow(double _Complex __x, double _Complex __y) {return cpow(__x, __y);}

static long double _Complex
    _TG_ATTRS
    __tg_pow(long double _Complex __x, long double _Complex __y)
    {return cpowl(__x, __y);}

#undef pow
#define pow(__x, __y) __tg_pow(__tg_promote2((__x), (__y))(__x), \\
                               __tg_promote2((__x), (__y))(__y))

// sqrt

static float
    _TG_ATTRS
    __tg_sqrt(float __x) {return sqrtf(__x);}

static double
    _TG_ATTRS
    __tg_sqrt(double __x) {return sqrt(__x);}

static long double
    _TG_ATTRS
    __tg_sqrt(long double __x) {return sqrtl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_sqrt(float _Complex __x) {return csqrtf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_sqrt(double _Complex __x) {return csqrt(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_sqrt(long double _Complex __x) {return csqrtl(__x);}

#undef sqrt
#define sqrt(__x) __tg_sqrt(__tg_promote1((__x))(__x))

// fabs

static float
    _TG_ATTRS
    __tg_fabs(float __x) {return fabsf(__x);}

static double
    _TG_ATTRS
    __tg_fabs(double __x) {return fabs(__x);}

static long double
    _TG_ATTRS
    __tg_fabs(long double __x) {return fabsl(__x);}

static float
    _TG_ATTRS
    __tg_fabs(float _Complex __x) {return cabsf(__x);}

static double
    _TG_ATTRS
    __tg_fabs(double _Complex __x) {return cabs(__x);}

static long double
    _TG_ATTRS
    __tg_fabs(long double _Complex __x) {return cabsl(__x);}

#undef fabs
#define fabs(__x) __tg_fabs(__tg_promote1((__x))(__x))

// atan2

static float
    _TG_ATTRS
    __tg_atan2(float __x, float __y) {return atan2f(__x, __y);}

static double
    _TG_ATTRS
    __tg_atan2(double __x, double __y) {return atan2(__x, __y);}

static long double
    _TG_ATTRS
    __tg_atan2(long double __x, long double __y) {return atan2l(__x, __y);}

#undef atan2
#define atan2(__x, __y) __tg_atan2(__tg_promote2((__x), (__y))(__x), \\
                                   __tg_promote2((__x), (__y))(__y))

// cbrt

static float
    _TG_ATTRS
    __tg_cbrt(float __x) {return cbrtf(__x);}

static double
    _TG_ATTRS
    __tg_cbrt(double __x) {return cbrt(__x);}

static long double
    _TG_ATTRS
    __tg_cbrt(long double __x) {return cbrtl(__x);}

#undef cbrt
#define cbrt(__x) __tg_cbrt(__tg_promote1((__x))(__x))

// ceil

static float
    _TG_ATTRS
    __tg_ceil(float __x) {return ceilf(__x);}

static double
    _TG_ATTRS
    __tg_ceil(double __x) {return ceil(__x);}

static long double
    _TG_ATTRS
    __tg_ceil(long double __x) {return ceill(__x);}

#undef ceil
#define ceil(__x) __tg_ceil(__tg_promote1((__x))(__x))

// copysign

static float
    _TG_ATTRS
    __tg_copysign(float __x, float __y) {return copysignf(__x, __y);}

static double
    _TG_ATTRS
    __tg_copysign(double __x, double __y) {return copysign(__x, __y);}

static long double
    _TG_ATTRS
    __tg_copysign(long double __x, long double __y) {return copysignl(__x, __y);}

#undef copysign
#define copysign(__x, __y) __tg_copysign(__tg_promote2((__x), (__y))(__x), \\
                                         __tg_promote2((__x), (__y))(__y))

// erf

static float
    _TG_ATTRS
    __tg_erf(float __x) {return erff(__x);}

static double
    _TG_ATTRS
    __tg_erf(double __x) {return erf(__x);}

static long double
    _TG_ATTRS
    __tg_erf(long double __x) {return erfl(__x);}

#undef erf
#define erf(__x) __tg_erf(__tg_promote1((__x))(__x))

// erfc

static float
    _TG_ATTRS
    __tg_erfc(float __x) {return erfcf(__x);}

static double
    _TG_ATTRS
    __tg_erfc(double __x) {return erfc(__x);}

static long double
    _TG_ATTRS
    __tg_erfc(long double __x) {return erfcl(__x);}

#undef erfc
#define erfc(__x) __tg_erfc(__tg_promote1((__x))(__x))

// exp2

static float
    _TG_ATTRS
    __tg_exp2(float __x) {return exp2f(__x);}

static double
    _TG_ATTRS
    __tg_exp2(double __x) {return exp2(__x);}

static long double
    _TG_ATTRS
    __tg_exp2(long double __x) {return exp2l(__x);}

#undef exp2
#define exp2(__x) __tg_exp2(__tg_promote1((__x))(__x))

// expm1

static float
    _TG_ATTRS
    __tg_expm1(float __x) {return expm1f(__x);}

static double
    _TG_ATTRS
    __tg_expm1(double __x) {return expm1(__x);}

static long double
    _TG_ATTRS
    __tg_expm1(long double __x) {return expm1l(__x);}

#undef expm1
#define expm1(__x) __tg_expm1(__tg_promote1((__x))(__x))

// fdim

static float
    _TG_ATTRS
    __tg_fdim(float __x, float __y) {return fdimf(__x, __y);}

static double
    _TG_ATTRS
    __tg_fdim(double __x, double __y) {return fdim(__x, __y);}

static long double
    _TG_ATTRS
    __tg_fdim(long double __x, long double __y) {return fdiml(__x, __y);}

#undef fdim
#define fdim(__x, __y) __tg_fdim(__tg_promote2((__x), (__y))(__x), \\
                                 __tg_promote2((__x), (__y))(__y))

// floor

static float
    _TG_ATTRS
    __tg_floor(float __x) {return floorf(__x);}

static double
    _TG_ATTRS
    __tg_floor(double __x) {return floor(__x);}

static long double
    _TG_ATTRS
    __tg_floor(long double __x) {return floorl(__x);}

#undef floor
#define floor(__x) __tg_floor(__tg_promote1((__x))(__x))

// fma

static float
    _TG_ATTRS
    __tg_fma(float __x, float __y, float __z)
    {return fmaf(__x, __y, __z);}

static double
    _TG_ATTRS
    __tg_fma(double __x, double __y, double __z)
    {return fma(__x, __y, __z);}

static long double
    _TG_ATTRS
    __tg_fma(long double __x,long double __y, long double __z)
    {return fmal(__x, __y, __z);}

#undef fma
#define fma(__x, __y, __z)                                \\
        __tg_fma(__tg_promote3((__x), (__y), (__z))(__x), \\
                 __tg_promote3((__x), (__y), (__z))(__y), \\
                 __tg_promote3((__x), (__y), (__z))(__z))

// fmax

static float
    _TG_ATTRS
    __tg_fmax(float __x, float __y) {return fmaxf(__x, __y);}

static double
    _TG_ATTRS
    __tg_fmax(double __x, double __y) {return fmax(__x, __y);}

static long double
    _TG_ATTRS
    __tg_fmax(long double __x, long double __y) {return fmaxl(__x, __y);}

#undef fmax
#define fmax(__x, __y) __tg_fmax(__tg_promote2((__x), (__y))(__x), \\
                                 __tg_promote2((__x), (__y))(__y))

// fmin

static float
    _TG_ATTRS
    __tg_fmin(float __x, float __y) {return fminf(__x, __y);}

static double
    _TG_ATTRS
    __tg_fmin(double __x, double __y) {return fmin(__x, __y);}

static long double
    _TG_ATTRS
    __tg_fmin(long double __x, long double __y) {return fminl(__x, __y);}

#undef fmin
#define fmin(__x, __y) __tg_fmin(__tg_promote2((__x), (__y))(__x), \\
                                 __tg_promote2((__x), (__y))(__y))

// fmod

static float
    _TG_ATTRS
    __tg_fmod(float __x, float __y) {return fmodf(__x, __y);}

static double
    _TG_ATTRS
    __tg_fmod(double __x, double __y) {return fmod(__x, __y);}

static long double
    _TG_ATTRS
    __tg_fmod(long double __x, long double __y) {return fmodl(__x, __y);}

#undef fmod
#define fmod(__x, __y) __tg_fmod(__tg_promote2((__x), (__y))(__x), \\
                                 __tg_promote2((__x), (__y))(__y))

// frexp

static float
    _TG_ATTRS
    __tg_frexp(float __x, int* __y) {return frexpf(__x, __y);}

static double
    _TG_ATTRS
    __tg_frexp(double __x, int* __y) {return frexp(__x, __y);}

static long double
    _TG_ATTRS
    __tg_frexp(long double __x, int* __y) {return frexpl(__x, __y);}

#undef frexp
#define frexp(__x, __y) __tg_frexp(__tg_promote1((__x))(__x), __y)

// hypot

static float
    _TG_ATTRS
    __tg_hypot(float __x, float __y) {return hypotf(__x, __y);}

static double
    _TG_ATTRS
    __tg_hypot(double __x, double __y) {return hypot(__x, __y);}

static long double
    _TG_ATTRS
    __tg_hypot(long double __x, long double __y) {return hypotl(__x, __y);}

#undef hypot
#define hypot(__x, __y) __tg_hypot(__tg_promote2((__x), (__y))(__x), \\
                                   __tg_promote2((__x), (__y))(__y))

// ilogb

static int
    _TG_ATTRS
    __tg_ilogb(float __x) {return ilogbf(__x);}

static int
    _TG_ATTRS
    __tg_ilogb(double __x) {return ilogb(__x);}

static int
    _TG_ATTRS
    __tg_ilogb(long double __x) {return ilogbl(__x);}

#undef ilogb
#define ilogb(__x) __tg_ilogb(__tg_promote1((__x))(__x))

// ldexp

static float
    _TG_ATTRS
    __tg_ldexp(float __x, int __y) {return ldexpf(__x, __y);}

static double
    _TG_ATTRS
    __tg_ldexp(double __x, int __y) {return ldexp(__x, __y);}

static long double
    _TG_ATTRS
    __tg_ldexp(long double __x, int __y) {return ldexpl(__x, __y);}

#undef ldexp
#define ldexp(__x, __y) __tg_ldexp(__tg_promote1((__x))(__x), __y)

// lgamma

static float
    _TG_ATTRS
    __tg_lgamma(float __x) {return lgammaf(__x);}

static double
    _TG_ATTRS
    __tg_lgamma(double __x) {return lgamma(__x);}

static long double
    _TG_ATTRS
    __tg_lgamma(long double __x) {return lgammal(__x);}

#undef lgamma
#define lgamma(__x) __tg_lgamma(__tg_promote1((__x))(__x))

// llrint

static long long
    _TG_ATTRS
    __tg_llrint(float __x) {return llrintf(__x);}

static long long
    _TG_ATTRS
    __tg_llrint(double __x) {return llrint(__x);}

static long long
    _TG_ATTRS
    __tg_llrint(long double __x) {return llrintl(__x);}

#undef llrint
#define llrint(__x) __tg_llrint(__tg_promote1((__x))(__x))

// llround

static long long
    _TG_ATTRS
    __tg_llround(float __x) {return llroundf(__x);}

static long long
    _TG_ATTRS
    __tg_llround(double __x) {return llround(__x);}

static long long
    _TG_ATTRS
    __tg_llround(long double __x) {return llroundl(__x);}

#undef llround
#define llround(__x) __tg_llround(__tg_promote1((__x))(__x))

// log10

static float
    _TG_ATTRS
    __tg_log10(float __x) {return log10f(__x);}

static double
    _TG_ATTRS
    __tg_log10(double __x) {return log10(__x);}

static long double
    _TG_ATTRS
    __tg_log10(long double __x) {return log10l(__x);}

#undef log10
#define log10(__x) __tg_log10(__tg_promote1((__x))(__x))

// log1p

static float
    _TG_ATTRS
    __tg_log1p(float __x) {return log1pf(__x);}

static double
    _TG_ATTRS
    __tg_log1p(double __x) {return log1p(__x);}

static long double
    _TG_ATTRS
    __tg_log1p(long double __x) {return log1pl(__x);}

#undef log1p
#define log1p(__x) __tg_log1p(__tg_promote1((__x))(__x))

// log2

static float
    _TG_ATTRS
    __tg_log2(float __x) {return log2f(__x);}

static double
    _TG_ATTRS
    __tg_log2(double __x) {return log2(__x);}

static long double
    _TG_ATTRS
    __tg_log2(long double __x) {return log2l(__x);}

#undef log2
#define log2(__x) __tg_log2(__tg_promote1((__x))(__x))

// logb

static float
    _TG_ATTRS
    __tg_logb(float __x) {return logbf(__x);}

static double
    _TG_ATTRS
    __tg_logb(double __x) {return logb(__x);}

static long double
    _TG_ATTRS
    __tg_logb(long double __x) {return logbl(__x);}

#undef logb
#define logb(__x) __tg_logb(__tg_promote1((__x))(__x))

// lrint

static long
    _TG_ATTRS
    __tg_lrint(float __x) {return lrintf(__x);}

static long
    _TG_ATTRS
    __tg_lrint(double __x) {return lrint(__x);}

static long
    _TG_ATTRS
    __tg_lrint(long double __x) {return lrintl(__x);}

#undef lrint
#define lrint(__x) __tg_lrint(__tg_promote1((__x))(__x))

// lround

static long
    _TG_ATTRS
    __tg_lround(float __x) {return lroundf(__x);}

static long
    _TG_ATTRS
    __tg_lround(double __x) {return lround(__x);}

static long
    _TG_ATTRS
    __tg_lround(long double __x) {return lroundl(__x);}

#undef lround
#define lround(__x) __tg_lround(__tg_promote1((__x))(__x))

// nearbyint

static float
    _TG_ATTRS
    __tg_nearbyint(float __x) {return nearbyintf(__x);}

static double
    _TG_ATTRS
    __tg_nearbyint(double __x) {return nearbyint(__x);}

static long double
    _TG_ATTRS
    __tg_nearbyint(long double __x) {return nearbyintl(__x);}

#undef nearbyint
#define nearbyint(__x) __tg_nearbyint(__tg_promote1((__x))(__x))

// nextafter

static float
    _TG_ATTRS
    __tg_nextafter(float __x, float __y) {return nextafterf(__x, __y);}

static double
    _TG_ATTRS
    __tg_nextafter(double __x, double __y) {return nextafter(__x, __y);}

static long double
    _TG_ATTRS
    __tg_nextafter(long double __x, long double __y) {return nextafterl(__x, __y);}

#undef nextafter
#define nextafter(__x, __y) __tg_nextafter(__tg_promote2((__x), (__y))(__x), \\
                                           __tg_promote2((__x), (__y))(__y))

// nexttoward

static float
    _TG_ATTRS
    __tg_nexttoward(float __x, long double __y) {return nexttowardf(__x, __y);}

static double
    _TG_ATTRS
    __tg_nexttoward(double __x, long double __y) {return nexttoward(__x, __y);}

static long double
    _TG_ATTRS
    __tg_nexttoward(long double __x, long double __y) {return nexttowardl(__x, __y);}

#undef nexttoward
#define nexttoward(__x, __y) __tg_nexttoward(__tg_promote1((__x))(__x), (__y))

// remainder

static float
    _TG_ATTRS
    __tg_remainder(float __x, float __y) {return remainderf(__x, __y);}

static double
    _TG_ATTRS
    __tg_remainder(double __x, double __y) {return remainder(__x, __y);}

static long double
    _TG_ATTRS
    __tg_remainder(long double __x, long double __y) {return remainderl(__x, __y);}

#undef remainder
#define remainder(__x, __y) __tg_remainder(__tg_promote2((__x), (__y))(__x), \\
                                           __tg_promote2((__x), (__y))(__y))

// remquo

static float
    _TG_ATTRS
    __tg_remquo(float __x, float __y, int* __z)
    {return remquof(__x, __y, __z);}

static double
    _TG_ATTRS
    __tg_remquo(double __x, double __y, int* __z)
    {return remquo(__x, __y, __z);}

static long double
    _TG_ATTRS
    __tg_remquo(long double __x,long double __y, int* __z)
    {return remquol(__x, __y, __z);}

#undef remquo
#define remquo(__x, __y, __z)                         \\
        __tg_remquo(__tg_promote2((__x), (__y))(__x), \\
                    __tg_promote2((__x), (__y))(__y), \\
                    (__z))

// rint

static float
    _TG_ATTRS
    __tg_rint(float __x) {return rintf(__x);}

static double
    _TG_ATTRS
    __tg_rint(double __x) {return rint(__x);}

static long double
    _TG_ATTRS
    __tg_rint(long double __x) {return rintl(__x);}

#undef rint
#define rint(__x) __tg_rint(__tg_promote1((__x))(__x))

// round

static float
    _TG_ATTRS
    __tg_round(float __x) {return roundf(__x);}

static double
    _TG_ATTRS
    __tg_round(double __x) {return round(__x);}

static long double
    _TG_ATTRS
    __tg_round(long double __x) {return roundl(__x);}

#undef round
#define round(__x) __tg_round(__tg_promote1((__x))(__x))

// scalbn

static float
    _TG_ATTRS
    __tg_scalbn(float __x, int __y) {return scalbnf(__x, __y);}

static double
    _TG_ATTRS
    __tg_scalbn(double __x, int __y) {return scalbn(__x, __y);}

static long double
    _TG_ATTRS
    __tg_scalbn(long double __x, int __y) {return scalbnl(__x, __y);}

#undef scalbn
#define scalbn(__x, __y) __tg_scalbn(__tg_promote1((__x))(__x), __y)

// scalbln

static float
    _TG_ATTRS
    __tg_scalbln(float __x, long __y) {return scalblnf(__x, __y);}

static double
    _TG_ATTRS
    __tg_scalbln(double __x, long __y) {return scalbln(__x, __y);}

static long double
    _TG_ATTRS
    __tg_scalbln(long double __x, long __y) {return scalblnl(__x, __y);}

#undef scalbln
#define scalbln(__x, __y) __tg_scalbln(__tg_promote1((__x))(__x), __y)

// tgamma

static float
    _TG_ATTRS
    __tg_tgamma(float __x) {return tgammaf(__x);}

static double
    _TG_ATTRS
    __tg_tgamma(double __x) {return tgamma(__x);}

static long double
    _TG_ATTRS
    __tg_tgamma(long double __x) {return tgammal(__x);}

#undef tgamma
#define tgamma(__x) __tg_tgamma(__tg_promote1((__x))(__x))

// trunc

static float
    _TG_ATTRS
    __tg_trunc(float __x) {return truncf(__x);}

static double
    _TG_ATTRS
    __tg_trunc(double __x) {return trunc(__x);}

static long double
    _TG_ATTRS
    __tg_trunc(long double __x) {return truncl(__x);}

#undef trunc
#define trunc(__x) __tg_trunc(__tg_promote1((__x))(__x))

// carg

static float
    _TG_ATTRS
    __tg_carg(float __x) {return atan2f(0.F, __x);}

static double
    _TG_ATTRS
    __tg_carg(double __x) {return atan2(0., __x);}

static long double
    _TG_ATTRS
    __tg_carg(long double __x) {return atan2l(0.L, __x);}

static float
    _TG_ATTRS
    __tg_carg(float _Complex __x) {return cargf(__x);}

static double
    _TG_ATTRS
    __tg_carg(double _Complex __x) {return carg(__x);}

static long double
    _TG_ATTRS
    __tg_carg(long double _Complex __x) {return cargl(__x);}

#undef carg
#define carg(__x) __tg_carg(__tg_promote1((__x))(__x))

// cimag

static float
    _TG_ATTRS
    __tg_cimag(float __x) {return 0;}

static double
    _TG_ATTRS
    __tg_cimag(double __x) {return 0;}

static long double
    _TG_ATTRS
    __tg_cimag(long double __x) {return 0;}

static float
    _TG_ATTRS
    __tg_cimag(float _Complex __x) {return cimagf(__x);}

static double
    _TG_ATTRS
    __tg_cimag(double _Complex __x) {return cimag(__x);}

static long double
    _TG_ATTRS
    __tg_cimag(long double _Complex __x) {return cimagl(__x);}

#undef cimag
#define cimag(__x) __tg_cimag(__tg_promote1((__x))(__x))

// conj

static float _Complex
    _TG_ATTRS
    __tg_conj(float __x) {return __x;}

static double _Complex
    _TG_ATTRS
    __tg_conj(double __x) {return __x;}

static long double _Complex
    _TG_ATTRS
    __tg_conj(long double __x) {return __x;}

static float _Complex
    _TG_ATTRS
    __tg_conj(float _Complex __x) {return conjf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_conj(double _Complex __x) {return conj(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_conj(long double _Complex __x) {return conjl(__x);}

#undef conj
#define conj(__x) __tg_conj(__tg_promote1((__x))(__x))

// cproj

static float _Complex
    _TG_ATTRS
    __tg_cproj(float __x) {return cprojf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_cproj(double __x) {return cproj(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_cproj(long double __x) {return cprojl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_cproj(float _Complex __x) {return cprojf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_cproj(double _Complex __x) {return cproj(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_cproj(long double _Complex __x) {return cprojl(__x);}

#undef cproj
#define cproj(__x) __tg_cproj(__tg_promote1((__x))(__x))

// creal

static float
    _TG_ATTRS
    __tg_creal(float __x) {return __x;}

static double
    _TG_ATTRS
    __tg_creal(double __x) {return __x;}

static long double
    _TG_ATTRS
    __tg_creal(long double __x) {return __x;}

static float
    _TG_ATTRS
    __tg_creal(float _Complex __x) {return crealf(__x);}

static double
    _TG_ATTRS
    __tg_creal(double _Complex __x) {return creal(__x);}

static long double
    _TG_ATTRS
    __tg_creal(long double _Complex __x) {return creall(__x);}

#undef creal
#define creal(__x) __tg_creal(__tg_promote1((__x))(__x))

#undef _TG_ATTRSp
#undef _TG_ATTRS

#endif /* __cplusplus */
#endif /* __has_include_next */
#endif /* __CLANG_TGMATH_H */
`,"unwind.h":`/*===---- unwind.h - Stack unwinding ----------------------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

/* See "Data Definitions for libgcc_s" in the Linux Standard Base.*/

#ifndef __CLANG_UNWIND_H
#define __CLANG_UNWIND_H

#if defined(__APPLE__) && __has_include_next(<unwind.h>)
/* Darwin (from 11.x on) provide an unwind.h. If that's available,
 * use it. libunwind wraps some of its definitions in #ifdef _GNU_SOURCE,
 * so define that around the include.*/
# ifndef _GNU_SOURCE
#  define _SHOULD_UNDEFINE_GNU_SOURCE
#  define _GNU_SOURCE
# endif
// libunwind's unwind.h reflects the current visibility.  However, Mozilla
// builds with -fvisibility=hidden and relies on gcc's unwind.h to reset the
// visibility to default and export its contents.  gcc also allows users to
// override its override by #defining HIDE_EXPORTS (but note, this only obeys
// the user's -fvisibility setting; it doesn't hide any exports on its own).  We
// imitate gcc's header here:
# ifdef HIDE_EXPORTS
#  include_next <unwind.h>
# else
#  pragma GCC visibility push(default)
#  include_next <unwind.h>
#  pragma GCC visibility pop
# endif
# ifdef _SHOULD_UNDEFINE_GNU_SOURCE
#  undef _GNU_SOURCE
#  undef _SHOULD_UNDEFINE_GNU_SOURCE
# endif
#else

#include <stdint.h>

#ifdef __cplusplus
extern "C" {
#endif

/* It is a bit strange for a header to play with the visibility of the
   symbols it declares, but this matches gcc's behavior and some programs
   depend on it */
#ifndef HIDE_EXPORTS
#pragma GCC visibility push(default)
#endif

typedef uintptr_t _Unwind_Word __attribute__((__mode__(__unwind_word__)));
typedef intptr_t _Unwind_Sword __attribute__((__mode__(__unwind_word__)));
typedef uintptr_t _Unwind_Ptr;
typedef uintptr_t _Unwind_Internal_Ptr;
typedef uint64_t _Unwind_Exception_Class;

typedef intptr_t _sleb128_t;
typedef uintptr_t _uleb128_t;

struct _Unwind_Context;
#if defined(__arm__) && !(defined(__USING_SJLJ_EXCEPTIONS__) || \\
                          defined(__ARM_DWARF_EH__) || defined(__SEH__))
struct _Unwind_Control_Block;
typedef struct _Unwind_Control_Block _Unwind_Control_Block;
#define _Unwind_Exception _Unwind_Control_Block /* Alias */
#else
struct _Unwind_Exception;
typedef struct _Unwind_Exception _Unwind_Exception;
#endif
typedef enum {
  _URC_NO_REASON = 0,
#if defined(__arm__) && !defined(__USING_SJLJ_EXCEPTIONS__) && \\
    !defined(__ARM_DWARF_EH__) && !defined(__SEH__)
  _URC_OK = 0, /* used by ARM EHABI */
#endif
  _URC_FOREIGN_EXCEPTION_CAUGHT = 1,

  _URC_FATAL_PHASE2_ERROR = 2,
  _URC_FATAL_PHASE1_ERROR = 3,
  _URC_NORMAL_STOP = 4,

  _URC_END_OF_STACK = 5,
  _URC_HANDLER_FOUND = 6,
  _URC_INSTALL_CONTEXT = 7,
  _URC_CONTINUE_UNWIND = 8,
#if defined(__arm__) && !defined(__USING_SJLJ_EXCEPTIONS__) && \\
    !defined(__ARM_DWARF_EH__) && !defined(__SEH__)
  _URC_FAILURE = 9 /* used by ARM EHABI */
#endif
} _Unwind_Reason_Code;

typedef enum {
  _UA_SEARCH_PHASE = 1,
  _UA_CLEANUP_PHASE = 2,

  _UA_HANDLER_FRAME = 4,
  _UA_FORCE_UNWIND = 8,
  _UA_END_OF_STACK = 16 /* gcc extension to C++ ABI */
} _Unwind_Action;

typedef void (*_Unwind_Exception_Cleanup_Fn)(_Unwind_Reason_Code,
                                             _Unwind_Exception *);

#if defined(__arm__) && !(defined(__USING_SJLJ_EXCEPTIONS__) || \\
                          defined(__ARM_DWARF_EH__) || defined(__SEH__))
typedef struct _Unwind_Control_Block _Unwind_Control_Block;
typedef uint32_t _Unwind_EHT_Header;

struct _Unwind_Control_Block {
  uint64_t exception_class;
  void (*exception_cleanup)(_Unwind_Reason_Code, _Unwind_Control_Block *);
  /* unwinder cache (private fields for the unwinder's use) */
  struct {
    uint32_t reserved1; /* forced unwind stop function, 0 if not forced */
    uint32_t reserved2; /* personality routine */
    uint32_t reserved3; /* callsite */
    uint32_t reserved4; /* forced unwind stop argument */
    uint32_t reserved5;
  } unwinder_cache;
  /* propagation barrier cache (valid after phase 1) */
  struct {
    uint32_t sp;
    uint32_t bitpattern[5];
  } barrier_cache;
  /* cleanup cache (preserved over cleanup) */
  struct {
    uint32_t bitpattern[4];
  } cleanup_cache;
  /* personality cache (for personality's benefit) */
  struct {
    uint32_t fnstart;         /* function start address */
    _Unwind_EHT_Header *ehtp; /* pointer to EHT entry header word */
    uint32_t additional;      /* additional data */
    uint32_t reserved1;
  } pr_cache;
  long long int : 0; /* force alignment of next item to 8-byte boundary */
} __attribute__((__aligned__(8)));
#else
struct _Unwind_Exception {
  _Unwind_Exception_Class exception_class;
  _Unwind_Exception_Cleanup_Fn exception_cleanup;
#if !defined (__USING_SJLJ_EXCEPTIONS__) && defined (__SEH__)
  _Unwind_Word private_[6];
#else
  _Unwind_Word private_1;
  _Unwind_Word private_2;
#endif
  /* The Itanium ABI requires that _Unwind_Exception objects are "double-word
   * aligned".  GCC has interpreted this to mean "use the maximum useful
   * alignment for the target"; so do we. */
} __attribute__((__aligned__));
#endif

typedef _Unwind_Reason_Code (*_Unwind_Stop_Fn)(int, _Unwind_Action,
                                               _Unwind_Exception_Class,
                                               _Unwind_Exception *,
                                               struct _Unwind_Context *,
                                               void *);

typedef _Unwind_Reason_Code (*_Unwind_Personality_Fn)(int, _Unwind_Action,
                                                      _Unwind_Exception_Class,
                                                      _Unwind_Exception *,
                                                      struct _Unwind_Context *);
typedef _Unwind_Personality_Fn __personality_routine;

typedef _Unwind_Reason_Code (*_Unwind_Trace_Fn)(struct _Unwind_Context *,
                                                void *);

#if defined(__arm__) && !(defined(__USING_SJLJ_EXCEPTIONS__) ||                \\
                          defined(__ARM_DWARF_EH__) || defined(__SEH__))
typedef enum {
  _UVRSC_CORE = 0,        /* integer register */
  _UVRSC_VFP = 1,         /* vfp */
  _UVRSC_WMMXD = 3,       /* Intel WMMX data register */
  _UVRSC_WMMXC = 4,       /* Intel WMMX control register */
  _UVRSC_PSEUDO = 5       /* Special purpose pseudo register */
} _Unwind_VRS_RegClass;

typedef enum {
  _UVRSD_UINT32 = 0,
  _UVRSD_VFPX = 1,
  _UVRSD_UINT64 = 3,
  _UVRSD_FLOAT = 4,
  _UVRSD_DOUBLE = 5
} _Unwind_VRS_DataRepresentation;

typedef enum {
  _UVRSR_OK = 0,
  _UVRSR_NOT_IMPLEMENTED = 1,
  _UVRSR_FAILED = 2
} _Unwind_VRS_Result;

typedef uint32_t _Unwind_State;
#define _US_VIRTUAL_UNWIND_FRAME  ((_Unwind_State)0)
#define _US_UNWIND_FRAME_STARTING ((_Unwind_State)1)
#define _US_UNWIND_FRAME_RESUME   ((_Unwind_State)2)
#define _US_ACTION_MASK           ((_Unwind_State)3)
#define _US_FORCE_UNWIND          ((_Unwind_State)8)

_Unwind_VRS_Result _Unwind_VRS_Get(struct _Unwind_Context *__context,
  _Unwind_VRS_RegClass __regclass,
  uint32_t __regno,
  _Unwind_VRS_DataRepresentation __representation,
  void *__valuep);

_Unwind_VRS_Result _Unwind_VRS_Set(struct _Unwind_Context *__context,
  _Unwind_VRS_RegClass __regclass,
  uint32_t __regno,
  _Unwind_VRS_DataRepresentation __representation,
  void *__valuep);

static __inline__
_Unwind_Word _Unwind_GetGR(struct _Unwind_Context *__context, int __index) {
  _Unwind_Word __value;
  _Unwind_VRS_Get(__context, _UVRSC_CORE, __index, _UVRSD_UINT32, &__value);
  return __value;
}

static __inline__
void _Unwind_SetGR(struct _Unwind_Context *__context, int __index,
                   _Unwind_Word __value) {
  _Unwind_VRS_Set(__context, _UVRSC_CORE, __index, _UVRSD_UINT32, &__value);
}

static __inline__
_Unwind_Word _Unwind_GetIP(struct _Unwind_Context *__context) {
  _Unwind_Word __ip = _Unwind_GetGR(__context, 15);
  return __ip & ~(_Unwind_Word)(0x1); /* Remove thumb mode bit. */
}

static __inline__
void _Unwind_SetIP(struct _Unwind_Context *__context, _Unwind_Word __value) {
  _Unwind_Word __thumb_mode_bit = _Unwind_GetGR(__context, 15) & 0x1;
  _Unwind_SetGR(__context, 15, __value | __thumb_mode_bit);
}
#else
_Unwind_Word _Unwind_GetGR(struct _Unwind_Context *, int);
void _Unwind_SetGR(struct _Unwind_Context *, int, _Unwind_Word);

_Unwind_Word _Unwind_GetIP(struct _Unwind_Context *);
void _Unwind_SetIP(struct _Unwind_Context *, _Unwind_Word);
#endif


_Unwind_Word _Unwind_GetIPInfo(struct _Unwind_Context *, int *);

_Unwind_Word _Unwind_GetCFA(struct _Unwind_Context *);

_Unwind_Word _Unwind_GetBSP(struct _Unwind_Context *);

void *_Unwind_GetLanguageSpecificData(struct _Unwind_Context *);

_Unwind_Ptr _Unwind_GetRegionStart(struct _Unwind_Context *);

/* DWARF EH functions; currently not available on Darwin/ARM */
#if !defined(__APPLE__) || !defined(__arm__)
_Unwind_Reason_Code _Unwind_RaiseException(_Unwind_Exception *);
_Unwind_Reason_Code _Unwind_ForcedUnwind(_Unwind_Exception *, _Unwind_Stop_Fn,
                                         void *);
void _Unwind_DeleteException(_Unwind_Exception *);
void _Unwind_Resume(_Unwind_Exception *);
_Unwind_Reason_Code _Unwind_Resume_or_Rethrow(_Unwind_Exception *);

#endif

_Unwind_Reason_Code _Unwind_Backtrace(_Unwind_Trace_Fn, void *);

/* setjmp(3)/longjmp(3) stuff */
typedef struct SjLj_Function_Context *_Unwind_FunctionContext_t;

void _Unwind_SjLj_Register(_Unwind_FunctionContext_t);
void _Unwind_SjLj_Unregister(_Unwind_FunctionContext_t);
_Unwind_Reason_Code _Unwind_SjLj_RaiseException(_Unwind_Exception *);
_Unwind_Reason_Code _Unwind_SjLj_ForcedUnwind(_Unwind_Exception *,
                                              _Unwind_Stop_Fn, void *);
void _Unwind_SjLj_Resume(_Unwind_Exception *);
_Unwind_Reason_Code _Unwind_SjLj_Resume_or_Rethrow(_Unwind_Exception *);

void *_Unwind_FindEnclosingFunction(void *);

#ifdef __APPLE__

_Unwind_Ptr _Unwind_GetDataRelBase(struct _Unwind_Context *)
    __attribute__((__unavailable__));
_Unwind_Ptr _Unwind_GetTextRelBase(struct _Unwind_Context *)
    __attribute__((__unavailable__));

/* Darwin-specific functions */
void __register_frame(const void *);
void __deregister_frame(const void *);

struct dwarf_eh_bases {
  uintptr_t tbase;
  uintptr_t dbase;
  uintptr_t func;
};
void *_Unwind_Find_FDE(const void *, struct dwarf_eh_bases *);

void __register_frame_info_bases(const void *, void *, void *, void *)
  __attribute__((__unavailable__));
void __register_frame_info(const void *, void *) __attribute__((__unavailable__));
void __register_frame_info_table_bases(const void *, void*, void *, void *)
  __attribute__((__unavailable__));
void __register_frame_info_table(const void *, void *)
  __attribute__((__unavailable__));
void __register_frame_table(const void *) __attribute__((__unavailable__));
void __deregister_frame_info(const void *) __attribute__((__unavailable__));
void __deregister_frame_info_bases(const void *)__attribute__((__unavailable__));

#else

_Unwind_Ptr _Unwind_GetDataRelBase(struct _Unwind_Context *);
_Unwind_Ptr _Unwind_GetTextRelBase(struct _Unwind_Context *);

#endif


#ifndef HIDE_EXPORTS
#pragma GCC visibility pop
#endif

#ifdef __cplusplus
}
#endif

#endif

#endif /* __CLANG_UNWIND_H */
`,"varargs.h":`/*===---- varargs.h - Variable argument handling -------------------------------------===
*
* Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
* See https://llvm.org/LICENSE.txt for license information.
* SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
*
*===-----------------------------------------------------------------------===
*/
#ifndef __VARARGS_H
#define __VARARGS_H
#if defined(__MVS__) && __has_include_next(<varargs.h>)
#include_next <varargs.h>
#else
#error "Please use <stdarg.h> instead of <varargs.h>"
#endif /* __MVS__ */
#endif
`});var B_=Object.freeze({name:"clang",version:"22.1.8",revision:"ca7933e47d3a3451d81e72ac174dcb5aa28b59d1"}),uo="/lib/clang/22";function Ei(t,e,n){if(e?.name!==B_.name||e.version!==B_.version||e.revision!==B_.revision||n!==uo)return!1;let _=new TextDecoder("utf-8",{fatal:!0}),i=[];for(let[s,o]of Object.entries(yi)){let a=`${n}/include/${s}`;try{let d=t.readFile(a);if(d!==null){if(_.decode(d)!==o)throw new Error(`Clang ${e.version} resource header differs from its pinned source: ${s}`)}else i.push([a,o])}catch(d){throw new Error(`Unable to inspect Clang ${e.version} resource header ${s}: ${d instanceof Error?d.message:String(d)}`,{cause:d})}}if(i.length)try{t.mkdirTree(`${n}/include`)}catch(s){throw new Error(`Unable to prepare Clang ${e.version} resource header directory: ${s instanceof Error?s.message:String(s)}`,{cause:s})}let r=new TextEncoder;for(let[s,o]of i)try{t.writeFile(s,r.encode(o))}catch(a){throw new Error(`Unable to install Clang ${e.version} resource header ${s.slice(s.lastIndexOf("/")+1)}: ${a instanceof Error?a.message:String(a)}`,{cause:a})}return!0}var Xt=Object.freeze({name:"clang",version:"22.1.8",revision:"ca7933e47d3a3451d81e72ac174dcb5aa28b59d1"}),kt=Object.freeze({path:"ostream",bytes:8445,sha256:"f193fb44780e6aed1fb4cf9da83142fcceb62efc7d4087cd051c117db12fce81"}),Ni=Object.freeze({"__algorithm/ranges_contains_subrange.h":`//===----------------------------------------------------------------------===//
//
// Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===----------------------------------------------------------------------===//

#ifndef _LIBCPP___ALGORITHM_RANGES_CONTAINS_SUBRANGE_H
#define _LIBCPP___ALGORITHM_RANGES_CONTAINS_SUBRANGE_H

#include <__algorithm/ranges_search.h>
#include <__config>
#include <__functional/identity.h>
#include <__functional/ranges_operations.h>
#include <__functional/reference_wrapper.h>
#include <__iterator/concepts.h>
#include <__iterator/indirectly_comparable.h>
#include <__iterator/projected.h>
#include <__ranges/access.h>
#include <__ranges/concepts.h>
#include <__ranges/size.h>
#include <__ranges/subrange.h>
#include <__utility/move.h>

#if !defined(_LIBCPP_HAS_NO_PRAGMA_SYSTEM_HEADER)
#  pragma GCC system_header
#endif

_LIBCPP_PUSH_MACROS
#include <__undef_macros>

#if _LIBCPP_STD_VER >= 23

_LIBCPP_BEGIN_NAMESPACE_STD

namespace ranges {
struct __contains_subrange {
  template <forward_iterator _Iter1,
            sentinel_for<_Iter1> _Sent1,
            forward_iterator _Iter2,
            sentinel_for<_Iter2> _Sent2,
            class _Pred  = ranges::equal_to,
            class _Proj1 = identity,
            class _Proj2 = identity>
    requires indirectly_comparable<_Iter1, _Iter2, _Pred, _Proj1, _Proj2>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI constexpr bool static operator()(
      _Iter1 __first1,
      _Sent1 __last1,
      _Iter2 __first2,
      _Sent2 __last2,
      _Pred __pred   = {},
      _Proj1 __proj1 = {},
      _Proj2 __proj2 = {}) {
    if (__first2 == __last2)
      return true;

    auto __ret = ranges::search(
        std::move(__first1), __last1, std::move(__first2), __last2, __pred, std::ref(__proj1), std::ref(__proj2));
    return __ret.empty() == false;
  }

  template <forward_range _Range1,
            forward_range _Range2,
            class _Pred  = ranges::equal_to,
            class _Proj1 = identity,
            class _Proj2 = identity>
    requires indirectly_comparable<iterator_t<_Range1>, iterator_t<_Range2>, _Pred, _Proj1, _Proj2>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI constexpr bool static
  operator()(_Range1&& __range1, _Range2&& __range2, _Pred __pred = {}, _Proj1 __proj1 = {}, _Proj2 __proj2 = {}) {
    if constexpr (sized_range<_Range2>) {
      if (ranges::size(__range2) == 0)
        return true;
    } else {
      if (ranges::begin(__range2) == ranges::end(__range2))
        return true;
    }

    auto __ret = ranges::search(__range1, __range2, __pred, std::ref(__proj1), std::ref(__proj2));
    return __ret.empty() == false;
  }
};

inline namespace __cpo {
inline constexpr auto contains_subrange = __contains_subrange{};
} // namespace __cpo
} // namespace ranges

_LIBCPP_END_NAMESPACE_STD

#endif // _LIBCPP_STD_VER >= 23

_LIBCPP_POP_MACROS

#endif // _LIBCPP___ALGORITHM_RANGES_CONTAINS_SUBRANGE_H
`,"__algorithm/ranges_ends_with.h":`//===----------------------------------------------------------------------===//
//
// Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===----------------------------------------------------------------------===//

#ifndef _LIBCPP___ALGORITHM_RANGES_ENDS_WITH_H
#define _LIBCPP___ALGORITHM_RANGES_ENDS_WITH_H

#include <__algorithm/ranges_equal.h>
#include <__algorithm/ranges_starts_with.h>
#include <__config>
#include <__functional/identity.h>
#include <__functional/ranges_operations.h>
#include <__functional/reference_wrapper.h>
#include <__iterator/advance.h>
#include <__iterator/concepts.h>
#include <__iterator/distance.h>
#include <__iterator/indirectly_comparable.h>
#include <__iterator/reverse_iterator.h>
#include <__ranges/access.h>
#include <__ranges/concepts.h>
#include <__ranges/size.h>
#include <__utility/move.h>

#if !defined(_LIBCPP_HAS_NO_PRAGMA_SYSTEM_HEADER)
#  pragma GCC system_header
#endif

_LIBCPP_PUSH_MACROS
#include <__undef_macros>

#if _LIBCPP_STD_VER >= 23

_LIBCPP_BEGIN_NAMESPACE_STD

namespace ranges {
struct __ends_with {
  template <class _Iter1, class _Sent1, class _Iter2, class _Sent2, class _Pred, class _Proj1, class _Proj2>
  _LIBCPP_HIDE_FROM_ABI static constexpr bool __ends_with_fn_impl_bidirectional(
      _Iter1 __first1,
      _Sent1 __last1,
      _Iter2 __first2,
      _Sent2 __last2,
      _Pred& __pred,
      _Proj1& __proj1,
      _Proj2& __proj2) {
    auto __rbegin1 = std::make_reverse_iterator(__last1);
    auto __rend1   = std::make_reverse_iterator(__first1);
    auto __rbegin2 = std::make_reverse_iterator(__last2);
    auto __rend2   = std::make_reverse_iterator(__first2);
    return ranges::starts_with(
        __rbegin1, __rend1, __rbegin2, __rend2, std::ref(__pred), std::ref(__proj1), std::ref(__proj2));
  }

  template <class _Iter1, class _Sent1, class _Iter2, class _Sent2, class _Pred, class _Proj1, class _Proj2>
  _LIBCPP_HIDE_FROM_ABI static constexpr bool __ends_with_fn_impl(
      _Iter1 __first1,
      _Sent1 __last1,
      _Iter2 __first2,
      _Sent2 __last2,
      _Pred& __pred,
      _Proj1& __proj1,
      _Proj2& __proj2) {
    if constexpr (std::bidirectional_iterator<_Sent1> && std::bidirectional_iterator<_Sent2> &&
                  (!std::random_access_iterator<_Sent1>) && (!std::random_access_iterator<_Sent2>)) {
      return __ends_with_fn_impl_bidirectional(__first1, __last1, __first2, __last2, __pred, __proj1, __proj2);

    } else {
      auto __n1 = ranges::distance(__first1, __last1);
      auto __n2 = ranges::distance(__first2, __last2);
      if (__n2 == 0)
        return true;
      if (__n2 > __n1)
        return false;

      return __ends_with_fn_impl_with_offset(
          std::move(__first1),
          std::move(__last1),
          std::move(__first2),
          std::move(__last2),
          __pred,
          __proj1,
          __proj2,
          __n1 - __n2);
    }
  }

  template <class _Iter1,
            class _Sent1,
            class _Iter2,
            class _Sent2,
            class _Pred,
            class _Proj1,
            class _Proj2,
            class _Offset>
  static _LIBCPP_HIDE_FROM_ABI constexpr bool __ends_with_fn_impl_with_offset(
      _Iter1 __first1,
      _Sent1 __last1,
      _Iter2 __first2,
      _Sent2 __last2,
      _Pred& __pred,
      _Proj1& __proj1,
      _Proj2& __proj2,
      _Offset __offset) {
    if constexpr (std::bidirectional_iterator<_Sent1> && std::bidirectional_iterator<_Sent2> &&
                  !std::random_access_iterator<_Sent1> && !std::random_access_iterator<_Sent2>) {
      return __ends_with_fn_impl_bidirectional(
          std::move(__first1), std::move(__last1), std::move(__first2), std::move(__last2), __pred, __proj1, __proj2);

    } else {
      ranges::advance(__first1, __offset);
      return ranges::equal(
          std::move(__first1),
          std::move(__last1),
          std::move(__first2),
          std::move(__last2),
          std::ref(__pred),
          std::ref(__proj1),
          std::ref(__proj2));
    }
  }

  template <input_iterator _Iter1,
            sentinel_for<_Iter1> _Sent1,
            input_iterator _Iter2,
            sentinel_for<_Iter2> _Sent2,
            class _Pred  = ranges::equal_to,
            class _Proj1 = identity,
            class _Proj2 = identity>
    requires(forward_iterator<_Iter1> || sized_sentinel_for<_Sent1, _Iter1>) &&
            (forward_iterator<_Iter2> || sized_sentinel_for<_Sent2, _Iter2>) &&
            indirectly_comparable<_Iter1, _Iter2, _Pred, _Proj1, _Proj2>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI constexpr bool operator()(
      _Iter1 __first1,
      _Sent1 __last1,
      _Iter2 __first2,
      _Sent2 __last2,
      _Pred __pred   = {},
      _Proj1 __proj1 = {},
      _Proj2 __proj2 = {}) const {
    return __ends_with_fn_impl(
        std::move(__first1), std::move(__last1), std::move(__first2), std::move(__last2), __pred, __proj1, __proj2);
  }

  template <input_range _Range1,
            input_range _Range2,
            class _Pred  = ranges::equal_to,
            class _Proj1 = identity,
            class _Proj2 = identity>
    requires(forward_range<_Range1> || sized_range<_Range1>) && (forward_range<_Range2> || sized_range<_Range2>) &&
            indirectly_comparable<iterator_t<_Range1>, iterator_t<_Range2>, _Pred, _Proj1, _Proj2>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI constexpr bool operator()(
      _Range1&& __range1, _Range2&& __range2, _Pred __pred = {}, _Proj1 __proj1 = {}, _Proj2 __proj2 = {}) const {
    if constexpr (sized_range<_Range1> && sized_range<_Range2>) {
      auto __n1 = ranges::size(__range1);
      auto __n2 = ranges::size(__range2);
      if (__n2 == 0)
        return true;
      if (__n2 > __n1)
        return false;
      auto __offset = __n1 - __n2;

      return __ends_with_fn_impl_with_offset(
          ranges::begin(__range1),
          ranges::end(__range1),
          ranges::begin(__range2),
          ranges::end(__range2),
          __pred,
          __proj1,
          __proj2,
          __offset);

    } else {
      return __ends_with_fn_impl(
          ranges::begin(__range1),
          ranges::end(__range1),
          ranges::begin(__range2),
          ranges::end(__range2),
          __pred,
          __proj1,
          __proj2);
    }
  }
};

inline namespace __cpo {
inline constexpr auto ends_with = __ends_with{};
} // namespace __cpo
} // namespace ranges

_LIBCPP_END_NAMESPACE_STD

#endif // _LIBCPP_STD_VER >= 23

_LIBCPP_POP_MACROS

#endif // _LIBCPP___ALGORITHM_RANGES_ENDS_WITH_H
`,"__algorithm/ranges_find_last.h":`//===----------------------------------------------------------------------===//
//
// Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===----------------------------------------------------------------------===//

#ifndef _LIBCPP___ALGORITHM_RANGES_FIND_LAST_H
#define _LIBCPP___ALGORITHM_RANGES_FIND_LAST_H

#include <__config>
#include <__functional/identity.h>
#include <__functional/invoke.h>
#include <__functional/ranges_operations.h>
#include <__iterator/concepts.h>
#include <__iterator/indirectly_comparable.h>
#include <__iterator/next.h>
#include <__iterator/prev.h>
#include <__iterator/projected.h>
#include <__ranges/access.h>
#include <__ranges/concepts.h>
#include <__ranges/subrange.h>
#include <__utility/forward.h>
#include <__utility/move.h>

#if !defined(_LIBCPP_HAS_NO_PRAGMA_SYSTEM_HEADER)
#  pragma GCC system_header
#endif

_LIBCPP_PUSH_MACROS
#include <__undef_macros>

#if _LIBCPP_STD_VER >= 23

_LIBCPP_BEGIN_NAMESPACE_STD

namespace ranges {

template <class _Iter, class _Sent, class _Pred, class _Proj>
_LIBCPP_HIDE_FROM_ABI constexpr subrange<_Iter>
__find_last_impl(_Iter __first, _Sent __last, _Pred __pred, _Proj& __proj) {
  if (__first == __last) {
    return subrange<_Iter>(__first, __first);
  }

  if constexpr (bidirectional_iterator<_Iter>) {
    auto __last_it = ranges::next(__first, __last);
    for (auto __it = ranges::prev(__last_it); __it != __first; --__it) {
      if (__pred(std::invoke(__proj, *__it))) {
        return subrange<_Iter>(std::move(__it), std::move(__last_it));
      }
    }
    if (__pred(std::invoke(__proj, *__first))) {
      return subrange<_Iter>(std::move(__first), std::move(__last_it));
    }
    return subrange<_Iter>(__last_it, __last_it);
  } else {
    bool __found = false;
    _Iter __found_it;
    for (; __first != __last; ++__first) {
      if (__pred(std::invoke(__proj, *__first))) {
        __found    = true;
        __found_it = __first;
      }
    }

    if (__found) {
      return subrange<_Iter>(std::move(__found_it), std::move(__first));
    } else {
      return subrange<_Iter>(__first, __first);
    }
  }
}

struct __find_last {
  template <class _Type>
  struct __op {
    const _Type& __value;
    template <class _Elem>
    _LIBCPP_HIDE_FROM_ABI constexpr decltype(auto) operator()(_Elem&& __elem) const {
      return std::forward<_Elem>(__elem) == __value;
    }
  };

  template <forward_iterator _Iter, sentinel_for<_Iter> _Sent, class _Type, class _Proj = identity>
    requires indirect_binary_predicate<ranges::equal_to, projected<_Iter, _Proj>, const _Type*>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI constexpr static subrange<_Iter>
  operator()(_Iter __first, _Sent __last, const _Type& __value, _Proj __proj = {}) {
    return ranges::__find_last_impl(std::move(__first), std::move(__last), __op<_Type>{__value}, __proj);
  }

  template <forward_range _Range, class _Type, class _Proj = identity>
    requires indirect_binary_predicate<ranges::equal_to, projected<iterator_t<_Range>, _Proj>, const _Type*>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI constexpr static borrowed_subrange_t<_Range>
  operator()(_Range&& __range, const _Type& __value, _Proj __proj = {}) {
    return ranges::__find_last_impl(ranges::begin(__range), ranges::end(__range), __op<_Type>{__value}, __proj);
  }
};

struct __find_last_if {
  template <class _Pred>
  struct __op {
    _Pred& __pred;
    template <class _Elem>
    _LIBCPP_HIDE_FROM_ABI constexpr decltype(auto) operator()(_Elem&& __elem) const {
      return std::invoke(__pred, std::forward<_Elem>(__elem));
    }
  };

  template <forward_iterator _Iter,
            sentinel_for<_Iter> _Sent,
            class _Proj = identity,
            indirect_unary_predicate<projected<_Iter, _Proj>> _Pred>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI constexpr static subrange<_Iter>
  operator()(_Iter __first, _Sent __last, _Pred __pred, _Proj __proj = {}) {
    return ranges::__find_last_impl(std::move(__first), std::move(__last), __op<_Pred>{__pred}, __proj);
  }

  template <forward_range _Range,
            class _Proj = identity,
            indirect_unary_predicate<projected<iterator_t<_Range>, _Proj>> _Pred>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI constexpr static borrowed_subrange_t<_Range>
  operator()(_Range&& __range, _Pred __pred, _Proj __proj = {}) {
    return ranges::__find_last_impl(ranges::begin(__range), ranges::end(__range), __op<_Pred>{__pred}, __proj);
  }
};

struct __find_last_if_not {
  template <class _Pred>
  struct __op {
    _Pred& __pred;
    template <class _Elem>
    _LIBCPP_HIDE_FROM_ABI constexpr decltype(auto) operator()(_Elem&& __elem) const {
      return !std::invoke(__pred, std::forward<_Elem>(__elem));
    }
  };

  template <forward_iterator _Iter,
            sentinel_for<_Iter> _Sent,
            class _Proj = identity,
            indirect_unary_predicate<projected<_Iter, _Proj>> _Pred>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI constexpr static subrange<_Iter>
  operator()(_Iter __first, _Sent __last, _Pred __pred, _Proj __proj = {}) {
    return ranges::__find_last_impl(std::move(__first), std::move(__last), __op<_Pred>{__pred}, __proj);
  }

  template <forward_range _Range,
            class _Proj = identity,
            indirect_unary_predicate<projected<iterator_t<_Range>, _Proj>> _Pred>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI constexpr static borrowed_subrange_t<_Range>
  operator()(_Range&& __range, _Pred __pred, _Proj __proj = {}) {
    return ranges::__find_last_impl(ranges::begin(__range), ranges::end(__range), __op<_Pred>{__pred}, __proj);
  }
};

inline namespace __cpo {
inline constexpr auto find_last        = __find_last{};
inline constexpr auto find_last_if     = __find_last_if{};
inline constexpr auto find_last_if_not = __find_last_if_not{};
} // namespace __cpo
} // namespace ranges

_LIBCPP_END_NAMESPACE_STD

#endif // _LIBCPP_STD_VER >= 23

_LIBCPP_POP_MACROS

#endif // _LIBCPP___ALGORITHM_RANGES_FIND_LAST_H
`,"__algorithm/ranges_fold.h":`// -*- C++ -*-
//===----------------------------------------------------------------------===//
//
// Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===----------------------------------------------------------------------===//

#ifndef _LIBCPP___ALGORITHM_RANGES_FOLD_H
#define _LIBCPP___ALGORITHM_RANGES_FOLD_H

#include <__concepts/assignable.h>
#include <__concepts/constructible.h>
#include <__concepts/convertible_to.h>
#include <__concepts/invocable.h>
#include <__concepts/movable.h>
#include <__config>
#include <__functional/invoke.h>
#include <__functional/reference_wrapper.h>
#include <__iterator/concepts.h>
#include <__iterator/iterator_traits.h>
#include <__iterator/next.h>
#include <__ranges/access.h>
#include <__ranges/concepts.h>
#include <__ranges/dangling.h>
#include <__type_traits/decay.h>
#include <__type_traits/invoke.h>
#include <__utility/forward.h>
#include <__utility/move.h>

#if !defined(_LIBCPP_HAS_NO_PRAGMA_SYSTEM_HEADER)
#  pragma GCC system_header
#endif

_LIBCPP_PUSH_MACROS
#include <__undef_macros>

_LIBCPP_BEGIN_NAMESPACE_STD

#if _LIBCPP_STD_VER >= 23

namespace ranges {
template <class _Ip, class _Tp>
struct in_value_result {
  _LIBCPP_NO_UNIQUE_ADDRESS _Ip in;
  _LIBCPP_NO_UNIQUE_ADDRESS _Tp value;

  template <class _I2, class _T2>
    requires convertible_to<const _Ip&, _I2> && convertible_to<const _Tp&, _T2>
  _LIBCPP_HIDE_FROM_ABI constexpr operator in_value_result<_I2, _T2>() const& {
    return {in, value};
  }

  template <class _I2, class _T2>
    requires convertible_to<_Ip, _I2> && convertible_to<_Tp, _T2>
  _LIBCPP_HIDE_FROM_ABI constexpr operator in_value_result<_I2, _T2>() && {
    return {std::move(in), std::move(value)};
  }
};

template <class _Ip, class _Tp>
using fold_left_with_iter_result = in_value_result<_Ip, _Tp>;

template <class _Fp, class _Tp, class _Ip, class _Rp, class _Up = decay_t<_Rp>>
concept __indirectly_binary_left_foldable_impl =
    convertible_to<_Rp, _Up> &&                    //
    movable<_Tp> &&                                //
    movable<_Up> &&                                //
    convertible_to<_Tp, _Up> &&                    //
    invocable<_Fp&, _Up, iter_reference_t<_Ip>> && //
    assignable_from<_Up&, invoke_result_t<_Fp&, _Up, iter_reference_t<_Ip>>>;

template <class _Fp, class _Tp, class _Ip>
concept __indirectly_binary_left_foldable =
    copy_constructible<_Fp> &&                     //
    invocable<_Fp&, _Tp, iter_reference_t<_Ip>> && //
    __indirectly_binary_left_foldable_impl<_Fp, _Tp, _Ip, invoke_result_t<_Fp&, _Tp, iter_reference_t<_Ip>>>;

struct __fold_left_with_iter {
  template <input_iterator _Ip, sentinel_for<_Ip> _Sp, class _Tp, __indirectly_binary_left_foldable<_Tp, _Ip> _Fp>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI static constexpr auto operator()(_Ip __first, _Sp __last, _Tp __init, _Fp __f) {
    using _Up = decay_t<invoke_result_t<_Fp&, _Tp, iter_reference_t<_Ip>>>;

    if (__first == __last) {
      return fold_left_with_iter_result<_Ip, _Up>{std::move(__first), _Up(std::move(__init))};
    }

    _Up __result = std::invoke(__f, std::move(__init), *__first);
    for (++__first; __first != __last; ++__first) {
      __result = std::invoke(__f, std::move(__result), *__first);
    }

    return fold_left_with_iter_result<_Ip, _Up>{std::move(__first), std::move(__result)};
  }

  template <input_range _Rp, class _Tp, __indirectly_binary_left_foldable<_Tp, iterator_t<_Rp>> _Fp>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI static constexpr auto operator()(_Rp&& __r, _Tp __init, _Fp __f) {
    auto __result = operator()(ranges::begin(__r), ranges::end(__r), std::move(__init), std::ref(__f));

    using _Up = decay_t<invoke_result_t<_Fp&, _Tp, range_reference_t<_Rp>>>;
    return fold_left_with_iter_result<borrowed_iterator_t<_Rp>, _Up>{std::move(__result.in), std::move(__result.value)};
  }
};

inline constexpr auto fold_left_with_iter = __fold_left_with_iter();

struct __fold_left {
  template <input_iterator _Ip, sentinel_for<_Ip> _Sp, class _Tp, __indirectly_binary_left_foldable<_Tp, _Ip> _Fp>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI static constexpr auto operator()(_Ip __first, _Sp __last, _Tp __init, _Fp __f) {
    return fold_left_with_iter(std::move(__first), std::move(__last), std::move(__init), std::ref(__f)).value;
  }

  template <input_range _Rp, class _Tp, __indirectly_binary_left_foldable<_Tp, iterator_t<_Rp>> _Fp>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI static constexpr auto operator()(_Rp&& __r, _Tp __init, _Fp __f) {
    return fold_left_with_iter(ranges::begin(__r), ranges::end(__r), std::move(__init), std::ref(__f)).value;
  }
};

inline constexpr auto fold_left = __fold_left();
} // namespace ranges

#endif // _LIBCPP_STD_VER >= 23

_LIBCPP_END_NAMESPACE_STD

_LIBCPP_POP_MACROS

#endif // _LIBCPP___ALGORITHM_RANGES_FOLD_H
`,"__algorithm/ranges_starts_with.h":`//===----------------------------------------------------------------------===//
//
// Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===----------------------------------------------------------------------===//

#ifndef _LIBCPP___ALGORITHM_RANGES_STARTS_WITH_H
#define _LIBCPP___ALGORITHM_RANGES_STARTS_WITH_H

#include <__algorithm/in_in_result.h>
#include <__algorithm/ranges_mismatch.h>
#include <__config>
#include <__functional/identity.h>
#include <__functional/ranges_operations.h>
#include <__iterator/concepts.h>
#include <__iterator/indirectly_comparable.h>
#include <__ranges/access.h>
#include <__ranges/concepts.h>
#include <__utility/move.h>

#if !defined(_LIBCPP_HAS_NO_PRAGMA_SYSTEM_HEADER)
#  pragma GCC system_header
#endif

_LIBCPP_PUSH_MACROS
#include <__undef_macros>

#if _LIBCPP_STD_VER >= 23

_LIBCPP_BEGIN_NAMESPACE_STD

namespace ranges {
struct __starts_with {
  template <input_iterator _Iter1,
            sentinel_for<_Iter1> _Sent1,
            input_iterator _Iter2,
            sentinel_for<_Iter2> _Sent2,
            class _Pred  = ranges::equal_to,
            class _Proj1 = identity,
            class _Proj2 = identity>
    requires indirectly_comparable<_Iter1, _Iter2, _Pred, _Proj1, _Proj2>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI static constexpr bool operator()(
      _Iter1 __first1,
      _Sent1 __last1,
      _Iter2 __first2,
      _Sent2 __last2,
      _Pred __pred   = {},
      _Proj1 __proj1 = {},
      _Proj2 __proj2 = {}) {
    return __mismatch::__go(
               std::move(__first1),
               std::move(__last1),
               std::move(__first2),
               std::move(__last2),
               __pred,
               __proj1,
               __proj2)
               .in2 == __last2;
  }

  template <input_range _Range1,
            input_range _Range2,
            class _Pred  = ranges::equal_to,
            class _Proj1 = identity,
            class _Proj2 = identity>
    requires indirectly_comparable<iterator_t<_Range1>, iterator_t<_Range2>, _Pred, _Proj1, _Proj2>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI static constexpr bool
  operator()(_Range1&& __range1, _Range2&& __range2, _Pred __pred = {}, _Proj1 __proj1 = {}, _Proj2 __proj2 = {}) {
    return __mismatch::__go(
               ranges::begin(__range1),
               ranges::end(__range1),
               ranges::begin(__range2),
               ranges::end(__range2),
               __pred,
               __proj1,
               __proj2)
               .in2 == ranges::end(__range2);
  }
};
inline namespace __cpo {
inline constexpr auto starts_with = __starts_with{};
} // namespace __cpo
} // namespace ranges

_LIBCPP_END_NAMESPACE_STD

#endif // _LIBCPP_STD_VER >= 23

_LIBCPP_POP_MACROS

#endif // _LIBCPP___ALGORITHM_RANGES_STARTS_WITH_H
`,"__ostream/print.h":`//===---------------------------------------------------------------------===//
//
// Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===---------------------------------------------------------------------===//

#ifndef _LIBCPP___OSTREAM_PRINT_H
#define _LIBCPP___OSTREAM_PRINT_H

#include <__config>

#if _LIBCPP_HAS_LOCALIZATION

#  include <__fwd/ostream.h>
#  include <__iterator/ostreambuf_iterator.h>
#  include <__ostream/basic_ostream.h>
#  include <format>
#  include <ios>
#  include <print>
#  include <streambuf>

#  if !defined(_LIBCPP_HAS_NO_PRAGMA_SYSTEM_HEADER)
#    pragma GCC system_header
#  endif

_LIBCPP_BEGIN_NAMESPACE_STD

#  if _LIBCPP_STD_VER >= 23

template <class = void> // TODO PRINT template or availability markup fires too eagerly (http://llvm.org/PR61563).
_LIBCPP_HIDE_FROM_ABI inline void
__vprint_nonunicode(ostream& __os, string_view __fmt, format_args __args, bool __write_nl) {
  // [ostream.formatted.print]/3
  // Effects: Behaves as a formatted output function
  // ([ostream.formatted.reqmts]) of os, except that:
  // - failure to generate output is reported as specified below, and
  // - any exception thrown by the call to vformat is propagated without regard
  //   to the value of os.exceptions() and without turning on ios_base::badbit
  //   in the error state of os.
  // After constructing a sentry object, the function initializes an automatic
  // variable via
  //   string out = vformat(os.getloc(), fmt, args);

  ostream::sentry __s(__os);
  if (__s) {
    string __o = std::vformat(__os.getloc(), __fmt, __args);
    if (__write_nl)
      __o += '\\n';

#    if _LIBCPP_HAS_EXCEPTIONS
    try {
#    endif // _LIBCPP_HAS_EXCEPTIONS
      if (auto __rdbuf = __os.rdbuf();
          !__rdbuf || __rdbuf->sputn(__o.data(), __o.size()) != static_cast<streamsize>(__o.size()))
        __os.setstate(ios_base::badbit | ios_base::failbit);

#    if _LIBCPP_HAS_EXCEPTIONS
    } catch (...) {
      __os.__set_badbit_and_consider_rethrow();
    }
#    endif // _LIBCPP_HAS_EXCEPTIONS
  }
}

template <class = void> // TODO PRINT template or availability markup fires too eagerly (http://llvm.org/PR61563).
_LIBCPP_HIDE_FROM_ABI inline void vprint_nonunicode(ostream& __os, string_view __fmt, format_args __args) {
  std::__vprint_nonunicode(__os, __fmt, __args, false);
}

// Returns the FILE* associated with the __os.
// Returns a nullptr when no FILE* is associated with __os.
// This function is in the dylib since the type of the buffer associated
// with std::cout, std::cerr, and std::clog is only known in the dylib.
//
// This function implements part of the implementation-defined behavior
// of [ostream.formatted.print]/3
//   If the function is vprint_unicode and os is a stream that refers to
//   a terminal capable of displaying Unicode which is determined in an
//   implementation-defined manner, writes out to the terminal using the
//   native Unicode API;
// Whether the returned FILE* is "a terminal capable of displaying Unicode"
// is determined in the same way as the print(FILE*, ...) overloads.
_LIBCPP_EXPORTED_FROM_ABI FILE* __get_ostream_file(ostream& __os);

#    if _LIBCPP_HAS_UNICODE
template <class = void> // TODO PRINT template or availability markup fires too eagerly (http://llvm.org/PR61563).
_LIBCPP_HIDE_FROM_ABI void __vprint_unicode(ostream& __os, string_view __fmt, format_args __args, bool __write_nl) {
#      if _LIBCPP_AVAILABILITY_HAS_PRINT == 0
  return std::__vprint_nonunicode(__os, __fmt, __args, __write_nl);
#      else
  FILE* __file = std::__get_ostream_file(__os);
  if (!__file || !__print::__is_terminal(__file))
    return std::__vprint_nonunicode(__os, __fmt, __args, __write_nl);

  // [ostream.formatted.print]/3
  //    If the function is vprint_unicode and os is a stream that refers to a
  //    terminal capable of displaying Unicode which is determined in an
  //    implementation-defined manner, writes out to the terminal using the
  //    native Unicode API; if out contains invalid code units, the behavior is
  //    undefined and implementations are encouraged to diagnose it. If the
  //    native Unicode API is used, the function flushes os before writing out.
  //
  // This is the path for the native API, start with flushing.
  __os.flush();

#        if _LIBCPP_HAS_EXCEPTIONS
  try {
#        endif // _LIBCPP_HAS_EXCEPTIONS
    ostream::sentry __s(__os);
    if (__s) {
#        ifndef _LIBCPP_WIN32API
      __print::__vprint_unicode_posix(__file, __fmt, __args, __write_nl, true);
#        elif _LIBCPP_HAS_WIDE_CHARACTERS
    __print::__vprint_unicode_windows(__file, __fmt, __args, __write_nl, true);
#        else
#          error "Windows builds with wchar_t disabled are not supported."
#        endif
    }

#        if _LIBCPP_HAS_EXCEPTIONS
  } catch (...) {
    __os.__set_badbit_and_consider_rethrow();
  }
#        endif // _LIBCPP_HAS_EXCEPTIONS
#      endif   // _LIBCPP_AVAILABILITY_HAS_PRINT
}

template <class = void> // TODO PRINT template or availability markup fires too eagerly (http://llvm.org/PR61563).
_LIBCPP_HIDE_FROM_ABI inline void vprint_unicode(ostream& __os, string_view __fmt, format_args __args) {
  std::__vprint_unicode(__os, __fmt, __args, false);
}
#    endif // _LIBCPP_HAS_UNICODE

template <class... _Args>
_LIBCPP_HIDE_FROM_ABI void print(ostream& __os, format_string<_Args...> __fmt, _Args&&... __args) {
#    if _LIBCPP_HAS_UNICODE
  if constexpr (__print::__use_unicode_execution_charset)
    std::__vprint_unicode(__os, __fmt.get(), std::make_format_args(__args...), false);
  else
    std::__vprint_nonunicode(__os, __fmt.get(), std::make_format_args(__args...), false);
#    else  // _LIBCPP_HAS_UNICODE
  std::__vprint_nonunicode(__os, __fmt.get(), std::make_format_args(__args...), false);
#    endif // _LIBCPP_HAS_UNICODE
}

template <class... _Args>
_LIBCPP_HIDE_FROM_ABI void println(ostream& __os, format_string<_Args...> __fmt, _Args&&... __args) {
#    if _LIBCPP_HAS_UNICODE
  // Note the wording in the Standard is inefficient. The output of
  // std::format is a std::string which is then copied. This solution
  // just appends a newline at the end of the output.
  if constexpr (__print::__use_unicode_execution_charset)
    std::__vprint_unicode(__os, __fmt.get(), std::make_format_args(__args...), true);
  else
    std::__vprint_nonunicode(__os, __fmt.get(), std::make_format_args(__args...), true);
#    else  // _LIBCPP_HAS_UNICODE
  std::__vprint_nonunicode(__os, __fmt.get(), std::make_format_args(__args...), true);
#    endif // _LIBCPP_HAS_UNICODE
}

template <class = void> // TODO PRINT template or availability markup fires too eagerly (http://llvm.org/PR61563).
_LIBCPP_HIDE_FROM_ABI inline void println(ostream& __os) {
  std::print(__os, "\\n");
}

#  endif // _LIBCPP_STD_VER >= 23

_LIBCPP_END_NAMESPACE_STD

#endif // _LIBCPP_HAS_LOCALIZATION

#endif // _LIBCPP___OSTREAM_PRINT_H
`,"__type_traits/is_implicit_lifetime.h":`//===----------------------------------------------------------------------===//
//
// Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===----------------------------------------------------------------------===//

#ifndef _LIBCPP___TYPE_TRAITS_IS_IMPLICIT_LIFETIME_H
#define _LIBCPP___TYPE_TRAITS_IS_IMPLICIT_LIFETIME_H

#include <__config>
#include <__type_traits/integral_constant.h>

#if !defined(_LIBCPP_HAS_NO_PRAGMA_SYSTEM_HEADER)
#  pragma GCC system_header
#endif

_LIBCPP_BEGIN_NAMESPACE_STD

#if _LIBCPP_STD_VER >= 23
#  if __has_builtin(__builtin_is_implicit_lifetime)

template <class _Tp>
struct _LIBCPP_NO_SPECIALIZATIONS is_implicit_lifetime : bool_constant<__builtin_is_implicit_lifetime(_Tp)> {};

template <class _Tp>
_LIBCPP_NO_SPECIALIZATIONS inline constexpr bool is_implicit_lifetime_v = __builtin_is_implicit_lifetime(_Tp);

#  endif
#endif

_LIBCPP_END_NAMESPACE_STD

#endif // _LIBCPP___TYPE_TRAITS_IS_IMPLICIT_LIFETIME_H
`,"__type_traits/is_within_lifetime.h":`//===----------------------------------------------------------------------===//
//
// Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===----------------------------------------------------------------------===//

#ifndef _LIBCPP___TYPE_TRAITS_IS_WITHIN_LIFETIME_H
#define _LIBCPP___TYPE_TRAITS_IS_WITHIN_LIFETIME_H

#include <__config>

#if !defined(_LIBCPP_HAS_NO_PRAGMA_SYSTEM_HEADER)
#  pragma GCC system_header
#endif

_LIBCPP_BEGIN_NAMESPACE_STD

#if _LIBCPP_STD_VER >= 26 && __has_builtin(__builtin_is_within_lifetime)
template <class _Tp>
_LIBCPP_HIDE_FROM_ABI consteval bool is_within_lifetime(const _Tp* __p) noexcept {
  return __builtin_is_within_lifetime(__p);
}
#endif

_LIBCPP_END_NAMESPACE_STD

#endif // _LIBCPP___TYPE_TRAITS_IS_WITHIN_LIFETIME_H
`,"__type_traits/reference_converts_from_temporary.h":`//===----------------------------------------------------------------------===//
//
// Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===----------------------------------------------------------------------===//

#ifndef _LIBCPP___TYPE_TRAITS_REFERENCE_CONVERTS_FROM_TEMPORARY_H
#define _LIBCPP___TYPE_TRAITS_REFERENCE_CONVERTS_FROM_TEMPORARY_H

#include <__config>
#include <__type_traits/integral_constant.h>

#if !defined(_LIBCPP_HAS_NO_PRAGMA_SYSTEM_HEADER)
#  pragma GCC system_header
#endif

_LIBCPP_BEGIN_NAMESPACE_STD

#if _LIBCPP_STD_VER >= 23

template <class _Tp, class _Up>
struct _LIBCPP_NO_SPECIALIZATIONS reference_converts_from_temporary
    : public bool_constant<__reference_converts_from_temporary(_Tp, _Up)> {};

template <class _Tp, class _Up>
_LIBCPP_NO_SPECIALIZATIONS inline constexpr bool reference_converts_from_temporary_v =
    __reference_converts_from_temporary(_Tp, _Up);

#endif

_LIBCPP_END_NAMESPACE_STD

#endif // _LIBCPP___TYPE_TRAITS_REFERENCE_CONVERTS_FROM_TEMPORARY_H
`,"__vector/vector_bool_formatter.h":`//===----------------------------------------------------------------------===//
//
// Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===----------------------------------------------------------------------===//

#ifndef _LIBCPP___VECTOR_VECTOR_BOOL_FORMATTER_H
#define _LIBCPP___VECTOR_VECTOR_BOOL_FORMATTER_H

#include <__concepts/same_as.h>
#include <__config>
#include <__format/formatter.h>
#include <__format/formatter_bool.h>
#include <__fwd/vector.h>

#if !defined(_LIBCPP_HAS_NO_PRAGMA_SYSTEM_HEADER)
#  pragma GCC system_header
#endif

#if _LIBCPP_STD_VER >= 23

_LIBCPP_BEGIN_NAMESPACE_STD

template <class _Tp, class _CharT>
// Since is-vector-bool-reference is only used once it's inlined here.
  requires same_as<typename _Tp::__container, vector<bool, typename _Tp::__container::allocator_type>>
struct formatter<_Tp, _CharT> {
private:
  formatter<bool, _CharT> __underlying_;

public:
  template <class _ParseContext>
  _LIBCPP_HIDE_FROM_ABI constexpr typename _ParseContext::iterator parse(_ParseContext& __ctx) {
    return __underlying_.parse(__ctx);
  }

  template <class _FormatContext>
  _LIBCPP_HIDE_FROM_ABI typename _FormatContext::iterator format(const _Tp& __ref, _FormatContext& __ctx) const {
    return __underlying_.format(__ref, __ctx);
  }
};

_LIBCPP_END_NAMESPACE_STD

#endif // _LIBCPP_STD_VER >= 23

#endif // _LIBCPP___VECTOR_VECTOR_BOOL_FORMATTER_H
`});async function bi(t,e){if(e?.name!==Xt.name||e.version!==Xt.version||e.revision!==Xt.revision)return!1;let n="/include/c++/v1/",_=new TextDecoder("utf-8",{fatal:!0}),i=t.readFile(`${n}${kt.path}`);if(i===null||i.byteLength!==kt.bytes)return!1;let r=new Uint8Array(await crypto.subtle.digest("SHA-256",Uint8Array.from(i).buffer));if(Array.from(r,d=>d.toString(16).padStart(2,"0")).join("")!==kt.sha256)return!1;let o=[];for(let[d,l]of Object.entries(Ni)){let c=`${n}${d}`,p=t.readFile(c);if(p===null)o.push([c,l]);else if(_.decode(p)!==l)throw new Error(`Clang ${e.version} C++ header differs from its pinned source: ${d}`)}let a=new TextEncoder;for(let[d,l]of o)t.mkdirTree(d.slice(0,d.lastIndexOf("/"))),t.writeFile(d,a.encode(l));return!0}var xi=0,po=new TextEncoder,ho=new TextDecoder,X_=t=>JSON.stringify(t.length>96?t.slice(0,93)+"...":t),_t=class{ready;mem=null;hostMem_=null;stdinStr;stdinBytes=new Uint8Array(0);stdin;stdout;trace;instance=null;exports;out=!0;filePaths=new Set;fileOverlays=new Map;directoryPaths=new Set;constructor(e){this.stdin=e.stdin,this.stdout=e.stdout,this.stdinStr=e.stdinStr||"",this.trace=e.trace||(()=>{});let n=yn(this,"abort","host_write","host_read","memfs_log","copy_in","copy_out");this.ready=(e.maxAssetBytes!==void 0?on(e.moduleUrl,e.progress,e.signal,e.maxAssetBytes):e.signal?on(e.moduleUrl,e.progress,e.signal):on(e.moduleUrl,e.progress)).then(_=>WebAssembly.instantiate(_,{env:n})).then(_=>{this.instance=_,this.exports=_.exports,this.mem=new cn(this.exports.memory),this.exports.init()})}set hostMem(e){this.hostMem_=e}setStdinStr(e){this.stdinStr=e,this.stdinBytes=new Uint8Array(0)}addDirectory(e){let n=this.normalizePath(e);this.directoryPaths.has(n)||(this.mem.check(),this.mem.write(this.exports.GetPathBuf(),e),this.exports.AddDirectoryNode(e.length),this.directoryPaths.add(n))}addFile(e,n){let _=n instanceof ArrayBuffer?n.byteLength:n.length;this.mem.check(),this.mem.write(this.exports.GetPathBuf(),e);let i=this.exports.AddFileNode(e.length,_),r=this.exports.GetFileNodeAddress(i);this.mem.check(),this.mem.write(r,n),this.filePaths.add(this.normalizePath(e))}setFile(e,n){let _=this.normalizePath(e);this.filePaths.add(_),this.fileOverlays.set(_,Uint8Array.from(n))}hasFile(e){return this.filePaths.has(this.normalizePath(e))}normalizePath(e){return e.replaceAll("\\","/").replace(/^\.\//,"").replace(/^\/+/,"")}getFileContents(e){let n=this.fileOverlays.get(this.normalizePath(e));if(n)return n;this.mem.check(),this.mem.write(this.exports.GetPathBuf(),e);let _=this.exports.FindNode(e.length),i=this.exports.GetFileNodeAddress(_),r=this.exports.GetFileNodeSize(_);return new Uint8Array(this.mem.buffer,i,r)}abort(){throw this.trace("abort()"),new pn}host_write(e,n,_,i){this.hostMem_.check(),U_(e<=2);let r=0,s="";for(let o=0;o<_;++o){let a=this.hostMem_.read32(n);n+=4;let d=this.hostMem_.read32(n);n+=4,s+=this.hostMem_.readStrR(a,d),r+=d}return this.hostMem_.write32(i,r),this.trace(`host_write(fd=${e}, bytes=${r}, data=${X_(s)})`),this.out&&this.stdout(s),xi}host_read(e,n,_,i){this.hostMem_.check(),U_(e===0);let r=0;for(let s=0;s<_;++s){let o=this.hostMem_.read32(n);n+=4;let a=this.hostMem_.read32(n);if(n+=4,!this.stdinBytes.length){let c=this.stdinStr.length?this.stdinStr:this.stdin();this.stdinStr="",this.stdinBytes=po.encode(c)}let d=Math.min(a,this.stdinBytes.length);if(d===0)break;let l=this.stdinBytes.subarray(0,d);if(this.hostMem_.write(o,l),this.stdinBytes=this.stdinBytes.slice(d),r+=d,this.trace(`host_read(fd=${e}, bytes=${d}, data=${X_(ho.decode(l))})`),d!==a)break}return this.hostMem_.write32(i,r),r===0&&this.trace(`host_read(fd=${e}, bytes=0)`),xi}memfs_log(e,n){this.mem.check();let _=this.mem.readStr(e,n);this.trace(`memfs_log(${X_(_)})`)}copy_out(e,n,_){this.hostMem_.check();let i=new Uint8Array(this.hostMem_.buffer,e,_);this.mem.check();let r=new Uint8Array(this.mem.buffer,n,_);i.set(r)}copy_in(e,n,_){this.mem.check();let i=new Uint8Array(this.mem.buffer,e,_);this.hostMem_.check();let r=new Uint8Array(this.hostMem_.buffer,n,_);i.set(r)}};function*mo(t){let e=t instanceof Uint8Array?t:new Uint8Array(t),n=0,_="",i=o=>(n+=o,En(e,n-o,o)),r=o=>(n+=o,cr(e,n-o,o)),s=()=>n=n+511&-512;for(;n+512<=e.length;){let o={filename:i(100),mode:r(8),owner:r(8),group:r(8),size:r(12),mtime:r(12),checksum:r(8),type:i(1),linkname:i(100),ustar:i(8)};if(!o.ustar)return;let a={...o,ownerName:i(32),groupName:i(32),devMajor:i(8),devMinor:i(8),filenamePrefix:i(155)};if(s(),a.size>0||a.type==="0"||a.type===""||a.type==="L"){let d=e.subarray(n,n+a.size);a.contents=d,n+=a.size,s()}if(a.type==="L"){a.contents&&(_=En(a.contents,0,a.size));continue}a.filename=_||(a.filenamePrefix?`${a.filenamePrefix}/${a.filename}`:a.filename),_="",yield a}}function Fn(t,e){for(let n of mo(t))switch(n.type){case"":case"0":e.addFile(n.filename,n.contents);break;case"5":e.addDirectory(n.filename);break;default:throw new Error(`unsupported tar entry type: ${n.type}`)}}var k_="\x1B[92m",Wt="\x1B[0m",wi="\x1B[1;93m";var To=t=>Math.max(0,Math.min(1,Number.isFinite(t)?t:0));function Li(t){let e={clang:0,lld:0,memfs:0},n=()=>{t((e.clang+e.memfs)/2)},_=i=>({set(r){e[i]=To(r),n()}});return{clang:_("clang"),lld:_("lld"),memfs:_("memfs")}}var $t=(t,e)=>{let n=t?.toString().trim();if(!n)throw new Error(`${e} is required`);let _;try{_=new URL(n,typeof location<"u"?location.href:void 0)}catch{throw new Error(`${e} must be an absolute HTTP(S) URL`)}if(_.protocol!=="http:"&&_.protocol!=="https:")throw new Error(`${e} must use HTTP(S)`);return _},W_=t=>{let e=$t(t,"wasm-clang runtime base URL");return e.pathname.endsWith("/")||(e.pathname+="/"),e.hash="",e},Ge=(t,e)=>new URL(e,W_(t)).toString(),go=(t,e)=>Ge(t,e),an=t=>W_(t).toString(),$_=t=>W_(new URL("./",$t(t,"wasm-clang runtime manifest URL"))).toString(),Vt=t=>go(t,"runtime-manifest.v1.json");function Ri(t,e){let n=an(t),_=e?.compiler.sysroot.profiles;if(_&&(typeof _.c?.asset!="string"||!_.c.asset||typeof _.cppAddon?.asset!="string"||!_.cppAddon.asset))throw new TypeError("Clang sysroot profiles require both C and C++ add-on assets");return{manifest:Vt(n).toString(),memfs:Ge(n,e?.compiler.memfs.asset||"bin/memfs.wasm.gz").toString(),clang:Ge(n,e?.compiler.clang.asset||"bin/clang.wasm.gz").toString(),lld:Ge(n,e?.compiler.lld.asset||"bin/lld.wasm.gz").toString(),sysroot:Ge(n,e?.compiler.sysroot.asset||"bin/sysroot.tar.gz").toString(),..._?{cSysroot:Ge(n,_.c.asset).toString(),cppAddon:Ge(n,_.cppAddon.asset).toString()}:{},...e?.compiler.sysroot.printscanLongDouble?{printscanLongDouble:Ge(n,e.compiler.sysroot.printscanLongDouble.asset).toString()}:{},clangdJs:Ge(n,e?.clangd.js||"clangd/clangd.js").toString(),clangdWasm:Ge(n,e?.clangd.wasm||"clangd/clangd.wasm.gz").toString()}}var We=t=>t.replaceAll("\\","/").split("/").filter(e=>e&&e!=="."&&e!=="..").join("/"),Gn=t=>{let e=We(t);return e.startsWith("workspace/")?e.slice(10):e};function rt(t,e){let n=We(e||""),_="main",i=n&&/\.[A-Za-z0-9_-]+$/.test(n)?n:`${n||_}.${t==="C"?"c":t==="OBJC"?"m":"cc"}`,r=(i.split("/").pop()||i).replace(/\.[^.]+$/,"")||_;return{input:i,obj:`${r}.o`,wasm:`${r}.wasm`}}async function Ci(t){let e=typeof t=="string"?new TextEncoder().encode(t):t instanceof Uint8Array?new Uint8Array(t):new Uint8Array(t),n=await globalThis.crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n),_=>_.toString(16).padStart(2,"0")).join("")}async function vi(t,e,n){if(!n)throw new Error("LLDB debug compilation requires compiler provenance in the wasm-clang runtime manifest");let _=t.language||"CPP",i=Gn(t.activePath||"")||Gn(t.fileName||"")||void 0,{input:r}=rt(_,i),s=new Map;for(let a of t.workspaceFiles||[]){let d=Gn(a.path);d&&s.set(d,a.content)}s.set(r,t.code);let o=[...s.entries()].sort(([a],[d])=>a<d?-1:a>d?1:0);return{kind:"dwarf",sourceRoot:"/workspace",moduleSha256:await Ci(e),files:await Promise.all(o.map(async([a,d])=>({path:`/workspace/${a}`,contentSha256:await Ci(d)}))),compiler:n}}var Io="/lib/clang/8.0.1",So="lib/clang/8.0.1/lib/wasi",Je="__wasm_idle_build",V_="lib/wasm32-wasi/libc-printscan-long-double.a",Ao=/\.(?:c|cc|cpp|cxx)$/,Mi=t=>t.some(e=>typeof e!="string"||e.startsWith("-x")||e.startsWith("@")),yo=new Set(["-target","--target","-triple","-target-feature","-target-cpu","-target-abi","-mcpu","-march","-mattr","-mthread-model","-mllvm","-pthread","-fopenmp","-msimd128","-mno-simd128","-matomics","-mno-atomics","-mmemory64","-mno-memory64","-mshared-memory","-mno-shared-memory","-mmulti-memory","-mno-multi-memory"]),Eo=["-target=","--target=","-triple=","-target-feature=","-target-cpu=","-target-abi=","-mcpu=","-march=","-mattr=","-mthread-model=","-mllvm="],Di=t=>{let e=encodeURIComponent(t),n="";for(let _=0;_<e.length;){let i=e[_];if(_+=1,i=="%"){let r=e.substring(_,_+=2);r&&(n+=String.fromCharCode(parseInt(r,16)))}else n+=i}return n};function No(t,e){let n=[...t],_=e,i,r=!1;for(let s=0;s<t.length;s+=1){let o=t[s],a=t[s+1];if(_){n[s]=" ",o==="*"&&a==="/"&&(n[s+1]=" ",s+=1,_=!1);continue}if(i){n[s]=" ",r?r=!1:o==="\\"?r=!0:o===i&&(i=void 0);continue}if(o==="/"&&a==="*"){n[s]=" ",n[s+1]=" ",s+=1,_=!0;continue}if(o==="/"&&a==="/"){for(let d=s;d<t.length;d+=1)n[d]=" ";break}(o==='"'||o==="'")&&(n[s]=" ",i=o)}return{line:n.join(""),inBlockComment:_}}var z_=class{ready;memfs;stdout;moduleCache;moduleLoads;showTiming;log;debug=!1;debugBreakpoints=new Set;debugPauseOnEntry=!1;debugBuffer;debugInterruptBuffer;debugWatchBuffer;debugWatchResultBuffer;onDebugEvent;debugVariableMetadata={};debugGlobalMetadata=[];debugFunctionMetadata={};lastBuildKey="";path;assetUrls;compilerConfig;wasm;lastArtifactPath="main.wasm";traceStartedAt=0;progress;maxAssetBytes;signal;cppSysrootReady;printscanLongDoubleReady;constructor(e){let n=e.maxAssetBytes??rn;if(!Number.isSafeInteger(n)||n<=0)throw new TypeError("Clang maxAssetBytes must be a positive safe integer");this.maxAssetBytes=n,this.signal=e.signal,this.moduleCache={},this.moduleLoads={},this.stdout=e.stdout||(()=>{}),this.showTiming=e.showTiming||!1,this.log=e.log||!1,this.path=e.runtimeBaseUrl.toString(),this.assetUrls=Ri(this.path,e.manifest),this.compilerConfig=e.manifest?.compiler,this.onDebugEvent=e.onDebugEvent,this.progress=Li(a=>e.progress?.(a)),this.memfs=new _t({stdout:this.stdout,stdin:e.stdin||(()=>""),moduleUrl:this.assetUrls.memfs,progress:this.progress.memfs,signal:e.signal,maxAssetBytes:n,trace:a=>this.trace(a)});let _=this.getModule(this.assetUrls.clang,this.progress.clang,e.signal),i=this.assetUrls.cSysroot||this.assetUrls.sysroot,r=e.signal?qe(i,void 0,n,e.signal):qe(i,void 0,n),o=Promise.all([this.memfs.ready,r]).then(async([,a])=>{await this.hostLogAsync(`Untarring ${i}`,Promise.resolve().then(()=>(e.signal?.throwIfAborted(),Fn(a,this.memfs)))),e.signal?.throwIfAborted(),Ei({readFile:d=>this.memfs.hasFile(d)?this.memfs.getFileContents(d.replace(/^\/+/,"")):null,mkdirTree:d=>this.memfs.addDirectory(d.replace(/^\/+/,"")),writeFile:(d,l)=>this.memfs.addFile(d.replace(/^\/+/,""),l)},this.compilerConfig?.provenance,this.compilerConfig?.resourceDir),this.assetUrls.cppAddon||await this.installCppHeaders()});this.ready=Promise.all([_,o]).then(()=>{})}ensureCppSysroot(){let e=this.assetUrls.cppAddon;if(!e)return this.ready;if(this.cppSysrootReady)return this.cppSysrootReady;let n=this.signal?qe(e,void 0,this.maxAssetBytes,this.signal):qe(e,void 0,this.maxAssetBytes),_=Promise.all([this.ready,n]).then(async([,i])=>{await this.hostLogAsync(`Untarring ${e}`,Promise.resolve().then(()=>(this.signal?.throwIfAborted(),Fn(i,this.memfs)))),this.signal?.throwIfAborted(),await this.installCppHeaders()});return this.cppSysrootReady=_,n.catch(()=>{this.cppSysrootReady===_&&(this.cppSysrootReady=void 0)}),_}async installCppHeaders(){Ai(this.memfs),await bi({readFile:e=>this.memfs.hasFile(e)?this.memfs.getFileContents(e.replace(/^\/+/,"")):null,mkdirTree:e=>this.memfs.addDirectory(e.replace(/^\/+/,"")),writeFile:(e,n)=>this.memfs.addFile(e.replace(/^\/+/,""),n)},this.compilerConfig?.provenance)}async prepareLongDoubleLinkArgs(){await this.ready;let e=this.assetUrls.printscanLongDouble;if(e&&!this.memfs.hasFile(V_)){if(!this.printscanLongDoubleReady){let n=(this.signal?qe(e,void 0,this.maxAssetBytes,this.signal):qe(e,void 0,this.maxAssetBytes)).then(_=>{this.signal?.throwIfAborted(),this.memfs.addFile(V_,_)});this.printscanLongDoubleReady=n,n.catch(()=>{this.printscanLongDoubleReady===n&&(this.printscanLongDoubleReady=void 0)})}await this.printscanLongDoubleReady}return this.memfs.hasFile(V_)?["-lc-printscan-long-double"]:[]}hostLog(e){if(!this.log)return;let n=`${wi}>${Wt} `;this.stdout(`${n}${e}`)}beginTrace(e){this.debug=e,this.traceStartedAt=Date.now()}trace(e){if(!this.debug||!this.log)return;let n=Date.now()-this.traceStartedAt;this.stdout(`\x1B[2m[debug +${n}ms] ${e}\x1B[0m
`)}async hostLogAsync(e,n){let _=+new Date;this.hostLog(`${e}...`);let i=await n,r=+new Date;return this.log&&this.stdout(" done."),this.showTiming&&this.stdout(` ${k_}(${r-_}ms)${Wt}
`),this.log&&this.stdout(`
`),i}async getModule(e,n,_=this.signal){if(this.moduleCache[e])return this.moduleCache[e];let i=this.moduleLoads[e];if(i)return await i;let r=this.hostLogAsync(`Fetching and compiling ${e}`,on(e,n,_,this.maxAssetBytes)).then(s=>(this.moduleCache[e]=s,delete this.moduleLoads[e],s),s=>{throw delete this.moduleLoads[e],s});return this.moduleLoads[e]=r,await r}addWorkspaceDirectories(e,n=new Set){let _=We(e).split("/").slice(0,-1),i="";for(let r of _)i=i?`${i}/${r}`:r,n.has(i)||(this.memfs.addDirectory(i),n.add(i))}addWorkspaceFiles(e=[],n=""){let _=new Set,i=We(n);for(let r of e){let s=We(r.path);!s||s===i||(this.addWorkspaceDirectories(s,_),this.memfs.addFile(s,Di(r.content)))}}async compile(e){let n=We(e.input||"main.cc")||"main.cc",_=e.code,i=e.obj,r=e.language==="C"?"C":e.language==="OBJC"?"OBJC":"CPP",s=e.compileArgs??e.args??[],{languageArg:o,standardArg:a}=Ii(r,e),d=ln(e),l=d==="trace",c=d==="lldb";if(c)for(let y of s){if(typeof y!="string")throw new TypeError("LLDB compile arguments must be strings");if(yo.has(y)||Eo.some(u=>y.startsWith(u)))throw new Error(`LLDB compile argument ${JSON.stringify(y)} cannot change the WAMR debug target profile`)}let p=d==="none"?e.opt||"2":"0";if(l){let y=_.split(`
`),u=!1,T=y.map(D=>{let P=No(D,u);return u=P.inBlockComment,P.line}),m=D=>{if(/^(?:do|else)$/.test(D))return!0;if(!/^(?:else\s+)?(?:if|for|while)\s*\(/.test(D))return!1;let P=D.indexOf("("),V=0;for(let ce=P;ce<D.length;ce+=1)if(D[ce]==="("&&(V+=1),D[ce]===")"&&(V-=1,V===0))return D.slice(ce+1).trim()==="";return!1},E=new Set,S=!1,N=!1;for(let D=0;D<T.length;D+=1){let P=T[D].trim();if(!P)continue;let V=N,ce=V;V&&P.includes(";")&&(N=!1),S&&(S=!1,P!=="{"&&(ce=!0,!P.includes(";")&&!P.includes("{")&&!m(P)&&(N=!0))),/^while\s*\(.*\)\s*;$/.test(P)&&(ce=!0),ce&&E.add(D),m(P)&&(S=!0)}let x=0,C=0,L=0,ne=1,k=1,G=new Map,B=new Map,U=new Map,R,W=new Map,pe="",te=[],Ae=!1;for(let D of y){let P=D;if(Ae){let Q=P.indexOf("*/");if(Q===-1)continue;P=P.slice(Q+2),Ae=!1}let V=P.indexOf("/*");if(V!==-1){let Q=P.indexOf("*/",V+2);Q===-1?(Ae=!0,P=P.slice(0,V)):P=P.slice(0,V)+P.slice(Q+2)}let ce=P.indexOf("//");ce!==-1&&(P=P.slice(0,ce));let be=P.trim();if(!pe){let Q=be.match(/^struct\s+([A-Za-z_]\w*)\s*\{$/);Q?.[1]&&(pe=Q[1],te=[]);continue}if(be==="};"){let Q=0,Ee=1,Qe=[];for(let je of te){let Be=je.kind==="double"?8:je.kind==="bool"||je.kind==="char"?1:4;Q%Be!==0&&(Q+=Be-Q%Be),Qe.push({name:je.name,kind:je.kind,offset:Q}),Q+=Be,Ee=Math.max(Ee,Be)}Q%Ee!==0&&(Q+=Ee-Q%Ee),W.set(pe,{fields:Qe,size:Math.max(Q,1)}),pe="",te=[];continue}let w=be.match(/^(?:const\s+)?(?:(?:unsigned|signed)\s+)?(?:(?:short|long long|long)\s+)?(int|float|double|bool|char)\s+(.+);$/);if(w)for(let Q of w[2].split(",")){let Ee=Q.split("=")[0]?.trim()||"";if(!Ee||/[*&\[]/.test(Ee))continue;let Qe=Ee.match(/([A-Za-z_]\w*)\s*$/)?.[1];Qe&&te.push({name:Qe,kind:w[1]})}}this.debugVariableMetadata={},this.debugGlobalMetadata=[],this.debugFunctionMetadata={};let re=[],ie=r==="CPP"?'extern "C" ':"",_e=[`${ie}__attribute__((import_module("env"), import_name("__wasm_idle_debug_enter"))) void __wasm_idle_debug_enter(int functionId, int line);`,`${ie}__attribute__((import_module("env"), import_name("__wasm_idle_debug_leave"))) void __wasm_idle_debug_leave(int functionId);`,`${ie}__attribute__((import_module("env"), import_name("__wasm_idle_debug_value_num"))) void __wasm_idle_debug_value_num(int functionId, int slot, double value);`,`${ie}__attribute__((import_module("env"), import_name("__wasm_idle_debug_value_bool"))) void __wasm_idle_debug_value_bool(int functionId, int slot, int value);`,`${ie}__attribute__((import_module("env"), import_name("__wasm_idle_debug_value_addr"))) void __wasm_idle_debug_value_addr(int functionId, int slot, int value);`,`${ie}__attribute__((import_module("env"), import_name("__wasm_idle_debug_value_text"))) void __wasm_idle_debug_value_text(int functionId, int slot, const char* ptr, int len);`,`${ie}__attribute__((import_module("env"), import_name("__wasm_idle_debug_line"))) void __wasm_idle_debug_line(int functionId, int line);`],Y=r==="CPP"?["#include <cstdio>","#include <iostream>","#include <map>","#include <set>","#include <string>","#include <type_traits>","#include <vector>",..._e,"template <typename T>","static inline std::string __wasm_idle_debug_format_value(const T& value) {",'    if constexpr (std::is_same_v<T, bool>) return value ? "true" : "false";',`    else if constexpr (std::is_same_v<T, char>) return std::string("'") + value + "'";`,"    else if constexpr (std::is_same_v<T, signed char> || std::is_same_v<T, unsigned char>) return std::to_string((int)value);","    else if constexpr (std::is_integral_v<T> || std::is_floating_point_v<T>) return std::to_string(value);",'    else return "?";',"}","template <typename T>","static inline void __wasm_idle_debug_emit_vector(int functionId, int slot, const std::vector<T>& values) {",'    std::string text = "[";',"    int count = 0;","    for (const auto& value : values) {",'        if (count > 0) text += ", ";','        if (count >= 8) { text += "..."; break; }',"        text += __wasm_idle_debug_format_value(value);","        count += 1;","    }",'    text += "]";',"    __wasm_idle_debug_value_text(functionId, slot, text.c_str(), (int)text.size());","}","template <typename T>","static inline void __wasm_idle_debug_emit_set(int functionId, int slot, const std::set<T>& values) {",'    std::string text = "{";',"    int count = 0;","    for (const auto& value : values) {",'        if (count > 0) text += ", ";','        if (count >= 8) { text += "..."; break; }',"        text += __wasm_idle_debug_format_value(value);","        count += 1;","    }",'    text += "}";',"    __wasm_idle_debug_value_text(functionId, slot, text.c_str(), (int)text.size());","}","template <typename K, typename V>","static inline void __wasm_idle_debug_emit_map(int functionId, int slot, const std::map<K, V>& values) {",'    std::string text = "{";',"    int count = 0;","    for (const auto& entry : values) {",'        if (count > 0) text += ", ";','        if (count >= 8) { text += "..."; break; }',"        text += __wasm_idle_debug_format_value(entry.first);",'        text += ": ";',"        text += __wasm_idle_debug_format_value(entry.second);","        count += 1;","    }",'    text += "}";',"    __wasm_idle_debug_value_text(functionId, slot, text.c_str(), (int)text.size());","}"]:["#include <stdio.h>",..._e];for(let D=0;D<y.length;D+=1){let P=y[D],V=P.match(/^\s*/)?.[0]||"",ce=P,be=T[D],w=be.trim(),Q=E.has(D),Ee=C>0&&x>=C,Qe=C===0&&x===0&&!w.includes("(")&&!w.startsWith("#"),je=/^(while|if|for)\s*\(/.test(w)&&!w.includes("{"),Be=[],en=[],or=new Set,a_=Qe&&w.match(/^(?:const\s+)?(?:(?:unsigned|signed)\s+)?(?:(?:short|long long|long)\s+)?(int|float|double|bool|char)\s+(.+);$/);if(a_){let de=a_[1]==="bool"?"bool":"number",me=[],xe="",X=0;for(let F of a_[2]){if(F===","&&X===0){xe.trim()&&me.push(xe.trim()),xe="";continue}F==="{"&&(X+=1),F==="}"&&(X=Math.max(0,X-1)),xe+=F}xe.trim()&&me.push(xe.trim());for(let F of me){let[$]=F.split("="),se=$?.trim()||"";if(/[*&\[]/.test(se))continue;let j=se.match(/([A-Za-z_]\w*)\s*$/)?.[1];if(!j)continue;let ee=k++;B.set(j,{slot:ee,kind:de,fromLine:D+1,toLine:Number.MAX_SAFE_INTEGER}),this.debugGlobalMetadata=[...this.debugGlobalMetadata,{slot:ee,name:j,kind:de,fromLine:D+1,toLine:Number.MAX_SAFE_INTEGER}],re.push(`${de==="bool"?"__wasm_idle_debug_value_bool":"__wasm_idle_debug_value_num"}(0, ${ee}, ${j});`)}}let Sn=Qe&&w.match(/^(?:const\s+)?([A-Za-z_]\w*)\s+([A-Za-z_]\w*)\s*\[(\d+)\]\s*(?:=.*)?;$/);if(Sn){let de=W.get(Sn[1]);if(de){let me=k++;this.debugGlobalMetadata=[...this.debugGlobalMetadata,{slot:me,name:Sn[2],kind:"array",length:Number(Sn[3]),dimensions:[Number(Sn[3])],structFields:de.fields,structSize:de.size,fromLine:D+1,toLine:Number.MAX_SAFE_INTEGER}],re.push(`__wasm_idle_debug_value_addr(0, ${me}, (int)((unsigned long long)(${Sn[2]})));`)}}if(Ee&&!Q&&w&&!w.startsWith("#")&&w!=="{"&&w!=="}"&&!w.startsWith("else")&&!w.startsWith("case ")&&w!=="case"&&!w.startsWith("default")&&!w.startsWith("catch")&&!/^(public|private|protected)\s*:/.test(w)&&!w.endsWith(":")&&!w.includes(" else ")){Be.push(`${V}__wasm_idle_debug_line(${L}, ${D+1});`);let de=w.match(/^(?:const\s+)?(?:(?:unsigned|signed)\s+)?(?:(?:short|long long|long)\s+)?(int|float|double|bool|char)\s+(.+);$/),me=w.match(/^(?:const\s+)?(?:(?:std::)?(vector|set|map))\s*<(.+)>\s+([A-Za-z_]\w*)\s*(?:=.*)?;$/);if(me&&L){let X=k++,F=me[1],$=me[3];or.add($),U.set($,{slot:X,container:F,fromLine:D+1,toLine:Number.MAX_SAFE_INTEGER}),this.debugVariableMetadata[L]=[...this.debugVariableMetadata[L]||[],{slot:X,name:$,kind:"text",fromLine:D+1,toLine:Number.MAX_SAFE_INTEGER}],en.push(`${V}__wasm_idle_debug_emit_${F}(${L}, ${X}, ${$});`)}if(de&&L){let X=de[1]==="bool"?"bool":"number",F=[],$="",se=0,j=0;for(let ee of de[2]){if(ee===","&&se===0&&j===0){$.trim()&&F.push($.trim()),$="";continue}ee==="("&&(se+=1),ee===")"&&(se=Math.max(0,se-1)),ee==="{"&&(j+=1),ee==="}"&&(j=Math.max(0,j-1)),$+=ee}$.trim()&&F.push($.trim());for(let ee of F){let[fe]=ee.split("="),Z=fe?.trim()||"",Te=[];for(let he of Z.matchAll(/\[(\d+)\]/g))Te.push(Number(he[1]));let ge=Z.match(/([A-Za-z_]\w*)\s*(?=\[\d+\])/);if(Te.length&&ge){let he=k++;this.debugVariableMetadata[L]=[...this.debugVariableMetadata[L]||[],{slot:he,name:ge[1],kind:"array",elementKind:de[1],length:Te[0],dimensions:Te,fromLine:D+1,toLine:Number.MAX_SAFE_INTEGER}],en.push(`${V}__wasm_idle_debug_value_addr(${L}, ${he}, (int)((unsigned long long)(${ge[1]})));`);continue}if(/[*&]/.test(Z))continue;let ve=Z.match(/([A-Za-z_]\w*)\s*(?:\[[^\]]*\])?$/)?.[1];if(ve){if(!G.has(ve)){let he=k++;G.set(ve,{slot:he,kind:X,fromLine:D+1,toLine:Number.MAX_SAFE_INTEGER}),this.debugVariableMetadata[L]=[...this.debugVariableMetadata[L]||[],{slot:he,name:ve,kind:X,fromLine:D+1,toLine:Number.MAX_SAFE_INTEGER}]}if(ee.includes("=")){let he=G.get(ve);he&&en.push(`${V}${he.kind==="bool"?"__wasm_idle_debug_value_bool":"__wasm_idle_debug_value_num"}(${L}, ${he.slot}, ${ve});`)}}}}let xe=w.match(/^for\s*\(\s*(?:const\s+)?(?:(?:unsigned|signed)\s+)?(?:(?:short|long long|long)\s+)?(int|float|double|bool|char)\s+([A-Za-z_]\w*)\s*=/);if(xe&&L){let X=xe[1]==="bool"?"bool":"number",F=xe[2];if(!G.has(F)){let $=k++;G.set(F,{slot:$,kind:X,fromLine:D+1,toLine:Number.MAX_SAFE_INTEGER}),this.debugVariableMetadata[L]=[...this.debugVariableMetadata[L]||[],{slot:$,name:F,kind:X,fromLine:D+1,toLine:Number.MAX_SAFE_INTEGER}]}}if(!je){for(let[X,F]of U){if(or.has(X))continue;let $=X.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");new RegExp(`\\b${$}\\b`).test(w)&&en.push(`${V}__wasm_idle_debug_emit_${F.container}(${L}, ${F.slot}, ${X});`)}for(let[X,F]of G){let $=X.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");w.startsWith("for")&&F.toLine===D+1||(new RegExp(`(?:^|[^\\w])(?:\\+\\+|--)\\s*${$}\\b`).test(w)||new RegExp(`\\b${$}\\s*(?:(?:<<|>>|[+\\-*/%&|^])?=|\\+\\+|--)`).test(w)||new RegExp(`&\\s*${$}\\b`).test(w)||new RegExp(`\\b(?:cin|std::cin)\\b[^;]*>>\\s*${$}\\b`).test(w))&&en.push(`${V}${F.kind==="bool"?"__wasm_idle_debug_value_bool":"__wasm_idle_debug_value_num"}(${L}, ${F.slot}, ${X});`)}for(let[X,F]of B){if(G.has(X)||U.has(X))continue;let $=X.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");(new RegExp(`(?:^|[^\\w])(?:\\+\\+|--)\\s*${$}\\b`).test(w)||new RegExp(`\\b${$}\\s*(?:(?:<<|>>|[+\\-*/%&|^])?=|\\+\\+|--)`).test(w)||new RegExp(`&\\s*${$}\\b`).test(w)||new RegExp(`\\b(?:cin|std::cin)\\b[^;]*>>\\s*${$}\\b`).test(w))&&en.push(`${V}${F.kind==="bool"?"__wasm_idle_debug_value_bool":"__wasm_idle_debug_value_num"}(0, ${F.slot}, ${X});`)}}/^return\b/.test(w)&&Be.push(`${V}__wasm_idle_debug_leave(${L});`)}if(C>0&&x===C&&w==="}"&&Be.push(`${V}__wasm_idle_debug_leave(${L});`),Ee&&L&&(/^(while|if)\s*\(/.test(w)||/^for\s*\(/.test(w))){let me=w.match(/^(while|if|for)\b/)?.[1],xe=P.indexOf(me||""),X=xe>=0?P.indexOf("(",xe):-1;if(X>=0){let F=-1,$=0;for(let se=X;se<P.length;se+=1){let j=P[se];if(j==="("&&($+=1),j===")"&&($-=1,$===0)){F=se;break}for(let[ee,fe]of B){if(G.has(ee)||U.has(ee))continue;let Z=ee.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");!je&&(new RegExp(`(?:^|[^\\w])(?:\\+\\+|--)\\s*${Z}\\b`).test(w)||new RegExp(`\\b${Z}\\s*(?:(?:<<|>>|[+\\-*/%&|^])?=|\\+\\+|--)`).test(w)||new RegExp(`&\\s*${Z}\\b`).test(w))&&en.push(`${V}${fe.kind==="bool"?"__wasm_idle_debug_value_bool":"__wasm_idle_debug_value_num"}(0, ${fe.slot}, ${ee});`)}}if(F>X){let se=P.slice(X+1,F);if(me==="for"){let j=[],ee="",fe=0;for(let Z of se){if(Z===";"&&fe===0){j.push(ee),ee="";continue}Z==="("&&(fe+=1),Z===")"&&(fe=Math.max(0,fe-1)),ee+=Z}if(j.push(ee),j.length===3&&j[1]?.trim()){let Z=j[0].trim(),Te=j[2].trim(),ge=[],ve=[],he=[],ar=/^(?:const\s+)?(?:(?:unsigned|signed)\s+)?(?:(?:short|long long|long)\s+)?(?:int|float|double|bool|char)\b/.test(Z);for(let[At,An]of G){let dr=At.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),d_=new RegExp(`(?:^|[^\\w])(?:\\+\\+|--)\\s*${dr}\\b|\\b${dr}\\s*(?:(?:<<|>>|[+\\-*/%&|^])?=|\\+\\+|--)`);!ar&&d_.test(Z)&&ge.push(`${An.kind==="bool"?"__wasm_idle_debug_value_bool":"__wasm_idle_debug_value_num"}(${L}, ${An.slot}, ${At})`),ar&&d_.test(Z)&&ve.push(`${An.kind==="bool"?"__wasm_idle_debug_value_bool":"__wasm_idle_debug_value_num"}(${L}, ${An.slot}, ${At})`),d_.test(Te)&&he.push(`${An.kind==="bool"?"__wasm_idle_debug_value_bool":"__wasm_idle_debug_value_num"}(${L}, ${An.slot}, ${At})`)}let ss=ge.length&&Z?`(${Z}, ${ge.join(", ")})`:j[0],os=he.length&&Te?`(${Te}, ${he.join(", ")})`:j[2];ce=P.slice(0,X+1)+`${ss}; (${ve.length?`${ve.join(", ")}, `:""}__wasm_idle_debug_line(${L}, ${D+1}), (${j[1].trim()})); ${os}`+P.slice(F)}}else{let j=[];if(je){for(let[fe,Z]of G){let Te=fe.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");new RegExp(`(?:^|[^\\w])(?:\\+\\+|--)\\s*${Te}\\b|\\b${Te}\\s*(?:(?:<<|>>|[+\\-*/%&|^])?=|\\+\\+|--)`).test(se)&&j.push(`${Z.kind==="bool"?"__wasm_idle_debug_value_bool":"__wasm_idle_debug_value_num"}(${L}, ${Z.slot}, ${fe})`)}for(let[fe,Z]of B){if(G.has(fe)||U.has(fe))continue;let Te=fe.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");new RegExp(`(?:^|[^\\w])(?:\\+\\+|--)\\s*${Te}\\b|\\b${Te}\\s*(?:(?:<<|>>|[+\\-*/%&|^])?=|\\+\\+|--)`).test(se)&&j.push(`${Z.kind==="bool"?"__wasm_idle_debug_value_bool":"__wasm_idle_debug_value_num"}(0, ${Z.slot}, ${fe})`)}}let ee=j.length?`((${se.trim()}) ? (${j.join(", ")}, 1) : (${j.join(", ")}, 0))`:`(${se.trim()})`;ce=P.slice(0,X+1)+`(__wasm_idle_debug_line(${L}, ${D+1}), ${ee})`+P.slice(F)}}}}Y.push(...Be),Y.push(ce),Y.push(...en);let St=C===0&&w.includes("(")&&w.includes(")")&&w.includes("{")&&(be.match(/{/g)||[]).length>(be.match(/}/g)||[]).length&&!/^(if|for|while|switch|catch)\b/.test(w)&&!/^(class|struct|namespace|enum|union)\b/.test(w),is=C===0&&!!R&&w==="{";if(x+=(be.match(/{/g)||[]).length,x-=(be.match(/}/g)||[]).length,St||is){C=x,L=ne++;let de="anonymous",me=r==="OBJC"&&St?w.match(/^([-+])\s*\([^)]*\)\s*([A-Za-z_]\w*)/):null;if(St?(de=w.slice(0,w.indexOf("(")).trim().split(/\s+/).pop()||de,me&&(de=`${me[1]}${me[2]}`)):R&&(de=R.functionName||de),this.debugFunctionMetadata[L]=de,k=1,G=new Map,U=new Map,Y.push(`${V}    __wasm_idle_debug_enter(${L}, ${D+1});`),de==="main"){r==="CPP"&&(Y.push(`${V}    std::cout.setf(std::ios::unitbuf);`),Y.push(`${V}    std::cerr.setf(std::ios::unitbuf);`));let X=r==="CPP"?"nullptr":"NULL";Y.push(`${V}    setvbuf(stdout, ${X}, _IONBF, 0);`),Y.push(`${V}    setvbuf(stderr, ${X}, _IONBF, 0);`)}let xe=St?me?"":w.slice(w.indexOf("(")+1,w.lastIndexOf(")")):R?.parameters||"";for(let X of xe.split(",").map(F=>F.trim()).filter(Boolean)){let F=X.split("=")[0]?.trim()||"",$=F.match(/^(?:const\s+)?(?:(?:std::)?(vector|set|map)\s*<.+>)\s*&?\s*([A-Za-z_]\w*)\s*$/);if($){let ge=k++,ve=$[1],he=$[2];U.set(he,{slot:ge,container:ve,fromLine:D+1,toLine:Number.MAX_SAFE_INTEGER}),this.debugVariableMetadata[L]=[...this.debugVariableMetadata[L]||[],{slot:ge,name:he,kind:"text",fromLine:D+1,toLine:Number.MAX_SAFE_INTEGER}],Y.push(`${V}    __wasm_idle_debug_emit_${ve}(${L}, ${ge}, ${he});`);continue}let se=[];for(let ge of F.matchAll(/\[(\d+)\]/g))se.push(Number(ge[1]));let j=F.match(/([A-Za-z_]\w*)\s*(?=\[\d+\])/);if(se.length&&j&&/\b(int|float|double|bool|char)\b/.test(F)){let ge=k++;this.debugVariableMetadata[L]=[...this.debugVariableMetadata[L]||[],{slot:ge,name:j[1],kind:"array",elementKind:F.match(/\b(int|float|double|bool|char)\b/)?.[1]||"int",length:se[0],dimensions:se,fromLine:D+1,toLine:Number.MAX_SAFE_INTEGER}],Y.push(`${V}    __wasm_idle_debug_value_addr(${L}, ${ge}, (int)((unsigned long long)(${j[1]})));`);continue}if(/[*&\[]/.test(F))continue;let ee=F.match(/([A-Za-z_]\w*)\s*(?:\[[^\]]*\])?\s*$/);if(!ee)continue;let fe=ee[1],Z=/\bbool\b/.test(F)?"bool":/\b(?:int|float|double|char|short|long)\b/.test(F)?"number":"";if(!Z)continue;let Te=k++;G.set(fe,{slot:Te,kind:Z,fromLine:D+1,toLine:Number.MAX_SAFE_INTEGER}),this.debugVariableMetadata[L]=[...this.debugVariableMetadata[L]||[],{slot:Te,name:fe,kind:Z,fromLine:D+1,toLine:Number.MAX_SAFE_INTEGER}],Y.push(`${V}    ${Z==="bool"?"__wasm_idle_debug_value_bool":"__wasm_idle_debug_value_num"}(${L}, ${Te}, ${fe});`)}R=void 0}else C===0&&w.includes("(")&&w.includes(")")&&!w.includes("{")&&!w.endsWith(";")&&!/^(if|for|while|switch|catch)\b/.test(w)&&!/^(class|struct|namespace|enum|union)\b/.test(w)?R={functionName:w.slice(0,w.indexOf("(")).trim().split(/\s+/).pop()||"anonymous",parameters:w.slice(w.indexOf("(")+1,w.lastIndexOf(")"))}:w&&w!=="{"&&(R=void 0);C>0&&x<C&&(C=0,L=0,G=new Map,U=new Map)}re.length&&(r==="CPP"?(Y.push("struct __wasm_idle_debug_globals_init {"),Y.push("    __wasm_idle_debug_globals_init() {"),Y.push(...re.map(D=>`        ${D}`)),Y.push("    }"),Y.push("} __wasm_idle_debug_globals_init_instance;")):(Y.push("__attribute__((constructor)) static void __wasm_idle_debug_globals_init(void) {"),Y.push(...re.map(D=>`    ${D}`)),Y.push("}"))),_=Y.join(`
`)}else this.debugVariableMetadata={},this.debugGlobalMetadata=[],this.debugFunctionMetadata={};typeof e.transformSource=="function"&&(_=e.transformSource(_));let f=Di(_);await(r!=="C"||Mi(s)?this.ensureCppSysroot():this.ready),e.sourceAlreadyMounted||(this.addWorkspaceFiles(e.workspaceFiles,n),this.addWorkspaceDirectories(n),this.memfs.addFile(n,f)),this.memfs.addFile(i,new Uint8Array(0));let g=await this.getModule(this.assetUrls.clang),h=this.compilerConfig?.resourceDir||Io,A=Si(r,"",h).flatMap(y=>["-internal-isystem",y]),b=["-cc1","-triple",mi,"-emit-obj","-disable-free","-isysroot","/","-resource-dir",h,...A,...r==="OBJC"?["-I."]:[],"-ferror-limit","19","-fcolor-diagnostics",...c?[]:["-O"+p],"-o",i,a,"-x",o,...r==="OBJC"?Ti:[],n,...s,...c?["-O0","-debug-info-kind=standalone","-dwarf-version=4","-debugger-tuning=gdb","-fdebug-compilation-dir=/workspace"]:[]];this.trace(`compile ${n} -> ${i}`);try{return await this.run(g,!0,"clang",...b)}catch(y){if(Uint8Array.from(this.memfs.getFileContents(i)).length>0)return this.trace(`recover ${i} after clang output stream exit`),null;throw y}}async link(e,n,_="none",i="CPP"){let r=typeof e=="string"?[e]:[...e];if(r.length===0||r.some(f=>typeof f!="string"||f.length===0))throw new TypeError("At least one nonempty object file is required for linking");let s=typeof _=="boolean"?ln({debug:_}):ln({debugMode:_}),o=1024*1024,a="lib/wasm32-wasi",d=this.compilerConfig?.compilerRuntimeLibDir||So,l=`${a}/crt1.o`;await(i==="C"?this.ready:this.ensureCppSysroot());let c=await this.prepareLongDoubleLinkArgs(),p=await this.getModule(this.assetUrls.lld);return this.trace(`link ${r.join(", ")} -> ${n}`),await this.run(p,this.log,"wasm-ld","--export-dynamic",...s==="trace"?["--allow-undefined"]:[],"-z",`stack-size=${o}`,`-L${a}/noeh`,`-L${a}`,l,...r,...c,"-lc",...i==="C"?[]:["-lc++","-lc++abi"],"-lm",`-L${d}`,"-lclang_rt.builtins-wasm32","-o",n)}async run(e,n,..._){return this.runWithOptions(e,n,_)}async runWithOptions(e,n,_,i={},r,s){this.memfs.out=n,this.hostLog(`${_.join(" ")}
`),this.trace(`run ${_.join(" ")}`);let o=+new Date,a=new tt(e,this.memfs,_[0],..._.slice(1),{extraImports:r,instanceRef:s});a.environ={...a.environ,...i},a.trace=p=>this.trace(p),a.debugSession={buffer:this.debugBuffer,interruptBuffer:this.debugInterruptBuffer,watchBuffer:this.debugWatchBuffer,watchResultBuffer:this.debugWatchResultBuffer,breakpoints:new Set(this.debugBreakpoints),breakpointVersion:0,pauseOnEntry:this.debugPauseOnEntry,stepArmed:this.debugPauseOnEntry,nextLineArmed:!1,stepOutArmed:!1,callDepth:0,stepOutDepth:0,currentFunctionId:0,currentLine:0,resumeSkipActive:!1,resumeSkipFunctionId:0,resumeSkipLine:0,nextLineFunctionId:0,nextLineLine:0,variableMetadata:this.debugVariableMetadata,globalVariableMetadata:this.debugGlobalMetadata,functionMetadata:this.debugFunctionMetadata,frames:[],globalValues:new Map,onPause:p=>this.onDebugEvent?.(p)};let d=+new Date,l=await a.run(),c=+new Date;return this.log&&this.stdout(`
`),this.showTiming&&this.stdout(`${k_}(${o-d}ms/${c-d}ms)${Wt}
`),l?a:null}async compileLink(e,n={}){let{language:_="CPP",fileName:i,activePath:r,workspaceFiles:s=[],args:o=[],compileArgs:a=o,debugMode:d,debug:l,breakpoints:c=[],pauseOnEntry:p=!1,cppVersion:f,cVersion:I,debugBuffer:g,interruptBuffer:h,watchBuffer:A,watchResultBuffer:b}=n,y=ln({debugMode:d,debug:l}),u=y==="lldb"?Gn:We,T=s.map(R=>({...R,path:u(R.path)})),m=u(r||"")||u(i||"")||void 0,{input:E,obj:S,wasm:N}=rt(_,m),x=new Map;for(let R of T)if(R.path){if(R.path===Je||R.path.startsWith(`${Je}/`))throw new Error(`Workspace path uses reserved build namespace ${JSON.stringify(Je)}`);x.set(R.path,R)}if(E===Je||E.startsWith(`${Je}/`))throw new Error(`Active source path uses reserved build namespace ${JSON.stringify(Je)}`);x.set(E,{path:E,content:e});let C=[...x.values()].sort((R,W)=>R.path<W.path?-1:R.path>W.path?1:0),L=C.filter(R=>R.path===E||Ao.test(R.path)),k=_==="C"&&L.every(R=>R.path===E||R.path.endsWith(".c"))&&!Mi(a)?["C"]:[],G=y==="trace";if(G&&L.length>1)throw new Error("Trace debug mode does not support multiple C/C++ translation units");this.beginTrace(G),this.debugBreakpoints=new Set(G?c:[]),this.debugPauseOnEntry=G&&p,this.debugBuffer=g,this.debugInterruptBuffer=h,this.debugWatchBuffer=A,this.debugWatchResultBuffer=b,this.lastArtifactPath=N;let B=JSON.stringify({code:e,input:E,wasm:N,language:_,compileArgs:a,workspaceFiles:C,cppVersion:f,cVersion:I,debugMode:y});if(this.lastBuildKey===B)return this.trace(`reuse ${N}`),this.wasm;if(this.getModule(this.assetUrls.lld).catch(()=>{}),L.length===1)await this.compile({input:E,code:e,obj:S,language:_,compileArgs:a,workspaceFiles:T,cppVersion:f,cVersion:I,debugMode:y}),await this.link(S,N,y,...k);else{await this.ready,this.addWorkspaceFiles(C),this.memfs.addDirectory(Je),this.memfs.addDirectory(`${Je}/objects`);let R=[];for(let[W,pe]of L.entries()){let te=`${Je}/objects/${W.toString().padStart(4,"0")}.o`;R.push(te),await this.compile({input:pe.path,code:pe.content,obj:te,language:pe.path===E?_:pe.path.endsWith(".c")?"C":"CPP",compileArgs:a,workspaceFiles:[],cppVersion:f,cVersion:I,debugMode:y,sourceAlreadyMounted:!0})}await this.link(R,N,y,...k)}this.lastBuildKey=B;let U=Uint8Array.from(this.memfs.getFileContents(N));return this.wasm=await this.hostLogAsync(`Compiling ${N}`,WebAssembly.compile(U))}async compileArtifact(e,n={}){let _=ln(n),i=await this.compileLink(e,n),r=Uint8Array.from(this.memfs.getFileContents(this.lastArtifactPath)),s=n.language||"CPP",o={code:e,language:s,fileName:n.fileName,activePath:n.activePath,workspaceFiles:n.workspaceFiles,compileArgs:n.compileArgs,cppVersion:n.cppVersion,cVersion:n.cVersion,debugMode:_};return{bytes:r,wasm:i,target:"wasm32-wasi",format:"wasi-core-wasm",fileName:this.lastArtifactPath,language:s,..._==="trace"?{debugMetadata:{variableMetadata:this.debugVariableMetadata,globalVariableMetadata:this.debugGlobalMetadata,functionMetadata:this.debugFunctionMetadata}}:{},..._==="lldb"?{debug:await vi(o,r,this.compilerConfig?.provenance)}:{}}}async compileLinkRun(e,n={}){let{language:_="CPP",fileName:i,activePath:r,workspaceFiles:s=[],args:o=[],compileArgs:a=o,programArgs:d=[],debugMode:l,debug:c,breakpoints:p=[],pauseOnEntry:f=!1,cppVersion:I,cVersion:g,debugBuffer:h,interruptBuffer:A,watchBuffer:b,watchResultBuffer:y}=n,u=ln({debugMode:l,debug:c});if(u==="lldb")throw new Error("compileLinkRun() cannot execute LLDB artifacts in the browser WebAssembly engine. Use compileArtifact() and @wasm-idle/llvm-core/debug instead.");this.debug=u==="trace";let T=We(r||"")||We(i||"")||void 0,{wasm:m}=rt(_,T);return await this.run(await this.compileLink(e,{language:_,fileName:i,activePath:r,workspaceFiles:s,compileArgs:a,debugMode:u,breakpoints:p,pauseOnEntry:f,cppVersion:I,cVersion:g,debugBuffer:h,interruptBuffer:A,watchBuffer:b,watchResultBuffer:y}),!0,m,...d)}};var j_=z_;function Ie(t,e){if(!t||typeof t!="object"||Array.isArray(t))throw new Error(`invalid ${e} in wasm-clang runtime manifest`);return t}function ye(t,e){if(typeof t!="string"||t.length===0)throw new Error(`invalid ${e} in wasm-clang runtime manifest`);return t}function bo(t,e){if(t!=="wasm32-wasi")throw new Error(`invalid ${e} in wasm-clang runtime manifest`);return t}function xo(t){let e=Ie(t,"root.compiler.provenance");if(e.name!=="clang")throw new Error("invalid root.compiler.provenance.name in wasm-clang runtime manifest");return{name:"clang",version:ye(e.version,"root.compiler.provenance.version"),revision:ye(e.revision,"root.compiler.provenance.revision")}}function wo(t){let e=Ie(t,"root.compiler.sysroot.profiles");return{c:{asset:ye(Ie(e.c,"root.compiler.sysroot.profiles.c").asset,"root.compiler.sysroot.profiles.c.asset")},cppAddon:{asset:ye(Ie(e.cppAddon,"root.compiler.sysroot.profiles.cppAddon").asset,"root.compiler.sysroot.profiles.cppAddon.asset")}}}function Lo(t){let e=Ie(t,"root.compiler"),n=Ie(e.sysroot,"root.compiler.sysroot");return{memfs:{asset:ye(Ie(e.memfs,"root.compiler.memfs").asset,"root.compiler.memfs.asset"),argv0:ye(Ie(e.memfs,"root.compiler.memfs").argv0,"root.compiler.memfs.argv0")},clang:{asset:ye(Ie(e.clang,"root.compiler.clang").asset,"root.compiler.clang.asset"),argv0:ye(Ie(e.clang,"root.compiler.clang").argv0,"root.compiler.clang.argv0")},lld:{asset:ye(Ie(e.lld,"root.compiler.lld").asset,"root.compiler.lld.asset"),argv0:ye(Ie(e.lld,"root.compiler.lld").argv0,"root.compiler.lld.argv0")},sysroot:{asset:ye(n.asset,"root.compiler.sysroot.asset"),...n.printscanLongDouble===void 0?{}:{printscanLongDouble:{asset:ye(Ie(n.printscanLongDouble,"root.compiler.sysroot.printscanLongDouble").asset,"root.compiler.sysroot.printscanLongDouble.asset")}},...typeof n.runtimeRoot=="string"?{runtimeRoot:n.runtimeRoot}:{},...n.profiles===void 0?{}:{profiles:wo(n.profiles)}},...e.resourceDir!==void 0?{resourceDir:ye(e.resourceDir,"root.compiler.resourceDir")}:{},...e.compilerRuntimeLibDir!==void 0?{compilerRuntimeLibDir:ye(e.compilerRuntimeLibDir,"root.compiler.compilerRuntimeLibDir")}:{},...typeof e.defaultCppStandard=="string"?{defaultCppStandard:e.defaultCppStandard}:{},...typeof e.defaultCStandard=="string"?{defaultCStandard:e.defaultCStandard}:{},...e.provenance!==void 0?{provenance:xo(e.provenance)}:{}}}function Ro(t){let e=Ie(t,"root.clangd");return{js:ye(e.js,"root.clangd.js"),wasm:ye(e.wasm,"root.clangd.wasm")}}function Co(t,e){let n=Ie(t,e);if(Ie(n.execution,`${e}.execution`).kind!=="wasi-preview1")throw new Error(`invalid ${e}.execution.kind in wasm-clang runtime manifest`);if(n.artifactFormat!=="wasi-core-wasm")throw new Error(`invalid ${e}.artifactFormat in wasm-clang runtime manifest`);return{artifactFormat:"wasi-core-wasm",execution:{kind:"wasi-preview1"}}}function vo(t){let e=Ie(t,"root.targets");return{"wasm32-wasi":Co(e["wasm32-wasi"],"root.targets.wasm32-wasi")}}function Pi(t){let e=Ie(t,"root");if(e.manifestVersion!==1)throw new Error("invalid root.manifestVersion in wasm-clang runtime manifest");return{manifestVersion:1,version:ye(e.version,"root.version"),defaultTarget:bo(e.defaultTarget,"root.defaultTarget"),compiler:Lo(e.compiler),clangd:Ro(e.clangd),targets:vo(e.targets)}}async function Y_(t,e=fetch,n,_=sn){let i=$t(t,"wasm-clang runtime manifest URL");return Pi(await Ft(i,{fetchImpl:e,label:"wasm-clang runtime manifest",maxBytes:Math.min(_,sn),signal:n}))}function K_(t){return Vt(t)}var ae={};c_(ae,{ADVICE_DONTNEED:()=>Cd,ADVICE_NOREUSE:()=>vd,ADVICE_NORMAL:()=>xd,ADVICE_RANDOM:()=>Ld,ADVICE_SEQUENTIAL:()=>wd,ADVICE_WILLNEED:()=>Rd,CLOCKID_MONOTONIC:()=>dt,CLOCKID_PROCESS_CPUTIME_ID:()=>Uo,CLOCKID_REALTIME:()=>at,CLOCKID_THREAD_CPUTIME_ID:()=>Oo,Ciovec:()=>Bn,Dirent:()=>hn,ERRNO_2BIG:()=>Fo,ERRNO_ACCES:()=>Go,ERRNO_ADDRINUSE:()=>Ho,ERRNO_ADDRNOTAVAIL:()=>Bo,ERRNO_AFNOSUPPORT:()=>Xo,ERRNO_AGAIN:()=>ko,ERRNO_ALREADY:()=>Wo,ERRNO_BADF:()=>O,ERRNO_BADMSG:()=>$o,ERRNO_BUSY:()=>Vo,ERRNO_CANCELED:()=>zo,ERRNO_CHILD:()=>jo,ERRNO_CONNABORTED:()=>Yo,ERRNO_CONNREFUSED:()=>Ko,ERRNO_CONNRESET:()=>qo,ERRNO_DEADLK:()=>Jo,ERRNO_DESTADDRREQ:()=>Zo,ERRNO_DOM:()=>Qo,ERRNO_DQUOT:()=>ea,ERRNO_EXIST:()=>Xn,ERRNO_FAULT:()=>na,ERRNO_FBIG:()=>ta,ERRNO_HOSTUNREACH:()=>_a,ERRNO_IDRM:()=>ra,ERRNO_ILSEQ:()=>ia,ERRNO_INPROGRESS:()=>sa,ERRNO_INTR:()=>oa,ERRNO_INVAL:()=>$e,ERRNO_IO:()=>aa,ERRNO_ISCONN:()=>da,ERRNO_ISDIR:()=>jt,ERRNO_LOOP:()=>la,ERRNO_MFILE:()=>ca,ERRNO_MLINK:()=>fa,ERRNO_MSGSIZE:()=>ua,ERRNO_MULTIHOP:()=>pa,ERRNO_NAMETOOLONG:()=>q_,ERRNO_NETDOWN:()=>ha,ERRNO_NETRESET:()=>ma,ERRNO_NETUNREACH:()=>Ta,ERRNO_NFILE:()=>ga,ERRNO_NOBUFS:()=>Ia,ERRNO_NODEV:()=>Sa,ERRNO_NOENT:()=>Ze,ERRNO_NOEXEC:()=>Aa,ERRNO_NOLCK:()=>ya,ERRNO_NOLINK:()=>Ea,ERRNO_NOMEM:()=>Na,ERRNO_NOMSG:()=>ba,ERRNO_NOPROTOOPT:()=>xa,ERRNO_NOSPC:()=>wa,ERRNO_NOSYS:()=>J_,ERRNO_NOTCAPABLE:()=>Kt,ERRNO_NOTCONN:()=>La,ERRNO_NOTDIR:()=>He,ERRNO_NOTEMPTY:()=>Yt,ERRNO_NOTRECOVERABLE:()=>Ra,ERRNO_NOTSOCK:()=>Ca,ERRNO_NOTSUP:()=>J,ERRNO_NOTTY:()=>va,ERRNO_NXIO:()=>Ma,ERRNO_OVERFLOW:()=>Da,ERRNO_OWNERDEAD:()=>Pa,ERRNO_PERM:()=>kn,ERRNO_PIPE:()=>Ua,ERRNO_PROTO:()=>Oa,ERRNO_PROTONOSUPPORT:()=>Fa,ERRNO_PROTOTYPE:()=>Ga,ERRNO_RANGE:()=>Ha,ERRNO_ROFS:()=>Ba,ERRNO_SPIPE:()=>Xa,ERRNO_SRCH:()=>ka,ERRNO_STALE:()=>Wa,ERRNO_SUCCESS:()=>z,ERRNO_TIMEDOUT:()=>$a,ERRNO_TXTBSY:()=>Va,ERRNO_XDEV:()=>za,EVENTRWFLAGS_FD_READWRITE_HANGUP:()=>kd,EVENTTYPE_CLOCK:()=>Z_,EVENTTYPE_FD_READ:()=>Bd,EVENTTYPE_FD_WRITE:()=>Xd,Event:()=>st,FDFLAGS_APPEND:()=>Zt,FDFLAGS_DSYNC:()=>Md,FDFLAGS_NONBLOCK:()=>Dd,FDFLAGS_RSYNC:()=>Pd,FDFLAGS_SYNC:()=>Ud,FD_STDERR:()=>Po,FD_STDIN:()=>Mo,FD_STDOUT:()=>Do,FILETYPE_BLOCK_DEVICE:()=>yd,FILETYPE_CHARACTER_DEVICE:()=>Ui,FILETYPE_DIRECTORY:()=>Ce,FILETYPE_REGULAR_FILE:()=>gn,FILETYPE_SOCKET_DGRAM:()=>Ed,FILETYPE_SOCKET_STREAM:()=>Nd,FILETYPE_SYMBOLIC_LINK:()=>bd,FILETYPE_UNKNOWN:()=>Ad,FSTFLAGS_ATIM:()=>Od,FSTFLAGS_ATIM_NOW:()=>Fd,FSTFLAGS_MTIM:()=>Gd,FSTFLAGS_MTIM_NOW:()=>Hd,Fdstat:()=>mn,Filestat:()=>Tn,Iovec:()=>Hn,OFLAGS_CREAT:()=>ft,OFLAGS_DIRECTORY:()=>In,OFLAGS_EXCL:()=>Qt,OFLAGS_TRUNC:()=>ut,PREOPENTYPE_DIR:()=>Oi,Prestat:()=>ot,PrestatDir:()=>zt,RIFLAGS_RECV_PEEK:()=>Sl,RIFLAGS_RECV_WAITALL:()=>Al,RIGHTS_FD_ADVISE:()=>Qa,RIGHTS_FD_ALLOCATE:()=>ed,RIGHTS_FD_DATASYNC:()=>ja,RIGHTS_FD_FDSTAT_SET_FLAGS:()=>qa,RIGHTS_FD_FILESTAT_GET:()=>ud,RIGHTS_FD_FILESTAT_SET_SIZE:()=>pd,RIGHTS_FD_FILESTAT_SET_TIMES:()=>hd,RIGHTS_FD_READ:()=>Ya,RIGHTS_FD_READDIR:()=>sd,RIGHTS_FD_SEEK:()=>Ka,RIGHTS_FD_SYNC:()=>Ja,RIGHTS_FD_TELL:()=>Za,RIGHTS_FD_WRITE:()=>lt,RIGHTS_PATH_CREATE_DIRECTORY:()=>nd,RIGHTS_PATH_CREATE_FILE:()=>td,RIGHTS_PATH_FILESTAT_GET:()=>ld,RIGHTS_PATH_FILESTAT_SET_SIZE:()=>cd,RIGHTS_PATH_FILESTAT_SET_TIMES:()=>fd,RIGHTS_PATH_LINK_SOURCE:()=>_d,RIGHTS_PATH_LINK_TARGET:()=>rd,RIGHTS_PATH_OPEN:()=>id,RIGHTS_PATH_READLINK:()=>od,RIGHTS_PATH_REMOVE_DIRECTORY:()=>Td,RIGHTS_PATH_RENAME_SOURCE:()=>ad,RIGHTS_PATH_RENAME_TARGET:()=>dd,RIGHTS_PATH_SYMLINK:()=>md,RIGHTS_PATH_UNLINK_FILE:()=>gd,RIGHTS_POLL_FD_READWRITE:()=>Id,RIGHTS_SOCK_SHUTDOWN:()=>Sd,ROFLAGS_RECV_DATA_TRUNCATED:()=>yl,SDFLAGS_RD:()=>El,SDFLAGS_WR:()=>Nl,SIGNAL_ABRT:()=>Kd,SIGNAL_ALRM:()=>_l,SIGNAL_BUS:()=>qd,SIGNAL_CHLD:()=>il,SIGNAL_CONT:()=>sl,SIGNAL_FPE:()=>Jd,SIGNAL_HUP:()=>$d,SIGNAL_ILL:()=>jd,SIGNAL_INT:()=>Vd,SIGNAL_KILL:()=>Zd,SIGNAL_NONE:()=>Wd,SIGNAL_PIPE:()=>tl,SIGNAL_POLL:()=>Tl,SIGNAL_PROF:()=>hl,SIGNAL_PWR:()=>gl,SIGNAL_QUIT:()=>zd,SIGNAL_SEGV:()=>el,SIGNAL_STOP:()=>ol,SIGNAL_SYS:()=>Il,SIGNAL_TERM:()=>rl,SIGNAL_TRAP:()=>Yd,SIGNAL_TSTP:()=>al,SIGNAL_TTIN:()=>dl,SIGNAL_TTOU:()=>ll,SIGNAL_URG:()=>cl,SIGNAL_USR1:()=>Qd,SIGNAL_USR2:()=>nl,SIGNAL_VTALRM:()=>pl,SIGNAL_WINCH:()=>ml,SIGNAL_XCPU:()=>fl,SIGNAL_XFSZ:()=>ul,SUBCLOCKFLAGS_SUBSCRIPTION_CLOCK_ABSTIME:()=>Q_,Subscription:()=>it,WHENCE_CUR:()=>Jt,WHENCE_END:()=>ct,WHENCE_SET:()=>qt});var Mo=0,Do=1,Po=2,at=0,dt=1,Uo=2,Oo=3,z=0,Fo=1,Go=2,Ho=3,Bo=4,Xo=5,ko=6,Wo=7,O=8,$o=9,Vo=10,zo=11,jo=12,Yo=13,Ko=14,qo=15,Jo=16,Zo=17,Qo=18,ea=19,Xn=20,na=21,ta=22,_a=23,ra=24,ia=25,sa=26,oa=27,$e=28,aa=29,da=30,jt=31,la=32,ca=33,fa=34,ua=35,pa=36,q_=37,ha=38,ma=39,Ta=40,ga=41,Ia=42,Sa=43,Ze=44,Aa=45,ya=46,Ea=47,Na=48,ba=49,xa=50,wa=51,J_=52,La=53,He=54,Yt=55,Ra=56,Ca=57,J=58,va=59,Ma=60,Da=61,Pa=62,kn=63,Ua=64,Oa=65,Fa=66,Ga=67,Ha=68,Ba=69,Xa=70,ka=71,Wa=72,$a=73,Va=74,za=75,Kt=76,ja=1,Ya=2,Ka=4,qa=8,Ja=16,Za=32,lt=64,Qa=128,ed=256,nd=512,td=1024,_d=2048,rd=4096,id=8192,sd=16384,od=32768,ad=65536,dd=131072,ld=262144,cd=524288,fd=1048576,ud=2097152,pd=4194304,hd=8388608,md=16777216,Td=33554432,gd=67108864,Id=134217728,Sd=268435456,Hn=class t{static read_bytes(e,n){let _=new t;return _.buf=e.getUint32(n,!0),_.buf_len=e.getUint32(n+4,!0),_}static read_bytes_array(e,n,_){let i=[];for(let r=0;r<_;r++)i.push(t.read_bytes(e,n+8*r));return i}},Bn=class t{static read_bytes(e,n){let _=new t;return _.buf=e.getUint32(n,!0),_.buf_len=e.getUint32(n+4,!0),_}static read_bytes_array(e,n,_){let i=[];for(let r=0;r<_;r++)i.push(t.read_bytes(e,n+8*r));return i}},qt=0,Jt=1,ct=2,Ad=0,yd=1,Ui=2,Ce=3,gn=4,Ed=5,Nd=6,bd=7,hn=class{head_length(){return 24}name_length(){return this.dir_name.byteLength}write_head_bytes(e,n){e.setBigUint64(n,this.d_next,!0),e.setBigUint64(n+8,this.d_ino,!0),e.setUint32(n+16,this.dir_name.length,!0),e.setUint8(n+20,this.d_type)}write_name_bytes(e,n,_){e.set(this.dir_name.slice(0,Math.min(this.dir_name.byteLength,_)),n)}constructor(e,n,_,i){let r=new TextEncoder().encode(_);this.d_next=e,this.d_ino=n,this.d_namlen=r.byteLength,this.d_type=i,this.dir_name=r}},xd=0,wd=1,Ld=2,Rd=3,Cd=4,vd=5,Zt=1,Md=2,Dd=4,Pd=8,Ud=16,mn=class{write_bytes(e,n){e.setUint8(n,this.fs_filetype),e.setUint16(n+2,this.fs_flags,!0),e.setBigUint64(n+8,this.fs_rights_base,!0),e.setBigUint64(n+16,this.fs_rights_inherited,!0)}constructor(e,n){this.fs_rights_base=0n,this.fs_rights_inherited=0n,this.fs_filetype=e,this.fs_flags=n}},Od=1,Fd=2,Gd=4,Hd=8,ft=1,In=2,Qt=4,ut=8,Tn=class{write_bytes(e,n){e.setBigUint64(n,this.dev,!0),e.setBigUint64(n+8,this.ino,!0),e.setUint8(n+16,this.filetype),e.setBigUint64(n+24,this.nlink,!0),e.setBigUint64(n+32,this.size,!0),e.setBigUint64(n+38,this.atim,!0),e.setBigUint64(n+46,this.mtim,!0),e.setBigUint64(n+52,this.ctim,!0)}constructor(e,n,_){this.dev=0n,this.nlink=0n,this.atim=0n,this.mtim=0n,this.ctim=0n,this.ino=e,this.filetype=n,this.size=_}},Z_=0,Bd=1,Xd=2,kd=1,Q_=1,it=class t{static read_bytes(e,n){return new t(e.getBigUint64(n,!0),e.getUint8(n+8),e.getUint32(n+16,!0),e.getBigUint64(n+24,!0),e.getUint16(n+36,!0))}constructor(e,n,_,i,r){this.userdata=e,this.eventtype=n,this.clockid=_,this.timeout=i,this.flags=r}},st=class{write_bytes(e,n){e.setBigUint64(n,this.userdata,!0),e.setUint16(n+8,this.error,!0),e.setUint8(n+10,this.eventtype)}constructor(e,n,_){this.userdata=e,this.error=n,this.eventtype=_}},Wd=0,$d=1,Vd=2,zd=3,jd=4,Yd=5,Kd=6,qd=7,Jd=8,Zd=9,Qd=10,el=11,nl=12,tl=13,_l=14,rl=15,il=16,sl=17,ol=18,al=19,dl=20,ll=21,cl=22,fl=23,ul=24,pl=25,hl=26,ml=27,Tl=28,gl=29,Il=30,Sl=1,Al=2,yl=1,El=1,Nl=2,Oi=0,zt=class{write_bytes(e,n){e.setUint32(n,this.pr_name.byteLength,!0)}constructor(e){this.pr_name=new TextEncoder().encode(e)}},ot=class t{static dir(e){let n=new t;return n.tag=Oi,n.inner=new zt(e),n}write_bytes(e,n){e.setUint32(n,this.tag,!0),this.inner.write_bytes(e,n+4)}};var bl=class{enable(e){this.log=xl(e===void 0?!0:e,this.prefix)}get enabled(){return this.isEnabled}constructor(e){this.isEnabled=e,this.prefix="wasi:",this.enable(e)}};function xl(t,e){return t?console.log.bind(console,"%c%s","color: #265BA0",e):()=>{}}var Se=new bl(!1);var pt=class extends Error{constructor(e){super("exit with exit code "+e),this.code=e}},er=class{start(e){this.inst=e;try{return e.exports._start(),0}catch(n){if(n instanceof pt)return n.code;throw n}}initialize(e){this.inst=e,e.exports._initialize&&e.exports._initialize()}constructor(e,n,_,i={}){this.args=[],this.env=[],this.fds=[],Se.enable(i.debug),this.args=e,this.env=n,this.fds=_;let r=this;this.wasiImport={args_sizes_get(s,o){let a=new DataView(r.inst.exports.memory.buffer);a.setUint32(s,r.args.length,!0);let d=0;for(let l of r.args)d+=l.length+1;return a.setUint32(o,d,!0),Se.log(a.getUint32(s,!0),a.getUint32(o,!0)),0},args_get(s,o){let a=new DataView(r.inst.exports.memory.buffer),d=new Uint8Array(r.inst.exports.memory.buffer),l=o;for(let c=0;c<r.args.length;c++){a.setUint32(s,o,!0),s+=4;let p=new TextEncoder().encode(r.args[c]);d.set(p,o),a.setUint8(o+p.length,0),o+=p.length+1}return Se.enabled&&Se.log(new TextDecoder("utf-8").decode(d.slice(l,o))),0},environ_sizes_get(s,o){let a=new DataView(r.inst.exports.memory.buffer);a.setUint32(s,r.env.length,!0);let d=0;for(let l of r.env)d+=new TextEncoder().encode(l).length+1;return a.setUint32(o,d,!0),Se.log(a.getUint32(s,!0),a.getUint32(o,!0)),0},environ_get(s,o){let a=new DataView(r.inst.exports.memory.buffer),d=new Uint8Array(r.inst.exports.memory.buffer),l=o;for(let c=0;c<r.env.length;c++){a.setUint32(s,o,!0),s+=4;let p=new TextEncoder().encode(r.env[c]);d.set(p,o),a.setUint8(o+p.length,0),o+=p.length+1}return Se.enabled&&Se.log(new TextDecoder("utf-8").decode(d.slice(l,o))),0},clock_res_get(s,o){let a;switch(s){case 1:{a=5000n;break}case 0:{a=1000000n;break}default:return 52}return new DataView(r.inst.exports.memory.buffer).setBigUint64(o,a,!0),0},clock_time_get(s,o,a){let d=new DataView(r.inst.exports.memory.buffer);if(s===0)d.setBigUint64(a,BigInt(new Date().getTime())*1000000n,!0);else if(s==1){let l;try{l=BigInt(Math.round(performance.now()*1e6))}catch{l=0n}d.setBigUint64(a,l,!0)}else d.setBigUint64(a,0n,!0);return 0},fd_advise(s,o,a,d){return r.fds[s]!=null?0:8},fd_allocate(s,o,a){return r.fds[s]!=null?r.fds[s].fd_allocate(o,a):8},fd_close(s){if(r.fds[s]!=null){let o=r.fds[s].fd_close();return r.fds[s]=void 0,o}else return 8},fd_datasync(s){return r.fds[s]!=null?r.fds[s].fd_sync():8},fd_fdstat_get(s,o){if(r.fds[s]!=null){let{ret:a,fdstat:d}=r.fds[s].fd_fdstat_get();return d?.write_bytes(new DataView(r.inst.exports.memory.buffer),o),a}else return 8},fd_fdstat_set_flags(s,o){return r.fds[s]!=null?r.fds[s].fd_fdstat_set_flags(o):8},fd_fdstat_set_rights(s,o,a){return r.fds[s]!=null?r.fds[s].fd_fdstat_set_rights(o,a):8},fd_filestat_get(s,o){if(r.fds[s]!=null){let{ret:a,filestat:d}=r.fds[s].fd_filestat_get();return d?.write_bytes(new DataView(r.inst.exports.memory.buffer),o),a}else return 8},fd_filestat_set_size(s,o){return r.fds[s]!=null?r.fds[s].fd_filestat_set_size(o):8},fd_filestat_set_times(s,o,a,d){return r.fds[s]!=null?r.fds[s].fd_filestat_set_times(o,a,d):8},fd_pread(s,o,a,d,l){let c=new DataView(r.inst.exports.memory.buffer),p=new Uint8Array(r.inst.exports.memory.buffer);if(r.fds[s]!=null){let f=Hn.read_bytes_array(c,o,a),I=0;for(let g of f){let{ret:h,data:A}=r.fds[s].fd_pread(g.buf_len,d);if(h!=0)return c.setUint32(l,I,!0),h;if(p.set(A,g.buf),I+=A.length,d+=BigInt(A.length),A.length!=g.buf_len)break}return c.setUint32(l,I,!0),0}else return 8},fd_prestat_get(s,o){let a=new DataView(r.inst.exports.memory.buffer);if(r.fds[s]!=null){let{ret:d,prestat:l}=r.fds[s].fd_prestat_get();return l?.write_bytes(a,o),d}else return 8},fd_prestat_dir_name(s,o,a){if(r.fds[s]!=null){let{ret:d,prestat:l}=r.fds[s].fd_prestat_get();if(l==null)return d;let c=l.inner.pr_name;return new Uint8Array(r.inst.exports.memory.buffer).set(c.slice(0,a),o),c.byteLength>a?37:0}else return 8},fd_pwrite(s,o,a,d,l){let c=new DataView(r.inst.exports.memory.buffer),p=new Uint8Array(r.inst.exports.memory.buffer);if(r.fds[s]!=null){let f=Bn.read_bytes_array(c,o,a),I=0;for(let g of f){let h=p.slice(g.buf,g.buf+g.buf_len),{ret:A,nwritten:b}=r.fds[s].fd_pwrite(h,d);if(A!=0)return c.setUint32(l,I,!0),A;if(I+=b,d+=BigInt(b),b!=h.byteLength)break}return c.setUint32(l,I,!0),0}else return 8},fd_read(s,o,a,d){let l=new DataView(r.inst.exports.memory.buffer),c=new Uint8Array(r.inst.exports.memory.buffer);if(r.fds[s]!=null){let p=Hn.read_bytes_array(l,o,a),f=0;for(let I of p){let{ret:g,data:h}=r.fds[s].fd_read(I.buf_len);if(g!=0)return l.setUint32(d,f,!0),g;if(c.set(h,I.buf),f+=h.length,h.length!=I.buf_len)break}return l.setUint32(d,f,!0),0}else return 8},fd_readdir(s,o,a,d,l){let c=new DataView(r.inst.exports.memory.buffer),p=new Uint8Array(r.inst.exports.memory.buffer);if(r.fds[s]!=null){let f=0;for(;;){let{ret:I,dirent:g}=r.fds[s].fd_readdir_single(d);if(I!=0)return c.setUint32(l,f,!0),I;if(g==null)break;if(a-f<g.head_length()){f=a;break}let h=new ArrayBuffer(g.head_length());if(g.write_head_bytes(new DataView(h),0),p.set(new Uint8Array(h).slice(0,Math.min(h.byteLength,a-f)),o),o+=g.head_length(),f+=g.head_length(),a-f<g.name_length()){f=a;break}g.write_name_bytes(p,o,a-f),o+=g.name_length(),f+=g.name_length(),d=g.d_next}return c.setUint32(l,f,!0),0}else return 8},fd_renumber(s,o){if(r.fds[s]!=null&&r.fds[o]!=null){let a=r.fds[o].fd_close();return a!=0?a:(r.fds[o]=r.fds[s],r.fds[s]=void 0,0)}else return 8},fd_seek(s,o,a,d){let l=new DataView(r.inst.exports.memory.buffer);if(r.fds[s]!=null){let{ret:c,offset:p}=r.fds[s].fd_seek(o,a);return l.setBigInt64(d,p,!0),c}else return 8},fd_sync(s){return r.fds[s]!=null?r.fds[s].fd_sync():8},fd_tell(s,o){let a=new DataView(r.inst.exports.memory.buffer);if(r.fds[s]!=null){let{ret:d,offset:l}=r.fds[s].fd_tell();return a.setBigUint64(o,l,!0),d}else return 8},fd_write(s,o,a,d){let l=new DataView(r.inst.exports.memory.buffer),c=new Uint8Array(r.inst.exports.memory.buffer);if(r.fds[s]!=null){let p=Bn.read_bytes_array(l,o,a),f=0;for(let I of p){let g=c.slice(I.buf,I.buf+I.buf_len),{ret:h,nwritten:A}=r.fds[s].fd_write(g);if(h!=0)return l.setUint32(d,f,!0),h;if(f+=A,A!=g.byteLength)break}return l.setUint32(d,f,!0),0}else return 8},path_create_directory(s,o,a){let d=new Uint8Array(r.inst.exports.memory.buffer);if(r.fds[s]!=null){let l=new TextDecoder("utf-8").decode(d.slice(o,o+a));return r.fds[s].path_create_directory(l)}else return 8},path_filestat_get(s,o,a,d,l){let c=new DataView(r.inst.exports.memory.buffer),p=new Uint8Array(r.inst.exports.memory.buffer);if(r.fds[s]!=null){let f=new TextDecoder("utf-8").decode(p.slice(a,a+d)),{ret:I,filestat:g}=r.fds[s].path_filestat_get(o,f);return g?.write_bytes(c,l),I}else return 8},path_filestat_set_times(s,o,a,d,l,c,p){let f=new Uint8Array(r.inst.exports.memory.buffer);if(r.fds[s]!=null){let I=new TextDecoder("utf-8").decode(f.slice(a,a+d));return r.fds[s].path_filestat_set_times(o,I,l,c,p)}else return 8},path_link(s,o,a,d,l,c,p){let f=new Uint8Array(r.inst.exports.memory.buffer);if(r.fds[s]!=null&&r.fds[l]!=null){let I=new TextDecoder("utf-8").decode(f.slice(a,a+d)),g=new TextDecoder("utf-8").decode(f.slice(c,c+p)),{ret:h,inode_obj:A}=r.fds[s].path_lookup(I,o);return A==null?h:r.fds[l].path_link(g,A,!1)}else return 8},path_open(s,o,a,d,l,c,p,f,I){let g=new DataView(r.inst.exports.memory.buffer),h=new Uint8Array(r.inst.exports.memory.buffer);if(r.fds[s]!=null){let A=new TextDecoder("utf-8").decode(h.slice(a,a+d));Se.log(A);let{ret:b,fd_obj:y}=r.fds[s].path_open(o,A,l,c,p,f);if(b!=0)return b;r.fds.push(y);let u=r.fds.length-1;return g.setUint32(I,u,!0),0}else return 8},path_readlink(s,o,a,d,l,c){let p=new DataView(r.inst.exports.memory.buffer),f=new Uint8Array(r.inst.exports.memory.buffer);if(r.fds[s]!=null){let I=new TextDecoder("utf-8").decode(f.slice(o,o+a));Se.log(I);let{ret:g,data:h}=r.fds[s].path_readlink(I);if(h!=null){let A=new TextEncoder().encode(h);if(A.length>l)return p.setUint32(c,0,!0),8;f.set(A,d),p.setUint32(c,A.length,!0)}return g}else return 8},path_remove_directory(s,o,a){let d=new Uint8Array(r.inst.exports.memory.buffer);if(r.fds[s]!=null){let l=new TextDecoder("utf-8").decode(d.slice(o,o+a));return r.fds[s].path_remove_directory(l)}else return 8},path_rename(s,o,a,d,l,c){let p=new Uint8Array(r.inst.exports.memory.buffer);if(r.fds[s]!=null&&r.fds[d]!=null){let f=new TextDecoder("utf-8").decode(p.slice(o,o+a)),I=new TextDecoder("utf-8").decode(p.slice(l,l+c)),{ret:g,inode_obj:h}=r.fds[s].path_unlink(f);if(h==null)return g;if(g=r.fds[d].path_link(I,h,!0),g!=0&&r.fds[s].path_link(f,h,!0)!=0)throw"path_link should always return success when relinking an inode back to the original place";return g}else return 8},path_symlink(s,o,a,d,l){let c=new Uint8Array(r.inst.exports.memory.buffer);if(r.fds[a]!=null){let p=new TextDecoder("utf-8").decode(c.slice(s,s+o)),f=new TextDecoder("utf-8").decode(c.slice(d,d+l));return 58}else return 8},path_unlink_file(s,o,a){let d=new Uint8Array(r.inst.exports.memory.buffer);if(r.fds[s]!=null){let l=new TextDecoder("utf-8").decode(d.slice(o,o+a));return r.fds[s].path_unlink_file(l)}else return 8},poll_oneoff(s,o,a){if(a===0)return 28;if(a>1)return Se.log("poll_oneoff: only a single subscription is supported"),58;let d=new DataView(r.inst.exports.memory.buffer),l=it.read_bytes(d,s),c=l.eventtype,p=l.clockid,f=l.timeout;if(c!==Z_)return Se.log("poll_oneoff: only clock subscriptions are supported"),58;let I;if(p===1)I=()=>BigInt(Math.round(performance.now()*1e6));else if(p===0)I=()=>BigInt(new Date().getTime())*1000000n;else return 28;let g=(l.flags&Q_)!==0?f:I()+f;for(;g>I(););return new st(l.userdata,0,c).write_bytes(d,o),0},proc_exit(s){throw new pt(s)},proc_raise(s){throw"raised signal "+s},sched_yield(){},random_get(s,o){let a=new Uint8Array(r.inst.exports.memory.buffer).subarray(s,s+o);if("crypto"in globalThis&&(typeof SharedArrayBuffer>"u"||!(r.inst.exports.memory.buffer instanceof SharedArrayBuffer)))for(let d=0;d<o;d+=65536)crypto.getRandomValues(a.subarray(d,d+65536));else for(let d=0;d<o;d++)a[d]=Math.random()*256|0},sock_recv(s,o,a){throw"sockets not supported"},sock_send(s,o,a){throw"sockets not supported"},sock_shutdown(s,o){throw"sockets not supported"},sock_accept(s,o){throw"sockets not supported"}}}};var Ve=class{fd_allocate(e,n){return 58}fd_close(){return 0}fd_fdstat_get(){return{ret:58,fdstat:null}}fd_fdstat_set_flags(e){return 58}fd_fdstat_set_rights(e,n){return 58}fd_filestat_get(){return{ret:58,filestat:null}}fd_filestat_set_size(e){return 58}fd_filestat_set_times(e,n,_){return 58}fd_pread(e,n){return{ret:58,data:new Uint8Array}}fd_prestat_get(){return{ret:58,prestat:null}}fd_pwrite(e,n){return{ret:58,nwritten:0}}fd_read(e){return{ret:58,data:new Uint8Array}}fd_readdir_single(e){return{ret:58,dirent:null}}fd_seek(e,n){return{ret:58,offset:0n}}fd_sync(){return 0}fd_tell(){return{ret:58,offset:0n}}fd_write(e){return{ret:58,nwritten:0}}path_create_directory(e){return 58}path_filestat_get(e,n){return{ret:58,filestat:null}}path_filestat_set_times(e,n,_,i,r){return 58}path_link(e,n,_){return 58}path_unlink(e){return{ret:58,inode_obj:null}}path_lookup(e,n){return{ret:58,inode_obj:null}}path_open(e,n,_,i,r,s){return{ret:54,fd_obj:null}}path_readlink(e){return{ret:58,data:null}}path_remove_directory(e){return 58}path_rename(e,n,_){return 58}path_unlink_file(e){return 58}},Fe=class t{static issue_ino(){return t.next_ino++}static root_ino(){return 0n}constructor(){this.ino=t.issue_ino()}};Fe.next_ino=1n;var e_=class extends Ve{fd_allocate(e,n){if(!(this.file.size>e+n)){let _=new Uint8Array(Number(e+n));_.set(this.file.data,0),this.file.data=_}return 0}fd_fdstat_get(){return{ret:0,fdstat:new mn(gn,0)}}fd_filestat_set_size(e){if(this.file.size>e)this.file.data=new Uint8Array(this.file.data.buffer.slice(0,Number(e)));else{let n=new Uint8Array(Number(e));n.set(this.file.data,0),this.file.data=n}return 0}fd_read(e){let n=this.file.data.slice(Number(this.file_pos),Number(this.file_pos+BigInt(e)));return this.file_pos+=BigInt(n.length),{ret:0,data:n}}fd_pread(e,n){return{ret:0,data:this.file.data.slice(Number(n),Number(n+BigInt(e)))}}fd_seek(e,n){let _;switch(n){case qt:_=e;break;case Jt:_=this.file_pos+e;break;case ct:_=BigInt(this.file.data.byteLength)+e;break;default:return{ret:28,offset:0n}}return _<0?{ret:28,offset:0n}:(this.file_pos=_,{ret:0,offset:this.file_pos})}fd_tell(){return{ret:0,offset:this.file_pos}}fd_write(e){if(this.file.readonly)return{ret:8,nwritten:0};if(this.file_pos+BigInt(e.byteLength)>this.file.size){let n=this.file.data;this.file.data=new Uint8Array(Number(this.file_pos+BigInt(e.byteLength))),this.file.data.set(n)}return this.file.data.set(e,Number(this.file_pos)),this.file_pos+=BigInt(e.byteLength),{ret:0,nwritten:e.byteLength}}fd_pwrite(e,n){if(this.file.readonly)return{ret:8,nwritten:0};if(n+BigInt(e.byteLength)>this.file.size){let _=this.file.data;this.file.data=new Uint8Array(Number(n+BigInt(e.byteLength))),this.file.data.set(_)}return this.file.data.set(e,Number(n)),{ret:0,nwritten:e.byteLength}}fd_filestat_get(){return{ret:0,filestat:this.file.stat()}}constructor(e){super(),this.file_pos=0n,this.file=e}},ht=class extends Ve{fd_seek(e,n){return{ret:8,offset:0n}}fd_tell(){return{ret:8,offset:0n}}fd_allocate(e,n){return 8}fd_fdstat_get(){return{ret:0,fdstat:new mn(Ce,0)}}fd_readdir_single(e){if(Se.enabled&&(Se.log("readdir_single",e),Se.log(e,this.dir.contents.keys())),e==0n)return{ret:0,dirent:new hn(1n,this.dir.ino,".",Ce)};if(e==1n)return{ret:0,dirent:new hn(2n,this.dir.parent_ino(),"..",Ce)};if(e>=BigInt(this.dir.contents.size)+2n)return{ret:0,dirent:null};let[n,_]=Array.from(this.dir.contents.entries())[Number(e-2n)];return{ret:0,dirent:new hn(e+1n,_.ino,n,_.stat().filetype)}}path_filestat_get(e,n){let{ret:_,path:i}=dn.from(n);if(i==null)return{ret:_,filestat:null};let{ret:r,entry:s}=this.dir.get_entry_for_path(i);return s==null?{ret:r,filestat:null}:{ret:0,filestat:s.stat()}}path_lookup(e,n){let{ret:_,path:i}=dn.from(e);if(i==null)return{ret:_,inode_obj:null};let{ret:r,entry:s}=this.dir.get_entry_for_path(i);return s==null?{ret:r,inode_obj:null}:{ret:0,inode_obj:s}}path_open(e,n,_,i,r,s){let{ret:o,path:a}=dn.from(n);if(a==null)return{ret:o,fd_obj:null};let{ret:d,entry:l}=this.dir.get_entry_for_path(a);if(l==null){if(d!=44)return{ret:d,fd_obj:null};if((_&ft)==ft){let{ret:c,entry:p}=this.dir.create_entry_for_path(n,(_&In)==In);if(p==null)return{ret:c,fd_obj:null};l=p}else return{ret:44,fd_obj:null}}else if((_&Qt)==Qt)return{ret:20,fd_obj:null};return(_&In)==In&&l.stat().filetype!==Ce?{ret:54,fd_obj:null}:l.path_open(_,i,s)}path_create_directory(e){return this.path_open(0,e,ft|In,0n,0n,0).ret}path_link(e,n,_){let{ret:i,path:r}=dn.from(e);if(r==null)return i;if(r.is_dir)return 44;let{ret:s,parent_entry:o,filename:a,entry:d}=this.dir.get_parent_dir_and_entry_for_path(r,!0);if(o==null||a==null)return s;if(d!=null){let l=n.stat().filetype==Ce,c=d.stat().filetype==Ce;if(l&&c)if(_&&d instanceof ze){if(d.contents.size!=0)return 55}else return 20;else{if(l&&!c)return 54;if(!l&&c)return 31;if(!(n.stat().filetype==gn&&d.stat().filetype==gn))return 20}}return!_&&n.stat().filetype==Ce?63:(o.contents.set(a,n),0)}path_unlink(e){let{ret:n,path:_}=dn.from(e);if(_==null)return{ret:n,inode_obj:null};let{ret:i,parent_entry:r,filename:s,entry:o}=this.dir.get_parent_dir_and_entry_for_path(_,!0);return r==null||s==null?{ret:i,inode_obj:null}:o==null?{ret:44,inode_obj:null}:(r.contents.delete(s),{ret:0,inode_obj:o})}path_unlink_file(e){let{ret:n,path:_}=dn.from(e);if(_==null)return n;let{ret:i,parent_entry:r,filename:s,entry:o}=this.dir.get_parent_dir_and_entry_for_path(_,!1);return r==null||s==null||o==null?i:o.stat().filetype===Ce?31:(r.contents.delete(s),0)}path_remove_directory(e){let{ret:n,path:_}=dn.from(e);if(_==null)return n;let{ret:i,parent_entry:r,filename:s,entry:o}=this.dir.get_parent_dir_and_entry_for_path(_,!1);return r==null||s==null||o==null?i:!(o instanceof ze)||o.stat().filetype!==Ce?54:o.contents.size!==0?55:r.contents.delete(s)?0:44}fd_filestat_get(){return{ret:0,filestat:this.dir.stat()}}fd_filestat_set_size(e){return 8}fd_read(e){return{ret:8,data:new Uint8Array}}fd_pread(e,n){return{ret:8,data:new Uint8Array}}fd_write(e){return{ret:8,nwritten:0}}fd_pwrite(e,n){return{ret:8,nwritten:0}}constructor(e){super(),this.dir=e}},Wn=class extends ht{fd_prestat_get(){return{ret:0,prestat:ot.dir(this.prestat_name)}}constructor(e,n){super(new ze(n)),this.prestat_name=e}},$n=class extends Fe{path_open(e,n,_){if(this.readonly&&(n&BigInt(64))==BigInt(64))return{ret:63,fd_obj:null};if((e&ut)==ut){if(this.readonly)return{ret:63,fd_obj:null};this.data=new Uint8Array([])}let i=new e_(this);return _&Zt&&i.fd_seek(0n,ct),{ret:0,fd_obj:i}}get size(){return BigInt(this.data.byteLength)}stat(){return new Tn(this.ino,gn,this.size)}constructor(e,n){super(),this.data=new Uint8Array(e),this.readonly=!!n?.readonly}},dn=class Fi{static from(e){let n=new Fi;if(n.is_dir=e.endsWith("/"),e.startsWith("/"))return{ret:76,path:null};if(e.includes("\0"))return{ret:28,path:null};for(let _ of e.split("/"))if(!(_===""||_===".")){if(_===".."){if(n.parts.pop()==null)return{ret:76,path:null};continue}n.parts.push(_)}return{ret:0,path:n}}to_path_string(){let e=this.parts.join("/");return this.is_dir&&(e+="/"),e}constructor(){this.parts=[],this.is_dir=!1}},ze=class t extends Fe{parent_ino(){return this.parent==null?Fe.root_ino():this.parent.ino}path_open(e,n,_){return{ret:0,fd_obj:new ht(this)}}stat(){return new Tn(this.ino,Ce,0n)}get_entry_for_path(e){let n=this;for(let _ of e.parts){if(!(n instanceof t))return{ret:54,entry:null};let i=n.contents.get(_);if(i!==void 0)n=i;else return Se.log(_),{ret:44,entry:null}}return e.is_dir&&n.stat().filetype!=Ce?{ret:54,entry:null}:{ret:0,entry:n}}get_parent_dir_and_entry_for_path(e,n){let _=e.parts.pop();if(_===void 0)return{ret:28,parent_entry:null,filename:null,entry:null};let{ret:i,entry:r}=this.get_entry_for_path(e);if(r==null)return{ret:i,parent_entry:null,filename:null,entry:null};if(!(r instanceof t))return{ret:54,parent_entry:null,filename:null,entry:null};let s=r.contents.get(_);return s===void 0?n?{ret:0,parent_entry:r,filename:_,entry:null}:{ret:44,parent_entry:null,filename:null,entry:null}:e.is_dir&&s.stat().filetype!=Ce?{ret:54,parent_entry:null,filename:null,entry:null}:{ret:0,parent_entry:r,filename:_,entry:s}}create_entry_for_path(e,n){let{ret:_,path:i}=dn.from(e);if(i==null)return{ret:_,entry:null};let{ret:r,parent_entry:s,filename:o,entry:a}=this.get_parent_dir_and_entry_for_path(i,!0);if(s==null||o==null)return{ret:r,entry:null};if(a!=null)return{ret:20,entry:null};Se.log("create",i);let d;return n?d=new t(new Map):d=new $n(new ArrayBuffer(0)),s.contents.set(o,d),a=d,{ret:0,entry:a}}constructor(e){super(),this.parent=null,e instanceof Array?this.contents=new Map(e):this.contents=e;for(let n of this.contents.values())n instanceof t&&(n.parent=this)}};function wl(t){let e=t.replace(/\\/g,"/"),n=e.startsWith("/")?e:`/${e}`,_=[];for(let i of n.split("/"))if(!(!i||i===".")){if(i==="..")throw new Error(`wasm-clang does not allow guest path traversal: ${t}`);_.push(i)}return`/${_.join("/")}`}function Gi(t){return typeof t=="string"?new TextEncoder().encode(t):t instanceof Uint8Array?new Uint8Array(t):new Uint8Array(t)}var n_=class extends Ve{ino=Fe.issue_ino();decoder=new TextDecoder;chunks=[];output;constructor(e){super(),this.output=e}fd_filestat_get(){return{ret:ae.ERRNO_SUCCESS,filestat:new ae.Filestat(this.ino,ae.FILETYPE_CHARACTER_DEVICE,0n)}}fd_fdstat_get(){let e=new ae.Fdstat(ae.FILETYPE_CHARACTER_DEVICE,0);return e.fs_rights_base=BigInt(ae.RIGHTS_FD_WRITE),{ret:ae.ERRNO_SUCCESS,fdstat:e}}fd_write(e){let n=this.decoder.decode(e,{stream:!0});return this.chunks.push(n),this.output?.(n),{ret:ae.ERRNO_SUCCESS,nwritten:e.byteLength}}getText(){let e=this.decoder.decode();return e&&(this.chunks.push(e),this.output?.(e)),this.chunks.join("")}},nr=class{currentChunk=new Uint8Array(0);currentOffset=0;readInput;constructor(e){this.readInput=e}read(e){for(;this.currentOffset>=this.currentChunk.length;){let _=this.readInput?.();if(_==null)return new Uint8Array(0);this.currentChunk=Gi(_),this.currentOffset=0,this.currentChunk.byteLength}let n=this.currentChunk.slice(this.currentOffset,this.currentOffset+e);return this.currentOffset+=n.byteLength,n}},tr=class extends Ve{ino=Fe.issue_ino();source;constructor(e){super(),this.source=e}fd_filestat_get(){return{ret:ae.ERRNO_SUCCESS,filestat:new ae.Filestat(this.ino,ae.FILETYPE_CHARACTER_DEVICE,0n)}}fd_fdstat_get(){let e=new ae.Fdstat(ae.FILETYPE_CHARACTER_DEVICE,0);return e.fs_rights_base=BigInt(ae.RIGHTS_FD_READ),{ret:ae.ERRNO_SUCCESS,fdstat:e}}fd_read(e){return{ret:ae.ERRNO_SUCCESS,data:this.source.read(e)}}};function Hi(t={}){let e=new ze(new Map);for(let s of t.files||[]){let a=wl(s.path).slice(1).split("/"),d=e;for(let l of a.slice(0,-1)){let c=d.contents.get(l);if(c instanceof ze){d=c;continue}let p=new ze(new Map);d.contents.set(l,p),d=p}d.contents.set(a.at(-1),new $n(Gi(s.contents)))}let n=new nr(t.stdin),_=new n_(t.stdout),i=new n_(t.stderr),r=new Map([["PWD","/"]]);for(let[s,o]of Object.entries(t.env||{}))r.set(s,o);return{args:[t.programName||"main.wasm",...t.args||[]],envEntries:Array.from(r.entries()).map(([s,o])=>`${s}=${o}`),rootDirectory:e,stdout:_,stderr:i,fds:[new tr(n),_,i,new Wn("/tmp",new Map),new Wn("/",e.contents)]}}async function _r(t,e={}){if(t.target!=="wasm32-wasi"||t.format!=="wasi-core-wasm")throw new Error("wasm-clang currently executes only wasm32-wasi preview1 core wasm artifacts.");let n=Hi({...e,programName:e.programName||t.fileName}),_=new er(n.args,n.envEntries,n.fds,{debug:!1}),i=t.bytes instanceof Uint8Array?new Uint8Array(t.bytes):new Uint8Array(t.bytes),r=t.wasm||await WebAssembly.compile(i),s={current:null},o=typeof e.extraImports=="function"?await e.extraImports({host:n,module:r,instance:s}):e.extraImports||{},a=await WebAssembly.instantiate(r,{...o,wasi_unstable:_.wasiImport,wasi_snapshot_preview1:_.wasiImport});return s.current=a,{exitCode:_.start(a),stdout:n.stdout.getText(),stderr:n.stderr.getText()}}var Bi=Object.freeze({"cobol/runtime-manifest.v1.json":Object.freeze({bytes:573,sha256:"83dd3ba5d09b9d8fdb7b0200793f664e7b7dc5d62aa18d38730fa82a341c7c67"}),"cobol/cobc.wasm.gz":Object.freeze({bytes:600296,sha256:"92bfb399d5e5a7add7a11f4e1eca786312f4cd1010c06001f85f11d5f2bca12b"}),"cobol/rootfs.tar.gz":Object.freeze({bytes:530360,sha256:"13bdf0fa99247694405352576ea9b3251640ff51a92a44de84623756e8983578"}),"cobol/c-sysroot.tar.gz":Object.freeze({bytes:1216964,sha256:"0bba0b9290add72f2ee5fafed18cd464ddb126dc8eb1729b97f708b80ffb868e"}),"clang/runtime-manifest.v1.json":Object.freeze({bytes:876,sha256:"1420808d0391ff2d8a2fdf2a9f6bbce8f728e06b1ed1651029ed80b226101444"}),"clang/bin/memfs.wasm.gz":Object.freeze({bytes:38702,sha256:"cbca9e27ceafbca840603a39fc71e4f83bfb085237c8eab84fd0401ac76806c7"}),"clang/bin/clang.wasm.gz":Object.freeze({bytes:15721977,sha256:"b1174438d9a67b7ff11e623541b9a0572c024a9e798084b9b021dd9da2da0874"}),"clang/bin/lld.wasm.gz":Object.freeze({bytes:7837837,sha256:"f842a9b5df3c6d326f0260bfd313c11c2e22bc8b8ae0387deede9a4af55779cd"}),"clang/bin/sysroot.tar.gz":Object.freeze({bytes:5401380,sha256:"195e8083bace1baf86014f134a210db354cd77825988eaac7d262161cf496c4f"})});var t_="https://cobol-wasm-assets.invalid/";function ki(t,e){if(t.baseUrl!=null&&t.baseUrl!=="")return Ll(t);if(!e)throw new Error("baseUrl is required here. The assets that ship in this package can only be read where there is a filesystem, and a browser cannot reach a file inside an npm package - copy them somewhere your page can fetch with `npx --package @live-codes/cobol-wasm cobol-wasm-copy-assets <dir>` and pass that directory as baseUrl.");return Rl(e)}function Ll(t){let e;try{e=an(t.baseUrl)}catch(i){throw new Error(`baseUrl must be an absolute http(s) URL, or relative to the page in a browser: ${i.message}`,{cause:i})}let n=t.clangBaseUrl?an(t.clangBaseUrl):new URL("clang/",e).href,_=new URL("cobol/",e).href;return{kind:"hosted",key:`${_}\0${n}`,cobolBaseUrl:_,clangBaseUrl:n,description:e,installFetch(){}}}function Rl(t){let e={kind:"packaged",key:`packaged\0${t.root.href}`,cobolBaseUrl:new URL("cobol/",t_).href,clangBaseUrl:new URL("clang/",t_).href,description:`the assets packaged with this library (${t.root.href})`,readAsset:n=>vl(t,n),installFetch:()=>Cl(e)};return e}var Xi=null;function Cl(t){if(Xi===t)return;let e=globalThis.fetch;globalThis.fetch=(n,_)=>{let i=typeof n=="string"?n:n instanceof URL?n.href:n?.url??"";return i.startsWith(t_)?t.readAsset(i.slice(t_.length)).then(r=>new Response(r)):e.call(globalThis,n,_)},Xi=t}async function vl(t,e){let n;try{n=await t.readFile(e)}catch(_){throw new Error(`Failed to read the packaged asset ${e} from ${t.root.href}: ${_.message}`,{cause:_})}return Ml(e,n)}async function Ml(t,e){let n=Bi[t];if(!n)throw new Error(`No pinned receipt for the runtime asset ${t}`);if(e.byteLength!==n.bytes)throw new Error(`The runtime asset ${t} is ${e.byteLength} bytes, expected ${n.bytes}`);let _=await Dl(e);if(_!==n.sha256)throw new Error(`The runtime asset ${t} failed SHA-256 verification: expected ${n.sha256}, got ${_}`);return e}async function Dl(t){let e=globalThis.crypto?.subtle;if(!e)throw new Error("Verifying the runtime assets needs crypto.subtle: a secure context in the browser, or Node 20 and later.");let n=await e.digest("SHA-256",t);return[...new Uint8Array(n)].map(_=>_.toString(16).padStart(2,"0")).join("")}var Vi="runtime-manifest.v1.json",Pl=new TextDecoder,Wi=new WeakMap,Ul=0,rr={name:"gnucobol-wasi-clang",version:1,gnucobolVersion:"3.2",gmpVersion:"6.3.0",frontendTarget:"wasm32-wasi",backend:"wasm-llvm-clang",unsupported:["dynamic CALL","CALL SYSTEM","fork","SCREEN SECTION","indexed I/O"]};function sr(t,e){let n=t?.toString().trim();if(!n)throw new Error(`${e} is required`);let _;try{_=new URL(n,typeof location<"u"?location.href:void 0)}catch{throw new Error(`${e} must be an absolute HTTP(S) URL`)}if(_.protocol!=="http:"&&_.protocol!=="https:")throw new Error(`${e} must use HTTP(S)`);return _}function r_(t){let e=sr(t,"wasm-cobol runtime base URL");return e.pathname.endsWith("/")||(e.pathname+="/"),e.hash="",e}function Ol(t){return r_(new URL("./",sr(t,"wasm-cobol runtime manifest URL"))).toString()}function It(t){return t.replaceAll("\\","/").split("/").filter(e=>e&&e!=="."&&e!=="..").join("/")}function mt(t,e){if(!t||typeof t!="object"||Array.isArray(t))throw new Error(`invalid ${e} in wasm-cobol runtime manifest`);return t}function Tt(t,e){if(typeof t!="string"||!t)throw new Error(`invalid ${e} in wasm-cobol runtime manifest`);return t}function Fl(t){let e=mt(t,"root");if(e.manifestVersion!==1)throw new Error("invalid root.manifestVersion in wasm-cobol runtime manifest");let n=mt(e.frontend,"root.frontend"),_=mt(e.rootfs,"root.rootfs"),i=mt(e.cSysroot,"root.cSysroot"),r=mt(e.profile,"root.profile");if(r.name!==rr.name||r.version!==rr.version)throw new Error("unsupported root.profile in wasm-cobol runtime manifest");return{manifestVersion:1,version:Tt(e.version,"root.version"),frontend:{asset:Tt(n.asset,"root.frontend.asset"),argv0:Tt(n.argv0,"root.frontend.argv0")},rootfs:{asset:Tt(_.asset,"root.rootfs.asset")},cSysroot:{asset:Tt(i.asset,"root.cSysroot.asset")},profile:rr}}function Gl(t){return new URL(Vi,r_(t))}function Hl(t,e){let n=r_(t);return{manifest:new URL(Vi,n).toString(),frontend:new URL(e?.frontend.asset||"cobc.wasm.gz",n).toString(),rootfs:new URL(e?.rootfs.asset||"rootfs.tar.gz",n).toString(),cSysroot:new URL(e?.cSysroot.asset||"c-sysroot.tar.gz",n).toString()}}async function Bl(t,e=fetch,n,_=sn){let i=sr(t,"wasm-cobol runtime manifest URL");return Fl(await Ft(i,{fetchImpl:e,label:"wasm-cobol runtime manifest",maxBytes:_,signal:n}))}function gt(t,e,n,_){t.onProgress?.({stage:e,percent:n,message:_})}function __(t,e){if(!e)return;let n=Wi.get(t);n||(n=new Set,Wi.set(t,n));let _=It(e).split("/"),i="";for(let r of _)if(i=i?`${i}/${r}`:r,!n.has(i)){try{t.memfs.addDirectory(i)}catch{}n.add(i)}}function $i(t,e,n){let _=It(e);__(t,_.split("/").slice(0,-1).join("/")),t.memfs.addFile(_,n)}function zi(t,e){return Pl.decode(Uint8Array.from(t.memfs.getFileContents(e)))}function Xl(t){return t.includes("/")?t.slice(0,t.lastIndexOf("/")):""}function kl(t,e){return It(t?`${t}/${e}`:e)}function Wl(t,e,n){let _=[],i=new Set,r=(s,o)=>{let a=Xl(s);for(let d of o.matchAll(/^\s*#\s*include\s+"([^"]+)"/gm)){let l=kl(a,d[1]);if(i.has(l))continue;i.add(l);let c=zi(t,l);_.push({path:l,content:c}),r(l,c)}};return r(e,n),_}function $l(t){let e=It(t||"main.cob");return e?/\.[A-Za-z0-9_-]+$/.test(e)?e:`${e}.cob`:"main.cob"}function Vl(t){let e=/(\bPROGRAM-ID\s*\.\s*)(?:(["'])MAIN\2|MAIN)(?=[\s.]|$)/i;return e.test(t)?t.replace(e,"$1WASM-IDLE-MAIN").replace(/(\bEND\s+PROGRAM\s+)(?:(["'])MAIN\2|MAIN)(?=[\s.]|$)/gi,"$1WASM-IDLE-MAIN"):t}var ir=class t{runtime;frontend;constructor(e,n){this.runtime=e,this.frontend=n}static async create(e){if(e.signal?.aborted)throw e.signal.reason;let n=e.maxAssetBytes??rn;if(!Number.isSafeInteger(n)||n<=0)throw new TypeError("COBOL maxAssetBytes must be a positive safe integer");let _=e.fetchImpl||fetch,i=e.runtimeBaseUrl!==void 0?r_(e.runtimeBaseUrl).toString():Ol(e.manifestUrl),r=e.manifest||await Bl(e.manifestUrl||Gl(i),_,e.signal,Math.min(n,sn)),s=Hl(i,r),o=e.clangRuntimeBaseUrl!==void 0?an(e.clangRuntimeBaseUrl):$_(e.clangManifestUrl),a=e.clangManifest||await Y_(e.clangManifestUrl||K_(o),_,e.signal,Math.min(n,sn)),d=new j_({runtimeBaseUrl:o,manifest:{...a,compiler:{...a.compiler,sysroot:{...a.compiler.sysroot,asset:s.cSysroot}}},log:e.log,maxAssetBytes:n,signal:e.signal,stdout:()=>{}}),l=on(s.frontend,void 0,e.signal,n),c=qe(s.rootfs,void 0,n,e.signal),[p,f]=await Promise.all([l,c]);if(await d.ready,e.signal?.aborted)throw e.signal.reason;return Fn(f,d.memfs),__(d,"tmp"),new t(d,p)}async compile(e){if(!e.code?.trim())return{success:!1,stderr:"wasm-cobol requires a non-empty source string"};let n=[],_=this.runtime,i=_.stdout,r=_.memfs.stdout;_.stdout=s=>n.push(s),_.memfs.stdout=s=>n.push(s),_.log=e.log??_.log,_.beginTrace(!!e.log);try{gt(e,"bootstrap",5,"preparing GnuCOBOL workspace");let s=`__wasm_cobol_${++Ul}`,o=$l(e.fileName),a=`${s}/${o}`,d=(o.split("/").pop()||"main.cob").replace(/\.[^.]+$/,""),l=`${s}/${d}.c`,c=`${s}_${d}`,p=`${c}.c`,f=`${c}.o`,I=`${s}/link`,g=`${I}/${d}.o`,h=`${I}/${d}.wasm`;__(_,`${s}/tmp`),__(_,I),$i(_,a,Vl(e.code));for(let R of e.workspaceFiles||[]){let W=It(R.path);!W||W===o||$i(_,`${s}/${W}`,R.content)}gt(e,"translate",20,"translating COBOL to C with GnuCOBOL");let A=e.sourceFormat==="fixed"?"-fixed":"-free";await _.runWithOptions(this.frontend,!0,["cobc","-x","-C",A,"-I",s,"-o",l,...e.compileArgs||[],a],{COB_CONFIG_DIR:"share/gnucobol/config",COB_COPY_DIR:`${s}:share/gnucobol/copy`,TMPDIR:`${s}/tmp`,LC_ALL:"C",SOURCE_DATE_EPOCH:"0"});let b=zi(_,l),y=Wl(_,l,b),u=new Map(y.map(R=>{let W=R.path.split("/").pop()||R.path;return[W,`${s}_${W}`]})),T=R=>R.replace(/(#\s*include\s+")([^"]+)(")/g,(W,pe,te,Ae)=>{let re=u.get(te.split("/").pop()||te);return re?`${pe}${re}${Ae}`:W}),m=T(b),E=y.map(R=>({path:u.get(R.path.split("/").pop()||R.path)??R.path,content:T(R.content)}));gt(e,"compile",55,"compiling generated C with llvm-core Clang");let S=n.length,N;try{await _.compile({input:p,code:m,obj:f,language:"C",cVersion:"17",opt:"0",workspaceFiles:E,compileArgs:["-I",".","-I","include","-D_WASI_EMULATED_SIGNAL","-D_WASI_EMULATED_GETPID",...e.cCompileArgs||[]]})}catch(R){N=R}let x=Uint8Array.from(_.memfs.getFileContents(f)),C=n.slice(S).join(""),ne=x[0]===0&&x[1]===97&&x[2]===115&&x[3]===109&&C.includes("IO failure on output stream: Invalid argument");if(N&&!ne)throw N;if(ne&&n.splice(S),x.length===0)throw new Error("wasm-clang did not produce the COBOL object file");_.memfs.addFile(g,x),gt(e,"link",80,"linking libcob and GMP");let k=await _.getModule(_.assetUrls.lld),G=_.compilerConfig?.compilerRuntimeLibDir||"lib/clang/8.0.1/lib/wasi";await _.run(k,e.log??!1,"wasm-ld","--export-dynamic","-z","stack-size=1048576","-Llib/wasm32-wasi/noeh","-Llib/wasm32-wasi","lib/wasm32-wasi/crt1.o",g,"lib/libcobwasi.a","lib/libcob.a","lib/libgmp.a","lib/libdl.a","lib/libsetjmp.a","lib/libwasi-emulated-signal.a","lib/libwasi-emulated-getpid.a","-lc","-lm",`-L${G}`,"-lclang_rt.builtins-wasm32","-o",h);let B=Uint8Array.from(_.memfs.getFileContents(h)),U={bytes:B,wasm:await WebAssembly.compile(B),target:"wasm32-wasi",format:"wasi-core-wasm",fileName:h,language:"C",sourceLanguage:"COBOL"};return gt(e,"done",100,"done"),{success:!0,artifact:U,stdout:n.join("")}}catch(s){let o=n.join("");return{success:!1,stdout:o,stderr:o||(s instanceof Error?s.message:String(s))}}finally{_.stdout=i,_.memfs.stdout=r}}};async function ji(t){return ir.create(t)}function Yi(t,e={}){return _r(t,e)}var zl=/\u001b\[[0-9;]*[A-Za-z]/g,jl=/__wasm_cobol_\d+\//g,Ki=t=>String(t??"").replace(zl,""),Yl=/^\s*>|^\s*done\.?\s*$/,qi=t=>Ki(t).replace(jl,"").split(/\r?\n/).map(e=>e.replace(/\s+$/,"")).filter(e=>e&&!Yl.test(e)),i_=t=>Ki(t),Ji=t=>{if(t==null||t.length===0)return()=>null;let e=!1;return()=>e?null:(e=!0,t)};async function Zi(t,e){let{code:n,fileName:_,sourceFormat:i,compileArgs:r,cCompileArgs:s,args:o,input:a}=e,d=performance.now(),l=await t.compiler.compile({code:n,fileName:_,sourceFormat:i,compileArgs:r,cCompileArgs:s,log:!1}),c=Math.round(performance.now()-d),p=l.success?l.stdout??"":l.stdout?.trim()?l.stdout:l.stderr??"",f=qi(p);return!l.success||!l.artifact?{stdout:"",stderr:"",output:"",errors:f.length?f:["Compilation failed."],diagnostics:f,exitCode:null,compileMs:c,runMs:null}:{...await Kl(l.artifact,{args:o,input:a}),errors:[],diagnostics:f,compileMs:c}}async function Kl(t,{args:e,input:n}){let _=[],i=[],r=[],s=performance.now(),o=await Yi(t,{args:e,stdin:Ji(n),stdout:d=>{_.push(d),i.push(d)},stderr:d=>{_.push(d),r.push(d)}}),a=Math.round(performance.now()-s);return{stdout:i_(i.join("")),stderr:i_(r.join("")),output:i_(_.join("")),exitCode:o.exitCode,runMs:a}}var s_=new Map;async function Qi(t,e={}){let n=s_.get(t.key);n||(n=Jl(t,e).catch(i=>{throw s_.delete(t.key),i}),s_.set(t.key,n));let _=await n;return _.references+=1,_}function es(t){t.references-=1,t.references<=0&&s_.delete(t.key)}async function ns(t,e){let n=t.queue,_;t.queue=new Promise(i=>{_=i}),await n;try{return await e()}finally{_()}}function ql(){typeof globalThis.SharedArrayBuffer>"u"&&(globalThis.SharedArrayBuffer=class{constructor(){throw new Error("SharedArrayBuffer is not available in this context")}})}async function Jl(t,e){ql(),t.installFetch();let n=await ji({runtimeBaseUrl:t.cobolBaseUrl,clangRuntimeBaseUrl:t.clangBaseUrl,...e.maxAssetBytes?{maxAssetBytes:e.maxAssetBytes}:{}});return{key:t.key,source:t,references:0,queue:Promise.resolve(),compiler:n}}var o_=Object.freeze(["free","fixed"]);function ts(t){let e=t==null?"free":String(t).trim().toLowerCase();if(!o_.includes(e))throw new Error(`sourceFormat must be one of ${o_.join(", ")} (got ${JSON.stringify(t)}).`);return e}function _s({packaged:t}){async function e(n={}){let _=ki(n,t),i=await Qi(_,n),r=ts(n.sourceFormat),s={fileName:n.fileName??"main.cob",compileArgs:n.compileArgs??[],cCompileArgs:n.cCompileArgs??[],args:n.args??[]},o=!1;return{sourceFormat:r,sourceFormats:[...o_],async run(a,d,l={}){if(o)throw new Error("This compiler has been disposed.");if(typeof a!="string")throw new Error("run() needs the program source as its first argument.");let c={code:a,input:d??"",fileName:l.fileName??s.fileName,sourceFormat:"sourceFormat"in l?ts(l.sourceFormat):r,compileArgs:[...s.compileArgs,...l.compileArgs??[]],cCompileArgs:[...s.cCompileArgs,...l.cCompileArgs??[]],args:l.args??s.args};return ns(i,()=>Zi(i,c))},dispose(){o||(o=!0,es(i))}}}return{createCompiler:e,SOURCE_FORMATS:o_}}var rs=_s({packaged:null}),Zl=rs.createCompiler,{SOURCE_FORMATS:Ql}=rs;return us(ec);})();
