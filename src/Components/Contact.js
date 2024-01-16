import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      // var street = this.props.data.address.street;
      // var city = this.props.data.address.city;
      // var state = this.props.data.address.state;
      // var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form action="" method="post" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     {/* <button className="submit">Submit</button> */}
                     <a className="submit" onClick={sendWhatsAppMessage}>Submit</a>
                     {/* <a className="button" href="#" onclick="sendWhatsAppMessage(); return false;">Submit</a> */}
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {/* {street} <br /> */}
						   {/* {city}, {state} {zip}<br /> */}
						   <span>{phone}</span>
					   </p>
				   </div>
            </aside>
      </div>
   </section>
    );
  }
}

function sendWhatsAppMessage() {
   // Get form data
   var name = document.getElementById("contactName").value;
   var email = document.getElementById("contactEmail").value;
   var subject = document.getElementById("contactSubject").value;
   var message = document.getElementById("contactMessage").value;

   // Construct WhatsApp message
   var whatsappMessage = "Hi, my name is " + name + ". ";
   whatsappMessage += "I'm contacting you regarding " + subject + ". ";
   whatsappMessage += "My email is " + email + ". ";
   whatsappMessage += "Message: " + message;

   // Construct WhatsApp link
   var phone = "+50662558356";
   var url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(whatsappMessage);

   // Open WhatsApp link
   window.open(url);
}

// Attach event listener to submit button
var submitButton = document.querySelector(".submit");

if (submitButton !== null) {
  submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    sendWhatsAppMessage(); // Call function to send WhatsApp message
  });
}


export default Contact;
