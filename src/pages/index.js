import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"

const Index = () => {
  return (
    <>
      <Seo title="OmegaDAO" />
      <Layout>
        <BannerModule
          title="OmegaDAO"
          subTitle="Guide Your Alpha"
        />
        <BasicTextModule />
      </Layout>
    </>
  )
}

export default Index
