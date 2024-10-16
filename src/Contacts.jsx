import React from 'react'

function Contacts() {
  return (
      <div>
        <div className="question-page mt-24 mx-auto p-5 md:p-8">
          <section id="contact-us" className=" text-gray-300 text-lg">
            <h2 className="text-3xl font-bold mb-6 mt-2">Contact Us</h2>
            <p className="mb-4">We’d love to hear from you! Whether you have questions, feedback, or inquiries about our
              service, please feel free to reach out to us through any of the following channels:</p>

            <h3 className="text-2xl font-semibold mt-6 mb-2">General Inquiries</h3>
            <p className="mb-2">For general questions about NIRMAS or our services, please contact us at:</p>
            <p className="mb-4">
              <strong>Email:</strong> <a href="mailto:nirmas1743@gmail.com"
                                         className="text-blue-400 hover:underline">support@nirmas.com</a><br/>
              <strong>Phone:</strong> <span className="text-gray-300">+91 879-701-9446</span>
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-2">Technical Support</h3>
            <p className="mb-2">If you need assistance with the NIRMAS tool or have technical questions, our support
              team is here to help:</p>
            <p className="mb-4">
              <strong>Email:</strong> <a href="mailto:nirmas1743@gmail.com"
                                         className="text-blue-400 hover:underline">support@nirmas.com</a><br/>
              <strong>Phone:</strong> <span className="text-gray-300">+91 879-701-9446</span>
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-2">Follow Us</h3>
            <p className="mb-2">Stay updated with the latest news and updates from NIRMAS:</p>
            <p className="mb-4">
              {/*<strong>LinkedIn:</strong> <a href="#" className="text-blue-400 hover:underline">NIRMAS LinkedIn</a><br/>*/}
              <strong>Twitter:</strong> <a href="https://x.com/nirmas1743" className="text-blue-400 hover:underline">@NIRMAS_Twitter</a><br/>
              {/*<strong>Facebook:</strong> <a href="#" className="text-blue-400 hover:underline">NIRMAS Facebook</a>*/}
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-2">Feedback</h3>
            <p className="mb-2">Your feedback is valuable to us! Please share your thoughts or suggestions using the
              form below:</p>
            <p>
              <a href="https://forms.gle/LNAqACS3Efnjn3S46" className="text-blue-400 hover:underline">Feedback Form</a>
            </p>
          </section>

        </div>
      </div>
  )
}

export default Contacts