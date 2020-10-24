webpackHotUpdate("app",{

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/*! exports provided: UserOnboardingJourneyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserOnboardingJourneyService", function() { return UserOnboardingJourneyService; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
//import AWS from 'aws-sdk';


const UserOnboardingJourneyService = {
  start: async () => {
    // Initialize the Amazon Cognito credentials provider
    /*
    AWS.config.region = 'ap-south-1'; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'ap-south-1:ff591f4e-463d-410d-b53a-a4a5e83d8e47',
    });

    AWS.config.credentials.get(function (err) {

      // Credentials will be available when this function is called.


      if (err) {
        throw new Error(err)
      }

      console.log('Un-authenticated Credentials: ', AWS.config.credentials)

      const journeyParams = {
        stateMachineArn: 'arn:aws:states:ap-south-1:167104743001:stateMachine:TeacherOnboardingJourneyStateMachine-HWuKR24Vgkqs', 
        name: uuidv4(),
      };

      const stepfunctions = AWS.StepFunctions();

      stepfunctions.startExecution(journeyParams, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else onUserJourneyStarted(data)          // successful response
      });


    });
    */

    const url = 'https://m8do6wfprk.execute-api.ap-south-1.amazonaws.com/dev/journey';
    const executionName = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();

    const executionParams = {
      input: "{}",
      stateMachineArn: 'arn:aws:states:ap-south-1:167104743001:stateMachine:TeacherOnboardingJourneyStateMachine-HWuKR24Vgkqs',
      name: executionName,
    };
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'strict-origin', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(executionParams) // body data type must match "Content-Type" header
    });
    console.log('response ', response);
    const data = await response.json();
    return { ...data, name: executionName }; // parses JSON response into native JavaScript objects

  },

  requestEmailVerification: async ({ taskToken }) => {
    const url = 'https://m8do6wfprk.execute-api.ap-south-1.amazonaws.com/dev/taskSuccess';

    const taskOutput = { email: 'foo@bar.com', name: 'John Doe', password: 'hijibiji' }

    const taskCompletionParams = {
      output: JSON.stringify(taskOutput),
      taskToken: taskToken,
    };

    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'strict-origin', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(taskCompletionParams) // body data type must match "Content-Type" header
    });

    return response.json(); // parses JSON response into native JavaScript objects
  }
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ29DOztBQUU3QjtBQUNQO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsT0FBTzs7O0FBR1AsS0FBSztBQUNMOztBQUVBO0FBQ0EsMEJBQTBCLCtDQUFNOztBQUVoQztBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWSxnQ0FBZ0M7O0FBRTVDLEdBQUc7O0FBRUgsb0NBQW9DLFlBQVk7QUFDaEQ7O0FBRUEsd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsMkJBQTJCO0FBQzNCO0FBQ0EsQyIsImZpbGUiOiJlODlmNDE1LWFwcC13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgQVdTIGZyb20gJ2F3cy1zZGsnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmV4cG9ydCBjb25zdCBVc2VyT25ib2FyZGluZ0pvdXJuZXlTZXJ2aWNlID0ge1xuICBzdGFydDogYXN5bmMgKCkgPT4ge1xuICAgIC8vIEluaXRpYWxpemUgdGhlIEFtYXpvbiBDb2duaXRvIGNyZWRlbnRpYWxzIHByb3ZpZGVyXG4gICAgLypcbiAgICBBV1MuY29uZmlnLnJlZ2lvbiA9ICdhcC1zb3V0aC0xJzsgLy8gUmVnaW9uXG4gICAgQVdTLmNvbmZpZy5jcmVkZW50aWFscyA9IG5ldyBBV1MuQ29nbml0b0lkZW50aXR5Q3JlZGVudGlhbHMoe1xuICAgICAgSWRlbnRpdHlQb29sSWQ6ICdhcC1zb3V0aC0xOmZmNTkxZjRlLTQ2M2QtNDEwZC1iNTNhLWE0YTVlODNkOGU0NycsXG4gICAgfSk7XG5cbiAgICBBV1MuY29uZmlnLmNyZWRlbnRpYWxzLmdldChmdW5jdGlvbiAoZXJyKSB7XG5cbiAgICAgIC8vIENyZWRlbnRpYWxzIHdpbGwgYmUgYXZhaWxhYmxlIHdoZW4gdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQuXG5cblxuICAgICAgaWYgKGVycikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKVxuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZygnVW4tYXV0aGVudGljYXRlZCBDcmVkZW50aWFsczogJywgQVdTLmNvbmZpZy5jcmVkZW50aWFscylcblxuICAgICAgY29uc3Qgam91cm5leVBhcmFtcyA9IHtcbiAgICAgICAgc3RhdGVNYWNoaW5lQXJuOiAnYXJuOmF3czpzdGF0ZXM6YXAtc291dGgtMToxNjcxMDQ3NDMwMDE6c3RhdGVNYWNoaW5lOlRlYWNoZXJPbmJvYXJkaW5nSm91cm5leVN0YXRlTWFjaGluZS1IV3VLUjI0VmdrcXMnLCBcbiAgICAgICAgbmFtZTogdXVpZHY0KCksXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzdGVwZnVuY3Rpb25zID0gQVdTLlN0ZXBGdW5jdGlvbnMoKTtcblxuICAgICAgc3RlcGZ1bmN0aW9ucy5zdGFydEV4ZWN1dGlvbihqb3VybmV5UGFyYW1zLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgIGlmIChlcnIpIGNvbnNvbGUubG9nKGVyciwgZXJyLnN0YWNrKTsgLy8gYW4gZXJyb3Igb2NjdXJyZWRcbiAgICAgICAgZWxzZSBvblVzZXJKb3VybmV5U3RhcnRlZChkYXRhKSAgICAgICAgICAvLyBzdWNjZXNzZnVsIHJlc3BvbnNlXG4gICAgICB9KTtcblxuXG4gICAgfSk7XG4gICAgKi9cblxuICAgIGNvbnN0IHVybCA9ICdodHRwczovL204ZG82d2ZwcmsuZXhlY3V0ZS1hcGkuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2Rldi9qb3VybmV5JztcbiAgICBjb25zdCBleGVjdXRpb25OYW1lID0gdXVpZHY0KCk7XG5cbiAgICBjb25zdCBleGVjdXRpb25QYXJhbXMgPSB7XG4gICAgICBpbnB1dDogXCJ7fVwiLFxuICAgICAgc3RhdGVNYWNoaW5lQXJuOiAnYXJuOmF3czpzdGF0ZXM6YXAtc291dGgtMToxNjcxMDQ3NDMwMDE6c3RhdGVNYWNoaW5lOlRlYWNoZXJPbmJvYXJkaW5nSm91cm5leVN0YXRlTWFjaGluZS1IV3VLUjI0VmdrcXMnLFxuICAgICAgbmFtZTogZXhlY3V0aW9uTmFtZSxcbiAgICB9O1xuICAgIC8vIERlZmF1bHQgb3B0aW9ucyBhcmUgbWFya2VkIHdpdGggKlxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICByZWRpcmVjdDogJ2ZvbGxvdycsXG4gICAgICByZWZlcnJlclBvbGljeTogJ3N0cmljdC1vcmlnaW4nLCAvLyBuby1yZWZlcnJlciwgKm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlLCBvcmlnaW4sIG9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgc2FtZS1vcmlnaW4sIHN0cmljdC1vcmlnaW4sIHN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW4sIHVuc2FmZS11cmxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGV4ZWN1dGlvblBhcmFtcykgLy8gYm9keSBkYXRhIHR5cGUgbXVzdCBtYXRjaCBcIkNvbnRlbnQtVHlwZVwiIGhlYWRlclxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZSAnLCByZXNwb25zZSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4geyAuLi5kYXRhLCBuYW1lOiBleGVjdXRpb25OYW1lIH07IC8vIHBhcnNlcyBKU09OIHJlc3BvbnNlIGludG8gbmF0aXZlIEphdmFTY3JpcHQgb2JqZWN0c1xuXG4gIH0sXG5cbiAgcmVxdWVzdEVtYWlsVmVyaWZpY2F0aW9uOiBhc3luYyAoeyB0YXNrVG9rZW4gfSkgPT4ge1xuICAgIGNvbnN0IHVybCA9ICdodHRwczovL204ZG82d2ZwcmsuZXhlY3V0ZS1hcGkuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2Rldi90YXNrU3VjY2Vzcyc7XG5cbiAgICBjb25zdCB0YXNrT3V0cHV0ID0geyBlbWFpbDogJ2Zvb0BiYXIuY29tJywgbmFtZTogJ0pvaG4gRG9lJywgcGFzc3dvcmQ6ICdoaWppYmlqaScgfVxuXG4gICAgY29uc3QgdGFza0NvbXBsZXRpb25QYXJhbXMgPSB7XG4gICAgICBvdXRwdXQ6IEpTT04uc3RyaW5naWZ5KHRhc2tPdXRwdXQpLFxuICAgICAgdGFza1Rva2VuOiB0YXNrVG9rZW4sXG4gICAgfTtcblxuICAgIC8vIERlZmF1bHQgb3B0aW9ucyBhcmUgbWFya2VkIHdpdGggKlxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICByZWRpcmVjdDogJ2ZvbGxvdycsXG4gICAgICByZWZlcnJlclBvbGljeTogJ3N0cmljdC1vcmlnaW4nLCAvLyBuby1yZWZlcnJlciwgKm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlLCBvcmlnaW4sIG9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgc2FtZS1vcmlnaW4sIHN0cmljdC1vcmlnaW4sIHN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW4sIHVuc2FmZS11cmxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRhc2tDb21wbGV0aW9uUGFyYW1zKSAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpOyAvLyBwYXJzZXMgSlNPTiByZXNwb25zZSBpbnRvIG5hdGl2ZSBKYXZhU2NyaXB0IG9iamVjdHNcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=