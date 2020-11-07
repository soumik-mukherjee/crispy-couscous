//import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import Amplify from "@aws-amplify/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { default as JourneyApiQueries } from './graphql/queries'

const journeyAppSyncConfig = {
  'aws_appsync_graphqlEndpoint': process.env.JOURNEY_APPSYNC_ENDPOINT,
  'aws_appsync_region': process.env.JOURNEY_APPSYNC_REGION,
  'aws_appsync_authenticationType': 'API_KEY',
  'aws_appsync_apiKey': process.env.JOURNEY_APPSYNC_APIKEY,
}

export const UserOnboardingJourneyService = {
  /*
  client : new AWSAppSyncClient({
    url: process.env.JOURNEY_APPSYNC_ENDPOINT,
    region: process.env.JOURNEY_APPSYNC_REGION,
    auth: {
      type: "API_KEY",
      apiKey:  process.env.JOURNEY_APPSYNC_APIKEY,
    }
  }),
  */
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

  requestEmailVerification: async ({ taskToken, email, name, password }) => {
    const url = `${process.env.TASKS_API_ENDPOINT}/taskSuccess`;
    const taskOutput = { email, name, password }
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
  },

  fetchTask: async ({ journeyId, taskType }) => {
    Amplify.configure(myAppConfig);
    const getJourneyResponse = await API.graphql(
      graphqlOperation(JourneyApiQueries.getJourney, {
        journeyId: journeyId,
      })
    );

    const {
      tasks
    } = getJourneyResponse.data.getJourney;

    if(Array.isArray(tasks)){
      const task = tasks.find( (task) => task.taskType === taskType )
      return task
    }
  }
}