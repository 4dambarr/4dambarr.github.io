import { graphql, useStaticQuery } from "gatsby";

export const useGetAllProjects = () => {
    const result = useStaticQuery(graphql`
        query getProjects{
            allMarkdownRemark {
              edges {
                node {
                  fileAbsolutePath
                  frontmatter {
                    title
                    slug
                    excerpt
                  }
                }
              }
            }
            allFile(filter: {relativeDirectory: {eq: "projects"}}) {
              edges {
                node {
                  absolutePath
                }
              }
            }
          }
          
    `)

    const projectFilePaths = result.allFile.edges.map(edge => edge.node.absolutePath)
    const projectNodes = result.allMarkdownRemark.edges.filter((edge) => projectFilePaths.includes(edge.node.fileAbsolutePath))

    return projectNodes
}