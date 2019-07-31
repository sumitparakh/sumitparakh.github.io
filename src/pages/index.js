import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import "./posts.css";
import { setConfig } from "react-hot-loader";
import "typeface-roboto";
import SEO from "../components/SEO";

setConfig({
  pureSFC: true,
})
const IndexPage = props => {
  const postList = props.data.allMarkdownRemark;
  return (
    <Layout>
      <SEO
        title={"Sumit Parakh Blog"}
        description={"Blogging about Web technologies"}
        url={"https://sumitparakh.dev"}
        pathname={props.location.pathname}
      />

      {postList.edges.map(({ node }, i) => (
        <Link to={node.fields.slug} key={i} className="link">
          <div className="post-list">
            <h1>{node.frontmatter.title}</h1>
            <span>{node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </div>
        </Link>
      ))}
    </Layout>
  )
}

export default IndexPage

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`
