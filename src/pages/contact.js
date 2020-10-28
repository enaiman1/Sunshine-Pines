import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import contactStyles from "./contact.module.scss"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <main className={contactStyles.contactContainer}>
        <div className={contactStyles.wrapper}>
            <div >
          <h3>Let's get in touch</h3>
          <form method="POST">
            <p>
              <label htmlFor="first">First Name</label>
              <input type="text" name="first" />
            </p>
            <p>
              <label htmlFor="last">Last Name</label>
              <input type="text" name="last" />
            </p>

            <p>
              <label htmlFor="email">Email Address</label>
              <input type="text" name="email" />
            </p>
            <p>
              <label htmlFor="phone">Phone Number</label>
              <input type="text" name="phone" />
            </p>
            <p>
              <label htmlFor="address">Address</label>
              <input type="text" name="address" />
            </p>
            <p>
              <label htmlFor="city">City</label>
              <input type="text" name="city" />
            </p>
            <p>
              <label htmlFor="state">State</label>
              <input type="text" name="state" />
            </p>
            <p>
              <label htmlFor="zip">Zip</label>
              <input type="text" name="zip" />
            </p>

            <label for="inquire">For whom are you inquiring?</label>
    <select name="inquire">
      <option value="self">Self</option>
      <option value="parent">Parent</option>
      <option value="spouse">Spouse</option>
      <option value="relative">Relative</option>
      <option value="client">Client</option>
      <option value="other">other</option>
    </select>

            <p >
              <label htmlFor="message">Write your message</label>
              <textarea name="message" cols="30" rows="7"></textarea>
            </p>
            <button className="btn">
              Submit
            </button>
          </form>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default ContactPage
