import React from 'react'
import Link from 'gatsby-link'

const headerLinkStyle = {
  display: "inline-block",
  margin: '0 1em 0 0',
}

const Header = ({linkStyle}) => (
  <div style={{marginBottom: '0rem'}}>
    <div>
      <h4 style={{margin:'0'}}>
        <Link to="/">Jason Trill</Link>
      </h4>
      <div>
        <Link to="/about" style={headerLinkStyle}>about</Link>
        {' '}
        {
          [
            {name:"github", url:"https://www.github.com/jjt"},
            {name:"twitter", url:"https://www.twitter.com/jasontrill"},
          ].map(link => (<a style={headerLinkStyle} href={link.url} key={link.url}>{link.name}</a>))
            .reduce((prev, curr) => [prev, ' ', curr])
        }
      </div>
    </div>
  </div>
)

const Template = ({location, children}) => {
  let rootPath = `/`
  if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`
  }

  return (
    <div className="c">
      <Header linkStyle={headerLinkStyle}/>
      {children()}
    </div>
  )
}

export default Template
