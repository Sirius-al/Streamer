import React from 'react';
import { Link } from 'react-router-dom'

import GoogleAuth from './GoogleAuth'

const Header = () => {
    return (
      <div>
        <div className="ui menu">
          <Link to="/" className="item">
            <img src="http://pngimg.com/uploads/twitch/twitch_PNG53.png" alt="Logo" />
          </Link>
          <Link to="" className="olive item">Features</Link>
              {/* <div className="item">
                <button className="ui grey button">Sign-in</button>
              </div> */}

          <div className="right menu">
              <Link to="/" className="grey item">All Streams</Link>
              <GoogleAuth />
          </div>
        </div>
      </div>
    );
}

export default Header;
