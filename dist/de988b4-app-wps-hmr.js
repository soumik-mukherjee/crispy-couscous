webpackHotUpdate("app",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./src/services.js");




async function onLoad() {
  console.log('on load')
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(onServiceWorkerRegistered, onServiceWorkerRegistrationFailed);
}
  const journeyStartPromise = _services__WEBPACK_IMPORTED_MODULE_2__["UserOnboardingJourneyService"].start();
  const journeyExecution = await journeyStartPromise;
  console.log('journeyExecution: ', journeyExecution)
  const verifyEmailButton = document.getElementById('requestEmailVerification');
  verifyEmailButton.addEventListener('click', onVerifyEmailClicked);
}

document.body.onload = onLoad

const onVerifyEmailClicked = async () => {
  //console.log('Journey started: ', data)
  await _services__WEBPACK_IMPORTED_MODULE_2__["UserOnboardingJourneyService"].requestEmailVerification({ taskToken: 'AAAAKgAAAAIAAAAAAAAAAbsYQYac+l4/+bCzagxXLr2SUi0yAHP3tSa0oV0CpTQATtFP5S1AIkY4HyVlhlcxELwD8d++xzHW/jOR2BIU+sMyCeEDwjadiYm1ayFKp9PopjmmgxH+V6q6M5tH+la9ga2hVmHswAjxQtpzeJn7DIys3xseYI5zEEeT5lu4K5g2xMsxpfL3pTjCusNATV0vKK7W3U/WgDHtSrLBwgIzrr47uq/Blwx9Gp9jWbXZqw3rje5iWB7evaeLoPEz1YFB3rlobgFU5y8vZxuJyv9MqLijLK4y5g03HX0b0w/DmJcoH5kfybGsKwpfdXlew4WZpBDbKenQnHnL2S7C+xTwYabD0CG+hqys2CLuWxaB9ra3+7A4Lnkx0bWEbRh+WdzcNk/PrjBE1sSLfCm/U8h00rZ0kMogbIqVJh4eyiGD8rTXnpkfUQmdOVvdFLSsCl9ZgjIogLlIdPfNG8lc0cjRUNJrHLNWbMBQ3L2Xmu72zPRvMKzx3et3ZcffKXFdjWd5QEvhFIet4IKi3MuiBYj1dlnX5Kd5jt1QAJQXXt+wT2A2X1ijH2mU4eBzvYxhCKZ7qWg4sOmRzw+qxOtEjJcpzxbFjQUDvcWBoommsArXL2znaSjFObue+gk4Vf6Vd5vb/lR/flxs3fvFmyNfl7RQ5DuKwhq6QJfmwJghwW5+eY1v' })
}

const onServiceWorkerRegistered = (registration) => {
  console.log('Service worker registration succeeded:', registration);
}

const onServiceWorkerRegistrationFailed = (error) => {
  console.log('Service worker registration failed:', error);
  throw new Error(error);
}


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUI7QUFDSDtBQUNxQzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixzRUFBNEI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxzRUFBNEIsMkJBQTJCLGd0QkFBZ3RCO0FBQy93Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZGU5ODhiNC1hcHAtd3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgJy4vbWFpbi5jc3MnO1xuaW1wb3J0IHsgVXNlck9uYm9hcmRpbmdKb3VybmV5U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMnXG5cbmFzeW5jIGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgY29uc29sZS5sb2coJ29uIGxvYWQnKVxuICBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCcvc2VydmljZS13b3JrZXIuanMnKS50aGVuKG9uU2VydmljZVdvcmtlclJlZ2lzdGVyZWQsIG9uU2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbkZhaWxlZCk7XG59XG4gIGNvbnN0IGpvdXJuZXlTdGFydFByb21pc2UgPSBVc2VyT25ib2FyZGluZ0pvdXJuZXlTZXJ2aWNlLnN0YXJ0KCk7XG4gIGNvbnN0IGpvdXJuZXlFeGVjdXRpb24gPSBhd2FpdCBqb3VybmV5U3RhcnRQcm9taXNlO1xuICBjb25zb2xlLmxvZygnam91cm5leUV4ZWN1dGlvbjogJywgam91cm5leUV4ZWN1dGlvbilcbiAgY29uc3QgdmVyaWZ5RW1haWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVxdWVzdEVtYWlsVmVyaWZpY2F0aW9uJyk7XG4gIHZlcmlmeUVtYWlsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25WZXJpZnlFbWFpbENsaWNrZWQpO1xufVxuXG5kb2N1bWVudC5ib2R5Lm9ubG9hZCA9IG9uTG9hZFxuXG5jb25zdCBvblZlcmlmeUVtYWlsQ2xpY2tlZCA9IGFzeW5jICgpID0+IHtcbiAgLy9jb25zb2xlLmxvZygnSm91cm5leSBzdGFydGVkOiAnLCBkYXRhKVxuICBhd2FpdCBVc2VyT25ib2FyZGluZ0pvdXJuZXlTZXJ2aWNlLnJlcXVlc3RFbWFpbFZlcmlmaWNhdGlvbih7IHRhc2tUb2tlbjogJ0FBQUFLZ0FBQUFJQUFBQUFBQUFBQWJzWVFZYWMrbDQvK2JDemFneFhMcjJTVWkweUFIUDN0U2Ewb1YwQ3BUUUFUdEZQNVMxQUlrWTRIeVZsaGxjeEVMd0Q4ZCsreHpIVy9qT1IyQklVK3NNeUNlRUR3amFkaVltMWF5RktwOVBvcGptbWd4SCtWNnE2TTV0SCtsYTlnYTJoVm1Ic3dBanhRdHB6ZUpuN0RJeXMzeHNlWUk1ekVFZVQ1bHU0SzVnMnhNc3hwZkwzcFRqQ3VzTkFUVjB2S0s3VzNVL1dnREh0U3JMQndnSXpycjQ3dXEvQmx3eDlHcDlqV2JYWnF3M3JqZTVpV0I3ZXZhZUxvUEV6MVlGQjNybG9iZ0ZVNXk4dlp4dUp5djlNcUxpakxLNHk1ZzAzSFgwYjB3L0RtSmNvSDVrZnliR3NLd3BmZFhsZXc0V1pwQkRiS2VuUW5IbkwyUzdDK3hUd1lhYkQwQ0craHF5czJDTHVXeGFCOXJhMys3QTRMbmt4MGJXRWJSaCtXZHpjTmsvUHJqQkUxc1NMZkNtL1U4aDAwclowa01vZ2JJcVZKaDRleWlHRDhyVFhucGtmVVFtZE9WdmRGTFNzQ2w5WmdqSW9nTGxJZFBmTkc4bGMwY2pSVU5KckhMTldiTUJRM0wyWG11NzJ6UFJ2TUt6eDNldDNaY2ZmS1hGZGpXZDVRRXZoRklldDRJS2kzTXVpQllqMWRsblg1S2Q1anQxUUFKUVhYdCt3VDJBMlgxaWpIMm1VNGVCenZZeGhDS1o3cVdnNHNPbVJ6dytxeE90RWpKY3B6eGJGalFVRHZjV0Jvb21tc0FyWEwyem5hU2pGT2J1ZStnazRWZjZWZDV2Yi9sUi9mbHhzM2Z2Rm15TmZsN1JRNUR1S3docTZRSmZtd0pnaHdXNStlWTF2JyB9KVxufVxuXG5jb25zdCBvblNlcnZpY2VXb3JrZXJSZWdpc3RlcmVkID0gKHJlZ2lzdHJhdGlvbikgPT4ge1xuICBjb25zb2xlLmxvZygnU2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2NlZWRlZDonLCByZWdpc3RyYXRpb24pO1xufVxuXG5jb25zdCBvblNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb25GYWlsZWQgPSAoZXJyb3IpID0+IHtcbiAgY29uc29sZS5sb2coJ1NlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6JywgZXJyb3IpO1xuICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==