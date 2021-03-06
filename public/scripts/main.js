/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
(function() {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
    );

  if ('serviceWorker' in navigator &&
      (window.location.protocol === 'https:' || isLocalhost)) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      // updatefound is fired if service-worker.js changes.
      registration.onupdatefound = function() {
        // updatefound is also fired the very first time the SW is installed,
        // and there's no need to prompt for a reload at that point.
        // So check here to see if the page is already controlled,
        // i.e. whether there's an existing service worker.
        if (navigator.serviceWorker.controller) {
          // The updatefound event implies that registration.installing is set:
          // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
          var installingWorker = registration.installing;

          installingWorker.onstatechange = function() {
            switch (installingWorker.state) {
              case 'installed':
                // At this point, the old content will have been purged and the
                // fresh content will have been added to the cache.
                // It's the perfect time to display a "New content is
                // available; please refresh." message in the page's interface.
                break;

              case 'redundant':
                throw new Error('The installing ' +
                                'service worker became redundant.');

              default:
                // Ignore
            }
          };
        }
      };
    }).catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
  }






})();



document.getElementById("a").oninput = function () {
	document.getElementById("aspanscale").innerHTML = this.value;
};

document.getElementById("r").oninput = function () {
	document.getElementById("rspanscale").innerHTML = this.value;
};

document.getElementById("v").oninput = function () {
	document.getElementById("vspanscale").innerHTML = this.value;
};












// const allRanges = document.querySelectorAll(".range-wrap");
// allRanges.forEach(wrap => {
//   const range = wrap.querySelector(".range");
//   const bubble = wrap.querySelector(".bubble");
//
//   range.addEventListener("input", () => {
//     setBubble(range, bubble);
//   });
//   setBubble(range, bubble);
// });
//
// function setBubble(range, bubble) {
//   const val = range.value;
//   const min = range.min ? range.min : 0;
//   const max = range.max ? range.max : 100;
//   // const newVal = Number(((val - min) * 100) / (max - min));
//   // bubble.innerHTML = val;
//   const newVal = Number(((val - min) * 100) / (max - min));
//   bubble.innerHTML = val;
//
//   // Sorta magic numbers based on size of the native UI thumb
//   // bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
// }




$("#button_one").click(function () {
  // var people = [];
  // people[0]= "<section class='dot'></section>";
  // people[1]= "<section class='dot'></section>";
  // people[2]= "<section class='dot'></section>";
  // people[3]= "<section class='dot'></section>";
  // people[4]= "<section class='dot'></section>";
  // people[5]= "<section class='dot'></section>";
  // people[6]= "<section class='dot'></section>";
  // people[7]= "<section class='dot'></section>";
  // people[8]= "<section class='dot'></section>";
  // people[9]= "<section class='dot'></section>";
  // people[10]= "<section class='dot'></section>";
  // people[11]= "<section class='dot'></section>";
  // people[12]= "<section class='dot'></section>";
  // people[13]= "<section class='dot'></section>";
  // people[14]= "<section class='dot'></section>";
  // people[15]= "<section class='dot'></section>";
  // people[16]= "<section class='dot'></section>";
  // people[17]= "<section class='dot'></section>";
  // people[18]= "<section class='dot'></section>";
  // people[19]= "<section class='dot'></section>";
  // people[20]= "<section class='dot'></section>";
  // people[21]= "<section class='dot'></section>";
  // people[22]= "<section class='dot'></section>";
  // people[23]= "<section class='dot'></section>";
  // people[24]= "<section class='dot'></section>";
  // people[25]= "<section class='dot'></section>";
  // people[26]= "<section class='dot'></section>";
  // people[27]= "<section class='dot'></section>";
  // people[28]= "<section class='dot'></section>";
  // people[29]= "<section class='dot'></section>";
  // people[30]= "<section class='dot'></section>";
  // people[31]= "<section class='dot'></section>";
  // people[32]= "<section class='dot'></section>";
  // people[33]= "<section class='dot'></section>";
  // people[34]= "<section class='dot'></section>";
  // people[35]= "<section class='dot'></section>";
  // people[36]= "<section class='dot'></section>";
  // people[37]= "<section class='dot'></section>";
  // people[38]= "<section class='dot'></section>";
  // people[39]= "<section class='dot'></section>";
  // people[40]= "<section class='dot'></section>";
  // people[41]= "<section class='dot'></section>";
  // people[42]= "<section class='dot'></section>";
  // people[43]= "<section class='dot'></section>";
  // people[44]= "<section class='dot'></section>";
  // people[45]= "<section class='dot'></section>";
  // people[46]= "<section class='dot'></section>";
  // people[47]= "<section class='dot'></section>";
  // people[48]= "<section class='dot'></section>";
  // people[49]= "<section class='dot'></section>";




  // document.getElementById("dot_holder").innerHTML = people.join("");







  // var t = $("#t").val();

  // var t = $("#t").val();


  var t = Number($("#t").val());

  var a = Number($("#a").val());

  // var r = $("#r").val();



  var r = Number($("#r").val());

// r value test to see if recognizes decimal
// conculsion: it does

  // $(".dot").addClass("hide");
  // for (i = 0; i < r; i++) {
	// 	var newDot = $("#seed").clone();
	// 	newDot.removeClass("hide");
	// 	newDot.addClass("red");
	// 	newDot.appendTo(".dot_holder");



  var v = Number($("#v").val());



  // s is number of sick people
  // something is messing with formula slider

var e = 2.71828183
// var s1 = r+t;

var s = a * e**(t+r);
var y = 99 - s - v





// var s = a * (Math.pow(1 + r, t));

// var s = a + r + t;
// one of the varibles is adding 10

// var s = a + r;
// added 10

// var s = t + r;
// added 10

// var s = r;
// did not add 10

// var s = t;
// did not add 10

// var s = a;
// did not add 10

// conculsion: somewhere 10 is being added



// document.getElementById("dot_holder").innerHTML = people.slice(0,v).join("");
// document.getElementById("dot_holder").innerHTML = people.slice(0,s1).join("");
// console.log(s1);
// console.log('s = ' + s + ', v = ' + v + ', r = ' + r + ', a = ' + a);














	$(".dot").addClass("hide");

  if (s > 100) {
    alert("Value should be between 1 - 100");
    console.log('s = ' + s + ', v = ' + v + ', r = ' + r + ', y = ' + y +', a = ' + a);


} else {
  console.log('s = ' + s + ', v = ' + v + ', r = ' + r + ', y = ' + y +', a = ' + a);
	for (i = 0; i < s; i++) {
		var newDot = $("#seed").clone();
		newDot.removeClass("hide");
		newDot.addClass("red");
		newDot.appendTo(".dot_holder");
	}

  for (i = 0; i < v; i++) {
		var bDot = $("#seed").clone();
    bDot.removeClass("hide");
		bDot.addClass("blue");
		bDot.appendTo(".dot_holder");
	}




	for (i = 0; i < y; i++) {
		var greyDot = $("#seed").clone();
		greyDot.removeClass("hide");
		// newDot.addClass("red");
		greyDot.appendTo(".dot_holder");
	}
}


});
