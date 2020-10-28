import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import aboutStyles from "./about.module.scss"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <main className={aboutStyles.mainBody}>
        <h2>Who is Sunshine Pines of Florida</h2>
        <p>
          Our mission is to serve people — residents, team members and our
          neighbors in the greater community. As a not-for-profit organization,
          our sole purpose is to serve older adults, by providing beautiful and
          quality environments to enhance lifestyles at every level of
          independence.
        </p>
        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum.
          Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
          Integer eu nibh at nisi ullamcorper sagittis id vel leo.
        </p>
        <h3>Happy is having <span>fantastic</span> choices.</h3>
        <p>
        Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.
        </p>
      </main>
    </Layout>
  )
}

export default AboutPage
