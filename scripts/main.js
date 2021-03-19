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


document.getElementById("vspanscale").innerHTML = Number($("#v").val());
document.getElementById("aspanscale").innerHTML = Number($("#a").val());

document.getElementById("v").oninput = function () {
  document.getElementById("v").max = 500 - Number($("#a").val());
  document.getElementById("vspanscale").innerHTML = Number($("#v").val());
  };

document.getElementById("a").oninput = function () {
	document.getElementById("aspanscale").innerHTML = Number($("#a").val());
  document.getElementById("v").max = 500 - Number($("#a").val());


  if (Number($("#aspanscale").val()) + Number($("#vspanscale").val()) > 500) {
    document.getElementById("vspanscale").innerHTML = 500 - Number($("#a").val());
    // alert("boo")
    console.log(Number($("#aspanscale").val()) + Number($("#vspanscale").val()));
  }

};

document.getElementById("r").oninput = function () {
	document.getElementById("rspanscale").innerHTML = this.value;
};


function scroll() {
  var element = document.getElementById("dayspast");
  element.scrollIntoView(true, {block: "center"});
}

function scrollResults() {
  var element = document.getElementById("results");
  element.scrollIntoView(true, {block: "center"});
}





$("#button_one").click(function () {

  $("#results").addClass("hide");
  $(".numberResults").empty();
  $("#contStatus").removeClass("pass");
  $("#contStatus").removeClass("fail");
  $(".dot.red, .dot.blue,.dot.grey").remove();


  var r = Number($("#r").val());

  var a = Number($("#a").val());



  var v = Number($("#v").val());

  // number of peope need to be vaccinted to reach hit

  var hit = (1 - (1/r)) * 500;


$(".dot").addClass("hide");

function resetDots() {
  $(".dot.red, .dot.blue,.dot.grey").detach();
}




//  https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop
// Daniel Vassallo
var t = 0;
var newA = [];
function begin() {
  console.log("time is zero");


    var g = 500 - v - a;

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

    }




    document.getElementById("dayspast").innerHTML = t;
    t++;
  }

var one = 1

function myLoop() {
  setTimeout(function() {

    var s = parseInt(a * (r)**t);
    var y = 500 - s - v;
    var currentA = newA[newA.length - 1];
    var newS = parseInt(currentA * (r)**t);
    var newY = 500 - newS - v;


    if (v>=hit) {
      var g = 500 - v - a;

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
    	}

      console.log('met hit='+hit);
      console.log('s = ' + s + ', v = ' + v + ', r = ' + r + ', y = ' + y +', a = ' + a +',t =' + t+', hit = ' + hit );
      document.getElementById("dayspast").innerHTML = t;
      $('#contStatus').html("Infection contained!").addClass("pass");
      $("#results").removeClass("hide");
      $('#days_results').html(t);
      $('#inf_results').html(a);
      $('#vax_results').html(v);
      setTimeout(scrollResults,2000);
      return;

    }
    console.log("hit was not met");
    if (newY < 1) {
      for (i = 0; i < newS + newY; i++) {
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

      console.log('s = ' + s + ', v = ' + v + ', r = ' + r + ', y = ' + y +', a = ' + a +',t =' + t+', hit = ' + hit);
      document.getElementById("dayspast").innerHTML = t;
      console.log("NewA="+newA+ ",NewS="+newS);
      $('#contStatus').html("Infection not contained!").addClass("fail");
      $("#results").removeClass("hide");
      $('#days_results').html(t);
      $('#inf_results').html(s+y);
      $('#vax_results').html(v);
      return;

    }


    if ( y > 1 || newY > 1) {
        if (t == 1) {
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

          }

          setTimeout(resetDots,1500);


          console.log('s = ' + s + ', v = ' + v + ', r = ' + r + ', y = ' + y +', a = ' + a +',t =' + t+', hit = ' + hit);  //  your code here
          document.getElementById("dayspast").innerHTML = t;

          t++;
          newA.push(Number(s));
          console.log("newA=" + newA[0]);
            myLoop();
        } else {

          console.log("t is more 1");
          for (i = 0; i < newS; i++) {
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

          for (i = 0; i < newY; i++) {
            var greyDot = $("#seed").clone();
            greyDot.removeClass("hide");
            greyDot.addClass("grey");
            greyDot.appendTo(".dot_holder");

          }

          setTimeout(resetDots,1500);

          newA.push(newS);
          console.log('s = ' + s + ', v = ' + v + ', r = ' + r + ', y = ' + y +', a = ' + a +',t =' + t+', hit = ' + hit);  //  your code here
          document.getElementById("dayspast").innerHTML = t;
          console.log(newA);
          console.log("newY=" + newY);
          console.log("newS =" + newS);
          console.log();
          t++;



          myLoop();
        }



    }

  }, 1500)
}

begin();
scroll();
setTimeout(resetDots,1500);
setTimeout(myLoop);
scrollResults();





});
