import "./hakkımızda.css";
import React from "react";
import useDocumentTitle from "../../useDocumentTitle.js";
import Title from "../title/Title";

function Hakkimizda() {
  useDocumentTitle("Erzincan Bercislina Güzellik Merkezi");
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
        <Title page_title="Hakkımızda" />

        <div className="card-body col-12" style={{ padding: "3rem" }}>
          <br />
          <p class="hizmetyazi">
            Huzurlu atmosferi, güvenliği, teknolojik donanımı, deneyimli güler
            yüzlü ekibi ile estetik ve güzellik sektöründe Erzincan’da merkezi
            konumuyla siz değerli müşterilerimizin hizmetinizdedir. Lazer
            Epilasyon, Dermatolojik ürünlerle Cilt Bakımı,
            Bölgesel Zayıflama hizmetlerimiz
            profosyenel ürünlerle kaliteden ödün vermeden uygulanmaktadır.
            Ayrıca en son teknoloji Lazer Epilasyon Cihazı ile istenmeyen
            tüylerden en kısa sürede kurtularak, pürüzsüz bir cilde
            kavuşuyorsunuz. Ailenizden biri olmayı amaçlayan Erzincan Bercislina
            Güzellik Salonu; son derece güvenli, hijyenik ve modern olan ve aynı
            zamanda zevkli bir tasarıma sahip olan salonu ile değerli
            müşterilerine kendilerini evlerinde hissedecekleri sıcak, samimi ve
            konforlu bir ortam sunmaya devam ediyor.
          </p>
          <p class="hizmetyazi">
            Yılların verdiği özgüven ve tecrübe ile daima en iyiyi hedefleyen bu
            doğrultu da yıllardır ekip ve ekipmanı ile sektörün vazgeçilmezi
            olmak için emin adımlarla, şehrin gözdesi Erzincan merkezde ileri seviye hizmet vermektedir. danışanlarımıza, memnuniyet ve sonuç odaklı profesyonel
            uygulamalar sağlıyoruz.
          </p>

          <p class="hizmetyazi">
            Erzincan Bercislina Güzellik Merkezi olarak Lazer Epilasyon, G5
            Masajı, Kavitasyon, Kirpik Lifting, Yosun Peeling,
            Hydrafacial Cilt Bakımı hizmetlerimiz mevcuttur. Kampanyalarımız ve
            detaylar için sosyal medya hesaplarımızı takipte kalın. Erzincan
            Bercislina Güzellik Salonu olarak şehrin merkezinde bulunan
            salonumuzda siz değerli müşterilerimize hizmet vermekteyiz. Bayanlar
            ve baylar için epilasyon ve cilt bakım hizmetlerimiz bulunmaktadır.
            Erkekler için ense, boyun, yanak, göbek, göğüs, sırt ve kol
            bölgeleri epilasyon hizmetimiz vardır. Ayrıca medikal ve hydrafacial
            cilt bakımlarımız da bulunmaktadır. Bayanlar için tüm vücut, bikini
            bölgesi için epilasyon hizmetlerimiz mevcuttur. Hydrafacial ve
            medikal cilt bakımlarımız bulunmaktadır. G5 masajı, selülit
            sıkılaştırma, bölgesel inceltme hizmetlerimiz mevcuttur. RobotX
            marka epilasyon cihazlarımızla 6 odalı salonumuzda aynı anda birkaç
            müşterimize hizmet verebilmekteyiz.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hakkimizda;
