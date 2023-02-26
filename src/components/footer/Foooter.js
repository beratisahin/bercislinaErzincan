import "./Foooter.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MainLogo2 from "../header/berErzLogo.png";

import React, { Component } from "react";

export default class Foooter extends Component {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div id="footer">
        <div
          class="row p-4"
          style={{ backgroundColor: "white", height: "auto" }}
        >
          <div
            className="col-lg-4 col-md-6 col-sm-6 col-12"
            style={{ fontSize: "15px", marginBottom: "2rem" }}
          >
            <a
              href="/"
              title="Erzincan Bercislina Güzellik Merkezi"
              alt="Erzincan Bercislina Güzellik Merkezi"
            >
              <img
                src={MainLogo2}
                alt="logo"
                style={{
                  width: "24rem",
                  height: "18rem",
                  display: "block",
                  align: "center",
                  margin: "auto",
                }}
              ></img>
            </a>
            <p
              className="mt-4"
              style={{
                fontSize: "14px",
                fontFamily: "sans-serif",
                textAlign: "justify",
                textIndent: "1px",
              }}
            >
              {" "}
              Erzincan Bercislina Güzellik Merkezi olarak alanında uzman
              personellerimizle siz değerli danışanlarımıza lazer epilasyon,
              kavitasyon, bölgesel incelme, slim zayıflama, kirpik lifting,
              yosun peeling, hydrafacial cilt bakımı vb alanlarında
              hijyenik ortamda en iyi şekilde hizmet vermek temel önceliğimizdir.
              Son teknoloji cihazlarımızla bayanlar ve baylar için hizmetlerimiz
              bulunmaktadır.
            </p>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-6 col-12"
            style={{ fontSize: "12px", marginBottom: "2rem" }}
          >
            <b style={{ color: "#e30387", fontSize: "18px" }}>
              Çalışma Takvimi
            </b>
            <hr />
            <table class="table table-striped">
              <tbody>
                <tr style={{ height: "2px" }}>
                  <td>Pazartesi</td>
                  <td>09:00 - 19:30</td>
                </tr>
                <tr>
                  <td>Salı</td>
                  <td>09:00 - 19:30</td>
                </tr>
                <tr>
                  <td>Çarşamba</td>
                  <td>09:00 - 19:30</td>
                </tr>
                <tr>
                  <td>Perşembe</td>
                  <td>09:00 - 19:30</td>
                </tr>
                <tr>
                  <td>Cuma</td>
                  <td>09:00 - 19:30</td>
                </tr>
                <tr>
                  <td>Cumartesi</td>
                  <td>09:00 - 19:30</td>
                </tr>
                <tr>
                  <td>Pazar</td>
                  <td>09:00 - 19:30</td>
                </tr>
              </tbody>
            </table>

            <p style={{ color: "red", fontSize: "13px" }}></p>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-6 col-12"
            style={{ fontSize: "15px", marginBottom: "2rem" }}
          >
            <p
              style={{ color: "#e30387", fontWeight: "bold", fontSize: "18px" }}
            >
              Erzincan Bercislina Güzellik Merkezi
            </p>
            <hr />
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left" }}
            >
              <FacebookIcon className="icon" style={{ fontSize: "24px" }} />
            </a>
            <a
              href="https://www.instagram.com/bercislina_guzellik_erzincan/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", textIndent: "10px" }}
            >
              <InstagramIcon
                className="icon"
                style={{ fontSize: "24px", color: "purple" }}
              />
            </a>
            <a
              href="https://wa.me/+905521556524"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", textIndent: "10px" }}
            >
              <WhatsAppIcon
                className="icon"
                style={{ fontSize: "24px", color: "lightgreen" }}
              />
            </a>
            <a
              href="tel: +905521556524"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", textIndent: "10px" }}
            >
              <SettingsPhoneIcon
                className="icon"
                style={{ fontSize: "24px" }}
              />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", textIndent: "10px", color: "red" }}
            >
              <YouTubeIcon className="icon" style={{ fontSize: "24px" }} />
            </a>
            <br />
            <br />
            <p style={{ fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a href="mailto:bercislinaerzincan@gmail.com">
                <EmailIcon style={{ fontSize: "24px" }} />
              </a>
              &nbsp; bercislinaerzincan@gmail.com
            </p>
            <p style={{ fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a
                href="tel: +905521556524"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SettingsPhoneIcon style={{ fontSize: "24px" }} />
              </a>
              &nbsp; 0552 155 65 24 <FontAwesomeIcon icon="coffee" size="lg" />
            </p>
            <p style={{ fontSize: "14px", textAlign: "left" }}>
              <a
                href="https://goo.gl/maps/6ue7GirtpBLKSZVdA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HomeIcon style={{ fontSize: "24px" }} />
              </a>
              &nbsp; Atatürk Mahallesi Fevzi Paşa Caddesi Ünsal Plaza <br />{" "}
              Daire: 21 Kat:2/4{" "}
              <b style={{ paddingLeft: "10px" }}>Merkez / Erzincan</b>{" "}
            </p>
          </div>

          <div className="col-12">
            <hr />
            <div className="patent">
              <p
                style={{ fontSize: "12px", paddingLeft: "1rem", float: "left" }}
              >
                {" "}
                ©2023 All Rights Reserved
              </p>
              &nbsp; &nbsp;
              <a
                className="sebertech"
                href="https://wa.me/+905449125561?text=Merhaba%20Berati%20Bey%2C%20web%20sitesi%20hizmetiniz%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "12px",
                  paddingRight: "1rem",
                  float: "right",
                  textAlign: "right",
                  color: "black",
                }}
              >
                {" "}
                ®Se<b>B</b>er Tech
              </a>
            </div>
          </div>

          <div className="roof-location">
            <a
              href="https://goo.gl/maps/6ue7GirtpBLKSZVdA"
              className="location_float"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LocationOnIcon className="location-icon" />
            </a>
          </div>

          <div className="roof-phone">
            <a
              href="tel: +905521556524"
              className="phone_float"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PhoneIcon className="phone-icon" />
            </a>
          </div>

          <div className="roof-whatsapp">
            <a
              href="https://wa.me/+905521556524"
              className="whatsapp_float"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="whatsapp-icon" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
