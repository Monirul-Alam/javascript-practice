//  Window methods/ objects/ Properties

window.console.log(123);




// Alert

// window.alert('hello');


// Prompt
// const input = prompt();
//  alert(input)

// Confirm

// if(confirm('are yoyu sure') ){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

let val;

// Outer height and width
val = window.outerHeight;
val = window.outerWidth; 

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
//window.location.href = 'http://google.com';
//Reload
//window.location.reload();

// History Object

// window.history.go(-2);
// val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;



console.log(val);
