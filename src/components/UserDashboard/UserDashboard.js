'use strict';

import React from 'react';
import axios from 'axios';
import { Searchbar } from '../SearchBar';
import Repositories from '../Repositories';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function UserDashboard (props) {
    const [user, setUser] = React.useState();
    const [repositories, setRepositories] = React.useState([]);
    const [isRepositoriesLoading, setIsRepositoriesLoading] = React.useState(false)

    async function loadRepositories(e) {
        e.preventDefault();

        setIsRepositoriesLoading(true)
        let { data } = await axios.get(`/api/loadRepositories?user=${user}`);
        setIsRepositoriesLoading(false)

        setRepositories(data);
    }

    return (
        <div>
            <Searchbar
            placeholder='Github user'
            onSubmit={loadRepositories}
            onChange={e => setUser(e.target.value)}/>

            { !isRepositoriesLoading && <Repositories items={repositories}/> }

            <div className="sweet-loading">
                <ClipLoader
                css={override}
                size={150}
                color={"#123abc"}
                loading={isRepositoriesLoading}
                />
            </div>
        </div>
    );
}