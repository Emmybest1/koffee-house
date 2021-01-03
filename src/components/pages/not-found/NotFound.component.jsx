import React from 'react';
import {Link} from 'react-router-dom';

import Main from '../../structures/main/Main.component';
import './notfound.style.scss';

const NotFound = () => {
  return (
    <Main>
      <div className="container">
        <h1>Page Not Found!!!</h1>
        <Link to="/" className="container-back__home">
          Back Home
        </Link>
      </div>
    </Main>
  );
};

export default NotFound;
