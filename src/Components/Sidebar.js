import React from "react";
import {useSelector} from 'react-redux';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  
  return isMenuOpen && (
    <div className="p-5 shadow-lg w-48">
      <ul className="pt-5">
        <li>Home</li>
        <li> Shorts</li>
        <li> Subscriptions</li>
      </ul>

      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>

      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li> Trending</li>
        <li> Shopping</li>
        <li> Music</li>
        <li> Flims</li>
        <li> Live</li>
        <li> Gaming</li>
        <li> News</li>
        <li> Sport</li>
        <li> Learning</li>
        <li> Fasion & beauty</li>
      </ul>

      <h1 className="font-bold pt-5">More from YouTube</h1>
      <ul>
        <li> YouTube Premium</li>
        <li> YouTube Studio</li>
        <li> YouTube Music</li>
        <li> YouTube Kids</li>
      </ul>

      <ul>
        <li> Settings</li>
        <li> Report history</li>
        <li> Help</li>
        <li> Send feedback</li>
      </ul>
    </div>
  );
};

export default Sidebar;
