// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="Sobre mi">
        <p>Estudiante de UNIR, la mejor universidad en linea. Auditor, Montañista, Bartender</p>
    </Layout>
  )
}


export const Head = () => <Seo title="Sobre mi" />
// Step 3: Export your component
export default AboutPage