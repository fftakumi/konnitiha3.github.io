import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    navLinkTitle,
    siteTitle,
    siteFooter
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header className={siteTitle}>
                <Link to={"/"} className={navLinkTitle}>
                    {data.site.siteMetadata.title}
                </Link>
            </header>
            <div className={container}>
                <nav>
                    <ul className={navLinks}>
                        <li className={navLinkItem}>
                            <Link to="/" className={navLinkText}>
                                Home
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/app" className={navLinkText}>
                                App
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/blog" className={navLinkText}>
                                Blog
                            </Link>
                        </li>
                    </ul>
                </nav>
                <main>
                    <h1 className={heading}>{pageTitle}</h1>
                    {children}
                </main>
            </div>
            <footer className={siteFooter}></footer>
        </>
    )
}

export default Layout