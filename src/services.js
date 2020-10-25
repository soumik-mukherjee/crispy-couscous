//import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

export const UserOnboardingJourneyService = {
  start: async () => {
    const url = `${process.env.JOURNEY_API_ENDPOINT}/journey`;
    const executionName = uuidv4();

    const executionParams = {
      input: "{}",
      stateMachineArn: `${process.env.JOURNEY_ARN}`,
      name: executionName,
    };
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'strict-origin', 
      body: JSON.stringify(executionParams) 
    });
    console.log('response ', response);
    const data = await response.json();
    return { ...data, journeyId: executionName }; 

  },

  requestEmailVerification: async ({ taskToken }) => {
    const url = 'https://m8do6wfprk.execute-api.ap-south-1.amazonaws.com/dev/taskSuccess';

    const taskOutput = { email: 'foo@bar.com', name: 'John Doe', password: 'hijibiji' }

    const taskCompletionParams = {
      output: JSON.stringify(taskOutput),
      taskToken: taskToken,
    };

    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'strict-origin', 
      body: JSON.stringify(taskCompletionParams) 
    });

    return response.json();
  }
}