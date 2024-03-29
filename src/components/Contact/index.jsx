import React, { useState } from "react"
import emailjs from "emailjs-com"
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const Contact = ({ localeLanguage }) => {

  const [emailWasSent, setEmailWasSent] = useState(false)
  const [openEmailResponse, setOpenEmailResponse] = useState(false)
  const [emailResponse, setEmailResponse] = useState('')
  const [emailPayload, setEmailPayload] = useState({
    rnName: '',
    rnEmail: '',
    rnSubject: '',
    rnMessage: ''
  })

  const handleEmailResponse = (response) => {
    setEmailResponse(response)
    setOpenEmailResponse(true)
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return
    setOpenEmailResponse(false)
  }

  const sendEmail = (e) => {
    e.preventDefault()
    if (emailPayload.rnName && emailPayload.rnEmail) {
      emailjs
        .send(
          "service_ddit2ug",
          "template_06vxb2o",
          emailPayload,
          "dB2VNSYyj___lhd9N"
        )
        .then(() => {
          setEmailWasSent(true)
          handleEmailResponse(localeLanguage.responses.success)
        })
        .catch((error) => {
          setEmailWasSent(false)
          handleEmailResponse(localeLanguage.responses.error)
          console.log(error.text)
        })

      setEmailPayload({ rnName: "", rnEmail: "", rnSubject: "", rnMessage: "" })
    } else {
      alert("Please fill in the contact form before submitting")
    }
  }

  return (
    <div id='contact' className='fix'>
      <div className='rn-contact-area ptb--120 bg_color--1'>
        <div className="contact-form--1">
          <div className="container">
            <center>
              <div className="col-lg-8 order-2 order-lg-1">
                <div className="section-title text-left mb--50">
                  <h2 className="title">{localeLanguage.title}</h2>
                  <p className="description">
                    {localeLanguage.description}
                    <a href="mailto:lucas_padilha@icloud.com">
                      {" "}
                      lucas_padilha@icloud.com
                    </a>{" "}
                  </p>
                </div>
                <div className="form-wrapper">
                  <form onSubmit={sendEmail}>
                    <label
                      style={{ float: "left", width: "48%" }}
                      htmlFor="item01"
                    >
                      <input
                        type="text"
                        name="name"
                        id="item01"
                        value={emailPayload.rnName}
                        onChange={(e) => {
                          setEmailPayload({...emailPayload, rnName: e.target.value })
                        }}
                        placeholder={localeLanguage.placeholders.name}
                      />
                    </label>

                    <label
                      style={{ float: "right", width: "48%" }}
                      htmlFor="item02"
                    >
                      <input
                        type="email"
                        name="email"
                        id="item02"
                        value={emailPayload.rnEmail}
                        onChange={(e) => {
                          setEmailPayload({...emailPayload, rnEmail: e.target.value })
                        }}
                        placeholder={localeLanguage.placeholders.email}
                      />
                    </label>

                    <label htmlFor="item03">
                      <input
                        type="text"
                        name="subject"
                        id="item03"
                        value={emailPayload.rnSubject}
                        onChange={(e) => {
                          setEmailPayload({...emailPayload, rnSubject: e.target.value })
                        }}
                        placeholder={localeLanguage.placeholders.subject}
                      />
                    </label>
                    <label htmlFor="item04">
                      <textarea
                        type="text"
                        id="item04"
                        name="message"
                        value={emailPayload.rnMessage}
                        onChange={(e) => {
                          setEmailPayload({...emailPayload, rnMessage: e.target.value })
                        }}
                        placeholder={localeLanguage.placeholders.message}
                      />
                    </label>
                    <button
                      className="rn-btn btn-solid"
                      type="submit"
                      value="submit"
                      name="submit"
                      id="mc-embedded-subscribe"
                    >
                      {localeLanguage.ctaText}
                    </button>
                  </form>
                </div>
              </div>
            </center>
          </div>
          <Snackbar
            open={openEmailResponse}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity={emailWasSent ? 'success' : 'error'}>
              {emailResponse}
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  )
}

export default Contact
