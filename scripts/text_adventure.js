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



$("#back_button").click(function () {
  window.history.back();
});

 var tl = gsap.timeline();

$("#yes").click(function(){
  tl.to("#start_adv_text", {opacity:0});
  tl.to("#start_adv_buttons", {opacity:0},"<");
  $("#start_adv_text").appendTo("#start_adv");
  $("#start_adv_buttons").appendTo("#start_adv");
  // $("#yes_start_choice").removeClass("chidden");
  $("#yes_start_choice_text").appendTo("#text_holder");
  $("#yes_start_choice_buttons").appendTo("#button_holder");
  tl.fromTo("#yes_start_choice_text", {opacity: 0}, {opacity: 1, duration:.3});
  tl.fromTo("#yes_start_choice_buttons", {opacity: 0}, {opacity: 1, duration:.3}, "<");
});

$("#no").click(function(){
  tl.to("#start_adv_text", {opacity:0});
  tl.to("#start_adv_buttons", {opacity:0},"<");
  $("#start_adv_text").appendTo("#start_adv");
  $("#start_adv_buttons").appendTo("#start_adv");
  $("#no_start_choice_text").appendTo("#text_holder");
  $("#no_start_choice_buttons").appendTo("#button_holder");
  tl.fromTo("#no_start_choice_text", {opacity: 0}, {opacity: 1, duration:.3});
  tl.fromTo("#no_start_choice_buttons", {opacity: 0}, {opacity: 1, duration:.3}, "<");
});

$("#back_school_no_start_btn").click(function(){
  tl.to("#no_start_choice_text", {opacity:0});
  tl.to("#no_start_choice_buttons", {opacity:0},"<");
  $("#no_start_choice_text").appendTo("#no_start_choice");
  $("#no_start_choice_buttons").appendTo("#no_start_choice");
  $("#do_nothing_news_text").appendTo("#text_holder");
  $("#comes_home_1").addClass("chidden");
  $("#comes_home_2").removeClass("chidden");
  $("#do_nothing_news_choices").appendTo("#button_holder");
  tl.fromTo("#do_nothing_news_text", {opacity: 0}, {opacity: 1, duration:.3});
  tl.fromTo("#do_nothing_news_choices", {opacity: 0}, {opacity: 1, duration:.3}, "<");
});

$("#virtual_no_start_btn").click(function(){
  tl.to("#no_start_choice_text", {opacity:0});
  tl.to("#no_start_choice_buttons", {opacity:0},"<");
  $("#no_start_choice_text").appendTo("#no_start_choice");
  $("#no_start_choice_buttons").appendTo("#no_start_choice");
  $("#virtual_life_text").appendTo("#text_holder");
  $("#virtual_life_choices").appendTo("#button_holder");
  tl.fromTo("#virtual_life_text", {opacity: 0}, {opacity: 1, duration:.3});
  tl.fromTo("#virtual_life_choices", {opacity: 0}, {opacity: 1, duration:.3}, "<");
});

$("#no_back_outbreak_end").click(function(){
  tl.to("#virtual_life_text", {opacity:0});
  tl.to("#virtual_life_choices", {opacity:0},"<");
  $("#virtual_life_text").appendTo("#virtual_life");
  $("#virtual_life_choices").appendTo("#virtual_life");
  $("#restart_outbreak_end_text").appendTo("#text_holder");
  $("#restart_outbreak_end_choices").appendTo("#button_holder");
  tl.fromTo("#restart_outbreak_end_text", {opacity: 0}, {opacity: 1, duration:.3});
  tl.fromTo("#restart_outbreak_end_choices", {opacity: 0}, {opacity: 1, duration:.3}, "<");
});

$("#back_back_after_btn").click(function(){
  tl.to("#virtual_life_text", {opacity:0});
  tl.to("#virtual_life_choices", {opacity:0},"<");
  $("#virtual_life_text").appendTo("#virtual_life");
  $("#virtual_life_choices").appendTo("#virtual_life");
  $("#back_after_text").appendTo("#text_holder");
  $("#back_after_choices").appendTo("#button_holder");
  tl.fromTo("#back_after_text", {opacity: 0}, {opacity: 1, duration:.3});
  tl.fromTo("#back_after_choices", {opacity: 0}, {opacity: 1, duration:.3}, "<");
});

$("#tissue_back_after_btn").click(function(){
  tl.to("#back_after_text", {opacity:0});
  tl.to("#back_after_choices", {opacity:0},"<");
  $("#back_after_text").appendTo("#back_after");
  $("#back_after_choices").appendTo("#back_after");
  $("#tissue_restart_text").appendTo("#text_holder");
  $("#tissue_restart_choices").appendTo("#button_holder");
  tl.fromTo("#tissue_restart_text", {opacity: 0}, {opacity: 1, duration:.3});
  tl.fromTo("#tissue_restart_choices", {opacity: 0}, {opacity: 1, duration:.3}, "<");
});

$("#check_back_after_btn").click(function(){
  tl.to("#back_after_text", {opacity:0});
  tl.to("#back_after_choices", {opacity:0},"<");
  $("#back_after_text").appendTo("#back_after");
  $("#back_after_choices").appendTo("#back_after");
  $("#check_restart_text").appendTo("#text_holder");
  $("#check_restart_choices").appendTo("#button_holder");
  tl.fromTo("#check_restart_text", {opacity: 0}, {opacity: 1, duration:.3});
  tl.fromTo("#check_restart_choices", {opacity: 0}, {opacity: 1, duration:.3}, "<");
});

$("#tissue_restart_btn").click(function(){
  tl.to("#tissue_restart_text", {opacity:0});
  tl.to("#tissue_restart_choices", {opacity:0},"<");
  $("#tissue_restart_text").appendTo("#tissue_restart");
  $("#tissue_restart_choices").appendTo("#tissue_restart");
  $("#start_adv_text").appendTo("#text_holder");
  $("#start_adv_buttons").appendTo("#button_holder");
  tl.fromTo("#start_adv_text", {opacity: 0}, {opacity: 1, duration:.3});
  tl.fromTo("#start_adv_buttons", {opacity: 0}, {opacity: 1, duration:.3}, "<");
});

$("#check_restart_btn").click(function(){
  tl.to("#check_restart_text", {opacity:0});
  tl.to("#check_restart_choices", {opacity:0},"<");
  $("#check_restart_text").appendTo("#tissue_restart");
  $("#check_restart_choices").appendTo("#tissue_restart");
  $("#start_adv_text").appendTo("#text_holder");
  $("#start_adv_buttons").appendTo("#button_holder");
  tl.fromTo("#start_adv_text", {opacity: 0}, {opacity: 1, duration:.3});
  tl.fromTo("#start_adv_buttons", {opacity: 0}, {opacity: 1, duration:.3}, "<");
});

$("#do_nothing_news_button").click(function(){
  tl.to("#yes_start_choice_text", {opacity:0});
  tl.to("#yes_start_choice_buttons", {opacity:0},"<");
  $("#yes_start_choice_text").appendTo("#yes_start_choice");
  $("#yes_start_choice_buttons").appendTo("#yes_start_choice");
  $("#do_nothing_news_text").appendTo("#text_holder");
  $("#comes_home_2").addClass("chidden");
  $("#comes_home_1").removeClass("chidden");
  $("#do_nothing_news_choices").appendTo("#button_holder");
  tl.fromTo("#do_nothing_news_text", {opacity: 0}, {opacity: 1, duration:.3});
  tl.fromTo("#do_nothing_news_choices", {opacity: 0}, {opacity: 1, duration:.3}, "<");
});

$("#tissue_yes_button").click(function(){
  tl.to("#do_nothing_news_text", {opacity:0});
  tl.to("#do_nothing_news_choices", {opacity:0},"<");
  $("#do_nothing_news_text").appendTo("#do_nothing_news");
  $("#do_nothing_news_choices").appendTo("#do_nothing_news");
  // $("#tissue_yes").removeClass("chidden");
  $("#tissue_yes_text").appendTo("#text_holder");
  $("#tissue_yes_choices").appendTo("#button_holder");
  tl.fromTo("#tissue_yes_text", {opacity: 0}, {opacity: 1, duration:.3});
  tl.fromTo("#tissue_yes_choices", {opacity: 0}, {opacity: 1, duration:.3}, "<");
});

$("#give_medicine_button").click(function(){
  tl.to("#tissue_yes_text", {opacity:0});
  tl.to("#tissue_yes_choices", {opacity:0},"<");
  $("#tissue_yes_text").appendTo("#tissue_yes");
  $("#tissue_yes_choices").appendTo("#tissue_yes");
  $("#medicine_text").appendTo("#text_holder");
  $("#medicine_choices").appendTo("#button_holder");
  tl.fromTo("#medicine_text", {opacity: 0}, {opacity: 1, duration:.3});
  tl.fromTo("#medicine_choices", {opacity: 0}, {opacity: 1, duration:.3}, "<");
});

$("#doctor_med_btn").click(function(){
  tl.to("#medicine_text", {opacity:0});
  tl.to("#medicine_choices", {opacity:0},"<");
  $("#medicine_text").appendTo("#medicine");
  $("#medicine_choices").appendTo("#medicine");
  $("#doctor_text").appendTo("#text_holder");
  $("#doctor_choices").appendTo("#button_holder");
  tl.fromTo("#doctor_text", {opacity: 0}, {opacity: 1, duration:.3});
  tl.fromTo("#doctor_choices", {opacity: 0}, {opacity: 1, duration:.3}, "<");
});

$("#restart_doc_btn").click(function(){
  tl.to("#doctor_text", {opacity:0});
  tl.to("#doctor_choices", {opacity:0},"<");
  $("#doctor_text").appendTo("#doctor");
  $("#doctor_choices").appendTo("#doctor");
  $("#start_adv_text").appendTo("#text_holder");
  $("#start_adv_buttons").appendTo("#button_holder");
  tl.fromTo("#start_adv_text", {opacity: 0}, {opacity: 1, duration:.3});
  tl.fromTo("#start_adv_buttons", {opacity: 0}, {opacity: 1, duration:.3}, "<");
});

$("#restart_outbreak_end_btn").click(function(){
  tl.to("#restart_outbreak_end_text", {opacity:0});
  tl.to("#restart_outbreak_end_choices", {opacity:0},"<");
  $("#restart_outbreak_end_text").appendTo("#restart_outbreak_end");
  $("#restart_outbreak_end_choices").appendTo("#restart_outbreak_end");
  $("#start_adv_text").appendTo("#text_holder");
  $("#start_adv_buttons").appendTo("#button_holder");
  tl.fromTo("#start_adv_text", {opacity: 0}, {opacity: 1, duration:.3});
  tl.fromTo("#start_adv_buttons", {opacity: 0}, {opacity: 1, duration:.3}, "<");
});
