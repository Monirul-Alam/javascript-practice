let val;

val = document.all;
val = document.all[1];
val = document.all.length;
val = document.head;
val = document.doctype;
val = document.domain;


val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;      // get
val = document.forms[0].action;    //http://127.0.0.1:5500/DOM%20Manipulation/indexDom.html


val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});


console.log(val);         