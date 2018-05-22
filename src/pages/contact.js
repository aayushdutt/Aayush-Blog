import React from "react";
import SubHeader from '../components/sub-header'


export default function Contact() {
  return (
      <div>
        <SubHeader title="Contact Me" subtitle="Have questions? I have answers." imageFolder="img" imageName="contact-bg.jpg" />
        {/* Main Content*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
              {/* Contact Form - Enter your email address on line 19 of the mail/contact_me.php file to make this form work.*/}
              {/* WARNING: Some web hosts do not allow emails to be sent through forms to common mail hosts like Gmail or Yahoo. It's recommended that you use a private domain email address!*/}
              {/* To use the contact form, your site must be on a live web host with PHP! The form will not work locally!*/}
              <form id="contactForm" name="sentMessage" action="https://formspree.io/aayushd100@gmail.com" method="POST" noValidate>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label>Name</label>
                    <input id="name" type="text" name="name" placeholder="Name" required data-validation-required-message="Please enter your name." className="form-control" />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label>Message</label>
                    <textarea id="message" rows={5} placeholder="Message" name="name" required data-validation-required-message="Please enter a message." className="form-control" defaultValue={""} />
                    <p className="help-block text-danger" />
                  </div>
                </div><br />
                <div id="success" />
                <div className="form-group">
                  <button id="sendMessageButton" type="submit" className="btn btn-primary">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr />
      </div>
  );
}