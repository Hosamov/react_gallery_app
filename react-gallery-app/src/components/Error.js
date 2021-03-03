import React from 'react';

const Err = () => {

  return(
    <div className="not-found">
      <h2>Page Not Found</h2>
      <form action="/">
        <button type="submit">Return to Homepage</button>
      </form>
    </div>
  );
}

export default Err;
