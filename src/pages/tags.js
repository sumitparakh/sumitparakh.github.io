import React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";

function TagsPage(props) {
  const data = props.data.allMarkdownRemark.group;

  return (
    <Layout>
      <div className="tags">
        <h1>All tags</h1>
        {data.map(tag => (
          <Link to={`/${tag.fieldValue}`}>
            {tag.fieldValue} {`(${tag.totalCount})`}
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
