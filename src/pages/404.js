import * as React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import "./styles.css"

const NotFoundPage = () => {
  return (
    <main className="pageStyle">
      <Header />
      <div className="contentHolder">
        <p>
          You appear to be lost, which is impressive for such a small site,
          why not find your way back to somewhere your familiar with using 
          the navbar above
        </p>
      </div>
    </main>
  )
}

export default NotFoundPage
