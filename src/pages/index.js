import * as React from "react"
import Header from "../components/header"
import { useGetIndexContent } from "../utills/getIndexContent"
import "./styles.css"

//import { graphql, useStaticQuery } from "gatsby";

const IndexPage = () => {
  const pageData = useGetIndexContent()
  return (
    <main className="pageStyle">
      <Header />
      <div>
        <div
          className="contentHolder"
          dangerouslySetInnerHTML={{ __html: pageData }}
        />
      </div>
    </main>
  )
}

export default IndexPage