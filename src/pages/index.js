// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Pagina Principal">
    <p>Recorriendo los rincones mas escondidos en Tikal</p>
    <StaticImage
            alt="Tikal, la mas bella ciudad antigua de toda America"
        src="../images/Tikal.JPG"
    ></StaticImage>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Pagina Principal" />

// Step 3: Export your component
export default IndexPage