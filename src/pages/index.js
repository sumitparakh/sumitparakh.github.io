import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <a href="https://github.com/sumitparakh" target="_blank" style={{color: "rebeccapurple"}} rel="noopener noreferrer">
        <i class="fab fa-github fa-2x"></i>
      </a>
    </div><br/>
    <h1>Coming Soon!!</h1>
  </Layout>
)

export default IndexPage
