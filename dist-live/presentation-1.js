"use strict";(()=>{var So="150",Ti={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Eu=0,Dl=1,Au=2;var jc=1,Cu=2,Ls=3,Kn=0,xe=1,Yn=2;var $n=0,ji=1,Il=2,Ol=3,Nl=4,Pu=5,$i=100,Ru=101,Lu=102,Fl=103,zl=104,Du=200,Iu=201,Ou=202,Nu=203,Qc=204,th=205,Fu=206,zu=207,ku=208,Uu=209,Bu=210,Vu=0,Hu=1,Gu=2,Xa=3,Wu=4,Xu=5,qu=6,Yu=7,eh=0,Zu=1,Ju=2,In=0,$u=1,Ku=2,ju=3,Qu=4,tf=5,nh=300,ns=301,is=302,qa=303,Ya=304,Ur=306,Za=1e3,cn=1001,Ja=1002,Pe=1003,kl=1004;var fa=1005;var Ke=1006,ef=1007;var Os=1008;var yi=1009,nf=1010,sf=1011,ih=1012,rf=1013,gi=1014,_i=1015,Ns=1016,af=1017,of=1018,Qi=1020,lf=1021,hn=1023,cf=1024,hf=1025,xi=1026,ss=1027,uf=1028,ff=1029,df=1030,pf=1031,mf=1033,da=33776,pa=33777,ma=33778,ga=33779,Ul=35840,Bl=35841,Vl=35842,Hl=35843,gf=36196,Gl=37492,Wl=37496,Xl=37808,ql=37809,Yl=37810,Zl=37811,Jl=37812,$l=37813,Kl=37814,jl=37815,Ql=37816,tc=37817,ec=37818,nc=37819,ic=37820,sc=37821,_a=36492,_f=36283,rc=36284,ac=36285,oc=36286;var Mr=2300,wr=2301,xa=2302,lc=2400,cc=2401,hc=2402;var vi=3e3,Ht=3001,xf=3200,yf=3201,sh=0,vf=1;var vn="srgb",Fs="srgb-linear",rh="display-p3";var ya=7680;var bf=519,uc=35044;var fc="300 es",$a=1035,Mn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}},ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var va=Math.PI/180,dc=180/Math.PI;function Hs(){let o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ge[o&255]+ge[o>>8&255]+ge[o>>16&255]+ge[o>>24&255]+"-"+ge[t&255]+ge[t>>8&255]+"-"+ge[t>>16&15|64]+ge[t>>24&255]+"-"+ge[e&63|128]+ge[e>>8&255]+"-"+ge[e>>16&255]+ge[e>>24&255]+ge[n&255]+ge[n>>8&255]+ge[n>>16&255]+ge[n>>24&255]).toLowerCase()}function Ne(o,t,e){return Math.max(t,Math.min(e,o))}function Mf(o,t){return(o%t+t)%t}function ba(o,t,e){return(1-e)*o+e*t}function pc(o){return(o&o-1)===0&&o!==0}function wf(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function er(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ge(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var bt=class{constructor(t=0,e=0){bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},de=class{constructor(){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,a,r,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=r,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],r=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],m=n[5],_=n[8],f=i[0],p=i[3],y=i[6],v=i[1],g=i[4],M=i[7],b=i[2],E=i[5],C=i[8];return s[0]=a*f+r*v+l*b,s[3]=a*p+r*g+l*E,s[6]=a*y+r*M+l*C,s[1]=c*f+h*v+d*b,s[4]=c*p+h*g+d*E,s[7]=c*y+h*M+d*C,s[2]=u*f+m*v+_*b,s[5]=u*p+m*g+_*E,s[8]=u*y+m*M+_*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*r*c-n*s*h+n*r*l+i*s*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],d=h*a-r*c,u=r*l-h*s,m=c*s-a*l,_=e*d+n*u+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let f=1/_;return t[0]=d*f,t[1]=(i*c-h*n)*f,t[2]=(r*n-i*a)*f,t[3]=u*f,t[4]=(h*e-i*l)*f,t[5]=(i*s-r*e)*f,t[6]=m*f,t[7]=(n*l-c*e)*f,t[8]=(a*e-n*s)*f,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,r){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*r)+a+t,-i*c,i*l,-i*(-c*a+l*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(Ma.makeScale(t,e)),this}rotate(t){return this.premultiply(Ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ma.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ma=new de;function ah(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Sr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}var fn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,r){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[a+0],m=s[a+1],_=s[a+2],f=s[a+3];if(r===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(r===1){t[e+0]=u,t[e+1]=m,t[e+2]=_,t[e+3]=f;return}if(d!==f||l!==u||c!==m||h!==_){let p=1-r,y=l*u+c*m+h*_+d*f,v=y>=0?1:-1,g=1-y*y;if(g>Number.EPSILON){let b=Math.sqrt(g),E=Math.atan2(b,y*v);p=Math.sin(p*E)/b,r=Math.sin(r*E)/b}let M=r*v;if(l=l*p+u*M,c=c*p+m*M,h=h*p+_*M,d=d*p+f*M,p===1-r){let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,a){let r=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],u=s[a+1],m=s[a+2],_=s[a+3];return t[e]=r*_+h*d+l*m-c*u,t[e+1]=l*_+h*u+c*d-r*m,t[e+2]=c*_+h*m+r*u-l*d,t[e+3]=h*_-r*d-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){let n=t._x,i=t._y,s=t._z,a=t._order,r=Math.cos,l=Math.sin,c=r(n/2),h=r(i/2),d=r(s/2),u=l(n/2),m=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*m*_,this._y=c*m*d-u*h*_,this._z=c*h*_+u*m*d,this._w=c*h*d-u*m*_;break;case"YXZ":this._x=u*h*d+c*m*_,this._y=c*m*d-u*h*_,this._z=c*h*_-u*m*d,this._w=c*h*d+u*m*_;break;case"ZXY":this._x=u*h*d-c*m*_,this._y=c*m*d+u*h*_,this._z=c*h*_+u*m*d,this._w=c*h*d-u*m*_;break;case"ZYX":this._x=u*h*d-c*m*_,this._y=c*m*d+u*h*_,this._z=c*h*_-u*m*d,this._w=c*h*d+u*m*_;break;case"YZX":this._x=u*h*d+c*m*_,this._y=c*m*d+u*h*_,this._z=c*h*_-u*m*d,this._w=c*h*d-u*m*_;break;case"XZY":this._x=u*h*d-c*m*_,this._y=c*m*d-u*h*_,this._z=c*h*_+u*m*d,this._w=c*h*d+u*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],r=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+r+d;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>r&&n>d){let m=2*Math.sqrt(1+n-r-d);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(r>d){let m=2*Math.sqrt(1+r-n-d);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-r);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,r=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*r+i*c-s*l,this._y=i*h+a*l+s*r-n*c,this._z=s*h+a*c+n*l-i*r,this._w=a*h-n*r-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,a=this._w,r=a*t._w+n*t._x+i*t._y+s*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-r*r;if(l<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),h=Math.atan2(c,r),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,r=t.z,l=t.w,c=l*e+a*i-r*n,h=l*n+r*e-s*i,d=l*i+s*n-a*e,u=-s*e-a*n-r*i;return this.x=c*l+u*-s+h*-r-d*-a,this.y=h*l+u*-a+d*-s-c*-r,this.z=d*l+u*-r+c*-a-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,a=e.x,r=e.y,l=e.z;return this.x=i*l-s*r,this.y=s*a-n*l,this.z=n*r-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wa.copy(this).projectOnVector(t),this.sub(wa)}reflect(t){return this.sub(wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wa=new I,mc=new fn;function ts(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Sa(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}var Sf=new de().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Tf=new de().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Zn=new I;function Ef(o){return o.convertSRGBToLinear(),Zn.set(o.r,o.g,o.b).applyMatrix3(Tf),o.setRGB(Zn.x,Zn.y,Zn.z)}function Af(o){return Zn.set(o.r,o.g,o.b).applyMatrix3(Sf),o.setRGB(Zn.x,Zn.y,Zn.z).convertLinearToSRGB()}var Cf={[Fs]:o=>o,[vn]:o=>o.convertSRGBToLinear(),[rh]:Ef},Pf={[Fs]:o=>o,[vn]:o=>o.convertLinearToSRGB(),[rh]:Af},Ae={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(o){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!o},get workingColorSpace(){return Fs},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,t,e){if(this.enabled===!1||t===e||!t||!e)return o;let n=Cf[t],i=Pf[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)}},zi,Tr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zi===void 0&&(zi=Sr("canvas")),zi.width=t.width,zi.height=t.height;let n=zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Sr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ts(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ts(e[n]/255)*255):e[n]=ts(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Er=class{constructor(t=null){this.isSource=!0,this.uuid=Hs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,r=i.length;a<r;a++)i[a].isDataTexture?s.push(Ta(i[a].image)):s.push(Ta(i[a]))}else s=Ta(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Ta(o){return typeof HTMLImageElement!="undefined"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&o instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&o instanceof ImageBitmap?Tr.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Rf=0,Le=class extends Mn{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=cn,i=cn,s=Ke,a=Os,r=hn,l=yi,c=Le.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Hs(),this.name="",this.source=new Er(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Za:t.x=t.x-Math.floor(t.x);break;case cn:t.x=t.x<0?0:1;break;case Ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Za:t.y=t.y-Math.floor(t.y);break;case cn:t.y=t.y<0?0:1;break;case Ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}};Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=nh;Le.DEFAULT_ANISOTROPY=1;var ee=class{constructor(t=0,e=0,n=0,i=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],_=l[9],f=l[2],p=l[6],y=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-f)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+f)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let g=(c+1)/2,M=(m+1)/2,b=(y+1)/2,E=(h+u)/4,C=(d+f)/4,x=(_+p)/4;return g>M&&g>b?g<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(g),i=E/n,s=C/n):M>b?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=E/i,s=x/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=C/s,i=x/s),this.set(n,i,s,e),this}let v=Math.sqrt((p-_)*(p-_)+(d-f)*(d-f)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(d-f)/v,this.z=(u-h)/v,this.w=Math.acos((c+m+y-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},On=class extends Mn{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);let i={width:t,height:e,depth:1};this.texture=new Le(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ke,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Er(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ar=class extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ka=class extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bi=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,r=-1/0;for(let l=0,c=t.length;l<c;l+=3){let h=t[l],d=t[l+1],u=t[l+2];h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>a&&(a=d),u>r&&(r=u)}return this.min.set(e,n,i),this.max.set(s,a,r),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,r=-1/0;for(let l=0,c=t.count;l<c;l++){let h=t.getX(l),d=t.getY(l),u=t.getZ(l);h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>a&&(a=d),u>r&&(r=u)}return this.min.set(e,n,i),this.max.set(s,a,r),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ui.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){let s=n.attributes.position;for(let a=0,r=s.count;a<r;a++)ui.fromBufferAttribute(s,a).applyMatrix4(t.matrixWorld),this.expandByPoint(ui)}else n.boundingBox===null&&n.computeBoundingBox(),Ea.copy(n.boundingBox),Ea.applyMatrix4(t.matrixWorld),this.union(Ea);let i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ui),ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),nr.subVectors(this.max,Ss),ki.subVectors(t.a,Ss),Ui.subVectors(t.b,Ss),Bi.subVectors(t.c,Ss),Hn.subVectors(Ui,ki),Gn.subVectors(Bi,Ui),fi.subVectors(ki,Bi);let e=[0,-Hn.z,Hn.y,0,-Gn.z,Gn.y,0,-fi.z,fi.y,Hn.z,0,-Hn.x,Gn.z,0,-Gn.x,fi.z,0,-fi.x,-Hn.y,Hn.x,0,-Gn.y,Gn.x,0,-fi.y,fi.x,0];return!Aa(e,ki,Ui,Bi,nr)||(e=[1,0,0,0,1,0,0,0,1],!Aa(e,ki,Ui,Bi,nr))?!1:(ir.crossVectors(Hn,Gn),e=[ir.x,ir.y,ir.z],Aa(e,ki,Ui,Bi,nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},An=[new I,new I,new I,new I,new I,new I,new I,new I],ui=new I,Ea=new bi,ki=new I,Ui=new I,Bi=new I,Hn=new I,Gn=new I,fi=new I,Ss=new I,nr=new I,ir=new I,di=new I;function Aa(o,t,e,n,i){for(let s=0,a=o.length-3;s<=a;s+=3){di.fromArray(o,s);let r=i.x*Math.abs(di.x)+i.y*Math.abs(di.y)+i.z*Math.abs(di.z),l=t.dot(di),c=e.dot(di),h=n.dot(di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}var Lf=new bi,Ts=new I,Ca=new I,rs=class{constructor(t=new I,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Lf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ts.subVectors(t,this.center);let e=Ts.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ts,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ts.copy(t.center).add(Ca)),this.expandByPoint(Ts.copy(t.center).sub(Ca))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Cn=new I,Pa=new I,sr=new I,Wn=new I,Ra=new I,rr=new I,La=new I,Cr=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Cn.copy(this.origin).addScaledVector(this.direction,e),Cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Pa.copy(t).add(e).multiplyScalar(.5),sr.copy(e).sub(t).normalize(),Wn.copy(this.origin).sub(Pa);let s=t.distanceTo(e)*.5,a=-this.direction.dot(sr),r=Wn.dot(this.direction),l=-Wn.dot(sr),c=Wn.lengthSq(),h=Math.abs(1-a*a),d,u,m,_;if(h>0)if(d=a*l-r,u=a*r-l,_=s*h,d>=0)if(u>=-_)if(u<=_){let f=1/h;d*=f,u*=f,m=d*(d+a*u+2*r)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+r)),m=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+r)),m=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-a*s+r)),u=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(d=Math.max(0,-(a*s+r)),u=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+r)),m=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Pa).addScaledVector(sr,u),m}intersectSphere(t,e){Cn.subVectors(t.center,this.origin);let n=Cn.dot(this.direction),i=Cn.dot(Cn)-n*n,s=t.radius*t.radius;if(i>s)return null;let a=Math.sqrt(s-i),r=n-a,l=n+a;return l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,r,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(r=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(r=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||r>i)||((r>n||n!==n)&&(n=r),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Cn)!==null}intersectTriangle(t,e,n,i,s){Ra.subVectors(e,t),rr.subVectors(n,t),La.crossVectors(Ra,rr);let a=this.direction.dot(La),r;if(a>0){if(i)return null;r=1}else if(a<0)r=-1,a=-a;else return null;Wn.subVectors(this.origin,t);let l=r*this.direction.dot(rr.crossVectors(Wn,rr));if(l<0)return null;let c=r*this.direction.dot(Ra.cross(Wn));if(c<0||l+c>a)return null;let h=-r*Wn.dot(La);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jt=class{constructor(){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,a,r,l,c,h,d,u,m,_,f,p){let y=this.elements;return y[0]=t,y[4]=e,y[8]=n,y[12]=i,y[1]=s,y[5]=a,y[9]=r,y[13]=l,y[2]=c,y[6]=h,y[10]=d,y[14]=u,y[3]=m,y[7]=_,y[11]=f,y[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Vi.setFromMatrixColumn(t,0).length(),s=1/Vi.setFromMatrixColumn(t,1).length(),a=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),r=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=a*h,m=a*d,_=r*h,f=r*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+_*c,e[5]=u-f*c,e[9]=-r*l,e[2]=f-u*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,m=l*d,_=c*h,f=c*d;e[0]=u+f*r,e[4]=_*r-m,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-r,e[2]=m*r-_,e[6]=f+u*r,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,m=l*d,_=c*h,f=c*d;e[0]=u-f*r,e[4]=-a*d,e[8]=_+m*r,e[1]=m+_*r,e[5]=a*h,e[9]=f-u*r,e[2]=-a*c,e[6]=r,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,m=a*d,_=r*h,f=r*d;e[0]=l*h,e[4]=_*c-m,e[8]=u*c+f,e[1]=l*d,e[5]=f*c+u,e[9]=m*c-_,e[2]=-c,e[6]=r*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,m=a*c,_=r*l,f=r*c;e[0]=l*h,e[4]=f-u*d,e[8]=_*d+m,e[1]=d,e[5]=a*h,e[9]=-r*h,e[2]=-c*h,e[6]=m*d+_,e[10]=u-f*d}else if(t.order==="XZY"){let u=a*l,m=a*c,_=r*l,f=r*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+f,e[5]=a*h,e[9]=m*d-_,e[2]=_*d-m,e[6]=r*h,e[10]=f*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Df,t,If)}lookAt(t,e,n){let i=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Xn.crossVectors(n,We),Xn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Xn.crossVectors(n,We)),Xn.normalize(),ar.crossVectors(We,Xn),i[0]=Xn.x,i[4]=ar.x,i[8]=We.x,i[1]=Xn.y,i[5]=ar.y,i[9]=We.y,i[2]=Xn.z,i[6]=ar.z,i[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],r=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],m=n[13],_=n[2],f=n[6],p=n[10],y=n[14],v=n[3],g=n[7],M=n[11],b=n[15],E=i[0],C=i[4],x=i[8],w=i[12],R=i[1],U=i[5],q=i[9],O=i[13],D=i[2],B=i[6],Z=i[10],J=i[14],H=i[3],$=i[7],K=i[11],lt=i[15];return s[0]=a*E+r*R+l*D+c*H,s[4]=a*C+r*U+l*B+c*$,s[8]=a*x+r*q+l*Z+c*K,s[12]=a*w+r*O+l*J+c*lt,s[1]=h*E+d*R+u*D+m*H,s[5]=h*C+d*U+u*B+m*$,s[9]=h*x+d*q+u*Z+m*K,s[13]=h*w+d*O+u*J+m*lt,s[2]=_*E+f*R+p*D+y*H,s[6]=_*C+f*U+p*B+y*$,s[10]=_*x+f*q+p*Z+y*K,s[14]=_*w+f*O+p*J+y*lt,s[3]=v*E+g*R+M*D+b*H,s[7]=v*C+g*U+M*B+b*$,s[11]=v*x+g*q+M*Z+b*K,s[15]=v*w+g*O+M*J+b*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],r=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],m=t[14],_=t[3],f=t[7],p=t[11],y=t[15];return _*(+s*l*d-i*c*d-s*r*u+n*c*u+i*r*m-n*l*m)+f*(+e*l*m-e*c*u+s*a*u-i*a*m+i*c*h-s*l*h)+p*(+e*c*d-e*r*m-s*a*d+n*a*m+s*r*h-n*c*h)+y*(-i*r*h-e*l*d+e*r*u+i*a*d-n*a*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],m=t[11],_=t[12],f=t[13],p=t[14],y=t[15],v=d*p*c-f*u*c+f*l*m-r*p*m-d*l*y+r*u*y,g=_*u*c-h*p*c-_*l*m+a*p*m+h*l*y-a*u*y,M=h*f*c-_*d*c+_*r*m-a*f*m-h*r*y+a*d*y,b=_*d*l-h*f*l-_*r*u+a*f*u+h*r*p-a*d*p,E=e*v+n*g+i*M+s*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/E;return t[0]=v*C,t[1]=(f*u*s-d*p*s-f*i*m+n*p*m+d*i*y-n*u*y)*C,t[2]=(r*p*s-f*l*s+f*i*c-n*p*c-r*i*y+n*l*y)*C,t[3]=(d*l*s-r*u*s-d*i*c+n*u*c+r*i*m-n*l*m)*C,t[4]=g*C,t[5]=(h*p*s-_*u*s+_*i*m-e*p*m-h*i*y+e*u*y)*C,t[6]=(_*l*s-a*p*s-_*i*c+e*p*c+a*i*y-e*l*y)*C,t[7]=(a*u*s-h*l*s+h*i*c-e*u*c-a*i*m+e*l*m)*C,t[8]=M*C,t[9]=(_*d*s-h*f*s-_*n*m+e*f*m+h*n*y-e*d*y)*C,t[10]=(a*f*s-_*r*s+_*n*c-e*f*c-a*n*y+e*r*y)*C,t[11]=(h*r*s-a*d*s-h*n*c+e*d*c+a*n*m-e*r*m)*C,t[12]=b*C,t[13]=(h*f*i-_*d*i+_*n*u-e*f*u-h*n*p+e*d*p)*C,t[14]=(_*r*i-a*f*i-_*n*l+e*f*l+a*n*p-e*r*p)*C,t[15]=(a*d*i-h*r*i+h*n*l-e*d*l-a*n*u+e*r*u)*C,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,r=t.y,l=t.z,c=s*a,h=s*r;return this.set(c*a+n,c*r-i*l,c*l+i*r,0,c*r+i*l,h*r+n,h*l-i*a,0,c*l-i*r,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,a=e._y,r=e._z,l=e._w,c=s+s,h=a+a,d=r+r,u=s*c,m=s*h,_=s*d,f=a*h,p=a*d,y=r*d,v=l*c,g=l*h,M=l*d,b=n.x,E=n.y,C=n.z;return i[0]=(1-(f+y))*b,i[1]=(m+M)*b,i[2]=(_-g)*b,i[3]=0,i[4]=(m-M)*E,i[5]=(1-(u+y))*E,i[6]=(p+v)*E,i[7]=0,i[8]=(_+g)*C,i[9]=(p-v)*C,i[10]=(1-(u+f))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=Vi.set(i[0],i[1],i[2]).length(),a=Vi.set(i[4],i[5],i[6]).length(),r=Vi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],an.copy(this);let c=1/s,h=1/a,d=1/r;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=d,an.elements[9]*=d,an.elements[10]*=d,e.setFromRotationMatrix(an),n.x=s,n.y=a,n.z=r,this}makePerspective(t,e,n,i,s,a){let r=this.elements,l=2*s/(e-t),c=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i),u=-(a+s)/(a-s),m=-2*a*s/(a-s);return r[0]=l,r[4]=0,r[8]=h,r[12]=0,r[1]=0,r[5]=c,r[9]=d,r[13]=0,r[2]=0,r[6]=0,r[10]=u,r[14]=m,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(t,e,n,i,s,a){let r=this.elements,l=1/(e-t),c=1/(n-i),h=1/(a-s),d=(e+t)*l,u=(n+i)*c,m=(a+s)*h;return r[0]=2*l,r[4]=0,r[8]=0,r[12]=-d,r[1]=0,r[5]=2*c,r[9]=0,r[13]=-u,r[2]=0,r[6]=0,r[10]=-2*h,r[14]=-m,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Vi=new I,an=new jt,Df=new I(0,0,0),If=new I(1,1,1),Xn=new I,ar=new I,We=new I,gc=new jt,_c=new fn,as=class{constructor(t=0,e=0,n=0,i=as.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],a=i[4],r=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Ne(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _c.setFromEuler(this),this.setFromQuaternion(_c,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};as.DEFAULT_ORDER="XYZ";var Pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Of=0,xc=new I,Hi=new fn,Pn=new jt,or=new I,Es=new I,Nf=new I,Ff=new fn,yc=new I(1,0,0),vc=new I(0,1,0),bc=new I(0,0,1),zf={type:"added"},Mc={type:"removed"},ye=class extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();let t=new I,e=new as,n=new fn,i=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new jt},normalMatrix:{value:new de}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(yc,t)}rotateY(t){return this.rotateOnAxis(vc,t)}rotateZ(t){return this.rotateOnAxis(bc,t)}translateOnAxis(t,e){return xc.copy(t).applyQuaternion(this.quaternion),this.position.add(xc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yc,t)}translateY(t){return this.translateOnAxis(vc,t)}translateZ(t){return this.translateOnAxis(bc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?or.copy(t):or.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Es,or,this.up):Pn.lookAt(or,Es,this.up),this.quaternion.setFromRotationMatrix(Pn),i&&(Pn.extractRotation(i.matrixWorld),Hi.setFromRotationMatrix(Pn),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(zf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mc)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){let e=this.children[t];e.parent=null,e.dispatchEvent(Mc)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,t,Nf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,Ff,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let r=i[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){let l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(s(t.materials,this.material[l]));i.material=r}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){let l=this.animations[r];i.animations.push(s(t.animations,l))}}if(e){let r=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),m=a(t.animations),_=a(t.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(r){let l=[];for(let c in r){let h=r[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ye.DEFAULT_UP=new I(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var on=new I,Rn=new I,Da=new I,Ln=new I,Gi=new I,Wi=new I,wc=new I,Ia=new I,Oa=new I,Na=new I,un=class{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),on.subVectors(t,e),i.cross(on);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){on.subVectors(i,e),Rn.subVectors(n,e),Da.subVectors(t,e);let a=on.dot(on),r=on.dot(Rn),l=on.dot(Da),c=Rn.dot(Rn),h=Rn.dot(Da),d=a*c-r*r;if(d===0)return s.set(-2,-1,-1);let u=1/d,m=(c*l-r*h)*u,_=(a*h-r*l)*u;return s.set(1-m-_,_,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ln),Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getUV(t,e,n,i,s,a,r,l){return this.getBarycoord(t,e,n,i,Ln),l.set(0,0),l.addScaledVector(s,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(r,Ln.z),l}static isFrontFacing(t,e,n,i){return on.subVectors(n,e),Rn.subVectors(t,e),on.cross(Rn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),on.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return un.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,a,r;Gi.subVectors(i,n),Wi.subVectors(s,n),Ia.subVectors(t,n);let l=Gi.dot(Ia),c=Wi.dot(Ia);if(l<=0&&c<=0)return e.copy(n);Oa.subVectors(t,i);let h=Gi.dot(Oa),d=Wi.dot(Oa);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Gi,a);Na.subVectors(t,s);let m=Gi.dot(Na),_=Wi.dot(Na);if(_>=0&&m<=_)return e.copy(s);let f=m*c-l*_;if(f<=0&&c>=0&&_<=0)return r=c/(c-_),e.copy(n).addScaledVector(Wi,r);let p=h*_-m*d;if(p<=0&&d-h>=0&&m-_>=0)return wc.subVectors(s,i),r=(d-h)/(d-h+(m-_)),e.copy(i).addScaledVector(wc,r);let y=1/(p+f+u);return a=f*y,r=u*y,e.copy(n).addScaledVector(Gi,a).addScaledVector(Wi,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},kf=0,jn=class extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Hs(),this.name="",this.type="Material",this.blending=ji,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Qc,this.blendDst=th,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ya,this.stencilZFail=ya,this.stencilZPass=ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}let i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let r in s){let l=s[r];delete l.metadata,a.push(l)}return a}if(e){let s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ln={h:0,s:0,l:0},lr={h:0,s:0,l:0};function Fa(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ae.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Ae.workingColorSpace){if(t=Mf(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Fa(a,s,t+1/3),this.g=Fa(a,s,t),this.b=Fa(a,s,t-1/3)}return Ae.toWorkingColorSpace(this,i),this}setStyle(t,e=vn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=i[1],r=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ae.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ae.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){let l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ae.toWorkingColorSpace(this,e),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ae.toWorkingColorSpace(this,e),this;console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=vn){let n=oh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ts(t.r),this.g=ts(t.g),this.b=ts(t.b),this}copyLinearToSRGB(t){return this.r=Sa(t.r),this.g=Sa(t.g),this.b=Sa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vn){return Ae.fromWorkingColorSpace(_e.copy(this),t),Ne(_e.r*255,0,255)<<16^Ne(_e.g*255,0,255)<<8^Ne(_e.b*255,0,255)<<0}getHexString(t=vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ae.workingColorSpace){Ae.fromWorkingColorSpace(_e.copy(this),e);let n=_e.r,i=_e.g,s=_e.b,a=Math.max(n,i,s),r=Math.min(n,i,s),l,c,h=(r+a)/2;if(r===a)l=0,c=0;else{let d=a-r;switch(c=h<=.5?d/(a+r):d/(2-a-r),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(_e.copy(this),e),t.r=_e.r,t.g=_e.g,t.b=_e.b,t}getStyle(t=vn){Ae.fromWorkingColorSpace(_e.copy(this),t);let e=_e.r,n=_e.g,i=_e.b;return t!==vn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${i*255|0})`}offsetHSL(t,e,n){return this.getHSL(ln),ln.h+=t,ln.s+=e,ln.l+=n,this.setHSL(ln.h,ln.s,ln.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ln),t.getHSL(lr);let n=ba(ln.h,lr.h,e),i=ba(ln.s,lr.s,e),s=ba(ln.l,lr.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_e=new zt;zt.NAMES=oh;var Rr=class extends jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Kt=new I,cr=new bt,je=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cr.fromBufferAttribute(this,e),cr.applyMatrix3(t),this.setXY(e,cr.x,cr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyMatrix3(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyMatrix4(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyNormalMatrix(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.transformDirection(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=er(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=er(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=er(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=er(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),i=Ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),i=Ge(i,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uc&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}};var Lr=class extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Dr=class extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Uf=0,$e=new jt,za=new ye,Xi=new I,Xe=new bi,As=new bi,fe=new I,qe=class extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Hs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ah(t)?Dr:Lr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new de().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return za.lookAt(t),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ie(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Xe.setFromBufferAttribute(s),this.morphTargetsRelative?(fe.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(fe)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let r=e[s];As.setFromBufferAttribute(r),this.morphTargetsRelative?(fe.addVectors(Xe.min,As.min),Xe.expandByPoint(fe),fe.addVectors(Xe.max,As.max),Xe.expandByPoint(fe)):(Xe.expandByPoint(As.min),Xe.expandByPoint(As.max))}Xe.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)fe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(fe));if(e)for(let s=0,a=e.length;s<a;s++){let r=e[s],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)fe.fromBufferAttribute(r,c),l&&(Xi.fromBufferAttribute(t,c),fe.add(Xi)),i=Math.max(i,n.distanceToSquared(fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*r),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let R=0;R<r;R++)c[R]=new I,h[R]=new I;let d=new I,u=new I,m=new I,_=new bt,f=new bt,p=new bt,y=new I,v=new I;function g(R,U,q){d.fromArray(i,R*3),u.fromArray(i,U*3),m.fromArray(i,q*3),_.fromArray(a,R*2),f.fromArray(a,U*2),p.fromArray(a,q*2),u.sub(d),m.sub(d),f.sub(_),p.sub(_);let O=1/(f.x*p.y-p.x*f.y);isFinite(O)&&(y.copy(u).multiplyScalar(p.y).addScaledVector(m,-f.y).multiplyScalar(O),v.copy(m).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(O),c[R].add(y),c[U].add(y),c[q].add(y),h[R].add(v),h[U].add(v),h[q].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let R=0,U=M.length;R<U;++R){let q=M[R],O=q.start,D=q.count;for(let B=O,Z=O+D;B<Z;B+=3)g(n[B+0],n[B+1],n[B+2])}let b=new I,E=new I,C=new I,x=new I;function w(R){C.fromArray(s,R*3),x.copy(C);let U=c[R];b.copy(U),b.sub(C.multiplyScalar(C.dot(U))).normalize(),E.crossVectors(x,U);let O=E.dot(h[R])<0?-1:1;l[R*4]=b.x,l[R*4+1]=b.y,l[R*4+2]=b.z,l[R*4+3]=O}for(let R=0,U=M.length;R<U;++R){let q=M[R],O=q.start,D=q.count;for(let B=O,Z=O+D;B<Z;B+=3)w(n[B+0]),w(n[B+1]),w(n[B+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let i=new I,s=new I,a=new I,r=new I,l=new I,c=new I,h=new I,d=new I;if(t)for(let u=0,m=t.count;u<m;u+=3){let _=t.getX(u+0),f=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,f),a.fromBufferAttribute(e,p),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),r.fromBufferAttribute(n,_),l.fromBufferAttribute(n,f),c.fromBufferAttribute(n,p),r.add(h),l.add(h),c.add(h),n.setXYZ(_,r.x,r.y,r.z),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fe.fromBufferAttribute(t,e),fe.normalize(),t.setXYZ(e,fe.x,fe.y,fe.z)}toNonIndexed(){function t(r,l){let c=r.array,h=r.itemSize,d=r.normalized,u=new c.constructor(l.length*h),m=0,_=0;for(let f=0,p=l.length;f<p;f++){r.isInterleavedBufferAttribute?m=l[f]*r.data.stride+r.offset:m=l[f]*h;for(let y=0;y<h;y++)u[_++]=c[m++]}return new je(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new qe,n=this.index.array,i=this.attributes;for(let r in i){let l=i[r],c=t(l,n);e.setAttribute(r,c)}let s=this.morphAttributes;for(let r in s){let l=[],c=s[r];for(let h=0,d=c.length;h<d;h++){let u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let r=0,l=a.length;r<l;r++){let c=a[r];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sc=new jt,yn=new Cr,hr=new rs,Tc=new I,Cs=new I,Ps=new I,Rs=new I,ka=new I,ur=new I,fr=new bt,dr=new bt,pr=new bt,Ua=new I,mr=new I,ne=class extends ye{constructor(t=new qe,e=new Rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let r=this.morphTargetInfluences;if(s&&r){ur.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=r[l],d=s[l];h!==0&&(ka.fromBufferAttribute(d,t),a?ur.addScaledVector(ka,h):ur.addScaledVector(ka.sub(e),h))}e.add(ur)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(s),yn.copy(t.ray).recast(t.near),hr.containsPoint(yn.origin)===!1&&(yn.intersectSphere(hr,Tc)===null||yn.origin.distanceToSquared(Tc)>(t.far-t.near)**2))||(Sc.copy(s).invert(),yn.copy(t.ray).applyMatrix4(Sc),n.boundingBox!==null&&yn.intersectsBox(n.boundingBox)===!1))return;let a,r=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,d=n.groups,u=n.drawRange;if(r!==null)if(Array.isArray(i))for(let m=0,_=d.length;m<_;m++){let f=d[m],p=i[f.materialIndex],y=Math.max(f.start,u.start),v=Math.min(r.count,Math.min(f.start+f.count,u.start+u.count));for(let g=y,M=v;g<M;g+=3){let b=r.getX(g),E=r.getX(g+1),C=r.getX(g+2);a=gr(this,p,t,yn,c,h,b,E,C),a&&(a.faceIndex=Math.floor(g/3),a.face.materialIndex=f.materialIndex,e.push(a))}}else{let m=Math.max(0,u.start),_=Math.min(r.count,u.start+u.count);for(let f=m,p=_;f<p;f+=3){let y=r.getX(f),v=r.getX(f+1),g=r.getX(f+2);a=gr(this,i,t,yn,c,h,y,v,g),a&&(a.faceIndex=Math.floor(f/3),e.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,_=d.length;m<_;m++){let f=d[m],p=i[f.materialIndex],y=Math.max(f.start,u.start),v=Math.min(l.count,Math.min(f.start+f.count,u.start+u.count));for(let g=y,M=v;g<M;g+=3){let b=g,E=g+1,C=g+2;a=gr(this,p,t,yn,c,h,b,E,C),a&&(a.faceIndex=Math.floor(g/3),a.face.materialIndex=f.materialIndex,e.push(a))}}else{let m=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let f=m,p=_;f<p;f+=3){let y=f,v=f+1,g=f+2;a=gr(this,i,t,yn,c,h,y,v,g),a&&(a.faceIndex=Math.floor(f/3),e.push(a))}}}};function Bf(o,t,e,n,i,s,a,r){let l;if(t.side===xe?l=n.intersectTriangle(a,s,i,!0,r):l=n.intersectTriangle(i,s,a,t.side===Kn,r),l===null)return null;mr.copy(r),mr.applyMatrix4(o.matrixWorld);let c=e.ray.origin.distanceTo(mr);return c<e.near||c>e.far?null:{distance:c,point:mr.clone(),object:o}}function gr(o,t,e,n,i,s,a,r,l){o.getVertexPosition(a,Cs),o.getVertexPosition(r,Ps),o.getVertexPosition(l,Rs);let c=Bf(o,t,e,n,Cs,Ps,Rs,Ua);if(c){i&&(fr.fromBufferAttribute(i,a),dr.fromBufferAttribute(i,r),pr.fromBufferAttribute(i,l),c.uv=un.getUV(Ua,Cs,Ps,Rs,fr,dr,pr,new bt)),s&&(fr.fromBufferAttribute(s,a),dr.fromBufferAttribute(s,r),pr.fromBufferAttribute(s,l),c.uv2=un.getUV(Ua,Cs,Ps,Rs,fr,dr,pr,new bt));let h={a,b:r,c:l,normal:new I,materialIndex:0};un.getNormal(Cs,Ps,Rs,h.normal),c.face=h}return c}var Ye=class extends qe{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let r=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,m=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(d,2));function _(f,p,y,v,g,M,b,E,C,x,w){let R=M/C,U=b/x,q=M/2,O=b/2,D=E/2,B=C+1,Z=x+1,J=0,H=0,$=new I;for(let K=0;K<Z;K++){let lt=K*U-O;for(let V=0;V<B;V++){let j=V*R-q;$[f]=j*v,$[p]=lt*g,$[y]=D,c.push($.x,$.y,$.z),$[f]=0,$[p]=0,$[y]=E>0?1:-1,h.push($.x,$.y,$.z),d.push(V/C),d.push(1-K/x),J+=1}}for(let K=0;K<x;K++)for(let lt=0;lt<C;lt++){let V=u+lt+B*K,j=u+lt+B*(K+1),tt=u+(lt+1)+B*(K+1),N=u+(lt+1)+B*K;l.push(V,j,N),l.push(j,tt,N),H+=6}r.addGroup(m,H,w),m+=H,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function os(o){let t={};for(let e in o){t[e]={};for(let n in o[e]){let i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ce(o){let t={};for(let e=0;e<o.length;e++){let n=os(o[e]);for(let i in n)t[i]=n[i]}return t}function Vf(o){let t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function lh(o){return o.getRenderTarget()===null&&o.outputEncoding===Ht?vn:Fs}var Hf={clone:os,merge:Ce},Gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gf,this.fragmentShader=Wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=Vf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ir=class extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Re=class extends Ir{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=dc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dc*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(va*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let r=this.filmOffset;r!==0&&(s+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},qi=-90,Yi=1,ja=class extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;let i=new Re(qi,Yi,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);let s=new Re(qi,Yi,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);let a=new Re(qi,Yi,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);let r=new Re(qi,Yi,t,e);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(0,-1,0),this.add(r);let l=new Re(qi,Yi,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);let c=new Re(qi,Yi,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,s,a,r,l,c]=this.children,h=t.getRenderTarget(),d=t.toneMapping,u=t.xr.enabled;t.toneMapping=In,t.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,r),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=d,t.xr.enabled=u,n.texture.needsPMREMUpdate=!0}},Or=class extends Le{constructor(t,e,n,i,s,a,r,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ns,super(t,e,n,i,s,a,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Qa=class extends On{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Or(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ye(5,5,5),s=new Nn({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xe,blending:$n});s.uniforms.tEquirect.value=e;let a=new ne(i,s),r=e.minFilter;return e.minFilter===Os&&(e.minFilter=Ke),new ja(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}},Ba=new I,Xf=new I,qf=new de,Dn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ba.subVectors(n,e).cross(Xf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ba),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||qf.getNormalMatrix(t),i=this.coplanarPoint(Ba).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zi=new rs,_r=new I,Nr=class{constructor(t=new Dn,e=new Dn,n=new Dn,i=new Dn,s=new Dn,a=new Dn){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){let r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(i),r[4].copy(s),r[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){let e=this.planes,n=t.elements,i=n[0],s=n[1],a=n[2],r=n[3],l=n[4],c=n[5],h=n[6],d=n[7],u=n[8],m=n[9],_=n[10],f=n[11],p=n[12],y=n[13],v=n[14],g=n[15];return e[0].setComponents(r-i,d-l,f-u,g-p).normalize(),e[1].setComponents(r+i,d+l,f+u,g+p).normalize(),e[2].setComponents(r+s,d+c,f+m,g+y).normalize(),e[3].setComponents(r-s,d-c,f-m,g-y).normalize(),e[4].setComponents(r-a,d-h,f-_,g-v).normalize(),e[5].setComponents(r+a,d+h,f+_,g+v).normalize(),this}intersectsObject(t){let e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Zi)}intersectsSprite(t){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(_r.x=i.normal.x>0?t.max.x:t.min.x,_r.y=i.normal.y>0?t.max.y:t.min.y,_r.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(_r)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ch(){let o=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function Yf(o,t){let e=t.isWebGL2,n=new WeakMap;function i(c,h){let d=c.array,u=c.usage,m=o.createBuffer();o.bindBuffer(h,m),o.bufferData(h,d,u),c.onUploadCallback();let _;if(d instanceof Float32Array)_=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(d instanceof Int16Array)_=5122;else if(d instanceof Uint32Array)_=5125;else if(d instanceof Int32Array)_=5124;else if(d instanceof Int8Array)_=5120;else if(d instanceof Uint8Array)_=5121;else if(d instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){let u=h.array,m=h.updateRange;o.bindBuffer(d,c),m.count===-1?o.bufferSubData(d,0,u):(e?o.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):o.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(o.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:a,remove:r,update:l}}var zs=class extends qe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,a=e/2,r=Math.floor(n),l=Math.floor(i),c=r+1,h=l+1,d=t/r,u=e/l,m=[],_=[],f=[],p=[];for(let y=0;y<h;y++){let v=y*u-a;for(let g=0;g<c;g++){let M=g*d-s;_.push(M,-v,0),f.push(0,0,1),p.push(g/r),p.push(1-y/l)}}for(let y=0;y<l;y++)for(let v=0;v<r;v++){let g=v+c*y,M=v+c*(y+1),b=v+1+c*(y+1),E=v+1+c*y;m.push(g,M,E),m.push(M,b,E)}this.setIndex(m),this.setAttribute("position",new ie(_,3)),this.setAttribute("normal",new ie(f,3)),this.setAttribute("uv",new ie(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zs(t.width,t.height,t.widthSegments,t.heightSegments)}},Zf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$f=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,td="vec3 transformed = vec3( position );",ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nd=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,id=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,sd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dd=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
}`,pd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,md=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vd="gl_FragColor = linearToOutputTexel( gl_FragColor );",bd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Md=`#ifdef USE_ENVMAP
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
#endif`,wd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sd=`#ifdef USE_ENVMAP
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
#endif`,Td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ed=`#ifdef USE_ENVMAP
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
#endif`,Ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ld=`#ifdef USE_GRADIENTMAP
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
}`,Dd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Od=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,zd=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,kd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ud=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Gd=`struct PhysicalMaterial {
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Wd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Yd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$d=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Kd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ip=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sp=`#ifdef USE_MORPHNORMALS
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
#endif`,rp=`#ifdef USE_MORPHTARGETS
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
#endif`,ap=`#ifdef USE_MORPHTARGETS
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
#endif`,op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,lp=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,pp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ap=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cp=`float getShadowMask() {
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
}`,Pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Lp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dp=`#ifdef USE_SKINNING
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
#endif`,Ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,kp=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
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
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Up=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Bp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Vp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Hp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Gp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Wp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Xp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yp=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <encodings_fragment>
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
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
}`,Qp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,tm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,em=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
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
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,am=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,om=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,cm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,um=`#define MATCAP
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
}`,pm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,mm=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,_m=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ym=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
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
}`,bm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
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
}`,wm=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Sm=`uniform float rotation;
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
}`,Tm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,wt={alphamap_fragment:Zf,alphamap_pars_fragment:Jf,alphatest_fragment:$f,alphatest_pars_fragment:Kf,aomap_fragment:jf,aomap_pars_fragment:Qf,begin_vertex:td,beginnormal_vertex:ed,bsdfs:nd,iridescence_fragment:id,bumpmap_pars_fragment:sd,clipping_planes_fragment:rd,clipping_planes_pars_fragment:ad,clipping_planes_pars_vertex:od,clipping_planes_vertex:ld,color_fragment:cd,color_pars_fragment:hd,color_pars_vertex:ud,color_vertex:fd,common:dd,cube_uv_reflection_fragment:pd,defaultnormal_vertex:md,displacementmap_pars_vertex:gd,displacementmap_vertex:_d,emissivemap_fragment:xd,emissivemap_pars_fragment:yd,encodings_fragment:vd,encodings_pars_fragment:bd,envmap_fragment:Md,envmap_common_pars_fragment:wd,envmap_pars_fragment:Sd,envmap_pars_vertex:Td,envmap_physical_pars_fragment:zd,envmap_vertex:Ed,fog_vertex:Ad,fog_pars_vertex:Cd,fog_fragment:Pd,fog_pars_fragment:Rd,gradientmap_pars_fragment:Ld,lightmap_fragment:Dd,lightmap_pars_fragment:Id,lights_lambert_fragment:Od,lights_lambert_pars_fragment:Nd,lights_pars_begin:Fd,lights_toon_fragment:kd,lights_toon_pars_fragment:Ud,lights_phong_fragment:Bd,lights_phong_pars_fragment:Vd,lights_physical_fragment:Hd,lights_physical_pars_fragment:Gd,lights_fragment_begin:Wd,lights_fragment_maps:Xd,lights_fragment_end:qd,logdepthbuf_fragment:Yd,logdepthbuf_pars_fragment:Zd,logdepthbuf_pars_vertex:Jd,logdepthbuf_vertex:$d,map_fragment:Kd,map_pars_fragment:jd,map_particle_fragment:Qd,map_particle_pars_fragment:tp,metalnessmap_fragment:ep,metalnessmap_pars_fragment:np,morphcolor_vertex:ip,morphnormal_vertex:sp,morphtarget_pars_vertex:rp,morphtarget_vertex:ap,normal_fragment_begin:op,normal_fragment_maps:lp,normal_pars_fragment:cp,normal_pars_vertex:hp,normal_vertex:up,normalmap_pars_fragment:fp,clearcoat_normal_fragment_begin:dp,clearcoat_normal_fragment_maps:pp,clearcoat_pars_fragment:mp,iridescence_pars_fragment:gp,output_fragment:_p,packing:xp,premultiplied_alpha_fragment:yp,project_vertex:vp,dithering_fragment:bp,dithering_pars_fragment:Mp,roughnessmap_fragment:wp,roughnessmap_pars_fragment:Sp,shadowmap_pars_fragment:Tp,shadowmap_pars_vertex:Ep,shadowmap_vertex:Ap,shadowmask_pars_fragment:Cp,skinbase_vertex:Pp,skinning_pars_vertex:Rp,skinning_vertex:Lp,skinnormal_vertex:Dp,specularmap_fragment:Ip,specularmap_pars_fragment:Op,tonemapping_fragment:Np,tonemapping_pars_fragment:Fp,transmission_fragment:zp,transmission_pars_fragment:kp,uv_pars_fragment:Up,uv_pars_vertex:Bp,uv_vertex:Vp,uv2_pars_fragment:Hp,uv2_pars_vertex:Gp,uv2_vertex:Wp,worldpos_vertex:Xp,background_vert:qp,background_frag:Yp,backgroundCube_vert:Zp,backgroundCube_frag:Jp,cube_vert:$p,cube_frag:Kp,depth_vert:jp,depth_frag:Qp,distanceRGBA_vert:tm,distanceRGBA_frag:em,equirect_vert:nm,equirect_frag:im,linedashed_vert:sm,linedashed_frag:rm,meshbasic_vert:am,meshbasic_frag:om,meshlambert_vert:lm,meshlambert_frag:cm,meshmatcap_vert:hm,meshmatcap_frag:um,meshnormal_vert:fm,meshnormal_frag:dm,meshphong_vert:pm,meshphong_frag:mm,meshphysical_vert:gm,meshphysical_frag:_m,meshtoon_vert:xm,meshtoon_frag:ym,points_vert:vm,points_frag:bm,shadow_vert:Mm,shadow_frag:wm,sprite_vert:Sm,sprite_frag:Tm},it={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new de},uv2Transform:{value:new de},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new de}}},bn={basic:{uniforms:Ce([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Ce([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new zt(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Ce([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Ce([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Ce([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new zt(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Ce([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Ce([it.points,it.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Ce([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Ce([it.common,it.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Ce([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Ce([it.sprite,it.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distanceRGBA:{uniforms:Ce([it.common,it.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distanceRGBA_vert,fragmentShader:wt.distanceRGBA_frag},shadow:{uniforms:Ce([it.lights,it.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};bn.physical={uniforms:Ce([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new bt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};var xr={r:0,b:0,g:0};function Em(o,t,e,n,i,s,a){let r=new zt(0),l=s===!0?0:1,c,h,d=null,u=0,m=null;function _(p,y){let v=!1,g=y.isScene===!0?y.background:null;g&&g.isTexture&&(g=(y.backgroundBlurriness>0?e:t).get(g));let M=o.xr,b=M.getSession&&M.getSession();b&&b.environmentBlendMode==="additive"&&(g=null),g===null?f(r,l):g&&g.isColor&&(f(g,1),v=!0),(o.autoClear||v)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Ur)?(h===void 0&&(h=new ne(new Ye(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:os(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:xe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,C,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=g.encoding!==Ht,(d!==g||u!==g.version||m!==o.toneMapping)&&(h.material.needsUpdate=!0,d=g,u=g.version,m=o.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new ne(new zs(2,2),new Nn({name:"BackgroundMaterial",uniforms:os(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=g.encoding!==Ht,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||u!==g.version||m!==o.toneMapping)&&(c.material.needsUpdate=!0,d=g,u=g.version,m=o.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function f(p,y){p.getRGB(xr,lh(o)),n.buffers.color.setClear(xr.r,xr.g,xr.b,y,a)}return{getClearColor:function(){return r},setClearColor:function(p,y=1){r.set(p),l=y,f(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,f(r,l)},render:_}}function Am(o,t,e,n){let i=o.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,r={},l=p(null),c=l,h=!1;function d(D,B,Z,J,H){let $=!1;if(a){let K=f(J,Z,B);c!==K&&(c=K,m(c.object)),$=y(D,J,Z,H),$&&v(D,J,Z,H)}else{let K=B.wireframe===!0;(c.geometry!==J.id||c.program!==Z.id||c.wireframe!==K)&&(c.geometry=J.id,c.program=Z.id,c.wireframe=K,$=!0)}H!==null&&e.update(H,34963),($||h)&&(h=!1,x(D,B,Z,J),H!==null&&o.bindBuffer(34963,e.get(H).buffer))}function u(){return n.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function m(D){return n.isWebGL2?o.bindVertexArray(D):s.bindVertexArrayOES(D)}function _(D){return n.isWebGL2?o.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function f(D,B,Z){let J=Z.wireframe===!0,H=r[D.id];H===void 0&&(H={},r[D.id]=H);let $=H[B.id];$===void 0&&($={},H[B.id]=$);let K=$[J];return K===void 0&&(K=p(u()),$[J]=K),K}function p(D){let B=[],Z=[],J=[];for(let H=0;H<i;H++)B[H]=0,Z[H]=0,J[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Z,attributeDivisors:J,object:D,attributes:{},index:null}}function y(D,B,Z,J){let H=c.attributes,$=B.attributes,K=0,lt=Z.getAttributes();for(let V in lt)if(lt[V].location>=0){let tt=H[V],N=$[V];if(N===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(N=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(N=D.instanceColor)),tt===void 0||tt.attribute!==N||N&&tt.data!==N.data)return!0;K++}return c.attributesNum!==K||c.index!==J}function v(D,B,Z,J){let H={},$=B.attributes,K=0,lt=Z.getAttributes();for(let V in lt)if(lt[V].location>=0){let tt=$[V];tt===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor));let N={};N.attribute=tt,tt&&tt.data&&(N.data=tt.data),H[V]=N,K++}c.attributes=H,c.attributesNum=K,c.index=J}function g(){let D=c.newAttributes;for(let B=0,Z=D.length;B<Z;B++)D[B]=0}function M(D){b(D,0)}function b(D,B){let Z=c.newAttributes,J=c.enabledAttributes,H=c.attributeDivisors;Z[D]=1,J[D]===0&&(o.enableVertexAttribArray(D),J[D]=1),H[D]!==B&&((n.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,B),H[D]=B)}function E(){let D=c.newAttributes,B=c.enabledAttributes;for(let Z=0,J=B.length;Z<J;Z++)B[Z]!==D[Z]&&(o.disableVertexAttribArray(Z),B[Z]=0)}function C(D,B,Z,J,H,$){n.isWebGL2===!0&&(Z===5124||Z===5125)?o.vertexAttribIPointer(D,B,Z,H,$):o.vertexAttribPointer(D,B,Z,J,H,$)}function x(D,B,Z,J){if(n.isWebGL2===!1&&(D.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();let H=J.attributes,$=Z.getAttributes(),K=B.defaultAttributeValues;for(let lt in $){let V=$[lt];if(V.location>=0){let j=H[lt];if(j===void 0&&(lt==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),lt==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){let tt=j.normalized,N=j.itemSize,ct=e.get(j);if(ct===void 0)continue;let ht=ct.buffer,ft=ct.type,ut=ct.bytesPerElement;if(j.isInterleavedBufferAttribute){let yt=j.data,Mt=yt.stride,St=j.offset;if(yt.isInstancedInterleavedBuffer){for(let Dt=0;Dt<V.locationSize;Dt++)b(V.location+Dt,yt.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Dt=0;Dt<V.locationSize;Dt++)M(V.location+Dt);o.bindBuffer(34962,ht);for(let Dt=0;Dt<V.locationSize;Dt++)C(V.location+Dt,N/V.locationSize,ft,tt,Mt*ut,(St+N/V.locationSize*Dt)*ut)}else{if(j.isInstancedBufferAttribute){for(let yt=0;yt<V.locationSize;yt++)b(V.location+yt,j.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let yt=0;yt<V.locationSize;yt++)M(V.location+yt);o.bindBuffer(34962,ht);for(let yt=0;yt<V.locationSize;yt++)C(V.location+yt,N/V.locationSize,ft,tt,N*ut,N/V.locationSize*yt*ut)}}else if(K!==void 0){let tt=K[lt];if(tt!==void 0)switch(tt.length){case 2:o.vertexAttrib2fv(V.location,tt);break;case 3:o.vertexAttrib3fv(V.location,tt);break;case 4:o.vertexAttrib4fv(V.location,tt);break;default:o.vertexAttrib1fv(V.location,tt)}}}}E()}function w(){q();for(let D in r){let B=r[D];for(let Z in B){let J=B[Z];for(let H in J)_(J[H].object),delete J[H];delete B[Z]}delete r[D]}}function R(D){if(r[D.id]===void 0)return;let B=r[D.id];for(let Z in B){let J=B[Z];for(let H in J)_(J[H].object),delete J[H];delete B[Z]}delete r[D.id]}function U(D){for(let B in r){let Z=r[B];if(Z[D.id]===void 0)continue;let J=Z[D.id];for(let H in J)_(J[H].object),delete J[H];delete Z[D.id]}}function q(){O(),h=!0,c!==l&&(c=l,m(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:O,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:U,initAttributes:g,enableAttribute:M,disableUnusedAttributes:E}}function Cm(o,t,e,n){let i=n.isWebGL2,s;function a(c){s=c}function r(c,h){o.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,d){if(d===0)return;let u,m;if(i)u=o,m="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](s,c,h,d),e.update(h,s,d)}this.setMode=a,this.render=r,this.renderInstances=l}function Pm(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&o instanceof WebGL2RenderingContext,r=e.precision!==void 0?e.precision:"highp",l=s(r);l!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",l,"instead."),r=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=o.getParameter(34930),u=o.getParameter(35660),m=o.getParameter(3379),_=o.getParameter(34076),f=o.getParameter(34921),p=o.getParameter(36347),y=o.getParameter(36348),v=o.getParameter(36349),g=u>0,M=a||t.has("OES_texture_float"),b=g&&M,E=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:p,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:M,floatVertexTextures:b,maxSamples:E}}function Rm(o){let t=this,e=null,n=0,i=!1,s=!1,a=new Dn,r=new de,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let m=d.length!==0||u||n!==0||i;return i=u,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,m){let _=d.clippingPlanes,f=d.clipIntersection,p=d.clipShadows,y=o.get(d);if(!i||_===null||_.length===0||s&&!p)s?h(null):c();else{let v=s?0:n,g=v*4,M=y.clippingState||null;l.value=M,M=h(_,u,g,m);for(let b=0;b!==g;++b)M[b]=e[b];y.clippingState=M,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,_){let f=d!==null?d.length:0,p=null;if(f!==0){if(p=l.value,_!==!0||p===null){let y=m+f*4,v=u.matrixWorldInverse;r.getNormalMatrix(v),(p===null||p.length<y)&&(p=new Float32Array(y));for(let g=0,M=m;g!==f;++g,M+=4)a.copy(d[g]).applyMatrix4(v,r),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=f,t.numIntersection=0,p}}function Lm(o){let t=new WeakMap;function e(a,r){return r===qa?a.mapping=ns:r===Ya&&(a.mapping=is),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){let r=a.mapping;if(r===qa||r===Ya)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Qa(l.height/2);return c.fromEquirectangularTexture(o,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let r=a.target;r.removeEventListener("dispose",i);let l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var to=class extends Ir{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,a=n+t,r=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,r,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ki=4,Ec=[.125,.215,.35,.446,.526,.582],mi=20,Va=new to,Ac=new zt,Ha=null,pi=(1+Math.sqrt(5))/2,Ji=1/pi,Cc=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,pi,Ji),new I(0,pi,-Ji),new I(Ji,0,pi),new I(-Ji,0,pi),new I(pi,Ji,0),new I(-pi,Ji,0)],Fr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ha=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ha),t.scissorTest=!1,yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ns||t.mapping===is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ha=this._renderer.getRenderTarget();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:Ns,format:hn,encoding:vi,depthBuffer:!1},i=Pc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pc(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dm(s)),this._blurMaterial=Im(s,t,e)}return i}_compileMaterial(t){let e=new ne(this._lodPlanes[0],t);this._renderer.compile(e,Va)}_sceneToCubeUV(t,e,n,i){let r=new Re(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Ac),h.toneMapping=In,h.autoClear=!1;let m=new Rr({name:"PMREM.Background",side:xe,depthWrite:!1,depthTest:!1}),_=new ne(new Ye,m),f=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,f=!0):(m.color.copy(Ac),f=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(r.up.set(0,l[y],0),r.lookAt(c[y],0,0)):v===1?(r.up.set(0,0,l[y]),r.lookAt(0,c[y],0)):(r.up.set(0,l[y],0),r.lookAt(0,0,c[y]));let g=this._cubeSize;yr(i,v*g,y>2?g:0,g,g),h.setRenderTarget(i),f&&h.render(_,r),h.render(t,r)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ns||t.mapping===is;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rc());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new ne(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=t;let l=this._cubeSize;yr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Va)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Cc[(i-1)%Cc.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,r){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new ne(this._lodPlanes[i],c),u=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*mi-1),f=s/_,p=isFinite(s)?1+Math.floor(h*f):mi;p>mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${mi}`);let y=[],v=0;for(let C=0;C<mi;++C){let x=C/f,w=Math.exp(-x*x/2);y.push(w),C===0?v+=w:C<p&&(v+=2*w)}for(let C=0;C<y.length;C++)y[C]=y[C]/v;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=y,u.latitudinal.value=a==="latitudinal",r&&(u.poleAxis.value=r);let{_lodMax:g}=this;u.dTheta.value=_,u.mipInt.value=g-n;let M=this._sizeLods[i],b=3*M*(i>g-Ki?i-g+Ki:0),E=4*(this._cubeSize-M);yr(e,b,E,3*M,2*M),l.setRenderTarget(e),l.render(d,Va)}};function Dm(o){let t=[],e=[],n=[],i=o,s=o-Ki+1+Ec.length;for(let a=0;a<s;a++){let r=Math.pow(2,i);e.push(r);let l=1/r;a>o-Ki?l=Ec[a-o+Ki-1]:a===0&&(l=0),n.push(l);let c=1/(r-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,_=6,f=3,p=2,y=1,v=new Float32Array(f*_*m),g=new Float32Array(p*_*m),M=new Float32Array(y*_*m);for(let E=0;E<m;E++){let C=E%3*2/3-1,x=E>2?0:-1,w=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];v.set(w,f*_*E),g.set(u,p*_*E);let R=[E,E,E,E,E,E];M.set(R,y*_*E)}let b=new qe;b.setAttribute("position",new je(v,f)),b.setAttribute("uv",new je(g,p)),b.setAttribute("faceIndex",new je(M,y)),t.push(b),i>Ki&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Pc(o,t,e){let n=new On(o,t,e);return n.texture.mapping=Ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yr(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function Im(o,t,e){let n=new Float32Array(mi),i=new I(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:To(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Rc(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:To(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Lc(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function To(){return`

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
	`}function Om(o){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){let l=r.mapping,c=l===qa||l===Ya,h=l===ns||l===is;if(c||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let d=t.get(r);return e===null&&(e=new Fr(o)),d=c?e.fromEquirectangular(r,d):e.fromCubemap(r,d),t.set(r,d),d.texture}else{if(t.has(r))return t.get(r).texture;{let d=r.image;if(c&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new Fr(o));let u=c?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,u),r.addEventListener("dispose",s),u.texture}else return null}}}return r}function i(r){let l=0,c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function s(r){let l=r.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Nm(o){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Fm(o,t,e,n){let i={},s=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete i[u.id];let m=s.get(u);m&&(t.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function r(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let _ in u)t.update(u[_],34962);let m=d.morphAttributes;for(let _ in m){let f=m[_];for(let p=0,y=f.length;p<y;p++)t.update(f[p],34962)}}function c(d){let u=[],m=d.index,_=d.attributes.position,f=0;if(m!==null){let v=m.array;f=m.version;for(let g=0,M=v.length;g<M;g+=3){let b=v[g+0],E=v[g+1],C=v[g+2];u.push(b,E,E,C,C,b)}}else{let v=_.array;f=_.version;for(let g=0,M=v.length/3-1;g<M;g+=3){let b=g+0,E=g+1,C=g+2;u.push(b,E,E,C,C,b)}}let p=new(ah(u)?Dr:Lr)(u,1);p.version=f;let y=s.get(d);y&&t.remove(y),s.set(d,p)}function h(d){let u=s.get(d);if(u){let m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:r,update:l,getWireframeAttribute:h}}function zm(o,t,e,n){let i=n.isWebGL2,s;function a(u){s=u}let r,l;function c(u){r=u.type,l=u.bytesPerElement}function h(u,m){o.drawElements(s,m,r,u*l),e.update(m,s,1)}function d(u,m,_){if(_===0)return;let f,p;if(i)f=o,p="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,m,r,u*l,_),e.update(m,s,_)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d}function km(o){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,r){switch(e.calls++,a){case 4:e.triangles+=r*(s/3);break;case 1:e.lines+=r*(s/2);break;case 3:e.lines+=r*(s-1);break;case 2:e.lines+=r*s;break;case 0:e.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Um(o,t){return o[0]-t[0]}function Bm(o,t){return Math.abs(t[1])-Math.abs(o[1])}function Vm(o,t,e){let n={},i=new Float32Array(8),s=new WeakMap,a=new ee,r=[];for(let c=0;c<8;c++)r[c]=[c,0];function l(c,h,d){let u=c.morphTargetInfluences;if(t.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0,f=s.get(h);if(f===void 0||f.count!==_){let D=function(){q.dispose(),s.delete(h),h.removeEventListener("dispose",D)};f!==void 0&&f.texture.dispose();let v=h.morphAttributes.position!==void 0,g=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],x=0;v===!0&&(x=1),g===!0&&(x=2),M===!0&&(x=3);let w=h.attributes.position.count*x,R=1;w>t.maxTextureSize&&(R=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let U=new Float32Array(w*R*4*_),q=new Ar(U,w,R,_);q.type=_i,q.needsUpdate=!0;let O=x*4;for(let B=0;B<_;B++){let Z=b[B],J=E[B],H=C[B],$=w*R*4*B;for(let K=0;K<Z.count;K++){let lt=K*O;v===!0&&(a.fromBufferAttribute(Z,K),U[$+lt+0]=a.x,U[$+lt+1]=a.y,U[$+lt+2]=a.z,U[$+lt+3]=0),g===!0&&(a.fromBufferAttribute(J,K),U[$+lt+4]=a.x,U[$+lt+5]=a.y,U[$+lt+6]=a.z,U[$+lt+7]=0),M===!0&&(a.fromBufferAttribute(H,K),U[$+lt+8]=a.x,U[$+lt+9]=a.y,U[$+lt+10]=a.z,U[$+lt+11]=H.itemSize===4?a.w:1)}}f={count:_,texture:q,size:new bt(w,R)},s.set(h,f),h.addEventListener("dispose",D)}let p=0;for(let v=0;v<u.length;v++)p+=u[v];let y=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(o,"morphTargetBaseInfluence",y),d.getUniforms().setValue(o,"morphTargetInfluences",u),d.getUniforms().setValue(o,"morphTargetsTexture",f.texture,e),d.getUniforms().setValue(o,"morphTargetsTextureSize",f.size)}else{let m=u===void 0?0:u.length,_=n[h.id];if(_===void 0||_.length!==m){_=[];for(let g=0;g<m;g++)_[g]=[g,0];n[h.id]=_}for(let g=0;g<m;g++){let M=_[g];M[0]=g,M[1]=u[g]}_.sort(Bm);for(let g=0;g<8;g++)g<m&&_[g][1]?(r[g][0]=_[g][0],r[g][1]=_[g][1]):(r[g][0]=Number.MAX_SAFE_INTEGER,r[g][1]=0);r.sort(Um);let f=h.morphAttributes.position,p=h.morphAttributes.normal,y=0;for(let g=0;g<8;g++){let M=r[g],b=M[0],E=M[1];b!==Number.MAX_SAFE_INTEGER&&E?(f&&h.getAttribute("morphTarget"+g)!==f[b]&&h.setAttribute("morphTarget"+g,f[b]),p&&h.getAttribute("morphNormal"+g)!==p[b]&&h.setAttribute("morphNormal"+g,p[b]),i[g]=E,y+=E):(f&&h.hasAttribute("morphTarget"+g)===!0&&h.deleteAttribute("morphTarget"+g),p&&h.hasAttribute("morphNormal"+g)===!0&&h.deleteAttribute("morphNormal"+g),i[g]=0)}let v=h.morphTargetsRelative?1:1-y;d.getUniforms().setValue(o,"morphTargetBaseInfluence",v),d.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function Hm(o,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);return i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),d}function a(){i=new WeakMap}function r(l){let c=l.target;c.removeEventListener("dispose",r),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}var hh=new Le,uh=new Ar,fh=new Ka,dh=new Or,Dc=[],Ic=[],Oc=new Float32Array(16),Nc=new Float32Array(9),Fc=new Float32Array(4);function hs(o,t,e){let n=o[0];if(n<=0||n>0)return o;let i=t*e,s=Dc[i];if(s===void 0&&(s=new Float32Array(i),Dc[i]=s),t!==0){n.toArray(s,0);for(let a=1,r=0;a!==t;++a)r+=e,o[a].toArray(s,r)}return s}function se(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function re(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Br(o,t){let e=Ic[t];e===void 0&&(e=new Int32Array(t),Ic[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function Gm(o,t){let e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function Wm(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;o.uniform2fv(this.addr,t),re(e,t)}}function Xm(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(se(e,t))return;o.uniform3fv(this.addr,t),re(e,t)}}function qm(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;o.uniform4fv(this.addr,t),re(e,t)}}function Ym(o,t){let e=this.cache,n=t.elements;if(n===void 0){if(se(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),re(e,t)}else{if(se(e,n))return;Fc.set(n),o.uniformMatrix2fv(this.addr,!1,Fc),re(e,n)}}function Zm(o,t){let e=this.cache,n=t.elements;if(n===void 0){if(se(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),re(e,t)}else{if(se(e,n))return;Nc.set(n),o.uniformMatrix3fv(this.addr,!1,Nc),re(e,n)}}function Jm(o,t){let e=this.cache,n=t.elements;if(n===void 0){if(se(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),re(e,t)}else{if(se(e,n))return;Oc.set(n),o.uniformMatrix4fv(this.addr,!1,Oc),re(e,n)}}function $m(o,t){let e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function Km(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;o.uniform2iv(this.addr,t),re(e,t)}}function jm(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(se(e,t))return;o.uniform3iv(this.addr,t),re(e,t)}}function Qm(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;o.uniform4iv(this.addr,t),re(e,t)}}function tg(o,t){let e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function eg(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;o.uniform2uiv(this.addr,t),re(e,t)}}function ng(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(se(e,t))return;o.uniform3uiv(this.addr,t),re(e,t)}}function ig(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;o.uniform4uiv(this.addr,t),re(e,t)}}function sg(o,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||hh,i)}function rg(o,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||fh,i)}function ag(o,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||dh,i)}function og(o,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||uh,i)}function lg(o){switch(o){case 5126:return Gm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return Ym;case 35675:return Zm;case 35676:return Jm;case 5124:case 35670:return $m;case 35667:case 35671:return Km;case 35668:case 35672:return jm;case 35669:case 35673:return Qm;case 5125:return tg;case 36294:return eg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return og}}function cg(o,t){o.uniform1fv(this.addr,t)}function hg(o,t){let e=hs(t,this.size,2);o.uniform2fv(this.addr,e)}function ug(o,t){let e=hs(t,this.size,3);o.uniform3fv(this.addr,e)}function fg(o,t){let e=hs(t,this.size,4);o.uniform4fv(this.addr,e)}function dg(o,t){let e=hs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function pg(o,t){let e=hs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function mg(o,t){let e=hs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function gg(o,t){o.uniform1iv(this.addr,t)}function _g(o,t){o.uniform2iv(this.addr,t)}function xg(o,t){o.uniform3iv(this.addr,t)}function yg(o,t){o.uniform4iv(this.addr,t)}function vg(o,t){o.uniform1uiv(this.addr,t)}function bg(o,t){o.uniform2uiv(this.addr,t)}function Mg(o,t){o.uniform3uiv(this.addr,t)}function wg(o,t){o.uniform4uiv(this.addr,t)}function Sg(o,t,e){let n=this.cache,i=t.length,s=Br(e,i);se(n,s)||(o.uniform1iv(this.addr,s),re(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||hh,s[a])}function Tg(o,t,e){let n=this.cache,i=t.length,s=Br(e,i);se(n,s)||(o.uniform1iv(this.addr,s),re(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||fh,s[a])}function Eg(o,t,e){let n=this.cache,i=t.length,s=Br(e,i);se(n,s)||(o.uniform1iv(this.addr,s),re(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||dh,s[a])}function Ag(o,t,e){let n=this.cache,i=t.length,s=Br(e,i);se(n,s)||(o.uniform1iv(this.addr,s),re(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||uh,s[a])}function Cg(o){switch(o){case 5126:return cg;case 35664:return hg;case 35665:return ug;case 35666:return fg;case 35674:return dg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return _g;case 35668:case 35672:return xg;case 35669:case 35673:return yg;case 5125:return vg;case 36294:return bg;case 36295:return Mg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Ag}}var eo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=lg(e.type)}},no=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Cg(e.type)}},io=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let r=i[s];r.setValue(t,e[r.id],n)}}},Ga=/(\w+)(\])?(\[|\.)?/g;function zc(o,t){o.seq.push(t),o.map[t.id]=t}function Pg(o,t,e){let n=o.name,i=n.length;for(Ga.lastIndex=0;;){let s=Ga.exec(n),a=Ga.lastIndex,r=s[1],l=s[2]==="]",c=s[3];if(l&&(r=r|0),c===void 0||c==="["&&a+2===i){zc(e,c===void 0?new eo(r,o,t):new no(r,o,t));break}else{let d=e.map[r];d===void 0&&(d=new io(r),zc(e,d)),e=d}}}var es=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);Pg(s,a,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){let r=e[s],l=n[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function kc(o,t,e){let n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}var Rg=0;function Lg(o,t){let e=o.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){let r=a+1;n.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return n.join(`
`)}function Dg(o){switch(o){case vi:return["Linear","( value )"];case Ht:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Uc(o,t,e){let n=o.getShaderParameter(t,35713),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Lg(o.getShaderSource(t),a)}else return i}function Ig(o,t){let e=Dg(t);return"vec4 "+o+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Og(o,t){let e;switch(t){case $u:e="Linear";break;case Ku:e="Reinhard";break;case ju:e="OptimizedCineon";break;case Qu:e="ACESFilmic";break;case tf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ng(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ds).join(`
`)}function Fg(o){let t=[];for(let e in o){let n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zg(o,t){let e={},n=o.getProgramParameter(t,35721);for(let i=0;i<n;i++){let s=o.getActiveAttrib(t,i),a=s.name,r=1;s.type===35674&&(r=2),s.type===35675&&(r=3),s.type===35676&&(r=4),e[a]={type:s.type,location:o.getAttribLocation(t,a),locationSize:r}}return e}function Ds(o){return o!==""}function Bc(o,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vc(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function so(o){return o.replace(kg,Ug)}function Ug(o,t){let e=wt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return so(e)}var Bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hc(o){return o.replace(Bg,Vg)}function Vg(o,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Gc(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Hg(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===jc?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Cu?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ls&&(t="SHADOWMAP_TYPE_VSM"),t}function Gg(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ns:case is:t="ENVMAP_TYPE_CUBE";break;case Ur:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wg(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case is:t="ENVMAP_MODE_REFRACTION";break}return t}function Xg(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case eh:t="ENVMAP_BLENDING_MULTIPLY";break;case Zu:t="ENVMAP_BLENDING_MIX";break;case Ju:t="ENVMAP_BLENDING_ADD";break}return t}function qg(o){let t=o.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Yg(o,t,e,n){let i=o.getContext(),s=e.defines,a=e.vertexShader,r=e.fragmentShader,l=Hg(e),c=Gg(e),h=Wg(e),d=Xg(e),u=qg(e),m=e.isWebGL2?"":Ng(e),_=Fg(s),f=i.createProgram(),p,y,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[_].filter(Ds).join(`
`),p.length>0&&(p+=`
`),y=[m,_].filter(Ds).join(`
`),y.length>0&&(y+=`
`)):(p=[Gc(e),"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),y=[m,Gc(e),"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?wt.tonemapping_pars_fragment:"",e.toneMapping!==In?Og("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",wt.encodings_pars_fragment,Ig("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ds).join(`
`)),a=so(a),a=Bc(a,e),a=Vc(a,e),r=so(r),r=Bc(r,e),r=Vc(r,e),a=Hc(a),r=Hc(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["#define varying in",e.glslVersion===fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let g=v+p+a,M=v+y+r,b=kc(i,35633,g),E=kc(i,35632,M);if(i.attachShader(f,b),i.attachShader(f,E),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),o.debug.checkShaderErrors){let w=i.getProgramInfoLog(f).trim(),R=i.getShaderInfoLog(b).trim(),U=i.getShaderInfoLog(E).trim(),q=!0,O=!0;if(i.getProgramParameter(f,35714)===!1){q=!1;let D=Uc(i,b,"vertex"),B=Uc(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+w+`
`+D+`
`+B)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(R===""||U==="")&&(O=!1);O&&(this.diagnostics={runnable:q,programLog:w,vertexShader:{log:R,prefix:p},fragmentShader:{log:U,prefix:y}})}i.deleteShader(b),i.deleteShader(E);let C;this.getUniforms=function(){return C===void 0&&(C=new es(i,f)),C};let x;return this.getAttributes=function(){return x===void 0&&(x=zg(i,f)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=e.shaderName,this.id=Rg++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=b,this.fragmentShader=E,this}var Zg=0,ro=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ao(t),e.set(t,n)),n}},ao=class{constructor(t){this.id=Zg++,this.code=t,this.usedTimes=0}};function Jg(o,t,e,n,i,s,a){let r=new Pr,l=new ro,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures,m=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x,w,R,U,q){let O=U.fog,D=q.geometry,B=x.isMeshStandardMaterial?U.environment:null,Z=(x.isMeshStandardMaterial?e:t).get(x.envMap||B),J=Z&&Z.mapping===Ur?Z.image.height:null,H=_[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));let $=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,K=$!==void 0?$.length:0,lt=0;D.morphAttributes.position!==void 0&&(lt=1),D.morphAttributes.normal!==void 0&&(lt=2),D.morphAttributes.color!==void 0&&(lt=3);let V,j,tt,N;if(H){let Mt=bn[H];V=Mt.vertexShader,j=Mt.fragmentShader}else V=x.vertexShader,j=x.fragmentShader,l.update(x),tt=l.getVertexShaderID(x),N=l.getFragmentShaderID(x);let ct=o.getRenderTarget(),ht=x.alphaTest>0,ft=x.clearcoat>0,ut=x.iridescence>0;return{isWebGL2:h,shaderID:H,shaderName:x.type,vertexShader:V,fragmentShader:j,defines:x.defines,customVertexShaderID:tt,customFragmentShaderID:N,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:q.isInstancedMesh===!0,instancingColor:q.isInstancedMesh===!0&&q.instanceColor!==null,supportsVertexTextures:u,outputEncoding:ct===null?o.outputEncoding:ct.isXRRenderTarget===!0?ct.texture.encoding:vi,map:!!x.map,matcap:!!x.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:J,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===vf,tangentSpaceNormalMap:x.normalMapType===sh,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Ht,clearcoat:ft,clearcoatMap:ft&&!!x.clearcoatMap,clearcoatRoughnessMap:ft&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:ft&&!!x.clearcoatNormalMap,iridescence:ut,iridescenceMap:ut&&!!x.iridescenceMap,iridescenceThicknessMap:ut&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===ji,alphaMap:!!x.alphaMap,alphaTest:ht,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!D.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!O,useFog:x.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:d,skinning:q.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:lt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&R.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:In,useLegacyLights:o.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Yn,flipSided:x.side===xe,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)w.push(R),w.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(y(w,x),v(w,x),w.push(o.outputEncoding)),w.push(x.customProgramCacheKey),w.join()}function y(x,w){x.push(w.precision),x.push(w.outputEncoding),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.combine),x.push(w.vertexUvs),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function v(x,w){r.disableAll(),w.isWebGL2&&r.enable(0),w.supportsVertexTextures&&r.enable(1),w.instancing&&r.enable(2),w.instancingColor&&r.enable(3),w.map&&r.enable(4),w.matcap&&r.enable(5),w.envMap&&r.enable(6),w.lightMap&&r.enable(7),w.aoMap&&r.enable(8),w.emissiveMap&&r.enable(9),w.bumpMap&&r.enable(10),w.normalMap&&r.enable(11),w.objectSpaceNormalMap&&r.enable(12),w.tangentSpaceNormalMap&&r.enable(13),w.clearcoat&&r.enable(14),w.clearcoatMap&&r.enable(15),w.clearcoatRoughnessMap&&r.enable(16),w.clearcoatNormalMap&&r.enable(17),w.iridescence&&r.enable(18),w.iridescenceMap&&r.enable(19),w.iridescenceThicknessMap&&r.enable(20),w.displacementMap&&r.enable(21),w.specularMap&&r.enable(22),w.roughnessMap&&r.enable(23),w.metalnessMap&&r.enable(24),w.gradientMap&&r.enable(25),w.alphaMap&&r.enable(26),w.alphaTest&&r.enable(27),w.vertexColors&&r.enable(28),w.vertexAlphas&&r.enable(29),w.vertexUvs&&r.enable(30),w.vertexTangents&&r.enable(31),w.uvsVertexOnly&&r.enable(32),x.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.skinning&&r.enable(4),w.morphTargets&&r.enable(5),w.morphNormals&&r.enable(6),w.morphColors&&r.enable(7),w.premultipliedAlpha&&r.enable(8),w.shadowMapEnabled&&r.enable(9),w.useLegacyLights&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.specularIntensityMap&&r.enable(15),w.specularColorMap&&r.enable(16),w.transmission&&r.enable(17),w.transmissionMap&&r.enable(18),w.thicknessMap&&r.enable(19),w.sheen&&r.enable(20),w.sheenColorMap&&r.enable(21),w.sheenRoughnessMap&&r.enable(22),w.decodeVideoTexture&&r.enable(23),w.opaque&&r.enable(24),x.push(r.mask)}function g(x){let w=_[x.type],R;if(w){let U=bn[w];R=Hf.clone(U.uniforms)}else R=x.uniforms;return R}function M(x,w){let R;for(let U=0,q=c.length;U<q;U++){let O=c[U];if(O.cacheKey===w){R=O,++R.usedTimes;break}}return R===void 0&&(R=new Yg(o,w,x,s),c.push(R)),R}function b(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),x.destroy()}}function E(x){l.remove(x)}function C(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:g,acquireProgram:M,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:C}}function $g(){let o=new WeakMap;function t(s){let a=o.get(s);return a===void 0&&(a={},o.set(s,a)),a}function e(s){o.delete(s)}function n(s,a,r){o.get(s)[a]=r}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Kg(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Wc(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Xc(){let o=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(d,u,m,_,f,p){let y=o[t];return y===void 0?(y={id:d.id,object:d,geometry:u,material:m,groupOrder:_,renderOrder:d.renderOrder,z:f,group:p},o[t]=y):(y.id=d.id,y.object=d,y.geometry=u,y.material=m,y.groupOrder=_,y.renderOrder=d.renderOrder,y.z=f,y.group=p),t++,y}function r(d,u,m,_,f,p){let y=a(d,u,m,_,f,p);m.transmission>0?n.push(y):m.transparent===!0?i.push(y):e.push(y)}function l(d,u,m,_,f,p){let y=a(d,u,m,_,f,p);m.transmission>0?n.unshift(y):m.transparent===!0?i.unshift(y):e.unshift(y)}function c(d,u){e.length>1&&e.sort(d||Kg),n.length>1&&n.sort(u||Wc),i.length>1&&i.sort(u||Wc)}function h(){for(let d=t,u=o.length;d<u;d++){let m=o[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:r,unshift:l,finish:h,sort:c}}function jg(){let o=new WeakMap;function t(n,i){let s=o.get(n),a;return s===void 0?(a=new Xc,o.set(n,[a])):i>=s.length?(a=new Xc,s.push(a)):a=s[i],a}function e(){o=new WeakMap}return{get:t,dispose:e}}function Qg(){let o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new zt};break;case"SpotLight":e={position:new I,direction:new I,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new I,halfWidth:new I,halfHeight:new I};break}return o[t.id]=e,e}}}function t0(){let o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}var e0=0;function n0(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function i0(o,t){let e=new Qg,n=t0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new I);let s=new I,a=new jt,r=new jt;function l(h,d){let u=0,m=0,_=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let f=0,p=0,y=0,v=0,g=0,M=0,b=0,E=0,C=0,x=0;h.sort(n0);let w=d===!0?Math.PI:1;for(let U=0,q=h.length;U<q;U++){let O=h[U],D=O.color,B=O.intensity,Z=O.distance,J=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)u+=D.r*B*w,m+=D.g*B*w,_+=D.b*B*w;else if(O.isLightProbe)for(let H=0;H<9;H++)i.probe[H].addScaledVector(O.sh.coefficients[H],B);else if(O.isDirectionalLight){let H=e.get(O);if(H.color.copy(O.color).multiplyScalar(O.intensity*w),O.castShadow){let $=O.shadow,K=n.get(O);K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,i.directionalShadow[f]=K,i.directionalShadowMap[f]=J,i.directionalShadowMatrix[f]=O.shadow.matrix,M++}i.directional[f]=H,f++}else if(O.isSpotLight){let H=e.get(O);H.position.setFromMatrixPosition(O.matrixWorld),H.color.copy(D).multiplyScalar(B*w),H.distance=Z,H.coneCos=Math.cos(O.angle),H.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),H.decay=O.decay,i.spot[y]=H;let $=O.shadow;if(O.map&&(i.spotLightMap[C]=O.map,C++,$.updateMatrices(O),O.castShadow&&x++),i.spotLightMatrix[y]=$.matrix,O.castShadow){let K=n.get(O);K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,i.spotShadow[y]=K,i.spotShadowMap[y]=J,E++}y++}else if(O.isRectAreaLight){let H=e.get(O);H.color.copy(D).multiplyScalar(B),H.halfWidth.set(O.width*.5,0,0),H.halfHeight.set(0,O.height*.5,0),i.rectArea[v]=H,v++}else if(O.isPointLight){let H=e.get(O);if(H.color.copy(O.color).multiplyScalar(O.intensity*w),H.distance=O.distance,H.decay=O.decay,O.castShadow){let $=O.shadow,K=n.get(O);K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,K.shadowCameraNear=$.camera.near,K.shadowCameraFar=$.camera.far,i.pointShadow[p]=K,i.pointShadowMap[p]=J,i.pointShadowMatrix[p]=O.shadow.matrix,b++}i.point[p]=H,p++}else if(O.isHemisphereLight){let H=e.get(O);H.skyColor.copy(O.color).multiplyScalar(B*w),H.groundColor.copy(O.groundColor).multiplyScalar(B*w),i.hemi[g]=H,g++}}v>0&&(t.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=it.LTC_FLOAT_1,i.rectAreaLTC2=it.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=it.LTC_HALF_1,i.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=_;let R=i.hash;(R.directionalLength!==f||R.pointLength!==p||R.spotLength!==y||R.rectAreaLength!==v||R.hemiLength!==g||R.numDirectionalShadows!==M||R.numPointShadows!==b||R.numSpotShadows!==E||R.numSpotMaps!==C)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=v,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+C-x,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=x,R.directionalLength=f,R.pointLength=p,R.spotLength=y,R.rectAreaLength=v,R.hemiLength=g,R.numDirectionalShadows=M,R.numPointShadows=b,R.numSpotShadows=E,R.numSpotMaps=C,i.version=e0++)}function c(h,d){let u=0,m=0,_=0,f=0,p=0,y=d.matrixWorldInverse;for(let v=0,g=h.length;v<g;v++){let M=h[v];if(M.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(y),u++}else if(M.isSpotLight){let b=i.spot[_];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(y),_++}else if(M.isRectAreaLight){let b=i.rectArea[f];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(y),r.identity(),a.copy(M.matrixWorld),a.premultiply(y),r.extractRotation(a),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(r),b.halfHeight.applyMatrix4(r),f++}else if(M.isPointLight){let b=i.point[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(y),m++}else if(M.isHemisphereLight){let b=i.hemi[p];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(y),p++}}}return{setup:l,setupView:c,state:i}}function qc(o,t){let e=new i0(o,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(d){n.push(d)}function r(d){i.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:r}}function s0(o,t){let e=new WeakMap;function n(s,a=0){let r=e.get(s),l;return r===void 0?(l=new qc(o,t),e.set(s,[l])):a>=r.length?(l=new qc(o,t),r.push(l)):l=r[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}var oo=class extends jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},lo=class extends jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},r0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a0=`uniform sampler2D shadow_pass;
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
}`;function o0(o,t,e){let n=new Nr,i=new bt,s=new bt,a=new ee,r=new oo({depthPacking:yf}),l=new lo,c={},h=e.maxTextureSize,d={[Kn]:xe,[xe]:Kn,[Yn]:Yn},u=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:r0,fragmentShader:a0}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let _=new qe;_.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let f=new ne(_,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jc,this.render=function(M,b,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;let C=o.getRenderTarget(),x=o.getActiveCubeFace(),w=o.getActiveMipmapLevel(),R=o.state;R.setBlending($n),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let U=0,q=M.length;U<q;U++){let O=M[U],D=O.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);let B=D.getFrameExtents();if(i.multiply(B),s.copy(D.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/B.x),i.x=s.x*B.x,D.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/B.y),i.y=s.y*B.y,D.mapSize.y=s.y)),D.map===null){let J=this.type!==Ls?{minFilter:Pe,magFilter:Pe}:{};D.map=new On(i.x,i.y,J),D.map.texture.name=O.name+".shadowMap",D.camera.updateProjectionMatrix()}o.setRenderTarget(D.map),o.clear();let Z=D.getViewportCount();for(let J=0;J<Z;J++){let H=D.getViewport(J);a.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),R.viewport(a),D.updateMatrices(O,J),n=D.getFrustum(),g(b,E,D.camera,O,this.type)}D.isPointLightShadow!==!0&&this.type===Ls&&y(D,E),D.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(C,x,w)};function y(M,b){let E=t.update(f);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new On(i.x,i.y)),u.uniforms.shadow_pass.value=M.map.texture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,o.setRenderTarget(M.mapPass),o.clear(),o.renderBufferDirect(b,null,E,u,f,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,o.setRenderTarget(M.map),o.clear(),o.renderBufferDirect(b,null,E,m,f,null)}function v(M,b,E,C,x,w){let R=null,U=E.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(U!==void 0)R=U;else if(R=E.isPointLight===!0?l:r,o.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let q=R.uuid,O=b.uuid,D=c[q];D===void 0&&(D={},c[q]=D);let B=D[O];B===void 0&&(B=R.clone(),D[O]=B),R=B}return R.visible=b.visible,R.wireframe=b.wireframe,w===Ls?R.side=b.shadowSide!==null?b.shadowSide:b.side:R.side=b.shadowSide!==null?b.shadowSide:d[b.side],R.alphaMap=b.alphaMap,R.alphaTest=b.alphaTest,R.map=b.map,R.clipShadows=b.clipShadows,R.clippingPlanes=b.clippingPlanes,R.clipIntersection=b.clipIntersection,R.displacementMap=b.displacementMap,R.displacementScale=b.displacementScale,R.displacementBias=b.displacementBias,R.wireframeLinewidth=b.wireframeLinewidth,R.linewidth=b.linewidth,E.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(E.matrixWorld),R.nearDistance=C,R.farDistance=x),R}function g(M,b,E,C,x){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&x===Ls)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,M.matrixWorld);let U=t.update(M),q=M.material;if(Array.isArray(q)){let O=U.groups;for(let D=0,B=O.length;D<B;D++){let Z=O[D],J=q[Z.materialIndex];if(J&&J.visible){let H=v(M,J,C,E.near,E.far,x);o.renderBufferDirect(E,null,U,H,M,Z)}}}else if(q.visible){let O=v(M,q,C,E.near,E.far,x);o.renderBufferDirect(E,null,U,O,M,null)}}let R=M.children;for(let U=0,q=R.length;U<q;U++)g(R[U],b,E,C,x)}}function l0(o,t,e){let n=e.isWebGL2;function i(){let L=!1,X=new ee,Q=null,ot=new ee(0,0,0,0);return{setMask:function(dt){Q!==dt&&!L&&(o.colorMask(dt,dt,dt,dt),Q=dt)},setLocked:function(dt){L=dt},setClear:function(dt,Vt,he,Te,_n){_n===!0&&(dt*=Te,Vt*=Te,he*=Te),X.set(dt,Vt,he,Te),ot.equals(X)===!1&&(o.clearColor(dt,Vt,he,Te),ot.copy(X))},reset:function(){L=!1,Q=null,ot.set(-1,0,0,0)}}}function s(){let L=!1,X=null,Q=null,ot=null;return{setTest:function(dt){dt?ht(2929):ft(2929)},setMask:function(dt){X!==dt&&!L&&(o.depthMask(dt),X=dt)},setFunc:function(dt){if(Q!==dt){switch(dt){case Vu:o.depthFunc(512);break;case Hu:o.depthFunc(519);break;case Gu:o.depthFunc(513);break;case Xa:o.depthFunc(515);break;case Wu:o.depthFunc(514);break;case Xu:o.depthFunc(518);break;case qu:o.depthFunc(516);break;case Yu:o.depthFunc(517);break;default:o.depthFunc(515)}Q=dt}},setLocked:function(dt){L=dt},setClear:function(dt){ot!==dt&&(o.clearDepth(dt),ot=dt)},reset:function(){L=!1,X=null,Q=null,ot=null}}}function a(){let L=!1,X=null,Q=null,ot=null,dt=null,Vt=null,he=null,Te=null,_n=null;return{setTest:function(Zt){L||(Zt?ht(2960):ft(2960))},setMask:function(Zt){X!==Zt&&!L&&(o.stencilMask(Zt),X=Zt)},setFunc:function(Zt,Je,xn){(Q!==Zt||ot!==Je||dt!==xn)&&(o.stencilFunc(Zt,Je,xn),Q=Zt,ot=Je,dt=xn)},setOp:function(Zt,Je,xn){(Vt!==Zt||he!==Je||Te!==xn)&&(o.stencilOp(Zt,Je,xn),Vt=Zt,he=Je,Te=xn)},setLocked:function(Zt){L=Zt},setClear:function(Zt){_n!==Zt&&(o.clearStencil(Zt),_n=Zt)},reset:function(){L=!1,X=null,Q=null,ot=null,dt=null,Vt=null,he=null,Te=null,_n=null}}}let r=new i,l=new s,c=new a,h=new WeakMap,d=new WeakMap,u={},m={},_=new WeakMap,f=[],p=null,y=!1,v=null,g=null,M=null,b=null,E=null,C=null,x=null,w=!1,R=null,U=null,q=null,O=null,D=null,B=o.getParameter(35661),Z=!1,J=0,H=o.getParameter(7938);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),Z=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Z=J>=2);let $=null,K={},lt=o.getParameter(3088),V=o.getParameter(2978),j=new ee().fromArray(lt),tt=new ee().fromArray(V);function N(L,X,Q){let ot=new Uint8Array(4),dt=o.createTexture();o.bindTexture(L,dt),o.texParameteri(L,10241,9728),o.texParameteri(L,10240,9728);for(let Vt=0;Vt<Q;Vt++)o.texImage2D(X+Vt,0,6408,1,1,0,6408,5121,ot);return dt}let ct={};ct[3553]=N(3553,3553,1),ct[34067]=N(34067,34069,6),r.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ht(2929),l.setFunc(Xa),le(!1),ce(Dl),ht(2884),oe($n);function ht(L){u[L]!==!0&&(o.enable(L),u[L]=!0)}function ft(L){u[L]!==!1&&(o.disable(L),u[L]=!1)}function ut(L,X){return m[L]!==X?(o.bindFramebuffer(L,X),m[L]=X,n&&(L===36009&&(m[36160]=X),L===36160&&(m[36009]=X)),!0):!1}function yt(L,X){let Q=f,ot=!1;if(L)if(Q=_.get(X),Q===void 0&&(Q=[],_.set(X,Q)),L.isWebGLMultipleRenderTargets){let dt=L.texture;if(Q.length!==dt.length||Q[0]!==36064){for(let Vt=0,he=dt.length;Vt<he;Vt++)Q[Vt]=36064+Vt;Q.length=dt.length,ot=!0}}else Q[0]!==36064&&(Q[0]=36064,ot=!0);else Q[0]!==1029&&(Q[0]=1029,ot=!0);ot&&(e.isWebGL2?o.drawBuffers(Q):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Mt(L){return p!==L?(o.useProgram(L),p=L,!0):!1}let St={[$i]:32774,[Ru]:32778,[Lu]:32779};if(n)St[Fl]=32775,St[zl]=32776;else{let L=t.get("EXT_blend_minmax");L!==null&&(St[Fl]=L.MIN_EXT,St[zl]=L.MAX_EXT)}let Dt={[Du]:0,[Iu]:1,[Ou]:768,[Qc]:770,[Bu]:776,[ku]:774,[Fu]:772,[Nu]:769,[th]:771,[Uu]:775,[zu]:773};function oe(L,X,Q,ot,dt,Vt,he,Te){if(L===$n){y===!0&&(ft(3042),y=!1);return}if(y===!1&&(ht(3042),y=!0),L!==Pu){if(L!==v||Te!==w){if((g!==$i||E!==$i)&&(o.blendEquation(32774),g=$i,E=$i),Te)switch(L){case ji:o.blendFuncSeparate(1,771,1,771);break;case Il:o.blendFunc(1,1);break;case Ol:o.blendFuncSeparate(0,769,0,1);break;case Nl:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ji:o.blendFuncSeparate(770,771,1,771);break;case Il:o.blendFunc(770,1);break;case Ol:o.blendFuncSeparate(0,769,0,1);break;case Nl:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,b=null,C=null,x=null,v=L,w=Te}return}dt=dt||X,Vt=Vt||Q,he=he||ot,(X!==g||dt!==E)&&(o.blendEquationSeparate(St[X],St[dt]),g=X,E=dt),(Q!==M||ot!==b||Vt!==C||he!==x)&&(o.blendFuncSeparate(Dt[Q],Dt[ot],Dt[Vt],Dt[he]),M=Q,b=ot,C=Vt,x=he),v=L,w=!1}function we(L,X){L.side===Yn?ft(2884):ht(2884);let Q=L.side===xe;X&&(Q=!Q),le(Q),L.blending===ji&&L.transparent===!1?oe($n):oe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),r.setMask(L.colorWrite);let ot=L.stencilWrite;c.setTest(ot),ot&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Bt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ht(32926):ft(32926)}function le(L){R!==L&&(L?o.frontFace(2304):o.frontFace(2305),R=L)}function ce(L){L!==Eu?(ht(2884),L!==U&&(L===Dl?o.cullFace(1029):L===Au?o.cullFace(1028):o.cullFace(1032))):ft(2884),U=L}function Gt(L){L!==q&&(Z&&o.lineWidth(L),q=L)}function Bt(L,X,Q){L?(ht(32823),(O!==X||D!==Q)&&(o.polygonOffset(X,Q),O=X,D=Q)):ft(32823)}function Be(L){L?ht(3089):ft(3089)}function Se(L){L===void 0&&(L=33984+B-1),$!==L&&(o.activeTexture(L),$=L)}function A(L,X,Q){Q===void 0&&($===null?Q=33984+B-1:Q=$);let ot=K[Q];ot===void 0&&(ot={type:void 0,texture:void 0},K[Q]=ot),(ot.type!==L||ot.texture!==X)&&($!==Q&&(o.activeTexture(Q),$=Q),o.bindTexture(L,X||ct[L]),ot.type=L,ot.texture=X)}function S(){let L=K[$];L!==void 0&&L.type!==void 0&&(o.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function W(){try{o.compressedTexImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{o.compressedTexImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{o.texSubImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{o.texSubImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F(){try{o.texStorage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{o.texStorage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{o.texImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{o.texImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(L){j.equals(L)===!1&&(o.scissor(L.x,L.y,L.z,L.w),j.copy(L))}function mt(L){tt.equals(L)===!1&&(o.viewport(L.x,L.y,L.z,L.w),tt.copy(L))}function At(L,X){let Q=d.get(X);Q===void 0&&(Q=new WeakMap,d.set(X,Q));let ot=Q.get(L);ot===void 0&&(ot=o.getUniformBlockIndex(X,L.name),Q.set(L,ot))}function It(L,X){let ot=d.get(X).get(L);h.get(X)!==ot&&(o.uniformBlockBinding(X,ot,L.__bindingPointIndex),h.set(X,ot))}function Ft(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),u={},$=null,K={},m={},_=new WeakMap,f=[],p=null,y=!1,v=null,g=null,M=null,b=null,E=null,C=null,x=null,w=!1,R=null,U=null,q=null,O=null,D=null,j.set(0,0,o.canvas.width,o.canvas.height),tt.set(0,0,o.canvas.width,o.canvas.height),r.reset(),l.reset(),c.reset()}return{buffers:{color:r,depth:l,stencil:c},enable:ht,disable:ft,bindFramebuffer:ut,drawBuffers:yt,useProgram:Mt,setBlending:oe,setMaterial:we,setFlipSided:le,setCullFace:ce,setLineWidth:Gt,setPolygonOffset:Bt,setScissorTest:Be,activeTexture:Se,bindTexture:A,unbindTexture:S,compressedTexImage2D:W,compressedTexImage3D:et,texImage2D:st,texImage3D:pt,updateUBOMapping:At,uniformBlockBinding:It,texStorage2D:F,texStorage3D:at,texSubImage2D:nt,texSubImage3D:rt,compressedTexSubImage2D:_t,compressedTexSubImage3D:P,scissor:gt,viewport:mt,reset:Ft}}function c0(o,t,e,n,i,s,a){let r=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap,f,p=new WeakMap,y=!1;try{y=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,S){return y?new OffscreenCanvas(A,S):Sr("canvas")}function g(A,S,W,et){let nt=1;if((A.width>et||A.height>et)&&(nt=et/Math.max(A.width,A.height)),nt<1||S===!0)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap){let rt=S?wf:Math.floor,_t=rt(nt*A.width),P=rt(nt*A.height);f===void 0&&(f=v(_t,P));let F=W?v(_t,P):f;return F.width=_t,F.height=P,F.getContext("2d").drawImage(A,0,0,_t,P),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+_t+"x"+P+")."),F}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function M(A){return pc(A.width)&&pc(A.height)}function b(A){return r?!1:A.wrapS!==cn||A.wrapT!==cn||A.minFilter!==Pe&&A.minFilter!==Ke}function E(A,S){return A.generateMipmaps&&S&&A.minFilter!==Pe&&A.minFilter!==Ke}function C(A){o.generateMipmap(A)}function x(A,S,W,et,nt=!1){if(r===!1)return S;if(A!==null){if(o[A]!==void 0)return o[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let rt=S;return S===6403&&(W===5126&&(rt=33326),W===5131&&(rt=33325),W===5121&&(rt=33321)),S===33319&&(W===5126&&(rt=33328),W===5131&&(rt=33327),W===5121&&(rt=33323)),S===6408&&(W===5126&&(rt=34836),W===5131&&(rt=34842),W===5121&&(rt=et===Ht&&nt===!1?35907:32856),W===32819&&(rt=32854),W===32820&&(rt=32855)),(rt===33325||rt===33326||rt===33327||rt===33328||rt===34842||rt===34836)&&t.get("EXT_color_buffer_float"),rt}function w(A,S,W){return E(A,W)===!0||A.isFramebufferTexture&&A.minFilter!==Pe&&A.minFilter!==Ke?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function R(A){return A===Pe||A===kl||A===fa?9728:9729}function U(A){let S=A.target;S.removeEventListener("dispose",U),O(S),S.isVideoTexture&&_.delete(S)}function q(A){let S=A.target;S.removeEventListener("dispose",q),B(S)}function O(A){let S=n.get(A);if(S.__webglInit===void 0)return;let W=A.source,et=p.get(W);if(et){let nt=et[S.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&D(A),Object.keys(et).length===0&&p.delete(W)}n.remove(A)}function D(A){let S=n.get(A);o.deleteTexture(S.__webglTexture);let W=A.source,et=p.get(W);delete et[S.__cacheKey],a.memory.textures--}function B(A){let S=A.texture,W=n.get(A),et=n.get(S);if(et.__webglTexture!==void 0&&(o.deleteTexture(et.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++)o.deleteFramebuffer(W.__webglFramebuffer[nt]),W.__webglDepthbuffer&&o.deleteRenderbuffer(W.__webglDepthbuffer[nt]);else{if(o.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&o.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&o.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let nt=0;nt<W.__webglColorRenderbuffer.length;nt++)W.__webglColorRenderbuffer[nt]&&o.deleteRenderbuffer(W.__webglColorRenderbuffer[nt]);W.__webglDepthRenderbuffer&&o.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let nt=0,rt=S.length;nt<rt;nt++){let _t=n.get(S[nt]);_t.__webglTexture&&(o.deleteTexture(_t.__webglTexture),a.memory.textures--),n.remove(S[nt])}n.remove(S),n.remove(A)}let Z=0;function J(){Z=0}function H(){let A=Z;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),Z+=1,A}function $(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.encoding),S.join()}function K(A,S){let W=n.get(A);if(A.isVideoTexture&&Be(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){let et=A.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(W,A,S);return}}e.bindTexture(3553,W.__webglTexture,33984+S)}function lt(A,S){let W=n.get(A);if(A.version>0&&W.__version!==A.version){ft(W,A,S);return}e.bindTexture(35866,W.__webglTexture,33984+S)}function V(A,S){let W=n.get(A);if(A.version>0&&W.__version!==A.version){ft(W,A,S);return}e.bindTexture(32879,W.__webglTexture,33984+S)}function j(A,S){let W=n.get(A);if(A.version>0&&W.__version!==A.version){ut(W,A,S);return}e.bindTexture(34067,W.__webglTexture,33984+S)}let tt={[Za]:10497,[cn]:33071,[Ja]:33648},N={[Pe]:9728,[kl]:9984,[fa]:9986,[Ke]:9729,[ef]:9985,[Os]:9987};function ct(A,S,W){if(W?(o.texParameteri(A,10242,tt[S.wrapS]),o.texParameteri(A,10243,tt[S.wrapT]),(A===32879||A===35866)&&o.texParameteri(A,32882,tt[S.wrapR]),o.texParameteri(A,10240,N[S.magFilter]),o.texParameteri(A,10241,N[S.minFilter])):(o.texParameteri(A,10242,33071),o.texParameteri(A,10243,33071),(A===32879||A===35866)&&o.texParameteri(A,32882,33071),(S.wrapS!==cn||S.wrapT!==cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(A,10240,R(S.magFilter)),o.texParameteri(A,10241,R(S.minFilter)),S.minFilter!==Pe&&S.minFilter!==Ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){let et=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===Pe||S.minFilter!==fa&&S.minFilter!==Os||S.type===_i&&t.has("OES_texture_float_linear")===!1||r===!1&&S.type===Ns&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(o.texParameterf(A,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function ht(A,S){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",U));let et=S.source,nt=p.get(et);nt===void 0&&(nt={},p.set(et,nt));let rt=$(S);if(rt!==A.__cacheKey){nt[rt]===void 0&&(nt[rt]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,W=!0),nt[rt].usedTimes++;let _t=nt[A.__cacheKey];_t!==void 0&&(nt[A.__cacheKey].usedTimes--,_t.usedTimes===0&&D(S)),A.__cacheKey=rt,A.__webglTexture=nt[rt].texture}return W}function ft(A,S,W){let et=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(et=35866),S.isData3DTexture&&(et=32879);let nt=ht(A,S),rt=S.source;e.bindTexture(et,A.__webglTexture,33984+W);let _t=n.get(rt);if(rt.version!==_t.__version||nt===!0){e.activeTexture(33984+W),o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);let P=b(S)&&M(S.image)===!1,F=g(S.image,P,!1,h);F=Se(S,F);let at=M(F)||r,st=s.convert(S.format,S.encoding),pt=s.convert(S.type),gt=x(S.internalFormat,st,pt,S.encoding,S.isVideoTexture);ct(et,S,at);let mt,At=S.mipmaps,It=r&&S.isVideoTexture!==!0,Ft=_t.__version===void 0||nt===!0,L=w(S,F,at);if(S.isDepthTexture)gt=6402,r?S.type===_i?gt=36012:S.type===gi?gt=33190:S.type===Qi?gt=35056:gt=33189:S.type===_i&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===xi&&gt===6402&&S.type!==ih&&S.type!==gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=gi,pt=s.convert(S.type)),S.format===ss&&gt===6402&&(gt=34041,S.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Qi,pt=s.convert(S.type))),Ft&&(It?e.texStorage2D(3553,1,gt,F.width,F.height):e.texImage2D(3553,0,gt,F.width,F.height,0,st,pt,null));else if(S.isDataTexture)if(At.length>0&&at){It&&Ft&&e.texStorage2D(3553,L,gt,At[0].width,At[0].height);for(let X=0,Q=At.length;X<Q;X++)mt=At[X],It?e.texSubImage2D(3553,X,0,0,mt.width,mt.height,st,pt,mt.data):e.texImage2D(3553,X,gt,mt.width,mt.height,0,st,pt,mt.data);S.generateMipmaps=!1}else It?(Ft&&e.texStorage2D(3553,L,gt,F.width,F.height),e.texSubImage2D(3553,0,0,0,F.width,F.height,st,pt,F.data)):e.texImage2D(3553,0,gt,F.width,F.height,0,st,pt,F.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){It&&Ft&&e.texStorage3D(35866,L,gt,At[0].width,At[0].height,F.depth);for(let X=0,Q=At.length;X<Q;X++)mt=At[X],S.format!==hn?st!==null?It?e.compressedTexSubImage3D(35866,X,0,0,0,mt.width,mt.height,F.depth,st,mt.data,0,0):e.compressedTexImage3D(35866,X,gt,mt.width,mt.height,F.depth,0,mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?e.texSubImage3D(35866,X,0,0,0,mt.width,mt.height,F.depth,st,pt,mt.data):e.texImage3D(35866,X,gt,mt.width,mt.height,F.depth,0,st,pt,mt.data)}else{It&&Ft&&e.texStorage2D(3553,L,gt,At[0].width,At[0].height);for(let X=0,Q=At.length;X<Q;X++)mt=At[X],S.format!==hn?st!==null?It?e.compressedTexSubImage2D(3553,X,0,0,mt.width,mt.height,st,mt.data):e.compressedTexImage2D(3553,X,gt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?e.texSubImage2D(3553,X,0,0,mt.width,mt.height,st,pt,mt.data):e.texImage2D(3553,X,gt,mt.width,mt.height,0,st,pt,mt.data)}else if(S.isDataArrayTexture)It?(Ft&&e.texStorage3D(35866,L,gt,F.width,F.height,F.depth),e.texSubImage3D(35866,0,0,0,0,F.width,F.height,F.depth,st,pt,F.data)):e.texImage3D(35866,0,gt,F.width,F.height,F.depth,0,st,pt,F.data);else if(S.isData3DTexture)It?(Ft&&e.texStorage3D(32879,L,gt,F.width,F.height,F.depth),e.texSubImage3D(32879,0,0,0,0,F.width,F.height,F.depth,st,pt,F.data)):e.texImage3D(32879,0,gt,F.width,F.height,F.depth,0,st,pt,F.data);else if(S.isFramebufferTexture){if(Ft)if(It)e.texStorage2D(3553,L,gt,F.width,F.height);else{let X=F.width,Q=F.height;for(let ot=0;ot<L;ot++)e.texImage2D(3553,ot,gt,X,Q,0,st,pt,null),X>>=1,Q>>=1}}else if(At.length>0&&at){It&&Ft&&e.texStorage2D(3553,L,gt,At[0].width,At[0].height);for(let X=0,Q=At.length;X<Q;X++)mt=At[X],It?e.texSubImage2D(3553,X,0,0,st,pt,mt):e.texImage2D(3553,X,gt,st,pt,mt);S.generateMipmaps=!1}else It?(Ft&&e.texStorage2D(3553,L,gt,F.width,F.height),e.texSubImage2D(3553,0,0,0,st,pt,F)):e.texImage2D(3553,0,gt,st,pt,F);E(S,at)&&C(et),_t.__version=rt.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ut(A,S,W){if(S.image.length!==6)return;let et=ht(A,S),nt=S.source;e.bindTexture(34067,A.__webglTexture,33984+W);let rt=n.get(nt);if(nt.version!==rt.__version||et===!0){e.activeTexture(33984+W),o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);let _t=S.isCompressedTexture||S.image[0].isCompressedTexture,P=S.image[0]&&S.image[0].isDataTexture,F=[];for(let X=0;X<6;X++)!_t&&!P?F[X]=g(S.image[X],!1,!0,c):F[X]=P?S.image[X].image:S.image[X],F[X]=Se(S,F[X]);let at=F[0],st=M(at)||r,pt=s.convert(S.format,S.encoding),gt=s.convert(S.type),mt=x(S.internalFormat,pt,gt,S.encoding),At=r&&S.isVideoTexture!==!0,It=rt.__version===void 0||et===!0,Ft=w(S,at,st);ct(34067,S,st);let L;if(_t){At&&It&&e.texStorage2D(34067,Ft,mt,at.width,at.height);for(let X=0;X<6;X++){L=F[X].mipmaps;for(let Q=0;Q<L.length;Q++){let ot=L[Q];S.format!==hn?pt!==null?At?e.compressedTexSubImage2D(34069+X,Q,0,0,ot.width,ot.height,pt,ot.data):e.compressedTexImage2D(34069+X,Q,mt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?e.texSubImage2D(34069+X,Q,0,0,ot.width,ot.height,pt,gt,ot.data):e.texImage2D(34069+X,Q,mt,ot.width,ot.height,0,pt,gt,ot.data)}}}else{L=S.mipmaps,At&&It&&(L.length>0&&Ft++,e.texStorage2D(34067,Ft,mt,F[0].width,F[0].height));for(let X=0;X<6;X++)if(P){At?e.texSubImage2D(34069+X,0,0,0,F[X].width,F[X].height,pt,gt,F[X].data):e.texImage2D(34069+X,0,mt,F[X].width,F[X].height,0,pt,gt,F[X].data);for(let Q=0;Q<L.length;Q++){let dt=L[Q].image[X].image;At?e.texSubImage2D(34069+X,Q+1,0,0,dt.width,dt.height,pt,gt,dt.data):e.texImage2D(34069+X,Q+1,mt,dt.width,dt.height,0,pt,gt,dt.data)}}else{At?e.texSubImage2D(34069+X,0,0,0,pt,gt,F[X]):e.texImage2D(34069+X,0,mt,pt,gt,F[X]);for(let Q=0;Q<L.length;Q++){let ot=L[Q];At?e.texSubImage2D(34069+X,Q+1,0,0,pt,gt,ot.image[X]):e.texImage2D(34069+X,Q+1,mt,pt,gt,ot.image[X])}}}E(S,st)&&C(34067),rt.__version=nt.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function yt(A,S,W,et,nt){let rt=s.convert(W.format,W.encoding),_t=s.convert(W.type),P=x(W.internalFormat,rt,_t,W.encoding);n.get(S).__hasExternalTextures||(nt===32879||nt===35866?e.texImage3D(nt,0,P,S.width,S.height,S.depth,0,rt,_t,null):e.texImage2D(nt,0,P,S.width,S.height,0,rt,_t,null)),e.bindFramebuffer(36160,A),Bt(S)?u.framebufferTexture2DMultisampleEXT(36160,et,nt,n.get(W).__webglTexture,0,Gt(S)):(nt===3553||nt>=34069&&nt<=34074)&&o.framebufferTexture2D(36160,et,nt,n.get(W).__webglTexture,0),e.bindFramebuffer(36160,null)}function Mt(A,S,W){if(o.bindRenderbuffer(36161,A),S.depthBuffer&&!S.stencilBuffer){let et=33189;if(W||Bt(S)){let nt=S.depthTexture;nt&&nt.isDepthTexture&&(nt.type===_i?et=36012:nt.type===gi&&(et=33190));let rt=Gt(S);Bt(S)?u.renderbufferStorageMultisampleEXT(36161,rt,et,S.width,S.height):o.renderbufferStorageMultisample(36161,rt,et,S.width,S.height)}else o.renderbufferStorage(36161,et,S.width,S.height);o.framebufferRenderbuffer(36160,36096,36161,A)}else if(S.depthBuffer&&S.stencilBuffer){let et=Gt(S);W&&Bt(S)===!1?o.renderbufferStorageMultisample(36161,et,35056,S.width,S.height):Bt(S)?u.renderbufferStorageMultisampleEXT(36161,et,35056,S.width,S.height):o.renderbufferStorage(36161,34041,S.width,S.height),o.framebufferRenderbuffer(36160,33306,36161,A)}else{let et=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let nt=0;nt<et.length;nt++){let rt=et[nt],_t=s.convert(rt.format,rt.encoding),P=s.convert(rt.type),F=x(rt.internalFormat,_t,P,rt.encoding),at=Gt(S);W&&Bt(S)===!1?o.renderbufferStorageMultisample(36161,at,F,S.width,S.height):Bt(S)?u.renderbufferStorageMultisampleEXT(36161,at,F,S.width,S.height):o.renderbufferStorage(36161,F,S.width,S.height)}}o.bindRenderbuffer(36161,null)}function St(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);let et=n.get(S.depthTexture).__webglTexture,nt=Gt(S);if(S.depthTexture.format===xi)Bt(S)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,et,0,nt):o.framebufferTexture2D(36160,36096,3553,et,0);else if(S.depthTexture.format===ss)Bt(S)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,et,0,nt):o.framebufferTexture2D(36160,33306,3553,et,0);else throw new Error("Unknown depthTexture format")}function Dt(A){let S=n.get(A),W=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");St(S.__webglFramebuffer,A)}else if(W){S.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(36160,S.__webglFramebuffer[et]),S.__webglDepthbuffer[et]=o.createRenderbuffer(),Mt(S.__webglDepthbuffer[et],A,!1)}else e.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=o.createRenderbuffer(),Mt(S.__webglDepthbuffer,A,!1);e.bindFramebuffer(36160,null)}function oe(A,S,W){let et=n.get(A);S!==void 0&&yt(et.__webglFramebuffer,A,A.texture,36064,3553),W!==void 0&&Dt(A)}function we(A){let S=A.texture,W=n.get(A),et=n.get(S);A.addEventListener("dispose",q),A.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=o.createTexture()),et.__version=S.version,a.memory.textures++);let nt=A.isWebGLCubeRenderTarget===!0,rt=A.isWebGLMultipleRenderTargets===!0,_t=M(A)||r;if(nt){W.__webglFramebuffer=[];for(let P=0;P<6;P++)W.__webglFramebuffer[P]=o.createFramebuffer()}else{if(W.__webglFramebuffer=o.createFramebuffer(),rt)if(i.drawBuffers){let P=A.texture;for(let F=0,at=P.length;F<at;F++){let st=n.get(P[F]);st.__webglTexture===void 0&&(st.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&A.samples>0&&Bt(A)===!1){let P=rt?S:[S];W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let F=0;F<P.length;F++){let at=P[F];W.__webglColorRenderbuffer[F]=o.createRenderbuffer(),o.bindRenderbuffer(36161,W.__webglColorRenderbuffer[F]);let st=s.convert(at.format,at.encoding),pt=s.convert(at.type),gt=x(at.internalFormat,st,pt,at.encoding,A.isXRRenderTarget===!0),mt=Gt(A);o.renderbufferStorageMultisample(36161,mt,gt,A.width,A.height),o.framebufferRenderbuffer(36160,36064+F,36161,W.__webglColorRenderbuffer[F])}o.bindRenderbuffer(36161,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),Mt(W.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(36160,null)}}if(nt){e.bindTexture(34067,et.__webglTexture),ct(34067,S,_t);for(let P=0;P<6;P++)yt(W.__webglFramebuffer[P],A,S,36064,34069+P);E(S,_t)&&C(34067),e.unbindTexture()}else if(rt){let P=A.texture;for(let F=0,at=P.length;F<at;F++){let st=P[F],pt=n.get(st);e.bindTexture(3553,pt.__webglTexture),ct(3553,st,_t),yt(W.__webglFramebuffer,A,st,36064+F,3553),E(st,_t)&&C(3553)}e.unbindTexture()}else{let P=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(r?P=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(P,et.__webglTexture),ct(P,S,_t),yt(W.__webglFramebuffer,A,S,36064,P),E(S,_t)&&C(P),e.unbindTexture()}A.depthBuffer&&Dt(A)}function le(A){let S=M(A)||r,W=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let et=0,nt=W.length;et<nt;et++){let rt=W[et];if(E(rt,S)){let _t=A.isWebGLCubeRenderTarget?34067:3553,P=n.get(rt).__webglTexture;e.bindTexture(_t,P),C(_t),e.unbindTexture()}}}function ce(A){if(r&&A.samples>0&&Bt(A)===!1){let S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],W=A.width,et=A.height,nt=16384,rt=[],_t=A.stencilBuffer?33306:36096,P=n.get(A),F=A.isWebGLMultipleRenderTargets===!0;if(F)for(let at=0;at<S.length;at++)e.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+at,36161,null),e.bindFramebuffer(36160,P.__webglFramebuffer),o.framebufferTexture2D(36009,36064+at,3553,null,0);e.bindFramebuffer(36008,P.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,P.__webglFramebuffer);for(let at=0;at<S.length;at++){rt.push(36064+at),A.depthBuffer&&rt.push(_t);let st=P.__ignoreDepthValues!==void 0?P.__ignoreDepthValues:!1;if(st===!1&&(A.depthBuffer&&(nt|=256),A.stencilBuffer&&(nt|=1024)),F&&o.framebufferRenderbuffer(36008,36064,36161,P.__webglColorRenderbuffer[at]),st===!0&&(o.invalidateFramebuffer(36008,[_t]),o.invalidateFramebuffer(36009,[_t])),F){let pt=n.get(S[at]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,pt,0)}o.blitFramebuffer(0,0,W,et,0,0,W,et,nt,9728),m&&o.invalidateFramebuffer(36008,rt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),F)for(let at=0;at<S.length;at++){e.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+at,36161,P.__webglColorRenderbuffer[at]);let st=n.get(S[at]).__webglTexture;e.bindFramebuffer(36160,P.__webglFramebuffer),o.framebufferTexture2D(36009,36064+at,3553,st,0)}e.bindFramebuffer(36009,P.__webglMultisampledFramebuffer)}}function Gt(A){return Math.min(d,A.samples)}function Bt(A){let S=n.get(A);return r&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Be(A){let S=a.render.frame;_.get(A)!==S&&(_.set(A,S),A.update())}function Se(A,S){let W=A.encoding,et=A.format,nt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===$a||W!==vi&&(W===Ht?r===!1?t.has("EXT_sRGB")===!0&&et===hn?(A.format=$a,A.minFilter=Ke,A.generateMipmaps=!1):S=Tr.sRGBToLinear(S):(et!==hn||nt!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),S}this.allocateTextureUnit=H,this.resetTextureUnits=J,this.setTexture2D=K,this.setTexture2DArray=lt,this.setTexture3D=V,this.setTextureCube=j,this.rebindTextures=oe,this.setupRenderTarget=we,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Bt}function h0(o,t,e){let n=e.isWebGL2;function i(s,a=null){let r;if(s===yi)return 5121;if(s===af)return 32819;if(s===of)return 32820;if(s===nf)return 5120;if(s===sf)return 5122;if(s===ih)return 5123;if(s===rf)return 5124;if(s===gi)return 5125;if(s===_i)return 5126;if(s===Ns)return n?5131:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===lf)return 6406;if(s===hn)return 6408;if(s===cf)return 6409;if(s===hf)return 6410;if(s===xi)return 6402;if(s===ss)return 34041;if(s===$a)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===uf)return 6403;if(s===ff)return 36244;if(s===df)return 33319;if(s===pf)return 33320;if(s===mf)return 36249;if(s===da||s===pa||s===ma||s===ga)if(a===Ht)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ga)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ul||s===Bl||s===Vl||s===Hl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===Ul)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===gf)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Gl||s===Wl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(s===Gl)return a===Ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===Wl)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xl||s===ql||s===Yl||s===Zl||s===Jl||s===$l||s===Kl||s===jl||s===Ql||s===tc||s===ec||s===nc||s===ic||s===sc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(s===Xl)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ql)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yl)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zl)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Jl)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$l)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Kl)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jl)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ql)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===tc)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ec)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===nc)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ic)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sc)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===_a)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(s===_a)return a===Ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===_f||s===rc||s===ac||s===oc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(s===_a)return r.COMPRESSED_RED_RGTC1_EXT;if(s===rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ac)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Qi?n?34042:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:i}}var co=class extends Re{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Jn=class extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},u0={type:"move"},Is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null,r=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let f of t.hand.values()){let p=e.getJointPose(f,n),y=this._getHandJoint(c,f);p!==null&&(y.matrix.fromArray(p.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=p.radius),y.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&u>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(u0)))}return r!==null&&(r.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Jn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ho=class extends Le{constructor(t,e,n,i,s,a,r,l,c,h){if(h=h!==void 0?h:xi,h!==xi&&h!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xi&&(n=gi),n===void 0&&h===ss&&(n=Qi),super(null,i,s,a,r,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Pe,this.minFilter=l!==void 0?l:Pe,this.flipY=!1,this.generateMipmaps=!1}},uo=class extends Mn{constructor(t,e){super();let n=this,i=null,s=1,a=null,r="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,_=null,f=e.getContextAttributes(),p=null,y=null,v=[],g=[],M=new Set,b=new Map,E=new Re;E.layers.enable(1),E.viewport=new ee;let C=new Re;C.layers.enable(2),C.viewport=new ee;let x=[E,C],w=new co;w.layers.enable(1),w.layers.enable(2);let R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let j=v[V];return j===void 0&&(j=new Is,v[V]=j),j.getTargetRaySpace()},this.getControllerGrip=function(V){let j=v[V];return j===void 0&&(j=new Is,v[V]=j),j.getGripSpace()},this.getHand=function(V){let j=v[V];return j===void 0&&(j=new Is,v[V]=j),j.getHandSpace()};function q(V){let j=g.indexOf(V.inputSource);if(j===-1)return;let tt=v[j];tt!==void 0&&tt.dispatchEvent({type:V.type,data:V.inputSource})}function O(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",D);for(let V=0;V<v.length;V++){let j=g[V];j!==null&&(g[V]=null,v[V].disconnect(j))}R=null,U=null,t.setRenderTarget(p),m=null,u=null,d=null,i=null,y=null,lt.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",O),i.addEventListener("inputsourceschange",D),f.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let j={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,j),i.updateRenderState({baseLayer:m}),y=new On(m.framebufferWidth,m.framebufferHeight,{format:hn,type:yi,encoding:t.outputEncoding,stencilBuffer:f.stencil})}else{let j=null,tt=null,N=null;f.depth&&(N=f.stencil?35056:33190,j=f.stencil?ss:xi,tt=f.stencil?Qi:gi);let ct={colorFormat:32856,depthFormat:N,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(ct),i.updateRenderState({layers:[u]}),y=new On(u.textureWidth,u.textureHeight,{format:hn,type:yi,depthTexture:new ho(u.textureWidth,u.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:f.stencil,encoding:t.outputEncoding,samples:f.antialias?4:0});let ht=t.properties.get(y);ht.__ignoreDepthValues=u.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(r),lt.setContext(i),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(V){for(let j=0;j<V.removed.length;j++){let tt=V.removed[j],N=g.indexOf(tt);N>=0&&(g[N]=null,v[N].disconnect(tt))}for(let j=0;j<V.added.length;j++){let tt=V.added[j],N=g.indexOf(tt);if(N===-1){for(let ht=0;ht<v.length;ht++)if(ht>=g.length){g.push(tt),N=ht;break}else if(g[ht]===null){g[ht]=tt,N=ht;break}if(N===-1)break}let ct=v[N];ct&&ct.connect(tt)}}let B=new I,Z=new I;function J(V,j,tt){B.setFromMatrixPosition(j.matrixWorld),Z.setFromMatrixPosition(tt.matrixWorld);let N=B.distanceTo(Z),ct=j.projectionMatrix.elements,ht=tt.projectionMatrix.elements,ft=ct[14]/(ct[10]-1),ut=ct[14]/(ct[10]+1),yt=(ct[9]+1)/ct[5],Mt=(ct[9]-1)/ct[5],St=(ct[8]-1)/ct[0],Dt=(ht[8]+1)/ht[0],oe=ft*St,we=ft*Dt,le=N/(-St+Dt),ce=le*-St;j.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ce),V.translateZ(le),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let Gt=ft+le,Bt=ut+le,Be=oe-ce,Se=we+(N-ce),A=yt*ut/Bt*Gt,S=Mt*ut/Bt*Gt;V.projectionMatrix.makePerspective(Be,Se,A,S,Gt,Bt)}function H(V,j){j===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(j.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;w.near=C.near=E.near=V.near,w.far=C.far=E.far=V.far,(R!==w.near||U!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),R=w.near,U=w.far);let j=V.parent,tt=w.cameras;H(w,j);for(let ct=0;ct<tt.length;ct++)H(tt[ct],j);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),V.matrix.copy(w.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale);let N=V.children;for(let ct=0,ht=N.length;ct<ht;ct++)N[ct].updateMatrixWorld(!0);tt.length===2?J(w,E,C):w.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.getPlanes=function(){return M};let $=null;function K(V,j){if(h=j.getViewerPose(c||a),_=j,h!==null){let tt=h.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let N=!1;tt.length!==w.cameras.length&&(w.cameras.length=0,N=!0);for(let ct=0;ct<tt.length;ct++){let ht=tt[ct],ft=null;if(m!==null)ft=m.getViewport(ht);else{let yt=d.getViewSubImage(u,ht);ft=yt.viewport,ct===0&&(t.setRenderTargetTextures(y,yt.colorTexture,u.ignoreDepthValues?void 0:yt.depthStencilTexture),t.setRenderTarget(y))}let ut=x[ct];ut===void 0&&(ut=new Re,ut.layers.enable(ct),ut.viewport=new ee,x[ct]=ut),ut.matrix.fromArray(ht.transform.matrix),ut.projectionMatrix.fromArray(ht.projectionMatrix),ut.viewport.set(ft.x,ft.y,ft.width,ft.height),ct===0&&w.matrix.copy(ut.matrix),N===!0&&w.cameras.push(ut)}}for(let tt=0;tt<v.length;tt++){let N=g[tt],ct=v[tt];N!==null&&ct!==void 0&&ct.update(N,j,c||a)}if($&&$(V,j),j.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:j.detectedPlanes});let tt=null;for(let N of M)j.detectedPlanes.has(N)||(tt===null&&(tt=[]),tt.push(N));if(tt!==null)for(let N of tt)M.delete(N),b.delete(N),n.dispatchEvent({type:"planeremoved",data:N});for(let N of j.detectedPlanes)if(!M.has(N))M.add(N),b.set(N,j.lastChangedTime),n.dispatchEvent({type:"planeadded",data:N});else{let ct=b.get(N);N.lastChangedTime>ct&&(b.set(N,N.lastChangedTime),n.dispatchEvent({type:"planechanged",data:N}))}}_=null}let lt=new ch;lt.setAnimationLoop(K),this.setAnimationLoop=function(V){$=V},this.dispose=function(){}}};function f0(o,t){function e(f,p){p.color.getRGB(f.fogColor.value,lh(o)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,y,v,g){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(f,p):p.isMeshToonMaterial?(i(f,p),h(f,p)):p.isMeshPhongMaterial?(i(f,p),c(f,p)):p.isMeshStandardMaterial?(i(f,p),d(f,p),p.isMeshPhysicalMaterial&&u(f,p,g)):p.isMeshMatcapMaterial?(i(f,p),m(f,p)):p.isMeshDepthMaterial?i(f,p):p.isMeshDistanceMaterial?(i(f,p),_(f,p)):p.isMeshNormalMaterial?i(f,p):p.isLineBasicMaterial?(s(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?r(f,p,y,v):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.bumpMap&&(f.bumpMap.value=p.bumpMap,f.bumpScale.value=p.bumpScale,p.side===xe&&(f.bumpScale.value*=-1)),p.displacementMap&&(f.displacementMap.value=p.displacementMap,f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap),p.normalMap&&(f.normalMap.value=p.normalMap,f.normalScale.value.copy(p.normalScale),p.side===xe&&f.normalScale.value.negate()),p.specularMap&&(f.specularMap.value=p.specularMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(f.envMap.value=y,f.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;let M=o.useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*M}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),f.uvTransform.value.copy(v.matrix));let g;p.aoMap?g=p.aoMap:p.lightMap&&(g=p.lightMap),g!==void 0&&(g.isWebGLRenderTarget&&(g=g.texture),g.matrixAutoUpdate===!0&&g.updateMatrix(),f.uv2Transform.value.copy(g.matrix))}function s(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function r(f,p,y,v){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*y,f.scale.value=v*.5,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),f.uvTransform.value.copy(g.matrix))}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),f.uvTransform.value.copy(y.matrix))}function c(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.roughness.value=p.roughness,f.metalness.value=p.metalness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function u(f,p,y){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),f.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===xe&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap)}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){f.referencePosition.value.copy(p.referencePosition),f.nearDistance.value=p.nearDistance,f.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function d0(o,t,e,n){let i={},s={},a=[],r=e.isWebGL2?o.getParameter(35375):0;function l(v,g){let M=g.program;n.uniformBlockBinding(v,M)}function c(v,g){let M=i[v.id];M===void 0&&(_(v),M=h(v),i[v.id]=M,v.addEventListener("dispose",p));let b=g.program;n.updateUBOMapping(v,b);let E=t.render.frame;s[v.id]!==E&&(u(v),s[v.id]=E)}function h(v){let g=d();v.__bindingPointIndex=g;let M=o.createBuffer(),b=v.__size,E=v.usage;return o.bindBuffer(35345,M),o.bufferData(35345,b,E),o.bindBuffer(35345,null),o.bindBufferBase(35345,g,M),M}function d(){for(let v=0;v<r;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let g=i[v.id],M=v.uniforms,b=v.__cache;o.bindBuffer(35345,g);for(let E=0,C=M.length;E<C;E++){let x=M[E];if(m(x,E,b)===!0){let w=x.__offset,R=Array.isArray(x.value)?x.value:[x.value],U=0;for(let q=0;q<R.length;q++){let O=R[q],D=f(O);typeof O=="number"?(x.__data[0]=O,o.bufferSubData(35345,w+U,x.__data)):O.isMatrix3?(x.__data[0]=O.elements[0],x.__data[1]=O.elements[1],x.__data[2]=O.elements[2],x.__data[3]=O.elements[0],x.__data[4]=O.elements[3],x.__data[5]=O.elements[4],x.__data[6]=O.elements[5],x.__data[7]=O.elements[0],x.__data[8]=O.elements[6],x.__data[9]=O.elements[7],x.__data[10]=O.elements[8],x.__data[11]=O.elements[0]):(O.toArray(x.__data,U),U+=D.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,w,x.__data)}}o.bindBuffer(35345,null)}function m(v,g,M){let b=v.value;if(M[g]===void 0){if(typeof b=="number")M[g]=b;else{let E=Array.isArray(b)?b:[b],C=[];for(let x=0;x<E.length;x++)C.push(E[x].clone());M[g]=C}return!0}else if(typeof b=="number"){if(M[g]!==b)return M[g]=b,!0}else{let E=Array.isArray(M[g])?M[g]:[M[g]],C=Array.isArray(b)?b:[b];for(let x=0;x<E.length;x++){let w=E[x];if(w.equals(C[x])===!1)return w.copy(C[x]),!0}}return!1}function _(v){let g=v.uniforms,M=0,b=16,E=0;for(let C=0,x=g.length;C<x;C++){let w=g[C],R={boundary:0,storage:0},U=Array.isArray(w.value)?w.value:[w.value];for(let q=0,O=U.length;q<O;q++){let D=U[q],B=f(D);R.boundary+=B.boundary,R.storage+=B.storage}if(w.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=M,C>0){E=M%b;let q=b-E;E!==0&&q-R.boundary<0&&(M+=b-E,w.__offset=M)}M+=R.storage}return E=M%b,E>0&&(M+=b-E),v.__size=M,v.__cache={},this}function f(v){let g={boundary:0,storage:0};return typeof v=="number"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function p(v){let g=v.target;g.removeEventListener("dispose",p);let M=a.indexOf(g.__bindingPointIndex);a.splice(M,1),o.deleteBuffer(i[g.id]),delete i[g.id],delete s[g.id]}function y(){for(let v in i)o.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:l,update:c,dispose:y}}function p0(){let o=Sr("canvas");return o.style.display="block",o}function Vr(o={}){this.isWebGLRenderer=!0;let t=o.canvas!==void 0?o.canvas:p0(),e=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,s=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,r=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1,h;e!==null?h=e.getContextAttributes().alpha:h=o.alpha!==void 0?o.alpha:!1;let d=null,u=null,m=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=vi,this.useLegacyLights=!0,this.toneMapping=In,this.toneMappingExposure=1;let f=this,p=!1,y=0,v=0,g=null,M=-1,b=null,E=new ee,C=new ee,x=null,w=t.width,R=t.height,U=1,q=null,O=null,D=new ee(0,0,w,R),B=new ee(0,0,w,R),Z=!1,J=new Nr,H=!1,$=!1,K=null,lt=new jt,V=new I,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function tt(){return g===null?U:1}let N=e;function ct(T,k){for(let G=0;G<T.length;G++){let z=T[G],Y=t.getContext(z,k);if(Y!==null)return Y}return null}try{let T={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:r,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${So}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",mt,!1),N===null){let k=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&k.shift(),N=ct(k,T),N===null)throw ct(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ht,ft,ut,yt,Mt,St,Dt,oe,we,le,ce,Gt,Bt,Be,Se,A,S,W,et,nt,rt,_t,P,F;function at(){ht=new Nm(N),ft=new Pm(N,ht,o),ht.init(ft),_t=new h0(N,ht,ft),ut=new l0(N,ht,ft),yt=new km,Mt=new $g,St=new c0(N,ht,ut,Mt,ft,_t,yt),Dt=new Lm(f),oe=new Om(f),we=new Yf(N,ft),P=new Am(N,ht,we,ft),le=new Fm(N,we,yt,P),ce=new Hm(N,le,we,yt),et=new Vm(N,ft,St),A=new Rm(Mt),Gt=new Jg(f,Dt,oe,ht,ft,P,A),Bt=new f0(f,Mt),Be=new jg,Se=new s0(ht,ft),W=new Em(f,Dt,oe,ut,ce,h,a),S=new o0(f,ce,ft),F=new d0(N,yt,ft,ut),nt=new Cm(N,ht,yt,ft),rt=new zm(N,ht,yt,ft),yt.programs=Gt.programs,f.capabilities=ft,f.extensions=ht,f.properties=Mt,f.renderLists=Be,f.shadowMap=S,f.state=ut,f.info=yt}at();let st=new uo(f,N);this.xr=st,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let T=ht.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ht.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(T){T!==void 0&&(U=T,this.setSize(w,R,!1))},this.getSize=function(T){return T.set(w,R)},this.setSize=function(T,k,G=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=T,R=k,t.width=Math.floor(T*U),t.height=Math.floor(k*U),G===!0&&(t.style.width=T+"px",t.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(w*U,R*U).floor()},this.setDrawingBufferSize=function(T,k,G){w=T,R=k,U=G,t.width=Math.floor(T*G),t.height=Math.floor(k*G),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(D)},this.setViewport=function(T,k,G,z){T.isVector4?D.set(T.x,T.y,T.z,T.w):D.set(T,k,G,z),ut.viewport(E.copy(D).multiplyScalar(U).floor())},this.getScissor=function(T){return T.copy(B)},this.setScissor=function(T,k,G,z){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,k,G,z),ut.scissor(C.copy(B).multiplyScalar(U).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(T){ut.setScissorTest(Z=T)},this.setOpaqueSort=function(T){q=T},this.setTransparentSort=function(T){O=T},this.getClearColor=function(T){return T.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(T=!0,k=!0,G=!0){let z=0;T&&(z|=16384),k&&(z|=256),G&&(z|=1024),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",mt,!1),Be.dispose(),Se.dispose(),Mt.dispose(),Dt.dispose(),oe.dispose(),ce.dispose(),P.dispose(),F.dispose(),Gt.dispose(),st.dispose(),st.removeEventListener("sessionstart",Q),st.removeEventListener("sessionend",ot),K&&(K.dispose(),K=null),dt.stop()};function pt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;let T=yt.autoReset,k=S.enabled,G=S.autoUpdate,z=S.needsUpdate,Y=S.type;at(),yt.autoReset=T,S.enabled=k,S.autoUpdate=G,S.needsUpdate=z,S.type=Y}function mt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function At(T){let k=T.target;k.removeEventListener("dispose",At),It(k)}function It(T){Ft(T),Mt.remove(T)}function Ft(T){let k=Mt.get(T).programs;k!==void 0&&(k.forEach(function(G){Gt.releaseProgram(G)}),T.isShaderMaterial&&Gt.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,G,z,Y,xt){k===null&&(k=j);let vt=Y.isMesh&&Y.matrixWorld.determinant()<0,Tt=Mu(T,k,G,z,Y);ut.setMaterial(z,vt);let Et=G.index,Ot=1;z.wireframe===!0&&(Et=le.getWireframeAttribute(G),Ot=2);let Pt=G.drawRange,Rt=G.attributes.position,Jt=Pt.start*Ot,Ve=(Pt.start+Pt.count)*Ot;xt!==null&&(Jt=Math.max(Jt,xt.start*Ot),Ve=Math.min(Ve,(xt.start+xt.count)*Ot)),Et!==null?(Jt=Math.max(Jt,0),Ve=Math.min(Ve,Et.count)):Rt!=null&&(Jt=Math.max(Jt,0),Ve=Math.min(Ve,Rt.count));let En=Ve-Jt;if(En<0||En===1/0)return;P.setup(Y,z,Tt,G,Et);let li,$t=nt;if(Et!==null&&(li=we.get(Et),$t=rt,$t.setIndex(li)),Y.isMesh)z.wireframe===!0?(ut.setLineWidth(z.wireframeLinewidth*tt()),$t.setMode(1)):$t.setMode(4);else if(Y.isLine){let Lt=z.linewidth;Lt===void 0&&(Lt=1),ut.setLineWidth(Lt*tt()),Y.isLineSegments?$t.setMode(1):Y.isLineLoop?$t.setMode(2):$t.setMode(3)}else Y.isPoints?$t.setMode(0):Y.isSprite&&$t.setMode(4);if(Y.isInstancedMesh)$t.renderInstances(Jt,En,Y.count);else if(G.isInstancedBufferGeometry){let Lt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,la=Math.min(G.instanceCount,Lt);$t.renderInstances(Jt,En,la)}else $t.render(Jt,En)},this.compile=function(T,k){function G(z,Y,xt){z.transparent===!0&&z.side===Yn&&z.forceSinglePass===!1?(z.side=xe,z.needsUpdate=!0,Je(z,Y,xt),z.side=Kn,z.needsUpdate=!0,Je(z,Y,xt),z.side=Yn):Je(z,Y,xt)}u=Se.get(T),u.init(),_.push(u),T.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(u.pushLight(z),z.castShadow&&u.pushShadow(z))}),u.setupLights(f.useLegacyLights),T.traverse(function(z){let Y=z.material;if(Y)if(Array.isArray(Y))for(let xt=0;xt<Y.length;xt++){let vt=Y[xt];G(vt,T,z)}else G(Y,T,z)}),_.pop(),u=null};let L=null;function X(T){L&&L(T)}function Q(){dt.stop()}function ot(){dt.start()}let dt=new ch;dt.setAnimationLoop(X),typeof self!="undefined"&&dt.setContext(self),this.setAnimationLoop=function(T){L=T,st.setAnimationLoop(T),T===null?dt.stop():dt.start()},st.addEventListener("sessionstart",Q),st.addEventListener("sessionend",ot),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(k),k=st.getCamera()),T.isScene===!0&&T.onBeforeRender(f,T,k,g),u=Se.get(T,_.length),u.init(),_.push(u),lt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),J.setFromProjectionMatrix(lt),$=this.localClippingEnabled,H=A.init(this.clippingPlanes,$),d=Be.get(T,m.length),d.init(),m.push(d),Vt(T,k,0,f.sortObjects),d.finish(),f.sortObjects===!0&&d.sort(q,O),H===!0&&A.beginShadows();let G=u.state.shadowsArray;if(S.render(G,T,k),H===!0&&A.endShadows(),this.info.autoReset===!0&&this.info.reset(),W.render(d,T),u.setupLights(f.useLegacyLights),k.isArrayCamera){let z=k.cameras;for(let Y=0,xt=z.length;Y<xt;Y++){let vt=z[Y];he(d,T,vt,vt.viewport)}}else he(d,T,k);g!==null&&(St.updateMultisampleRenderTarget(g),St.updateRenderTargetMipmap(g)),T.isScene===!0&&T.onAfterRender(f,T,k),P.resetDefaultState(),M=-1,b=null,_.pop(),_.length>0?u=_[_.length-1]:u=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function Vt(T,k,G,z){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)u.pushLight(T),T.castShadow&&u.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||J.intersectsSprite(T)){z&&V.setFromMatrixPosition(T.matrixWorld).applyMatrix4(lt);let vt=ce.update(T),Tt=T.material;Tt.visible&&d.push(T,vt,Tt,G,V.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==yt.render.frame&&(T.skeleton.update(),T.skeleton.frame=yt.render.frame),!T.frustumCulled||J.intersectsObject(T))){z&&V.setFromMatrixPosition(T.matrixWorld).applyMatrix4(lt);let vt=ce.update(T),Tt=T.material;if(Array.isArray(Tt)){let Et=vt.groups;for(let Ot=0,Pt=Et.length;Ot<Pt;Ot++){let Rt=Et[Ot],Jt=Tt[Rt.materialIndex];Jt&&Jt.visible&&d.push(T,vt,Jt,G,V.z,Rt)}}else Tt.visible&&d.push(T,vt,Tt,G,V.z,null)}}let xt=T.children;for(let vt=0,Tt=xt.length;vt<Tt;vt++)Vt(xt[vt],k,G,z)}function he(T,k,G,z){let Y=T.opaque,xt=T.transmissive,vt=T.transparent;u.setupLightsView(G),H===!0&&A.setGlobalState(f.clippingPlanes,G),xt.length>0&&Te(Y,k,G),z&&ut.viewport(E.copy(z)),Y.length>0&&_n(Y,k,G),xt.length>0&&_n(xt,k,G),vt.length>0&&_n(vt,k,G),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Te(T,k,G){let z=ft.isWebGL2;K===null&&(K=new On(1024,1024,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")?Ns:yi,minFilter:Os,samples:z&&s===!0?4:0}));let Y=f.getRenderTarget();f.setRenderTarget(K),f.clear();let xt=f.toneMapping;f.toneMapping=In,_n(T,k,G),f.toneMapping=xt,St.updateMultisampleRenderTarget(K),St.updateRenderTargetMipmap(K),f.setRenderTarget(Y)}function _n(T,k,G){let z=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,xt=T.length;Y<xt;Y++){let vt=T[Y],Tt=vt.object,Et=vt.geometry,Ot=z===null?vt.material:z,Pt=vt.group;Tt.layers.test(G.layers)&&Zt(Tt,k,G,Et,Ot,Pt)}}function Zt(T,k,G,z,Y,xt){T.onBeforeRender(f,k,G,z,Y,xt),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(f,k,G,z,T,xt),Y.transparent===!0&&Y.side===Yn&&Y.forceSinglePass===!1?(Y.side=xe,Y.needsUpdate=!0,f.renderBufferDirect(G,k,z,Y,T,xt),Y.side=Kn,Y.needsUpdate=!0,f.renderBufferDirect(G,k,z,Y,T,xt),Y.side=Yn):f.renderBufferDirect(G,k,z,Y,T,xt),T.onAfterRender(f,k,G,z,Y,xt)}function Je(T,k,G){k.isScene!==!0&&(k=j);let z=Mt.get(T),Y=u.state.lights,xt=u.state.shadowsArray,vt=Y.state.version,Tt=Gt.getParameters(T,Y.state,xt,k,G),Et=Gt.getProgramCacheKey(Tt),Ot=z.programs;z.environment=T.isMeshStandardMaterial?k.environment:null,z.fog=k.fog,z.envMap=(T.isMeshStandardMaterial?oe:Dt).get(T.envMap||z.environment),Ot===void 0&&(T.addEventListener("dispose",At),Ot=new Map,z.programs=Ot);let Pt=Ot.get(Et);if(Pt!==void 0){if(z.currentProgram===Pt&&z.lightsStateVersion===vt)return xn(T,Tt),Pt}else Tt.uniforms=Gt.getUniforms(T),T.onBuild(G,Tt,f),T.onBeforeCompile(Tt,f),Pt=Gt.acquireProgram(Tt,Et),Ot.set(Et,Pt),z.uniforms=Tt.uniforms;let Rt=z.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Rt.clippingPlanes=A.uniform),xn(T,Tt),z.needsLights=Su(T),z.lightsStateVersion=vt,z.needsLights&&(Rt.ambientLightColor.value=Y.state.ambient,Rt.lightProbe.value=Y.state.probe,Rt.directionalLights.value=Y.state.directional,Rt.directionalLightShadows.value=Y.state.directionalShadow,Rt.spotLights.value=Y.state.spot,Rt.spotLightShadows.value=Y.state.spotShadow,Rt.rectAreaLights.value=Y.state.rectArea,Rt.ltc_1.value=Y.state.rectAreaLTC1,Rt.ltc_2.value=Y.state.rectAreaLTC2,Rt.pointLights.value=Y.state.point,Rt.pointLightShadows.value=Y.state.pointShadow,Rt.hemisphereLights.value=Y.state.hemi,Rt.directionalShadowMap.value=Y.state.directionalShadowMap,Rt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Rt.spotShadowMap.value=Y.state.spotShadowMap,Rt.spotLightMatrix.value=Y.state.spotLightMatrix,Rt.spotLightMap.value=Y.state.spotLightMap,Rt.pointShadowMap.value=Y.state.pointShadowMap,Rt.pointShadowMatrix.value=Y.state.pointShadowMatrix);let Jt=Pt.getUniforms(),Ve=es.seqWithValue(Jt.seq,Rt);return z.currentProgram=Pt,z.uniformsList=Ve,Pt}function xn(T,k){let G=Mt.get(T);G.outputEncoding=k.outputEncoding,G.instancing=k.instancing,G.skinning=k.skinning,G.morphTargets=k.morphTargets,G.morphNormals=k.morphNormals,G.morphColors=k.morphColors,G.morphTargetsCount=k.morphTargetsCount,G.numClippingPlanes=k.numClippingPlanes,G.numIntersection=k.numClipIntersection,G.vertexAlphas=k.vertexAlphas,G.vertexTangents=k.vertexTangents,G.toneMapping=k.toneMapping}function Mu(T,k,G,z,Y){k.isScene!==!0&&(k=j),St.resetTextureUnits();let xt=k.fog,vt=z.isMeshStandardMaterial?k.environment:null,Tt=g===null?f.outputEncoding:g.isXRRenderTarget===!0?g.texture.encoding:vi,Et=(z.isMeshStandardMaterial?oe:Dt).get(z.envMap||vt),Ot=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Pt=!!z.normalMap&&!!G.attributes.tangent,Rt=!!G.morphAttributes.position,Jt=!!G.morphAttributes.normal,Ve=!!G.morphAttributes.color,En=z.toneMapped?f.toneMapping:In,li=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,$t=li!==void 0?li.length:0,Lt=Mt.get(z),la=u.state.lights;if(H===!0&&($===!0||T!==b)){let He=T===b&&z.id===M;A.setState(z,T,He)}let ue=!1;z.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==la.state.version||Lt.outputEncoding!==Tt||Y.isInstancedMesh&&Lt.instancing===!1||!Y.isInstancedMesh&&Lt.instancing===!0||Y.isSkinnedMesh&&Lt.skinning===!1||!Y.isSkinnedMesh&&Lt.skinning===!0||Lt.envMap!==Et||z.fog===!0&&Lt.fog!==xt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==A.numPlanes||Lt.numIntersection!==A.numIntersection)||Lt.vertexAlphas!==Ot||Lt.vertexTangents!==Pt||Lt.morphTargets!==Rt||Lt.morphNormals!==Jt||Lt.morphColors!==Ve||Lt.toneMapping!==En||ft.isWebGL2===!0&&Lt.morphTargetsCount!==$t)&&(ue=!0):(ue=!0,Lt.__version=z.version);let ci=Lt.currentProgram;ue===!0&&(ci=Je(z,k,Y));let Rl=!1,ws=!1,ca=!1,Ee=ci.getUniforms(),hi=Lt.uniforms;if(ut.useProgram(ci.program)&&(Rl=!0,ws=!0,ca=!0),z.id!==M&&(M=z.id,ws=!0),Rl||b!==T){if(Ee.setValue(N,"projectionMatrix",T.projectionMatrix),ft.logarithmicDepthBuffer&&Ee.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),b!==T&&(b=T,ws=!0,ca=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){let He=Ee.map.cameraPosition;He!==void 0&&He.setValue(N,V.setFromMatrixPosition(T.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ee.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||Y.isSkinnedMesh)&&Ee.setValue(N,"viewMatrix",T.matrixWorldInverse)}if(Y.isSkinnedMesh){Ee.setOptional(N,Y,"bindMatrix"),Ee.setOptional(N,Y,"bindMatrixInverse");let He=Y.skeleton;He&&(ft.floatVertexTextures?(He.boneTexture===null&&He.computeBoneTexture(),Ee.setValue(N,"boneTexture",He.boneTexture,St),Ee.setValue(N,"boneTextureSize",He.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let ha=G.morphAttributes;if((ha.position!==void 0||ha.normal!==void 0||ha.color!==void 0&&ft.isWebGL2===!0)&&et.update(Y,G,ci),(ws||Lt.receiveShadow!==Y.receiveShadow)&&(Lt.receiveShadow=Y.receiveShadow,Ee.setValue(N,"receiveShadow",Y.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(hi.envMap.value=Et,hi.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),ws&&(Ee.setValue(N,"toneMappingExposure",f.toneMappingExposure),Lt.needsLights&&wu(hi,ca),xt&&z.fog===!0&&Bt.refreshFogUniforms(hi,xt),Bt.refreshMaterialUniforms(hi,z,U,R,K),es.upload(N,Lt.uniformsList,hi,St)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(es.upload(N,Lt.uniformsList,hi,St),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ee.setValue(N,"center",Y.center),Ee.setValue(N,"modelViewMatrix",Y.modelViewMatrix),Ee.setValue(N,"normalMatrix",Y.normalMatrix),Ee.setValue(N,"modelMatrix",Y.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let He=z.uniformsGroups;for(let ua=0,Tu=He.length;ua<Tu;ua++)if(ft.isWebGL2){let Ll=He[ua];F.update(Ll,ci),F.bind(Ll,ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ci}function wu(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Su(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return g},this.setRenderTargetTextures=function(T,k,G){Mt.get(T.texture).__webglTexture=k,Mt.get(T.depthTexture).__webglTexture=G;let z=Mt.get(T);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=G===void 0,z.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,k){let G=Mt.get(T);G.__webglFramebuffer=k,G.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,G=0){g=T,y=k,v=G;let z=!0,Y=null,xt=!1,vt=!1;if(T){let Et=Mt.get(T);Et.__useDefaultFramebuffer!==void 0?(ut.bindFramebuffer(36160,null),z=!1):Et.__webglFramebuffer===void 0?St.setupRenderTarget(T):Et.__hasExternalTextures&&St.rebindTextures(T,Mt.get(T.texture).__webglTexture,Mt.get(T.depthTexture).__webglTexture);let Ot=T.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(vt=!0);let Pt=Mt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Y=Pt[k],xt=!0):ft.isWebGL2&&T.samples>0&&St.useMultisampledRTT(T)===!1?Y=Mt.get(T).__webglMultisampledFramebuffer:Y=Pt,E.copy(T.viewport),C.copy(T.scissor),x=T.scissorTest}else E.copy(D).multiplyScalar(U).floor(),C.copy(B).multiplyScalar(U).floor(),x=Z;if(ut.bindFramebuffer(36160,Y)&&ft.drawBuffers&&z&&ut.drawBuffers(T,Y),ut.viewport(E),ut.scissor(C),ut.setScissorTest(x),xt){let Et=Mt.get(T.texture);N.framebufferTexture2D(36160,36064,34069+k,Et.__webglTexture,G)}else if(vt){let Et=Mt.get(T.texture),Ot=k||0;N.framebufferTextureLayer(36160,36064,Et.__webglTexture,G||0,Ot)}M=-1},this.readRenderTargetPixels=function(T,k,G,z,Y,xt,vt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Mt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&vt!==void 0&&(Tt=Tt[vt]),Tt){ut.bindFramebuffer(36160,Tt);try{let Et=T.texture,Ot=Et.format,Pt=Et.type;if(Ot!==hn&&_t.convert(Ot)!==N.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Rt=Pt===Ns&&(ht.has("EXT_color_buffer_half_float")||ft.isWebGL2&&ht.has("EXT_color_buffer_float"));if(Pt!==yi&&_t.convert(Pt)!==N.getParameter(35738)&&!(Pt===_i&&(ft.isWebGL2||ht.has("OES_texture_float")||ht.has("WEBGL_color_buffer_float")))&&!Rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-z&&G>=0&&G<=T.height-Y&&N.readPixels(k,G,z,Y,_t.convert(Ot),_t.convert(Pt),xt)}finally{let Et=g!==null?Mt.get(g).__webglFramebuffer:null;ut.bindFramebuffer(36160,Et)}}},this.copyFramebufferToTexture=function(T,k,G=0){let z=Math.pow(2,-G),Y=Math.floor(k.image.width*z),xt=Math.floor(k.image.height*z);St.setTexture2D(k,0),N.copyTexSubImage2D(3553,G,0,0,T.x,T.y,Y,xt),ut.unbindTexture()},this.copyTextureToTexture=function(T,k,G,z=0){let Y=k.image.width,xt=k.image.height,vt=_t.convert(G.format),Tt=_t.convert(G.type);St.setTexture2D(G,0),N.pixelStorei(37440,G.flipY),N.pixelStorei(37441,G.premultiplyAlpha),N.pixelStorei(3317,G.unpackAlignment),k.isDataTexture?N.texSubImage2D(3553,z,T.x,T.y,Y,xt,vt,Tt,k.image.data):k.isCompressedTexture?N.compressedTexSubImage2D(3553,z,T.x,T.y,k.mipmaps[0].width,k.mipmaps[0].height,vt,k.mipmaps[0].data):N.texSubImage2D(3553,z,T.x,T.y,vt,Tt,k.image),z===0&&G.generateMipmaps&&N.generateMipmap(3553),ut.unbindTexture()},this.copyTextureToTexture3D=function(T,k,G,z,Y=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let xt=T.max.x-T.min.x+1,vt=T.max.y-T.min.y+1,Tt=T.max.z-T.min.z+1,Et=_t.convert(z.format),Ot=_t.convert(z.type),Pt;if(z.isData3DTexture)St.setTexture3D(z,0),Pt=32879;else if(z.isDataArrayTexture)St.setTexture2DArray(z,0),Pt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(37440,z.flipY),N.pixelStorei(37441,z.premultiplyAlpha),N.pixelStorei(3317,z.unpackAlignment);let Rt=N.getParameter(3314),Jt=N.getParameter(32878),Ve=N.getParameter(3316),En=N.getParameter(3315),li=N.getParameter(32877),$t=G.isCompressedTexture?G.mipmaps[0]:G.image;N.pixelStorei(3314,$t.width),N.pixelStorei(32878,$t.height),N.pixelStorei(3316,T.min.x),N.pixelStorei(3315,T.min.y),N.pixelStorei(32877,T.min.z),G.isDataTexture||G.isData3DTexture?N.texSubImage3D(Pt,Y,k.x,k.y,k.z,xt,vt,Tt,Et,Ot,$t.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Pt,Y,k.x,k.y,k.z,xt,vt,Tt,Et,$t.data)):N.texSubImage3D(Pt,Y,k.x,k.y,k.z,xt,vt,Tt,Et,Ot,$t),N.pixelStorei(3314,Rt),N.pixelStorei(32878,Jt),N.pixelStorei(3316,Ve),N.pixelStorei(3315,En),N.pixelStorei(32877,li),Y===0&&z.generateMipmaps&&N.generateMipmap(Pt),ut.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?St.setTextureCube(T,0):T.isData3DTexture?St.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?St.setTexture2DArray(T,0):St.setTexture2D(T,0),ut.unbindTexture()},this.resetState=function(){y=0,v=0,g=null,ut.reset(),P.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Vr.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(o){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!o}}});var fo=class extends Vr{};fo.prototype.isWebGL1Renderer=!0;var zr=class extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}};var kr=class extends jn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Yc=new I,Zc=new I,Jc=new jt,Wa=new Cr,vr=new rs,po=class extends ye{constructor(t=new qe,e=new kr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Yc.fromBufferAttribute(e,i-1),Zc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Yc.distanceTo(Zc);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(i),vr.radius+=s,t.ray.intersectsSphere(vr)===!1)return;Jc.copy(i).invert(),Wa.copy(t.ray).applyMatrix4(Jc);let r=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=new I,h=new I,d=new I,u=new I,m=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){let y=Math.max(0,a.start),v=Math.min(_.count,a.start+a.count);for(let g=y,M=v-1;g<M;g+=m){let b=_.getX(g),E=_.getX(g+1);if(c.fromBufferAttribute(p,b),h.fromBufferAttribute(p,E),Wa.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let x=t.ray.origin.distanceTo(u);x<t.near||x>t.far||e.push({distance:x,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{let y=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let g=y,M=v-1;g<M;g+=m){if(c.fromBufferAttribute(p,g),h.fromBufferAttribute(p,g+1),Wa.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let E=t.ray.origin.distanceTo(u);E<t.near||E>t.far||e.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}},$c=new I,Kc=new I,mo=class extends po{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)$c.fromBufferAttribute(e,i),Kc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+$c.distanceTo(Kc);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ks=class extends qe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],a=[];r(i),c(n),h(),this.setAttribute("position",new ie(s,3)),this.setAttribute("normal",new ie(s.slice(),3)),this.setAttribute("uv",new ie(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function r(v){let g=new I,M=new I,b=new I;for(let E=0;E<e.length;E+=3)m(e[E+0],g),m(e[E+1],M),m(e[E+2],b),l(g,M,b,v)}function l(v,g,M,b){let E=b+1,C=[];for(let x=0;x<=E;x++){C[x]=[];let w=v.clone().lerp(M,x/E),R=g.clone().lerp(M,x/E),U=E-x;for(let q=0;q<=U;q++)q===0&&x===E?C[x][q]=w:C[x][q]=w.clone().lerp(R,q/U)}for(let x=0;x<E;x++)for(let w=0;w<2*(E-x)-1;w++){let R=Math.floor(w/2);w%2===0?(u(C[x][R+1]),u(C[x+1][R]),u(C[x][R])):(u(C[x][R+1]),u(C[x+1][R+1]),u(C[x+1][R]))}}function c(v){let g=new I;for(let M=0;M<s.length;M+=3)g.x=s[M+0],g.y=s[M+1],g.z=s[M+2],g.normalize().multiplyScalar(v),s[M+0]=g.x,s[M+1]=g.y,s[M+2]=g.z}function h(){let v=new I;for(let g=0;g<s.length;g+=3){v.x=s[g+0],v.y=s[g+1],v.z=s[g+2];let M=p(v)/2/Math.PI+.5,b=y(v)/Math.PI+.5;a.push(M,1-b)}_(),d()}function d(){for(let v=0;v<a.length;v+=6){let g=a[v+0],M=a[v+2],b=a[v+4],E=Math.max(g,M,b),C=Math.min(g,M,b);E>.9&&C<.1&&(g<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),b<.2&&(a[v+4]+=1))}}function u(v){s.push(v.x,v.y,v.z)}function m(v,g){let M=v*3;g.x=t[M+0],g.y=t[M+1],g.z=t[M+2]}function _(){let v=new I,g=new I,M=new I,b=new I,E=new bt,C=new bt,x=new bt;for(let w=0,R=0;w<s.length;w+=9,R+=6){v.set(s[w+0],s[w+1],s[w+2]),g.set(s[w+3],s[w+4],s[w+5]),M.set(s[w+6],s[w+7],s[w+8]),E.set(a[R+0],a[R+1]),C.set(a[R+2],a[R+3]),x.set(a[R+4],a[R+5]),b.copy(v).add(g).add(M).divideScalar(3);let U=p(b);f(E,R+0,v,U),f(C,R+2,g,U),f(x,R+4,M,U)}}function f(v,g,M,b){b<0&&v.x===1&&(a[g]=v.x-1),M.x===0&&M.z===0&&(a[g]=b/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function y(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ks(t.vertices,t.indices,t.radius,t.details)}};var Mi=class extends ks{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Mi(t.radius,t.detail)}};var ls=class extends qe{constructor(t=1,e=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let r=[],l=[],c=[],h=[],d=new I,u=new I,m=new I,_=new I,f=new I,p=new I,y=new I;for(let g=0;g<=n;++g){let M=g/n*s*Math.PI*2;v(M,s,a,t,m),v(M+.01,s,a,t,_),p.subVectors(_,m),y.addVectors(_,m),f.crossVectors(p,y),y.crossVectors(f,p),f.normalize(),y.normalize();for(let b=0;b<=i;++b){let E=b/i*Math.PI*2,C=-e*Math.cos(E),x=e*Math.sin(E);d.x=m.x+(C*y.x+x*f.x),d.y=m.y+(C*y.y+x*f.y),d.z=m.z+(C*y.z+x*f.z),l.push(d.x,d.y,d.z),u.subVectors(d,m).normalize(),c.push(u.x,u.y,u.z),h.push(g/n),h.push(b/i)}}for(let g=1;g<=n;g++)for(let M=1;M<=i;M++){let b=(i+1)*(g-1)+(M-1),E=(i+1)*g+(M-1),C=(i+1)*g+M,x=(i+1)*(g-1)+M;r.push(b,E,x),r.push(E,C,x)}this.setIndex(r),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(h,2));function v(g,M,b,E,C){let x=Math.cos(g),w=Math.sin(g),R=b/M*g,U=Math.cos(R);C.x=E*(2+U)*.5*x,C.y=E*(2+U)*w*.5,C.z=E*Math.sin(R)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ls(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}};var dn=class extends jn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sh,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};function qn(o,t,e){return ph(o)?new o.constructor(o.subarray(t,e!==void 0?e:o.length)):o.slice(t,e)}function br(o,t,e){return!o||!e&&o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function ph(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}var cs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let r=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===r)break;if(s=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=s)){let r=e[1];t<r&&(n=2,s=r);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){let r=n+a>>>1;t<e[r]?a=r:n=r+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},go=class extends cs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lc,endingEnd:lc}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,a=t+1,r=i[s],l=i[a];if(r===void 0)switch(this.getSettings_().endingStart){case cc:s=t,r=2*e-n;break;case hc:s=i.length-2,r=e+i[s]-i[s+1];break;default:s=t,r=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cc:a=t,l=2*n-e;break;case hc:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-r),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=t*r,c=l-r,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,m=this._weightNext,_=(n-e)/(i-e),f=_*_,p=f*_,y=-u*p+2*u*f-u*_,v=(1+u)*p+(-1.5-2*u)*f+(-.5+u)*_+1,g=(-1-m)*p+(1.5+m)*f+.5*_,M=m*p-m*f;for(let b=0;b!==r;++b)s[b]=y*a[h+b]+v*a[c+b]+g*a[l+b]+M*a[d+b];return s}},_o=class extends cs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=t*r,c=l-r,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==r;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}},xo=class extends cs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},pn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=br(e,this.TimeBufferType),this.values=br(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:br(t.times,Array),values:br(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new go(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Mr:e=this.InterpolantFactoryMethodDiscrete;break;case wr:e=this.InterpolantFactoryMethodLinear;break;case xa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return wr;case this.InterpolantFactoryMethodSmooth:return xa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let r=this.getValueSize();this.times=qn(n,s,a),this.values=qn(this.values,s*r,a*r)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let r=0;r!==s;r++){let l=n[r];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,r,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,r,l,a),t=!1;break}a=l}if(i!==void 0&&ph(i))for(let r=0,l=i.length;r!==l;++r){let c=i[r];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,r,c),t=!1;break}}return t}optimize(){let t=qn(this.times),e=qn(this.values),n=this.getValueSize(),i=this.getInterpolation()===xa,s=t.length-1,a=1;for(let r=1;r<s;++r){let l=!1,c=t[r],h=t[r+1];if(c!==h&&(r!==1||c!==t[0]))if(i)l=!0;else{let d=r*n,u=d-n,m=d+n;for(let _=0;_!==n;++_){let f=e[d+_];if(f!==e[u+_]||f!==e[m+_]){l=!0;break}}}if(l){if(r!==a){t[a]=t[r];let d=r*n,u=a*n;for(let m=0;m!==n;++m)e[u+m]=e[d+m]}++a}}if(s>0){t[a]=t[s];for(let r=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[r+c];++a}return a!==t.length?(this.times=qn(t,0,a),this.values=qn(e,0,a*n)):(this.times=t,this.values=e),this}clone(){let t=qn(this.times,0),e=qn(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=wr;var wi=class extends pn{};wi.prototype.ValueTypeName="bool";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Mr;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends pn{};yo.prototype.ValueTypeName="color";var vo=class extends pn{};vo.prototype.ValueTypeName="number";var bo=class extends cs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=(n-e)/(i-e),c=t*r;for(let h=c+r;c!==h;c+=4)fn.slerpFlat(s,0,a,c-r,a,c,l);return s}},Us=class extends pn{InterpolantFactoryMethodLinear(t){return new bo(this.times,this.values,this.getValueSize(),t)}};Us.prototype.ValueTypeName="quaternion";Us.prototype.DefaultInterpolation=wr;Us.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends pn{};Si.prototype.ValueTypeName="string";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Mr;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var Mo=class extends pn{};Mo.prototype.ValueTypeName="vector";var Eo="\\[\\]\\.:\\/",m0=new RegExp("["+Eo+"]","g"),Ao="[^"+Eo+"]",g0="[^"+Eo.replace("\\.","")+"]",_0=/((?:WC+[\/:])*)/.source.replace("WC",Ao),x0=/(WCOD+)?/.source.replace("WCOD",g0),y0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ao),v0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ao),b0=new RegExp("^"+_0+x0+y0+v0+"$"),M0=["material","materials","bones","map"],wo=class{constructor(t,e,n){let i=n||Nt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Nt=class{constructor(t,e,n){this.path=e,this.parsedPath=n||Nt.parseTrackName(e),this.node=Nt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Nt.Composite(t,e,n):new Nt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(m0,"")}static parseTrackName(t){let e=b0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);M0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let r=s[a];if(r.name===e||r.uuid===e)return r;let l=n(r.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=Nt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let r=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?r=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=wo;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ix=new Float32Array(1);var Bs=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ne(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Vs=class extends mo{constructor(t=1){let e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new qe;i.setAttribute("position",new ie(e,3)),i.setAttribute("color",new ie(n,3));let s=new kr({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(t,e,n){let i=new zt,s=this.geometry.attributes.color.array;return i.set(t),i.toArray(s,0),i.toArray(s,3),i.set(e),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:So}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=So);var mh={type:"change"},Po={type:"start"},gh={type:"end"},Hr=class extends Mn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ti.ROTATE,MIDDLE:Ti.DOLLY,RIGHT:Ti.PAN},this.touches={ONE:Ei.ROTATE,TWO:Ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Se),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Se),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(mh),n.update(),s=i.NONE},this.update=function(){let P=new I,F=new fn().setFromUnitVectors(t.up,new I(0,1,0)),at=F.clone().invert(),st=new I,pt=new fn,gt=2*Math.PI;return function(){let At=n.object.position;P.copy(At).sub(n.target),P.applyQuaternion(F),r.setFromVector3(P),n.autoRotate&&s===i.NONE&&w(C()),n.enableDamping?(r.theta+=l.theta*n.dampingFactor,r.phi+=l.phi*n.dampingFactor):(r.theta+=l.theta,r.phi+=l.phi);let It=n.minAzimuthAngle,Ft=n.maxAzimuthAngle;return isFinite(It)&&isFinite(Ft)&&(It<-Math.PI?It+=gt:It>Math.PI&&(It-=gt),Ft<-Math.PI?Ft+=gt:Ft>Math.PI&&(Ft-=gt),It<=Ft?r.theta=Math.max(It,Math.min(Ft,r.theta)):r.theta=r.theta>(It+Ft)/2?Math.max(It,r.theta):Math.min(Ft,r.theta)),r.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,r.phi)),r.makeSafe(),r.radius*=c,r.radius=Math.max(n.minDistance,Math.min(n.maxDistance,r.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),P.setFromSpherical(r),P.applyQuaternion(at),At.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,d||st.distanceToSquared(n.object.position)>a||8*(1-pt.dot(n.object.quaternion))>a?(n.dispatchEvent(mh),st.copy(n.object.position),pt.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",W),n.domElement.removeEventListener("pointerdown",oe),n.domElement.removeEventListener("pointercancel",ce),n.domElement.removeEventListener("wheel",Be),n.domElement.removeEventListener("pointermove",we),n.domElement.removeEventListener("pointerup",le),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Se),n._domElementKeyEvents=null)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=i.NONE,a=1e-6,r=new Bs,l=new Bs,c=1,h=new I,d=!1,u=new bt,m=new bt,_=new bt,f=new bt,p=new bt,y=new bt,v=new bt,g=new bt,M=new bt,b=[],E={};function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function w(P){l.theta-=P}function R(P){l.phi-=P}let U=function(){let P=new I;return function(at,st){P.setFromMatrixColumn(st,0),P.multiplyScalar(-at),h.add(P)}}(),q=function(){let P=new I;return function(at,st){n.screenSpacePanning===!0?P.setFromMatrixColumn(st,1):(P.setFromMatrixColumn(st,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(at),h.add(P)}}(),O=function(){let P=new I;return function(at,st){let pt=n.domElement;if(n.object.isPerspectiveCamera){let gt=n.object.position;P.copy(gt).sub(n.target);let mt=P.length();mt*=Math.tan(n.object.fov/2*Math.PI/180),U(2*at*mt/pt.clientHeight,n.object.matrix),q(2*st*mt/pt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(at*(n.object.right-n.object.left)/n.object.zoom/pt.clientWidth,n.object.matrix),q(st*(n.object.top-n.object.bottom)/n.object.zoom/pt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function D(P){n.object.isPerspectiveCamera?c/=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*P)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(P){n.object.isPerspectiveCamera?c*=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/P)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(P){u.set(P.clientX,P.clientY)}function J(P){v.set(P.clientX,P.clientY)}function H(P){f.set(P.clientX,P.clientY)}function $(P){m.set(P.clientX,P.clientY),_.subVectors(m,u).multiplyScalar(n.rotateSpeed);let F=n.domElement;w(2*Math.PI*_.x/F.clientHeight),R(2*Math.PI*_.y/F.clientHeight),u.copy(m),n.update()}function K(P){g.set(P.clientX,P.clientY),M.subVectors(g,v),M.y>0?D(x()):M.y<0&&B(x()),v.copy(g),n.update()}function lt(P){p.set(P.clientX,P.clientY),y.subVectors(p,f).multiplyScalar(n.panSpeed),O(y.x,y.y),f.copy(p),n.update()}function V(P){P.deltaY<0?B(x()):P.deltaY>0&&D(x()),n.update()}function j(P){let F=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),F=!0;break}F&&(P.preventDefault(),n.update())}function tt(){if(b.length===1)u.set(b[0].pageX,b[0].pageY);else{let P=.5*(b[0].pageX+b[1].pageX),F=.5*(b[0].pageY+b[1].pageY);u.set(P,F)}}function N(){if(b.length===1)f.set(b[0].pageX,b[0].pageY);else{let P=.5*(b[0].pageX+b[1].pageX),F=.5*(b[0].pageY+b[1].pageY);f.set(P,F)}}function ct(){let P=b[0].pageX-b[1].pageX,F=b[0].pageY-b[1].pageY,at=Math.sqrt(P*P+F*F);v.set(0,at)}function ht(){n.enableZoom&&ct(),n.enablePan&&N()}function ft(){n.enableZoom&&ct(),n.enableRotate&&tt()}function ut(P){if(b.length==1)m.set(P.pageX,P.pageY);else{let at=_t(P),st=.5*(P.pageX+at.x),pt=.5*(P.pageY+at.y);m.set(st,pt)}_.subVectors(m,u).multiplyScalar(n.rotateSpeed);let F=n.domElement;w(2*Math.PI*_.x/F.clientHeight),R(2*Math.PI*_.y/F.clientHeight),u.copy(m)}function yt(P){if(b.length===1)p.set(P.pageX,P.pageY);else{let F=_t(P),at=.5*(P.pageX+F.x),st=.5*(P.pageY+F.y);p.set(at,st)}y.subVectors(p,f).multiplyScalar(n.panSpeed),O(y.x,y.y),f.copy(p)}function Mt(P){let F=_t(P),at=P.pageX-F.x,st=P.pageY-F.y,pt=Math.sqrt(at*at+st*st);g.set(0,pt),M.set(0,Math.pow(g.y/v.y,n.zoomSpeed)),D(M.y),v.copy(g)}function St(P){n.enableZoom&&Mt(P),n.enablePan&&yt(P)}function Dt(P){n.enableZoom&&Mt(P),n.enableRotate&&ut(P)}function oe(P){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",we),n.domElement.addEventListener("pointerup",le)),et(P),P.pointerType==="touch"?A(P):Gt(P))}function we(P){n.enabled!==!1&&(P.pointerType==="touch"?S(P):Bt(P))}function le(P){nt(P),b.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",we),n.domElement.removeEventListener("pointerup",le)),n.dispatchEvent(gh),s=i.NONE}function ce(P){nt(P)}function Gt(P){let F;switch(P.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case Ti.DOLLY:if(n.enableZoom===!1)return;J(P),s=i.DOLLY;break;case Ti.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;H(P),s=i.PAN}else{if(n.enableRotate===!1)return;Z(P),s=i.ROTATE}break;case Ti.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;Z(P),s=i.ROTATE}else{if(n.enablePan===!1)return;H(P),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Po)}function Bt(P){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;$(P);break;case i.DOLLY:if(n.enableZoom===!1)return;K(P);break;case i.PAN:if(n.enablePan===!1)return;lt(P);break}}function Be(P){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(P.preventDefault(),n.dispatchEvent(Po),V(P),n.dispatchEvent(gh))}function Se(P){n.enabled===!1||n.enablePan===!1||j(P)}function A(P){switch(rt(P),b.length){case 1:switch(n.touches.ONE){case Ei.ROTATE:if(n.enableRotate===!1)return;tt(),s=i.TOUCH_ROTATE;break;case Ei.PAN:if(n.enablePan===!1)return;N(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Ei.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ht(),s=i.TOUCH_DOLLY_PAN;break;case Ei.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ft(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Po)}function S(P){switch(rt(P),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ut(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;yt(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;St(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Dt(P),n.update();break;default:s=i.NONE}}function W(P){n.enabled!==!1&&P.preventDefault()}function et(P){b.push(P)}function nt(P){delete E[P.pointerId];for(let F=0;F<b.length;F++)if(b[F].pointerId==P.pointerId){b.splice(F,1);return}}function rt(P){let F=E[P.pointerId];F===void 0&&(F=new bt,E[P.pointerId]=F),F.set(P.pageX,P.pageY)}function _t(P){let F=P.pointerId===b[0].pointerId?b[1]:b[0];return E[F.pointerId]}n.domElement.addEventListener("contextmenu",W),n.domElement.addEventListener("pointerdown",oe),n.domElement.addEventListener("pointercancel",ce),n.domElement.addEventListener("wheel",Be,{passive:!1}),this.update()}};function Fn(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Sh(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}var Ue={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},fs={duration:.5,overwrite:!1,delay:0},Zo,be,te,en=1e8,Ut=1/en,zo=Math.PI*2,w0=zo/4,S0=0,Th=Math.sqrt,T0=Math.cos,E0=Math.sin,ae=function(t){return typeof t=="string"},qt=function(t){return typeof t=="function"},kn=function(t){return typeof t=="number"},Qr=function(t){return typeof t=="undefined"},Sn=function(t){return typeof t=="object"},ke=function(t){return t!==!1},Eh=function(){return typeof window!="undefined"},Gr=function(t){return qt(t)||ae(t)},Ah=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Me=Array.isArray,ko=/(?:-?\.?\d|\.)+/gi,Jo=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ri=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ro=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,$o=/[+-]=-?[.\d]+/,Ch=/[^,'"\[\]\s]+/gi,A0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Wt,tn,Uo,Ko,Ze={},Yr={},Ph,Rh=function(t){return(Yr=Pi(t,Ze))&&De},ta=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Zr=function(t,e){return!e&&console.warn(t)},Lh=function(t,e){return t&&(Ze[t]=e)&&Yr&&(Yr[t]=e)||Ze},Zs=function(){return 0},C0={suppressEvents:!0,isStart:!0,kill:!1},Wr={suppressEvents:!0,kill:!1},P0={suppressEvents:!0},jo={},ti=[],Bo={},Dh,Fe={},Lo={},_h=30,Xr=[],Qo="",tl=function(t){var e=t[0],n,i;if(Sn(e)||qt(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Xr.length;i--&&!Xr[i].targetTest(e););n=Xr[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new il(t[i],n)))||t.splice(i,1);return t},ei=function(t){return t._gsap||tl(nn(t))[0]._gsap},el=function(t,e,n){return(n=t[e])&&qt(n)?t[e]():Qr(n)&&t.getAttribute&&t.getAttribute(e)||n},Ie=function(t,e){return(t=t.split(",")).forEach(e)||t},Yt=function(t){return Math.round(t*1e5)/1e5||0},pe=function(t){return Math.round(t*1e7)/1e7||0},Li=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},R0=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Jr=function(){var t=ti.length,e=ti.slice(0),n,i;for(Bo={},ti.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ih=function(t,e,n,i){ti.length&&!be&&Jr(),t.render(e,n,i||be&&e<0&&(t._initted||t._startAt)),ti.length&&!be&&Jr()},Oh=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Ch).length<2?e:ae(t)?t.trim():t},Nh=function(t){return t},rn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},L0=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Pi=function(t,e){for(var n in e)t[n]=e[n];return t},xh=function o(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Sn(e[n])?o(t[n]||(t[n]={}),e[n]):e[n]);return t},$r=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Xs=function(t){var e=t.parent||Wt,n=t.keyframes?L0(Me(t.keyframes)):rn;if(ke(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},D0=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Fh=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],r;if(s)for(r=e[s];a&&a[s]>r;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},ea=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},ni=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},Ai=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},I0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Vo=function(t,e,n,i){return t._startAt&&(be?t._startAt.revert(Wr):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},O0=function o(t){return!t||t._ts&&o(t.parent)},yh=function(t){return t._repeat?ds(t._tTime,t=t.duration()+t._rDelay)*t:0},ds=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Kr=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},na=function(t){return t._end=pe(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ut)||0))},ia=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=pe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),na(t),n._dirty||Ai(n,t)),t},zh=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=Kr(t.rawTime(),e),(!e._dur||$s(0,e.totalDuration(),n)-e._tTime>Ut)&&e.render(n,!0)),Ai(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ut}},wn=function(t,e,n,i){return e.parent&&ni(e),e._start=pe((kn(n)?n:n||t!==Wt?Qe(t,n,e):t._time)+e._delay),e._end=pe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Fh(t,e,"_first","_last",t._sort?"_start":0),Ho(e)||(t._recent=e),i||zh(t,e),t._ts<0&&ia(t,t._tTime),t},kh=function(t,e){return(Ze.ScrollTrigger||ta("scrollTrigger",e))&&Ze.ScrollTrigger.create(e,t)},Uh=function(t,e,n,i,s){if(al(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!be&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Dh!==ze.frame)return ti.push(t),t._lazy=[s,i],1},N0=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},Ho=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},F0=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&N0(t)&&!(!t._initted&&Ho(t))||(t._ts<0||t._dp._ts<0)&&!Ho(t))?0:1,r=t._rDelay,l=0,c,h,d;if(r&&t._repeat&&(l=$s(0,t._tDur,e),h=ds(l,r),t._yoyo&&h&1&&(a=1-a),h!==ds(t._tTime,r)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||be||i||t._zTime===Ut||!e&&t._zTime){if(!t._initted&&Uh(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Ut:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Vo(t,e,n,!0),t._onUpdate&&!n&&sn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&sn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&ni(t,1),!n&&!be&&(sn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},z0=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},ps=function(t,e,n,i){var s=t._repeat,a=pe(e)||0,r=t._tTime/t._tDur;return r&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:pe(a*(s+1)+t._rDelay*s):a,r>0&&!i&&ia(t,t._tTime=t._tDur*r),t.parent&&na(t),n||Ai(t.parent,t),t},vh=function(t){return t instanceof ve?Ai(t):ps(t,t._dur)},k0={_start:0,endTime:Zs,totalDuration:Zs},Qe=function o(t,e,n){var i=t.labels,s=t._recent||k0,a=t.duration()>=en?s.endTime(!1):t._dur,r,l,c;return ae(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",r=e.indexOf("="),l==="<"||l===">"?(r>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(r<0?s:n).totalDuration()/100:1)):r<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(r-1)+e.substr(r+1)),c&&n&&(l=l/100*(Me(n)?n[0]:n).totalDuration()),r>1?o(t,e.substr(0,r-1),n)+l:a+l)):e==null?a:+e},qs=function(t,e,n){var i=kn(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],r,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(r=a,l=n;l&&!("immediateRender"in r);)r=l.vars.defaults||{},l=ke(l.vars.inherit)&&l.parent;a.immediateRender=ke(r.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Qt(e[0],a,e[s+1])},ii=function(t,e){return t||t===0?e(t):e},$s=function(t,e,n){return n<t?t:n>e?e:n},me=function(t,e){return!ae(t)||!(e=A0.exec(t))?"":e[1]},U0=function(t,e,n){return ii(n,function(i){return $s(t,e,i)})},Go=[].slice,Bh=function(t,e){return t&&Sn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Sn(t[0]))&&!t.nodeType&&t!==tn},B0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return ae(i)&&!e||Bh(i,1)?(s=n).push.apply(s,nn(i)):n.push(i)})||n},nn=function(t,e,n){return te&&!e&&te.selector?te.selector(t):ae(t)&&!n&&(Uo||!ms())?Go.call((e||Ko).querySelectorAll(t),0):Me(t)?B0(t,n):Bh(t)?Go.call(t,0):t?[t]:[]},Wo=function(t){return t=nn(t)[0]||Zr("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return nn(e,n.querySelectorAll?n:n===t?Zr("Invalid scope")||Ko.createElement("div"):t)}},Vh=function(t){return t.sort(function(){return .5-Math.random()})},Hh=function(t){if(qt(t))return t;var e=Sn(t)?t:{each:t},n=Ci(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},r=i>0&&i<1,l=isNaN(i)||r,c=e.axis,h=i,d=i;return ae(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!r&&l&&(h=i[0],d=i[1]),function(u,m,_){var f=(_||e).length,p=a[f],y,v,g,M,b,E,C,x,w;if(!p){if(w=e.grid==="auto"?0:(e.grid||[1,en])[1],!w){for(C=-en;C<(C=_[w++].getBoundingClientRect().left)&&w<f;);w--}for(p=a[f]=[],y=l?Math.min(w,f)*h-.5:i%w,v=w===en?0:l?f*d/w-.5:i/w|0,C=0,x=en,E=0;E<f;E++)g=E%w-y,M=v-(E/w|0),p[E]=b=c?Math.abs(c==="y"?M:g):Th(g*g+M*M),b>C&&(C=b),b<x&&(x=b);i==="random"&&Vh(p),p.max=C-x,p.min=x,p.v=f=(parseFloat(e.amount)||parseFloat(e.each)*(w>f?f-1:c?c==="y"?f/w:w:Math.max(w,f/w))||0)*(i==="edges"?-1:1),p.b=f<0?s-f:s,p.u=me(e.amount||e.each)||0,n=n&&f<0?Jh(n):n}return f=(p[u]-p.min)/p.max||0,pe(p.b+(n?n(f):f)*p.v)+p.u}},Xo=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=pe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(kn(n)?0:me(n))}},Gh=function(t,e){var n=Me(t),i,s;return!n&&Sn(t)&&(i=n=t.radius||en,t.values?(t=nn(t.values),(s=!kn(t[0]))&&(i*=i)):t=Xo(t.increment)),ii(e,n?qt(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var r=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=en,h=0,d=t.length,u,m;d--;)s?(u=t[d].x-r,m=t[d].y-l,u=u*u+m*m):u=Math.abs(t[d]-r),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:a,s||h===a||kn(a)?h:h+me(a)}:Xo(t))},Wh=function(t,e,n,i){return ii(Me(t)?!e:n===!0?!!(n=0):!i,function(){return Me(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},V0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},H0=function(t,e){return function(n){return t(parseFloat(n))+(e||me(n))}},G0=function(t,e,n){return qh(t,e,0,1,n)},Xh=function(t,e,n){return ii(n,function(i){return t[~~e(i)]})},W0=function o(t,e,n){var i=e-t;return Me(t)?Xh(t,o(0,t.length),e):ii(n,function(s){return(i+(s-t)%i)%i+t})},X0=function o(t,e,n){var i=e-t,s=i*2;return Me(t)?Xh(t,o(0,t.length-1),e):ii(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},xs=function(t){for(var e=0,n="",i,s,a,r;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),r=t.charAt(i+7)==="[",s=t.substr(i+7,a-i-7).match(r?Ch:ko),n+=t.substr(e,i-e)+Wh(r?s:+s[0],r?0:+s[1],+s[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},qh=function(t,e,n,i,s){var a=e-t,r=i-n;return ii(s,function(l){return n+((l-t)/a*r||0)})},q0=function o(t,e,n,i){var s=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!s){var a=ae(t),r={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Me(t)&&!Me(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(o(t[c-1],t[c]));d--,s=function(_){_*=d;var f=Math.min(u,~~_);return h[f](_-f)},n=e}else i||(t=Pi(Me(t)?[]:{},t));if(!h){for(l in e)sl.call(r,t,l,"get",e[l]);s=function(_){return cl(_,r)||(a?t.p:t)}}}return ii(n,s)},bh=function(t,e,n){var i=t.labels,s=en,a,r,l;for(a in i)r=i[a]-e,r<0==!!n&&r&&s>(r=Math.abs(r))&&(l=a,s=r);return l},sn=function(t,e,n){var i=t.vars,s=i[e],a=te,r=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&ti.length&&Jr(),r&&(te=r),h=l?s.apply(c,l):s.call(c),te=a,h},Gs=function(t){return ni(t),t.scrollTrigger&&t.scrollTrigger.kill(!!be),t.progress()<1&&sn(t,"onInterrupt"),t},us,Y0=function(t){t=!t.name&&t.default||t;var e=t.name,n=qt(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Zs,render:cl,add:sl,kill:c_,modifier:l_,rawVars:0},a={targetTest:0,get:0,getSetter:sa,aliases:{},register:0};if(ms(),t!==i){if(Fe[e])return;rn(i,rn($r(t,s),a)),Pi(i.prototype,Pi(s,$r(t,a))),Fe[i.prop=e]=i,t.targetTest&&(Xr.push(i),jo[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Lh(e,i),t.register&&t.register(De,i,Oe)},kt=255,Ws={aqua:[0,kt,kt],lime:[0,kt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,kt],navy:[0,0,128],white:[kt,kt,kt],olive:[128,128,0],yellow:[kt,kt,0],orange:[kt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[kt,0,0],pink:[kt,192,203],cyan:[0,kt,kt],transparent:[kt,kt,kt,0]},Do=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*kt+.5|0},Yh=function(t,e,n){var i=t?kn(t)?[t>>16,t>>8&kt,t&kt]:0:Ws.black,s,a,r,l,c,h,d,u,m,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ws[t])i=Ws[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),r=t.charAt(3),t="#"+s+s+a+a+r+r+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&kt,i&kt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&kt,t&kt]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(ko),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=Do(l+1/3,s,a),i[1]=Do(l,s,a),i[2]=Do(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Jo),n&&i.length<4&&(i[3]=1),i}else i=t.match(ko)||Ws.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/kt,a=i[1]/kt,r=i[2]/kt,d=Math.max(s,a,r),u=Math.min(s,a,r),h=(d+u)/2,d===u?l=c=0:(m=d-u,c=h>.5?m/(2-d-u):m/(d+u),l=d===s?(a-r)/m+(a<r?6:0):d===a?(r-s)/m+2:(s-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Zh=function(t){var e=[],n=[],i=-1;return t.split(zn).forEach(function(s){var a=s.match(Ri)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Mh=function(t,e,n){var i="",s=(t+i).match(zn),a=e?"hsla(":"rgba(",r=0,l,c,h,d;if(!s)return t;if(s=s.map(function(u){return(u=Yh(u,e,1))&&a+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Zh(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(zn,"1").split(Ri),d=c.length-1;r<d;r++)i+=c[r]+(~l.indexOf(r)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(zn),d=c.length-1;r<d;r++)i+=c[r]+s[r];return i+c[d]},zn=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ws)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),Z0=/hsl[a]?\(/,nl=function(t){var e=t.join(" "),n;if(zn.lastIndex=0,zn.test(e))return n=Z0.test(e),t[1]=Mh(t[1],n),t[0]=Mh(t[0],n,Zh(t[1])),!0},Js,ze=function(){var o=Date.now,t=500,e=33,n=o(),i=n,s=1e3/240,a=s,r=[],l,c,h,d,u,m,_=function f(p){var y=o()-i,v=p===!0,g,M,b,E;if(y>t&&(n+=y-e),i+=y,b=i-n,g=b-a,(g>0||v)&&(E=++d.frame,u=b-d.time*1e3,d.time=b=b/1e3,a+=g+(g>=s?4:s-g),M=1),v||(l=c(f)),M)for(m=0;m<r.length;m++)r[m](b,u,E,p)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){Ph&&(!Uo&&Eh()&&(tn=Uo=window,Ko=tn.document||{},Ze.gsap=De,(tn.gsapVersions||(tn.gsapVersions=[])).push(De.version),Rh(Yr||tn.GreenSockGlobals||!tn.gsap&&tn||{}),h=tn.requestAnimationFrame),l&&d.sleep(),c=h||function(p){return setTimeout(p,a-d.time*1e3+1|0)},Js=1,_(2))},sleep:function(){(h?tn.cancelAnimationFrame:clearTimeout)(l),Js=0,c=Zs},lagSmoothing:function(p,y){t=p||1/0,e=Math.min(y||33,t)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,y,v){var g=y?function(M,b,E,C){p(M,b,E,C),d.remove(g)}:p;return d.remove(p),r[v?"unshift":"push"](g),ms(),g},remove:function(p,y){~(y=r.indexOf(p))&&r.splice(y,1)&&m>=y&&m--},_listeners:r},d}(),ms=function(){return!Js&&ze.wake()},Ct={},J0=/^[\d.\-M][\d.\-,\s]/,$0=/["']/g,K0=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,r,l,c;s<a;s++)l=n[s],r=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,r),e[i]=isNaN(c)?c.replace($0,"").trim():+c,i=l.substr(r+1).trim();return e},j0=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Q0=function(t){var e=(t+"").split("("),n=Ct[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[K0(e[1])]:j0(t).split(",").map(Oh)):Ct._CE&&J0.test(t)?Ct._CE("",t):n},Jh=function(t){return function(e){return 1-t(1-e)}},$h=function o(t,e){for(var n=t._first,i;n;)n instanceof ve?o(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?o(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Ci=function(t,e){return t&&(qt(t)?t:Ct[t]||Q0(t))||e},Di=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Ie(t,function(r){Ct[r]=Ze[r]=s,Ct[a=r.toLowerCase()]=n;for(var l in s)Ct[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ct[r+"."+l]=s[l]}),s},Kh=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Io=function o(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/zo*(Math.asin(1/i)||0),r=function(h){return h===1?1:i*Math.pow(2,-10*h)*E0((h-a)*s)+1},l=t==="out"?r:t==="in"?function(c){return 1-r(1-c)}:Kh(r);return s=zo/s,l.config=function(c,h){return o(t,c,h)},l},Oo=function o(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Kh(n);return i.config=function(s){return o(t,s)},i};Ie("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;Di(o+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Ct.Linear.easeNone=Ct.none=Ct.Linear.easeIn;Di("Elastic",Io("in"),Io("out"),Io());(function(o,t){var e=1/t,n=2*e,i=2.5*e,s=function(r){return r<e?o*r*r:r<n?o*Math.pow(r-1.5/t,2)+.75:r<i?o*(r-=2.25/t)*r+.9375:o*Math.pow(r-2.625/t,2)+.984375};Di("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Di("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});Di("Circ",function(o){return-(Th(1-o*o)-1)});Di("Sine",function(o){return o===1?1:-T0(o*w0)+1});Di("Back",Oo("in"),Oo("out"),Oo());Ct.SteppedEase=Ct.steps=Ze.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-Ut;return function(r){return((i*$s(0,a,r)|0)+s)*n}}};fs.ease=Ct["quad.out"];Ie("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Qo+=o+","+o+"Params,"});var il=function(t,e){this.id=S0++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:el,this.set=e?e.getSetter:sa},gs=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ps(this,+e.duration,1,1),this.data=e.data,te&&(this._ctx=te,te.data.push(this)),Js||ze.wake()}var t=o.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ps(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ms(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ia(this,n),!s._dp||s.parent||zh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&wn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ut||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ih(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+yh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+yh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ds(this._tTime,s)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Ut?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Kr(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ut?0:this._rts,this.totalTime($s(-this._delay,this._tDur,i),!0),na(this),I0(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ms(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ut&&(this._tTime-=Ut)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&wn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ke(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Kr(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=P0);var i=be;return be=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),be=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,vh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,vh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Qe(this,n),ke(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ke(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ut:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ut,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ut)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(s){var a=qt(n)?n:Nh,r=function(){var c=i.then;i.then=null,qt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?r():i._prom=r})},t.kill=function(){Gs(this)},o}();rn(gs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ut,_prom:0,_ps:!1,_rts:1});var ve=function(o){Sh(t,o);function t(n,i){var s;return n===void 0&&(n={}),s=o.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ke(n.sortChildren),Wt&&wn(n.parent||Wt,Fn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&kh(Fn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return qs(0,arguments,this),this},e.from=function(i,s,a){return qs(1,arguments,this),this},e.fromTo=function(i,s,a,r){return qs(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Xs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Qt(i,s,Qe(this,a),1),this},e.call=function(i,s,a){return wn(this,Qt.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,r,l,c,h){return a.duration=s,a.stagger=a.stagger||r,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Qt(i,a,Qe(this,l)),this},e.staggerFrom=function(i,s,a,r,l,c,h){return a.runBackwards=1,Xs(a).immediateRender=ke(a.immediateRender),this.staggerTo(i,s,a,r,l,c,h)},e.staggerFromTo=function(i,s,a,r,l,c,h,d){return r.startAt=a,Xs(r).immediateRender=ke(r.immediateRender),this.staggerTo(i,s,r,l,c,h,d)},e.render=function(i,s,a){var r=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:pe(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,m,_,f,p,y,v,g,M,b,E,C;if(this!==Wt&&h>l&&i>=0&&(h=l),h!==this._tTime||a||d){if(r!==this._time&&c&&(h+=this._time-r,i+=this._time-r),u=h,M=this._start,g=this._ts,y=!g,d&&(c||(r=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(u=pe(h%p),h===l?(f=this._repeat,u=c):(f=~~(h/p),f&&f===h/p&&(u=c,f--),u>c&&(u=c)),b=ds(this._tTime,p),!r&&this._tTime&&b!==f&&(b=f),E&&f&1&&(u=c-u,C=1),f!==b&&!this._lock){var x=E&&b&1,w=x===(E&&f&1);if(f<b&&(x=!x),r=x?0:c,this._lock=1,this.render(r||(C?0:pe(f*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&sn(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),r&&r!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,r=x?c:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!y)return this;$h(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=z0(this,pe(r),pe(u)),v&&(h-=u-(u=v._start))),this._tTime=h,this._time=u,this._act=!g,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,r=0),!r&&u&&!s&&(sn(this,"onStart"),this._tTime!==h))return this;if(u>=r&&i>=0)for(m=this._first;m;){if(_=m._next,(m._act||u>=m._start)&&m._ts&&v!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(u-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(u-m._start)*m._ts,s,a),u!==this._time||!this._ts&&!y){v=0,_&&(h+=this._zTime=-Ut);break}}m=_}else{m=this._last;for(var R=i<0?i:u;m;){if(_=m._prev,(m._act||R<=m._end)&&m._ts&&v!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(R-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(R-m._start)*m._ts,s,a||be&&(m._initted||m._startAt)),u!==this._time||!this._ts&&!y){v=0,_&&(h+=this._zTime=R?-Ut:Ut);break}}m=_}}if(v&&!s&&(this.pause(),v.render(u>=r?0:-Ut)._zTime=u>=r?1:-1,this._ts))return this._start=M,na(this),this.render(i,s,a);this._onUpdate&&!s&&sn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&r)&&(M===this._start||Math.abs(g)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&ni(this,1),!s&&!(i<0&&!r)&&(h||r||!l)&&(sn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(kn(s)||(s=Qe(this,s,i)),!(i instanceof gs)){if(Me(i))return i.forEach(function(r){return a.add(r,s)}),this;if(ae(i))return this.addLabel(i,s);if(qt(i))i=Qt.delayedCall(0,i);else return this}return this!==i?wn(this,i,s):this},e.getChildren=function(i,s,a,r){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),r===void 0&&(r=-en);for(var l=[],c=this._first;c;)c._start>=r&&(c instanceof Qt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return ae(i)?this.removeLabel(i):qt(i)?this.killTweensOf(i):(ea(this,i),i===this._recent&&(this._recent=this._last),Ai(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=pe(ze.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Qe(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var r=Qt.delayedCall(0,s||Zs,a);return r.data="isPause",this._hasPause=1,wn(this,r,Qe(this,i))},e.removePause=function(i){var s=this._first;for(i=Qe(this,i);s;)s._start===i&&s.data==="isPause"&&ni(s),s=s._next},e.killTweensOf=function(i,s,a){for(var r=this.getTweensOf(i,a),l=r.length;l--;)Qn!==r[l]&&r[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],r=nn(i),l=this._first,c=kn(s),h;l;)l instanceof Qt?R0(l._targets,r)&&(c?(!Qn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(r,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,r=Qe(a,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,m,_=Qt.to(a,rn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:r,overwrite:"auto",duration:s.duration||Math.abs((r-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ut,onStart:function(){if(a.pause(),!m){var p=s.duration||Math.abs((r-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&ps(_,p,0,1).render(_._time,!0,!0),m=1}h&&h.apply(_,d||[])}},s));return u?_.render(0):_},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,rn({startAt:{time:Qe(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),bh(this,Qe(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),bh(this,Qe(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ut)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var r=this._first,l=this.labels,c;r;)r._start>=a&&(r._start+=i,r._end+=i),r=r._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Ai(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return o.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ai(this)},e.totalDuration=function(i){var s=0,a=this,r=a._last,l=en,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;r;)c=r._prev,r._dirty&&r.totalDuration(),h=r._start,h>l&&a._sort&&r._ts&&!a._lock?(a._lock=1,wn(a,r,h-r._delay,1)._lock=0):l=h,h<0&&r._ts&&(s-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),r._end>s&&r._ts&&(s=r._end),r=c;ps(a,a===Wt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Wt._ts&&(Ih(Wt,Kr(i,Wt)),Dh=ze.frame),ze.frame>=_h){_h+=Ue.autoSleep||120;var s=Wt._first;if((!s||!s._ts)&&Ue.autoSleep&&ze._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ze.sleep()}}},t}(gs);rn(ve.prototype,{_lock:0,_hasPause:0,_forcing:0});var t_=function(t,e,n,i,s,a,r){var l=new Oe(this._pt,t,e,0,1,ll,null,s),c=0,h=0,d,u,m,_,f,p,y,v;for(l.b=n,l.e=i,n+="",i+="",(y=~i.indexOf("random("))&&(i=xs(i)),a&&(v=[n,i],a(v,t,e),n=v[0],i=v[1]),u=n.match(Ro)||[];d=Ro.exec(i);)_=d[0],f=i.substring(c,d.index),m?m=(m+1)%5:f.substr(-5)==="rgba("&&(m=1),_!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:f||h===1?f:",",s:p,c:_.charAt(1)==="="?Li(p,_)-p:parseFloat(_)-p,m:m&&m<4?Math.round:0},c=Ro.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=r,($o.test(i)||y)&&(l.e=0),this._pt=l,l},sl=function(t,e,n,i,s,a,r,l,c,h){qt(i)&&(i=i(s||0,t,a));var d=t[e],u=n!=="get"?n:qt(d)?c?t[e.indexOf("set")||!qt(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,m=qt(d)?c?r_:tu:ol,_;if(ae(i)&&(~i.indexOf("random(")&&(i=xs(i)),i.charAt(1)==="="&&(_=Li(u,i)+(me(u)||0),(_||_===0)&&(i=_))),!h||u!==i||qo)return!isNaN(u*i)&&i!==""?(_=new Oe(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?o_:eu,0,m),c&&(_.fp=c),r&&_.modifier(r,this,t),this._pt=_):(!d&&!(e in t)&&ta(e,i),t_.call(this,t,e,u,i,m,l||Ue.stringFilter,c))},e_=function(t,e,n,i,s){if(qt(t)&&(t=Ys(t,s,e,n,i)),!Sn(t)||t.style&&t.nodeType||Me(t)||Ah(t))return ae(t)?Ys(t,s,e,n,i):t;var a={},r;for(r in t)a[r]=Ys(t[r],s,e,n,i);return a},rl=function(t,e,n,i,s,a){var r,l,c,h;if(Fe[t]&&(r=new Fe[t]).init(s,r.rawVars?e[t]:e_(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Oe(n._pt,s,t,0,1,r.render,r,0,r.priority),n!==us))for(c=n._ptLookup[n._targets.indexOf(s)],h=r._props.length;h--;)c[r._props[h]]=l;return r},Qn,qo,al=function o(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,r=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.onUpdateParams,d=i.callbackScope,u=i.runBackwards,m=i.yoyoEase,_=i.keyframes,f=i.autoRevert,p=t._dur,y=t._startAt,v=t._targets,g=t.parent,M=g&&g.data==="nested"?g.vars.targets:v,b=t._overwrite==="auto"&&!Zo,E=t.timeline,C,x,w,R,U,q,O,D,B,Z,J,H,$;if(E&&(!_||!s)&&(s="none"),t._ease=Ci(s,fs.ease),t._yEase=m?Jh(Ci(m===!0?s:m,fs.ease)):0,m&&t._yoyo&&!t._repeat&&(m=t._yEase,t._yEase=t._ease,t._ease=m),t._from=!E&&!!i.runBackwards,!E||_&&!i.stagger){if(D=v[0]?ei(v[0]).harness:0,H=D&&i[D.prop],C=$r(i,jo),y&&(y._zTime<0&&y.progress(1),e<0&&u&&r&&!f?y.render(-1,!0):y.revert(u&&p?Wr:C0),y._lazy=0),a){if(ni(t._startAt=Qt.set(v,rn({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!y&&ke(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:h,callbackScope:d,stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(be||!r&&!f)&&t._startAt.revert(Wr),r&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&p&&!y){if(e&&(r=!1),w=rn({overwrite:!1,data:"isFromStart",lazy:r&&!y&&ke(l),immediateRender:r,stagger:0,parent:g},C),H&&(w[D.prop]=H),ni(t._startAt=Qt.set(v,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(be?t._startAt.revert(Wr):t._startAt.render(-1,!0)),t._zTime=e,!r)o(t._startAt,Ut,Ut);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&ke(l)||l&&!p,x=0;x<v.length;x++){if(U=v[x],O=U._gsap||tl(v)[x]._gsap,t._ptLookup[x]=Z={},Bo[O.id]&&ti.length&&Jr(),J=M===v?x:M.indexOf(U),D&&(B=new D).init(U,H||C,t,J,M)!==!1&&(t._pt=R=new Oe(t._pt,U,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(K){Z[K]=R}),B.priority&&(q=1)),!D||H)for(w in C)Fe[w]&&(B=rl(w,C,t,J,U,M))?B.priority&&(q=1):Z[w]=R=sl.call(t,U,w,"get",C[w],J,M,0,i.stringFilter);t._op&&t._op[x]&&t.kill(U,t._op[x]),b&&t._pt&&(Qn=t,Wt.killTweensOf(U,Z,t.globalTime(e)),$=!t.parent,Qn=0),t._pt&&l&&(Bo[O.id]=1)}q&&hl(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!$,_&&e<=0&&E.render(en,!0,!0)},n_=function(t,e,n,i,s,a,r){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,h,d,u;if(!l)for(l=t._ptCache[e]=[],d=t._ptLookup,u=t._targets.length;u--;){if(c=d[u][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return qo=1,t.vars[e]="+=0",al(t,r),qo=0,1;l.push(c)}for(u=l.length;u--;)h=l[u],c=h._pt||h,c.s=(i||i===0)&&!s?i:c.s+(i||0)+a*c.c,c.c=n-c.s,h.e&&(h.e=Yt(n)+me(h.e)),h.b&&(h.b=c.s+me(h.b))},i_=function(t,e){var n=t[0]?ei(t[0]).harness:0,i=n&&n.aliases,s,a,r,l;if(!i)return e;s=Pi({},e);for(a in i)if(a in s)for(l=i[a].split(","),r=l.length;r--;)s[l[r]]=s[a];return s},s_=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,r;if(Me(e))r=n[t]||(n[t]=[]),e.forEach(function(l,c){return r.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)r=n[a]||(n[a]=[]),a==="ease"||r.push({t:parseFloat(t),v:e[a],e:s})},Ys=function(t,e,n,i,s){return qt(t)?t.call(e,n,i,s):ae(t)&&~t.indexOf("random(")?xs(t):t},jh=Qo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Qh={};Ie(jh+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Qh[o]=1});var Qt=function(o){Sh(t,o);function t(n,i,s,a){var r;typeof i=="number"&&(s.duration=i,i=s,s=null),r=o.call(this,a?i:Xs(i))||this;var l=r.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,m=l.overwrite,_=l.keyframes,f=l.defaults,p=l.scrollTrigger,y=l.yoyoEase,v=i.parent||Wt,g=(Me(n)||Ah(n)?kn(n[0]):"length"in i)?[n]:nn(n),M,b,E,C,x,w,R,U;if(r._targets=g.length?tl(g):Zr("GSAP target "+n+" not found. https://greensock.com",!Ue.nullTargetWarn)||[],r._ptLookup=[],r._overwrite=m,_||u||Gr(c)||Gr(h)){if(i=r.vars,M=r.timeline=new ve({data:"nested",defaults:f||{},targets:v&&v.data==="nested"?v.vars.targets:g}),M.kill(),M.parent=M._dp=Fn(r),M._start=0,u||Gr(c)||Gr(h)){if(C=g.length,R=u&&Hh(u),Sn(u))for(x in u)~jh.indexOf(x)&&(U||(U={}),U[x]=u[x]);for(b=0;b<C;b++)E=$r(i,Qh),E.stagger=0,y&&(E.yoyoEase=y),U&&Pi(E,U),w=g[b],E.duration=+Ys(c,Fn(r),b,w,g),E.delay=(+Ys(h,Fn(r),b,w,g)||0)-r._delay,!u&&C===1&&E.delay&&(r._delay=h=E.delay,r._start+=h,E.delay=0),M.to(w,E,R?R(b,w,g):0),M._ease=Ct.none;M.duration()?c=h=0:r.timeline=0}else if(_){Xs(rn(M.vars.defaults,{ease:"none"})),M._ease=Ci(_.ease||i.ease||"none");var q=0,O,D,B;if(Me(_))_.forEach(function(Z){return M.to(g,Z,">")}),M.duration();else{E={};for(x in _)x==="ease"||x==="easeEach"||s_(x,_[x],E,_.easeEach);for(x in E)for(O=E[x].sort(function(Z,J){return Z.t-J.t}),q=0,b=0;b<O.length;b++)D=O[b],B={ease:D.e,duration:(D.t-(b?O[b-1].t:0))/100*c},B[x]=D.v,M.to(g,B,q),q+=B.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||r.duration(c=M.duration())}else r.timeline=0;return m===!0&&!Zo&&(Qn=Fn(r),Wt.killTweensOf(g),Qn=0),wn(v,Fn(r),s),i.reversed&&r.reverse(),i.paused&&r.paused(!0),(d||!c&&!_&&r._start===pe(v._time)&&ke(d)&&O0(Fn(r))&&v.data!=="nested")&&(r._tTime=-Ut,r.render(Math.max(0,-h)||0)),p&&kh(Fn(r),p),r}var e=t.prototype;return e.render=function(i,s,a){var r=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Ut&&!h?l:i<Ut?0:i,u,m,_,f,p,y,v,g,M;if(!c)F0(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(u=d,g=this.timeline,this._repeat){if(f=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(f*100+i,s,a);if(u=pe(d%f),d===l?(_=this._repeat,u=c):(_=~~(d/f),_&&_===d/f&&(u=c,_--),u>c&&(u=c)),y=this._yoyo&&_&1,y&&(M=this._yEase,u=c-u),p=ds(this._tTime,f),u===r&&!a&&this._initted)return this._tTime=d,this;_!==p&&(g&&this._yEase&&$h(g,y),this.vars.repeatRefresh&&!y&&!this._lock&&(this._lock=a=1,this.render(pe(f*_),!0).invalidate()._lock=0))}if(!this._initted){if(Uh(this,h?i:u,a,s,d))return this._tTime=0,this;if(r!==this._time)return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(M||this._ease)(u/c),this._from&&(this.ratio=v=1-v),u&&!r&&!s&&(sn(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(v,m.d),m=m._next;g&&g.render(i<0?i:!u&&y?-Ut:g._dur*g._ease(u/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Vo(this,i,s,a),sn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&sn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Vo(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&ni(this,1),!s&&!(h&&!r)&&(d||r||y)&&(sn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,r){Js||ze.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||al(this,l),c=this._ease(l/this._dur),n_(this,i,s,a,r,c,l)?this.resetTo(i,s,a,r):(ia(this,0),this.parent||Fh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Gs(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Qn&&Qn.vars.overwrite!==!0)._first||Gs(this),this.parent&&a!==this.timeline.totalDuration()&&ps(this,this._dur*this.timeline._tDur/a,0,1),this}var r=this._targets,l=i?nn(i):r,c=this._ptLookup,h=this._pt,d,u,m,_,f,p,y;if((!s||s==="all")&&D0(r,l))return s==="all"&&(this._pt=0),Gs(this);for(d=this._op=this._op||[],s!=="all"&&(ae(s)&&(f={},Ie(s,function(v){return f[v]=1}),s=f),s=i_(r,s)),y=r.length;y--;)if(~l.indexOf(r[y])){u=c[y],s==="all"?(d[y]=s,_=u,m={}):(m=d[y]=d[y]||{},_=s);for(f in _)p=u&&u[f],p&&((!("kill"in p.d)||p.d.kill(f)===!0)&&ea(this,p,"_pt"),delete u[f]),m!=="all"&&(m[f]=1)}return this._initted&&!this._pt&&h&&Gs(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return qs(1,arguments)},t.delayedCall=function(i,s,a,r){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:r})},t.fromTo=function(i,s,a){return qs(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Wt.killTweensOf(i,s,a)},t}(gs);rn(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ie("staggerTo,staggerFrom,staggerFromTo",function(o){Qt[o]=function(){var t=new ve,e=Go.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var ol=function(t,e,n){return t[e]=n},tu=function(t,e,n){return t[e](n)},r_=function(t,e,n,i){return t[e](i.fp,n)},a_=function(t,e,n){return t.setAttribute(e,n)},sa=function(t,e){return qt(t[e])?tu:Qr(t[e])&&t.setAttribute?a_:ol},eu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},o_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},ll=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},cl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},l_=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},c_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ea(this,e,"_pt"):e.dep||(n=1),e=i;return!n},h_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},hl=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Oe=function(){function o(e,n,i,s,a,r,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=r||eu,this.d=l||this,this.set=c||ol,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=h_,this.m=n,this.mt=s,this.tween=i},o}();Ie(Qo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return jo[o]=1});Ze.TweenMax=Ze.TweenLite=Qt;Ze.TimelineLite=Ze.TimelineMax=ve;Wt=new ve({sortChildren:!1,defaults:fs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ue.stringFilter=nl;var _s=[],qr={},u_=[],wh=0,No=function(t){return(qr[t]||u_).map(function(e){return e()})},Yo=function(){var t=Date.now(),e=[];t-wh>2&&(No("matchMediaInit"),_s.forEach(function(n){var i=n.queries,s=n.conditions,a,r,l,c;for(r in i)a=tn.matchMedia(i[r]).matches,a&&(l=1),a!==s[r]&&(s[r]=a,c=1);c&&(n.revert(),l&&e.push(n))}),No("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),wh=t,No("matchMedia"))},nu=function(){function o(e,n){this.selector=n&&Wo(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=o.prototype;return t.add=function(n,i,s){qt(n)&&(s=i,i=n,n=qt);var a=this,r=function(){var c=te,h=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Wo(s)),te=a,d=i.apply(a,arguments),qt(d)&&a._r.push(d),te=c,a.selector=h,a.isReverted=!1,d};return a.last=r,n===qt?r(a):n?a[n]=r:r},t.ignore=function(n){var i=te;te=null,n(this),te=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof Qt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof gs)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var r=_s.indexOf(this);~r&&_s.splice(r,1)}},t.revert=function(n){this.kill(n||{})},o}(),f_=function(){function o(e){this.contexts=[],this.scope=e}var t=o.prototype;return t.add=function(n,i,s){Sn(n)||(n={matches:n});var a=new nu(0,s||this.scope),r=a.conditions={},l,c,h;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=tn.matchMedia(n[c]),l&&(_s.indexOf(a)<0&&_s.push(a),(r[c]=l.matches)&&(h=1),l.addListener?l.addListener(Yo):l.addEventListener("change",Yo)));return h&&i(a),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),jr={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Y0(i)})},timeline:function(t){return new ve(t)},getTweensOf:function(t,e){return Wt.getTweensOf(t,e)},getProperty:function(t,e,n,i){ae(t)&&(t=nn(t)[0]);var s=ei(t||{}).get,a=n?Nh:Oh;return n==="native"&&(n=""),t&&(e?a((Fe[e]&&Fe[e].get||s)(t,e,n,i)):function(r,l,c){return a((Fe[r]&&Fe[r].get||s)(t,r,l,c))})},quickSetter:function(t,e,n){if(t=nn(t),t.length>1){var i=t.map(function(h){return De.quickSetter(h,e,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}t=t[0]||{};var a=Fe[e],r=ei(t),l=r.harness&&(r.harness.aliases||{})[e]||e,c=a?function(h){var d=new a;us._pt=0,d.init(t,n?h+n:h,us,0,[t]),d.render(1,d),us._pt&&cl(1,us)}:r.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,r,1)}},quickTo:function(t,e,n){var i,s=De.to(t,Pi((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return Wt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ci(t.ease,fs.ease)),xh(fs,t||{})},config:function(t){return xh(Ue,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(r){return r&&!Fe[r]&&!Ze[r]&&Zr(e+" effect requires "+r+" plugin.")}),Lo[e]=function(r,l,c){return n(nn(r),rn(l||{},s),c)},a&&(ve.prototype[e]=function(r,l,c){return this.add(Lo[e](r,Sn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Ct[t]=Ci(e)},parseEase:function(t,e){return arguments.length?Ci(t,e):Ct},getById:function(t){return Wt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new ve(t),i,s;for(n.smoothChildTiming=ke(t.smoothChildTiming),Wt.remove(n),n._dp=0,n._time=n._tTime=Wt._time,i=Wt._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Qt&&i.vars.onComplete===i._targets[0]))&&wn(n,i,i._start-i._delay),i=s;return wn(Wt,n,0),n},context:function(t,e){return t?new nu(t,e):te},matchMedia:function(t){return new f_(t)},matchMediaRefresh:function(){return _s.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Yo()},addEventListener:function(t,e){var n=qr[t]||(qr[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=qr[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:W0,wrapYoyo:X0,distribute:Hh,random:Wh,snap:Gh,normalize:G0,getUnit:me,clamp:U0,splitColor:Yh,toArray:nn,selector:Wo,mapRange:qh,pipe:V0,unitize:H0,interpolate:q0,shuffle:Vh},install:Rh,effects:Lo,ticker:ze,updateRoot:ve.updateRoot,plugins:Fe,globalTimeline:Wt,core:{PropTween:Oe,globals:Lh,Tween:Qt,Timeline:ve,Animation:gs,getCache:ei,_removeLinkedListItem:ea,reverting:function(){return be},context:function(t){return t&&te&&(te.data.push(t),t._ctx=te),te},suppressOverwrites:function(t){return Zo=t}}};Ie("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return jr[o]=Qt[o]});ze.add(ve.updateRoot);us=jr.to({},{duration:0});var d_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},p_=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=d_(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Fo=function(t,e){return{name:t,rawVars:1,init:function(i,s,a){a._onInit=function(r){var l,c;if(ae(s)&&(l={},Ie(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}p_(r,s)}}}},De=jr.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,r,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",r=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),r.op=a,r.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)be?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Fo("roundProps",Xo),Fo("modifiers"),Fo("snap",Gh))||jr;Qt.version=ve.version=De.version="3.11.4";Ph=1;Eh()&&ms();var m_=Ct.Power0,g_=Ct.Power1,__=Ct.Power2,x_=Ct.Power3,y_=Ct.Power4,v_=Ct.Linear,b_=Ct.Quad,M_=Ct.Cubic,w_=Ct.Quart,S_=Ct.Quint,T_=Ct.Strong,E_=Ct.Elastic,A_=Ct.Back,C_=Ct.SteppedEase,P_=Ct.Bounce,R_=Ct.Sine,L_=Ct.Expo,D_=Ct.Circ;var iu,si,vs,_l,Fi,I_,su,xl,O_=function(){return typeof window!="undefined"},Vn={},Ni=180/Math.PI,bs=Math.PI/180,ys=Math.atan2,ru=1e8,yl=/([A-Z])/g,N_=/(left|right|width|margin|padding|x)/i,F_=/[\s,\(]\S/,Bn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},dl=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},z_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},k_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},U_=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},fu=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},du=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},B_=function(t,e,n){return t.style[e]=n},V_=function(t,e,n){return t.style.setProperty(e,n)},H_=function(t,e,n){return t._gsap[e]=n},G_=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},W_=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},X_=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Xt="transform",mn=Xt+"Origin",q_=function(t,e){var n=this,i=this.target,s=i.style;if(t in Vn){if(this.tfm=this.tfm||{},t!=="transform"&&(t=Bn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Un(i,a)}):this.tfm[t]=i._gsap.x?i._gsap[t]:Un(i,t)),this.props.indexOf(Xt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(mn,e,"")),t=Xt}(s||e)&&this.props.push(t,e,s[t])},pu=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Y_=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].replace(yl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=xl(),s&&!s.isStart&&!n[Xt]&&(pu(n),i.uncache=1)}},mu=function(t,e){var n={target:t,props:[],revert:Y_,save:q_};return e&&e.split(",").forEach(function(i){return n.save(i)}),n},gu,pl=function(t,e){var n=si.createElementNS?si.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):si.createElement(t);return n.style?n:si.createElement(t)},Tn=function o(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(yl,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&o(t,Ms(e)||e,1)||""},au="O,Moz,ms,Ms,Webkit".split(","),Ms=function(t,e,n){var i=e||Fi,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(au[a]+t in s););return a<0?null:(a===3?"ms":a>=0?au[a]:"")+t},ml=function(){O_()&&window.document&&(iu=window,si=iu.document,vs=si.documentElement,Fi=pl("div")||{style:{}},I_=pl("div"),Xt=Ms(Xt),mn=Xt+"Origin",Fi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",gu=!!Ms("perspective"),xl=De.core.reverting,_l=1)},ul=function o(t){var e=pl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(vs.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),vs.removeChild(e),this.style.cssText=s,a},ou=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},_u=function(t){var e;try{e=t.getBBox()}catch{e=ul.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===ul||(e=ul.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+ou(t,["x","cx","x1"])||0,y:+ou(t,["y","cy","y1"])||0,width:0,height:0}:e},xu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&_u(t))},js=function(t,e){if(e){var n=t.style;e in Vn&&e!==mn&&(e=Xt),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(yl,"-$1").toLowerCase())):n.removeAttribute(e)}},ri=function(t,e,n,i,s,a){var r=new Oe(t._pt,e,n,0,1,a?du:fu);return t._pt=r,r.b=i,r.e=s,t._props.push(n),r},lu={deg:1,rad:1,turn:1},Z_={grid:1,flex:1},ai=function o(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",r=Fi.style,l=N_.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",m=i==="%",_,f,p,y;return i===a||!s||lu[i]||lu[a]?s:(a!=="px"&&!u&&(s=o(t,e,n,"px")),y=t.getCTM&&xu(t),(m||a==="%")&&(Vn[e]||~e.indexOf("adius"))?(_=y?t.getBBox()[l?"width":"height"]:t[h],Yt(m?s/_*d:s/100*_)):(r[l?"width":"height"]=d+(u?a:i),f=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,y&&(f=(t.ownerSVGElement||{}).parentNode),(!f||f===si||!f.appendChild)&&(f=si.body),p=f._gsap,p&&m&&p.width&&l&&p.time===ze.time&&!p.uncache?Yt(s/p.width*d):((m||a==="%")&&!Z_[Tn(f,"display")]&&(r.position=Tn(t,"position")),f===t&&(r.position="static"),f.appendChild(Fi),_=Fi[h],f.removeChild(Fi),r.position="absolute",l&&m&&(p=ei(f),p.time=ze.time,p.width=f[h]),Yt(u?_*s/d:_&&s?d/_*s:0))))},Un=function(t,e,n,i){var s;return _l||ml(),e in Bn&&e!=="transform"&&(e=Bn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Vn[e]&&e!=="transform"?(s=tr(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:aa(Tn(t,mn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ra[e]&&ra[e](t,e,n)||Tn(t,e)||el(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ai(t,e,s,n)+n:s},J_=function(t,e,n,i){if(!n||n==="none"){var s=Ms(e,t,1),a=s&&Tn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=Tn(t,"borderTopColor"))}var r=new Oe(this._pt,t.style,e,0,1,ll),l=0,c=0,h,d,u,m,_,f,p,y,v,g,M,b;if(r.b=n,r.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=Tn(t,e)||i,t.style[e]=n),h=[n,i],nl(h),n=h[0],i=h[1],u=n.match(Ri)||[],b=i.match(Ri)||[],b.length){for(;d=Ri.exec(i);)p=d[0],v=i.substring(l,d.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),p!==(f=u[c++]||"")&&(m=parseFloat(f)||0,M=f.substr((m+"").length),p.charAt(1)==="="&&(p=Li(m,p)+M),y=parseFloat(p),g=p.substr((y+"").length),l=Ri.lastIndex-g.length,g||(g=g||Ue.units[e]||M,l===i.length&&(i+=g,r.e+=g)),M!==g&&(m=ai(t,e,f,g)||0),r._pt={_next:r._pt,p:v||c===1?v:",",s:m,c:y-m,m:_&&_<4||e==="zIndex"?Math.round:0});r.c=l<i.length?i.substring(l,i.length):""}else r.r=e==="display"&&i==="none"?du:fu;return $o.test(i)&&(r.e=0),this._pt=r,r},cu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},$_=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=cu[n]||n,e[1]=cu[i]||i,e.join(" ")},K_=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,r,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)r=s[c],Vn[r]&&(l=1,r=r==="transformOrigin"?mn:Xt),js(n,r);l&&(js(n,Xt),a&&(a.svg&&n.removeAttribute("transform"),tr(n,1),a.uncache=1,pu(i)))}},ra={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new Oe(t._pt,e,n,0,0,K_);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},Qs=[1,0,0,1,0,0],yu={},vu=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},hu=function(t){var e=Tn(t,Xt);return vu(e)?Qs:e.substr(7).match(Jo).map(Yt)},vl=function(t,e){var n=t._gsap||ei(t),i=t.style,s=hu(t),a,r,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Qs:s):(s===Qs&&!t.offsetParent&&t!==vs&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,r=t.nextElementSibling,vs.appendChild(t)),s=hu(t),l?i.display=l:js(t,"display"),c&&(r?a.insertBefore(t,r):a?a.appendChild(t):vs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},gl=function(t,e,n,i,s,a){var r=t._gsap,l=s||vl(t,!0),c=r.xOrigin||0,h=r.yOrigin||0,d=r.xOffset||0,u=r.yOffset||0,m=l[0],_=l[1],f=l[2],p=l[3],y=l[4],v=l[5],g=e.split(" "),M=parseFloat(g[0])||0,b=parseFloat(g[1])||0,E,C,x,w;n?l!==Qs&&(C=m*p-_*f)&&(x=M*(p/C)+b*(-f/C)+(f*v-p*y)/C,w=M*(-_/C)+b*(m/C)-(m*v-_*y)/C,M=x,b=w):(E=_u(t),M=E.x+(~g[0].indexOf("%")?M/100*E.width:M),b=E.y+(~(g[1]||g[0]).indexOf("%")?b/100*E.height:b)),i||i!==!1&&r.smooth?(y=M-c,v=b-h,r.xOffset=d+(y*m+v*f)-y,r.yOffset=u+(y*_+v*p)-v):r.xOffset=r.yOffset=0,r.xOrigin=M,r.yOrigin=b,r.smooth=!!i,r.origin=e,r.originIsAbsolute=!!n,t.style[mn]="0px 0px",a&&(ri(a,r,"xOrigin",c,M),ri(a,r,"yOrigin",h,b),ri(a,r,"xOffset",d,r.xOffset),ri(a,r,"yOffset",u,r.yOffset)),t.setAttribute("data-svg-origin",M+" "+b)},tr=function(t,e){var n=t._gsap||new il(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",r="deg",l=getComputedStyle(t),c=Tn(t,mn)||"0",h,d,u,m,_,f,p,y,v,g,M,b,E,C,x,w,R,U,q,O,D,B,Z,J,H,$,K,lt,V,j,tt,N;return h=d=u=f=p=y=v=g=M=0,m=_=1,n.svg=!!(t.getCTM&&xu(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Xt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Xt]!=="none"?l[Xt]:"")),i.scale=i.rotate=i.translate="none"),C=vl(t,n.svg),n.svg&&(n.uncache?(H=t.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",J=""):J=!e&&t.getAttribute("data-svg-origin"),gl(t,J||c,!!J||n.originIsAbsolute,n.smooth!==!1,C)),b=n.xOrigin||0,E=n.yOrigin||0,C!==Qs&&(U=C[0],q=C[1],O=C[2],D=C[3],h=B=C[4],d=Z=C[5],C.length===6?(m=Math.sqrt(U*U+q*q),_=Math.sqrt(D*D+O*O),f=U||q?ys(q,U)*Ni:0,v=O||D?ys(O,D)*Ni+f:0,v&&(_*=Math.abs(Math.cos(v*bs))),n.svg&&(h-=b-(b*U+E*O),d-=E-(b*q+E*D))):(N=C[6],j=C[7],K=C[8],lt=C[9],V=C[10],tt=C[11],h=C[12],d=C[13],u=C[14],x=ys(N,V),p=x*Ni,x&&(w=Math.cos(-x),R=Math.sin(-x),J=B*w+K*R,H=Z*w+lt*R,$=N*w+V*R,K=B*-R+K*w,lt=Z*-R+lt*w,V=N*-R+V*w,tt=j*-R+tt*w,B=J,Z=H,N=$),x=ys(-O,V),y=x*Ni,x&&(w=Math.cos(-x),R=Math.sin(-x),J=U*w-K*R,H=q*w-lt*R,$=O*w-V*R,tt=D*R+tt*w,U=J,q=H,O=$),x=ys(q,U),f=x*Ni,x&&(w=Math.cos(x),R=Math.sin(x),J=U*w+q*R,H=B*w+Z*R,q=q*w-U*R,Z=Z*w-B*R,U=J,B=H),p&&Math.abs(p)+Math.abs(f)>359.9&&(p=f=0,y=180-y),m=Yt(Math.sqrt(U*U+q*q+O*O)),_=Yt(Math.sqrt(Z*Z+N*N)),x=ys(B,Z),v=Math.abs(x)>2e-4?x*Ni:0,M=tt?1/(tt<0?-tt:tt):0),n.svg&&(J=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!vu(Tn(t,Xt)),J&&t.setAttribute("transform",J))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(m*=-1,v+=f<=0?180:-180,f+=f<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=Yt(m),n.scaleY=Yt(_),n.rotation=Yt(f)+r,n.rotationX=Yt(p)+r,n.rotationY=Yt(y)+r,n.skewX=v+r,n.skewY=g+r,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[mn]=aa(c)),n.xOffset=n.yOffset=0,n.force3D=Ue.force3D,n.renderTransform=n.svg?Q_:gu?bu:j_,n.uncache=0,n},aa=function(t){return(t=t.split(" "))[0]+" "+t[1]},fl=function(t,e,n){var i=me(e);return Yt(parseFloat(e)+parseFloat(ai(t,"x",n+"px",i)))+i},j_=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,bu(t,e)},Ii="0deg",Ks="0px",Oi=") ",bu=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,r=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,m=n.skewY,_=n.scaleX,f=n.scaleY,p=n.transformPerspective,y=n.force3D,v=n.target,g=n.zOrigin,M="",b=y==="auto"&&t&&t!==1||y===!0;if(g&&(d!==Ii||h!==Ii)){var E=parseFloat(h)*bs,C=Math.sin(E),x=Math.cos(E),w;E=parseFloat(d)*bs,w=Math.cos(E),a=fl(v,a,C*w*-g),r=fl(v,r,-Math.sin(E)*-g),l=fl(v,l,x*w*-g+g)}p!==Ks&&(M+="perspective("+p+Oi),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(b||a!==Ks||r!==Ks||l!==Ks)&&(M+=l!==Ks||b?"translate3d("+a+", "+r+", "+l+") ":"translate("+a+", "+r+Oi),c!==Ii&&(M+="rotate("+c+Oi),h!==Ii&&(M+="rotateY("+h+Oi),d!==Ii&&(M+="rotateX("+d+Oi),(u!==Ii||m!==Ii)&&(M+="skew("+u+", "+m+Oi),(_!==1||f!==1)&&(M+="scale("+_+", "+f+Oi),v.style[Xt]=M||"translate(0, 0)"},Q_=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,r=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,m=n.target,_=n.xOrigin,f=n.yOrigin,p=n.xOffset,y=n.yOffset,v=n.forceCSS,g=parseFloat(a),M=parseFloat(r),b,E,C,x,w;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=bs,c*=bs,b=Math.cos(l)*d,E=Math.sin(l)*d,C=Math.sin(l-c)*-u,x=Math.cos(l-c)*u,c&&(h*=bs,w=Math.tan(c-h),w=Math.sqrt(1+w*w),C*=w,x*=w,h&&(w=Math.tan(h),w=Math.sqrt(1+w*w),b*=w,E*=w)),b=Yt(b),E=Yt(E),C=Yt(C),x=Yt(x)):(b=d,x=u,E=C=0),(g&&!~(a+"").indexOf("px")||M&&!~(r+"").indexOf("px"))&&(g=ai(m,"x",a,"px"),M=ai(m,"y",r,"px")),(_||f||p||y)&&(g=Yt(g+_-(_*b+f*C)+p),M=Yt(M+f-(_*E+f*x)+y)),(i||s)&&(w=m.getBBox(),g=Yt(g+i/100*w.width),M=Yt(M+s/100*w.height)),w="matrix("+b+","+E+","+C+","+x+","+g+","+M+")",m.setAttribute("transform",w),v&&(m.style[Xt]=w)},tx=function(t,e,n,i,s){var a=360,r=ae(s),l=parseFloat(s)*(r&&~s.indexOf("rad")?Ni:1),c=l-i,h=i+c+"deg",d,u;return r&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*ru)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*ru)%a-~~(c/a)*a)),t._pt=u=new Oe(t._pt,e,n,i,c,z_),u.e=h,u.u="deg",t._props.push(n),u},uu=function(t,e){for(var n in e)t[n]=e[n];return t},ex=function(t,e,n){var i=uu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,r,l,c,h,d,u,m,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Xt]=e,r=tr(n,1),js(n,Xt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Xt],a[Xt]=e,r=tr(n,1),a[Xt]=c);for(l in Vn)c=i[l],h=r[l],c!==h&&s.indexOf(l)<0&&(m=me(c),_=me(h),d=m!==_?ai(n,l,c,_):parseFloat(c),u=parseFloat(h),t._pt=new Oe(t._pt,r,l,d,u-d,dl),t._pt.u=_||0,t._props.push(l));uu(r,i)};Ie("padding,margin,Width,Radius",function(o,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(r){return t<2?o+r:"border"+r+o});ra[t>1?"border"+o:o]=function(r,l,c,h,d){var u,m;if(arguments.length<4)return u=a.map(function(_){return Un(r,_,c)}),m=u.join(" "),m.split(u[0]).length===5?u[0]:m;u=(h+"").split(" "),m={},a.forEach(function(_,f){return m[_]=u[f]=u[f]||u[(f-1)/2|0]}),r.init(l,m,d)}});var bl={name:"css",register:ml,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,r=t.style,l=n.vars.startAt,c,h,d,u,m,_,f,p,y,v,g,M,b,E,C,x;_l||ml(),this.styles=this.styles||mu(t),x=this.styles.props,this.tween=n;for(f in e)if(f!=="autoRound"&&(h=e[f],!(Fe[f]&&rl(f,e,n,i,t,s)))){if(m=typeof h,_=ra[f],m==="function"&&(h=h.call(n,i,t,s),m=typeof h),m==="string"&&~h.indexOf("random(")&&(h=xs(h)),_)_(this,t,f,h,n)&&(C=1);else if(f.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(f)+"").trim(),h+="",zn.lastIndex=0,zn.test(c)||(p=me(c),y=me(h)),y?p!==y&&(c=ai(t,f,c,y)+y):p&&(h+=p),this.add(r,"setProperty",c,h,i,s,0,0,f),a.push(f),x.push(f,0,r[f]);else if(m!=="undefined"){if(l&&f in l?(c=typeof l[f]=="function"?l[f].call(n,i,t,s):l[f],ae(c)&&~c.indexOf("random(")&&(c=xs(c)),me(c+"")||(c+=Ue.units[f]||me(Un(t,f))||""),(c+"").charAt(1)==="="&&(c=Un(t,f))):c=Un(t,f),u=parseFloat(c),v=m==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),f in Bn&&(f==="autoAlpha"&&(u===1&&Un(t,"visibility")==="hidden"&&d&&(u=0),x.push("visibility",0,r.visibility),ri(this,r,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),f!=="scale"&&f!=="transform"&&(f=Bn[f],~f.indexOf(",")&&(f=f.split(",")[0]))),g=f in Vn,g){if(this.styles.save(f),M||(b=t._gsap,b.renderTransform&&!e.parseTransform||tr(t,e.parseTransform),E=e.smoothOrigin!==!1&&b.smooth,M=this._pt=new Oe(this._pt,r,Xt,0,1,b.renderTransform,b,0,-1),M.dep=1),f==="scale")this._pt=new Oe(this._pt,b,"scaleY",b.scaleY,(v?Li(b.scaleY,v+d):d)-b.scaleY||0,dl),this._pt.u=0,a.push("scaleY",f),f+="X";else if(f==="transformOrigin"){x.push(mn,0,r[mn]),h=$_(h),b.svg?gl(t,h,0,E,0,this):(y=parseFloat(h.split(" ")[2])||0,y!==b.zOrigin&&ri(this,b,"zOrigin",b.zOrigin,y),ri(this,r,f,aa(c),aa(h)));continue}else if(f==="svgOrigin"){gl(t,h,1,E,0,this);continue}else if(f in yu){tx(this,b,f,u,v?Li(u,v+h):h);continue}else if(f==="smoothOrigin"){ri(this,b,"smooth",b.smooth,h);continue}else if(f==="force3D"){b[f]=h;continue}else if(f==="transform"){ex(this,h,t);continue}}else f in r||(f=Ms(f)||f);if(g||(d||d===0)&&(u||u===0)&&!F_.test(h)&&f in r)p=(c+"").substr((u+"").length),d||(d=0),y=me(h)||(f in Ue.units?Ue.units[f]:p),p!==y&&(u=ai(t,f,c,y)),this._pt=new Oe(this._pt,g?b:r,f,u,(v?Li(u,v+d):d)-u,!g&&(y==="px"||f==="zIndex")&&e.autoRound!==!1?U_:dl),this._pt.u=y||0,p!==y&&y!=="%"&&(this._pt.b=c,this._pt.r=k_);else if(f in r)J_.call(this,t,f,c,v?v+h:h);else if(f in t)this.add(t,f,c||t[f],v?v+h:h,i,s);else if(f!=="parseTransform"){ta(f,h);continue}g||(f in r?x.push(f,0,r[f]):x.push(f,1,c||t[f])),a.push(f)}}C&&hl(this)},render:function(t,e){if(e.tween._time||!xl())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Un,aliases:Bn,getSetter:function(t,e,n){var i=Bn[e];return i&&i.indexOf(",")<0&&(e=i),e in Vn&&e!==mn&&(t._gsap.x||Un(t,"x"))?n&&su===n?e==="scale"?G_:H_:(su=n||{})&&(e==="scale"?W_:X_):t.style&&!Qr(t.style[e])?B_:~e.indexOf("-")?V_:sa(t,e)},core:{_removeProperty:js,_getMatrix:vl}};De.utils.checkPrefix=Ms;De.core.getStyleSaver=mu;(function(o,t,e,n){var i=Ie(o+","+t+","+e,function(s){Vn[s]=1});Ie(t,function(s){Ue.units[s]="deg",yu[s]=1}),Bn[i[13]]=o+","+t,Ie(n,function(s){var a=s.split(":");Bn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ie("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Ue.units[o]="px"});De.registerPlugin(bl);var oi=De.registerPlugin(bl)||De,dx=oi.core.Tween;var gn=class extends Jn{constructor(t){super(),this.item=t,this.init()}animateIn(){}init(){let t=new Ye,e=new dn,n=new ne(t,e);this.add(n)}render(t){let e=1+Math.sin(t)*.2;this.scale.set(e,e,e)}},Ml=class extends gn{constructor(){super()}render(t){let e=1+Math.sin(t)*.2;this.rotation.y=e,this.rotation.x=t*.5,this.rotation.z=t*.25,this.scale.set(e,e,e)}},wl=class extends gn{constructor(){super()}init(){let t=new Ye,e=new dn;e.wireframe=!0;let n=new ne(t,e);n.scale.set(2,2,2),this.add(n)}render(t){let e=1+Math.sin(t)*.2;this.rotation.y=t}},Sl=class extends gn{constructor(){super()}init(){let t=[1,2,3,4,5,6,7,8,9];this.meshes=t.map(e=>{let n=this.createCube();return n.scale.set(.2,.2,.2),n.position.x=Math.random()*2-1,n.position.y=Math.random()*2-1,n.position.z=Math.random()*2-1,this.add(n),n})}createCube(){return new ne(new Mi,new dn)}render(t){this.rotation.y=-t,this.meshes.forEach(e=>{e.rotation.x=t,e.rotation.z=-t})}},Tl=class extends gn{constructor(t){super(),this.item=t,this.item.onclick=()=>{let e;this.scale.z>.5?e=.001:e=1,oi.to(this.scale,{z:e,duration:1,ease:"bounce.out"})}}init(){let t=new Mi,e=new dn,n=new ne(t,e);this.add(n);let i=new Vs(2);this.add(i)}render(t){}},El=class extends gn{constructor(t){super(),this.item=t,this.item.onclick=()=>{oi.to(this.cube.rotation,{y:this.cube.rotation.y+Math.PI*2,duration:2,ease:"expo.out"})}}init(){let t=new Ye(3,3,3),e=new dn;e.side=xe,this.room=new ne(t,e),this.add(this.room);let n=new Ye(1,1,1),i=new dn;this.cube=new ne(n,i),this.cube.scale.set(0,0,0),this.add(this.cube),this.scale.set(0,0,0)}render(t){}animateIn(){console.log("hello"),window.ctrl.orbit.reset(),oi.to(this.scale,{x:1,y:1,z:1,duration:1.2,ease:"expo.out",onComplete:()=>{this.cube.scale.set(1,1,1)}}),oi.to(this.rotation,{y:Math.PI*2,duration:1.2,ease:"expo.out"})}},Al=class extends gn{constructor(){super()}init(){let t=new Ye(2,2,2),e=new dn;e.side=xe,this.room=new ne(t,e),this.add(this.room);let n=new Vs(2);this.add(n)}render(t){this.rotation.y=t*.3}animateIn(){}},Cl=class extends gn{constructor(){super()}init(){let t=new ls(10,3,100,16),e=new dn;e.flatShading=!0;let n=new ne(t,e);n.scale.set(.1,.1,.1),this.add(n)}render(t){this.rotation.y=t*.3}animateIn(){}},Pl=[Ml,wl,Sl,Tl,El,Al,Cl];var oa=class extends zr{constructor(){super(),this.wrap=document.querySelector('[data-slide="wrap"]'),this.current=0,this.factor=10,this.slides=[...this.wrap.children].map((e,n)=>{let i=Pl[n]!==void 0?new Pl[n](e):new gn(e);return i.index=n,this.add(i),i.position.x=n*this.factor,i});let t=[...document.querySelectorAll("[data-arrow]")];t[0].addEventListener("click",()=>this.prev()),t[1].addEventListener("click",()=>this.next())}next(){console.log("+"),this.current++,this.current>this.slides.length-1&&(this.current=0),this.animate()}prev(){console.log("-"),this.current--,this.current<0&&(this.current=this.slides.length-1),this.animate()}animate(){this.animation&&this.animation.kill(),console.log(this.current),this.animation=oi.to(this.position,{x:-this.current*this.factor,duration:1,ease:"power2.out",onComplete:()=>this.slides[this.current].animateIn()})}render(t){this.slides.forEach(e=>{e.render(t)})}};window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{nx()});function nx(){let o=0,t=document.querySelector('[data-3d="c"]');console.log(t),window.ctrl={};let e=new Vr({antialias:!0});e.setSize(t.clientWidth,t.clientHeight),e.setClearColor(0,1),t.appendChild(e.domElement);let n=new Re(75,t.clientWidth/t.clientHeight,.1,1e3);n.position.z=3,window.ctrl.camera=n;let i=new oa,s=new Hr(n,e.domElement);s.enableDamping=!0,s.dampingFactor=.05,window.ctrl.orbit=s;let a=function(){requestAnimationFrame(a),s.update(),o+=.02,i.render(o),e.render(i,n)};a(),window.addEventListener("resize",r,!1);function r(){n.aspect=t.clientWidth/t.clientHeight,n.updateProjectionMatrix(),e.setSize(t.clientWidth,t.clientHeight)}}})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.11.4
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.11.4
   * https://greensock.com
   *
   * Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
