
import { graphql, useStaticQuery } from "gatsby";

export const useGetIndexContent = () => {
    const result = useStaticQuery(graphql`
        query getIndexContent {
            allMarkdownRemark {
            edges {
                node {
                html
                fileAbsolutePath
                }
            }
            }
            allFile(filter: {relativeDirectory: {eq: "index"}}) {
            edges {
                node {
                absolutePath
                }
            }
            }
        }
    `)

    const indexFilePath = result.allFile.edges[0].node.absolutePath
    const indexNode = result.allMarkdownRemark.edges.filter((edge) => edge.node.fileAbsolutePath === indexFilePath)[0].node

    return indexNode.html
}