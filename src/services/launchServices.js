import fetchData from '../utils/serviceUtils';

const API = 'https://api.spacex.land/graphql/';

/**
 * gets a list of spaceX last 10 launches
 * @returns {Array}
 */
export const getLastLaunches = async () => {
  const response = await fetchData(API, `
            { 
                launchesPast(limit: 10, order: "desc", sort: "launch_date_utc") {
                    id
                    launch_date_utc
                    mission_name
                    details
                }
            }
            `);
  const json = await response.json();

  return json.data.launchesPast;
};

/**
 * gets an object of a spaceX launch
 * @param {interger} id launch details
 * @returns {Object}
 */
export const getLaunchById = async (id) => {
  const response = await fetchData(API, `
            { 
                launch(id: ${id}) {
                    id
                    mission_name
                    details
                    links {
                        article_link
                        video_link
                    }
                }
            }
            `);
  const json = await response.json();

  return json.data.launch;
};
