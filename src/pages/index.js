import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import Faq from "../components/Faq/Faq"
const Index = () => {
  return (
    <>
      <Seo title="OmegaDAO" />
      <Layout>
        <BannerModule title="OmegaDAO" subTitle="Guide Your Alpha" />
        <BasicTextModule />
        <div className="container">
          <h1 className='faq-title'>FAQ</h1>
          <Faq />
        </div>
      </Layout>
    </>
  )
}

export default Index
