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
          {/* TODO: maybe flicker images rotating? */}
          <div className="img-placeholder" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{details.mission_name}</h5>
          <p className="card-text">{details.details}</p>
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
