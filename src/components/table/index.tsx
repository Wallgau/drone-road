import React from 'react';
import { Link } from 'react-router-dom';

const Table = () => (
    <table>
        <thead>
            <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>
                    <Link to={'/details'}>Get Details</Link>
                </td>
            </tr>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
            </tr>
        </tbody>
  </table>
);

export default Table;