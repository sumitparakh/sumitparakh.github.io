import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/SEO";

function Tags(props) {
  const posts = props.data.allMarkdownRemark.edges;
  const { tag } = props.pageContext;

  return (
    <Layout>
      <SEO
        title={`Available posts in ${tag}`}
        description={`Available posts in ${tag}`}
        url={props.location.href}
        pathname={props.location.pathname}
      />
      <h1>{`Available posts in ${tag}`}</h1>
      <div className="tags">
        {posts.map(({ node }, i) => (
          <Link key={i} to={node.fields.slug}>
            {node.frontmatter.title}
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default Tags

export const query = graphql`
  query TagsQuery($tag: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
