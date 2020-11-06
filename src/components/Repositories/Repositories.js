'use strict';

import React from 'react';
import './Repositories.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Repositories(props) {
    return (
        <div className="repositories-wrapper">
            {props.items && props.items.map(item => (
                <div className="repositories-item-wrapper">
                    <div className="repositories-item">
                        <div>
                            <FontAwesomeIcon icon={faGithub} />
                            <a href={item.html_url} target="_blank">{item.name}</a>
                        </div>
                        <p>{item.description || 'No description' }</p>
                        <p>{item.language}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}