webpackHotUpdate("services",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ29DOztBQUU3QjtBQUNQO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsT0FBTzs7O0FBR1AsS0FBSztBQUNMOztBQUVBO0FBQ0EsMEJBQTBCLCtDQUFNOztBQUVoQztBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWSxnQ0FBZ0M7O0FBRTVDLEdBQUc7O0FBRUgsb0NBQW9DLFlBQVk7QUFDaEQ7O0FBRUEsd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsMkJBQTJCO0FBQzNCO0FBQ0EsQyIsImZpbGUiOiJlODlmNDE1LXNlcnZpY2VzLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBBV1MgZnJvbSAnYXdzLXNkayc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcblxuZXhwb3J0IGNvbnN0IFVzZXJPbmJvYXJkaW5nSm91cm5leVNlcnZpY2UgPSB7XG4gIHN0YXJ0OiBhc3luYyAoKSA9PiB7XG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgQW1hem9uIENvZ25pdG8gY3JlZGVudGlhbHMgcHJvdmlkZXJcbiAgICAvKlxuICAgIEFXUy5jb25maWcucmVnaW9uID0gJ2FwLXNvdXRoLTEnOyAvLyBSZWdpb25cbiAgICBBV1MuY29uZmlnLmNyZWRlbnRpYWxzID0gbmV3IEFXUy5Db2duaXRvSWRlbnRpdHlDcmVkZW50aWFscyh7XG4gICAgICBJZGVudGl0eVBvb2xJZDogJ2FwLXNvdXRoLTE6ZmY1OTFmNGUtNDYzZC00MTBkLWI1M2EtYTRhNWU4M2Q4ZTQ3JyxcbiAgICB9KTtcblxuICAgIEFXUy5jb25maWcuY3JlZGVudGlhbHMuZ2V0KGZ1bmN0aW9uIChlcnIpIHtcblxuICAgICAgLy8gQ3JlZGVudGlhbHMgd2lsbCBiZSBhdmFpbGFibGUgd2hlbiB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZC5cblxuXG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpXG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKCdVbi1hdXRoZW50aWNhdGVkIENyZWRlbnRpYWxzOiAnLCBBV1MuY29uZmlnLmNyZWRlbnRpYWxzKVxuXG4gICAgICBjb25zdCBqb3VybmV5UGFyYW1zID0ge1xuICAgICAgICBzdGF0ZU1hY2hpbmVBcm46ICdhcm46YXdzOnN0YXRlczphcC1zb3V0aC0xOjE2NzEwNDc0MzAwMTpzdGF0ZU1hY2hpbmU6VGVhY2hlck9uYm9hcmRpbmdKb3VybmV5U3RhdGVNYWNoaW5lLUhXdUtSMjRWZ2txcycsIFxuICAgICAgICBuYW1lOiB1dWlkdjQoKSxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHN0ZXBmdW5jdGlvbnMgPSBBV1MuU3RlcEZ1bmN0aW9ucygpO1xuXG4gICAgICBzdGVwZnVuY3Rpb25zLnN0YXJ0RXhlY3V0aW9uKGpvdXJuZXlQYXJhbXMsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcbiAgICAgICAgaWYgKGVycikgY29uc29sZS5sb2coZXJyLCBlcnIuc3RhY2spOyAvLyBhbiBlcnJvciBvY2N1cnJlZFxuICAgICAgICBlbHNlIG9uVXNlckpvdXJuZXlTdGFydGVkKGRhdGEpICAgICAgICAgIC8vIHN1Y2Nlc3NmdWwgcmVzcG9uc2VcbiAgICAgIH0pO1xuXG5cbiAgICB9KTtcbiAgICAqL1xuXG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vbThkbzZ3ZnByay5leGVjdXRlLWFwaS5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vZGV2L2pvdXJuZXknO1xuICAgIGNvbnN0IGV4ZWN1dGlvbk5hbWUgPSB1dWlkdjQoKTtcblxuICAgIGNvbnN0IGV4ZWN1dGlvblBhcmFtcyA9IHtcbiAgICAgIGlucHV0OiBcInt9XCIsXG4gICAgICBzdGF0ZU1hY2hpbmVBcm46ICdhcm46YXdzOnN0YXRlczphcC1zb3V0aC0xOjE2NzEwNDc0MzAwMTpzdGF0ZU1hY2hpbmU6VGVhY2hlck9uYm9hcmRpbmdKb3VybmV5U3RhdGVNYWNoaW5lLUhXdUtSMjRWZ2txcycsXG4gICAgICBuYW1lOiBleGVjdXRpb25OYW1lLFxuICAgIH07XG4gICAgLy8gRGVmYXVsdCBvcHRpb25zIGFyZSBtYXJrZWQgd2l0aCAqXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgICAgIHJlZmVycmVyUG9saWN5OiAnc3RyaWN0LW9yaWdpbicsIC8vIG5vLXJlZmVycmVyLCAqbm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGUsIG9yaWdpbiwgb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luLCBzYW1lLW9yaWdpbiwgc3RyaWN0LW9yaWdpbiwgc3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgdW5zYWZlLXVybFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZXhlY3V0aW9uUGFyYW1zKSAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlICcsIHJlc3BvbnNlKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB7IC4uLmRhdGEsIG5hbWU6IGV4ZWN1dGlvbk5hbWUgfTsgLy8gcGFyc2VzIEpTT04gcmVzcG9uc2UgaW50byBuYXRpdmUgSmF2YVNjcmlwdCBvYmplY3RzXG5cbiAgfSxcblxuICByZXF1ZXN0RW1haWxWZXJpZmljYXRpb246IGFzeW5jICh7IHRhc2tUb2tlbiB9KSA9PiB7XG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vbThkbzZ3ZnByay5leGVjdXRlLWFwaS5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vZGV2L3Rhc2tTdWNjZXNzJztcblxuICAgIGNvbnN0IHRhc2tPdXRwdXQgPSB7IGVtYWlsOiAnZm9vQGJhci5jb20nLCBuYW1lOiAnSm9obiBEb2UnLCBwYXNzd29yZDogJ2hpamliaWppJyB9XG5cbiAgICBjb25zdCB0YXNrQ29tcGxldGlvblBhcmFtcyA9IHtcbiAgICAgIG91dHB1dDogSlNPTi5zdHJpbmdpZnkodGFza091dHB1dCksXG4gICAgICB0YXNrVG9rZW46IHRhc2tUb2tlbixcbiAgICB9O1xuXG4gICAgLy8gRGVmYXVsdCBvcHRpb25zIGFyZSBtYXJrZWQgd2l0aCAqXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgICAgIHJlZmVycmVyUG9saWN5OiAnc3RyaWN0LW9yaWdpbicsIC8vIG5vLXJlZmVycmVyLCAqbm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGUsIG9yaWdpbiwgb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luLCBzYW1lLW9yaWdpbiwgc3RyaWN0LW9yaWdpbiwgc3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgdW5zYWZlLXVybFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGFza0NvbXBsZXRpb25QYXJhbXMpIC8vIGJvZHkgZGF0YSB0eXBlIG11c3QgbWF0Y2ggXCJDb250ZW50LVR5cGVcIiBoZWFkZXJcbiAgICB9KTtcblxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7IC8vIHBhcnNlcyBKU09OIHJlc3BvbnNlIGludG8gbmF0aXZlIEphdmFTY3JpcHQgb2JqZWN0c1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==