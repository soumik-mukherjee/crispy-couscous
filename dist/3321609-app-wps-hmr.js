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
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(onServiceWorkerRegistered, onServiceWorkerRegistrationFailed);
  }
  /*
  const journeyStartPromise = UserOnboardingJourneyService.start();
  const journeyExecution = await journeyStartPromise;
  console.log('journeyExecution: ', journeyExecution)
  const verifyEmailButton = document.getElementById('requestEmailVerification');
  verifyEmailButton.addEventListener('click', onVerifyEmailClicked);
  */
  navigator.serviceWorker.addEventListener('message', onServiceWorkerMessage);
  navigator.serviceWorker.controller.postMessage('clientWindowLoaded');
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

const onServiceWorkerMessage = async (event) => {
  console.log('Message recieved from SW: ', event.data);
  const { message } = event.data;
  switch(message.type){
    case 'JOURNEY_INITIALIZED':
      await fetchTask(message.journeyId, 'AwaitEmailVerificationRequestTask');
    default:
      return;
  }
}

const fetchTask = async (journeyId, taskType) => {
  const response = await fetch(`/api/journeyTask`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'strict-origin', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({journeyId, taskType}) // body data type must match "Content-Type" header
  });
}


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUI7QUFDSDtBQUNxQzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxzRUFBNEIsMkJBQTJCLGd0QkFBZ3RCO0FBQy93Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsVUFBVTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwwQkFBMEIsb0JBQW9CO0FBQzlDLEdBQUc7QUFDSCIsImZpbGUiOiIzMzIxNjA5LWFwcC13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAnLi9tYWluLmNzcyc7XG5pbXBvcnQgeyBVc2VyT25ib2FyZGluZ0pvdXJuZXlTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcydcblxuYXN5bmMgZnVuY3Rpb24gb25Mb2FkKCkge1xuICBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCcvc2VydmljZS13b3JrZXIuanMnKS50aGVuKG9uU2VydmljZVdvcmtlclJlZ2lzdGVyZWQsIG9uU2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbkZhaWxlZCk7XG4gIH1cbiAgLypcbiAgY29uc3Qgam91cm5leVN0YXJ0UHJvbWlzZSA9IFVzZXJPbmJvYXJkaW5nSm91cm5leVNlcnZpY2Uuc3RhcnQoKTtcbiAgY29uc3Qgam91cm5leUV4ZWN1dGlvbiA9IGF3YWl0IGpvdXJuZXlTdGFydFByb21pc2U7XG4gIGNvbnNvbGUubG9nKCdqb3VybmV5RXhlY3V0aW9uOiAnLCBqb3VybmV5RXhlY3V0aW9uKVxuICBjb25zdCB2ZXJpZnlFbWFpbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXF1ZXN0RW1haWxWZXJpZmljYXRpb24nKTtcbiAgdmVyaWZ5RW1haWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvblZlcmlmeUVtYWlsQ2xpY2tlZCk7XG4gICovXG4gIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvblNlcnZpY2VXb3JrZXJNZXNzYWdlKTtcbiAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlci5wb3N0TWVzc2FnZSgnY2xpZW50V2luZG93TG9hZGVkJyk7XG59XG5cbmRvY3VtZW50LmJvZHkub25sb2FkID0gb25Mb2FkXG5cbmNvbnN0IG9uVmVyaWZ5RW1haWxDbGlja2VkID0gYXN5bmMgKCkgPT4ge1xuICAvL2NvbnNvbGUubG9nKCdKb3VybmV5IHN0YXJ0ZWQ6ICcsIGRhdGEpXG4gIGF3YWl0IFVzZXJPbmJvYXJkaW5nSm91cm5leVNlcnZpY2UucmVxdWVzdEVtYWlsVmVyaWZpY2F0aW9uKHsgdGFza1Rva2VuOiAnQUFBQUtnQUFBQUlBQUFBQUFBQUFBYnNZUVlhYytsNC8rYkN6YWd4WExyMlNVaTB5QUhQM3RTYTBvVjBDcFRRQVR0RlA1UzFBSWtZNEh5VmxobGN4RUx3RDhkKyt4ekhXL2pPUjJCSVUrc015Q2VFRHdqYWRpWW0xYXlGS3A5UG9wam1tZ3hIK1Y2cTZNNXRIK2xhOWdhMmhWbUhzd0FqeFF0cHplSm43REl5czN4c2VZSTV6RUVlVDVsdTRLNWcyeE1zeHBmTDNwVGpDdXNOQVRWMHZLSzdXM1UvV2dESHRTckxCd2dJenJyNDd1cS9CbHd4OUdwOWpXYlhacXczcmplNWlXQjdldmFlTG9QRXoxWUZCM3Jsb2JnRlU1eTh2Wnh1Snl2OU1xTGlqTEs0eTVnMDNIWDBiMHcvRG1KY29INWtmeWJHc0t3cGZkWGxldzRXWnBCRGJLZW5RbkhuTDJTN0MreFR3WWFiRDBDRytocXlzMkNMdVd4YUI5cmEzKzdBNExua3gwYldFYlJoK1dkemNOay9QcmpCRTFzU0xmQ20vVThoMDByWjBrTW9nYklxVkpoNGV5aUdEOHJUWG5wa2ZVUW1kT1Z2ZEZMU3NDbDlaZ2pJb2dMbElkUGZORzhsYzBjalJVTkpySExOV2JNQlEzTDJYbXU3MnpQUnZNS3p4M2V0M1pjZmZLWEZkaldkNVFFdmhGSWV0NElLaTNNdWlCWWoxZGxuWDVLZDVqdDFRQUpRWFh0K3dUMkEyWDFpakgybVU0ZUJ6dll4aENLWjdxV2c0c09tUnp3K3F4T3RFakpjcHp4YkZqUVVEdmNXQm9vbW1zQXJYTDJ6bmFTakZPYnVlK2drNFZmNlZkNXZiL2xSL2ZseHMzZnZGbXlOZmw3UlE1RHVLd2hxNlFKZm13Smdod1c1K2VZMXYnIH0pXG59XG5cbmNvbnN0IG9uU2VydmljZVdvcmtlclJlZ2lzdGVyZWQgPSAocmVnaXN0cmF0aW9uKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdTZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gc3VjY2VlZGVkOicsIHJlZ2lzdHJhdGlvbik7XG59XG5cbmNvbnN0IG9uU2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbkZhaWxlZCA9IChlcnJvcikgPT4ge1xuICBjb25zb2xlLmxvZygnU2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDonLCBlcnJvcik7XG4gIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG59XG5cbmNvbnN0IG9uU2VydmljZVdvcmtlck1lc3NhZ2UgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgY29uc29sZS5sb2coJ01lc3NhZ2UgcmVjaWV2ZWQgZnJvbSBTVzogJywgZXZlbnQuZGF0YSk7XG4gIGNvbnN0IHsgbWVzc2FnZSB9ID0gZXZlbnQuZGF0YTtcbiAgc3dpdGNoKG1lc3NhZ2UudHlwZSl7XG4gICAgY2FzZSAnSk9VUk5FWV9JTklUSUFMSVpFRCc6XG4gICAgICBhd2FpdCBmZXRjaFRhc2sobWVzc2FnZS5qb3VybmV5SWQsICdBd2FpdEVtYWlsVmVyaWZpY2F0aW9uUmVxdWVzdFRhc2snKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuO1xuICB9XG59XG5cbmNvbnN0IGZldGNoVGFzayA9IGFzeW5jIChqb3VybmV5SWQsIHRhc2tUeXBlKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvam91cm5leVRhc2tgLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgbW9kZTogJ2NvcnMnLFxuICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9LFxuICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgICByZWZlcnJlclBvbGljeTogJ3N0cmljdC1vcmlnaW4nLCAvLyBuby1yZWZlcnJlciwgKm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlLCBvcmlnaW4sIG9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgc2FtZS1vcmlnaW4sIHN0cmljdC1vcmlnaW4sIHN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW4sIHVuc2FmZS11cmxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7am91cm5leUlkLCB0YXNrVHlwZX0pIC8vIGJvZHkgZGF0YSB0eXBlIG11c3QgbWF0Y2ggXCJDb250ZW50LVR5cGVcIiBoZWFkZXJcbiAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9