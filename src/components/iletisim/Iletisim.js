import "./Iletisim.css";
import React from "react";
import useDocumentTitle from "../../useDocumentTitle.js";
import Title from "../title/Title";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Mail from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactMailIcon from '@material-ui/icons/ContactMail';


function Iletisim() {
  useDocumentTitle("İletişim - Erzincan Bercislina Güzellik Merkezi ");
  return (
    <div className="col-12">
      <div
        className="card m-4"
        style={{
          align: "center",
          backgroundColor: "#f8f7fb",
          borderRadius: "5px",
        }}
      >
        <Title page_title="İletişim" />
      </div>

      <div
        class="col-lg-6s col-md-6 col-sm-12 col-12"
        style={{ }}
      >
        <p className="contactInfo">İletişim Bilgilerimiz</p>

        <p style={{ fontSize: "medium", textAlign: "left" }}>
              {" "}
              <a href="mailto:bercislinaerzincan@gmail.com">
                <ContactMailIcon style={{ fontSize: "x-large" }} />
              </a>
              &nbsp; bercislinaerzincan@gmail.com
            </p>
            <p style={{ fontSize: "medium", textAlign: "left", }}>
              {" "}
              <a
                href="tel: +905521556524"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon style={{ fontSize: "x-large",color:"#25d366" }} />
              </a>
              &nbsp; <b>0552 155 65 24</b> <FontAwesomeIcon icon="coffee" size="lg" />
            </p>
            <p style={{ fontSize: "medium", textAlign: "left" }}>
              <a
                href="https://goo.gl/maps/6ue7GirtpBLKSZVdA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LocationOnIcon style={{ fontSize: "x-large",color:"#c71535" }} />
              </a>
              &nbsp; Atatürk Mahallesi Fevzi Paşa Caddesi Ünsal Plaza Daire: 21 Kat:2/4{" "} <br/>Merkez / Erzincan{" "}
            </p>
      </div>











      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
        <iframe
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
        </iframe>
      </div>
        <Mail/>

    </div>
  );
}

export default Iletisim;
