import * as React from "react"
import { Button } from "../components/button"
import Header from "../components/header"
import { useGetAllProjects } from "../utills/getAllProjects"
import "./styles.css"
import * as styles from "./projects.module.css"

const Project = () => {
    const projects = useGetAllProjects()
    console.log(projects)

    return (
        <main className="pageStyle">
            <Header />
            <div className="contentHolder">
                {projects.map(project => 
                    <div className={styles.projectHolder}>
                        <p>{project.node.frontmatter.title}</p>
                        <p>{project.node.frontmatter.excerpt}</p>
                        <Button to={`/project${project.node.frontmatter.slug}`} text={"Find out more"} />
                        <div className={styles.line} />
                    </div>
                    )}
            </div>
        </main>
    )
}

export default Project