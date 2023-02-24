import React, { Component } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./Iletisim.css";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

// Email validation
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

// Form validation
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // Validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === "" && (valid = false);
  });

  return valid;
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      number: "",
      subject: "",
      message: "",
      formErrors: {
        name: "",
        email: "",
        number: "",
        subject: "",
        message: "",
      },
    };
  }

  toastifySuccess() {
    toast.success("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
    });
  }

  toastifyFail() {
    toast.error("Form failed to send!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback fail",
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      // Handle form validation success
      const { name, email, number, subject, message } = this.state;

      // Set template params
      let templateParams = {
        name: name,
        email: email,
        number: number,
        subject: subject,
        message: message,
      };

      emailjs.send(
        "service_6s5iw96",
        "template_ycv7jxs",
        templateParams,
        "lj7c85LFsjOz1MHZ4"
      );

      console.log(`
        --SUBMITTING--
        Name: ${name}
        Email: ${email}
        PhoneNumber: ${number}
        Subject: ${subject}
        Message: ${message}
      `);

      this.toastifySuccess();
      this.resetForm();
    } else {
      // Handle form validation failure
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      this.toastifyFail();
    }
  };

  // Function to reset form
  resetForm() {
    this.setState({
      name: "",
      email: "",
      number: "",
      subject: "",
      message: "",
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "name":
        formErrors.name = value.length < 1 ? "Please enter your name." : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Please enter a valid email address.";
        break;
      case "number":
        formErrors.subject =
          value.length < 1 ? "Please enter a cell phone number." : "";
        break;
      case "subject":
        formErrors.subject = value.length < 1 ? "Please enter a subject." : "";
        break;
      case "message":
        formErrors.message = value.length < 1 ? "Please enter a message" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div class="row">
        <div class="col-lg-6s col-md-6 col-sm-12 col-12" style={{padding:"5rem"}}>
            <p className="contactInfo">İletişim Numaralarımız</p>


           
              <WhatsAppIcon className="whatsappLogo"/>
              <p style={{float:"left",fontSize:"large"}}>0552 155 65 24</p>
           
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-12"><iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12270.730315698509!2d39.4938384!3d39.7467805!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x57c6d6ce7769b0dd!2sErzincan%20Bercislina%20G%C3%BCzellik%20Salonu!5e0!3m2!1str!2str!4v1675605218481!5m2!1str!2str"
            className="googleharita"
            style={{
              width: "100%",
              height: "45rem",
              frameBorder: "0",
              allowFullScreen: "",
              referrerpolicy: "no-referrer-when-downgrade",
              ariaHidden: "false",
              tabIndex: "0",
              border: "2px #e30387 solid",
              paddingBottom: "0.5rem",
              paddingTop: "0.5rem",
            }}
          >
            {" "}
          </iframe></div>
        

        <div
          className="col-12 contactFormTemp"
          style={{
            display: "flex",
            justifyContent: "center",

            /*backgroundImage: "url(" + mailback + ")", */
            backgroundColor: "#DCDCDC",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",

            width: "100%",
            marginTop: "1rem",
            marginBottom: "0.5rem",
            borderRadius: "1rem",
          }}
        >
          <div className="col-lg-8 col-md-8 col-sm-12 col-12 m-3">
            <p
              className="iletisimegec"
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#e30387",
                padding: "1%",
                fontSize: "large",
              }}
            >
              Bizimle İletişime Geçebilirsiniz
            </p>

            <form
              id="contact-form"
              style={{ marginLeft: "10%", marginRight: "10%" }}
              onSubmit={this.handleSubmit}
              noValidate
            >
              <div className="row">
                <div className="col-12">
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    className={`form-control formInput ${
                      formErrors.name.length > 0 ? "error" : null
                    }`}
                    onChange={this.handleChange}
                    placeholder="Adınız"
                    noValidate
                  ></input>
                  {formErrors.name.length > 0 && (
                    <span className="errorMessage">{formErrors.name}</span>
                  )}
                </div>
                <br />
                <br />

                <div className="col-12">
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    className={`form-control formInput ${
                      formErrors.email.length > 0 ? "error" : null
                    }`}
                    onChange={this.handleChange}
                    placeholder="Email Adresiniz"
                    noValidate
                  ></input>
                  {formErrors.email.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                  )}
                </div>
                <br />
                <br />
                <div className="col-12">
                  <input
                    type="number"
                    name="number"
                    value={this.state.number}
                    className={`form-control formInput ${
                      formErrors.email.length > 0 ? "error" : null
                    }`}
                    onChange={this.handleChange}
                    placeholder="Cep Telefonunuz"
                    noValidate
                  ></input>
                  {formErrors.number.length > 0 && (
                    <span className="errorMessage">{formErrors.number}</span>
                  )}
                </div>

                <br />
                <br />

                <div className="col-12">
                  <input
                    type="subject"
                    name="subject"
                    value={this.state.subject}
                    className={`form-control formInput ${
                      formErrors.subject.length > 0 ? "error" : null
                    }`}
                    onChange={this.handleChange}
                    placeholder="Konu"
                    noValidate
                  ></input>
                  {formErrors.subject.length > 0 && (
                    <span className="errorMessage">{formErrors.subject}</span>
                  )}
                </div>
                <br />
                <br />

                <div className="col-12">
                  <textarea
                    rows="5"
                    name="message"
                    value={this.state.message}
                    className={`form-control formInput ${
                      formErrors.message.length > 0 ? "error" : null
                    }`}
                    onChange={this.handleChange}
                    placeholder="Mesajınız"
                    noValidate
                  ></textarea>
                  {formErrors.message.length > 0 && (
                    <span className="errorMessage">{formErrors.message}</span>
                  )}
                </div>
              </div>
              <br />

              <div
                className="col-12"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="col-4">
                  <button
                    className="btn btn-primary gonder"
                    type="submit"
                    style={{
                      backgroundColor: "#e30387",
                      display: "block",
                      margin: "auto",
                      align: "justify",
                    }}
                  >
                    <b>Gönder</b>
                  </button>
                </div>
              </div>
              <br />
            </form>
          </div>

          <ToastContainer />
        </div>
      </div>
    );
  }
}
export default ContactForm;
