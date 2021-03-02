/**
 * Fetch data with GraphQL
 * @param {String} API url of the api we gonna fetch data
 * @param {String} query GraphQL query string
 */
const fetchData = async (API, query) => {
    return await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
      });
};

export default fetchData;
