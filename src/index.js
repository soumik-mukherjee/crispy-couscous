import _ from 'lodash';
import './main.css';
import { UserOnboardingJourneyService } from './services'

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
  await UserOnboardingJourneyService.requestEmailVerification({ taskToken: 'AAAAKgAAAAIAAAAAAAAAAbsYQYac+l4/+bCzagxXLr2SUi0yAHP3tSa0oV0CpTQATtFP5S1AIkY4HyVlhlcxELwD8d++xzHW/jOR2BIU+sMyCeEDwjadiYm1ayFKp9PopjmmgxH+V6q6M5tH+la9ga2hVmHswAjxQtpzeJn7DIys3xseYI5zEEeT5lu4K5g2xMsxpfL3pTjCusNATV0vKK7W3U/WgDHtSrLBwgIzrr47uq/Blwx9Gp9jWbXZqw3rje5iWB7evaeLoPEz1YFB3rlobgFU5y8vZxuJyv9MqLijLK4y5g03HX0b0w/DmJcoH5kfybGsKwpfdXlew4WZpBDbKenQnHnL2S7C+xTwYabD0CG+hqys2CLuWxaB9ra3+7A4Lnkx0bWEbRh+WdzcNk/PrjBE1sSLfCm/U8h00rZ0kMogbIqVJh4eyiGD8rTXnpkfUQmdOVvdFLSsCl9ZgjIogLlIdPfNG8lc0cjRUNJrHLNWbMBQ3L2Xmu72zPRvMKzx3et3ZcffKXFdjWd5QEvhFIet4IKi3MuiBYj1dlnX5Kd5jt1QAJQXXt+wT2A2X1ijH2mU4eBzvYxhCKZ7qWg4sOmRzw+qxOtEjJcpzxbFjQUDvcWBoommsArXL2znaSjFObue+gk4Vf6Vd5vb/lR/flxs3fvFmyNfl7RQ5DuKwhq6QJfmwJghwW5+eY1v' })
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
