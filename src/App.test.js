import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GithubContext, GithubProvider } from './context/context'
import mockUser from './context/mockData.js/mockUser'
import mockRepos from './context/mockData.js/mockRepos'
import TestRenderer from 'react-test-renderer';

// const chartData = [
//   {
//     label: "HTML",
//     value: "13"
//   },
//   {
//     label: "CSS",
//     value: "23"
//   },
//   {
//     label: "JavaScript",
//     value: "80"
//   }
// ]

// const fakeFollowers = [
//   {
//   "login": "capitalist",
//   "id": 1639,
//   "node_id": "MDQ6VXNlcjE2Mzk=",
//   "avatar_url": "https://avatars.githubusercontent.com/u/1639?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/capitalist",
//   "html_url": "https://github.com/capitalist",
//   "followers_url": "https://api.github.com/users/capitalist/followers",
//   "following_url": "https://api.github.com/users/capitalist/following{/other_user}",
//   "gists_url": "https://api.github.com/users/capitalist/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/capitalist/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/capitalist/subscriptions",
//   "organizations_url": "https://api.github.com/users/capitalist/orgs",
//   "repos_url": "https://api.github.com/users/capitalist/repos",
//   "events_url": "https://api.github.com/users/capitalist/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/capitalist/received_events",
//   "type": "User",
//   "site_admin": false
//   }
// ]

// const MockApp = () => {
//   return (
//       <BrowserRouter>
//           <App />
//       </BrowserRouter>
//   )
// }

// const customRender = (ui, {providerProps, ...renderOptions}) => {
//   return render(
//     <GithubContext.Provider {...providerProps}>{ui}</GithubContext.Provider>,
//     renderOptions,
//   )
// }
// const repos = chartData
// test('renders learn react link', () => {
//   const providerProps = {
//     mockUser
//   }
//   customRender(<MockApp/>, {providerProps}
  
//     // <GithubContext.Provider value={{mockUser,repos, fakeFollowers}}>
//     //             <MockApp/>
//     // </GithubContext.Provider>

    
//   )
//   // const element = new TestRenderer.create(
//   //   					<GithubContext.Provider value={{repos}}>
//   //               <MockApp/>
//   //             </GithubContext.Provider>
//   //             )
//   //const { getByText } = render(<MockApp />);
//   // const linkElement = getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
// })

