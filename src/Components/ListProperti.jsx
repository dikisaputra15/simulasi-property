import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

const ukuran = {
  "30/60": {
    image:
      "https://media-id-live.propertypro.co.id/bm9uZS9ub25l/1080x650/4860f2397a94a9.jpg",
    price: "170000000",
  },
  "40/72": {
    image:
      "https://i.pinimg.com/originals/af/71/76/af71760108ababf53abe07ec25a2014b.png",
    price: "200000000",
  },
  "45/85": {
    image:
      "https://d3p0bla3numw14.cloudfront.net/news-content/img/2020/09/17200410/harga-rumah-tipe-45.jpg",
    price: "250000000",
  },
};

const pondasi = {
  "batu kali": {
    image:
      "https://gocement.com/blog/wp-content/uploads/2023/08/photo-1494861895304-fb272971c078.jpeg",
    price: "4000000",
  },
  beton: {
    image:
      "https://housingestate.id/wp-content/uploads/2015/10/beton-precast.jpg",
    price: "8000000",
  },
};

const dinding = {
  batako: {
    image:
      "https://assets.gocement.com/fit-in/filters:format(webp)/product/46532/mediafiles/8Pq8sUIOwBJrLk1bWhk56y9ogf0Aj7fC8Mel9vMT.png",
    price: "6000000",
  },
  hebel: {
    image:
      "https://www.renos.id/blog/wp-content/uploads/2023/06/009d41236bf178f670fe587db15b1087.jpg",
    price: "10000000",
  },
  "bata merah": {
    image:
      "https://e-katalog.lkpp.go.id/katalog/produk/download/gambar/966900125?file_name=182778147771427.jpg",
    price: "3000000",
  },
};

const lantai = {
  keramik: {
    image:
      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/102/MTA-156049715/habitat_keramik_lantai_habitat_60x60_venato_-_motif_marble_carara_full01_kt0coew3.jpg",
    price: "5000000",
  },
  granit: {
    image:
      "https://img.lazcdn.com/g/ff/kf/S48a9859c103843a984a00ba58441d1a0F.jpg_720x720q80.jpg",
    price: "7000000",
  },
};

const kasoreng = {
  "kanal baja ringan": {
    image:
      "https://betonbesibaja.com/wp-content/uploads/2020/02/harga-baja-ringan-kanal-c-75-rangka-1.jpg",
    price: "9000000",
  },
  "kaso kayu": {
    image:
      "https://e-katalog.lkpp.go.id/katalog/produk/download/gambar/965615107?file_name=930678149021933.jpg",
    price: "5000000",
  },
};

const genteng = {
  "metal roof": {
    image:
      "https://static.homeguide.com/assets/images/content/homeguide-metal-roofing-repair-replacing-screws-resealing-seams.jpg",
    price: "5000000",
  },
  spandek: {
    image:
      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-72747116/no_brands_atap_spandek_metal_polos_per_meter_-thickness_0-25_mm-_full01_c2xrkuwi.jpg",
    price: "3000000",
  },
  "genteng tanah": {
    image:
      "https://asset.kompas.com/crops/ofjDCgl7RvCm25sGh8_T_ZWEvZc=/0x0:657x438/1200x800/data/photo/2023/06/28/649c2e892be2c.jpg",
    price: "4000000",
  },
  "genteng onduvila": {
    image:
      "https://mataharijaya.co.id/wp-content/uploads/2019/10/02500011_ONDUVILLA-1060X400-mm-HIJAU-3D.jpg",
    price: "8000000",
  },
  "genteng keramik": {
    image:
      "https://filebroker-cdn.lazada.co.id/kf/S4b124e0b35e84a36a4c08d70df63f1d3G.jpg",
    price: "6000000",
  },
};

const plafon = {
  PVC: {
    image:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2560,h_1440/https://wijayamandiri.com/wp-content/uploads/2024/09/plafonpvc.jpg",
    price: "16000000",
  },
  GRC: {
    image:
      "https://awsimages.detik.net.id/community/media/visual/2023/08/17/plafon-rumah-1_169.jpeg",
    price: "9000000",
  },
  gipsum: {
    image:
      "https://asset.kompas.com/crops/ysiyLyMTd4aBmYSUAFo5emgQ_g4=/0x60:1000x727/1200x800/data/photo/2022/07/21/62d97ff94654c.jpg",
    price: "13000000",
  },
  triplek: {
    image:
      "https://www.griyasatria.co.id/wp-content/uploads/2023/12/Cara-Pasang-Plafon-Triplek.png",
    price: "6000000",
  },
};

function ListProperti() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("30/60");
  const [selectedCategoryPondasi, setSelectedCategoryPondasi] =
    useState("batu kali");
  const [selectedCategoryDinding, setSelectedCategoryDinding] =
    useState("bata merah");
  const [selectedCategoryLantai, setSelectedCategoryLantai] =
    useState("keramik");
  const [selectedCategoryKasoreng, setSelectedCategoryKasoreng] =
    useState("kaso kayu");
  const [selectedCategoryGenteng, setSelectedCategoryGenteng] =
    useState("genteng tanah");
  const [selectedCategoryPlafon, setSelectedCategoryPlafon] =
    useState("triplek");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleCategoryPondasiChange = (event) => {
    setSelectedCategoryPondasi(event.target.value);
  };
  const handleCategoryDindingChange = (event) => {
    setSelectedCategoryDinding(event.target.value);
  };
  const handleCategoryLantaiChange = (event) => {
    setSelectedCategoryLantai(event.target.value);
  };
  const handleCategoryKasorengChange = (event) => {
    setSelectedCategoryKasoreng(event.target.value);
  };
  const handleCategoryGentengChange = (event) => {
    setSelectedCategoryGenteng(event.target.value);
  };
  const handleCategoryPlafonChange = (event) => {
    setSelectedCategoryPlafon(event.target.value);
  };

  const selectedUkuran = ukuran[selectedCategory];
  const selectedPondasi = pondasi[selectedCategoryPondasi];
  const selectedDinding = dinding[selectedCategoryDinding];
  const selectedLantai = lantai[selectedCategoryLantai];
  const selectedKasoreng = kasoreng[selectedCategoryKasoreng];
  const selectedGenteng = genteng[selectedCategoryGenteng];
  const selectedPlafon = plafon[selectedCategoryPlafon];

  const totalPrice =
    Number(selectedUkuran.price) +
    Number(selectedPondasi.price) +
    Number(selectedDinding.price) +
    Number(selectedLantai.price) +
    Number(selectedKasoreng.price) +
    Number(selectedGenteng.price) +
    Number(selectedPlafon.price);

  const handleLockCustomization = () => {
    const confirmation = window.confirm(
      "Apakah Anda yakin dengan kustomisasi ini? Jika ya, Anda akan diarahkan ke halaman pembayaran."
    );

    if (confirmation) {
      navigate("/Pembayaran", { state: { totalPrice } });
    }
  };

  return (
    <Container>
      <Row style={{ marginTop: "20px" }}>
        <Col>
          <h1 style={{ textAlign: "center" }}>Simulasi Pembelian Rumah</h1>
        </Col>
      </Row>
      <Row style={{ marginTop: "10px" }}>
        <Col>
          <h3 style={{ textAlign: "center" }}>Gambar</h3>
        </Col>
        <Col>
          <h3 style={{ textAlign: "center" }}>Kategori</h3>
        </Col>
        <Col>
          <h3 style={{ textAlign: "center" }}>Harga</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <img
              src={selectedUkuran.image}
              alt={`${selectedCategory} rumah`}
              style={{
                width: "200px",
                height: "100px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
            />
          </div>
        </Col>
        <Col>
          <div>
            <h5>Ukuran Rumah</h5>
            <label>
              <input
                type="radio"
                value="30/60"
                checked={selectedCategory === "30/60"}
                onChange={handleCategoryChange}
              />
              30/60
            </label>
            <label style={{ marginLeft: "20px" }}>
              <input
                type="radio"
                value="40/72"
                checked={selectedCategory === "40/72"}
                onChange={handleCategoryChange}
              />
              40/72
            </label>
            <label style={{ marginLeft: "20px" }}>
              <input
                type="radio"
                value="45/85"
                checked={selectedCategory === "45/85"}
                onChange={handleCategoryChange}
              />
              45/85
            </label>
          </div>
        </Col>
        <Col>
          <h5>Rp. {selectedUkuran.price}</h5>
        </Col>
      </Row>
      <Row style={{ marginTop: "15px" }}>
        <Col>
          <div>
            <img
              src={selectedPondasi.image}
              alt={`${selectedCategoryPondasi} pondasi`}
              style={{
                width: "200px",
                height: "100px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
            />
          </div>
        </Col>
        <Col>
          <div>
            <h5>Pilihan Pondasi</h5>
            <label>
              <input
                type="radio"
                value="batu kali"
                checked={selectedCategoryPondasi === "batu kali"}
                onChange={handleCategoryPondasiChange}
              />
              Batu Kali
            </label>
            <label style={{ marginLeft: "20px" }}>
              <input
                type="radio"
                value="beton"
                checked={selectedCategoryPondasi === "beton"}
                onChange={handleCategoryPondasiChange}
              />
              Beton
            </label>
          </div>
        </Col>
        <Col>
          <h5>Rp. {selectedPondasi.price}</h5>
        </Col>
      </Row>
      <Row style={{ marginTop: "15px" }}>
        <Col>
          <div>
            <img
              src={selectedDinding.image}
              alt={`${selectedCategoryDinding} dinding`}
              style={{
                width: "200px",
                height: "100px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
            />
          </div>
        </Col>
        <Col>
          <div>
            <h5>Pilihan Dinding</h5>
            <label>
              <input
                type="radio"
                value="batako"
                checked={selectedCategoryDinding === "batako"}
                onChange={handleCategoryDindingChange}
              />
              Batako
            </label>
            <label style={{ marginLeft: "20px" }}>
              <input
                type="radio"
                value="hebel"
                checked={selectedCategoryDinding === "hebel"}
                onChange={handleCategoryDindingChange}
              />
              Hebel
            </label>
            <label style={{ marginLeft: "20px" }}>
              <input
                type="radio"
                value="bata merah"
                checked={selectedCategoryDinding === "bata merah"}
                onChange={handleCategoryDindingChange}
              />
              Bata Merah
            </label>
          </div>
        </Col>
        <Col>
          <h5>Rp. {selectedDinding.price}</h5>
        </Col>
      </Row>
      <Row style={{ marginTop: "15px" }}>
        <Col>
          <div>
            <img
              src={selectedLantai.image}
              alt={`${selectedCategoryLantai} lantai`}
              style={{
                width: "200px",
                height: "100px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
            />
          </div>
        </Col>
        <Col>
          <div>
            <h5>Pilihan Lantai</h5>
            <label>
              <input
                type="radio"
                value="keramik"
                checked={selectedCategoryLantai === "keramik"}
                onChange={handleCategoryLantaiChange}
              />
              Keramik
            </label>
            <label style={{ marginLeft: "20px" }}>
              <input
                type="radio"
                value="granit"
                checked={selectedCategoryLantai === "granit"}
                onChange={handleCategoryLantaiChange}
              />
              Granit
            </label>
          </div>
        </Col>
        <Col>
          <h5>Rp. {selectedLantai.price}</h5>
        </Col>
      </Row>
      <Row style={{ marginTop: "15px" }}>
        <Col>
          <div>
            <img
              src={selectedKasoreng.image}
              alt={`${selectedCategoryKasoreng} kaso atau reng`}
              style={{
                width: "200px",
                height: "100px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
            />
          </div>
        </Col>
        <Col>
          <div>
            <h5>Pilihan Kaso / Reng</h5>
            <label>
              <input
                type="radio"
                value="kanal baja ringan"
                checked={selectedCategoryKasoreng === "kanal baja ringan"}
                onChange={handleCategoryKasorengChange}
              />
              Kanal Baja Ringan
            </label>
            <label style={{ marginLeft: "20px" }}>
              <input
                type="radio"
                value="kaso kayu"
                checked={selectedCategoryKasoreng === "kaso kayu"}
                onChange={handleCategoryKasorengChange}
              />
              Kaso Kayu
            </label>
          </div>
        </Col>
        <Col>
          <h5>Rp. {selectedKasoreng.price}</h5>
        </Col>
      </Row>
      <Row style={{ marginTop: "15px" }}>
        <Col>
          <div>
            <img
              src={selectedGenteng.image}
              alt={`${selectedCategoryGenteng} genteng`}
              style={{
                width: "200px",
                height: "100px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
            />
          </div>
        </Col>
        <Col>
          <div>
            <h5>Pilihan Genteng</h5>
            <label>
              <input
                type="radio"
                value="metal roof"
                checked={selectedCategoryGenteng === "metal roof"}
                onChange={handleCategoryGentengChange}
              />
              Metal Roof
            </label>
            <label style={{ marginLeft: "20px" }}>
              <input
                type="radio"
                value="spandek"
                checked={selectedCategoryGenteng === "spandek"}
                onChange={handleCategoryGentengChange}
              />
              Spandek
            </label>
            <label style={{ marginLeft: "20px" }}>
              <input
                type="radio"
                value="genteng tanah"
                checked={selectedCategoryGenteng === "genteng tanah"}
                onChange={handleCategoryGentengChange}
              />
              Genteng Tanah
            </label>
            <label style={{ marginLeft: "20px" }}>
              <input
                type="radio"
                value="genteng onduvila"
                checked={selectedCategoryGenteng === "genteng onduvila"}
                onChange={handleCategoryGentengChange}
              />
              Genteng Onduvila
            </label>
            <label style={{ marginLeft: "20px" }}>
              <input
                type="radio"
                value="genteng keramik"
                checked={selectedCategoryGenteng === "genteng keramik"}
                onChange={handleCategoryGentengChange}
              />
              Genteng Keramik
            </label>
          </div>
        </Col>
        <Col>
          <h5>Rp. {selectedGenteng.price}</h5>
        </Col>
      </Row>
      <Row style={{ marginTop: "15px" }}>
        <Col>
          <div>
            <img
              src={selectedPlafon.image}
              alt={`${selectedCategoryPlafon} plafon`}
              style={{
                width: "200px",
                height: "100px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
            />
          </div>
        </Col>
        <Col>
          <div>
            <h5>Pilihan Plafon</h5>
            <label>
              <input
                type="radio"
                value="PVC"
                checked={selectedCategoryPlafon === "PVC"}
                onChange={handleCategoryPlafonChange}
              />
              PVC
            </label>
            <label style={{ marginLeft: "20px" }}>
              <input
                type="radio"
                value="GRC"
                checked={selectedCategoryPlafon === "GRC"}
                onChange={handleCategoryPlafonChange}
              />
              GRC
            </label>
            <label style={{ marginLeft: "20px" }}>
              <input
                type="radio"
                value="gipsum"
                checked={selectedCategoryPlafon === "gipsum"}
                onChange={handleCategoryPlafonChange}
              />
              Gipsum
            </label>
            <label style={{ marginLeft: "20px" }}>
              <input
                type="radio"
                value="triplek"
                checked={selectedCategoryPlafon === "triplek"}
                onChange={handleCategoryPlafonChange}
              />
              Triplek
            </label>
          </div>
        </Col>
        <Col>
          <h5>Rp. {selectedPlafon.price}</h5>
        </Col>
      </Row>
      <Row style={{ marginTop: "15px" }}>
        <Col>
          <h2 style={{ textAlign: "center" }}>
            Total Biaya: Rp. {totalPrice.toLocaleString()}
          </h2>
        </Col>
      </Row>

      <Row style={{ marginTop: "15px" }}>
        <Col className="text-center">
          <Button variant="primary" onClick={handleLockCustomization}>
            Kunci Kustomisasi
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ListProperti;
