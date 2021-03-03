import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getLaunchById } from '../services/launchServices';

/**
 * Renders the Launch Detail
 */
const LaunchDetails = () => {
  // vars
  const { launchId } = useParams();
  const [details, setDetails] = useState([]);

  // fetch
  const fetchDetails = useCallback(async () => {
    const detailResult = await getLaunchById(launchId);
    setDetails(detailResult);
  }, [launchId]);

  // init
  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  return (
    <div className="page page-details">
      <div className="card">
        <div className="card-header">
          <img
            className="card-banner"
            src={details.banner || '../default_banner.jpg'}
            alt={details.mission_name}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{details.mission_name}</h5>
          <p className="card-text">{details.details}</p>
          {details.launch_site &&
            <div className="card-site">
              <h6 className="card-subsection">Launch Site</h6>
              <p className="card-site-name">
                <strong>Name: </strong>
                <span>{details.launch_site.site_name}</span>
              </p>
              <p className="card-long-name">
                <strong>Long Name: </strong>
                <span>{details.launch_site.site_name_long}</span>
              </p>
            </div>
          }
          {details.ships && details.ships.length > 0 &&
            <>
              <h6 className="card-subsection">Ships</h6>
              {details.ships.map((ship, key) =>
                <p key={key} className="card-ship-name">
                  <strong>Name: </strong>
                  <span>{ship.name}</span>
                </p>
              )}
            </>
          }
          {details.links &&
            <a
              className="card-external-link"
              href={details.links.article_link || details.links.video_link}
              rel="noreferrer"
              target="_blank"
            >See more</a>
          }
        </div>
      </div>
    </div>
  );
};

export default LaunchDetails;
