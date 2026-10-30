(()=>{var kl="160",zi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ed=0,Tc=1,wd=2;var ru=1,Hl=2,kn=3,si=0,Re=1,Je=2;var Tn=0,ss=1,ri=2,Rc=3,Cc=4,Td=5,vi=100,Rd=101,Cd=102,zc=103,Pc=104,zd=200,Pd=201,Id=202,Ld=203,Ka=204,ja=205,Dd=206,Ud=207,Nd=208,Od=209,Fd=210,Bd=211,kd=212,Hd=213,Vd=214,Gd=0,Wd=1,Xd=2,Qr=3,qd=4,Yd=5,Zd=6,Jd=7,ou=0,Qd=1,Kd=2,ei=0,Vl=1,Gl=2,Wl=3,hr=4,jd=5,Xl=6;var au=300,as=301,ls=302,$a=303,tl=304,Uo=306,Ys=1e3,gn=1001,el=1002,Ve=1003,Ic=1004;var ga=1005;var rn=1006,$d=1007;var Zs=1008;var ni=1009,tf=1010,ef=1011,ql=1012,lu=1013,$n=1014,ti=1015,Qe=1016,cu=1017,hu=1018,bi=1020,nf=1021,An=1023,sf=1024,rf=1025,Si=1026,cs=1027,of=1028,uu=1029,af=1030,du=1031,fu=1033,Aa=33776,xa=33777,_a=33778,va=33779,Lc=35840,Dc=35841,Uc=35842,Nc=35843,pu=36196,Oc=37492,Fc=37496,Bc=37808,kc=37809,Hc=37810,Vc=37811,Gc=37812,Wc=37813,Xc=37814,qc=37815,Yc=37816,Zc=37817,Jc=37818,Qc=37819,Kc=37820,jc=37821,ya=36492,$c=36494,th=36495,lf=36283,eh=36284,nh=36285,ih=36286;var Kr=2300,jr=2301,Ma=2302,sh=2400,rh=2401,oh=2402;var mu=3e3,Ei=3001,cf=3200,hf=3201,gu=0,uf=1,on="",fe="srgb",Vn="srgb-linear",Yl="display-p3",No="display-p3-linear",$r="linear",ie="srgb",to="rec709",eo="p3";var Ui=7680;var ah=519,df=512,ff=513,pf=514,Au=515,mf=516,gf=517,Af=518,xf=519,nl=35044;var lh="300 es",il=1035,Hn=2e3,no=2001,Cn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ch=1234567,Hs=Math.PI/180,Js=180/Math.PI;function Rn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function Zl(i,t){return(i%t+t)%t}function _f(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function vf(i,t,e){return i!==t?(e-i)/(t-i):0}function Vs(i,t,e){return(1-e)*i+e*t}function yf(i,t,e,n){return Vs(i,t,1-Math.exp(-e*n))}function Mf(i,t=1){return t-Math.abs(Zl(i,t*2)-t)}function bf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Sf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ef(i,t){return i+Math.floor(Math.random()*(t-i+1))}function wf(i,t){return i+Math.random()*(t-i)}function Tf(i){return i*(.5-Math.random())}function Rf(i){i!==void 0&&(ch=i);let t=ch+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cf(i){return i*Hs}function zf(i){return i*Js}function sl(i){return(i&i-1)===0&&i!==0}function Pf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function io(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function If(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var xu={DEG2RAD:Hs,RAD2DEG:Js,generateUUID:Rn,clamp:_e,euclideanModulo:Zl,mapLinear:_f,inverseLerp:vf,lerp:Vs,damp:yf,pingpong:Mf,smoothstep:bf,smootherstep:Sf,randInt:Ef,randFloat:wf,randFloatSpread:Tf,seededRandom:Rf,degToRad:Cf,radToDeg:zf,isPowerOfTwo:sl,ceilPowerOfTwo:Pf,floorPowerOfTwo:io,setQuaternionFromProperEuler:If,normalize:ne,denormalize:wn},$=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],_=s[1],A=s[4],M=s[7],z=s[2],w=s[5],T=s[8];return r[0]=a*x+o*_+l*z,r[3]=a*m+o*A+l*w,r[6]=a*p+o*M+l*T,r[1]=c*x+h*_+u*z,r[4]=c*m+h*A+u*w,r[7]=c*p+h*M+u*T,r[2]=d*x+f*_+g*z,r[5]=d*m+f*A+g*w,r[8]=d*p+f*M+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ba.makeScale(t,e)),this}rotate(t){return this.premultiply(ba.makeRotation(-t)),this}translate(t,e){return this.premultiply(ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ba=new Zt;function _u(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function so(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lf(){let i=so("canvas");return i.style.display="block",i}var hh={};function Gs(i){i in hh||(hh[i]=!0,console.warn(i))}var uh=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dh=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_r={[Vn]:{transfer:$r,primaries:to,toReference:i=>i,fromReference:i=>i},[fe]:{transfer:ie,primaries:to,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[No]:{transfer:$r,primaries:eo,toReference:i=>i.applyMatrix3(dh),fromReference:i=>i.applyMatrix3(uh)},[Yl]:{transfer:ie,primaries:eo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(dh),fromReference:i=>i.applyMatrix3(uh).convertLinearToSRGB()}},Df=new Set([Vn,No]),te={enabled:!0,_workingColorSpace:Vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Df.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=_r[t].toReference,s=_r[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return _r[i].primaries},getTransfer:function(i){return i===on?$r:_r[i].transfer}};function rs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Sa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ni,ro=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ni===void 0&&(Ni=so("canvas")),Ni.width=t.width,Ni.height=t.height;let n=Ni.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=so("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=rs(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(rs(e[n]/255)*255):e[n]=rs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Uf=0,oo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Rn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ea(s[a].image)):r.push(Ea(s[a]))}else r=Ea(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ro.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Nf=0,an=class i extends Cn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=gn,s=gn,r=rn,a=Zs,o=An,l=ni,c=i.DEFAULT_ANISOTROPY,h=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=Rn(),this.name="",this.source=new oo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ei?fe:on),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==au)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ys:t.x=t.x-Math.floor(t.x);break;case gn:t.x=t.x<0?0:1;break;case el:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ys:t.y=t.y-Math.floor(t.y);break;case gn:t.y=t.y<0?0:1;break;case el:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===fe?Ei:mu}set encoding(t){Gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ei?fe:on}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=au;an.DEFAULT_ANISOTROPY=1;var ae=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,M=(f+1)/2,z=(p+1)/2,w=(h+d)/4,T=(u+x)/4,F=(g+m)/4;return A>M&&A>z?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=w/n,r=T/n):M>z?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=F/s):z<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(z),n=T/r,s=F/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},rl=class extends Cn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(Gs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ei?fe:on),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new an(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new oo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ze=class extends rl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ao=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ol=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*x,_=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){let z=Math.sqrt(A),w=Math.atan2(z,p*_);m=Math.sin(m*w)/z,o=Math.sin(o*w)/z}let M=o*_;if(l=l*m+d*M,c=c*m+f*M,h=h*m+g*M,u=u*m+x*M,m===1-o){let z=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=z,c*=z,h*=z,u*=z}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wa.copy(this).projectOnVector(t),this.sub(wa)}reflect(t){return this.sub(wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wa=new R,fh=new xn,Gn=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vr.copy(n.boundingBox)),vr.applyMatrix4(t.matrixWorld),this.union(vr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),yr.subVectors(this.max,Ls),Oi.subVectors(t.a,Ls),Fi.subVectors(t.b,Ls),Bi.subVectors(t.c,Ls),Zn.subVectors(Fi,Oi),Jn.subVectors(Bi,Fi),mi.subVectors(Oi,Bi);let e=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-mi.z,mi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,mi.z,0,-mi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-mi.y,mi.x,0];return!Ta(e,Oi,Fi,Bi,yr)||(e=[1,0,0,0,1,0,0,0,1],!Ta(e,Oi,Fi,Bi,yr))?!1:(Mr.crossVectors(Zn,Jn),e=[Mr.x,Mr.y,Mr.z],Ta(e,Oi,Fi,Bi,yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Un=[new R,new R,new R,new R,new R,new R,new R,new R],dn=new R,vr=new Gn,Oi=new R,Fi=new R,Bi=new R,Zn=new R,Jn=new R,mi=new R,Ls=new R,yr=new R,Mr=new R,gi=new R;function Ta(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){gi.fromArray(i,r);let o=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),l=t.dot(gi),c=e.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Of=new Gn,Ds=new R,Ra=new R,hs=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Of.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);let e=Ds.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ra.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(Ra)),this.expandByPoint(Ds.copy(t.center).sub(Ra))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Nn=new R,Ca=new R,br=new R,Qn=new R,za=new R,Sr=new R,Pa=new R,us=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ca.copy(t).add(e).multiplyScalar(.5),br.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(Ca);let r=t.distanceTo(e)*.5,a=-this.direction.dot(br),o=Qn.dot(this.direction),l=-Qn.dot(br),c=Qn.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ca).addScaledVector(br,d),f}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);let n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){za.subVectors(e,t),Sr.subVectors(n,t),Pa.crossVectors(za,Sr);let a=this.direction.dot(Pa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qn.subVectors(this.origin,t);let l=o*this.direction.dot(Sr.crossVectors(Qn,Sr));if(l<0)return null;let c=o*this.direction.dot(za.cross(Qn));if(c<0||l+c>a)return null;let h=-o*Qn.dot(Pa);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pe=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ki.setFromMatrixColumn(t,0).length(),r=1/ki.setFromMatrixColumn(t,1).length(),a=1/ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ff,t,Bf)}lookAt(t,e,n){let s=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Kn.crossVectors(n,Ye),Kn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Kn.crossVectors(n,Ye)),Kn.normalize(),Er.crossVectors(Ye,Kn),s[0]=Kn.x,s[4]=Er.x,s[8]=Ye.x,s[1]=Kn.y,s[5]=Er.y,s[9]=Ye.y,s[2]=Kn.z,s[6]=Er.z,s[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],_=n[3],A=n[7],M=n[11],z=n[15],w=s[0],T=s[4],F=s[8],y=s[12],S=s[1],O=s[5],k=s[9],rt=s[13],D=s[2],H=s[6],X=s[10],K=s[14],tt=s[3],Q=s[7],C=s[11],U=s[15];return r[0]=a*w+o*S+l*D+c*tt,r[4]=a*T+o*O+l*H+c*Q,r[8]=a*F+o*k+l*X+c*C,r[12]=a*y+o*rt+l*K+c*U,r[1]=h*w+u*S+d*D+f*tt,r[5]=h*T+u*O+d*H+f*Q,r[9]=h*F+u*k+d*X+f*C,r[13]=h*y+u*rt+d*K+f*U,r[2]=g*w+x*S+m*D+p*tt,r[6]=g*T+x*O+m*H+p*Q,r[10]=g*F+x*k+m*X+p*C,r[14]=g*y+x*rt+m*K+p*U,r[3]=_*w+A*S+M*D+z*tt,r[7]=_*T+A*O+M*H+z*Q,r[11]=_*F+A*k+M*X+z*C,r[15]=_*y+A*rt+M*K+z*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+x*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],_=u*m*c-x*d*c+x*l*f-o*m*f-u*l*p+o*d*p,A=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,M=h*x*c-g*u*c+g*o*f-a*x*f-h*o*p+a*u*p,z=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,w=e*_+n*A+s*M+r*z;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/w;return t[0]=_*T,t[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*T,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*T,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*T,t[4]=A*T,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*T,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*T,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*T,t[8]=M*T,t[9]=(g*u*r-h*x*r-g*n*f+e*x*f+h*n*p-e*u*p)*T,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*p+e*o*p)*T,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*T,t[12]=z*T,t[13]=(h*x*s-g*u*s+g*n*d-e*x*d-h*n*m+e*u*m)*T,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*m-e*o*m)*T,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,_=l*c,A=l*h,M=l*u,z=n.x,w=n.y,T=n.z;return s[0]=(1-(x+p))*z,s[1]=(f+M)*z,s[2]=(g-A)*z,s[3]=0,s[4]=(f-M)*w,s[5]=(1-(d+p))*w,s[6]=(m+_)*w,s[7]=0,s[8]=(g+A)*T,s[9]=(m-_)*T,s[10]=(1-(d+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ki.set(s[0],s[1],s[2]).length(),a=ki.set(s[4],s[5],s[6]).length(),o=ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],fn.copy(this);let c=1/r,h=1/a,u=1/o;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,e.setFromRotationMatrix(fn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Hn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(o===Hn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===no)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Hn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h,g,x;if(o===Hn)g=(a+r)*u,x=-2*u;else if(o===no)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ki=new R,fn=new pe,Ff=new R(0,0,0),Bf=new R(1,1,1),Kn=new R,Er=new R,Ye=new R,ph=new pe,mh=new xn,lo=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ph.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ph,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mh.setFromEuler(this),this.setFromQuaternion(mh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};lo.DEFAULT_ORDER="XYZ";var co=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},kf=0,gh=new R,Hi=new xn,On=new pe,wr=new R,Us=new R,Hf=new R,Vf=new xn,Ah=new R(1,0,0),xh=new R(0,1,0),_h=new R(0,0,1),Gf={type:"added"},Wf={type:"removed"},Pe=class i extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new lo,n=new xn,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new Zt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(Ah,t)}rotateY(t){return this.rotateOnAxis(xh,t)}rotateZ(t){return this.rotateOnAxis(_h,t)}translateOnAxis(t,e){return gh.copy(t).applyQuaternion(this.quaternion),this.position.add(gh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ah,t)}translateY(t){return this.translateOnAxis(xh,t)}translateZ(t){return this.translateOnAxis(_h,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wr.copy(t):wr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Us,wr,this.up):On.lookAt(wr,Us,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),Hi.setFromRotationMatrix(On),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Gf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wf)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,Hf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Vf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Pe.DEFAULT_UP=new R(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pn=new R,Fn=new R,Ia=new R,Bn=new R,Vi=new R,Gi=new R,vh=new R,La=new R,Da=new R,Ua=new R,Tr=!1,Mi=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),pn.subVectors(t,e),s.cross(pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){pn.subVectors(s,e),Fn.subVectors(n,e),Ia.subVectors(t,e);let a=pn.dot(pn),o=pn.dot(Fn),l=pn.dot(Ia),c=Fn.dot(Fn),h=Fn.dot(Ia),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(t,e,n,s,r,a,o,l){return Tr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Tr=!0),this.getInterpolation(t,e,n,s,r,a,o,l)}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static isFrontFacing(t,e,n,s){return pn.subVectors(n,e),Fn.subVectors(t,e),pn.cross(Fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),pn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Tr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Tr=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Vi.subVectors(s,n),Gi.subVectors(r,n),La.subVectors(t,n);let l=Vi.dot(La),c=Gi.dot(La);if(l<=0&&c<=0)return e.copy(n);Da.subVectors(t,s);let h=Vi.dot(Da),u=Gi.dot(Da);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Vi,a);Ua.subVectors(t,r);let f=Vi.dot(Ua),g=Gi.dot(Ua);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Gi,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return vh.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(vh,o);let p=1/(m+x+d);return a=x*p,o=d*p,e.copy(n).addScaledVector(Vi,a).addScaledVector(Gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Rr={h:0,s:0,l:0};function Na(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Zl(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Na(a,r,t+1/3),this.g=Na(a,r,t),this.b=Na(a,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fe){let n=vu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}copyLinearToSRGB(t){return this.r=Sa(t.r),this.g=Sa(t.g),this.b=Sa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fe){return te.fromWorkingColorSpace(Ue.copy(this),t),Math.round(_e(Ue.r*255,0,255))*65536+Math.round(_e(Ue.g*255,0,255))*256+Math.round(_e(Ue.b*255,0,255))}getHexString(t=fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ue.copy(this),e);let n=Ue.r,s=Ue.g,r=Ue.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=fe){te.fromWorkingColorSpace(Ue.copy(this),t);let e=Ue.r,n=Ue.g,s=Ue.b;return t!==fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(Rr);let n=Vs(jn.h,Rr.h,e),s=Vs(jn.s,Rr.s,e),r=Vs(jn.l,Rr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ue=new zt;zt.NAMES=vu;var Xf=0,Wn=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=ss,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=ja,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ka&&(n.blendSrc=this.blendSrc),this.blendDst!==ja&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ah&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ke=class extends Wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var xe=new R,Cr=new $,Ce=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Cr.fromBufferAttribute(this,e),Cr.applyMatrix3(t),this.setXY(e,Cr.x,Cr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nl&&(t.usage=this.usage),t}};var ho=class extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var uo=class extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Wt=class extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}};var qf=0,sn=new pe,Oa=new Pe,Wi=new R,Ze=new Gn,Ns=new Gn,we=new R,le=class i extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_u(t)?uo:ho)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return Oa.lookAt(t),Oa.updateMatrix(),this.applyMatrix4(Oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Wt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ns.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(Ze.min,Ns.min),Ze.expandByPoint(we),we.addVectors(Ze.max,Ns.max),Ze.expandByPoint(we)):(Ze.expandByPoint(Ns.min),Ze.expandByPoint(Ns.max))}Ze.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)we.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(we));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)we.fromBufferAttribute(o,c),l&&(Wi.fromBufferAttribute(t,c),we.add(Wi)),s=Math.max(s,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<o;S++)c[S]=new R,h[S]=new R;let u=new R,d=new R,f=new R,g=new $,x=new $,m=new $,p=new R,_=new R;function A(S,O,k){u.fromArray(s,S*3),d.fromArray(s,O*3),f.fromArray(s,k*3),g.fromArray(a,S*2),x.fromArray(a,O*2),m.fromArray(a,k*2),d.sub(u),f.sub(u),x.sub(g),m.sub(g);let rt=1/(x.x*m.y-m.x*x.y);isFinite(rt)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-x.y).multiplyScalar(rt),_.copy(f).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(rt),c[S].add(p),c[O].add(p),c[k].add(p),h[S].add(_),h[O].add(_),h[k].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let S=0,O=M.length;S<O;++S){let k=M[S],rt=k.start,D=k.count;for(let H=rt,X=rt+D;H<X;H+=3)A(n[H+0],n[H+1],n[H+2])}let z=new R,w=new R,T=new R,F=new R;function y(S){T.fromArray(r,S*3),F.copy(T);let O=c[S];z.copy(O),z.sub(T.multiplyScalar(T.dot(O))).normalize(),w.crossVectors(F,O);let rt=w.dot(h[S])<0?-1:1;l[S*4]=z.x,l[S*4+1]=z.y,l[S*4+2]=z.z,l[S*4+3]=rt}for(let S=0,O=M.length;S<O;++S){let k=M[S],rt=k.start,D=k.count;for(let H=rt,X=rt+D;H<X;H+=3)y(n[H+0]),y(n[H+1]),y(n[H+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ce(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},yh=new pe,Ai=new us,zr=new hs,Mh=new R,Xi=new R,qi=new R,Yi=new R,Fa=new R,Pr=new R,Ir=new $,Lr=new $,Dr=new $,bh=new R,Sh=new R,Eh=new R,Ur=new R,Nr=new R,Qt=class extends Pe{constructor(t=new le,e=new Ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Pr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Fa.fromBufferAttribute(u,t),a?Pr.addScaledVector(Fa,h):Pr.addScaledVector(Fa.sub(e),h))}e.add(Pr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(r),Ai.copy(t.ray).recast(t.near),!(zr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(zr,Mh)===null||Ai.origin.distanceToSquared(Mh)>(t.far-t.near)**2))&&(yh.copy(r).invert(),Ai.copy(t.ray).applyMatrix4(yh),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),A=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,z=A;M<z;M+=3){let w=o.getX(M),T=o.getX(M+1),F=o.getX(M+2);s=Or(this,p,t,n,c,h,u,w,T,F),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=o.getX(m),A=o.getX(m+1),M=o.getX(m+2);s=Or(this,a,t,n,c,h,u,_,A,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,z=A;M<z;M+=3){let w=M,T=M+1,F=M+2;s=Or(this,p,t,n,c,h,u,w,T,F),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=m,A=m+1,M=m+2;s=Or(this,a,t,n,c,h,u,_,A,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Yf(i,t,e,n,s,r,a,o){let l;if(t.side===Re?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===si,o),l===null)return null;Nr.copy(o),Nr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Nr);return c<e.near||c>e.far?null:{distance:c,point:Nr.clone(),object:i}}function Or(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Xi),i.getVertexPosition(l,qi),i.getVertexPosition(c,Yi);let h=Yf(i,t,e,n,Xi,qi,Yi,Ur);if(h){s&&(Ir.fromBufferAttribute(s,o),Lr.fromBufferAttribute(s,l),Dr.fromBufferAttribute(s,c),h.uv=Mi.getInterpolation(Ur,Xi,qi,Yi,Ir,Lr,Dr,new $)),r&&(Ir.fromBufferAttribute(r,o),Lr.fromBufferAttribute(r,l),Dr.fromBufferAttribute(r,c),h.uv1=Mi.getInterpolation(Ur,Xi,qi,Yi,Ir,Lr,Dr,new $),h.uv2=h.uv1),a&&(bh.fromBufferAttribute(a,o),Sh.fromBufferAttribute(a,l),Eh.fromBufferAttribute(a,c),h.normal=Mi.getInterpolation(Ur,Xi,qi,Yi,bh,Sh,Eh,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new R,materialIndex:0};Mi.getNormal(Xi,qi,Yi,u.normal),h.face=u}return h}var _n=class i extends le{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(u,2));function g(x,m,p,_,A,M,z,w,T,F,y){let S=M/T,O=z/F,k=M/2,rt=z/2,D=w/2,H=T+1,X=F+1,K=0,tt=0,Q=new R;for(let C=0;C<X;C++){let U=C*O-rt;for(let B=0;B<H;B++){let L=B*S-k;Q[x]=L*_,Q[m]=U*A,Q[p]=D,c.push(Q.x,Q.y,Q.z),Q[x]=0,Q[m]=0,Q[p]=w>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(B/T),u.push(1-C/F),K+=1}}for(let C=0;C<F;C++)for(let U=0;U<T;U++){let B=d+U+H*C,L=d+U+H*(C+1),W=d+(U+1)+H*(C+1),it=d+(U+1)+H*C;l.push(B,L,it),l.push(L,W,it),tt+=6}o.addGroup(f,tt,y),f+=tt,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ds(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function He(i){let t={};for(let e=0;e<i.length;e++){let n=ds(i[e]);for(let s in n)t[s]=n[s]}return t}function Zf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function yu(i){return i.getRenderTarget()===null?i.outputColorSpace:te.workingColorSpace}var ai={clone:ds,merge:He},Jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ve=class extends Wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jf,this.fragmentShader=Qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=Zf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},fo=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ne=class extends fo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Hs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Zi=-90,Ji=1,al=class extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ne(Zi,Ji,t,e);s.layers=this.layers,this.add(s);let r=new Ne(Zi,Ji,t,e);r.layers=this.layers,this.add(r);let a=new Ne(Zi,Ji,t,e);a.layers=this.layers,this.add(a);let o=new Ne(Zi,Ji,t,e);o.layers=this.layers,this.add(o);let l=new Ne(Zi,Ji,t,e);l.layers=this.layers,this.add(l);let c=new Ne(Zi,Ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===no)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},po=class extends an{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:as,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ll=class extends ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Gs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ei?fe:on),this.texture=new po(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _n(5,5,5),r=new ve({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:Tn});r.uniforms.tEquirect.value=e;let a=new Qt(s,r),o=e.minFilter;return e.minFilter===Zs&&(e.minFilter=rn),new al(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Ba=new R,Kf=new R,jf=new Zt,mn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ba.subVectors(n,e).cross(Kf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ba),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||jf.getNormalMatrix(t),s=this.coplanarPoint(Ba).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},xi=new hs,Fr=new R,Qs=class{constructor(t=new mn,e=new mn,n=new mn,s=new mn,r=new mn,a=new mn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],_=s[13],A=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,m-f,M-p).normalize(),n[1].setComponents(l+r,d+c,m+f,M+p).normalize(),n[2].setComponents(l+a,d+h,m+g,M+_).normalize(),n[3].setComponents(l-a,d-h,m-g,M-_).normalize(),n[4].setComponents(l-o,d-u,m-x,M-A).normalize(),e===Hn)n[5].setComponents(l+o,d+u,m+x,M+A).normalize();else if(e===no)n[5].setComponents(o,u,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Fr.x=s.normal.x>0?t.max.x:t.min.x,Fr.y=s.normal.y>0?t.max.y:t.min.y,Fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Mu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $f(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,d=c.usage,f=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),f.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];e?i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var ln=class i extends le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let _=p*d-a;for(let A=0;A<c;A++){let M=A*u-r;g.push(M,-_,0),x.push(0,0,1),m.push(A/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let A=_+c*p,M=_+c*(p+1),z=_+1+c*(p+1),w=_+1+c*p;f.push(A,M,w),f.push(M,z,w)}this.setIndex(f),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(x,3)),this.setAttribute("uv",new Wt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ep=`#ifdef USE_ALPHAHASH
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
#endif`,np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,op=`#ifdef USE_AOMAP
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
#endif`,ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lp=`#ifdef USE_BATCHING
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
#endif`,cp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fp=`#ifdef USE_IRIDESCENCE
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
#endif`,pp=`#ifdef USE_BUMPMAP
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
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bp=`#define PI 3.141592653589793
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
} // validated`,Sp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ep=`vec3 transformedNormal = objectNormal;
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
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pp=`
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
}`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hp=`#ifdef USE_GRADIENTMAP
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
}`,Vp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Gp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qp=`uniform bool receiveShadow;
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
#endif`,Yp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jp=`PhysicalMaterial material;
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
#endif`,$p=`struct PhysicalMaterial {
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
}`,tm=`
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
#endif`,em=`#if defined( RE_IndirectDiffuse )
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
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,im=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,om=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hm=`#if defined( USE_POINTS_UV )
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
#endif`,um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pm=`#ifdef USE_MORPHNORMALS
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
#endif`,mm=`#ifdef USE_MORPHTARGETS
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
#endif`,gm=`#ifdef USE_MORPHTARGETS
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
#endif`,Am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mm=`#ifdef USE_NORMALMAP
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
#endif`,bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fm=`float getShadowMask() {
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
}`,Bm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,km=`#ifdef USE_SKINNING
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
#endif`,Hm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vm=`#ifdef USE_SKINNING
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
#endif`,Gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ym=`#ifdef USE_TRANSMISSION
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
#endif`,Zm=`#ifdef USE_TRANSMISSION
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t0=`uniform sampler2D t2D;
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
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`#include <common>
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
}`,o0=`#if DEPTH_PACKING == 3200
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
}`,a0=`#define DISTANCE
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
}`,l0=`#define DISTANCE
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
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`uniform float scale;
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
}`,d0=`uniform vec3 diffuse;
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
}`,f0=`#include <common>
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
}`,p0=`uniform vec3 diffuse;
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
}`,m0=`#define LAMBERT
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
}`,g0=`#define LAMBERT
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
}`,A0=`#define MATCAP
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
}`,x0=`#define MATCAP
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
}`,_0=`#define NORMAL
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
}`,v0=`#define NORMAL
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
}`,y0=`#define PHONG
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
}`,M0=`#define PHONG
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
}`,b0=`#define STANDARD
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
}`,S0=`#define STANDARD
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
}`,E0=`#define TOON
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
}`,w0=`#define TOON
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
}`,T0=`uniform float size;
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
}`,R0=`uniform vec3 diffuse;
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
}`,C0=`#include <common>
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
}`,z0=`uniform vec3 color;
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
}`,P0=`uniform float rotation;
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
}`,I0=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:tp,alphahash_pars_fragment:ep,alphamap_fragment:np,alphamap_pars_fragment:ip,alphatest_fragment:sp,alphatest_pars_fragment:rp,aomap_fragment:op,aomap_pars_fragment:ap,batching_pars_vertex:lp,batching_vertex:cp,begin_vertex:hp,beginnormal_vertex:up,bsdfs:dp,iridescence_fragment:fp,bumpmap_pars_fragment:pp,clipping_planes_fragment:mp,clipping_planes_pars_fragment:gp,clipping_planes_pars_vertex:Ap,clipping_planes_vertex:xp,color_fragment:_p,color_pars_fragment:vp,color_pars_vertex:yp,color_vertex:Mp,common:bp,cube_uv_reflection_fragment:Sp,defaultnormal_vertex:Ep,displacementmap_pars_vertex:wp,displacementmap_vertex:Tp,emissivemap_fragment:Rp,emissivemap_pars_fragment:Cp,colorspace_fragment:zp,colorspace_pars_fragment:Pp,envmap_fragment:Ip,envmap_common_pars_fragment:Lp,envmap_pars_fragment:Dp,envmap_pars_vertex:Up,envmap_physical_pars_fragment:Yp,envmap_vertex:Np,fog_vertex:Op,fog_pars_vertex:Fp,fog_fragment:Bp,fog_pars_fragment:kp,gradientmap_pars_fragment:Hp,lightmap_fragment:Vp,lightmap_pars_fragment:Gp,lights_lambert_fragment:Wp,lights_lambert_pars_fragment:Xp,lights_pars_begin:qp,lights_toon_fragment:Zp,lights_toon_pars_fragment:Jp,lights_phong_fragment:Qp,lights_phong_pars_fragment:Kp,lights_physical_fragment:jp,lights_physical_pars_fragment:$p,lights_fragment_begin:tm,lights_fragment_maps:em,lights_fragment_end:nm,logdepthbuf_fragment:im,logdepthbuf_pars_fragment:sm,logdepthbuf_pars_vertex:rm,logdepthbuf_vertex:om,map_fragment:am,map_pars_fragment:lm,map_particle_fragment:cm,map_particle_pars_fragment:hm,metalnessmap_fragment:um,metalnessmap_pars_fragment:dm,morphcolor_vertex:fm,morphnormal_vertex:pm,morphtarget_pars_vertex:mm,morphtarget_vertex:gm,normal_fragment_begin:Am,normal_fragment_maps:xm,normal_pars_fragment:_m,normal_pars_vertex:vm,normal_vertex:ym,normalmap_pars_fragment:Mm,clearcoat_normal_fragment_begin:bm,clearcoat_normal_fragment_maps:Sm,clearcoat_pars_fragment:Em,iridescence_pars_fragment:wm,opaque_fragment:Tm,packing:Rm,premultiplied_alpha_fragment:Cm,project_vertex:zm,dithering_fragment:Pm,dithering_pars_fragment:Im,roughnessmap_fragment:Lm,roughnessmap_pars_fragment:Dm,shadowmap_pars_fragment:Um,shadowmap_pars_vertex:Nm,shadowmap_vertex:Om,shadowmask_pars_fragment:Fm,skinbase_vertex:Bm,skinning_pars_vertex:km,skinning_vertex:Hm,skinnormal_vertex:Vm,specularmap_fragment:Gm,specularmap_pars_fragment:Wm,tonemapping_fragment:Xm,tonemapping_pars_fragment:qm,transmission_fragment:Ym,transmission_pars_fragment:Zm,uv_pars_fragment:Jm,uv_pars_vertex:Qm,uv_vertex:Km,worldpos_vertex:jm,background_vert:$m,background_frag:t0,backgroundCube_vert:e0,backgroundCube_frag:n0,cube_vert:i0,cube_frag:s0,depth_vert:r0,depth_frag:o0,distanceRGBA_vert:a0,distanceRGBA_frag:l0,equirect_vert:c0,equirect_frag:h0,linedashed_vert:u0,linedashed_frag:d0,meshbasic_vert:f0,meshbasic_frag:p0,meshlambert_vert:m0,meshlambert_frag:g0,meshmatcap_vert:A0,meshmatcap_frag:x0,meshnormal_vert:_0,meshnormal_frag:v0,meshphong_vert:y0,meshphong_frag:M0,meshphysical_vert:b0,meshphysical_frag:S0,meshtoon_vert:E0,meshtoon_frag:w0,points_vert:T0,points_frag:R0,shadow_vert:C0,shadow_frag:z0,sprite_vert:P0,sprite_frag:I0},_t={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},En={basic:{uniforms:He([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:He([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:He([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:He([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:He([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:He([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:He([_t.points,_t.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:He([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:He([_t.common,_t.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:He([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:He([_t.sprite,_t.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:He([_t.common,_t.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:He([_t.lights,_t.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};En.physical={uniforms:He([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new $(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new $},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Br={r:0,b:0,g:0};function L0(i,t,e,n,s,r,a){let o=new zt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(m,p){let _=!1,A=p.isScene===!0?p.background:null;A&&A.isTexture&&(A=(p.backgroundBlurriness>0?e:t).get(A)),A===null?x(o,l):A&&A.isColor&&(x(A,1),_=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),A&&(A.isCubeTexture||A.mapping===Uo)?(h===void 0&&(h=new Qt(new _n(1,1,1),new ve({name:"BackgroundCubeMaterial",uniforms:ds(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=te.getTransfer(A.colorSpace)!==ie,(u!==A||d!==A.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Qt(new ln(2,2),new ve({name:"BackgroundMaterial",uniforms:ds(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=te.getTransfer(A.colorSpace)!==ie,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB(Br,yu(i)),n.buffers.color.setClear(Br.r,Br.g,Br.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function D0(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(D,H,X,K,tt){let Q=!1;if(a){let C=x(K,X,H);c!==C&&(c=C,f(c.object)),Q=p(D,K,X,tt),Q&&_(D,K,X,tt)}else{let C=H.wireframe===!0;(c.geometry!==K.id||c.program!==X.id||c.wireframe!==C)&&(c.geometry=K.id,c.program=X.id,c.wireframe=C,Q=!0)}tt!==null&&e.update(tt,i.ELEMENT_ARRAY_BUFFER),(Q||h)&&(h=!1,F(D,H,X,K),tt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(tt).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(D){return n.isWebGL2?i.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?i.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function x(D,H,X){let K=X.wireframe===!0,tt=o[D.id];tt===void 0&&(tt={},o[D.id]=tt);let Q=tt[H.id];Q===void 0&&(Q={},tt[H.id]=Q);let C=Q[K];return C===void 0&&(C=m(d()),Q[K]=C),C}function m(D){let H=[],X=[],K=[];for(let tt=0;tt<s;tt++)H[tt]=0,X[tt]=0,K[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:X,attributeDivisors:K,object:D,attributes:{},index:null}}function p(D,H,X,K){let tt=c.attributes,Q=H.attributes,C=0,U=X.getAttributes();for(let B in U)if(U[B].location>=0){let W=tt[B],it=Q[B];if(it===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(it=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(it=D.instanceColor)),W===void 0||W.attribute!==it||it&&W.data!==it.data)return!0;C++}return c.attributesNum!==C||c.index!==K}function _(D,H,X,K){let tt={},Q=H.attributes,C=0,U=X.getAttributes();for(let B in U)if(U[B].location>=0){let W=Q[B];W===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(W=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(W=D.instanceColor));let it={};it.attribute=W,W&&W.data&&(it.data=W.data),tt[B]=it,C++}c.attributes=tt,c.attributesNum=C,c.index=K}function A(){let D=c.newAttributes;for(let H=0,X=D.length;H<X;H++)D[H]=0}function M(D){z(D,0)}function z(D,H){let X=c.newAttributes,K=c.enabledAttributes,tt=c.attributeDivisors;X[D]=1,K[D]===0&&(i.enableVertexAttribArray(D),K[D]=1),tt[D]!==H&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,H),tt[D]=H)}function w(){let D=c.newAttributes,H=c.enabledAttributes;for(let X=0,K=H.length;X<K;X++)H[X]!==D[X]&&(i.disableVertexAttribArray(X),H[X]=0)}function T(D,H,X,K,tt,Q,C){C===!0?i.vertexAttribIPointer(D,H,X,tt,Q):i.vertexAttribPointer(D,H,X,K,tt,Q)}function F(D,H,X,K){if(n.isWebGL2===!1&&(D.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;A();let tt=K.attributes,Q=X.getAttributes(),C=H.defaultAttributeValues;for(let U in Q){let B=Q[U];if(B.location>=0){let L=tt[U];if(L===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(L=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(L=D.instanceColor)),L!==void 0){let W=L.normalized,it=L.itemSize,ct=e.get(L);if(ct===void 0)continue;let nt=ct.buffer,bt=ct.type,wt=ct.bytesPerElement,Mt=n.isWebGL2===!0&&(bt===i.INT||bt===i.UNSIGNED_INT||L.gpuType===lu);if(L.isInterleavedBufferAttribute){let Lt=L.data,I=Lt.stride,dt=L.offset;if(Lt.isInstancedInterleavedBuffer){for(let j=0;j<B.locationSize;j++)z(B.location+j,Lt.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let j=0;j<B.locationSize;j++)M(B.location+j);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let j=0;j<B.locationSize;j++)T(B.location+j,it/B.locationSize,bt,W,I*wt,(dt+it/B.locationSize*j)*wt,Mt)}else{if(L.isInstancedBufferAttribute){for(let Lt=0;Lt<B.locationSize;Lt++)z(B.location+Lt,L.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let Lt=0;Lt<B.locationSize;Lt++)M(B.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let Lt=0;Lt<B.locationSize;Lt++)T(B.location+Lt,it/B.locationSize,bt,W,it*wt,it/B.locationSize*Lt*wt,Mt)}}else if(C!==void 0){let W=C[U];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(B.location,W);break;case 3:i.vertexAttrib3fv(B.location,W);break;case 4:i.vertexAttrib4fv(B.location,W);break;default:i.vertexAttrib1fv(B.location,W)}}}}w()}function y(){k();for(let D in o){let H=o[D];for(let X in H){let K=H[X];for(let tt in K)g(K[tt].object),delete K[tt];delete H[X]}delete o[D]}}function S(D){if(o[D.id]===void 0)return;let H=o[D.id];for(let X in H){let K=H[X];for(let tt in K)g(K[tt].object),delete K[tt];delete H[X]}delete o[D.id]}function O(D){for(let H in o){let X=o[H];if(X[D.id]===void 0)continue;let K=X[D.id];for(let tt in K)g(K[tt].object),delete K[tt];delete X[D.id]}}function k(){rt(),h=!0,c!==l&&(c=l,f(c.object))}function rt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:k,resetDefaultState:rt,dispose:y,releaseStatesOfGeometry:S,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:M,disableUnusedAttributes:w}}function U0(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function N0(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=d>0,M=a||t.has("OES_texture_float"),z=A&&M,w=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:A,floatFragmentTextures:M,floatVertexTextures:z,maxSamples:w}}function O0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new mn,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,A=_*4,M=p.clippingState||null;l.value=M,M=h(g,d,A,f);for(let z=0;z!==A;++z)M[z]=e[z];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,M=f;A!==x;++A,M+=4)a.copy(u[A]).applyMatrix4(_,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function F0(i){let t=new WeakMap;function e(a,o){return o===$a?a.mapping=as:o===tl&&(a.mapping=ls),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===$a||o===tl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new ll(l.height/2);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var fs=class extends fo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},es=4,wh=[.125,.215,.35,.446,.526,.582],yi=20,ka=new fs,Th=new zt,Ha=null,Va=0,Ga=0,_i=(1+Math.sqrt(5))/2,Qi=1/_i,Rh=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,_i,Qi),new R(0,_i,-Qi),new R(Qi,0,_i),new R(-Qi,0,_i),new R(_i,Qi,0),new R(-_i,Qi,0)],ps=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ha=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ha,Va,Ga),t.scissorTest=!1,kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===as||t.mapping===ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ha=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Qe,format:An,colorSpace:Vn,depthBuffer:!1},s=Ch(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ch(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=B0(r)),this._blurMaterial=k0(r,t,e)}return s}_compileMaterial(t){let e=new Qt(this._lodPlanes[0],t);this._renderer.compile(e,ka)}_sceneToCubeUV(t,e,n,s){let o=new Ne(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Th),h.toneMapping=ei,h.autoClear=!1;let f=new Ke({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new Qt(new _n,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(Th),x=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):_===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let A=this._cubeSize;kr(s,_*A,p>2?A:0,A,A),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===as||t.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Qt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;kr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ka)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Rh[(s-1)%Rh.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Qt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*yi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):yi;m>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yi}`);let p=[],_=0;for(let T=0;T<yi;++T){let F=T/x,y=Math.exp(-F*F/2);p.push(y),T===0?_+=y:T<m&&(_+=2*y)}for(let T=0;T<p.length;T++)p[T]=p[T]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:A}=this;d.dTheta.value=g,d.mipInt.value=A-n;let M=this._sizeLods[s],z=3*M*(s>A-es?s-A+es:0),w=4*(this._cubeSize-M);kr(e,z,w,3*M,2*M),l.setRenderTarget(e),l.render(u,ka)}};function B0(i){let t=[],e=[],n=[],s=i,r=i-es+1+wh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-es?l=wh[a-i+es-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*f),A=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let w=0;w<f;w++){let T=w%3*2/3-1,F=w>2?0:-1,y=[T,F,0,T+2/3,F,0,T+2/3,F+1,0,T,F,0,T+2/3,F+1,0,T,F+1,0];_.set(y,x*g*w),A.set(d,m*g*w);let S=[w,w,w,w,w,w];M.set(S,p*g*w)}let z=new le;z.setAttribute("position",new Ce(_,x)),z.setAttribute("uv",new Ce(A,m)),z.setAttribute("faceIndex",new Ce(M,p)),t.push(z),s>es&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ch(i,t,e){let n=new ze(i,t,e);return n.texture.mapping=Uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function kr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function k0(i,t,e){let n=new Float32Array(yi),s=new R(0,1,0);return new ve({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function zh(){return new ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Ph(){return new ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Jl(){return`

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
	`}function H0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===$a||l===tl,h=l===as||l===ls;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new ps(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new ps(i));let d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function V0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function G0(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let A=0,M=_.length;A<M;A+=3){let z=_[A+0],w=_[A+1],T=_[A+2];d.push(z,w,w,T,T,z)}}else if(g!==void 0){let _=g.array;x=g.version;for(let A=0,M=_.length/3-1;A<M;A+=3){let z=A+0,w=A+1,T=A+2;d.push(z,w,w,T,T,z)}}else return;let m=new(_u(d)?uo:ho)(d,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function W0(i,t,e,n){let s=n.isWebGL2,r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,g){i.drawElements(r,g,o,f*l),e.update(g,r,1)}function u(f,g,x){if(x===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*l,x),e.update(g,r,x)}function d(f,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,x);let p=0;for(let _=0;_<x;_++)p+=g[_];e.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function X0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function q0(i,t){return i[0]-t[0]}function Y0(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Z0(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new ae,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==g){let D=function(){k.dispose(),r.delete(h),h.removeEventListener("dispose",D)};x!==void 0&&x.texture.dispose();let _=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,z=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],F=0;_===!0&&(F=1),A===!0&&(F=2),M===!0&&(F=3);let y=h.attributes.position.count*F,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let O=new Float32Array(y*S*4*g),k=new ao(O,y,S,g);k.type=ti,k.needsUpdate=!0;let rt=F*4;for(let H=0;H<g;H++){let X=z[H],K=w[H],tt=T[H],Q=y*S*4*H;for(let C=0;C<X.count;C++){let U=C*rt;_===!0&&(a.fromBufferAttribute(X,C),O[Q+U+0]=a.x,O[Q+U+1]=a.y,O[Q+U+2]=a.z,O[Q+U+3]=0),A===!0&&(a.fromBufferAttribute(K,C),O[Q+U+4]=a.x,O[Q+U+5]=a.y,O[Q+U+6]=a.z,O[Q+U+7]=0),M===!0&&(a.fromBufferAttribute(tt,C),O[Q+U+8]=a.x,O[Q+U+9]=a.y,O[Q+U+10]=a.z,O[Q+U+11]=tt.itemSize===4?a.w:1)}}x={count:g,texture:k,size:new $(y,S)},r.set(h,x),h.addEventListener("dispose",D)}let m=0;for(let _=0;_<d.length;_++)m+=d[_];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let A=0;A<f;A++)g[A]=[A,0];n[h.id]=g}for(let A=0;A<f;A++){let M=g[A];M[0]=A,M[1]=d[A]}g.sort(Y0);for(let A=0;A<8;A++)A<f&&g[A][1]?(o[A][0]=g[A][0],o[A][1]=g[A][1]):(o[A][0]=Number.MAX_SAFE_INTEGER,o[A][1]=0);o.sort(q0);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let A=0;A<8;A++){let M=o[A],z=M[0],w=M[1];z!==Number.MAX_SAFE_INTEGER&&w?(x&&h.getAttribute("morphTarget"+A)!==x[z]&&h.setAttribute("morphTarget"+A,x[z]),m&&h.getAttribute("morphNormal"+A)!==m[z]&&h.setAttribute("morphNormal"+A,m[z]),s[A]=w,p+=w):(x&&h.hasAttribute("morphTarget"+A)===!0&&h.deleteAttribute("morphTarget"+A),m&&h.hasAttribute("morphNormal"+A)===!0&&h.deleteAttribute("morphNormal"+A),s[A]=0)}let _=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",_),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function J0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var mo=class extends an{constructor(t,e,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:Si,h!==Si&&h!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Si&&(n=$n),n===void 0&&h===cs&&(n=bi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ve,this.minFilter=l!==void 0?l:Ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},bu=new an,Su=new mo(1,1);Su.compareFunction=Au;var Eu=new ao,wu=new ol,Tu=new po,Ih=[],Lh=[],Dh=new Float32Array(16),Uh=new Float32Array(9),Nh=new Float32Array(4);function ys(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ih[s];if(r===void 0&&(r=new Float32Array(s),Ih[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Oo(i,t){let e=Lh[t];e===void 0&&(e=new Int32Array(t),Lh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Q0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function K0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function j0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function $0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function tg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Nh.set(n),i.uniformMatrix2fv(this.addr,!1,Nh),Me(e,n)}}function eg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Uh.set(n),i.uniformMatrix3fv(this.addr,!1,Uh),Me(e,n)}}function ng(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Dh.set(n),i.uniformMatrix4fv(this.addr,!1,Dh),Me(e,n)}}function ig(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function ag(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function ug(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Su:bu;e.setTexture2D(t||r,s)}function dg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||wu,s)}function fg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Tu,s)}function pg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Eu,s)}function mg(i){switch(i){case 5126:return Q0;case 35664:return K0;case 35665:return j0;case 35666:return $0;case 35674:return tg;case 35675:return eg;case 35676:return ng;case 5124:case 35670:return ig;case 35667:case 35671:return sg;case 35668:case 35672:return rg;case 35669:case 35673:return og;case 5125:return ag;case 36294:return lg;case 36295:return cg;case 36296:return hg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return pg}}function gg(i,t){i.uniform1fv(this.addr,t)}function Ag(i,t){let e=ys(t,this.size,2);i.uniform2fv(this.addr,e)}function xg(i,t){let e=ys(t,this.size,3);i.uniform3fv(this.addr,e)}function _g(i,t){let e=ys(t,this.size,4);i.uniform4fv(this.addr,e)}function vg(i,t){let e=ys(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function yg(i,t){let e=ys(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Mg(i,t){let e=ys(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function bg(i,t){i.uniform1iv(this.addr,t)}function Sg(i,t){i.uniform2iv(this.addr,t)}function Eg(i,t){i.uniform3iv(this.addr,t)}function wg(i,t){i.uniform4iv(this.addr,t)}function Tg(i,t){i.uniform1uiv(this.addr,t)}function Rg(i,t){i.uniform2uiv(this.addr,t)}function Cg(i,t){i.uniform3uiv(this.addr,t)}function zg(i,t){i.uniform4uiv(this.addr,t)}function Pg(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||bu,r[a])}function Ig(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||wu,r[a])}function Lg(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Tu,r[a])}function Dg(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Eu,r[a])}function Ug(i){switch(i){case 5126:return gg;case 35664:return Ag;case 35665:return xg;case 35666:return _g;case 35674:return vg;case 35675:return yg;case 35676:return Mg;case 5124:case 35670:return bg;case 35667:case 35671:return Sg;case 35668:case 35672:return Eg;case 35669:case 35673:return wg;case 5125:return Tg;case 36294:return Rg;case 36295:return Cg;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Pg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Dg}}var cl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=mg(e.type)}},hl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ug(e.type)}},ul=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Wa=/(\w+)(\])?(\[|\.)?/g;function Oh(i,t){i.seq.push(t),i.map[t.id]=t}function Ng(i,t,e){let n=i.name,s=n.length;for(Wa.lastIndex=0;;){let r=Wa.exec(n),a=Wa.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Oh(e,c===void 0?new cl(o,i,t):new hl(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new ul(o),Oh(e,u)),e=u}}}var os=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Ng(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Fh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Og=37297,Fg=0;function Bg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function kg(i){let t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(i),n;switch(t===e?n="":t===eo&&e===to?n="LinearDisplayP3ToLinearSRGB":t===to&&e===eo&&(n="LinearSRGBToLinearDisplayP3"),i){case Vn:case No:return[n,"LinearTransferOETF"];case fe:case Yl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Bh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Bg(i.getShaderSource(t),a)}else return s}function Hg(i,t){let e=kg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Vg(i,t){let e;switch(t){case Vl:e="Linear";break;case Gl:e="Reinhard";break;case Wl:e="OptimizedCineon";break;case hr:e="ACESFilmic";break;case Xl:e="AgX";break;case jd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Gg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ns).join(`
`)}function Wg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ns).join(`
`)}function Xg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function qg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ns(i){return i!==""}function kh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function dl(i){return i.replace(Yg,Jg)}var Zg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Jg(i,t){let e=Ht[t];if(e===void 0){let n=Zg.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return dl(e)}var Qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vh(i){return i.replace(Qg,Kg)}function Kg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gh(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function jg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ru?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function $g(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case as:case ls:t="ENVMAP_TYPE_CUBE";break;case Uo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tA(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ls:t="ENVMAP_MODE_REFRACTION";break}return t}function eA(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ou:t="ENVMAP_BLENDING_MULTIPLY";break;case Qd:t="ENVMAP_BLENDING_MIX";break;case Kd:t="ENVMAP_BLENDING_ADD";break}return t}function nA(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function iA(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=jg(e),c=$g(e),h=tA(e),u=eA(e),d=nA(e),f=e.isWebGL2?"":Gg(e),g=Wg(e),x=Xg(r),m=s.createProgram(),p,_,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ns).join(`
`),p.length>0&&(p+=`
`),_=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ns).join(`
`),_.length>0&&(_+=`
`)):(p=[Gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),_=[f,Gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?Ht.tonemapping_pars_fragment:"",e.toneMapping!==ei?Vg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Hg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ns).join(`
`)),a=dl(a),a=kh(a,e),a=Hh(a,e),o=dl(o),o=kh(o,e),o=Hh(o,e),a=Vh(a),o=Vh(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let M=A+p+a,z=A+_+o,w=Fh(s,s.VERTEX_SHADER,M),T=Fh(s,s.FRAGMENT_SHADER,z);s.attachShader(m,w),s.attachShader(m,T),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function F(k){if(i.debug.checkShaderErrors){let rt=s.getProgramInfoLog(m).trim(),D=s.getShaderInfoLog(w).trim(),H=s.getShaderInfoLog(T).trim(),X=!0,K=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,w,T);else{let tt=Bh(s,w,"vertex"),Q=Bh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+rt+`
`+tt+`
`+Q)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(D===""||H==="")&&(K=!1);K&&(k.diagnostics={runnable:X,programLog:rt,vertexShader:{log:D,prefix:p},fragmentShader:{log:H,prefix:_}})}s.deleteShader(w),s.deleteShader(T),y=new os(s,m),S=qg(s,m)}let y;this.getUniforms=function(){return y===void 0&&F(this),y};let S;this.getAttributes=function(){return S===void 0&&F(this),S};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(m,Og)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Fg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=T,this}var sA=0,fl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new pl(t),e.set(t,n)),n}},pl=class{constructor(t){this.id=sA++,this.code=t,this.usedTimes=0}};function rA(i,t,e,n,s,r,a){let o=new co,l=new fl,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function m(y,S,O,k,rt){let D=k.fog,H=rt.geometry,X=y.isMeshStandardMaterial?k.environment:null,K=(y.isMeshStandardMaterial?e:t).get(y.envMap||X),tt=K&&K.mapping===Uo?K.image.height:null,Q=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let C=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,U=C!==void 0?C.length:0,B=0;H.morphAttributes.position!==void 0&&(B=1),H.morphAttributes.normal!==void 0&&(B=2),H.morphAttributes.color!==void 0&&(B=3);let L,W,it,ct;if(Q){let Fe=En[Q];L=Fe.vertexShader,W=Fe.fragmentShader}else L=y.vertexShader,W=y.fragmentShader,l.update(y),it=l.getVertexShaderID(y),ct=l.getFragmentShaderID(y);let nt=i.getRenderTarget(),bt=rt.isInstancedMesh===!0,wt=rt.isBatchedMesh===!0,Mt=!!y.map,Lt=!!y.matcap,I=!!K,dt=!!y.aoMap,j=!!y.lightMap,ut=!!y.bumpMap,et=!!y.normalMap,Rt=!!y.displacementMap,yt=!!y.emissiveMap,b=!!y.metalnessMap,v=!!y.roughnessMap,G=y.anisotropy>0,ht=y.clearcoat>0,ot=y.iridescence>0,st=y.sheen>0,Tt=y.transmission>0,vt=G&&!!y.anisotropyMap,St=ht&&!!y.clearcoatMap,Dt=ht&&!!y.clearcoatNormalMap,Ft=ht&&!!y.clearcoatRoughnessMap,at=ot&&!!y.iridescenceMap,Xt=ot&&!!y.iridescenceThicknessMap,P=st&&!!y.sheenColorMap,lt=st&&!!y.sheenRoughnessMap,At=!!y.specularMap,ft=!!y.specularColorMap,Ct=!!y.specularIntensityMap,qt=Tt&&!!y.transmissionMap,Jt=Tt&&!!y.thicknessMap,Vt=!!y.gradientMap,gt=!!y.alphaMap,N=y.alphaTest>0,pt=!!y.alphaHash,mt=!!y.extensions,Ut=!!H.attributes.uv1,Pt=!!H.attributes.uv2,jt=!!H.attributes.uv3,$t=ei;return y.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&($t=i.toneMapping),{isWebGL2:h,shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:L,fragmentShader:W,defines:y.defines,customVertexShaderID:it,customFragmentShaderID:ct,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:wt,instancing:bt,instancingColor:bt&&rt.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Vn,map:Mt,matcap:Lt,envMap:I,envMapMode:I&&K.mapping,envMapCubeUVHeight:tt,aoMap:dt,lightMap:j,bumpMap:ut,normalMap:et,displacementMap:d&&Rt,emissiveMap:yt,normalMapObjectSpace:et&&y.normalMapType===uf,normalMapTangentSpace:et&&y.normalMapType===gu,metalnessMap:b,roughnessMap:v,anisotropy:G,anisotropyMap:vt,clearcoat:ht,clearcoatMap:St,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Ft,iridescence:ot,iridescenceMap:at,iridescenceThicknessMap:Xt,sheen:st,sheenColorMap:P,sheenRoughnessMap:lt,specularMap:At,specularColorMap:ft,specularIntensityMap:Ct,transmission:Tt,transmissionMap:qt,thicknessMap:Jt,gradientMap:Vt,opaque:y.transparent===!1&&y.blending===ss,alphaMap:gt,alphaTest:N,alphaHash:pt,combine:y.combine,mapUv:Mt&&x(y.map.channel),aoMapUv:dt&&x(y.aoMap.channel),lightMapUv:j&&x(y.lightMap.channel),bumpMapUv:ut&&x(y.bumpMap.channel),normalMapUv:et&&x(y.normalMap.channel),displacementMapUv:Rt&&x(y.displacementMap.channel),emissiveMapUv:yt&&x(y.emissiveMap.channel),metalnessMapUv:b&&x(y.metalnessMap.channel),roughnessMapUv:v&&x(y.roughnessMap.channel),anisotropyMapUv:vt&&x(y.anisotropyMap.channel),clearcoatMapUv:St&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:P&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:lt&&x(y.sheenRoughnessMap.channel),specularMapUv:At&&x(y.specularMap.channel),specularColorMapUv:ft&&x(y.specularColorMap.channel),specularIntensityMapUv:Ct&&x(y.specularIntensityMap.channel),transmissionMapUv:qt&&x(y.transmissionMap.channel),thicknessMapUv:Jt&&x(y.thicknessMap.channel),alphaMapUv:gt&&x(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(et||G),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:Ut,vertexUv2s:Pt,vertexUv3s:jt,pointsUvs:rt.isPoints===!0&&!!H.attributes.uv&&(Mt||gt),fog:!!D,useFog:y.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:rt.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:B,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:$t,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Mt&&y.map.isVideoTexture===!0&&te.getTransfer(y.map.colorSpace)===ie,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Je,flipSided:y.side===Re,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:mt&&y.extensions.derivatives===!0,extensionFragDepth:mt&&y.extensions.fragDepth===!0,extensionDrawBuffers:mt&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:mt&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:mt&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let O in y.defines)S.push(O),S.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(_(S,y),A(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function _(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function A(y,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function M(y){let S=g[y.type],O;if(S){let k=En[S];O=ai.clone(k.uniforms)}else O=y.uniforms;return O}function z(y,S){let O;for(let k=0,rt=c.length;k<rt;k++){let D=c[k];if(D.cacheKey===S){O=D,++O.usedTimes;break}}return O===void 0&&(O=new iA(i,S,y,r),c.push(O)),O}function w(y){if(--y.usedTimes===0){let S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),y.destroy()}}function T(y){l.remove(y)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:z,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:F}}function oA(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function aA(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Wh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function o(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||aA),n.length>1&&n.sort(d||Wh),s.length>1&&s.sort(d||Wh)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function lA(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Xh,i.set(n,[a])):s>=r.length?(a=new Xh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function cA(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new zt};break;case"SpotLight":e={position:new R,direction:new R,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function hA(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var uA=0;function dA(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function fA(i,t){let e=new cA,n=hA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new R);let r=new R,a=new pe,o=new pe;function l(h,u){let d=0,f=0,g=0;for(let k=0;k<9;k++)s.probe[k].set(0,0,0);let x=0,m=0,p=0,_=0,A=0,M=0,z=0,w=0,T=0,F=0,y=0;h.sort(dA);let S=u===!0?Math.PI:1;for(let k=0,rt=h.length;k<rt;k++){let D=h[k],H=D.color,X=D.intensity,K=D.distance,tt=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=H.r*X*S,f+=H.g*X*S,g+=H.b*X*S;else if(D.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(D.sh.coefficients[Q],X);y++}else if(D.isDirectionalLight){let Q=e.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){let C=D.shadow,U=n.get(D);U.shadowBias=C.bias,U.shadowNormalBias=C.normalBias,U.shadowRadius=C.radius,U.shadowMapSize=C.mapSize,s.directionalShadow[x]=U,s.directionalShadowMap[x]=tt,s.directionalShadowMatrix[x]=D.shadow.matrix,M++}s.directional[x]=Q,x++}else if(D.isSpotLight){let Q=e.get(D);Q.position.setFromMatrixPosition(D.matrixWorld),Q.color.copy(H).multiplyScalar(X*S),Q.distance=K,Q.coneCos=Math.cos(D.angle),Q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Q.decay=D.decay,s.spot[p]=Q;let C=D.shadow;if(D.map&&(s.spotLightMap[T]=D.map,T++,C.updateMatrices(D),D.castShadow&&F++),s.spotLightMatrix[p]=C.matrix,D.castShadow){let U=n.get(D);U.shadowBias=C.bias,U.shadowNormalBias=C.normalBias,U.shadowRadius=C.radius,U.shadowMapSize=C.mapSize,s.spotShadow[p]=U,s.spotShadowMap[p]=tt,w++}p++}else if(D.isRectAreaLight){let Q=e.get(D);Q.color.copy(H).multiplyScalar(X),Q.halfWidth.set(D.width*.5,0,0),Q.halfHeight.set(0,D.height*.5,0),s.rectArea[_]=Q,_++}else if(D.isPointLight){let Q=e.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity*S),Q.distance=D.distance,Q.decay=D.decay,D.castShadow){let C=D.shadow,U=n.get(D);U.shadowBias=C.bias,U.shadowNormalBias=C.normalBias,U.shadowRadius=C.radius,U.shadowMapSize=C.mapSize,U.shadowCameraNear=C.camera.near,U.shadowCameraFar=C.camera.far,s.pointShadow[m]=U,s.pointShadowMap[m]=tt,s.pointShadowMatrix[m]=D.shadow.matrix,z++}s.point[m]=Q,m++}else if(D.isHemisphereLight){let Q=e.get(D);Q.skyColor.copy(D.color).multiplyScalar(X*S),Q.groundColor.copy(D.groundColor).multiplyScalar(X*S),s.hemi[A]=Q,A++}}_>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_t.LTC_FLOAT_1,s.rectAreaLTC2=_t.LTC_FLOAT_2):(s.rectAreaLTC1=_t.LTC_HALF_1,s.rectAreaLTC2=_t.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_t.LTC_FLOAT_1,s.rectAreaLTC2=_t.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=_t.LTC_HALF_1,s.rectAreaLTC2=_t.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let O=s.hash;(O.directionalLength!==x||O.pointLength!==m||O.spotLength!==p||O.rectAreaLength!==_||O.hemiLength!==A||O.numDirectionalShadows!==M||O.numPointShadows!==z||O.numSpotShadows!==w||O.numSpotMaps!==T||O.numLightProbes!==y)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=_,s.point.length=m,s.hemi.length=A,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=z,s.pointShadowMap.length=z,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=z,s.spotLightMatrix.length=w+T-F,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=y,O.directionalLength=x,O.pointLength=m,O.spotLength=p,O.rectAreaLength=_,O.hemiLength=A,O.numDirectionalShadows=M,O.numPointShadows=z,O.numSpotShadows=w,O.numSpotMaps=T,O.numLightProbes=y,s.version=uA++)}function c(h,u){let d=0,f=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let _=0,A=h.length;_<A;_++){let M=h[_];if(M.isDirectionalLight){let z=s.directional[d];z.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),z.direction.sub(r),z.direction.transformDirection(p),d++}else if(M.isSpotLight){let z=s.spot[g];z.position.setFromMatrixPosition(M.matrixWorld),z.position.applyMatrix4(p),z.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),z.direction.sub(r),z.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let z=s.rectArea[x];z.position.setFromMatrixPosition(M.matrixWorld),z.position.applyMatrix4(p),o.identity(),a.copy(M.matrixWorld),a.premultiply(p),o.extractRotation(a),z.halfWidth.set(M.width*.5,0,0),z.halfHeight.set(0,M.height*.5,0),z.halfWidth.applyMatrix4(o),z.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let z=s.point[f];z.position.setFromMatrixPosition(M.matrixWorld),z.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let z=s.hemi[m];z.direction.setFromMatrixPosition(M.matrixWorld),z.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function qh(i,t){let e=new fA(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function pA(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),l;return o===void 0?(l=new qh(i,t),e.set(r,[l])):a>=o.length?(l=new qh(i,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var ml=class extends Wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},gl=class extends Wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},mA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gA=`uniform sampler2D shadow_pass;
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
}`;function AA(i,t,e){let n=new Qs,s=new $,r=new $,a=new ae,o=new ml({depthPacking:hf}),l=new gl,c={},h=e.maxTextureSize,u={[si]:Re,[Re]:si,[Je]:Je},d=new ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:mA,fragmentShader:gA}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new le;g.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Qt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru;let p=this.type;this.render=function(w,T,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let y=i.getRenderTarget(),S=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Tn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let rt=p!==kn&&this.type===kn,D=p===kn&&this.type!==kn;for(let H=0,X=w.length;H<X;H++){let K=w[H],tt=K.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);let Q=tt.getFrameExtents();if(s.multiply(Q),r.copy(tt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,tt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,tt.mapSize.y=r.y)),tt.map===null||rt===!0||D===!0){let U=this.type!==kn?{minFilter:Ve,magFilter:Ve}:{};tt.map!==null&&tt.map.dispose(),tt.map=new ze(s.x,s.y,U),tt.map.texture.name=K.name+".shadowMap",tt.camera.updateProjectionMatrix()}i.setRenderTarget(tt.map),i.clear();let C=tt.getViewportCount();for(let U=0;U<C;U++){let B=tt.getViewport(U);a.set(r.x*B.x,r.y*B.y,r.x*B.z,r.y*B.w),k.viewport(a),tt.updateMatrices(K,U),n=tt.getFrustum(),M(T,F,tt.camera,K,this.type)}tt.isPointLightShadow!==!0&&this.type===kn&&_(tt,F),tt.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,S,O)};function _(w,T){let F=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ze(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,F,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,F,f,x,null)}function A(w,T,F,y){let S=null,O=F.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0)S=O;else if(S=F.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let k=S.uuid,rt=T.uuid,D=c[k];D===void 0&&(D={},c[k]=D);let H=D[rt];H===void 0&&(H=S.clone(),D[rt]=H,T.addEventListener("dispose",z)),S=H}if(S.visible=T.visible,S.wireframe=T.wireframe,y===kn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:u[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let k=i.properties.get(S);k.light=F}return S}function M(w,T,F,y,S){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===kn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,w.matrixWorld);let rt=t.update(w),D=w.material;if(Array.isArray(D)){let H=rt.groups;for(let X=0,K=H.length;X<K;X++){let tt=H[X],Q=D[tt.materialIndex];if(Q&&Q.visible){let C=A(w,Q,y,S);w.onBeforeShadow(i,w,T,F,rt,C,tt),i.renderBufferDirect(F,null,rt,C,w,tt),w.onAfterShadow(i,w,T,F,rt,C,tt)}}}else if(D.visible){let H=A(w,D,y,S);w.onBeforeShadow(i,w,T,F,rt,H,null),i.renderBufferDirect(F,null,rt,H,w,null),w.onAfterShadow(i,w,T,F,rt,H,null)}}let k=w.children;for(let rt=0,D=k.length;rt<D;rt++)M(k[rt],T,F,y,S)}function z(w){w.target.removeEventListener("dispose",z);for(let F in c){let y=c[F],S=w.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}function xA(i,t,e){let n=e.isWebGL2;function s(){let N=!1,pt=new ae,mt=null,Ut=new ae(0,0,0,0);return{setMask:function(Pt){mt!==Pt&&!N&&(i.colorMask(Pt,Pt,Pt,Pt),mt=Pt)},setLocked:function(Pt){N=Pt},setClear:function(Pt,jt,$t,Se,Fe){Fe===!0&&(Pt*=Se,jt*=Se,$t*=Se),pt.set(Pt,jt,$t,Se),Ut.equals(pt)===!1&&(i.clearColor(Pt,jt,$t,Se),Ut.copy(pt))},reset:function(){N=!1,mt=null,Ut.set(-1,0,0,0)}}}function r(){let N=!1,pt=null,mt=null,Ut=null;return{setTest:function(Pt){Pt?wt(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(Pt){pt!==Pt&&!N&&(i.depthMask(Pt),pt=Pt)},setFunc:function(Pt){if(mt!==Pt){switch(Pt){case Gd:i.depthFunc(i.NEVER);break;case Wd:i.depthFunc(i.ALWAYS);break;case Xd:i.depthFunc(i.LESS);break;case Qr:i.depthFunc(i.LEQUAL);break;case qd:i.depthFunc(i.EQUAL);break;case Yd:i.depthFunc(i.GEQUAL);break;case Zd:i.depthFunc(i.GREATER);break;case Jd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=Pt}},setLocked:function(Pt){N=Pt},setClear:function(Pt){Ut!==Pt&&(i.clearDepth(Pt),Ut=Pt)},reset:function(){N=!1,pt=null,mt=null,Ut=null}}}function a(){let N=!1,pt=null,mt=null,Ut=null,Pt=null,jt=null,$t=null,Se=null,Fe=null;return{setTest:function(re){N||(re?wt(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(re){pt!==re&&!N&&(i.stencilMask(re),pt=re)},setFunc:function(re,Be,Sn){(mt!==re||Ut!==Be||Pt!==Sn)&&(i.stencilFunc(re,Be,Sn),mt=re,Ut=Be,Pt=Sn)},setOp:function(re,Be,Sn){(jt!==re||$t!==Be||Se!==Sn)&&(i.stencilOp(re,Be,Sn),jt=re,$t=Be,Se=Sn)},setLocked:function(re){N=re},setClear:function(re){Fe!==re&&(i.clearStencil(re),Fe=re)},reset:function(){N=!1,pt=null,mt=null,Ut=null,Pt=null,jt=null,$t=null,Se=null,Fe=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,x=[],m=null,p=!1,_=null,A=null,M=null,z=null,w=null,T=null,F=null,y=new zt(0,0,0),S=0,O=!1,k=null,rt=null,D=null,H=null,X=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),tt=!1,Q=0,C=i.getParameter(i.VERSION);C.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(C)[1]),tt=Q>=1):C.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),tt=Q>=2);let U=null,B={},L=i.getParameter(i.SCISSOR_BOX),W=i.getParameter(i.VIEWPORT),it=new ae().fromArray(L),ct=new ae().fromArray(W);function nt(N,pt,mt,Ut){let Pt=new Uint8Array(4),jt=i.createTexture();i.bindTexture(N,jt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<mt;$t++)n&&(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)?i.texImage3D(pt,0,i.RGBA,1,1,Ut,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(pt+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return jt}let bt={};bt[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),bt[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(bt[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),bt[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),wt(i.DEPTH_TEST),l.setFunc(Qr),yt(!1),b(Tc),wt(i.CULL_FACE),et(Tn);function wt(N){d[N]!==!0&&(i.enable(N),d[N]=!0)}function Mt(N){d[N]!==!1&&(i.disable(N),d[N]=!1)}function Lt(N,pt){return f[N]!==pt?(i.bindFramebuffer(N,pt),f[N]=pt,n&&(N===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=pt),N===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=pt)),!0):!1}function I(N,pt){let mt=x,Ut=!1;if(N)if(mt=g.get(pt),mt===void 0&&(mt=[],g.set(pt,mt)),N.isWebGLMultipleRenderTargets){let Pt=N.texture;if(mt.length!==Pt.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let jt=0,$t=Pt.length;jt<$t;jt++)mt[jt]=i.COLOR_ATTACHMENT0+jt;mt.length=Pt.length,Ut=!0}}else mt[0]!==i.COLOR_ATTACHMENT0&&(mt[0]=i.COLOR_ATTACHMENT0,Ut=!0);else mt[0]!==i.BACK&&(mt[0]=i.BACK,Ut=!0);Ut&&(e.isWebGL2?i.drawBuffers(mt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(mt))}function dt(N){return m!==N?(i.useProgram(N),m=N,!0):!1}let j={[vi]:i.FUNC_ADD,[Rd]:i.FUNC_SUBTRACT,[Cd]:i.FUNC_REVERSE_SUBTRACT};if(n)j[zc]=i.MIN,j[Pc]=i.MAX;else{let N=t.get("EXT_blend_minmax");N!==null&&(j[zc]=N.MIN_EXT,j[Pc]=N.MAX_EXT)}let ut={[zd]:i.ZERO,[Pd]:i.ONE,[Id]:i.SRC_COLOR,[Ka]:i.SRC_ALPHA,[Fd]:i.SRC_ALPHA_SATURATE,[Nd]:i.DST_COLOR,[Dd]:i.DST_ALPHA,[Ld]:i.ONE_MINUS_SRC_COLOR,[ja]:i.ONE_MINUS_SRC_ALPHA,[Od]:i.ONE_MINUS_DST_COLOR,[Ud]:i.ONE_MINUS_DST_ALPHA,[Bd]:i.CONSTANT_COLOR,[kd]:i.ONE_MINUS_CONSTANT_COLOR,[Hd]:i.CONSTANT_ALPHA,[Vd]:i.ONE_MINUS_CONSTANT_ALPHA};function et(N,pt,mt,Ut,Pt,jt,$t,Se,Fe,re){if(N===Tn){p===!0&&(Mt(i.BLEND),p=!1);return}if(p===!1&&(wt(i.BLEND),p=!0),N!==Td){if(N!==_||re!==O){if((A!==vi||w!==vi)&&(i.blendEquation(i.FUNC_ADD),A=vi,w=vi),re)switch(N){case ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ri:i.blendFunc(i.ONE,i.ONE);break;case Rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ri:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,z=null,T=null,F=null,y.set(0,0,0),S=0,_=N,O=re}return}Pt=Pt||pt,jt=jt||mt,$t=$t||Ut,(pt!==A||Pt!==w)&&(i.blendEquationSeparate(j[pt],j[Pt]),A=pt,w=Pt),(mt!==M||Ut!==z||jt!==T||$t!==F)&&(i.blendFuncSeparate(ut[mt],ut[Ut],ut[jt],ut[$t]),M=mt,z=Ut,T=jt,F=$t),(Se.equals(y)===!1||Fe!==S)&&(i.blendColor(Se.r,Se.g,Se.b,Fe),y.copy(Se),S=Fe),_=N,O=!1}function Rt(N,pt){N.side===Je?Mt(i.CULL_FACE):wt(i.CULL_FACE);let mt=N.side===Re;pt&&(mt=!mt),yt(mt),N.blending===ss&&N.transparent===!1?et(Tn):et(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);let Ut=N.stencilWrite;c.setTest(Ut),Ut&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),G(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?wt(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function yt(N){k!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),k=N)}function b(N){N!==Ed?(wt(i.CULL_FACE),N!==rt&&(N===Tc?i.cullFace(i.BACK):N===wd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),rt=N}function v(N){N!==D&&(tt&&i.lineWidth(N),D=N)}function G(N,pt,mt){N?(wt(i.POLYGON_OFFSET_FILL),(H!==pt||X!==mt)&&(i.polygonOffset(pt,mt),H=pt,X=mt)):Mt(i.POLYGON_OFFSET_FILL)}function ht(N){N?wt(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function ot(N){N===void 0&&(N=i.TEXTURE0+K-1),U!==N&&(i.activeTexture(N),U=N)}function st(N,pt,mt){mt===void 0&&(U===null?mt=i.TEXTURE0+K-1:mt=U);let Ut=B[mt];Ut===void 0&&(Ut={type:void 0,texture:void 0},B[mt]=Ut),(Ut.type!==N||Ut.texture!==pt)&&(U!==mt&&(i.activeTexture(mt),U=mt),i.bindTexture(N,pt||bt[N]),Ut.type=N,Ut.texture=pt)}function Tt(){let N=B[U];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function vt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Dt(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ft(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function P(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function lt(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(N){it.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),it.copy(N))}function qt(N){ct.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ct.copy(N))}function Jt(N,pt){let mt=u.get(pt);mt===void 0&&(mt=new WeakMap,u.set(pt,mt));let Ut=mt.get(N);Ut===void 0&&(Ut=i.getUniformBlockIndex(pt,N.name),mt.set(N,Ut))}function Vt(N,pt){let Ut=u.get(pt).get(N);h.get(pt)!==Ut&&(i.uniformBlockBinding(pt,Ut,N.__bindingPointIndex),h.set(pt,Ut))}function gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},U=null,B={},f={},g=new WeakMap,x=[],m=null,p=!1,_=null,A=null,M=null,z=null,w=null,T=null,F=null,y=new zt(0,0,0),S=0,O=!1,k=null,rt=null,D=null,H=null,X=null,it.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:wt,disable:Mt,bindFramebuffer:Lt,drawBuffers:I,useProgram:dt,setBlending:et,setMaterial:Rt,setFlipSided:yt,setCullFace:b,setLineWidth:v,setPolygonOffset:G,setScissorTest:ht,activeTexture:ot,bindTexture:st,unbindTexture:Tt,compressedTexImage2D:vt,compressedTexImage3D:St,texImage2D:At,texImage3D:ft,updateUBOMapping:Jt,uniformBlockBinding:Vt,texStorage2D:P,texStorage3D:lt,texSubImage2D:Dt,texSubImage3D:Ft,compressedTexSubImage2D:at,compressedTexSubImage3D:Xt,scissor:Ct,viewport:qt,reset:gt}}function _A(i,t,e,n,s,r,a){let o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return f?new OffscreenCanvas(b,v):so("canvas")}function x(b,v,G,ht){let ot=1;if((b.width>ht||b.height>ht)&&(ot=ht/Math.max(b.width,b.height)),ot<1||v===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){let st=v?io:Math.floor,Tt=st(ot*b.width),vt=st(ot*b.height);u===void 0&&(u=g(Tt,vt));let St=G?g(Tt,vt):u;return St.width=Tt,St.height=vt,St.getContext("2d").drawImage(b,0,0,Tt,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Tt+"x"+vt+")."),St}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return sl(b.width)&&sl(b.height)}function p(b){return o?!1:b.wrapS!==gn||b.wrapT!==gn||b.minFilter!==Ve&&b.minFilter!==rn}function _(b,v){return b.generateMipmaps&&v&&b.minFilter!==Ve&&b.minFilter!==rn}function A(b){i.generateMipmap(b)}function M(b,v,G,ht,ot=!1){if(o===!1)return v;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let st=v;if(v===i.RED&&(G===i.FLOAT&&(st=i.R32F),G===i.HALF_FLOAT&&(st=i.R16F),G===i.UNSIGNED_BYTE&&(st=i.R8)),v===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(st=i.R8UI),G===i.UNSIGNED_SHORT&&(st=i.R16UI),G===i.UNSIGNED_INT&&(st=i.R32UI),G===i.BYTE&&(st=i.R8I),G===i.SHORT&&(st=i.R16I),G===i.INT&&(st=i.R32I)),v===i.RG&&(G===i.FLOAT&&(st=i.RG32F),G===i.HALF_FLOAT&&(st=i.RG16F),G===i.UNSIGNED_BYTE&&(st=i.RG8)),v===i.RGBA){let Tt=ot?$r:te.getTransfer(ht);G===i.FLOAT&&(st=i.RGBA32F),G===i.HALF_FLOAT&&(st=i.RGBA16F),G===i.UNSIGNED_BYTE&&(st=Tt===ie?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function z(b,v,G){return _(b,G)===!0||b.isFramebufferTexture&&b.minFilter!==Ve&&b.minFilter!==rn?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function w(b){return b===Ve||b===Ic||b===ga?i.NEAREST:i.LINEAR}function T(b){let v=b.target;v.removeEventListener("dispose",T),y(v),v.isVideoTexture&&h.delete(v)}function F(b){let v=b.target;v.removeEventListener("dispose",F),O(v)}function y(b){let v=n.get(b);if(v.__webglInit===void 0)return;let G=b.source,ht=d.get(G);if(ht){let ot=ht[v.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&S(b),Object.keys(ht).length===0&&d.delete(G)}n.remove(b)}function S(b){let v=n.get(b);i.deleteTexture(v.__webglTexture);let G=b.source,ht=d.get(G);delete ht[v.__cacheKey],a.memory.textures--}function O(b){let v=b.texture,G=n.get(b),ht=n.get(v);if(ht.__webglTexture!==void 0&&(i.deleteTexture(ht.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(G.__webglFramebuffer[ot]))for(let st=0;st<G.__webglFramebuffer[ot].length;st++)i.deleteFramebuffer(G.__webglFramebuffer[ot][st]);else i.deleteFramebuffer(G.__webglFramebuffer[ot]);G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer[ot])}else{if(Array.isArray(G.__webglFramebuffer))for(let ot=0;ot<G.__webglFramebuffer.length;ot++)i.deleteFramebuffer(G.__webglFramebuffer[ot]);else i.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&i.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ot=0;ot<G.__webglColorRenderbuffer.length;ot++)G.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(G.__webglColorRenderbuffer[ot]);G.__webglDepthRenderbuffer&&i.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ot=0,st=v.length;ot<st;ot++){let Tt=n.get(v[ot]);Tt.__webglTexture&&(i.deleteTexture(Tt.__webglTexture),a.memory.textures--),n.remove(v[ot])}n.remove(v),n.remove(b)}let k=0;function rt(){k=0}function D(){let b=k;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),k+=1,b}function H(b){let v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function X(b,v){let G=n.get(b);if(b.isVideoTexture&&Rt(b),b.isRenderTargetTexture===!1&&b.version>0&&G.__version!==b.version){let ht=b.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(G,b,v);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+v)}function K(b,v){let G=n.get(b);if(b.version>0&&G.__version!==b.version){it(G,b,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+v)}function tt(b,v){let G=n.get(b);if(b.version>0&&G.__version!==b.version){it(G,b,v);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+v)}function Q(b,v){let G=n.get(b);if(b.version>0&&G.__version!==b.version){ct(G,b,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+v)}let C={[Ys]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[el]:i.MIRRORED_REPEAT},U={[Ve]:i.NEAREST,[Ic]:i.NEAREST_MIPMAP_NEAREST,[ga]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[$d]:i.LINEAR_MIPMAP_NEAREST,[Zs]:i.LINEAR_MIPMAP_LINEAR},B={[df]:i.NEVER,[xf]:i.ALWAYS,[ff]:i.LESS,[Au]:i.LEQUAL,[pf]:i.EQUAL,[Af]:i.GEQUAL,[mf]:i.GREATER,[gf]:i.NOTEQUAL};function L(b,v,G){if(G?(i.texParameteri(b,i.TEXTURE_WRAP_S,C[v.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,C[v.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,C[v.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,U[v.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,U[v.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==gn||v.wrapT!==gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,w(v.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,w(v.minFilter)),v.minFilter!==Ve&&v.minFilter!==rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,B[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let ht=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===Ve||v.minFilter!==ga&&v.minFilter!==Zs||v.type===ti&&t.has("OES_texture_float_linear")===!1||o===!1&&v.type===Qe&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(b,ht.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function W(b,v){let G=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",T));let ht=v.source,ot=d.get(ht);ot===void 0&&(ot={},d.set(ht,ot));let st=H(v);if(st!==b.__cacheKey){ot[st]===void 0&&(ot[st]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ot[st].usedTimes++;let Tt=ot[b.__cacheKey];Tt!==void 0&&(ot[b.__cacheKey].usedTimes--,Tt.usedTimes===0&&S(v)),b.__cacheKey=st,b.__webglTexture=ot[st].texture}return G}function it(b,v,G){let ht=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ht=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ht=i.TEXTURE_3D);let ot=W(b,v),st=v.source;e.bindTexture(ht,b.__webglTexture,i.TEXTURE0+G);let Tt=n.get(st);if(st.version!==Tt.__version||ot===!0){e.activeTexture(i.TEXTURE0+G);let vt=te.getPrimaries(te.workingColorSpace),St=v.colorSpace===on?null:te.getPrimaries(v.colorSpace),Dt=v.colorSpace===on||vt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let Ft=p(v)&&m(v.image)===!1,at=x(v.image,Ft,!1,s.maxTextureSize);at=yt(v,at);let Xt=m(at)||o,P=r.convert(v.format,v.colorSpace),lt=r.convert(v.type),At=M(v.internalFormat,P,lt,v.colorSpace,v.isVideoTexture);L(ht,v,Xt);let ft,Ct=v.mipmaps,qt=o&&v.isVideoTexture!==!0&&At!==pu,Jt=Tt.__version===void 0||ot===!0,Vt=z(v,at,Xt);if(v.isDepthTexture)At=i.DEPTH_COMPONENT,o?v.type===ti?At=i.DEPTH_COMPONENT32F:v.type===$n?At=i.DEPTH_COMPONENT24:v.type===bi?At=i.DEPTH24_STENCIL8:At=i.DEPTH_COMPONENT16:v.type===ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Si&&At===i.DEPTH_COMPONENT&&v.type!==ql&&v.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=$n,lt=r.convert(v.type)),v.format===cs&&At===i.DEPTH_COMPONENT&&(At=i.DEPTH_STENCIL,v.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=bi,lt=r.convert(v.type))),Jt&&(qt?e.texStorage2D(i.TEXTURE_2D,1,At,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,At,at.width,at.height,0,P,lt,null));else if(v.isDataTexture)if(Ct.length>0&&Xt){qt&&Jt&&e.texStorage2D(i.TEXTURE_2D,Vt,At,Ct[0].width,Ct[0].height);for(let gt=0,N=Ct.length;gt<N;gt++)ft=Ct[gt],qt?e.texSubImage2D(i.TEXTURE_2D,gt,0,0,ft.width,ft.height,P,lt,ft.data):e.texImage2D(i.TEXTURE_2D,gt,At,ft.width,ft.height,0,P,lt,ft.data);v.generateMipmaps=!1}else qt?(Jt&&e.texStorage2D(i.TEXTURE_2D,Vt,At,at.width,at.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,P,lt,at.data)):e.texImage2D(i.TEXTURE_2D,0,At,at.width,at.height,0,P,lt,at.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){qt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,At,Ct[0].width,Ct[0].height,at.depth);for(let gt=0,N=Ct.length;gt<N;gt++)ft=Ct[gt],v.format!==An?P!==null?qt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,ft.width,ft.height,at.depth,P,ft.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,At,ft.width,ft.height,at.depth,0,ft.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,ft.width,ft.height,at.depth,P,lt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,At,ft.width,ft.height,at.depth,0,P,lt,ft.data)}else{qt&&Jt&&e.texStorage2D(i.TEXTURE_2D,Vt,At,Ct[0].width,Ct[0].height);for(let gt=0,N=Ct.length;gt<N;gt++)ft=Ct[gt],v.format!==An?P!==null?qt?e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,ft.width,ft.height,P,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,At,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage2D(i.TEXTURE_2D,gt,0,0,ft.width,ft.height,P,lt,ft.data):e.texImage2D(i.TEXTURE_2D,gt,At,ft.width,ft.height,0,P,lt,ft.data)}else if(v.isDataArrayTexture)qt?(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,At,at.width,at.height,at.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,P,lt,at.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,at.width,at.height,at.depth,0,P,lt,at.data);else if(v.isData3DTexture)qt?(Jt&&e.texStorage3D(i.TEXTURE_3D,Vt,At,at.width,at.height,at.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,P,lt,at.data)):e.texImage3D(i.TEXTURE_3D,0,At,at.width,at.height,at.depth,0,P,lt,at.data);else if(v.isFramebufferTexture){if(Jt)if(qt)e.texStorage2D(i.TEXTURE_2D,Vt,At,at.width,at.height);else{let gt=at.width,N=at.height;for(let pt=0;pt<Vt;pt++)e.texImage2D(i.TEXTURE_2D,pt,At,gt,N,0,P,lt,null),gt>>=1,N>>=1}}else if(Ct.length>0&&Xt){qt&&Jt&&e.texStorage2D(i.TEXTURE_2D,Vt,At,Ct[0].width,Ct[0].height);for(let gt=0,N=Ct.length;gt<N;gt++)ft=Ct[gt],qt?e.texSubImage2D(i.TEXTURE_2D,gt,0,0,P,lt,ft):e.texImage2D(i.TEXTURE_2D,gt,At,P,lt,ft);v.generateMipmaps=!1}else qt?(Jt&&e.texStorage2D(i.TEXTURE_2D,Vt,At,at.width,at.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,P,lt,at)):e.texImage2D(i.TEXTURE_2D,0,At,P,lt,at);_(v,Xt)&&A(ht),Tt.__version=st.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ct(b,v,G){if(v.image.length!==6)return;let ht=W(b,v),ot=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+G);let st=n.get(ot);if(ot.version!==st.__version||ht===!0){e.activeTexture(i.TEXTURE0+G);let Tt=te.getPrimaries(te.workingColorSpace),vt=v.colorSpace===on?null:te.getPrimaries(v.colorSpace),St=v.colorSpace===on||Tt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Dt=v.isCompressedTexture||v.image[0].isCompressedTexture,Ft=v.image[0]&&v.image[0].isDataTexture,at=[];for(let gt=0;gt<6;gt++)!Dt&&!Ft?at[gt]=x(v.image[gt],!1,!0,s.maxCubemapSize):at[gt]=Ft?v.image[gt].image:v.image[gt],at[gt]=yt(v,at[gt]);let Xt=at[0],P=m(Xt)||o,lt=r.convert(v.format,v.colorSpace),At=r.convert(v.type),ft=M(v.internalFormat,lt,At,v.colorSpace),Ct=o&&v.isVideoTexture!==!0,qt=st.__version===void 0||ht===!0,Jt=z(v,Xt,P);L(i.TEXTURE_CUBE_MAP,v,P);let Vt;if(Dt){Ct&&qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Jt,ft,Xt.width,Xt.height);for(let gt=0;gt<6;gt++){Vt=at[gt].mipmaps;for(let N=0;N<Vt.length;N++){let pt=Vt[N];v.format!==An?lt!==null?Ct?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,N,0,0,pt.width,pt.height,lt,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,N,ft,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ct?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,N,0,0,pt.width,pt.height,lt,At,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,N,ft,pt.width,pt.height,0,lt,At,pt.data)}}}else{Vt=v.mipmaps,Ct&&qt&&(Vt.length>0&&Jt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Jt,ft,at[0].width,at[0].height));for(let gt=0;gt<6;gt++)if(Ft){Ct?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,at[gt].width,at[gt].height,lt,At,at[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ft,at[gt].width,at[gt].height,0,lt,At,at[gt].data);for(let N=0;N<Vt.length;N++){let mt=Vt[N].image[gt].image;Ct?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,N+1,0,0,mt.width,mt.height,lt,At,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,N+1,ft,mt.width,mt.height,0,lt,At,mt.data)}}else{Ct?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,lt,At,at[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ft,lt,At,at[gt]);for(let N=0;N<Vt.length;N++){let pt=Vt[N];Ct?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,N+1,0,0,lt,At,pt.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,N+1,ft,lt,At,pt.image[gt])}}}_(v,P)&&A(i.TEXTURE_CUBE_MAP),st.__version=ot.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function nt(b,v,G,ht,ot,st){let Tt=r.convert(G.format,G.colorSpace),vt=r.convert(G.type),St=M(G.internalFormat,Tt,vt,G.colorSpace);if(!n.get(v).__hasExternalTextures){let Ft=Math.max(1,v.width>>st),at=Math.max(1,v.height>>st);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,st,St,Ft,at,v.depth,0,Tt,vt,null):e.texImage2D(ot,st,St,Ft,at,0,Tt,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),et(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,ot,n.get(G).__webglTexture,0,ut(v)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ht,ot,n.get(G).__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(b,v,G){if(i.bindRenderbuffer(i.RENDERBUFFER,b),v.depthBuffer&&!v.stencilBuffer){let ht=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(G||et(v)){let ot=v.depthTexture;ot&&ot.isDepthTexture&&(ot.type===ti?ht=i.DEPTH_COMPONENT32F:ot.type===$n&&(ht=i.DEPTH_COMPONENT24));let st=ut(v);et(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,ht,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,st,ht,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,ht,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(v.depthBuffer&&v.stencilBuffer){let ht=ut(v);G&&et(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,i.DEPTH24_STENCIL8,v.width,v.height):et(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{let ht=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ot=0;ot<ht.length;ot++){let st=ht[ot],Tt=r.convert(st.format,st.colorSpace),vt=r.convert(st.type),St=M(st.internalFormat,Tt,vt,st.colorSpace),Dt=ut(v);G&&et(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,St,v.width,v.height):et(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,St,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,St,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);let ht=n.get(v.depthTexture).__webglTexture,ot=ut(v);if(v.depthTexture.format===Si)et(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0);else if(v.depthTexture.format===cs)et(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function Mt(b){let v=n.get(b),G=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");wt(v.__webglFramebuffer,b)}else if(G){v.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ht]),v.__webglDepthbuffer[ht]=i.createRenderbuffer(),bt(v.__webglDepthbuffer[ht],b,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),bt(v.__webglDepthbuffer,b,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(b,v,G){let ht=n.get(b);v!==void 0&&nt(ht.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Mt(b)}function I(b){let v=b.texture,G=n.get(b),ht=n.get(v);b.addEventListener("dispose",F),b.isWebGLMultipleRenderTargets!==!0&&(ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture()),ht.__version=v.version,a.memory.textures++);let ot=b.isWebGLCubeRenderTarget===!0,st=b.isWebGLMultipleRenderTargets===!0,Tt=m(b)||o;if(ot){G.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(o&&v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer[vt]=[];for(let St=0;St<v.mipmaps.length;St++)G.__webglFramebuffer[vt][St]=i.createFramebuffer()}else G.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer=[];for(let vt=0;vt<v.mipmaps.length;vt++)G.__webglFramebuffer[vt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(st)if(s.drawBuffers){let vt=b.texture;for(let St=0,Dt=vt.length;St<Dt;St++){let Ft=n.get(vt[St]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&et(b)===!1){let vt=st?v:[v];G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let St=0;St<vt.length;St++){let Dt=vt[St];G.__webglColorRenderbuffer[St]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[St]);let Ft=r.convert(Dt.format,Dt.colorSpace),at=r.convert(Dt.type),Xt=M(Dt.internalFormat,Ft,at,Dt.colorSpace,b.isXRRenderTarget===!0),P=ut(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,P,Xt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,G.__webglColorRenderbuffer[St])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),bt(G.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture),L(i.TEXTURE_CUBE_MAP,v,Tt);for(let vt=0;vt<6;vt++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let St=0;St<v.mipmaps.length;St++)nt(G.__webglFramebuffer[vt][St],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,St);else nt(G.__webglFramebuffer[vt],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);_(v,Tt)&&A(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){let vt=b.texture;for(let St=0,Dt=vt.length;St<Dt;St++){let Ft=vt[St],at=n.get(Ft);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),L(i.TEXTURE_2D,Ft,Tt),nt(G.__webglFramebuffer,b,Ft,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,0),_(Ft,Tt)&&A(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?vt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(vt,ht.__webglTexture),L(vt,v,Tt),o&&v.mipmaps&&v.mipmaps.length>0)for(let St=0;St<v.mipmaps.length;St++)nt(G.__webglFramebuffer[St],b,v,i.COLOR_ATTACHMENT0,vt,St);else nt(G.__webglFramebuffer,b,v,i.COLOR_ATTACHMENT0,vt,0);_(v,Tt)&&A(vt),e.unbindTexture()}b.depthBuffer&&Mt(b)}function dt(b){let v=m(b)||o,G=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ht=0,ot=G.length;ht<ot;ht++){let st=G[ht];if(_(st,v)){let Tt=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,vt=n.get(st).__webglTexture;e.bindTexture(Tt,vt),A(Tt),e.unbindTexture()}}}function j(b){if(o&&b.samples>0&&et(b)===!1){let v=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],G=b.width,ht=b.height,ot=i.COLOR_BUFFER_BIT,st=[],Tt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(b),St=b.isWebGLMultipleRenderTargets===!0;if(St)for(let Dt=0;Dt<v.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Dt=0;Dt<v.length;Dt++){st.push(i.COLOR_ATTACHMENT0+Dt),b.depthBuffer&&st.push(Tt);let Ft=vt.__ignoreDepthValues!==void 0?vt.__ignoreDepthValues:!1;if(Ft===!1&&(b.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),St&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Dt]),Ft===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Tt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Tt])),St){let at=n.get(v[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,G,ht,0,0,G,ht,ot,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),St)for(let Dt=0;Dt<v.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Dt]);let Ft=n.get(v[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}}function ut(b){return Math.min(s.maxSamples,b.samples)}function et(b){let v=n.get(b);return o&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Rt(b){let v=a.render.frame;h.get(b)!==v&&(h.set(b,v),b.update())}function yt(b,v){let G=b.colorSpace,ht=b.format,ot=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===il||G!==Vn&&G!==on&&(te.getTransfer(G)===ie?o===!1?t.has("EXT_sRGB")===!0&&ht===An?(b.format=il,b.minFilter=rn,b.generateMipmaps=!1):v=ro.sRGBToLinear(v):(ht!==An||ot!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),v}this.allocateTextureUnit=D,this.resetTextureUnits=rt,this.setTexture2D=X,this.setTexture2DArray=K,this.setTexture3D=tt,this.setTextureCube=Q,this.rebindTextures=Lt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=et}function vA(i,t,e){let n=e.isWebGL2;function s(r,a=on){let o,l=te.getTransfer(a);if(r===ni)return i.UNSIGNED_BYTE;if(r===cu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===hu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===tf)return i.BYTE;if(r===ef)return i.SHORT;if(r===ql)return i.UNSIGNED_SHORT;if(r===lu)return i.INT;if(r===$n)return i.UNSIGNED_INT;if(r===ti)return i.FLOAT;if(r===Qe)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===nf)return i.ALPHA;if(r===An)return i.RGBA;if(r===sf)return i.LUMINANCE;if(r===rf)return i.LUMINANCE_ALPHA;if(r===Si)return i.DEPTH_COMPONENT;if(r===cs)return i.DEPTH_STENCIL;if(r===il)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===of)return i.RED;if(r===uu)return i.RED_INTEGER;if(r===af)return i.RG;if(r===du)return i.RG_INTEGER;if(r===fu)return i.RGBA_INTEGER;if(r===Aa||r===xa||r===_a||r===va)if(l===ie)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Aa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_a)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===va)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Aa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_a)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===va)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Lc||r===Dc||r===Uc||r===Nc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Lc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Dc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Uc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===pu)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Oc||r===Fc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Oc)return l===ie?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Fc)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Bc||r===kc||r===Hc||r===Vc||r===Gc||r===Wc||r===Xc||r===qc||r===Yc||r===Zc||r===Jc||r===Qc||r===Kc||r===jc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Bc)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kc)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Hc)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vc)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gc)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wc)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xc)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qc)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yc)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zc)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Jc)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Qc)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Kc)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===jc)return l===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ya||r===$c||r===th)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===ya)return l===ie?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===$c)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===th)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===lf||r===eh||r===nh||r===ih)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===ya)return o.COMPRESSED_RED_RGTC1_EXT;if(r===eh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ih)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bi?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Al=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Te=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},yA={type:"move"},Ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yA)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},xl=class extends Cn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=e.getContextAttributes(),m=null,p=null,_=[],A=[],M=new $,z=null,w=new Ne;w.layers.enable(1),w.viewport=new ae;let T=new Ne;T.layers.enable(2),T.viewport=new ae;let F=[w,T],y=new Al;y.layers.enable(1),y.layers.enable(2);let S=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let W=_[L];return W===void 0&&(W=new Ws,_[L]=W),W.getTargetRaySpace()},this.getControllerGrip=function(L){let W=_[L];return W===void 0&&(W=new Ws,_[L]=W),W.getGripSpace()},this.getHand=function(L){let W=_[L];return W===void 0&&(W=new Ws,_[L]=W),W.getHandSpace()};function k(L){let W=A.indexOf(L.inputSource);if(W===-1)return;let it=_[W];it!==void 0&&(it.update(L.inputSource,L.frame,c||a),it.dispatchEvent({type:L.type,data:L.inputSource}))}function rt(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",rt),s.removeEventListener("inputsourceschange",D);for(let L=0;L<_.length;L++){let W=A[L];W!==null&&(A[L]=null,_[L].disconnect(W))}S=null,O=null,t.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,B.stop(),n.isPresenting=!1,t.setPixelRatio(z),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){r=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){o=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(L){c=L},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(L){if(s=L,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",rt),s.addEventListener("inputsourceschange",D),x.xrCompatible!==!0&&await e.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(M),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let W={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,W),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new ze(f.framebufferWidth,f.framebufferHeight,{format:An,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let W=null,it=null,ct=null;x.depth&&(ct=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=x.stencil?cs:Si,it=x.stencil?bi:$n);let nt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(nt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new ze(d.textureWidth,d.textureHeight,{format:An,type:ni,depthTexture:new mo(d.textureWidth,d.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let bt=t.properties.get(p);bt.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),B.setContext(s),B.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(L){for(let W=0;W<L.removed.length;W++){let it=L.removed[W],ct=A.indexOf(it);ct>=0&&(A[ct]=null,_[ct].disconnect(it))}for(let W=0;W<L.added.length;W++){let it=L.added[W],ct=A.indexOf(it);if(ct===-1){for(let bt=0;bt<_.length;bt++)if(bt>=A.length){A.push(it),ct=bt;break}else if(A[bt]===null){A[bt]=it,ct=bt;break}if(ct===-1)break}let nt=_[ct];nt&&nt.connect(it)}}let H=new R,X=new R;function K(L,W,it){H.setFromMatrixPosition(W.matrixWorld),X.setFromMatrixPosition(it.matrixWorld);let ct=H.distanceTo(X),nt=W.projectionMatrix.elements,bt=it.projectionMatrix.elements,wt=nt[14]/(nt[10]-1),Mt=nt[14]/(nt[10]+1),Lt=(nt[9]+1)/nt[5],I=(nt[9]-1)/nt[5],dt=(nt[8]-1)/nt[0],j=(bt[8]+1)/bt[0],ut=wt*dt,et=wt*j,Rt=ct/(-dt+j),yt=Rt*-dt;W.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(yt),L.translateZ(Rt),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();let b=wt+Rt,v=Mt+Rt,G=ut-yt,ht=et+(ct-yt),ot=Lt*Mt/v*b,st=I*Mt/v*b;L.projectionMatrix.makePerspective(G,ht,ot,st,b,v),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}function tt(L,W){W===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(W.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(s===null)return;y.near=T.near=w.near=L.near,y.far=T.far=w.far=L.far,(S!==y.near||O!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,O=y.far);let W=L.parent,it=y.cameras;tt(y,W);for(let ct=0;ct<it.length;ct++)tt(it[ct],W);it.length===2?K(y,w,T):y.projectionMatrix.copy(w.projectionMatrix),Q(L,y,W)};function Q(L,W,it){it===null?L.matrix.copy(W.matrixWorld):(L.matrix.copy(it.matrixWorld),L.matrix.invert(),L.matrix.multiply(W.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(W.projectionMatrix),L.projectionMatrixInverse.copy(W.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=Js*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(L){l=L,d!==null&&(d.fixedFoveation=L),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=L)};let C=null;function U(L,W){if(h=W.getViewerPose(c||a),g=W,h!==null){let it=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let ct=!1;it.length!==y.cameras.length&&(y.cameras.length=0,ct=!0);for(let nt=0;nt<it.length;nt++){let bt=it[nt],wt=null;if(f!==null)wt=f.getViewport(bt);else{let Lt=u.getViewSubImage(d,bt);wt=Lt.viewport,nt===0&&(t.setRenderTargetTextures(p,Lt.colorTexture,d.ignoreDepthValues?void 0:Lt.depthStencilTexture),t.setRenderTarget(p))}let Mt=F[nt];Mt===void 0&&(Mt=new Ne,Mt.layers.enable(nt),Mt.viewport=new ae,F[nt]=Mt),Mt.matrix.fromArray(bt.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(bt.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(wt.x,wt.y,wt.width,wt.height),nt===0&&(y.matrix.copy(Mt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ct===!0&&y.cameras.push(Mt)}}for(let it=0;it<_.length;it++){let ct=A[it],nt=_[it];ct!==null&&nt!==void 0&&nt.update(ct,W,c||a)}C&&C(L,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),g=null}let B=new Mu;B.setAnimationLoop(U),this.setAnimationLoop=function(L){C=L},this.dispose=function(){}}};function MA(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,yu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,A,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,_,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Re&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Re&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=t.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let A=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*A,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Re&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bA(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,A){let M=A.program;n.uniformBlockBinding(_,M)}function c(_,A){let M=s[_.id];M===void 0&&(g(_),M=h(_),s[_.id]=M,_.addEventListener("dispose",m));let z=A.program;n.updateUBOMapping(_,z);let w=t.render.frame;r[_.id]!==w&&(d(_),r[_.id]=w)}function h(_){let A=u();_.__bindingPointIndex=A;let M=i.createBuffer(),z=_.__size,w=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,z,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,M),M}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let A=s[_.id],M=_.uniforms,z=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let w=0,T=M.length;w<T;w++){let F=Array.isArray(M[w])?M[w]:[M[w]];for(let y=0,S=F.length;y<S;y++){let O=F[y];if(f(O,w,y,z)===!0){let k=O.__offset,rt=Array.isArray(O.value)?O.value:[O.value],D=0;for(let H=0;H<rt.length;H++){let X=rt[H],K=x(X);typeof X=="number"||typeof X=="boolean"?(O.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,k+D,O.__data)):X.isMatrix3?(O.__data[0]=X.elements[0],O.__data[1]=X.elements[1],O.__data[2]=X.elements[2],O.__data[3]=0,O.__data[4]=X.elements[3],O.__data[5]=X.elements[4],O.__data[6]=X.elements[5],O.__data[7]=0,O.__data[8]=X.elements[6],O.__data[9]=X.elements[7],O.__data[10]=X.elements[8],O.__data[11]=0):(X.toArray(O.__data,D),D+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,A,M,z){let w=_.value,T=A+"_"+M;if(z[T]===void 0)return typeof w=="number"||typeof w=="boolean"?z[T]=w:z[T]=w.clone(),!0;{let F=z[T];if(typeof w=="number"||typeof w=="boolean"){if(F!==w)return z[T]=w,!0}else if(F.equals(w)===!1)return F.copy(w),!0}return!1}function g(_){let A=_.uniforms,M=0,z=16;for(let T=0,F=A.length;T<F;T++){let y=Array.isArray(A[T])?A[T]:[A[T]];for(let S=0,O=y.length;S<O;S++){let k=y[S],rt=Array.isArray(k.value)?k.value:[k.value];for(let D=0,H=rt.length;D<H;D++){let X=rt[D],K=x(X),tt=M%z;tt!==0&&z-tt<K.boundary&&(M+=z-tt),k.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=K.storage}}}let w=M%z;return w>0&&(M+=z-w),_.__size=M,_.__cache={},this}function x(_){let A={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(A.boundary=4,A.storage=4):_.isVector2?(A.boundary=8,A.storage=8):_.isVector3||_.isColor?(A.boundary=16,A.storage=12):_.isVector4?(A.boundary=16,A.storage=16):_.isMatrix3?(A.boundary=48,A.storage=48):_.isMatrix4?(A.boundary=64,A.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),A}function m(_){let A=_.target;A.removeEventListener("dispose",m);let M=a.indexOf(A.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Ks=class{constructor(t={}){let{canvas:e=Lf(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fe,this._useLegacyLights=!1,this.toneMapping=ei,this.toneMappingExposure=1;let A=this,M=!1,z=0,w=0,T=null,F=-1,y=null,S=new ae,O=new ae,k=null,rt=new zt(0),D=0,H=e.width,X=e.height,K=1,tt=null,Q=null,C=new ae(0,0,H,X),U=new ae(0,0,H,X),B=!1,L=new Qs,W=!1,it=!1,ct=null,nt=new pe,bt=new $,wt=new R,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Lt(){return T===null?K:1}let I=n;function dt(E,V){for(let Y=0;Y<E.length;Y++){let J=E[Y],q=e.getContext(J,V);if(q!==null)return q}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${kl}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",N,!1),e.addEventListener("webglcontextcreationerror",pt,!1),I===null){let V=["webgl2","webgl","experimental-webgl"];if(A.isWebGL1Renderer===!0&&V.shift(),I=dt(V,E),I===null)throw dt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let j,ut,et,Rt,yt,b,v,G,ht,ot,st,Tt,vt,St,Dt,Ft,at,Xt,P,lt,At,ft,Ct,qt;function Jt(){j=new V0(I),ut=new N0(I,j,t),j.init(ut),ft=new vA(I,j,ut),et=new xA(I,j,ut),Rt=new X0(I),yt=new oA,b=new _A(I,j,et,yt,ut,ft,Rt),v=new F0(A),G=new H0(A),ht=new $f(I,ut),Ct=new D0(I,j,ht,ut),ot=new G0(I,ht,Rt,Ct),st=new J0(I,ot,ht,Rt),P=new Z0(I,ut,b),Ft=new O0(yt),Tt=new rA(A,v,G,j,ut,Ct,Ft),vt=new MA(A,yt),St=new lA,Dt=new pA(j,ut),Xt=new L0(A,v,G,et,st,d,l),at=new AA(A,st,ut),qt=new bA(I,Rt,ut,et),lt=new U0(I,j,Rt,ut),At=new W0(I,j,Rt,ut),Rt.programs=Tt.programs,A.capabilities=ut,A.extensions=j,A.properties=yt,A.renderLists=St,A.shadowMap=at,A.state=et,A.info=Rt}Jt();let Vt=new xl(A,I);this.xr=Vt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let E=j.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=j.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(H,X,!1))},this.getSize=function(E){return E.set(H,X)},this.setSize=function(E,V,Y=!0){if(Vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,X=V,e.width=Math.floor(E*K),e.height=Math.floor(V*K),Y===!0&&(e.style.width=E+"px",e.style.height=V+"px"),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set(H*K,X*K).floor()},this.setDrawingBufferSize=function(E,V,Y){H=E,X=V,K=Y,e.width=Math.floor(E*Y),e.height=Math.floor(V*Y),this.setViewport(0,0,E,V)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(C)},this.setViewport=function(E,V,Y,J){E.isVector4?C.set(E.x,E.y,E.z,E.w):C.set(E,V,Y,J),et.viewport(S.copy(C).multiplyScalar(K).floor())},this.getScissor=function(E){return E.copy(U)},this.setScissor=function(E,V,Y,J){E.isVector4?U.set(E.x,E.y,E.z,E.w):U.set(E,V,Y,J),et.scissor(O.copy(U).multiplyScalar(K).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(E){et.setScissorTest(B=E)},this.setOpaqueSort=function(E){tt=E},this.setTransparentSort=function(E){Q=E},this.getClearColor=function(E){return E.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(E=!0,V=!0,Y=!0){let J=0;if(E){let q=!1;if(T!==null){let Et=T.texture.format;q=Et===fu||Et===du||Et===uu}if(q){let Et=T.texture.type,It=Et===ni||Et===$n||Et===ql||Et===bi||Et===cu||Et===hu,Nt=Xt.getClearColor(),Ot=Xt.getClearAlpha(),Gt=Nt.r,Bt=Nt.g,kt=Nt.b;It?(f[0]=Gt,f[1]=Bt,f[2]=kt,f[3]=Ot,I.clearBufferuiv(I.COLOR,0,f)):(g[0]=Gt,g[1]=Bt,g[2]=kt,g[3]=Ot,I.clearBufferiv(I.COLOR,0,g))}else J|=I.COLOR_BUFFER_BIT}V&&(J|=I.DEPTH_BUFFER_BIT),Y&&(J|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",N,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),St.dispose(),Dt.dispose(),yt.dispose(),v.dispose(),G.dispose(),st.dispose(),Ct.dispose(),qt.dispose(),Tt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Fe),Vt.removeEventListener("sessionend",re),ct&&(ct.dispose(),ct=null),Be.stop()};function gt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let E=Rt.autoReset,V=at.enabled,Y=at.autoUpdate,J=at.needsUpdate,q=at.type;Jt(),Rt.autoReset=E,at.enabled=V,at.autoUpdate=Y,at.needsUpdate=J,at.type=q}function pt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function mt(E){let V=E.target;V.removeEventListener("dispose",mt),Ut(V)}function Ut(E){Pt(E),yt.remove(E)}function Pt(E){let V=yt.get(E).programs;V!==void 0&&(V.forEach(function(Y){Tt.releaseProgram(Y)}),E.isShaderMaterial&&Tt.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,Y,J,q,Et){V===null&&(V=Mt);let It=q.isMesh&&q.matrixWorld.determinant()<0,Nt=yd(E,V,Y,J,q);et.setMaterial(J,It);let Ot=Y.index,Gt=1;if(J.wireframe===!0){if(Ot=ot.getWireframeAttribute(Y),Ot===void 0)return;Gt=2}let Bt=Y.drawRange,kt=Y.attributes.position,ge=Bt.start*Gt,qe=(Bt.start+Bt.count)*Gt;Et!==null&&(ge=Math.max(ge,Et.start*Gt),qe=Math.min(qe,(Et.start+Et.count)*Gt)),Ot!==null?(ge=Math.max(ge,0),qe=Math.min(qe,Ot.count)):kt!=null&&(ge=Math.max(ge,0),qe=Math.min(qe,kt.count));let Ee=qe-ge;if(Ee<0||Ee===1/0)return;Ct.setup(q,J,Nt,Y,Ot);let Dn,ce=lt;if(Ot!==null&&(Dn=ht.get(Ot),ce=At,ce.setIndex(Dn)),q.isMesh)J.wireframe===!0?(et.setLineWidth(J.wireframeLinewidth*Lt()),ce.setMode(I.LINES)):ce.setMode(I.TRIANGLES);else if(q.isLine){let Yt=J.linewidth;Yt===void 0&&(Yt=1),et.setLineWidth(Yt*Lt()),q.isLineSegments?ce.setMode(I.LINES):q.isLineLoop?ce.setMode(I.LINE_LOOP):ce.setMode(I.LINE_STRIP)}else q.isPoints?ce.setMode(I.POINTS):q.isSprite&&ce.setMode(I.TRIANGLES);if(q.isBatchedMesh)ce.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)ce.renderInstances(ge,Ee,q.count);else if(Y.isInstancedBufferGeometry){let Yt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,da=Math.min(Y.instanceCount,Yt);ce.renderInstances(ge,Ee,da)}else ce.render(ge,Ee)};function jt(E,V,Y){E.transparent===!0&&E.side===Je&&E.forceSinglePass===!1?(E.side=Re,E.needsUpdate=!0,xr(E,V,Y),E.side=si,E.needsUpdate=!0,xr(E,V,Y),E.side=Je):xr(E,V,Y)}this.compile=function(E,V,Y=null){Y===null&&(Y=E),m=Dt.get(Y),m.init(),_.push(m),Y.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),E!==Y&&E.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights(A._useLegacyLights);let J=new Set;return E.traverse(function(q){let Et=q.material;if(Et)if(Array.isArray(Et))for(let It=0;It<Et.length;It++){let Nt=Et[It];jt(Nt,Y,q),J.add(Nt)}else jt(Et,Y,q),J.add(Et)}),_.pop(),m=null,J},this.compileAsync=function(E,V,Y=null){let J=this.compile(E,V,Y);return new Promise(q=>{function Et(){if(J.forEach(function(It){yt.get(It).currentProgram.isReady()&&J.delete(It)}),J.size===0){q(E);return}setTimeout(Et,10)}j.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let $t=null;function Se(E){$t&&$t(E)}function Fe(){Be.stop()}function re(){Be.start()}let Be=new Mu;Be.setAnimationLoop(Se),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(E){$t=E,Vt.setAnimationLoop(E),E===null?Be.stop():Be.start()},Vt.addEventListener("sessionstart",Fe),Vt.addEventListener("sessionend",re),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(V),V=Vt.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,V,T),m=Dt.get(E,_.length),m.init(),_.push(m),nt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),L.setFromProjectionMatrix(nt),it=this.localClippingEnabled,W=Ft.init(this.clippingPlanes,it),x=St.get(E,p.length),x.init(),p.push(x),Sn(E,V,0,A.sortObjects),x.finish(),A.sortObjects===!0&&x.sort(tt,Q),this.info.render.frame++,W===!0&&Ft.beginShadows();let Y=m.state.shadowsArray;if(at.render(Y,E,V),W===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xt.render(x,E),m.setupLights(A._useLegacyLights),V.isArrayCamera){let J=V.cameras;for(let q=0,Et=J.length;q<Et;q++){let It=J[q];yc(x,E,It,It.viewport)}}else yc(x,E,V);T!==null&&(b.updateMultisampleRenderTarget(T),b.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(A,E,V),Ct.resetDefaultState(),F=-1,y=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Sn(E,V,Y,J){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||L.intersectsSprite(E)){J&&wt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(nt);let It=st.update(E),Nt=E.material;Nt.visible&&x.push(E,It,Nt,Y,wt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||L.intersectsObject(E))){let It=st.update(E),Nt=E.material;if(J&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),wt.copy(E.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),wt.copy(It.boundingSphere.center)),wt.applyMatrix4(E.matrixWorld).applyMatrix4(nt)),Array.isArray(Nt)){let Ot=It.groups;for(let Gt=0,Bt=Ot.length;Gt<Bt;Gt++){let kt=Ot[Gt],ge=Nt[kt.materialIndex];ge&&ge.visible&&x.push(E,It,ge,Y,wt.z,kt)}}else Nt.visible&&x.push(E,It,Nt,Y,wt.z,null)}}let Et=E.children;for(let It=0,Nt=Et.length;It<Nt;It++)Sn(Et[It],V,Y,J)}function yc(E,V,Y,J){let q=E.opaque,Et=E.transmissive,It=E.transparent;m.setupLightsView(Y),W===!0&&Ft.setGlobalState(A.clippingPlanes,Y),Et.length>0&&vd(q,Et,V,Y),J&&et.viewport(S.copy(J)),q.length>0&&Ar(q,V,Y),Et.length>0&&Ar(Et,V,Y),It.length>0&&Ar(It,V,Y),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function vd(E,V,Y,J){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;let Et=ut.isWebGL2;ct===null&&(ct=new ze(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")?Qe:ni,minFilter:Zs,samples:Et?4:0})),A.getDrawingBufferSize(bt),Et?ct.setSize(bt.x,bt.y):ct.setSize(io(bt.x),io(bt.y));let It=A.getRenderTarget();A.setRenderTarget(ct),A.getClearColor(rt),D=A.getClearAlpha(),D<1&&A.setClearColor(16777215,.5),A.clear();let Nt=A.toneMapping;A.toneMapping=ei,Ar(E,Y,J),b.updateMultisampleRenderTarget(ct),b.updateRenderTargetMipmap(ct);let Ot=!1;for(let Gt=0,Bt=V.length;Gt<Bt;Gt++){let kt=V[Gt],ge=kt.object,qe=kt.geometry,Ee=kt.material,Dn=kt.group;if(Ee.side===Je&&ge.layers.test(J.layers)){let ce=Ee.side;Ee.side=Re,Ee.needsUpdate=!0,Mc(ge,Y,J,qe,Ee,Dn),Ee.side=ce,Ee.needsUpdate=!0,Ot=!0}}Ot===!0&&(b.updateMultisampleRenderTarget(ct),b.updateRenderTargetMipmap(ct)),A.setRenderTarget(It),A.setClearColor(rt,D),A.toneMapping=Nt}function Ar(E,V,Y){let J=V.isScene===!0?V.overrideMaterial:null;for(let q=0,Et=E.length;q<Et;q++){let It=E[q],Nt=It.object,Ot=It.geometry,Gt=J===null?It.material:J,Bt=It.group;Nt.layers.test(Y.layers)&&Mc(Nt,V,Y,Ot,Gt,Bt)}}function Mc(E,V,Y,J,q,Et){E.onBeforeRender(A,V,Y,J,q,Et),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(A,V,Y,J,E,Et),q.transparent===!0&&q.side===Je&&q.forceSinglePass===!1?(q.side=Re,q.needsUpdate=!0,A.renderBufferDirect(Y,V,J,q,E,Et),q.side=si,q.needsUpdate=!0,A.renderBufferDirect(Y,V,J,q,E,Et),q.side=Je):A.renderBufferDirect(Y,V,J,q,E,Et),E.onAfterRender(A,V,Y,J,q,Et)}function xr(E,V,Y){V.isScene!==!0&&(V=Mt);let J=yt.get(E),q=m.state.lights,Et=m.state.shadowsArray,It=q.state.version,Nt=Tt.getParameters(E,q.state,Et,V,Y),Ot=Tt.getProgramCacheKey(Nt),Gt=J.programs;J.environment=E.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(E.isMeshStandardMaterial?G:v).get(E.envMap||J.environment),Gt===void 0&&(E.addEventListener("dispose",mt),Gt=new Map,J.programs=Gt);let Bt=Gt.get(Ot);if(Bt!==void 0){if(J.currentProgram===Bt&&J.lightsStateVersion===It)return Sc(E,Nt),Bt}else Nt.uniforms=Tt.getUniforms(E),E.onBuild(Y,Nt,A),E.onBeforeCompile(Nt,A),Bt=Tt.acquireProgram(Nt,Ot),Gt.set(Ot,Bt),J.uniforms=Nt.uniforms;let kt=J.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(kt.clippingPlanes=Ft.uniform),Sc(E,Nt),J.needsLights=bd(E),J.lightsStateVersion=It,J.needsLights&&(kt.ambientLightColor.value=q.state.ambient,kt.lightProbe.value=q.state.probe,kt.directionalLights.value=q.state.directional,kt.directionalLightShadows.value=q.state.directionalShadow,kt.spotLights.value=q.state.spot,kt.spotLightShadows.value=q.state.spotShadow,kt.rectAreaLights.value=q.state.rectArea,kt.ltc_1.value=q.state.rectAreaLTC1,kt.ltc_2.value=q.state.rectAreaLTC2,kt.pointLights.value=q.state.point,kt.pointLightShadows.value=q.state.pointShadow,kt.hemisphereLights.value=q.state.hemi,kt.directionalShadowMap.value=q.state.directionalShadowMap,kt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,kt.spotShadowMap.value=q.state.spotShadowMap,kt.spotLightMatrix.value=q.state.spotLightMatrix,kt.spotLightMap.value=q.state.spotLightMap,kt.pointShadowMap.value=q.state.pointShadowMap,kt.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=Bt,J.uniformsList=null,Bt}function bc(E){if(E.uniformsList===null){let V=E.currentProgram.getUniforms();E.uniformsList=os.seqWithValue(V.seq,E.uniforms)}return E.uniformsList}function Sc(E,V){let Y=yt.get(E);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function yd(E,V,Y,J,q){V.isScene!==!0&&(V=Mt),b.resetTextureUnits();let Et=V.fog,It=J.isMeshStandardMaterial?V.environment:null,Nt=T===null?A.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Vn,Ot=(J.isMeshStandardMaterial?G:v).get(J.envMap||It),Gt=J.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Bt=!!Y.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),kt=!!Y.morphAttributes.position,ge=!!Y.morphAttributes.normal,qe=!!Y.morphAttributes.color,Ee=ei;J.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ee=A.toneMapping);let Dn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ce=Dn!==void 0?Dn.length:0,Yt=yt.get(J),da=m.state.lights;if(W===!0&&(it===!0||E!==y)){let nn=E===y&&J.id===F;Ft.setState(J,E,nn)}let de=!1;J.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==da.state.version||Yt.outputColorSpace!==Nt||q.isBatchedMesh&&Yt.batching===!1||!q.isBatchedMesh&&Yt.batching===!0||q.isInstancedMesh&&Yt.instancing===!1||!q.isInstancedMesh&&Yt.instancing===!0||q.isSkinnedMesh&&Yt.skinning===!1||!q.isSkinnedMesh&&Yt.skinning===!0||q.isInstancedMesh&&Yt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Yt.instancingColor===!1&&q.instanceColor!==null||Yt.envMap!==Ot||J.fog===!0&&Yt.fog!==Et||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Ft.numPlanes||Yt.numIntersection!==Ft.numIntersection)||Yt.vertexAlphas!==Gt||Yt.vertexTangents!==Bt||Yt.morphTargets!==kt||Yt.morphNormals!==ge||Yt.morphColors!==qe||Yt.toneMapping!==Ee||ut.isWebGL2===!0&&Yt.morphTargetsCount!==ce)&&(de=!0):(de=!0,Yt.__version=J.version);let fi=Yt.currentProgram;de===!0&&(fi=xr(J,V,q));let Ec=!1,Is=!1,fa=!1,Le=fi.getUniforms(),pi=Yt.uniforms;if(et.useProgram(fi.program)&&(Ec=!0,Is=!0,fa=!0),J.id!==F&&(F=J.id,Is=!0),Ec||y!==E){Le.setValue(I,"projectionMatrix",E.projectionMatrix),Le.setValue(I,"viewMatrix",E.matrixWorldInverse);let nn=Le.map.cameraPosition;nn!==void 0&&nn.setValue(I,wt.setFromMatrixPosition(E.matrixWorld)),ut.logarithmicDepthBuffer&&Le.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Le.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,Is=!0,fa=!0)}if(q.isSkinnedMesh){Le.setOptional(I,q,"bindMatrix"),Le.setOptional(I,q,"bindMatrixInverse");let nn=q.skeleton;nn&&(ut.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),Le.setValue(I,"boneTexture",nn.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(Le.setOptional(I,q,"batchingTexture"),Le.setValue(I,"batchingTexture",q._matricesTexture,b));let pa=Y.morphAttributes;if((pa.position!==void 0||pa.normal!==void 0||pa.color!==void 0&&ut.isWebGL2===!0)&&P.update(q,Y,fi),(Is||Yt.receiveShadow!==q.receiveShadow)&&(Yt.receiveShadow=q.receiveShadow,Le.setValue(I,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(pi.envMap.value=Ot,pi.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Is&&(Le.setValue(I,"toneMappingExposure",A.toneMappingExposure),Yt.needsLights&&Md(pi,fa),Et&&J.fog===!0&&vt.refreshFogUniforms(pi,Et),vt.refreshMaterialUniforms(pi,J,K,X,ct),os.upload(I,bc(Yt),pi,b)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(os.upload(I,bc(Yt),pi,b),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Le.setValue(I,"center",q.center),Le.setValue(I,"modelViewMatrix",q.modelViewMatrix),Le.setValue(I,"normalMatrix",q.normalMatrix),Le.setValue(I,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let nn=J.uniformsGroups;for(let ma=0,Sd=nn.length;ma<Sd;ma++)if(ut.isWebGL2){let wc=nn[ma];qt.update(wc,fi),qt.bind(wc,fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fi}function Md(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function bd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,V,Y){yt.get(E.texture).__webglTexture=V,yt.get(E.depthTexture).__webglTexture=Y;let J=yt.get(E);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=Y===void 0,J.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,V){let Y=yt.get(E);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(E,V=0,Y=0){T=E,z=V,w=Y;let J=!0,q=null,Et=!1,It=!1;if(E){let Ot=yt.get(E);Ot.__useDefaultFramebuffer!==void 0?(et.bindFramebuffer(I.FRAMEBUFFER,null),J=!1):Ot.__webglFramebuffer===void 0?b.setupRenderTarget(E):Ot.__hasExternalTextures&&b.rebindTextures(E,yt.get(E.texture).__webglTexture,yt.get(E.depthTexture).__webglTexture);let Gt=E.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(It=!0);let Bt=yt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Bt[V])?q=Bt[V][Y]:q=Bt[V],Et=!0):ut.isWebGL2&&E.samples>0&&b.useMultisampledRTT(E)===!1?q=yt.get(E).__webglMultisampledFramebuffer:Array.isArray(Bt)?q=Bt[Y]:q=Bt,S.copy(E.viewport),O.copy(E.scissor),k=E.scissorTest}else S.copy(C).multiplyScalar(K).floor(),O.copy(U).multiplyScalar(K).floor(),k=B;if(et.bindFramebuffer(I.FRAMEBUFFER,q)&&ut.drawBuffers&&J&&et.drawBuffers(E,q),et.viewport(S),et.scissor(O),et.setScissorTest(k),Et){let Ot=yt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ot.__webglTexture,Y)}else if(It){let Ot=yt.get(E.texture),Gt=V||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ot.__webglTexture,Y||0,Gt)}F=-1},this.readRenderTargetPixels=function(E,V,Y,J,q,Et,It){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&It!==void 0&&(Nt=Nt[It]),Nt){et.bindFramebuffer(I.FRAMEBUFFER,Nt);try{let Ot=E.texture,Gt=Ot.format,Bt=Ot.type;if(Gt!==An&&ft.convert(Gt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let kt=Bt===Qe&&(j.has("EXT_color_buffer_half_float")||ut.isWebGL2&&j.has("EXT_color_buffer_float"));if(Bt!==ni&&ft.convert(Bt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Bt===ti&&(ut.isWebGL2||j.has("OES_texture_float")||j.has("WEBGL_color_buffer_float")))&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-J&&Y>=0&&Y<=E.height-q&&I.readPixels(V,Y,J,q,ft.convert(Gt),ft.convert(Bt),Et)}finally{let Ot=T!==null?yt.get(T).__webglFramebuffer:null;et.bindFramebuffer(I.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(E,V,Y=0){let J=Math.pow(2,-Y),q=Math.floor(V.image.width*J),Et=Math.floor(V.image.height*J);b.setTexture2D(V,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,E.x,E.y,q,Et),et.unbindTexture()},this.copyTextureToTexture=function(E,V,Y,J=0){let q=V.image.width,Et=V.image.height,It=ft.convert(Y.format),Nt=ft.convert(Y.type);b.setTexture2D(Y,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Y.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Y.unpackAlignment),V.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,J,E.x,E.y,q,Et,It,Nt,V.image.data):V.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,J,E.x,E.y,V.mipmaps[0].width,V.mipmaps[0].height,It,V.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,J,E.x,E.y,It,Nt,V.image),J===0&&Y.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),et.unbindTexture()},this.copyTextureToTexture3D=function(E,V,Y,J,q=0){if(A.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Et=E.max.x-E.min.x+1,It=E.max.y-E.min.y+1,Nt=E.max.z-E.min.z+1,Ot=ft.convert(J.format),Gt=ft.convert(J.type),Bt;if(J.isData3DTexture)b.setTexture3D(J,0),Bt=I.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)b.setTexture2DArray(J,0),Bt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,J.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,J.unpackAlignment);let kt=I.getParameter(I.UNPACK_ROW_LENGTH),ge=I.getParameter(I.UNPACK_IMAGE_HEIGHT),qe=I.getParameter(I.UNPACK_SKIP_PIXELS),Ee=I.getParameter(I.UNPACK_SKIP_ROWS),Dn=I.getParameter(I.UNPACK_SKIP_IMAGES),ce=Y.isCompressedTexture?Y.mipmaps[q]:Y.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,ce.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ce.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,E.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,E.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,E.min.z),Y.isDataTexture||Y.isData3DTexture?I.texSubImage3D(Bt,q,V.x,V.y,V.z,Et,It,Nt,Ot,Gt,ce.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Bt,q,V.x,V.y,V.z,Et,It,Nt,Ot,ce.data)):I.texSubImage3D(Bt,q,V.x,V.y,V.z,Et,It,Nt,Ot,Gt,ce),I.pixelStorei(I.UNPACK_ROW_LENGTH,kt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ge),I.pixelStorei(I.UNPACK_SKIP_PIXELS,qe),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ee),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Dn),q===0&&J.generateMipmaps&&I.generateMipmap(Bt),et.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),et.unbindTexture()},this.resetState=function(){z=0,w=0,T=null,et.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Yl?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===No?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===fe?Ei:mu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ei?fe:Vn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},_l=class extends Ks{};_l.prototype.isWebGL1Renderer=!0;var ms=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},go=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=nl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ke=new R,js=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=wn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},$s=class extends Wn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ki,Os=new R,ji=new R,$i=new R,ts=new $,Fs=new $,Ru=new pe,Hr=new R,Bs=new R,Vr=new R,Yh=new $,Xa=new $,Zh=new $,Ao=class extends Pe{constructor(t=new $s){if(super(),this.isSprite=!0,this.type="Sprite",Ki===void 0){Ki=new le;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new go(e,5);Ki.setIndex([0,1,2,0,2,3]),Ki.setAttribute("position",new js(n,3,0,!1)),Ki.setAttribute("uv",new js(n,2,3,!1))}this.geometry=Ki,this.material=t,this.center=new $(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),Ru.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),$i.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-$i.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Gr(Hr.set(-.5,-.5,0),$i,a,ji,s,r),Gr(Bs.set(.5,-.5,0),$i,a,ji,s,r),Gr(Vr.set(.5,.5,0),$i,a,ji,s,r),Yh.set(0,0),Xa.set(1,0),Zh.set(1,1);let o=t.ray.intersectTriangle(Hr,Bs,Vr,!1,Os);if(o===null&&(Gr(Bs.set(-.5,.5,0),$i,a,ji,s,r),Xa.set(0,1),o=t.ray.intersectTriangle(Hr,Vr,Bs,!1,Os),o===null))return;let l=t.ray.origin.distanceTo(Os);l<t.near||l>t.far||e.push({distance:l,point:Os.clone(),uv:Mi.getInterpolation(Os,Hr,Bs,Vr,Yh,Xa,Zh,new $),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Gr(i,t,e,n,s,r){ts.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Fs.x=r*ts.x-s*ts.y,Fs.y=s*ts.x+r*ts.y):Fs.copy(ts),i.copy(t),i.x+=Fs.x,i.y+=Fs.y,i.applyMatrix4(Ru)}var tr=class extends Wn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Jh=new pe,vl=new us,Wr=new hs,Xr=new R,xo=class extends Pe{constructor(t=new le,e=new tr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(s),Wr.radius+=r,t.ray.intersectsSphere(Wr)===!1)return;Jh.copy(s).invert(),vl.copy(t.ray).applyMatrix4(Jh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);Xr.fromBufferAttribute(u,m),Qh(Xr,m,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)Xr.fromBufferAttribute(u,g),Qh(Xr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Qh(i,t,e,n,s,r,a){let o=vl.distanceSqToPoint(i);if(o<e){let l=new R;vl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}var oi=class extends an{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new $:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,s=[],r=[],a=[],o=new R,l=new pe;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(_e(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(_e(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},er=class extends cn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let n=e||new $,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},yl=class extends er{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ql(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var qr=new R,qa=new Ql,Ya=new Ql,Za=new Ql,nr=class extends cn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(qr.subVectors(s[0],s[1]).add(s[0]),c=qr);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(qr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=qr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),qa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),Ya.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Za.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(qa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ya.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Za.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(qa.calc(l),Ya.calc(l),Za.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Kh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function SA(i,t){let e=1-i;return e*e*t}function EA(i,t){return 2*(1-i)*i*t}function wA(i,t){return i*i*t}function Xs(i,t,e,n){return SA(i,t)+EA(i,e)+wA(i,n)}function TA(i,t){let e=1-i;return e*e*e*t}function RA(i,t){let e=1-i;return 3*e*e*i*t}function CA(i,t){return 3*(1-i)*i*i*t}function zA(i,t){return i*i*i*t}function qs(i,t,e,n,s){return TA(i,t)+RA(i,e)+CA(i,n)+zA(i,s)}var _o=class extends cn{constructor(t=new $,e=new $,n=new $,s=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new $){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(qs(t,s.x,r.x,a.x,o.x),qs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ml=class extends cn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(qs(t,s.x,r.x,a.x,o.x),qs(t,s.y,r.y,a.y,o.y),qs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vo=class extends cn{constructor(t=new $,e=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new $){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bl=class extends cn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yo=class extends cn{constructor(t=new $,e=new $,n=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new $){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Xs(t,s.x,r.x,a.x),Xs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mo=class extends cn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Xs(t,s.x,r.x,a.x),Xs(t,s.y,r.y,a.y),Xs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bo=class extends cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new $){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Kh(o,l.x,c.x,h.x,u.x),Kh(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new $().fromArray(s))}return this}},So=Object.freeze({__proto__:null,ArcCurve:yl,CatmullRomCurve3:nr,CubicBezierCurve:_o,CubicBezierCurve3:Ml,EllipseCurve:er,LineCurve:vo,LineCurve3:bl,QuadraticBezierCurve:yo,QuadraticBezierCurve3:Mo,SplineCurve:bo}),Sl=class extends cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new So[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new So[s.type]().fromJSON(s))}return this}},Eo=class extends Sl{constructor(t){super(),this.type="Path",this.currentPoint=new $,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new vo(this.currentPoint.clone(),new $(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new yo(this.currentPoint.clone(),new $(t,e),new $(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new _o(this.currentPoint.clone(),new $(t,e),new $(n,s),new $(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new bo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new er(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},wo=class i extends le{constructor(t=[new $(0,-.5),new $(.5,0),new $(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=_e(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new R,d=new $,f=new R,g=new R,x=new R,m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let _=0;_<=e;_++){let A=n+_*h*s,M=Math.sin(A),z=Math.cos(A);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*M,u.y=t[w].y,u.z=t[w].x*z,a.push(u.x,u.y,u.z),d.x=_/e,d.y=w/(t.length-1),o.push(d.x,d.y);let T=l[3*w+0]*M,F=l[3*w+1],y=l[3*w+0]*z;c.push(T,F,y)}}for(let _=0;_<e;_++)for(let A=0;A<t.length-1;A++){let M=A+_*t.length,z=M,w=M+t.length,T=M+t.length+1,F=M+1;r.push(z,w,F),r.push(T,F,w)}this.setIndex(r),this.setAttribute("position",new Wt(a,3)),this.setAttribute("uv",new Wt(o,2)),this.setAttribute("normal",new Wt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var gs=class i extends le{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new R,h=new $;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Wt(a,3)),this.setAttribute("normal",new Wt(o,3)),this.setAttribute("uv",new Wt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},As=class i extends le{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;_(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(f,2));function _(){let M=new R,z=new R,w=0,T=(e-t)/n;for(let F=0;F<=r;F++){let y=[],S=F/r,O=S*(e-t)+t;for(let k=0;k<=s;k++){let rt=k/s,D=rt*l+o,H=Math.sin(D),X=Math.cos(D);z.x=O*H,z.y=-S*n+m,z.z=O*X,u.push(z.x,z.y,z.z),M.set(H,T,X).normalize(),d.push(M.x,M.y,M.z),f.push(rt,1-S),y.push(g++)}x.push(y)}for(let F=0;F<s;F++)for(let y=0;y<r;y++){let S=x[y][F],O=x[y+1][F],k=x[y+1][F+1],rt=x[y][F+1];h.push(S,O,rt),h.push(O,k,rt),w+=6}c.addGroup(p,w,0),p+=w}function A(M){let z=g,w=new $,T=new R,F=0,y=M===!0?t:e,S=M===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let O=g;for(let k=0;k<=s;k++){let D=k/s*l+o,H=Math.cos(D),X=Math.sin(D);T.x=y*X,T.y=m*S,T.z=y*H,u.push(T.x,T.y,T.z),d.push(0,S,0),w.x=H*.5+.5,w.y=X*.5*S+.5,f.push(w.x,w.y),g++}for(let k=0;k<s;k++){let rt=z+k,D=O+k;M===!0?h.push(D,D+1,rt):h.push(D+1,D,rt),F+=3}c.addGroup(p,F,M===!0?1:2),p+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var El=class i extends le{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Wt(r,3)),this.setAttribute("normal",new Wt(r.slice(),3)),this.setAttribute("uv",new Wt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let A=new R,M=new R,z=new R;for(let w=0;w<e.length;w+=3)f(e[w+0],A),f(e[w+1],M),f(e[w+2],z),l(A,M,z,_)}function l(_,A,M,z){let w=z+1,T=[];for(let F=0;F<=w;F++){T[F]=[];let y=_.clone().lerp(M,F/w),S=A.clone().lerp(M,F/w),O=w-F;for(let k=0;k<=O;k++)k===0&&F===w?T[F][k]=y:T[F][k]=y.clone().lerp(S,k/O)}for(let F=0;F<w;F++)for(let y=0;y<2*(w-F)-1;y++){let S=Math.floor(y/2);y%2===0?(d(T[F][S+1]),d(T[F+1][S]),d(T[F][S])):(d(T[F][S+1]),d(T[F+1][S+1]),d(T[F+1][S]))}}function c(_){let A=new R;for(let M=0;M<r.length;M+=3)A.x=r[M+0],A.y=r[M+1],A.z=r[M+2],A.normalize().multiplyScalar(_),r[M+0]=A.x,r[M+1]=A.y,r[M+2]=A.z}function h(){let _=new R;for(let A=0;A<r.length;A+=3){_.x=r[A+0],_.y=r[A+1],_.z=r[A+2];let M=m(_)/2/Math.PI+.5,z=p(_)/Math.PI+.5;a.push(M,1-z)}g(),u()}function u(){for(let _=0;_<a.length;_+=6){let A=a[_+0],M=a[_+2],z=a[_+4],w=Math.max(A,M,z),T=Math.min(A,M,z);w>.9&&T<.1&&(A<.2&&(a[_+0]+=1),M<.2&&(a[_+2]+=1),z<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,A){let M=_*3;A.x=t[M+0],A.y=t[M+1],A.z=t[M+2]}function g(){let _=new R,A=new R,M=new R,z=new R,w=new $,T=new $,F=new $;for(let y=0,S=0;y<r.length;y+=9,S+=6){_.set(r[y+0],r[y+1],r[y+2]),A.set(r[y+3],r[y+4],r[y+5]),M.set(r[y+6],r[y+7],r[y+8]),w.set(a[S+0],a[S+1]),T.set(a[S+2],a[S+3]),F.set(a[S+4],a[S+5]),z.copy(_).add(A).add(M).divideScalar(3);let O=m(z);x(w,S+0,_,O),x(T,S+2,A,O),x(F,S+4,M,O)}}function x(_,A,M,z){z<0&&_.x===1&&(a[A]=_.x-1),M.x===0&&M.z===0&&(a[A]=z/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var wi=class extends Eo{constructor(t){super(t),this.uuid=Rn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Eo().fromJSON(s))}return this}},PA={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Cu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=NA(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return ir(r,a,e,o,l,f,0),a}};function Cu(i,t,e,n,s){let r,a;if(s===YA(i,t,e,n)>0)for(r=t;r<e;r+=n)a=jh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=jh(r,i[r],i[r+1],a);return a&&Fo(a,a.next)&&(rr(a),a=a.next),a}function Ti(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Fo(e,e.next)||he(e.prev,e,e.next)===0)){if(rr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ir(i,t,e,n,s,r,a){if(!i)return;!a&&r&&HA(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?LA(i,n,s,r):IA(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),rr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=DA(Ti(i),t,e),ir(i,t,e,n,s,r,2)):a===2&&UA(i,t,e,n,s,r):ir(Ti(i),t,e,n,s,r,1);break}}}function IA(i){let t=i.prev,e=i,n=i.next;if(he(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&is(s,o,r,l,a,c,g.x,g.y)&&he(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function LA(i,t,e,n){let s=i.prev,r=i,a=i.next;if(he(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=wl(f,g,t,e,n),_=wl(x,m,t,e,n),A=i.prevZ,M=i.nextZ;for(;A&&A.z>=p&&M&&M.z<=_;){if(A.x>=f&&A.x<=x&&A.y>=g&&A.y<=m&&A!==s&&A!==a&&is(o,h,l,u,c,d,A.x,A.y)&&he(A.prev,A,A.next)>=0||(A=A.prevZ,M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&is(o,h,l,u,c,d,M.x,M.y)&&he(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;A&&A.z>=p;){if(A.x>=f&&A.x<=x&&A.y>=g&&A.y<=m&&A!==s&&A!==a&&is(o,h,l,u,c,d,A.x,A.y)&&he(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;M&&M.z<=_;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&is(o,h,l,u,c,d,M.x,M.y)&&he(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function DA(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Fo(s,r)&&zu(s,n,n.next,r)&&sr(s,r)&&sr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),rr(n),rr(n.next),n=i=r),n=n.next}while(n!==i);return Ti(n)}function UA(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&WA(a,o)){let l=Pu(a,o);a=Ti(a,a.next),l=Ti(l,l.next),ir(a,t,e,n,s,r,0),ir(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function NA(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Cu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(GA(c));for(s.sort(OA),r=0;r<s.length;r++)e=FA(s[r],e);return e}function OA(i,t){return i.x-t.x}function FA(i,t){let e=BA(i,t);if(!e)return t;let n=Pu(e,i);return Ti(n,n.next),Ti(e,e.next)}function BA(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&is(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),sr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&kA(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function kA(i,t){return he(i.prev,i,t.prev)<0&&he(t.next,i,i.next)<0}function HA(i,t,e,n){let s=i;do s.z===0&&(s.z=wl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,VA(s)}function VA(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function wl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function GA(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function is(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function WA(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!XA(i,t)&&(sr(i,t)&&sr(t,i)&&qA(i,t)&&(he(i.prev,i,t.prev)||he(i,t.prev,t))||Fo(i,t)&&he(i.prev,i,i.next)>0&&he(t.prev,t,t.next)>0)}function he(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Fo(i,t){return i.x===t.x&&i.y===t.y}function zu(i,t,e,n){let s=Zr(he(i,t,e)),r=Zr(he(i,t,n)),a=Zr(he(e,n,i)),o=Zr(he(e,n,t));return!!(s!==r&&a!==o||s===0&&Yr(i,e,t)||r===0&&Yr(i,n,t)||a===0&&Yr(e,i,n)||o===0&&Yr(e,t,n))}function Yr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Zr(i){return i>0?1:i<0?-1:0}function XA(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&zu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function sr(i,t){return he(i.prev,i,i.next)<0?he(i,t,i.next)>=0&&he(i,i.prev,t)>=0:he(i,t,i.prev)<0||he(i,i.next,t)<0}function qA(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Pu(i,t){let e=new Tl(i.i,i.x,i.y),n=new Tl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function jh(i,t,e,n){let s=new Tl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function rr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Tl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function YA(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ii=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];$h(t),tu(n,t);let a=t.length;e.forEach($h);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,tu(n,e[l]);let o=PA.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function $h(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function tu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var or=class i extends le{constructor(t=new wi([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Wt(s,3)),this.setAttribute("uv",new Wt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:ZA,A,M=!1,z,w,T,F;p&&(A=p.getSpacedPoints(h),M=!0,d=!1,z=p.computeFrenetFrames(h,!1),w=new R,T=new R,F=new R),d||(m=0,f=0,g=0,x=0);let y=o.extractPoints(c),S=y.shape,O=y.holes;if(!ii.isClockWise(S)){S=S.reverse();for(let I=0,dt=O.length;I<dt;I++){let j=O[I];ii.isClockWise(j)&&(O[I]=j.reverse())}}let rt=ii.triangulateShape(S,O),D=S;for(let I=0,dt=O.length;I<dt;I++){let j=O[I];S=S.concat(j)}function H(I,dt,j){return dt||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(dt,j)}let X=S.length,K=rt.length;function tt(I,dt,j){let ut,et,Rt,yt=I.x-dt.x,b=I.y-dt.y,v=j.x-I.x,G=j.y-I.y,ht=yt*yt+b*b,ot=yt*G-b*v;if(Math.abs(ot)>Number.EPSILON){let st=Math.sqrt(ht),Tt=Math.sqrt(v*v+G*G),vt=dt.x-b/st,St=dt.y+yt/st,Dt=j.x-G/Tt,Ft=j.y+v/Tt,at=((Dt-vt)*G-(Ft-St)*v)/(yt*G-b*v);ut=vt+yt*at-I.x,et=St+b*at-I.y;let Xt=ut*ut+et*et;if(Xt<=2)return new $(ut,et);Rt=Math.sqrt(Xt/2)}else{let st=!1;yt>Number.EPSILON?v>Number.EPSILON&&(st=!0):yt<-Number.EPSILON?v<-Number.EPSILON&&(st=!0):Math.sign(b)===Math.sign(G)&&(st=!0),st?(ut=-b,et=yt,Rt=Math.sqrt(ht)):(ut=yt,et=b,Rt=Math.sqrt(ht/2))}return new $(ut/Rt,et/Rt)}let Q=[];for(let I=0,dt=D.length,j=dt-1,ut=I+1;I<dt;I++,j++,ut++)j===dt&&(j=0),ut===dt&&(ut=0),Q[I]=tt(D[I],D[j],D[ut]);let C=[],U,B=Q.concat();for(let I=0,dt=O.length;I<dt;I++){let j=O[I];U=[];for(let ut=0,et=j.length,Rt=et-1,yt=ut+1;ut<et;ut++,Rt++,yt++)Rt===et&&(Rt=0),yt===et&&(yt=0),U[ut]=tt(j[ut],j[Rt],j[yt]);C.push(U),B=B.concat(U)}for(let I=0;I<m;I++){let dt=I/m,j=f*Math.cos(dt*Math.PI/2),ut=g*Math.sin(dt*Math.PI/2)+x;for(let et=0,Rt=D.length;et<Rt;et++){let yt=H(D[et],Q[et],ut);nt(yt.x,yt.y,-j)}for(let et=0,Rt=O.length;et<Rt;et++){let yt=O[et];U=C[et];for(let b=0,v=yt.length;b<v;b++){let G=H(yt[b],U[b],ut);nt(G.x,G.y,-j)}}}let L=g+x;for(let I=0;I<X;I++){let dt=d?H(S[I],B[I],L):S[I];M?(T.copy(z.normals[0]).multiplyScalar(dt.x),w.copy(z.binormals[0]).multiplyScalar(dt.y),F.copy(A[0]).add(T).add(w),nt(F.x,F.y,F.z)):nt(dt.x,dt.y,0)}for(let I=1;I<=h;I++)for(let dt=0;dt<X;dt++){let j=d?H(S[dt],B[dt],L):S[dt];M?(T.copy(z.normals[I]).multiplyScalar(j.x),w.copy(z.binormals[I]).multiplyScalar(j.y),F.copy(A[I]).add(T).add(w),nt(F.x,F.y,F.z)):nt(j.x,j.y,u/h*I)}for(let I=m-1;I>=0;I--){let dt=I/m,j=f*Math.cos(dt*Math.PI/2),ut=g*Math.sin(dt*Math.PI/2)+x;for(let et=0,Rt=D.length;et<Rt;et++){let yt=H(D[et],Q[et],ut);nt(yt.x,yt.y,u+j)}for(let et=0,Rt=O.length;et<Rt;et++){let yt=O[et];U=C[et];for(let b=0,v=yt.length;b<v;b++){let G=H(yt[b],U[b],ut);M?nt(G.x,G.y+A[h-1].y,A[h-1].x+j):nt(G.x,G.y,u+j)}}}W(),it();function W(){let I=s.length/3;if(d){let dt=0,j=X*dt;for(let ut=0;ut<K;ut++){let et=rt[ut];bt(et[2]+j,et[1]+j,et[0]+j)}dt=h+m*2,j=X*dt;for(let ut=0;ut<K;ut++){let et=rt[ut];bt(et[0]+j,et[1]+j,et[2]+j)}}else{for(let dt=0;dt<K;dt++){let j=rt[dt];bt(j[2],j[1],j[0])}for(let dt=0;dt<K;dt++){let j=rt[dt];bt(j[0]+X*h,j[1]+X*h,j[2]+X*h)}}n.addGroup(I,s.length/3-I,0)}function it(){let I=s.length/3,dt=0;ct(D,dt),dt+=D.length;for(let j=0,ut=O.length;j<ut;j++){let et=O[j];ct(et,dt),dt+=et.length}n.addGroup(I,s.length/3-I,1)}function ct(I,dt){let j=I.length;for(;--j>=0;){let ut=j,et=j-1;et<0&&(et=I.length-1);for(let Rt=0,yt=h+m*2;Rt<yt;Rt++){let b=X*Rt,v=X*(Rt+1),G=dt+ut+b,ht=dt+et+b,ot=dt+et+v,st=dt+ut+v;wt(G,ht,ot,st)}}}function nt(I,dt,j){l.push(I),l.push(dt),l.push(j)}function bt(I,dt,j){Mt(I),Mt(dt),Mt(j);let ut=s.length/3,et=_.generateTopUV(n,s,ut-3,ut-2,ut-1);Lt(et[0]),Lt(et[1]),Lt(et[2])}function wt(I,dt,j,ut){Mt(I),Mt(dt),Mt(ut),Mt(dt),Mt(j),Mt(ut);let et=s.length/3,Rt=_.generateSideWallUV(n,s,et-6,et-3,et-2,et-1);Lt(Rt[0]),Lt(Rt[1]),Lt(Rt[3]),Lt(Rt[1]),Lt(Rt[2]),Lt(Rt[3])}function Mt(I){s.push(l[I*3+0]),s.push(l[I*3+1]),s.push(l[I*3+2])}function Lt(I){r.push(I.x),r.push(I.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return JA(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new So[s.type]().fromJSON(s)),new i(n,t.options)}},ZA={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new $(r,a),new $(o,l),new $(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new $(a,1-l),new $(c,1-u),new $(d,1-g),new $(x,1-p)]:[new $(o,1-l),new $(h,1-u),new $(f,1-g),new $(m,1-p)]}};function JA(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var xs=class i extends El{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ar=class i extends le{constructor(t=new wi([new $(0,.5),new $(-.5,-.5),new $(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Wt(s,3)),this.setAttribute("normal",new Wt(r,3)),this.setAttribute("uv",new Wt(a,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,g=d.holes;ii.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let _=g[m];ii.isClockWise(_)===!0&&(g[m]=_.reverse())}let x=ii.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let _=g[m];f=f.concat(_)}for(let m=0,p=f.length;m<p;m++){let _=f[m];s.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let m=0,p=x.length;m<p;m++){let _=x[m],A=_[0]+u,M=_[1]+u,z=_[2]+u;n.push(A,M,z),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return QA(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function QA(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var zn=class i extends le{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new R,d=new R,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let _=[],A=p/n,M=0;p===0&&a===0?M=.5/e:p===n&&l===Math.PI&&(M=-.5/e);for(let z=0;z<=e;z++){let w=z/e;u.x=-t*Math.cos(s+w*r)*Math.sin(a+A*o),u.y=t*Math.cos(a+A*o),u.z=t*Math.sin(s+w*r)*Math.sin(a+A*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(w+M,1-A),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){let A=h[p][_+1],M=h[p][_],z=h[p+1][_],w=h[p+1][_+1];(p!==0||a>0)&&f.push(A,M,w),(p!==n-1||l<Math.PI)&&f.push(M,z,w)}this.setIndex(f),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(x,3)),this.setAttribute("uv",new Wt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var To=class i extends le{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new R,u=new R,d=new R;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,_=(s+1)*f+g;a.push(x,m,_),a.push(m,p,_)}this.setIndex(a),this.setAttribute("position",new Wt(o,3)),this.setAttribute("normal",new Wt(l,3)),this.setAttribute("uv",new Wt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ro=class i extends le{constructor(t=new Mo(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,l=new R,c=new $,h=new R,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(f,2));function x(){for(let A=0;A<e;A++)m(A);m(r===!1?e:0),_(),p()}function m(A){h=t.getPointAt(A/e,h);let M=a.normals[A],z=a.binormals[A];for(let w=0;w<=s;w++){let T=w/s*Math.PI*2,F=Math.sin(T),y=-Math.cos(T);l.x=y*M.x+F*z.x,l.y=y*M.y+F*z.y,l.z=y*M.z+F*z.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let A=1;A<=e;A++)for(let M=1;M<=s;M++){let z=(s+1)*(A-1)+(M-1),w=(s+1)*A+(M-1),T=(s+1)*A+M,F=(s+1)*(A-1)+M;g.push(z,w,F),g.push(w,T,F)}}function _(){for(let A=0;A<=e;A++)for(let M=0;M<=s;M++)c.x=A/e,c.y=M/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new So[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Co=class extends ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},je=class extends Wn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gu,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},zo=class extends je{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Jr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function KA(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var _s=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Rl=class extends _s{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sh,endingEnd:sh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case rh:r=t,o=2*e-n;break;case oh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case rh:a=t,l=2*n-e;break;case oh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,A=(-1-f)*m+(1.5+f)*x+.5*g,M=f*m-f*x;for(let z=0;z!==o;++z)r[z]=p*a[h+z]+_*a[c+z]+A*a[l+z]+M*a[u+z];return r}},Cl=class extends _s{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},zl=class extends _s{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},vn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Jr(e,this.TimeBufferType),this.values=Jr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Jr(t.times,Array),values:Jr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Rl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Kr:e=this.InterpolantFactoryMethodDiscrete;break;case jr:e=this.InterpolantFactoryMethodLinear;break;case Ma:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kr;case this.InterpolantFactoryMethodLinear:return jr;case this.InterpolantFactoryMethodSmooth:return Ma}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&KA(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ma,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=jr;var Ri=class extends vn{};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Kr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Pl=class extends vn{};Pl.prototype.ValueTypeName="color";var Il=class extends vn{};Il.prototype.ValueTypeName="number";var Ll=class extends _s{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)xn.slerpFlat(r,0,a,c-o,a,c,l);return r}},lr=class extends vn{InterpolantFactoryMethodLinear(t){return new Ll(this.times,this.values,this.getValueSize(),t)}};lr.prototype.ValueTypeName="quaternion";lr.prototype.DefaultInterpolation=jr;lr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends vn{};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Kr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Dl=class extends vn{};Dl.prototype.ValueTypeName="vector";var Ul=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},jA=new Ul,Nl=class{constructor(t){this.manager=t!==void 0?t:jA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Nl.DEFAULT_MATERIAL_NAME="__DEFAULT";var cr=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Po=class extends cr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ja=new pe,eu=new R,nu=new R,Io=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qs,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;eu.setFromMatrixPosition(t.matrixWorld),e.position.copy(eu),nu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nu),e.updateMatrixWorld(),Ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ja)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var iu=new pe,ks=new R,Qa=new R,Ol=class extends Io{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ks.setFromMatrixPosition(t.matrixWorld),n.position.copy(ks),Qa.copy(n.position),Qa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Qa),n.updateMatrixWorld(),s.makeTranslation(-ks.x,-ks.y,-ks.z),iu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(iu)}},vs=class extends cr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ol}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Fl=class extends Io{constructor(){super(new fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lo=class extends cr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new Fl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Do=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=su(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=su();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function su(){return(typeof performance>"u"?Date:performance).now()}var Kl="\\[\\]\\.:\\/",$A=new RegExp("["+Kl+"]","g"),jl="[^"+Kl+"]",tx="[^"+Kl.replace("\\.","")+"]",ex=/((?:WC+[\/:])*)/.source.replace("WC",jl),nx=/(WCOD+)?/.source.replace("WCOD",tx),ix=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jl),sx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jl),rx=new RegExp("^"+ex+nx+ix+sx+"$"),ox=["material","materials","bones","map"],Bl=class{constructor(t,e,n){let s=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($A,"")}static parseTrackName(t){let e=rx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ox.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oe.Composite=Bl;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ox=new Float32Array(1);var yn=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kl);var Bo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var $e=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ax=new fs(-1,1,1,-1,0,1),tc=class extends le{constructor(){super(),this.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Wt([0,2,0,0,2,0],2))}},lx=new tc,li=class{constructor(t){this._mesh=new Qt(lx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ax)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ms=class extends $e{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ai.clone(t.uniforms),this.material=new ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new li(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ur=class extends $e{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ko=class extends $e{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ho=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new $);this._width=n.width,this._height=n.height,e=new ze(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ms(Bo),this.copyPass.material.blending=Tn,this.clock=new Do}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ur!==void 0&&(a instanceof ur?n=!0:a instanceof ko&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new $);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Vo=class extends $e{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new zt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Iu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new zt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var bs=class i extends $e{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new $(t.x,t.y):new $(256,256),this.clearColor=new zt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ze(r,a,{type:Qe}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new ze(r,a,{type:Qe});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new ze(r,a,{type:Qe});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=Iu;this.highPassUniforms=ai.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ve({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new $(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Bo;this.copyUniforms=ai.clone(h.uniforms),this.blendMaterial=new ve({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ri,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new zt,this.oldClearAlpha=1,this.basic=new Ke,this.fsQuad=new li(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new $(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ve({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new $(.5,.5)},direction:{value:new $(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new ve({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};bs.BlurDirectionX=new $(1,0);bs.BlurDirectionY=new $(0,1);var Lu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Go=class extends $e{constructor(){super();let t=Lu;this.uniforms=ai.clone(t.uniforms),this.material=new Co({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new li(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},te.getTransfer(this._outputColorSpace)===ie&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Gl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===hr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Xl&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Wo=class extends ms{constructor(t=null){super();let e=new _n;e.deleteAttribute("uv");let n=new je({side:Re}),s=new je,r=5;t!==null&&t._useLegacyLights===!1&&(r=900);let a=new vs(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new Qt(e,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let l=new Qt(e,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new Qt(e,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new Qt(e,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new Qt(e,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new Qt(e,s);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let f=new Qt(e,s);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let g=new Qt(e,Ss(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let x=new Qt(e,Ss(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let m=new Qt(e,Ss(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let p=new Qt(e,Ss(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let _=new Qt(e,Ss(20));_.position.set(3.235,11.486,-12.541),_.scale.set(2.5,2,.1),this.add(_);let A=new Qt(e,Ss(100));A.position.set(0,20,0),A.scale.set(1,.1,1),this.add(A)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ss(i){let t=new Ke;return t.color.setScalar(i),t}var Du={type:"change"},ec={type:"start"},Uu={type:"end"},Xo=new us,Nu=new mn,cx=Math.cos(70*xu.DEG2RAD),qo=class extends Cn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zi.ROTATE,MIDDLE:zi.DOLLY,RIGHT:zi.PAN},this.touches={ONE:Pi.ROTATE,TWO:Pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",st),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",st),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Du),n.update(),r=s.NONE},this.update=function(){let P=new R,lt=new xn().setFromUnitVectors(t.up,new R(0,1,0)),At=lt.clone().invert(),ft=new R,Ct=new xn,qt=new R,Jt=2*Math.PI;return function(gt=null){let N=n.object.position;P.copy(N).sub(n.target),P.applyQuaternion(lt),o.setFromVector3(P),n.autoRotate&&r===s.NONE&&O(y(gt)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let pt=n.minAzimuthAngle,mt=n.maxAzimuthAngle;isFinite(pt)&&isFinite(mt)&&(pt<-Math.PI?pt+=Jt:pt>Math.PI&&(pt-=Jt),mt<-Math.PI?mt+=Jt:mt>Math.PI&&(mt-=Jt),pt<=mt?o.theta=Math.max(pt,Math.min(mt,o.theta)):o.theta=o.theta>(pt+mt)/2?Math.max(pt,o.theta):Math.min(mt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&w||n.object.isOrthographicCamera?o.radius=Q(o.radius):o.radius=Q(o.radius*c),P.setFromSpherical(o),P.applyQuaternion(At),N.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Ut=!1;if(n.zoomToCursor&&w){let Pt=null;if(n.object.isPerspectiveCamera){let jt=P.length();Pt=Q(jt*c);let $t=jt-Pt;n.object.position.addScaledVector(M,$t),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let jt=new R(z.x,z.y,0);jt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ut=!0;let $t=new R(z.x,z.y,0);$t.unproject(n.object),n.object.position.sub($t).add(jt),n.object.updateMatrixWorld(),Pt=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Pt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Pt).add(n.object.position):(Xo.origin.copy(n.object.position),Xo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Xo.direction))<cx?t.lookAt(n.target):(Nu.setFromNormalAndCoplanarPoint(n.object.up,n.target),Xo.intersectPlane(Nu,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ut=!0);return c=1,w=!1,Ut||ft.distanceToSquared(n.object.position)>a||8*(1-Ct.dot(n.object.quaternion))>a||qt.distanceToSquared(n.target)>0?(n.dispatchEvent(Du),ft.copy(n.object.position),Ct.copy(n.object.quaternion),qt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",St),n.domElement.removeEventListener("pointerdown",yt),n.domElement.removeEventListener("pointercancel",v),n.domElement.removeEventListener("wheel",ot),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",v),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",st),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,a=1e-6,o=new yn,l=new yn,c=1,h=new R,u=new $,d=new $,f=new $,g=new $,x=new $,m=new $,p=new $,_=new $,A=new $,M=new R,z=new $,w=!1,T=[],F={};function y(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function S(P){let lt=Math.abs(P)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*lt)}function O(P){l.theta-=P}function k(P){l.phi-=P}let rt=function(){let P=new R;return function(At,ft){P.setFromMatrixColumn(ft,0),P.multiplyScalar(-At),h.add(P)}}(),D=function(){let P=new R;return function(At,ft){n.screenSpacePanning===!0?P.setFromMatrixColumn(ft,1):(P.setFromMatrixColumn(ft,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(At),h.add(P)}}(),H=function(){let P=new R;return function(At,ft){let Ct=n.domElement;if(n.object.isPerspectiveCamera){let qt=n.object.position;P.copy(qt).sub(n.target);let Jt=P.length();Jt*=Math.tan(n.object.fov/2*Math.PI/180),rt(2*At*Jt/Ct.clientHeight,n.object.matrix),D(2*ft*Jt/Ct.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(rt(At*(n.object.right-n.object.left)/n.object.zoom/Ct.clientWidth,n.object.matrix),D(ft*(n.object.top-n.object.bottom)/n.object.zoom/Ct.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function X(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function tt(P,lt){if(!n.zoomToCursor)return;w=!0;let At=n.domElement.getBoundingClientRect(),ft=P-At.left,Ct=lt-At.top,qt=At.width,Jt=At.height;z.x=ft/qt*2-1,z.y=-(Ct/Jt)*2+1,M.set(z.x,z.y,1).unproject(n.object).sub(n.object.position).normalize()}function Q(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function C(P){u.set(P.clientX,P.clientY)}function U(P){tt(P.clientX,P.clientX),p.set(P.clientX,P.clientY)}function B(P){g.set(P.clientX,P.clientY)}function L(P){d.set(P.clientX,P.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let lt=n.domElement;O(2*Math.PI*f.x/lt.clientHeight),k(2*Math.PI*f.y/lt.clientHeight),u.copy(d),n.update()}function W(P){_.set(P.clientX,P.clientY),A.subVectors(_,p),A.y>0?X(S(A.y)):A.y<0&&K(S(A.y)),p.copy(_),n.update()}function it(P){x.set(P.clientX,P.clientY),m.subVectors(x,g).multiplyScalar(n.panSpeed),H(m.x,m.y),g.copy(x),n.update()}function ct(P){tt(P.clientX,P.clientY),P.deltaY<0?K(S(P.deltaY)):P.deltaY>0&&X(S(P.deltaY)),n.update()}function nt(P){let lt=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),lt=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),lt=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),lt=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),lt=!0;break}lt&&(P.preventDefault(),n.update())}function bt(P){if(T.length===1)u.set(P.pageX,P.pageY);else{let lt=Xt(P),At=.5*(P.pageX+lt.x),ft=.5*(P.pageY+lt.y);u.set(At,ft)}}function wt(P){if(T.length===1)g.set(P.pageX,P.pageY);else{let lt=Xt(P),At=.5*(P.pageX+lt.x),ft=.5*(P.pageY+lt.y);g.set(At,ft)}}function Mt(P){let lt=Xt(P),At=P.pageX-lt.x,ft=P.pageY-lt.y,Ct=Math.sqrt(At*At+ft*ft);p.set(0,Ct)}function Lt(P){n.enableZoom&&Mt(P),n.enablePan&&wt(P)}function I(P){n.enableZoom&&Mt(P),n.enableRotate&&bt(P)}function dt(P){if(T.length==1)d.set(P.pageX,P.pageY);else{let At=Xt(P),ft=.5*(P.pageX+At.x),Ct=.5*(P.pageY+At.y);d.set(ft,Ct)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let lt=n.domElement;O(2*Math.PI*f.x/lt.clientHeight),k(2*Math.PI*f.y/lt.clientHeight),u.copy(d)}function j(P){if(T.length===1)x.set(P.pageX,P.pageY);else{let lt=Xt(P),At=.5*(P.pageX+lt.x),ft=.5*(P.pageY+lt.y);x.set(At,ft)}m.subVectors(x,g).multiplyScalar(n.panSpeed),H(m.x,m.y),g.copy(x)}function ut(P){let lt=Xt(P),At=P.pageX-lt.x,ft=P.pageY-lt.y,Ct=Math.sqrt(At*At+ft*ft);_.set(0,Ct),A.set(0,Math.pow(_.y/p.y,n.zoomSpeed)),X(A.y),p.copy(_);let qt=(P.pageX+lt.x)*.5,Jt=(P.pageY+lt.y)*.5;tt(qt,Jt)}function et(P){n.enableZoom&&ut(P),n.enablePan&&j(P)}function Rt(P){n.enableZoom&&ut(P),n.enableRotate&&dt(P)}function yt(P){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",b),n.domElement.addEventListener("pointerup",v)),Dt(P),P.pointerType==="touch"?Tt(P):G(P))}function b(P){n.enabled!==!1&&(P.pointerType==="touch"?vt(P):ht(P))}function v(P){Ft(P),T.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",v)),n.dispatchEvent(Uu),r=s.NONE}function G(P){let lt;switch(P.button){case 0:lt=n.mouseButtons.LEFT;break;case 1:lt=n.mouseButtons.MIDDLE;break;case 2:lt=n.mouseButtons.RIGHT;break;default:lt=-1}switch(lt){case zi.DOLLY:if(n.enableZoom===!1)return;U(P),r=s.DOLLY;break;case zi.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;B(P),r=s.PAN}else{if(n.enableRotate===!1)return;C(P),r=s.ROTATE}break;case zi.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;C(P),r=s.ROTATE}else{if(n.enablePan===!1)return;B(P),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(ec)}function ht(P){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;L(P);break;case s.DOLLY:if(n.enableZoom===!1)return;W(P);break;case s.PAN:if(n.enablePan===!1)return;it(P);break}}function ot(P){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(P.preventDefault(),n.dispatchEvent(ec),ct(P),n.dispatchEvent(Uu))}function st(P){n.enabled===!1||n.enablePan===!1||nt(P)}function Tt(P){switch(at(P),T.length){case 1:switch(n.touches.ONE){case Pi.ROTATE:if(n.enableRotate===!1)return;bt(P),r=s.TOUCH_ROTATE;break;case Pi.PAN:if(n.enablePan===!1)return;wt(P),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Pi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Lt(P),r=s.TOUCH_DOLLY_PAN;break;case Pi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;I(P),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(ec)}function vt(P){switch(at(P),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;dt(P),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;j(P),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;et(P),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Rt(P),n.update();break;default:r=s.NONE}}function St(P){n.enabled!==!1&&P.preventDefault()}function Dt(P){T.push(P.pointerId)}function Ft(P){delete F[P.pointerId];for(let lt=0;lt<T.length;lt++)if(T[lt]==P.pointerId){T.splice(lt,1);return}}function at(P){let lt=F[P.pointerId];lt===void 0&&(lt=new $,F[P.pointerId]=lt),lt.set(P.pageX,P.pageY)}function Xt(P){let lt=P.pointerId===T[0]?T[1]:T[0];return F[lt]}n.domElement.addEventListener("contextmenu",St),n.domElement.addEventListener("pointerdown",yt),n.domElement.addEventListener("pointercancel",v),n.domElement.addEventListener("wheel",ot,{passive:!1}),this.update()}};var dr=new R;function hn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;dr.copy(t),dr[n]=0,dr.normalize();let c=.5*a/(a+o),h=1-dr.angleTo(i)/l;return Math.sign(dr[e])===1?h*c:o/(a+o)+c+c*(1-h)}var Yo=class extends _n{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new R,l=new R,c=new R(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new R,x=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*r,h[m+1]=c.y*Math.sign(o.y)+l.y*r,h[m+2]=c.z*Math.sign(o.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=hn(g,l,"z","y",r,n),d[p+1]=1-hn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-hn(g,l,"z","y",r,n),d[p+1]=1-hn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-hn(g,l,"x","z",r,t),d[p+1]=hn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-hn(g,l,"x","z",r,t),d[p+1]=1-hn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-hn(g,l,"x","y",r,t),d[p+1]=1-hn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=hn(g,l,"x","y",r,t),d[p+1]=1-hn(g,l,"y","x",r,e);break}}};function Fu(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new le,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Ou(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let g=Ou(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Ou(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let a=new t(r),o=0;for(let c=0;c<i.length;++c)a.set(i[c].array,o),o+=i[c].array.length;let l=new Ce(a,e,n);return s!==void 0&&(l.gpuType=s),l}function Pn(i,t=i){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function In(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function un(i,{repeat:t=[1,1],srgb:e=!0}={}){let n=new oi(i);return n.wrapS=n.wrapT=Ys,n.repeat.set(t[0],t[1]),n.anisotropy=8,e&&(n.colorSpace=fe),n}function nc(i,t,e){let n=new Float32Array(e*e);for(let r=0;r<n.length;r++)n[r]=t();let s=new Float32Array(i*i);for(let r=0;r<i;r++){let a=r/i*e,o=Math.floor(a),l=a-o,c=l*l*(3-2*l),h=(o+1)%e;for(let u=0;u<i;u++){let d=u/i*e,f=Math.floor(d),g=d-f,x=g*g*(3-2*g),m=(f+1)%e,p=n[o*e+f],_=n[o*e+m],A=n[h*e+f],M=n[h*e+m];s[r*i+u]=p+(_-p)*x+(A-p)*c+(p-_-A+M)*x*c}}return s}function Zo(i,t){let e=nc(i,t,4),n=nc(i,t,9),s=nc(i,t,23);for(let r=0;r<e.length;r++)e[r]=e[r]*.55+n[r]*.3+s[r]*.15;return e}function Bu(i){let t=parseInt(i.slice(1),16);return[t>>16&255,t>>8&255,t&255]}function Jo(i,t,e,n,s,r){let[a,o]=Pn(i),[l,c,h]=typeof t=="string"?Bu(t):t,u=o.createImageData(i,i),d=u.data;for(let f=0,g=0;f<i*i;f++,g+=4){let x=1+(e[f]-.5)*2*n,m=(r()-.5)*s;d[g]=l*x+m,d[g+1]=c*x+m,d[g+2]=h*x+m,d[g+3]=255}return o.putImageData(u,0,0),[a,o]}function Ii(i="#8a8580",t=1,e=[1,1],n=.16,s=512){let r=In(t),[a]=Jo(s,i,Zo(s,r),n*1.6,20,r);return un(a,{repeat:e})}function ic(i="#6f6d6a",t=3,e=.9,n=1024){let s=In(t),[r,a]=Jo(n,i,Zo(n,s),.14,10,s);a.fillStyle="rgba(20,18,16,0.6)";let o=Math.max(2,n/256);for(let c of[0,n/2,n])a.fillRect(c-o/2,0,o,n),a.fillRect(0,c-o/2,n,o);let l=un(r);return l.userData.tileSize=e*2,l}function Qo(i=[92,58,36],t=7,{dark:e=0,N:n=1024}={}){let s=In(t),[r,a,o]=i.map(m=>m*(1-e)),l=new Float32Array(n);for(let m=0;m<90;m++){let p=s()*n,_=(.6+s()*3.5)*n/512,A=(s()-.6)*.22;for(let M=-24;M<=24;M++)l[((Math.round(p)+M)%n+n)%n]+=A*Math.exp(-(M/_)*(M/_))}let c=[0,1,2,3].map(()=>.88+s()*.24),h=s()*6.28,u=s()*6.28,[d,f]=Pn(n),g=f.createImageData(n,n),x=g.data;for(let m=0;m<n;m++){let p=(Math.sin(m/n*6.283+h)*5+Math.sin(m/n*18.85+u)*2)*n/512;for(let _=0;_<n;_++){let A=p*(1+.6*Math.sin(_/n*12.566)),M=c[Math.floor(_*4/n)]*(1+l[((_+Math.round(A))%n+n)%n]),z=(s()-.5)*8,w=(m*n+_)*4;x[w]=r*M+z,x[w+1]=a*M+z,x[w+2]=o*M+z,x[w+3]=255}}return f.putImageData(g,0,0),un(d)}function ku(i=11){let n=In(i),s=[],r=[];for(let f=0;f<13;f++)for(let g=0;g<13;g++){s.push([(g+.1+n()*.8)/13,(f+.1+n()*.8)/13]);let x=62+n()*62,m=4+n()*16;r.push([x+m,x+m*.7,x])}let[a,o]=Pn(512),[l,c]=Pn(512),h=o.createImageData(512,512),u=c.createImageData(512,512),d=In(i+1);for(let f=0;f<512;f++)for(let g=0;g<512;g++){let x=g/512,m=f/512,p=Math.floor(x*13),_=Math.floor(m*13),A=9,M=9,z=0;for(let D=-1;D<=1;D++)for(let H=-1;H<=1;H++){let X=p+H,K=_+D,tt=0,Q=0;X<0?(X+=13,tt=-1):X>=13&&(X-=13,tt=1),K<0?(K+=13,Q=-1):K>=13&&(K-=13,Q=1);let C=K*13+X,U=s[C],B=U[0]+tt-x,L=U[1]+Q-m,W=Math.sqrt(B*B+L*L);W<A?(M=A,A=W,z=C):W<M&&(M=W)}let w=(M-A)*13,T=Math.min(1,Math.max(0,(w-.03)/.1)),F=Math.min(1,w*2.2),y=(d()-.5)*30+Math.sin(g*.21+f*.13)*4,S=r[z],O=(f*512+g)*4,k=.55+.45*F;h.data[O]=(S[0]*k+y)*T+34*(1-T),h.data[O+1]=(S[1]*k+y)*T+32*(1-T),h.data[O+2]=(S[2]*k+y)*T+30*(1-T),h.data[O+3]=255;let rt=255*(.25+.75*F)*T+y*.6;u.data[O]=u.data[O+1]=u.data[O+2]=rt,u.data[O+3]=255}return o.putImageData(h,0,0),c.putImageData(u,0,0),{map:un(a),bump:un(l,{srgb:!1})}}function Hu(i=41){let e=In(i),[n,s]=Jo(512,"#161616",Zo(512,e),.25,14,e);for(let r=0;r<2600;r++){let a=70+e()*110;s.fillStyle=`rgba(${a},${a*.97},${a*.92},${.25+e()*.5})`,s.fillRect(e()*512,e()*512,1+e()*2,1+e()*2)}return un(n)}function Vu(i="#5a5550",t=5){let n=In(t),[s,r,a]=Bu(i),[o,l]=Pn(256),c=l.createImageData(256,256),h=c.data;for(let u=0;u<256;u++)for(let d=0;d<256;d++){let f=1+(u%2?.03:-.01)-(d%2?.04:0)+(n()-.5)*.12,g=(u*256+d)*4;h[g]=s*f,h[g+1]=r*f,h[g+2]=a*f,h[g+3]=255}return l.putImageData(c,0,0),un(o)}function Gu(i="#7b3f1d",t=9){let e=In(t),[n]=Jo(512,i,Zo(512,e),.16,22,e);return un(n)}function Wu(i=21){let[t,e]=Pn(512),n=In(i);e.fillStyle="#2a1840",e.fillRect(0,0,512,512);let s=["#ff4f8b","#ffb000","#3dd6c4","#7b5cff","#ff6a3d","#1fa2ff","#c2f970","#ff9ad5"];for(let a=0;a<520;a++){let o=n()*Math.PI*2,l=Math.pow(n(),.7)*250,c=256+Math.cos(o)*l,h=256+Math.sin(o)*l,u=6+n()*26;e.fillStyle=s[Math.floor(n()*s.length)],e.globalAlpha=.6+n()*.4,e.beginPath(),e.ellipse(c,h,u,u*(.5+n()*.5),n()*3,0,Math.PI*2),e.fill()}e.globalAlpha=1;let r=e.createRadialGradient(256,256,30,256,256,120);return r.addColorStop(0,"rgba(60,40,140,0.9)"),r.addColorStop(1,"rgba(60,40,140,0)"),e.fillStyle=r,e.fillRect(0,0,512,512),un(t)}function Xu(){let[i,t]=Pn(512,288),e=t.createLinearGradient(0,0,512,288);e.addColorStop(0,"#0b2a3a"),e.addColorStop(.5,"#1d6d8c"),e.addColorStop(1,"#0a1622"),t.fillStyle=e,t.fillRect(0,0,512,288);let n=t.createRadialGradient(380,90,4,380,90,90);n.addColorStop(0,"rgba(255,214,150,0.95)"),n.addColorStop(1,"rgba(255,214,150,0)"),t.fillStyle=n,t.fillRect(0,0,512,288),t.fillStyle="rgba(5,12,18,0.85)",t.beginPath(),t.moveTo(0,230);for(let s=0;s<=512;s+=16)t.lineTo(s,200+Math.sin(s*.03)*14+Math.sin(s*.11)*6);return t.lineTo(512,288),t.lineTo(0,288),t.fill(),un(i,{repeat:[1,1]})}function qu(i=31){let[t,e]=Pn(512,256),n=In(i);e.fillStyle="#7d756b",e.fillRect(0,0,512,256);for(let s=0;s<700;s++){let r=n()*512,a=n()*256,o=4+n()*26,l=3+n()*12,c=90+n()*70;e.fillStyle=`rgb(${c},${c*.95},${c*.88})`,e.fillRect(r,a,o,l)}return e.fillStyle="rgba(40,36,30,0.9)",e.fillRect(0,126,512,4),un(t)}function Yu(){let[i,t]=Pn(256);t.fillStyle="#000",t.fillRect(0,0,256,256),t.strokeStyle="#fff",t.lineWidth=7;for(let e=-256;e<512;e+=22)t.beginPath(),t.moveTo(e,0),t.lineTo(e+256,256),t.stroke(),t.beginPath(),t.moveTo(e+256,0),t.lineTo(e,256),t.stroke();return un(i,{repeat:[3,2],srgb:!1})}function Ko(i="255,190,120"){let[t,e]=Pn(128),n=e.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,`rgba(${i},1)`),n.addColorStop(.35,`rgba(${i},0.35)`),n.addColorStop(1,`rgba(${i},0)`),e.fillStyle=n,e.fillRect(0,0,128,128);let s=new oi(t);return s.colorSpace=fe,s}var ee=2.7,ws={x0:-57/73.3,x1:675/73.3,z0:-50/73.3,z1:487/73.3},Xn=new Set;function me(i){let t=new je(i);return Xn.add(t),t}function Li(i){let t=new zo(i);return Xn.add(t),t}function Oe(i,t){return i.repeat.set(1/t,1/t),i}function ci(i,t,e,n,s={}){let r=Oe(Vu(i,t),e);return Li({map:r,bumpMap:r,bumpScale:.35,roughness:.92,sheen:1,sheenRoughness:.55,sheenColor:n,...s})}function ux(){let i=ku();Oe(i.map,1),Oe(i.bump,1);let t=Oe(Qo([96,60,38],7),1.2),e=Oe(Qo([70,44,28],8),1.2),n=Oe(Qo([120,92,70],12),1.6),s=Oe(Ii("#7e7973",2,[1,1],.045,1024),2.6),r=Oe(ic("#77736e",3),1.8),a=Oe(ic("#4a4744",6,.6,512),1.2),o=Oe(Gu("#5e2f17"),1.2),l=Oe(Ii("#8e8a85",5),1.4);return{wall:me({map:s,bumpMap:s,bumpScale:.35,roughness:.9}),wallDark:me({map:Oe(Ii("#4f4b47",4),2),roughness:.6}),cut:me({color:"#181615",roughness:1}),black:me({color:"#121212",roughness:.7}),blackGloss:Li({color:"#0b0b0c",roughness:.3,metalness:.1,clearcoat:1,clearcoatRoughness:.08}),floorTile:me({map:r,bumpMap:r,bumpScale:.8,roughness:.34}),floorBath:me({map:a,bumpMap:a,bumpScale:.8,roughness:.3}),floorWood:me({map:n,bumpMap:n,bumpScale:.5,roughness:.48}),slab:me({map:Oe(Ii("#3a3735",9),3),roughness:1}),walnut:me({map:t,bumpMap:t,bumpScale:.45,roughness:.48}),walnutDark:me({map:e,bumpMap:e,bumpScale:.45,roughness:.5}),granite:Li({map:Oe(Hu(),.6),roughness:.25,clearcoat:1,clearcoatRoughness:.06}),cement:me({map:l,bumpMap:l,bumpScale:.4,roughness:.78}),stoneTop:me({map:Oe(Ii("#7c7873",15),.8),roughness:.32}),stone:me({map:i.map,bumpMap:i.bump,bumpScale:3,roughness:.95}),leather:Li({map:o,bumpMap:o,bumpScale:.5,roughness:.52,clearcoat:.35,clearcoatRoughness:.45}),redLacquer:Li({color:"#9d1518",roughness:.35,clearcoat:.9,clearcoatRoughness:.12}),greenVelvet:ci("#1f3a2a",13,.4,"#6f9c7b",{sheenRoughness:.4}),linen:ci("#8e867c",14,.5,"#d8cfc2"),duvet:ci("#6d6760",15,.6,"#b9b1a6"),charcoal:ci("#2c2a28",16,.5,"#6e6a66"),headboard:ci("#4a433c",17,.5,"#91877b"),rug:ci("#45423f",18,.8,"#7d7873",{bumpScale:.8,roughness:1}),rugDark:ci("#33302d",19,.8,"#69645f",{bumpScale:.8,roughness:1}),curtain:ci("#a39684",20,.6,"#efe3d0",{side:Je}),steel:me({color:"#b9b9b6",roughness:.22,metalness:1}),brass:me({color:"#b8925c",roughness:.28,metalness:1}),ceramic:Li({color:"#f1efea",roughness:.15,clearcoat:1,clearcoatRoughness:.05}),terracotta:me({color:"#a8643f",roughness:.85}),leaf:me({color:"#2f4728",roughness:.6}),branch:me({color:"#5b4330",roughness:.9}),art:me({map:Wu(),roughness:.6}),sphere:me({map:qu(),roughness:.85}),screenOff:Li({color:"#060708",roughness:.1,metalness:.2,clearcoat:1,clearcoatRoughness:.03}),glass:(()=>{let c=new je({color:"#a9c2c8",roughness:.03,metalness:.1,transparent:!0,opacity:.16,depthWrite:!1,envMapIntensity:1.4});return Xn.add(c),c})(),glassDark:(()=>{let c=new je({color:"#1c1a18",roughness:.06,metalness:.2,transparent:!0,opacity:.45,depthWrite:!1});return Xn.add(c),c})(),mirror:me({color:"#c9ccd0",roughness:.02,metalness:1}),weave:(()=>{let c=new je({color:"#2a2018",roughness:.9,alphaMap:Yu(),alphaTest:.5,side:Je});return Xn.add(c),c})()}}function fr(i){let t=i.attributes.position,e=i.attributes.normal,n=i.attributes.uv;for(let s=0;s<t.count;s++){let r=Math.abs(e.getX(s)),a=Math.abs(e.getY(s)),o=Math.abs(e.getZ(s));r>=a&&r>=o?n.setXY(s,t.getZ(s),t.getY(s)):a>=o?n.setXY(s,t.getX(s),t.getZ(s)):n.setXY(s,t.getX(s),t.getY(s))}return n.needsUpdate=!0,i}function se(i,t,e=0,n=0,s=0){let r=new Qt(i,t);return r.position.set(e,n,s),r.castShadow=!0,r.receiveShadow=!0,r}function Z(i,t,e,n,s,r,a,o=0){let l=t-i,c=n-e,h=r-s,u=o>0?new Yo(l,c,h,3,Math.min(o,l/2,c/2,h/2)*.98):new _n(l,c,h);return fr(u),se(u,a,(i+t)/2,(e+n)/2,(s+r)/2)}function Ie(i,t,e,n,s,r,a=32,o=i){let l=new As(o,i,t,a);return se(l,e,n,s+t/2,r)}function sc(i,t,e){let n=new wi,s=-i/2,r=-t/2;return n.moveTo(s+e,r),n.lineTo(s+i-e,r),n.quadraticCurveTo(s+i,r,s+i,r+e),n.lineTo(s+i,r+t-e),n.quadraticCurveTo(s+i,r+t,s+i-e,r+t),n.lineTo(s+e,r+t),n.quadraticCurveTo(s,r+t,s,r+t-e),n.lineTo(s,r+e),n.quadraticCurveTo(s,r,s+e,r),n}function Zu(i,t,e,n,s,r,a,o){let l=new or(sc(e,n,s),{depth:r,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:2,curveSegments:10});return l.rotateX(Math.PI/2),fr(l),se(l,o,i,a,t)}function Es(i,t,e,n=40){let s=new nr(i.map(r=>new R(...r)));return se(new Ro(s,n,t,8,!1),e)}function jo(i){let t=new Map;for(let e of[...i.children]){if(!e.isMesh||Array.isArray(e.material))continue;e.updateMatrix();let n=(e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone()).applyMatrix4(e.matrix);for(let s of Object.keys(n.attributes))["position","normal","uv"].includes(s)||n.deleteAttribute(s);!n.attributes.uv||!n.attributes.normal||(t.has(e.material)||t.set(e.material,{geos:[],cast:e.castShadow}),t.get(e.material).geos.push(n),i.remove(e))}for(let[e,{geos:n,cast:s}]of t){let r=new Qt(Fu(n),e);r.castShadow=s,r.receiveShadow=!0,i.add(r)}return i}function Ju(){let i=ux(),t=new Te,e=new Ke({color:new zt("#ffb46b")}),n=new Ke({color:new zt("#ffc58a")}),s=new Ke({map:Xu(),color:new zt(.25,.25,.25)}),r=new Ke({color:new zt("#14324a")}),a=(C,U=1)=>new $s({map:Ko(C),transparent:!0,opacity:U,depthWrite:!1,blending:ri}),o=[];function l(C,U,B,L,W="255,180,110",it=.8){let ct=new Ao(a(W,0));return ct.position.set(C,U,B),ct.scale.set(L,L,L),ct.userData.maxOpacity=it,o.push(ct),ct}function c(C,U,B,L,W,it,ct=e){let nt=Z(C,U,B,L,W,it,ct);return nt.castShadow=!1,nt}for(let C of[Z(-.2,8.74,-.3,-.002,-.2,4.53,i.slab),Z(-.2,3.95,-.3,-.002,4.53,6.15,i.slab)])C.castShadow=!1,t.add(C);let h=new Te;function u(C,U,B,L,W){let it=new ln(B-C,L-U);it.rotateX(-Math.PI/2),it.translate((C+B)/2,.003,(U+L)/2),fr(it);let ct=new Qt(it,W);ct.receiveShadow=!0,h.add(ct)}let d=[i.floorTile,i.floorWood,i.floorBath].map(C=>{let U=C.clone();return U.transparent=!0,U.opacity=0,Xn.add(U),U}),[f,g,x]=d;u(0,0,4.4,2.3,f),u(0,2.3,3.79,4.35,f),u(0,4.35,3.95,6.03,f),u(6.92,0,8.54,1.36,g),u(4.55,1.36,8.54,2.35,g),u(3.95,2.35,8.54,4.35,g),u(4.55,0,6.79,1.24,x),t.add(h);let m=[],p=[i.wall,i.wall,i.cut,i.wall,i.wall,i.wall];function _(C,U,B,L,W=[],it=p){let ct=new Te,nt=U-C>=L-B,bt=nt?C:B,wt=nt?U:L,Mt=(I,dt,j,ut)=>{if(dt-I<.001||ut-j<.001)return;let et=nt?Z(I,dt,j,ut,B,L,i.wall):Z(C,U,j,ut,I,dt,i.wall);et.material=it,ct.add(et)},Lt=bt;for(let I of[...W].sort((dt,j)=>dt.a-j.a))Mt(Lt,I.a,0,ee),Mt(I.a,I.b,0,I.y1),Mt(I.a,I.b,I.y2,ee),Lt=I.b;return Mt(Lt,wt,0,ee),ct.userData.center=new R((C+U)/2,0,(B+L)/2),m.push(ct),t.add(ct),ct}let A=2.1;_(-.2,8.74,-.2,0,[{a:1.27,b:2.07,y1:0,y2:A},{a:6.12,b:6.62,y1:1.65,y2:2.15}]),_(-.2,0,0,6.15),_(8.54,8.74,0,4.53),_(3.95,8.74,4.35,4.53,[{a:4.35,b:6.15,y1:.55,y2:2.35}]),_(3.79,3.95,2.3,4.35),_(3.79,4.55,2.22,2.35),_(4.4,4.55,0,2.22,[{a:.4,b:1.1,y1:0,y2:A},{a:1.42,b:2.17,y1:0,y2:A}]),_(6.79,6.92,0,1.36),_(4.55,6.92,1.24,1.36);let M=new Te;{let C=new wi;C.moveTo(0,2.3),C.lineTo(0,ee),C.lineTo(3.95,ee),C.lineTo(3.95,0),C.lineTo(3.7,0),C.lineTo(3.7,1.62),C.absarc(3.02,1.62,.68,0,Math.PI/2,!1),C.lineTo(0,2.3);let U=new or(C,{depth:.24,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03,bevelSegments:2,curveSegments:24});fr(U);let B=se(U,i.stone,0,0,4.32);M.add(B),M.add(Z(3.7,3.95,0,ee,4.56,5.12,i.stone))}M.userData.center=new R(2,0,4.4),m.push(M),t.add(M);let z=new Te;z.add(Z(0,3.95,0,.42,6.03,6.15,p)),z.add(Z(.02,3.93,.42,1.18,6.07,6.1,i.glass)),z.add(Z(0,3.95,1.18,1.21,6.05,6.12,i.black)),z.add(Z(3.8,3.92,0,.42,5.12,6.03,p)),z.add(Z(3.84,3.87,.42,1.18,5.12,6.03,i.glass)),z.add(Z(3.82,3.89,1.18,1.21,5.12,6.1,i.black)),z.userData.center=new R(2,0,6.1),m.push(z),t.add(z);let w=new Te;{w.add(Z(1.29,2.05,0,2.08,-.13,-.08,i.black)),w.add(Z(1.92,1.95,.98,1.02,-.07,-.02,i.steel)),w.add(Z(4.55,5.27,0,2.08,2.12,2.16,i.black));for(let C of[.4,1.1,1.42,2.17])w.add(Z(4.38,4.57,0,A+.03,C-.015,C+.015,i.black));w.add(Z(4.35,6.15,.53,.57,4.4,4.48,i.black)),w.add(Z(4.35,6.15,2.33,2.37,4.4,4.48,i.black)),w.add(Z(5.23,5.27,.55,2.35,4.4,4.48,i.black)),w.add(Z(4.35,6.15,.57,2.33,4.43,4.45,i.glass)),w.add(Z(6.12,6.62,1.65,2.15,-.11,-.09,i.glass)),w.add(Z(6.12,6.62,1.63,1.66,-.15,-.05,i.black))}jo(w),t.add(w);let T=new Te;T.add(Z(3.755,3.79,0,ee,2.3,4.35,i.black)),T.add(Z(3.79,4.4,0,ee,2.185,2.22,i.black));for(let[C,U]of[[0,.4],[1.1,1.42],[2.17,2.22]])T.add(Z(4.365,4.4,0,ee,C,U,i.black));T.add(Z(4.365,4.4,A,ee,.4,1.1,i.black)),T.add(Z(4.365,4.4,A,ee,1.42,2.17,i.black)),T.add(Z(6,6.79,0,ee,0,.03,i.wallDark)),T.add(Z(6.76,6.79,0,ee,.03,1.24,i.wallDark)),T.add(Z(4.55,6,0,ee,0,.025,i.wallDark));for(let C=0;C<14;C++){let U=.66+C*.05;T.add(Z(8.48,8.54,0,ee,U,U+.032,i.walnutDark))}jo(T),t.add(T);let F=new Te;{let C=me({map:Oe(Ii("#5d5955",22),2.5),roughness:.95}),U=(B,L,W,it)=>{let ct=new ln(W-B,it-L);ct.rotateX(Math.PI/2),ct.translate((B+W)/2,ee,(L+it)/2);let nt=new Qt(ct,C);F.add(nt)};U(-.2,-.2,4.4,2.3),U(-.2,2.3,3.79,6.15),U(4.55,-.2,8.74,4.53),U(3.79,2.22,4.6,4.53),F.add(Z(2.18,2.22,2.64,2.68,2.3,4.2,i.black));for(let B of[2.6,3.3,4]){let L=Ie(.035,.12,i.black,2.2,2.52,B,16);F.add(L),F.add(c(2.175,2.225,2.515,2.52,B-.025,B+.025,n))}}t.add(F);let y=new Te;y.add(c(0,3.7,2.6,2.63,.01,.04)),y.add(c(3.72,3.75,2.6,2.63,2.4,4.3)),y.add(c(4.57,8.5,2.6,2.63,1.38,1.41)),y.add(c(8.49,8.52,2.6,2.63,.02,4.3)),y.add(c(3.97,8.5,2.6,2.63,4.31,4.34)),y.add(c(4.58,6.75,2.6,2.63,.03,.06)),jo(y),t.add(y);let S={};function O(C){let U=new Te;return U.userData.items=[],S[C]=U,t.add(U),U}function k(C,...U){let B=new Te;U.flat().forEach(W=>B.add(W));let L=new Gn().setFromObject(B).getCenter(new R);return B.children.forEach(W=>{W.position.x-=L.x,W.position.z-=L.z}),B.position.set(L.x,0,L.z),jo(B),C.add(B),C.userData.items.push(B),B}let rt=O("cozinha");{let C=[Z(0,.58,.1,.88,.84,4.33,i.walnut),Z(0,.5,0,.1,.84,4.33,i.black),c(.49,.51,.015,.03,.86,4.31)];for(let L=.84;L<4.32;L+=.58)C.push(Z(.58,.586,.12,.86,L-.004,L+.004,i.black));C.push(Z(.58,.586,.62,.628,.84,3.45,i.black)),C.push(Z(.581,.59,.18,.76,3.5,4.02,i.blackGloss)),C.push(Z(.59,.61,.66,.68,3.55,3.97,i.steel)),k(rt,C);let U=[Z(0,.62,.88,.91,.84,4.33,i.granite)];U.push(Z(.13,.47,.905,.912,2.55,3.1,i.steel)),U.push(Z(.15,.45,.906,.913,2.57,3.08,i.blackGloss)),U.push(Ie(.022,.06,i.steel,.08,.91,2.83,16)),U.push(Es([[.08,.95,2.83],[.08,1.25,2.83],[.12,1.36,2.83],[.24,1.32,2.83],[.28,1.18,2.83]],.014,i.steel)),U.push(Z(.08,.54,.91,.918,3.45,4.05,i.blackGloss));for(let[L,W]of[[.2,3.6],[.42,3.6],[.2,3.9],[.42,3.9]]){let it=se(new To(.06,.008,6,24),i.steel,L,.922,W);it.rotation.x=Math.PI/2,U.push(it)}U.push(Z(.1,.42,.91,1.25,4,4.3,i.blackGloss,.02)),U.push(Z(.1,.32,.91,1.2,1.05,1.3,i.black,.02)),k(rt,U);let B=[Z(0,.35,1.6,2.4,.84,2.2,i.walnutDark),Z(0,.35,1.6,2.4,3.1,4.33,i.walnutDark),Z(0,.35,2.4,ee,.84,4.33,i.walnutDark),Z(0,.32,1.72,1.75,2.2,3.1,i.walnut),Z(0,.32,2.07,2.1,2.2,3.1,i.walnut),Z(0,.02,1.72,2.1,2.2,3.1,i.walnut),c(.26,.29,2.065,2.07,2.22,3.08),Z(0,.5,1.5,1.6,3.45,4.05,i.steel),c(.28,.31,1.595,1.6,.86,2.18),c(.28,.31,1.595,1.6,3.12,4.31)];for(let L=.84;L<4.32;L+=.45)(L<2.2||L>3.1)&&B.push(Z(.35,.356,1.62,2.38,L-.003,L+.003,i.black));k(rt,B),k(rt,[Z(0,.7,0,1.86,.07,.8,i.blackGloss,.02),Z(.7,.72,1,1.7,.42,.44,i.steel),Z(.7,.72,.4,.95,.42,.44,i.steel),Z(0,.7,1.86,ee,.05,.82,i.walnutDark)]),k(rt,[Z(0,.62,0,2.4,5.3,6.02,i.walnutDark),Z(.62,.626,.05,2.35,5.66,5.665,i.black),Z(0,.62,2.4,ee,5.3,6.02,i.walnutDark)])}let D=O("sala");{k(D,[Z(1.27,1.68,0,1.05,2.05,4.33,i.cement),c(1.255,1.26,.01,.03,2.1,4.28)]);for(let C of[2.45,3.05]){let U=[Z(.82,1.2,.7,.75,C-.19,C+.19,i.redLacquer,.02),Z(.82,.86,.75,.98,C-.18,C+.18,i.redLacquer,.015)];for(let[B,L]of[[.86,-.15],[1.16,-.15],[.86,.15],[1.16,.15]])U.push(Z(B-.012,B+.012,0,.7,C+L-.012,C+L+.012,i.redLacquer));U.push(Z(.86,1.16,.3,.32,C-.16,C-.14,i.redLacquer),Z(.86,1.16,.3,.32,C+.14,C+.16,i.redLacquer)),k(D,U)}k(D,[Z(1.8,3.6,0,.012,2.4,4.15,i.rug)]);{let C=i.leather,U=2.16,B=4.2,L=1.7,W=2.64,it=[Z(L,W,.06,.3,U,B,C,.04),Z(L,W,.06,.62,U,U+.2,C,.06),Z(L,W,.06,.62,B-.2,B,C,.06),Z(L,L+.22,.06,.8,U+.18,B-.18,C,.06)],ct=(U+B)/2;it.push(Z(L+.22,W-.02,.3,.46,U+.2,ct-.005,C,.06),Z(L+.22,W-.02,.3,.46,ct+.005,B-.2,C,.06));for(let[nt,bt]of[[U+.2,ct-.005],[ct+.005,B-.2]]){let wt=Z(-.1,.1,-.24,.24,nt-ct,bt-ct,C,.07);wt.position.set(L+.3,.7,(nt+bt)/2),wt.rotation.z=-.18,it.push(wt)}for(let[nt,bt]of[[L+.08,U+.08],[W-.08,U+.08],[L+.08,B-.08],[W-.08,B-.08]])it.push(Z(nt-.025,nt+.025,0,.06,bt-.025,bt+.025,i.black));k(D,it)}k(D,[Ie(.28,.34,i.black,3.02,0,3.25,40),Ie(.34,.04,i.walnutDark,3.02,.34,3.25,40),Z(2.9,3.1,.38,.42,3.1,3.25,i.charcoal),Ie(.05,.1,i.ceramic,3.15,.38,3.38,16),se(new xs(.07,1),i.leaf,3.15,.52,3.38)]),k(D,[Z(3.7,3.75,.82,1.68,2.55,4.05,i.screenOff),(()=>{let C=se(new ln(1.46,.82),s,3.698,1.25,3.3);return C.rotation.y=-Math.PI/2,C.castShadow=!1,C})(),c(3.745,3.75,.85,1.65,2.53,2.55,n),c(3.745,3.75,.85,1.65,4.05,4.07,n)]),k(D,[(()=>{let C=new gs(.5,48);C.scale(.28,1,1);let U=se(C,i.mirror,4.36,1.35,1.27);return U.rotation.y=-Math.PI/2,U})()]);{let C=[Zu(2.93,.36,1.46,.6,.03,.04,.76,i.walnut)];for(let nt of[2.25,3.61])for(let bt of[.1,.6])C.push(Z(nt-.015,nt+.015,0,.72,bt-.015,bt+.015,i.black));C.push(Z(3,3.6,.95,1.31,.13,.15,i.black,.005)),C.push((()=>{let nt=se(new ln(.58,.33),r,3.3,1.13,.152);return nt.castShadow=!1,nt})()),C.push(Z(3.27,3.33,.76,.95,.12,.15,i.black),Z(3.18,3.42,.76,.775,.08,.24,i.black));let U=Z(2.45,2.79,.77,.785,.2,.44,i.steel);C.push(U);let B=Z(-.17,.17,0,.22,-.005,.005,i.steel);B.position.set(2.62,.89,.19),B.rotation.x=-.25,C.push(B),k(D,C);let L=[Z(2.68,3.18,.44,.52,.82,1.3,i.black,.03),Z(2.7,3.16,.6,1.12,1.27,1.31,i.charcoal,.02),Ie(.025,.42,i.steel,2.93,.04,1.06,12)];for(let nt=0;nt<5;nt++){let bt=nt*Math.PI*2/5,wt=Z(0,.3,0,.03,-.015,.015,i.black);wt.position.set(2.93,.04,1.06),wt.rotation.y=bt,wt.geometry.translate(.15,0,0),L.push(wt)}k(D,L);let W=se(new As(.36,.36,.03,48),i.art,2.6,1.6,.03);W.rotation.x=Math.PI/2,W.rotation.y=0,k(D,[W]);let it=[Ie(.17,.48,i.terracotta,4.1,0,.25,24,.2)],ct=(nt=>()=>(nt=nt*16807%2147483647)/2147483647)(42);for(let nt=0;nt<7;nt++){let bt=ct()*Math.PI*2,wt=1.3+ct()*.6,Mt=.08+ct()*.18;it.push(Es([[4.1,.45,.25],[4.1+Math.cos(bt)*Mt*.4,.45+wt*.5,.25+Math.sin(bt)*Mt*.4],[4.1+Math.cos(bt)*Mt,.45+wt,.25+Math.sin(bt)*Mt]],.012,i.branch,12))}k(D,it)}}let H=O("jantar");{k(H,[Zu(2.64,5.16,1.15,.78,.16,.05,.75,i.walnut),Z(2.18,2.24,0,.7,4.92,5.4,i.walnut),Z(3.04,3.1,0,.7,4.92,5.4,i.walnut)]);for(let[C,U]of[[1.82,0],[3.48,Math.PI]]){let B=[];B.push(Z(-.24,.24,.42,.52,-.24,.24,i.greenVelvet,.05));let L=se(new As(.27,.27,.34,32,1,!0,Math.PI,Math.PI),i.greenVelvet,0,.67,0);L.material=i.greenVelvet.clone(),L.material.side=Je,Xn.add(L.material),B.push(L);for(let[it,ct]of[[-.18,-.18],[.18,-.18],[-.18,.18],[.18,.18]])B.push(Z(it-.012,it+.012,0,.42,ct-.012,ct+.012,i.black));let W=k(H,B);W.position.set(C,0,5.16),W.rotation.y=U+Math.PI/2*0,W.rotation.y=U}{let C=[];for(let L=0;L<=12;L++){let W=L/12;C.push(new $(.06+Math.sin(W*Math.PI)*.15,-.16+W*.32))}let U=se(new wo(C,32),i.weave,2.64,1.88,5.16),B=se(new zn(.06,16,12),n,2.64,1.86,5.16);B.castShadow=!1,k(H,[U,B,Ie(.004,.66,i.black,2.64,2.04,5.16,6),l(2.64,1.86,5.16,.9,"255,170,95",.9)])}{let C=[Ie(.2,.5,i.black,3.45,0,5.75,24,.22)],U=(B=>()=>(B=B*16807%2147483647)/2147483647)(7);for(let B=0;B<40;B++){let L=se(new zn(.07+U()*.05,8,5),i.leaf,3.45+(U()-.5)*.55,.7+U()*.95,5.75+(U()-.5)*.45);L.scale.set(.9,.25,1.9),L.rotation.set(U()*3,U()*3,U()*3),C.push(L)}C.push(Es([[3.45,.5,5.75],[3.42,1,5.74],[3.47,1.5,5.76]],.02,i.branch,8)),k(H,C)}}let X=O("banho");{k(X,[Z(4.62,5.42,.38,.76,.02,.47,i.walnut),Z(4.6,5.44,.76,.86,.02,.5,i.stoneTop),Z(4.82,5.22,.84,.865,.12,.4,i.wallDark),c(4.64,5.4,.36,.375,.42,.45),Ie(.012,.16,i.brass,5.02,.86,.08,12),Es([[5.02,1.02,.08],[5.02,1.04,.14],[5.02,1,.18]],.01,i.brass,8)]);{let C=new ar(sc(.52,.82,.16),12),U=se(C,i.mirror,5.02,1.55,.045),B=se(new ar(sc(.58,.88,.19),12),n,5.02,1.55,.035);B.castShadow=!1,k(X,[B,U,l(5.02,1.55,.1,1.1,"255,180,110",.3)])}k(X,[Z(5.55,5.95,0,.4,.12,.6,i.ceramic,.12),Z(5.57,5.93,.4,.43,.14,.62,i.ceramic,.012),Z(5.6,5.9,.42,.8,.03,.2,i.ceramic,.03)]),k(X,[Z(6,6.015,0,2.05,.03,.78,i.glass),Z(5.995,6.02,2.05,2.07,.03,.78,i.brass),Z(5.995,6.02,0,.02,.03,.78,i.brass),Ie(.11,.015,i.brass,6.4,2.22,.55,32),Z(6.39,6.41,2.235,2.27,.03,.55,i.brass),Z(6.12,6.74,1.1,1.38,.03,.12,i.wallDark),c(6.13,6.73,1.375,1.38,.03,.11),Z(6.3,6.36,1.12,1.27,.06,.1,i.black),Z(6.42,6.48,1.12,1.22,.06,.1,i.black)]),k(X,[Z(4.58,4.62,.9,1.5,.75,1.05,i.charcoal,.01),Ie(.05,.12,i.ceramic,5.32,.86,.2,16),se(new xs(.09,1),i.leaf,5.32,1.04,.2)])}let K=O("dormitorio");{k(K,[Z(5.9,8.3,0,.012,1.55,4.15,i.rugDark)]),k(K,[Z(6.3,8.4,0,.08,2,3.7,i.black),c(6.29,6.3,.02,.05,2,3.7),c(6.3,8.4,.02,.05,1.99,2),c(6.3,8.4,.02,.05,3.7,3.71),Z(6.15,8.44,.08,.28,1.86,3.84,i.walnutDark,.01)]),k(K,[Z(6.35,8.4,.28,.52,2.06,3.64,i.linen,.06),Z(6.3,7.95,.5,.58,2,3.7,i.duvet,.04),Z(6.3,7.95,.3,.58,1.99,2.03,i.duvet,.015),Z(6.3,7.95,.3,.58,3.67,3.71,i.duvet,.015),Z(6.28,6.31,.32,.58,2,3.7,i.duvet,.012),Z(6.55,7.25,.58,.6,1.97,3.73,i.charcoal,.008),Z(6.55,7.25,.3,.6,1.958,1.975,i.charcoal,.006),Z(6.55,7.25,.3,.6,3.725,3.742,i.charcoal,.006)]);{let C=[];for(let[U,B,L,W]of[[2.45,8.24,i.duvet,.42],[3.25,8.24,i.duvet,.42],[2.5,8.08,i.charcoal,.34],[3.2,8.08,i.charcoal,.34]]){let it=Z(-.08,.08,-W/2,W/2,-.33,.33,L,.07);it.position.set(B,.5+W/2,U),it.rotation.z=.32,C.push(it)}k(K,C)}k(K,[Z(8.42,8.48,.28,1.2,1.38,2.84,i.headboard,.03),Z(8.42,8.48,.28,1.2,2.86,4.32,i.headboard,.03)]);for(let C of[1.62,4.05])k(K,[Z(7.95,8.42,.36,.6,C-.22,C+.22,i.walnutDark,.01),Z(7.948,7.952,.47,.475,C-.2,C+.2,i.black),c(7.97,8.4,.355,.36,C-.2,C+.2)]);k(K,[Ie(.03,.26,i.black,8.18,.6,1.62,16),se(new zn(.15,24,12,0,Math.PI*2,0,Math.PI/2),i.black,8.18,.86,1.62),(()=>{let C=se(new gs(.13,24),n,8.18,.859,1.62);return C.rotation.x=Math.PI/2,C.castShadow=!1,C})(),l(8.18,.75,1.62,.9,"255,175,100",.6),Z(8.06,8.3,.6,.63,1.5,1.7,i.charcoal)]),k(K,[Ie(.004,1.5,i.black,8.18,1.2,4.05,6),Ie(.045,.3,i.black,8.18,.9,4.05,20),(()=>{let C=se(new gs(.04,16),n,8.18,.899,4.05);return C.rotation.x=Math.PI/2,C.castShadow=!1,C})(),l(8.18,.86,4.05,.7,"255,175,100",.6)]);{let L=se(new zn(.62,48,32,-Math.PI/2,Math.PI),i.sphere,8.48,1.95,2.85);L.scale.set(.45,1,1);let W=[],it=(nt=>()=>(nt=nt*16807%2147483647)/2147483647)(3);for(let nt=0;nt<=18;nt++){let bt=nt/18,wt=-Math.PI/2+bt*Math.PI,Mt=1.95+Math.sin(wt)*.62,Lt=Math.cos(wt)*.62;W.push([8.48-Lt*.45-.006,Mt,2.85+.05+(it()-.5)*.06])}let ct=Es(W,.012,e,60);ct.castShadow=!1,k(K,[L,ct,l(8.4,1.95,2.85,2.2,"255,170,90",.7)])}{let C=[Z(6.94,8.52,0,.08,.02,.6,i.black),Z(6.94,6.97,.08,ee,.02,.6,i.walnutDark),Z(8.49,8.52,.08,ee,.02,.6,i.walnutDark),Z(6.94,8.52,2.55,ee,.02,.6,i.walnutDark),Z(7.72,7.74,.08,2.55,.02,.58,i.walnutDark),Z(6.97,8.49,.08,2.55,.02,.04,i.walnutDark),Z(6.97,7.72,1.85,1.87,.04,.58,i.walnutDark),Z(7.74,8.49,.9,.92,.04,.58,i.walnutDark),Z(7.74,8.49,1.5,1.52,.04,.58,i.walnutDark),Z(7.74,8.49,2,2.02,.04,.58,i.walnutDark),c(6.98,7.71,2.53,2.545,.3,.33),c(7.75,8.48,.885,.895,.5,.53),c(7.75,8.48,1.485,1.495,.5,.53),c(7.75,8.48,1.985,1.995,.5,.53),Z(6.97,7.72,1.78,1.8,.29,.31,i.steel),Z(6.95,8.51,.08,2.55,.585,.6,i.glassDark)],U=[i.charcoal,i.linen,i.headboard,i.duvet];for(let B=0;B<9;B++)C.push(Z(7.02+B*.075,7.06+B*.075,1+B%3*.08,1.77,.14,.48,U[B%4],.01));for(let B of[.92,1.52])for(let L=0;L<3;L++)C.push(Z(7.82+L*.22,8+L*.22,B,B+.08+L%2*.04,.1,.5,U[(L+1)%4],.01));k(K,C)}k(K,[Z(3.95,4.35,.35,.55,2.6,4.1,i.walnutDark,.01),c(3.97,4.33,.345,.35,2.62,4.08),Z(3.95,4,1,1.75,2.7,4,i.screenOff),(()=>{let C=se(new ln(1.28,.73),s,4.002,1.375,3.35);return C.rotation.y=Math.PI/2,C.castShadow=!1,C})(),Ie(.06,.12,i.ceramic,4.15,.55,3.95,16),se(new xs(.12,1),i.leaf,4.15,.78,3.95)]);{let C=new ln(2.3,ee-.08,80,1),U=C.attributes.position;for(let W=0;W<U.count;W++){let it=U.getX(W);U.setZ(W,Math.sin(it*24)*.045+Math.sin(it*7.3)*.015)}C.computeVertexNormals(),fr(C);let B=se(C,i.curtain,5.15,(ee-.08)/2+.02,4.24),L=se(C.clone(),i.curtain.clone(),5.15,(ee-.08)/2+.02,4.31);Object.assign(L.material,{transparent:!0,opacity:.5,depthWrite:!1,sheen:0,color:new zt("#e9e2d6")}),Xn.add(L.material),L.castShadow=!1,B.scale.x=.42,B.position.x=4.55,k(K,[L,B,Z(3.98,6.32,2.62,2.64,4.15,4.33,i.black)])}{let C=[Ie(.17,.42,i.cement,6.62,0,1.75,24,.19)];C.push(Es([[6.62,.4,1.75],[6.6,1,1.73],[6.66,1.5,1.78]],.025,i.branch,10));let U=(B=>()=>(B=B*16807%2147483647)/2147483647)(99);for(let B=0;B<70;B++){let L=se(new zn(.035+U()*.03,6,4),i.leaf,6.64+(U()-.5)*.6,1.2+U()*.8,1.76+(U()-.5)*.55);L.scale.set(.6,.35,1.8),L.rotation.set(U()*3,U()*3,U()*3),C.push(L)}k(K,C)}}let tt=[];function Q(C,U,B,L,W,it="#ffb070",ct=!1){let nt=new vs(it,0,W,2);nt.position.set(C,U,B),nt.userData.max=L,ct&&(nt.castShadow=!0,nt.shadow.mapSize.set(512,512),nt.shadow.camera.near=.08,nt.shadow.camera.far=W,nt.shadow.bias=-.004,nt.shadow.normalBias=.03,nt.shadow.radius=4,nt.shadow.autoUpdate=!1),tt.push(nt),t.add(nt)}Q(2.4,2.3,2.4,6.5,6,void 0,!0),Q(.6,1.4,2.6,2.5,3.2),Q(2.64,1.62,5.16,4.5,4.5,void 0,!0),Q(7.75,1.95,2.85,4.5,4.5,void 0,!0),Q(5.6,2.3,3.2,3,4.5,void 0,!0),Q(5.4,2.1,.7,2.5,2.6),t.traverse(C=>{C.isMesh&&C.material&&(C.material.transparent||C.material.isMeshBasicMaterial)&&(C.castShadow=!1)});for(let C of Object.values(S))for(let U of C.userData.items)U.userData.baseY=U.position.y;return{root:t,M:i,walls:m,floors:h,floorMats:d,openings:w,finishes:T,ceilings:F,coves:y,rooms:S,nightLights:tt,glows:o,leds:[e,n],screens:[s,r],allMaterials:Xn}}var Qu="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAhkC3AMBIgACEQEDEQH/xAAsAAEAAwEBAQAAAAAAAAAAAAAAAwQFBgIBAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAALqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOf6DkyWzX0D61RlNUZTVGU1RlNUc7tYnRlb7YFdYFdYHN3qHSmU1RlNUZTVGU1RlNUZTVGU1RlNUZTVGU1RlNUY2f0fLFlII0gjSCNII0gjSCNII0gjSCNIINTE7AymqMpqjKaoymqMpqjKaoyrF3KNUAAADlOr5Qlilthq+TMXPpSXRSXhRXhl6MXsn8h68h68vJmT2pCivCivCivCivCivCivCivCivCivCjQ3copX69siguWTMaYzHTjjW95M3z0NUyqfVUTnZ7s5T99PRM6HT9GJF2OGZdyfXMGzqjKaoymqMpqjKaoymqMrxsZRt5WrlGqAAABynV8oS26ls1Y5Iz3k36ZeyNHNNHTzNMAqTQzEoAEM1csAAAAAAAAAAYm3hlTQz+gOd6fO8Fu1XokulBOZdiv9I5qOiV7WXfMr2iPdmpnm4yJyeH3XNLWz9cgTiBOIE4graGSXqOhkE81LRJsrVyjbytXKNUAAADlOr5Ql9+PZc80pzc9+PYAABUmhmJQD4QzRygAAAAAAAAADD3MQp26ewRX6o92KgvKIi+z+CjdoWyCxS0ileo3j1DNAQ3YJxi7WGaGxka4AAAr2BHn6gyrNyoS5WrlG3lauUaoAAAHKdXyhLNDIa9KnYNiTx7AAAKk1cXUPk9fJvoAAAAAAAAAAAw9zEKdupdJk/0hm8xE6Kiaan8Jq0ns9zUYz1eoXz0D59Bi7WIX9jH2AAAAABUt1CXK1co28rVyjVAAAA5Tq+UJbdS2X/NiMn9+PYAAAAAAAAAAAAAAAAAw9zDKl2jeLv3L0CTxR+n2hqRlWHZjMixo+jD1pa5X1KN49AAYm3iGhr4+wAAAAAKluoS5WrlG3lauUaoAAAHKdXyhLbqWzVjkjJ/fj2AAAAAAAAAAAAAAAAAMTbwyneo+S3o4lg9ZtuwX/NeibbM+mkzRpM0er2HOa7J+mqyRrYk1Q1dfH2AAAAABUt1CXK1co28rVyjVAAAA5Tq+UJbdS2asckZP78ewAAAAAAAAAAAAAAAABi7Q56r1YgTiBOIOY64c986Ic86Ec796Ec18vUSX5eFJdFH7d+DVilAAAAAFS3UJcrVyjbytXKNUAAADkeuwCjpWK5qxyRk/vx7AAAAAAAAAAAAAAAAAAAAAAAAAAAAHj3CTAAAAAAVLdQlytXKNvK1co1QAAAMnWyTWwt3CNeOSMn9+PYAAAAAAAAAAAAAAAAAAAAAAAAAAAAr/LIAAAAAAqW6hLlauUbeVq5RqgAAAZOtkmthbuEa8ckZP78ewAAAAAAAAjzTWZ/sumYaYAAAAAAAAAAAAADx8JEfgnr+pgAAAAABXsVCGvB9NnK1co28rVyjVAAAAydbJNbC3cI145Iyf349gAAAAAAAEeJv1TOrdJGRYm3ZAAABXPn3BjOic4Ojc4Ojc4Oic6Oi+84Oj+c6Oj+c6Ojc4Oic6PfxdNwAAAAAAACGaoWcetbNLK1co28rVyjVAAAAydbJNbC3eYOhjhjNH3kSmkxNsAAAAAAAAAAAAAQTwGLbq2jWAAAAAAAAAAAAAAAAAABBDdqEuVq5Rt5WrlGqAAABk62Sa3OdHzhuxyRk/vx7MvUy9QAAAAAAAAAAAAAQTwGNaqWzWAAAAAAAAAAAAAAAAAAAqW6hLlauUbeVq5RqgAAAZOtkmtznR84bsclI0PdARamXdJ3yEnVvZM8/D2+fD0AAAAAAAABXsQGNaqWzWAAAAAAAAAAAAAAAAAAAqW6hLlavPnTZUHo2gAAAMnWyTW5zo+cN2raqmbtPhU+/PRDYj+HqD1OZvnWoj7owlqepbAAAAAAAAEE8Bi26to1gAAAAAAAAAAHn0AAAAAAAKluoS830nNk8schvAAAAZOtkmtznR86blW1GRTTezL1MvUAAAAAAAAAAAAAEE8Bi26to1gAAAAAKdzPPPryI/lb4XPdLwaHiSM8fbGOavmGsX9TP0AAAAABUt1CXm+k5ssSRyG8AAABk62Sa3O9Fzhux+oyz7gnMvUydYAAAAAAAAAAAAAQT1zHtVJTcZ8xaAAAAA8exCmEUn0RpB8+hWn9D589CtZAAAAABUt1CXm+k5ssSRyG8AAABk63HHXc/m6xoR3YypNc9lK6AAAAAAAAAAAAACCeAxvXgfb/n6aQAAAAAAAAAAAAAAAAAFS3UJeb6TmyxJHIbwAAAHKdXyhLPBObMckZP78ewAAAAAAAAAAAAq2T6oSFuCeAxvXn2XZpK5eAAAAAAAARRFpn/AEvopQAAAAAABUt1CXm+k5ssSRyG8AAABynV8oSzwTmzHJGT+45AAAAAAAAAAAACn7hmK9TUrk/qWExrdW0awAAAAAAAAMiTTrmTLd9kGh59AAAAAAACpbqEvN9JzZYkjkN4AAADlOr5Ql8e/Jo/PdItYN2mX/tr6VItDwVbEH0m+RfCluc/fNFnDxNRvn0ACGb4eZPP0+vg+vg+056JrYWhEeJL2YbyqKyHdM1sDHbA56/OIE4gpalElt5lgtqgtqgtqgtqgigbBntgY7YHPX7HwgTiCtoVyO7lWy18rC1jX800ZMjdNgAAADlOr5Qlkj9nRc1u5RT2sDZJUeaazE3D4lESURSgAAAAAAABQr3qJWis1i/Ut1DrQfPPseHseHseHseHsePkgAAAAAePY8PY8PY8PY8PY8PYAAAAAAAAcp1fKEt2lcLNO5TMvseP6A0MXRqnO9Bz+6XAAAAAAAAAAARQ/a5Wq3aRfqW6h1oAAAAAAAAAAAAAAAAAAAAAAAAAHKdXyhL78SmxlbvNFXsOR6QtZN3CM/oMXeJkMwVZSUAAABSiNJSiNJm+jQUpSwofDQV7BnZetzpt1Kd06wAAAAAAAAAAAAAAAAAAAAAAAAADlOr5Qlr2M02ovH0r7VPTIE4r2Ax7nrwRy+PRdAAABUraHghoX7BjTXpDIk1ISWtFYI9COQQzQlHVytUtgAAAAAAAAAAAAAAAAAAAAAAAAAcp1fIliv68nRAAAAAAAAAAAAAAAAQzQlHVytUtgAAAAAAAAAAAAAAAAAAAAAAAAAc/0GSfcnq+VN4AAAAAAAAAAAAAAyTWRZxrQ5+gUdXK1S2AAAAAAAAAAAAAAAAAAAAAAAAABk62Sa3K9Vwx1rnx0Dnx0Dn7ZqqotKotKotKotKotKotKotKotKotKotKos42h4J6Vj6UNOC2ZurlapbAAAAAAAAAAAAAAAAAAAAAAAAAAx9jMNL5ijaYo2mKNnj9ewUmsMlrDJa0Jnr0ZVWxUaMpkr3gqNCMpr8hmNPyZy8KLWGS1hktYZ2j8FwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADH2Bied0Yd+6MqxdGdV2xhe9oYt26MixfGZS6AY+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/xAAC/9oADAMBAAIAAwAAACEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARgAAAACiAADgAAAAAAAAAACwAAAAAAAAACgAAAAABAAAAABAQQwABCCCSAAAAAAAAABCjgwCjTzxwQRBDDDDDCQAAAAAAABDwAAAABQAAAAAAAAAATjxSiyRTDwQgAAABASBQAAAAABTQAAAAAACAAAAAAAAAAAAjCADBAQBCAQAAABBBRQAAAAAAQAAAAAQxgAAAAAAAAAABBRCAAywwACAQgAAAABRQAAAAAADAAAAAAAAAAAAAAAAAABBwRDiyxQAAAQAAAAABRQAAAAAAAAAAAAAAAAAAAAAAAAAATDyzAwAgwAwQgAAAABRQAAAAAAAAAAAAAAAAAAAAAAAAAABAAABACDjACAgAAAABRQAAAAASQAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAABRQAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAABRQAAAABQAAAAAAAAAAAggQAAAAAAAAAAAAAAQRAAAAAAABBQAAAABQAAAAAAAAAADRBAAAAQQQwBCQgADQAAAAAAAAASxQAAAABQQAAgAAAAAAAAAAAABSQAAAAAAAAAAAAAAAAAADRQAAAABQAACgAAAAAAAAAAAABRwAAAAAAAAAAAAAAAAAABRQAAAABQAQSQgwggAAAAAAAABRgAAAAAAAAAAAAAAAAAABRQwAAABQBTjThAjygAAAAAAABTQAAAAAAAAAAAgAAAAAABQBQAAABRBDAgAAAAAAAAAAAABQwAAAAAACCiDSzAAAAAABQBQAAABQAgCAAAAAAAAAAAAABRgAAAAABBBDCCAAAAAAABQBQAAAACzBCAAAAAAAAAAAAABShwAAAAAAAAAAAAAAAAABQBQAAAABQAAAAAAAAAAAAAAQxRQQAAAAAAAAwQAAAAAAABQBQAAAABQAAAAAAAAAAAAACCRAwAAAAAAAACAiAAAAAAABQBQAAAAABRhjDjDTzAABAgAATwTyDDBDDQQwwwzTDDDCRzwhwAAAABRQAAAACAAAAAAAACTRQCAAAABAAAAAAAAAAAAAAAAAAAAAACQRQAAAAAAAAAAARxQAAAAAAAAAAAAAAAAAAAAAAAAAAABwBjAgQAAAAAwQAwhBQAAAAAAAAAAAAAAAAAAAAAAAAAABTygABxwAAABywTwyBQQAAAAAAAAAAAAAAAAAAAAAAAAAARwAAAAAAAAAAAAAAABRQAAAAAAAAAAAAAAAAAAAAAAAAABTQAAAAAAAAAAAAAAAxRQAAAAAAAAAAAAAAAAAAAAAAAAABRAwwgwwwwwwwwwwyiBhQAAAAAAAAAAAAAAAAAAAAAAAAABCzzzjDDTjDDjDjTzDDBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABADBDBCBBCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/xAAC/9oADAMBAAIAAwAAABDzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzyxAwwwwwywwzwwwwwwwwwwwzAAAAAAAAAACQwwwwwxzzzzygDjzzDBwACTjDDDDDDDDDBiwwSBxDzxzQSwwwwwwzzzzzygCjSjzxTzyzzzzzzzzzzyyCQxRQAywTwwQwwwyRjzzzzzygDzzxzxTzjzzzzzzzzzzzxiwwzhixSxzzzzzyyxzzzzzzygDjzzzxjSzzzzzzzzzzzygDRDzBTBzxzzzzzzzzzzzzzzygAjzzzzzzzzzzzzzzzzzzwBCRgixhTzzxTzzzzzzzzzzzygCjzzzzzzzzzzzzzzzzzziQTijjDBjjCDzzzzzzzzzzzzygCjzzzzzzzzzzzzzzzzzyxwwxzywwhABRzzzzzzzzzzzzyiijzzzzzzzzzzzzzzzzzzzzzzzzzzzzzjzzzzzzzzzzzzzzyjzzzzzzzzzzzzzzzzzzzzzzzzzzzzyTzzzzzzzzzzzzzzyjzzzzzzzzzzDDzzzzzzzzzzzzzzTxTzzzzzyiDzzzzzzzyjzzzzzzzzziBzTzyzjDDSxjRxyjxzzzzzzzyhjzzzzzzzyzTTzzzzzzzzzzzzzwgwwwwwwwwxzzzzzzzzzxzzzzzzzzyjxTzzzzzzzzzzzzzyDzzzzzzzzzzzzzzzzzzzzzzzzzzzyzxzjzjjzzzzzzzzzjzzzzzzzzzzzzzzzzzzzzzzTzzzzzzxwxgiwxTzzzzzzzzyjzzzzzzzzzzzzzzzzzzzywDzzzzyihzTzzzzzzzzzzzzzxDzzzzzzhRQhgxxjzzzzzzwDzzzzyiThzzzzzzzzzzzzzzyjzzzzzzxzyxwzzzzzzzzzwDzzzyhwgxzzzzzzzzzzzzzzxTDzzzzzzzzzzzzzzzzzzzwDzzzyhSjzzzzzzzzzzzzzDjRgzzzzzzzzzDzTzzzzzzzzwDzzzyhSjTzzzzzzzzzzzygDjDzzzzzzzzwwjTzzzzzzzzwDzzzyixhCgCBRTzDDDQgABwRDDAwxzyiAAAAAAwwQwjiCADzzzyhBhgAAwzzzzzzzzzwAhTwwwwwxxzzzzwwwwwwxzzzzzzzyhRRjjzzzzzzzzzzzyihTzzzzzzzzzzzzzzzzzzzzzzzzzyhTDjxDDzzzzzzjDzzSBzzzzzzzzzzzzzzzzzzzzzzzzzzyhRgwyxRjzzzyiBwhhTzjzzzzzzzzzzzzzzzzzzzzzzzzzyhzzzzzzzzzzzzzzzzzyjzzzzzzzzzzzzzzzzzzzzzzzzzzzjzzzzzzzzzzzzzzTzyjzzzzzzzzzzzzzzzzzzzzzzzzzzyTDDTDDDDDDDDDDATBCjzzzzzzzzzzzzzzzzzzzzzzzzzzjAABTDDTzzjTTjTzDDCzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzyywzwRzzzxzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz/xAAUEQEAAAAAAAAAAAAAAAAAAACg/9oACAECAQE/AEOf/8QAFBEBAAAAAAAAAAAAAAAAAAAAoP/aAAgBAwEBPwBDn//EAFEQAAAEAgMJDAcFBgUEAgMAAAABAgMEEQUSExQVITEzU1RykRAiMDI0NUFRcXOBkiNA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";var Xe=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Mn=(i,t,e)=>i+(t-i)*e,Di=i=>i*i*(3-2*i),$o=i=>1-Math.pow(1-i,3),qn=(i,t,e)=>Xe((i-t)/(e-t)),mc=()=>window.innerWidth<820||window.innerWidth/window.innerHeight<.9,gc=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Yn={reveal:null,cam:null},ca=document.getElementById("scene"),be=new Ks({canvas:ca,antialias:!0,powerPreference:"high-performance"}),ac=()=>Math.min(window.devicePixelRatio||1,2),Ge=Math.min(window.devicePixelRatio||1,mc()?1.5:1.75);be.setPixelRatio(Ge);be.setSize(window.innerWidth,window.innerHeight);be.toneMapping=hr;be.toneMappingExposure=1;be.shadowMap.enabled=!0;be.shadowMap.type=Hl;var Ln=new ms,Kt=new Ne(35,window.innerWidth/window.innerHeight,.05,600),dx=new ps(be);Ln.environment=dx.fromScene(new Wo(be),.04).texture;var rd={uNight:{value:0}},od=new Qt(new zn(400,32,16),new ve({side:Re,depthWrite:!1,uniforms:rd,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      uniform float uNight; varying vec3 vDir;
      void main(){
        float y = vDir.y;
        vec3 dayTop = vec3(0.105,0.100,0.095), dayHor = vec3(0.16,0.15,0.14), dayLow = vec3(0.07,0.066,0.062);
        vec3 nTop = vec3(0.010,0.013,0.026), nHor = vec3(0.075,0.05,0.042), nLow = vec3(0.012,0.011,0.014);
        vec3 top = mix(dayTop, nTop, uNight), hor = mix(dayHor, nHor, uNight), low = mix(dayLow, nLow, uNight);
        vec3 c = y > 0.0 ? mix(hor, top, pow(clamp(y,0.0,1.0), 0.5)) : mix(hor, low, pow(clamp(-y*3.0,0.0,1.0), 0.6));
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));od.renderOrder=-1;Ln.add(od);var ad=new Po("#fff3e2","#3a342e",1.2);Ln.add(ad);var We=new Lo("#ffe7c9",2.8);We.position.set(-3,13,10);We.target.position.set(4.3,0,3);We.castShadow=!0;var Ku=mc()?2048:Math.min(4096,be.capabilities.maxTextureSize);We.shadow.mapSize.set(Ku,Ku);We.shadow.autoUpdate=!1;Object.assign(We.shadow.camera,{left:-8,right:8,top:8,bottom:-8,near:1,far:40});We.shadow.bias=-3e-4;We.shadow.normalBias=.03;Ln.add(We,We.target);var fx=performance.now(),ue=Ju(),px=performance.now()-fx,mx=be.capabilities.getMaxAnisotropy();for(let i of ue.allMaterials)for(let t of["map","bumpMap"])i[t]&&(i[t].anisotropy=mx);Ln.add(ue.root);var Ae={x0:-1.7,x1:10.3,z0:-1.6,z1:7.7},ld={uReveal:{value:-.1}};function gx(i){let e=Math.round(2048*(Ae.z1-Ae.z0)/(Ae.x1-Ae.x0)),n=(_,A)=>[(_-Ae.x0)/(Ae.x1-Ae.x0)*2048,(A-Ae.z0)/(Ae.z1-Ae.z0)*e],s=()=>{let _=document.createElement("canvas");return _.width=2048,_.height=e,_},r=s(),a=r.getContext("2d");a.fillStyle="#ece6da",a.fillRect(0,0,2048,e);for(let _=0;_<9e3;_++)a.fillStyle=`rgba(${Math.random()>.5?"255,255,255":"120,105,85"},${Math.random()*.05})`,a.fillRect(Math.random()*2048,Math.random()*e,1+Math.random()*3,1);a.strokeStyle="rgba(90,110,130,0.10)",a.lineWidth=1;let o=2048/(Ae.x1-Ae.x0)*.5;for(let _=0;_<2048;_+=o)a.beginPath(),a.moveTo(_,0),a.lineTo(_,e),a.stroke();for(let _=0;_<e;_+=o)a.beginPath(),a.moveTo(0,_),a.lineTo(2048,_),a.stroke();a.strokeStyle="rgba(40,36,32,0.55)",a.lineWidth=3,a.strokeRect(36,36,1976,e-72);let l=s(),c=l.getContext("2d");c.drawImage(r,0,0);let[h,u]=n(ws.x0,ws.z0),[d,f]=n(ws.x1,ws.z1);c.globalCompositeOperation="multiply",c.drawImage(i,h,u,d-h,f-u),c.globalCompositeOperation="source-over",c.fillStyle="rgba(30,28,26,0.85)",c.font="bold 34px monospace",c.fillText("PLANTA VIVA \u2014 APARTAMENTO TIPO \xB7 1 DORMIT\xD3RIO",80,e-90),c.font="26px monospace",c.fillText("PLANTA BAIXA  \xB7  ESC. 1:50  \xB7  COTAS EM METROS",80,e-52),c.textAlign="right",c.fillText("FOLHA 01/01",1968,e-52),c.textAlign="center",c.font="bold 28px monospace";let[g,x]=[1918,150];c.beginPath(),c.moveTo(g,x-60),c.lineTo(g-22,x+10),c.lineTo(g,x-5),c.lineTo(g+22,x+10),c.closePath(),c.fill(),c.fillText("N",g,x+50);let m=new oi(r),p=new oi(l);for(let _ of[m,p])_.colorSpace=fe,_.anisotropy=8;return[m,p]}var bn=new je({color:"#d6cfc3",roughness:.95,transparent:!0});bn.onBeforeCompile=i=>{i.uniforms.uReveal=ld.uReveal,i.uniforms.inkMap={value:bn.userData.ink},i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uReveal;
uniform sampler2D inkMap;`).replace("#include <map_fragment>",`#include <map_fragment>
      float dRev = vMapUv.x * 0.6 + (1.0 - vMapUv.y) * 0.4;
      float mRev = 1.0 - smoothstep(uReveal - 0.035, uReveal, dRev);
      vec4 inkC = texture2D(inkMap, vMapUv);
      diffuseColor.rgb = mix(diffuseColor.rgb, inkC.rgb, mRev);
      float edge = smoothstep(uReveal - 0.03, uReveal, dRev) * (1.0 - smoothstep(uReveal, uReveal + 0.004, dRev));
      totalEmissiveRadiance += vec3(1.0, 0.55, 0.2) * edge * 1.6 * step(uReveal, 1.05);`)};var di=new Qt(new ln(Ae.x1-Ae.x0,Ae.z1-Ae.z0),bn);di.rotation.x=-Math.PI/2;di.position.set((Ae.x0+Ae.x1)/2,.001,(Ae.z0+Ae.z1)/2);di.receiveShadow=!0;di.visible=!1;Ln.add(di);var na=new Image,Ac=new Promise(i=>{na.onload=i,na.onerror=i});na.src=Qu;Ac.then(()=>{let[i,t]=gx(na);bn.map=i,bn.userData.ink=t,bn.needsUpdate=!0,di.visible=!0});var cd=(()=>{let t=new Float32Array(21e3),e=new Float32Array(7e3*3),n=new zt("#ffb36b"),s=new zt("#dfe8ff"),r=new zt("#ff8a3d"),a=12345,o=()=>(a=a*16807%2147483647)/2147483647;for(let u=0;u<7e3;u++){let d,f;if(u%3===0){let x=Math.floor(o()*10)*(Math.PI/5)+.2,m=20+o()*160;d=Math.cos(x)*m,f=Math.sin(x)*m}else{let x=o()*Math.PI*2,m=22+Math.pow(o(),.7)*170;d=Math.cos(x)*m,f=Math.sin(x)*m}t[u*3]=4.3+d,t[u*3+1]=-36+o()*6,t[u*3+2]=3+f;let g=o()<.6?n:o()<.6?s:r;e[u*3]=g.r,e[u*3+1]=g.g,e[u*3+2]=g.b}let l=new le;l.setAttribute("position",new Ce(t,3)),l.setAttribute("color",new Ce(e,3));let c=new tr({size:1.5,map:Ko("255,255,255"),vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:ri}),h=new xo(l,c);return h.frustumCulled=!1,h})();Ln.add(cd);var en=new Ho(be,new ze(1,1,{type:Qe,samples:mc()?0:4}));en.setPixelRatio(Ge);en.setSize(window.innerWidth,window.innerHeight);en.addPass(new Vo(Ln,Kt));en.addPass(new Ms({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      bool bad = c.r != c.r || c.g != c.g || c.b != c.b || c.a != c.a || any(greaterThan(abs(c.rgb), vec3(60000.0)));
      gl_FragColor = bad ? vec4(0.0, 0.0, 0.0, 1.0) : max(c, vec4(0.0));
    }`}));var mr=new bs(new $(window.innerWidth,window.innerHeight),.1,.55,.82);en.addPass(mr);en.addPass(new Go);var Ts=[4.27,.2,3],ta=[{p:0,pos:[4.27,16.5,3.04],tgt:[4.27,0,3],fov:35,ui:1,ext:1},{p:.095,pos:[4.27,15.2,3.04],tgt:[4.27,0,3],fov:35,ui:1,ext:1},{p:.2,pos:[-4.2,10.8,14.2],tgt:Ts,fov:35,ui:1,ext:1},{p:.285,pos:[1.2,12.8,15.4],tgt:Ts,fov:35,ui:1,ext:1},{p:.335,pos:[-4.6,7.8,9.2],tgt:[1.6,.4,2.8],fov:35,ui:1,ext:1},{p:.385,pos:[2.3,10.2,-2.4],tgt:[2.2,.2,2.9],fov:35,ui:1,ext:1},{p:.43,pos:[-1.8,6.8,11.8],tgt:[2.3,.4,4.6],fov:35,ui:1,ext:1},{p:.475,pos:[5.75,8.6,2.9],tgt:[5.7,.2,.75],fov:35,ui:1,ext:1},{p:.53,pos:[.6,9.2,3.4],tgt:[6.9,.3,2.8],fov:35,ui:1,ext:1},{p:.57,pos:[12.8,10.6,13.2],tgt:Ts,fov:35,ui:1,ext:1},{p:.648,pos:[-4.4,9.6,13.6],tgt:Ts,fov:35,ui:1,ext:1},{p:.668,pos:[3.2,1.5,5.75],tgt:[1,1,2.2],fov:58,ui:0,cut:1,shot:0},{p:.702,pos:[2.85,1.45,5.25],tgt:[.8,1,2],fov:58,ui:0,shot:0},{p:.716,pos:[.95,1.6,1.6],tgt:[3.7,1,3.7],fov:58,ui:0,cut:1,shot:1},{p:.752,pos:[.95,1.55,2.25],tgt:[3.7,1,4],fov:58,ui:0,shot:1},{p:.766,pos:[1.65,1.55,.7],tgt:[3.2,1.1,5.6],fov:58,ui:0,cut:1,shot:2},{p:.802,pos:[2,1.5,1.2],tgt:[3,1.1,5.8],fov:58,ui:0,shot:2},{p:.816,pos:[4.2,1.6,3.05],tgt:[8.5,1.3,2.85],fov:58,ui:0,cut:1,shot:3},{p:.852,pos:[4.55,1.5,3.1],tgt:[8.5,1.35,2.85],fov:58,ui:0,shot:3},{p:.866,pos:[6,1.3,4.1],tgt:[8.4,1.45,2.6],fov:58,ui:0,cut:1,shot:4},{p:.898,pos:[5.7,1.45,3.9],tgt:[8.4,1.5,2.7],fov:58,ui:0,shot:4},{p:.912,pos:[6.62,1.6,1.14],tgt:[4.9,1.25,.05],fov:62,ui:0,cut:1,shot:5},{p:.938,pos:[6.5,1.55,1.04],tgt:[4.8,1.2,.2],fov:62,ui:0,shot:5},{p:.955,pos:[12.5,12.6,14],tgt:Ts,fov:35,ui:1,ext:1,cut:1},{p:1,pos:[-2.5,13.5,15.5],tgt:Ts,fov:35,ui:1,ext:1}],rc=[["Sala & cozinha","Vista do terra\xE7o para a cozinha integrada"],["Estar","Sof\xE1 de couro voltado para a parede preta da TV"],["Arco de pedra","Do home office at\xE9 o jantar no terra\xE7o"],["Dormit\xF3rio","Cama flutuante com escultura iluminada"],["Dormit\xF3rio","Luz quente de cabeceira e arm\xE1rio em vidro fum\xEA"],["Banho","Bancada suspensa, espelho retroiluminado e box em vidro"]],ia=new yn,sa=new R;function ju(i,t){let e=new R(...i.tgt),n=new R(...i.pos);if(i.ext&&t<1.3){let r=Xe(1.3/t,1,2.3)*(t<.9?1.04:.92);n.sub(e).multiplyScalar(Math.max(1,r)).add(e)}let s=i.fov;return!i.ext&&t<1&&(s=Math.min(80,s*1.32)),{pos:n,tgt:e,fov:s,ui:i.ui}}function hd(i,t){let e=0;for(;e<ta.length-2&&i>=ta[e+1].p;)e++;let n=ta[e],s=ta[e+1],r=Xe((i-n.p)/(s.p-n.p)),a=ju(n,t),o=ju(s,t);if(s.cut)return{...r<.5?a:o,fade:Xe((1-Math.abs(2*r-1))*1.8),shot:r<.5?n.shot:s.shot};let l=n.shot!==void 0?r:Di(r),c=a.tgt.clone().lerp(o.tgt,l),h=new yn().setFromVector3(sa.copy(a.pos).sub(a.tgt)),u=new yn().setFromVector3(sa.copy(o.pos).sub(o.tgt)),d=u.theta-h.theta;return d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2),ia.set(Mn(h.radius,u.radius,l),Mn(h.phi,u.phi,l),h.theta+d*l),{pos:new R().setFromSpherical(ia).add(c),tgt:c,fov:Mn(a.fov,o.fov,l),ui:Mn(a.ui,o.ui,l),fade:0,shot:n.shot}}var Ax={cozinha:[.295,.355],sala:[.345,.41],jantar:[.4,.448],banho:[.448,.492],dormitorio:[.492,.556]},xx=ue.leds.map(i=>i.color.clone()),_x=ue.screens.map(i=>i.color.clone()),$u=.85,vx=.14,ra=0;function ud(i){let t=fc<1/0?1:qn(performance.now()-oa,300,3300),e=Yn.reveal!==null?Yn.reveal:Math.max(Di(t),Di(qn(i,.012,.1)));ld.uReveal.value=Mn(-.08,1.12,e),ue.walls.forEach((l,c)=>{let h=$o(qn(i,.112+c*.0075,.112+c*.0075+.06));l.scale.y=Math.max(1e-4,h),l.visible=h>0});let s=$o(qn(i,.15,.24));ue.finishes.scale.y=Math.max(1e-4,s),ue.finishes.visible=s>0;let r=$o(qn(i,.215,.255));ue.openings.visible=r>0,ue.openings.scale.y=Math.max(1e-4,r);let a=Di(qn(i,.225,.285));ue.floorMats.forEach(l=>{l.opacity=a}),ue.floors.visible=a>0,bn.opacity=1-Di(qn(i,.235,.3)),di.visible=bn.opacity>.001&&!!bn.map;for(let[l,[c,h]]of Object.entries(Ax)){let u=ue.rooms[l].userData.items,d=u.length;u.forEach((f,g)=>{let x=c+(h-c)*.7*(g/d),m=qn(i,x,x+(h-c)*.3);f.visible=m>0;let p=gc?m:$o(m);f.position.y=f.userData.baseY+(1-p)*1.6,f.scale.setScalar(.6+.4*p)})}let o=Di(qn(i,.575,.645));rd.uNight.value=o,ue.coves.visible=o>.01,ad.intensity=Mn(1.2,.05,o),We.intensity=Mn(2.8,0,o);for(let l of ue.allMaterials)l.envMapIntensity=Mn($u,vx,o);bn.envMapIntensity=$u;for(let l of ue.nightLights)l.intensity=l.userData.max*o*.6;ue.leds.forEach((l,c)=>l.color.copy(xx[c]).multiplyScalar(.12+o*(c===0?2.6:1.5))),ue.screens.forEach((l,c)=>l.color.copy(_x[c]).multiplyScalar(1+o*1.6));for(let l of ue.glows)l.material.opacity=l.userData.maxOpacity*o;cd.material.opacity=o,mr.strength=.42*o,ra=o,be.toneMappingExposure=Mn(1,.95,o)}var ea=[...document.querySelectorAll("[data-chapter]")].map(i=>({el:i,from:+i.dataset.from,to:+i.dataset.to})),lc=[...document.querySelectorAll("[data-goto]")],yx=document.querySelector(".progress i"),zs=document.getElementById("fade"),Mx=document.getElementById("scrim"),ha=document.getElementById("room-tag"),bx=ha.querySelector("strong"),Sx=ha.querySelector("span"),Ex=ha.querySelector("em"),wx=document.querySelector(".hint"),td=-1,ed=-2;function xc(){return document.documentElement.scrollHeight-window.innerHeight}lc.forEach(i=>i.addEventListener("click",t=>{t.preventDefault(),window.scrollTo({top:+i.dataset.goto*xc()+2,behavior:gc?"auto":"smooth"})}));function Tx(i,t){if(yx.style.transform=`scaleX(${i})`,document.body.classList.contains("film"))for(let r of ea){let a=Xe((i-r.from)/.014)*(r.to>1?1:Xe((r.to-i)/.014));r.el.style.opacity=a,r.el.style.visibility=a>0?"visible":"hidden"}let e=ea.findIndex(r=>i>=r.from&&i<r.to),n=e===-1?ea.length-1:e;n!==td&&(ea.forEach((r,a)=>r.el.classList.toggle("active",a===n)),lc.forEach(r=>r.classList.toggle("on",i>=+r.dataset.goto&&i<+r.dataset.until)),td=n),lc.forEach(r=>r.classList.toggle("on",i>=+r.dataset.goto&&i<+r.dataset.until)),document.body.classList.toggle("tour",t.ui<.5),wx.classList.toggle("gone",i>.02),zs.style.opacity=t.fade,Mx.style.opacity=t.ui;let s=t.ui<.5&&t.shot!==void 0?t.shot:-1;s!==ed&&(ed=s,s>=0&&(bx.textContent=rc[s][0],Sx.textContent=rc[s][1],Ex.textContent=`Tour ${s+1}/${rc.length}`),ha.classList.toggle("show",s>=0))}var hi=0,tn=0,cc=performance.now(),oa=1/0;function gr(){hi=Xe(window.scrollY/Math.max(1,xc()))}window.addEventListener("scroll",gr,{passive:!0});function Rx(i){let t=window.innerWidth,e=window.innerHeight,n=t/e;n>=1.15?Kt.setViewOffset(t,e,-t*.17*i,0,t,e):n<.95?Kt.setViewOffset(t,e,0,e*.2*i,t,e):Kt.setViewOffset(t,e,-t*.08*i,e*.08*i,t,e)}var hc=-1,ui=!0,nd=!1,Cs=!1,uc=-1,pr=[],id=0;function dd(i){if(pr.push(i),pr.length<24)return;let t=pr.reduce((n,s)=>n+s,0)/pr.length;if(pr.length=0,id-- >0)return;let e=Ge;t>.022&&Ge>.7?e=Math.max(.7,Ge-.2):t<.012&&Ge<ac()&&(e=Math.min(ac(),Ge+.1)),e!==Ge&&(Ge=e,be.setPixelRatio(Ge),en.setPixelRatio(Ge),id=2)}function fd(i){let t=window.innerWidth/window.innerHeight,e=Yn.cam?{pos:new R(...Yn.cam.pos),tgt:new R(...Yn.cam.tgt),fov:Yn.cam.fov??35,ui:Yn.cam.ui??0,fade:0}:hd(i,t);Kt.position.copy(e.pos),Kt.lookAt(e.tgt),Kt.fov=e.fov,Rx(e.ui),Kt.updateProjectionMatrix(),ue.ceilings.visible=Kt.position.y<ee,ud(i),Tx(i,e),ra<.98&&i!==uc&&(We.shadow.needsUpdate=!0,uc=i),mr.enabled=ra>.01,en.render()}function dc(i){let t=Math.min(.1,(i-cc)/1e3);if(cc=i,xt.active){Ux(i,t),requestAnimationFrame(dc);return}tn+=(hi-tn)*(gc?1:1-Math.exp(-t*9)),Math.abs(hi-tn)<2e-5&&(tn=hi);let e=!nd&&i-oa<3400;!e&&oa!==1/0&&(nd=!0),ui||e||tn!==hc?(fd(tn),hc=tn,ui=!1,Cs&&fc===1/0&&dd(t),Cs=!0):Cs=!1,fc-- >0&&requestAnimationFrame(dc)}var fc=new URLSearchParams(location.search).has("still")?2:1/0;function Cx(){let i=window.innerWidth,t=window.innerHeight;Ge=Math.min(Ge,ac()),be.setPixelRatio(Ge),en.setPixelRatio(Ge),be.setSize(i,t),en.setSize(i,t),Kt.aspect=i/t,xt.active||gr(),ui=!0}window.addEventListener("resize",Cx);var xt={active:!1,mode:"orbit",controls:null,tween:null,night:0,nightTarget:0,savedScroll:0,move:0,strafe:0,wheel:0},zx=document.getElementById("free-help"),pd=document.getElementById("free-labels"),ua=document.querySelector(".free-rooms"),_c=document.getElementById("btn-daynight"),pc=window.matchMedia("(pointer: coarse)").matches,Ps=[{id:"geral",name:"Vis\xE3o geral",orbit:!0,pos:[-3.6,11.5,13.6],tgt:[4.27,.3,3]},{id:"sala",name:"Sala",anchor:[2.7,1,3.4],pos:[3.35,1.55,4.4],tgt:[.8,1.05,2.4]},{id:"cozinha",name:"Cozinha",anchor:[.4,1.4,1.9],pos:[.95,1.6,4.15],tgt:[.55,1.15,1.2]},{id:"terraco",name:"Terra\xE7o",anchor:[2.6,1,5.6],pos:[1.15,1.5,5.8],tgt:[3.6,1,3.2]},{id:"escritorio",name:"Home office",anchor:[2.9,1.2,.4],pos:[3.5,1.55,1.9],tgt:[2.4,1,.2]},{id:"banho",name:"Banho",anchor:[5.6,1,.6],pos:[6.55,1.55,1.05],tgt:[4.9,1.25,.05]},{id:"dormitorio",name:"Dormit\xF3rio",anchor:[6.9,1,3],pos:[4.5,1.55,3.1],tgt:[8.5,1.3,2.85]}],Px=[[.75,4.25,.25,2.15],[.75,3.6,2,5.85],[4.2,4.8,1.5,2.1],[4.65,8.25,1.5,4.15],[4.4,4.7,2.45,4.15],[7.05,8.3,.75,1.6],[4.2,4.8,.5,1],[4.7,6.65,.55,1.12]],oc=(i,t)=>Px.some(([e,n,s,r])=>i>=e&&i<=n&&t>=s&&t<=r);for(let i of Ps){let t=document.createElement("button");if(t.type="button",t.textContent=i.name,t.dataset.spot=i.id,t.addEventListener("click",()=>la(i)),ua.appendChild(t),i.anchor){let e=document.createElement("button");e.type="button",e.className="spot-label",e.innerHTML=`<i></i>${i.name}`,e.addEventListener("click",()=>la(i)),pd.appendChild(e),i.label=e}}function md(){zx.textContent=xt.mode==="orbit"?pc?"Arraste para girar \xB7 pin\xE7a para aproximar \xB7 dois dedos para mover \xB7 toque num ambiente para entrar":"Arraste para girar \xB7 role para aproximar \xB7 bot\xE3o direito para mover \xB7 clique num ambiente para entrar":pc?"Arraste para olhar em volta \xB7 use \u25B2 \u25BC para andar":"Arraste para olhar em volta \xB7 role o mouse, use W A S D ou as setas para andar"}function aa(i,t,e){let n=xt.controls;if(xt.mode=i,document.body.classList.toggle("walk",i==="walk"),Kt.position.copy(t),i==="walk"){let s=e.clone().sub(t).normalize();n.target.copy(t).addScaledVector(s,.1),Object.assign(n,{enableZoom:!1,enablePan:!1,rotateSpeed:-.45,minDistance:.1,maxDistance:.1,minPolarAngle:Math.PI*.28,maxPolarAngle:Math.PI*.74}),Kt.fov=window.innerWidth/window.innerHeight<1?74:64}else n.target.copy(e),Object.assign(n,{enableZoom:!0,enablePan:!0,rotateSpeed:.7,minDistance:3,maxDistance:28,minPolarAngle:.02,maxPolarAngle:1.3}),Kt.fov=window.innerWidth/window.innerHeight<1?48:38;Kt.updateProjectionMatrix(),n.update(),ua.querySelectorAll("button").forEach(s=>s.classList.toggle("on",s.dataset.spot===xt.spotId)),md()}function la(i){if(!xt.active||xt.tween)return;xt.spotId=i.id;let t=!i.orbit,e={pos:new R(...i.pos),tgt:new R(...i.tgt)};!t&&xt.mode==="orbit"&&e.pos.sub(e.tgt).setLength(Math.max(12,Kt.position.distanceTo(xt.controls.target))).add(e.tgt),xt.tween={from:{pos:Kt.position.clone(),tgt:xt.controls.target.clone()},to:e,t0:performance.now(),dur:t||xt.mode==="walk"?1e3:1300,cut:t||xt.mode==="walk",toWalk:t,switched:!1},xt.controls.enabled=!1,ua.querySelectorAll("button").forEach(n=>n.classList.toggle("on",n.dataset.spot===i.id))}function Ix(i){let t=xt.tween,e=Xe((i-t.t0)/t.dur);if(t.cut)zs.style.opacity=Xe((1-Math.abs(2*e-1))*2.2),e>=.5&&!t.switched&&(t.switched=!0,aa(t.toWalk?"walk":"orbit",t.to.pos,t.to.tgt));else{let n=Di(e),s=t.from.tgt.clone().lerp(t.to.tgt,n),r=new yn().setFromVector3(sa.copy(t.from.pos).sub(t.from.tgt)),a=new yn().setFromVector3(sa.copy(t.to.pos).sub(t.to.tgt)),o=a.theta-r.theta;o>Math.PI&&(o-=Math.PI*2),o<-Math.PI&&(o+=Math.PI*2),ia.set(Mn(r.radius,a.radius,n),Mn(r.phi,a.phi,n),r.theta+o*n),Kt.position.setFromSpherical(ia).add(s),xt.controls.target.copy(s),Kt.lookAt(s)}e>=1&&(t.cut||aa("orbit",t.to.pos,t.to.tgt),zs.style.opacity=0,xt.tween=null,xt.controls.enabled=!0)}function Lx(i){let e=xt.move+xt.wheel,n=xt.strafe;if(xt.wheel*=Math.exp(-i*6),Math.abs(xt.wheel)<.01&&(xt.wheel=0),!e&&!n)return!1;let s=new R;Kt.getWorldDirection(s),s.y=0,s.normalize();let r=new R(-s.z,0,s.x),a=s.multiplyScalar(e*1.5*i).addScaledVector(r,n*1.5*i),o=Kt.position,l=a.x,c=a.z;if(!oc(o.x+l,o.z+c))if(oc(o.x+l,o.z))c=0;else if(oc(o.x,o.z+c))l=0;else return!1;return o.x+=l,o.z+=c,xt.controls.target.x+=l,xt.controls.target.z+=c,!0}var Rs=new R;function Dx(){let i=window.innerWidth,t=window.innerHeight,e=xt.mode==="orbit"&&!xt.tween;for(let n of Ps){if(!n.label)continue;Rs.set(...n.anchor).project(Kt);let s=e&&Rs.z<1&&Math.abs(Rs.x)<1.05&&Math.abs(Rs.y)<1.05;n.label.classList.toggle("show",s),s&&(n.label.style.transform=`translate(${((Rs.x+1)/2*i).toFixed(1)}px, ${((1-Rs.y)/2*t).toFixed(1)}px) translate(-50%, -50%)`)}}function gd(){ue.ceilings.visible=Kt.position.y<ee,ud(.56+.1*xt.night),Dx(),mr.enabled=ra>.01,en.render()}function Ux(i,t){let e=ui;if(xt.tween?(Ix(i),e=!0):(xt.mode==="walk"&&(e=Lx(t)||e),e=xt.controls.update()||e),xt.night!==xt.nightTarget){let n=Math.sign(xt.nightTarget-xt.night)*t/1.2;xt.night=Xe(xt.night+n),Math.abs(xt.night-xt.nightTarget)<.01&&(xt.night=xt.nightTarget),e=!0}e?(gd(),ui=!1,Cs&&dd(t),Cs=!0):Cs=!1}function Ad(){_c.textContent=xt.nightTarget?"\u2600 Ver de dia":"\u263E Ver \xE0 noite"}function xd(){if(xt.active||!document.body.classList.contains("ready"))return;xt.active=!0,xt.savedScroll=window.scrollY,document.documentElement.classList.add("free-lock"),document.body.classList.add("free"),xt.night=xt.nightTarget=tn>=.6?1:0,Ad();let i=xt.controls=new qo(Kt,ca);i.enableDamping=!0,i.dampingFactor=.08,i.screenSpacePanning=!1,i.addEventListener("change",()=>{xt.mode==="orbit"&&(i.target.x=Xe(i.target.x,-1,9.5),i.target.y=Xe(i.target.y,0,2.2),i.target.z=Xe(i.target.z,-1,7))}),Kt.clearViewOffset();let t=hd(tn,window.innerWidth/window.innerHeight);t.pos.y<ee?(xt.spotId=null,aa("walk",t.pos,t.tgt)):(xt.spotId=null,aa("orbit",t.pos,t.tgt),la(Ps[0])),zs.style.opacity=0,We.shadow.needsUpdate=!0,ui=!0}function vc(){xt.active&&(xt.active=!1,xt.tween=null,xt.move=xt.strafe=xt.wheel=0,xt.controls.dispose(),xt.controls=null,ca.style.touchAction="",document.documentElement.classList.remove("free-lock"),document.body.classList.remove("free","walk"),pd.querySelectorAll(".show").forEach(i=>i.classList.remove("show")),zs.style.opacity=0,window.scrollTo(0,xt.savedScroll),gr(),tn=hi,uc=-1,ui=!0)}document.querySelectorAll("[data-explore]").forEach(i=>i.addEventListener("click",t=>{t.preventDefault(),xd()}));document.getElementById("btn-exit").addEventListener("click",vc);_c.addEventListener("click",()=>{xt.nightTarget=xt.nightTarget?0:1,Ad()});ca.addEventListener("wheel",i=>{!xt.active||xt.mode!=="walk"||(i.preventDefault(),xt.wheel=Xe(xt.wheel-Math.sign(i.deltaY)*.9,-2.2,2.2))},{passive:!1});var _d={KeyW:["move",1],ArrowUp:["move",1],KeyS:["move",-1],ArrowDown:["move",-1],KeyA:["strafe",-1],ArrowLeft:["strafe",-1],KeyD:["strafe",1],ArrowRight:["strafe",1]};window.addEventListener("keydown",i=>{if(!xt.active)return;if(i.code==="Escape"){vc();return}let t=_d[i.code];t&&xt.mode==="walk"&&(xt[t[0]]=t[1],i.preventDefault())});window.addEventListener("keyup",i=>{let t=_d[i.code];t&&xt[t[0]]===t[1]&&(xt[t[0]]=0)});document.querySelectorAll("[data-walk]").forEach(i=>{let t=e=>n=>{n.preventDefault(),xt.move=e};i.addEventListener("pointerdown",t(+i.dataset.walk));for(let e of["pointerup","pointerleave","pointercancel"])i.addEventListener(e,t(0))});async function Nx(){ue.root.traverse(i=>{i.visible=!0}),di.visible=!!bn.map,Kt.position.set(4.27,15,3.04),Kt.lookAt(4.27,0,3),be.setRenderTarget(en.renderTarget1);try{await be.compileAsync(Ln,Kt)}catch{}be.setRenderTarget(null),We.shadow.needsUpdate=!0;for(let i of ue.nightLights)i.castShadow&&(i.shadow.needsUpdate=!0);mr.enabled=!0,en.render()}Ac.then(Nx).then(()=>{gr(),tn=hi,requestAnimationFrame(i=>{cc=i,oa=i,ui=!0,dc(i),document.body.classList.add("ready")})});new URLSearchParams(location.search).has("film")&&(document.body.classList.add("film"),window.__film={frame(i,t={}){return Yn.reveal=t.reveal??null,Yn.cam=t.cam??null,document.body.classList.toggle("film-clean",!t.ui),tn=hi=hc=i,fd(i),!0},project(i){return i.map(([t,e,n])=>{let s=new R(t,e,n).project(Kt);return[(s.x+1)/2*window.innerWidth,(1-s.y)/2*window.innerHeight]})},free(i={}){return document.body.classList.add("free"),document.body.classList.remove("film-clean"),document.body.classList.toggle("walk",!!i.walk),i.touch!==void 0&&(pc=i.touch),xt.mode=i.walk?"walk":"orbit",xt.night=xt.nightTarget=i.night??0,_c.textContent=i.nightLabel??xt.night>.5?"\u2600 Ver de dia":"\u263E Ver \xE0 noite",ua.querySelectorAll("button").forEach(t=>t.classList.toggle("on",t.dataset.spot===i.spot)),md(),zs.style.opacity=i.fade??0,Kt.clearViewOffset(),Kt.position.set(...i.cam.pos),Kt.lookAt(...i.cam.tgt),Kt.fov=i.cam.fov??38,Kt.updateProjectionMatrix(),Kt.updateMatrixWorld(),We.shadow.needsUpdate=!0,gd(),!0},rect(i){let t=document.querySelector(i).getBoundingClientRect();return[t.left,t.top,t.width,t.height]},labels(){return Ps.filter(i=>i.label&&i.label.classList.contains("show")).map(i=>[i.id,...window.__film.rect(`#free-labels .spot-label:nth-child(${Ps.filter(t=>t.label).indexOf(i)+1})`)])},sheet:Ae,plan:ws});new URLSearchParams(location.search).has("debug")&&(window.__app={renderer:be,scene:Ln,house:ue,buildMs:px,enterFree:xd,exitFree:vc,goToSpot:la,spots:Ps,free:xt});var sd=new URLSearchParams(location.search).get("p");sd!==null&&Ac.then(()=>{window.scrollTo(0,+sd*xc()),gr(),tn=hi});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
