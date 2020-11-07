/*
  Query Variables

{
  "journeyId": "00866bd6-c55e-4347-9f75-ef3dbaeb380f"
}

*/
const getJourney = /* GraphQL */ `
  query GetJourney($journeyId: String!) {
    getJourney(journeyId: $journeyId) {
      journeyId
      tasks {
        taskToken
        taskType
      }
    }
  }
`;


export default Queries = {
  getJourney
}