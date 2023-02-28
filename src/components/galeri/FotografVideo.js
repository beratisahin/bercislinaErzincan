import "./FotografVideo.css";
import React from 'react';
import useDocumentTitle from "../../useDocumentTitle";
import Title from "../title/Title";
import Instagram from "./bercislinaErzincanProfil.webp"

export default function FotografVideo() {
    useDocumentTitle('Fotoğraflar- Erzincan Bercislina Güzellik Merkezi');
    return (
        <div className="col-12">
          <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
               <Title 
                    page_title="Fotoğraf ve Video"
               />
                <br/>
                <p className="instaLink" style={{textAlign:"center",color:"gray"}}>Detaylı güncel fotoğraf ve videolar için <a className="instagram"  href="https://www.instagram.com/bercislina_guzellik_erzincan/" target="_blank">Bercislina Erzincan Güzellik Merkezi</a> instagram profilimizi ziyaret edebilirsiniz. </p>
                <img src={Instagram} style={{width:"95%",height:"auto"}}></img>
            </div>
            
        </div>
    )
}



