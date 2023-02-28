import React from 'react';
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import views from './navigationData.json';

//TODO move to types
interface NavigationProps {
  currentView: string
}

const NavigationMenu = ({
  currentView
}: NavigationProps) => {

  return (
      <nav role="navigation" aria-label="Navigation between Airports and Stadiums table data">
      <ul>
        {views?.map((view: {
            name: string,
            link: string
        }) => (
          <li key={`${view.name}-${v4()}`}>
            <Link
              className="navigation"
              to={view.link}
              aria-label={`Current View, ${currentView}`}
              aria-current="page"
            >
              {view.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
