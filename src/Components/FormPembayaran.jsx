import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";

const FormPembayaran = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const totalPrice = location.state?.totalPrice;
  const taxRate = 0.12; // Pajak 12%
  const totalafterpajak = totalPrice * (1 + taxRate);

  const [selectedCategoryBayar, setSelectedCategoryBayar] = useState("");
  const [buyerInfo, setBuyerInfo] = useState({
    name: "",
    address: "",
    phone: "",
    dp: "",
    tenor: "",
  });

  const handleCategoryBayarChange = (event) => {
    setSelectedCategoryBayar(event.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman

    if (selectedCategoryBayar === "cash") {
      navigate("/PaymentSuccess");
    } else if (selectedCategoryBayar === "kredit") {
      alert("Terima Kasih Telah Melakukan Pembayaran dengan Metode Kredit");
    }
  };

  const calculateInstallment = () => {
    const dp = parseFloat(buyerInfo.dp) || 0; // Mengambil DP
    const tenor = parseInt(buyerInfo.tenor) || 0; // Mengambil tenor

    if (tenor > 0) {
      const installment = (totalPrice - dp) / tenor;
      return installment.toLocaleString(); // Mengembalikan nilai angsuran dengan dua desimal
    }
    return 0;
  };

  const BayarAfterPajak = () => {
    const dp = parseFloat(buyerInfo.dp) || 0; // Mengambil DP
    const tenor = parseInt(buyerInfo.tenor) || 0; // Mengambil tenor

    if (tenor > 0) {
      const installment = (totalafterpajak - dp) / tenor;
      return installment.toLocaleString(); // Mengembalikan nilai angsuran dengan dua desimal
    }
    return 0;
  };

  return (
    <Container>
      <Row style={{ marginTop: "20px" }}>
        <Col>
          <h1 style={{ textAlign: "center" }}>Form Pembayaran</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p style={{ textAlign: "center" }}>
            Total Yang Harus Dibayar: Rp. {totalPrice.toLocaleString()}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p style={{ textAlign: "center" }}>Metode Pembayaran</p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <div>
            <label>
              <input
                type="radio"
                value="cash"
                checked={selectedCategoryBayar === "cash"}
                onChange={handleCategoryBayarChange}
              />
              Cash
            </label>
            <label style={{ marginLeft: "20px" }}>
              <input
                type="radio"
                value="kredit"
                checked={selectedCategoryBayar === "kredit"}
                onChange={handleCategoryBayarChange}
              />
              Kredit
            </label>
          </div>
        </Col>
      </Row>
      <Row>
        <Form style={{ marginTop: "20px" }} onSubmit={handleSubmit}>
          {selectedCategoryBayar === "cash" && (
            <>
              <Form.Group>
                <Form.Label>Nama</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Masukkan Nama"
                  value={buyerInfo.name}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Alamat</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Masukkan Alamat"
                  value={buyerInfo.address}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Nomor HP</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Masukkan Nomor HP"
                  value={buyerInfo.phone}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                style={{ marginTop: "20px" }}
              >
                Proses Pembayaran
              </Button>
            </>
          )}

          {selectedCategoryBayar === "kredit" && (
            <>
              <Form.Group>
                <Form.Label>Uang Muka (DP)</Form.Label>
                <Form.Control
                  type="number"
                  name="dp"
                  placeholder="Masukkan DP"
                  value={buyerInfo.dp}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Label>Tenor Angsuran</Form.Label>
              {[12, 24, 36, 48, 60, 72, 84, 96, 108, 120].map((tenor) => (
                <Form.Check
                  key={tenor}
                  type="radio"
                  label={`${tenor} Bulan`}
                  name="tenor"
                  value={tenor}
                  checked={buyerInfo.tenor === tenor}
                  onChange={handleInputChange}
                />
              ))}

              {buyerInfo.tenor && (
                <>
                  <div style={{ marginTop: "10px" }}>
                    <strong>Total Angsuran per Bulan Sebelum Pajak:</strong>{" "}
                    {calculateInstallment()} IDR
                  </div>
                  <div>
                    <strong>Total Angsuran per Bulan Setelah Pajak 12%:</strong>{" "}
                    {BayarAfterPajak()} IDR
                  </div>
                </>
              )}

              <Button
                variant="primary"
                type="submit"
                style={{ marginTop: "20px" }}
              >
                Proses Pembayaran
              </Button>
            </>
          )}
        </Form>
      </Row>
    </Container>
  );
};

export default FormPembayaran;
