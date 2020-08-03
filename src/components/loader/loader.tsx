import * as React from 'react';


const Loader: React.FunctionComponent = () => {
  return (
    <div className="loader">
      <div className="loader__ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="loader__text">Loading...</p>
    </div>
  );
};

export default Loader;
