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
	const [githubUser, setGithubUser] = useState(mockUser)
	const [repos, setRepos] = useState(mockRepos)
	const [followers, setFollowers] = useState(mockFollowers)
	// requests and loading
	const [requests, setRequests] = useState(0)
	const [loading, setIsLoading] = useState(false)
	//errors
	const [error, setError] = useState({show: false, msg: ""})

	const searchGithubUser = async (user) => {
		// remove toggle error in case any were already there
		toggleError()
		//set loading
		const response = await axios(`${rootUrl}/users/${user}`).
		catch(err => console.log(err))
		console.log(response)

		if(response) {
			setGithubUser(response.data)
			// more logic here
		} else {
			toggleError(true, "there is no user with that username")
		}
	}
	//function that hits api to check for that rate_limit, if rate limit is met we display an error message, limit is 60
	//check rate
	const checkRequestsLimit = () => {
		axios(`${rootUrl}/rate_limit`).then(({data}) => {
			let {
					rate: {remaining}
			} = data
			setRequests(remaining)
			console.log(remaining)
			if(remaining === 0) {
				//throw an error
				toggleError(true, "sorry, you have exceeded your hourly rate limit!")
			}
		}).catch((err) => console.log(err))
	}

	//default params are to set it back to default
	function toggleError(show=false, msg='') {
		setError({show, msg})
	} 
	//check once on every render, removing callback from useEffect allowed us to avoid having to add method to dependency array of useEffect
	useEffect(checkRequestsLimit, [])

	return <GithubContext.Provider 
	value={{githubUser,
		repos,
		followers,
		requests,
		error,
		searchGithubUser
	}}
	>
		{children}
	</GithubContext.Provider>
}

export {GithubProvider, GithubContext}