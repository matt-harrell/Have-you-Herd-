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






$("#button_one").click(function () {



  var t = Number($("#t").val());

  var a = Number($("#a").val());

  var r = Number($("#r").val());

  var v = Number($("#v").val());










var e = 2.71828183
  // s is number of sick people
var s = a * e**(t+r);
var y = 99 - s - v;



$(".dot").addClass("hide");

function dotCreate() {
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
		greyDot.addClass("grey");
		greyDot.appendTo(".dot_holder");
	}

}
}

function resetDots() {

   $(".dot.red, .dot.blue, .dot.grey").detach();

 }

 function increaseTime(){
   if (y<1) {
   alert("simulation complete");
 } else {
   do {


     var s = a * e**(t+.01+r);
     var y = 99 - s - v;
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
   		greyDot.addClass("grey");
   		greyDot.appendTo(".dot_holder");
   	}
      setTimeout(resetDots, 3000);
   }

 while (y<1)
   alert("simulation complete");
   }
 }

// dotCreate().onComplete(function resetDots(){
//
//     $(".dot.red, .dot.blue, .dot.grey").detach();
// }

dotCreate();

setTimeout(resetDots, 3000);

setTimeout(increaseTime, 6000);







});
