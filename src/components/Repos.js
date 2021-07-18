import React from 'react'
import styled from 'styled-components'
import { GithubContext } from '../context/context'
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts'
const Repos = () => {
  const {repos} = React.useContext(GithubContext)
  // use reduce to get languages of each repo, 
  // and for each language add it to our total and return the total
  let languages = repos.reduce((total, item) => {
    const {language} = item // pull lang out of each repo
    //if language is not false return languages
    if(!language) return total // means don't do anything to languages that are null

    //if total has no value (if lang isn't on obj) create obj, change its value prop to 1
    // if it already has value(on obj) change increment its value prop, /////char map
    if(!total[language]) {
      total[language] = {label: language, value:1}
    } else {
      total[language] = {
        ...total[language],
         value: total[language].value + 1 }
    }
      return total //must return total or reduce won't work
  }, {}) // {} - means that our total starts out as empty obj

  // languages are list of objs like this:
  //{ActionScript:
//    label: "ActionScript"
//    value: 2
//  }

//now we need to get them back into array form to just pick top 5 language
// as some users have many
//Obj.values gives us an array of our key value pairs above
//[
  //{
    //    label: "ActionScript"
    //    value: 2
    //},
//]

// then we sort them so most popular languages display first,
// as we'll remove the others
languages = Object.values(languages)
.sort((a, b) => {
  return b.value - a.value
})
.slice(0, 5)



  //console.log(languages)
  //example chart data
  const chartData = [
    {
      label: "HTML",
      value: "13"
    },
    {
      label: "CSS",
      value: "23"
    },
    {
      label: "JavaScript",
      value: "80"
    }
  ]
  return (
    <section className="section">
      <Wrapper className="section-center">
      {/*Example chart for reference*/}
      {/* <ExampleChart data={chartData}/>*/}
      <Pie3D data={languages}/>
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`

export default Repos
