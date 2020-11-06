(function() {
    'use strict';

    const axios = require("axios");

    module.exports = {
        async getUserRepositories(user) {
            if(!user) throw new Error("User needed");

            try {
                let { data } = await axios.get(`https://api.github.com/users/${user}/repos`)
                return data
            } catch (error) {
                throw new Error(error.message);
            }
        }
    }
})();