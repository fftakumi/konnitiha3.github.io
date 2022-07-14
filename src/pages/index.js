import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import '../style.css'

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>趣味程度で更新していきます</p>
            <StaticImage
                alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
                src="../images/icon.png"
            />
        </Layout>
    )
}

export default IndexPage