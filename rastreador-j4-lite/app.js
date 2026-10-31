(()=>{var hu="160",os={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},as={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sg=0,Oh=1,rg=2;var pd=1,fu=2,ei=3,Dn=0,Fe=1,cn=2;var Ai=0,Hs=1,Fh=2,zh=3,Hh=4,og=5,ji=100,ag=101,cg=102,kh=103,Vh=104,lg=200,ug=201,hg=202,fg=203,El=204,wl=205,dg=206,pg=207,mg=208,gg=209,_g=210,xg=211,yg=212,vg=213,bg=214,Sg=0,Mg=1,Tg=2,oa=3,Eg=4,wg=5,Ag=6,Rg=7,md=0,Cg=1,Pg=2,Ri=0,Ig=1,Lg=2,Dg=3,du=4,Ng=5,Ug=6;var gd=300,Gs=301,Ws=302,Al=303,Rl=304,za=306,Vr=1e3,In=1001,Cl=1002,nn=1003,Gh=1004;var Xc=1005;var xn=1006,Bg=1007;var Gr=1008;var Ci=1009,Og=1010,Fg=1011,pu=1012,_d=1013,Ei=1014,wi=1015,Wr=1016,xd=1017,yd=1018,Ji=1020,zg=1021,Ln=1023,Hg=1024,kg=1025,Ki=1026,Xs=1027,Vg=1028,vd=1029,Gg=1030,bd=1031,Sd=1033,qc=33776,Yc=33777,Zc=33778,jc=33779,Wh=35840,Xh=35841,qh=35842,Yh=35843,Md=36196,Zh=37492,jh=37496,$h=37808,Jh=37809,Kh=37810,Qh=37811,tf=37812,ef=37813,nf=37814,sf=37815,rf=37816,of=37817,af=37818,cf=37819,lf=37820,uf=37821,$c=36492,hf=36494,ff=36495,Wg=36283,df=36284,pf=36285,mf=36286;var aa=2300,ca=2301,Jc=2302,gf=2400,_f=2401,xf=2402;var Td=3e3,Qi=3001,Xg=3200,mu=3201,Ed=0,qg=1,yn="",Se="srgb",ii="srgb-linear",gu="display-p3",Ha="display-p3-linear",la="linear",ce="srgb",ua="rec709",ha="p3";var vs=7680;var yf=519,Yg=512,Zg=513,jg=514,wd=515,$g=516,Jg=517,Kg=518,Qg=519,vf=35044;var bf="300 es",Pl=1035,ni=2e3,fa=2001,Gn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sf=1234567,Br=Math.PI/180,Xr=180/Math.PI;function cs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function Me(i,t,e){return Math.max(t,Math.min(e,i))}function _u(i,t){return(i%t+t)%t}function t0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function e0(i,t,e){return i!==t?(e-i)/(t-i):0}function Or(i,t,e){return(1-e)*i+e*t}function n0(i,t,e,n){return Or(i,t,1-Math.exp(-e*n))}function i0(i,t=1){return t-Math.abs(_u(i,t*2)-t)}function s0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function r0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function o0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function a0(i,t){return i+Math.random()*(t-i)}function c0(i){return i*(.5-Math.random())}function l0(i){i!==void 0&&(Sf=i);let t=Sf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function u0(i){return i*Br}function h0(i){return i*Xr}function Il(i){return(i&i-1)===0&&i!==0}function f0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function da(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function d0(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),u=r((t+n)/2),l=a((t+n)/2),f=r((t-n)/2),h=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*l,c*f,c*h,o*u);break;case"YZY":i.set(c*h,o*l,c*f,o*u);break;case"ZXZ":i.set(c*f,c*h,o*l,o*u);break;case"XZX":i.set(o*l,c*g,c*d,o*u);break;case"YXY":i.set(c*d,o*l,c*g,o*u);break;case"ZYZ":i.set(c*g,c*d,o*l,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ad={DEG2RAD:Br,RAD2DEG:Xr,generateUUID:cs,clamp:Me,euclideanModulo:_u,mapLinear:t0,inverseLerp:e0,lerp:Or,damp:n0,pingpong:i0,smoothstep:s0,smootherstep:r0,randInt:o0,randFloat:a0,randFloatSpread:c0,seededRandom:l0,degToRad:u0,radToDeg:h0,isPowerOfTwo:Il,ceilPowerOfTwo:f0,floorPowerOfTwo:da,setQuaternionFromProperEuler:d0,normalize:tn,denormalize:Bs},et=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vt=class i{constructor(t,e,n,s,r,a,o,c,u){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,u)}set(t,e,n,s,r,a,o,c,u){let l=this.elements;return l[0]=t,l[1]=s,l[2]=o,l[3]=e,l[4]=r,l[5]=c,l[6]=n,l[7]=a,l[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],l=n[4],f=n[7],h=n[2],d=n[5],g=n[8],y=s[0],m=s[3],p=s[6],x=s[1],_=s[4],v=s[7],S=s[2],E=s[5],T=s[8];return r[0]=a*y+o*x+c*S,r[3]=a*m+o*_+c*E,r[6]=a*p+o*v+c*T,r[1]=u*y+l*x+f*S,r[4]=u*m+l*_+f*E,r[7]=u*p+l*v+f*T,r[2]=h*y+d*x+g*S,r[5]=h*m+d*_+g*E,r[8]=h*p+d*v+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],u=t[7],l=t[8];return e*a*l-e*o*u-n*r*l+n*o*c+s*r*u-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],u=t[7],l=t[8],f=l*a-o*u,h=o*c-l*r,d=u*r-a*c,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=f*y,t[1]=(s*u-l*n)*y,t[2]=(o*n-s*a)*y,t[3]=h*y,t[4]=(l*e-s*c)*y,t[5]=(s*r-o*e)*y,t[6]=d*y,t[7]=(n*c-u*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*a+u*o)+a+t,-s*u,s*c,-s*(-u*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Kc.makeScale(t,e)),this}rotate(t){return this.premultiply(Kc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Kc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Kc=new Vt;function Rd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function pa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function p0(){let i=pa("canvas");return i.style.display="block",i}var Mf={};function Fr(i){i in Mf||(Mf[i]=!0,console.warn(i))}var Tf=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ef=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Do={[ii]:{transfer:la,primaries:ua,toReference:i=>i,fromReference:i=>i},[Se]:{transfer:ce,primaries:ua,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ha]:{transfer:la,primaries:ha,toReference:i=>i.applyMatrix3(Ef),fromReference:i=>i.applyMatrix3(Tf)},[gu]:{transfer:ce,primaries:ha,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ef),fromReference:i=>i.applyMatrix3(Tf).convertLinearToSRGB()}},m0=new Set([ii,Ha]),re={enabled:!0,_workingColorSpace:ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!m0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Do[t].toReference,s=Do[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Do[i].primaries},getTransfer:function(i){return i===yn?la:Do[i].transfer}};function ks(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var bs,ma=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{bs===void 0&&(bs=pa("canvas")),bs.width=t.width,bs.height=t.height;let n=bs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=bs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=pa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ks(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ks(e[n]/255)*255):e[n]=ks(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},g0=0,ga=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=cs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(tl(s[a].image)):r.push(tl(s[a]))}else r=tl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function tl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ma.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _0=0,bn=class i extends Gn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=In,s=In,r=xn,a=Gr,o=Ln,c=Ci,u=i.DEFAULT_ANISOTROPY,l=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=cs(),this.name="",this.source=new ga(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof l=="string"?this.colorSpace=l:(Fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=l===Qi?Se:yn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vr:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case Cl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vr:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case Cl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Se?Qi:Td}set encoding(t){Fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Qi?Se:yn}};bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=gd;bn.DEFAULT_ANISOTROPY=1;var Kt=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,u=c[0],l=c[4],f=c[8],h=c[1],d=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(l-h)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+h)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(u+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(u+1)/2,v=(d+1)/2,S=(p+1)/2,E=(l+h)/4,T=(f+y)/4,R=(g+m)/4;return _>v&&_>S?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=E/n,r=T/n):v>S?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=R/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=T/r,s=R/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(h-l)*(h-l));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-y)/x,this.z=(h-l)/x,this.w=Math.acos((u+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ll=class extends Gn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Kt(0,0,t,e),this.scissorTest=!1,this.viewport=new Kt(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(Fr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Qi?Se:yn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new bn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ga(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},si=class extends Ll{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},_a=class extends bn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dl=class extends bn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],u=n[s+1],l=n[s+2],f=n[s+3],h=r[a+0],d=r[a+1],g=r[a+2],y=r[a+3];if(o===0){t[e+0]=c,t[e+1]=u,t[e+2]=l,t[e+3]=f;return}if(o===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=y;return}if(f!==y||c!==h||u!==d||l!==g){let m=1-o,p=c*h+u*d+l*g+f*y,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let S=Math.sqrt(_),E=Math.atan2(S,p*x);m=Math.sin(m*E)/S,o=Math.sin(o*E)/S}let v=o*x;if(c=c*m+h*v,u=u*m+d*v,l=l*m+g*v,f=f*m+y*v,m===1-o){let S=1/Math.sqrt(c*c+u*u+l*l+f*f);c*=S,u*=S,l*=S,f*=S}}t[e]=c,t[e+1]=u,t[e+2]=l,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],u=n[s+2],l=n[s+3],f=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+l*f+c*d-u*h,t[e+1]=c*g+l*h+u*f-o*d,t[e+2]=u*g+l*d+o*h-c*f,t[e+3]=l*g-o*f-c*h-u*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,u=o(n/2),l=o(s/2),f=o(r/2),h=c(n/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*l*f+u*d*g,this._y=u*d*f-h*l*g,this._z=u*l*g+h*d*f,this._w=u*l*f-h*d*g;break;case"YXZ":this._x=h*l*f+u*d*g,this._y=u*d*f-h*l*g,this._z=u*l*g-h*d*f,this._w=u*l*f+h*d*g;break;case"ZXY":this._x=h*l*f-u*d*g,this._y=u*d*f+h*l*g,this._z=u*l*g+h*d*f,this._w=u*l*f-h*d*g;break;case"ZYX":this._x=h*l*f-u*d*g,this._y=u*d*f+h*l*g,this._z=u*l*g-h*d*f,this._w=u*l*f+h*d*g;break;case"YZX":this._x=h*l*f+u*d*g,this._y=u*d*f+h*l*g,this._z=u*l*g-h*d*f,this._w=u*l*f-h*d*g;break;case"XZY":this._x=h*l*f-u*d*g,this._y=u*d*f-h*l*g,this._z=u*l*g+h*d*f,this._w=u*l*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],u=e[2],l=e[6],f=e[10],h=n+o+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(l-c)*d,this._y=(r-u)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(l-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+u)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-u)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+l)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+u)/d,this._y=(c+l)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,u=e._z,l=e._w;return this._x=n*l+a*o+s*u-r*c,this._y=s*l+a*c+r*o-n*u,this._z=r*l+a*u+n*c-s*o,this._w=a*l-n*o-s*c-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let u=Math.sqrt(c),l=Math.atan2(u,o),f=Math.sin((1-e)*l)/u,h=Math.sin(e*l)/u;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,u=2*(a*s-o*n),l=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*u+a*f-o*l,this.y=n+c*l+o*u-r*f,this.z=s+c*f+r*l-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return el.copy(this).projectOnVector(t),this.sub(el)}reflect(t){return this.sub(el.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},el=new A,wf=new pn,de=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),No.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),No.copy(n.boundingBox)),No.applyMatrix4(t.matrixWorld),this.union(No)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ir),Uo.subVectors(this.max,Ir),Ss.subVectors(t.a,Ir),Ms.subVectors(t.b,Ir),Ts.subVectors(t.c,Ir),vi.subVectors(Ms,Ss),bi.subVectors(Ts,Ms),Wi.subVectors(Ss,Ts);let e=[0,-vi.z,vi.y,0,-bi.z,bi.y,0,-Wi.z,Wi.y,vi.z,0,-vi.x,bi.z,0,-bi.x,Wi.z,0,-Wi.x,-vi.y,vi.x,0,-bi.y,bi.x,0,-Wi.y,Wi.x,0];return!nl(e,Ss,Ms,Ts,Uo)||(e=[1,0,0,0,1,0,0,0,1],!nl(e,Ss,Ms,Ts,Uo))?!1:(Bo.crossVectors(vi,bi),e=[Bo.x,Bo.y,Bo.z],nl(e,Ss,Ms,Ts,Uo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},$n=[new A,new A,new A,new A,new A,new A,new A,new A],Rn=new A,No=new de,Ss=new A,Ms=new A,Ts=new A,vi=new A,bi=new A,Wi=new A,Ir=new A,Uo=new A,Bo=new A,Xi=new A;function nl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Xi.fromArray(i,r);let o=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),c=t.dot(Xi),u=e.dot(Xi),l=n.dot(Xi);if(Math.max(-Math.max(c,u,l),Math.min(c,u,l))>o)return!1}return!0}var x0=new de,Lr=new A,il=new A,ts=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):x0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lr.subVectors(t,this.center);let e=Lr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Lr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(il.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lr.copy(t.center).add(il)),this.expandByPoint(Lr.copy(t.center).sub(il))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Jn=new A,sl=new A,Oo=new A,Si=new A,rl=new A,Fo=new A,ol=new A,ri=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){sl.copy(t).add(e).multiplyScalar(.5),Oo.copy(e).sub(t).normalize(),Si.copy(this.origin).sub(sl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Oo),o=Si.dot(this.direction),c=-Si.dot(Oo),u=Si.lengthSq(),l=Math.abs(1-a*a),f,h,d,g;if(l>0)if(f=a*c-o,h=a*o-c,g=r*l,f>=0)if(h>=-g)if(h<=g){let y=1/l;f*=y,h*=y,d=f*(f+a*h+2*o)+h*(a*f+h+2*c)+u}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+u;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+u;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+u):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+u):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+u);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(sl).addScaledVector(Oo,h),d}intersectSphere(t,e){Jn.subVectors(t.center,this.origin);let n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,u=1/this.direction.x,l=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(n=(t.min.x-h.x)*u,s=(t.max.x-h.x)*u):(n=(t.max.x-h.x)*u,s=(t.min.x-h.x)*u),l>=0?(r=(t.min.y-h.y)*l,a=(t.max.y-h.y)*l):(r=(t.max.y-h.y)*l,a=(t.min.y-h.y)*l),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,s,r){rl.subVectors(e,t),Fo.subVectors(n,t),ol.crossVectors(rl,Fo);let a=this.direction.dot(ol),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Si.subVectors(this.origin,t);let c=o*this.direction.dot(Fo.crossVectors(Si,Fo));if(c<0)return null;let u=o*this.direction.dot(rl.cross(Si));if(u<0||c+u>a)return null;let l=-o*Si.dot(ol);return l<0?null:this.at(l/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bt=class i{constructor(t,e,n,s,r,a,o,c,u,l,f,h,d,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,u,l,f,h,d,g,y,m)}set(t,e,n,s,r,a,o,c,u,l,f,h,d,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=u,p[6]=l,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Es.setFromMatrixColumn(t,0).length(),r=1/Es.setFromMatrixColumn(t,1).length(),a=1/Es.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),u=Math.sin(s),l=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=a*l,d=a*f,g=o*l,y=o*f;e[0]=c*l,e[4]=-c*f,e[8]=u,e[1]=d+g*u,e[5]=h-y*u,e[9]=-o*c,e[2]=y-h*u,e[6]=g+d*u,e[10]=a*c}else if(t.order==="YXZ"){let h=c*l,d=c*f,g=u*l,y=u*f;e[0]=h+y*o,e[4]=g*o-d,e[8]=a*u,e[1]=a*f,e[5]=a*l,e[9]=-o,e[2]=d*o-g,e[6]=y+h*o,e[10]=a*c}else if(t.order==="ZXY"){let h=c*l,d=c*f,g=u*l,y=u*f;e[0]=h-y*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*l,e[9]=y-h*o,e[2]=-a*u,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let h=a*l,d=a*f,g=o*l,y=o*f;e[0]=c*l,e[4]=g*u-d,e[8]=h*u+y,e[1]=c*f,e[5]=y*u+h,e[9]=d*u-g,e[2]=-u,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let h=a*c,d=a*u,g=o*c,y=o*u;e[0]=c*l,e[4]=y-h*f,e[8]=g*f+d,e[1]=f,e[5]=a*l,e[9]=-o*l,e[2]=-u*l,e[6]=d*f+g,e[10]=h-y*f}else if(t.order==="XZY"){let h=a*c,d=a*u,g=o*c,y=o*u;e[0]=c*l,e[4]=-f,e[8]=u*l,e[1]=h*f+y,e[5]=a*l,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*l,e[10]=y*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(y0,t,v0)}lookAt(t,e,n){let s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Mi.crossVectors(n,fn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Mi.crossVectors(n,fn)),Mi.normalize(),zo.crossVectors(fn,Mi),s[0]=Mi.x,s[4]=zo.x,s[8]=fn.x,s[1]=Mi.y,s[5]=zo.y,s[9]=fn.y,s[2]=Mi.z,s[6]=zo.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],l=n[1],f=n[5],h=n[9],d=n[13],g=n[2],y=n[6],m=n[10],p=n[14],x=n[3],_=n[7],v=n[11],S=n[15],E=s[0],T=s[4],R=s[8],b=s[12],M=s[1],L=s[5],U=s[9],B=s[13],P=s[2],O=s[6],H=s[10],W=s[14],G=s[3],j=s[7],tt=s[11],J=s[15];return r[0]=a*E+o*M+c*P+u*G,r[4]=a*T+o*L+c*O+u*j,r[8]=a*R+o*U+c*H+u*tt,r[12]=a*b+o*B+c*W+u*J,r[1]=l*E+f*M+h*P+d*G,r[5]=l*T+f*L+h*O+d*j,r[9]=l*R+f*U+h*H+d*tt,r[13]=l*b+f*B+h*W+d*J,r[2]=g*E+y*M+m*P+p*G,r[6]=g*T+y*L+m*O+p*j,r[10]=g*R+y*U+m*H+p*tt,r[14]=g*b+y*B+m*W+p*J,r[3]=x*E+_*M+v*P+S*G,r[7]=x*T+_*L+v*O+S*j,r[11]=x*R+_*U+v*H+S*tt,r[15]=x*b+_*B+v*W+S*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],u=t[13],l=t[2],f=t[6],h=t[10],d=t[14],g=t[3],y=t[7],m=t[11],p=t[15];return g*(+r*c*f-s*u*f-r*o*h+n*u*h+s*o*d-n*c*d)+y*(+e*c*d-e*u*h+r*a*h-s*a*d+s*u*l-r*c*l)+m*(+e*u*f-e*o*d-r*a*f+n*a*d+r*o*l-n*u*l)+p*(-s*o*l-e*c*f+e*o*h+s*a*f-n*a*h+n*c*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],u=t[7],l=t[8],f=t[9],h=t[10],d=t[11],g=t[12],y=t[13],m=t[14],p=t[15],x=f*m*u-y*h*u+y*c*d-o*m*d-f*c*p+o*h*p,_=g*h*u-l*m*u-g*c*d+a*m*d+l*c*p-a*h*p,v=l*y*u-g*f*u+g*o*d-a*y*d-l*o*p+a*f*p,S=g*f*c-l*y*c-g*o*h+a*y*h+l*o*m-a*f*m,E=e*x+n*_+s*v+r*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return t[0]=x*T,t[1]=(y*h*r-f*m*r-y*s*d+n*m*d+f*s*p-n*h*p)*T,t[2]=(o*m*r-y*c*r+y*s*u-n*m*u-o*s*p+n*c*p)*T,t[3]=(f*c*r-o*h*r-f*s*u+n*h*u+o*s*d-n*c*d)*T,t[4]=_*T,t[5]=(l*m*r-g*h*r+g*s*d-e*m*d-l*s*p+e*h*p)*T,t[6]=(g*c*r-a*m*r-g*s*u+e*m*u+a*s*p-e*c*p)*T,t[7]=(a*h*r-l*c*r+l*s*u-e*h*u-a*s*d+e*c*d)*T,t[8]=v*T,t[9]=(g*f*r-l*y*r-g*n*d+e*y*d+l*n*p-e*f*p)*T,t[10]=(a*y*r-g*o*r+g*n*u-e*y*u-a*n*p+e*o*p)*T,t[11]=(l*o*r-a*f*r-l*n*u+e*f*u+a*n*d-e*o*d)*T,t[12]=S*T,t[13]=(l*y*s-g*f*s+g*n*h-e*y*h-l*n*m+e*f*m)*T,t[14]=(g*o*s-a*y*s-g*n*c+e*y*c+a*n*m-e*o*m)*T,t[15]=(a*f*s-l*o*s+l*n*c-e*f*c-a*n*h+e*o*h)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,u=r*a,l=r*o;return this.set(u*a+n,u*o-s*c,u*c+s*o,0,u*o+s*c,l*o+n,l*c-s*a,0,u*c-s*o,l*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,u=r+r,l=a+a,f=o+o,h=r*u,d=r*l,g=r*f,y=a*l,m=a*f,p=o*f,x=c*u,_=c*l,v=c*f,S=n.x,E=n.y,T=n.z;return s[0]=(1-(y+p))*S,s[1]=(d+v)*S,s[2]=(g-_)*S,s[3]=0,s[4]=(d-v)*E,s[5]=(1-(h+p))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(g+_)*T,s[9]=(m-x)*T,s[10]=(1-(h+y))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Es.set(s[0],s[1],s[2]).length(),a=Es.set(s[4],s[5],s[6]).length(),o=Es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Cn.copy(this);let u=1/r,l=1/a,f=1/o;return Cn.elements[0]*=u,Cn.elements[1]*=u,Cn.elements[2]*=u,Cn.elements[4]*=l,Cn.elements[5]*=l,Cn.elements[6]*=l,Cn.elements[8]*=f,Cn.elements[9]*=f,Cn.elements[10]*=f,e.setFromRotationMatrix(Cn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ni){let c=this.elements,u=2*r/(e-t),l=2*r/(n-s),f=(e+t)/(e-t),h=(n+s)/(n-s),d,g;if(o===ni)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===fa)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=l,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ni){let c=this.elements,u=1/(e-t),l=1/(n-s),f=1/(a-r),h=(e+t)*u,d=(n+s)*l,g,y;if(o===ni)g=(a+r)*f,y=-2*f;else if(o===fa)g=r*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Es=new A,Cn=new Bt,y0=new A(0,0,0),v0=new A(1,1,1),Mi=new A,zo=new A,fn=new A,Af=new Bt,Rf=new pn,xa=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],u=s[5],l=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-l,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Af.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Af,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rf.setFromEuler(this),this.setFromQuaternion(Rf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xa.DEFAULT_ORDER="XYZ";var ya=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},b0=0,Cf=new A,ws=new pn,Kn=new Bt,Ho=new A,Dr=new A,S0=new A,M0=new pn,Pf=new A(1,0,0),If=new A(0,1,0),Lf=new A(0,0,1),T0={type:"added"},E0={type:"removed"},sn=class i extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new A,e=new xa,n=new pn,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Bt},normalMatrix:{value:new Vt}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.multiply(ws),this}rotateOnWorldAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.premultiply(ws),this}rotateX(t){return this.rotateOnAxis(Pf,t)}rotateY(t){return this.rotateOnAxis(If,t)}rotateZ(t){return this.rotateOnAxis(Lf,t)}translateOnAxis(t,e){return Cf.copy(t).applyQuaternion(this.quaternion),this.position.add(Cf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pf,t)}translateY(t){return this.translateOnAxis(If,t)}translateZ(t){return this.translateOnAxis(Lf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ho.copy(t):Ho.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Dr,Ho,this.up):Kn.lookAt(Ho,Dr,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(Kn),this.quaternion.premultiply(ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(T0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(E0)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,t,S0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,M0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let u=0,l=c.length;u<l;u++){let f=c[u];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),u=a(t.textures),l=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),l.length>0&&(n.images=l),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let u in o){let l=o[u];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};sn.DEFAULT_UP=new A(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=new A,Qn=new A,al=new A,ti=new A,As=new A,Rs=new A,Df=new A,cl=new A,ll=new A,ul=new A,ko=!1,le=class i{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Pn.subVectors(t,e),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Pn.subVectors(s,e),Qn.subVectors(n,e),al.subVectors(t,e);let a=Pn.dot(Pn),o=Pn.dot(Qn),c=Pn.dot(al),u=Qn.dot(Qn),l=Qn.dot(al),f=a*u-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(u*c-o*l)*h,g=(a*l-o*c)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(t,e,n,s,r,a,o,c){return ko===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ko=!0),this.getInterpolation(t,e,n,s,r,a,o,c)}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ti.x),c.addScaledVector(a,ti.y),c.addScaledVector(o,ti.z),c)}static isFrontFacing(t,e,n,s){return Pn.subVectors(n,e),Qn.subVectors(t,e),Pn.cross(Qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Pn.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return ko===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ko=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;As.subVectors(s,n),Rs.subVectors(r,n),cl.subVectors(t,n);let c=As.dot(cl),u=Rs.dot(cl);if(c<=0&&u<=0)return e.copy(n);ll.subVectors(t,s);let l=As.dot(ll),f=Rs.dot(ll);if(l>=0&&f<=l)return e.copy(s);let h=c*f-l*u;if(h<=0&&c>=0&&l<=0)return a=c/(c-l),e.copy(n).addScaledVector(As,a);ul.subVectors(t,r);let d=As.dot(ul),g=Rs.dot(ul);if(g>=0&&d<=g)return e.copy(r);let y=d*u-c*g;if(y<=0&&u>=0&&g<=0)return o=u/(u-g),e.copy(n).addScaledVector(Rs,o);let m=l*g-d*f;if(m<=0&&f-l>=0&&d-g>=0)return Df.subVectors(r,s),o=(f-l)/(f-l+(d-g)),e.copy(s).addScaledVector(Df,o);let p=1/(m+y+h);return a=y*p,o=h*p,e.copy(n).addScaledVector(As,a).addScaledVector(Rs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function hl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=_u(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=hl(a,r,t+1/3),this.g=hl(a,r,t),this.b=hl(a,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=Se){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){let n=Cd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}copyLinearToSRGB(t){return this.r=Qc(t.r),this.g=Qc(t.g),this.b=Qc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return re.fromWorkingColorSpace(je.copy(this),t),Math.round(Me(je.r*255,0,255))*65536+Math.round(Me(je.g*255,0,255))*256+Math.round(Me(je.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(je.copy(this),e);let n=je.r,s=je.g,r=je.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,u,l=(o+a)/2;if(o===a)c=0,u=0;else{let f=a-o;switch(u=l<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=u,t.l=l,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Se){re.fromWorkingColorSpace(je.copy(this),t);let e=je.r,n=je.g,s=je.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+e,Ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ti),t.getHSL(Vo);let n=Or(Ti.h,Vo.h,e),s=Or(Ti.s,Vo.s,e),r=Or(Ti.l,Vo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},je=new Gt;Gt.NAMES=Cd;var w0=0,es=class extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=Hs,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=El,this.blendDst=wl,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==El&&(n.blendSrc=this.blendSrc),this.blendDst!==wl&&(n.blendDst=this.blendDst),this.blendEquation!==ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==oa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},qs=class extends es{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=md,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ae=new A,Go=new et,fe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Go.fromBufferAttribute(this,e),Go.applyMatrix3(t),this.setXY(e,Go.x,Go.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=tn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bs(e,this.array)),e}setX(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bs(e,this.array)),e}setY(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bs(e,this.array)),e}setW(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vf&&(t.usage=this.usage),t}};var va=class extends fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ba=class extends fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Jt=class extends fe{constructor(t,e,n){super(new Float32Array(t),e,n)}};var A0=0,_n=new Bt,fl=new sn,Cs=new A,dn=new de,Nr=new de,Oe=new A,Ce=class i extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rd(t)?ba:va)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return fl.lookAt(t),fl.updateMatrix(),this.applyMatrix4(fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new de);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ts);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Nr.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(dn.min,Nr.min),dn.expandByPoint(Oe),Oe.addVectors(dn.max,Nr.max),dn.expandByPoint(Oe)):(dn.expandByPoint(Nr.min),dn.expandByPoint(Nr.max))}dn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let u=0,l=o.count;u<l;u++)Oe.fromBufferAttribute(o,u),c&&(Cs.fromBufferAttribute(t,u),Oe.add(Cs)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fe(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,u=[],l=[];for(let M=0;M<o;M++)u[M]=new A,l[M]=new A;let f=new A,h=new A,d=new A,g=new et,y=new et,m=new et,p=new A,x=new A;function _(M,L,U){f.fromArray(s,M*3),h.fromArray(s,L*3),d.fromArray(s,U*3),g.fromArray(a,M*2),y.fromArray(a,L*2),m.fromArray(a,U*2),h.sub(f),d.sub(f),y.sub(g),m.sub(g);let B=1/(y.x*m.y-m.x*y.y);isFinite(B)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-y.y).multiplyScalar(B),x.copy(d).multiplyScalar(y.x).addScaledVector(h,-m.x).multiplyScalar(B),u[M].add(p),u[L].add(p),u[U].add(p),l[M].add(x),l[L].add(x),l[U].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let M=0,L=v.length;M<L;++M){let U=v[M],B=U.start,P=U.count;for(let O=B,H=B+P;O<H;O+=3)_(n[O+0],n[O+1],n[O+2])}let S=new A,E=new A,T=new A,R=new A;function b(M){T.fromArray(r,M*3),R.copy(T);let L=u[M];S.copy(L),S.sub(T.multiplyScalar(T.dot(L))).normalize(),E.crossVectors(R,L);let B=E.dot(l[M])<0?-1:1;c[M*4]=S.x,c[M*4+1]=S.y,c[M*4+2]=S.z,c[M*4+3]=B}for(let M=0,L=v.length;M<L;++M){let U=v[M],B=U.start,P=U.count;for(let O=B,H=B+P;O<H;O+=3)b(n[O+0]),b(n[O+1]),b(n[O+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new A,r=new A,a=new A,o=new A,c=new A,u=new A,l=new A,f=new A;if(t)for(let h=0,d=t.count;h<d;h+=3){let g=t.getX(h+0),y=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),l.subVectors(a,r),f.subVectors(s,r),l.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,m),o.add(l),c.add(l),u.add(l),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),l.subVectors(a,r),f.subVectors(s,r),l.cross(f),n.setXYZ(h+0,l.x,l.y,l.z),n.setXYZ(h+1,l.x,l.y,l.z),n.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,c){let u=o.array,l=o.itemSize,f=o.normalized,h=new u.constructor(c.length*l),d=0,g=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?d=c[y]*o.data.stride+o.offset:d=c[y]*l;for(let p=0;p<l;p++)h[g++]=u[d++]}return new fe(h,l,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],u=t(c,n);e.setAttribute(o,u)}let r=this.morphAttributes;for(let o in r){let c=[],u=r[o];for(let l=0,f=u.length;l<f;l++){let h=u[l],d=t(h,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let u=n[c];t.data.attributes[c]=u.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],l=[];for(let f=0,h=u.length;f<h;f++){let d=u[f];l.push(d.toJSON(t.data))}l.length>0&&(s[c]=l,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let u in s){let l=s[u];this.setAttribute(u,l.clone(e))}let r=t.morphAttributes;for(let u in r){let l=[],f=r[u];for(let h=0,d=f.length;h<d;h++)l.push(f[h].clone(e));this.morphAttributes[u]=l}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let u=0,l=a.length;u<l;u++){let f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nf=new Bt,qi=new ri,Wo=new ts,Uf=new A,Ps=new A,Is=new A,Ls=new A,dl=new A,Xo=new A,qo=new et,Yo=new et,Zo=new et,Bf=new A,Of=new A,Ff=new A,jo=new A,$o=new A,ie=class extends sn{constructor(t=new Ce,e=new qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Xo.set(0,0,0);for(let c=0,u=r.length;c<u;c++){let l=o[c],f=r[c];l!==0&&(dl.fromBufferAttribute(f,t),a?Xo.addScaledVector(dl,l):Xo.addScaledVector(dl.sub(e),l))}e.add(Xo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(r),qi.copy(t.ray).recast(t.near),!(Wo.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Wo,Uf)===null||qi.origin.distanceToSquared(Uf)>(t.far-t.near)**2))&&(Nf.copy(r).invert(),qi.copy(t.ray).applyMatrix4(Nf),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,u=r.attributes.uv,l=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let m=h[g],p=a[m.materialIndex],x=Math.max(m.start,d.start),_=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,S=_;v<S;v+=3){let E=o.getX(v),T=o.getX(v+1),R=o.getX(v+2);s=Jo(this,p,t,n,u,l,f,E,T,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let x=o.getX(m),_=o.getX(m+1),v=o.getX(m+2);s=Jo(this,a,t,n,u,l,f,x,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let m=h[g],p=a[m.materialIndex],x=Math.max(m.start,d.start),_=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,S=_;v<S;v+=3){let E=v,T=v+1,R=v+2;s=Jo(this,p,t,n,u,l,f,E,T,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let x=m,_=m+1,v=m+2;s=Jo(this,a,t,n,u,l,f,x,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function R0(i,t,e,n,s,r,a,o){let c;if(t.side===Fe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Dn,o),c===null)return null;$o.copy(o),$o.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo($o);return u<e.near||u>e.far?null:{distance:u,point:$o.clone(),object:i}}function Jo(i,t,e,n,s,r,a,o,c,u){i.getVertexPosition(o,Ps),i.getVertexPosition(c,Is),i.getVertexPosition(u,Ls);let l=R0(i,t,e,n,Ps,Is,Ls,jo);if(l){s&&(qo.fromBufferAttribute(s,o),Yo.fromBufferAttribute(s,c),Zo.fromBufferAttribute(s,u),l.uv=le.getInterpolation(jo,Ps,Is,Ls,qo,Yo,Zo,new et)),r&&(qo.fromBufferAttribute(r,o),Yo.fromBufferAttribute(r,c),Zo.fromBufferAttribute(r,u),l.uv1=le.getInterpolation(jo,Ps,Is,Ls,qo,Yo,Zo,new et),l.uv2=l.uv1),a&&(Bf.fromBufferAttribute(a,o),Of.fromBufferAttribute(a,c),Ff.fromBufferAttribute(a,u),l.normal=le.getInterpolation(jo,Ps,Is,Ls,Bf,Of,Ff,new A),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let f={a:o,b:c,c:u,normal:new A,materialIndex:0};le.getNormal(Ps,Is,Ls,f.normal),l.face=f}return l}var Wn=class i extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],u=[],l=[],f=[],h=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(f,2));function g(y,m,p,x,_,v,S,E,T,R,b){let M=v/T,L=S/R,U=v/2,B=S/2,P=E/2,O=T+1,H=R+1,W=0,G=0,j=new A;for(let tt=0;tt<H;tt++){let J=tt*L-B;for(let mt=0;mt<O;mt++){let Z=mt*M-U;j[y]=Z*x,j[m]=J*_,j[p]=P,u.push(j.x,j.y,j.z),j[y]=0,j[m]=0,j[p]=E>0?1:-1,l.push(j.x,j.y,j.z),f.push(mt/T),f.push(1-tt/R),W+=1}}for(let tt=0;tt<R;tt++)for(let J=0;J<T;J++){let mt=h+J+O*tt,Z=h+J+O*(tt+1),F=h+(J+1)+O*(tt+1),$=h+(J+1)+O*tt;c.push(mt,Z,$),c.push(Z,F,$),G+=6}o.addGroup(d,G,b),d+=G,h+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ys(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function en(i){let t={};for(let e=0;e<i.length;e++){let n=Ys(i[e]);for(let s in n)t[s]=n[s]}return t}function C0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Pd(i){return i.getRenderTarget()===null?i.outputColorSpace:re.workingColorSpace}var P0={clone:Ys,merge:en},I0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,oi=class extends es{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I0,this.fragmentShader=L0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=C0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Sa=class extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$e=class extends Sa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Br*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/u,s*=a.width/c,n*=a.height/u}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ds=-90,Ns=1,Nl=class extends sn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $e(Ds,Ns,t,e);s.layers=this.layers,this.add(s);let r=new $e(Ds,Ns,t,e);r.layers=this.layers,this.add(r);let a=new $e(Ds,Ns,t,e);a.layers=this.layers,this.add(a);let o=new $e(Ds,Ns,t,e);o.layers=this.layers,this.add(o);let c=new $e(Ds,Ns,t,e);c.layers=this.layers,this.add(c);let u=new $e(Ds,Ns,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let u of e)this.remove(u);if(t===ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,u,l]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,u),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,l),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ma=class extends bn{constructor(t,e,n,s,r,a,o,c,u,l){t=t!==void 0?t:[],e=e!==void 0?e:Gs,super(t,e,n,s,r,a,o,c,u,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ul=class extends si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Fr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Qi?Se:yn),this.texture=new Ma(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Wn(5,5,5),r=new oi({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:Ai});r.uniforms.tEquirect.value=e;let a=new ie(s,r),o=e.minFilter;return e.minFilter===Gr&&(e.minFilter=xn),new Nl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},pl=new A,D0=new A,N0=new Vt,We=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=pl.subVectors(n,e).cross(D0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(pl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||N0.getNormalMatrix(t),s=this.coplanarPoint(pl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yi=new ts,Ko=new A,qr=class{constructor(t=new We,e=new We,n=new We,s=new We,r=new We,a=new We){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ni){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],u=s[4],l=s[5],f=s[6],h=s[7],d=s[8],g=s[9],y=s[10],m=s[11],p=s[12],x=s[13],_=s[14],v=s[15];if(n[0].setComponents(c-r,h-u,m-d,v-p).normalize(),n[1].setComponents(c+r,h+u,m+d,v+p).normalize(),n[2].setComponents(c+a,h+l,m+g,v+x).normalize(),n[3].setComponents(c-a,h-l,m-g,v-x).normalize(),n[4].setComponents(c-o,h-f,m-y,v-_).normalize(),e===ni)n[5].setComponents(c+o,h+f,m+y,v+_).normalize();else if(e===fa)n[5].setComponents(o,f,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(t){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ko.x=s.normal.x>0?t.max.x:t.min.x,Ko.y=s.normal.y>0?t.max.y:t.min.y,Ko.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Id(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function U0(i,t){let e=t.isWebGL2,n=new WeakMap;function s(u,l){let f=u.array,h=u.usage,d=f.byteLength,g=i.createBuffer();i.bindBuffer(l,g),i.bufferData(l,f,h),u.onUploadCallback();let y;if(f instanceof Float32Array)y=i.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(e)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=i.SHORT;else if(f instanceof Uint32Array)y=i.UNSIGNED_INT;else if(f instanceof Int32Array)y=i.INT;else if(f instanceof Int8Array)y=i.BYTE;else if(f instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:d}}function r(u,l,f){let h=l.array,d=l._updateRange,g=l.updateRanges;if(i.bindBuffer(f,u),d.count===-1&&g.length===0&&i.bufferSubData(f,0,h),g.length!==0){for(let y=0,m=g.length;y<m;y++){let p=g[y];e?i.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count):i.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h.subarray(p.start,p.start+p.count))}l.clearUpdateRanges()}d.count!==-1&&(e?i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),l.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);let l=n.get(u);l&&(i.deleteBuffer(l.buffer),n.delete(u))}function c(u,l){if(u.isGLBufferAttribute){let h=n.get(u);(!h||h.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);let f=n.get(u);if(f===void 0)n.set(u,s(u,l));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,u,l),f.version=u.version}}return{get:a,remove:o,update:c}}var ai=class i extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),u=o+1,l=c+1,f=t/o,h=e/c,d=[],g=[],y=[],m=[];for(let p=0;p<l;p++){let x=p*h-a;for(let _=0;_<u;_++){let v=_*f-r;g.push(v,-x,0),y.push(0,0,1),m.push(_/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){let _=x+u*p,v=x+u*(p+1),S=x+1+u*(p+1),E=x+1+u*p;d.push(_,v,E),d.push(v,S,E)}this.setIndex(d),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(y,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},B0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,O0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,F0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,z0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,k0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,V0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,G0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,X0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,q0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,j0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,n_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,i_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,s_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,r_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,o_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,a_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,c_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f_="gl_FragColor = linearToOutputTexel( gl_FragColor );",d_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,p_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,m_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,g_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,__=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,y_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,T_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,E_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,C_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,P_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,U_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,B_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,O_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,F_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,V_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,G_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,q_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,J_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,K_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Q_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ix=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ox=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ax=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ux=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,px=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_x=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,xx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ex=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Px=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Nx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ux=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Gx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Wx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$x=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ty=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ey=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ny=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ry=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,oy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ay=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ly=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,py=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:B0,alphahash_pars_fragment:O0,alphamap_fragment:F0,alphamap_pars_fragment:z0,alphatest_fragment:H0,alphatest_pars_fragment:k0,aomap_fragment:V0,aomap_pars_fragment:G0,batching_pars_vertex:W0,batching_vertex:X0,begin_vertex:q0,beginnormal_vertex:Y0,bsdfs:Z0,iridescence_fragment:j0,bumpmap_pars_fragment:$0,clipping_planes_fragment:J0,clipping_planes_pars_fragment:K0,clipping_planes_pars_vertex:Q0,clipping_planes_vertex:t_,color_fragment:e_,color_pars_fragment:n_,color_pars_vertex:i_,color_vertex:s_,common:r_,cube_uv_reflection_fragment:o_,defaultnormal_vertex:a_,displacementmap_pars_vertex:c_,displacementmap_vertex:l_,emissivemap_fragment:u_,emissivemap_pars_fragment:h_,colorspace_fragment:f_,colorspace_pars_fragment:d_,envmap_fragment:p_,envmap_common_pars_fragment:m_,envmap_pars_fragment:g_,envmap_pars_vertex:__,envmap_physical_pars_fragment:C_,envmap_vertex:x_,fog_vertex:y_,fog_pars_vertex:v_,fog_fragment:b_,fog_pars_fragment:S_,gradientmap_pars_fragment:M_,lightmap_fragment:T_,lightmap_pars_fragment:E_,lights_lambert_fragment:w_,lights_lambert_pars_fragment:A_,lights_pars_begin:R_,lights_toon_fragment:P_,lights_toon_pars_fragment:I_,lights_phong_fragment:L_,lights_phong_pars_fragment:D_,lights_physical_fragment:N_,lights_physical_pars_fragment:U_,lights_fragment_begin:B_,lights_fragment_maps:O_,lights_fragment_end:F_,logdepthbuf_fragment:z_,logdepthbuf_pars_fragment:H_,logdepthbuf_pars_vertex:k_,logdepthbuf_vertex:V_,map_fragment:G_,map_pars_fragment:W_,map_particle_fragment:X_,map_particle_pars_fragment:q_,metalnessmap_fragment:Y_,metalnessmap_pars_fragment:Z_,morphcolor_vertex:j_,morphnormal_vertex:$_,morphtarget_pars_vertex:J_,morphtarget_vertex:K_,normal_fragment_begin:Q_,normal_fragment_maps:tx,normal_pars_fragment:ex,normal_pars_vertex:nx,normal_vertex:ix,normalmap_pars_fragment:sx,clearcoat_normal_fragment_begin:rx,clearcoat_normal_fragment_maps:ox,clearcoat_pars_fragment:ax,iridescence_pars_fragment:cx,opaque_fragment:lx,packing:ux,premultiplied_alpha_fragment:hx,project_vertex:fx,dithering_fragment:dx,dithering_pars_fragment:px,roughnessmap_fragment:mx,roughnessmap_pars_fragment:gx,shadowmap_pars_fragment:_x,shadowmap_pars_vertex:xx,shadowmap_vertex:yx,shadowmask_pars_fragment:vx,skinbase_vertex:bx,skinning_pars_vertex:Sx,skinning_vertex:Mx,skinnormal_vertex:Tx,specularmap_fragment:Ex,specularmap_pars_fragment:wx,tonemapping_fragment:Ax,tonemapping_pars_fragment:Rx,transmission_fragment:Cx,transmission_pars_fragment:Px,uv_pars_fragment:Ix,uv_pars_vertex:Lx,uv_vertex:Dx,worldpos_vertex:Nx,background_vert:Ux,background_frag:Bx,backgroundCube_vert:Ox,backgroundCube_frag:Fx,cube_vert:zx,cube_frag:Hx,depth_vert:kx,depth_frag:Vx,distanceRGBA_vert:Gx,distanceRGBA_frag:Wx,equirect_vert:Xx,equirect_frag:qx,linedashed_vert:Yx,linedashed_frag:Zx,meshbasic_vert:jx,meshbasic_frag:$x,meshlambert_vert:Jx,meshlambert_frag:Kx,meshmatcap_vert:Qx,meshmatcap_frag:ty,meshnormal_vert:ey,meshnormal_frag:ny,meshphong_vert:iy,meshphong_frag:sy,meshphysical_vert:ry,meshphysical_frag:oy,meshtoon_vert:ay,meshtoon_frag:cy,points_vert:ly,points_frag:uy,shadow_vert:hy,shadow_frag:fy,sprite_vert:dy,sprite_frag:py},xt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Vn={basic:{uniforms:en([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:en([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:en([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:en([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:en([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:en([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:en([xt.points,xt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:en([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:en([xt.common,xt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:en([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:en([xt.sprite,xt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:en([xt.common,xt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:en([xt.lights,xt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Vn.physical={uniforms:en([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var Qo={r:0,b:0,g:0};function my(i,t,e,n,s,r,a){let o=new Gt(0),c=r===!0?0:1,u,l,f=null,h=0,d=null;function g(m,p){let x=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?y(o,c):_&&_.isColor&&(y(_,1),x=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===za)?(l===void 0&&(l=new ie(new Wn(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:Ys(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=re.getTransfer(_.colorSpace)!==ce,(f!==_||h!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=_,h=_.version,d=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new ie(new ai(2,2),new oi({name:"BackgroundMaterial",uniforms:Ys(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=re.getTransfer(_.colorSpace)!==ce,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=_,h=_.version,d=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function y(m,p){m.getRGB(Qo,Pd(i)),n.buffers.color.setClear(Qo.r,Qo.g,Qo.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,y(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,y(o,c)},render:g}}function gy(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null),u=c,l=!1;function f(P,O,H,W,G){let j=!1;if(a){let tt=y(W,H,O);u!==tt&&(u=tt,d(u.object)),j=p(P,W,H,G),j&&x(P,W,H,G)}else{let tt=O.wireframe===!0;(u.geometry!==W.id||u.program!==H.id||u.wireframe!==tt)&&(u.geometry=W.id,u.program=H.id,u.wireframe=tt,j=!0)}G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(j||l)&&(l=!1,R(P,O,H,W),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function h(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function y(P,O,H){let W=H.wireframe===!0,G=o[P.id];G===void 0&&(G={},o[P.id]=G);let j=G[O.id];j===void 0&&(j={},G[O.id]=j);let tt=j[W];return tt===void 0&&(tt=m(h()),j[W]=tt),tt}function m(P){let O=[],H=[],W=[];for(let G=0;G<s;G++)O[G]=0,H[G]=0,W[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:W,object:P,attributes:{},index:null}}function p(P,O,H,W){let G=u.attributes,j=O.attributes,tt=0,J=H.getAttributes();for(let mt in J)if(J[mt].location>=0){let F=G[mt],$=j[mt];if($===void 0&&(mt==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),mt==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),F===void 0||F.attribute!==$||$&&F.data!==$.data)return!0;tt++}return u.attributesNum!==tt||u.index!==W}function x(P,O,H,W){let G={},j=O.attributes,tt=0,J=H.getAttributes();for(let mt in J)if(J[mt].location>=0){let F=j[mt];F===void 0&&(mt==="instanceMatrix"&&P.instanceMatrix&&(F=P.instanceMatrix),mt==="instanceColor"&&P.instanceColor&&(F=P.instanceColor));let $={};$.attribute=F,F&&F.data&&($.data=F.data),G[mt]=$,tt++}u.attributes=G,u.attributesNum=tt,u.index=W}function _(){let P=u.newAttributes;for(let O=0,H=P.length;O<H;O++)P[O]=0}function v(P){S(P,0)}function S(P,O){let H=u.newAttributes,W=u.enabledAttributes,G=u.attributeDivisors;H[P]=1,W[P]===0&&(i.enableVertexAttribArray(P),W[P]=1),G[P]!==O&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),G[P]=O)}function E(){let P=u.newAttributes,O=u.enabledAttributes;for(let H=0,W=O.length;H<W;H++)O[H]!==P[H]&&(i.disableVertexAttribArray(H),O[H]=0)}function T(P,O,H,W,G,j,tt){tt===!0?i.vertexAttribIPointer(P,O,H,G,j):i.vertexAttribPointer(P,O,H,W,G,j)}function R(P,O,H,W){if(n.isWebGL2===!1&&(P.isInstancedMesh||W.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let G=W.attributes,j=H.getAttributes(),tt=O.defaultAttributeValues;for(let J in j){let mt=j[J];if(mt.location>=0){let Z=G[J];if(Z===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){let F=Z.normalized,$=Z.itemSize,ct=e.get(Z);if(ct===void 0)continue;let ft=ct.buffer,Et=ct.type,Tt=ct.bytesPerElement,bt=n.isWebGL2===!0&&(Et===i.INT||Et===i.UNSIGNED_INT||Z.gpuType===_d);if(Z.isInterleavedBufferAttribute){let At=Z.data,D=At.stride,ut=Z.offset;if(At.isInstancedInterleavedBuffer){for(let Q=0;Q<mt.locationSize;Q++)S(mt.location+Q,At.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Q=0;Q<mt.locationSize;Q++)v(mt.location+Q);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let Q=0;Q<mt.locationSize;Q++)T(mt.location+Q,$/mt.locationSize,Et,F,D*Tt,(ut+$/mt.locationSize*Q)*Tt,bt)}else{if(Z.isInstancedBufferAttribute){for(let At=0;At<mt.locationSize;At++)S(mt.location+At,Z.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let At=0;At<mt.locationSize;At++)v(mt.location+At);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let At=0;At<mt.locationSize;At++)T(mt.location+At,$/mt.locationSize,Et,F,$*Tt,$/mt.locationSize*At*Tt,bt)}}else if(tt!==void 0){let F=tt[J];if(F!==void 0)switch(F.length){case 2:i.vertexAttrib2fv(mt.location,F);break;case 3:i.vertexAttrib3fv(mt.location,F);break;case 4:i.vertexAttrib4fv(mt.location,F);break;default:i.vertexAttrib1fv(mt.location,F)}}}}E()}function b(){U();for(let P in o){let O=o[P];for(let H in O){let W=O[H];for(let G in W)g(W[G].object),delete W[G];delete O[H]}delete o[P]}}function M(P){if(o[P.id]===void 0)return;let O=o[P.id];for(let H in O){let W=O[H];for(let G in W)g(W[G].object),delete W[G];delete O[H]}delete o[P.id]}function L(P){for(let O in o){let H=o[O];if(H[P.id]===void 0)continue;let W=H[P.id];for(let G in W)g(W[G].object),delete W[G];delete H[P.id]}}function U(){B(),l=!0,u!==c&&(u=c,d(u.object))}function B(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:U,resetDefaultState:B,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:v,disableUnusedAttributes:E}}function _y(i,t,e,n){let s=n.isWebGL2,r;function a(l){r=l}function o(l,f){i.drawArrays(r,l,f),e.update(f,r,1)}function c(l,f,h){if(h===0)return;let d,g;if(s)d=i,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,l,f,h),e.update(f,r,h)}function u(l,f,h){if(h===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<h;g++)this.render(l[g],f[g]);else{d.multiDrawArraysWEBGL(r,l,0,f,0,h);let g=0;for(let y=0;y<h;y++)g+=f[y];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function xy(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let u=a||t.has("WEBGL_draw_buffers"),l=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,v=a||t.has("OES_texture_float"),S=_&&v,E=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:l,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:v,floatVertexTextures:S,maxSamples:E}}function yy(i){let t=this,e=null,n=0,s=!1,r=!1,a=new We,o=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=l(f,h,0)},this.setState=function(f,h,d){let g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?l(null):u();else{let x=r?0:n,_=x*4,v=p.clippingState||null;c.value=v,v=l(g,h,_,d);for(let S=0;S!==_;++S)v[S]=e[S];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(f,h,d,g){let y=f!==null?f.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=d+y*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=d;_!==y;++_,v+=4)a.copy(f[_]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function vy(i){let t=new WeakMap;function e(a,o){return o===Al?a.mapping=Gs:o===Rl&&(a.mapping=Ws),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Al||o===Rl)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let u=new Ul(c.height/2);return u.fromEquirectangularTexture(i,a),t.set(a,u),a.addEventListener("dispose",s),e(u.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ta=class extends Sa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Os=4,zf=[.125,.215,.35,.446,.526,.582],$i=20,ml=new Ta,Hf=new Gt,gl=null,_l=0,xl=0,Zi=(1+Math.sqrt(5))/2,Us=1/Zi,kf=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,Zi,Us),new A(0,Zi,-Us),new A(Us,0,Zi),new A(-Us,0,Zi),new A(Zi,Us,0),new A(-Zi,Us,0)],Zs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){gl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(gl,_l,xl),t.scissorTest=!1,ta(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gs||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Wr,format:Ln,colorSpace:ii,depthBuffer:!1},s=Vf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vf(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=by(r)),this._blurMaterial=Sy(r,t,e)}return s}_compileMaterial(t){let e=new ie(this._lodPlanes[0],t);this._renderer.compile(e,ml)}_sceneToCubeUV(t,e,n,s){let o=new $e(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],l=this._renderer,f=l.autoClear,h=l.toneMapping;l.getClearColor(Hf),l.toneMapping=Ri,l.autoClear=!1;let d=new qs({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new ie(new Wn,d),y=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,y=!0):(d.color.copy(Hf),y=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(u[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,u[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,u[p]));let _=this._cubeSize;ta(s,x*_,p>2?_:0,_,_),l.setRenderTarget(s),y&&l.render(g,o),l.render(t,o)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=h,l.autoClear=f,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Gs||t.mapping===Ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ie(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;ta(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ml)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=kf[(s-1)%kf.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,f=new ie(this._lodPlanes[s],u),h=u.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*$i-1),y=r/g,m=isFinite(r)?1+Math.floor(l*y):$i;m>$i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$i}`);let p=[],x=0;for(let T=0;T<$i;++T){let R=T/y,b=Math.exp(-R*R/2);p.push(b),T===0?x+=b:T<m&&(x+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-n;let v=this._sizeLods[s],S=3*v*(s>_-Os?s-_+Os:0),E=4*(this._cubeSize-v);ta(e,S,E,3*v,2*v),c.setRenderTarget(e),c.render(f,ml)}};function by(i){let t=[],e=[],n=[],s=i,r=i-Os+1+zf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Os?c=zf[a-i+Os-1]:a===0&&(c=0),n.push(c);let u=1/(o-2),l=-u,f=1+u,h=[l,l,f,l,f,f,l,l,f,f,l,f],d=6,g=6,y=3,m=2,p=1,x=new Float32Array(y*g*d),_=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let E=0;E<d;E++){let T=E%3*2/3-1,R=E>2?0:-1,b=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];x.set(b,y*g*E),_.set(h,m*g*E);let M=[E,E,E,E,E,E];v.set(M,p*g*E)}let S=new Ce;S.setAttribute("position",new fe(x,y)),S.setAttribute("uv",new fe(_,m)),S.setAttribute("faceIndex",new fe(v,p)),t.push(S),s>Os&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Vf(i,t,e){let n=new si(i,t,e);return n.texture.mapping=za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ta(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Sy(i,t,e){let n=new Float32Array($i),s=new A(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Gf(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Wf(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function xu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function My(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,u=c===Al||c===Rl,l=c===Gs||c===Ws;if(u||l)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=t.get(o);return e===null&&(e=new Zs(i)),f=u?e.fromEquirectangular(o,f):e.fromCubemap(o,f),t.set(o,f),f.texture}else{if(t.has(o))return t.get(o).texture;{let f=o.image;if(u&&f&&f.height>0||l&&f&&s(f)){e===null&&(e=new Zs(i));let h=u?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,h),o.addEventListener("dispose",r),h.texture}else return null}}}return o}function s(o){let c=0,u=6;for(let l=0;l<u;l++)o[l]!==void 0&&c++;return c===u}function r(o){let c=o.target;c.removeEventListener("dispose",r);let u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ty(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ey(i,t,e,n){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);for(let g in h.morphAttributes){let y=h.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)t.remove(y[m])}h.removeEventListener("dispose",a),delete s[h.id];let d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(f){let h=f.attributes;for(let g in h)t.update(h[g],i.ARRAY_BUFFER);let d=f.morphAttributes;for(let g in d){let y=d[g];for(let m=0,p=y.length;m<p;m++)t.update(y[m],i.ARRAY_BUFFER)}}function u(f){let h=[],d=f.index,g=f.attributes.position,y=0;if(d!==null){let x=d.array;y=d.version;for(let _=0,v=x.length;_<v;_+=3){let S=x[_+0],E=x[_+1],T=x[_+2];h.push(S,E,E,T,T,S)}}else if(g!==void 0){let x=g.array;y=g.version;for(let _=0,v=x.length/3-1;_<v;_+=3){let S=_+0,E=_+1,T=_+2;h.push(S,E,E,T,T,S)}}else return;let m=new(Rd(h)?ba:va)(h,1);m.version=y;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function l(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&u(f)}else u(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:l}}function wy(i,t,e,n){let s=n.isWebGL2,r;function a(d){r=d}let o,c;function u(d){o=d.type,c=d.bytesPerElement}function l(d,g){i.drawElements(r,g,o,d*c),e.update(g,r,1)}function f(d,g,y){if(y===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,d*c,y),e.update(g,r,y)}function h(d,g,y){if(y===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<y;p++)this.render(d[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,d,0,y);let p=0;for(let x=0;x<y;x++)p+=g[x];e.update(p,r,1)}}this.setMode=a,this.setIndex=u,this.render=l,this.renderInstances=f,this.renderMultiDraw=h}function Ay(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ry(i,t){return i[0]-t[0]}function Cy(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Py(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new Kt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function c(u,l,f){let h=u.morphTargetInfluences;if(t.isWebGL2===!0){let d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,g=d!==void 0?d.length:0,y=r.get(l);if(y===void 0||y.count!==g){let P=function(){U.dispose(),r.delete(l),l.removeEventListener("dispose",P)};y!==void 0&&y.texture.dispose();let x=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,S=l.morphAttributes.position||[],E=l.morphAttributes.normal||[],T=l.morphAttributes.color||[],R=0;x===!0&&(R=1),_===!0&&(R=2),v===!0&&(R=3);let b=l.attributes.position.count*R,M=1;b>t.maxTextureSize&&(M=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let L=new Float32Array(b*M*4*g),U=new _a(L,b,M,g);U.type=wi,U.needsUpdate=!0;let B=R*4;for(let O=0;O<g;O++){let H=S[O],W=E[O],G=T[O],j=b*M*4*O;for(let tt=0;tt<H.count;tt++){let J=tt*B;x===!0&&(a.fromBufferAttribute(H,tt),L[j+J+0]=a.x,L[j+J+1]=a.y,L[j+J+2]=a.z,L[j+J+3]=0),_===!0&&(a.fromBufferAttribute(W,tt),L[j+J+4]=a.x,L[j+J+5]=a.y,L[j+J+6]=a.z,L[j+J+7]=0),v===!0&&(a.fromBufferAttribute(G,tt),L[j+J+8]=a.x,L[j+J+9]=a.y,L[j+J+10]=a.z,L[j+J+11]=G.itemSize===4?a.w:1)}}y={count:g,texture:U,size:new et(b,M)},r.set(l,y),l.addEventListener("dispose",P)}let m=0;for(let x=0;x<h.length;x++)m+=h[x];let p=l.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",p),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",y.texture,e),f.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}else{let d=h===void 0?0:h.length,g=n[l.id];if(g===void 0||g.length!==d){g=[];for(let _=0;_<d;_++)g[_]=[_,0];n[l.id]=g}for(let _=0;_<d;_++){let v=g[_];v[0]=_,v[1]=h[_]}g.sort(Cy);for(let _=0;_<8;_++)_<d&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(Ry);let y=l.morphAttributes.position,m=l.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let v=o[_],S=v[0],E=v[1];S!==Number.MAX_SAFE_INTEGER&&E?(y&&l.getAttribute("morphTarget"+_)!==y[S]&&l.setAttribute("morphTarget"+_,y[S]),m&&l.getAttribute("morphNormal"+_)!==m[S]&&l.setAttribute("morphNormal"+_,m[S]),s[_]=E,p+=E):(y&&l.hasAttribute("morphTarget"+_)===!0&&l.deleteAttribute("morphTarget"+_),m&&l.hasAttribute("morphNormal"+_)===!0&&l.deleteAttribute("morphNormal"+_),s[_]=0)}let x=l.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Iy(i,t,e,n){let s=new WeakMap;function r(c){let u=n.render.frame,l=c.geometry,f=t.get(c,l);if(s.get(f)!==u&&(t.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function a(){s=new WeakMap}function o(c){let u=c.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:a}}var Ea=class extends bn{constructor(t,e,n,s,r,a,o,c,u,l){if(l=l!==void 0?l:Ki,l!==Ki&&l!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Ki&&(n=Ei),n===void 0&&l===Xs&&(n=Ji),super(null,s,r,a,o,c,l,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:nn,this.minFilter=c!==void 0?c:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ld=new bn,Dd=new Ea(1,1);Dd.compareFunction=wd;var Nd=new _a,Ud=new Dl,Bd=new Ma,Xf=[],qf=[],Yf=new Float32Array(16),Zf=new Float32Array(9),jf=new Float32Array(4);function Qs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Xf[s];if(r===void 0&&(r=new Float32Array(s),Xf[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ka(i,t){let e=qf[t];e===void 0&&(e=new Int32Array(t),qf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ly(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Dy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function Ny(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function Uy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function By(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;jf.set(n),i.uniformMatrix2fv(this.addr,!1,jf),Ie(e,n)}}function Oy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Zf.set(n),i.uniformMatrix3fv(this.addr,!1,Zf),Ie(e,n)}}function Fy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Yf.set(n),i.uniformMatrix4fv(this.addr,!1,Yf),Ie(e,n)}}function zy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Hy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function ky(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function Vy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function Gy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function Xy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function qy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function Yy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Dd:Ld;e.setTexture2D(t||r,s)}function Zy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ud,s)}function jy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Bd,s)}function $y(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Nd,s)}function Jy(i){switch(i){case 5126:return Ly;case 35664:return Dy;case 35665:return Ny;case 35666:return Uy;case 35674:return By;case 35675:return Oy;case 35676:return Fy;case 5124:case 35670:return zy;case 35667:case 35671:return Hy;case 35668:case 35672:return ky;case 35669:case 35673:return Vy;case 5125:return Gy;case 36294:return Wy;case 36295:return Xy;case 36296:return qy;case 35678:case 36198:case 36298:case 36306:case 35682:return Yy;case 35679:case 36299:case 36307:return Zy;case 35680:case 36300:case 36308:case 36293:return jy;case 36289:case 36303:case 36311:case 36292:return $y}}function Ky(i,t){i.uniform1fv(this.addr,t)}function Qy(i,t){let e=Qs(t,this.size,2);i.uniform2fv(this.addr,e)}function tv(i,t){let e=Qs(t,this.size,3);i.uniform3fv(this.addr,e)}function ev(i,t){let e=Qs(t,this.size,4);i.uniform4fv(this.addr,e)}function nv(i,t){let e=Qs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function iv(i,t){let e=Qs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function sv(i,t){let e=Qs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function rv(i,t){i.uniform1iv(this.addr,t)}function ov(i,t){i.uniform2iv(this.addr,t)}function av(i,t){i.uniform3iv(this.addr,t)}function cv(i,t){i.uniform4iv(this.addr,t)}function lv(i,t){i.uniform1uiv(this.addr,t)}function uv(i,t){i.uniform2uiv(this.addr,t)}function hv(i,t){i.uniform3uiv(this.addr,t)}function fv(i,t){i.uniform4uiv(this.addr,t)}function dv(i,t,e){let n=this.cache,s=t.length,r=ka(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Ld,r[a])}function pv(i,t,e){let n=this.cache,s=t.length,r=ka(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ud,r[a])}function mv(i,t,e){let n=this.cache,s=t.length,r=ka(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Bd,r[a])}function gv(i,t,e){let n=this.cache,s=t.length,r=ka(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Nd,r[a])}function _v(i){switch(i){case 5126:return Ky;case 35664:return Qy;case 35665:return tv;case 35666:return ev;case 35674:return nv;case 35675:return iv;case 35676:return sv;case 5124:case 35670:return rv;case 35667:case 35671:return ov;case 35668:case 35672:return av;case 35669:case 35673:return cv;case 5125:return lv;case 36294:return uv;case 36295:return hv;case 36296:return fv;case 35678:case 36198:case 36298:case 36306:case 35682:return dv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}var Bl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Jy(e.type)}},Ol=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_v(e.type)}},Fl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},yl=/(\w+)(\])?(\[|\.)?/g;function $f(i,t){i.seq.push(t),i.map[t.id]=t}function xv(i,t,e){let n=i.name,s=n.length;for(yl.lastIndex=0;;){let r=yl.exec(n),a=yl.lastIndex,o=r[1],c=r[2]==="]",u=r[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===s){$f(e,u===void 0?new Bl(o,i,t):new Ol(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Fl(o),$f(e,f)),e=f}}}var Vs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);xv(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Jf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var yv=37297,vv=0;function bv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Sv(i){let t=re.getPrimaries(re.workingColorSpace),e=re.getPrimaries(i),n;switch(t===e?n="":t===ha&&e===ua?n="LinearDisplayP3ToLinearSRGB":t===ua&&e===ha&&(n="LinearSRGBToLinearDisplayP3"),i){case ii:case Ha:return[n,"LinearTransferOETF"];case Se:case gu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Kf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+bv(i.getShaderSource(t),a)}else return s}function Mv(i,t){let e=Sv(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Tv(i,t){let e;switch(t){case Ig:e="Linear";break;case Lg:e="Reinhard";break;case Dg:e="OptimizedCineon";break;case du:e="ACESFilmic";break;case Ug:e="AgX";break;case Ng:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ev(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fs).join(`
`)}function wv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Fs).join(`
`)}function Av(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Fs(i){return i!==""}function Qf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function td(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(i){return i.replace(Cv,Iv)}var Pv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Iv(i,t){let e=kt[t];if(e===void 0){let n=Pv.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return zl(e)}var Lv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ed(i){return i.replace(Lv,Dv)}function Dv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nd(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Nv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===fu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ei&&(t="SHADOWMAP_TYPE_VSM"),t}function Uv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gs:case Ws:t="ENVMAP_TYPE_CUBE";break;case za:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Bv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ws:t="ENVMAP_MODE_REFRACTION";break}return t}function Ov(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case md:t="ENVMAP_BLENDING_MULTIPLY";break;case Cg:t="ENVMAP_BLENDING_MIX";break;case Pg:t="ENVMAP_BLENDING_ADD";break}return t}function Fv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function zv(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Nv(e),u=Uv(e),l=Bv(e),f=Ov(e),h=Fv(e),d=e.isWebGL2?"":Ev(e),g=wv(e),y=Av(r),m=s.createProgram(),p,x,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Fs).join(`
`),p.length>0&&(p+=`
`),x=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Fs).join(`
`),x.length>0&&(x+=`
`)):(p=[nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),x=[d,nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+l:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ri?"#define TONE_MAPPING":"",e.toneMapping!==Ri?kt.tonemapping_pars_fragment:"",e.toneMapping!==Ri?Tv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,Mv("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fs).join(`
`)),a=zl(a),a=Qf(a,e),a=td(a,e),o=zl(o),o=Qf(o,e),o=td(o,e),a=ed(a),o=ed(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===bf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let v=_+p+a,S=_+x+o,E=Jf(s,s.VERTEX_SHADER,v),T=Jf(s,s.FRAGMENT_SHADER,S);s.attachShader(m,E),s.attachShader(m,T),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function R(U){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(E).trim(),O=s.getShaderInfoLog(T).trim(),H=!0,W=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,E,T);else{let G=Kf(s,E,"vertex"),j=Kf(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+B+`
`+G+`
`+j)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(P===""||O==="")&&(W=!1);W&&(U.diagnostics={runnable:H,programLog:B,vertexShader:{log:P,prefix:p},fragmentShader:{log:O,prefix:x}})}s.deleteShader(E),s.deleteShader(T),b=new Vs(s,m),M=Rv(s,m)}let b;this.getUniforms=function(){return b===void 0&&R(this),b};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(m,yv)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vv++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=T,this}var Hv=0,Hl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new kl(t),e.set(t,n)),n}},kl=class{constructor(t){this.id=Hv++,this.code=t,this.usedTimes=0}};function kv(i,t,e,n,s,r,a){let o=new ya,c=new Hl,u=[],l=s.isWebGL2,f=s.logarithmicDepthBuffer,h=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return b===0?"uv":`uv${b}`}function m(b,M,L,U,B){let P=U.fog,O=B.geometry,H=b.isMeshStandardMaterial?U.environment:null,W=(b.isMeshStandardMaterial?e:t).get(b.envMap||H),G=W&&W.mapping===za?W.image.height:null,j=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let tt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,J=tt!==void 0?tt.length:0,mt=0;O.morphAttributes.position!==void 0&&(mt=1),O.morphAttributes.normal!==void 0&&(mt=2),O.morphAttributes.color!==void 0&&(mt=3);let Z,F,$,ct;if(j){let Ke=Vn[j];Z=Ke.vertexShader,F=Ke.fragmentShader}else Z=b.vertexShader,F=b.fragmentShader,c.update(b),$=c.getVertexShaderID(b),ct=c.getFragmentShaderID(b);let ft=i.getRenderTarget(),Et=B.isInstancedMesh===!0,Tt=B.isBatchedMesh===!0,bt=!!b.map,At=!!b.matcap,D=!!W,ut=!!b.aoMap,Q=!!b.lightMap,lt=!!b.bumpMap,K=!!b.normalMap,Rt=!!b.displacementMap,vt=!!b.emissiveMap,C=!!b.metalnessMap,w=!!b.roughnessMap,V=b.anisotropy>0,at=b.clearcoat>0,st=b.iridescence>0,nt=b.sheen>0,wt=b.transmission>0,yt=V&&!!b.anisotropyMap,St=at&&!!b.clearcoatMap,Dt=at&&!!b.clearcoatNormalMap,Ft=at&&!!b.clearcoatRoughnessMap,rt=st&&!!b.iridescenceMap,qt=st&&!!b.iridescenceThicknessMap,N=nt&&!!b.sheenColorMap,ot=nt&&!!b.sheenRoughnessMap,_t=!!b.specularMap,ht=!!b.specularColorMap,Ct=!!b.specularIntensityMap,Yt=wt&&!!b.transmissionMap,$t=wt&&!!b.thicknessMap,Wt=!!b.gradientMap,gt=!!b.alphaMap,z=b.alphaTest>0,dt=!!b.alphaHash,pt=!!b.extensions,Nt=!!O.attributes.uv1,Pt=!!O.attributes.uv2,te=!!O.attributes.uv3,ne=Ri;return b.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(ne=i.toneMapping),{isWebGL2:l,shaderID:j,shaderType:b.type,shaderName:b.name,vertexShader:Z,fragmentShader:F,defines:b.defines,customVertexShaderID:$,customFragmentShaderID:ct,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Tt,instancing:Et,instancingColor:Et&&B.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:ii,map:bt,matcap:At,envMap:D,envMapMode:D&&W.mapping,envMapCubeUVHeight:G,aoMap:ut,lightMap:Q,bumpMap:lt,normalMap:K,displacementMap:h&&Rt,emissiveMap:vt,normalMapObjectSpace:K&&b.normalMapType===qg,normalMapTangentSpace:K&&b.normalMapType===Ed,metalnessMap:C,roughnessMap:w,anisotropy:V,anisotropyMap:yt,clearcoat:at,clearcoatMap:St,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Ft,iridescence:st,iridescenceMap:rt,iridescenceThicknessMap:qt,sheen:nt,sheenColorMap:N,sheenRoughnessMap:ot,specularMap:_t,specularColorMap:ht,specularIntensityMap:Ct,transmission:wt,transmissionMap:Yt,thicknessMap:$t,gradientMap:Wt,opaque:b.transparent===!1&&b.blending===Hs,alphaMap:gt,alphaTest:z,alphaHash:dt,combine:b.combine,mapUv:bt&&y(b.map.channel),aoMapUv:ut&&y(b.aoMap.channel),lightMapUv:Q&&y(b.lightMap.channel),bumpMapUv:lt&&y(b.bumpMap.channel),normalMapUv:K&&y(b.normalMap.channel),displacementMapUv:Rt&&y(b.displacementMap.channel),emissiveMapUv:vt&&y(b.emissiveMap.channel),metalnessMapUv:C&&y(b.metalnessMap.channel),roughnessMapUv:w&&y(b.roughnessMap.channel),anisotropyMapUv:yt&&y(b.anisotropyMap.channel),clearcoatMapUv:St&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:N&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:ot&&y(b.sheenRoughnessMap.channel),specularMapUv:_t&&y(b.specularMap.channel),specularColorMapUv:ht&&y(b.specularColorMap.channel),specularIntensityMapUv:Ct&&y(b.specularIntensityMap.channel),transmissionMapUv:Yt&&y(b.transmissionMap.channel),thicknessMapUv:$t&&y(b.thicknessMap.channel),alphaMapUv:gt&&y(b.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(K||V),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Nt,vertexUv2s:Pt,vertexUv3s:te,pointsUvs:B.isPoints===!0&&!!O.attributes.uv&&(bt||gt),fog:!!P,useFog:b.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:B.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:mt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,useLegacyLights:i._useLegacyLights,decodeVideoTexture:bt&&b.map.isVideoTexture===!0&&re.getTransfer(b.map.colorSpace)===ce,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===cn,flipSided:b.side===Fe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:pt&&b.extensions.derivatives===!0,extensionFragDepth:pt&&b.extensions.fragDepth===!0,extensionDrawBuffers:pt&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:pt&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pt&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let L in b.defines)M.push(L),M.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(x(M,b),_(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function x(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function _(b,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function v(b){let M=g[b.type],L;if(M){let U=Vn[M];L=P0.clone(U.uniforms)}else L=b.uniforms;return L}function S(b,M){let L;for(let U=0,B=u.length;U<B;U++){let P=u[U];if(P.cacheKey===M){L=P,++L.usedTimes;break}}return L===void 0&&(L=new zv(i,M,b,r),u.push(L)),L}function E(b){if(--b.usedTimes===0){let M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function T(b){c.remove(b)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:S,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:R}}function Vv(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Gv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function id(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function sd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,h,d,g,y,m){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:y,group:m},i[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=y,p.group=m),t++,p}function o(f,h,d,g,y,m){let p=a(f,h,d,g,y,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(f,h,d,g,y,m){let p=a(f,h,d,g,y,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function u(f,h){e.length>1&&e.sort(f||Gv),n.length>1&&n.sort(h||id),s.length>1&&s.sort(h||id)}function l(){for(let f=t,h=i.length;f<h;f++){let d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:l,sort:u}}function Wv(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new sd,i.set(n,[a])):s>=r.length?(a=new sd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Xv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Gt};break;case"SpotLight":e={position:new A,direction:new A,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function qv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Yv=0;function Zv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function jv(i,t){let e=new Xv,n=qv(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)s.probe.push(new A);let r=new A,a=new Bt,o=new Bt;function c(l,f){let h=0,d=0,g=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let y=0,m=0,p=0,x=0,_=0,v=0,S=0,E=0,T=0,R=0,b=0;l.sort(Zv);let M=f===!0?Math.PI:1;for(let U=0,B=l.length;U<B;U++){let P=l[U],O=P.color,H=P.intensity,W=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*H*M,d+=O.g*H*M,g+=O.b*H*M;else if(P.isLightProbe){for(let j=0;j<9;j++)s.probe[j].addScaledVector(P.sh.coefficients[j],H);b++}else if(P.isDirectionalLight){let j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*M),P.castShadow){let tt=P.shadow,J=n.get(P);J.shadowBias=tt.bias,J.shadowNormalBias=tt.normalBias,J.shadowRadius=tt.radius,J.shadowMapSize=tt.mapSize,s.directionalShadow[y]=J,s.directionalShadowMap[y]=G,s.directionalShadowMatrix[y]=P.shadow.matrix,v++}s.directional[y]=j,y++}else if(P.isSpotLight){let j=e.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(O).multiplyScalar(H*M),j.distance=W,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,s.spot[p]=j;let tt=P.shadow;if(P.map&&(s.spotLightMap[T]=P.map,T++,tt.updateMatrices(P),P.castShadow&&R++),s.spotLightMatrix[p]=tt.matrix,P.castShadow){let J=n.get(P);J.shadowBias=tt.bias,J.shadowNormalBias=tt.normalBias,J.shadowRadius=tt.radius,J.shadowMapSize=tt.mapSize,s.spotShadow[p]=J,s.spotShadowMap[p]=G,E++}p++}else if(P.isRectAreaLight){let j=e.get(P);j.color.copy(O).multiplyScalar(H),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),s.rectArea[x]=j,x++}else if(P.isPointLight){let j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*M),j.distance=P.distance,j.decay=P.decay,P.castShadow){let tt=P.shadow,J=n.get(P);J.shadowBias=tt.bias,J.shadowNormalBias=tt.normalBias,J.shadowRadius=tt.radius,J.shadowMapSize=tt.mapSize,J.shadowCameraNear=tt.camera.near,J.shadowCameraFar=tt.camera.far,s.pointShadow[m]=J,s.pointShadowMap[m]=G,s.pointShadowMatrix[m]=P.shadow.matrix,S++}s.point[m]=j,m++}else if(P.isHemisphereLight){let j=e.get(P);j.skyColor.copy(P.color).multiplyScalar(H*M),j.groundColor.copy(P.groundColor).multiplyScalar(H*M),s.hemi[_]=j,_++}}x>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xt.LTC_FLOAT_1,s.rectAreaLTC2=xt.LTC_FLOAT_2):(s.rectAreaLTC1=xt.LTC_HALF_1,s.rectAreaLTC2=xt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xt.LTC_FLOAT_1,s.rectAreaLTC2=xt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=xt.LTC_HALF_1,s.rectAreaLTC2=xt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=d,s.ambient[2]=g;let L=s.hash;(L.directionalLength!==y||L.pointLength!==m||L.spotLength!==p||L.rectAreaLength!==x||L.hemiLength!==_||L.numDirectionalShadows!==v||L.numPointShadows!==S||L.numSpotShadows!==E||L.numSpotMaps!==T||L.numLightProbes!==b)&&(s.directional.length=y,s.spot.length=p,s.rectArea.length=x,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=S,s.pointShadowMap.length=S,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=S,s.spotLightMatrix.length=E+T-R,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=R,s.numLightProbes=b,L.directionalLength=y,L.pointLength=m,L.spotLength=p,L.rectAreaLength=x,L.hemiLength=_,L.numDirectionalShadows=v,L.numPointShadows=S,L.numSpotShadows=E,L.numSpotMaps=T,L.numLightProbes=b,s.version=Yv++)}function u(l,f){let h=0,d=0,g=0,y=0,m=0,p=f.matrixWorldInverse;for(let x=0,_=l.length;x<_;x++){let v=l[x];if(v.isDirectionalLight){let S=s.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),h++}else if(v.isSpotLight){let S=s.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let S=s.rectArea[y];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),o.identity(),a.copy(v.matrixWorld),a.premultiply(p),o.extractRotation(a),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),y++}else if(v.isPointLight){let S=s.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let S=s.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:c,setupView:u,state:s}}function rd(i,t){let e=new jv(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(f){n.push(f)}function o(f){s.push(f)}function c(f){e.setup(n,f)}function u(f){e.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o}}function $v(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),c;return o===void 0?(c=new rd(i,t),e.set(r,[c])):a>=o.length?(c=new rd(i,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var Yr=class extends es{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Vl=class extends es{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Jv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Qv(i,t,e){let n=new qr,s=new et,r=new et,a=new Kt,o=new Yr({depthPacking:mu}),c=new Vl,u={},l=e.maxTextureSize,f={[Dn]:Fe,[Fe]:Dn,[cn]:cn},h=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Jv,fragmentShader:Kv}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ce;g.setAttribute("position",new fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ie(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pd;let p=this.type;this.render=function(E,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Ai),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let B=p!==ei&&this.type===ei,P=p===ei&&this.type!==ei;for(let O=0,H=E.length;O<H;O++){let W=E[O],G=W.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let j=G.getFrameExtents();if(s.multiply(j),r.copy(G.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/j.x),s.x=r.x*j.x,G.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/j.y),s.y=r.y*j.y,G.mapSize.y=r.y)),G.map===null||B===!0||P===!0){let J=this.type!==ei?{minFilter:nn,magFilter:nn}:{};G.map!==null&&G.map.dispose(),G.map=new si(s.x,s.y,J),G.map.texture.name=W.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let tt=G.getViewportCount();for(let J=0;J<tt;J++){let mt=G.getViewport(J);a.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),U.viewport(a),G.updateMatrices(W,J),n=G.getFrustum(),v(T,R,G.camera,W,this.type)}G.isPointLightShadow!==!0&&this.type===ei&&x(G,R),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,L)};function x(E,T){let R=t.update(y);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new si(s.x,s.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,R,h,y,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,R,d,y,null)}function _(E,T,R,b){let M=null,L=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)M=L;else if(M=R.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let U=M.uuid,B=T.uuid,P=u[U];P===void 0&&(P={},u[U]=P);let O=P[B];O===void 0&&(O=M.clone(),P[B]=O,T.addEventListener("dispose",S)),M=O}if(M.visible=T.visible,M.wireframe=T.wireframe,b===ei?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:f[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let U=i.properties.get(M);U.light=R}return M}function v(E,T,R,b,M){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===ei)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);let B=t.update(E),P=E.material;if(Array.isArray(P)){let O=B.groups;for(let H=0,W=O.length;H<W;H++){let G=O[H],j=P[G.materialIndex];if(j&&j.visible){let tt=_(E,j,b,M);E.onBeforeShadow(i,E,T,R,B,tt,G),i.renderBufferDirect(R,null,B,tt,E,G),E.onAfterShadow(i,E,T,R,B,tt,G)}}}else if(P.visible){let O=_(E,P,b,M);E.onBeforeShadow(i,E,T,R,B,O,null),i.renderBufferDirect(R,null,B,O,E,null),E.onAfterShadow(i,E,T,R,B,O,null)}}let U=E.children;for(let B=0,P=U.length;B<P;B++)v(U[B],T,R,b,M)}function S(E){E.target.removeEventListener("dispose",S);for(let R in u){let b=u[R],M=E.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}function tb(i,t,e){let n=e.isWebGL2;function s(){let z=!1,dt=new Kt,pt=null,Nt=new Kt(0,0,0,0);return{setMask:function(Pt){pt!==Pt&&!z&&(i.colorMask(Pt,Pt,Pt,Pt),pt=Pt)},setLocked:function(Pt){z=Pt},setClear:function(Pt,te,ne,Ue,Ke){Ke===!0&&(Pt*=Ue,te*=Ue,ne*=Ue),dt.set(Pt,te,ne,Ue),Nt.equals(dt)===!1&&(i.clearColor(Pt,te,ne,Ue),Nt.copy(dt))},reset:function(){z=!1,pt=null,Nt.set(-1,0,0,0)}}}function r(){let z=!1,dt=null,pt=null,Nt=null;return{setTest:function(Pt){Pt?Tt(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(Pt){dt!==Pt&&!z&&(i.depthMask(Pt),dt=Pt)},setFunc:function(Pt){if(pt!==Pt){switch(Pt){case Sg:i.depthFunc(i.NEVER);break;case Mg:i.depthFunc(i.ALWAYS);break;case Tg:i.depthFunc(i.LESS);break;case oa:i.depthFunc(i.LEQUAL);break;case Eg:i.depthFunc(i.EQUAL);break;case wg:i.depthFunc(i.GEQUAL);break;case Ag:i.depthFunc(i.GREATER);break;case Rg:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=Pt}},setLocked:function(Pt){z=Pt},setClear:function(Pt){Nt!==Pt&&(i.clearDepth(Pt),Nt=Pt)},reset:function(){z=!1,dt=null,pt=null,Nt=null}}}function a(){let z=!1,dt=null,pt=null,Nt=null,Pt=null,te=null,ne=null,Ue=null,Ke=null;return{setTest:function(ae){z||(ae?Tt(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(ae){dt!==ae&&!z&&(i.stencilMask(ae),dt=ae)},setFunc:function(ae,Qe,kn){(pt!==ae||Nt!==Qe||Pt!==kn)&&(i.stencilFunc(ae,Qe,kn),pt=ae,Nt=Qe,Pt=kn)},setOp:function(ae,Qe,kn){(te!==ae||ne!==Qe||Ue!==kn)&&(i.stencilOp(ae,Qe,kn),te=ae,ne=Qe,Ue=kn)},setLocked:function(ae){z=ae},setClear:function(ae){Ke!==ae&&(i.clearStencil(ae),Ke=ae)},reset:function(){z=!1,dt=null,pt=null,Nt=null,Pt=null,te=null,ne=null,Ue=null,Ke=null}}}let o=new s,c=new r,u=new a,l=new WeakMap,f=new WeakMap,h={},d={},g=new WeakMap,y=[],m=null,p=!1,x=null,_=null,v=null,S=null,E=null,T=null,R=null,b=new Gt(0,0,0),M=0,L=!1,U=null,B=null,P=null,O=null,H=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,j=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(tt)[1]),G=j>=1):tt.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),G=j>=2);let J=null,mt={},Z=i.getParameter(i.SCISSOR_BOX),F=i.getParameter(i.VIEWPORT),$=new Kt().fromArray(Z),ct=new Kt().fromArray(F);function ft(z,dt,pt,Nt){let Pt=new Uint8Array(4),te=i.createTexture();i.bindTexture(z,te),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ne=0;ne<pt;ne++)n&&(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)?i.texImage3D(dt,0,i.RGBA,1,1,Nt,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(dt+ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return te}let Et={};Et[i.TEXTURE_2D]=ft(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Et[i.TEXTURE_2D_ARRAY]=ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Tt(i.DEPTH_TEST),c.setFunc(oa),vt(!1),C(Oh),Tt(i.CULL_FACE),K(Ai);function Tt(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function bt(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function At(z,dt){return d[z]!==dt?(i.bindFramebuffer(z,dt),d[z]=dt,n&&(z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=dt),z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=dt)),!0):!1}function D(z,dt){let pt=y,Nt=!1;if(z)if(pt=g.get(dt),pt===void 0&&(pt=[],g.set(dt,pt)),z.isWebGLMultipleRenderTargets){let Pt=z.texture;if(pt.length!==Pt.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let te=0,ne=Pt.length;te<ne;te++)pt[te]=i.COLOR_ATTACHMENT0+te;pt.length=Pt.length,Nt=!0}}else pt[0]!==i.COLOR_ATTACHMENT0&&(pt[0]=i.COLOR_ATTACHMENT0,Nt=!0);else pt[0]!==i.BACK&&(pt[0]=i.BACK,Nt=!0);Nt&&(e.isWebGL2?i.drawBuffers(pt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(pt))}function ut(z){return m!==z?(i.useProgram(z),m=z,!0):!1}let Q={[ji]:i.FUNC_ADD,[ag]:i.FUNC_SUBTRACT,[cg]:i.FUNC_REVERSE_SUBTRACT};if(n)Q[kh]=i.MIN,Q[Vh]=i.MAX;else{let z=t.get("EXT_blend_minmax");z!==null&&(Q[kh]=z.MIN_EXT,Q[Vh]=z.MAX_EXT)}let lt={[lg]:i.ZERO,[ug]:i.ONE,[hg]:i.SRC_COLOR,[El]:i.SRC_ALPHA,[_g]:i.SRC_ALPHA_SATURATE,[mg]:i.DST_COLOR,[dg]:i.DST_ALPHA,[fg]:i.ONE_MINUS_SRC_COLOR,[wl]:i.ONE_MINUS_SRC_ALPHA,[gg]:i.ONE_MINUS_DST_COLOR,[pg]:i.ONE_MINUS_DST_ALPHA,[xg]:i.CONSTANT_COLOR,[yg]:i.ONE_MINUS_CONSTANT_COLOR,[vg]:i.CONSTANT_ALPHA,[bg]:i.ONE_MINUS_CONSTANT_ALPHA};function K(z,dt,pt,Nt,Pt,te,ne,Ue,Ke,ae){if(z===Ai){p===!0&&(bt(i.BLEND),p=!1);return}if(p===!1&&(Tt(i.BLEND),p=!0),z!==og){if(z!==x||ae!==L){if((_!==ji||E!==ji)&&(i.blendEquation(i.FUNC_ADD),_=ji,E=ji),ae)switch(z){case Hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fh:i.blendFunc(i.ONE,i.ONE);break;case zh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case zh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}v=null,S=null,T=null,R=null,b.set(0,0,0),M=0,x=z,L=ae}return}Pt=Pt||dt,te=te||pt,ne=ne||Nt,(dt!==_||Pt!==E)&&(i.blendEquationSeparate(Q[dt],Q[Pt]),_=dt,E=Pt),(pt!==v||Nt!==S||te!==T||ne!==R)&&(i.blendFuncSeparate(lt[pt],lt[Nt],lt[te],lt[ne]),v=pt,S=Nt,T=te,R=ne),(Ue.equals(b)===!1||Ke!==M)&&(i.blendColor(Ue.r,Ue.g,Ue.b,Ke),b.copy(Ue),M=Ke),x=z,L=!1}function Rt(z,dt){z.side===cn?bt(i.CULL_FACE):Tt(i.CULL_FACE);let pt=z.side===Fe;dt&&(pt=!pt),vt(pt),z.blending===Hs&&z.transparent===!1?K(Ai):K(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),o.setMask(z.colorWrite);let Nt=z.stencilWrite;u.setTest(Nt),Nt&&(u.setMask(z.stencilWriteMask),u.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),u.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),V(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Tt(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function vt(z){U!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),U=z)}function C(z){z!==sg?(Tt(i.CULL_FACE),z!==B&&(z===Oh?i.cullFace(i.BACK):z===rg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),B=z}function w(z){z!==P&&(G&&i.lineWidth(z),P=z)}function V(z,dt,pt){z?(Tt(i.POLYGON_OFFSET_FILL),(O!==dt||H!==pt)&&(i.polygonOffset(dt,pt),O=dt,H=pt)):bt(i.POLYGON_OFFSET_FILL)}function at(z){z?Tt(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function st(z){z===void 0&&(z=i.TEXTURE0+W-1),J!==z&&(i.activeTexture(z),J=z)}function nt(z,dt,pt){pt===void 0&&(J===null?pt=i.TEXTURE0+W-1:pt=J);let Nt=mt[pt];Nt===void 0&&(Nt={type:void 0,texture:void 0},mt[pt]=Nt),(Nt.type!==z||Nt.texture!==dt)&&(J!==pt&&(i.activeTexture(pt),J=pt),i.bindTexture(z,dt||Et[z]),Nt.type=z,Nt.texture=dt)}function wt(){let z=mt[J];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function yt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function St(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Dt(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ft(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function qt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function N(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ht(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ct(z){$.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),$.copy(z))}function Yt(z){ct.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),ct.copy(z))}function $t(z,dt){let pt=f.get(dt);pt===void 0&&(pt=new WeakMap,f.set(dt,pt));let Nt=pt.get(z);Nt===void 0&&(Nt=i.getUniformBlockIndex(dt,z.name),pt.set(z,Nt))}function Wt(z,dt){let Nt=f.get(dt).get(z);l.get(dt)!==Nt&&(i.uniformBlockBinding(dt,Nt,z.__bindingPointIndex),l.set(dt,Nt))}function gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},J=null,mt={},d={},g=new WeakMap,y=[],m=null,p=!1,x=null,_=null,v=null,S=null,E=null,T=null,R=null,b=new Gt(0,0,0),M=0,L=!1,U=null,B=null,P=null,O=null,H=null,$.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:Tt,disable:bt,bindFramebuffer:At,drawBuffers:D,useProgram:ut,setBlending:K,setMaterial:Rt,setFlipSided:vt,setCullFace:C,setLineWidth:w,setPolygonOffset:V,setScissorTest:at,activeTexture:st,bindTexture:nt,unbindTexture:wt,compressedTexImage2D:yt,compressedTexImage3D:St,texImage2D:_t,texImage3D:ht,updateUBOMapping:$t,uniformBlockBinding:Wt,texStorage2D:N,texStorage3D:ot,texSubImage2D:Dt,texSubImage3D:Ft,compressedTexSubImage2D:rt,compressedTexSubImage3D:qt,scissor:Ct,viewport:Yt,reset:gt}}function eb(i,t,e,n,s,r,a){let o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new WeakMap,f,h=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,w){return d?new OffscreenCanvas(C,w):pa("canvas")}function y(C,w,V,at){let st=1;if((C.width>at||C.height>at)&&(st=at/Math.max(C.width,C.height)),st<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let nt=w?da:Math.floor,wt=nt(st*C.width),yt=nt(st*C.height);f===void 0&&(f=g(wt,yt));let St=V?g(wt,yt):f;return St.width=wt,St.height=yt,St.getContext("2d").drawImage(C,0,0,wt,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+wt+"x"+yt+")."),St}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return Il(C.width)&&Il(C.height)}function p(C){return o?!1:C.wrapS!==In||C.wrapT!==In||C.minFilter!==nn&&C.minFilter!==xn}function x(C,w){return C.generateMipmaps&&w&&C.minFilter!==nn&&C.minFilter!==xn}function _(C){i.generateMipmap(C)}function v(C,w,V,at,st=!1){if(o===!1)return w;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let nt=w;if(w===i.RED&&(V===i.FLOAT&&(nt=i.R32F),V===i.HALF_FLOAT&&(nt=i.R16F),V===i.UNSIGNED_BYTE&&(nt=i.R8)),w===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(nt=i.R8UI),V===i.UNSIGNED_SHORT&&(nt=i.R16UI),V===i.UNSIGNED_INT&&(nt=i.R32UI),V===i.BYTE&&(nt=i.R8I),V===i.SHORT&&(nt=i.R16I),V===i.INT&&(nt=i.R32I)),w===i.RG&&(V===i.FLOAT&&(nt=i.RG32F),V===i.HALF_FLOAT&&(nt=i.RG16F),V===i.UNSIGNED_BYTE&&(nt=i.RG8)),w===i.RGBA){let wt=st?la:re.getTransfer(at);V===i.FLOAT&&(nt=i.RGBA32F),V===i.HALF_FLOAT&&(nt=i.RGBA16F),V===i.UNSIGNED_BYTE&&(nt=wt===ce?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function S(C,w,V){return x(C,V)===!0||C.isFramebufferTexture&&C.minFilter!==nn&&C.minFilter!==xn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function E(C){return C===nn||C===Gh||C===Xc?i.NEAREST:i.LINEAR}function T(C){let w=C.target;w.removeEventListener("dispose",T),b(w),w.isVideoTexture&&l.delete(w)}function R(C){let w=C.target;w.removeEventListener("dispose",R),L(w)}function b(C){let w=n.get(C);if(w.__webglInit===void 0)return;let V=C.source,at=h.get(V);if(at){let st=at[w.__cacheKey];st.usedTimes--,st.usedTimes===0&&M(C),Object.keys(at).length===0&&h.delete(V)}n.remove(C)}function M(C){let w=n.get(C);i.deleteTexture(w.__webglTexture);let V=C.source,at=h.get(V);delete at[w.__cacheKey],a.memory.textures--}function L(C){let w=C.texture,V=n.get(C),at=n.get(w);if(at.__webglTexture!==void 0&&(i.deleteTexture(at.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(V.__webglFramebuffer[st]))for(let nt=0;nt<V.__webglFramebuffer[st].length;nt++)i.deleteFramebuffer(V.__webglFramebuffer[st][nt]);else i.deleteFramebuffer(V.__webglFramebuffer[st]);V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer[st])}else{if(Array.isArray(V.__webglFramebuffer))for(let st=0;st<V.__webglFramebuffer.length;st++)i.deleteFramebuffer(V.__webglFramebuffer[st]);else i.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&i.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let st=0;st<V.__webglColorRenderbuffer.length;st++)V.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(V.__webglColorRenderbuffer[st]);V.__webglDepthRenderbuffer&&i.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let st=0,nt=w.length;st<nt;st++){let wt=n.get(w[st]);wt.__webglTexture&&(i.deleteTexture(wt.__webglTexture),a.memory.textures--),n.remove(w[st])}n.remove(w),n.remove(C)}let U=0;function B(){U=0}function P(){let C=U;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),U+=1,C}function O(C){let w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function H(C,w){let V=n.get(C);if(C.isVideoTexture&&Rt(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){let at=C.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(V,C,w);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+w)}function W(C,w){let V=n.get(C);if(C.version>0&&V.__version!==C.version){$(V,C,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+w)}function G(C,w){let V=n.get(C);if(C.version>0&&V.__version!==C.version){$(V,C,w);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+w)}function j(C,w){let V=n.get(C);if(C.version>0&&V.__version!==C.version){ct(V,C,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+w)}let tt={[Vr]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[Cl]:i.MIRRORED_REPEAT},J={[nn]:i.NEAREST,[Gh]:i.NEAREST_MIPMAP_NEAREST,[Xc]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[Bg]:i.LINEAR_MIPMAP_NEAREST,[Gr]:i.LINEAR_MIPMAP_LINEAR},mt={[Yg]:i.NEVER,[Qg]:i.ALWAYS,[Zg]:i.LESS,[wd]:i.LEQUAL,[jg]:i.EQUAL,[Kg]:i.GEQUAL,[$g]:i.GREATER,[Jg]:i.NOTEQUAL};function Z(C,w,V){if(V?(i.texParameteri(C,i.TEXTURE_WRAP_S,tt[w.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,tt[w.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,tt[w.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,J[w.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,J[w.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(w.wrapS!==In||w.wrapT!==In)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,E(w.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,E(w.minFilter)),w.minFilter!==nn&&w.minFilter!==xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,mt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let at=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===nn||w.minFilter!==Xc&&w.minFilter!==Gr||w.type===wi&&t.has("OES_texture_float_linear")===!1||o===!1&&w.type===Wr&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(i.texParameterf(C,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function F(C,w){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",T));let at=w.source,st=h.get(at);st===void 0&&(st={},h.set(at,st));let nt=O(w);if(nt!==C.__cacheKey){st[nt]===void 0&&(st[nt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),st[nt].usedTimes++;let wt=st[C.__cacheKey];wt!==void 0&&(st[C.__cacheKey].usedTimes--,wt.usedTimes===0&&M(w)),C.__cacheKey=nt,C.__webglTexture=st[nt].texture}return V}function $(C,w,V){let at=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(at=i.TEXTURE_3D);let st=F(C,w),nt=w.source;e.bindTexture(at,C.__webglTexture,i.TEXTURE0+V);let wt=n.get(nt);if(nt.version!==wt.__version||st===!0){e.activeTexture(i.TEXTURE0+V);let yt=re.getPrimaries(re.workingColorSpace),St=w.colorSpace===yn?null:re.getPrimaries(w.colorSpace),Dt=w.colorSpace===yn||yt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let Ft=p(w)&&m(w.image)===!1,rt=y(w.image,Ft,!1,s.maxTextureSize);rt=vt(w,rt);let qt=m(rt)||o,N=r.convert(w.format,w.colorSpace),ot=r.convert(w.type),_t=v(w.internalFormat,N,ot,w.colorSpace,w.isVideoTexture);Z(at,w,qt);let ht,Ct=w.mipmaps,Yt=o&&w.isVideoTexture!==!0&&_t!==Md,$t=wt.__version===void 0||st===!0,Wt=S(w,rt,qt);if(w.isDepthTexture)_t=i.DEPTH_COMPONENT,o?w.type===wi?_t=i.DEPTH_COMPONENT32F:w.type===Ei?_t=i.DEPTH_COMPONENT24:w.type===Ji?_t=i.DEPTH24_STENCIL8:_t=i.DEPTH_COMPONENT16:w.type===wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Ki&&_t===i.DEPTH_COMPONENT&&w.type!==pu&&w.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Ei,ot=r.convert(w.type)),w.format===Xs&&_t===i.DEPTH_COMPONENT&&(_t=i.DEPTH_STENCIL,w.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Ji,ot=r.convert(w.type))),$t&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,_t,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,_t,rt.width,rt.height,0,N,ot,null));else if(w.isDataTexture)if(Ct.length>0&&qt){Yt&&$t&&e.texStorage2D(i.TEXTURE_2D,Wt,_t,Ct[0].width,Ct[0].height);for(let gt=0,z=Ct.length;gt<z;gt++)ht=Ct[gt],Yt?e.texSubImage2D(i.TEXTURE_2D,gt,0,0,ht.width,ht.height,N,ot,ht.data):e.texImage2D(i.TEXTURE_2D,gt,_t,ht.width,ht.height,0,N,ot,ht.data);w.generateMipmaps=!1}else Yt?($t&&e.texStorage2D(i.TEXTURE_2D,Wt,_t,rt.width,rt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,N,ot,rt.data)):e.texImage2D(i.TEXTURE_2D,0,_t,rt.width,rt.height,0,N,ot,rt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Yt&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,_t,Ct[0].width,Ct[0].height,rt.depth);for(let gt=0,z=Ct.length;gt<z;gt++)ht=Ct[gt],w.format!==Ln?N!==null?Yt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,ht.width,ht.height,rt.depth,N,ht.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,_t,ht.width,ht.height,rt.depth,0,ht.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,ht.width,ht.height,rt.depth,N,ot,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,_t,ht.width,ht.height,rt.depth,0,N,ot,ht.data)}else{Yt&&$t&&e.texStorage2D(i.TEXTURE_2D,Wt,_t,Ct[0].width,Ct[0].height);for(let gt=0,z=Ct.length;gt<z;gt++)ht=Ct[gt],w.format!==Ln?N!==null?Yt?e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,ht.width,ht.height,N,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,_t,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?e.texSubImage2D(i.TEXTURE_2D,gt,0,0,ht.width,ht.height,N,ot,ht.data):e.texImage2D(i.TEXTURE_2D,gt,_t,ht.width,ht.height,0,N,ot,ht.data)}else if(w.isDataArrayTexture)Yt?($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,_t,rt.width,rt.height,rt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,N,ot,rt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,rt.width,rt.height,rt.depth,0,N,ot,rt.data);else if(w.isData3DTexture)Yt?($t&&e.texStorage3D(i.TEXTURE_3D,Wt,_t,rt.width,rt.height,rt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,N,ot,rt.data)):e.texImage3D(i.TEXTURE_3D,0,_t,rt.width,rt.height,rt.depth,0,N,ot,rt.data);else if(w.isFramebufferTexture){if($t)if(Yt)e.texStorage2D(i.TEXTURE_2D,Wt,_t,rt.width,rt.height);else{let gt=rt.width,z=rt.height;for(let dt=0;dt<Wt;dt++)e.texImage2D(i.TEXTURE_2D,dt,_t,gt,z,0,N,ot,null),gt>>=1,z>>=1}}else if(Ct.length>0&&qt){Yt&&$t&&e.texStorage2D(i.TEXTURE_2D,Wt,_t,Ct[0].width,Ct[0].height);for(let gt=0,z=Ct.length;gt<z;gt++)ht=Ct[gt],Yt?e.texSubImage2D(i.TEXTURE_2D,gt,0,0,N,ot,ht):e.texImage2D(i.TEXTURE_2D,gt,_t,N,ot,ht);w.generateMipmaps=!1}else Yt?($t&&e.texStorage2D(i.TEXTURE_2D,Wt,_t,rt.width,rt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,N,ot,rt)):e.texImage2D(i.TEXTURE_2D,0,_t,N,ot,rt);x(w,qt)&&_(at),wt.__version=nt.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ct(C,w,V){if(w.image.length!==6)return;let at=F(C,w),st=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+V);let nt=n.get(st);if(st.version!==nt.__version||at===!0){e.activeTexture(i.TEXTURE0+V);let wt=re.getPrimaries(re.workingColorSpace),yt=w.colorSpace===yn?null:re.getPrimaries(w.colorSpace),St=w.colorSpace===yn||wt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Dt=w.isCompressedTexture||w.image[0].isCompressedTexture,Ft=w.image[0]&&w.image[0].isDataTexture,rt=[];for(let gt=0;gt<6;gt++)!Dt&&!Ft?rt[gt]=y(w.image[gt],!1,!0,s.maxCubemapSize):rt[gt]=Ft?w.image[gt].image:w.image[gt],rt[gt]=vt(w,rt[gt]);let qt=rt[0],N=m(qt)||o,ot=r.convert(w.format,w.colorSpace),_t=r.convert(w.type),ht=v(w.internalFormat,ot,_t,w.colorSpace),Ct=o&&w.isVideoTexture!==!0,Yt=nt.__version===void 0||at===!0,$t=S(w,qt,N);Z(i.TEXTURE_CUBE_MAP,w,N);let Wt;if(Dt){Ct&&Yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,$t,ht,qt.width,qt.height);for(let gt=0;gt<6;gt++){Wt=rt[gt].mipmaps;for(let z=0;z<Wt.length;z++){let dt=Wt[z];w.format!==Ln?ot!==null?Ct?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,z,0,0,dt.width,dt.height,ot,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,z,ht,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ct?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,z,0,0,dt.width,dt.height,ot,_t,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,z,ht,dt.width,dt.height,0,ot,_t,dt.data)}}}else{Wt=w.mipmaps,Ct&&Yt&&(Wt.length>0&&$t++,e.texStorage2D(i.TEXTURE_CUBE_MAP,$t,ht,rt[0].width,rt[0].height));for(let gt=0;gt<6;gt++)if(Ft){Ct?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,rt[gt].width,rt[gt].height,ot,_t,rt[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ht,rt[gt].width,rt[gt].height,0,ot,_t,rt[gt].data);for(let z=0;z<Wt.length;z++){let pt=Wt[z].image[gt].image;Ct?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,z+1,0,0,pt.width,pt.height,ot,_t,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,z+1,ht,pt.width,pt.height,0,ot,_t,pt.data)}}else{Ct?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,ot,_t,rt[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ht,ot,_t,rt[gt]);for(let z=0;z<Wt.length;z++){let dt=Wt[z];Ct?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,z+1,0,0,ot,_t,dt.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,z+1,ht,ot,_t,dt.image[gt])}}}x(w,N)&&_(i.TEXTURE_CUBE_MAP),nt.__version=st.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ft(C,w,V,at,st,nt){let wt=r.convert(V.format,V.colorSpace),yt=r.convert(V.type),St=v(V.internalFormat,wt,yt,V.colorSpace);if(!n.get(w).__hasExternalTextures){let Ft=Math.max(1,w.width>>nt),rt=Math.max(1,w.height>>nt);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,nt,St,Ft,rt,w.depth,0,wt,yt,null):e.texImage2D(st,nt,St,Ft,rt,0,wt,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),K(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,st,n.get(V).__webglTexture,0,lt(w)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,st,n.get(V).__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(C,w,V){if(i.bindRenderbuffer(i.RENDERBUFFER,C),w.depthBuffer&&!w.stencilBuffer){let at=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(V||K(w)){let st=w.depthTexture;st&&st.isDepthTexture&&(st.type===wi?at=i.DEPTH_COMPONENT32F:st.type===Ei&&(at=i.DEPTH_COMPONENT24));let nt=lt(w);K(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,at,w.width,w.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,at,w.width,w.height)}else i.renderbufferStorage(i.RENDERBUFFER,at,w.width,w.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(w.depthBuffer&&w.stencilBuffer){let at=lt(w);V&&K(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,i.DEPTH24_STENCIL8,w.width,w.height):K(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,i.DEPTH24_STENCIL8,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let at=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let st=0;st<at.length;st++){let nt=at[st],wt=r.convert(nt.format,nt.colorSpace),yt=r.convert(nt.type),St=v(nt.internalFormat,wt,yt,nt.colorSpace),Dt=lt(w);V&&K(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,St,w.width,w.height):K(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,St,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,St,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),H(w.depthTexture,0);let at=n.get(w.depthTexture).__webglTexture,st=lt(w);if(w.depthTexture.format===Ki)K(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(w.depthTexture.format===Xs)K(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function bt(C){let w=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Tt(w.__webglFramebuffer,C)}else if(V){w.__webglDepthbuffer=[];for(let at=0;at<6;at++)e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[at]),w.__webglDepthbuffer[at]=i.createRenderbuffer(),Et(w.__webglDepthbuffer[at],C,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),Et(w.__webglDepthbuffer,C,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(C,w,V){let at=n.get(C);w!==void 0&&ft(at.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&bt(C)}function D(C){let w=C.texture,V=n.get(C),at=n.get(w);C.addEventListener("dispose",R),C.isWebGLMultipleRenderTargets!==!0&&(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=w.version,a.memory.textures++);let st=C.isWebGLCubeRenderTarget===!0,nt=C.isWebGLMultipleRenderTargets===!0,wt=m(C)||o;if(st){V.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(o&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[yt]=[];for(let St=0;St<w.mipmaps.length;St++)V.__webglFramebuffer[yt][St]=i.createFramebuffer()}else V.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let yt=0;yt<w.mipmaps.length;yt++)V.__webglFramebuffer[yt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(nt)if(s.drawBuffers){let yt=C.texture;for(let St=0,Dt=yt.length;St<Dt;St++){let Ft=n.get(yt[St]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&K(C)===!1){let yt=nt?w:[w];V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let St=0;St<yt.length;St++){let Dt=yt[St];V.__webglColorRenderbuffer[St]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[St]);let Ft=r.convert(Dt.format,Dt.colorSpace),rt=r.convert(Dt.type),qt=v(Dt.internalFormat,Ft,rt,Dt.colorSpace,C.isXRRenderTarget===!0),N=lt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,N,qt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,V.__webglColorRenderbuffer[St])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Et(V.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),Z(i.TEXTURE_CUBE_MAP,w,wt);for(let yt=0;yt<6;yt++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let St=0;St<w.mipmaps.length;St++)ft(V.__webglFramebuffer[yt][St],C,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,St);else ft(V.__webglFramebuffer[yt],C,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);x(w,wt)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){let yt=C.texture;for(let St=0,Dt=yt.length;St<Dt;St++){let Ft=yt[St],rt=n.get(Ft);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),Z(i.TEXTURE_2D,Ft,wt),ft(V.__webglFramebuffer,C,Ft,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,0),x(Ft,wt)&&_(i.TEXTURE_2D)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?yt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(yt,at.__webglTexture),Z(yt,w,wt),o&&w.mipmaps&&w.mipmaps.length>0)for(let St=0;St<w.mipmaps.length;St++)ft(V.__webglFramebuffer[St],C,w,i.COLOR_ATTACHMENT0,yt,St);else ft(V.__webglFramebuffer,C,w,i.COLOR_ATTACHMENT0,yt,0);x(w,wt)&&_(yt),e.unbindTexture()}C.depthBuffer&&bt(C)}function ut(C){let w=m(C)||o,V=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let at=0,st=V.length;at<st;at++){let nt=V[at];if(x(nt,w)){let wt=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,yt=n.get(nt).__webglTexture;e.bindTexture(wt,yt),_(wt),e.unbindTexture()}}}function Q(C){if(o&&C.samples>0&&K(C)===!1){let w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],V=C.width,at=C.height,st=i.COLOR_BUFFER_BIT,nt=[],wt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(C),St=C.isWebGLMultipleRenderTargets===!0;if(St)for(let Dt=0;Dt<w.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Dt=0;Dt<w.length;Dt++){nt.push(i.COLOR_ATTACHMENT0+Dt),C.depthBuffer&&nt.push(wt);let Ft=yt.__ignoreDepthValues!==void 0?yt.__ignoreDepthValues:!1;if(Ft===!1&&(C.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),St&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Dt]),Ft===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[wt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[wt])),St){let rt=n.get(w[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,V,at,0,0,V,at,st,i.NEAREST),u&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),St)for(let Dt=0;Dt<w.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Dt]);let Ft=n.get(w[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}}function lt(C){return Math.min(s.maxSamples,C.samples)}function K(C){let w=n.get(C);return o&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Rt(C){let w=a.render.frame;l.get(C)!==w&&(l.set(C,w),C.update())}function vt(C,w){let V=C.colorSpace,at=C.format,st=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Pl||V!==ii&&V!==yn&&(re.getTransfer(V)===ce?o===!1?t.has("EXT_sRGB")===!0&&at===Ln?(C.format=Pl,C.minFilter=xn,C.generateMipmaps=!1):w=ma.sRGBToLinear(w):(at!==Ln||st!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}this.allocateTextureUnit=P,this.resetTextureUnits=B,this.setTexture2D=H,this.setTexture2DArray=W,this.setTexture3D=G,this.setTextureCube=j,this.rebindTextures=At,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=K}function nb(i,t,e){let n=e.isWebGL2;function s(r,a=yn){let o,c=re.getTransfer(a);if(r===Ci)return i.UNSIGNED_BYTE;if(r===xd)return i.UNSIGNED_SHORT_4_4_4_4;if(r===yd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Og)return i.BYTE;if(r===Fg)return i.SHORT;if(r===pu)return i.UNSIGNED_SHORT;if(r===_d)return i.INT;if(r===Ei)return i.UNSIGNED_INT;if(r===wi)return i.FLOAT;if(r===Wr)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===zg)return i.ALPHA;if(r===Ln)return i.RGBA;if(r===Hg)return i.LUMINANCE;if(r===kg)return i.LUMINANCE_ALPHA;if(r===Ki)return i.DEPTH_COMPONENT;if(r===Xs)return i.DEPTH_STENCIL;if(r===Pl)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Vg)return i.RED;if(r===vd)return i.RED_INTEGER;if(r===Gg)return i.RG;if(r===bd)return i.RG_INTEGER;if(r===Sd)return i.RGBA_INTEGER;if(r===qc||r===Yc||r===Zc||r===jc)if(c===ce)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===qc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Yc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Zc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===jc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===qc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Yc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Zc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===jc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wh||r===Xh||r===qh||r===Yh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Wh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Xh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===qh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Md)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Zh||r===jh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Zh)return c===ce?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===jh)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===$h||r===Jh||r===Kh||r===Qh||r===tf||r===ef||r===nf||r===sf||r===rf||r===of||r===af||r===cf||r===lf||r===uf)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===$h)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Jh)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Kh)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qh)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===tf)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ef)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nf)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===sf)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rf)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===of)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===af)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===cf)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lf)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===uf)return c===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===$c||r===hf||r===ff)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===$c)return c===ce?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ff)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Wg||r===df||r===pf||r===mf)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===$c)return o.COMPRESSED_RED_RGTC1_EXT;if(r===df)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===pf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===mf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ji?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Gl=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},vn=class extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ib={type:"move"},zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(u,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let l=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=l.position.distanceTo(f.position),d=.02,g=.005;u.inputState.pinching&&h>d+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&h<=d-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ib)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new vn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Wl=class extends Gn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,u=null,l=null,f=null,h=null,d=null,g=null,y=e.getContextAttributes(),m=null,p=null,x=[],_=[],v=new et,S=null,E=new $e;E.layers.enable(1),E.viewport=new Kt;let T=new $e;T.layers.enable(2),T.viewport=new Kt;let R=[E,T],b=new Gl;b.layers.enable(1),b.layers.enable(2);let M=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let F=x[Z];return F===void 0&&(F=new zr,x[Z]=F),F.getTargetRaySpace()},this.getControllerGrip=function(Z){let F=x[Z];return F===void 0&&(F=new zr,x[Z]=F),F.getGripSpace()},this.getHand=function(Z){let F=x[Z];return F===void 0&&(F=new zr,x[Z]=F),F.getHandSpace()};function U(Z){let F=_.indexOf(Z.inputSource);if(F===-1)return;let $=x[F];$!==void 0&&($.update(Z.inputSource,Z.frame,u||a),$.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",P);for(let Z=0;Z<x.length;Z++){let F=_[Z];F!==null&&(_[Z]=null,x[Z].disconnect(F))}M=null,L=null,t.setRenderTarget(m),d=null,h=null,f=null,s=null,p=null,mt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",B),s.addEventListener("inputsourceschange",P),y.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(v),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let F={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,F),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new si(d.framebufferWidth,d.framebufferHeight,{format:Ln,type:Ci,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let F=null,$=null,ct=null;y.depth&&(ct=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,F=y.stencil?Xs:Ki,$=y.stencil?Ji:Ei);let ft={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};f=new XRWebGLBinding(s,e),h=f.createProjectionLayer(ft),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),p=new si(h.textureWidth,h.textureHeight,{format:Ln,type:Ci,depthTexture:new Ea(h.textureWidth,h.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0});let Et=t.properties.get(p);Et.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await s.requestReferenceSpace(o),mt.setContext(s),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(Z){for(let F=0;F<Z.removed.length;F++){let $=Z.removed[F],ct=_.indexOf($);ct>=0&&(_[ct]=null,x[ct].disconnect($))}for(let F=0;F<Z.added.length;F++){let $=Z.added[F],ct=_.indexOf($);if(ct===-1){for(let Et=0;Et<x.length;Et++)if(Et>=_.length){_.push($),ct=Et;break}else if(_[Et]===null){_[Et]=$,ct=Et;break}if(ct===-1)break}let ft=x[ct];ft&&ft.connect($)}}let O=new A,H=new A;function W(Z,F,$){O.setFromMatrixPosition(F.matrixWorld),H.setFromMatrixPosition($.matrixWorld);let ct=O.distanceTo(H),ft=F.projectionMatrix.elements,Et=$.projectionMatrix.elements,Tt=ft[14]/(ft[10]-1),bt=ft[14]/(ft[10]+1),At=(ft[9]+1)/ft[5],D=(ft[9]-1)/ft[5],ut=(ft[8]-1)/ft[0],Q=(Et[8]+1)/Et[0],lt=Tt*ut,K=Tt*Q,Rt=ct/(-ut+Q),vt=Rt*-ut;F.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(vt),Z.translateZ(Rt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();let C=Tt+Rt,w=bt+Rt,V=lt-vt,at=K+(ct-vt),st=At*bt/w*C,nt=D*bt/w*C;Z.projectionMatrix.makePerspective(V,at,st,nt,C,w),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function G(Z,F){F===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(F.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;b.near=T.near=E.near=Z.near,b.far=T.far=E.far=Z.far,(M!==b.near||L!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),M=b.near,L=b.far);let F=Z.parent,$=b.cameras;G(b,F);for(let ct=0;ct<$.length;ct++)G($[ct],F);$.length===2?W(b,E,T):b.projectionMatrix.copy(E.projectionMatrix),j(Z,b,F)};function j(Z,F,$){$===null?Z.matrix.copy(F.matrixWorld):(Z.matrix.copy($.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(F.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(F.projectionMatrix),Z.projectionMatrixInverse.copy(F.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Xr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)};let tt=null;function J(Z,F){if(l=F.getViewerPose(u||a),g=F,l!==null){let $=l.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let ct=!1;$.length!==b.cameras.length&&(b.cameras.length=0,ct=!0);for(let ft=0;ft<$.length;ft++){let Et=$[ft],Tt=null;if(d!==null)Tt=d.getViewport(Et);else{let At=f.getViewSubImage(h,Et);Tt=At.viewport,ft===0&&(t.setRenderTargetTextures(p,At.colorTexture,h.ignoreDepthValues?void 0:At.depthStencilTexture),t.setRenderTarget(p))}let bt=R[ft];bt===void 0&&(bt=new $e,bt.layers.enable(ft),bt.viewport=new Kt,R[ft]=bt),bt.matrix.fromArray(Et.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Et.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),ft===0&&(b.matrix.copy(bt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ct===!0&&b.cameras.push(bt)}}for(let $=0;$<x.length;$++){let ct=_[$],ft=x[$];ct!==null&&ft!==void 0&&ft.update(ct,F,u||a)}tt&&tt(Z,F),F.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:F}),g=null}let mt=new Id;mt.setAnimationLoop(J),this.setAnimationLoop=function(Z){tt=Z},this.dispose=function(){}}};function sb(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Pd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),l(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,_):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=t.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rb(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,_){let v=_.program;n.uniformBlockBinding(x,v)}function u(x,_){let v=s[x.id];v===void 0&&(g(x),v=l(x),s[x.id]=v,x.addEventListener("dispose",m));let S=_.program;n.updateUBOMapping(x,S);let E=t.render.frame;r[x.id]!==E&&(h(x),r[x.id]=E)}function l(x){let _=f();x.__bindingPointIndex=_;let v=i.createBuffer(),S=x.__size,E=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,S,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let _=s[x.id],v=x.uniforms,S=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,T=v.length;E<T;E++){let R=Array.isArray(v[E])?v[E]:[v[E]];for(let b=0,M=R.length;b<M;b++){let L=R[b];if(d(L,E,b,S)===!0){let U=L.__offset,B=Array.isArray(L.value)?L.value:[L.value],P=0;for(let O=0;O<B.length;O++){let H=B[O],W=y(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,U+P,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,P),P+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,_,v,S){let E=x.value,T=_+"_"+v;if(S[T]===void 0)return typeof E=="number"||typeof E=="boolean"?S[T]=E:S[T]=E.clone(),!0;{let R=S[T];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return S[T]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(x){let _=x.uniforms,v=0,S=16;for(let T=0,R=_.length;T<R;T++){let b=Array.isArray(_[T])?_[T]:[_[T]];for(let M=0,L=b.length;M<L;M++){let U=b[M],B=Array.isArray(U.value)?U.value:[U.value];for(let P=0,O=B.length;P<O;P++){let H=B[P],W=y(H),G=v%S;G!==0&&S-G<W.boundary&&(v+=S-G),U.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=W.storage}}}let E=v%S;return E>0&&(v+=S-E),x.__size=v,x.__cache={},this}function y(x){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){let _=x.target;_.removeEventListener("dispose",m);let v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:u,dispose:p}}var Zr=class{constructor(t={}){let{canvas:e=p0(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=a;let d=new Uint32Array(4),g=new Int32Array(4),y=null,m=null,p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Se,this._useLegacyLights=!1,this.toneMapping=Ri,this.toneMappingExposure=1;let _=this,v=!1,S=0,E=0,T=null,R=-1,b=null,M=new Kt,L=new Kt,U=null,B=new Gt(0),P=0,O=e.width,H=e.height,W=1,G=null,j=null,tt=new Kt(0,0,O,H),J=new Kt(0,0,O,H),mt=!1,Z=new qr,F=!1,$=!1,ct=null,ft=new Bt,Et=new et,Tt=new A,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function At(){return T===null?W:1}let D=n;function ut(I,k){for(let q=0;q<I.length;q++){let Y=I[q],X=e.getContext(Y,k);if(X!==null)return X}return null}try{let I={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:l,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hu}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",z,!1),e.addEventListener("webglcontextcreationerror",dt,!1),D===null){let k=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&k.shift(),D=ut(k,I),D===null)throw ut(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Q,lt,K,Rt,vt,C,w,V,at,st,nt,wt,yt,St,Dt,Ft,rt,qt,N,ot,_t,ht,Ct,Yt;function $t(){Q=new Ty(D),lt=new xy(D,Q,t),Q.init(lt),ht=new nb(D,Q,lt),K=new tb(D,Q,lt),Rt=new Ay(D),vt=new Vv,C=new eb(D,Q,K,vt,lt,ht,Rt),w=new vy(_),V=new My(_),at=new U0(D,lt),Ct=new gy(D,Q,at,lt),st=new Ey(D,at,Rt,Ct),nt=new Iy(D,st,at,Rt),N=new Py(D,lt,C),Ft=new yy(vt),wt=new kv(_,w,V,Q,lt,Ct,Ft),yt=new sb(_,vt),St=new Wv,Dt=new $v(Q,lt),qt=new my(_,w,V,K,nt,h,c),rt=new Qv(_,nt,lt),Yt=new rb(D,Rt,lt,K),ot=new _y(D,Q,Rt,lt),_t=new wy(D,Q,Rt,lt),Rt.programs=wt.programs,_.capabilities=lt,_.extensions=Q,_.properties=vt,_.renderLists=St,_.shadowMap=rt,_.state=K,_.info=Rt}$t();let Wt=new Wl(_,D);this.xr=Wt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let I=Q.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=Q.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(I){I!==void 0&&(W=I,this.setSize(O,H,!1))},this.getSize=function(I){return I.set(O,H)},this.setSize=function(I,k,q=!0){if(Wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=I,H=k,e.width=Math.floor(I*W),e.height=Math.floor(k*W),q===!0&&(e.style.width=I+"px",e.style.height=k+"px"),this.setViewport(0,0,I,k)},this.getDrawingBufferSize=function(I){return I.set(O*W,H*W).floor()},this.setDrawingBufferSize=function(I,k,q){O=I,H=k,W=q,e.width=Math.floor(I*q),e.height=Math.floor(k*q),this.setViewport(0,0,I,k)},this.getCurrentViewport=function(I){return I.copy(M)},this.getViewport=function(I){return I.copy(tt)},this.setViewport=function(I,k,q,Y){I.isVector4?tt.set(I.x,I.y,I.z,I.w):tt.set(I,k,q,Y),K.viewport(M.copy(tt).multiplyScalar(W).floor())},this.getScissor=function(I){return I.copy(J)},this.setScissor=function(I,k,q,Y){I.isVector4?J.set(I.x,I.y,I.z,I.w):J.set(I,k,q,Y),K.scissor(L.copy(J).multiplyScalar(W).floor())},this.getScissorTest=function(){return mt},this.setScissorTest=function(I){K.setScissorTest(mt=I)},this.setOpaqueSort=function(I){G=I},this.setTransparentSort=function(I){j=I},this.getClearColor=function(I){return I.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(I=!0,k=!0,q=!0){let Y=0;if(I){let X=!1;if(T!==null){let Mt=T.texture.format;X=Mt===Sd||Mt===bd||Mt===vd}if(X){let Mt=T.texture.type,It=Mt===Ci||Mt===Ei||Mt===pu||Mt===Ji||Mt===xd||Mt===yd,Ut=qt.getClearColor(),Ot=qt.getClearAlpha(),Xt=Ut.r,zt=Ut.g,Ht=Ut.b;It?(d[0]=Xt,d[1]=zt,d[2]=Ht,d[3]=Ot,D.clearBufferuiv(D.COLOR,0,d)):(g[0]=Xt,g[1]=zt,g[2]=Ht,g[3]=Ot,D.clearBufferiv(D.COLOR,0,g))}else Y|=D.COLOR_BUFFER_BIT}k&&(Y|=D.DEPTH_BUFFER_BIT),q&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",z,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),St.dispose(),Dt.dispose(),vt.dispose(),w.dispose(),V.dispose(),nt.dispose(),Ct.dispose(),Yt.dispose(),wt.dispose(),Wt.dispose(),Wt.removeEventListener("sessionstart",Ke),Wt.removeEventListener("sessionend",ae),ct&&(ct.dispose(),ct=null),Qe.stop()};function gt(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let I=Rt.autoReset,k=rt.enabled,q=rt.autoUpdate,Y=rt.needsUpdate,X=rt.type;$t(),Rt.autoReset=I,rt.enabled=k,rt.autoUpdate=q,rt.needsUpdate=Y,rt.type=X}function dt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function pt(I){let k=I.target;k.removeEventListener("dispose",pt),Nt(k)}function Nt(I){Pt(I),vt.remove(I)}function Pt(I){let k=vt.get(I).programs;k!==void 0&&(k.forEach(function(q){wt.releaseProgram(q)}),I.isShaderMaterial&&wt.releaseShaderCache(I))}this.renderBufferDirect=function(I,k,q,Y,X,Mt){k===null&&(k=bt);let It=X.isMesh&&X.matrixWorld.determinant()<0,Ut=tg(I,k,q,Y,X);K.setMaterial(Y,It);let Ot=q.index,Xt=1;if(Y.wireframe===!0){if(Ot=st.getWireframeAttribute(q),Ot===void 0)return;Xt=2}let zt=q.drawRange,Ht=q.attributes.position,be=zt.start*Xt,hn=(zt.start+zt.count)*Xt;Mt!==null&&(be=Math.max(be,Mt.start*Xt),hn=Math.min(hn,(Mt.start+Mt.count)*Xt)),Ot!==null?(be=Math.max(be,0),hn=Math.min(hn,Ot.count)):Ht!=null&&(be=Math.max(be,0),hn=Math.min(hn,Ht.count));let Be=hn-be;if(Be<0||Be===1/0)return;Ct.setup(X,Y,Ut,q,Ot);let jn,me=ot;if(Ot!==null&&(jn=at.get(Ot),me=_t,me.setIndex(jn)),X.isMesh)Y.wireframe===!0?(K.setLineWidth(Y.wireframeLinewidth*At()),me.setMode(D.LINES)):me.setMode(D.TRIANGLES);else if(X.isLine){let Zt=Y.linewidth;Zt===void 0&&(Zt=1),K.setLineWidth(Zt*At()),X.isLineSegments?me.setMode(D.LINES):X.isLineLoop?me.setMode(D.LINE_LOOP):me.setMode(D.LINE_STRIP)}else X.isPoints?me.setMode(D.POINTS):X.isSprite&&me.setMode(D.TRIANGLES);if(X.isBatchedMesh)me.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)me.renderInstances(be,Be,X.count);else if(q.isInstancedBufferGeometry){let Zt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,kc=Math.min(q.instanceCount,Zt);me.renderInstances(be,Be,kc)}else me.render(be,Be)};function te(I,k,q){I.transparent===!0&&I.side===cn&&I.forceSinglePass===!1?(I.side=Fe,I.needsUpdate=!0,Lo(I,k,q),I.side=Dn,I.needsUpdate=!0,Lo(I,k,q),I.side=cn):Lo(I,k,q)}this.compile=function(I,k,q=null){q===null&&(q=I),m=Dt.get(q),m.init(),x.push(m),q.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),I!==q&&I.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(_._useLegacyLights);let Y=new Set;return I.traverse(function(X){let Mt=X.material;if(Mt)if(Array.isArray(Mt))for(let It=0;It<Mt.length;It++){let Ut=Mt[It];te(Ut,q,X),Y.add(Ut)}else te(Mt,q,X),Y.add(Mt)}),x.pop(),m=null,Y},this.compileAsync=function(I,k,q=null){let Y=this.compile(I,k,q);return new Promise(X=>{function Mt(){if(Y.forEach(function(It){vt.get(It).currentProgram.isReady()&&Y.delete(It)}),Y.size===0){X(I);return}setTimeout(Mt,10)}Q.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let ne=null;function Ue(I){ne&&ne(I)}function Ke(){Qe.stop()}function ae(){Qe.start()}let Qe=new Id;Qe.setAnimationLoop(Ue),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(I){ne=I,Wt.setAnimationLoop(I),I===null?Qe.stop():Qe.start()},Wt.addEventListener("sessionstart",Ke),Wt.addEventListener("sessionend",ae),this.render=function(I,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Wt.enabled===!0&&Wt.isPresenting===!0&&(Wt.cameraAutoUpdate===!0&&Wt.updateCamera(k),k=Wt.getCamera()),I.isScene===!0&&I.onBeforeRender(_,I,k,T),m=Dt.get(I,x.length),m.init(),x.push(m),ft.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Z.setFromProjectionMatrix(ft),$=this.localClippingEnabled,F=Ft.init(this.clippingPlanes,$),y=St.get(I,p.length),y.init(),p.push(y),kn(I,k,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(G,j),this.info.render.frame++,F===!0&&Ft.beginShadows();let q=m.state.shadowsArray;if(rt.render(q,I,k),F===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),qt.render(y,I),m.setupLights(_._useLegacyLights),k.isArrayCamera){let Y=k.cameras;for(let X=0,Mt=Y.length;X<Mt;X++){let It=Y[X];Ih(y,I,It,It.viewport)}}else Ih(y,I,k);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),I.isScene===!0&&I.onAfterRender(_,I,k),Ct.resetDefaultState(),R=-1,b=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function kn(I,k,q,Y){if(I.visible===!1)return;if(I.layers.test(k.layers)){if(I.isGroup)q=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(k);else if(I.isLight)m.pushLight(I),I.castShadow&&m.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Z.intersectsSprite(I)){Y&&Tt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ft);let It=nt.update(I),Ut=I.material;Ut.visible&&y.push(I,It,Ut,q,Tt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Z.intersectsObject(I))){let It=nt.update(I),Ut=I.material;if(Y&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Tt.copy(I.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Tt.copy(It.boundingSphere.center)),Tt.applyMatrix4(I.matrixWorld).applyMatrix4(ft)),Array.isArray(Ut)){let Ot=It.groups;for(let Xt=0,zt=Ot.length;Xt<zt;Xt++){let Ht=Ot[Xt],be=Ut[Ht.materialIndex];be&&be.visible&&y.push(I,It,be,q,Tt.z,Ht)}}else Ut.visible&&y.push(I,It,Ut,q,Tt.z,null)}}let Mt=I.children;for(let It=0,Ut=Mt.length;It<Ut;It++)kn(Mt[It],k,q,Y)}function Ih(I,k,q,Y){let X=I.opaque,Mt=I.transmissive,It=I.transparent;m.setupLightsView(q),F===!0&&Ft.setGlobalState(_.clippingPlanes,q),Mt.length>0&&Qm(X,Mt,k,q),Y&&K.viewport(M.copy(Y)),X.length>0&&Io(X,k,q),Mt.length>0&&Io(Mt,k,q),It.length>0&&Io(It,k,q),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Qm(I,k,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;let Mt=lt.isWebGL2;ct===null&&(ct=new si(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?Wr:Ci,minFilter:Gr,samples:Mt?4:0})),_.getDrawingBufferSize(Et),Mt?ct.setSize(Et.x,Et.y):ct.setSize(da(Et.x),da(Et.y));let It=_.getRenderTarget();_.setRenderTarget(ct),_.getClearColor(B),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();let Ut=_.toneMapping;_.toneMapping=Ri,Io(I,q,Y),C.updateMultisampleRenderTarget(ct),C.updateRenderTargetMipmap(ct);let Ot=!1;for(let Xt=0,zt=k.length;Xt<zt;Xt++){let Ht=k[Xt],be=Ht.object,hn=Ht.geometry,Be=Ht.material,jn=Ht.group;if(Be.side===cn&&be.layers.test(Y.layers)){let me=Be.side;Be.side=Fe,Be.needsUpdate=!0,Lh(be,q,Y,hn,Be,jn),Be.side=me,Be.needsUpdate=!0,Ot=!0}}Ot===!0&&(C.updateMultisampleRenderTarget(ct),C.updateRenderTargetMipmap(ct)),_.setRenderTarget(It),_.setClearColor(B,P),_.toneMapping=Ut}function Io(I,k,q){let Y=k.isScene===!0?k.overrideMaterial:null;for(let X=0,Mt=I.length;X<Mt;X++){let It=I[X],Ut=It.object,Ot=It.geometry,Xt=Y===null?It.material:Y,zt=It.group;Ut.layers.test(q.layers)&&Lh(Ut,k,q,Ot,Xt,zt)}}function Lh(I,k,q,Y,X,Mt){I.onBeforeRender(_,k,q,Y,X,Mt),I.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),X.onBeforeRender(_,k,q,Y,I,Mt),X.transparent===!0&&X.side===cn&&X.forceSinglePass===!1?(X.side=Fe,X.needsUpdate=!0,_.renderBufferDirect(q,k,Y,X,I,Mt),X.side=Dn,X.needsUpdate=!0,_.renderBufferDirect(q,k,Y,X,I,Mt),X.side=cn):_.renderBufferDirect(q,k,Y,X,I,Mt),I.onAfterRender(_,k,q,Y,X,Mt)}function Lo(I,k,q){k.isScene!==!0&&(k=bt);let Y=vt.get(I),X=m.state.lights,Mt=m.state.shadowsArray,It=X.state.version,Ut=wt.getParameters(I,X.state,Mt,k,q),Ot=wt.getProgramCacheKey(Ut),Xt=Y.programs;Y.environment=I.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(I.isMeshStandardMaterial?V:w).get(I.envMap||Y.environment),Xt===void 0&&(I.addEventListener("dispose",pt),Xt=new Map,Y.programs=Xt);let zt=Xt.get(Ot);if(zt!==void 0){if(Y.currentProgram===zt&&Y.lightsStateVersion===It)return Nh(I,Ut),zt}else Ut.uniforms=wt.getUniforms(I),I.onBuild(q,Ut,_),I.onBeforeCompile(Ut,_),zt=wt.acquireProgram(Ut,Ot),Xt.set(Ot,zt),Y.uniforms=Ut.uniforms;let Ht=Y.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ht.clippingPlanes=Ft.uniform),Nh(I,Ut),Y.needsLights=ng(I),Y.lightsStateVersion=It,Y.needsLights&&(Ht.ambientLightColor.value=X.state.ambient,Ht.lightProbe.value=X.state.probe,Ht.directionalLights.value=X.state.directional,Ht.directionalLightShadows.value=X.state.directionalShadow,Ht.spotLights.value=X.state.spot,Ht.spotLightShadows.value=X.state.spotShadow,Ht.rectAreaLights.value=X.state.rectArea,Ht.ltc_1.value=X.state.rectAreaLTC1,Ht.ltc_2.value=X.state.rectAreaLTC2,Ht.pointLights.value=X.state.point,Ht.pointLightShadows.value=X.state.pointShadow,Ht.hemisphereLights.value=X.state.hemi,Ht.directionalShadowMap.value=X.state.directionalShadowMap,Ht.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ht.spotShadowMap.value=X.state.spotShadowMap,Ht.spotLightMatrix.value=X.state.spotLightMatrix,Ht.spotLightMap.value=X.state.spotLightMap,Ht.pointShadowMap.value=X.state.pointShadowMap,Ht.pointShadowMatrix.value=X.state.pointShadowMatrix),Y.currentProgram=zt,Y.uniformsList=null,zt}function Dh(I){if(I.uniformsList===null){let k=I.currentProgram.getUniforms();I.uniformsList=Vs.seqWithValue(k.seq,I.uniforms)}return I.uniformsList}function Nh(I,k){let q=vt.get(I);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function tg(I,k,q,Y,X){k.isScene!==!0&&(k=bt),C.resetTextureUnits();let Mt=k.fog,It=Y.isMeshStandardMaterial?k.environment:null,Ut=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ii,Ot=(Y.isMeshStandardMaterial?V:w).get(Y.envMap||It),Xt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,zt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ht=!!q.morphAttributes.position,be=!!q.morphAttributes.normal,hn=!!q.morphAttributes.color,Be=Ri;Y.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Be=_.toneMapping);let jn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,me=jn!==void 0?jn.length:0,Zt=vt.get(Y),kc=m.state.lights;if(F===!0&&($===!0||I!==b)){let gn=I===b&&Y.id===R;Ft.setState(Y,I,gn)}let xe=!1;Y.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==kc.state.version||Zt.outputColorSpace!==Ut||X.isBatchedMesh&&Zt.batching===!1||!X.isBatchedMesh&&Zt.batching===!0||X.isInstancedMesh&&Zt.instancing===!1||!X.isInstancedMesh&&Zt.instancing===!0||X.isSkinnedMesh&&Zt.skinning===!1||!X.isSkinnedMesh&&Zt.skinning===!0||X.isInstancedMesh&&Zt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Zt.instancingColor===!1&&X.instanceColor!==null||Zt.envMap!==Ot||Y.fog===!0&&Zt.fog!==Mt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Ft.numPlanes||Zt.numIntersection!==Ft.numIntersection)||Zt.vertexAlphas!==Xt||Zt.vertexTangents!==zt||Zt.morphTargets!==Ht||Zt.morphNormals!==be||Zt.morphColors!==hn||Zt.toneMapping!==Be||lt.isWebGL2===!0&&Zt.morphTargetsCount!==me)&&(xe=!0):(xe=!0,Zt.__version=Y.version);let Vi=Zt.currentProgram;xe===!0&&(Vi=Lo(Y,k,X));let Uh=!1,Pr=!1,Vc=!1,Ye=Vi.getUniforms(),Gi=Zt.uniforms;if(K.useProgram(Vi.program)&&(Uh=!0,Pr=!0,Vc=!0),Y.id!==R&&(R=Y.id,Pr=!0),Uh||b!==I){Ye.setValue(D,"projectionMatrix",I.projectionMatrix),Ye.setValue(D,"viewMatrix",I.matrixWorldInverse);let gn=Ye.map.cameraPosition;gn!==void 0&&gn.setValue(D,Tt.setFromMatrixPosition(I.matrixWorld)),lt.logarithmicDepthBuffer&&Ye.setValue(D,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ye.setValue(D,"isOrthographic",I.isOrthographicCamera===!0),b!==I&&(b=I,Pr=!0,Vc=!0)}if(X.isSkinnedMesh){Ye.setOptional(D,X,"bindMatrix"),Ye.setOptional(D,X,"bindMatrixInverse");let gn=X.skeleton;gn&&(lt.floatVertexTextures?(gn.boneTexture===null&&gn.computeBoneTexture(),Ye.setValue(D,"boneTexture",gn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(Ye.setOptional(D,X,"batchingTexture"),Ye.setValue(D,"batchingTexture",X._matricesTexture,C));let Gc=q.morphAttributes;if((Gc.position!==void 0||Gc.normal!==void 0||Gc.color!==void 0&&lt.isWebGL2===!0)&&N.update(X,q,Vi),(Pr||Zt.receiveShadow!==X.receiveShadow)&&(Zt.receiveShadow=X.receiveShadow,Ye.setValue(D,"receiveShadow",X.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Gi.envMap.value=Ot,Gi.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Pr&&(Ye.setValue(D,"toneMappingExposure",_.toneMappingExposure),Zt.needsLights&&eg(Gi,Vc),Mt&&Y.fog===!0&&yt.refreshFogUniforms(Gi,Mt),yt.refreshMaterialUniforms(Gi,Y,W,H,ct),Vs.upload(D,Dh(Zt),Gi,C)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Vs.upload(D,Dh(Zt),Gi,C),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ye.setValue(D,"center",X.center),Ye.setValue(D,"modelViewMatrix",X.modelViewMatrix),Ye.setValue(D,"normalMatrix",X.normalMatrix),Ye.setValue(D,"modelMatrix",X.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let gn=Y.uniformsGroups;for(let Wc=0,ig=gn.length;Wc<ig;Wc++)if(lt.isWebGL2){let Bh=gn[Wc];Yt.update(Bh,Vi),Yt.bind(Bh,Vi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vi}function eg(I,k){I.ambientLightColor.needsUpdate=k,I.lightProbe.needsUpdate=k,I.directionalLights.needsUpdate=k,I.directionalLightShadows.needsUpdate=k,I.pointLights.needsUpdate=k,I.pointLightShadows.needsUpdate=k,I.spotLights.needsUpdate=k,I.spotLightShadows.needsUpdate=k,I.rectAreaLights.needsUpdate=k,I.hemisphereLights.needsUpdate=k}function ng(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(I,k,q){vt.get(I.texture).__webglTexture=k,vt.get(I.depthTexture).__webglTexture=q;let Y=vt.get(I);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,k){let q=vt.get(I);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(I,k=0,q=0){T=I,S=k,E=q;let Y=!0,X=null,Mt=!1,It=!1;if(I){let Ot=vt.get(I);Ot.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(D.FRAMEBUFFER,null),Y=!1):Ot.__webglFramebuffer===void 0?C.setupRenderTarget(I):Ot.__hasExternalTextures&&C.rebindTextures(I,vt.get(I.texture).__webglTexture,vt.get(I.depthTexture).__webglTexture);let Xt=I.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(It=!0);let zt=vt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(zt[k])?X=zt[k][q]:X=zt[k],Mt=!0):lt.isWebGL2&&I.samples>0&&C.useMultisampledRTT(I)===!1?X=vt.get(I).__webglMultisampledFramebuffer:Array.isArray(zt)?X=zt[q]:X=zt,M.copy(I.viewport),L.copy(I.scissor),U=I.scissorTest}else M.copy(tt).multiplyScalar(W).floor(),L.copy(J).multiplyScalar(W).floor(),U=mt;if(K.bindFramebuffer(D.FRAMEBUFFER,X)&&lt.drawBuffers&&Y&&K.drawBuffers(I,X),K.viewport(M),K.scissor(L),K.setScissorTest(U),Mt){let Ot=vt.get(I.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ot.__webglTexture,q)}else if(It){let Ot=vt.get(I.texture),Xt=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ot.__webglTexture,q||0,Xt)}R=-1},this.readRenderTargetPixels=function(I,k,q,Y,X,Mt,It){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=vt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&It!==void 0&&(Ut=Ut[It]),Ut){K.bindFramebuffer(D.FRAMEBUFFER,Ut);try{let Ot=I.texture,Xt=Ot.format,zt=Ot.type;if(Xt!==Ln&&ht.convert(Xt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ht=zt===Wr&&(Q.has("EXT_color_buffer_half_float")||lt.isWebGL2&&Q.has("EXT_color_buffer_float"));if(zt!==Ci&&ht.convert(zt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(zt===wi&&(lt.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!Ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=I.width-Y&&q>=0&&q<=I.height-X&&D.readPixels(k,q,Y,X,ht.convert(Xt),ht.convert(zt),Mt)}finally{let Ot=T!==null?vt.get(T).__webglFramebuffer:null;K.bindFramebuffer(D.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(I,k,q=0){let Y=Math.pow(2,-q),X=Math.floor(k.image.width*Y),Mt=Math.floor(k.image.height*Y);C.setTexture2D(k,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,I.x,I.y,X,Mt),K.unbindTexture()},this.copyTextureToTexture=function(I,k,q,Y=0){let X=k.image.width,Mt=k.image.height,It=ht.convert(q.format),Ut=ht.convert(q.type);C.setTexture2D(q,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,q.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,q.unpackAlignment),k.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Y,I.x,I.y,X,Mt,It,Ut,k.image.data):k.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Y,I.x,I.y,k.mipmaps[0].width,k.mipmaps[0].height,It,k.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,Y,I.x,I.y,It,Ut,k.image),Y===0&&q.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),K.unbindTexture()},this.copyTextureToTexture3D=function(I,k,q,Y,X=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Mt=I.max.x-I.min.x+1,It=I.max.y-I.min.y+1,Ut=I.max.z-I.min.z+1,Ot=ht.convert(Y.format),Xt=ht.convert(Y.type),zt;if(Y.isData3DTexture)C.setTexture3D(Y,0),zt=D.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)C.setTexture2DArray(Y,0),zt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,Y.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,Y.unpackAlignment);let Ht=D.getParameter(D.UNPACK_ROW_LENGTH),be=D.getParameter(D.UNPACK_IMAGE_HEIGHT),hn=D.getParameter(D.UNPACK_SKIP_PIXELS),Be=D.getParameter(D.UNPACK_SKIP_ROWS),jn=D.getParameter(D.UNPACK_SKIP_IMAGES),me=q.isCompressedTexture?q.mipmaps[X]:q.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,me.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,me.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,I.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,I.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,I.min.z),q.isDataTexture||q.isData3DTexture?D.texSubImage3D(zt,X,k.x,k.y,k.z,Mt,It,Ut,Ot,Xt,me.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(zt,X,k.x,k.y,k.z,Mt,It,Ut,Ot,me.data)):D.texSubImage3D(zt,X,k.x,k.y,k.z,Mt,It,Ut,Ot,Xt,me),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ht),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,be),D.pixelStorei(D.UNPACK_SKIP_PIXELS,hn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Be),D.pixelStorei(D.UNPACK_SKIP_IMAGES,jn),X===0&&Y.generateMipmaps&&D.generateMipmap(zt),K.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?C.setTextureCube(I,0):I.isData3DTexture?C.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?C.setTexture2DArray(I,0):C.setTexture2D(I,0),K.unbindTexture()},this.resetState=function(){S=0,E=0,T=null,K.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===gu?"display-p3":"srgb",e.unpackColorSpace=re.workingColorSpace===Ha?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Se?Qi:Td}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Qi?Se:ii}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Xl=class extends Zr{};Xl.prototype.isWebGL1Renderer=!0;var wa=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},js=class extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var ns=class extends bn{constructor(t,e,n,s,r,a,o,c,u){super(t,e,n,s,r,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}},Sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,u;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),u=n[s]-a,u<0)o=s+1;else if(u>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let l=n[s],h=n[s+1]-l,d=(a-l)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new et:new A);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new A,s=[],r=[],a=[],o=new A,c=new Bt;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new A)}r[0]=new A,a[0]=new A;let u=Number.MAX_VALUE,l=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);l<=u&&(u=l,n.set(1,0,0)),f<=u&&(u=f,n.set(0,1,0)),h<=u&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Me(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Me(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},jr=class extends Sn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){let n=e||new et,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let l=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=u-this.aY;c=h*l-d*f+this.aX,u=h*f+d*l+this.aY}return n.set(c,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ql=class extends jr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function yu(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,u){s(a,o,u*(o-r),u*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,u,l,f){let h=(a-r)/u-(o-r)/(u+l)+(o-a)/l,d=(o-a)/l-(c-a)/(l+f)+(c-o)/f;h*=l,d*=l,s(a,o,h,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var ea=new A,vl=new yu,bl=new yu,Sl=new yu,$r=class extends Sn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let u,l;this.closed||o>0?u=s[(o-1)%r]:(ea.subVectors(s[0],s[1]).add(s[0]),u=ea);let f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?l=s[(o+2)%r]:(ea.subVectors(s[r-1],s[r-2]).add(s[r-1]),l=ea),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(u.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(l),d);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),vl.initNonuniformCatmullRom(u.x,f.x,h.x,l.x,g,y,m),bl.initNonuniformCatmullRom(u.y,f.y,h.y,l.y,g,y,m),Sl.initNonuniformCatmullRom(u.z,f.z,h.z,l.z,g,y,m)}else this.curveType==="catmullrom"&&(vl.initCatmullRom(u.x,f.x,h.x,l.x,this.tension),bl.initCatmullRom(u.y,f.y,h.y,l.y,this.tension),Sl.initCatmullRom(u.z,f.z,h.z,l.z,this.tension));return n.set(vl.calc(c),bl.calc(c),Sl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function od(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function ob(i,t){let e=1-i;return e*e*t}function ab(i,t){return 2*(1-i)*i*t}function cb(i,t){return i*i*t}function Hr(i,t,e,n){return ob(i,t)+ab(i,e)+cb(i,n)}function lb(i,t){let e=1-i;return e*e*e*t}function ub(i,t){let e=1-i;return 3*e*e*i*t}function hb(i,t){return 3*(1-i)*i*i*t}function fb(i,t){return i*i*i*t}function kr(i,t,e,n,s){return lb(i,t)+ub(i,e)+hb(i,n)+fb(i,s)}var Aa=class extends Sn{constructor(t=new et,e=new et,n=new et,s=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new et){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(kr(t,s.x,r.x,a.x,o.x),kr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Yl=class extends Sn{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(kr(t,s.x,r.x,a.x,o.x),kr(t,s.y,r.y,a.y,o.y),kr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ra=class extends Sn{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zl=class extends Sn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ca=class extends Sn{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Hr(t,s.x,r.x,a.x),Hr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pa=class extends Sn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Hr(t,s.x,r.x,a.x),Hr(t,s.y,r.y,a.y),Hr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ia=class extends Sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],u=s[a],l=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(od(o,c.x,u.x,l.x,f.x),od(o,c.y,u.y,l.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new et().fromArray(s))}return this}},La=Object.freeze({__proto__:null,ArcCurve:ql,CatmullRomCurve3:$r,CubicBezierCurve:Aa,CubicBezierCurve3:Yl,EllipseCurve:jr,LineCurve:Ra,LineCurve3:Zl,QuadraticBezierCurve:Ca,QuadraticBezierCurve3:Pa,SplineCurve:Ia}),jl=class extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new La[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),u=c===0?0:1-a/c;return o.getPointAt(u,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let u=0;u<c.length;u++){let l=c[u];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new La[s.type]().fromJSON(s))}return this}},ci=class extends jl{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ra(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ca(this.currentPoint.clone(),new et(t,e),new et(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Aa(this.currentPoint.clone(),new et(t,e),new et(n,s),new et(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ia(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let u=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+u,e+l,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let u=new jr(t,e,n,s,r,a,o,c);if(this.curves.length>0){let f=u.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(u);let l=u.getPoint(1);return this.currentPoint.copy(l),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},$l=class i extends Ce{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Me(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],u=[],l=1/e,f=new A,h=new et,d=new A,g=new A,y=new A,m=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-m,d.z=p*0,y.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),c.push(d.x,d.y,d.z),y.copy(g)}for(let x=0;x<=e;x++){let _=n+x*l*s,v=Math.sin(_),S=Math.cos(_);for(let E=0;E<=t.length-1;E++){f.x=t[E].x*v,f.y=t[E].y,f.z=t[E].x*S,a.push(f.x,f.y,f.z),h.x=x/e,h.y=E/(t.length-1),o.push(h.x,h.y);let T=c[3*E+0]*v,R=c[3*E+1],b=c[3*E+0]*S;u.push(T,R,b)}}for(let x=0;x<e;x++)for(let _=0;_<t.length-1;_++){let v=_+x*t.length,S=v,E=v+t.length,T=v+t.length+1,R=v+1;r.push(S,E,R),r.push(T,R,E)}this.setIndex(r),this.setAttribute("position",new Jt(a,3)),this.setAttribute("uv",new Jt(o,2)),this.setAttribute("normal",new Jt(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Da=class i extends $l{constructor(t=1,e=1,n=4,s=8){let r=new ci;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}};var Ii=class i extends Ce{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let u=this;s=Math.floor(s),r=Math.floor(r);let l=[],f=[],h=[],d=[],g=0,y=[],m=n/2,p=0;x(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(l),this.setAttribute("position",new Jt(f,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(d,2));function x(){let v=new A,S=new A,E=0,T=(e-t)/n;for(let R=0;R<=r;R++){let b=[],M=R/r,L=M*(e-t)+t;for(let U=0;U<=s;U++){let B=U/s,P=B*c+o,O=Math.sin(P),H=Math.cos(P);S.x=L*O,S.y=-M*n+m,S.z=L*H,f.push(S.x,S.y,S.z),v.set(O,T,H).normalize(),h.push(v.x,v.y,v.z),d.push(B,1-M),b.push(g++)}y.push(b)}for(let R=0;R<s;R++)for(let b=0;b<r;b++){let M=y[b][R],L=y[b+1][R],U=y[b+1][R+1],B=y[b][R+1];l.push(M,L,B),l.push(L,U,B),E+=6}u.addGroup(p,E,0),p+=E}function _(v){let S=g,E=new et,T=new A,R=0,b=v===!0?t:e,M=v===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,m*M,0),h.push(0,M,0),d.push(.5,.5),g++;let L=g;for(let U=0;U<=s;U++){let P=U/s*c+o,O=Math.cos(P),H=Math.sin(P);T.x=b*H,T.y=m*M,T.z=b*O,f.push(T.x,T.y,T.z),h.push(0,M,0),E.x=O*.5+.5,E.y=H*.5*M+.5,d.push(E.x,E.y),g++}for(let U=0;U<s;U++){let B=S+U,P=L+U;v===!0?l.push(P,P+1,B):l.push(P+1,P,B),R+=3}u.addGroup(p,R,v===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Mn=class extends ci{constructor(t){super(t),this.uuid=cs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ci().fromJSON(s))}return this}},db={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Od(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,u,l,f,h,d;if(n&&(r=xb(i,t,r,e)),i.length>80*e){o=u=i[0],c=l=i[1];for(let g=e;g<s;g+=e)f=i[g],h=i[g+1],f<o&&(o=f),h<c&&(c=h),f>u&&(u=f),h>l&&(l=h);d=Math.max(u-o,l-c),d=d!==0?32767/d:0}return Jr(r,a,e,o,c,d,0),a}};function Od(i,t,e,n,s){let r,a;if(s===Cb(i,t,e,n)>0)for(r=t;r<e;r+=n)a=ad(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=ad(r,i[r],i[r+1],a);return a&&Va(a,a.next)&&(Qr(a),a=a.next),a}function is(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Va(e,e.next)||ge(e.prev,e,e.next)===0)){if(Qr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Jr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Mb(i,n,s,r);let o=i,c,u;for(;i.prev!==i.next;){if(c=i.prev,u=i.next,r?mb(i,n,s,r):pb(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(u.i/e|0),Qr(i),i=u.next,o=u.next;continue}if(i=u,i===o){a?a===1?(i=gb(is(i),t,e),Jr(i,t,e,n,s,r,2)):a===2&&_b(i,t,e,n,s,r):Jr(is(i),t,e,n,s,r,1);break}}}function pb(i){let t=i.prev,e=i,n=i.next;if(ge(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,u=n.y,l=s<r?s<a?s:a:r<a?r:a,f=o<c?o<u?o:u:c<u?c:u,h=s>r?s>a?s:a:r>a?r:a,d=o>c?o>u?o:u:c>u?c:u,g=n.next;for(;g!==t;){if(g.x>=l&&g.x<=h&&g.y>=f&&g.y<=d&&zs(s,o,r,c,a,u,g.x,g.y)&&ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function mb(i,t,e,n){let s=i.prev,r=i,a=i.next;if(ge(s,r,a)>=0)return!1;let o=s.x,c=r.x,u=a.x,l=s.y,f=r.y,h=a.y,d=o<c?o<u?o:u:c<u?c:u,g=l<f?l<h?l:h:f<h?f:h,y=o>c?o>u?o:u:c>u?c:u,m=l>f?l>h?l:h:f>h?f:h,p=Jl(d,g,t,e,n),x=Jl(y,m,t,e,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=x;){if(_.x>=d&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&zs(o,l,c,f,u,h,_.x,_.y)&&ge(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&zs(o,l,c,f,u,h,v.x,v.y)&&ge(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&zs(o,l,c,f,u,h,_.x,_.y)&&ge(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&zs(o,l,c,f,u,h,v.x,v.y)&&ge(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function gb(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Va(s,r)&&Fd(s,n,n.next,r)&&Kr(s,r)&&Kr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Qr(n),Qr(n.next),n=i=r),n=n.next}while(n!==i);return is(n)}function _b(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&wb(a,o)){let c=zd(a,o);a=is(a,a.next),c=is(c,c.next),Jr(a,t,e,n,s,r,0),Jr(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function xb(i,t,e,n){let s=[],r,a,o,c,u;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,u=Od(i,o,c,n,!1),u===u.next&&(u.steiner=!0),s.push(Eb(u));for(s.sort(yb),r=0;r<s.length;r++)e=vb(s[r],e);return e}function yb(i,t){return i.x-t.x}function vb(i,t){let e=bb(i,t);if(!e)return t;let n=zd(e,i);return is(n,n.next),is(e,e.next)}function bb(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let h=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=r&&h>n&&(n=h,s=e.x<e.next.x?e:e.next,h===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,c=s.x,u=s.y,l=1/0,f;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&zs(a<u?r:n,a,c,u,a<u?n:r,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(r-e.x),Kr(e,i)&&(f<l||f===l&&(e.x>s.x||e.x===s.x&&Sb(s,e)))&&(s=e,l=f)),e=e.next;while(e!==o);return s}function Sb(i,t){return ge(i.prev,i,t.prev)<0&&ge(t.next,i,i.next)<0}function Mb(i,t,e,n){let s=i;do s.z===0&&(s.z=Jl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Tb(s)}function Tb(i){let t,e,n,s,r,a,o,c,u=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<u&&(o++,n=n.nextZ,!!n);t++);for(c=u;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,u*=2}while(a>1);return i}function Jl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Eb(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function zs(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function wb(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ab(i,t)&&(Kr(i,t)&&Kr(t,i)&&Rb(i,t)&&(ge(i.prev,i,t.prev)||ge(i,t.prev,t))||Va(i,t)&&ge(i.prev,i,i.next)>0&&ge(t.prev,t,t.next)>0)}function ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Va(i,t){return i.x===t.x&&i.y===t.y}function Fd(i,t,e,n){let s=ia(ge(i,t,e)),r=ia(ge(i,t,n)),a=ia(ge(e,n,i)),o=ia(ge(e,n,t));return!!(s!==r&&a!==o||s===0&&na(i,e,t)||r===0&&na(i,n,t)||a===0&&na(e,i,n)||o===0&&na(e,t,n))}function na(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ia(i){return i>0?1:i<0?-1:0}function Ab(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Fd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Kr(i,t){return ge(i.prev,i,i.next)<0?ge(i,t,i.next)>=0&&ge(i,i.prev,t)>=0:ge(i,t,i.prev)<0||ge(i,i.next,t)<0}function Rb(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function zd(i,t){let e=new Kl(i.i,i.x,i.y),n=new Kl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ad(i,t,e,n){let s=new Kl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Qr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Kl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Cb(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Pi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];cd(t),ld(n,t);let a=t.length;e.forEach(cd);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,ld(n,e[c]);let o=db.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function cd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ld(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var $s=class i extends Ce{constructor(t=new Mn([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let u=t[o];a(u)}this.setAttribute("position",new Jt(s,3)),this.setAttribute("uv",new Jt(r,2)),this.computeVertexNormals();function a(o){let c=[],u=e.curveSegments!==void 0?e.curveSegments:12,l=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Pb,_,v=!1,S,E,T,R;p&&(_=p.getSpacedPoints(l),v=!0,h=!1,S=p.computeFrenetFrames(l,!1),E=new A,T=new A,R=new A),h||(m=0,d=0,g=0,y=0);let b=o.extractPoints(u),M=b.shape,L=b.holes;if(!Pi.isClockWise(M)){M=M.reverse();for(let D=0,ut=L.length;D<ut;D++){let Q=L[D];Pi.isClockWise(Q)&&(L[D]=Q.reverse())}}let B=Pi.triangulateShape(M,L),P=M;for(let D=0,ut=L.length;D<ut;D++){let Q=L[D];M=M.concat(Q)}function O(D,ut,Q){return ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(ut,Q)}let H=M.length,W=B.length;function G(D,ut,Q){let lt,K,Rt,vt=D.x-ut.x,C=D.y-ut.y,w=Q.x-D.x,V=Q.y-D.y,at=vt*vt+C*C,st=vt*V-C*w;if(Math.abs(st)>Number.EPSILON){let nt=Math.sqrt(at),wt=Math.sqrt(w*w+V*V),yt=ut.x-C/nt,St=ut.y+vt/nt,Dt=Q.x-V/wt,Ft=Q.y+w/wt,rt=((Dt-yt)*V-(Ft-St)*w)/(vt*V-C*w);lt=yt+vt*rt-D.x,K=St+C*rt-D.y;let qt=lt*lt+K*K;if(qt<=2)return new et(lt,K);Rt=Math.sqrt(qt/2)}else{let nt=!1;vt>Number.EPSILON?w>Number.EPSILON&&(nt=!0):vt<-Number.EPSILON?w<-Number.EPSILON&&(nt=!0):Math.sign(C)===Math.sign(V)&&(nt=!0),nt?(lt=-C,K=vt,Rt=Math.sqrt(at)):(lt=vt,K=C,Rt=Math.sqrt(at/2))}return new et(lt/Rt,K/Rt)}let j=[];for(let D=0,ut=P.length,Q=ut-1,lt=D+1;D<ut;D++,Q++,lt++)Q===ut&&(Q=0),lt===ut&&(lt=0),j[D]=G(P[D],P[Q],P[lt]);let tt=[],J,mt=j.concat();for(let D=0,ut=L.length;D<ut;D++){let Q=L[D];J=[];for(let lt=0,K=Q.length,Rt=K-1,vt=lt+1;lt<K;lt++,Rt++,vt++)Rt===K&&(Rt=0),vt===K&&(vt=0),J[lt]=G(Q[lt],Q[Rt],Q[vt]);tt.push(J),mt=mt.concat(J)}for(let D=0;D<m;D++){let ut=D/m,Q=d*Math.cos(ut*Math.PI/2),lt=g*Math.sin(ut*Math.PI/2)+y;for(let K=0,Rt=P.length;K<Rt;K++){let vt=O(P[K],j[K],lt);ft(vt.x,vt.y,-Q)}for(let K=0,Rt=L.length;K<Rt;K++){let vt=L[K];J=tt[K];for(let C=0,w=vt.length;C<w;C++){let V=O(vt[C],J[C],lt);ft(V.x,V.y,-Q)}}}let Z=g+y;for(let D=0;D<H;D++){let ut=h?O(M[D],mt[D],Z):M[D];v?(T.copy(S.normals[0]).multiplyScalar(ut.x),E.copy(S.binormals[0]).multiplyScalar(ut.y),R.copy(_[0]).add(T).add(E),ft(R.x,R.y,R.z)):ft(ut.x,ut.y,0)}for(let D=1;D<=l;D++)for(let ut=0;ut<H;ut++){let Q=h?O(M[ut],mt[ut],Z):M[ut];v?(T.copy(S.normals[D]).multiplyScalar(Q.x),E.copy(S.binormals[D]).multiplyScalar(Q.y),R.copy(_[D]).add(T).add(E),ft(R.x,R.y,R.z)):ft(Q.x,Q.y,f/l*D)}for(let D=m-1;D>=0;D--){let ut=D/m,Q=d*Math.cos(ut*Math.PI/2),lt=g*Math.sin(ut*Math.PI/2)+y;for(let K=0,Rt=P.length;K<Rt;K++){let vt=O(P[K],j[K],lt);ft(vt.x,vt.y,f+Q)}for(let K=0,Rt=L.length;K<Rt;K++){let vt=L[K];J=tt[K];for(let C=0,w=vt.length;C<w;C++){let V=O(vt[C],J[C],lt);v?ft(V.x,V.y+_[l-1].y,_[l-1].x+Q):ft(V.x,V.y,f+Q)}}}F(),$();function F(){let D=s.length/3;if(h){let ut=0,Q=H*ut;for(let lt=0;lt<W;lt++){let K=B[lt];Et(K[2]+Q,K[1]+Q,K[0]+Q)}ut=l+m*2,Q=H*ut;for(let lt=0;lt<W;lt++){let K=B[lt];Et(K[0]+Q,K[1]+Q,K[2]+Q)}}else{for(let ut=0;ut<W;ut++){let Q=B[ut];Et(Q[2],Q[1],Q[0])}for(let ut=0;ut<W;ut++){let Q=B[ut];Et(Q[0]+H*l,Q[1]+H*l,Q[2]+H*l)}}n.addGroup(D,s.length/3-D,0)}function $(){let D=s.length/3,ut=0;ct(P,ut),ut+=P.length;for(let Q=0,lt=L.length;Q<lt;Q++){let K=L[Q];ct(K,ut),ut+=K.length}n.addGroup(D,s.length/3-D,1)}function ct(D,ut){let Q=D.length;for(;--Q>=0;){let lt=Q,K=Q-1;K<0&&(K=D.length-1);for(let Rt=0,vt=l+m*2;Rt<vt;Rt++){let C=H*Rt,w=H*(Rt+1),V=ut+lt+C,at=ut+K+C,st=ut+K+w,nt=ut+lt+w;Tt(V,at,st,nt)}}}function ft(D,ut,Q){c.push(D),c.push(ut),c.push(Q)}function Et(D,ut,Q){bt(D),bt(ut),bt(Q);let lt=s.length/3,K=x.generateTopUV(n,s,lt-3,lt-2,lt-1);At(K[0]),At(K[1]),At(K[2])}function Tt(D,ut,Q,lt){bt(D),bt(ut),bt(lt),bt(ut),bt(Q),bt(lt);let K=s.length/3,Rt=x.generateSideWallUV(n,s,K-6,K-3,K-2,K-1);At(Rt[0]),At(Rt[1]),At(Rt[3]),At(Rt[1]),At(Rt[2]),At(Rt[3])}function bt(D){s.push(c[D*3+0]),s.push(c[D*3+1]),s.push(c[D*3+2])}function At(D){r.push(D.x),r.push(D.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ib(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new La[s.type]().fromJSON(s)),new i(n,t.options)}},Pb={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],u=t[s*3],l=t[s*3+1];return[new et(r,a),new et(o,c),new et(u,l)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],u=t[n*3],l=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-l)<Math.abs(a-u)?[new et(a,1-c),new et(u,1-f),new et(h,1-g),new et(y,1-p)]:[new et(o,1-c),new et(l,1-f),new et(d,1-g),new et(m,1-p)]}};function Ib(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var to=class i extends Ce{constructor(t=new Mn([new et(0,.5),new et(-.5,-.5),new et(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(t)===!1)u(t);else for(let l=0;l<t.length;l++)u(t[l]),this.addGroup(o,c,l),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(r,3)),this.setAttribute("uv",new Jt(a,2));function u(l){let f=s.length/3,h=l.extractPoints(e),d=h.shape,g=h.holes;Pi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let x=g[m];Pi.isClockWise(x)===!0&&(g[m]=x.reverse())}let y=Pi.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let x=g[m];d=d.concat(x)}for(let m=0,p=d.length;m<p;m++){let x=d[m];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let m=0,p=y.length;m<p;m++){let x=y[m],_=x[0]+f,v=x[1]+f,S=x[2]+f;n.push(_,v,S),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Lb(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function Lb(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Js=class i extends Ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),u=0,l=[],f=new A,h=new A,d=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let x=[],_=p/n,v=0;p===0&&a===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let S=0;S<=e;S++){let E=S/e;f.x=-t*Math.cos(s+E*r)*Math.sin(a+_*o),f.y=t*Math.cos(a+_*o),f.z=t*Math.sin(s+E*r)*Math.sin(a+_*o),g.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),m.push(E+v,1-_),x.push(u++)}l.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){let _=l[p][x+1],v=l[p][x],S=l[p+1][x],E=l[p+1][x+1];(p!==0||a>0)&&d.push(_,v,E),(p!==n-1||c<Math.PI)&&d.push(v,S,E)}this.setIndex(d),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(y,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Na=class i extends Ce{constructor(t=new Pa(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new A,c=new A,u=new et,l=new A,f=[],h=[],d=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Jt(f,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(d,2));function y(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),x(),p()}function m(_){l=t.getPointAt(_/e,l);let v=a.normals[_],S=a.binormals[_];for(let E=0;E<=s;E++){let T=E/s*Math.PI*2,R=Math.sin(T),b=-Math.cos(T);c.x=b*v.x+R*S.x,c.y=b*v.y+R*S.y,c.z=b*v.z+R*S.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=l.x+n*c.x,o.y=l.y+n*c.y,o.z=l.z+n*c.z,f.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=e;_++)for(let v=1;v<=s;v++){let S=(s+1)*(_-1)+(v-1),E=(s+1)*_+(v-1),T=(s+1)*_+v,R=(s+1)*(_-1)+v;g.push(S,E,R),g.push(E,T,R)}}function x(){for(let _=0;_<=e;_++)for(let v=0;v<=s;v++)u.x=_/e,u.y=v/s,d.push(u.x,u.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new La[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Nn=class extends es{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ed,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ua=class extends Nn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function sa(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Db(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ks=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ql=class extends Ks{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gf,endingEnd:gf}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case _f:r=t,o=2*e-n;break;case xf:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case _f:a=t,c=2*n-e;break;case xf:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let u=(n-e)*.5,l=this.valueSize;this._weightPrev=u/(e-o),this._weightNext=u/(c-n),this._offsetPrev=r*l,this._offsetNext=a*l}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,u=c-o,l=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,p=-h*m+2*h*y-h*g,x=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*g+1,_=(-1-d)*m+(1.5+d)*y+.5*g,v=d*m-d*y;for(let S=0;S!==o;++S)r[S]=p*a[l+S]+x*a[u+S]+_*a[c+S]+v*a[f+S];return r}},tu=class extends Ks{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,u=c-o,l=(n-e)/(s-e),f=1-l;for(let h=0;h!==o;++h)r[h]=a[u+h]*f+a[c+h]*l;return r}},eu=class extends Ks{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=sa(e,this.TimeBufferType),this.values=sa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:sa(t.times,Array),values:sa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new eu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new tu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ql(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case aa:e=this.InterpolantFactoryMethodDiscrete;break;case ca:e=this.InterpolantFactoryMethodLinear;break;case Jc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return aa;case this.InterpolantFactoryMethodLinear:return ca;case this.InterpolantFactoryMethodSmooth:return Jc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Db(s))for(let o=0,c=s.length;o!==c;++o){let u=s[o];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,u),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Jc,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,u=t[o],l=t[o+1];if(u!==l&&(o!==1||u!==t[0]))if(s)c=!0;else{let f=o*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){let y=e[f+g];if(y!==e[h+g]||y!==e[d+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*n,h=a*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,u=0;u!==n;++u)e[c+u]=e[o+u];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=ca;var ss=class extends Un{};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=aa;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var nu=class extends Un{};nu.prototype.ValueTypeName="color";var iu=class extends Un{};iu.prototype.ValueTypeName="number";var su=class extends Ks{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),u=t*o;for(let l=u+o;u!==l;u+=4)pn.slerpFlat(r,0,a,u-o,a,u,c);return r}},eo=class extends Un{InterpolantFactoryMethodLinear(t){return new su(this.times,this.values,this.getValueSize(),t)}};eo.prototype.ValueTypeName="quaternion";eo.prototype.DefaultInterpolation=ca;eo.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends Un{};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=aa;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var ru=class extends Un{};ru.prototype.ValueTypeName="vector";var ou=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(l){o++,r===!1&&s.onStart!==void 0&&s.onStart(l,a,o),r=!0},this.itemEnd=function(l){a++,s.onProgress!==void 0&&s.onProgress(l,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(l){s.onError!==void 0&&s.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,f){return u.push(l,f),this},this.removeHandler=function(l){let f=u.indexOf(l);return f!==-1&&u.splice(f,2),this},this.getHandler=function(l){for(let f=0,h=u.length;f<h;f+=2){let d=u[f],g=u[f+1];if(d.global&&(d.lastIndex=0),d.test(l))return g}return null}}},Nb=new ou,au=class{constructor(t){this.manager=t!==void 0?t:Nb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};au.DEFAULT_MATERIAL_NAME="__DEFAULT";var no=class extends sn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Ba=class extends no{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ml=new Bt,ud=new A,hd=new A,Oa=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qr,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;ud.setFromMatrixPosition(t.matrixWorld),e.position.copy(ud),hd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hd),e.updateMatrixWorld(),Ml.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ml),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ml)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var fd=new Bt,Ur=new A,Tl=new A,cu=class extends Oa{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new Kt(2,1,1,1),new Kt(0,1,1,1),new Kt(3,1,1,1),new Kt(1,1,1,1),new Kt(3,0,1,1),new Kt(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ur.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ur),Tl.copy(n.position),Tl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Tl),n.updateMatrixWorld(),s.makeTranslation(-Ur.x,-Ur.y,-Ur.z),fd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fd)}},Fa=class extends no{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new cu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},lu=class extends Oa{constructor(){super(new Ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},io=class extends no{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new lu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var vu="\\[\\]\\.:\\/",Ub=new RegExp("["+vu+"]","g"),bu="[^"+vu+"]",Bb="[^"+vu.replace("\\.","")+"]",Ob=/((?:WC+[\/:])*)/.source.replace("WC",bu),Fb=/(WCOD+)?/.source.replace("WCOD",Bb),zb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bu),Hb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bu),kb=new RegExp("^"+Ob+Fb+zb+Hb+"$"),Vb=["material","materials","bones","map"],uu=class{constructor(t,e,n){let s=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},he=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ub,"")}static parseTrackName(t){let e=kb.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Vb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===u){u=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=uu;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var E1=new Float32Array(1);var li=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var dd=new A,ra=new A,Le=class{constructor(t=new A,e=new A){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){dd.subVectors(t,this.start),ra.subVectors(this.end,this.start);let n=ra.dot(ra),r=ra.dot(dd)/n;return e&&(r=Me(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hu);var Ga=class extends js{constructor(t=null){super();let e=new Wn;e.deleteAttribute("uv");let n=new Nn({side:Fe}),s=new Nn,r=5;t!==null&&t._useLegacyLights===!1&&(r=900);let a=new Fa(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new ie(e,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let c=new ie(e,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let u=new ie(e,s);u.position.set(-5.607,-.754,-.758),u.rotation.set(0,.994,0),u.scale.set(1.97,1.534,3.955),this.add(u);let l=new ie(e,s);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let f=new ie(e,s);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);let h=new ie(e,s);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let d=new ie(e,s);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let g=new ie(e,tr(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let y=new ie(e,tr(50));y.position.set(-16.109,18.021,-8.207),y.scale.set(.1,2.425,2.751),this.add(y);let m=new ie(e,tr(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let p=new ie(e,tr(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let x=new ie(e,tr(20));x.position.set(3.235,11.486,-12.541),x.scale.set(2.5,2,.1),this.add(x);let _=new ie(e,tr(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function tr(i){let t=new qs;return t.color.setScalar(i),t}var Hd={type:"change"},Mu={type:"start"},kd={type:"end"},Wa=new ri,Vd=new We,Gb=Math.cos(70*Ad.DEG2RAD),Xa=class extends Gn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:os.ROTATE,MIDDLE:os.DOLLY,RIGHT:os.PAN},this.touches={ONE:as.ROTATE,TWO:as.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",nt),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",nt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Hd),n.update(),r=s.NONE},this.update=function(){let N=new A,ot=new pn().setFromUnitVectors(t.up,new A(0,1,0)),_t=ot.clone().invert(),ht=new A,Ct=new pn,Yt=new A,$t=2*Math.PI;return function(gt=null){let z=n.object.position;N.copy(z).sub(n.target),N.applyQuaternion(ot),o.setFromVector3(N),n.autoRotate&&r===s.NONE&&L(b(gt)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let dt=n.minAzimuthAngle,pt=n.maxAzimuthAngle;isFinite(dt)&&isFinite(pt)&&(dt<-Math.PI?dt+=$t:dt>Math.PI&&(dt-=$t),pt<-Math.PI?pt+=$t:pt>Math.PI&&(pt-=$t),dt<=pt?o.theta=Math.max(dt,Math.min(pt,o.theta)):o.theta=o.theta>(dt+pt)/2?Math.max(dt,o.theta):Math.min(pt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(l,n.dampingFactor):n.target.add(l),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&E||n.object.isOrthographicCamera?o.radius=j(o.radius):o.radius=j(o.radius*u),N.setFromSpherical(o),N.applyQuaternion(_t),z.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,l.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),l.set(0,0,0));let Nt=!1;if(n.zoomToCursor&&E){let Pt=null;if(n.object.isPerspectiveCamera){let te=N.length();Pt=j(te*u);let ne=te-Pt;n.object.position.addScaledVector(v,ne),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let te=new A(S.x,S.y,0);te.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),Nt=!0;let ne=new A(S.x,S.y,0);ne.unproject(n.object),n.object.position.sub(ne).add(te),n.object.updateMatrixWorld(),Pt=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Pt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Pt).add(n.object.position):(Wa.origin.copy(n.object.position),Wa.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Wa.direction))<Gb?t.lookAt(n.target):(Vd.setFromNormalAndCoplanarPoint(n.object.up,n.target),Wa.intersectPlane(Vd,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),Nt=!0);return u=1,E=!1,Nt||ht.distanceToSquared(n.object.position)>a||8*(1-Ct.dot(n.object.quaternion))>a||Yt.distanceToSquared(n.target)>0?(n.dispatchEvent(Hd),ht.copy(n.object.position),Ct.copy(n.object.quaternion),Yt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",St),n.domElement.removeEventListener("pointerdown",vt),n.domElement.removeEventListener("pointercancel",w),n.domElement.removeEventListener("wheel",st),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",w),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",nt),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,a=1e-6,o=new li,c=new li,u=1,l=new A,f=new et,h=new et,d=new et,g=new et,y=new et,m=new et,p=new et,x=new et,_=new et,v=new A,S=new et,E=!1,T=[],R={};function b(N){return N!==null?2*Math.PI/60*n.autoRotateSpeed*N:2*Math.PI/60/60*n.autoRotateSpeed}function M(N){let ot=Math.abs(N)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*ot)}function L(N){c.theta-=N}function U(N){c.phi-=N}let B=function(){let N=new A;return function(_t,ht){N.setFromMatrixColumn(ht,0),N.multiplyScalar(-_t),l.add(N)}}(),P=function(){let N=new A;return function(_t,ht){n.screenSpacePanning===!0?N.setFromMatrixColumn(ht,1):(N.setFromMatrixColumn(ht,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(_t),l.add(N)}}(),O=function(){let N=new A;return function(_t,ht){let Ct=n.domElement;if(n.object.isPerspectiveCamera){let Yt=n.object.position;N.copy(Yt).sub(n.target);let $t=N.length();$t*=Math.tan(n.object.fov/2*Math.PI/180),B(2*_t*$t/Ct.clientHeight,n.object.matrix),P(2*ht*$t/Ct.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(_t*(n.object.right-n.object.left)/n.object.zoom/Ct.clientWidth,n.object.matrix),P(ht*(n.object.top-n.object.bottom)/n.object.zoom/Ct.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function H(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(N,ot){if(!n.zoomToCursor)return;E=!0;let _t=n.domElement.getBoundingClientRect(),ht=N-_t.left,Ct=ot-_t.top,Yt=_t.width,$t=_t.height;S.x=ht/Yt*2-1,S.y=-(Ct/$t)*2+1,v.set(S.x,S.y,1).unproject(n.object).sub(n.object.position).normalize()}function j(N){return Math.max(n.minDistance,Math.min(n.maxDistance,N))}function tt(N){f.set(N.clientX,N.clientY)}function J(N){G(N.clientX,N.clientX),p.set(N.clientX,N.clientY)}function mt(N){g.set(N.clientX,N.clientY)}function Z(N){h.set(N.clientX,N.clientY),d.subVectors(h,f).multiplyScalar(n.rotateSpeed);let ot=n.domElement;L(2*Math.PI*d.x/ot.clientHeight),U(2*Math.PI*d.y/ot.clientHeight),f.copy(h),n.update()}function F(N){x.set(N.clientX,N.clientY),_.subVectors(x,p),_.y>0?H(M(_.y)):_.y<0&&W(M(_.y)),p.copy(x),n.update()}function $(N){y.set(N.clientX,N.clientY),m.subVectors(y,g).multiplyScalar(n.panSpeed),O(m.x,m.y),g.copy(y),n.update()}function ct(N){G(N.clientX,N.clientY),N.deltaY<0?W(M(N.deltaY)):N.deltaY>0&&H(M(N.deltaY)),n.update()}function ft(N){let ot=!1;switch(N.code){case n.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),ot=!0;break;case n.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),ot=!0;break;case n.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),ot=!0;break;case n.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),ot=!0;break}ot&&(N.preventDefault(),n.update())}function Et(N){if(T.length===1)f.set(N.pageX,N.pageY);else{let ot=qt(N),_t=.5*(N.pageX+ot.x),ht=.5*(N.pageY+ot.y);f.set(_t,ht)}}function Tt(N){if(T.length===1)g.set(N.pageX,N.pageY);else{let ot=qt(N),_t=.5*(N.pageX+ot.x),ht=.5*(N.pageY+ot.y);g.set(_t,ht)}}function bt(N){let ot=qt(N),_t=N.pageX-ot.x,ht=N.pageY-ot.y,Ct=Math.sqrt(_t*_t+ht*ht);p.set(0,Ct)}function At(N){n.enableZoom&&bt(N),n.enablePan&&Tt(N)}function D(N){n.enableZoom&&bt(N),n.enableRotate&&Et(N)}function ut(N){if(T.length==1)h.set(N.pageX,N.pageY);else{let _t=qt(N),ht=.5*(N.pageX+_t.x),Ct=.5*(N.pageY+_t.y);h.set(ht,Ct)}d.subVectors(h,f).multiplyScalar(n.rotateSpeed);let ot=n.domElement;L(2*Math.PI*d.x/ot.clientHeight),U(2*Math.PI*d.y/ot.clientHeight),f.copy(h)}function Q(N){if(T.length===1)y.set(N.pageX,N.pageY);else{let ot=qt(N),_t=.5*(N.pageX+ot.x),ht=.5*(N.pageY+ot.y);y.set(_t,ht)}m.subVectors(y,g).multiplyScalar(n.panSpeed),O(m.x,m.y),g.copy(y)}function lt(N){let ot=qt(N),_t=N.pageX-ot.x,ht=N.pageY-ot.y,Ct=Math.sqrt(_t*_t+ht*ht);x.set(0,Ct),_.set(0,Math.pow(x.y/p.y,n.zoomSpeed)),H(_.y),p.copy(x);let Yt=(N.pageX+ot.x)*.5,$t=(N.pageY+ot.y)*.5;G(Yt,$t)}function K(N){n.enableZoom&&lt(N),n.enablePan&&Q(N)}function Rt(N){n.enableZoom&&lt(N),n.enableRotate&&ut(N)}function vt(N){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",C),n.domElement.addEventListener("pointerup",w)),Dt(N),N.pointerType==="touch"?wt(N):V(N))}function C(N){n.enabled!==!1&&(N.pointerType==="touch"?yt(N):at(N))}function w(N){Ft(N),T.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",w)),n.dispatchEvent(kd),r=s.NONE}function V(N){let ot;switch(N.button){case 0:ot=n.mouseButtons.LEFT;break;case 1:ot=n.mouseButtons.MIDDLE;break;case 2:ot=n.mouseButtons.RIGHT;break;default:ot=-1}switch(ot){case os.DOLLY:if(n.enableZoom===!1)return;J(N),r=s.DOLLY;break;case os.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;mt(N),r=s.PAN}else{if(n.enableRotate===!1)return;tt(N),r=s.ROTATE}break;case os.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;tt(N),r=s.ROTATE}else{if(n.enablePan===!1)return;mt(N),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Mu)}function at(N){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;Z(N);break;case s.DOLLY:if(n.enableZoom===!1)return;F(N);break;case s.PAN:if(n.enablePan===!1)return;$(N);break}}function st(N){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(N.preventDefault(),n.dispatchEvent(Mu),ct(N),n.dispatchEvent(kd))}function nt(N){n.enabled===!1||n.enablePan===!1||ft(N)}function wt(N){switch(rt(N),T.length){case 1:switch(n.touches.ONE){case as.ROTATE:if(n.enableRotate===!1)return;Et(N),r=s.TOUCH_ROTATE;break;case as.PAN:if(n.enablePan===!1)return;Tt(N),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case as.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;At(N),r=s.TOUCH_DOLLY_PAN;break;case as.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;D(N),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Mu)}function yt(N){switch(rt(N),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;ut(N),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Q(N),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;K(N),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Rt(N),n.update();break;default:r=s.NONE}}function St(N){n.enabled!==!1&&N.preventDefault()}function Dt(N){T.push(N.pointerId)}function Ft(N){delete R[N.pointerId];for(let ot=0;ot<T.length;ot++)if(T[ot]==N.pointerId){T.splice(ot,1);return}}function rt(N){let ot=R[N.pointerId];ot===void 0&&(ot=new et,R[N.pointerId]=ot),ot.set(N.pageX,N.pageY)}function qt(N){let ot=N.pointerId===T[0]?T[1]:T[0];return R[ot]}n.domElement.addEventListener("contextmenu",St),n.domElement.addEventListener("pointerdown",vt),n.domElement.addEventListener("pointercancel",w),n.domElement.addEventListener("wheel",st,{passive:!1}),this.update()}};function er(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Ce,u=0;for(let l=0;l<i.length;++l){let f=i[l],h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,d,l),u+=d}}if(e){let l=0,f=[];for(let h=0;h<i.length;++h){let d=i[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+l);l+=i[h].attributes.position.count}c.setIndex(f)}for(let l in r){let f=Gd(r[l]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;c.setAttribute(l,f)}for(let l in a){let f=a[l][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[l]=[];for(let h=0;h<f;++h){let d=[];for(let y=0;y<a[l].length;++y)d.push(a[l][y][h]);let g=Gd(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;c.morphAttributes[l].push(g)}}return c}function Gd(i){let t,e,n,s=-1,r=0;for(let u=0;u<i.length;++u){let l=i[u];if(l.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=l.array.constructor),t!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=l.itemSize),e!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=l.gpuType),s!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=l.array.length}let a=new t(r),o=0;for(let u=0;u<i.length;++u)a.set(i[u].array,o),o+=i[u].array.length;let c=new fe(a,e,n);return s!==void 0&&(c.gpuType=s),c}var Wd=Math.pow(2,-24),qa=Symbol("SKIP_GENERATION");function Wb(i){return i.index?i.index.count:i.attributes.position.count}function Xn(i){return Wb(i)/3}function Xb(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function Xd(i,t){if(!i.index){let e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=Xb(e,n);i.setIndex(new fe(s,1));for(let r=0;r<e;r++)s[r]=r}}function Tu(i){let t=Xn(i),e=i.drawRange,n=e.start/3,s=(e.start+e.count)/3,r=Math.max(0,n),a=Math.min(t,s)-r;return[{offset:Math.floor(r),count:Math.floor(a)}]}function Eu(i){if(!i.groups||!i.groups.length)return Tu(i);let t=[],e=new Set,n=i.drawRange,s=n.start/3,r=(n.start+n.count)/3;for(let o of i.groups){let c=o.start/3,u=(o.start+o.count)/3;e.add(Math.max(s,c)),e.add(Math.min(r,u))}let a=Array.from(e.values()).sort((o,c)=>o-c);for(let o=0;o<a.length-1;o++){let c=a[o],u=a[o+1];t.push({offset:Math.floor(c),count:Math.floor(u-c)})}return t}function qd(i){if(i.groups.length===0)return!1;let t=Xn(i),e=Eu(i).sort((r,a)=>r.offset-a.offset),n=e[e.length-1];n.count=Math.min(t-n.offset,n.count);let s=0;return e.forEach(({count:r})=>s+=r),t!==s}function Ya(i,t,e,n,s){let r=1/0,a=1/0,o=1/0,c=-1/0,u=-1/0,l=-1/0,f=1/0,h=1/0,d=1/0,g=-1/0,y=-1/0,m=-1/0;for(let p=t*6,x=(t+e)*6;p<x;p+=6){let _=i[p+0],v=i[p+1],S=_-v,E=_+v;S<r&&(r=S),E>c&&(c=E),_<f&&(f=_),_>g&&(g=_);let T=i[p+2],R=i[p+3],b=T-R,M=T+R;b<a&&(a=b),M>u&&(u=M),T<h&&(h=T),T>y&&(y=T);let L=i[p+4],U=i[p+5],B=L-U,P=L+U;B<o&&(o=B),P>l&&(l=P),L<d&&(d=L),L>m&&(m=L)}n[0]=r,n[1]=a,n[2]=o,n[3]=c,n[4]=u,n[5]=l,s[0]=f,s[1]=h,s[2]=d,s[3]=g,s[4]=y,s[5]=m}function Yd(i,t=null,e=null,n=null){let s=i.attributes.position,r=i.index?i.index.array:null,a=Xn(i),o=s.normalized,c;t===null?(c=new Float32Array(a*6*4),e=0,n=a):(c=t,e=e||0,n=n||a);let u=s.array,l=s.offset||0,f=3;s.isInterleavedBufferAttribute&&(f=s.data.stride);let h=["getX","getY","getZ"];for(let d=e;d<e+n;d++){let g=d*3,y=d*6,m=g+0,p=g+1,x=g+2;r&&(m=r[m],p=r[p],x=r[x]),o||(m=m*f+l,p=p*f+l,x=x*f+l);for(let _=0;_<3;_++){let v,S,E;o?(v=s[h[_]](m),S=s[h[_]](p),E=s[h[_]](x)):(v=u[m+_],S=u[p+_],E=u[x+_]);let T=v;S<T&&(T=S),E<T&&(T=E);let R=v;S>R&&(R=S),E>R&&(R=E);let b=(R-T)/2,M=_*2;c[y+M+0]=T+b,c[y+M+1]=b+(Math.abs(T)+b)*Wd}}return c}function se(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function wu(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){let s=i[n+3]-i[n];s>e&&(e=s,t=n)}return t}function Au(i,t){t.set(i)}function Ru(i,t,e){let n,s;for(let r=0;r<3;r++){let a=r+3;n=i[r],s=t[r],e[r]=n<s?n:s,n=i[a],s=t[a],e[a]=n>s?n:s}}function so(i,t,e){for(let n=0;n<3;n++){let s=t[i+2*n],r=t[i+2*n+1],a=s-r,o=s+r;a<e[n]&&(e[n]=a),o>e[n+3]&&(e[n+3]=o)}}function nr(i){let t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}var ui=32,Yb=(i,t)=>i.candidate-t.candidate,Li=new Array(ui).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Za=new Float32Array(6);function $d(i,t,e,n,s,r){let a=-1,o=0;if(r===0)a=wu(t),a!==-1&&(o=(t[a]+t[a+3])/2);else if(r===1)a=wu(i),a!==-1&&(o=Zb(e,n,s,a));else if(r===2){let c=nr(i),u=1.25*s,l=n*6,f=(n+s)*6;for(let h=0;h<3;h++){let d=t[h],m=(t[h+3]-d)/ui;if(s<ui/4){let p=[...Li];p.length=s;let x=0;for(let v=l;v<f;v+=6,x++){let S=p[x];S.candidate=e[v+2*h],S.count=0;let{bounds:E,leftCacheBounds:T,rightCacheBounds:R}=S;for(let b=0;b<3;b++)R[b]=1/0,R[b+3]=-1/0,T[b]=1/0,T[b+3]=-1/0,E[b]=1/0,E[b+3]=-1/0;so(v,e,E)}p.sort(Yb);let _=s;for(let v=0;v<_;v++){let S=p[v];for(;v+1<_&&p[v+1].candidate===S.candidate;)p.splice(v+1,1),_--}for(let v=l;v<f;v+=6){let S=e[v+2*h];for(let E=0;E<_;E++){let T=p[E];S>=T.candidate?so(v,e,T.rightCacheBounds):(so(v,e,T.leftCacheBounds),T.count++)}}for(let v=0;v<_;v++){let S=p[v],E=S.count,T=s-S.count,R=S.leftCacheBounds,b=S.rightCacheBounds,M=0;E!==0&&(M=nr(R)/c);let L=0;T!==0&&(L=nr(b)/c);let U=1+1.25*(M*E+L*T);U<u&&(a=h,u=U,o=S.candidate)}}else{for(let _=0;_<ui;_++){let v=Li[_];v.count=0,v.candidate=d+m+_*m;let S=v.bounds;for(let E=0;E<3;E++)S[E]=1/0,S[E+3]=-1/0}for(let _=l;_<f;_+=6){let E=~~((e[_+2*h]-d)/m);E>=ui&&(E=ui-1);let T=Li[E];T.count++,so(_,e,T.bounds)}let p=Li[ui-1];Au(p.bounds,p.rightCacheBounds);for(let _=ui-2;_>=0;_--){let v=Li[_],S=Li[_+1];Ru(v.bounds,S.rightCacheBounds,v.rightCacheBounds)}let x=0;for(let _=0;_<ui-1;_++){let v=Li[_],S=v.count,E=v.bounds,R=Li[_+1].rightCacheBounds;S!==0&&(x===0?Au(E,Za):Ru(E,Za,Za)),x+=S;let b=0,M=0;x!==0&&(b=nr(Za)/c);let L=s-x;L!==0&&(M=nr(R)/c);let U=1+1.25*(b*x+M*L);U<u&&(a=h,u=U,o=v.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:a,pos:o}}function Zb(i,t,e,n){let s=0;for(let r=t,a=t+e;r<a;r++)s+=i[r*6+n*2];return s/e}var ir=class{constructor(){this.boundingData=new Float32Array(6)}};function Jd(i,t,e,n,s,r){let a=n,o=n+s-1,c=r.pos,u=r.axis*2;for(;;){for(;a<=o&&e[a*6+u]<c;)a++;for(;a<=o&&e[o*6+u]>=c;)o--;if(a<o){for(let l=0;l<3;l++){let f=t[a*3+l];t[a*3+l]=t[o*3+l],t[o*3+l]=f}for(let l=0;l<6;l++){let f=e[a*6+l];e[a*6+l]=e[o*6+l],e[o*6+l]=f}a++,o--}else return a}}function Kd(i,t,e,n,s,r){let a=n,o=n+s-1,c=r.pos,u=r.axis*2;for(;;){for(;a<=o&&e[a*6+u]<c;)a++;for(;a<=o&&e[o*6+u]>=c;)o--;if(a<o){let l=i[a];i[a]=i[o],i[o]=l;for(let f=0;f<6;f++){let h=e[a*6+f];e[a*6+f]=e[o*6+f],e[o*6+f]=h}a++,o--}else return a}}function _e(i,t){return t[i+15]===65535}function Te(i,t){return t[i+6]}function Re(i,t){return t[i+14]}function ze(i){return i+8}function He(i,t){return t[i+6]}function ja(i,t){return t[i+7]}var Qd,ro,$a,tp,jb=Math.pow(2,32);function Ja(i){return"count"in i?1:1+Ja(i.left)+Ja(i.right)}function ep(i,t,e){return Qd=new Float32Array(e),ro=new Uint32Array(e),$a=new Uint16Array(e),tp=new Uint8Array(e),Cu(i,t)}function Cu(i,t){let e=i/4,n=i/2,s="count"in t,r=t.boundingData;for(let a=0;a<6;a++)Qd[e+a]=r[a];if(s)if(t.buffer){let a=t.buffer;tp.set(new Uint8Array(a),i);for(let o=i,c=i+a.byteLength;o<c;o+=32){let u=o/2;_e(u,$a)||(ro[o/4+6]+=e)}return i+a.byteLength}else{let a=t.offset,o=t.count;return ro[e+6]=a,$a[n+14]=o,$a[n+15]=65535,i+32}else{let a=t.left,o=t.right,c=t.splitAxis,u;if(u=Cu(i+32,a),u/4>jb)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return ro[e+6]=u/4,u=Cu(u,o),ro[e+7]=c,u}}function $b(i,t){let e=(i.index?i.index.count:i.attributes.position.count)/3,n=e>2**16,s=n?4:2,r=t?new SharedArrayBuffer(e*s):new ArrayBuffer(e*s),a=n?new Uint32Array(r):new Uint16Array(r);for(let o=0,c=a.length;o<c;o++)a[o]=o;return a}function Jb(i,t,e,n,s){let{maxDepth:r,verbose:a,maxLeafTris:o,strategy:c,onProgress:u,indirect:l}=s,f=i._indirectBuffer,h=i.geometry,d=h.index?h.index.array:null,g=l?Kd:Jd,y=Xn(h),m=new Float32Array(6),p=!1,x=new ir;return Ya(t,e,n,x.boundingData,m),v(x,e,n,m),x;function _(S){u&&u(S/y)}function v(S,E,T,R=null,b=0){if(!p&&b>=r&&(p=!0,a&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(h))),T<=o||b>=r)return _(E+T),S.offset=E,S.count=T,S;let M=$d(S.boundingData,R,t,E,T,c);if(M.axis===-1)return _(E+T),S.offset=E,S.count=T,S;let L=g(f,d,t,E,T,M);if(L===E||L===E+T)_(E+T),S.offset=E,S.count=T;else{S.splitAxis=M.axis;let U=new ir,B=E,P=L-E;S.left=U,Ya(t,B,P,U.boundingData,m),v(U,B,P,m,b+1);let O=new ir,H=L,W=T-P;S.right=O,Ya(t,H,W,O.boundingData,m),v(O,H,W,m,b+1)}return S}}function np(i,t){let e=i.geometry;t.indirect&&(i._indirectBuffer=$b(e,t.useSharedArrayBuffer),qd(e)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||Xd(e,t);let n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=Yd(e),r=t.indirect?Tu(e):Eu(e);i._roots=r.map(a=>{let o=Jb(i,s,a.offset,a.count,t),c=Ja(o),u=new n(32*c);return ep(0,o,u),u})}var ln=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,s=-1/0;for(let r=0,a=t.length;r<a;r++){let c=t[r][e];n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}setFromPoints(t,e){let n=1/0,s=-1/0;for(let r=0,a=e.length;r<a;r++){let o=e[r],c=t.dot(o);n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}};ln.prototype.setFromBox=function(){let i=new A;return function(e,n){let s=n.min,r=n.max,a=1/0,o=-1/0;for(let c=0;c<=1;c++)for(let u=0;u<=1;u++)for(let l=0;l<=1;l++){i.x=s.x*c+r.x*(1-c),i.y=s.y*u+r.y*(1-u),i.z=s.z*l+r.z*(1-l);let f=e.dot(i);a=Math.min(f,a),o=Math.max(f,o)}this.min=a,this.max=o}}();var uM=function(){let i=new ln;return function(e,n){let s=e.points,r=e.satAxes,a=e.satBounds,o=n.points,c=n.satAxes,u=n.satBounds;for(let l=0;l<3;l++){let f=a[l],h=r[l];if(i.setFromPoints(h,o),f.isSeparated(i))return!1}for(let l=0;l<3;l++){let f=u[l],h=c[l];if(i.setFromPoints(h,s),f.isSeparated(i))return!1}}}();var Kb=function(){let i=new A,t=new A,e=new A;return function(s,r,a){let o=s.start,c=i,u=r.start,l=t;e.subVectors(o,u),i.subVectors(s.end,s.start),t.subVectors(r.end,r.start);let f=e.dot(l),h=l.dot(c),d=l.dot(l),g=e.dot(c),m=c.dot(c)*d-h*h,p,x;m!==0?p=(f*h-g*d)/m:p=0,x=(f+p*h)/d,a.x=p,a.y=x}}(),ao=function(){let i=new et,t=new A,e=new A;return function(s,r,a,o){Kb(s,r,i);let c=i.x,u=i.y;if(c>=0&&c<=1&&u>=0&&u<=1){s.at(c,a),r.at(u,o);return}else if(c>=0&&c<=1){u<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else if(u>=0&&u<=1){c<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else{let l;c<0?l=s.start:l=s.end;let f;u<0?f=r.start:f=r.end;let h=t,d=e;if(s.closestPointToPoint(f,!0,t),r.closestPointToPoint(l,!0,e),h.distanceToSquared(f)<=d.distanceToSquared(l)){a.copy(h),o.copy(f);return}else{a.copy(l),o.copy(d);return}}}}(),ip=function(){let i=new A,t=new A,e=new We,n=new Le;return function(r,a){let{radius:o,center:c}=r,{a:u,b:l,c:f}=a;if(n.start=u,n.end=l,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o||(n.start=u,n.end=f,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o)||(n.start=l,n.end=f,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o))return!0;let y=a.getPlane(e);if(Math.abs(y.distanceToPoint(c))<=o){let p=y.projectPoint(c,t);if(a.containsPoint(p))return!0}return!1}}();var Qb=1e-15;function Pu(i){return Math.abs(i)<Qb}var De=class extends le{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new A),this.satBounds=new Array(4).fill().map(()=>new ln),this.points=[this.a,this.b,this.c],this.sphere=new ts,this.plane=new We,this.needsUpdate=!0}intersectsSphere(t){return ip(t,this)}update(){let t=this.a,e=this.b,n=this.c,s=this.points,r=this.satAxes,a=this.satBounds,o=r[0],c=a[0];this.getNormal(o),c.setFromPoints(o,s);let u=r[1],l=a[1];u.subVectors(t,e),l.setFromPoints(u,s);let f=r[2],h=a[2];f.subVectors(e,n),h.setFromPoints(f,s);let d=r[3],g=a[3];d.subVectors(n,t),g.setFromPoints(d,s),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(o,t),this.needsUpdate=!1}};De.prototype.closestPointToSegment=function(){let i=new A,t=new A,e=new Le;return function(s,r=null,a=null){let{start:o,end:c}=s,u=this.points,l,f=1/0;for(let h=0;h<3;h++){let d=(h+1)%3;e.start.copy(u[h]),e.end.copy(u[d]),ao(e,s,i,t),l=i.distanceToSquared(t),l<f&&(f=l,r&&r.copy(i),a&&a.copy(t))}return this.closestPointToPoint(o,i),l=o.distanceToSquared(i),l<f&&(f=l,r&&r.copy(i),a&&a.copy(o)),this.closestPointToPoint(c,i),l=c.distanceToSquared(i),l<f&&(f=l,r&&r.copy(i),a&&a.copy(c)),Math.sqrt(f)}}();De.prototype.intersectsTriangle=function(){let i=new De,t=new Array(3),e=new Array(3),n=new ln,s=new ln,r=new A,a=new A,o=new A,c=new A,u=new A,l=new Le,f=new Le,h=new Le,d=new A;function g(y,m,p){let x=y.points,_=0,v=-1;for(let S=0;S<3;S++){let{start:E,end:T}=l;E.copy(x[S]),T.copy(x[(S+1)%3]),l.delta(a);let R=Pu(m.distanceToPoint(E));if(Pu(m.normal.dot(a))&&R){p.copy(l),_=2;break}let b=m.intersectLine(l,d);if(!b&&R&&d.copy(E),(b||R)&&!Pu(d.distanceTo(T))){if(_<=1)(_===1?p.start:p.end).copy(d),R&&(v=_);else if(_>=2){(v===1?p.start:p.end).copy(d),_=2;break}if(_++,_===2&&v===-1)break}}return _}return function(m,p=null,x=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(i.copy(m),i.update(),m=i);let _=this.plane,v=m.plane;if(Math.abs(_.normal.dot(v.normal))>1-1e-10){let S=this.satBounds,E=this.satAxes;e[0]=m.a,e[1]=m.b,e[2]=m.c;for(let b=0;b<4;b++){let M=S[b],L=E[b];if(n.setFromPoints(L,e),M.isSeparated(n))return!1}let T=m.satBounds,R=m.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let b=0;b<4;b++){let M=T[b],L=R[b];if(n.setFromPoints(L,t),M.isSeparated(n))return!1}for(let b=0;b<4;b++){let M=E[b];for(let L=0;L<4;L++){let U=R[L];if(r.crossVectors(M,U),n.setFromPoints(r,t),s.setFromPoints(r,e),n.isSeparated(s))return!1}}return p&&(x||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),p.start.set(0,0,0),p.end.set(0,0,0)),!0}else{let S=g(this,v,f);if(S===1&&m.containsPoint(f.end))return p&&(p.start.copy(f.end),p.end.copy(f.end)),!0;if(S!==2)return!1;let E=g(m,_,h);if(E===1&&this.containsPoint(h.end))return p&&(p.start.copy(h.end),p.end.copy(h.end)),!0;if(E!==2)return!1;if(f.delta(o),h.delta(c),o.dot(c)<0){let B=h.start;h.start=h.end,h.end=B}let T=f.start.dot(o),R=f.end.dot(o),b=h.start.dot(o),M=h.end.dot(o),L=R<b,U=T<M;return T!==M&&b!==R&&L===U?!1:(p&&(u.subVectors(f.start,h.start),u.dot(o)>0?p.start.copy(f.start):p.start.copy(h.start),u.subVectors(f.end,h.end),u.dot(o)<0?p.end.copy(f.end):p.end.copy(h.end)),!0)}}}();De.prototype.distanceToPoint=function(){let i=new A;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();De.prototype.distanceToTriangle=function(){let i=new A,t=new A,e=["a","b","c"],n=new Le,s=new Le;return function(a,o=null,c=null){let u=o||c?n:null;if(this.intersectsTriangle(a,u))return(o||c)&&(o&&u.getCenter(o),c&&u.getCenter(c)),0;let l=1/0;for(let f=0;f<3;f++){let h,d=e[f],g=a[d];this.closestPointToPoint(g,i),h=g.distanceToSquared(i),h<l&&(l=h,o&&o.copy(i),c&&c.copy(g));let y=this[d];a.closestPointToPoint(y,i),h=y.distanceToSquared(i),h<l&&(l=h,o&&o.copy(y),c&&c.copy(i))}for(let f=0;f<3;f++){let h=e[f],d=e[(f+1)%3];n.set(this[h],this[d]);for(let g=0;g<3;g++){let y=e[g],m=e[(g+1)%3];s.set(a[y],a[m]),ao(n,s,i,t);let p=i.distanceToSquared(t);p<l&&(l=p,o&&o.copy(i),c&&c.copy(t))}}return Math.sqrt(l)}}();var ye=class{constructor(t,e,n){this.isOrientedBox=!0,this.min=new A,this.max=new A,this.matrix=new Bt,this.invMatrix=new Bt,this.points=new Array(8).fill().map(()=>new A),this.satAxes=new Array(3).fill().map(()=>new A),this.satBounds=new Array(3).fill().map(()=>new ln),this.alignedSatBounds=new Array(3).fill().map(()=>new ln),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}};ye.prototype.update=function(){return function(){let t=this.matrix,e=this.min,n=this.max,s=this.points;for(let u=0;u<=1;u++)for(let l=0;l<=1;l++)for(let f=0;f<=1;f++){let h=1*u|2*l|4*f,d=s[h];d.x=u?n.x:e.x,d.y=l?n.y:e.y,d.z=f?n.z:e.z,d.applyMatrix4(t)}let r=this.satBounds,a=this.satAxes,o=s[0];for(let u=0;u<3;u++){let l=a[u],f=r[u],h=1<<u,d=s[h];l.subVectors(o,d),f.setFromPoints(l,s)}let c=this.alignedSatBounds;c[0].setFromPointsField(s,"x"),c[1].setFromPointsField(s,"y"),c[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();ye.prototype.intersectsBox=function(){let i=new ln;return function(e){this.needsUpdate&&this.update();let n=e.min,s=e.max,r=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,o[0].isSeparated(i)||(i.min=n.y,i.max=s.y,o[1].isSeparated(i))||(i.min=n.z,i.max=s.z,o[2].isSeparated(i)))return!1;for(let c=0;c<3;c++){let u=a[c],l=r[c];if(i.setFromBox(u,e),l.isSeparated(i))return!1}return!0}}();ye.prototype.intersectsTriangle=function(){let i=new De,t=new Array(3),e=new ln,n=new ln,s=new A;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(i.copy(a),i.update(),a=i);let o=this.satBounds,c=this.satAxes;t[0]=a.a,t[1]=a.b,t[2]=a.c;for(let h=0;h<3;h++){let d=o[h],g=c[h];if(e.setFromPoints(g,t),d.isSeparated(e))return!1}let u=a.satBounds,l=a.satAxes,f=this.points;for(let h=0;h<3;h++){let d=u[h],g=l[h];if(e.setFromPoints(g,f),d.isSeparated(e))return!1}for(let h=0;h<3;h++){let d=c[h];for(let g=0;g<4;g++){let y=l[g];if(s.crossVectors(d,y),e.setFromPoints(s,t),n.setFromPoints(s,f),e.isSeparated(n))return!1}}return!0}}();ye.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();ye.prototype.distanceToPoint=function(){let i=new A;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();ye.prototype.distanceToBox=function(){let i=["x","y","z"],t=new Array(12).fill().map(()=>new Le),e=new Array(12).fill().map(()=>new Le),n=new A,s=new A;return function(a,o=0,c=null,u=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(c||u)&&(a.getCenter(s),this.closestPointToPoint(s,n),a.closestPointToPoint(n,s),c&&c.copy(n),u&&u.copy(s)),0;let l=o*o,f=a.min,h=a.max,d=this.points,g=1/0;for(let m=0;m<8;m++){let p=d[m];s.copy(p).clamp(f,h);let x=p.distanceToSquared(s);if(x<g&&(g=x,c&&c.copy(p),u&&u.copy(s),x<l))return Math.sqrt(x)}let y=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){let _=(m+1)%3,v=(m+2)%3,S=p<<_|x<<v,E=1<<m|p<<_|x<<v,T=d[S],R=d[E];t[y].set(T,R);let M=i[m],L=i[_],U=i[v],B=e[y],P=B.start,O=B.end;P[M]=f[M],P[L]=p?f[L]:h[L],P[U]=x?f[U]:h[L],O[M]=h[M],O[L]=p?f[L]:h[L],O[U]=x?f[U]:h[L],y++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){s.x=m?h.x:f.x,s.y=p?h.y:f.y,s.z=x?h.z:f.z,this.closestPointToPoint(s,n);let _=s.distanceToSquared(n);if(_<g&&(g=_,c&&c.copy(n),u&&u.copy(s),_<l))return Math.sqrt(_)}for(let m=0;m<12;m++){let p=t[m];for(let x=0;x<12;x++){let _=e[x];ao(p,_,n,s);let v=n.distanceToSquared(s);if(v<g&&(g=v,c&&c.copy(n),u&&u.copy(s),v<l))return Math.sqrt(v)}}return Math.sqrt(g)}}();var Di=class{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){let t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}};var Iu=class extends Di{constructor(){super(()=>new De)}},rn=new Iu;var Lu=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let t=[],e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}},Qt=new Lu;var Ni,rr,sr=[],Qa=new Di(()=>new de);function sp(i,t,e,n,s,r){Ni=Qa.getPrimitive(),rr=Qa.getPrimitive(),sr.push(Ni,rr),Qt.setBuffer(i._roots[t]);let a=Du(0,i.geometry,e,n,s,r);Qt.clearBuffer(),Qa.releasePrimitive(Ni),Qa.releasePrimitive(rr),sr.pop(),sr.pop();let o=sr.length;return o>0&&(rr=sr[o-1],Ni=sr[o-2]),a}function Du(i,t,e,n,s=null,r=0,a=0){let{float32Array:o,uint16Array:c,uint32Array:u}=Qt,l=i*2;if(_e(l,c)){let h=Te(i,u),d=Re(l,c);return se(i,o,Ni),n(h,d,!1,a,r+i,Ni)}else{let M=function(U){let{uint16Array:B,uint32Array:P}=Qt,O=U*2;for(;!_e(O,B);)U=ze(U),O=U*2;return Te(U,P)},L=function(U){let{uint16Array:B,uint32Array:P}=Qt,O=U*2;for(;!_e(O,B);)U=He(U,P),O=U*2;return Te(U,P)+Re(O,B)},h=ze(i),d=He(i,u),g=h,y=d,m,p,x,_;if(s&&(x=Ni,_=rr,se(g,o,x),se(y,o,_),m=s(x),p=s(_),p<m)){g=d,y=h;let U=m;m=p,p=U,x=_}x||(x=Ni,se(g,o,x));let v=_e(g*2,c),S=e(x,v,m,a+1,r+g),E;if(S===2){let U=M(g),P=L(g)-U;E=n(U,P,!0,a+1,r+g,x)}else E=S&&Du(g,t,e,n,s,r,a+1);if(E)return!0;_=rr,se(y,o,_);let T=_e(y*2,c),R=e(_,T,p,a+1,r+y),b;if(R===2){let U=M(y),P=L(y)-U;b=n(U,P,!0,a+1,r+y,_)}else b=R&&Du(y,t,e,n,s,r,a+1);return!!b}}var co=new A,Uu=new A;function rp(i,t,e={},n=0,s=1/0){let r=n*n,a=s*s,o=1/0,c=null;if(i.shapecast({boundsTraverseOrder:l=>(co.copy(t).clamp(l.min,l.max),co.distanceToSquared(t)),intersectsBounds:(l,f,h)=>h<o&&h<a,intersectsTriangle:(l,f)=>{l.closestPointToPoint(t,co);let h=t.distanceToSquared(co);return h<o&&(Uu.copy(co),o=h,c=f),h<r}}),o===1/0)return null;let u=Math.sqrt(o);return e.point?e.point.copy(Uu):e.point=Uu.clone(),e.distance=u,e.faceIndex=c,e}var or=new A,ar=new A,cr=new A,tc=new et,ec=new et,nc=new et,op=new A,ap=new A,cp=new A,ic=new A;function eS(i,t,e,n,s,r){let a;return r===Fe?a=i.intersectTriangle(n,e,t,!0,s):a=i.intersectTriangle(t,e,n,r!==cn,s),a===null?null:{distance:i.origin.distanceTo(s),point:s.clone()}}function nS(i,t,e,n,s,r,a,o,c){or.fromBufferAttribute(t,r),ar.fromBufferAttribute(t,a),cr.fromBufferAttribute(t,o);let u=eS(i,or,ar,cr,ic,c);if(u){n&&(tc.fromBufferAttribute(n,r),ec.fromBufferAttribute(n,a),nc.fromBufferAttribute(n,o),u.uv=le.getInterpolation(ic,or,ar,cr,tc,ec,nc,new et)),s&&(tc.fromBufferAttribute(s,r),ec.fromBufferAttribute(s,a),nc.fromBufferAttribute(s,o),u.uv1=le.getInterpolation(ic,or,ar,cr,tc,ec,nc,new et)),e&&(op.fromBufferAttribute(e,r),ap.fromBufferAttribute(e,a),cp.fromBufferAttribute(e,o),u.normal=le.getInterpolation(ic,or,ar,cr,op,ap,cp,new A),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let l={a:r,b:a,c:o,normal:new A,materialIndex:0};le.getNormal(or,ar,cr,l.normal),u.face=l,u.faceIndex=r}return u}function lr(i,t,e,n,s){let r=n*3,a=r+0,o=r+1,c=r+2,u=i.index;i.index&&(a=u.getX(a),o=u.getX(o),c=u.getX(c));let{position:l,normal:f,uv:h,uv1:d}=i.attributes,g=nS(e,l,f,h,d,a,o,c,t);return g?(g.faceIndex=n,s&&s.push(g),g):null}function oe(i,t,e,n){let s=i.a,r=i.b,a=i.c,o=t,c=t+1,u=t+2;e&&(o=e.getX(o),c=e.getX(c),u=e.getX(u)),s.x=n.getX(o),s.y=n.getY(o),s.z=n.getZ(o),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),a.x=n.getX(u),a.y=n.getY(u),a.z=n.getZ(u)}function lp(i,t,e,n,s,r){let{geometry:a,_indirectBuffer:o}=i;for(let c=n,u=n+s;c<u;c++)lr(a,t,e,c,r)}function up(i,t,e,n,s){let{geometry:r,_indirectBuffer:a}=i,o=1/0,c=null;for(let u=n,l=n+s;u<l;u++){let f;f=lr(r,t,e,u),f&&f.distance<o&&(c=f,o=f.distance)}return c}function hp(i,t,e,n,s,r,a){let{geometry:o}=e,{index:c}=o,u=o.attributes.position;for(let l=i,f=t+i;l<f;l++){let h;if(h=l,oe(a,h*3,c,u),a.needsUpdate=!0,n(a,h,s,r))return!0}return!1}function fp(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position,r,a,o,c,u=0,l=i._roots;for(let h=0,d=l.length;h<d;h++)r=l[h],a=new Uint32Array(r),o=new Uint16Array(r),c=new Float32Array(r),f(0,u),u+=r.byteLength;function f(h,d,g=!1){let y=h*2;if(o[y+15]===65535){let p=a[h+6],x=o[y+14],_=1/0,v=1/0,S=1/0,E=-1/0,T=-1/0,R=-1/0;for(let b=3*p,M=3*(p+x);b<M;b++){let L=n[b],U=s.getX(L),B=s.getY(L),P=s.getZ(L);U<_&&(_=U),U>E&&(E=U),B<v&&(v=B),B>T&&(T=B),P<S&&(S=P),P>R&&(R=P)}return c[h+0]!==_||c[h+1]!==v||c[h+2]!==S||c[h+3]!==E||c[h+4]!==T||c[h+5]!==R?(c[h+0]=_,c[h+1]=v,c[h+2]=S,c[h+3]=E,c[h+4]=T,c[h+5]=R,!0):!1}else{let p=h+8,x=a[h+6],_=p+d,v=x+d,S=g,E=!1,T=!1;t?S||(E=t.has(_),T=t.has(v),S=!E&&!T):(E=!0,T=!0);let R=S||E,b=S||T,M=!1;R&&(M=f(p,d,S));let L=!1;b&&(L=f(x,d,S));let U=M||L;if(U)for(let B=0;B<3;B++){let P=p+B,O=x+B,H=c[P],W=c[P+3],G=c[O],j=c[O+3];c[h+B]=H<G?H:G,c[h+B+3]=W>j?W:j}return U}}}var dp=new de;function Tn(i,t,e,n){return se(i,t,dp),e.intersectBox(dp,n)}function pp(i,t,e,n,s,r){let{geometry:a,_indirectBuffer:o}=i;for(let c=n,u=n+s;c<u;c++){let l=o?o[c]:c;lr(a,t,e,l,r)}}function mp(i,t,e,n,s){let{geometry:r,_indirectBuffer:a}=i,o=1/0,c=null;for(let u=n,l=n+s;u<l;u++){let f;f=lr(r,t,e,a?a[u]:u),f&&f.distance<o&&(c=f,o=f.distance)}return c}function gp(i,t,e,n,s,r,a){let{geometry:o}=e,{index:c}=o,u=o.attributes.position;for(let l=i,f=t+i;l<f;l++){let h;if(h=e.resolveTriangleIndex(l),oe(a,h*3,c,u),a.needsUpdate=!0,n(a,h,s,r))return!0}return!1}var _p=new A;function xp(i,t,e,n,s){Qt.setBuffer(i._roots[t]),Bu(0,i,e,n,s),Qt.clearBuffer()}function Bu(i,t,e,n,s){let{float32Array:r,uint16Array:a,uint32Array:o}=Qt,c=i*2;if(_e(c,a)){let l=Te(i,o),f=Re(c,a);lp(t,e,n,l,f,s)}else{let l=ze(i);Tn(l,r,n,_p)&&Bu(l,t,e,n,s);let f=He(i,o);Tn(f,r,n,_p)&&Bu(f,t,e,n,s)}}var yp=new A,iS=["x","y","z"];function vp(i,t,e,n){Qt.setBuffer(i._roots[t]);let s=Ou(0,i,e,n);return Qt.clearBuffer(),s}function Ou(i,t,e,n){let{float32Array:s,uint16Array:r,uint32Array:a}=Qt,o=i*2;if(_e(o,r)){let u=Te(i,a),l=Re(o,r);return up(t,e,n,u,l)}else{let u=ja(i,a),l=iS[u],h=n.direction[l]>=0,d,g;h?(d=ze(i),g=He(i,a)):(d=He(i,a),g=ze(i));let m=Tn(d,s,n,yp)?Ou(d,t,e,n):null;if(m){let _=m.point[l];if(h?_<=s[g+u]:_>=s[g+u+3])return m}let x=Tn(g,s,n,yp)?Ou(g,t,e,n):null;return m&&x?m.distance<=x.distance?m:x:m||x||null}}var sc=new de,ur=new De,hr=new De,lo=new Bt,bp=new ye,rc=new ye;function Sp(i,t,e,n){Qt.setBuffer(i._roots[t]);let s=Fu(0,i,e,n);return Qt.clearBuffer(),s}function Fu(i,t,e,n,s=null){let{float32Array:r,uint16Array:a,uint32Array:o}=Qt,c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),bp.set(e.boundingBox.min,e.boundingBox.max,n),s=bp),_e(c,a)){let l=t.geometry,f=l.index,h=l.attributes.position,d=e.index,g=e.attributes.position,y=Te(i,o),m=Re(c,a);if(lo.copy(n).invert(),e.boundsTree)return se(i,r,rc),rc.matrix.copy(lo),rc.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>rc.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let _=y*3,v=(m+y)*3;_<v;_+=3)if(oe(hr,_,f,h),hr.needsUpdate=!0,x.intersectsTriangle(hr))return!0;return!1}});for(let p=y*3,x=(m+y)*3;p<x;p+=3){oe(ur,p,f,h),ur.a.applyMatrix4(lo),ur.b.applyMatrix4(lo),ur.c.applyMatrix4(lo),ur.needsUpdate=!0;for(let _=0,v=d.count;_<v;_+=3)if(oe(hr,_,d,g),hr.needsUpdate=!0,ur.intersectsTriangle(hr))return!0}}else{let l=i+8,f=o[i+6];return se(l,r,sc),!!(s.intersectsBox(sc)&&Fu(l,t,e,n,s)||(se(f,r,sc),s.intersectsBox(sc)&&Fu(f,t,e,n,s)))}}var oc=new Bt,zu=new ye,uo=new ye,sS=new A,rS=new A,oS=new A,aS=new A;function Mp(i,t,e,n={},s={},r=0,a=1/0){t.boundingBox||t.computeBoundingBox(),zu.set(t.boundingBox.min,t.boundingBox.max,e),zu.needsUpdate=!0;let o=i.geometry,c=o.attributes.position,u=o.index,l=t.attributes.position,f=t.index,h=rn.getPrimitive(),d=rn.getPrimitive(),g=sS,y=rS,m=null,p=null;s&&(m=oS,p=aS);let x=1/0,_=null,v=null;return oc.copy(e).invert(),uo.matrix.copy(oc),i.shapecast({boundsTraverseOrder:S=>zu.distanceToBox(S),intersectsBounds:(S,E,T)=>T<x&&T<a?(E&&(uo.min.copy(S.min),uo.max.copy(S.max),uo.needsUpdate=!0),!0):!1,intersectsRange:(S,E)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:R=>uo.distanceToBox(R),intersectsBounds:(R,b,M)=>M<x&&M<a,intersectsRange:(R,b)=>{for(let M=R,L=R+b;M<L;M++){oe(d,3*M,f,l),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let U=S,B=S+E;U<B;U++){oe(h,3*U,u,c),h.needsUpdate=!0;let P=h.distanceToTriangle(d,g,m);if(P<x&&(y.copy(g),p&&p.copy(m),x=P,_=U,v=M),P<r)return!0}}}});{let T=Xn(t);for(let R=0,b=T;R<b;R++){oe(d,3*R,f,l),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let M=S,L=S+E;M<L;M++){oe(h,3*M,u,c),h.needsUpdate=!0;let U=h.distanceToTriangle(d,g,m);if(U<x&&(y.copy(g),p&&p.copy(m),x=U,_=M,v=R),U<r)return!0}}}}}),rn.releasePrimitive(h),rn.releasePrimitive(d),x===1/0?null:(n.point?n.point.copy(y):n.point=y.clone(),n.distance=x,n.faceIndex=_,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(oc),y.applyMatrix4(oc),s.distance=y.sub(s.point).length(),s.faceIndex=v),n)}function Tp(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position,r,a,o,c,u=0,l=i._roots;for(let h=0,d=l.length;h<d;h++)r=l[h],a=new Uint32Array(r),o=new Uint16Array(r),c=new Float32Array(r),f(0,u),u+=r.byteLength;function f(h,d,g=!1){let y=h*2;if(o[y+15]===65535){let p=a[h+6],x=o[y+14],_=1/0,v=1/0,S=1/0,E=-1/0,T=-1/0,R=-1/0;for(let b=p,M=p+x;b<M;b++){let L=3*i.resolveTriangleIndex(b);for(let U=0;U<3;U++){let B=L+U;B=n?n[B]:B;let P=s.getX(B),O=s.getY(B),H=s.getZ(B);P<_&&(_=P),P>E&&(E=P),O<v&&(v=O),O>T&&(T=O),H<S&&(S=H),H>R&&(R=H)}}return c[h+0]!==_||c[h+1]!==v||c[h+2]!==S||c[h+3]!==E||c[h+4]!==T||c[h+5]!==R?(c[h+0]=_,c[h+1]=v,c[h+2]=S,c[h+3]=E,c[h+4]=T,c[h+5]=R,!0):!1}else{let p=h+8,x=a[h+6],_=p+d,v=x+d,S=g,E=!1,T=!1;t?S||(E=t.has(_),T=t.has(v),S=!E&&!T):(E=!0,T=!0);let R=S||E,b=S||T,M=!1;R&&(M=f(p,d,S));let L=!1;b&&(L=f(x,d,S));let U=M||L;if(U)for(let B=0;B<3;B++){let P=p+B,O=x+B,H=c[P],W=c[P+3],G=c[O],j=c[O+3];c[h+B]=H<G?H:G,c[h+B+3]=W>j?W:j}return U}}}var Ep=new A;function wp(i,t,e,n,s){Qt.setBuffer(i._roots[t]),Hu(0,i,e,n,s),Qt.clearBuffer()}function Hu(i,t,e,n,s){let{float32Array:r,uint16Array:a,uint32Array:o}=Qt,c=i*2;if(_e(c,a)){let l=Te(i,o),f=Re(c,a);pp(t,e,n,l,f,s)}else{let l=ze(i);Tn(l,r,n,Ep)&&Hu(l,t,e,n,s);let f=He(i,o);Tn(f,r,n,Ep)&&Hu(f,t,e,n,s)}}var Ap=new A,cS=["x","y","z"];function Rp(i,t,e,n){Qt.setBuffer(i._roots[t]);let s=ku(0,i,e,n);return Qt.clearBuffer(),s}function ku(i,t,e,n){let{float32Array:s,uint16Array:r,uint32Array:a}=Qt,o=i*2;if(_e(o,r)){let u=Te(i,a),l=Re(o,r);return mp(t,e,n,u,l)}else{let u=ja(i,a),l=cS[u],h=n.direction[l]>=0,d,g;h?(d=ze(i),g=He(i,a)):(d=He(i,a),g=ze(i));let m=Tn(d,s,n,Ap)?ku(d,t,e,n):null;if(m){let _=m.point[l];if(h?_<=s[g+u]:_>=s[g+u+3])return m}let x=Tn(g,s,n,Ap)?ku(g,t,e,n):null;return m&&x?m.distance<=x.distance?m:x:m||x||null}}var ac=new de,fr=new De,dr=new De,ho=new Bt,Cp=new ye,cc=new ye;function Pp(i,t,e,n){Qt.setBuffer(i._roots[t]);let s=Vu(0,i,e,n);return Qt.clearBuffer(),s}function Vu(i,t,e,n,s=null){let{float32Array:r,uint16Array:a,uint32Array:o}=Qt,c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),Cp.set(e.boundingBox.min,e.boundingBox.max,n),s=Cp),_e(c,a)){let l=t.geometry,f=l.index,h=l.attributes.position,d=e.index,g=e.attributes.position,y=Te(i,o),m=Re(c,a);if(ho.copy(n).invert(),e.boundsTree)return se(i,r,cc),cc.matrix.copy(ho),cc.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>cc.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let _=y,v=m+y;_<v;_++)if(oe(dr,3*t.resolveTriangleIndex(_),f,h),dr.needsUpdate=!0,x.intersectsTriangle(dr))return!0;return!1}});for(let p=y,x=m+y;p<x;p++){let _=t.resolveTriangleIndex(p);oe(fr,3*_,f,h),fr.a.applyMatrix4(ho),fr.b.applyMatrix4(ho),fr.c.applyMatrix4(ho),fr.needsUpdate=!0;for(let v=0,S=d.count;v<S;v+=3)if(oe(dr,v,d,g),dr.needsUpdate=!0,fr.intersectsTriangle(dr))return!0}}else{let l=i+8,f=o[i+6];return se(l,r,ac),!!(s.intersectsBox(ac)&&Vu(l,t,e,n,s)||(se(f,r,ac),s.intersectsBox(ac)&&Vu(f,t,e,n,s)))}}var lc=new Bt,Gu=new ye,fo=new ye,lS=new A,uS=new A,hS=new A,fS=new A;function Ip(i,t,e,n={},s={},r=0,a=1/0){t.boundingBox||t.computeBoundingBox(),Gu.set(t.boundingBox.min,t.boundingBox.max,e),Gu.needsUpdate=!0;let o=i.geometry,c=o.attributes.position,u=o.index,l=t.attributes.position,f=t.index,h=rn.getPrimitive(),d=rn.getPrimitive(),g=lS,y=uS,m=null,p=null;s&&(m=hS,p=fS);let x=1/0,_=null,v=null;return lc.copy(e).invert(),fo.matrix.copy(lc),i.shapecast({boundsTraverseOrder:S=>Gu.distanceToBox(S),intersectsBounds:(S,E,T)=>T<x&&T<a?(E&&(fo.min.copy(S.min),fo.max.copy(S.max),fo.needsUpdate=!0),!0):!1,intersectsRange:(S,E)=>{if(t.boundsTree){let T=t.boundsTree;return T.shapecast({boundsTraverseOrder:R=>fo.distanceToBox(R),intersectsBounds:(R,b,M)=>M<x&&M<a,intersectsRange:(R,b)=>{for(let M=R,L=R+b;M<L;M++){let U=T.resolveTriangleIndex(M);oe(d,3*U,f,l),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let B=S,P=S+E;B<P;B++){let O=i.resolveTriangleIndex(B);oe(h,3*O,u,c),h.needsUpdate=!0;let H=h.distanceToTriangle(d,g,m);if(H<x&&(y.copy(g),p&&p.copy(m),x=H,_=B,v=M),H<r)return!0}}}})}else{let T=Xn(t);for(let R=0,b=T;R<b;R++){oe(d,3*R,f,l),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let M=S,L=S+E;M<L;M++){let U=i.resolveTriangleIndex(M);oe(h,3*U,u,c),h.needsUpdate=!0;let B=h.distanceToTriangle(d,g,m);if(B<x&&(y.copy(g),p&&p.copy(m),x=B,_=M,v=R),B<r)return!0}}}}}),rn.releasePrimitive(h),rn.releasePrimitive(d),x===1/0?null:(n.point?n.point.copy(y):n.point=y.clone(),n.distance=x,n.faceIndex=_,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(lc),y.applyMatrix4(lc),s.distance=y.sub(s.point).length(),s.faceIndex=v),n)}function Lp(){return typeof SharedArrayBuffer<"u"}var po=new Qt.constructor,uc=new Qt.constructor,Ui=new Di(()=>new de),pr=new de,mr=new de,Wu=new de,Xu=new de,qu=!1;function Dp(i,t,e,n){if(qu)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");qu=!0;let s=i._roots,r=t._roots,a,o=0,c=0,u=new Bt().copy(e).invert();for(let l=0,f=s.length;l<f;l++){po.setBuffer(s[l]),c=0;let h=Ui.getPrimitive();se(0,po.float32Array,h),h.applyMatrix4(u);for(let d=0,g=r.length;d<g&&(uc.setBuffer(r[l]),a=Bn(0,0,e,u,n,o,c,0,0,h),uc.clearBuffer(),c+=r[d].length,!a);d++);if(Ui.releasePrimitive(h),po.clearBuffer(),o+=s[l].length,a)break}return qu=!1,a}function Bn(i,t,e,n,s,r=0,a=0,o=0,c=0,u=null,l=!1){let f,h;l?(f=uc,h=po):(f=po,h=uc);let d=f.float32Array,g=f.uint32Array,y=f.uint16Array,m=h.float32Array,p=h.uint32Array,x=h.uint16Array,_=i*2,v=t*2,S=_e(_,y),E=_e(v,x),T=!1;if(E&&S)l?T=s(Te(t,p),Re(t*2,x),Te(i,g),Re(i*2,y),c,a+t,o,r+i):T=s(Te(i,g),Re(i*2,y),Te(t,p),Re(t*2,x),o,r+i,c,a+t);else if(E){let R=Ui.getPrimitive();se(t,m,R),R.applyMatrix4(e);let b=ze(i),M=He(i,g);se(b,d,pr),se(M,d,mr);let L=R.intersectsBox(pr),U=R.intersectsBox(mr);T=L&&Bn(t,b,n,e,s,a,r,c,o+1,R,!l)||U&&Bn(t,M,n,e,s,a,r,c,o+1,R,!l),Ui.releasePrimitive(R)}else{let R=ze(t),b=He(t,p);se(R,m,Wu),se(b,m,Xu);let M=u.intersectsBox(Wu),L=u.intersectsBox(Xu);if(M&&L)T=Bn(i,R,e,n,s,r,a,o,c+1,u,l)||Bn(i,b,e,n,s,r,a,o,c+1,u,l);else if(M)if(S)T=Bn(i,R,e,n,s,r,a,o,c+1,u,l);else{let U=Ui.getPrimitive();U.copy(Wu).applyMatrix4(e);let B=ze(i),P=He(i,g);se(B,d,pr),se(P,d,mr);let O=U.intersectsBox(pr),H=U.intersectsBox(mr);T=O&&Bn(R,B,n,e,s,a,r,c,o+1,U,!l)||H&&Bn(R,P,n,e,s,a,r,c,o+1,U,!l),Ui.releasePrimitive(U)}else if(L)if(S)T=Bn(i,b,e,n,s,r,a,o,c+1,u,l);else{let U=Ui.getPrimitive();U.copy(Xu).applyMatrix4(e);let B=ze(i),P=He(i,g);se(B,d,pr),se(P,d,mr);let O=U.intersectsBox(pr),H=U.intersectsBox(mr);T=O&&Bn(b,B,n,e,s,a,r,c,o+1,U,!l)||H&&Bn(b,P,n,e,s,a,r,c,o+1,U,!l),Ui.releasePrimitive(U)}}return T}var hc=new ye,Np=new de,dS={strategy:0,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0},mo=class i{static serialize(t,e={}){e={cloneBuffers:!0,...e};let n=t.geometry,s=t._roots,r=t._indirectBuffer,a=n.getIndex(),o;return e.cloneBuffers?o={roots:s.map(c=>c.slice()),index:a.array.slice(),indirectBuffer:r?r.slice():null}:o={roots:s,index:a.array,indirectBuffer:r},o}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};let{index:s,roots:r,indirectBuffer:a}=t,o=new i(e,{...n,[qa]:!0});if(o._roots=r,o._indirectBuffer=a||null,n.setIndex){let c=e.getIndex();if(c===null){let u=new fe(t.index,1,!1);e.setIndex(u)}else c.array!==s&&(c.array.set(s),c.needsUpdate=!0)}return o}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...dS,[qa]:!1},e),e.useSharedArrayBuffer&&!Lp())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[qa]||(np(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new de)));let{_indirectBuffer:n}=this;this.resolveTriangleIndex=e.indirect?s=>n[s]:s=>s}refit(t=null){return(this.indirect?Tp:fp)(this,t)}traverse(t,e=0){let n=this._roots[e],s=new Uint32Array(n),r=new Uint16Array(n);a(0);function a(o,c=0){let u=o*2,l=r[u+15]===65535;if(l){let f=s[o+6],h=r[u+14];t(c,l,new Float32Array(n,o*4,6),f,h)}else{let f=o+32/4,h=s[o+6],d=s[o+7];t(c,l,new Float32Array(n,o*4,6),d)||(a(f,c+1),a(h,c+1))}}}raycast(t,e=Dn){let n=this._roots,s=this.geometry,r=[],a=e.isMaterial,o=Array.isArray(e),c=s.groups,u=a?e.side:e,l=this.indirect?wp:xp;for(let f=0,h=n.length;f<h;f++){let d=o?e[c[f].materialIndex].side:u,g=r.length;if(l(this,f,d,t,r),o){let y=c[f].materialIndex;for(let m=g,p=r.length;m<p;m++)r[m].face.materialIndex=y}}return r}raycastFirst(t,e=Dn){let n=this._roots,s=this.geometry,r=e.isMaterial,a=Array.isArray(e),o=null,c=s.groups,u=r?e.side:e,l=this.indirect?Rp:vp;for(let f=0,h=n.length;f<h;f++){let d=a?e[c[f].materialIndex].side:u,g=l(this,f,d,t);g!=null&&(o==null||g.distance<o.distance)&&(o=g,a&&(g.face.materialIndex=c[f].materialIndex))}return o}intersectsGeometry(t,e){let n=!1,s=this._roots,r=this.indirect?Pp:Sp;for(let a=0,o=s.length;a<o&&(n=r(this,a,t,e),!n);a++);return n}shapecast(t){let e=rn.getPrimitive(),n=this.indirect?gp:hp,{boundsTraverseOrder:s,intersectsBounds:r,intersectsRange:a,intersectsTriangle:o}=t;if(a&&o){let f=a;a=(h,d,g,y,m)=>f(h,d,g,y,m)?!0:n(h,d,this,o,g,y,e)}else a||(o?a=(f,h,d,g)=>n(f,h,this,o,d,g,e):a=(f,h,d)=>d);let c=!1,u=0,l=this._roots;for(let f=0,h=l.length;f<h;f++){let d=l[f];if(c=sp(this,f,r,a,s,u),c)break;u+=d.byteLength}return rn.releasePrimitive(e),c}bvhcast(t,e,n){let{intersectsRanges:s,intersectsTriangles:r}=n,a=rn.getPrimitive(),o=this.geometry.index,c=this.geometry.attributes.position,u=this.indirect?g=>{let y=this.resolveTriangleIndex(g);oe(a,y*3,o,c)}:g=>{oe(a,g*3,o,c)},l=rn.getPrimitive(),f=t.geometry.index,h=t.geometry.attributes.position,d=t.indirect?g=>{let y=t.resolveTriangleIndex(g);oe(l,y*3,f,h)}:g=>{oe(l,g*3,f,h)};if(r){let g=(y,m,p,x,_,v,S,E)=>{for(let T=p,R=p+x;T<R;T++){d(T),l.a.applyMatrix4(e),l.b.applyMatrix4(e),l.c.applyMatrix4(e),l.needsUpdate=!0;for(let b=y,M=y+m;b<M;b++)if(u(b),a.needsUpdate=!0,r(a,l,b,T,_,v,S,E))return!0}return!1};if(s){let y=s;s=function(m,p,x,_,v,S,E,T){return y(m,p,x,_,v,S,E,T)?!0:g(m,p,x,_,v,S,E,T)}}else s=g}return Dp(this,t,e,s)}intersectsBox(t,e){return hc.set(t.min,t.max,e),hc.needsUpdate=!0,this.shapecast({intersectsBounds:n=>hc.intersectsBox(n),intersectsTriangle:n=>hc.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},s={},r=0,a=1/0){return(this.indirect?Ip:Mp)(this,t,e,n,s,r,a)}closestPointToPoint(t,e={},n=0,s=1/0){return rp(this,t,e,n,s)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{se(0,new Float32Array(n),Np),t.union(Np)}),t}};var Up=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`;var Bp=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`;var CE=`
	${Up}
	${Bp}
`;var Op=Math.pow(10,-Math.log10(1e-6)),mS=5e-7*Op;function On(i){return~~(i*Op+mS)}function Fp(i){return`${On(i.x)},${On(i.y)}`}function Yu(i){return`${On(i.x)},${On(i.y)},${On(i.z)}`}function zp(i){return`${On(i.x)},${On(i.y)},${On(i.z)},${On(i.w)}`}function Hp(i,t,e){e.direction.subVectors(t,i).normalize();let n=i.dot(e.direction);return e.origin.copy(i).addScaledVector(e.direction,-n),e}function fc(){return typeof SharedArrayBuffer<"u"}function kp(i){if(i.buffer instanceof SharedArrayBuffer)return i;let t=i.constructor,e=i.buffer,n=new SharedArrayBuffer(e.byteLength),s=new Uint8Array(e);return new Uint8Array(n).set(s,0),new t(n)}function gS(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function Vp(i,t){if(!i.index){let e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=gS(e,n);i.setIndex(new fe(s,1));for(let r=0;r<e;r++)s[r]=r}}function _S(i){return i.index?i.index.count:i.attributes.position.count}function gr(i){return _S(i)/3}var xS=1e-8,yS=new A;function Wp(i){return~~(i/3)}function Xp(i){return i%3}function Gp(i,t){return i.start-t.start}function Zu(i,t){return yS.subVectors(t,i.origin).dot(i.direction)}function qp(i,t,e,n=xS){i.sort(Gp),t.sort(Gp);for(let o=0;o<i.length;o++){let c=i[o];for(let u=0;u<t.length;u++){let l=t[u];if(!(l.start>c.end)){if(c.end<l.start||l.end<c.start)continue;if(c.start<=l.start&&c.end>=l.end)r(l.end,c.end)||i.splice(o+1,0,{start:l.end,end:c.end,index:c.index}),c.end=l.start,l.start=0,l.end=0;else if(c.start>=l.start&&c.end<=l.end)r(c.end,l.end)||t.splice(u+1,0,{start:c.end,end:l.end,index:l.index}),l.end=c.start,c.start=0,c.end=0;else if(c.start<=l.start&&c.end<=l.end){let f=c.end;c.end=l.start,l.start=f}else if(c.start>=l.start&&c.end>=l.end){let f=l.end;l.end=c.start,c.start=f}else throw new Error}if(e.has(c.index)||e.set(c.index,[]),e.has(l.index)||e.set(l.index,[]),e.get(c.index).push(l.index),e.get(l.index).push(c.index),a(l)&&(t.splice(u,1),u--),a(c)){i.splice(o,1),o--;break}}}s(i),s(t);function s(o){for(let c=0;c<o.length;c++)a(o[c])&&(o.splice(c,1),c--)}function r(o,c){return Math.abs(c-o)<n}function a(o){return Math.abs(o.end-o.start)<n}}var dc=class{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){let e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let s=1/0,r=null;for(let c=0,u=e.length;c<u;c++){let l=e[c];if(a(l,t)&&a(l,n))continue;let f=o(l,t),h=o(l,n),d=Math.min(f,h);d<s&&(s=d,r=l)}return r;function a(c,u){let l=c.origin.distanceTo(u.origin)>1e-5;return c.direction.angleTo(u.direction)>1e-4||l}function o(c,u){let l=c.origin.distanceTo(u.origin),f=c.direction.angleTo(u.direction);return l/1e-5+f/1e-4}}};var ju=new A,$u=new A,pc=new ri;function Yp(i,t,e){let n=i.attributes,s=i.index,r=n.position,a=new Map,o=new Map,c=Array.from(t),u=new dc;for(let l=0,f=c.length;l<f;l++){let h=c[l],d=Wp(h),g=Xp(h),y=3*d+g,m=3*d+(g+1)%3;s&&(y=s.getX(y),m=s.getX(m)),ju.fromBufferAttribute(r,y),$u.fromBufferAttribute(r,m),Hp(ju,$u,pc);let p,x=u.findClosestRay(pc);x===null&&(x=pc.clone(),u.addRay(x)),o.has(x)||o.set(x,{forward:[],reverse:[],ray:x}),p=o.get(x);let _=Zu(x,ju),v=Zu(x,$u);_>v&&([_,v]=[v,_]),pc.direction.dot(x.direction)<0?p.reverse.push({start:_,end:v,index:h}):p.forward.push({start:_,end:v,index:h})}return o.forEach(({forward:l,reverse:f},h)=>{qp(l,f,a,e),l.length===0&&f.length===0&&o.delete(h)}),{disjointConnectivityMap:a,fragmentMap:o}}var vS=new et,Ju=new A,bS=new Kt,Ku=["","",""],mc=class{constructor(t=null){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8,t&&this.updateFrom(t)}getSiblingTriangleIndex(t,e){let n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){let n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){let n=t*3+e,s=this.disjointConnections.get(n);return s?s.map(r=>~~(r/3)):[]}getDisjointSiblingEdgeIndices(t,e){let n=t*3+e,s=this.disjointConnections.get(n);return s?s.map(r=>r%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){let{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:s,degenerateEpsilon:r}=this,a=e?_:x,o=new Map,{attributes:c}=t,u=e?Object.keys(c):null,l=t.index,f=c.position,h=gr(t),d=h,g=0;n&&(g=t.drawRange.start,t.drawRange.count!==1/0&&(h=~~(t.drawRange.count/3)));let y=this.data;(!y||y.length<3*d)&&(y=new Int32Array(3*d)),y.fill(-1);let m=0,p=new Set;for(let v=g,S=h*3+g;v<S;v+=3){let E=v;for(let T=0;T<3;T++){let R=E+T;l&&(R=l.getX(R)),Ku[T]=a(R)}for(let T=0;T<3;T++){let R=(T+1)%3,b=Ku[T],M=Ku[R],L=`${M}_${b}`;if(o.has(L)){let U=E+T,B=o.get(L);y[U]=B,y[B]=U,o.delete(L),m+=2,p.delete(B)}else{let U=`${b}_${M}`,B=E+T;o.set(U,B),p.add(B)}}}if(s){let{fragmentMap:v,disjointConnectivityMap:S}=Yp(t,p,r);p.clear(),v.forEach(({forward:E,reverse:T})=>{E.forEach(({index:R})=>p.add(R)),T.forEach(({index:R})=>p.add(R))}),this.unmatchedDisjointEdges=v,this.disjointConnections=S,m=h*3-p.size}this.matchedEdges=m,this.unmatchedEdges=p.size,this.data=y;function x(v){return Ju.fromBufferAttribute(f,v),Yu(Ju)}function _(v){let S="";for(let E=0,T=u.length;E<T;E++){let R=c[u[E]],b;switch(R.itemSize){case 1:b=On(R.getX(v));break;case 2:b=Fp(vS.fromBufferAttribute(R,v));break;case 3:b=Yu(Ju.fromBufferAttribute(R,v));break;case 4:b=zp(bS.fromBufferAttribute(R,v));break}S!==""&&(S+="|"),S+=b}return S}}};var hi=class extends ie{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new Bt,this._previousMatrix.elements.fill(0)}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){let{matrix:t,_previousMatrix:e}=this,n=t.elements,s=e.elements;for(let r=0;r<16;r++)if(n[r]!==s[r])return!0;return!1}prepareGeometry(){let t=this.geometry,e=t.attributes,n=fc();if(n)for(let s in e){let r=e[s];if(r.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");r.array=kp(r.array)}if(t.boundsTree||(Vp(t,{useSharedArrayBuffer:n}),t.boundsTree=new mo(t,{maxLeafTris:3,indirect:!0,useSharedArrayBuffer:n})),t.halfEdges||(t.halfEdges=new mc(t)),!t.groupIndices){let s=gr(t),r=new Uint16Array(s),a=t.groups;for(let o=0,c=a.length;o<c;o++){let{start:u,count:l}=a[o];for(let f=u/3,h=(u+l)/3;f<h;f++)r[f]=o}t.groupIndices=r}}disposeCacheData(){let{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}};var SS=1e-14,Qu=new A,Zp=new A,jp=new A;function Fn(i,t=SS){Qu.subVectors(i.b,i.a),Zp.subVectors(i.c,i.a),jp.subVectors(i.b,i.c);let e=Qu.angleTo(Zp),n=Qu.angleTo(jp),s=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(s)<t||i.a.distanceToSquared(i.b)<t||i.a.distanceToSquared(i.c)<t||i.b.distanceToSquared(i.c)<t}var th=1e-10,go=1e-10,MS=1e-10,fi=new Le,Ee=new Le,di=new A,eh=new A,$p=new A,gc=new We,nh=new De,ih=class{constructor(){this._pool=[],this._index=0}getTriangle(){return this._index>=this._pool.length&&this._pool.push(new le),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}},_c=class{constructor(){this.trianglePool=new ih,this.triangles=[],this.normal=new A,this.coplanarTriangleUsed=!1}initialize(t){this.reset();let{triangles:e,trianglePool:n,normal:s}=this;if(Array.isArray(t))for(let r=0,a=t.length;r<a;r++){let o=t[r];if(r===0)o.getNormal(s);else if(Math.abs(1-o.getNormal(di).dot(s))>th)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");let c=n.getTriangle();c.copy(o),e.push(c)}else{t.getNormal(s);let r=n.getTriangle();r.copy(t),e.push(r)}}splitByTriangle(t){let{normal:e,triangles:n}=this;if(t.getNormal(eh).normalize(),Math.abs(1-Math.abs(eh.dot(e)))<MS){this.coplanarTriangleUsed=!0;for(let r=0,a=n.length;r<a;r++){let o=n[r];o.coplanarCount=0}let s=[t.a,t.b,t.c];for(let r=0;r<3;r++){let a=(r+1)%3,o=s[r],c=s[a];di.subVectors(c,o).normalize(),$p.crossVectors(eh,di),gc.setFromNormalAndCoplanarPoint($p,o),this.splitByPlane(gc,t)}}else t.getPlane(gc),this.splitByPlane(gc,t)}splitByPlane(t,e){let{triangles:n,trianglePool:s}=this;nh.copy(e),nh.needsUpdate=!0;for(let r=0,a=n.length;r<a;r++){let o=n[r];if(!nh.intersectsTriangle(o,fi,!0))continue;let{a:c,b:u,c:l}=o,f=0,h=-1,d=!1,g=[],y=[],m=[c,u,l];for(let p=0;p<3;p++){let x=(p+1)%3;fi.start.copy(m[p]),fi.end.copy(m[x]);let _=t.distanceToPoint(fi.start),v=t.distanceToPoint(fi.end);if(Math.abs(_)<go&&Math.abs(v)<go){d=!0;break}if(_>0?g.push(p):y.push(p),Math.abs(_)<go)continue;let S=!!t.intersectLine(fi,di);!S&&Math.abs(v)<go&&(di.copy(fi.end),S=!0),S&&!(di.distanceTo(fi.start)<th)&&(di.distanceTo(fi.end)<th&&(h=p),f===0?Ee.start.copy(di):Ee.end.copy(di),f++)}if(!d&&f===2&&Ee.distance()>go)if(h!==-1){h=(h+1)%3;let p=0;p===h&&(p=(p+1)%3);let x=p+1;x===h&&(x=(x+1)%3);let _=s.getTriangle();_.a.copy(m[x]),_.b.copy(Ee.end),_.c.copy(Ee.start),Fn(_)||n.push(_),o.a.copy(m[p]),o.b.copy(Ee.start),o.c.copy(Ee.end),Fn(o)&&(n.splice(r,1),r--,a--)}else{let p=g.length>=2?y[0]:g[0];if(p===0){let E=Ee.start;Ee.start=Ee.end,Ee.end=E}let x=(p+1)%3,_=(p+2)%3,v=s.getTriangle(),S=s.getTriangle();m[x].distanceToSquared(Ee.start)<m[_].distanceToSquared(Ee.end)?(v.a.copy(m[x]),v.b.copy(Ee.start),v.c.copy(Ee.end),S.a.copy(m[x]),S.b.copy(m[_]),S.c.copy(Ee.start)):(v.a.copy(m[_]),v.b.copy(Ee.start),v.c.copy(Ee.end),S.a.copy(m[x]),S.b.copy(m[_]),S.c.copy(Ee.end)),o.a.copy(m[p]),o.b.copy(Ee.end),o.c.copy(Ee.start),Fn(v)||n.push(v),Fn(S)||n.push(S),Fn(o)&&(n.splice(r,1),r--,a--)}else f===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear(),this.coplanarTriangleUsed=!1}};function TS(i){return i=~~i,i+4-i%4}var _o=class{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");let e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;let e=this.type,n=fc()?SharedArrayBuffer:ArrayBuffer,s=new e(new n(TS(t*e.BYTES_PER_ELEMENT)));this.array&&s.set(this.array,0),this.array=s}expand(){let{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let s=0,r=t.length;s<r;s++)e[n+s]=t[s];this.length+=t.length}clear(){this.length=0}};var xc=class{constructor(){this.groupAttributes=[{}],this.groupCount=0}getType(t){return this.groupAttributes[0][t].type}getItemSize(t){return this.groupAttributes[0][t].itemSize}getNormalized(t){return this.groupAttributes[0][t].normalized}getCount(t){if(this.groupCount<=t)return 0;let e=this.getGroupAttrArray("position",t);return e.length/e.itemSize}getTotalLength(t){let{groupCount:e,groupAttributes:n}=this,s=0;for(let r=0;r<e;r++){let a=n[r];s+=a[t].length}return s}getGroupAttrSet(t=0){let{groupAttributes:e}=this;if(e[t])return this.groupCount=Math.max(this.groupCount,t+1),e[t];let n=e[0];for(this.groupCount=Math.max(this.groupCount,t+1);t>=e.length;){let s={};e.push(s);for(let r in n){let a=n[r],o=new _o(a.type);o.itemSize=a.itemSize,o.normalized=a.normalized,s[r]=o}}return e[t]}getGroupAttrArray(t,e=0){let{groupAttributes:n}=this;if(!n[0][t])throw new Error(`TypedAttributeData: Attribute with "${t}" has not been initialized`);return this.getGroupAttrSet(e)[t]}initializeArray(t,e,n,s){let{groupAttributes:r}=this,o=r[0][t];if(o){if(o.type!==e)for(let c=0,u=r.length;c<u;c++){let l=r[c][t];l.setType(e),l.itemSize=n,l.normalized=s}}else for(let c=0,u=r.length;c<u;c++){let l=new _o(e);l.itemSize=n,l.normalized=s,r[c][t]=l}}clear(){this.groupCount=0;let{groupAttributes:t}=this;t.forEach(e=>{for(let n in e)e[n].clear()})}delete(t){this.groupAttributes.forEach(e=>{delete e[t]})}reset(){this.groupAttributes=[],this.groupCount=0}};var xo=class{constructor(){this.intersectionSet={},this.ids=[]}add(t,e){let{intersectionSet:n,ids:s}=this;n[t]||(n[t]=[],s.push(t)),n[t].push(e)}};var En=new ri,Jp=new Bt,on=new le,pi=new A,Kp=new Kt,Qp=new Kt,tm=new Kt,sh=new Kt,yc=new Kt,vc=new Kt,em=new Le,rh=new A,oh=1e-8,AS=1e-15,us=-1,hs=1,bc=-2,Sc=2,_r=0,ls=1,Tc=2,RS=1e-14,Mc=null;function uh(i){Mc=i}function hh(i,t){i.getMidpoint(En.origin),i.getNormal(En.direction);let e=t.raycastFirst(En,cn);return!!(e&&En.direction.dot(e.face.normal)>0)?us:hs}function nm(i,t){function e(){return Math.random()-.5}i.getNormal(rh),En.direction.copy(rh),i.getMidpoint(En.origin);let n=3,s=0,r=1/0;for(let a=0;a<n;a++){En.direction.x+=e()*oh,En.direction.y+=e()*oh,En.direction.z+=e()*oh,En.direction.multiplyScalar(-1);let o=t.raycastFirst(En,cn);if(!!(o&&En.direction.dot(o.face.normal)>0)&&s++,o!==null&&(r=Math.min(r,o.distance)),r<=AS)return o.face.normal.dot(rh)>0?Sc:bc;if(s/n>.5||(a-s+1)/n>.5)break}return s/n>.5?us:hs}function im(i,t){let e=new xo,n=new xo;return Jp.copy(i.matrixWorld).invert().multiply(t.matrixWorld),i.geometry.boundsTree.bvhcast(t.geometry.boundsTree,Jp,{intersectsTriangles(s,r,a,o){if(!Fn(s)&&!Fn(r)){let c=s.intersectsTriangle(r,em,!0);if(!c){let u=s.plane,l=r.plane,f=u.normal,h=l.normal;f.dot(h)===1&&Math.abs(u.constant-l.constant)<RS&&(c=!0)}if(c){let u=i.geometry.boundsTree.resolveTriangleIndex(a),l=t.geometry.boundsTree.resolveTriangleIndex(o);e.add(u,l),n.add(l,u),Mc&&(Mc.addEdge(em),Mc.addIntersectingTriangles(a,s,o,r))}}return!1}}),{aIntersections:e,bIntersections:n}}function sm(i,t,e,n,s,r,a=!1){let o=e.attributes,c=e.index,u=i*3,l=c.getX(u+0),f=c.getX(u+1),h=c.getX(u+2);for(let d in r){let g=o[d],y=r[d];if(!(d in o))throw new Error(`CSG Operations: Attribute ${d} not available on geometry.`);let m=g.itemSize;d==="position"?(on.a.fromBufferAttribute(g,l).applyMatrix4(n),on.b.fromBufferAttribute(g,f).applyMatrix4(n),on.c.fromBufferAttribute(g,h).applyMatrix4(n),ah(on.a,on.b,on.c,t,3,y,a)):d==="normal"?(on.a.fromBufferAttribute(g,l).applyNormalMatrix(s),on.b.fromBufferAttribute(g,f).applyNormalMatrix(s),on.c.fromBufferAttribute(g,h).applyNormalMatrix(s),a&&(on.a.multiplyScalar(-1),on.b.multiplyScalar(-1),on.c.multiplyScalar(-1)),ah(on.a,on.b,on.c,t,3,y,a,!0)):(Kp.fromBufferAttribute(g,l),Qp.fromBufferAttribute(g,f),tm.fromBufferAttribute(g,h),ah(Kp,Qp,tm,t,m,y,a))}}function rm(i,t,e,n,s,r,a,o=!1){ch(i,n,s,r,a,o),ch(o?e:t,n,s,r,a,o),ch(o?t:e,n,s,r,a,o)}function fh(i,t,e=!1){switch(i){case 0:if(t===hs||t===Sc&&!e)return ls;break;case 1:if(e){if(t===us)return _r}else if(t===hs||t===bc)return ls;break;case 2:if(e){if(t===hs||t===bc)return ls}else if(t===us)return _r;break;case 4:if(t===us)return _r;if(t===hs)return ls;break;case 3:if(t===us||t===Sc&&!e)return ls;break;case 5:if(!e&&(t===hs||t===bc))return ls;break;case 6:if(!e&&(t===us||t===Sc))return ls;break;default:throw new Error(`Unrecognized CSG operation enum "${i}".`)}return Tc}function ah(i,t,e,n,s,r,a=!1,o=!1){let c=u=>{r.push(u.x),s>1&&r.push(u.y),s>2&&r.push(u.z),s>3&&r.push(u.w)};sh.set(0,0,0,0).addScaledVector(i,n.a.x).addScaledVector(t,n.a.y).addScaledVector(e,n.a.z),yc.set(0,0,0,0).addScaledVector(i,n.b.x).addScaledVector(t,n.b.y).addScaledVector(e,n.b.z),vc.set(0,0,0,0).addScaledVector(i,n.c.x).addScaledVector(t,n.c.y).addScaledVector(e,n.c.z),o&&(sh.normalize(),yc.normalize(),vc.normalize()),c(sh),a?(c(vc),c(yc)):(c(yc),c(vc))}function ch(i,t,e,n,s,r=!1){for(let a in s){let o=t[a],c=s[a];if(!(a in t))throw new Error(`CSG Operations: Attribute ${a} no available on geometry.`);let u=o.itemSize;a==="position"?(pi.fromBufferAttribute(o,i).applyMatrix4(e),c.push(pi.x,pi.y,pi.z)):a==="normal"?(pi.fromBufferAttribute(o,i).applyNormalMatrix(n),r&&pi.multiplyScalar(-1),c.push(pi.x,pi.y,pi.z)):(c.push(o.getX(i)),u>1&&c.push(o.getY(i)),u>2&&c.push(o.getZ(i)),u>3&&c.push(o.getW(i)))}}var dh=class{constructor(t){this.triangle=new le().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new le().copy(e)}getIntersectArray(){let t=[],{intersects:e}=this;for(let n in e)t.push(e[n]);return t}},Ec=class{constructor(){this.data={}}addTriangleIntersection(t,e,n,s){let{data:r}=this;r[t]||(r[t]=new dh(e)),r[t].addTriangle(n,s)}getTrianglesAsArray(t=null){let{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(let s in e)n.push(e[s].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){let{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){let{data:n}=this,s=new Set,r=[],a=o=>{if(n[o])if(e!==null)n[o].intersects[e]&&r.push(n[o].intersects[e]);else{let c=n[o].intersects;for(let u in c)s.has(u)||(s.add(u),r.push(c[u]))}};if(t!==null)a(t);else for(let o in n)a(o);return r}reset(){this.data={}}},wc=class{constructor(){this.enabled=!1,this.triangleIntersectsA=new Ec,this.triangleIntersectsB=new Ec,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,s){let{triangleIntersectsA:r,triangleIntersectsB:a}=this;r.addTriangleIntersection(t,e,n,s),a.addTriangleIntersection(n,s,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),uh(this))}complete(){this.enabled&&uh(null)}};var Oi=new Bt,Cc=new Vt,fs=new le,Ac=new le,Bi=new le,Rc=new le,zn=[],ds=[];function CS(i){for(let t of i)return t}function cm(i,t,e,n,s,r={}){let{useGroups:a=!0}=r,{aIntersections:o,bIntersections:c}=im(i,t),u=[],l=null,f;return f=a?0:-1,om(i,t,o,e,!1,n,s,f),am(i,t,o,e,!1,s,f),e.findIndex(d=>d!==6&&d!==5)!==-1&&(f=a?i.geometry.groups.length||1:-1,om(t,i,c,e,!0,n,s,f),am(t,i,c,e,!0,s,f)),zn.length=0,ds.length=0,{groups:u,materials:l}}function om(i,t,e,n,s,r,a,o=0){let c=i.matrixWorld.determinant()<0;Oi.copy(t.matrixWorld).invert().multiply(i.matrixWorld),Cc.getNormalMatrix(i.matrixWorld).multiplyScalar(c?-1:1);let u=i.geometry.groupIndices,l=i.geometry.index,f=i.geometry.attributes.position,h=t.geometry.boundsTree,d=t.geometry.index,g=t.geometry.attributes.position,y=e.ids,m=e.intersectionSet;for(let p=0,x=y.length;p<x;p++){let _=y[p],v=o===-1?0:u[_]+o,S=3*_,E=l.getX(S+0),T=l.getX(S+1),R=l.getX(S+2);fs.a.fromBufferAttribute(f,E).applyMatrix4(Oi),fs.b.fromBufferAttribute(f,T).applyMatrix4(Oi),fs.c.fromBufferAttribute(f,R).applyMatrix4(Oi),r.reset(),r.initialize(fs);let b=m[_];for(let L=0,U=b.length;L<U;L++){let B=3*b[L],P=d.getX(B+0),O=d.getX(B+1),H=d.getX(B+2);Ac.a.fromBufferAttribute(g,P),Ac.b.fromBufferAttribute(g,O),Ac.c.fromBufferAttribute(g,H),r.splitByTriangle(Ac)}let M=r.triangles;for(let L=0,U=M.length;L<U;L++){let B=M[L],P=r.coplanarTriangleUsed?nm(B,h):hh(B,h);zn.length=0,ds.length=0;for(let O=0,H=n.length;O<H;O++){let W=fh(n[O],P,s);W!==Tc&&(ds.push(W),zn.push(a[O].getGroupAttrSet(v)))}if(zn.length!==0){fs.getBarycoord(B.a,Rc.a),fs.getBarycoord(B.b,Rc.b),fs.getBarycoord(B.c,Rc.c);for(let O=0,H=zn.length;O<H;O++){let W=zn[O],j=ds[O]===_r;sm(_,Rc,i.geometry,i.matrixWorld,Cc,W,c!==j)}}}}return y.length}function am(i,t,e,n,s,r,a=0){let o=i.matrixWorld.determinant()<0;Oi.copy(t.matrixWorld).invert().multiply(i.matrixWorld),Cc.getNormalMatrix(i.matrixWorld).multiplyScalar(o?-1:1);let c=t.geometry.boundsTree,u=i.geometry.groupIndices,l=i.geometry.index,f=i.geometry.attributes,h=f.position,d=[],g=i.geometry.halfEdges,y=new Set,m=gr(i.geometry);for(let p=0,x=m;p<x;p++)p in e.intersectionSet||y.add(p);for(;y.size>0;){let p=CS(y);y.delete(p),d.push(p);let x=3*p,_=l.getX(x+0),v=l.getX(x+1),S=l.getX(x+2);Bi.a.fromBufferAttribute(h,_).applyMatrix4(Oi),Bi.b.fromBufferAttribute(h,v).applyMatrix4(Oi),Bi.c.fromBufferAttribute(h,S).applyMatrix4(Oi);let E=hh(Bi,c);ds.length=0,zn.length=0;for(let T=0,R=n.length;T<R;T++){let b=fh(n[T],E,s);b!==Tc&&(ds.push(b),zn.push(r[T]))}for(;d.length>0;){let T=d.pop();for(let R=0;R<3;R++){let b=g.getSiblingTriangleIndex(T,R);b!==-1&&y.has(b)&&(d.push(b),y.delete(b))}if(zn.length!==0){let R=3*T,b=l.getX(R+0),M=l.getX(R+1),L=l.getX(R+2),U=a===-1?0:u[T]+a;if(Bi.a.fromBufferAttribute(h,b),Bi.b.fromBufferAttribute(h,M),Bi.c.fromBufferAttribute(h,L),!Fn(Bi))for(let B=0,P=zn.length;B<P;B++){let O=ds[B],H=zn[B].getGroupAttrSet(U),W=O===_r;rm(b,M,L,f,i.matrixWorld,Cc,H,W!==o)}}}}}function PS(i){for(let t=0;t<i.length-1;t++){let e=i[t],n=i[t+1];if(e.materialIndex===n.materialIndex){let s=e.start,r=n.start+n.count;n.start=s,n.count=r-s,i.splice(t,1),t--}}}function IS(i,t,e,n){e.clear();let s=i.attributes;for(let r=0,a=n.length;r<a;r++){let o=n[r],c=s[o];e.initializeArray(o,c.array.constructor,c.itemSize,c.normalized)}for(let r in e.attributes)n.includes(r)||e.delete(r);for(let r in t.attributes)n.includes(r)||(t.deleteAttribute(r),t.dispose())}function LS(i,t,e){let n=!1,s=-1,r=i.attributes,a=t.groupAttributes[0];for(let c in a){let u=t.getTotalLength(c),l=t.getType(c),f=t.getItemSize(c),h=t.getNormalized(c),d=r[c];(!d||d.array.length<u)&&(d=new fe(new l(u),f,h),i.setAttribute(c,d),n=!0);let g=0;for(let y=0,m=Math.min(e.length,t.groupCount);y<m;y++){let p=e[y].index,{array:x,type:_,length:v}=t.groupAttributes[p][c],S=new _(x.buffer,0,v);d.array.set(S,g),g+=S.length}d.needsUpdate=!0,s=u/d.itemSize}if(i.index){let c=i.index.array;if(c.length<s)i.index=null,n=!0;else for(let u=0,l=c.length;u<l;u++)c[u]=u}let o=0;i.clearGroups();for(let c=0,u=Math.min(e.length,t.groupCount);c<u;c++){let{index:l,materialIndex:f}=e[c],h=t.getCount(l);h!==0&&(i.addGroup(o,h,f),o+=h)}i.setDrawRange(0,s),i.boundsTree=null,n&&i.dispose()}function lm(i,t){let e=t;return Array.isArray(t)||(e=[],i.forEach(n=>{e[n.materialIndex]=t})),e}var vo=class{constructor(){this.triangleSplitter=new _c,this.attributeData=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.debug=new wc}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(e=>({...e}))}evaluate(t,e,n,s=new hi){let r=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s],r=!1),s.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();let{triangleSplitter:a,attributeData:o,attributes:c,useGroups:u,consolidateGroups:l,debug:f}=this;for(;o.length<s.length;)o.push(new xc);s.forEach((p,x)=>{IS(t.geometry,p.geometry,o[x],c)}),f.init(),cm(t,e,n,a,o,{useGroups:u}),f.complete();let h=this.getGroupRanges(t.geometry),d=lm(h,t.material),g=this.getGroupRanges(e.geometry),y=lm(g,e.material);g.forEach(p=>p.materialIndex+=d.length);let m=[...h,...g].map((p,x)=>({...p,index:x}));if(u){let p=[...d,...y];l&&(m=m.map(_=>{let v=p[_.materialIndex];return _.materialIndex=p.indexOf(v),_}).sort((_,v)=>_.materialIndex-v.materialIndex));let x=[];for(let _=0,v=p.length;_<v;_++){let S=!1;for(let E=0,T=m.length;E<T;E++){let R=m[E];R.materialIndex===_&&(S=!0,R.materialIndex=x.length)}S&&x.push(p[_])}s.forEach(_=>{_.material=x})}else m=[{start:0,count:1/0,index:0,materialIndex:0}],s.forEach(p=>{p.material=d[0]});return s.forEach((p,x)=>{let _=p.geometry;LS(_,o[x],m),l&&PS(_.groups)}),r?s:s[0]}evaluateHierarchy(t,e=new hi){t.updateMatrixWorld(!0);let n=(r,a)=>{let o=r.children;for(let c=0,u=o.length;c<u;c++){let l=o[c];l.isOperationGroup?n(l,a):a(l)}},s=r=>{let a=r.children,o=!1;for(let u=0,l=a.length;u<l;u++){let f=a[u];o=s(f)||o}let c=r.isDirty();if(c&&r.markUpdated(),o&&!r.isOperationGroup){let u;return n(r,l=>{u?u=this.evaluate(u,l,l.operation):u=this.evaluate(r,l,l.operation)}),r._cachedGeometry=u.geometry,r._cachedMaterials=u.material,!0}else return o||c};return s(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}};var it={HW:13.5,HL:43,CR:4.2,DEPTH:13,FLOOR:1.5,IHW:12,IHL:41.5,ICR:2.8,T0:13,T1:16,P0:9.9,P1:11.1,PHW:11.8,PHL:41.3,PCR:2.6,B_X0:-11,B_X1:11,B_Y0:-39,B_Y1:35,B_Z0:5.9,B_Z1:6.9,B_TAIL:-31.5,B_TAILW:10.4,B_CHAMF:1.6,BAT_X:10,BAT_Y0:-34,BAT_Y1:1.5,BAT_TAPE:-5,BAT_Z0:1.7,BAT_Z1:5.7,CZ:6.6},bo=[{x:-9.4,y:33.2,r:.95,ring:1.55},{x:9.4,y:33.2,r:.95,ring:1.55},{x:-9.2,y:-29.6,r:1.1,ring:1.7},{x:9.2,y:-29.6,r:1.1,ring:1.7},{x:0,y:-28.6,r:.5,ring:0}],xr=[-6.2,-3.4,-.6,2.2,5].map(i=>({x:i,y:33.2,r:.45,ring:.95})),um=["#c8161d","#141414","#ec6f16","#f2c21b"],mi={sw:{x:0,y:23.5,w:7,h:3.2},ant:{x:0,y:11.6,s:18,t:2.4},usb:{x:0,y:-.6,w:7.6,h:3,t:2.4},sim:{x:0,y:-15,w:16.2,h:17.4},leds:[{x:-2.4,y:-26.2},{x:2.4,y:-26.2}],diodes:[{x:3.6,y:28.2},{x:6.6,y:28.2},{x:9.6,y:28.2}],sot:[{x:-7.2,y:29.2},{x:-4,y:28,r:1},{x:-1.2,y:29.6},{x:6.4,y:-.8,r:1}],r0603:[{x:-8.8,y:26,v:1},{x:-6,y:25.8},{x:-2.6,y:26.4},{x:.9,y:27,v:1},{x:-9,y:22.4,v:1},{x:8.6,y:23},{x:4.8,y:22.4},{x:-6,y:-26.4},{x:6,y:-26.4}],r0402:[{x:-5.4,y:-.4},{x:4.6,y:1.5},{x:-6.8,y:23.2},{x:6.2,y:25.6,v:1},{x:-4.6,y:1.6,v:1}]},qn={cap:{x:6.4,y:28.2,r:3.15,h:4.2},soic:{x:-1.6,y:28.6,w:4.9,h:3.9},shield:{x0:-.6,x1:10.6,y0:5.6,y1:21,nx:3.8,ny:3,h:2.2},ind:{x:-5.7,y:18.7,s:5.4,h:2.8},tant:{x:-5.2,y:8.4,w:2.8,h:3.6},diodes:[{x:-9.2,y:28.2},{x:-9.4,y:13.2}],sot:[{x:-4.4,y:31.6},{x:-9,y:4.4,r:1}],r0603:[{x:2.6,y:31.2},{x:-6.6,y:25.8},{x:-3,y:24.2,v:1},{x:-1.6,y:22.2},{x:-2.2,y:15.4,v:1},{x:-2.4,y:11.4,v:1},{x:-9.4,y:18.8,v:1},{x:1.8,y:3.6},{x:4.6,y:3.6},{x:7.4,y:3.6}],r0402:[{x:-1.4,y:25},{x:-9.2,y:22.8,v:1},{x:-2,y:7.2,v:1},{x:9.7,y:3.6,v:1}],batPads:[{x:-8.6,y:2.9},{x:-6.2,y:2.9}]},gi=[{id:"carcaca_j4_lite",n:"01",nome:"Carca\xE7a",desc:"Corpo preto oco, comprido e estreito"},{id:"placa_j4_lite",n:"02",nome:"Placa principal",desc:"Uma \xFAnica placa, face antena/SIM e verso"},{id:"bateria_j4_lite",n:"03",nome:"Bateria",desc:"Bolsa prateada, fita amarela e fios curtos"},{id:"protecao_interna_j4_lite",n:"04",nome:"Prote\xE7\xE3o interna",desc:"Painel com tr\xEAs aberturas passantes"},{id:"tampa_externa_j4_lite",n:"05",nome:"Tampa externa",desc:"Tampa s\xF3lida que cobre todo o corpo"},{id:"chicote_j4_lite",n:"06",nome:"Chicote",desc:"Cabo, termorretr\xE1til, passa-fios e conector 4 vias"}],yr={carcaca_j4_lite:0,bateria_j4_lite:22,placa_j4_lite:36,chicote_j4_lite:36,protecao_interna_j4_lite:47,tampa_externa_j4_lite:58};function Fi(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function Mo(i){let t=i>>>0||1;return()=>(t=t*16807%2147483647)/2147483647}function _i(i,{srgb:t=!0,aniso:e=8,repeat:n=!1}={}){let s=new ns(i);return t&&(s.colorSpace=Se),s.anisotropy=e,n&&(s.wrapS=s.wrapT=Vr),s}function ps(i,t,e,n,s=7){let r=Mo(s),a=i.getImageData(0,0,t,e),o=a.data;for(let c=0;c<o.length;c+=4){let u=(r()-.5)*n;o[c]+=u,o[c+1]+=u,o[c+2]+=u}i.putImageData(a,0,0)}function DS(i,t,e,n,s,r){r=Math.min(r,n/2,s/2),i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}var So=24,NS={W:(it.B_X1-it.B_X0)*So,H:(it.B_Y1-it.B_Y0)*So};function hm(i){let{W:t,H:e}=NS,n=Fi(t,e),s=n.getContext("2d"),r=x=>(i==="front"?x-it.B_X0:it.B_X1-x)*So,a=x=>(it.B_Y1-x)*So,o=x=>x*So,c=Mo(i==="front"?11:23);s.fillStyle="#17602d",s.fillRect(0,0,t,e);let u=(x,_,v,S)=>{s.fillStyle="#1d6e36",DS(s,Math.min(r(x),r(v)),a(S),Math.abs(r(v)-r(x)),a(_)-a(S),o(.6)),s.fill()},l=(x,_=.28)=>{s.strokeStyle="#258241",s.lineWidth=o(_),s.lineJoin=s.lineCap="round",s.beginPath(),x.forEach(([v,S],E)=>E?s.lineTo(r(v),a(S)):s.moveTo(r(v),a(S))),s.stroke()},f=(x,_)=>{s.fillStyle="#c9a24a",s.beginPath(),s.arc(r(x),a(_),o(.32),0,7),s.fill(),s.fillStyle="#0d2a16",s.beginPath(),s.arc(r(x),a(_),o(.14),0,7),s.fill()},h="#d4a54a",d=(x,_,v,S)=>{s.fillStyle=h,s.fillRect(r(x)-o(v)/2,a(_)-o(S)/2,o(v),o(S))},g="#eef0e6",y=(x,_,v,S,E=.13)=>{s.strokeStyle=g,s.lineWidth=o(E),s.strokeRect(r(x)-o(v)/2,a(_)-o(S)/2,o(v),o(S))},m=(x,_,v,S=.9,E=0)=>{s.save(),s.translate(r(_),a(v)),s.rotate(E),s.fillStyle=g,s.font=`600 ${o(S)}px "DejaVu Sans", Arial, sans-serif`,s.textAlign="center",s.textBaseline="middle",s.fillText(x,0,0),s.restore()};if(i==="front"){u(-10.4,-38.2,10.4,-31.2),u(-10.6,-24.6,-8.6,-6.2),u(8.6,-24.6,10.6,-6.2),u(-10.6,2.8,-9.6,20.4),u(9.6,2.8,10.6,20.4),l([[-6.2,32.4],[-6.2,30.8],[-7.2,30.2]]),l([[-3.4,32.4],[-3.4,29.4],[-4,28.6]]),l([[-.6,32.4],[-.6,30.4],[-1.2,29.9]]),l([[2.2,32.4],[2.2,30.6],[3.6,30]]),l([[5,32.4],[5.6,31.2],[6.6,30.2]]),l([[9.6,26.2],[9.6,24.6],[8.6,23.6]]),l([[-8.8,25],[-9,23.3]]),l([[-3.6,23.5],[-6,23.5],[-6,25.2]]),l([[3.6,23.5],[4.8,22.9]]),l([[6.4,-1.8],[6.4,-4.6],[8.4,-6],[8.4,-22],[6,-25.6]]),l([[-5.4,-1.2],[-8.4,-4.4],[-8.4,-22],[-6,-25.6]]),l([[-2.4,-25.6],[-2.4,-24.4]]),l([[2.4,-25.6],[2.4,-24.4]]),l([[-3.8,-.6],[-4.6,.8]]),l([[3.8,-.6],[4.6,1]]),[[-9.8,21.2],[9.8,21.2],[-9.9,1.8],[9.9,1.8],[-9.6,-5.4],[9.6,-5.4],[-7.4,-31.8],[7.4,-31.8],[-4.2,-33.6],[4.2,-33.6],[0,-35.4],[-8.8,-36.2],[8.8,-36.2],[-9.8,-18.6],[9.8,-18.6],[-1.6,31.4],[7.8,31.8],[-9.8,27.2]].forEach(([R,b])=>f(R,b));let{sw:x,ant:_,usb:v,sim:S,leds:E,diodes:T}=mi;[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([R,b])=>d(x.x+R*(x.w/2+.2),x.y+b*1.1,1,.8)),m("SW1",x.x-5.6,x.y+.2,.8,-Math.PI/2),y(_.x,_.y,_.s+.9,_.s+.9,.12),m("ANT",_.x-10,_.y-6.2,.75,-Math.PI/2),d(v.x-4.3,v.y,1,2.2),d(v.x+4.3,v.y,1,2.2);for(let R=0;R<5;R++)d(v.x-1.3+R*.65,v.y+2.1,.35,1);for(let R=0;R<7;R++)d(S.x-4.8+R*1.6,S.y+S.h/2+.7,.8,1.6);d(S.x-S.w/2-.4,S.y-5,1,2.4),d(S.x+S.w/2+.4,S.y-5,1,2.4),d(S.x-S.w/2-.4,S.y+4,1,2.4),d(S.x+S.w/2+.4,S.y+4,1,2.4),m("SIM1",S.x-9.6,S.y-2,.75,-Math.PI/2),E.forEach((R,b)=>{d(R.x-.75,R.y,.7,.9),d(R.x+.75,R.y,.7,.9),y(R.x,R.y,2.6,1.6,.1),m(["LED1","LED2"][b],R.x+(b?2.6:-2.6),R.y-1.6,.6)}),T.forEach((R,b)=>{d(R.x,R.y+1.9,1.6,1.3),d(R.x,R.y-1.9,1.6,1.3),m("D"+(b+1),R.x,R.y-3.4,.6)}),m("SBS",-9.9,30.2,.75,Math.PI/2),m("Q1",-7.2,31.1,.55),m("Q2",-4,26.4,.55),m("Q3",-1.2,31.3,.55),m("C3",8.9,25,.55),m("R7",-9.8,24.4,.5,-Math.PI/2),m("J2",v.x-5.6,v.y-1.3,.6)}else{u(-10.6,22.6,-8,26.2),u(-.4,23.6,4,26.8);let x=qn.shield;s.strokeStyle=h,s.lineWidth=o(.5),s.beginPath(),[[x.x0+x.nx,x.y0],[x.x1,x.y0],[x.x1,x.y1],[x.x0,x.y1],[x.x0,x.y0+x.ny],[x.x0+x.nx,x.y0+x.ny]].forEach(([b,M],L)=>L?s.lineTo(r(b),a(M)):s.moveTo(r(b),a(M))),s.closePath(),s.stroke(),l([[-8.6,3.6],[-8.6,5.2],[-7,6.6]]),l([[-6.2,3.6],[-6.2,4.4],[-4,5.4],[-1,5.4]]),l([[-5.2,10.4],[-5.2,15.6]]),l([[-2.2,16.6],[-2.2,21],[-1.6,21.6]]),l([[-1.6,26.6],[-1.6,24.8]]),l([[3.6,28.2],[2.6,30.4]]),l([[-9.2,25.4],[-9.2,23.6]]),l([[-9.4,15.6],[-9.4,18]]),l([[1.8,4.4],[1.8,5.2]]),[[-9.8,10.8],[-9.8,6],[-3.2,4.2],[.4,22.6],[9.6,23],[3.6,31.4],[-6.4,33.4],[-6.8,-6],[5.2,-10.4],[-2.6,-15.8],[6.8,-21.4],[-5.8,-26.8],[1.2,-31.4],[-8.4,-36.4],[8.6,-36.4]].forEach(([b,M])=>f(b,M));let{cap:v,soic:S,ind:E,tant:T,batPads:R}=qn;d(v.x,v.y+2.4,1.4,2.2),d(v.x,v.y-2.4,1.4,2.2),y(v.x,v.y,7,7,.12),m("C1",v.x-4.4,v.y+2.6,.6);for(let b=0;b<4;b++)d(S.x-1.9+b*1.27,S.y+2.8,.55,1.3),d(S.x-1.9+b*1.27,S.y-2.8,.55,1.3);m("U1",S.x,S.y-4.3,.6),d(E.x,E.y+2.2,4,1.6),d(E.x,E.y-2.2,4,1.6),m("L1",E.x+3.6,E.y+3.4,.6),d(T.x,T.y+1.8,2,1.3),d(T.x,T.y-1.8,2,1.3),m("C9",T.x+2.5,T.y-2.6,.55),qn.diodes.forEach((b,M)=>{d(b.x,b.y+1.9,1.6,1.3),d(b.x,b.y-1.9,1.6,1.3),m("D"+(4+M),b.x+1.9,b.y-3,.5)}),R.forEach(b=>{s.fillStyle=h,s.beginPath(),s.arc(r(b.x),a(b.y),o(.7),0,7),s.fill()}),m("BAT",-7.4,4.6,.55),m("SBS",-9.9,30,.75,-Math.PI/2)}for(let x of bo)x.ring&&(s.fillStyle=h,s.beginPath(),s.arc(r(x.x),a(x.y),o(x.ring),0,7),s.fill());for(let x of xr)s.fillStyle=h,s.beginPath(),s.arc(r(x.x),a(x.y),o(x.ring),0,7),s.fill();let p=i==="front"?mi:qn;for(let x of p.sot){let _=x.r?1:0;(_?[[-1.1,-.95],[-1.1,.95],[1.1,0]]:[[-.95,-1.1],[.95,-1.1],[0,1.1]]).forEach(([S,E])=>d(x.x+S,x.y+E,_?.9:.7,_?.7:.9))}for(let x of p.r0603)x.v?(d(x.x,x.y+.75,.9,.7),d(x.x,x.y-.75,.9,.7)):(d(x.x+.75,x.y,.7,.9),d(x.x-.75,x.y,.7,.9));for(let x of p.r0402)x.v?(d(x.x,x.y+.48,.6,.45),d(x.x,x.y-.48,.6,.45)):(d(x.x+.48,x.y,.45,.6),d(x.x-.48,x.y,.45,.6));ps(s,t,e,7,i==="front"?3:5),s.fillStyle="#0b0f0c";for(let x of[...bo,...xr])s.beginPath(),s.arc(r(x.x),a(x.y),o(x.r),0,7),s.fill();return n}var fm=()=>_i(hm("front")),dm=()=>_i(hm("back"));function ph(i){let e=Math.round(2*it.HW*14),n=Math.round(2*it.HL*14),s=Fi(e,n),r=s.getContext("2d");if(r.fillStyle="#161617",r.fillRect(0,0,e,n),ps(r,e,n,16,i?31:37),i){let a=e/2-12.6;r.strokeStyle="#4a4a4e",r.fillStyle="#4a4a4e",r.lineWidth=.42*14,r.lineCap="round";let o=10.5*14,c=[[-3.2,-2,.6],[-1.6,-2.8,0],[.4,-2.4,-.6],[2.2,-1.2,-1.2]];for(let[h,d,g]of c)r.beginPath(),r.moveTo(a+h*14,o+d*14),r.lineTo(a+h*14,o+(d+1.4)*14),r.lineTo(a+(h*.25+g*.3)*14,o+2.8*14),r.lineTo(a+(h*.25+g*.3)*14,o+4.6*14),r.stroke(),r.beginPath(),r.arc(a+h*14,o+d*14,.55*14,0,7),r.fill();r.save(),r.translate(a,21.5*14),r.rotate(Math.PI/2),r.fillStyle="#4c4c50",r.font=`500 ${3.4*14}px "DejaVu Sans", Arial, sans-serif`,r.textBaseline="middle";let u="REALTRACKER",l=1.55*14,f=0;for(let h of u)r.fillText(h,f,0),f+=r.measureText(h).width+l;r.restore()}return _i(s)}function pm(){let e=Fi(1400,352),n=e.getContext("2d");n.fillStyle="#f7f7f4",n.fillRect(0,0,1400,352);let s=Mo(99),r=60;for(n.fillStyle="#111";r<1180;){let a=3+Math.floor(s()*4)*3;s()>.42&&n.fillRect(r,34,a,190),r+=a+3+Math.floor(s()*3)*3}n.font='600 64px "DejaVu Sans Mono", monospace',n.textBaseline="alphabetic",n.fillText("IMEI:860000000000000",60,306),n.font='italic 800 92px "DejaVu Sans", Arial, sans-serif',n.fillText("4G",1222,300),n.lineWidth=10,n.strokeStyle="#111";for(let a=0;a<3;a++)n.beginPath(),n.arc(1262,182,30+a*26,-Math.PI*.85,-Math.PI*.35),n.stroke();return ps(n,1400,352,6,4),_i(e)}function mm(){let i=Fi(512,128),t=i.getContext("2d");return t.fillStyle="#b9b9bd",t.font='600 84px "DejaVu Sans", Arial, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("ON",140,66),t.fillText("OFF",370,66),_i(i)}function gm(){let n=Fi(504,504),s=n.getContext("2d");s.fillStyle="#7b4a2b",s.fillRect(0,0,504,504),ps(s,504,504,18,41);let r=1.25*28;s.fillStyle="#ebe5d6",s.fillRect(r,r,504-2*r,504-2*r);let a=Mo(5);for(let o=0;o<2600;o++)s.fillStyle=`rgba(${a()>.5?"255,255,255":"150,140,120"},${a()*.16})`,s.fillRect(r+a()*(504-2*r),r+a()*(504-2*r),2,2);return s.fillStyle="rgba(214,170,90,0.9)",s.fillRect(504*.62,504*.33,3,3),s.save(),s.translate(r+1.5*28,504*.58),s.rotate(-Math.PI/2),s.fillStyle="#2a2a2a",s.font=`600 ${1.4*28}px "DejaVu Sans Mono", monospace`,s.textAlign="center",s.textBaseline="middle",s.fillText("070",0,0),s.restore(),_i(n)}function _m(){let t=Fi(256,256),e=t.getContext("2d");return e.fillStyle="#c9cbcd",e.fillRect(0,0,256,256),ps(e,256,256,14,8),e.fillStyle="#121212",e.beginPath(),e.arc(256/2,256/2,256*.5,Math.PI*.5,Math.PI*1.5),e.closePath(),e.fill(),e.fillStyle="#121212",e.font='700 52px "DejaVu Sans", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillStyle="#e9e9e9",e.fillText("10",100,74),e.fillText("100V",120,128),e.fillText("VT",96,184),_i(t)}function xm(){let t=Fi(256,256),e=t.getContext("2d");return e.fillStyle="#2b2b2d",e.fillRect(0,0,256,256),ps(e,256,256,12,9),e.save(),e.translate(256/2,256/2),e.rotate(Math.PI/2),e.fillStyle="#c8c8c8",e.font='600 92px "DejaVu Sans", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("470",0,4),e.restore(),_i(t)}function Pc(i=3,t=200,e=26){let s=Fi(256,256),r=s.getContext("2d");r.fillStyle=`rgb(${t},${t},${t-3})`,r.fillRect(0,0,256,256);let a=Mo(i);for(let o=0;o<900;o++){let c=a()*256,u=a()*256,l=6+a()*26,f=a()*Math.PI;r.strokeStyle=`rgba(${a()>.5?"255,255,255":"60,60,60"},${.05+a()*.09})`,r.lineWidth=1+a()*2,r.beginPath(),r.moveTo(c,u),r.lineTo(c+Math.cos(f)*l,u+Math.sin(f)*l),r.stroke()}return ps(r,256,256,e,i+1),_i(s,{repeat:!0})}var pe=Math.PI,ms=(i,t,e)=>new A(i,t,e);function Dc(i,t,e,n,s,r){return r=Math.max(0,Math.min(r,(n-t)/2,(s-e)/2)),i.moveTo(t+r,e),i.lineTo(n-r,e),r&&i.absarc(n-r,e+r,r,-pe/2,0),i.lineTo(n,s-r),r&&i.absarc(n-r,s-r,r,0,pe/2),i.lineTo(t+r,s),r&&i.absarc(t+r,s-r,r,pe/2,pe),i.lineTo(t,e+r),r&&i.absarc(t+r,e+r,r,pe,pe*1.5),i}var an=(i,t,e,n=0,s=0)=>Dc(new Mn,n-i,s-t,n+i,s+t,e),To=(i,t,e,n=0,s=0)=>Dc(new ci,n-i,s-t,n+i,s+t,e),ym=(i,t,e)=>new ci().absarc(i,t,e,0,pe*2,!0);function Sm(i,t,e,n){let s=new Mn,r=2*t-i;return s.moveTo(-i+n,-e),s.lineTo(i-n,-e),s.absarc(i-n,-e+n,n,-pe/2,0),s.quadraticCurveTo(r,0,i,e-n),s.absarc(i-n,e-n,n,0,pe/2),s.lineTo(-i+n,e),s.absarc(-i+n,e-n,n,pe/2,pe),s.quadraticCurveTo(-r,0,-i,-e+n),s.absarc(-i+n,-e+n,n,pe,pe*1.5),s}function ke(i,t,e,n=0,{bevelT:s,segs:r=3,curve:a=12}={}){let o=n?s??n:0,c=new $s(i,{depth:Math.max(.001,e-t-2*o),bevelEnabled:n>0,bevelSize:n,bevelThickness:o,bevelSegments:r,curveSegments:a});return c.translate(0,0,t+o),c}function Lc(i){let[t,e]=i.groups,n=t.count/2;return i.clearGroups(),i.addGroup(t.start,n,0),i.addGroup(t.start+n,n,1),i.addGroup(e.start,e.count,2),i}function vr(i,t,e,n,s,{start:r=0,count:a=1/0,mirror:o=!1}={}){let c=i.attributes.position,u=i.attributes.uv,l=Math.min(c.count,r+a);for(let f=r;f<l;f++){let h=(c.getX(f)-t)/(e-t);u.setXY(f,o?1-h:h,(c.getY(f)-n)/(s-n))}return u.needsUpdate=!0,i}function mh(i,t,e,n,s,r=!0){let[a,o]=i.groups;return vr(i,t,e,n,s,{start:a.start,count:a.count,mirror:r}),vr(i,t,e,n,s,{start:o.start,count:o.count}),i}var ue=(i,t,e,n,s,r)=>new Wn(i,t,e).translate(n,s,r);function Ic(i,{cz:t=it.CZ,seg:e=48,caps:n=[!0,!0]}={}){let s=[],r=[],a=[],o=i.length;i.forEach((h,d)=>{let g=2/(h.n||2);for(let y=0;y<=e;y++){let m=y/e*pe*2,p=Math.cos(m),x=Math.sin(m);s.push(h.a*Math.sign(p)*Math.abs(p)**g,h.y,t+h.b*Math.sign(x)*Math.abs(x)**g),r.push(y/e,d/(o-1))}});for(let h=0;h<o-1;h++)for(let d=0;d<e;d++){let g=h*(e+1)+d,y=g+e+1;a.push(g,y,g+1,y,y+1,g+1)}let c=new Ce;c.setAttribute("position",new Jt(s,3)),c.setAttribute("uv",new Jt(r,2)),c.setIndex(a),c.computeVertexNormals();let u=c.attributes.normal;for(let h=0;h<o;h++){let d=h*(e+1),g=d+e,y=ms(u.getX(d)+u.getX(g),u.getY(d)+u.getY(g),u.getZ(d)+u.getZ(g)).normalize();u.setXYZ(d,y.x,y.y,y.z),u.setXYZ(g,y.x,y.y,y.z)}let l=[c],f=(h,d)=>{let g=[],y=[],m=[],p=i[h].y;for(let _=0;_<e;_++){let v=h*(e+1)+_,S=v+1,E=[0,p,t],T=[s[v*3],p,s[v*3+2]],R=[s[S*3],p,s[S*3+2]],b=d<0?[E,T,R]:[E,R,T];for(let M of b)g.push(...M),y.push(0,d,0),m.push(.5+M[0]*.05,.5+(M[2]-t)*.05)}let x=new Ce;x.setAttribute("position",new Jt(g,3)),x.setAttribute("normal",new Jt(y,3)),x.setAttribute("uv",new Jt(m,2)),l.push(x)};return n[0]&&f(0,-1),n[1]&&f(o-1,1),l.length===1?c:er(l.map(wo))}function Eo(i,t,{seg:e=48,radial:n=12}={}){let s=new $r(i.map(r=>ms(...r)),!1,"centripetal");return new Na(s,e,t,n,!1)}function wo(i){let t=i.index?i.toNonIndexed():i.clone();for(let e of Object.keys(t.attributes))["position","normal","uv"].includes(e)||t.deleteAttribute(e);return t.attributes.normal||t.computeVertexNormals(),t.attributes.uv||t.setAttribute("uv",new Jt(new Float32Array(t.attributes.position.count*2),2)),t.clearGroups(),t.morphAttributes={},t}function BS(i,t){let e=i.index?i.toNonIndexed():i;return e.groups.map(n=>{let s=new Ce;for(let r of["position","normal","uv"]){let a=e.attributes[r];a&&s.setAttribute(r,new fe(a.array.slice(n.start*a.itemSize,(n.start+n.count)*a.itemSize),a.itemSize))}return[s,t[n.materialIndex]]})}function jt(i,t,e){let n=ms(...e),s=new Map;for(let[o,c]of t){let u=Array.isArray(c)?BS(o,c):[[o,c]];for(let[l,f]of u)s.has(f)||s.set(f,[]),s.get(f).push(wo(l))}let r=[...s].map(([o,c])=>{let u=c.length>1?er(c):c[0];u.translate(-n.x,-n.y,-n.z),u.computeBoundingSphere();let l=new ie(u,o);return l.name=s.size>1?`${i}__${o.name}`:i,l}),a;return r.length===1?a=r[0]:(a=new vn,a.name=i,r.forEach(o=>a.add(o))),a.userData.devPivot=n,a}function br(i,t,e,n={}){let s=new vn;s.name=i;let r=ms(...t);s.position.copy(r);for(let a of e)a.position.copy(a.userData.devPivot).sub(r),delete a.userData.devPivot,s.add(a);return s.userData={...n},s}function OS(){let i={},t=(n,s)=>{let r=new Nn(s);return r.name=n,i[n]=r,r},e=(n,s)=>{let r=new Ua(s);return r.name=n,i[n]=r,r};return e("plastico_preto_brilho",{color:"#0b0b0d",roughness:.26,clearcoat:.6,clearcoatRoughness:.16}),t("plastico_preto_fosco",{color:"#141416",roughness:.62}),t("plastico_preto_interno",{color:"#111113",roughness:.82}),t("plastico_protecao",{color:"#19191c",roughness:.68}),t("painel_tampa",{map:ph(!0),roughness:.8}),t("painel_fundo",{map:ph(!1),roughness:.8}),t("etiqueta_imei",{map:pm(),roughness:.55}),t("texto_on_off",{map:mm(),transparent:!0,roughness:.7,depthWrite:!1}),e("pcb_frente",{map:fm(),roughness:.4,clearcoat:.4,clearcoatRoughness:.28}),e("pcb_verso",{map:dm(),roughness:.4,clearcoat:.4,clearcoatRoughness:.28}),t("pcb_borda_fr4",{color:"#a7ab6a",roughness:.72}),t("ouro",{color:"#d9a948",metalness:1,roughness:.28}),t("estanho",{color:"#cdd0d3",metalness:1,roughness:.3}),t("metal_blindagem",{color:"#e9e9e6",map:Pc(3,205,26),metalness:1,roughness:.4}),t("metal_usb",{color:"#dadcde",metalness:1,roughness:.2}),t("metal_sim",{color:"#f2f2ee",map:Pc(8,222,14),metalness:1,roughness:.3}),t("smd_preto",{color:"#19191b",roughness:.42}),t("smd_capacitor",{color:"#a9835a",roughness:.5}),t("marcacao_cinza",{color:"#8e8e92",roughness:.5}),t("plastico_sim",{color:"#141414",roughness:.5}),t("ceramica_antena",{map:gm(),roughness:.5,metalness:.15}),t("ceramica_borda",{color:"#7a492a",roughness:.6}),t("capacitor_lata",{color:"#d3d5d7",metalness:.9,roughness:.3}),t("capacitor_topo",{map:_m(),metalness:.5,roughness:.36}),t("indutor",{color:"#2a2a2c",roughness:.62}),t("indutor_topo",{map:xm(),roughness:.6}),t("tantalo",{color:"#e2a11c",roughness:.45}),t("tantalo_faixa",{color:"#6a3c10",roughness:.5}),t("led_status_1",{color:"#f3f6f2",roughness:.3,emissive:"#000000"}),t("led_status_2",{color:"#f3f4f8",roughness:.3,emissive:"#000000"}),t("chave_alavanca",{color:"#1d1d1f",roughness:.45}),t("bateria_aluminio",{color:"#eef0f3",map:Pc(12,228,9),metalness:.85,roughness:.3}),e("fita_kapton",{color:"#f1ad00",roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:.8}),t("pcb_protecao_bateria",{color:"#1d6b34",roughness:.5}),t("niquel",{color:"#cfcfca",metalness:1,roughness:.34}),["vermelho","preto","laranja","amarelo"].forEach((n,s)=>t("fio_"+n,{color:um[s],roughness:.38})),t("cabo_revestimento",{color:"#121214",roughness:.42}),t("termorretratil",{color:"#0f0f11",roughness:.8}),t("borracha_passa_fios",{color:"#111113",roughness:.6}),t("conector_corpo",{color:"#141416",roughness:.46}),t("contato_metal",{color:"#dfe1e2",metalness:1,roughness:.18}),t("fundo_contato",{color:"#050506",roughness:.9}),i}function FS(i){let t=new vo;t.attributes=["position","uv","normal"],t.useGroups=!0;let e=(_,v)=>{Array.isArray(v)||_.clearGroups();let S=new hi(_,v);return S.updateMatrixWorld(),S},n=2,s=.6,r=ke(an(it.HW-n,it.HL-n,it.CR-n),0,7,n,{segs:6,curve:12}),a=ke(an(it.HW-s,it.HL-s,it.CR-s),5,it.DEPTH,s,{segs:3,curve:12}),o=[i.plastico_preto_fosco,i.plastico_preto_brilho],c=t.evaluate(e(r,o),e(a,o),0),u=ke(an(it.IHW-.6,it.IHL-.6,it.ICR-.6),it.FLOOR,30,.6,{segs:3,curve:10});c=t.evaluate(c,e(u,i.plastico_preto_interno),1);let l=Dc(new Mn,-3.65,it.CZ-3.25,3.65,40,3),f=new $s(l,{depth:6,bevelEnabled:!1,curveSegments:18});f.rotateX(pe/2).translate(0,46,0),c=t.evaluate(c,e(f,i.plastico_preto_interno),1);let h=[];for(let _ of[-31,-10,11,30])for(let v of[-1,1])h.push(ue(.9,4.2,1.5,v*12.35,_,10.65));for(let _ of[-1,1])for(let v of[-1,1])h.push(ue(4.4,.9,1.5,v*7.5,_*41.95,10.65));c=t.evaluate(c,e(er(h.map(wo)),i.plastico_preto_interno),1);let d=[];for(let _ of[-27.5,-6,18.5,30.5])for(let v of[-1,1])d.push(ue(1.45,3,4.4,v*11.475,_,it.FLOOR+2.2));c=t.evaluate(c,e(er(d.map(wo)),i.plastico_preto_interno),0);let g=jt("corpo_carcaca",[[c.geometry,c.material]],[0,0,it.DEPTH/2]),y=new to(Sm(10.6,8.8,39.6,2),12);vr(y,-it.HW,it.HW,-it.HL,it.HL),y.rotateY(pe).translate(0,0,-.025);let m=jt("painel_fosco_fundo",[[y,i.painel_fundo]],[0,0,0]),p=new ai(35,8.8);p.applyMatrix4(new Bt().makeBasis(ms(0,-1,0),ms(0,0,1),ms(-1,0,0))),p.translate(-it.HW-.03,20.5,6.9);let x=jt("etiqueta_imei",[[p,i.etiqueta_imei]],[-it.HW,20.5,6.9]);return br("carcaca_j4_lite",[0,0,it.DEPTH/2],[g,m,x])}function zS(i){let e=Lc(ke(an(it.HW-1.2,it.HL-1.2,it.CR-1.2),it.T0,it.T1,1.2,{bevelT:1,segs:6,curve:14})),n=jt("corpo_tampa",[[e,[i.plastico_preto_interno,i.plastico_preto_brilho,i.plastico_preto_brilho]]],[0,0,(it.T0+it.T1)/2]),s=an(it.IHW-.15,it.IHL-.15,it.ICR-.15);s.holes.push(To(it.IHW-1.1,it.IHL-1.1,.6));let r=jt("aba_encaixe",[[ke(s,12,it.T0+.1),i.plastico_preto_interno]],[0,0,12.5]),a=new to(Sm(11.2,9.4,40.2,2.2),12);vr(a,-it.HW,it.HW,-it.HL,it.HL),a.translate(0,0,it.T1+.02);let o=jt("painel_fosco_marca",[[a,i.painel_tampa]],[0,0,it.T1]);return br("tampa_externa_j4_lite",[0,0,(it.T0+it.T1)/2],[n,r,o])}var HS={chave:{x:0,y:mi.sw.y,hw:3.2,hl:1.5,r:1},usb:{x:0,y:mi.usb.y,hw:4.3,hl:1.6,r:1.6},sim:{x:0,y:-16.4,hw:8.4,hl:11.2,r:1.4}};function kS(i){let e=HS,n=an(it.PHW-.12,it.PHL-.12,it.PCR-.12);for(let d of["chave","usb","sim"])n.holes.push(To(e[d].hw+.12,e[d].hl+.12,e[d].r+.12,e[d].x,e[d].y));let s=ke(n,it.P0,it.P1,.12,{segs:2,curve:12}),r=an(it.PHW,it.PHL,it.PCR);r.holes.push(To(it.PHW-.9,it.PHL-.9,1));let a=ke(r,9.5,it.P0+.05),o=an(4.7-.12,3-.12,1.8-.12,e.chave.x,e.chave.y);o.holes.push(To(e.chave.hw+.12,e.chave.hl+.12,e.chave.r+.12,e.chave.x,e.chave.y));let c=ke(o,it.P1-.1,it.P1+.5,.12,{segs:2}),u=[];for(let d of[-31,-10,11,30])for(let g of[-1,1])u.push(ue(.9,3.6,.8,g*12.05,d,10.5));for(let d of[-1,1])for(let g of[-1,1])u.push(ue(4,.9,.8,g*7.5,d*41.75,10.5));let l=[ue(7,2,2.1,0,42,10.9),ue(7,1.55,1.05,0,42.225,12.475)],f=new ai(7.4,1.85).translate(0,e.chave.y+4.3,it.P1+.015),h=[jt("painel_protecao",[[s,i.plastico_protecao],[a,i.plastico_protecao]],[0,0,(it.P0+it.P1)/2]),jt("ressalto_acesso_chave",[[c,i.plastico_protecao]],[e.chave.x,e.chave.y,it.P1+.2]),jt("travas_laterais",u.map(d=>[d,i.plastico_protecao]),[0,0,10.5]),jt("lingueta_passa_fios",l.map(d=>[d,i.plastico_protecao]),[0,42,11.4]),jt("texto_on_off",[[f,i.texto_on_off]],[0,e.chave.y+4.3,it.P1])];return br("protecao_interna_j4_lite",[0,0,(it.P0+it.P1)/2],h,{aberturas:{acesso_chave:[e.chave.x,e.chave.y],abertura_usb:[e.usb.x,e.usb.y],janela_sim:[e.sim.x,e.sim.y]}})}var ee=it.B_Z1,Xe=it.B_Z0,Yn=(i,t,e,n,s,r=0)=>ue(i,t,e,n,s,ee+r+e/2),Hn=(i,t,e,n,s,r=0)=>ue(i,t,e,n,s,Xe-r-e/2);function vm(i,t,e){let n=t==="f"?Yn:Hn,s=[];for(let r of i.sot){let a=!!r.r;s.push([n(a?1.3:2.9,a?2.9:1.3,1,r.x,r.y,.12),e.smd_preto]);let o=a?[[-1,-.95],[-1,.95],[1,0]]:[[-.95,-1],[.95,-1],[0,1]];for(let[c,u]of o)s.push([n(a?.7:.42,a?.42:.7,.18,r.x+c,r.y+u),e.estanho])}return i.r0603.forEach((r,a)=>{let o=a%2?e.smd_capacitor:e.smd_preto;r.v?(s.push([n(.8,1,.45,r.x,r.y),o]),s.push([n(.8,.3,.45,r.x,r.y+.65),e.estanho]),s.push([n(.8,.3,.45,r.x,r.y-.65),e.estanho])):(s.push([n(1,.8,.45,r.x,r.y),o]),s.push([n(.3,.8,.45,r.x+.65,r.y),e.estanho]),s.push([n(.3,.8,.45,r.x-.65,r.y),e.estanho]))}),i.r0402.forEach((r,a)=>{let o=a%2?e.smd_preto:e.smd_capacitor;r.v?(s.push([n(.5,.6,.35,r.x,r.y),o]),s.push([n(.5,.2,.35,r.x,r.y+.4),e.estanho]),s.push([n(.5,.2,.35,r.x,r.y-.4),e.estanho])):(s.push([n(.6,.5,.35,r.x,r.y),o]),s.push([n(.2,.5,.35,r.x+.4,r.y),e.estanho]),s.push([n(.2,.5,.35,r.x-.4,r.y),e.estanho]))}),s}function bm(i,t,e,n){let s=e==="f"?Yn:Hn;return[[s(2.6,3.5,2,i,t,.1),n.smd_preto],[s(2.62,.6,2.02,i,t+1.1,.1),n.marcacao_cinza],[s(1.5,.5,1,i,t+2),n.estanho],[s(1.5,.5,1,i,t-2),n.estanho]]}function VS(i){let{B_X0:t,B_X1:e,B_Y0:n,B_Y1:s,B_TAIL:r,B_TAILW:a,B_CHAMF:o}=it,c=new Mn;c.moveTo(t+.5,s),c.lineTo(e-.5,s),c.lineTo(e,s-.5),c.lineTo(e,r),c.lineTo(a,r-.5),c.lineTo(a,n+o),c.lineTo(a-o,n),c.lineTo(-a+o,n),c.lineTo(-a,n+o),c.lineTo(-a,r-.5),c.lineTo(t,r),c.lineTo(t,s-.5),c.closePath();for(let F of[...bo,...xr])c.holes.push(ym(F.x,F.y,F.r));let u=mh(Lc(ke(c,Xe,ee,0,{curve:14})),t,e,n,s),l=[jt("substrato_pcb",[[u,[i.pcb_verso,i.pcb_frente,i.pcb_borda_fr4]]],[0,(n+s)/2,(Xe+ee)/2])],{sw:f,ant:h,usb:d,sim:g,leds:y}=mi,m=mh(Lc(ke(an(h.s/2-.2,h.s/2-.2,.5,h.x,h.y),ee,ee+h.t,.2,{segs:2})),h.x-h.s/2,h.x+h.s/2,h.y-h.s/2,h.y+h.s/2),p=new Ii(.62,.7,.3,24).rotateX(pe/2).translate(h.x-.6,h.y,ee+h.t+.15),x=new Js(.62,20,10,0,pe*2,0,pe/2).rotateX(pe/2).scale(1,1,.55).translate(h.x-.6,h.y,ee+h.t+.3),_=ee+h.t+.06,v=Eo([[h.x+3.4,h.y+7.9,_],[h.x+3.45,h.y+6.8,_],[h.x+3.4,h.y+5.6,_]],.09,{seg:8,radial:6}),S=Eo([[h.x+7.9,h.y-1.6,_],[h.x+6.9,h.y-1.6,_],[h.x+5.6,h.y-1.65,_]],.09,{seg:8,radial:6});l.push(jt("antena_gps_ceramica",[[m,[i.ceramica_borda,i.ceramica_antena,i.ceramica_borda]],[p,i.estanho],[x,i.estanho],[v,i.ouro],[S,i.ouro]],[h.x,h.y,ee+h.t/2])),l.push(jt("chave_liga_desliga",[[ke(an(f.w/2-.1,f.h/2-.1,.3,f.x,f.y),ee+.05,ee+1.45,.1,{segs:1}),i.estanho],[ue(4.6,1.3,.06,f.x,f.y,ee+1.47),i.fundo_contato],[ue(1.6,1.25,1,f.x-1,f.y,ee+1.95),i.chave_alavanca],...[[-1,-1],[1,-1],[-1,1],[1,1]].map(([F,$])=>[Yn(.8,.6,.3,f.x+F*(f.w/2+.25),f.y+$*1.1),i.estanho])],[f.x,f.y,ee+1]));let E=new Mn;{let F=d.w/2,$=d.h/2,ct=.9;E.moveTo(-F+.5,$),E.lineTo(F-.5,$),E.quadraticCurveTo(F,$,F,$-.5),E.lineTo(F,-$+ct),E.lineTo(F-ct,-$),E.lineTo(-F+ct,-$),E.lineTo(-F,-$+ct),E.lineTo(-F,$-.5),E.quadraticCurveTo(-F,$,-F+.5,$)}let T=d.w/2-.4,R=d.h/2-.4,b=new ci;b.moveTo(-T,R),b.lineTo(T,R),b.lineTo(T,-R+.5),b.lineTo(T-.6,-R),b.lineTo(-T+.6,-R),b.lineTo(-T,-R+.5),b.closePath(),E.holes.push(b);let M=ke(E,ee,ee+d.t).translate(d.x,d.y,0);l.push(jt("conector_micro_usb",[[M,i.metal_usb],[ue(d.w-.8,d.h-.8,.1,d.x,d.y,ee+.05),i.fundo_contato],[ue(5,.6,1.7,d.x,d.y+.25,ee+.9),i.smd_preto],[ue(4.2,.08,1.2,d.x,d.y-.08,ee+1.1),i.ouro],[Yn(1,2.2,.3,d.x-4.3,d.y),i.metal_usb],[Yn(1,2.2,.3,d.x+4.3,d.y),i.metal_usb]],[d.x,d.y,ee+d.t/2]));let L=ee+1.15,U=an(7.4,7.9,.8,g.x,g.y+.4);for(let F of[4.6,-3.8])for(let $ of[-4.5,-1.5,1.5,4.5])U.holes.push(ym(g.x+$,g.y+F,.62));U.holes.push(To(3,.62,.6,g.x,g.y+.4));let B=[[ke(an(g.w/2,g.h/2,.6,g.x,g.y),ee,L),i.plastico_sim],[ke(U,L,L+.3,.06,{segs:1,curve:8}),i.metal_sim],[new Ii(.42,.42,14.6,16).rotateZ(pe/2).translate(g.x,g.y-7.7,L+.05),i.metal_sim]];for(let F of[4.6,-3.8])for(let $ of[-4.5,-1.5,1.5,4.5])B.push([ue(1,1.7,.1,g.x+$,g.y+F,L-.05),i.ouro]);for(let F=0;F<7;F++)B.push([Yn(.5,1.5,.22,g.x-4.8+F*1.6,g.y+g.h/2+.6),i.ouro]);for(let[F,$]of[[-1,-5],[1,-5],[-1,4],[1,4]])B.push([Yn(.8,2.2,.5,g.x+F*(g.w/2+.35),g.y+$),i.metal_sim]);l.push(jt("porta_sim",B,[g.x,g.y,ee+.8])),l.push(jt("leds_status",y.flatMap((F,$)=>[[Yn(1,.8,.6,F.x,F.y),$?i.led_status_2:i.led_status_1],[Yn(.3,.8,.5,F.x-.65,F.y),i.estanho],[Yn(.3,.8,.5,F.x+.65,F.y),i.estanho]]),[0,y[0].y,ee+.3])),l.push(jt("diodos_frente",mi.diodes.flatMap(F=>bm(F.x,F.y,"f",i)),[6.6,28.2,ee+1])),l.push(jt("componentes_smd_frente",vm(mi,"f",i),[0,20,ee+.3]));let{cap:P,soic:O,shield:H,ind:W,tant:G}=qn,j=new Ii(P.r,P.r,P.h-.6,40,1).rotateX(-pe/2).translate(P.x,P.y,Xe-.6-(P.h-.6)/2);l.push(jt("capacitor_eletrolitico",[[j,[i.capacitor_lata,i.capacitor_topo,i.capacitor_lata]],[Hn(6.6,6.6,.6,P.x,P.y),i.smd_preto],[Hn(1.1,1.6,.4,P.x,P.y+3.4),i.estanho],[Hn(1.1,1.6,.4,P.x,P.y-3.4),i.estanho]],[P.x,P.y,Xe-P.h/2]));let tt=[[Hn(O.w,O.h,1.5,O.x,O.y,.12),i.smd_preto]];for(let F=0;F<4;F++)for(let $ of[-1,1])tt.push([Hn(.42,1,.2,O.x-1.9+F*1.27,O.y+$*2.35,.05),i.estanho]);l.push(jt("ci_soic8",tt,[O.x,O.y,Xe-.8]));let J=new Mn;J.moveTo(H.x0+H.nx,H.y0),J.lineTo(H.x1,H.y0),J.lineTo(H.x1,H.y1),J.lineTo(H.x0,H.y1),J.lineTo(H.x0,H.y0+H.ny),J.lineTo(H.x0+H.nx,H.y0+H.ny),J.closePath();let mt=ke(J,Xe-H.h,Xe,.12,{segs:1});vr(mt,0,12,0,12),l.push(jt("blindagem_metalica",[[mt,i.metal_blindagem]],[(H.x0+H.x1)/2,(H.y0+H.y1)/2,Xe-H.h/2]));let Z=mh(Lc(ke(an(W.s/2-.25,W.s/2-.25,.6,W.x,W.y),Xe-W.h,Xe,.25,{segs:2})),W.x-W.s/2,W.x+W.s/2,W.y-W.s/2,W.y+W.s/2);return l.push(jt("indutor_470",[[Z,[i.indutor_topo,i.indutor,i.indutor]]],[W.x,W.y,Xe-W.h/2])),l.push(jt("capacitor_tantalo",[[Hn(G.w,G.h,1.9,G.x,G.y),i.tantalo],[Hn(G.w+.02,.6,1.92,G.x,G.y+G.h/2-.5),i.tantalo_faixa],[Hn(1.8,.4,1,G.x,G.y+G.h/2+.15),i.estanho],[Hn(1.8,.4,1,G.x,G.y-G.h/2-.15),i.estanho]],[G.x,G.y,Xe-1])),l.push(jt("diodos_verso",qn.diodes.flatMap(F=>bm(F.x,F.y,"b",i)),[-9.3,20,Xe-1])),l.push(jt("componentes_smd_verso",vm(qn,"b",i),[0,20,Xe-.3])),br("placa_j4_lite",[0,(n+s)/2,(Xe+ee)/2],l)}function GS(i){let{BAT_X:t,BAT_Y0:e,BAT_Y1:n,BAT_TAPE:s,BAT_Z0:r,BAT_Z1:a}=it,o=t-.6,c=e,u=s,l=ke(an(o-.85,(u-c)/2-.85,.5,0,(c+u)/2),r,a,.85,{bevelT:1.1,segs:5});vr(l,-10,10,-34,2);let f=[-1,1].map(x=>new Da(.5,u-c-1.6,4,12).translate(x*(o+.25),(c+u)/2,(r+a)/2)),h=ke(an(t-.2-.4,(n-(s-.6))/2-.4,.5,0,(n+s-.6)/2),r+.25,a-.25,.4,{segs:3}),d=[[ue(o*2-1,1.8,.3,0,s-.2+.9,(r+a)/2),i.bateria_aluminio],[ue(16.5,2.8,.55,0,-1.4,4.35),i.pcb_protecao_bateria],[ue(2.9,1.6,.6,-3,-1.4,4.92),i.smd_preto],[ue(2,2,.55,2.4,-1.4,4.9),i.smd_preto],[ue(3,3.4,.12,-6.2,-3.4,4.2),i.niquel],[ue(3,3.4,.12,6.2,-3.4,4.2),i.niquel]],g=Eo([[4.2,1,4.7],[3,2.1,4.95],[-3,2.25,5.15],[-7.2,2.5,5.45],[-8.6,2.9,5.84]],.45),y=Eo([[5.4,1,4.7],[4.4,1.7,4.85],[-2,1.85,4.95],[-5.2,2.3,5.3],[-6.2,2.9,5.84]],.45),m=qn.batPads.map(x=>new Js(.75,16,8).scale(1,1,.45).translate(x.x,x.y,Xe-.05)),p=[jt("bolsa_aluminio",[[l,i.bateria_aluminio],...f.map(x=>[x,i.bateria_aluminio])],[0,(c+u)/2,(r+a)/2]),jt("fita_kapton_amarela",[[h,i.fita_kapton]],[0,(n+s)/2,(r+a)/2]),jt("circuito_protecao_bateria",d,[0,-1.6,4.3]),jt("fios_bateria",[[g,i.fio_vermelho],[y,i.fio_preto],...m.map(x=>[x,i.estanho])],[-2,2.2,5.2])];return br("bateria_j4_lite",[0,(e+n)/2,(r+a)/2],p)}function WS(i){let t=(S,E,T,R=2)=>({y:S,a:E,b:T,n:R}),e=Ic([t(40.3,4.6,2.4,3.2),t(40.45,5.1,2.8,3.2),t(41.25,5.1,2.8,3.2),t(41.4,4.6,2.6,3),t(41.45,3.55,3.12,2.4),t(43.1,3.55,3.12,2.4),t(43.35,3.95,3.5),t(43.65,4.3,3.85),t(44.35,4.3,3.85),t(44.65,3.75,3.3),t(44.9,3.5,3.05),t(45.15,3.9,3.45),t(45.45,4.25,3.8),t(46.15,4.25,3.8),t(46.45,3.7,3.25),t(46.7,3.45,3),t(46.95,3.85,3.4),t(47.25,4.15,3.7),t(47.95,4.15,3.7),t(48.25,3.6,3.15),t(48.45,2.9,2.55)],{seg:56}),n=Ic([t(48,2.4,2.1),t(61.8,2.4,2.1)],{caps:[!1,!1]}),s=[t(61,2.55,2.3),t(61.25,2.95,2.7),t(61.6,3.1,2.85)];for(let S=0;S<=26;S++){let E=61.9+S*.5,T=Math.sin(S*1.7)*.05+Math.sin(S*.6)*.04;s.push(t(E,3.15+T+S*.004,2.9+T+S*.003))}s.push(t(75.4,3.2,2.95),t(75.7,3.05,2.8));let r=Ic(s,{seg:48}),a=Ic([t(75.2,3.1,2.85),t(76.6,3.4,2.85,2.4),t(78,4.1,2.82,3),t(79.4,4.85,2.8,3.6),t(80.9,5.2,2.8,4),t(81.1,5,2.65,4)],{seg:48}),o=new vo;o.attributes=["position","uv","normal"],o.useGroups=!0;let c=Dc(new Mn,-5.2,it.CZ-2.8,5.2,it.CZ+2.8,.7),u=new $s(c,{depth:9.4,bevelEnabled:!0,bevelSize:.25,bevelThickness:.25,bevelSegments:2,curveSegments:8});u.rotateX(pe/2).translate(0,80.85+9.4,0),u.clearGroups();let l=new hi(u,i.conector_corpo);l.updateMatrixWorld();let f=[-3.45,-1.15,1.15,3.45],h=new hi(er(f.map(S=>wo(ue(1.8,4,3.4,S,89,it.CZ)))),i.fundo_contato);h.updateMatrixWorld(),l=o.evaluate(l,h,1);let d=[];for(let S of f)d.push([new Ii(.55,.55,3.3,18).translate(S,88.85,it.CZ+.15),i.contato_metal]),d.push([ue(1.25,3.3,.18,S,88.85,it.CZ-1.45),i.contato_metal]);let g=[-1,1].map(S=>{let E=new Wn(.7,5.6,4.6);return E.translate(0,-2.6,0).rotateZ(S*.22).translate(S*5.55,89.2,it.CZ),[E,i.conector_corpo]}),y=[-1,1].map(S=>[ue(.5,2.6,4.4,S*6.5,85,it.CZ),i.conector_corpo]),m=[ue(2.4,6,.5,0,84.6,it.CZ+3),i.conector_corpo],p=[],x=[],_=[i.fio_vermelho,i.fio_preto,i.fio_laranja,i.fio_amarelo];xr.slice(0,4).forEach((S,E)=>{let T=-2.1+E*1.4;p.push([Eo([[T,40.6,it.CZ],[T+(S.x-T)*.4,38.4,it.CZ+.9],[S.x,35.6,ee+1.15],[S.x,34.2,ee+.85],[S.x,33.75,ee+.55]],.55),_[E]]),x.push([new Ii(.36,.36,.9,12).rotateX(pe/2).translate(S.x,S.y+.15,ee+.3),i.estanho]),x.push([new Js(.85,16,8).scale(1,1,.42).translate(S.x,S.y,ee),i.estanho])});let v=[jt("passa_fios",[[e,i.borracha_passa_fios]],[0,44.4,it.CZ]),jt("cabo_revestido",[[n,i.cabo_revestimento]],[0,55,it.CZ]),jt("termorretratil",[[r,i.termorretratil]],[0,68.4,it.CZ]),jt("bota_conector",[[a,i.conector_corpo]],[0,78.2,it.CZ]),jt("conector_4_vias",[[l.geometry,l.material],...d,...g,...y,m],[0,85.5,it.CZ]),jt("fios_internos",[...p,...x],[-2,37,it.CZ+.5])];return br("chicote_j4_lite",[0,it.HL,it.CZ],v)}function Mm(){let i=OS(),t=new vn;t.name="J4_Lite";let e={carcaca_j4_lite:FS(i),placa_j4_lite:VS(i),bateria_j4_lite:GS(i),protecao_interna_j4_lite:kS(i),tampa_externa_j4_lite:zS(i),chicote_j4_lite:WS(i)};return gi.forEach((n,s)=>{let r=e[n.id];r.userData={...r.userData,conjunto:n.n,nome:n.nome,descricao:n.desc,ordem_montagem:[1,2,3,4][["bateria_j4_lite","placa_j4_lite","protecao_interna_j4_lite","tampa_externa_j4_lite"].indexOf(n.id)]??(n.id==="chicote_j4_lite"?"acompanha a placa":"base"),posicao_montado:r.position.toArray().map(a=>+a.toFixed(4)),posicao_explodido:[r.position.x,r.position.y,+(r.position.z+yr[n.id]).toFixed(4)],escala:"relativa (1 unidade \u2248 1 mm estimado pelas fotos)"},t.add(r)}),e.placa_j4_lite.userData.aproximacoes="Componentes sob a blindagem e o lado escondido pela bateria n\xE3o foram inventados: a \xE1rea fica lisa, como na placa nua.",e.bateria_j4_lite.userData.aproximacoes="O circuito de prote\xE7\xE3o sob a fita amarela \xE9 uma aproxima\xE7\xE3o.",e.chicote_j4_lite.userData.aproximacoes="Contatos internos do conector aproximados.",{root:t,sets:e,M:i}}var Ne={x0:-152,x1:128,z0:-94,z1:86},Ao="#231d2e",we="rgba(43,36,54,0.66)",Ve="#6B4FA0",gh="#f6f5f9",XS='"JetBrains Mono", "DejaVu Sans Mono", ui-monospace, monospace',_h='"Inter", "DejaVu Sans", Arial, sans-serif';function Tm(i){let t=Math.round((Ne.x1-Ne.x0)*i),e=Math.round((Ne.z1-Ne.z0)*i),n=()=>{let F=document.createElement("canvas");return F.width=t,F.height=e,F},s=F=>(F-Ne.x0)*i,r=F=>(F-Ne.z0)*i,a=F=>F*i,o=n(),c=o.getContext("2d");c.fillStyle=gh,c.fillRect(0,0,t,e);let u=777,l=()=>(u=u*16807%2147483647)/2147483647;for(let F=0;F<t*e/260;F++)c.fillStyle=`rgba(${l()>.5?"255,255,255":"110,100,140"},${l()*.045})`,c.fillRect(l()*t,l()*e,1+l()*3,1);c.lineWidth=Math.max(1,a(.08));for(let F=Math.ceil(Ne.x0/5)*5;F<=Ne.x1;F+=5)c.strokeStyle=F%25===0?"rgba(107,79,160,0.16)":"rgba(107,79,160,0.07)",c.beginPath(),c.moveTo(s(F),0),c.lineTo(s(F),e),c.stroke();for(let F=Math.ceil(Ne.z0/5)*5;F<=Ne.z1;F+=5)c.strokeStyle=F%25===0?"rgba(107,79,160,0.16)":"rgba(107,79,160,0.07)",c.beginPath(),c.moveTo(0,r(F)),c.lineTo(t,r(F)),c.stroke();c.strokeStyle="rgba(43,36,54,0.6)",c.lineWidth=a(.35),c.strokeRect(a(4),a(4),t-a(8),e-a(8));let f=n(),h=f.getContext("2d");h.drawImage(o,0,0),h.lineJoin=h.lineCap="round";let d=(F,$=.42,ct=Ao,ft=null,Et=!1)=>{h.strokeStyle=ct,h.lineWidth=a($),h.setLineDash(ft?ft.map(a):[]),h.beginPath(),F.forEach(([Tt,bt],At)=>At?h.lineTo(s(Tt),r(bt)):h.moveTo(s(Tt),r(bt))),Et&&h.closePath(),h.stroke(),h.setLineDash([])},g=(F,$,ct,ft,Et,Tt=.32,bt=Ao,At=null)=>{h.strokeStyle=bt,h.lineWidth=a(Tt),h.setLineDash(At?At.map(a):[]),h.beginPath(),h.roundRect(s(F),r($),a(ct-F),a(ft-$),a(Et)),h.stroke(),h.setLineDash([])},y=(F,$,ct,ft=2.2,{font:Et=XS,weight:Tt=500,color:bt=Ao,align:At="left",base:D="alphabetic",rot:ut=0,track:Q=0}={})=>{h.save(),h.translate(s($),r(ct)),h.rotate(ut),h.fillStyle=bt,h.font=`${Tt===500?600:Tt} ${a(ft*1.12)}px ${Et}`,h.textAlign=At,h.textBaseline=D,"letterSpacing"in h&&(h.letterSpacing=`${a(Q)}px`),h.fillText(F,0,0),h.restore()},m=(F,$,ct,ft,Et,Tt,{vertical:bt=!1}={})=>{h.strokeStyle=Ve,h.fillStyle=Ve,h.lineWidth=a(.22);let At=(D,ut,Q,lt)=>{let K=Math.atan2(lt,Q);h.beginPath(),h.moveTo(s(D),r(ut)),h.lineTo(s(D)-a(1.8)*Math.cos(K-.3),r(ut)-a(1.8)*Math.sin(K-.3)),h.lineTo(s(D)-a(1.8)*Math.cos(K+.3),r(ut)-a(1.8)*Math.sin(K+.3)),h.closePath(),h.fill()};if(bt){let D=F+Tt;d([[F,$],[D+Math.sign(Tt)*1.5,$]],.22,Ve),d([[ct,ft],[D+Math.sign(Tt)*1.5,ft]],.22,Ve),d([[D,$],[D,ft]],.3,Ve),At(D,$,0,-1),At(D,ft,0,1),y(Et,D+(Tt>0?1.6:-1.6),($+ft)/2,2.3,{color:Ve,align:Tt>0?"left":"right",base:"middle",weight:600})}else{let D=$+Tt;d([[F,$],[F,D+Math.sign(Tt)*1.5]],.22,Ve),d([[ct,ft],[ct,D+Math.sign(Tt)*1.5]],.22,Ve),d([[F,D],[ct,D]],.3,Ve),At(F,D,-1,0),At(ct,D,1,0),y(Et,(F+ct)/2,D-1,2.3,{color:Ve,align:"center",weight:600})}},p=(F,$,ct,ft,Et)=>{d([[ft,Et],[$,ct]],.24,Ve),h.fillStyle=Ve,h.beginPath(),h.arc(s(ft),r(Et),a(.55),0,7),h.fill(),h.fillStyle=gh,h.strokeStyle=Ve,h.lineWidth=a(.28),h.beginPath(),h.arc(s($),r(ct),a(2.6),0,7),h.fill(),h.stroke(),y(F,$,ct+.05,2.2,{color:Ve,align:"center",base:"middle",weight:700})},x=it.HL,_=it.HW;y("VISTA FRONTAL",-95,-22.5,2.4,{weight:700,track:.4}),y("tampa externa para cima \xB7 chicote \xE0 esquerda",-95,-19.6,1.7,{color:we}),g(-x,-_,x,_,it.CR,.42),h.strokeStyle=we,h.lineWidth=a(.16),h.beginPath(),h.moveTo(s(-40.2),r(-11.2)),h.quadraticCurveTo(s(0),r(-(2*9.4-11.2)),s(40.2),r(-11.2)),h.lineTo(s(40.2),r(11.2)),h.quadraticCurveTo(s(0),r(2*9.4-11.2),s(-40.2),r(11.2)),h.closePath(),h.stroke(),d([[-35,-11],[39,-11],[39,11],[-35,11]],.22,we,[1.2,.8],!0),g(-11.6-9,-9,-11.6+9,9,.5,.16,we,[1.2,.8]),g(15-8.7,-8.1,15+8.7,8.1,.6,.16,we,[1.2,.8]),g(-1.5,-10,34,10,1.2,.14,"rgba(107,79,160,0.55)",[2.4,.8,.4,.8]),d([[-96,0],[48,0]],.16,"rgba(107,79,160,0.5)",[5,1,1,1]);let v=[[-43.6,4.3],[-44.3,4.3],[-44.9,3.5],[-45.5,4.25],[-46.2,4.25],[-46.7,3.45],[-47.25,4.15],[-47.95,4.15],[-48.45,2.9],[-48.5,2.4],[-61.2,2.4],[-61.25,2.95],[-61.8,3.1],[-75.4,3.2],[-76.6,3.4],[-78,4.1],[-79.4,4.85],[-80.9,5.2],[-90.5,5.2]];d(v.map(([F,$])=>[F,-$]),.49),d(v.map(([F,$])=>[F,$]),.49),d([[-90.5,-5.2],[-90.5,5.2]],.49),d([[-61.5,-2.4],[-61.5,2.4]],.22,we),d([[-75.6,-3.2],[-75.6,3.2]],.22,we),d([[-80.9,-5.2],[-80.9,5.2]],.27),d([[-89,-5.6],[-84,-7.6]],.41),d([[-89,5.6],[-84,7.6]],.41);for(let F of[-3.45,-1.15,1.15,3.45])d([[-90.5,F],[-87.2,F]],.19,we);m(-x,-_,x,-_,"L = 1,00",-8),m(x,-_,x,_,"0,31 L",6,{vertical:!0}),m(-90.5,_,-x,_,"chicote \u2248 0,55 L",8);let S=-52;y("VISTA LATERAL",-95,S-15,2.4,{weight:700,track:.4});let E=S+8,T=S-8;h.strokeStyle=Ao,h.lineWidth=a(.42),h.beginPath(),h.roundRect(s(-x),r(T+3),a(2*x),a(13),[a(.6),a(.6),a(2.2),a(2.2)]),h.stroke(),h.beginPath(),h.roundRect(s(-x),r(T),a(2*x),a(3.1),a(1.2)),h.stroke(),d([[-x+2,T+3.2],[x-2,T+3.2]],.19,we),g(-34,E-18.6,22,E-12.6,.6,.14,we,[1.2,.8]);let R=E-it.CZ,b=[[-43.6,3.85],[-44.3,3.85],[-44.9,3.05],[-45.5,3.8],[-46.2,3.8],[-46.7,3],[-47.25,3.7],[-47.95,3.7],[-48.45,2.55],[-48.5,2.1],[-61.2,2.1],[-61.25,2.7],[-61.8,2.85],[-75.4,2.95],[-80.9,2.8],[-90.5,2.8]];d(b.map(([F,$])=>[F,R-$]),.49),d(b.map(([F,$])=>[F,R+$]),.49),d([[-90.5,R-2.8],[-90.5,R+2.8]],.49),d([[-80.9,R-2.8],[-80.9,R+2.8]],.27),m(x,T,x,E,"0,19 L",6,{vertical:!0}),y("tampa externa",-20,T-2.2,1.7,{color:we}),y("carca\xE7a",0,E+3.6,1.7,{color:we});let M=92,L=.36,U=-26;y("VISTA EXPLODIDA",62,-86,2.4,{weight:700,track:.4}),y("escala reduzida \xB7 montagem de baixo para cima",62,-83,1.7,{color:we});let B=F=>U-F*L,P=x*L;d([[M-P,B(13)],[M-P,B(0)],[M+P,B(0)],[M+P,B(13)]],.43),d([[M-P+.6,B(13)],[M-P+.6,B(1.5)],[M+P-.6,B(1.5)],[M+P-.6,B(13)]],.19,we),g(M-1.5*L,B(22+5.7),M+34*L,B(22+1.7),.4,.3),g(M-35*L,B(36+6.9),M+39*L,B(36+5.9),.1,.3),g(M-20.6*L,B(36+9.3),M-2.6*L,B(36+6.9),.1,.24),g(M+6.2*L,B(36+8.4),M+23.8*L,B(36+6.9),.1,.2),d([[M-P,B(36+6.6)],[M-P-47*L,B(36+6.6)]],.68),g(M-P-47*L-.4,B(36+6.6)-1,M-P-37*L,B(36+6.6)+1,.3,.3),g(M-41.3*L,B(47+11.1),M+41.3*L,B(47+9.9),.1,.3),g(M-P,B(74),M+P,B(71),.6,.32),d([[M+P+5,B(0)],[M+P+5,B(72)]],.19,"rgba(107,79,160,0.6)",[2,1]),p("05",M+P+9,B(64),M+P-1,B(58+14.5)),p("04",M+P+9,B(52),M+41.3*L-1,B(47+10.5)),p("02",M+P+9,B(41),M+37*L,B(36+6.4)),p("03",M+P+9,B(28),M+30*L,B(22+3.7)),p("01",M+P+9,B(8),M+P-.4,B(8)),p("06",M-P-12,B(52),M-P-42*L,B(36+6.6)-.6);let O=62,H=-18,W=5.2;y("LISTA DE CONJUNTOS",O,H-3,2.4,{weight:700,track:.4}),d([[O,H],[124,H]],.41),gi.forEach((F,$)=>{let ct=H+($+1)*W;y(F.n,O+1,ct-1.6,2.1,{weight:700,color:Ve}),y(F.nome,O+7,ct-1.6,2.1,{font:_h,weight:600}),y(F.id,O+31,ct-1.6,1.75,{color:we}),d([[O,ct],[124,ct]],.16,"rgba(43,36,54,0.3)")});let G=30;y("SEQU\xCANCIA DE MONTAGEM",-95,G,2.4,{weight:700,track:.4}),["Bateria no verso da placa","Conjunto na carca\xE7a","Prote\xE7\xE3o interna","Tampa externa"].forEach((F,$)=>{let ct=-95+$*44;h.fillStyle=Ve,h.beginPath(),h.arc(s(ct+2.2),r(G+6.2),a(2.2),0,7),h.fill(),y(String($+1),ct+2.2,G+6.3,2.2,{color:gh,align:"center",base:"middle",weight:700}),y(F,ct+5.6,G+7,2,{font:_h,weight:600}),$<3&&d([[ct+38.5,G+6.2],[ct+42,G+6.2]],.41,Ve)}),y("Desmontagem: ordem inversa. O chicote acompanha a placa.",-95,G+13,1.8,{color:we});let tt=62,J=44,mt=124,Z=82;return h.strokeStyle=Ao,h.lineWidth=a(.35),h.strokeRect(s(tt),r(J),a(mt-tt),a(Z-J)),d([[tt,J+13],[mt,J+13]],.27),d([[tt,J+25],[mt,J+25]],.27),d([[tt+31,J+25],[tt+31,Z]],.27),y("REALTRACKER",tt+2,J+5.4,2,{weight:700,color:Ve,track:.6}),y("J4 LITE \xB7 COMPOSI\xC7\xC3O 3D",tt+2,J+10.6,3.4,{font:_h,weight:800}),y("6 conjuntos separados \xB7 uma \xFAnica placa principal",tt+2,J+17.4,1.8,{color:we}),y("Propor\xE7\xF5es tiradas das fotos do equipamento",tt+2,J+21.6,1.8,{color:we}),y("ESCALA",tt+2,J+29.4,1.6,{color:we}),y("RELATIVA",tt+2,J+34.2,2.4,{weight:700}),y("FOLHA",tt+33,J+29.4,1.6,{color:we}),y("01 / 01",tt+33,J+34.2,2.4,{weight:700}),y("Detalhes ocultos: aproxima\xE7\xF5es",-95,80,1.7,{color:we}),{paper:o,ink:f,W:t,H:e}}var Ge=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),gs=(i,t,e)=>i+(t-i)*e,Uc=i=>i*i*(3-2*i),Lm=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,_s=(i,t,e)=>Ge((i-t)/(e-t)),wr=new URLSearchParams(location.search),Th=()=>window.innerWidth<820||window.innerWidth/window.innerHeight<.9,Dm=window.matchMedia("(prefers-reduced-motion: reduce)").matches,ys=wr.has("film"),Nm=document.getElementById("scene"),Je=new Zr({canvas:Nm,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:ys}),xh=()=>Math.min(window.devicePixelRatio||1,2),wn=ys?1:Math.min(window.devicePixelRatio||1,Th()?1.5:1.75);Je.setPixelRatio(wn);Je.setSize(window.innerWidth,window.innerHeight);Je.toneMapping=du;Je.toneMappingExposure=1.02;Je.shadowMap.enabled=!0;Je.shadowMap.type=fu;var Um=new Gt("#e9e8ef"),qe=new js;qe.background=Um;qe.fog=new wa(Um,520,1250);var ve=new $e(35,window.innerWidth/window.innerHeight,1,4e3),qS=new Zs(Je);qe.environment=qS.fromScene(new Ga(Je),.04).texture;qe.add(new Ba("#ffffff","#c9c6d4",.85));var mn=new io("#fffaf3",2.1);mn.position.set(-110,210,150);mn.target.position.set(-15,0,0);mn.castShadow=!0;mn.shadow.mapSize.set(2048,2048);Object.assign(mn.shadow.camera,{left:-170,right:170,top:150,bottom:-150,near:40,far:520});mn.shadow.bias=-4e-4;mn.shadow.normalBias=.25;mn.shadow.radius=4;mn.shadow.autoUpdate=!1;qe.add(mn,mn.target);var Bm=new io("#e6e0ff",1.15);Bm.position.set(140,120,-220);qe.add(Bm);var Oc=new ie(new ai(4e3,4e3),new Nn({color:"#e4e3ea",roughness:.95}));Oc.rotation.x=-Math.PI/2;Oc.position.y=-.3;Oc.receiveShadow=!0;qe.add(Oc);var Fc={uReveal:{value:-.1}},Mr=new Nn({color:"#ffffff",roughness:.92});Mr.onBeforeCompile=i=>{i.uniforms.uReveal=Fc.uReveal,i.uniforms.inkMap={value:Mr.userData.ink},i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uReveal;
uniform sampler2D inkMap;`).replace("#include <map_fragment>",`#include <map_fragment>
      float dRev = vMapUv.x * 0.72 + (1.0 - vMapUv.y) * 0.28;
      float mRev = 1.0 - smoothstep(uReveal - 0.03, uReveal, dRev);
      diffuseColor.rgb = mix(diffuseColor.rgb, texture2D(inkMap, vMapUv).rgb, mRev);
      float edge = smoothstep(uReveal - 0.025, uReveal, dRev) * (1.0 - smoothstep(uReveal, uReveal + 0.004, dRev));
      totalEmissiveRadiance += vec3(0.42, 0.29, 0.86) * edge * 1.4 * step(uReveal, 1.05);`)};var Cr=new ie(new ai(Ne.x1-Ne.x0,Ne.z1-Ne.z0),Mr);Cr.rotation.x=-Math.PI/2;Cr.position.set((Ne.x0+Ne.x1)/2,0,(Ne.z0+Ne.z1)/2);Cr.receiveShadow=!0;Cr.visible=!1;qe.add(Cr);var YS=performance.now(),{root:Om,sets:An,M:Ar}=Mm(),ZS=performance.now()-YS,zc=new vn;zc.quaternion.setFromRotationMatrix(new Bt().makeBasis(new A(0,0,-1),new A(-1,0,0),new A(0,1,0)));zc.position.y=.06;zc.add(Om);qe.add(zc);var yi={uScan:{value:-1e4},uGlow:{value:0}},jS=`
  if (vScanX > uScan) discard;`;function Fm(i){i.onBeforeCompile=t=>{t.uniforms.uScan=yi.uScan,t.uniforms.uGlow=yi.uGlow,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying float vScanX;`).replace("#include <project_vertex>",`#include <project_vertex>
  vScanX = (modelMatrix * vec4(transformed, 1.0)).x;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vScanX;
uniform float uScan;
uniform float uGlow;`).replace("void main() {","void main() {"+jS),t.fragmentShader.includes("#include <emissivemap_fragment>")&&(t.fragmentShader=t.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      totalEmissiveRadiance += vec3(0.45, 0.32, 1.0) * uGlow * (1.0 - smoothstep(0.0, 2.6, uScan - vScanX)) * 3.0;`))}}var zm=new Yr({depthPacking:mu});Fm(zm);var Hm=new Set;Om.traverse(i=>{i.isMesh&&(i.castShadow=!0,i.receiveShadow=!0,i.customDepthMaterial=zm,(Array.isArray(i.material)?i.material:[i.material]).forEach(t=>Hm.add(t)))});var km=Je.capabilities.getMaxAnisotropy();for(let i of Hm)Fm(i),i.envMapIntensity=i.metalness>.5?1:.85,i.map&&(i.map.anisotropy=km);Ar.texto_on_off.polygonOffset=!0;Ar.texto_on_off.polygonOffsetFactor=-2;for(let i of["painel_tampa","painel_fundo","etiqueta_imei"])Ar[i].polygonOffset=!0,Ar[i].polygonOffsetFactor=-1;var Vm=gi.map(i=>i.id),ki={};for(let i of Vm)ki[i]={pos:An[i].position.clone(),mat:An[i].matrix.clone()};var $S=new Bt().makeTranslation(ki.placa_j4_lite.pos).invert(),JS=$S.clone().multiply(new Bt().makeTranslation(ki.chicote_j4_lite.pos)),KS=new Bt,Em=new pn,QS=new A,wm=new A;function Po(i){for(let s of["carcaca_j4_lite","bateria_j4_lite","protecao_interna_j4_lite","tampa_externa_j4_lite"])An[s].position.copy(ki[s].pos),An[s].position.z+=i.z[s]||0;let t=An.placa_j4_lite;t.position.copy(ki.placa_j4_lite.pos),t.position.z+=i.z.placa_j4_lite||0,t.rotation.set(0,i.flip||0,0),t.updateMatrix(),KS.multiplyMatrices(t.matrix,JS).decompose(wm,Em,QS),An.chicote_j4_lite.position.copy(wm),An.chicote_j4_lite.quaternion.copy(Em);for(let s of Vm)An[s].visible=i.hide?!i.hide[s]:!0;let[e,n]=i.led||[0,0];Ar.led_status_1.emissive.setRGB(.15*e,1*e,.45*e),Ar.led_status_2.emissive.setRGB(.2*n,.5*n,1*n)}var t1=(i,t)=>i>0?[i*(.25+.75*(Math.sin(t/260)>0?1:.15)),i*(.25+.75*(Math.sin(t/140+1)>.3?1:.1))]:[0,0];function xi(i,t,e=0){let n=e;for(let[s,r,a]of t)if(i<=s||(n=gs(n,a,Lm(_s(i,s,r))),i<r))break;return n}var zi=[[.852,.878],[.884,.912],[.918,.942],[.948,.972]];function Gm(i,t=null){let e=yr;return{z:{tampa_externa_j4_lite:xi(i,[[.305,.365,e.tampa_externa_j4_lite],[.632,.668,e.tampa_externa_j4_lite+75],[.8,.836,e.tampa_externa_j4_lite],[...zi[3],0]]),protecao_interna_j4_lite:xi(i,[[.39,.45,e.protecao_interna_j4_lite],[.632,.668,e.protecao_interna_j4_lite+75],[.8,.836,e.protecao_interna_j4_lite],[...zi[2],0]]),placa_j4_lite:xi(i,[[.48,.54,e.placa_j4_lite],[...zi[1],0]]),bateria_j4_lite:xi(i,[[.48,.54,e.placa_j4_lite],[.565,.615,e.bateria_j4_lite],[...zi[0],e.placa_j4_lite],[...zi[1],0]])},flip:xi(i,[[.712,.748,Math.PI],[.776,.806,0]]),led:t1(_s(i,.645,.66)*(1-_s(i,.7,.715)),t??i*2400)}}var e1=[{p:0,pos:[16,350,.01],tgt:[16,0,-4],fov:35},{p:.095,pos:[12,318,.01],tgt:[12,0,-4],fov:35},{p:.205,pos:[60,165,205],tgt:[-22,4,0],fov:33},{p:.255,pos:[-76,80,212],tgt:[-20,6,0],fov:33},{p:.3,pos:[62,120,185],tgt:[-14,12,0],fov:33},{p:.372,pos:[82,150,205],tgt:[-12,30,0],fov:33},{p:.462,pos:[24,190,128],tgt:[-4,40,0],fov:33},{p:.552,pos:[118,135,215],tgt:[-14,30,0],fov:33},{p:.628,pos:[86,36,158],tgt:[6,30,0],fov:33},{p:.668,pos:[26,196,104],tgt:[4,42,2],fov:31},{p:.708,pos:[12,188,96],tgt:[4,43,2],fov:31},{p:.752,pos:[-10,192,100],tgt:[4,43,2],fov:31},{p:.778,pos:[-24,186,94],tgt:[4,43,2],fov:31},{p:.814,pos:[-136,92,96],tgt:[-60,42,0],fov:31},{p:.842,pos:[-116,84,110],tgt:[-58,42,0],fov:31},{p:.872,pos:[104,145,212],tgt:[-14,32,0],fov:33},{p:.972,pos:[26,128,222],tgt:[-18,14,0],fov:33},{p:1,pos:[70,96,236],tgt:[-20,6,0],fov:33}],Am=new li,Rm=new A;function yh(i,t){let e=new A(...i.tgt),n=new A(...i.pos);if(t<1.3){let s=Ge(1.3/t,1,2.4)*(t<.9?1:.92);n.sub(e).multiplyScalar(Math.max(1,s)).add(e)}return{pos:n,tgt:e,fov:i.fov}}function n1(i,t,e){let n=i.tgt.clone().lerp(t.tgt,e),s=new li().setFromVector3(Rm.copy(i.pos).sub(i.tgt)),r=new li().setFromVector3(Rm.copy(t.pos).sub(t.tgt)),a=r.theta-s.theta;return a>Math.PI&&(a-=Math.PI*2),a<-Math.PI&&(a+=Math.PI*2),Am.set(gs(s.radius,r.radius,e),gs(s.phi,r.phi,e),s.theta+a*e),{pos:new A().setFromSpherical(Am).add(n),tgt:n,fov:gs(i.fov,t.fov,e)}}function Wm(i,t,e,n="p"){let s=0;for(;s<i.length-2&&t>=i[s+1][n];)s++;let r=i[s],a=i[s+1];return n1(yh(r,e),yh(a,e),Uc(Ge((t-r[n])/(a[n]-r[n]))))}var Eh=[{from:.4,to:.47,items:[["protecao_interna_j4_lite",[0,23.5,11.6],"Acesso \xE0 chave",[-150,-70]],["protecao_interna_j4_lite",[0,-.6,11.1],"Fenda do micro-USB",[-60,-110]],["protecao_interna_j4_lite",[0,-16.4,11.1],"Janela do SIM",[90,-90]]]},{from:.505,to:.556,items:[["carcaca_j4_lite",[0,43,9],"Encaixe do passa-fios",[-150,40]],["carcaca_j4_lite",[-12.2,-10,11],"Travas da prote\xE7\xE3o",[40,80]],["carcaca_j4_lite",[11.3,-6,5.9],"Apoios da placa",[80,-60]]]},{from:.585,to:.632,items:[["bateria_j4_lite",[0,-1.6,5.4],"Fita amarela",[-140,-60]],["bateria_j4_lite",[-3,2.3,5.2],"Fios curtos at\xE9 a placa",[-170,30]],["bateria_j4_lite",[-9.8,-22,3.7],"Bolsa de alum\xEDnio",[100,70]]]},{from:.664,to:.712,items:[["placa_j4_lite",[0,11.6,9.3],"Antena GPS cer\xE2mica",[-30,-165]],["placa_j4_lite",[.6,23.5,8.9],"Chave liga/desliga",[-70,135]],["placa_j4_lite",[0,-.6,9.3],"Micro-USB",[40,-150]],["placa_j4_lite",[0,-15,8.4],"Porta-SIM",[110,-125]],["placa_j4_lite",[2.4,-26.2,7.5],"LEDs de status",[110,95]],["chicote_j4_lite",[-2.1,36.5,8],"Fios do chicote",[-110,-120]]]},{from:.748,to:.778,items:[["placa_j4_lite",[4.8,13.3,3.7],"Blindagem met\xE1lica",[70,-160]],["placa_j4_lite",[6.4,28.2,1.7],"Capacitor eletrol\xEDtico",[-10,-175]],["placa_j4_lite",[-5.7,18.7,3.1],"Indutor 470",[40,150]],["placa_j4_lite",[0,-16,5.9],"\xC1rea da bateria (lisa)",[110,110]]]},{from:.812,to:.846,items:[["chicote_j4_lite",[0,90.4,6.6],"Conector de 4 contatos",[10,-170]],["chicote_j4_lite",[-5.9,86,6.6],"Travas laterais",[40,120]],["chicote_j4_lite",[0,68,9.6],"Termorretr\xE1til",[20,-140]],["chicote_j4_lite",[0,55,4],"Cabo revestido",[-10,150]],["chicote_j4_lite",[0,45.6,10.4],"Passa-fios",[90,-110]]]}],Xm=document.getElementById("callouts");for(let i of Eh)i.els=i.items.map(([t,e,n,s])=>{let r=document.createElement("div");return r.className="co",r.innerHTML=`<i></i><b></b><span>${n}</span>`,Xm.appendChild(r),{el:r,set:t,pt:new A(...e).sub(ki[t].pos),off:s,line:r.querySelector("b"),lbl:r.querySelector("span")}});var Tr=new A;function i1(i){let t=window.innerWidth,e=window.innerHeight,n=Th()?.55:1;for(let s of Eh){let r=Ge((i-s.from)/.008)*Ge((s.to-i)/.008),a=[];for(let o of s.els){if(r<=0){o.shown&&(o.el.style.opacity=0,o.el.style.visibility="hidden",o.shown=!1);continue}An[o.set].updateWorldMatrix(!0,!1),Tr.copy(o.pt).applyMatrix4(An[o.set].matrixWorld).project(ve);let c=(Tr.x+1)/2*t,u=(1-Tr.y)/2*e,l=o.lw||(o.lw=o.lbl.offsetWidth+10),f=o.off[0]*n,h=o.off[1]*n;f>=0?f=Math.min(c+f,t-l-6)-c:f=Math.max(c+f,l+6)-c,h=Ge(u+h,70,e-24)-u;let d=o.lh||(o.lh=o.lbl.offsetHeight+6),g=x=>{let _=f>=0?c+f:c+f-l;return[_,u+x-d/2,_+l,u+x+d/2]},y=x=>a.some(_=>x[0]<_[2]&&x[2]>_[0]&&x[1]<_[3]&&x[3]>_[1]);for(let x=0,_=h<0?-1:1;x<8&&y(g(h));x++){let v=h+_*d;u+v<70||u+v>e-24?(_=-_,h+=_*d*2):h=v}a.push(g(h));let m=Math.hypot(f,h),p=Math.atan2(h,f);o.el.style.opacity=r,o.el.style.visibility="visible",o.shown=!0,o.el.style.transform=`translate(${c.toFixed(1)}px, ${u.toFixed(1)}px)`,o.line.style.width=`${m.toFixed(1)}px`,o.line.style.transform=`rotate(${p}rad)`,o.lbl.style.transform=`translate(${f.toFixed(1)}px, ${h.toFixed(1)}px) translate(${f<0?"-100%":"0"}, -50%)`,o.lbl.classList.toggle("l",f<0)}}}var Nc=[...document.querySelectorAll("[data-chapter]")].map(i=>({el:i,from:+i.dataset.from,to:+i.dataset.to})),qm=[...document.querySelectorAll("[data-goto]")],s1=document.querySelector(".progress i"),r1=[...document.querySelectorAll("[data-step]")],o1=document.querySelector(".hint"),Cm=-1;function wh(){return document.documentElement.scrollHeight-window.innerHeight}qm.forEach(i=>i.addEventListener("click",t=>{t.preventDefault(),window.scrollTo({top:+i.dataset.goto*wh()+2,behavior:Dm?"auto":"smooth"})}));function a1(i){if(s1.style.transform=`scaleX(${i})`,ys)for(let n of Nc){let s=Ge((i-n.from)/.012)*(n.to>1?1:Ge((n.to-i)/.012));n.el.style.opacity=s,n.el.style.visibility=s>0?"visible":"hidden"}let t=Nc.findIndex(n=>i>=n.from&&i<n.to),e=t===-1?Nc.length-1:t;e!==Cm&&(Nc.forEach((n,s)=>n.el.classList.toggle("active",s===e)),Cm=e),qm.forEach(n=>n.classList.toggle("on",i>=+n.dataset.goto&&i<+n.dataset.until)),r1.forEach((n,s)=>{n.classList.toggle("done",i>=zi[s][1]),n.classList.toggle("on",i>=zi[s][0]-.004&&i<zi[s][1]+.004)}),o1.classList.toggle("gone",i>.02),i1(i)}function c1(i=1){let t=window.innerWidth,e=window.innerHeight,n=t/e;if(i==="video"){ve.setViewOffset(t,e,-t*.05,e*.08,t,e);return}if(!i){ve.clearViewOffset();return}n>=1.15?ve.setViewOffset(t,e,-t*.16,0,t,e):n<.95?ve.setViewOffset(t,e,0,e*.17,t,e):ve.setViewOffset(t,e,-t*.08,e*.08,t,e)}var Bc=1/0,l1=wr.has("still")||ys;function u1(i){let t=l1?1:_s(performance.now()-Bc,300,3e3);Fc.uReveal.value=gs(-.06,1.12,Math.max(Uc(t),Uc(_s(i,.01,.09))));let e=_s(i,.105,.2);yi.uScan.value=e<=0?-1e4:e>=1?1e4:gs(-96,48,Uc(e)),yi.uGlow.value=e>0&&e<1?1:0,Po(Gm(i,ys?null:performance.now()))}function Ah(i,t=1){ve.position.copy(i.pos),ve.lookAt(i.tgt),ve.fov=i.fov,ve.aspect=window.innerWidth/window.innerHeight,c1(t),ve.updateProjectionMatrix(),ve.updateMatrixWorld()}var Rr=!0;function Rh(){Rr&&(mn.shadow.needsUpdate=!0,Rr=!1),Je.render(qe,ve)}function Ym(i){Ah(Wm(e1,i,window.innerWidth/window.innerHeight)),u1(i),qe.updateMatrixWorld(),a1(i),Rr=!0,Rh()}var Hi=0,un=0,vh=performance.now(),bh=-1,Zn=!0,Pm=!1,Er=!1;function Co(){Hi=Ge(window.scrollY/Math.max(1,wh()))}window.addEventListener("scroll",Co,{passive:!0});var Ro=[],Im=0;function Zm(i){if(Ro.push(i),Ro.length<24)return;let t=Ro.reduce((n,s)=>n+s,0)/Ro.length;if(Ro.length=0,Im-- >0)return;let e=wn;t>.022&&wn>.75?e=Math.max(.75,wn-.2):t<.012&&wn<xh()&&(e=Math.min(xh(),wn+.1)),e!==wn&&(wn=e,Je.setPixelRatio(wn),Im=2)}function Sh(i){let t=Math.min(.1,(i-vh)/1e3);if(vh=i,Lt.active){_1(i,t),requestAnimationFrame(Sh);return}un+=(Hi-un)*(Dm?1:1-Math.exp(-t*8)),Math.abs(Hi-un)<2e-5&&(un=Hi);let e=!Pm&&i-Bc<3100;!e&&Bc!==1/0&&(Pm=!0);let n=un>.645&&un<.715;Zn||e||n||un!==bh?(Ym(un),bh=un,Zn=!1,Er&&Zm(t),Er=!0):Er=!1,(!h1||f1-- >0)&&requestAnimationFrame(Sh)}var h1=wr.has("still"),f1=2;function d1(){let i=window.innerWidth,t=window.innerHeight;wn=Math.min(wn,xh()),Je.setPixelRatio(wn),Je.setSize(i,t),Lt.active||Co(),Zn=!0}window.addEventListener("resize",d1);var Lt={active:!1,controls:null,e:1,eTarget:1,flip:0,flipTarget:0,saved:0,hidden:{}},p1=document.getElementById("free-help"),jm=document.querySelector(".free-sets"),$m=document.getElementById("btn-montado"),Jm=document.getElementById("btn-explodido"),Mh=document.getElementById("btn-virar"),m1=window.matchMedia("(pointer: coarse)").matches;p1.textContent=m1?"Arraste para girar \xB7 pin\xE7a para aproximar \xB7 dois dedos para mover":"Arraste para girar \xB7 role para aproximar \xB7 bot\xE3o direito para mover";for(let i of gi){let t=document.createElement("button");t.type="button",t.className="on",t.dataset.set=i.id,t.innerHTML=`<em>${i.n}</em>${i.nome}`,t.title=i.id,t.addEventListener("click",()=>{Lt.hidden[i.id]=!Lt.hidden[i.id],t.classList.toggle("on",!Lt.hidden[i.id]),Zn=!0,Rr=!0}),jm.appendChild(t)}function Ch(i,t){let e=yr,n=r=>Lm(_s(i,r*.25,(r+1)*.25)),s=e.placa_j4_lite*n(2);return{z:{tampa_externa_j4_lite:e.tampa_externa_j4_lite*n(0),protecao_interna_j4_lite:e.protecao_interna_j4_lite*n(1),placa_j4_lite:s,bateria_j4_lite:gs(s,e.bateria_j4_lite,n(3))},flip:t,hide:Lt.hidden}}function Hc(){$m.classList.toggle("on",Lt.eTarget===0),Jm.classList.toggle("on",Lt.eTarget===1),Mh.disabled=Lt.eTarget!==1,Mh.classList.toggle("on",Lt.flipTarget!==0)}$m.addEventListener("click",()=>{Lt.flipTarget=0,Lt.eTarget=0,Hc()});Jm.addEventListener("click",()=>{Lt.eTarget=1,Hc()});Mh.addEventListener("click",()=>{Lt.eTarget===1&&(Lt.flipTarget=Lt.flipTarget?0:Math.PI,Hc())});function g1(){yi.uScan.value=1e4,yi.uGlow.value=0,Fc.uReveal.value=1.12,Po(Ch(Lt.e,Lt.flip)),qe.updateMatrixWorld(),Rr=!0,Rh()}function _1(i,t){let e=Zn;if(e=Lt.controls.update()||e,Lt.flip!==Lt.flipTarget){let n=Math.sign(Lt.flipTarget-Lt.flip)*t*2.6;Lt.flip=Math.abs(Lt.flipTarget-Lt.flip)<Math.abs(n)?Lt.flipTarget:Lt.flip+n,e=!0}else if(Lt.e!==Lt.eTarget&&(Lt.eTarget===1||Lt.flip===0)){let n=Math.sign(Lt.eTarget-Lt.e)*t/2.4;Lt.e=Ge(Math.abs(Lt.eTarget-Lt.e)<Math.abs(n)?Lt.eTarget:Lt.e+n),e=!0}e?(g1(),Zn=!1,Er&&Zm(t),Er=!0):Er=!1}function Km(){if(Lt.active||!document.body.classList.contains("ready"))return;Lt.active=!0,Lt.saved=window.scrollY,document.documentElement.classList.add("free-lock"),document.body.classList.add("free"),Xm.querySelectorAll(".co").forEach(s=>{s.style.opacity=0,s.style.visibility="hidden"}),Eh.forEach(s=>s.els.forEach(r=>{r.shown=!1}));let i=Gm(un);Lt.e=Lt.eTarget=i.z.placa_j4_lite>1?1:0,Lt.flip=Lt.flipTarget=0,Hc();let t=Lt.controls=new Xa(ve,Nm);t.enableDamping=!0,t.dampingFactor=.08,t.minDistance=50,t.maxDistance=520,t.maxPolarAngle=Math.PI*.49,ve.clearViewOffset();let e=window.innerWidth/window.innerHeight,n=yh({pos:[70,120,210],tgt:[-18,20,0],fov:35},e);ve.position.copy(n.pos),t.target.copy(n.tgt),ve.fov=e<1?50:35,ve.updateProjectionMatrix(),t.addEventListener("change",()=>{t.target.x=Ge(t.target.x,-100,60),t.target.y=Ge(t.target.y,0,90),t.target.z=Ge(t.target.z,-40,40)}),t.update(),Zn=!0}function Ph(){Lt.active&&(Lt.active=!1,Lt.controls.dispose(),Lt.controls=null,Lt.hidden={},jm.querySelectorAll("button").forEach(i=>i.classList.add("on")),document.documentElement.classList.remove("free-lock"),document.body.classList.remove("free"),window.scrollTo(0,Lt.saved),Co(),un=Hi,Zn=!0)}document.querySelectorAll("[data-explore]").forEach(i=>i.addEventListener("click",t=>{t.preventDefault(),Km()}));document.getElementById("btn-exit").addEventListener("click",Ph);window.addEventListener("keydown",i=>{Lt.active&&i.code==="Escape"&&Ph()});async function x1(){try{await Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,1800))])}catch{}let i=Th()?8:12,{paper:t,ink:e}=Tm(i),n=new ns(t),s=new ns(e);for(let r of[n,s])r.colorSpace=Se,r.anisotropy=km;Mr.map=n,Mr.userData.ink=s,Mr.needsUpdate=!0,Cr.visible=!0,yi.uScan.value=1e4,Po(Ch(1,0)),Ah({pos:new A(60,165,205),tgt:new A(-22,4,0),fov:33},0),qe.updateMatrixWorld();try{await Je.compileAsync(qe,ve)}catch{}mn.shadow.needsUpdate=!0,Je.render(qe,ve)}x1().then(()=>{if(ys){document.body.classList.add("ready");return}Co(),un=Hi,requestAnimationFrame(i=>{vh=i,Bc=i,Zn=!0,Sh(i),document.body.classList.add("ready")}),wr.has("p")&&(window.scrollTo(0,+wr.get("p")*wh()),Co(),un=Hi,Zn=!0)});var Sr={T:36,cam:[{t:0,pos:[97.3,48.2,161.3],tgt:[-16,4,0],fov:30},{t:3.2,pos:[53.1,61.6,170.9],tgt:[-16,5,0],fov:30},{t:4.6,pos:[66,103.2,164.8],tgt:[-14,28,0],fov:32},{t:9.5,pos:[80.8,99.2,164.8],tgt:[-12,32,0],fov:32},{t:14.6,pos:[87.2,90.4,163.2],tgt:[-12,36,0],fov:32},{t:20.4,pos:[-96.8,101.6,156.8],tgt:[-12,36,0],fov:32},{t:22,pos:[-70,108.8,166.4],tgt:[-14,32,0],fov:32},{t:31,pos:[70.6,102.4,161.6],tgt:[-15,24,0],fov:32},{t:33.2,pos:[82.3,60.6,161.3],tgt:[-6,4,0],fov:30},{t:36,pos:[40.2,68.3,174.7],tgt:[-4,3,0],fov:30}],pose(i){let t=yr;return{z:{tampa_externa_j4_lite:xi(i,[[4.6,6.9,t.tampa_externa_j4_lite],[29,31,0]]),protecao_interna_j4_lite:xi(i,[[7,9.3,t.protecao_interna_j4_lite],[26.9,28.9,0]]),placa_j4_lite:xi(i,[[9.5,11.8,t.placa_j4_lite],[24.4,26.7,0]]),bateria_j4_lite:xi(i,[[9.5,11.8,t.placa_j4_lite],[12,14.3,t.bateria_j4_lite],[22,24.2,t.placa_j4_lite],[24.4,26.7,0]])},led:[0,0]}},caps:[{a:0,b:3.4,k:"RealTracker",h:"J4 Lite",s:"Composi\xE7\xE3o 3D \xB7 6 conjuntos separados"},{a:3.6,b:6.9,k:"Desmontagem \xB7 1/4",h:"Tampa externa",s:"Pe\xE7a s\xF3lida e fina que cobre todo o corpo"},{a:6.9,b:9.4,k:"Desmontagem \xB7 2/4",h:"Prote\xE7\xE3o interna",s:"Tr\xEAs aberturas: chave, USB e SIM"},{a:9.4,b:11.9,k:"Desmontagem \xB7 3/4",h:"Conjunto eletr\xF4nico",s:"Placa e bateria saem da carca\xE7a; o chicote acompanha a placa"},{a:11.9,b:14.5,k:"Desmontagem \xB7 4/4",h:"Bateria",s:"Sai do verso da placa"},{a:14.7,b:20.4,k:"Posi\xE7\xE3o EXPLODIDO",h:"Seis conjuntos",s:"Uma \xFAnica placa principal \xB7 escala relativa"},{a:20.6,b:24.3,k:"Montagem \xB7 1/4",h:"Bateria no verso da placa",s:"Longe da antena, na face dos componentes"},{a:24.3,b:26.8,k:"Montagem \xB7 2/4",h:"Conjunto na carca\xE7a",s:"O passa-fios assenta no encaixe da ponta"},{a:26.8,b:28.9,k:"Montagem \xB7 3/4",h:"Prote\xE7\xE3o interna",s:"As travas laterais entram nos alojamentos"},{a:28.9,b:31.3,k:"Montagem \xB7 4/4",h:"Tampa externa",s:"Fecha sobre todo o contorno da carca\xE7a"},{a:31.5,b:36.5,k:"Posi\xE7\xE3o MONTADO",h:"J4 Lite",s:"Modelo 3D com pe\xE7as separadas para montar e desmontar"}],tags:{from:15,to:20.2}},xs=document.getElementById("film-ui"),y1=xs.querySelector(".fk"),v1=xs.querySelector(".fh"),b1=xs.querySelector(".fs"),S1=gi.map(i=>{let t=document.createElement("div");return t.className="ftag",t.innerHTML=`<em>${i.n}</em>${i.nome}`,xs.querySelector(".ftags").appendChild(t),t}),M1={carcaca_j4_lite:[-13.5,-30,10],placa_j4_lite:[-11,-33,6.9],bateria_j4_lite:[-10,-28,4],protecao_interna_j4_lite:[-11.8,-33,11.1],tampa_externa_j4_lite:[-13.5,-33,15.5],chicote_j4_lite:[0,72,9.6]};function T1(i){let t=window.innerWidth/window.innerHeight;Ah(Wm(Sr.cam,i,t,"t"),"video"),yi.uScan.value=1e4,yi.uGlow.value=0,Fc.uReveal.value=1.12,Po(Sr.pose(i)),qe.updateMatrixWorld(),Rr=!0,Rh();let e=Sr.caps.find(s=>i>=s.a&&i<s.b);if(e){let s=Ge((i-e.a)/.35)*Ge((e.b-i)/.35);xs.querySelector(".fcap").style.opacity=s,y1.textContent=e.k,v1.textContent=e.h,b1.textContent=e.s}else xs.querySelector(".fcap").style.opacity=0;xs.querySelector(".fend").style.opacity=Ge((i-32.2)/.6);let n=Ge((i-Sr.tags.from)/.4)*Ge((Sr.tags.to-i)/.4);gi.forEach((s,r)=>{let a=S1[r];a.style.opacity=n,!(n<=0)&&(Tr.set(...M1[s.id]).sub(ki[s.id].pos).applyMatrix4(An[s.id].matrixWorld).project(ve),a.style.transform=`translate(${((Tr.x+1)/2*window.innerWidth).toFixed(1)}px, ${((1-Tr.y)/2*window.innerHeight).toFixed(1)}px) translate(-100%, -50%)`)})}ys&&(document.body.classList.add("film"),window.__film={ready:()=>document.body.classList.contains("ready"),scroll(i){return document.body.classList.remove("film-video"),un=Hi=bh=i,Ym(i),!0},video(i){return document.body.classList.add("film-video"),T1(i),!0},T:Sr.T});wr.has("debug")&&(window.__app={renderer:Je,scene:qe,sets:An,rest:ki,buildMs:ZS,camera:ve,applyPose:Po,poseExplode:Ch,enterFree:Km,exitFree:Ph,free:Lt});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
