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
                    launch_site {
                        site_name_long
                        site_name
                    }
                    links {
                        article_link
                        video_link
                        flickr_images
                    }
                    rocket {
                        rocket_name
                        rocket_type
                    }
                    ships {
                        name
                    }
                }
            }
            `);
  const json = await response.json();
  if (json.errors) return {
      mission_name: `MISSION ${id} NOT FOUND`,
  };

  const { launch } = json.data;

  launch.banner = (launch.links.flickr_images && launch.links.flickr_images.length > 0)
    ? launch.links.flickr_images[0] : null;

  return launch;
};
