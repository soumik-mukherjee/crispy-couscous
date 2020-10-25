import { openDB, deleteDB, wrap, unwrap } from 'idb';
import { precacheAndRoute } from 'workbox-precaching';
import { UserOnboardingJourneyService } from './services';
import { registerRoute } from 'workbox-routing';

var appDb;

self.addEventListener('message', (evt) => {
    console.log("message: ", evt.data)
    const client = evt.source;
    switch (evt.data) {
        case 'clientWindowLoaded':
            //longPoller = self.setInterval(doOnTimer, 5000, client)
            tryCreateNewJourney(client);
            return;
        default:
            return;
    }

});

self.addEventListener('install', function (event) {
    // The promise that skipWaiting() returns can be safely ignored.
    self.skipWaiting();

    // Perform any other actions required for your
    // service worker to install, potentially inside
    // of event.waitUntil();
});

self.addEventListener('activate', function (event) {
    event.waitUntil(createDB());
    event.waitUntil(self.clients.claim());
    event.waitUntil(registerRoutes());
});

async function createDB() {
    appDb = await openDB('appDb', 1, {
        upgrade(db, oldVersion, newVersion, transaction) {
            const store = db.createObjectStore('userJourneyHistory', {
                keyPath: 'journeyId'
            });
            store.createIndex("byJourneyStatus", "status", { unique: false });
        },
        blocked() {
            // …
        },
        blocking() {
            // …
        },
        terminated() {
            // …
        },
    });
}

const tryCreateNewJourney = async (client) => {
    // Check for any pending journeys, i.e. status !== CANCELLED or !== COMPLETED and === OPEN
    // Only if none are pending, create a new Journey
    console.log('SOME_VAR: ', process.env.SOME_VAR)

    const journey = await appDb.getFromIndex('userJourneyHistory', 'byJourneyStatus', 'OPEN');

    if (typeof journey !== 'undefined') {
        console.log("You have a pending journey: ", journey);
        //return event.target.result;
        const data = { type: 'JOURNEY_INITIALIZED', pendingJourneyFound: true, ...journey }
        client.postMessage({
            message: { ...data }
        });
    }
    else {
        const journeyStartPromise = UserOnboardingJourneyService.start();
        const journeyExecution = await journeyStartPromise;
        console.log('journeyExecution: ', journeyExecution)
        const { journeyId, startDate } = journeyExecution;
        const data = { journeyId, startDate, status: 'OPEN' }
        await appDb.add('userJourneyHistory', data);
        client.postMessage({
            message: { ...data, pendingJourneyFound: false, type: 'JOURNEY_INITIALIZED' }
        });
    }
}

const registerRoutes = () => {

    registerRoute(
        new RegExp('/api/journeyTask'),
        tasksPostRouteHandler,
        'POST'
    );
}

const tasksPostRouteHandler = async ({ url, request, event, params }) => {
    /*
    const response = await fetch(request);
    const responseBody = await response.text();
    return new Response(`${responseBody} <!-- Look Ma. Added Content. -->`); 
    */
    console.log('url, request, event, params', { url, request, event, params })
    return new Response(`Hello World`);
};

precacheAndRoute(self.__WB_MANIFEST);