import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import { RootState } from '../../core/store';
import './navigation.style.css';
import views from './navigationData.json';

const NavigationMenu = () => {
    const view = useSelector((state: RootState) => state.dataReducer.view);
    return (
        <nav
            role="navigation"
            aria-label="Navigation between Airports and Stadiums table data"
            className="navigation"
        >
            <ul className={'navigation-list'}>
                {views?.map((eachView: { name: string; link: string }) => (
                    <li
                        key={`${eachView.name}-${v4()}`}
                        className={
                            eachView.name === view
                                ? 'navigation-item navigation-item-choosed'
                                : 'navigation-item'
                        }
                    >
                        <Link
                            className="navigation-link"
                            to={eachView.link}
                            aria-label={`Current View, ${view}`}
                            aria-current="page"
                        >
                            {eachView.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavigationMenu;
