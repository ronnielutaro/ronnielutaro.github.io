import * as React from 'react'
import Layout from '../components/layouts/layout'
import Seo from '../components/layouts/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle='Home'>
      <p>Software Engineer | C# .NET Developer | Filmmaker</p>
    </Layout>
  )
}

export const Head = () => <Seo title='Home Page' />

export default IndexPage
