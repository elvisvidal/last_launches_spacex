const Page404 = () => {
  return (
    <div className="page page-404">
      <div className="card">
        <div className="card-header">
          <img
            className="card-banner"
            src={'../crash.gif'}
            alt="SpaceX rocket crashing"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">Page Not Found</h5>
          <p className="card-text">Sorry, the page you were looking for does not exist or is not available</p>
        </div>
      </div>
    </div>
  );
};

export default Page404;
