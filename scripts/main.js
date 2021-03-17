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

// document.getElementById("v").max = 100 - Number($("#a").val());
document.getElementById("vspanscale").innerHTML = Number($("#v").val());
document.getElementById("aspanscale").innerHTML = Number($("#a").val());

document.getElementById("v").oninput = function () {
  document.getElementById("v").max = 100 - Number($("#a").val());
  document.getElementById("vspanscale").innerHTML = Number($("#v").val());
  };

document.getElementById("a").oninput = function () {
	document.getElementById("aspanscale").innerHTML = Number($("#a").val());
  document.getElementById("v").max = 100 - Number($("#a").val());

  // console.log($("#vspanscale").val());
  if (Number($("#aspanscale").val()) + Number($("#vspanscale").val()) > 100) {
    document.getElementById("vspanscale").innerHTML = 100 - Number($("#a").val());
    // alert("boo")
    console.log(Number($("#aspanscale").val()) + Number($("#vspanscale").val()));
  }




  // if(Number($("#vspanscale").val() + Number($("#aspanscale").val()) > 100){
     // document.getElementById("vspanscale").innerHTML = this.value;
     // console.log(v);
  // }



};

// need to mess with results reflect this change

document.getElementById("r").oninput = function () {
	document.getElementById("rspanscale").innerHTML = this.value;
};









// trying to get vaccinated to depend on current infected

$("#button_one").click(function () {

  $("#results").addClass("hide");
  $(".numberResults").empty();
  $("#contStatus").removeClass("pass");
  $("#contStatus").removeClass("fail");
  $(".dot.red, .dot.blue,.dot.grey").remove();

  // var t = Number($("#t").val());

  var d = Number($("#r").val());

  var a = Number($("#a").val());

  var r = Number(1/(d/24));

  var v = Number($("#v").val());

  // number of peope protected
  var hit = Number(r * 100);

  // function hitAchived(){
  //   if (v===hit) {
  //     s-hit
  //   }
  //
  // }

  // let y = 99 - s - v - p;












var e = 2.71828183
  // s is number of sick people




$(".dot").addClass("hide");

function dotCreate() {
  if (s > 100) {
    alert("Value should be between 1 - 100");
    console.log('s = ' + s + ', v = ' + v + ', r = ' + r + ', y = ' + y +', a = ' + a +', p = ' + p);


} else {
  console.log('s = ' + s + ', v = ' + v + ', r = ' + r + ', y = ' + y +', a = ' + a+', p = ' + p);
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

  for (i = 0; i < p; i++) {
    var protected = $("#seed").clone();
    protected.removeClass("hide");
    protected.addClass("grey");
    protected.appendTo(".dot_holder");
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
  $(".dot.red, .dot.blue,.dot.grey").detach();
}

function resetRed() {

   $(".dot.red").detach();
   // $(".dot_holder").detach();
 }

 function resetBlue() {

    $(".dot.blue").detach();
    // $(".dot_holder").detach();
  }

function resetGrey() {

     $(".dot.grey").detach();
     // $(".dot_holder").detach();
   }

function dotCreate2() {
var t = 0;
// let s = a * e**(t+r);
// let y = 99 - s - v;
while (t < 2) {
  // setTimeout(resetDots,3000);
  // if (t < 1) { continue; }

  let s = a * e**(t+r);
  let y = 99 - s - v;

	for (i = 0; i < s; i++) {
		var newDot = $("#seed").clone();
		newDot.removeClass("hide");
		newDot.addClass("red");
		newDot.appendTo(".dot_holder");
    // setTimeout(resetRed,2000);
	}

  for (i = 0; i < v; i++) {
		var bDot = $("#seed").clone();
    bDot.removeClass("hide");
		bDot.addClass("blue");
		bDot.appendTo(".dot_holder");
    // setTimeout(resetBlue,2000);
	}

	for (i = 0; i < y; i++) {
		var greyDot = $("#seed").clone();
		greyDot.removeClass("hide");
		greyDot.addClass("grey");
		greyDot.appendTo(".dot_holder");
    // setTimeout(resetGrey,2000);
	}
  setTimeout(resetDots,3000);


  console.log('s = ' + s + ', v = ' + v + ', r = ' + r + ', y = ' + y +', a = ' + a +',t =' + t+', p = ' + p );
  t++;

  }

}





//  https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop
// Daniel Vassallo
var t = 1;                  //  set your counter to 1

function myLoop() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    var s = a * e**(t+r);
    var y = 100 - s - v;
    if (v>=hit) {
      var g = 100 - v - a;

      for (i = 0; i < a; i++) {
    		var bDot = $("#seed").clone();
        bDot.removeClass("hide");
    		bDot.addClass("red");
    		bDot.appendTo(".dot_holder");
        // setTimeout(resetBlue,2000);
      }

      for (i = 0; i < v; i++) {
    		var bDot = $("#seed").clone();
        bDot.removeClass("hide");
    		bDot.addClass("blue");
    		bDot.appendTo(".dot_holder");
        // setTimeout(resetBlue,2000);
      }

      for (i = 0; i < g; i++) {
    		var greyDot = $("#seed").clone();
    		greyDot.removeClass("hide");
    		greyDot.addClass("grey");
    		greyDot.appendTo(".dot_holder");
        // setTimeout(resetGrey,2000);
    	}

      console.log('met hit='+hit);
      console.log('s = ' + s + ', v = ' + v + ', r = ' + r + ', y = ' + y +', a = ' + a +',t =' + t+', hit = ' + hit );
      document.getElementById("dayspast").innerHTML = t;
      $('#contStatus').html("Infection contained!").addClass("pass");
      $("#results").removeClass("hide");
      $('#days_results').html(t);
      $('#inf_results').html(a);
      $('#vax_results').html(v);
      // setTimeout(function(){ alert("HIT was met. Infection containted"); }, 3000);
      return;

    }
    console.log("hit was not met");
    if (y < 1) {
      for (i = 0; i < s + y; i++) {
    		var newDot = $("#seed").clone();
    		newDot.removeClass("hide");
    		newDot.addClass("red");
    		newDot.appendTo(".dot_holder");
        // setTimeout(resetRed,2000);
    	}

      for (i = 0; i < v; i++) {
    		var bDot = $("#seed").clone();
        bDot.removeClass("hide");
    		bDot.addClass("blue");
    		bDot.appendTo(".dot_holder");
        // setTimeout(resetBlue,2000);
    	}

      console.log('s = ' + s + ', v = ' + v + ', r = ' + r + ', y = ' + y +', a = ' + a +',t =' + t+', hit = ' + hit );
      document.getElementById("dayspast").innerHTML = t;
      $('#contStatus').html("Infection not contained!").addClass("fail");
      $("#results").removeClass("hide");
      $('#days_results').html(t);
      $('#inf_results').html(s+y);
      $('#vax_results').html(v);

    }else {
      for (i = 0; i < s; i++) {
    		var newDot = $("#seed").clone();
    		newDot.removeClass("hide");
    		newDot.addClass("red");
    		newDot.appendTo(".dot_holder");
        // setTimeout(resetRed,2000);
    	}

      for (i = 0; i < v; i++) {
    		var bDot = $("#seed").clone();
        bDot.removeClass("hide");
    		bDot.addClass("blue");
    		bDot.appendTo(".dot_holder");
        // setTimeout(resetBlue,2000);
      }

    	for (i = 0; i < y; i++) {
    		var greyDot = $("#seed").clone();
    		greyDot.removeClass("hide");
    		greyDot.addClass("grey");
    		greyDot.appendTo(".dot_holder");
        // setTimeout(resetGrey,2000);
    	}

      setTimeout(resetDots,1500);


      console.log('s = ' + s + ', v = ' + v + ', r = ' + r + ', y = ' + y +', a = ' + a +',t =' + t+', hit = ' + hit);  //  your code here
      document.getElementById("dayspast").innerHTML = t;

      t++;
    }

    if ( y > 1) {
        myLoop();

    }
  }, 1500)
}

myLoop();















});
