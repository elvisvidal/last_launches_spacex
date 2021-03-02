import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getLastLaunches } from '../services/launchServices';
import convertDate from '../utils/dateUtils';

/**
 * Renders SpaceX last launches list
 */
const LastLaunchesList = () => {
  // vars
  const history = useHistory();
  const [launchesList, setLaunchesList] = useState([]);

  // methods
  const handleClick = (id) => {
    history.push(`/mission/${id}`);
  }

  // fetch
  const fetchLaunches = useCallback(async () => {
    const listResult = await getLastLaunches();
    setLaunchesList(listResult);
  }, []);

  // init
  useEffect(() => {
    fetchLaunches();
  }, [fetchLaunches]);

  return (
    <div className="page page-list">
      <h1 className="page-title">Last Launches 🚀</h1>
      <ul className="card-list-container">
        {launchesList.map((launche) => (
          <li className="card"
            key={launche.id}
            onClick={() => handleClick(launche.id)}
          >
            <div className="card-body">
              <h5 className="card-title">{launche.mission_name}</h5>
              <p className="card-text">{launche.details}</p>
              <h6 className="card-subtitle">{convertDate(launche.launch_date_utc)}</h6>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LastLaunchesList;
