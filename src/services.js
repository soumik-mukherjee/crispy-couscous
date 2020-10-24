//import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

export const UserOnboardingJourneyService = {
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
    const executionName = uuidv4();

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
    return { ...data, journeyId: executionName }; // parses JSON response into native JavaScript objects

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