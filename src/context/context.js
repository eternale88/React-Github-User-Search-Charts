import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

// gives access to Provider, Consumer now handled by useContext hook
//creates initial context
const GithubContext = React.createContext()

//returns Provider component, what you get when you setup context above, later wrap app index.js in GithubProvider, to handle global state
const GithubProvider = ({children}) => {
	return <GithubContext.Provider value={'hello'}
	>
		{children}
	</GithubContext.Provider>
}

export {GithubProvider, GithubContext}