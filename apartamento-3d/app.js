(()=>{var fl="160";var Eu=0,Gl=1,wu=2;var yh=1,pl=2,Tn=3,Jn=0,Ee=1,Ge=2;var gn=0,qi=1,Qn=2,Wl=3,Xl=4,Tu=5,ci=100,Ru=101,Cu=102,ql=103,Yl=104,zu=200,Pu=201,Iu=202,Lu=203,Mo=204,So=205,Du=206,Uu=207,Nu=208,Fu=209,Ou=210,Bu=211,ku=212,Hu=213,Vu=214,Gu=0,Wu=1,Xu=2,Pr=3,qu=4,Yu=5,Ju=6,Qu=7,Mh=0,Zu=1,Ku=2,Xn=0,ml=1,gl=2,Al=3,Ws=4,ju=5,xl=6;var Sh=300,Qi=301,Zi=302,bo=303,Eo=304,pa=306,Cs=1e3,on=1001,wo=1002,Oe=1003,Jl=1004;var Oa=1005;var Je=1006,$u=1007;var zs=1008;var qn=1009,td=1010,ed=1011,_l=1012,bh=1013,Gn=1014,Wn=1015,cn=1016,Eh=1017,wh=1018,di=1020,nd=1021,ln=1023,id=1024,sd=1025,fi=1026,Ki=1027,rd=1028,Th=1029,ad=1030,Rh=1031,Ch=1033,Ba=33776,ka=33777,Ha=33778,Va=33779,Ql=35840,Zl=35841,Kl=35842,jl=35843,zh=36196,$l=37492,tc=37496,ec=37808,nc=37809,ic=37810,sc=37811,rc=37812,ac=37813,oc=37814,lc=37815,cc=37816,hc=37817,uc=37818,dc=37819,fc=37820,pc=37821,Ga=36492,mc=36494,gc=36495,od=36283,Ac=36284,xc=36285,_c=36286;var Ir=2300,Lr=2301,Wa=2302,vc=2400,yc=2401,Mc=2402;var Ph=3e3,pi=3001,ld=3200,cd=3201,Ih=0,hd=1,Qe="",he="srgb",In="srgb-linear",vl="display-p3",ma="display-p3-linear",Dr="linear",Kt="srgb",Ur="rec709",Nr="p3";var Si=7680;var Sc=519,ud=512,dd=513,fd=514,Lh=515,pd=516,md=517,gd=518,Ad=519,To=35044;var bc="300 es",Ro=1035,zn=2e3,Fr=2001,Zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Xa=Math.PI/180,Co=180/Math.PI;function Pn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Se(i,t,e){return Math.max(t,Math.min(e,i))}function xd(i,t){return(i%t+t)%t}function qa(i,t,e){return(1-e)*i+e*t}function Ec(i){return(i&i-1)===0&&i!==0}function zo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function jt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var tt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],x=s[0],m=s[3],f=s[6],_=s[1],A=s[4],M=s[7],P=s[2],w=s[5],T=s[8];return r[0]=a*x+o*_+l*P,r[3]=a*m+o*A+l*w,r[6]=a*f+o*M+l*T,r[1]=c*x+h*_+u*P,r[4]=c*m+h*A+u*w,r[7]=c*f+h*M+u*T,r[2]=d*x+p*_+g*P,r[5]=d*m+p*A+g*w,r[8]=d*f+p*M+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ya.makeScale(t,e)),this}rotate(t){return this.premultiply(Ya.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ya.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ya=new Gt;function Dh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _d(){let i=Or("canvas");return i.style.display="block",i}var wc={};function Es(i){i in wc||(wc[i]=!0,console.warn(i))}var Tc=new Gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rc=new Gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),tr={[In]:{transfer:Dr,primaries:Ur,toReference:i=>i,fromReference:i=>i},[he]:{transfer:Kt,primaries:Ur,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ma]:{transfer:Dr,primaries:Nr,toReference:i=>i.applyMatrix3(Rc),fromReference:i=>i.applyMatrix3(Tc)},[vl]:{transfer:Kt,primaries:Nr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Rc),fromReference:i=>i.applyMatrix3(Tc).convertLinearToSRGB()}},vd=new Set([In,ma]),Qt={enabled:!0,_workingColorSpace:In,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!vd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=tr[t].toReference,s=tr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return tr[i].primaries},getTransfer:function(i){return i===Qe?Dr:tr[i].transfer}};function Yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ja(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var bi,Br=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{bi===void 0&&(bi=Or("canvas")),bi.width=t.width,bi.height=t.height;let n=bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Or("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Yi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yi(e[n]/255)*255):e[n]=Yi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},yd=0,kr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Pn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qa(s[a].image)):r.push(Qa(s[a]))}else r=Qa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Qa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Br.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Md=0,Ze=class i extends Zn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=on,s=on,r=Je,a=zs,o=ln,l=qn,c=i.DEFAULT_ANISOTROPY,h=Qe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Pn(),this.name="",this.source=new kr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===pi?he:Qe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cs:t.x=t.x-Math.floor(t.x);break;case on:t.x=t.x<0?0:1;break;case wo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cs:t.y=t.y-Math.floor(t.y);break;case on:t.y=t.y<0?0:1;break;case wo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===he?pi:Ph}set encoding(t){Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===pi?he:Qe}};Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Sh;Ze.DEFAULT_ANISOTROPY=1;var re=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,M=(p+1)/2,P=(f+1)/2,w=(h+d)/4,T=(u+x)/4,F=(g+m)/4;return A>M&&A>P?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=w/n,r=T/n):M>P?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=F/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=T/r,s=F/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Po=class extends Zn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(Es("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===pi?he:Qe),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ze(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new kr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Be=class extends Po{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Hr=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Io=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==p||h!==g){let m=1-o,f=l*d+c*p+h*g+u*x,_=f>=0?1:-1,A=1-f*f;if(A>Number.EPSILON){let P=Math.sqrt(A),w=Math.atan2(P,f*_);m=Math.sin(m*w)/P,o=Math.sin(o*w)/P}let M=o*_;if(l=l*m+d*M,c=c*m+p*M,h=h*m+g*M,u=u*m+x*M,m===1-o){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Za.copy(this).projectOnVector(t),this.sub(Za)}reflect(t){return this.sub(Za.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Za=new C,Cc=new Kn,Ln=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),er.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),er.copy(n.boundingBox)),er.applyMatrix4(t.matrixWorld),this.union(er)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(As),nr.subVectors(this.max,As),Ei.subVectors(t.a,As),wi.subVectors(t.b,As),Ti.subVectors(t.c,As),On.subVectors(wi,Ei),Bn.subVectors(Ti,wi),si.subVectors(Ei,Ti);let e=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-si.z,si.y,On.z,0,-On.x,Bn.z,0,-Bn.x,si.z,0,-si.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-si.y,si.x,0];return!Ka(e,Ei,wi,Ti,nr)||(e=[1,0,0,0,1,0,0,0,1],!Ka(e,Ei,wi,Ti,nr))?!1:(ir.crossVectors(On,Bn),e=[ir.x,ir.y,ir.z],Ka(e,Ei,wi,Ti,nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Mn=[new C,new C,new C,new C,new C,new C,new C,new C],sn=new C,er=new Ln,Ei=new C,wi=new C,Ti=new C,On=new C,Bn=new C,si=new C,As=new C,nr=new C,ir=new C,ri=new C;function Ka(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ri.fromArray(i,r);let o=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),l=t.dot(ri),c=e.dot(ri),h=n.dot(ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Sd=new Ln,xs=new C,ja=new C,ji=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Sd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xs.subVectors(t,this.center);let e=xs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(xs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xs.copy(t.center).add(ja)),this.expandByPoint(xs.copy(t.center).sub(ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Sn=new C,$a=new C,sr=new C,kn=new C,to=new C,rr=new C,eo=new C,Vr=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$a.copy(t).add(e).multiplyScalar(.5),sr.copy(e).sub(t).normalize(),kn.copy(this.origin).sub($a);let r=t.distanceTo(e)*.5,a=-this.direction.dot(sr),o=kn.dot(this.direction),l=-kn.dot(sr),c=kn.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy($a).addScaledVector(sr,d),p}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);let n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,s,r){to.subVectors(e,t),rr.subVectors(n,t),eo.crossVectors(to,rr);let a=this.direction.dot(eo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;kn.subVectors(this.origin,t);let l=o*this.direction.dot(rr.crossVectors(kn,rr));if(l<0)return null;let c=o*this.direction.dot(to.cross(kn));if(c<0||l+c>a)return null;let h=-o*kn.dot(eo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,x,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,x,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ri.setFromMatrixColumn(t,0).length(),r=1/Ri.setFromMatrixColumn(t,1).length(),a=1/Ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,p=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bd,t,Ed)}lookAt(t,e,n){let s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Hn.crossVectors(n,He),Hn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Hn.crossVectors(n,He)),Hn.normalize(),ar.crossVectors(He,Hn),s[0]=Hn.x,s[4]=ar.x,s[8]=He.x,s[1]=Hn.y,s[5]=ar.y,s[9]=He.y,s[2]=Hn.z,s[6]=ar.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],_=n[3],A=n[7],M=n[11],P=n[15],w=s[0],T=s[4],F=s[8],y=s[12],E=s[1],N=s[5],B=s[9],rt=s[13],L=s[2],V=s[6],X=s[10],Z=s[14],$=s[3],Q=s[7],R=s[11],D=s[15];return r[0]=a*w+o*E+l*L+c*$,r[4]=a*T+o*N+l*V+c*Q,r[8]=a*F+o*B+l*X+c*R,r[12]=a*y+o*rt+l*Z+c*D,r[1]=h*w+u*E+d*L+p*$,r[5]=h*T+u*N+d*V+p*Q,r[9]=h*F+u*B+d*X+p*R,r[13]=h*y+u*rt+d*Z+p*D,r[2]=g*w+x*E+m*L+f*$,r[6]=g*T+x*N+m*V+f*Q,r[10]=g*F+x*B+m*X+f*R,r[14]=g*y+x*rt+m*Z+f*D,r[3]=_*w+A*E+M*L+P*$,r[7]=_*T+A*N+M*V+P*Q,r[11]=_*F+A*B+M*X+P*R,r[15]=_*y+A*rt+M*Z+P*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+x*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],_=u*m*c-x*d*c+x*l*p-o*m*p-u*l*f+o*d*f,A=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,M=h*x*c-g*u*c+g*o*p-a*x*p-h*o*f+a*u*f,P=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,w=e*_+n*A+s*M+r*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/w;return t[0]=_*T,t[1]=(x*d*r-u*m*r-x*s*p+n*m*p+u*s*f-n*d*f)*T,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*f+n*l*f)*T,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*T,t[4]=A*T,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*T,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*f-e*l*f)*T,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*T,t[8]=M*T,t[9]=(g*u*r-h*x*r-g*n*p+e*x*p+h*n*f-e*u*f)*T,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*f+e*o*f)*T,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*T,t[12]=P*T,t[13]=(h*x*s-g*u*s+g*n*d-e*x*d-h*n*m+e*u*m)*T,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*m-e*o*m)*T,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,x=a*h,m=a*u,f=o*u,_=l*c,A=l*h,M=l*u,P=n.x,w=n.y,T=n.z;return s[0]=(1-(x+f))*P,s[1]=(p+M)*P,s[2]=(g-A)*P,s[3]=0,s[4]=(p-M)*w,s[5]=(1-(d+f))*w,s[6]=(m+_)*w,s[7]=0,s[8]=(g+A)*T,s[9]=(m-_)*T,s[10]=(1-(d+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ri.set(s[0],s[1],s[2]).length(),a=Ri.set(s[4],s[5],s[6]).length(),o=Ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],rn.copy(this);let c=1/r,h=1/a,u=1/o;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,e.setFromRotationMatrix(rn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=zn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,g;if(o===zn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Fr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=zn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,p=(n+s)*h,g,x;if(o===zn)g=(a+r)*u,x=-2*u;else if(o===Fr)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ri=new C,rn=new ue,bd=new C(0,0,0),Ed=new C(1,1,1),Hn=new C,ar=new C,He=new C,zc=new ue,Pc=new Kn,Gr=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pc.setFromEuler(this),this.setFromQuaternion(Pc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gr.DEFAULT_ORDER="XYZ";var Wr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},wd=0,Ic=new C,Ci=new Kn,bn=new ue,or=new C,_s=new C,Td=new C,Rd=new Kn,Lc=new C(1,0,0),Dc=new C(0,1,0),Uc=new C(0,0,1),Cd={type:"added"},zd={type:"removed"},Te=class i extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new Gr,n=new Kn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Gt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.premultiply(Ci),this}rotateX(t){return this.rotateOnAxis(Lc,t)}rotateY(t){return this.rotateOnAxis(Dc,t)}rotateZ(t){return this.rotateOnAxis(Uc,t)}translateOnAxis(t,e){return Ic.copy(t).applyQuaternion(this.quaternion),this.position.add(Ic.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lc,t)}translateY(t){return this.translateOnAxis(Dc,t)}translateZ(t){return this.translateOnAxis(Uc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?or.copy(t):or.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(_s,or,this.up):bn.lookAt(or,_s,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(bn),this.quaternion.premultiply(Ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Cd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zd)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,Td),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Rd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Te.DEFAULT_UP=new C(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var an=new C,En=new C,no=new C,wn=new C,zi=new C,Pi=new C,Nc=new C,io=new C,so=new C,ro=new C,lr=!1,ui=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),an.subVectors(t,e),s.cross(an);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){an.subVectors(s,e),En.subVectors(n,e),no.subVectors(t,e);let a=an.dot(an),o=an.dot(En),l=an.dot(no),c=En.dot(En),h=En.dot(no),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getUV(t,e,n,s,r,a,o,l){return lr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lr=!0),this.getInterpolation(t,e,n,s,r,a,o,l)}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(a,wn.y),l.addScaledVector(o,wn.z),l)}static isFrontFacing(t,e,n,s){return an.subVectors(n,e),En.subVectors(t,e),an.cross(En).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),En.subVectors(this.a,this.b),an.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return lr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lr=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;zi.subVectors(s,n),Pi.subVectors(r,n),io.subVectors(t,n);let l=zi.dot(io),c=Pi.dot(io);if(l<=0&&c<=0)return e.copy(n);so.subVectors(t,s);let h=zi.dot(so),u=Pi.dot(so);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(zi,a);ro.subVectors(t,r);let p=zi.dot(ro),g=Pi.dot(ro);if(g>=0&&p<=g)return e.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Pi,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Nc.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Nc,o);let f=1/(m+x+d);return a=x*f,o=d*f,e.copy(n).addScaledVector(zi,a).addScaledVector(Pi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},cr={h:0,s:0,l:0};function ao(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=he){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=xd(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ao(a,r,t+1/3),this.g=ao(a,r,t),this.b=ao(a,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=he){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=he){let n=Uh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}copyLinearToSRGB(t){return this.r=Ja(t.r),this.g=Ja(t.g),this.b=Ja(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=he){return Qt.fromWorkingColorSpace(Pe.copy(this),t),Math.round(Se(Pe.r*255,0,255))*65536+Math.round(Se(Pe.g*255,0,255))*256+Math.round(Se(Pe.b*255,0,255))}getHexString(t=he){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Pe.copy(this),e);let n=Pe.r,s=Pe.g,r=Pe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=he){Qt.fromWorkingColorSpace(Pe.copy(this),t);let e=Pe.r,n=Pe.g,s=Pe.b;return t!==he?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(cr);let n=qa(Vn.h,cr.h,e),s=qa(Vn.s,cr.s,e),r=qa(Vn.l,cr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pe=new wt;wt.NAMES=Uh;var Pd=0,Dn=class extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=qi,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mo,this.blendDst=So,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mo&&(n.blendSrc=this.blendSrc),this.blendDst!==So&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},We=class extends Dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var me=new C,hr=new tt,Le=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=To,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)hr.fromBufferAttribute(this,e),hr.applyMatrix3(t),this.setXY(e,hr.x,hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==To&&(t.usage=this.usage),t}};var Xr=class extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var qr=class extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Wt=class extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Id=0,Ye=new ue,oo=new Te,Ii=new C,Ve=new Ln,vs=new Ln,Me=new C,de=class i extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dh(t)?qr:Xr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return oo.lookAt(t),oo.updateMatrix(),this.applyMatrix4(oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Wt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ve.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];vs.setFromBufferAttribute(o),this.morphTargetsRelative?(Me.addVectors(Ve.min,vs.min),Ve.expandByPoint(Me),Me.addVectors(Ve.max,vs.max),Ve.expandByPoint(Me)):(Ve.expandByPoint(vs.min),Ve.expandByPoint(vs.max))}Ve.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Me.fromBufferAttribute(o,c),l&&(Ii.fromBufferAttribute(t,c),Me.add(Ii)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<o;E++)c[E]=new C,h[E]=new C;let u=new C,d=new C,p=new C,g=new tt,x=new tt,m=new tt,f=new C,_=new C;function A(E,N,B){u.fromArray(s,E*3),d.fromArray(s,N*3),p.fromArray(s,B*3),g.fromArray(a,E*2),x.fromArray(a,N*2),m.fromArray(a,B*2),d.sub(u),p.sub(u),x.sub(g),m.sub(g);let rt=1/(x.x*m.y-m.x*x.y);isFinite(rt)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(rt),_.copy(p).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(rt),c[E].add(f),c[N].add(f),c[B].add(f),h[E].add(_),h[N].add(_),h[B].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let E=0,N=M.length;E<N;++E){let B=M[E],rt=B.start,L=B.count;for(let V=rt,X=rt+L;V<X;V+=3)A(n[V+0],n[V+1],n[V+2])}let P=new C,w=new C,T=new C,F=new C;function y(E){T.fromArray(r,E*3),F.copy(T);let N=c[E];P.copy(N),P.sub(T.multiplyScalar(T.dot(N))).normalize(),w.crossVectors(F,N);let rt=w.dot(h[E])<0?-1:1;l[E*4]=P.x,l[E*4+1]=P.y,l[E*4+2]=P.z,l[E*4+3]=rt}for(let E=0,N=M.length;E<N;++E){let B=M[E],rt=B.start,L=B.count;for(let V=rt,X=rt+L;V<X;V+=3)y(n[V+0]),y(n[V+1]),y(n[V+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Le(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fc=new ue,ai=new Vr,ur=new ji,Oc=new C,Li=new C,Di=new C,Ui=new C,lo=new C,dr=new C,fr=new tt,pr=new tt,mr=new tt,Bc=new C,kc=new C,Hc=new C,gr=new C,Ar=new C,Yt=class extends Te{constructor(t=new de,e=new We){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(lo.fromBufferAttribute(u,t),a?dr.addScaledVector(lo,h):dr.addScaledVector(lo.sub(e),h))}e.add(dr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(r),ai.copy(t.ray).recast(t.near),!(ur.containsPoint(ai.origin)===!1&&(ai.intersectSphere(ur,Oc)===null||ai.origin.distanceToSquared(Oc)>(t.far-t.near)**2))&&(Fc.copy(r).invert(),ai.copy(t.ray).applyMatrix4(Fc),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=a[m.materialIndex],_=Math.max(m.start,p.start),A=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,P=A;M<P;M+=3){let w=o.getX(M),T=o.getX(M+1),F=o.getX(M+2);s=xr(this,f,t,n,c,h,u,w,T,F),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let _=o.getX(m),A=o.getX(m+1),M=o.getX(m+2);s=xr(this,a,t,n,c,h,u,_,A,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=a[m.materialIndex],_=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,P=A;M<P;M+=3){let w=M,T=M+1,F=M+2;s=xr(this,f,t,n,c,h,u,w,T,F),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let _=m,A=m+1,M=m+2;s=xr(this,a,t,n,c,h,u,_,A,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Ld(i,t,e,n,s,r,a,o){let l;if(t.side===Ee?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Jn,o),l===null)return null;Ar.copy(o),Ar.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ar);return c<e.near||c>e.far?null:{distance:c,point:Ar.clone(),object:i}}function xr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Li),i.getVertexPosition(l,Di),i.getVertexPosition(c,Ui);let h=Ld(i,t,e,n,Li,Di,Ui,gr);if(h){s&&(fr.fromBufferAttribute(s,o),pr.fromBufferAttribute(s,l),mr.fromBufferAttribute(s,c),h.uv=ui.getInterpolation(gr,Li,Di,Ui,fr,pr,mr,new tt)),r&&(fr.fromBufferAttribute(r,o),pr.fromBufferAttribute(r,l),mr.fromBufferAttribute(r,c),h.uv1=ui.getInterpolation(gr,Li,Di,Ui,fr,pr,mr,new tt),h.uv2=h.uv1),a&&(Bc.fromBufferAttribute(a,o),kc.fromBufferAttribute(a,l),Hc.fromBufferAttribute(a,c),h.normal=ui.getInterpolation(gr,Li,Di,Ui,Bc,kc,Hc,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new C,materialIndex:0};ui.getNormal(Li,Di,Ui,u.normal),h.face=u}return h}var hn=class i extends de{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(u,2));function g(x,m,f,_,A,M,P,w,T,F,y){let E=M/T,N=P/F,B=M/2,rt=P/2,L=w/2,V=T+1,X=F+1,Z=0,$=0,Q=new C;for(let R=0;R<X;R++){let D=R*N-rt;for(let O=0;O<V;O++){let I=O*E-B;Q[x]=I*_,Q[m]=D*A,Q[f]=L,c.push(Q.x,Q.y,Q.z),Q[x]=0,Q[m]=0,Q[f]=w>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(O/T),u.push(1-R/F),Z+=1}}for(let R=0;R<F;R++)for(let D=0;D<T;D++){let O=d+D+V*R,I=d+D+V*(R+1),G=d+(D+1)+V*(R+1),et=d+(D+1)+V*R;l.push(O,I,et),l.push(I,G,et),$+=6}o.addGroup(p,$,y),p+=$,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function $i(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Fe(i){let t={};for(let e=0;e<i.length;e++){let n=$i(i[e]);for(let s in n)t[s]=n[s]}return t}function Dd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nh(i){return i.getRenderTarget()===null?i.outputColorSpace:Qt.workingColorSpace}var $n={clone:$i,merge:Fe},Ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ge=class extends Dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ud,this.fragmentShader=Nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$i(t.uniforms),this.uniformsGroups=Dd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Yr=class extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ie=class extends Yr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Co*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Co*2*Math.atan(Math.tan(Xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ni=-90,Fi=1,Lo=class extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ie(Ni,Fi,t,e);s.layers=this.layers,this.add(s);let r=new Ie(Ni,Fi,t,e);r.layers=this.layers,this.add(r);let a=new Ie(Ni,Fi,t,e);a.layers=this.layers,this.add(a);let o=new Ie(Ni,Fi,t,e);o.layers=this.layers,this.add(o);let l=new Ie(Ni,Fi,t,e);l.layers=this.layers,this.add(l);let c=new Ie(Ni,Fi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Jr=class extends Ze{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Qi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Do=class extends Be{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Es("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===pi?he:Qe),this.texture=new Jr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hn(5,5,5),r=new ge({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ee,blending:gn});r.uniforms.tEquirect.value=e;let a=new Yt(s,r),o=e.minFilter;return e.minFilter===zs&&(e.minFilter=Je),new Lo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},co=new C,Fd=new C,Od=new Gt,Rn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=co.subVectors(n,e).cross(Fd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(co),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Od.getNormalMatrix(t),s=this.coplanarPoint(co).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},oi=new ji,_r=new C,Ps=class{constructor(t=new Rn,e=new Rn,n=new Rn,s=new Rn,r=new Rn,a=new Rn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],x=s[10],m=s[11],f=s[12],_=s[13],A=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,m-p,M-f).normalize(),n[1].setComponents(l+r,d+c,m+p,M+f).normalize(),n[2].setComponents(l+a,d+h,m+g,M+_).normalize(),n[3].setComponents(l-a,d-h,m-g,M-_).normalize(),n[4].setComponents(l-o,d-u,m-x,M-A).normalize(),e===zn)n[5].setComponents(l+o,d+u,m+x,M+A).normalize();else if(e===Fr)n[5].setComponents(o,u,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(_r.x=s.normal.x>0?t.max.x:t.min.x,_r.y=s.normal.y>0?t.max.y:t.min.y,_r.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(_r)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Fh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Bd(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,d=c.usage,p=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let d=h.array,p=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),p.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){let f=g[x];e?i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var Ke=class i extends de{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let _=f*d-a;for(let A=0;A<c;A++){let M=A*u-r;g.push(M,-_,0),x.push(0,0,1),m.push(A/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<o;_++){let A=_+c*f,M=_+c*(f+1),P=_+1+c*(f+1),w=_+1+c*f;p.push(A,M,w),p.push(M,P,w)}this.setIndex(p),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(x,3)),this.setAttribute("uv",new Wt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hd=`#ifdef USE_ALPHAHASH
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
#endif`,Vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qd=`#ifdef USE_AOMAP
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
#endif`,Yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jd=`#ifdef USE_BATCHING
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
#endif`,Qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$d=`#ifdef USE_IRIDESCENCE
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
#endif`,tf=`#ifdef USE_BUMPMAP
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
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hf=`#define PI 3.141592653589793
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
} // validated`,uf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,df=`vec3 transformedNormal = objectNormal;
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
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Af="gl_FragColor = linearToOutputTexel( gl_FragColor );",xf=`
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
}`,_f=`#ifdef USE_ENVMAP
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
#endif`,vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sf=`#ifdef USE_ENVMAP
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
#endif`,bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rf=`#ifdef USE_GRADIENTMAP
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
}`,Cf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lf=`uniform bool receiveShadow;
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
#endif`,Df=`#ifdef USE_ENVMAP
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
#endif`,Uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bf=`PhysicalMaterial material;
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
#endif`,kf=`struct PhysicalMaterial {
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
}`,Hf=`
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
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kf=`#if defined( USE_POINTS_UV )
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
#endif`,jf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$f=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ep=`#ifdef USE_MORPHNORMALS
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
#endif`,np=`#ifdef USE_MORPHTARGETS
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
#endif`,ip=`#ifdef USE_MORPHTARGETS
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
#endif`,sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cp=`#ifdef USE_NORMALMAP
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
#endif`,hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ep=`float getShadowMask() {
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
}`,wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tp=`#ifdef USE_SKINNING
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
#endif`,Rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cp=`#ifdef USE_SKINNING
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
#endif`,zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dp=`#ifdef USE_TRANSMISSION
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
#endif`,Up=`#ifdef USE_TRANSMISSION
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hp=`uniform sampler2D t2D;
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
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`#include <common>
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
}`,Yp=`#if DEPTH_PACKING == 3200
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
}`,Jp=`#define DISTANCE
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
}`,Qp=`#define DISTANCE
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`uniform float scale;
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
}`,$p=`uniform vec3 diffuse;
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
}`,tm=`#include <common>
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
}`,em=`uniform vec3 diffuse;
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
}`,nm=`#define LAMBERT
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
}`,im=`#define LAMBERT
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
}`,sm=`#define MATCAP
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
}`,rm=`#define MATCAP
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
}`,am=`#define NORMAL
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
}`,om=`#define NORMAL
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
}`,lm=`#define PHONG
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
}`,cm=`#define PHONG
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
}`,hm=`#define STANDARD
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
}`,um=`#define STANDARD
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
}`,dm=`#define TOON
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
}`,fm=`#define TOON
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
}`,pm=`uniform float size;
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
}`,mm=`uniform vec3 diffuse;
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
}`,gm=`#include <common>
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
}`,Am=`uniform vec3 color;
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
}`,xm=`uniform float rotation;
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
}`,_m=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:kd,alphahash_pars_fragment:Hd,alphamap_fragment:Vd,alphamap_pars_fragment:Gd,alphatest_fragment:Wd,alphatest_pars_fragment:Xd,aomap_fragment:qd,aomap_pars_fragment:Yd,batching_pars_vertex:Jd,batching_vertex:Qd,begin_vertex:Zd,beginnormal_vertex:Kd,bsdfs:jd,iridescence_fragment:$d,bumpmap_pars_fragment:tf,clipping_planes_fragment:ef,clipping_planes_pars_fragment:nf,clipping_planes_pars_vertex:sf,clipping_planes_vertex:rf,color_fragment:af,color_pars_fragment:of,color_pars_vertex:lf,color_vertex:cf,common:hf,cube_uv_reflection_fragment:uf,defaultnormal_vertex:df,displacementmap_pars_vertex:ff,displacementmap_vertex:pf,emissivemap_fragment:mf,emissivemap_pars_fragment:gf,colorspace_fragment:Af,colorspace_pars_fragment:xf,envmap_fragment:_f,envmap_common_pars_fragment:vf,envmap_pars_fragment:yf,envmap_pars_vertex:Mf,envmap_physical_pars_fragment:Df,envmap_vertex:Sf,fog_vertex:bf,fog_pars_vertex:Ef,fog_fragment:wf,fog_pars_fragment:Tf,gradientmap_pars_fragment:Rf,lightmap_fragment:Cf,lightmap_pars_fragment:zf,lights_lambert_fragment:Pf,lights_lambert_pars_fragment:If,lights_pars_begin:Lf,lights_toon_fragment:Uf,lights_toon_pars_fragment:Nf,lights_phong_fragment:Ff,lights_phong_pars_fragment:Of,lights_physical_fragment:Bf,lights_physical_pars_fragment:kf,lights_fragment_begin:Hf,lights_fragment_maps:Vf,lights_fragment_end:Gf,logdepthbuf_fragment:Wf,logdepthbuf_pars_fragment:Xf,logdepthbuf_pars_vertex:qf,logdepthbuf_vertex:Yf,map_fragment:Jf,map_pars_fragment:Qf,map_particle_fragment:Zf,map_particle_pars_fragment:Kf,metalnessmap_fragment:jf,metalnessmap_pars_fragment:$f,morphcolor_vertex:tp,morphnormal_vertex:ep,morphtarget_pars_vertex:np,morphtarget_vertex:ip,normal_fragment_begin:sp,normal_fragment_maps:rp,normal_pars_fragment:ap,normal_pars_vertex:op,normal_vertex:lp,normalmap_pars_fragment:cp,clearcoat_normal_fragment_begin:hp,clearcoat_normal_fragment_maps:up,clearcoat_pars_fragment:dp,iridescence_pars_fragment:fp,opaque_fragment:pp,packing:mp,premultiplied_alpha_fragment:gp,project_vertex:Ap,dithering_fragment:xp,dithering_pars_fragment:_p,roughnessmap_fragment:vp,roughnessmap_pars_fragment:yp,shadowmap_pars_fragment:Mp,shadowmap_pars_vertex:Sp,shadowmap_vertex:bp,shadowmask_pars_fragment:Ep,skinbase_vertex:wp,skinning_pars_vertex:Tp,skinning_vertex:Rp,skinnormal_vertex:Cp,specularmap_fragment:zp,specularmap_pars_fragment:Pp,tonemapping_fragment:Ip,tonemapping_pars_fragment:Lp,transmission_fragment:Dp,transmission_pars_fragment:Up,uv_pars_fragment:Np,uv_pars_vertex:Fp,uv_vertex:Op,worldpos_vertex:Bp,background_vert:kp,background_frag:Hp,backgroundCube_vert:Vp,backgroundCube_frag:Gp,cube_vert:Wp,cube_frag:Xp,depth_vert:qp,depth_frag:Yp,distanceRGBA_vert:Jp,distanceRGBA_frag:Qp,equirect_vert:Zp,equirect_frag:Kp,linedashed_vert:jp,linedashed_frag:$p,meshbasic_vert:tm,meshbasic_frag:em,meshlambert_vert:nm,meshlambert_frag:im,meshmatcap_vert:sm,meshmatcap_frag:rm,meshnormal_vert:am,meshnormal_frag:om,meshphong_vert:lm,meshphong_frag:cm,meshphysical_vert:hm,meshphysical_frag:um,meshtoon_vert:dm,meshtoon_frag:fm,points_vert:pm,points_frag:mm,shadow_vert:gm,shadow_frag:Am,sprite_vert:xm,sprite_frag:_m},dt={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},mn={basic:{uniforms:Fe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Fe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Fe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Fe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Fe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Fe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Fe([dt.points,dt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Fe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Fe([dt.common,dt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Fe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Fe([dt.sprite,dt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Fe([dt.common,dt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Fe([dt.lights,dt.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};mn.physical={uniforms:Fe([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};var vr={r:0,b:0,g:0};function vm(i,t,e,n,s,r,a){let o=new wt(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(m,f){let _=!1,A=f.isScene===!0?f.background:null;A&&A.isTexture&&(A=(f.backgroundBlurriness>0?e:t).get(A)),A===null?x(o,l):A&&A.isColor&&(x(A,1),_=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),A&&(A.isCubeTexture||A.mapping===pa)?(h===void 0&&(h=new Yt(new hn(1,1,1),new ge({name:"BackgroundCubeMaterial",uniforms:$i(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Ee,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Qt.getTransfer(A.colorSpace)!==Kt,(u!==A||d!==A.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Yt(new Ke(2,2),new ge({name:"BackgroundMaterial",uniforms:$i(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(A.colorSpace)!==Kt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,f){m.getRGB(vr,Nh(i)),n.buffers.color.setClear(vr.r,vr.g,vr.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function ym(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(L,V,X,Z,$){let Q=!1;if(a){let R=x(Z,X,V);c!==R&&(c=R,p(c.object)),Q=f(L,Z,X,$),Q&&_(L,Z,X,$)}else{let R=V.wireframe===!0;(c.geometry!==Z.id||c.program!==X.id||c.wireframe!==R)&&(c.geometry=Z.id,c.program=X.id,c.wireframe=R,Q=!0)}$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(Q||h)&&(h=!1,F(L,V,X,Z),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,V,X){let Z=X.wireframe===!0,$=o[L.id];$===void 0&&($={},o[L.id]=$);let Q=$[V.id];Q===void 0&&(Q={},$[V.id]=Q);let R=Q[Z];return R===void 0&&(R=m(d()),Q[Z]=R),R}function m(L){let V=[],X=[],Z=[];for(let $=0;$<s;$++)V[$]=0,X[$]=0,Z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:X,attributeDivisors:Z,object:L,attributes:{},index:null}}function f(L,V,X,Z){let $=c.attributes,Q=V.attributes,R=0,D=X.getAttributes();for(let O in D)if(D[O].location>=0){let G=$[O],et=Q[O];if(et===void 0&&(O==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),O==="instanceColor"&&L.instanceColor&&(et=L.instanceColor)),G===void 0||G.attribute!==et||et&&G.data!==et.data)return!0;R++}return c.attributesNum!==R||c.index!==Z}function _(L,V,X,Z){let $={},Q=V.attributes,R=0,D=X.getAttributes();for(let O in D)if(D[O].location>=0){let G=Q[O];G===void 0&&(O==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),O==="instanceColor"&&L.instanceColor&&(G=L.instanceColor));let et={};et.attribute=G,G&&G.data&&(et.data=G.data),$[O]=et,R++}c.attributes=$,c.attributesNum=R,c.index=Z}function A(){let L=c.newAttributes;for(let V=0,X=L.length;V<X;V++)L[V]=0}function M(L){P(L,0)}function P(L,V){let X=c.newAttributes,Z=c.enabledAttributes,$=c.attributeDivisors;X[L]=1,Z[L]===0&&(i.enableVertexAttribArray(L),Z[L]=1),$[L]!==V&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,V),$[L]=V)}function w(){let L=c.newAttributes,V=c.enabledAttributes;for(let X=0,Z=V.length;X<Z;X++)V[X]!==L[X]&&(i.disableVertexAttribArray(X),V[X]=0)}function T(L,V,X,Z,$,Q,R){R===!0?i.vertexAttribIPointer(L,V,X,$,Q):i.vertexAttribPointer(L,V,X,Z,$,Q)}function F(L,V,X,Z){if(n.isWebGL2===!1&&(L.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;A();let $=Z.attributes,Q=X.getAttributes(),R=V.defaultAttributeValues;for(let D in Q){let O=Q[D];if(O.location>=0){let I=$[D];if(I===void 0&&(D==="instanceMatrix"&&L.instanceMatrix&&(I=L.instanceMatrix),D==="instanceColor"&&L.instanceColor&&(I=L.instanceColor)),I!==void 0){let G=I.normalized,et=I.itemSize,it=e.get(I);if(it===void 0)continue;let nt=it.buffer,_t=it.type,Mt=it.bytesPerElement,At=n.isWebGL2===!0&&(_t===i.INT||_t===i.UNSIGNED_INT||I.gpuType===bh);if(I.isInterleavedBufferAttribute){let Rt=I.data,z=Rt.stride,ht=I.offset;if(Rt.isInstancedInterleavedBuffer){for(let K=0;K<O.locationSize;K++)P(O.location+K,Rt.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let K=0;K<O.locationSize;K++)M(O.location+K);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let K=0;K<O.locationSize;K++)T(O.location+K,et/O.locationSize,_t,G,z*Mt,(ht+et/O.locationSize*K)*Mt,At)}else{if(I.isInstancedBufferAttribute){for(let Rt=0;Rt<O.locationSize;Rt++)P(O.location+Rt,I.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let Rt=0;Rt<O.locationSize;Rt++)M(O.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let Rt=0;Rt<O.locationSize;Rt++)T(O.location+Rt,et/O.locationSize,_t,G,et*Mt,et/O.locationSize*Rt*Mt,At)}}else if(R!==void 0){let G=R[D];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(O.location,G);break;case 3:i.vertexAttrib3fv(O.location,G);break;case 4:i.vertexAttrib4fv(O.location,G);break;default:i.vertexAttrib1fv(O.location,G)}}}}w()}function y(){B();for(let L in o){let V=o[L];for(let X in V){let Z=V[X];for(let $ in Z)g(Z[$].object),delete Z[$];delete V[X]}delete o[L]}}function E(L){if(o[L.id]===void 0)return;let V=o[L.id];for(let X in V){let Z=V[X];for(let $ in Z)g(Z[$].object),delete Z[$];delete V[X]}delete o[L.id]}function N(L){for(let V in o){let X=o[V];if(X[L.id]===void 0)continue;let Z=X[L.id];for(let $ in Z)g(Z[$].object),delete Z[$];delete X[L.id]}}function B(){rt(),h=!0,c!==l&&(c=l,p(c.object))}function rt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:B,resetDefaultState:rt,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfProgram:N,initAttributes:A,enableAttribute:M,disableUnusedAttributes:w}}function Mm(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Sm(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=d>0,M=a||t.has("OES_texture_float"),P=A&&M,w=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:A,floatFragmentTextures:M,floatVertexTextures:P,maxSamples:w}}function bm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Rn,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,A=_*4,M=f.clippingState||null;l.value=M,M=h(g,d,A,p);for(let P=0;P!==A;++P)M[P]=e[P];f.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=p+x*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let A=0,M=p;A!==x;++A,M+=4)a.copy(u[A]).applyMatrix4(_,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Em(i){let t=new WeakMap;function e(a,o){return o===bo?a.mapping=Qi:o===Eo&&(a.mapping=Zi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===bo||o===Eo)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Do(l.height/2);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ts=class extends Yr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Gi=4,Vc=[.125,.215,.35,.446,.526,.582],hi=20,ho=new ts,Gc=new wt,uo=null,fo=0,po=0,li=(1+Math.sqrt(5))/2,Oi=1/li,Wc=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,li,Oi),new C(0,li,-Oi),new C(Oi,0,li),new C(-Oi,0,li),new C(li,Oi,0),new C(-li,Oi,0)],es=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(uo,fo,po),t.scissorTest=!1,yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===Zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:cn,format:ln,colorSpace:In,depthBuffer:!1},s=Xc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wm(r)),this._blurMaterial=Tm(r,t,e)}return s}_compileMaterial(t){let e=new Yt(this._lodPlanes[0],t);this._renderer.compile(e,ho)}_sceneToCubeUV(t,e,n,s){let o=new Ie(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Gc),h.toneMapping=Xn,h.autoClear=!1;let p=new We({name:"PMREM.Background",side:Ee,depthWrite:!1,depthTest:!1}),g=new Yt(new hn,p),x=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Gc),x=!0);for(let f=0;f<6;f++){let _=f%3;_===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):_===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let A=this._cubeSize;yr(s,_*A,f>2?A:0,A,A),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Qi||t.mapping===Zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Yt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;yr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ho)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Wc[(s-1)%Wc.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Yt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*hi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):hi;m>hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hi}`);let f=[],_=0;for(let T=0;T<hi;++T){let F=T/x,y=Math.exp(-F*F/2);f.push(y),T===0?_+=y:T<m&&(_+=2*y)}for(let T=0;T<f.length;T++)f[T]=f[T]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:A}=this;d.dTheta.value=g,d.mipInt.value=A-n;let M=this._sizeLods[s],P=3*M*(s>A-Gi?s-A+Gi:0),w=4*(this._cubeSize-M);yr(e,P,w,3*M,2*M),l.setRenderTarget(e),l.render(u,ho)}};function wm(i){let t=[],e=[],n=[],s=i,r=i-Gi+1+Vc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Gi?l=Vc[a-i+Gi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,_=new Float32Array(x*g*p),A=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let w=0;w<p;w++){let T=w%3*2/3-1,F=w>2?0:-1,y=[T,F,0,T+2/3,F,0,T+2/3,F+1,0,T,F,0,T+2/3,F+1,0,T,F+1,0];_.set(y,x*g*w),A.set(d,m*g*w);let E=[w,w,w,w,w,w];M.set(E,f*g*w)}let P=new de;P.setAttribute("position",new Le(_,x)),P.setAttribute("uv",new Le(A,m)),P.setAttribute("faceIndex",new Le(M,f)),t.push(P),s>Gi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Xc(i,t,e){let n=new Be(i,t,e);return n.texture.mapping=pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Tm(i,t,e){let n=new Float32Array(hi),s=new C(0,1,0);return new ge({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yl(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function qc(){return new ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Yc(){return new ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function yl(){return`

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
	`}function Rm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===bo||l===Eo,h=l===Qi||l===Zi;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new es(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new es(i));let d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Cm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function zm(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let m=0,f=x.length;m<f;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let _=p.array;x=p.version;for(let A=0,M=_.length;A<M;A+=3){let P=_[A+0],w=_[A+1],T=_[A+2];d.push(P,w,w,T,T,P)}}else if(g!==void 0){let _=g.array;x=g.version;for(let A=0,M=_.length/3-1;A<M;A+=3){let P=A+0,w=A+1,T=A+2;d.push(P,w,w,T,T,P)}}else return;let m=new(Dh(d)?qr:Xr)(d,1);m.version=x;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Pm(i,t,e,n){let s=n.isWebGL2,r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,g){i.drawElements(r,g,o,p*l),e.update(g,r,1)}function u(p,g,x){if(x===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,o,p*l,x),e.update(g,r,x)}function d(p,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<x;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,x);let f=0;for(let _=0;_<x;_++)f+=g[_];e.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Im(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Lm(i,t){return i[0]-t[0]}function Dm(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Um(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new re,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,x=r.get(h);if(x===void 0||x.count!==g){let L=function(){B.dispose(),r.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let _=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],F=0;_===!0&&(F=1),A===!0&&(F=2),M===!0&&(F=3);let y=h.attributes.position.count*F,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let N=new Float32Array(y*E*4*g),B=new Hr(N,y,E,g);B.type=Wn,B.needsUpdate=!0;let rt=F*4;for(let V=0;V<g;V++){let X=P[V],Z=w[V],$=T[V],Q=y*E*4*V;for(let R=0;R<X.count;R++){let D=R*rt;_===!0&&(a.fromBufferAttribute(X,R),N[Q+D+0]=a.x,N[Q+D+1]=a.y,N[Q+D+2]=a.z,N[Q+D+3]=0),A===!0&&(a.fromBufferAttribute(Z,R),N[Q+D+4]=a.x,N[Q+D+5]=a.y,N[Q+D+6]=a.z,N[Q+D+7]=0),M===!0&&(a.fromBufferAttribute($,R),N[Q+D+8]=a.x,N[Q+D+9]=a.y,N[Q+D+10]=a.z,N[Q+D+11]=$.itemSize===4?a.w:1)}}x={count:g,texture:B,size:new tt(y,E)},r.set(h,x),h.addEventListener("dispose",L)}let m=0;for(let _=0;_<d.length;_++)m+=d[_];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",f),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let p=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let A=0;A<p;A++)g[A]=[A,0];n[h.id]=g}for(let A=0;A<p;A++){let M=g[A];M[0]=A,M[1]=d[A]}g.sort(Dm);for(let A=0;A<8;A++)A<p&&g[A][1]?(o[A][0]=g[A][0],o[A][1]=g[A][1]):(o[A][0]=Number.MAX_SAFE_INTEGER,o[A][1]=0);o.sort(Lm);let x=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let A=0;A<8;A++){let M=o[A],P=M[0],w=M[1];P!==Number.MAX_SAFE_INTEGER&&w?(x&&h.getAttribute("morphTarget"+A)!==x[P]&&h.setAttribute("morphTarget"+A,x[P]),m&&h.getAttribute("morphNormal"+A)!==m[P]&&h.setAttribute("morphNormal"+A,m[P]),s[A]=w,f+=w):(x&&h.hasAttribute("morphTarget"+A)===!0&&h.deleteAttribute("morphTarget"+A),m&&h.hasAttribute("morphNormal"+A)===!0&&h.deleteAttribute("morphNormal"+A),s[A]=0)}let _=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",_),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Nm(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Qr=class extends Ze{constructor(t,e,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:fi,h!==fi&&h!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===fi&&(n=Gn),n===void 0&&h===Ki&&(n=di),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Oe,this.minFilter=l!==void 0?l:Oe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Oh=new Ze,Bh=new Qr(1,1);Bh.compareFunction=Lh;var kh=new Hr,Hh=new Io,Vh=new Jr,Jc=[],Qc=[],Zc=new Float32Array(16),Kc=new Float32Array(9),jc=new Float32Array(4);function cs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Jc[s];if(r===void 0&&(r=new Float32Array(s),Jc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ga(i,t){let e=Qc[t];e===void 0&&(e=new Int32Array(t),Qc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Fm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function Bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function Hm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(xe(e,n))return;jc.set(n),i.uniformMatrix2fv(this.addr,!1,jc),_e(e,n)}}function Vm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(xe(e,n))return;Kc.set(n),i.uniformMatrix3fv(this.addr,!1,Kc),_e(e,n)}}function Gm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(xe(e,n))return;Zc.set(n),i.uniformMatrix4fv(this.addr,!1,Zc),_e(e,n)}}function Wm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function Ym(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function Jm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function Zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function Km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function jm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Bh:Oh;e.setTexture2D(t||r,s)}function $m(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Hh,s)}function t0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Vh,s)}function e0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||kh,s)}function n0(i){switch(i){case 5126:return Fm;case 35664:return Om;case 35665:return Bm;case 35666:return km;case 35674:return Hm;case 35675:return Vm;case 35676:return Gm;case 5124:case 35670:return Wm;case 35667:case 35671:return Xm;case 35668:case 35672:return qm;case 35669:case 35673:return Ym;case 5125:return Jm;case 36294:return Qm;case 36295:return Zm;case 36296:return Km;case 35678:case 36198:case 36298:case 36306:case 35682:return jm;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return t0;case 36289:case 36303:case 36311:case 36292:return e0}}function i0(i,t){i.uniform1fv(this.addr,t)}function s0(i,t){let e=cs(t,this.size,2);i.uniform2fv(this.addr,e)}function r0(i,t){let e=cs(t,this.size,3);i.uniform3fv(this.addr,e)}function a0(i,t){let e=cs(t,this.size,4);i.uniform4fv(this.addr,e)}function o0(i,t){let e=cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function l0(i,t){let e=cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function c0(i,t){let e=cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function h0(i,t){i.uniform1iv(this.addr,t)}function u0(i,t){i.uniform2iv(this.addr,t)}function d0(i,t){i.uniform3iv(this.addr,t)}function f0(i,t){i.uniform4iv(this.addr,t)}function p0(i,t){i.uniform1uiv(this.addr,t)}function m0(i,t){i.uniform2uiv(this.addr,t)}function g0(i,t){i.uniform3uiv(this.addr,t)}function A0(i,t){i.uniform4uiv(this.addr,t)}function x0(i,t,e){let n=this.cache,s=t.length,r=ga(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Oh,r[a])}function _0(i,t,e){let n=this.cache,s=t.length,r=ga(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Hh,r[a])}function v0(i,t,e){let n=this.cache,s=t.length,r=ga(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Vh,r[a])}function y0(i,t,e){let n=this.cache,s=t.length,r=ga(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||kh,r[a])}function M0(i){switch(i){case 5126:return i0;case 35664:return s0;case 35665:return r0;case 35666:return a0;case 35674:return o0;case 35675:return l0;case 35676:return c0;case 5124:case 35670:return h0;case 35667:case 35671:return u0;case 35668:case 35672:return d0;case 35669:case 35673:return f0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return A0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return _0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return y0}}var Uo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=n0(e.type)}},No=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=M0(e.type)}},Fo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},mo=/(\w+)(\])?(\[|\.)?/g;function $c(i,t){i.seq.push(t),i.map[t.id]=t}function S0(i,t,e){let n=i.name,s=n.length;for(mo.lastIndex=0;;){let r=mo.exec(n),a=mo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){$c(e,c===void 0?new Uo(o,i,t):new No(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Fo(o),$c(e,u)),e=u}}}var Ji=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);S0(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function th(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var b0=37297,E0=0;function w0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function T0(i){let t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(i),n;switch(t===e?n="":t===Nr&&e===Ur?n="LinearDisplayP3ToLinearSRGB":t===Ur&&e===Nr&&(n="LinearSRGBToLinearDisplayP3"),i){case In:case ma:return[n,"LinearTransferOETF"];case he:case vl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function eh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+w0(i.getShaderSource(t),a)}else return s}function R0(i,t){let e=T0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function C0(i,t){let e;switch(t){case ml:e="Linear";break;case gl:e="Reinhard";break;case Al:e="OptimizedCineon";break;case Ws:e="ACESFilmic";break;case xl:e="AgX";break;case ju:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function z0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Wi).join(`
`)}function P0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Wi).join(`
`)}function I0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function L0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Wi(i){return i!==""}function nh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ih(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var D0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oo(i){return i.replace(D0,N0)}var U0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function N0(i,t){let e=Bt[t];if(e===void 0){let n=U0.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Oo(e)}var F0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sh(i){return i.replace(F0,O0)}function O0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rh(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function B0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===pl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Tn&&(t="SHADOWMAP_TYPE_VSM"),t}function k0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qi:case Zi:t="ENVMAP_TYPE_CUBE";break;case pa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function H0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zi:t="ENVMAP_MODE_REFRACTION";break}return t}function V0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Mh:t="ENVMAP_BLENDING_MULTIPLY";break;case Zu:t="ENVMAP_BLENDING_MIX";break;case Ku:t="ENVMAP_BLENDING_ADD";break}return t}function G0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function W0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=B0(e),c=k0(e),h=H0(e),u=V0(e),d=G0(e),p=e.isWebGL2?"":z0(e),g=P0(e),x=I0(r),m=s.createProgram(),f,_,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Wi).join(`
`),f.length>0&&(f+=`
`),_=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Wi).join(`
`),_.length>0&&(_+=`
`)):(f=[rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wi).join(`
`),_=[p,rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Xn?C0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,R0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wi).join(`
`)),a=Oo(a),a=nh(a,e),a=ih(a,e),o=Oo(o),o=nh(o,e),o=ih(o,e),a=sh(a),o=sh(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let M=A+f+a,P=A+_+o,w=th(s,s.VERTEX_SHADER,M),T=th(s,s.FRAGMENT_SHADER,P);s.attachShader(m,w),s.attachShader(m,T),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function F(B){if(i.debug.checkShaderErrors){let rt=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(w).trim(),V=s.getShaderInfoLog(T).trim(),X=!0,Z=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,w,T);else{let $=eh(s,w,"vertex"),Q=eh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+rt+`
`+$+`
`+Q)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(L===""||V==="")&&(Z=!1);Z&&(B.diagnostics={runnable:X,programLog:rt,vertexShader:{log:L,prefix:f},fragmentShader:{log:V,prefix:_}})}s.deleteShader(w),s.deleteShader(T),y=new Ji(s,m),E=L0(s,m)}let y;this.getUniforms=function(){return y===void 0&&F(this),y};let E;this.getAttributes=function(){return E===void 0&&F(this),E};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,b0)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=E0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=T,this}var X0=0,Bo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ko(t),e.set(t,n)),n}},ko=class{constructor(t){this.id=X0++,this.code=t,this.usedTimes=0}};function q0(i,t,e,n,s,r,a){let o=new Wr,l=new Bo,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function m(y,E,N,B,rt){let L=B.fog,V=rt.geometry,X=y.isMeshStandardMaterial?B.environment:null,Z=(y.isMeshStandardMaterial?e:t).get(y.envMap||X),$=Z&&Z.mapping===pa?Z.image.height:null,Q=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let R=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,D=R!==void 0?R.length:0,O=0;V.morphAttributes.position!==void 0&&(O=1),V.morphAttributes.normal!==void 0&&(O=2),V.morphAttributes.color!==void 0&&(O=3);let I,G,et,it;if(Q){let De=mn[Q];I=De.vertexShader,G=De.fragmentShader}else I=y.vertexShader,G=y.fragmentShader,l.update(y),et=l.getVertexShaderID(y),it=l.getFragmentShaderID(y);let nt=i.getRenderTarget(),_t=rt.isInstancedMesh===!0,Mt=rt.isBatchedMesh===!0,At=!!y.map,Rt=!!y.matcap,z=!!Z,ht=!!y.aoMap,K=!!y.lightMap,ct=!!y.bumpMap,j=!!y.normalMap,Et=!!y.displacementMap,gt=!!y.emissiveMap,S=!!y.metalnessMap,v=!!y.roughnessMap,H=y.anisotropy>0,lt=y.clearcoat>0,at=y.iridescence>0,st=y.sheen>0,St=y.transmission>0,ft=H&&!!y.anisotropyMap,vt=lt&&!!y.clearcoatMap,Ct=lt&&!!y.clearcoatNormalMap,Nt=lt&&!!y.clearcoatRoughnessMap,ot=at&&!!y.iridescenceMap,Jt=at&&!!y.iridescenceThicknessMap,Xt=st&&!!y.sheenColorMap,Dt=st&&!!y.sheenRoughnessMap,Tt=!!y.specularMap,yt=!!y.specularColorMap,Ot=!!y.specularIntensityMap,Zt=St&&!!y.transmissionMap,le=St&&!!y.thicknessMap,Ht=!!y.gradientMap,ut=!!y.alphaMap,U=y.alphaTest>0,pt=!!y.alphaHash,mt=!!y.extensions,It=!!V.attributes.uv1,zt=!!V.attributes.uv2,$t=!!V.attributes.uv3,te=Xn;return y.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(te=i.toneMapping),{isWebGL2:h,shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:I,fragmentShader:G,defines:y.defines,customVertexShaderID:et,customFragmentShaderID:it,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Mt,instancing:_t,instancingColor:_t&&rt.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:In,map:At,matcap:Rt,envMap:z,envMapMode:z&&Z.mapping,envMapCubeUVHeight:$,aoMap:ht,lightMap:K,bumpMap:ct,normalMap:j,displacementMap:d&&Et,emissiveMap:gt,normalMapObjectSpace:j&&y.normalMapType===hd,normalMapTangentSpace:j&&y.normalMapType===Ih,metalnessMap:S,roughnessMap:v,anisotropy:H,anisotropyMap:ft,clearcoat:lt,clearcoatMap:vt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Nt,iridescence:at,iridescenceMap:ot,iridescenceThicknessMap:Jt,sheen:st,sheenColorMap:Xt,sheenRoughnessMap:Dt,specularMap:Tt,specularColorMap:yt,specularIntensityMap:Ot,transmission:St,transmissionMap:Zt,thicknessMap:le,gradientMap:Ht,opaque:y.transparent===!1&&y.blending===qi,alphaMap:ut,alphaTest:U,alphaHash:pt,combine:y.combine,mapUv:At&&x(y.map.channel),aoMapUv:ht&&x(y.aoMap.channel),lightMapUv:K&&x(y.lightMap.channel),bumpMapUv:ct&&x(y.bumpMap.channel),normalMapUv:j&&x(y.normalMap.channel),displacementMapUv:Et&&x(y.displacementMap.channel),emissiveMapUv:gt&&x(y.emissiveMap.channel),metalnessMapUv:S&&x(y.metalnessMap.channel),roughnessMapUv:v&&x(y.roughnessMap.channel),anisotropyMapUv:ft&&x(y.anisotropyMap.channel),clearcoatMapUv:vt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&x(y.sheenRoughnessMap.channel),specularMapUv:Tt&&x(y.specularMap.channel),specularColorMapUv:yt&&x(y.specularColorMap.channel),specularIntensityMapUv:Ot&&x(y.specularIntensityMap.channel),transmissionMapUv:Zt&&x(y.transmissionMap.channel),thicknessMapUv:le&&x(y.thicknessMap.channel),alphaMapUv:ut&&x(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(j||H),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:It,vertexUv2s:zt,vertexUv3s:$t,pointsUvs:rt.isPoints===!0&&!!V.attributes.uv&&(At||ut),fog:!!L,useFog:y.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:rt.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:O,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:te,useLegacyLights:i._useLegacyLights,decodeVideoTexture:At&&y.map.isVideoTexture===!0&&Qt.getTransfer(y.map.colorSpace)===Kt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ge,flipSided:y.side===Ee,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:mt&&y.extensions.derivatives===!0,extensionFragDepth:mt&&y.extensions.fragDepth===!0,extensionDrawBuffers:mt&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:mt&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:mt&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let N in y.defines)E.push(N),E.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(_(E,y),A(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function _(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function A(y,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function M(y){let E=g[y.type],N;if(E){let B=mn[E];N=$n.clone(B.uniforms)}else N=y.uniforms;return N}function P(y,E){let N;for(let B=0,rt=c.length;B<rt;B++){let L=c[B];if(L.cacheKey===E){N=L,++N.usedTimes;break}}return N===void 0&&(N=new W0(i,E,y,r),c.push(N)),N}function w(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),y.destroy()}}function T(y){l.remove(y)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:P,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:F}}function Y0(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function J0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ah(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function oh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,g,x,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),t++,f}function o(u,d,p,g,x,m){let f=a(u,d,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,x,m){let f=a(u,d,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||J0),n.length>1&&n.sort(d||ah),s.length>1&&s.sort(d||ah)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Q0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new oh,i.set(n,[a])):s>=r.length?(a=new oh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Z0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new wt};break;case"SpotLight":e={position:new C,direction:new C,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function K0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var j0=0;function $0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tg(i,t){let e=new Z0,n=K0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new C);let r=new C,a=new ue,o=new ue;function l(h,u){let d=0,p=0,g=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let x=0,m=0,f=0,_=0,A=0,M=0,P=0,w=0,T=0,F=0,y=0;h.sort($0);let E=u===!0?Math.PI:1;for(let B=0,rt=h.length;B<rt;B++){let L=h[B],V=L.color,X=L.intensity,Z=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=V.r*X*E,p+=V.g*X*E,g+=V.b*X*E;else if(L.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(L.sh.coefficients[Q],X);y++}else if(L.isDirectionalLight){let Q=e.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){let R=L.shadow,D=n.get(L);D.shadowBias=R.bias,D.shadowNormalBias=R.normalBias,D.shadowRadius=R.radius,D.shadowMapSize=R.mapSize,s.directionalShadow[x]=D,s.directionalShadowMap[x]=$,s.directionalShadowMatrix[x]=L.shadow.matrix,M++}s.directional[x]=Q,x++}else if(L.isSpotLight){let Q=e.get(L);Q.position.setFromMatrixPosition(L.matrixWorld),Q.color.copy(V).multiplyScalar(X*E),Q.distance=Z,Q.coneCos=Math.cos(L.angle),Q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Q.decay=L.decay,s.spot[f]=Q;let R=L.shadow;if(L.map&&(s.spotLightMap[T]=L.map,T++,R.updateMatrices(L),L.castShadow&&F++),s.spotLightMatrix[f]=R.matrix,L.castShadow){let D=n.get(L);D.shadowBias=R.bias,D.shadowNormalBias=R.normalBias,D.shadowRadius=R.radius,D.shadowMapSize=R.mapSize,s.spotShadow[f]=D,s.spotShadowMap[f]=$,w++}f++}else if(L.isRectAreaLight){let Q=e.get(L);Q.color.copy(V).multiplyScalar(X),Q.halfWidth.set(L.width*.5,0,0),Q.halfHeight.set(0,L.height*.5,0),s.rectArea[_]=Q,_++}else if(L.isPointLight){let Q=e.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity*E),Q.distance=L.distance,Q.decay=L.decay,L.castShadow){let R=L.shadow,D=n.get(L);D.shadowBias=R.bias,D.shadowNormalBias=R.normalBias,D.shadowRadius=R.radius,D.shadowMapSize=R.mapSize,D.shadowCameraNear=R.camera.near,D.shadowCameraFar=R.camera.far,s.pointShadow[m]=D,s.pointShadowMap[m]=$,s.pointShadowMatrix[m]=L.shadow.matrix,P++}s.point[m]=Q,m++}else if(L.isHemisphereLight){let Q=e.get(L);Q.skyColor.copy(L.color).multiplyScalar(X*E),Q.groundColor.copy(L.groundColor).multiplyScalar(X*E),s.hemi[A]=Q,A++}}_>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_FLOAT_1,s.rectAreaLTC2=dt.LTC_FLOAT_2):(s.rectAreaLTC1=dt.LTC_HALF_1,s.rectAreaLTC2=dt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_FLOAT_1,s.rectAreaLTC2=dt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_HALF_1,s.rectAreaLTC2=dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;let N=s.hash;(N.directionalLength!==x||N.pointLength!==m||N.spotLength!==f||N.rectAreaLength!==_||N.hemiLength!==A||N.numDirectionalShadows!==M||N.numPointShadows!==P||N.numSpotShadows!==w||N.numSpotMaps!==T||N.numLightProbes!==y)&&(s.directional.length=x,s.spot.length=f,s.rectArea.length=_,s.point.length=m,s.hemi.length=A,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=w+T-F,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=y,N.directionalLength=x,N.pointLength=m,N.spotLength=f,N.rectAreaLength=_,N.hemiLength=A,N.numDirectionalShadows=M,N.numPointShadows=P,N.numSpotShadows=w,N.numSpotMaps=T,N.numLightProbes=y,s.version=j0++)}function c(h,u){let d=0,p=0,g=0,x=0,m=0,f=u.matrixWorldInverse;for(let _=0,A=h.length;_<A;_++){let M=h[_];if(M.isDirectionalLight){let P=s.directional[d];P.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),d++}else if(M.isSpotLight){let P=s.spot[g];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),g++}else if(M.isRectAreaLight){let P=s.rectArea[x];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(f),o.identity(),a.copy(M.matrixWorld),a.premultiply(f),o.extractRotation(a),P.halfWidth.set(M.width*.5,0,0),P.halfHeight.set(0,M.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let P=s.point[p];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){let P=s.hemi[m];P.direction.setFromMatrixPosition(M.matrixWorld),P.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function lh(i,t){let e=new tg(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function eg(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),l;return o===void 0?(l=new lh(i,t),e.set(r,[l])):a>=o.length?(l=new lh(i,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var Ho=class extends Dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Vo=class extends Dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ig=`uniform sampler2D shadow_pass;
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
}`;function sg(i,t,e){let n=new Ps,s=new tt,r=new tt,a=new re,o=new Ho({depthPacking:cd}),l=new Vo,c={},h=e.maxTextureSize,u={[Jn]:Ee,[Ee]:Jn,[Ge]:Ge},d=new ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:ng,fragmentShader:ig}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new de;g.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Yt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yh;let f=this.type;this.render=function(w,T,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let y=i.getRenderTarget(),E=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),B=i.state;B.setBlending(gn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let rt=f!==Tn&&this.type===Tn,L=f===Tn&&this.type!==Tn;for(let V=0,X=w.length;V<X;V++){let Z=w[V],$=Z.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let Q=$.getFrameExtents();if(s.multiply(Q),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,$.mapSize.y=r.y)),$.map===null||rt===!0||L===!0){let D=this.type!==Tn?{minFilter:Oe,magFilter:Oe}:{};$.map!==null&&$.map.dispose(),$.map=new Be(s.x,s.y,D),$.map.texture.name=Z.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let R=$.getViewportCount();for(let D=0;D<R;D++){let O=$.getViewport(D);a.set(r.x*O.x,r.y*O.y,r.x*O.z,r.y*O.w),B.viewport(a),$.updateMatrices(Z,D),n=$.getFrustum(),M(T,F,$.camera,Z,this.type)}$.isPointLightShadow!==!0&&this.type===Tn&&_($,F),$.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(y,E,N)};function _(w,T){let F=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Be(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,F,d,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,F,p,x,null)}function A(w,T,F,y){let E=null,N=F.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)E=N;else if(E=F.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let B=E.uuid,rt=T.uuid,L=c[B];L===void 0&&(L={},c[B]=L);let V=L[rt];V===void 0&&(V=E.clone(),L[rt]=V,T.addEventListener("dispose",P)),E=V}if(E.visible=T.visible,E.wireframe=T.wireframe,y===Tn?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:u[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,F.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let B=i.properties.get(E);B.light=F}return E}function M(w,T,F,y,E){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Tn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,w.matrixWorld);let rt=t.update(w),L=w.material;if(Array.isArray(L)){let V=rt.groups;for(let X=0,Z=V.length;X<Z;X++){let $=V[X],Q=L[$.materialIndex];if(Q&&Q.visible){let R=A(w,Q,y,E);w.onBeforeShadow(i,w,T,F,rt,R,$),i.renderBufferDirect(F,null,rt,R,w,$),w.onAfterShadow(i,w,T,F,rt,R,$)}}}else if(L.visible){let V=A(w,L,y,E);w.onBeforeShadow(i,w,T,F,rt,V,null),i.renderBufferDirect(F,null,rt,V,w,null),w.onAfterShadow(i,w,T,F,rt,V,null)}}let B=w.children;for(let rt=0,L=B.length;rt<L;rt++)M(B[rt],T,F,y,E)}function P(w){w.target.removeEventListener("dispose",P);for(let F in c){let y=c[F],E=w.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}function rg(i,t,e){let n=e.isWebGL2;function s(){let U=!1,pt=new re,mt=null,It=new re(0,0,0,0);return{setMask:function(zt){mt!==zt&&!U&&(i.colorMask(zt,zt,zt,zt),mt=zt)},setLocked:function(zt){U=zt},setClear:function(zt,$t,te,ve,De){De===!0&&(zt*=ve,$t*=ve,te*=ve),pt.set(zt,$t,te,ve),It.equals(pt)===!1&&(i.clearColor(zt,$t,te,ve),It.copy(pt))},reset:function(){U=!1,mt=null,It.set(-1,0,0,0)}}}function r(){let U=!1,pt=null,mt=null,It=null;return{setTest:function(zt){zt?Mt(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(zt){pt!==zt&&!U&&(i.depthMask(zt),pt=zt)},setFunc:function(zt){if(mt!==zt){switch(zt){case Gu:i.depthFunc(i.NEVER);break;case Wu:i.depthFunc(i.ALWAYS);break;case Xu:i.depthFunc(i.LESS);break;case Pr:i.depthFunc(i.LEQUAL);break;case qu:i.depthFunc(i.EQUAL);break;case Yu:i.depthFunc(i.GEQUAL);break;case Ju:i.depthFunc(i.GREATER);break;case Qu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=zt}},setLocked:function(zt){U=zt},setClear:function(zt){It!==zt&&(i.clearDepth(zt),It=zt)},reset:function(){U=!1,pt=null,mt=null,It=null}}}function a(){let U=!1,pt=null,mt=null,It=null,zt=null,$t=null,te=null,ve=null,De=null;return{setTest:function(ee){U||(ee?Mt(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(ee){pt!==ee&&!U&&(i.stencilMask(ee),pt=ee)},setFunc:function(ee,Ue,pn){(mt!==ee||It!==Ue||zt!==pn)&&(i.stencilFunc(ee,Ue,pn),mt=ee,It=Ue,zt=pn)},setOp:function(ee,Ue,pn){($t!==ee||te!==Ue||ve!==pn)&&(i.stencilOp(ee,Ue,pn),$t=ee,te=Ue,ve=pn)},setLocked:function(ee){U=ee},setClear:function(ee){De!==ee&&(i.clearStencil(ee),De=ee)},reset:function(){U=!1,pt=null,mt=null,It=null,zt=null,$t=null,te=null,ve=null,De=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},p={},g=new WeakMap,x=[],m=null,f=!1,_=null,A=null,M=null,P=null,w=null,T=null,F=null,y=new wt(0,0,0),E=0,N=!1,B=null,rt=null,L=null,V=null,X=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,Q=0,R=i.getParameter(i.VERSION);R.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(R)[1]),$=Q>=1):R.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),$=Q>=2);let D=null,O={},I=i.getParameter(i.SCISSOR_BOX),G=i.getParameter(i.VIEWPORT),et=new re().fromArray(I),it=new re().fromArray(G);function nt(U,pt,mt,It){let zt=new Uint8Array(4),$t=i.createTexture();i.bindTexture(U,$t),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let te=0;te<mt;te++)n&&(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)?i.texImage3D(pt,0,i.RGBA,1,1,It,0,i.RGBA,i.UNSIGNED_BYTE,zt):i.texImage2D(pt+te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,zt);return $t}let _t={};_t[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(_t[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Mt(i.DEPTH_TEST),l.setFunc(Pr),gt(!1),S(Gl),Mt(i.CULL_FACE),j(gn);function Mt(U){d[U]!==!0&&(i.enable(U),d[U]=!0)}function At(U){d[U]!==!1&&(i.disable(U),d[U]=!1)}function Rt(U,pt){return p[U]!==pt?(i.bindFramebuffer(U,pt),p[U]=pt,n&&(U===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=pt),U===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=pt)),!0):!1}function z(U,pt){let mt=x,It=!1;if(U)if(mt=g.get(pt),mt===void 0&&(mt=[],g.set(pt,mt)),U.isWebGLMultipleRenderTargets){let zt=U.texture;if(mt.length!==zt.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let $t=0,te=zt.length;$t<te;$t++)mt[$t]=i.COLOR_ATTACHMENT0+$t;mt.length=zt.length,It=!0}}else mt[0]!==i.COLOR_ATTACHMENT0&&(mt[0]=i.COLOR_ATTACHMENT0,It=!0);else mt[0]!==i.BACK&&(mt[0]=i.BACK,It=!0);It&&(e.isWebGL2?i.drawBuffers(mt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(mt))}function ht(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let K={[ci]:i.FUNC_ADD,[Ru]:i.FUNC_SUBTRACT,[Cu]:i.FUNC_REVERSE_SUBTRACT};if(n)K[ql]=i.MIN,K[Yl]=i.MAX;else{let U=t.get("EXT_blend_minmax");U!==null&&(K[ql]=U.MIN_EXT,K[Yl]=U.MAX_EXT)}let ct={[zu]:i.ZERO,[Pu]:i.ONE,[Iu]:i.SRC_COLOR,[Mo]:i.SRC_ALPHA,[Ou]:i.SRC_ALPHA_SATURATE,[Nu]:i.DST_COLOR,[Du]:i.DST_ALPHA,[Lu]:i.ONE_MINUS_SRC_COLOR,[So]:i.ONE_MINUS_SRC_ALPHA,[Fu]:i.ONE_MINUS_DST_COLOR,[Uu]:i.ONE_MINUS_DST_ALPHA,[Bu]:i.CONSTANT_COLOR,[ku]:i.ONE_MINUS_CONSTANT_COLOR,[Hu]:i.CONSTANT_ALPHA,[Vu]:i.ONE_MINUS_CONSTANT_ALPHA};function j(U,pt,mt,It,zt,$t,te,ve,De,ee){if(U===gn){f===!0&&(At(i.BLEND),f=!1);return}if(f===!1&&(Mt(i.BLEND),f=!0),U!==Tu){if(U!==_||ee!==N){if((A!==ci||w!==ci)&&(i.blendEquation(i.FUNC_ADD),A=ci,w=ci),ee)switch(U){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qn:i.blendFunc(i.ONE,i.ONE);break;case Wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,P=null,T=null,F=null,y.set(0,0,0),E=0,_=U,N=ee}return}zt=zt||pt,$t=$t||mt,te=te||It,(pt!==A||zt!==w)&&(i.blendEquationSeparate(K[pt],K[zt]),A=pt,w=zt),(mt!==M||It!==P||$t!==T||te!==F)&&(i.blendFuncSeparate(ct[mt],ct[It],ct[$t],ct[te]),M=mt,P=It,T=$t,F=te),(ve.equals(y)===!1||De!==E)&&(i.blendColor(ve.r,ve.g,ve.b,De),y.copy(ve),E=De),_=U,N=!1}function Et(U,pt){U.side===Ge?At(i.CULL_FACE):Mt(i.CULL_FACE);let mt=U.side===Ee;pt&&(mt=!mt),gt(mt),U.blending===qi&&U.transparent===!1?j(gn):j(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);let It=U.stencilWrite;c.setTest(It),It&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),H(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Mt(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(U){B!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),B=U)}function S(U){U!==Eu?(Mt(i.CULL_FACE),U!==rt&&(U===Gl?i.cullFace(i.BACK):U===wu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),rt=U}function v(U){U!==L&&($&&i.lineWidth(U),L=U)}function H(U,pt,mt){U?(Mt(i.POLYGON_OFFSET_FILL),(V!==pt||X!==mt)&&(i.polygonOffset(pt,mt),V=pt,X=mt)):At(i.POLYGON_OFFSET_FILL)}function lt(U){U?Mt(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function at(U){U===void 0&&(U=i.TEXTURE0+Z-1),D!==U&&(i.activeTexture(U),D=U)}function st(U,pt,mt){mt===void 0&&(D===null?mt=i.TEXTURE0+Z-1:mt=D);let It=O[mt];It===void 0&&(It={type:void 0,texture:void 0},O[mt]=It),(It.type!==U||It.texture!==pt)&&(D!==mt&&(i.activeTexture(mt),D=mt),i.bindTexture(U,pt||_t[U]),It.type=U,It.texture=pt)}function St(){let U=O[D];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ft(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Nt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Jt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ot(U){et.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),et.copy(U))}function Zt(U){it.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),it.copy(U))}function le(U,pt){let mt=u.get(pt);mt===void 0&&(mt=new WeakMap,u.set(pt,mt));let It=mt.get(U);It===void 0&&(It=i.getUniformBlockIndex(pt,U.name),mt.set(U,It))}function Ht(U,pt){let It=u.get(pt).get(U);h.get(pt)!==It&&(i.uniformBlockBinding(pt,It,U.__bindingPointIndex),h.set(pt,It))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},D=null,O={},p={},g=new WeakMap,x=[],m=null,f=!1,_=null,A=null,M=null,P=null,w=null,T=null,F=null,y=new wt(0,0,0),E=0,N=!1,B=null,rt=null,L=null,V=null,X=null,et.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Mt,disable:At,bindFramebuffer:Rt,drawBuffers:z,useProgram:ht,setBlending:j,setMaterial:Et,setFlipSided:gt,setCullFace:S,setLineWidth:v,setPolygonOffset:H,setScissorTest:lt,activeTexture:at,bindTexture:st,unbindTexture:St,compressedTexImage2D:ft,compressedTexImage3D:vt,texImage2D:Tt,texImage3D:yt,updateUBOMapping:le,uniformBlockBinding:Ht,texStorage2D:Xt,texStorage3D:Dt,texSubImage2D:Ct,texSubImage3D:Nt,compressedTexSubImage2D:ot,compressedTexSubImage3D:Jt,scissor:Ot,viewport:Zt,reset:ut}}function ag(i,t,e,n,s,r,a){let o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,v){return p?new OffscreenCanvas(S,v):Or("canvas")}function x(S,v,H,lt){let at=1;if((S.width>lt||S.height>lt)&&(at=lt/Math.max(S.width,S.height)),at<1||v===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let st=v?zo:Math.floor,St=st(at*S.width),ft=st(at*S.height);u===void 0&&(u=g(St,ft));let vt=H?g(St,ft):u;return vt.width=St,vt.height=ft,vt.getContext("2d").drawImage(S,0,0,St,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+St+"x"+ft+")."),vt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return Ec(S.width)&&Ec(S.height)}function f(S){return o?!1:S.wrapS!==on||S.wrapT!==on||S.minFilter!==Oe&&S.minFilter!==Je}function _(S,v){return S.generateMipmaps&&v&&S.minFilter!==Oe&&S.minFilter!==Je}function A(S){i.generateMipmap(S)}function M(S,v,H,lt,at=!1){if(o===!1)return v;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let st=v;if(v===i.RED&&(H===i.FLOAT&&(st=i.R32F),H===i.HALF_FLOAT&&(st=i.R16F),H===i.UNSIGNED_BYTE&&(st=i.R8)),v===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(st=i.R8UI),H===i.UNSIGNED_SHORT&&(st=i.R16UI),H===i.UNSIGNED_INT&&(st=i.R32UI),H===i.BYTE&&(st=i.R8I),H===i.SHORT&&(st=i.R16I),H===i.INT&&(st=i.R32I)),v===i.RG&&(H===i.FLOAT&&(st=i.RG32F),H===i.HALF_FLOAT&&(st=i.RG16F),H===i.UNSIGNED_BYTE&&(st=i.RG8)),v===i.RGBA){let St=at?Dr:Qt.getTransfer(lt);H===i.FLOAT&&(st=i.RGBA32F),H===i.HALF_FLOAT&&(st=i.RGBA16F),H===i.UNSIGNED_BYTE&&(st=St===Kt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function P(S,v,H){return _(S,H)===!0||S.isFramebufferTexture&&S.minFilter!==Oe&&S.minFilter!==Je?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function w(S){return S===Oe||S===Jl||S===Oa?i.NEAREST:i.LINEAR}function T(S){let v=S.target;v.removeEventListener("dispose",T),y(v),v.isVideoTexture&&h.delete(v)}function F(S){let v=S.target;v.removeEventListener("dispose",F),N(v)}function y(S){let v=n.get(S);if(v.__webglInit===void 0)return;let H=S.source,lt=d.get(H);if(lt){let at=lt[v.__cacheKey];at.usedTimes--,at.usedTimes===0&&E(S),Object.keys(lt).length===0&&d.delete(H)}n.remove(S)}function E(S){let v=n.get(S);i.deleteTexture(v.__webglTexture);let H=S.source,lt=d.get(H);delete lt[v.__cacheKey],a.memory.textures--}function N(S){let v=S.texture,H=n.get(S),lt=n.get(v);if(lt.__webglTexture!==void 0&&(i.deleteTexture(lt.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(H.__webglFramebuffer[at]))for(let st=0;st<H.__webglFramebuffer[at].length;st++)i.deleteFramebuffer(H.__webglFramebuffer[at][st]);else i.deleteFramebuffer(H.__webglFramebuffer[at]);H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[at])}else{if(Array.isArray(H.__webglFramebuffer))for(let at=0;at<H.__webglFramebuffer.length;at++)i.deleteFramebuffer(H.__webglFramebuffer[at]);else i.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let at=0;at<H.__webglColorRenderbuffer.length;at++)H.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[at]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let at=0,st=v.length;at<st;at++){let St=n.get(v[at]);St.__webglTexture&&(i.deleteTexture(St.__webglTexture),a.memory.textures--),n.remove(v[at])}n.remove(v),n.remove(S)}let B=0;function rt(){B=0}function L(){let S=B;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),B+=1,S}function V(S){let v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function X(S,v){let H=n.get(S);if(S.isVideoTexture&&Et(S),S.isRenderTargetTexture===!1&&S.version>0&&H.__version!==S.version){let lt=S.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(H,S,v);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+v)}function Z(S,v){let H=n.get(S);if(S.version>0&&H.__version!==S.version){et(H,S,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+v)}function $(S,v){let H=n.get(S);if(S.version>0&&H.__version!==S.version){et(H,S,v);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+v)}function Q(S,v){let H=n.get(S);if(S.version>0&&H.__version!==S.version){it(H,S,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+v)}let R={[Cs]:i.REPEAT,[on]:i.CLAMP_TO_EDGE,[wo]:i.MIRRORED_REPEAT},D={[Oe]:i.NEAREST,[Jl]:i.NEAREST_MIPMAP_NEAREST,[Oa]:i.NEAREST_MIPMAP_LINEAR,[Je]:i.LINEAR,[$u]:i.LINEAR_MIPMAP_NEAREST,[zs]:i.LINEAR_MIPMAP_LINEAR},O={[ud]:i.NEVER,[Ad]:i.ALWAYS,[dd]:i.LESS,[Lh]:i.LEQUAL,[fd]:i.EQUAL,[gd]:i.GEQUAL,[pd]:i.GREATER,[md]:i.NOTEQUAL};function I(S,v,H){if(H?(i.texParameteri(S,i.TEXTURE_WRAP_S,R[v.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,R[v.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,R[v.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,D[v.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,D[v.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==on||v.wrapT!==on)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,w(v.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,w(v.minFilter)),v.minFilter!==Oe&&v.minFilter!==Je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,O[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let lt=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===Oe||v.minFilter!==Oa&&v.minFilter!==zs||v.type===Wn&&t.has("OES_texture_float_linear")===!1||o===!1&&v.type===cn&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(S,lt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function G(S,v){let H=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",T));let lt=v.source,at=d.get(lt);at===void 0&&(at={},d.set(lt,at));let st=V(v);if(st!==S.__cacheKey){at[st]===void 0&&(at[st]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),at[st].usedTimes++;let St=at[S.__cacheKey];St!==void 0&&(at[S.__cacheKey].usedTimes--,St.usedTimes===0&&E(v)),S.__cacheKey=st,S.__webglTexture=at[st].texture}return H}function et(S,v,H){let lt=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(lt=i.TEXTURE_3D);let at=G(S,v),st=v.source;e.bindTexture(lt,S.__webglTexture,i.TEXTURE0+H);let St=n.get(st);if(st.version!==St.__version||at===!0){e.activeTexture(i.TEXTURE0+H);let ft=Qt.getPrimaries(Qt.workingColorSpace),vt=v.colorSpace===Qe?null:Qt.getPrimaries(v.colorSpace),Ct=v.colorSpace===Qe||ft===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Nt=f(v)&&m(v.image)===!1,ot=x(v.image,Nt,!1,s.maxTextureSize);ot=gt(v,ot);let Jt=m(ot)||o,Xt=r.convert(v.format,v.colorSpace),Dt=r.convert(v.type),Tt=M(v.internalFormat,Xt,Dt,v.colorSpace,v.isVideoTexture);I(lt,v,Jt);let yt,Ot=v.mipmaps,Zt=o&&v.isVideoTexture!==!0&&Tt!==zh,le=St.__version===void 0||at===!0,Ht=P(v,ot,Jt);if(v.isDepthTexture)Tt=i.DEPTH_COMPONENT,o?v.type===Wn?Tt=i.DEPTH_COMPONENT32F:v.type===Gn?Tt=i.DEPTH_COMPONENT24:v.type===di?Tt=i.DEPTH24_STENCIL8:Tt=i.DEPTH_COMPONENT16:v.type===Wn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===fi&&Tt===i.DEPTH_COMPONENT&&v.type!==_l&&v.type!==Gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Gn,Dt=r.convert(v.type)),v.format===Ki&&Tt===i.DEPTH_COMPONENT&&(Tt=i.DEPTH_STENCIL,v.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=di,Dt=r.convert(v.type))),le&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,Tt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Tt,ot.width,ot.height,0,Xt,Dt,null));else if(v.isDataTexture)if(Ot.length>0&&Jt){Zt&&le&&e.texStorage2D(i.TEXTURE_2D,Ht,Tt,Ot[0].width,Ot[0].height);for(let ut=0,U=Ot.length;ut<U;ut++)yt=Ot[ut],Zt?e.texSubImage2D(i.TEXTURE_2D,ut,0,0,yt.width,yt.height,Xt,Dt,yt.data):e.texImage2D(i.TEXTURE_2D,ut,Tt,yt.width,yt.height,0,Xt,Dt,yt.data);v.generateMipmaps=!1}else Zt?(le&&e.texStorage2D(i.TEXTURE_2D,Ht,Tt,ot.width,ot.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,Xt,Dt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Tt,ot.width,ot.height,0,Xt,Dt,ot.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Zt&&le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,Tt,Ot[0].width,Ot[0].height,ot.depth);for(let ut=0,U=Ot.length;ut<U;ut++)yt=Ot[ut],v.format!==ln?Xt!==null?Zt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,yt.width,yt.height,ot.depth,Xt,yt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,Tt,yt.width,yt.height,ot.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,yt.width,yt.height,ot.depth,Xt,Dt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,Tt,yt.width,yt.height,ot.depth,0,Xt,Dt,yt.data)}else{Zt&&le&&e.texStorage2D(i.TEXTURE_2D,Ht,Tt,Ot[0].width,Ot[0].height);for(let ut=0,U=Ot.length;ut<U;ut++)yt=Ot[ut],v.format!==ln?Xt!==null?Zt?e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,yt.width,yt.height,Xt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,Tt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage2D(i.TEXTURE_2D,ut,0,0,yt.width,yt.height,Xt,Dt,yt.data):e.texImage2D(i.TEXTURE_2D,ut,Tt,yt.width,yt.height,0,Xt,Dt,yt.data)}else if(v.isDataArrayTexture)Zt?(le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,Tt,ot.width,ot.height,ot.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Xt,Dt,ot.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,ot.width,ot.height,ot.depth,0,Xt,Dt,ot.data);else if(v.isData3DTexture)Zt?(le&&e.texStorage3D(i.TEXTURE_3D,Ht,Tt,ot.width,ot.height,ot.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Xt,Dt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,ot.width,ot.height,ot.depth,0,Xt,Dt,ot.data);else if(v.isFramebufferTexture){if(le)if(Zt)e.texStorage2D(i.TEXTURE_2D,Ht,Tt,ot.width,ot.height);else{let ut=ot.width,U=ot.height;for(let pt=0;pt<Ht;pt++)e.texImage2D(i.TEXTURE_2D,pt,Tt,ut,U,0,Xt,Dt,null),ut>>=1,U>>=1}}else if(Ot.length>0&&Jt){Zt&&le&&e.texStorage2D(i.TEXTURE_2D,Ht,Tt,Ot[0].width,Ot[0].height);for(let ut=0,U=Ot.length;ut<U;ut++)yt=Ot[ut],Zt?e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Xt,Dt,yt):e.texImage2D(i.TEXTURE_2D,ut,Tt,Xt,Dt,yt);v.generateMipmaps=!1}else Zt?(le&&e.texStorage2D(i.TEXTURE_2D,Ht,Tt,ot.width,ot.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Xt,Dt,ot)):e.texImage2D(i.TEXTURE_2D,0,Tt,Xt,Dt,ot);_(v,Jt)&&A(lt),St.__version=st.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function it(S,v,H){if(v.image.length!==6)return;let lt=G(S,v),at=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+H);let st=n.get(at);if(at.version!==st.__version||lt===!0){e.activeTexture(i.TEXTURE0+H);let St=Qt.getPrimaries(Qt.workingColorSpace),ft=v.colorSpace===Qe?null:Qt.getPrimaries(v.colorSpace),vt=v.colorSpace===Qe||St===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Ct=v.isCompressedTexture||v.image[0].isCompressedTexture,Nt=v.image[0]&&v.image[0].isDataTexture,ot=[];for(let ut=0;ut<6;ut++)!Ct&&!Nt?ot[ut]=x(v.image[ut],!1,!0,s.maxCubemapSize):ot[ut]=Nt?v.image[ut].image:v.image[ut],ot[ut]=gt(v,ot[ut]);let Jt=ot[0],Xt=m(Jt)||o,Dt=r.convert(v.format,v.colorSpace),Tt=r.convert(v.type),yt=M(v.internalFormat,Dt,Tt,v.colorSpace),Ot=o&&v.isVideoTexture!==!0,Zt=st.__version===void 0||lt===!0,le=P(v,Jt,Xt);I(i.TEXTURE_CUBE_MAP,v,Xt);let Ht;if(Ct){Ot&&Zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,le,yt,Jt.width,Jt.height);for(let ut=0;ut<6;ut++){Ht=ot[ut].mipmaps;for(let U=0;U<Ht.length;U++){let pt=Ht[U];v.format!==ln?Dt!==null?Ot?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,U,0,0,pt.width,pt.height,Dt,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,U,yt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,U,0,0,pt.width,pt.height,Dt,Tt,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,U,yt,pt.width,pt.height,0,Dt,Tt,pt.data)}}}else{Ht=v.mipmaps,Ot&&Zt&&(Ht.length>0&&le++,e.texStorage2D(i.TEXTURE_CUBE_MAP,le,yt,ot[0].width,ot[0].height));for(let ut=0;ut<6;ut++)if(Nt){Ot?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,ot[ut].width,ot[ut].height,Dt,Tt,ot[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,yt,ot[ut].width,ot[ut].height,0,Dt,Tt,ot[ut].data);for(let U=0;U<Ht.length;U++){let mt=Ht[U].image[ut].image;Ot?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,U+1,0,0,mt.width,mt.height,Dt,Tt,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,U+1,yt,mt.width,mt.height,0,Dt,Tt,mt.data)}}else{Ot?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Dt,Tt,ot[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,yt,Dt,Tt,ot[ut]);for(let U=0;U<Ht.length;U++){let pt=Ht[U];Ot?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,U+1,0,0,Dt,Tt,pt.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,U+1,yt,Dt,Tt,pt.image[ut])}}}_(v,Xt)&&A(i.TEXTURE_CUBE_MAP),st.__version=at.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function nt(S,v,H,lt,at,st){let St=r.convert(H.format,H.colorSpace),ft=r.convert(H.type),vt=M(H.internalFormat,St,ft,H.colorSpace);if(!n.get(v).__hasExternalTextures){let Nt=Math.max(1,v.width>>st),ot=Math.max(1,v.height>>st);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,st,vt,Nt,ot,v.depth,0,St,ft,null):e.texImage2D(at,st,vt,Nt,ot,0,St,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,S),j(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,at,n.get(H).__webglTexture,0,ct(v)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,at,n.get(H).__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(S,v,H){if(i.bindRenderbuffer(i.RENDERBUFFER,S),v.depthBuffer&&!v.stencilBuffer){let lt=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(H||j(v)){let at=v.depthTexture;at&&at.isDepthTexture&&(at.type===Wn?lt=i.DEPTH_COMPONENT32F:at.type===Gn&&(lt=i.DEPTH_COMPONENT24));let st=ct(v);j(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,lt,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,st,lt,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,lt,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(v.depthBuffer&&v.stencilBuffer){let lt=ct(v);H&&j(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,i.DEPTH24_STENCIL8,v.width,v.height):j(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{let lt=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let at=0;at<lt.length;at++){let st=lt[at],St=r.convert(st.format,st.colorSpace),ft=r.convert(st.type),vt=M(st.internalFormat,St,ft,st.colorSpace),Ct=ct(v);H&&j(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,vt,v.width,v.height):j(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct,vt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,vt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);let lt=n.get(v.depthTexture).__webglTexture,at=ct(v);if(v.depthTexture.format===fi)j(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0);else if(v.depthTexture.format===Ki)j(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function At(S){let v=n.get(S),H=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Mt(v.__webglFramebuffer,S)}else if(H){v.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[lt]),v.__webglDepthbuffer[lt]=i.createRenderbuffer(),_t(v.__webglDepthbuffer[lt],S,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),_t(v.__webglDepthbuffer,S,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(S,v,H){let lt=n.get(S);v!==void 0&&nt(lt.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&At(S)}function z(S){let v=S.texture,H=n.get(S),lt=n.get(v);S.addEventListener("dispose",F),S.isWebGLMultipleRenderTargets!==!0&&(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=v.version,a.memory.textures++);let at=S.isWebGLCubeRenderTarget===!0,st=S.isWebGLMultipleRenderTargets===!0,St=m(S)||o;if(at){H.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(o&&v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[ft]=[];for(let vt=0;vt<v.mipmaps.length;vt++)H.__webglFramebuffer[ft][vt]=i.createFramebuffer()}else H.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let ft=0;ft<v.mipmaps.length;ft++)H.__webglFramebuffer[ft]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(st)if(s.drawBuffers){let ft=S.texture;for(let vt=0,Ct=ft.length;vt<Ct;vt++){let Nt=n.get(ft[vt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&j(S)===!1){let ft=st?v:[v];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let vt=0;vt<ft.length;vt++){let Ct=ft[vt];H.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[vt]);let Nt=r.convert(Ct.format,Ct.colorSpace),ot=r.convert(Ct.type),Jt=M(Ct.internalFormat,Nt,ot,Ct.colorSpace,S.isXRRenderTarget===!0),Xt=ct(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,Jt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,H.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),_t(H.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),I(i.TEXTURE_CUBE_MAP,v,St);for(let ft=0;ft<6;ft++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let vt=0;vt<v.mipmaps.length;vt++)nt(H.__webglFramebuffer[ft][vt],S,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,vt);else nt(H.__webglFramebuffer[ft],S,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);_(v,St)&&A(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){let ft=S.texture;for(let vt=0,Ct=ft.length;vt<Ct;vt++){let Nt=ft[vt],ot=n.get(Nt);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),I(i.TEXTURE_2D,Nt,St),nt(H.__webglFramebuffer,S,Nt,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),_(Nt,St)&&A(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?ft=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ft,lt.__webglTexture),I(ft,v,St),o&&v.mipmaps&&v.mipmaps.length>0)for(let vt=0;vt<v.mipmaps.length;vt++)nt(H.__webglFramebuffer[vt],S,v,i.COLOR_ATTACHMENT0,ft,vt);else nt(H.__webglFramebuffer,S,v,i.COLOR_ATTACHMENT0,ft,0);_(v,St)&&A(ft),e.unbindTexture()}S.depthBuffer&&At(S)}function ht(S){let v=m(S)||o,H=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let lt=0,at=H.length;lt<at;lt++){let st=H[lt];if(_(st,v)){let St=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ft=n.get(st).__webglTexture;e.bindTexture(St,ft),A(St),e.unbindTexture()}}}function K(S){if(o&&S.samples>0&&j(S)===!1){let v=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],H=S.width,lt=S.height,at=i.COLOR_BUFFER_BIT,st=[],St=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(S),vt=S.isWebGLMultipleRenderTargets===!0;if(vt)for(let Ct=0;Ct<v.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let Ct=0;Ct<v.length;Ct++){st.push(i.COLOR_ATTACHMENT0+Ct),S.depthBuffer&&st.push(St);let Nt=ft.__ignoreDepthValues!==void 0?ft.__ignoreDepthValues:!1;if(Nt===!1&&(S.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),vt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[Ct]),Nt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[St]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[St])),vt){let ot=n.get(v[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,H,lt,0,0,H,lt,at,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let Ct=0;Ct<v.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,ft.__webglColorRenderbuffer[Ct]);let Nt=n.get(v[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,Nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}}function ct(S){return Math.min(s.maxSamples,S.samples)}function j(S){let v=n.get(S);return o&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Et(S){let v=a.render.frame;h.get(S)!==v&&(h.set(S,v),S.update())}function gt(S,v){let H=S.colorSpace,lt=S.format,at=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Ro||H!==In&&H!==Qe&&(Qt.getTransfer(H)===Kt?o===!1?t.has("EXT_sRGB")===!0&&lt===ln?(S.format=Ro,S.minFilter=Je,S.generateMipmaps=!1):v=Br.sRGBToLinear(v):(lt!==ln||at!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),v}this.allocateTextureUnit=L,this.resetTextureUnits=rt,this.setTexture2D=X,this.setTexture2DArray=Z,this.setTexture3D=$,this.setTextureCube=Q,this.rebindTextures=Rt,this.setupRenderTarget=z,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=j}function og(i,t,e){let n=e.isWebGL2;function s(r,a=Qe){let o,l=Qt.getTransfer(a);if(r===qn)return i.UNSIGNED_BYTE;if(r===Eh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===wh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===td)return i.BYTE;if(r===ed)return i.SHORT;if(r===_l)return i.UNSIGNED_SHORT;if(r===bh)return i.INT;if(r===Gn)return i.UNSIGNED_INT;if(r===Wn)return i.FLOAT;if(r===cn)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===nd)return i.ALPHA;if(r===ln)return i.RGBA;if(r===id)return i.LUMINANCE;if(r===sd)return i.LUMINANCE_ALPHA;if(r===fi)return i.DEPTH_COMPONENT;if(r===Ki)return i.DEPTH_STENCIL;if(r===Ro)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===rd)return i.RED;if(r===Th)return i.RED_INTEGER;if(r===ad)return i.RG;if(r===Rh)return i.RG_INTEGER;if(r===Ch)return i.RGBA_INTEGER;if(r===Ba||r===ka||r===Ha||r===Va)if(l===Kt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ba)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ka)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ha)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Va)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ba)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ka)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ha)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Va)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ql||r===Zl||r===Kl||r===jl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ql)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Kl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===jl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zh)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===$l||r===tc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===$l)return l===Kt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===tc)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ec||r===nc||r===ic||r===sc||r===rc||r===ac||r===oc||r===lc||r===cc||r===hc||r===uc||r===dc||r===fc||r===pc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ec)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===nc)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ic)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sc)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===rc)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ac)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===oc)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===lc)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===cc)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hc)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===uc)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===dc)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fc)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===pc)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ga||r===mc||r===gc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Ga)return l===Kt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===mc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===gc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===od||r===Ac||r===xc||r===_c)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ga)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ac)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_c)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===di?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Go=class extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},be=class extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}},lg={type:"move"},ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Wo=class extends Zn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,x=e.getContextAttributes(),m=null,f=null,_=[],A=[],M=new tt,P=null,w=new Ie;w.layers.enable(1),w.viewport=new re;let T=new Ie;T.layers.enable(2),T.viewport=new re;let F=[w,T],y=new Go;y.layers.enable(1),y.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let G=_[I];return G===void 0&&(G=new ws,_[I]=G),G.getTargetRaySpace()},this.getControllerGrip=function(I){let G=_[I];return G===void 0&&(G=new ws,_[I]=G),G.getGripSpace()},this.getHand=function(I){let G=_[I];return G===void 0&&(G=new ws,_[I]=G),G.getHandSpace()};function B(I){let G=A.indexOf(I.inputSource);if(G===-1)return;let et=_[G];et!==void 0&&(et.update(I.inputSource,I.frame,c||a),et.dispatchEvent({type:I.type,data:I.inputSource}))}function rt(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",rt),s.removeEventListener("inputsourceschange",L);for(let I=0;I<_.length;I++){let G=A[I];G!==null&&(A[I]=null,_[I].disconnect(G))}E=null,N=null,t.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,O.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",rt),s.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(M),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let G={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,G),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Be(p.framebufferWidth,p.framebufferHeight,{format:ln,type:qn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let G=null,et=null,it=null;x.depth&&(it=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,G=x.stencil?Ki:fi,et=x.stencil?di:Gn);let nt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(nt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new Be(d.textureWidth,d.textureHeight,{format:ln,type:qn,depthTexture:new Qr(d.textureWidth,d.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let _t=t.properties.get(f);_t.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),O.setContext(s),O.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(I){for(let G=0;G<I.removed.length;G++){let et=I.removed[G],it=A.indexOf(et);it>=0&&(A[it]=null,_[it].disconnect(et))}for(let G=0;G<I.added.length;G++){let et=I.added[G],it=A.indexOf(et);if(it===-1){for(let _t=0;_t<_.length;_t++)if(_t>=A.length){A.push(et),it=_t;break}else if(A[_t]===null){A[_t]=et,it=_t;break}if(it===-1)break}let nt=_[it];nt&&nt.connect(et)}}let V=new C,X=new C;function Z(I,G,et){V.setFromMatrixPosition(G.matrixWorld),X.setFromMatrixPosition(et.matrixWorld);let it=V.distanceTo(X),nt=G.projectionMatrix.elements,_t=et.projectionMatrix.elements,Mt=nt[14]/(nt[10]-1),At=nt[14]/(nt[10]+1),Rt=(nt[9]+1)/nt[5],z=(nt[9]-1)/nt[5],ht=(nt[8]-1)/nt[0],K=(_t[8]+1)/_t[0],ct=Mt*ht,j=Mt*K,Et=it/(-ht+K),gt=Et*-ht;G.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(gt),I.translateZ(Et),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();let S=Mt+Et,v=At+Et,H=ct-gt,lt=j+(it-gt),at=Rt*At/v*S,st=z*At/v*S;I.projectionMatrix.makePerspective(H,lt,at,st,S,v),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function $(I,G){G===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(G.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;y.near=T.near=w.near=I.near,y.far=T.far=w.far=I.far,(E!==y.near||N!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,N=y.far);let G=I.parent,et=y.cameras;$(y,G);for(let it=0;it<et.length;it++)$(et[it],G);et.length===2?Z(y,w,T):y.projectionMatrix.copy(w.projectionMatrix),Q(I,y,G)};function Q(I,G,et){et===null?I.matrix.copy(G.matrixWorld):(I.matrix.copy(et.matrixWorld),I.matrix.invert(),I.matrix.multiply(G.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(G.projectionMatrix),I.projectionMatrixInverse.copy(G.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Co*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(I){l=I,d!==null&&(d.fixedFoveation=I),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=I)};let R=null;function D(I,G){if(h=G.getViewerPose(c||a),g=G,h!==null){let et=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let it=!1;et.length!==y.cameras.length&&(y.cameras.length=0,it=!0);for(let nt=0;nt<et.length;nt++){let _t=et[nt],Mt=null;if(p!==null)Mt=p.getViewport(_t);else{let Rt=u.getViewSubImage(d,_t);Mt=Rt.viewport,nt===0&&(t.setRenderTargetTextures(f,Rt.colorTexture,d.ignoreDepthValues?void 0:Rt.depthStencilTexture),t.setRenderTarget(f))}let At=F[nt];At===void 0&&(At=new Ie,At.layers.enable(nt),At.viewport=new re,F[nt]=At),At.matrix.fromArray(_t.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(_t.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),nt===0&&(y.matrix.copy(At.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),it===!0&&y.cameras.push(At)}}for(let et=0;et<_.length;et++){let it=A[et],nt=_[et];it!==null&&nt!==void 0&&nt.update(it,G,c||a)}R&&R(I,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),g=null}let O=new Fh;O.setAnimationLoop(D),this.setAnimationLoop=function(I){R=I},this.dispose=function(){}}};function cg(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Nh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,_,A,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,_,A):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ee&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ee&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _=t.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let A=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*A,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,A){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=A*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ee&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let _=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hg(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,A){let M=A.program;n.uniformBlockBinding(_,M)}function c(_,A){let M=s[_.id];M===void 0&&(g(_),M=h(_),s[_.id]=M,_.addEventListener("dispose",m));let P=A.program;n.updateUBOMapping(_,P);let w=t.render.frame;r[_.id]!==w&&(d(_),r[_.id]=w)}function h(_){let A=u();_.__bindingPointIndex=A;let M=i.createBuffer(),P=_.__size,w=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,P,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,M),M}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let A=s[_.id],M=_.uniforms,P=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let w=0,T=M.length;w<T;w++){let F=Array.isArray(M[w])?M[w]:[M[w]];for(let y=0,E=F.length;y<E;y++){let N=F[y];if(p(N,w,y,P)===!0){let B=N.__offset,rt=Array.isArray(N.value)?N.value:[N.value],L=0;for(let V=0;V<rt.length;V++){let X=rt[V],Z=x(X);typeof X=="number"||typeof X=="boolean"?(N.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,B+L,N.__data)):X.isMatrix3?(N.__data[0]=X.elements[0],N.__data[1]=X.elements[1],N.__data[2]=X.elements[2],N.__data[3]=0,N.__data[4]=X.elements[3],N.__data[5]=X.elements[4],N.__data[6]=X.elements[5],N.__data[7]=0,N.__data[8]=X.elements[6],N.__data[9]=X.elements[7],N.__data[10]=X.elements[8],N.__data[11]=0):(X.toArray(N.__data,L),L+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,A,M,P){let w=_.value,T=A+"_"+M;if(P[T]===void 0)return typeof w=="number"||typeof w=="boolean"?P[T]=w:P[T]=w.clone(),!0;{let F=P[T];if(typeof w=="number"||typeof w=="boolean"){if(F!==w)return P[T]=w,!0}else if(F.equals(w)===!1)return F.copy(w),!0}return!1}function g(_){let A=_.uniforms,M=0,P=16;for(let T=0,F=A.length;T<F;T++){let y=Array.isArray(A[T])?A[T]:[A[T]];for(let E=0,N=y.length;E<N;E++){let B=y[E],rt=Array.isArray(B.value)?B.value:[B.value];for(let L=0,V=rt.length;L<V;L++){let X=rt[L],Z=x(X),$=M%P;$!==0&&P-$<Z.boundary&&(M+=P-$),B.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=Z.storage}}}let w=M%P;return w>0&&(M+=P-w),_.__size=M,_.__cache={},this}function x(_){let A={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(A.boundary=4,A.storage=4):_.isVector2?(A.boundary=8,A.storage=8):_.isVector3||_.isColor?(A.boundary=16,A.storage=12):_.isVector4?(A.boundary=16,A.storage=16):_.isMatrix3?(A.boundary=48,A.storage=48):_.isMatrix4?(A.boundary=64,A.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),A}function m(_){let A=_.target;A.removeEventListener("dispose",m);let M=a.indexOf(A.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function f(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Is=class{constructor(t={}){let{canvas:e=_d(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let p=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,f=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=he,this._useLegacyLights=!1,this.toneMapping=Xn,this.toneMappingExposure=1;let A=this,M=!1,P=0,w=0,T=null,F=-1,y=null,E=new re,N=new re,B=null,rt=new wt(0),L=0,V=e.width,X=e.height,Z=1,$=null,Q=null,R=new re(0,0,V,X),D=new re(0,0,V,X),O=!1,I=new Ps,G=!1,et=!1,it=null,nt=new ue,_t=new tt,Mt=new C,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Rt(){return T===null?Z:1}let z=n;function ht(b,k){for(let q=0;q<b.length;q++){let J=b[q],W=e.getContext(J,k);if(W!==null)return W}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fl}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",pt,!1),z===null){let k=["webgl2","webgl","experimental-webgl"];if(A.isWebGL1Renderer===!0&&k.shift(),z=ht(k,b),z===null)throw ht(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let K,ct,j,Et,gt,S,v,H,lt,at,st,St,ft,vt,Ct,Nt,ot,Jt,Xt,Dt,Tt,yt,Ot,Zt;function le(){K=new Cm(z),ct=new Sm(z,K,t),K.init(ct),yt=new og(z,K,ct),j=new rg(z,K,ct),Et=new Im(z),gt=new Y0,S=new ag(z,K,j,gt,ct,yt,Et),v=new Em(A),H=new Rm(A),lt=new Bd(z,ct),Ot=new ym(z,K,lt,ct),at=new zm(z,lt,Et,Ot),st=new Nm(z,at,lt,Et),Xt=new Um(z,ct,S),Nt=new bm(gt),St=new q0(A,v,H,K,ct,Ot,Nt),ft=new cg(A,gt),vt=new Q0,Ct=new eg(K,ct),Jt=new vm(A,v,H,j,st,d,l),ot=new sg(A,st,ct),Zt=new hg(z,Et,ct,j),Dt=new Mm(z,K,Et,ct),Tt=new Pm(z,K,Et,ct),Et.programs=St.programs,A.capabilities=ct,A.extensions=K,A.properties=gt,A.renderLists=vt,A.shadowMap=ot,A.state=j,A.info=Et}le();let Ht=new Wo(A,z);this.xr=Ht,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let b=K.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=K.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(b){b!==void 0&&(Z=b,this.setSize(V,X,!1))},this.getSize=function(b){return b.set(V,X)},this.setSize=function(b,k,q=!0){if(Ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=b,X=k,e.width=Math.floor(b*Z),e.height=Math.floor(k*Z),q===!0&&(e.style.width=b+"px",e.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(V*Z,X*Z).floor()},this.setDrawingBufferSize=function(b,k,q){V=b,X=k,Z=q,e.width=Math.floor(b*q),e.height=Math.floor(k*q),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(R)},this.setViewport=function(b,k,q,J){b.isVector4?R.set(b.x,b.y,b.z,b.w):R.set(b,k,q,J),j.viewport(E.copy(R).multiplyScalar(Z).floor())},this.getScissor=function(b){return b.copy(D)},this.setScissor=function(b,k,q,J){b.isVector4?D.set(b.x,b.y,b.z,b.w):D.set(b,k,q,J),j.scissor(N.copy(D).multiplyScalar(Z).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(b){j.setScissorTest(O=b)},this.setOpaqueSort=function(b){$=b},this.setTransparentSort=function(b){Q=b},this.getClearColor=function(b){return b.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor.apply(Jt,arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha.apply(Jt,arguments)},this.clear=function(b=!0,k=!0,q=!0){let J=0;if(b){let W=!1;if(T!==null){let xt=T.texture.format;W=xt===Ch||xt===Rh||xt===Th}if(W){let xt=T.texture.type,bt=xt===qn||xt===Gn||xt===_l||xt===di||xt===Eh||xt===wh,Pt=Jt.getClearColor(),Lt=Jt.getClearAlpha(),kt=Pt.r,Ut=Pt.g,Ft=Pt.b;bt?(p[0]=kt,p[1]=Ut,p[2]=Ft,p[3]=Lt,z.clearBufferuiv(z.COLOR,0,p)):(g[0]=kt,g[1]=Ut,g[2]=Ft,g[3]=Lt,z.clearBufferiv(z.COLOR,0,g))}else J|=z.COLOR_BUFFER_BIT}k&&(J|=z.DEPTH_BUFFER_BIT),q&&(J|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),vt.dispose(),Ct.dispose(),gt.dispose(),v.dispose(),H.dispose(),st.dispose(),Ot.dispose(),Zt.dispose(),St.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",De),Ht.removeEventListener("sessionend",ee),it&&(it.dispose(),it=null),Ue.stop()};function ut(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let b=Et.autoReset,k=ot.enabled,q=ot.autoUpdate,J=ot.needsUpdate,W=ot.type;le(),Et.autoReset=b,ot.enabled=k,ot.autoUpdate=q,ot.needsUpdate=J,ot.type=W}function pt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function mt(b){let k=b.target;k.removeEventListener("dispose",mt),It(k)}function It(b){zt(b),gt.remove(b)}function zt(b){let k=gt.get(b).programs;k!==void 0&&(k.forEach(function(q){St.releaseProgram(q)}),b.isShaderMaterial&&St.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,q,J,W,xt){k===null&&(k=At);let bt=W.isMesh&&W.matrixWorld.determinant()<0,Pt=yu(b,k,q,J,W);j.setMaterial(J,bt);let Lt=q.index,kt=1;if(J.wireframe===!0){if(Lt=at.getWireframeAttribute(q),Lt===void 0)return;kt=2}let Ut=q.drawRange,Ft=q.attributes.position,pe=Ut.start*kt,ke=(Ut.start+Ut.count)*kt;xt!==null&&(pe=Math.max(pe,xt.start*kt),ke=Math.min(ke,(xt.start+xt.count)*kt)),Lt!==null?(pe=Math.max(pe,0),ke=Math.min(ke,Lt.count)):Ft!=null&&(pe=Math.max(pe,0),ke=Math.min(ke,Ft.count));let ye=ke-pe;if(ye<0||ye===1/0)return;Ot.setup(W,J,Pt,q,Lt);let yn,ae=Dt;if(Lt!==null&&(yn=lt.get(Lt),ae=Tt,ae.setIndex(yn)),W.isMesh)J.wireframe===!0?(j.setLineWidth(J.wireframeLinewidth*Rt()),ae.setMode(z.LINES)):ae.setMode(z.TRIANGLES);else if(W.isLine){let Vt=J.linewidth;Vt===void 0&&(Vt=1),j.setLineWidth(Vt*Rt()),W.isLineSegments?ae.setMode(z.LINES):W.isLineLoop?ae.setMode(z.LINE_LOOP):ae.setMode(z.LINE_STRIP)}else W.isPoints?ae.setMode(z.POINTS):W.isSprite&&ae.setMode(z.TRIANGLES);if(W.isBatchedMesh)ae.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)ae.renderInstances(pe,ye,W.count);else if(q.isInstancedBufferGeometry){let Vt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Da=Math.min(q.instanceCount,Vt);ae.renderInstances(pe,ye,Da)}else ae.render(pe,ye)};function $t(b,k,q){b.transparent===!0&&b.side===Ge&&b.forceSinglePass===!1?(b.side=Ee,b.needsUpdate=!0,$s(b,k,q),b.side=Jn,b.needsUpdate=!0,$s(b,k,q),b.side=Ge):$s(b,k,q)}this.compile=function(b,k,q=null){q===null&&(q=b),m=Ct.get(q),m.init(),_.push(m),q.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),b!==q&&b.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(A._useLegacyLights);let J=new Set;return b.traverse(function(W){let xt=W.material;if(xt)if(Array.isArray(xt))for(let bt=0;bt<xt.length;bt++){let Pt=xt[bt];$t(Pt,q,W),J.add(Pt)}else $t(xt,q,W),J.add(xt)}),_.pop(),m=null,J},this.compileAsync=function(b,k,q=null){let J=this.compile(b,k,q);return new Promise(W=>{function xt(){if(J.forEach(function(bt){gt.get(bt).currentProgram.isReady()&&J.delete(bt)}),J.size===0){W(b);return}setTimeout(xt,10)}K.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let te=null;function ve(b){te&&te(b)}function De(){Ue.stop()}function ee(){Ue.start()}let Ue=new Fh;Ue.setAnimationLoop(ve),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(b){te=b,Ht.setAnimationLoop(b),b===null?Ue.stop():Ue.start()},Ht.addEventListener("sessionstart",De),Ht.addEventListener("sessionend",ee),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(k),k=Ht.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,k,T),m=Ct.get(b,_.length),m.init(),_.push(m),nt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),I.setFromProjectionMatrix(nt),et=this.localClippingEnabled,G=Nt.init(this.clippingPlanes,et),x=vt.get(b,f.length),x.init(),f.push(x),pn(b,k,0,A.sortObjects),x.finish(),A.sortObjects===!0&&x.sort($,Q),this.info.render.frame++,G===!0&&Nt.beginShadows();let q=m.state.shadowsArray;if(ot.render(q,b,k),G===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Jt.render(x,b),m.setupLights(A._useLegacyLights),k.isArrayCamera){let J=k.cameras;for(let W=0,xt=J.length;W<xt;W++){let bt=J[W];Fl(x,b,bt,bt.viewport)}}else Fl(x,b,k);T!==null&&(S.updateMultisampleRenderTarget(T),S.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(A,b,k),Ot.resetDefaultState(),F=-1,y=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function pn(b,k,q,J){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||I.intersectsSprite(b)){J&&Mt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(nt);let bt=st.update(b),Pt=b.material;Pt.visible&&x.push(b,bt,Pt,q,Mt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||I.intersectsObject(b))){let bt=st.update(b),Pt=b.material;if(J&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Mt.copy(b.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Mt.copy(bt.boundingSphere.center)),Mt.applyMatrix4(b.matrixWorld).applyMatrix4(nt)),Array.isArray(Pt)){let Lt=bt.groups;for(let kt=0,Ut=Lt.length;kt<Ut;kt++){let Ft=Lt[kt],pe=Pt[Ft.materialIndex];pe&&pe.visible&&x.push(b,bt,pe,q,Mt.z,Ft)}}else Pt.visible&&x.push(b,bt,Pt,q,Mt.z,null)}}let xt=b.children;for(let bt=0,Pt=xt.length;bt<Pt;bt++)pn(xt[bt],k,q,J)}function Fl(b,k,q,J){let W=b.opaque,xt=b.transmissive,bt=b.transparent;m.setupLightsView(q),G===!0&&Nt.setGlobalState(A.clippingPlanes,q),xt.length>0&&vu(W,xt,k,q),J&&j.viewport(E.copy(J)),W.length>0&&js(W,k,q),xt.length>0&&js(xt,k,q),bt.length>0&&js(bt,k,q),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function vu(b,k,q,J){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;let xt=ct.isWebGL2;it===null&&(it=new Be(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")?cn:qn,minFilter:zs,samples:xt?4:0})),A.getDrawingBufferSize(_t),xt?it.setSize(_t.x,_t.y):it.setSize(zo(_t.x),zo(_t.y));let bt=A.getRenderTarget();A.setRenderTarget(it),A.getClearColor(rt),L=A.getClearAlpha(),L<1&&A.setClearColor(16777215,.5),A.clear();let Pt=A.toneMapping;A.toneMapping=Xn,js(b,q,J),S.updateMultisampleRenderTarget(it),S.updateRenderTargetMipmap(it);let Lt=!1;for(let kt=0,Ut=k.length;kt<Ut;kt++){let Ft=k[kt],pe=Ft.object,ke=Ft.geometry,ye=Ft.material,yn=Ft.group;if(ye.side===Ge&&pe.layers.test(J.layers)){let ae=ye.side;ye.side=Ee,ye.needsUpdate=!0,Ol(pe,q,J,ke,ye,yn),ye.side=ae,ye.needsUpdate=!0,Lt=!0}}Lt===!0&&(S.updateMultisampleRenderTarget(it),S.updateRenderTargetMipmap(it)),A.setRenderTarget(bt),A.setClearColor(rt,L),A.toneMapping=Pt}function js(b,k,q){let J=k.isScene===!0?k.overrideMaterial:null;for(let W=0,xt=b.length;W<xt;W++){let bt=b[W],Pt=bt.object,Lt=bt.geometry,kt=J===null?bt.material:J,Ut=bt.group;Pt.layers.test(q.layers)&&Ol(Pt,k,q,Lt,kt,Ut)}}function Ol(b,k,q,J,W,xt){b.onBeforeRender(A,k,q,J,W,xt),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(A,k,q,J,b,xt),W.transparent===!0&&W.side===Ge&&W.forceSinglePass===!1?(W.side=Ee,W.needsUpdate=!0,A.renderBufferDirect(q,k,J,W,b,xt),W.side=Jn,W.needsUpdate=!0,A.renderBufferDirect(q,k,J,W,b,xt),W.side=Ge):A.renderBufferDirect(q,k,J,W,b,xt),b.onAfterRender(A,k,q,J,W,xt)}function $s(b,k,q){k.isScene!==!0&&(k=At);let J=gt.get(b),W=m.state.lights,xt=m.state.shadowsArray,bt=W.state.version,Pt=St.getParameters(b,W.state,xt,k,q),Lt=St.getProgramCacheKey(Pt),kt=J.programs;J.environment=b.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(b.isMeshStandardMaterial?H:v).get(b.envMap||J.environment),kt===void 0&&(b.addEventListener("dispose",mt),kt=new Map,J.programs=kt);let Ut=kt.get(Lt);if(Ut!==void 0){if(J.currentProgram===Ut&&J.lightsStateVersion===bt)return kl(b,Pt),Ut}else Pt.uniforms=St.getUniforms(b),b.onBuild(q,Pt,A),b.onBeforeCompile(Pt,A),Ut=St.acquireProgram(Pt,Lt),kt.set(Lt,Ut),J.uniforms=Pt.uniforms;let Ft=J.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ft.clippingPlanes=Nt.uniform),kl(b,Pt),J.needsLights=Su(b),J.lightsStateVersion=bt,J.needsLights&&(Ft.ambientLightColor.value=W.state.ambient,Ft.lightProbe.value=W.state.probe,Ft.directionalLights.value=W.state.directional,Ft.directionalLightShadows.value=W.state.directionalShadow,Ft.spotLights.value=W.state.spot,Ft.spotLightShadows.value=W.state.spotShadow,Ft.rectAreaLights.value=W.state.rectArea,Ft.ltc_1.value=W.state.rectAreaLTC1,Ft.ltc_2.value=W.state.rectAreaLTC2,Ft.pointLights.value=W.state.point,Ft.pointLightShadows.value=W.state.pointShadow,Ft.hemisphereLights.value=W.state.hemi,Ft.directionalShadowMap.value=W.state.directionalShadowMap,Ft.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ft.spotShadowMap.value=W.state.spotShadowMap,Ft.spotLightMatrix.value=W.state.spotLightMatrix,Ft.spotLightMap.value=W.state.spotLightMap,Ft.pointShadowMap.value=W.state.pointShadowMap,Ft.pointShadowMatrix.value=W.state.pointShadowMatrix),J.currentProgram=Ut,J.uniformsList=null,Ut}function Bl(b){if(b.uniformsList===null){let k=b.currentProgram.getUniforms();b.uniformsList=Ji.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function kl(b,k){let q=gt.get(b);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function yu(b,k,q,J,W){k.isScene!==!0&&(k=At),S.resetTextureUnits();let xt=k.fog,bt=J.isMeshStandardMaterial?k.environment:null,Pt=T===null?A.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:In,Lt=(J.isMeshStandardMaterial?H:v).get(J.envMap||bt),kt=J.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ut=!!q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ft=!!q.morphAttributes.position,pe=!!q.morphAttributes.normal,ke=!!q.morphAttributes.color,ye=Xn;J.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ye=A.toneMapping);let yn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ae=yn!==void 0?yn.length:0,Vt=gt.get(J),Da=m.state.lights;if(G===!0&&(et===!0||b!==y)){let qe=b===y&&J.id===F;Nt.setState(J,b,qe)}let ce=!1;J.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Da.state.version||Vt.outputColorSpace!==Pt||W.isBatchedMesh&&Vt.batching===!1||!W.isBatchedMesh&&Vt.batching===!0||W.isInstancedMesh&&Vt.instancing===!1||!W.isInstancedMesh&&Vt.instancing===!0||W.isSkinnedMesh&&Vt.skinning===!1||!W.isSkinnedMesh&&Vt.skinning===!0||W.isInstancedMesh&&Vt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Vt.instancingColor===!1&&W.instanceColor!==null||Vt.envMap!==Lt||J.fog===!0&&Vt.fog!==xt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Nt.numPlanes||Vt.numIntersection!==Nt.numIntersection)||Vt.vertexAlphas!==kt||Vt.vertexTangents!==Ut||Vt.morphTargets!==Ft||Vt.morphNormals!==pe||Vt.morphColors!==ke||Vt.toneMapping!==ye||ct.isWebGL2===!0&&Vt.morphTargetsCount!==ae)&&(ce=!0):(ce=!0,Vt.__version=J.version);let ni=Vt.currentProgram;ce===!0&&(ni=$s(J,k,W));let Hl=!1,gs=!1,Ua=!1,Ce=ni.getUniforms(),ii=Vt.uniforms;if(j.useProgram(ni.program)&&(Hl=!0,gs=!0,Ua=!0),J.id!==F&&(F=J.id,gs=!0),Hl||y!==b){Ce.setValue(z,"projectionMatrix",b.projectionMatrix),Ce.setValue(z,"viewMatrix",b.matrixWorldInverse);let qe=Ce.map.cameraPosition;qe!==void 0&&qe.setValue(z,Mt.setFromMatrixPosition(b.matrixWorld)),ct.logarithmicDepthBuffer&&Ce.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ce.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,gs=!0,Ua=!0)}if(W.isSkinnedMesh){Ce.setOptional(z,W,"bindMatrix"),Ce.setOptional(z,W,"bindMatrixInverse");let qe=W.skeleton;qe&&(ct.floatVertexTextures?(qe.boneTexture===null&&qe.computeBoneTexture(),Ce.setValue(z,"boneTexture",qe.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Ce.setOptional(z,W,"batchingTexture"),Ce.setValue(z,"batchingTexture",W._matricesTexture,S));let Na=q.morphAttributes;if((Na.position!==void 0||Na.normal!==void 0||Na.color!==void 0&&ct.isWebGL2===!0)&&Xt.update(W,q,ni),(gs||Vt.receiveShadow!==W.receiveShadow)&&(Vt.receiveShadow=W.receiveShadow,Ce.setValue(z,"receiveShadow",W.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(ii.envMap.value=Lt,ii.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),gs&&(Ce.setValue(z,"toneMappingExposure",A.toneMappingExposure),Vt.needsLights&&Mu(ii,Ua),xt&&J.fog===!0&&ft.refreshFogUniforms(ii,xt),ft.refreshMaterialUniforms(ii,J,Z,X,it),Ji.upload(z,Bl(Vt),ii,S)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ji.upload(z,Bl(Vt),ii,S),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ce.setValue(z,"center",W.center),Ce.setValue(z,"modelViewMatrix",W.modelViewMatrix),Ce.setValue(z,"normalMatrix",W.normalMatrix),Ce.setValue(z,"modelMatrix",W.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let qe=J.uniformsGroups;for(let Fa=0,bu=qe.length;Fa<bu;Fa++)if(ct.isWebGL2){let Vl=qe[Fa];Zt.update(Vl,ni),Zt.bind(Vl,ni)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ni}function Mu(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function Su(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,k,q){gt.get(b.texture).__webglTexture=k,gt.get(b.depthTexture).__webglTexture=q;let J=gt.get(b);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=q===void 0,J.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,k){let q=gt.get(b);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,q=0){T=b,P=k,w=q;let J=!0,W=null,xt=!1,bt=!1;if(b){let Lt=gt.get(b);Lt.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(z.FRAMEBUFFER,null),J=!1):Lt.__webglFramebuffer===void 0?S.setupRenderTarget(b):Lt.__hasExternalTextures&&S.rebindTextures(b,gt.get(b.texture).__webglTexture,gt.get(b.depthTexture).__webglTexture);let kt=b.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(bt=!0);let Ut=gt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ut[k])?W=Ut[k][q]:W=Ut[k],xt=!0):ct.isWebGL2&&b.samples>0&&S.useMultisampledRTT(b)===!1?W=gt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ut)?W=Ut[q]:W=Ut,E.copy(b.viewport),N.copy(b.scissor),B=b.scissorTest}else E.copy(R).multiplyScalar(Z).floor(),N.copy(D).multiplyScalar(Z).floor(),B=O;if(j.bindFramebuffer(z.FRAMEBUFFER,W)&&ct.drawBuffers&&J&&j.drawBuffers(b,W),j.viewport(E),j.scissor(N),j.setScissorTest(B),xt){let Lt=gt.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,Lt.__webglTexture,q)}else if(bt){let Lt=gt.get(b.texture),kt=k||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Lt.__webglTexture,q||0,kt)}F=-1},this.readRenderTargetPixels=function(b,k,q,J,W,xt,bt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=gt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(Pt=Pt[bt]),Pt){j.bindFramebuffer(z.FRAMEBUFFER,Pt);try{let Lt=b.texture,kt=Lt.format,Ut=Lt.type;if(kt!==ln&&yt.convert(kt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ft=Ut===cn&&(K.has("EXT_color_buffer_half_float")||ct.isWebGL2&&K.has("EXT_color_buffer_float"));if(Ut!==qn&&yt.convert(Ut)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ut===Wn&&(ct.isWebGL2||K.has("OES_texture_float")||K.has("WEBGL_color_buffer_float")))&&!Ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-J&&q>=0&&q<=b.height-W&&z.readPixels(k,q,J,W,yt.convert(kt),yt.convert(Ut),xt)}finally{let Lt=T!==null?gt.get(T).__webglFramebuffer:null;j.bindFramebuffer(z.FRAMEBUFFER,Lt)}}},this.copyFramebufferToTexture=function(b,k,q=0){let J=Math.pow(2,-q),W=Math.floor(k.image.width*J),xt=Math.floor(k.image.height*J);S.setTexture2D(k,0),z.copyTexSubImage2D(z.TEXTURE_2D,q,0,0,b.x,b.y,W,xt),j.unbindTexture()},this.copyTextureToTexture=function(b,k,q,J=0){let W=k.image.width,xt=k.image.height,bt=yt.convert(q.format),Pt=yt.convert(q.type);S.setTexture2D(q,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment),k.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,J,b.x,b.y,W,xt,bt,Pt,k.image.data):k.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,J,b.x,b.y,k.mipmaps[0].width,k.mipmaps[0].height,bt,k.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,J,b.x,b.y,bt,Pt,k.image),J===0&&q.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(b,k,q,J,W=0){if(A.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let xt=b.max.x-b.min.x+1,bt=b.max.y-b.min.y+1,Pt=b.max.z-b.min.z+1,Lt=yt.convert(J.format),kt=yt.convert(J.type),Ut;if(J.isData3DTexture)S.setTexture3D(J,0),Ut=z.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)S.setTexture2DArray(J,0),Ut=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,J.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,J.unpackAlignment);let Ft=z.getParameter(z.UNPACK_ROW_LENGTH),pe=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ke=z.getParameter(z.UNPACK_SKIP_PIXELS),ye=z.getParameter(z.UNPACK_SKIP_ROWS),yn=z.getParameter(z.UNPACK_SKIP_IMAGES),ae=q.isCompressedTexture?q.mipmaps[W]:q.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,ae.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ae.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,b.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,b.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,b.min.z),q.isDataTexture||q.isData3DTexture?z.texSubImage3D(Ut,W,k.x,k.y,k.z,xt,bt,Pt,Lt,kt,ae.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ut,W,k.x,k.y,k.z,xt,bt,Pt,Lt,ae.data)):z.texSubImage3D(Ut,W,k.x,k.y,k.z,xt,bt,Pt,Lt,kt,ae),z.pixelStorei(z.UNPACK_ROW_LENGTH,Ft),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,pe),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ke),z.pixelStorei(z.UNPACK_SKIP_ROWS,ye),z.pixelStorei(z.UNPACK_SKIP_IMAGES,yn),W===0&&J.generateMipmaps&&z.generateMipmap(Ut),j.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?S.setTextureCube(b,0):b.isData3DTexture?S.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?S.setTexture2DArray(b,0):S.setTexture2D(b,0),j.unbindTexture()},this.resetState=function(){P=0,w=0,T=null,j.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===vl?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===ma?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===he?pi:Ph}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===pi?he:In}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Xo=class extends Is{};Xo.prototype.isWebGL1Renderer=!0;var ns=class extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},qo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=To,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ne=new C,Zr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ls=class extends Dn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Bi,ys=new C,ki=new C,Hi=new C,Vi=new tt,Ms=new tt,Gh=new ue,Mr=new C,Ss=new C,Sr=new C,ch=new tt,go=new tt,hh=new tt,Kr=class extends Te{constructor(t=new Ls){if(super(),this.isSprite=!0,this.type="Sprite",Bi===void 0){Bi=new de;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new qo(e,5);Bi.setIndex([0,1,2,0,2,3]),Bi.setAttribute("position",new Zr(n,3,0,!1)),Bi.setAttribute("uv",new Zr(n,2,3,!1))}this.geometry=Bi,this.material=t,this.center=new tt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ki.setFromMatrixScale(this.matrixWorld),Gh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Hi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ki.multiplyScalar(-Hi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;br(Mr.set(-.5,-.5,0),Hi,a,ki,s,r),br(Ss.set(.5,-.5,0),Hi,a,ki,s,r),br(Sr.set(.5,.5,0),Hi,a,ki,s,r),ch.set(0,0),go.set(1,0),hh.set(1,1);let o=t.ray.intersectTriangle(Mr,Ss,Sr,!1,ys);if(o===null&&(br(Ss.set(-.5,.5,0),Hi,a,ki,s,r),go.set(0,1),o=t.ray.intersectTriangle(Mr,Sr,Ss,!1,ys),o===null))return;let l=t.ray.origin.distanceTo(ys);l<t.near||l>t.far||e.push({distance:l,point:ys.clone(),uv:ui.getInterpolation(ys,Mr,Ss,Sr,ch,go,hh,new tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function br(i,t,e,n,s,r){Vi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ms.x=r*Vi.x-s*Vi.y,Ms.y=s*Vi.x+r*Vi.y):Ms.copy(Vi),i.copy(t),i.x+=Ms.x,i.y+=Ms.y,i.applyMatrix4(Gh)}var Ds=class extends Dn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},uh=new ue,Yo=new Vr,Er=new ji,wr=new C,jr=class extends Te{constructor(t=new de,e=new Ds){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(s),Er.radius+=r,t.ray.intersectsSphere(Er)===!1)return;uh.copy(s).invert(),Yo.copy(t.ray).applyMatrix4(uh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,x=p;g<x;g++){let m=c.getX(g);wr.fromBufferAttribute(u,m),dh(wr,m,l,s,t,e,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,x=p;g<x;g++)wr.fromBufferAttribute(u,g),dh(wr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function dh(i,t,e,n,s,r,a){let o=Yo.distanceSqToPoint(i);if(o<e){let l=new C;Yo.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}var jn=class extends Ze{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},je=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new tt:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new C,s=[],r=[],a=[],o=new C,l=new ue;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Se(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Se(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Us=class extends je{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let n=e||new tt,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Jo=class extends Us{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ml(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Tr=new C,Ao=new Ml,xo=new Ml,_o=new Ml,Ns=class extends je{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Tr.subVectors(s[0],s[1]).add(s[0]),c=Tr);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Tr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Tr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ao.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),xo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),_o.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Ao.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),xo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),_o.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ao.calc(l),xo.calc(l),_o.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function fh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function ug(i,t){let e=1-i;return e*e*t}function dg(i,t){return 2*(1-i)*i*t}function fg(i,t){return i*i*t}function Ts(i,t,e,n){return ug(i,t)+dg(i,e)+fg(i,n)}function pg(i,t){let e=1-i;return e*e*e*t}function mg(i,t){let e=1-i;return 3*e*e*i*t}function gg(i,t){return 3*(1-i)*i*i*t}function Ag(i,t){return i*i*i*t}function Rs(i,t,e,n,s){return pg(i,t)+mg(i,e)+gg(i,n)+Ag(i,s)}var $r=class extends je{constructor(t=new tt,e=new tt,n=new tt,s=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new tt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Rs(t,s.x,r.x,a.x,o.x),Rs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Qo=class extends je{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Rs(t,s.x,r.x,a.x,o.x),Rs(t,s.y,r.y,a.y,o.y),Rs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ta=class extends je{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zo=class extends je{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ea=class extends je{constructor(t=new tt,e=new tt,n=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new tt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ts(t,s.x,r.x,a.x),Ts(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},na=class extends je{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ts(t,s.x,r.x,a.x),Ts(t,s.y,r.y,a.y),Ts(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ia=class extends je{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(fh(o,l.x,c.x,h.x,u.x),fh(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new tt().fromArray(s))}return this}},sa=Object.freeze({__proto__:null,ArcCurve:Jo,CatmullRomCurve3:Ns,CubicBezierCurve:$r,CubicBezierCurve3:Qo,EllipseCurve:Us,LineCurve:ta,LineCurve3:Zo,QuadraticBezierCurve:ea,QuadraticBezierCurve3:na,SplineCurve:ia}),Ko=class extends je{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sa[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new sa[s.type]().fromJSON(s))}return this}},ra=class extends Ko{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ta(this.currentPoint.clone(),new tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ea(this.currentPoint.clone(),new tt(t,e),new tt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new $r(this.currentPoint.clone(),new tt(t,e),new tt(n,s),new tt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ia(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Us(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},aa=class i extends de{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Se(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new C,d=new tt,p=new C,g=new C,x=new C,m=0,f=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,f=t[_+1].y-t[_].y,p.x=f*1,p.y=-m,p.z=f*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[_+1].x-t[_].x,f=t[_+1].y-t[_].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(g)}for(let _=0;_<=e;_++){let A=n+_*h*s,M=Math.sin(A),P=Math.cos(A);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*M,u.y=t[w].y,u.z=t[w].x*P,a.push(u.x,u.y,u.z),d.x=_/e,d.y=w/(t.length-1),o.push(d.x,d.y);let T=l[3*w+0]*M,F=l[3*w+1],y=l[3*w+0]*P;c.push(T,F,y)}}for(let _=0;_<e;_++)for(let A=0;A<t.length-1;A++){let M=A+_*t.length,P=M,w=M+t.length,T=M+t.length+1,F=M+1;r.push(P,w,F),r.push(T,F,w)}this.setIndex(r),this.setAttribute("position",new Wt(a,3)),this.setAttribute("uv",new Wt(o,2)),this.setAttribute("normal",new Wt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var is=class i extends de{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new C,h=new tt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Wt(a,3)),this.setAttribute("normal",new Wt(o,3)),this.setAttribute("uv",new Wt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ss=class i extends de{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,x=[],m=n/2,f=0;_(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(p,2));function _(){let M=new C,P=new C,w=0,T=(e-t)/n;for(let F=0;F<=r;F++){let y=[],E=F/r,N=E*(e-t)+t;for(let B=0;B<=s;B++){let rt=B/s,L=rt*l+o,V=Math.sin(L),X=Math.cos(L);P.x=N*V,P.y=-E*n+m,P.z=N*X,u.push(P.x,P.y,P.z),M.set(V,T,X).normalize(),d.push(M.x,M.y,M.z),p.push(rt,1-E),y.push(g++)}x.push(y)}for(let F=0;F<s;F++)for(let y=0;y<r;y++){let E=x[y][F],N=x[y+1][F],B=x[y+1][F+1],rt=x[y][F+1];h.push(E,N,rt),h.push(N,B,rt),w+=6}c.addGroup(f,w,0),f+=w}function A(M){let P=g,w=new tt,T=new C,F=0,y=M===!0?t:e,E=M===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*E,0),d.push(0,E,0),p.push(.5,.5),g++;let N=g;for(let B=0;B<=s;B++){let L=B/s*l+o,V=Math.cos(L),X=Math.sin(L);T.x=y*X,T.y=m*E,T.z=y*V,u.push(T.x,T.y,T.z),d.push(0,E,0),w.x=V*.5+.5,w.y=X*.5*E+.5,p.push(w.x,w.y),g++}for(let B=0;B<s;B++){let rt=P+B,L=N+B;M===!0?h.push(L,L+1,rt):h.push(L+1,L,rt),F+=3}c.addGroup(f,F,M===!0?1:2),f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var jo=class i extends de{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Wt(r,3)),this.setAttribute("normal",new Wt(r.slice(),3)),this.setAttribute("uv",new Wt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let A=new C,M=new C,P=new C;for(let w=0;w<e.length;w+=3)p(e[w+0],A),p(e[w+1],M),p(e[w+2],P),l(A,M,P,_)}function l(_,A,M,P){let w=P+1,T=[];for(let F=0;F<=w;F++){T[F]=[];let y=_.clone().lerp(M,F/w),E=A.clone().lerp(M,F/w),N=w-F;for(let B=0;B<=N;B++)B===0&&F===w?T[F][B]=y:T[F][B]=y.clone().lerp(E,B/N)}for(let F=0;F<w;F++)for(let y=0;y<2*(w-F)-1;y++){let E=Math.floor(y/2);y%2===0?(d(T[F][E+1]),d(T[F+1][E]),d(T[F][E])):(d(T[F][E+1]),d(T[F+1][E+1]),d(T[F+1][E]))}}function c(_){let A=new C;for(let M=0;M<r.length;M+=3)A.x=r[M+0],A.y=r[M+1],A.z=r[M+2],A.normalize().multiplyScalar(_),r[M+0]=A.x,r[M+1]=A.y,r[M+2]=A.z}function h(){let _=new C;for(let A=0;A<r.length;A+=3){_.x=r[A+0],_.y=r[A+1],_.z=r[A+2];let M=m(_)/2/Math.PI+.5,P=f(_)/Math.PI+.5;a.push(M,1-P)}g(),u()}function u(){for(let _=0;_<a.length;_+=6){let A=a[_+0],M=a[_+2],P=a[_+4],w=Math.max(A,M,P),T=Math.min(A,M,P);w>.9&&T<.1&&(A<.2&&(a[_+0]+=1),M<.2&&(a[_+2]+=1),P<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function p(_,A){let M=_*3;A.x=t[M+0],A.y=t[M+1],A.z=t[M+2]}function g(){let _=new C,A=new C,M=new C,P=new C,w=new tt,T=new tt,F=new tt;for(let y=0,E=0;y<r.length;y+=9,E+=6){_.set(r[y+0],r[y+1],r[y+2]),A.set(r[y+3],r[y+4],r[y+5]),M.set(r[y+6],r[y+7],r[y+8]),w.set(a[E+0],a[E+1]),T.set(a[E+2],a[E+3]),F.set(a[E+4],a[E+5]),P.copy(_).add(A).add(M).divideScalar(3);let N=m(P);x(w,E+0,_,N),x(T,E+2,A,N),x(F,E+4,M,N)}}function x(_,A,M,P){P<0&&_.x===1&&(a[A]=_.x-1),M.x===0&&M.z===0&&(a[A]=P/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var mi=class extends ra{constructor(t){super(t),this.uuid=Pn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ra().fromJSON(s))}return this}},xg={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Wh(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,p;if(n&&(r=Sg(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Fs(r,a,e,o,l,p,0),a}};function Wh(i,t,e,n,s){let r,a;if(s===Dg(i,t,e,n)>0)for(r=t;r<e;r+=n)a=ph(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=ph(r,i[r],i[r+1],a);return a&&Aa(a,a.next)&&(Bs(a),a=a.next),a}function gi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Aa(e,e.next)||oe(e.prev,e,e.next)===0)){if(Bs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Fs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Rg(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?vg(i,n,s,r):_g(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Bs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=yg(gi(i),t,e),Fs(i,t,e,n,s,r,2)):a===2&&Mg(i,t,e,n,s,r):Fs(gi(i),t,e,n,s,r,1);break}}}function _g(i){let t=i.prev,e=i,n=i.next;if(oe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Xi(s,o,r,l,a,c,g.x,g.y)&&oe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vg(i,t,e,n){let s=i.prev,r=i,a=i.next;if(oe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,f=$o(p,g,t,e,n),_=$o(x,m,t,e,n),A=i.prevZ,M=i.nextZ;for(;A&&A.z>=f&&M&&M.z<=_;){if(A.x>=p&&A.x<=x&&A.y>=g&&A.y<=m&&A!==s&&A!==a&&Xi(o,h,l,u,c,d,A.x,A.y)&&oe(A.prev,A,A.next)>=0||(A=A.prevZ,M.x>=p&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Xi(o,h,l,u,c,d,M.x,M.y)&&oe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;A&&A.z>=f;){if(A.x>=p&&A.x<=x&&A.y>=g&&A.y<=m&&A!==s&&A!==a&&Xi(o,h,l,u,c,d,A.x,A.y)&&oe(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;M&&M.z<=_;){if(M.x>=p&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Xi(o,h,l,u,c,d,M.x,M.y)&&oe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function yg(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Aa(s,r)&&Xh(s,n,n.next,r)&&Os(s,r)&&Os(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Bs(n),Bs(n.next),n=i=r),n=n.next}while(n!==i);return gi(n)}function Mg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Pg(a,o)){let l=qh(a,o);a=gi(a,a.next),l=gi(l,l.next),Fs(a,t,e,n,s,r,0),Fs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Sg(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Wh(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(zg(c));for(s.sort(bg),r=0;r<s.length;r++)e=Eg(s[r],e);return e}function bg(i,t){return i.x-t.x}function Eg(i,t){let e=wg(i,t);if(!e)return t;let n=qh(e,i);return gi(n,n.next),gi(e,e.next)}function wg(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Xi(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Os(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Tg(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Tg(i,t){return oe(i.prev,i,t.prev)<0&&oe(t.next,i,i.next)<0}function Rg(i,t,e,n){let s=i;do s.z===0&&(s.z=$o(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Cg(s)}function Cg(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function $o(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function zg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Xi(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Pg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ig(i,t)&&(Os(i,t)&&Os(t,i)&&Lg(i,t)&&(oe(i.prev,i,t.prev)||oe(i,t.prev,t))||Aa(i,t)&&oe(i.prev,i,i.next)>0&&oe(t.prev,t,t.next)>0)}function oe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Aa(i,t){return i.x===t.x&&i.y===t.y}function Xh(i,t,e,n){let s=Cr(oe(i,t,e)),r=Cr(oe(i,t,n)),a=Cr(oe(e,n,i)),o=Cr(oe(e,n,t));return!!(s!==r&&a!==o||s===0&&Rr(i,e,t)||r===0&&Rr(i,n,t)||a===0&&Rr(e,i,n)||o===0&&Rr(e,t,n))}function Rr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Cr(i){return i>0?1:i<0?-1:0}function Ig(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Xh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Os(i,t){return oe(i.prev,i,i.next)<0?oe(i,t,i.next)>=0&&oe(i,i.prev,t)>=0:oe(i,t,i.prev)<0||oe(i,i.next,t)<0}function Lg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function qh(i,t){let e=new tl(i.i,i.x,i.y),n=new tl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ph(i,t,e,n){let s=new tl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Bs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function tl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Dg(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Yn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];mh(t),gh(n,t);let a=t.length;e.forEach(mh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,gh(n,e[l]);let o=xg.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function mh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function gh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ks=class i extends de{constructor(t=new mi([new tt(.5,.5),new tt(-.5,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Wt(s,3)),this.setAttribute("uv",new Wt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:Ug,A,M=!1,P,w,T,F;f&&(A=f.getSpacedPoints(h),M=!0,d=!1,P=f.computeFrenetFrames(h,!1),w=new C,T=new C,F=new C),d||(m=0,p=0,g=0,x=0);let y=o.extractPoints(c),E=y.shape,N=y.holes;if(!Yn.isClockWise(E)){E=E.reverse();for(let z=0,ht=N.length;z<ht;z++){let K=N[z];Yn.isClockWise(K)&&(N[z]=K.reverse())}}let rt=Yn.triangulateShape(E,N),L=E;for(let z=0,ht=N.length;z<ht;z++){let K=N[z];E=E.concat(K)}function V(z,ht,K){return ht||console.error("THREE.ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(ht,K)}let X=E.length,Z=rt.length;function $(z,ht,K){let ct,j,Et,gt=z.x-ht.x,S=z.y-ht.y,v=K.x-z.x,H=K.y-z.y,lt=gt*gt+S*S,at=gt*H-S*v;if(Math.abs(at)>Number.EPSILON){let st=Math.sqrt(lt),St=Math.sqrt(v*v+H*H),ft=ht.x-S/st,vt=ht.y+gt/st,Ct=K.x-H/St,Nt=K.y+v/St,ot=((Ct-ft)*H-(Nt-vt)*v)/(gt*H-S*v);ct=ft+gt*ot-z.x,j=vt+S*ot-z.y;let Jt=ct*ct+j*j;if(Jt<=2)return new tt(ct,j);Et=Math.sqrt(Jt/2)}else{let st=!1;gt>Number.EPSILON?v>Number.EPSILON&&(st=!0):gt<-Number.EPSILON?v<-Number.EPSILON&&(st=!0):Math.sign(S)===Math.sign(H)&&(st=!0),st?(ct=-S,j=gt,Et=Math.sqrt(lt)):(ct=gt,j=S,Et=Math.sqrt(lt/2))}return new tt(ct/Et,j/Et)}let Q=[];for(let z=0,ht=L.length,K=ht-1,ct=z+1;z<ht;z++,K++,ct++)K===ht&&(K=0),ct===ht&&(ct=0),Q[z]=$(L[z],L[K],L[ct]);let R=[],D,O=Q.concat();for(let z=0,ht=N.length;z<ht;z++){let K=N[z];D=[];for(let ct=0,j=K.length,Et=j-1,gt=ct+1;ct<j;ct++,Et++,gt++)Et===j&&(Et=0),gt===j&&(gt=0),D[ct]=$(K[ct],K[Et],K[gt]);R.push(D),O=O.concat(D)}for(let z=0;z<m;z++){let ht=z/m,K=p*Math.cos(ht*Math.PI/2),ct=g*Math.sin(ht*Math.PI/2)+x;for(let j=0,Et=L.length;j<Et;j++){let gt=V(L[j],Q[j],ct);nt(gt.x,gt.y,-K)}for(let j=0,Et=N.length;j<Et;j++){let gt=N[j];D=R[j];for(let S=0,v=gt.length;S<v;S++){let H=V(gt[S],D[S],ct);nt(H.x,H.y,-K)}}}let I=g+x;for(let z=0;z<X;z++){let ht=d?V(E[z],O[z],I):E[z];M?(T.copy(P.normals[0]).multiplyScalar(ht.x),w.copy(P.binormals[0]).multiplyScalar(ht.y),F.copy(A[0]).add(T).add(w),nt(F.x,F.y,F.z)):nt(ht.x,ht.y,0)}for(let z=1;z<=h;z++)for(let ht=0;ht<X;ht++){let K=d?V(E[ht],O[ht],I):E[ht];M?(T.copy(P.normals[z]).multiplyScalar(K.x),w.copy(P.binormals[z]).multiplyScalar(K.y),F.copy(A[z]).add(T).add(w),nt(F.x,F.y,F.z)):nt(K.x,K.y,u/h*z)}for(let z=m-1;z>=0;z--){let ht=z/m,K=p*Math.cos(ht*Math.PI/2),ct=g*Math.sin(ht*Math.PI/2)+x;for(let j=0,Et=L.length;j<Et;j++){let gt=V(L[j],Q[j],ct);nt(gt.x,gt.y,u+K)}for(let j=0,Et=N.length;j<Et;j++){let gt=N[j];D=R[j];for(let S=0,v=gt.length;S<v;S++){let H=V(gt[S],D[S],ct);M?nt(H.x,H.y+A[h-1].y,A[h-1].x+K):nt(H.x,H.y,u+K)}}}G(),et();function G(){let z=s.length/3;if(d){let ht=0,K=X*ht;for(let ct=0;ct<Z;ct++){let j=rt[ct];_t(j[2]+K,j[1]+K,j[0]+K)}ht=h+m*2,K=X*ht;for(let ct=0;ct<Z;ct++){let j=rt[ct];_t(j[0]+K,j[1]+K,j[2]+K)}}else{for(let ht=0;ht<Z;ht++){let K=rt[ht];_t(K[2],K[1],K[0])}for(let ht=0;ht<Z;ht++){let K=rt[ht];_t(K[0]+X*h,K[1]+X*h,K[2]+X*h)}}n.addGroup(z,s.length/3-z,0)}function et(){let z=s.length/3,ht=0;it(L,ht),ht+=L.length;for(let K=0,ct=N.length;K<ct;K++){let j=N[K];it(j,ht),ht+=j.length}n.addGroup(z,s.length/3-z,1)}function it(z,ht){let K=z.length;for(;--K>=0;){let ct=K,j=K-1;j<0&&(j=z.length-1);for(let Et=0,gt=h+m*2;Et<gt;Et++){let S=X*Et,v=X*(Et+1),H=ht+ct+S,lt=ht+j+S,at=ht+j+v,st=ht+ct+v;Mt(H,lt,at,st)}}}function nt(z,ht,K){l.push(z),l.push(ht),l.push(K)}function _t(z,ht,K){At(z),At(ht),At(K);let ct=s.length/3,j=_.generateTopUV(n,s,ct-3,ct-2,ct-1);Rt(j[0]),Rt(j[1]),Rt(j[2])}function Mt(z,ht,K,ct){At(z),At(ht),At(ct),At(ht),At(K),At(ct);let j=s.length/3,Et=_.generateSideWallUV(n,s,j-6,j-3,j-2,j-1);Rt(Et[0]),Rt(Et[1]),Rt(Et[3]),Rt(Et[1]),Rt(Et[2]),Rt(Et[3])}function At(z){s.push(l[z*3+0]),s.push(l[z*3+1]),s.push(l[z*3+2])}function Rt(z){r.push(z.x),r.push(z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ng(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new sa[s.type]().fromJSON(s)),new i(n,t.options)}},Ug={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new tt(r,a),new tt(o,l),new tt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new tt(a,1-l),new tt(c,1-u),new tt(d,1-g),new tt(x,1-f)]:[new tt(o,1-l),new tt(h,1-u),new tt(p,1-g),new tt(m,1-f)]}};function Ng(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var rs=class i extends jo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Hs=class i extends de{constructor(t=new mi([new tt(0,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Wt(s,3)),this.setAttribute("normal",new Wt(r,3)),this.setAttribute("uv",new Wt(a,2));function c(h){let u=s.length/3,d=h.extractPoints(e),p=d.shape,g=d.holes;Yn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let _=g[m];Yn.isClockWise(_)===!0&&(g[m]=_.reverse())}let x=Yn.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let _=g[m];p=p.concat(_)}for(let m=0,f=p.length;m<f;m++){let _=p[m];s.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let m=0,f=x.length;m<f;m++){let _=x[m],A=_[0]+u,M=_[1]+u,P=_[2]+u;n.push(A,M,P),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Fg(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function Fg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var An=class i extends de{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,d=new C,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){let _=[],A=f/n,M=0;f===0&&a===0?M=.5/e:f===n&&l===Math.PI&&(M=-.5/e);for(let P=0;P<=e;P++){let w=P/e;u.x=-t*Math.cos(s+w*r)*Math.sin(a+A*o),u.y=t*Math.cos(a+A*o),u.z=t*Math.sin(s+w*r)*Math.sin(a+A*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(w+M,1-A),_.push(c++)}h.push(_)}for(let f=0;f<n;f++)for(let _=0;_<e;_++){let A=h[f][_+1],M=h[f][_],P=h[f+1][_],w=h[f+1][_+1];(f!==0||a>0)&&p.push(A,M,w),(f!==n-1||l<Math.PI)&&p.push(M,P,w)}this.setIndex(p),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(x,3)),this.setAttribute("uv",new Wt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var oa=class i extends de{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new C,u=new C,d=new C;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let x=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,_=(s+1)*p+g;a.push(x,m,_),a.push(m,f,_)}this.setIndex(a),this.setAttribute("position",new Wt(o,3)),this.setAttribute("normal",new Wt(l,3)),this.setAttribute("uv",new Wt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var la=class i extends de{constructor(t=new na(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new tt,h=new C,u=[],d=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(p,2));function x(){for(let A=0;A<e;A++)m(A);m(r===!1?e:0),_(),f()}function m(A){h=t.getPointAt(A/e,h);let M=a.normals[A],P=a.binormals[A];for(let w=0;w<=s;w++){let T=w/s*Math.PI*2,F=Math.sin(T),y=-Math.cos(T);l.x=y*M.x+F*P.x,l.y=y*M.y+F*P.y,l.z=y*M.z+F*P.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function f(){for(let A=1;A<=e;A++)for(let M=1;M<=s;M++){let P=(s+1)*(A-1)+(M-1),w=(s+1)*A+(M-1),T=(s+1)*A+M,F=(s+1)*(A-1)+M;g.push(P,w,F),g.push(w,T,F)}}function _(){for(let A=0;A<=e;A++)for(let M=0;M<=s;M++)c.x=A/e,c.y=M/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new sa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ca=class extends ge{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$e=class extends Dn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ih,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function zr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Og(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var as=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},el=class extends as{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vc,endingEnd:vc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case yc:r=t,o=2*e-n;break;case Mc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case yc:a=t,l=2*n-e;break;case Mc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,A=(-1-p)*m+(1.5+p)*x+.5*g,M=p*m-p*x;for(let P=0;P!==o;++P)r[P]=f*a[h+P]+_*a[c+P]+A*a[l+P]+M*a[u+P];return r}},nl=class extends as{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},il=class extends as{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=zr(e,this.TimeBufferType),this.values=zr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:zr(t.times,Array),values:zr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new el(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ir:e=this.InterpolantFactoryMethodDiscrete;break;case Lr:e=this.InterpolantFactoryMethodLinear;break;case Wa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ir;case this.InterpolantFactoryMethodLinear:return Lr;case this.InterpolantFactoryMethodSmooth:return Wa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Og(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Wa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=Lr;var Ai=class extends un{};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Ir;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends un{};sl.prototype.ValueTypeName="color";var rl=class extends un{};rl.prototype.ValueTypeName="number";var al=class extends as{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Kn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Vs=class extends un{InterpolantFactoryMethodLinear(t){return new al(this.times,this.values,this.getValueSize(),t)}};Vs.prototype.ValueTypeName="quaternion";Vs.prototype.DefaultInterpolation=Lr;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends un{};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=Ir;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends un{};ol.prototype.ValueTypeName="vector";var ll=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},Bg=new ll,cl=class{constructor(t){this.manager=t!==void 0?t:Bg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};cl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gs=class extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},ha=class extends Gs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},vo=new ue,Ah=new C,xh=new C,ua=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ps,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ah.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ah),xh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xh),e.updateMatrixWorld(),vo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var _h=new ue,bs=new C,yo=new C,hl=class extends ua{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),bs.setFromMatrixPosition(t.matrixWorld),n.position.copy(bs),yo.copy(n.position),yo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(yo),n.updateMatrixWorld(),s.makeTranslation(-bs.x,-bs.y,-bs.z),_h.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_h)}},os=class extends Gs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new hl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},ul=class extends ua{constructor(){super(new ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},da=class extends Gs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new ul}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var fa=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=vh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function vh(){return(typeof performance>"u"?Date:performance).now()}var Sl="\\[\\]\\.:\\/",kg=new RegExp("["+Sl+"]","g"),bl="[^"+Sl+"]",Hg="[^"+Sl.replace("\\.","")+"]",Vg=/((?:WC+[\/:])*)/.source.replace("WC",bl),Gg=/(WCOD+)?/.source.replace("WCOD",Hg),Wg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bl),Xg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bl),qg=new RegExp("^"+Vg+Gg+Wg+Xg+"$"),Yg=["material","materials","bones","map"],dl=class{constructor(t,e,n){let s=n||se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(kg,"")}static parseTrackName(t){let e=qg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Yg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};se.Composite=dl;se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};se.prototype.GetterByBindingType=[se.prototype._getValue_direct,se.prototype._getValue_array,se.prototype._getValue_arrayElement,se.prototype._getValue_toArray];se.prototype.SetterByBindingTypeAndVersioning=[[se.prototype._setValue_direct,se.prototype._setValue_direct_setNeedsUpdate,se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[se.prototype._setValue_array,se.prototype._setValue_array_setNeedsUpdate,se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[se.prototype._setValue_arrayElement,se.prototype._setValue_arrayElement_setNeedsUpdate,se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[se.prototype._setValue_fromArray,se.prototype._setValue_fromArray_setNeedsUpdate,se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var AA=new Float32Array(1);var ls=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Se(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fl);var xa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Xe=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Jg=new ts(-1,1,1,-1,0,1),wl=class extends de{constructor(){super(),this.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Wt([0,2,0,0,2,0],2))}},Qg=new wl,ti=class{constructor(t){this._mesh=new Yt(Qg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Jg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var _a=class extends Xe{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ge?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=$n.clone(t.uniforms),this.material=new ge({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ti(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Xs=class extends Xe{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},va=class extends Xe{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ya=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new tt);this._width=n.width,this._height=n.height,e=new Be(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:cn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _a(xa),this.copyPass.material.blending=gn,this.clock=new fa}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Xs!==void 0&&(a instanceof Xs?n=!0:a instanceof va&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ma=class extends Xe{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new wt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Yh={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new wt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var hs=class i extends Xe{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new tt(t.x,t.y):new tt(256,256),this.clearColor=new wt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Be(r,a,{type:cn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Be(r,a,{type:cn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new Be(r,a,{type:cn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}let o=Yh;this.highPassUniforms=$n.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ge({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new tt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=xa;this.copyUniforms=$n.clone(h.uniforms),this.blendMaterial=new ge({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Qn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new wt,this.oldClearAlpha=1,this.basic=new We,this.fsQuad=new ti(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new tt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ge({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new tt(.5,.5)},direction:{value:new tt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new ge({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};hs.BlurDirectionX=new tt(1,0);hs.BlurDirectionY=new tt(0,1);var Jh={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Sa=class extends Xe{constructor(){super();let t=Jh;this.uniforms=$n.clone(t.uniforms),this.material=new ca({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ti(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Qt.getTransfer(this._outputColorSpace)===Kt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ml?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===gl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Al?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ws?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xl&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ba=class extends ns{constructor(t=null){super();let e=new hn;e.deleteAttribute("uv");let n=new $e({side:Ee}),s=new $e,r=5;t!==null&&t._useLegacyLights===!1&&(r=900);let a=new os(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new Yt(e,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let l=new Yt(e,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new Yt(e,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new Yt(e,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new Yt(e,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new Yt(e,s);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let p=new Yt(e,s);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);let g=new Yt(e,us(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let x=new Yt(e,us(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let m=new Yt(e,us(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let f=new Yt(e,us(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let _=new Yt(e,us(20));_.position.set(3.235,11.486,-12.541),_.scale.set(2.5,2,.1),this.add(_);let A=new Yt(e,us(100));A.position.set(0,20,0),A.scale.set(1,.1,1),this.add(A)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function us(i){let t=new We;return t.color.setScalar(i),t}var qs=new C;function tn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;qs.copy(t),qs[n]=0,qs.normalize();let c=.5*a/(a+o),h=1-qs.angleTo(i)/l;return Math.sign(qs[e])===1?h*c:o/(a+o)+c+c*(1-h)}var Ea=class extends hn{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new C,l=new C,c=new C(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,g=new C,x=.5/s;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*r,h[m+1]=c.y*Math.sign(o.y)+l.y*r,h[m+2]=c.z*Math.sign(o.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[f+0]=tn(g,l,"z","y",r,n),d[f+1]=1-tn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[f+0]=1-tn(g,l,"z","y",r,n),d[f+1]=1-tn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[f+0]=1-tn(g,l,"x","z",r,t),d[f+1]=tn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[f+0]=1-tn(g,l,"x","z",r,t),d[f+1]=1-tn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[f+0]=1-tn(g,l,"x","y",r,t),d[f+1]=1-tn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[f+0]=tn(g,l,"x","y",r,t),d[f+1]=1-tn(g,l,"y","x",r,e);break}}};function en(i,t=i){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function Un(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function dn(i,{repeat:t=[1,1],srgb:e=!0}={}){let n=new jn(i);return n.wrapS=n.wrapT=Cs,n.repeat.set(t[0],t[1]),n.anisotropy=8,e&&(n.colorSpace=he),n}function Tl(i,t,e,n,s,r,a){for(let o=0;o<s;o++){let l=n()*t,c=n()*e,h=(.04+n()*.22)*t,u=i.createRadialGradient(l,c,0,l,c,h),d=r[Math.floor(n()*r.length)];u.addColorStop(0,d.replace("A",String(a*(.4+n()*.6)))),u.addColorStop(1,d.replace("A","0")),i.fillStyle=u;for(let p of[-t,0,t])for(let g of[-e,0,e])i.save(),i.translate(p,g),i.fillRect(l-h,c-h,h*2,h*2),i.restore()}}function Ys(i,t,e,n,s){let r=i.getImageData(0,0,t,e),a=r.data;for(let o=0;o<a.length;o+=4){let l=(n()-.5)*s;a[o]+=l,a[o+1]+=l,a[o+2]+=l}i.putImageData(r,0,0)}function _i(i="#8a8580",t=1,e=[1,1],n=.16){let[s,r]=en(512),a=Un(t);return r.fillStyle=i,r.fillRect(0,0,512,512),Tl(r,512,512,a,70,["rgba(255,250,240,A)","rgba(40,36,32,A)"],n),Ys(r,512,512,a,22),dn(s,{repeat:e})}function Rl(i="#6f6d6a",t=3,e=.9){let[n,s]=en(1024),r=Un(t);s.fillStyle=i,s.fillRect(0,0,1024,1024),Tl(s,1024,1024,r,90,["rgba(255,255,255,A)","rgba(20,20,20,A)"],.09),Ys(s,1024,1024,r,12),s.strokeStyle="rgba(20,18,16,0.55)",s.lineWidth=3;for(let o=0;o<=2;o++)s.beginPath(),s.moveTo(o*512,0),s.lineTo(o*512,1024),s.stroke(),s.beginPath(),s.moveTo(0,o*512),s.lineTo(1024,o*512),s.stroke();let a=dn(n);return a.userData.tileSize=e*2,a}function wa(i=[92,58,36],t=7,{dark:e=0}={}){let[n,s]=en(512),r=Un(t),[a,o,l]=i.map(c=>c*(1-e));s.fillStyle=`rgb(${a},${o},${l})`,s.fillRect(0,0,512,512);for(let c=0;c<4;c++){let h=.85+r()*.3;s.fillStyle=`rgba(${a*h},${o*h},${l*h},0.6)`,s.fillRect(c*128,0,128,512)}for(let c=0;c<260;c++){let h=r()*512,u=1+r()*5,d=.004+r()*.012,p=r()*6,g=r()>.5;s.strokeStyle=g?`rgba(255,220,180,${.02+r()*.04})`:`rgba(20,10,4,${.04+r()*.08})`,s.lineWidth=.5+r()*1.4,s.beginPath();for(let x=-8;x<=520;x+=8){let m=h+Math.sin(x*d+p)*u+Math.sin(x*.05+p)*1.5;x===-8?s.moveTo(m,x):s.lineTo(m,x)}s.stroke()}return Ys(s,512,512,r,10),dn(n)}function Qh(i=11){let n=Un(i),s=[],r=[];for(let p=0;p<13;p++)for(let g=0;g<13;g++){s.push([(g+.1+n()*.8)/13,(p+.1+n()*.8)/13]);let x=62+n()*62,m=4+n()*16;r.push([x+m,x+m*.7,x])}let[a,o]=en(512),[l,c]=en(512),h=o.createImageData(512,512),u=c.createImageData(512,512),d=Un(i+1);for(let p=0;p<512;p++)for(let g=0;g<512;g++){let x=g/512,m=p/512,f=Math.floor(x*13),_=Math.floor(m*13),A=9,M=9,P=0;for(let L=-1;L<=1;L++)for(let V=-1;V<=1;V++){let X=f+V,Z=_+L,$=0,Q=0;X<0?(X+=13,$=-1):X>=13&&(X-=13,$=1),Z<0?(Z+=13,Q=-1):Z>=13&&(Z-=13,Q=1);let R=Z*13+X,D=s[R],O=D[0]+$-x,I=D[1]+Q-m,G=Math.sqrt(O*O+I*I);G<A?(M=A,A=G,P=R):G<M&&(M=G)}let w=(M-A)*13,T=Math.min(1,Math.max(0,(w-.03)/.1)),F=Math.min(1,w*2.2),y=(d()-.5)*30+Math.sin(g*.21+p*.13)*4,E=r[P],N=(p*512+g)*4,B=.55+.45*F;h.data[N]=(E[0]*B+y)*T+34*(1-T),h.data[N+1]=(E[1]*B+y)*T+32*(1-T),h.data[N+2]=(E[2]*B+y)*T+30*(1-T),h.data[N+3]=255;let rt=255*(.25+.75*F)*T+y*.6;u.data[N]=u.data[N+1]=u.data[N+2]=rt,u.data[N+3]=255}return o.putImageData(h,0,0),c.putImageData(u,0,0),{map:dn(a),bump:dn(l,{srgb:!1})}}function Nn(i="#5a5550",t=5){let[e,n]=en(256),s=Un(t);n.fillStyle=i,n.fillRect(0,0,256,256);for(let r=0;r<256;r+=2)n.fillStyle=`rgba(255,255,255,${.02+s()*.03})`,n.fillRect(0,r,256,1),n.fillStyle=`rgba(0,0,0,${.03+s()*.04})`,n.fillRect(r,0,1,256);return Ys(n,256,256,s,16),dn(e)}function Zh(i="#7b3f1d",t=9){let[e,n]=en(512),s=Un(t);return n.fillStyle=i,n.fillRect(0,0,512,512),Tl(n,512,512,s,80,["rgba(255,190,130,A)","rgba(30,10,0,A)"],.1),Ys(n,512,512,s,26),dn(e)}function Kh(i=21){let[t,e]=en(512),n=Un(i);e.fillStyle="#2a1840",e.fillRect(0,0,512,512);let s=["#ff4f8b","#ffb000","#3dd6c4","#7b5cff","#ff6a3d","#1fa2ff","#c2f970","#ff9ad5"];for(let a=0;a<520;a++){let o=n()*Math.PI*2,l=Math.pow(n(),.7)*250,c=256+Math.cos(o)*l,h=256+Math.sin(o)*l,u=6+n()*26;e.fillStyle=s[Math.floor(n()*s.length)],e.globalAlpha=.6+n()*.4,e.beginPath(),e.ellipse(c,h,u,u*(.5+n()*.5),n()*3,0,Math.PI*2),e.fill()}e.globalAlpha=1;let r=e.createRadialGradient(256,256,30,256,256,120);return r.addColorStop(0,"rgba(60,40,140,0.9)"),r.addColorStop(1,"rgba(60,40,140,0)"),e.fillStyle=r,e.fillRect(0,0,512,512),dn(t)}function jh(){let[i,t]=en(512,288),e=t.createLinearGradient(0,0,512,288);e.addColorStop(0,"#0b2a3a"),e.addColorStop(.5,"#1d6d8c"),e.addColorStop(1,"#0a1622"),t.fillStyle=e,t.fillRect(0,0,512,288);let n=t.createRadialGradient(380,90,4,380,90,90);n.addColorStop(0,"rgba(255,214,150,0.95)"),n.addColorStop(1,"rgba(255,214,150,0)"),t.fillStyle=n,t.fillRect(0,0,512,288),t.fillStyle="rgba(5,12,18,0.85)",t.beginPath(),t.moveTo(0,230);for(let s=0;s<=512;s+=16)t.lineTo(s,200+Math.sin(s*.03)*14+Math.sin(s*.11)*6);return t.lineTo(512,288),t.lineTo(0,288),t.fill(),dn(i,{repeat:[1,1]})}function $h(i=31){let[t,e]=en(512,256),n=Un(i);e.fillStyle="#7d756b",e.fillRect(0,0,512,256);for(let s=0;s<700;s++){let r=n()*512,a=n()*256,o=4+n()*26,l=3+n()*12,c=90+n()*70;e.fillStyle=`rgb(${c},${c*.95},${c*.88})`,e.fillRect(r,a,o,l)}return e.fillStyle="rgba(40,36,30,0.9)",e.fillRect(0,126,512,4),dn(t)}function tu(){let[i,t]=en(256);t.fillStyle="#000",t.fillRect(0,0,256,256),t.strokeStyle="#fff",t.lineWidth=7;for(let e=-256;e<512;e+=22)t.beginPath(),t.moveTo(e,0),t.lineTo(e+256,256),t.stroke(),t.beginPath(),t.moveTo(e+256,0),t.lineTo(e,256),t.stroke();return dn(i,{repeat:[3,2],srgb:!1})}function Ta(i="255,190,120"){let[t,e]=en(128),n=e.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,`rgba(${i},1)`),n.addColorStop(.35,`rgba(${i},0.35)`),n.addColorStop(1,`rgba(${i},0)`),e.fillStyle=n,e.fillRect(0,0,128,128);let s=new jn(t);return s.colorSpace=he,s}var ne=2.7,Qs={x0:-57/73.3,x1:675/73.3,z0:-50/73.3,z1:487/73.3},vi=new Set;function qt(i){let t=new $e(i);return vi.add(t),t}function fe(i,t){return i.repeat.set(1/t,1/t),i}function Kg(){let i=Qh();fe(i.map,1),fe(i.bump,1);let t=fe(wa([96,60,38],7),1.2),e=fe(wa([70,44,28],8),1.2),n=fe(wa([120,92,70],12),1.6);return{wall:qt({map:fe(_i("#7e7973",2,[1,1],.045),2.6),roughness:.92}),wallDark:qt({map:fe(_i("#4f4b47",4),2),roughness:.9}),cut:qt({color:"#181615",roughness:1}),black:qt({color:"#121212",roughness:.75}),blackGloss:qt({color:"#0d0d0e",roughness:.25,metalness:.2}),floorTile:qt({map:fe(Rl("#77736e",3),1.8),roughness:.55}),floorBath:qt({map:fe(Rl("#4a4744",6),1.2),roughness:.5}),floorWood:qt({map:n,roughness:.6}),slab:qt({map:fe(_i("#3a3735",9),3),roughness:1}),walnut:qt({map:t,roughness:.55}),walnutDark:qt({map:e,roughness:.55}),granite:qt({color:"#141414",roughness:.22,metalness:.1}),cement:qt({map:fe(_i("#8e8a85",5),1.4),roughness:.8}),stoneTop:qt({map:fe(_i("#7c7873",15),.8),roughness:.45}),stone:qt({map:i.map,bumpMap:i.bump,bumpScale:3,roughness:.95}),leather:qt({map:fe(Zh("#5e2f17"),1.2),roughness:.58}),redLacquer:qt({color:"#9d1518",roughness:.35}),greenVelvet:qt({map:fe(Nn("#1f3a2a",13),.4),roughness:.9}),linen:qt({map:fe(Nn("#8e867c",14),.5),roughness:.95}),duvet:qt({map:fe(Nn("#6d6760",15),.6),roughness:.95}),charcoal:qt({map:fe(Nn("#2c2a28",16),.5),roughness:.95}),headboard:qt({map:fe(Nn("#4a433c",17),.5),roughness:.95}),rug:qt({map:fe(Nn("#45423f",18),.8),roughness:1}),rugDark:qt({map:fe(Nn("#33302d",19),.8),roughness:1}),curtain:qt({map:fe(Nn("#a39684",20),.6),roughness:.95,side:Ge}),steel:qt({color:"#b9b9b6",roughness:.25,metalness:.95}),brass:qt({color:"#b08a55",roughness:.3,metalness:.95}),ceramic:qt({color:"#efede8",roughness:.2}),terracotta:qt({color:"#a8643f",roughness:.8}),leaf:qt({color:"#2f4728",roughness:.75}),branch:qt({color:"#5b4330",roughness:.9}),art:qt({map:Kh(),roughness:.7}),sphere:qt({map:$h(),roughness:.85}),screenOff:qt({color:"#060708",roughness:.15,metalness:.3}),glass:(()=>{let s=new $e({color:"#a9c2c8",roughness:.04,metalness:.1,transparent:!0,opacity:.18,depthWrite:!1});return vi.add(s),s})(),glassDark:(()=>{let s=new $e({color:"#1c1a18",roughness:.08,metalness:.2,transparent:!0,opacity:.45,depthWrite:!1});return vi.add(s),s})(),mirror:qt({color:"#c9ccd0",roughness:.02,metalness:1}),weave:(()=>{let s=new $e({color:"#2a2018",roughness:.9,alphaMap:tu(),alphaTest:.5,side:Ge});return vi.add(s),s})()}}function Js(i){let t=i.attributes.position,e=i.attributes.normal,n=i.attributes.uv;for(let s=0;s<t.count;s++){let r=Math.abs(e.getX(s)),a=Math.abs(e.getY(s)),o=Math.abs(e.getZ(s));r>=a&&r>=o?n.setXY(s,t.getZ(s),t.getY(s)):a>=o?n.setXY(s,t.getX(s),t.getZ(s)):n.setXY(s,t.getX(s),t.getY(s))}return n.needsUpdate=!0,i}function ie(i,t,e=0,n=0,s=0){let r=new Yt(i,t);return r.position.set(e,n,s),r.castShadow=!0,r.receiveShadow=!0,r}function Y(i,t,e,n,s,r,a,o=0){let l=t-i,c=n-e,h=r-s,u=o>0?new Ea(l,c,h,3,Math.min(o,l/2,c/2,h/2)*.98):new hn(l,c,h);return Js(u),ie(u,a,(i+t)/2,(e+n)/2,(s+r)/2)}function Re(i,t,e,n,s,r,a=32,o=i){let l=new ss(o,i,t,a);return ie(l,e,n,s+t/2,r)}function Cl(i,t,e){let n=new mi,s=-i/2,r=-t/2;return n.moveTo(s+e,r),n.lineTo(s+i-e,r),n.quadraticCurveTo(s+i,r,s+i,r+e),n.lineTo(s+i,r+t-e),n.quadraticCurveTo(s+i,r+t,s+i-e,r+t),n.lineTo(s+e,r+t),n.quadraticCurveTo(s,r+t,s,r+t-e),n.lineTo(s,r+e),n.quadraticCurveTo(s,r,s+e,r),n}function eu(i,t,e,n,s,r,a,o){let l=new ks(Cl(e,n,s),{depth:r,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:2,curveSegments:10});return l.rotateX(Math.PI/2),Js(l),ie(l,o,i,a,t)}function ds(i,t,e,n=40){let s=new Ns(i.map(r=>new C(...r)));return ie(new la(s,n,t,8,!1),e)}function nu(){let i=Kg(),t=new be,e=new We({color:new wt("#ffb46b")}),n=new We({color:new wt("#ffc58a")}),s=new We({map:jh(),color:new wt(.25,.25,.25)}),r=new We({color:new wt("#14324a")}),a=(R,D=1)=>new Ls({map:Ta(R),transparent:!0,opacity:D,depthWrite:!1,blending:Qn}),o=[];function l(R,D,O,I,G="255,180,110",et=.8){let it=new Kr(a(G,0));return it.position.set(R,D,O),it.scale.set(I,I,I),it.userData.maxOpacity=et,o.push(it),it}function c(R,D,O,I,G,et,it=e){let nt=Y(R,D,O,I,G,et,it);return nt.castShadow=!1,nt}for(let R of[Y(-.2,8.74,-.3,-.002,-.2,4.53,i.slab),Y(-.2,3.95,-.3,-.002,4.53,6.15,i.slab)])R.castShadow=!1,t.add(R);let h=new be;function u(R,D,O,I,G){let et=new Ke(O-R,I-D);et.rotateX(-Math.PI/2),et.translate((R+O)/2,.003,(D+I)/2),Js(et);let it=new Yt(et,G);it.receiveShadow=!0,h.add(it)}let d=[i.floorTile,i.floorWood,i.floorBath].map(R=>{let D=R.clone();return D.transparent=!0,D.opacity=0,vi.add(D),D}),[p,g,x]=d;u(0,0,4.4,2.3,p),u(0,2.3,3.79,4.35,p),u(0,4.35,3.95,6.03,p),u(6.92,0,8.54,1.36,g),u(4.55,1.36,8.54,2.35,g),u(3.95,2.35,8.54,4.35,g),u(4.55,0,6.79,1.24,x),t.add(h);let m=[],f=[i.wall,i.wall,i.cut,i.wall,i.wall,i.wall];function _(R,D,O,I,G=[],et=f){let it=new be,nt=D-R>=I-O,_t=nt?R:O,Mt=nt?D:I,At=(z,ht,K,ct)=>{if(ht-z<.001||ct-K<.001)return;let j=nt?Y(z,ht,K,ct,O,I,i.wall):Y(R,D,K,ct,z,ht,i.wall);j.material=et,it.add(j)},Rt=_t;for(let z of[...G].sort((ht,K)=>ht.a-K.a))At(Rt,z.a,0,ne),At(z.a,z.b,0,z.y1),At(z.a,z.b,z.y2,ne),Rt=z.b;return At(Rt,Mt,0,ne),it.userData.center=new C((R+D)/2,0,(O+I)/2),m.push(it),t.add(it),it}let A=2.1;_(-.2,8.74,-.2,0,[{a:1.27,b:2.07,y1:0,y2:A},{a:6.12,b:6.62,y1:1.65,y2:2.15}]),_(-.2,0,0,6.15),_(8.54,8.74,0,4.53),_(3.95,8.74,4.35,4.53,[{a:4.35,b:6.15,y1:.55,y2:2.35}]),_(3.79,3.95,2.3,4.35),_(3.79,4.55,2.22,2.35),_(4.4,4.55,0,2.22,[{a:.4,b:1.1,y1:0,y2:A},{a:1.42,b:2.17,y1:0,y2:A}]),_(6.79,6.92,0,1.36),_(4.55,6.92,1.24,1.36);let M=new be;{let R=new mi;R.moveTo(0,2.3),R.lineTo(0,ne),R.lineTo(3.95,ne),R.lineTo(3.95,0),R.lineTo(3.7,0),R.lineTo(3.7,1.62),R.absarc(3.02,1.62,.68,0,Math.PI/2,!1),R.lineTo(0,2.3);let D=new ks(R,{depth:.24,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03,bevelSegments:2,curveSegments:24});Js(D);let O=ie(D,i.stone,0,0,4.32);M.add(O),M.add(Y(3.7,3.95,0,ne,4.56,5.12,i.stone))}M.userData.center=new C(2,0,4.4),m.push(M),t.add(M);let P=new be;P.add(Y(0,3.95,0,.42,6.03,6.15,f)),P.add(Y(.02,3.93,.42,1.18,6.07,6.1,i.glass)),P.add(Y(0,3.95,1.18,1.21,6.05,6.12,i.black)),P.add(Y(3.8,3.92,0,.42,5.12,6.03,f)),P.add(Y(3.84,3.87,.42,1.18,5.12,6.03,i.glass)),P.add(Y(3.82,3.89,1.18,1.21,5.12,6.1,i.black)),P.userData.center=new C(2,0,6.1),m.push(P),t.add(P);let w=new be;{w.add(Y(1.29,2.05,0,2.08,-.13,-.08,i.black)),w.add(Y(1.92,1.95,.98,1.02,-.07,-.02,i.steel)),w.add(Y(4.55,5.27,0,2.08,2.12,2.16,i.black));for(let R of[.4,1.1,1.42,2.17])w.add(Y(4.38,4.57,0,A+.03,R-.015,R+.015,i.black));w.add(Y(4.35,6.15,.53,.57,4.4,4.48,i.black)),w.add(Y(4.35,6.15,2.33,2.37,4.4,4.48,i.black)),w.add(Y(5.23,5.27,.55,2.35,4.4,4.48,i.black)),w.add(Y(4.35,6.15,.57,2.33,4.43,4.45,i.glass)),w.add(Y(6.12,6.62,1.65,2.15,-.11,-.09,i.glass)),w.add(Y(6.12,6.62,1.63,1.66,-.15,-.05,i.black))}t.add(w);let T=new be;T.add(Y(3.755,3.79,0,ne,2.3,4.35,i.black)),T.add(Y(3.79,4.4,0,ne,2.185,2.22,i.black));for(let[R,D]of[[0,.4],[1.1,1.42],[2.17,2.22]])T.add(Y(4.365,4.4,0,ne,R,D,i.black));T.add(Y(4.365,4.4,A,ne,.4,1.1,i.black)),T.add(Y(4.365,4.4,A,ne,1.42,2.17,i.black)),T.add(Y(6,6.79,0,ne,0,.03,i.wallDark)),T.add(Y(6.76,6.79,0,ne,.03,1.24,i.wallDark)),T.add(Y(4.55,6,0,ne,0,.025,i.wallDark));for(let R=0;R<14;R++){let D=.66+R*.05;T.add(Y(8.48,8.54,0,ne,D,D+.032,i.walnutDark))}t.add(T);let F=new be;{let R=qt({map:fe(_i("#5d5955",22),2.5),roughness:.95}),D=(O,I,G,et)=>{let it=new Ke(G-O,et-I);it.rotateX(Math.PI/2),it.translate((O+G)/2,ne,(I+et)/2);let nt=new Yt(it,R);F.add(nt)};D(-.2,-.2,4.4,2.3),D(-.2,2.3,3.79,6.15),D(4.55,-.2,8.74,4.53),D(3.79,2.22,4.6,4.53),F.add(Y(2.18,2.22,2.64,2.68,2.3,4.2,i.black));for(let O of[2.6,3.3,4]){let I=Re(.035,.12,i.black,2.2,2.52,O,16);F.add(I),F.add(c(2.175,2.225,2.515,2.52,O-.025,O+.025,n))}}t.add(F);let y=new be;y.add(c(0,3.7,2.6,2.63,.01,.04)),y.add(c(3.72,3.75,2.6,2.63,2.4,4.3)),y.add(c(4.57,8.5,2.6,2.63,1.38,1.41)),y.add(c(8.49,8.52,2.6,2.63,.02,4.3)),y.add(c(3.97,8.5,2.6,2.63,4.31,4.34)),y.add(c(4.58,6.75,2.6,2.63,.03,.06)),t.add(y);let E={};function N(R){let D=new be;return D.userData.items=[],E[R]=D,t.add(D),D}function B(R,...D){let O=new be;D.flat().forEach(G=>O.add(G));let I=new Ln().setFromObject(O).getCenter(new C);return O.children.forEach(G=>{G.position.x-=I.x,G.position.z-=I.z}),O.position.set(I.x,0,I.z),R.add(O),R.userData.items.push(O),O}let rt=N("cozinha");{let R=[Y(0,.58,.1,.88,.84,4.33,i.walnut),Y(0,.5,0,.1,.84,4.33,i.black),c(.49,.51,.015,.03,.86,4.31)];for(let I=.84;I<4.32;I+=.58)R.push(Y(.58,.586,.12,.86,I-.004,I+.004,i.black));R.push(Y(.58,.586,.62,.628,.84,3.45,i.black)),R.push(Y(.581,.59,.18,.76,3.5,4.02,i.blackGloss)),R.push(Y(.59,.61,.66,.68,3.55,3.97,i.steel)),B(rt,R);let D=[Y(0,.62,.88,.91,.84,4.33,i.granite)];D.push(Y(.13,.47,.905,.912,2.55,3.1,i.steel)),D.push(Y(.15,.45,.906,.913,2.57,3.08,i.blackGloss)),D.push(Re(.022,.06,i.steel,.08,.91,2.83,16)),D.push(ds([[.08,.95,2.83],[.08,1.25,2.83],[.12,1.36,2.83],[.24,1.32,2.83],[.28,1.18,2.83]],.014,i.steel)),D.push(Y(.08,.54,.91,.918,3.45,4.05,i.blackGloss));for(let[I,G]of[[.2,3.6],[.42,3.6],[.2,3.9],[.42,3.9]]){let et=ie(new oa(.06,.008,6,24),i.steel,I,.922,G);et.rotation.x=Math.PI/2,D.push(et)}D.push(Y(.1,.42,.91,1.25,4,4.3,i.blackGloss,.02)),D.push(Y(.1,.32,.91,1.2,1.05,1.3,i.black,.02)),B(rt,D);let O=[Y(0,.35,1.6,2.4,.84,2.2,i.walnutDark),Y(0,.35,1.6,2.4,3.1,4.33,i.walnutDark),Y(0,.35,2.4,ne,.84,4.33,i.walnutDark),Y(0,.32,1.72,1.75,2.2,3.1,i.walnut),Y(0,.32,2.07,2.1,2.2,3.1,i.walnut),Y(0,.02,1.72,2.1,2.2,3.1,i.walnut),c(.26,.29,2.065,2.07,2.22,3.08),Y(0,.5,1.5,1.6,3.45,4.05,i.steel),c(.28,.31,1.595,1.6,.86,2.18),c(.28,.31,1.595,1.6,3.12,4.31)];for(let I=.84;I<4.32;I+=.45)(I<2.2||I>3.1)&&O.push(Y(.35,.356,1.62,2.38,I-.003,I+.003,i.black));B(rt,O),B(rt,[Y(0,.7,0,1.86,.07,.8,i.blackGloss,.02),Y(.7,.72,1,1.7,.42,.44,i.steel),Y(.7,.72,.4,.95,.42,.44,i.steel),Y(0,.7,1.86,ne,.05,.82,i.walnutDark)]),B(rt,[Y(0,.62,0,2.4,5.3,6.02,i.walnutDark),Y(.62,.626,.05,2.35,5.66,5.665,i.black),Y(0,.62,2.4,ne,5.3,6.02,i.walnutDark)])}let L=N("sala");{B(L,[Y(1.27,1.68,0,1.05,2.05,4.33,i.cement),c(1.255,1.26,.01,.03,2.1,4.28)]);for(let R of[2.45,3.05]){let D=[Y(.82,1.2,.7,.75,R-.19,R+.19,i.redLacquer,.02),Y(.82,.86,.75,.98,R-.18,R+.18,i.redLacquer,.015)];for(let[O,I]of[[.86,-.15],[1.16,-.15],[.86,.15],[1.16,.15]])D.push(Y(O-.012,O+.012,0,.7,R+I-.012,R+I+.012,i.redLacquer));D.push(Y(.86,1.16,.3,.32,R-.16,R-.14,i.redLacquer),Y(.86,1.16,.3,.32,R+.14,R+.16,i.redLacquer)),B(L,D)}B(L,[Y(1.8,3.6,0,.012,2.4,4.15,i.rug)]);{let R=i.leather,D=2.16,O=4.2,I=1.7,G=2.64,et=[Y(I,G,.06,.3,D,O,R,.04),Y(I,G,.06,.62,D,D+.2,R,.06),Y(I,G,.06,.62,O-.2,O,R,.06),Y(I,I+.22,.06,.8,D+.18,O-.18,R,.06)],it=(D+O)/2;et.push(Y(I+.22,G-.02,.3,.46,D+.2,it-.005,R,.06),Y(I+.22,G-.02,.3,.46,it+.005,O-.2,R,.06));for(let[nt,_t]of[[D+.2,it-.005],[it+.005,O-.2]]){let Mt=Y(-.1,.1,-.24,.24,nt-it,_t-it,R,.07);Mt.position.set(I+.3,.7,(nt+_t)/2),Mt.rotation.z=-.18,et.push(Mt)}for(let[nt,_t]of[[I+.08,D+.08],[G-.08,D+.08],[I+.08,O-.08],[G-.08,O-.08]])et.push(Y(nt-.025,nt+.025,0,.06,_t-.025,_t+.025,i.black));B(L,et)}B(L,[Re(.28,.34,i.black,3.02,0,3.25,40),Re(.34,.04,i.walnutDark,3.02,.34,3.25,40),Y(2.9,3.1,.38,.42,3.1,3.25,i.charcoal),Re(.05,.1,i.ceramic,3.15,.38,3.38,16),ie(new rs(.07,1),i.leaf,3.15,.52,3.38)]),B(L,[Y(3.7,3.75,.82,1.68,2.55,4.05,i.screenOff),(()=>{let R=ie(new Ke(1.46,.82),s,3.698,1.25,3.3);return R.rotation.y=-Math.PI/2,R.castShadow=!1,R})(),c(3.745,3.75,.85,1.65,2.53,2.55,n),c(3.745,3.75,.85,1.65,4.05,4.07,n)]),B(L,[(()=>{let R=new is(.5,48);R.scale(.28,1,1);let D=ie(R,i.mirror,4.36,1.35,1.27);return D.rotation.y=-Math.PI/2,D})()]);{let R=[eu(2.93,.36,1.46,.6,.03,.04,.76,i.walnut)];for(let nt of[2.25,3.61])for(let _t of[.1,.6])R.push(Y(nt-.015,nt+.015,0,.72,_t-.015,_t+.015,i.black));R.push(Y(3,3.6,.95,1.31,.13,.15,i.black,.005)),R.push((()=>{let nt=ie(new Ke(.58,.33),r,3.3,1.13,.152);return nt.castShadow=!1,nt})()),R.push(Y(3.27,3.33,.76,.95,.12,.15,i.black),Y(3.18,3.42,.76,.775,.08,.24,i.black));let D=Y(2.45,2.79,.77,.785,.2,.44,i.steel);R.push(D);let O=Y(-.17,.17,0,.22,-.005,.005,i.steel);O.position.set(2.62,.89,.19),O.rotation.x=-.25,R.push(O),B(L,R);let I=[Y(2.68,3.18,.44,.52,.82,1.3,i.black,.03),Y(2.7,3.16,.6,1.12,1.27,1.31,i.charcoal,.02),Re(.025,.42,i.steel,2.93,.04,1.06,12)];for(let nt=0;nt<5;nt++){let _t=nt*Math.PI*2/5,Mt=Y(0,.3,0,.03,-.015,.015,i.black);Mt.position.set(2.93,.04,1.06),Mt.rotation.y=_t,Mt.geometry.translate(.15,0,0),I.push(Mt)}B(L,I);let G=ie(new ss(.36,.36,.03,48),i.art,2.6,1.6,.03);G.rotation.x=Math.PI/2,G.rotation.y=0,B(L,[G]);let et=[Re(.17,.48,i.terracotta,4.1,0,.25,24,.2)],it=(nt=>()=>(nt=nt*16807%2147483647)/2147483647)(42);for(let nt=0;nt<7;nt++){let _t=it()*Math.PI*2,Mt=1.3+it()*.6,At=.08+it()*.18;et.push(ds([[4.1,.45,.25],[4.1+Math.cos(_t)*At*.4,.45+Mt*.5,.25+Math.sin(_t)*At*.4],[4.1+Math.cos(_t)*At,.45+Mt,.25+Math.sin(_t)*At]],.012,i.branch,12))}B(L,et)}}let V=N("jantar");{B(V,[eu(2.64,5.16,1.15,.78,.16,.05,.75,i.walnut),Y(2.18,2.24,0,.7,4.92,5.4,i.walnut),Y(3.04,3.1,0,.7,4.92,5.4,i.walnut)]);for(let[R,D]of[[1.82,0],[3.48,Math.PI]]){let O=[];O.push(Y(-.24,.24,.42,.52,-.24,.24,i.greenVelvet,.05));let I=ie(new ss(.27,.27,.34,32,1,!0,Math.PI,Math.PI),i.greenVelvet,0,.67,0);I.material=i.greenVelvet.clone(),I.material.side=Ge,vi.add(I.material),O.push(I);for(let[et,it]of[[-.18,-.18],[.18,-.18],[-.18,.18],[.18,.18]])O.push(Y(et-.012,et+.012,0,.42,it-.012,it+.012,i.black));let G=B(V,O);G.position.set(R,0,5.16),G.rotation.y=D+Math.PI/2*0,G.rotation.y=D}{let R=[];for(let I=0;I<=12;I++){let G=I/12;R.push(new tt(.06+Math.sin(G*Math.PI)*.15,-.16+G*.32))}let D=ie(new aa(R,32),i.weave,2.64,1.88,5.16),O=ie(new An(.06,16,12),n,2.64,1.86,5.16);O.castShadow=!1,B(V,[D,O,Re(.004,.66,i.black,2.64,2.04,5.16,6),l(2.64,1.86,5.16,.9,"255,170,95",.9)])}{let R=[Re(.2,.5,i.black,3.45,0,5.75,24,.22)],D=(O=>()=>(O=O*16807%2147483647)/2147483647)(7);for(let O=0;O<40;O++){let I=ie(new An(.07+D()*.05,8,5),i.leaf,3.45+(D()-.5)*.55,.7+D()*.95,5.75+(D()-.5)*.45);I.scale.set(.9,.25,1.9),I.rotation.set(D()*3,D()*3,D()*3),R.push(I)}R.push(ds([[3.45,.5,5.75],[3.42,1,5.74],[3.47,1.5,5.76]],.02,i.branch,8)),B(V,R)}}let X=N("banho");{B(X,[Y(4.62,5.42,.38,.76,.02,.47,i.walnut),Y(4.6,5.44,.76,.86,.02,.5,i.stoneTop),Y(4.82,5.22,.84,.865,.12,.4,i.wallDark),c(4.64,5.4,.36,.375,.42,.45),Re(.012,.16,i.brass,5.02,.86,.08,12),ds([[5.02,1.02,.08],[5.02,1.04,.14],[5.02,1,.18]],.01,i.brass,8)]);{let R=new Hs(Cl(.52,.82,.16),12),D=ie(R,i.mirror,5.02,1.55,.045),O=ie(new Hs(Cl(.58,.88,.19),12),n,5.02,1.55,.035);O.castShadow=!1,B(X,[O,D,l(5.02,1.55,.1,1.1,"255,180,110",.3)])}B(X,[Y(5.55,5.95,0,.4,.12,.6,i.ceramic,.12),Y(5.57,5.93,.4,.43,.14,.62,i.ceramic,.012),Y(5.6,5.9,.42,.8,.03,.2,i.ceramic,.03)]),B(X,[Y(6,6.015,0,2.05,.03,.78,i.glass),Y(5.995,6.02,2.05,2.07,.03,.78,i.brass),Y(5.995,6.02,0,.02,.03,.78,i.brass),Re(.11,.015,i.brass,6.4,2.22,.55,32),Y(6.39,6.41,2.235,2.27,.03,.55,i.brass),Y(6.12,6.74,1.1,1.38,.03,.12,i.wallDark),c(6.13,6.73,1.375,1.38,.03,.11),Y(6.3,6.36,1.12,1.27,.06,.1,i.black),Y(6.42,6.48,1.12,1.22,.06,.1,i.black)]),B(X,[Y(4.58,4.62,.9,1.5,.75,1.05,i.charcoal,.01),Re(.05,.12,i.ceramic,5.32,.86,.2,16),ie(new rs(.09,1),i.leaf,5.32,1.04,.2)])}let Z=N("dormitorio");{B(Z,[Y(5.9,8.3,0,.012,1.55,4.15,i.rugDark)]),B(Z,[Y(6.3,8.4,0,.08,2,3.7,i.black),c(6.29,6.3,.02,.05,2,3.7),c(6.3,8.4,.02,.05,1.99,2),c(6.3,8.4,.02,.05,3.7,3.71),Y(6.15,8.44,.08,.28,1.86,3.84,i.walnutDark,.01)]),B(Z,[Y(6.35,8.4,.28,.52,2.06,3.64,i.linen,.06),Y(6.3,7.95,.5,.58,2,3.7,i.duvet,.04),Y(6.3,7.95,.3,.58,1.99,2.03,i.duvet,.015),Y(6.3,7.95,.3,.58,3.67,3.71,i.duvet,.015),Y(6.28,6.31,.32,.58,2,3.7,i.duvet,.012),Y(6.55,7.25,.58,.6,1.97,3.73,i.charcoal,.008),Y(6.55,7.25,.3,.6,1.958,1.975,i.charcoal,.006),Y(6.55,7.25,.3,.6,3.725,3.742,i.charcoal,.006)]);{let R=[];for(let[D,O,I,G]of[[2.45,8.24,i.duvet,.42],[3.25,8.24,i.duvet,.42],[2.5,8.08,i.charcoal,.34],[3.2,8.08,i.charcoal,.34]]){let et=Y(-.08,.08,-G/2,G/2,-.33,.33,I,.07);et.position.set(O,.5+G/2,D),et.rotation.z=.32,R.push(et)}B(Z,R)}B(Z,[Y(8.42,8.48,.28,1.2,1.38,2.84,i.headboard,.03),Y(8.42,8.48,.28,1.2,2.86,4.32,i.headboard,.03)]);for(let R of[1.62,4.05])B(Z,[Y(7.95,8.42,.36,.6,R-.22,R+.22,i.walnutDark,.01),Y(7.948,7.952,.47,.475,R-.2,R+.2,i.black),c(7.97,8.4,.355,.36,R-.2,R+.2)]);B(Z,[Re(.03,.26,i.black,8.18,.6,1.62,16),ie(new An(.15,24,12,0,Math.PI*2,0,Math.PI/2),i.black,8.18,.86,1.62),(()=>{let R=ie(new is(.13,24),n,8.18,.859,1.62);return R.rotation.x=Math.PI/2,R.castShadow=!1,R})(),l(8.18,.75,1.62,.9,"255,175,100",.6),Y(8.06,8.3,.6,.63,1.5,1.7,i.charcoal)]),B(Z,[Re(.004,1.5,i.black,8.18,1.2,4.05,6),Re(.045,.3,i.black,8.18,.9,4.05,20),(()=>{let R=ie(new is(.04,16),n,8.18,.899,4.05);return R.rotation.x=Math.PI/2,R.castShadow=!1,R})(),l(8.18,.86,4.05,.7,"255,175,100",.6)]);{let I=ie(new An(.62,48,32,-Math.PI/2,Math.PI),i.sphere,8.48,1.95,2.85);I.scale.set(.45,1,1);let G=[],et=(nt=>()=>(nt=nt*16807%2147483647)/2147483647)(3);for(let nt=0;nt<=18;nt++){let _t=nt/18,Mt=-Math.PI/2+_t*Math.PI,At=1.95+Math.sin(Mt)*.62,Rt=Math.cos(Mt)*.62;G.push([8.48-Rt*.45-.006,At,2.85+.05+(et()-.5)*.06])}let it=ds(G,.012,e,60);it.castShadow=!1,B(Z,[I,it,l(8.4,1.95,2.85,2.2,"255,170,90",.7)])}{let R=[Y(6.94,8.52,0,.08,.02,.6,i.black),Y(6.94,6.97,.08,ne,.02,.6,i.walnutDark),Y(8.49,8.52,.08,ne,.02,.6,i.walnutDark),Y(6.94,8.52,2.55,ne,.02,.6,i.walnutDark),Y(7.72,7.74,.08,2.55,.02,.58,i.walnutDark),Y(6.97,8.49,.08,2.55,.02,.04,i.walnutDark),Y(6.97,7.72,1.85,1.87,.04,.58,i.walnutDark),Y(7.74,8.49,.9,.92,.04,.58,i.walnutDark),Y(7.74,8.49,1.5,1.52,.04,.58,i.walnutDark),Y(7.74,8.49,2,2.02,.04,.58,i.walnutDark),c(6.98,7.71,2.53,2.545,.3,.33),c(7.75,8.48,.885,.895,.5,.53),c(7.75,8.48,1.485,1.495,.5,.53),c(7.75,8.48,1.985,1.995,.5,.53),Y(6.97,7.72,1.78,1.8,.29,.31,i.steel),Y(6.95,8.51,.08,2.55,.585,.6,i.glassDark)],D=[i.charcoal,i.linen,i.headboard,i.duvet];for(let O=0;O<9;O++)R.push(Y(7.02+O*.075,7.06+O*.075,1+O%3*.08,1.77,.14,.48,D[O%4],.01));for(let O of[.92,1.52])for(let I=0;I<3;I++)R.push(Y(7.82+I*.22,8+I*.22,O,O+.08+I%2*.04,.1,.5,D[(I+1)%4],.01));B(Z,R)}B(Z,[Y(3.95,4.35,.35,.55,2.6,4.1,i.walnutDark,.01),c(3.97,4.33,.345,.35,2.62,4.08),Y(3.95,4,1,1.75,2.7,4,i.screenOff),(()=>{let R=ie(new Ke(1.28,.73),s,4.002,1.375,3.35);return R.rotation.y=Math.PI/2,R.castShadow=!1,R})(),Re(.06,.12,i.ceramic,4.15,.55,3.95,16),ie(new rs(.12,1),i.leaf,4.15,.78,3.95)]);{let R=new Ke(2.3,ne-.08,80,1),D=R.attributes.position;for(let I=0;I<D.count;I++)D.setZ(I,Math.sin(D.getX(I)*26)*.035);R.computeVertexNormals(),Js(R);let O=ie(R,i.curtain,5.15,(ne-.08)/2+.02,4.24);B(Z,[O,Y(3.98,6.32,2.62,2.64,4.15,4.33,i.black)])}{let R=[Re(.17,.42,i.cement,6.62,0,1.75,24,.19)];R.push(ds([[6.62,.4,1.75],[6.6,1,1.73],[6.66,1.5,1.78]],.025,i.branch,10));let D=(O=>()=>(O=O*16807%2147483647)/2147483647)(99);for(let O=0;O<70;O++){let I=ie(new An(.035+D()*.03,6,4),i.leaf,6.64+(D()-.5)*.6,1.2+D()*.8,1.76+(D()-.5)*.55);I.scale.set(.6,.35,1.8),I.rotation.set(D()*3,D()*3,D()*3),R.push(I)}B(Z,R)}}let $=[];function Q(R,D,O,I,G,et="#ffb070"){let it=new os(et,0,G,2);it.position.set(R,D,O),it.userData.max=I,$.push(it),t.add(it)}Q(2.2,2.3,3.2,5.5,5),Q(.6,1.4,2.6,2.5,3.2),Q(2.9,2.2,.8,3.5,4),Q(2.64,1.75,5.16,4.5,4),Q(7.8,1.9,2.85,4.5,4),Q(7.9,.9,1.62,1.6,2.5),Q(5.6,2.3,3.2,3,4.5),Q(5.4,2.1,.7,2.5,2.6),t.traverse(R=>{R.isMesh&&R.material&&(R.material.transparent||R.material.isMeshBasicMaterial)&&(R.castShadow=!1)});for(let R of Object.values(E))for(let D of R.userData.items)D.userData.baseY=D.position.y;return{root:t,M:i,walls:m,floors:h,floorMats:d,openings:w,finishes:T,ceilings:F,coves:y,rooms:E,nightLights:$,glows:o,leds:[e,n],screens:[s,r],allMaterials:vi}}var iu="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAhkC3AMBIgACEQEDEQH/xAAsAAEAAwEBAQAAAAAAAAAAAAAAAwQFBgIBAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAALqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOf6DkyWzX0D61RlNUZTVGU1RlNUc7tYnRlb7YFdYFdYHN3qHSmU1RlNUZTVGU1RlNUZTVGU1RlNUZTVGU1RlNUY2f0fLFlII0gjSCNII0gjSCNII0gjSCNIINTE7AymqMpqjKaoymqMpqjKaoyrF3KNUAAADlOr5Qlilthq+TMXPpSXRSXhRXhl6MXsn8h68h68vJmT2pCivCivCivCivCivCivCivCivCivCjQ3copX69siguWTMaYzHTjjW95M3z0NUyqfVUTnZ7s5T99PRM6HT9GJF2OGZdyfXMGzqjKaoymqMpqjKaoymqMrxsZRt5WrlGqAAABynV8oS26ls1Y5Iz3k36ZeyNHNNHTzNMAqTQzEoAEM1csAAAAAAAAAAYm3hlTQz+gOd6fO8Fu1XokulBOZdiv9I5qOiV7WXfMr2iPdmpnm4yJyeH3XNLWz9cgTiBOIE4graGSXqOhkE81LRJsrVyjbytXKNUAAADlOr5Ql9+PZc80pzc9+PYAABUmhmJQD4QzRygAAAAAAAAADD3MQp26ewRX6o92KgvKIi+z+CjdoWyCxS0ileo3j1DNAQ3YJxi7WGaGxka4AAAr2BHn6gyrNyoS5WrlG3lauUaoAAAHKdXyhLNDIa9KnYNiTx7AAAKk1cXUPk9fJvoAAAAAAAAAAAw9zEKdupdJk/0hm8xE6Kiaan8Jq0ns9zUYz1eoXz0D59Bi7WIX9jH2AAAAABUt1CXK1co28rVyjVAAAA5Tq+UJbdS2X/NiMn9+PYAAAAAAAAAAAAAAAAAw9zDKl2jeLv3L0CTxR+n2hqRlWHZjMixo+jD1pa5X1KN49AAYm3iGhr4+wAAAAAKluoS5WrlG3lauUaoAAAHKdXyhLbqWzVjkjJ/fj2AAAAAAAAAAAAAAAAAMTbwyneo+S3o4lg9ZtuwX/NeibbM+mkzRpM0er2HOa7J+mqyRrYk1Q1dfH2AAAAABUt1CXK1co28rVyjVAAAA5Tq+UJbdS2asckZP78ewAAAAAAAAAAAAAAAABi7Q56r1YgTiBOIOY64c986Ic86Ec796Ec18vUSX5eFJdFH7d+DVilAAAAAFS3UJcrVyjbytXKNUAAADkeuwCjpWK5qxyRk/vx7AAAAAAAAAAAAAAAAAAAAAAAAAAAAHj3CTAAAAAAVLdQlytXKNvK1co1QAAAMnWyTWwt3CNeOSMn9+PYAAAAAAAAAAAAAAAAAAAAAAAAAAAAr/LIAAAAAAqW6hLlauUbeVq5RqgAAAZOtkmthbuEa8ckZP78ewAAAAAAAAjzTWZ/sumYaYAAAAAAAAAAAAADx8JEfgnr+pgAAAAABXsVCGvB9NnK1co28rVyjVAAAAydbJNbC3cI145Iyf349gAAAAAAAEeJv1TOrdJGRYm3ZAAABXPn3BjOic4Ojc4Ojc4Oic6Oi+84Oj+c6Oj+c6Ojc4Oic6PfxdNwAAAAAAACGaoWcetbNLK1co28rVyjVAAAAydbJNbC3eYOhjhjNH3kSmkxNsAAAAAAAAAAAAAQTwGLbq2jWAAAAAAAAAAAAAAAAAABBDdqEuVq5Rt5WrlGqAAABk62Sa3OdHzhuxyRk/vx7MvUy9QAAAAAAAAAAAAAQTwGNaqWzWAAAAAAAAAAAAAAAAAAAqW6hLlauUbeVq5RqgAAAZOtkmtznR84bsclI0PdARamXdJ3yEnVvZM8/D2+fD0AAAAAAAABXsQGNaqWzWAAAAAAAAAAAAAAAAAAAqW6hLlavPnTZUHo2gAAAMnWyTW5zo+cN2raqmbtPhU+/PRDYj+HqD1OZvnWoj7owlqepbAAAAAAAAEE8Bi26to1gAAAAAAAAAAHn0AAAAAAAKluoS830nNk8schvAAAAZOtkmtznR86blW1GRTTezL1MvUAAAAAAAAAAAAAEE8Bi26to1gAAAAAKdzPPPryI/lb4XPdLwaHiSM8fbGOavmGsX9TP0AAAAABUt1CXm+k5ssSRyG8AAABk62Sa3O9Fzhux+oyz7gnMvUydYAAAAAAAAAAAAAQT1zHtVJTcZ8xaAAAAA8exCmEUn0RpB8+hWn9D589CtZAAAAABUt1CXm+k5ssSRyG8AAABk63HHXc/m6xoR3YypNc9lK6AAAAAAAAAAAAACCeAxvXgfb/n6aQAAAAAAAAAAAAAAAAAFS3UJeb6TmyxJHIbwAAAHKdXyhLPBObMckZP78ewAAAAAAAAAAAAq2T6oSFuCeAxvXn2XZpK5eAAAAAAAARRFpn/AEvopQAAAAAABUt1CXm+k5ssSRyG8AAABynV8oSzwTmzHJGT+45AAAAAAAAAAAACn7hmK9TUrk/qWExrdW0awAAAAAAAAMiTTrmTLd9kGh59AAAAAAACpbqEvN9JzZYkjkN4AAADlOr5Ql8e/Jo/PdItYN2mX/tr6VItDwVbEH0m+RfCluc/fNFnDxNRvn0ACGb4eZPP0+vg+vg+056JrYWhEeJL2YbyqKyHdM1sDHbA56/OIE4gpalElt5lgtqgtqgtqgtqgigbBntgY7YHPX7HwgTiCtoVyO7lWy18rC1jX800ZMjdNgAAADlOr5Qlkj9nRc1u5RT2sDZJUeaazE3D4lESURSgAAAAAAABQr3qJWis1i/Ut1DrQfPPseHseHseHseHsePkgAAAAAePY8PY8PY8PY8PY8PYAAAAAAAAcp1fKEt2lcLNO5TMvseP6A0MXRqnO9Bz+6XAAAAAAAAAAARQ/a5Wq3aRfqW6h1oAAAAAAAAAAAAAAAAAAAAAAAAAHKdXyhL78SmxlbvNFXsOR6QtZN3CM/oMXeJkMwVZSUAAABSiNJSiNJm+jQUpSwofDQV7BnZetzpt1Kd06wAAAAAAAAAAAAAAAAAAAAAAAAADlOr5Qlr2M02ovH0r7VPTIE4r2Ax7nrwRy+PRdAAABUraHghoX7BjTXpDIk1ISWtFYI9COQQzQlHVytUtgAAAAAAAAAAAAAAAAAAAAAAAAAcp1fIliv68nRAAAAAAAAAAAAAAAAQzQlHVytUtgAAAAAAAAAAAAAAAAAAAAAAAAAc/0GSfcnq+VN4AAAAAAAAAAAAAAyTWRZxrQ5+gUdXK1S2AAAAAAAAAAAAAAAAAAAAAAAAABk62Sa3K9Vwx1rnx0Dnx0Dn7ZqqotKotKotKotKotKotKotKotKotKotKos42h4J6Vj6UNOC2ZurlapbAAAAAAAAAAAAAAAAAAAAAAAAAAx9jMNL5ijaYo2mKNnj9ewUmsMlrDJa0Jnr0ZVWxUaMpkr3gqNCMpr8hmNPyZy8KLWGS1hktYZ2j8FwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADH2Bied0Yd+6MqxdGdV2xhe9oYt26MixfGZS6AY+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/xAAC/9oADAMBAAIAAwAAACEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARgAAAACiAADgAAAAAAAAAACwAAAAAAAAACgAAAAABAAAAABAQQwABCCCSAAAAAAAAABCjgwCjTzxwQRBDDDDDCQAAAAAAABDwAAAABQAAAAAAAAAATjxSiyRTDwQgAAABASBQAAAAABTQAAAAAACAAAAAAAAAAAAjCADBAQBCAQAAABBBRQAAAAAAQAAAAAQxgAAAAAAAAAABBRCAAywwACAQgAAAABRQAAAAAADAAAAAAAAAAAAAAAAAABBwRDiyxQAAAQAAAAABRQAAAAAAAAAAAAAAAAAAAAAAAAAATDyzAwAgwAwQgAAAABRQAAAAAAAAAAAAAAAAAAAAAAAAAABAAABACDjACAgAAAABRQAAAAASQAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAABRQAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAABRQAAAABQAAAAAAAAAAAggQAAAAAAAAAAAAAAQRAAAAAAABBQAAAABQAAAAAAAAAADRBAAAAQQQwBCQgADQAAAAAAAAASxQAAAABQQAAgAAAAAAAAAAAABSQAAAAAAAAAAAAAAAAAADRQAAAABQAACgAAAAAAAAAAAABRwAAAAAAAAAAAAAAAAAABRQAAAABQAQSQgwggAAAAAAAABRgAAAAAAAAAAAAAAAAAABRQwAAABQBTjThAjygAAAAAAABTQAAAAAAAAAAAgAAAAAABQBQAAABRBDAgAAAAAAAAAAAABQwAAAAAACCiDSzAAAAAABQBQAAABQAgCAAAAAAAAAAAAABRgAAAAABBBDCCAAAAAAABQBQAAAACzBCAAAAAAAAAAAAABShwAAAAAAAAAAAAAAAAABQBQAAAABQAAAAAAAAAAAAAAQxRQQAAAAAAAAwQAAAAAAABQBQAAAABQAAAAAAAAAAAAACCRAwAAAAAAAACAiAAAAAAABQBQAAAAABRhjDjDTzAABAgAATwTyDDBDDQQwwwzTDDDCRzwhwAAAABRQAAAACAAAAAAAACTRQCAAAABAAAAAAAAAAAAAAAAAAAAAACQRQAAAAAAAAAAARxQAAAAAAAAAAAAAAAAAAAAAAAAAAABwBjAgQAAAAAwQAwhBQAAAAAAAAAAAAAAAAAAAAAAAAAABTygABxwAAABywTwyBQQAAAAAAAAAAAAAAAAAAAAAAAAAARwAAAAAAAAAAAAAAABRQAAAAAAAAAAAAAAAAAAAAAAAAABTQAAAAAAAAAAAAAAAxRQAAAAAAAAAAAAAAAAAAAAAAAAABRAwwgwwwwwwwwwwyiBhQAAAAAAAAAAAAAAAAAAAAAAAAABCzzzjDDTjDDjDjTzDDBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABADBDBCBBCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/xAAC/9oADAMBAAIAAwAAABDzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzyxAwwwwwywwzwwwwwwwwwwwzAAAAAAAAAACQwwwwwxzzzzygDjzzDBwACTjDDDDDDDDDBiwwSBxDzxzQSwwwwwwzzzzzygCjSjzxTzyzzzzzzzzzzyyCQxRQAywTwwQwwwyRjzzzzzygDzzxzxTzjzzzzzzzzzzzxiwwzhixSxzzzzzyyxzzzzzzygDjzzzxjSzzzzzzzzzzzygDRDzBTBzxzzzzzzzzzzzzzzygAjzzzzzzzzzzzzzzzzzzwBCRgixhTzzxTzzzzzzzzzzzygCjzzzzzzzzzzzzzzzzzziQTijjDBjjCDzzzzzzzzzzzzygCjzzzzzzzzzzzzzzzzzyxwwxzywwhABRzzzzzzzzzzzzyiijzzzzzzzzzzzzzzzzzzzzzzzzzzzzzjzzzzzzzzzzzzzzyjzzzzzzzzzzzzzzzzzzzzzzzzzzzzyTzzzzzzzzzzzzzzyjzzzzzzzzzzDDzzzzzzzzzzzzzzTxTzzzzzyiDzzzzzzzyjzzzzzzzzziBzTzyzjDDSxjRxyjxzzzzzzzyhjzzzzzzzyzTTzzzzzzzzzzzzzwgwwwwwwwwxzzzzzzzzzxzzzzzzzzyjxTzzzzzzzzzzzzzyDzzzzzzzzzzzzzzzzzzzzzzzzzzzyzxzjzjjzzzzzzzzzjzzzzzzzzzzzzzzzzzzzzzzTzzzzzzxwxgiwxTzzzzzzzzyjzzzzzzzzzzzzzzzzzzzywDzzzzyihzTzzzzzzzzzzzzzxDzzzzzzhRQhgxxjzzzzzzwDzzzzyiThzzzzzzzzzzzzzzyjzzzzzzxzyxwzzzzzzzzzwDzzzyhwgxzzzzzzzzzzzzzzxTDzzzzzzzzzzzzzzzzzzzwDzzzyhSjzzzzzzzzzzzzzDjRgzzzzzzzzzDzTzzzzzzzzwDzzzyhSjTzzzzzzzzzzzygDjDzzzzzzzzwwjTzzzzzzzzwDzzzyixhCgCBRTzDDDQgABwRDDAwxzyiAAAAAAwwQwjiCADzzzyhBhgAAwzzzzzzzzzwAhTwwwwwxxzzzzwwwwwwxzzzzzzzyhRRjjzzzzzzzzzzzyihTzzzzzzzzzzzzzzzzzzzzzzzzzyhTDjxDDzzzzzzjDzzSBzzzzzzzzzzzzzzzzzzzzzzzzzzyhRgwyxRjzzzyiBwhhTzjzzzzzzzzzzzzzzzzzzzzzzzzzyhzzzzzzzzzzzzzzzzzyjzzzzzzzzzzzzzzzzzzzzzzzzzzzjzzzzzzzzzzzzzzTzyjzzzzzzzzzzzzzzzzzzzzzzzzzzyTDDTDDDDDDDDDDATBCjzzzzzzzzzzzzzzzzzzzzzzzzzzjAABTDDTzzjTTjTzDDCzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzyywzwRzzzxzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz/xAAUEQEAAAAAAAAAAAAAAAAAAACg/9oACAECAQE/AEOf/8QAFBEBAAAAAAAAAAAAAAAAAAAAoP/aAAgBAwEBPwBDn//EAFEQAAAEAgMJDAcFBgUEAgMAAAABAgMEEQUSExQVITEzU1RykRAiMDI0NUFRcXOBkiNA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";var Zs=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),xn=(i,t,e)=>i+(t-i)*e,ps=i=>i*i*(3-2*i),Ra=i=>1-Math.pow(1-i,3),Fn=(i,t,e)=>Zs((i-t)/(e-t)),za=()=>window.innerWidth<820||window.innerWidth/window.innerHeight<.9,Dl=window.matchMedia("(prefers-reduced-motion: reduce)").matches,jg=document.getElementById("scene"),nn=new Is({canvas:jg,antialias:!0,powerPreference:"high-performance"});nn.setPixelRatio(Math.min(window.devicePixelRatio,za()?1.5:1.75));nn.setSize(window.innerWidth,window.innerHeight);nn.toneMapping=Ws;nn.toneMappingExposure=1;nn.shadowMap.enabled=!0;nn.shadowMap.type=pl;var ei=new ns,_n=new Ie(35,window.innerWidth/window.innerHeight,.05,600),$g=new es(nn);ei.environment=$g.fromScene(new ba(nn),.04).texture;var uu={uNight:{value:0}},du=new Yt(new An(400,32,16),new ge({side:Ee,depthWrite:!1,uniforms:uu,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      uniform float uNight; varying vec3 vDir;
      void main(){
        float y = vDir.y;
        vec3 dayTop = vec3(0.105,0.100,0.095), dayHor = vec3(0.16,0.15,0.14), dayLow = vec3(0.07,0.066,0.062);
        vec3 nTop = vec3(0.010,0.013,0.026), nHor = vec3(0.075,0.05,0.042), nLow = vec3(0.012,0.011,0.014);
        vec3 top = mix(dayTop, nTop, uNight), hor = mix(dayHor, nHor, uNight), low = mix(dayLow, nLow, uNight);
        vec3 c = y > 0.0 ? mix(hor, top, pow(clamp(y,0.0,1.0), 0.5)) : mix(hor, low, pow(clamp(-y*3.0,0.0,1.0), 0.6));
        gl_FragColor = vec4(c, 1.0);
      }`}));du.renderOrder=-1;ei.add(du);var fu=new ha("#fff3e2","#3a342e",1.2);ei.add(fu);var fn=new da("#ffe7c9",2.8);fn.position.set(-3,13,10);fn.target.position.set(4.3,0,3);fn.castShadow=!0;fn.shadow.mapSize.set(za()?1024:2048,za()?1024:2048);Object.assign(fn.shadow.camera,{left:-8,right:8,top:8,bottom:-8,near:1,far:40});fn.shadow.bias=-4e-4;fn.shadow.normalBias=.03;ei.add(fn,fn.target);var we=nu();ei.add(we.root);var Ae={x0:-1.7,x1:10.3,z0:-1.6,z1:7.7},pu={uReveal:{value:-.1}};function tA(i){let e=Math.round(2048*(Ae.z1-Ae.z0)/(Ae.x1-Ae.x0)),n=(_,A)=>[(_-Ae.x0)/(Ae.x1-Ae.x0)*2048,(A-Ae.z0)/(Ae.z1-Ae.z0)*e],s=()=>{let _=document.createElement("canvas");return _.width=2048,_.height=e,_},r=s(),a=r.getContext("2d");a.fillStyle="#ece6da",a.fillRect(0,0,2048,e);for(let _=0;_<9e3;_++)a.fillStyle=`rgba(${Math.random()>.5?"255,255,255":"120,105,85"},${Math.random()*.05})`,a.fillRect(Math.random()*2048,Math.random()*e,1+Math.random()*3,1);a.strokeStyle="rgba(90,110,130,0.10)",a.lineWidth=1;let o=2048/(Ae.x1-Ae.x0)*.5;for(let _=0;_<2048;_+=o)a.beginPath(),a.moveTo(_,0),a.lineTo(_,e),a.stroke();for(let _=0;_<e;_+=o)a.beginPath(),a.moveTo(0,_),a.lineTo(2048,_),a.stroke();a.strokeStyle="rgba(40,36,32,0.55)",a.lineWidth=3,a.strokeRect(36,36,1976,e-72);let l=s(),c=l.getContext("2d");c.drawImage(r,0,0);let[h,u]=n(Qs.x0,Qs.z0),[d,p]=n(Qs.x1,Qs.z1);c.globalCompositeOperation="multiply",c.drawImage(i,h,u,d-h,p-u),c.globalCompositeOperation="source-over",c.fillStyle="rgba(30,28,26,0.85)",c.font="bold 34px monospace",c.fillText("ARCO \u2014 APARTAMENTO TIPO \xB7 1 DORMIT\xD3RIO",80,e-90),c.font="26px monospace",c.fillText("PLANTA BAIXA  \xB7  ESC. 1:50  \xB7  COTAS EM METROS",80,e-52),c.textAlign="right",c.fillText("FOLHA 01/01",1968,e-52),c.textAlign="center",c.font="bold 28px monospace";let[g,x]=[1918,150];c.beginPath(),c.moveTo(g,x-60),c.lineTo(g-22,x+10),c.lineTo(g,x-5),c.lineTo(g+22,x+10),c.closePath(),c.fill(),c.fillText("N",g,x+50);let m=new jn(r),f=new jn(l);for(let _ of[m,f])_.colorSpace=he,_.anisotropy=8;return[m,f]}var vn=new $e({color:"#d6cfc3",roughness:.95,transparent:!0});vn.onBeforeCompile=i=>{i.uniforms.uReveal=pu.uReveal,i.uniforms.inkMap={value:vn.userData.ink},i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uReveal;
uniform sampler2D inkMap;`).replace("#include <map_fragment>",`#include <map_fragment>
      float dRev = vMapUv.x * 0.6 + (1.0 - vMapUv.y) * 0.4;
      float mRev = 1.0 - smoothstep(uReveal - 0.035, uReveal, dRev);
      vec4 inkC = texture2D(inkMap, vMapUv);
      diffuseColor.rgb = mix(diffuseColor.rgb, inkC.rgb, mRev);
      float edge = smoothstep(uReveal - 0.03, uReveal, dRev) * (1.0 - smoothstep(uReveal, uReveal + 0.004, dRev));
      totalEmissiveRadiance += vec3(1.0, 0.55, 0.2) * edge * 1.6 * step(uReveal, 1.05);`)};var Mi=new Yt(new Ke(Ae.x1-Ae.x0,Ae.z1-Ae.z0),vn);Mi.rotation.x=-Math.PI/2;Mi.position.set((Ae.x0+Ae.x1)/2,.001,(Ae.z0+Ae.z1)/2);Mi.receiveShadow=!0;Mi.visible=!1;ei.add(Mi);var Pa=new Image,Ul=new Promise(i=>{Pa.onload=i,Pa.onerror=i});Pa.src=iu;Ul.then(()=>{let[i,t]=tA(Pa);vn.map=i,vn.userData.ink=t,vn.needsUpdate=!0,Mi.visible=!0});var mu=(()=>{let t=new Float32Array(21e3),e=new Float32Array(7e3*3),n=new wt("#ffb36b"),s=new wt("#dfe8ff"),r=new wt("#ff8a3d"),a=12345,o=()=>(a=a*16807%2147483647)/2147483647;for(let u=0;u<7e3;u++){let d,p;if(u%3===0){let x=Math.floor(o()*10)*(Math.PI/5)+.2,m=20+o()*160;d=Math.cos(x)*m,p=Math.sin(x)*m}else{let x=o()*Math.PI*2,m=22+Math.pow(o(),.7)*170;d=Math.cos(x)*m,p=Math.sin(x)*m}t[u*3]=4.3+d,t[u*3+1]=-36+o()*6,t[u*3+2]=3+p;let g=o()<.6?n:o()<.6?s:r;e[u*3]=g.r,e[u*3+1]=g.g,e[u*3+2]=g.b}let l=new de;l.setAttribute("position",new Le(t,3)),l.setAttribute("color",new Le(e,3));let c=new Ds({size:1.5,map:Ta("255,255,255"),vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Qn}),h=new jr(l,c);return h.frustumCulled=!1,h})();ei.add(mu);var Ks=new ya(nn);Ks.addPass(new Ma(ei,_n));var gu=new hs(new tt(window.innerWidth,window.innerHeight),.1,.55,.82);Ks.addPass(gu);Ks.addPass(new Sa);var fs=[4.27,.2,3],Ca=[{p:0,pos:[4.27,16.5,3.04],tgt:[4.27,0,3],fov:35,ui:1,ext:1},{p:.095,pos:[4.27,15.2,3.04],tgt:[4.27,0,3],fov:35,ui:1,ext:1},{p:.2,pos:[-4.2,10.8,14.2],tgt:fs,fov:35,ui:1,ext:1},{p:.285,pos:[1.2,12.8,15.4],tgt:fs,fov:35,ui:1,ext:1},{p:.335,pos:[-4.6,7.8,9.2],tgt:[1.6,.4,2.8],fov:35,ui:1,ext:1},{p:.385,pos:[2.3,10.2,-2.4],tgt:[2.2,.2,2.9],fov:35,ui:1,ext:1},{p:.43,pos:[-1.8,6.8,11.8],tgt:[2.3,.4,4.6],fov:35,ui:1,ext:1},{p:.475,pos:[5.75,8.6,2.9],tgt:[5.7,.2,.75],fov:35,ui:1,ext:1},{p:.53,pos:[.6,9.2,3.4],tgt:[6.9,.3,2.8],fov:35,ui:1,ext:1},{p:.57,pos:[12.8,10.6,13.2],tgt:fs,fov:35,ui:1,ext:1},{p:.648,pos:[-4.4,9.6,13.6],tgt:fs,fov:35,ui:1,ext:1},{p:.668,pos:[3.2,1.5,5.75],tgt:[1,1,2.2],fov:58,ui:0,cut:1,shot:0},{p:.702,pos:[2.85,1.45,5.25],tgt:[.8,1,2],fov:58,ui:0,shot:0},{p:.716,pos:[.95,1.6,1.6],tgt:[3.7,1,3.7],fov:58,ui:0,cut:1,shot:1},{p:.752,pos:[.95,1.55,2.25],tgt:[3.7,1,4],fov:58,ui:0,shot:1},{p:.766,pos:[1.65,1.55,.7],tgt:[3.2,1.1,5.6],fov:58,ui:0,cut:1,shot:2},{p:.802,pos:[2,1.5,1.2],tgt:[3,1.1,5.8],fov:58,ui:0,shot:2},{p:.816,pos:[4.2,1.6,3.05],tgt:[8.5,1.3,2.85],fov:58,ui:0,cut:1,shot:3},{p:.852,pos:[4.55,1.5,3.1],tgt:[8.5,1.35,2.85],fov:58,ui:0,shot:3},{p:.866,pos:[6,1.3,4.1],tgt:[8.4,1.45,2.6],fov:58,ui:0,cut:1,shot:4},{p:.898,pos:[5.7,1.45,3.9],tgt:[8.4,1.5,2.7],fov:58,ui:0,shot:4},{p:.912,pos:[6.62,1.6,1.14],tgt:[4.9,1.25,.05],fov:62,ui:0,cut:1,shot:5},{p:.938,pos:[6.5,1.55,1.04],tgt:[4.8,1.2,.2],fov:62,ui:0,shot:5},{p:.955,pos:[12.5,12.6,14],tgt:fs,fov:35,ui:1,ext:1,cut:1},{p:1,pos:[-2.5,13.5,15.5],tgt:fs,fov:35,ui:1,ext:1}],zl=[["Sala & cozinha","Vista do terra\xE7o para a cozinha integrada"],["Estar","Sof\xE1 de couro voltado para a parede preta da TV"],["Arco de pedra","Do home office at\xE9 o jantar no terra\xE7o"],["Dormit\xF3rio","Cama flutuante com escultura iluminada"],["Dormit\xF3rio","Luz quente de cabeceira e arm\xE1rio em vidro fum\xEA"],["Banho","Bancada suspensa, espelho retroiluminado e box em vidro"]],su=new ls,ru=new C;function au(i,t){let e=new C(...i.tgt),n=new C(...i.pos);if(i.ext&&t<1.3){let r=Zs(1.3/t,1,2.3)*(t<.9?1.04:.92);n.sub(e).multiplyScalar(Math.max(1,r)).add(e)}let s=i.fov;return!i.ext&&t<1&&(s=Math.min(80,s*1.32)),{pos:n,tgt:e,fov:s,ui:i.ui}}function eA(i,t){let e=0;for(;e<Ca.length-2&&i>=Ca[e+1].p;)e++;let n=Ca[e],s=Ca[e+1],r=Zs((i-n.p)/(s.p-n.p)),a=au(n,t),o=au(s,t);if(s.cut)return{...r<.5?a:o,fade:Zs((1-Math.abs(2*r-1))*1.8),shot:r<.5?n.shot:s.shot};let l=n.shot!==void 0?r:ps(r),c=a.tgt.clone().lerp(o.tgt,l),h=new ls().setFromVector3(ru.copy(a.pos).sub(a.tgt)),u=new ls().setFromVector3(ru.copy(o.pos).sub(o.tgt)),d=u.theta-h.theta;return d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2),su.set(xn(h.radius,u.radius,l),xn(h.phi,u.phi,l),h.theta+d*l),{pos:new C().setFromSpherical(su).add(c),tgt:c,fov:xn(a.fov,o.fov,l),ui:xn(a.ui,o.ui,l),fade:0,shot:n.shot}}var nA={cozinha:[.295,.355],sala:[.345,.41],jantar:[.4,.448],banho:[.448,.492],dormitorio:[.492,.556]},iA=we.leds.map(i=>i.color.clone()),sA=we.screens.map(i=>i.color.clone()),ou=.85,rA=.14;function aA(i){let t=_u<1/0?1:Fn(performance.now()-Au,300,3300);pu.uReveal.value=xn(-.08,1.12,Math.max(ps(t),ps(Fn(i,.012,.1)))),we.walls.forEach((o,l)=>{let c=Ra(Fn(i,.112+l*.0075,.112+l*.0075+.06));o.scale.y=Math.max(1e-4,c),o.visible=c>0});let n=Ra(Fn(i,.15,.24));we.finishes.scale.y=Math.max(1e-4,n),we.finishes.visible=n>0;let s=Ra(Fn(i,.215,.255));we.openings.visible=s>0,we.openings.scale.y=Math.max(1e-4,s);let r=ps(Fn(i,.225,.285));we.floorMats.forEach(o=>{o.opacity=r,o.transparent=r<1,o.depthWrite=r>.5}),we.floors.visible=r>0,vn.opacity=1-ps(Fn(i,.235,.3)),Mi.visible=vn.opacity>.001&&!!vn.map;for(let[o,[l,c]]of Object.entries(nA)){let h=we.rooms[o].userData.items,u=h.length;h.forEach((d,p)=>{let g=l+(c-l)*.7*(p/u),x=Fn(i,g,g+(c-l)*.3);d.visible=x>0;let m=Dl?x:Ra(x);d.position.y=d.userData.baseY+(1-m)*1.6,d.scale.setScalar(.6+.4*m)})}let a=ps(Fn(i,.575,.645));uu.uNight.value=a,we.coves.visible=a>.01,fu.intensity=xn(1.2,.05,a),fn.intensity=xn(2.8,0,a),fn.castShadow=a<.99;for(let o of we.allMaterials)o.envMapIntensity=xn(ou,rA,a);vn.envMapIntensity=ou;for(let o of we.nightLights)o.intensity=o.userData.max*a*.6,o.visible=a>.001;we.leds.forEach((o,l)=>o.color.copy(iA[l]).multiplyScalar(.12+a*(l===0?2.6:1.5))),we.screens.forEach((o,l)=>o.color.copy(sA[l]).multiplyScalar(1+a*1.6));for(let o of we.glows)o.material.opacity=o.userData.maxOpacity*a;mu.material.opacity=a,gu.strength=xn(.08,.42,a),nn.toneMappingExposure=xn(1,.95,a)}var Pl=[...document.querySelectorAll("[data-chapter]")].map(i=>({el:i,from:+i.dataset.from,to:+i.dataset.to})),Il=[...document.querySelectorAll("[data-goto]")],oA=document.querySelector(".progress i"),lA=document.getElementById("fade"),cA=document.getElementById("scrim"),Ia=document.getElementById("room-tag"),hA=Ia.querySelector("strong"),uA=Ia.querySelector("span"),dA=Ia.querySelector("em"),fA=document.querySelector(".hint"),lu=-1,cu=-2;function Nl(){return document.documentElement.scrollHeight-window.innerHeight}Il.forEach(i=>i.addEventListener("click",t=>{t.preventDefault(),window.scrollTo({top:+i.dataset.goto*Nl()+2,behavior:Dl?"auto":"smooth"})}));function pA(i,t){oA.style.transform=`scaleX(${i})`;let e=Pl.findIndex(r=>i>=r.from&&i<r.to),n=e===-1?Pl.length-1:e;n!==lu&&(Pl.forEach((r,a)=>r.el.classList.toggle("active",a===n)),Il.forEach(r=>r.classList.toggle("on",i>=+r.dataset.goto&&i<+r.dataset.until)),lu=n),Il.forEach(r=>r.classList.toggle("on",i>=+r.dataset.goto&&i<+r.dataset.until)),document.body.classList.toggle("tour",t.ui<.5),fA.classList.toggle("gone",i>.02),lA.style.opacity=t.fade,cA.style.opacity=t.ui;let s=t.ui<.5&&t.shot!==void 0?t.shot:-1;s!==cu&&(cu=s,s>=0&&(hA.textContent=zl[s][0],uA.textContent=zl[s][1],dA.textContent=`Tour ${s+1}/${zl.length}`),Ia.classList.toggle("show",s>=0))}var ms=0,yi=0,Ll=performance.now(),Au=1/0;function La(){ms=Zs(window.scrollY/Math.max(1,Nl()))}window.addEventListener("scroll",La,{passive:!0});function mA(i){let t=window.innerWidth,e=window.innerHeight,n=t/e;n>=1.15?_n.setViewOffset(t,e,-t*.17*i,0,t,e):n<.95?_n.setViewOffset(t,e,0,e*.2*i,t,e):_n.setViewOffset(t,e,-t*.08*i,e*.08*i,t,e)}function xu(i){let t=Math.min(.1,(i-Ll)/1e3);Ll=i,yi+=(ms-yi)*(Dl?1:1-Math.exp(-t*5.5)),Math.abs(ms-yi)<2e-5&&(yi=ms);let e=yi,n=window.innerWidth/window.innerHeight,s=eA(e,n);_n.position.copy(s.pos),_n.lookAt(s.tgt),_n.fov=s.fov,mA(s.ui),_n.updateProjectionMatrix(),we.ceilings.visible=_n.position.y<ne,aA(e),pA(e,s),Ks.render(),_u-- >0&&requestAnimationFrame(xu)}var _u=new URLSearchParams(location.search).has("still")?2:1/0;function gA(){let i=window.innerWidth,t=window.innerHeight;nn.setPixelRatio(Math.min(window.devicePixelRatio,za()?1.5:1.75)),nn.setSize(i,t),Ks.setSize(i,t),_n.aspect=i/t,La()}window.addEventListener("resize",gA);Ul.then(()=>{La(),yi=ms,requestAnimationFrame(i=>{Ll=i,Au=i,xu(i),document.body.classList.add("ready")})});var hu=new URLSearchParams(location.search).get("p");hu!==null&&Ul.then(()=>{window.scrollTo(0,+hu*Nl()),La(),yi=ms});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
