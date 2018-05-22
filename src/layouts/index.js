import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Link from 'gatsby-link'

import Header from '../components/header'
import Footer from '../components/footer'

import favicon from '../assets/2.png'

import bootstrap from '../assets/stylesheets/bootstrap.min.css'
import fontAwesome from '../assets/stylesheets/font-awesome.min.css'
import cleanBlog from '../assets/stylesheets/clean-blog.css'
import paceTheme from '../assets/stylesheets/pace-theme-minimal.css'

var $ = require('jquery');
try {
  window.jQuery = $;
} catch (e) {
  console.log(e)
}
require('../assets/javascripts/bootstrap.bundle.min.js')
require('../assets/javascripts/pace.min.js')
require('../assets/javascripts/clean-blog.min.js')

const Layout = ({ children, data }) => (
  <div>
    <Helmet  title="Blog: Aayush Dutt"
      meta={[
        { name: "description", content: "Cyberlabs' Official Sessions Schedule" },
        { name: "keywords", content: "Cyberlabs, Cyber Labs, IIT Dhanbad, IIT (ISM), Dhanbad, Coding Club" }
      ]}>    
        <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" rel="stylesheet" type="text/css" />
        <link rel="icon" href="/2.png" />
        <link rel="shortcut icon" href="/2.png" />        
    </Helmet>

    <Header />
    {children()}
    <Footer />

  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
