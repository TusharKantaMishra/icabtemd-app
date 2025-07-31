import React from 'react';
import PageHeader from '../components/PageHeader';
import '../styles/RegistrationPage.css';
import qrCodeImg from '../assets/images/QR code.jpg'; // Save the QR image as payment-qr.jpg in src/assets/images

const RegistrationPage = () => {
  return (
    <div className="registration-page">
      <PageHeader title="Registration" />
      <section id="registration-fees" className="registration-section" data-aos="fade-up">
        <h2>Registration Fees</h2>
        <p>*Registration Fees is inclusive of GST.</p>
        <p>*Registration to conference includes participation to all conference sessions,
 conference kit, proceedings and food.</p>
        <div className="fees-table-container">
          <table className="fees-table">
            <thead>
              <tr>
                <th rowSpan="2">Participants</th>
                <th colSpan="2">Indian</th>
                <th colSpan="2">Foreign</th>
              </tr>
              <tr>
                <th>Offline</th>
                <th>Online</th>
                <th>Offline</th>
                <th>Online</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Student</td>
                <td>INR 4000</td>
                <td>INR 2000</td>
                <td>USD 150</td>
                <td>USD 100</td>
              </tr>
              <tr>
                <td>Academic institutions</td>
                <td>INR 5000</td>
                <td>INR 3000</td>
                <td>USD 250</td>
                <td>USD 150</td>
              </tr>
              <tr>
                <td>Research organizations</td>
                <td>INR 6000</td>
                <td>INR 4000</td>
                <td>USD 300</td>
                <td>USD 200</td>
              </tr>
              <tr>
                <td>Industry delegates</td>
                <td>INR 7000</td>
                <td>INR 5000</td>
                <td>USD 350</td>
                <td>USD 250</td>
              </tr>
              <tr>
                <td>Accompanying person</td>
                <td>INR 1500</td>
                <td>INR 1500</td>
                <td>USD 150</td>
                <td>USD 150</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="accommodation" className="registration-section" data-aos="fade-up">
        <h2>Accommodation</h2>
        <p>Accommodation of the Delegates and Participants will be arranged in
the Institute Guest House on payment basis based on the availability
and first cum first serve basis. For student delegates, hostel
accommodation within the campus will be arranged on request and on
payment basis.</p>
      </section>

      <section id="payment-mode" className="registration-section" data-aos="fade-up">
        <h2>Mode of Payment & Registration</h2>
        <p>
          Payment may be made using QR code (see below) or using online transfer in favor of <strong>“Conference, NIT Rourkela”</strong> payable at SBI, NIT Branch to Account No.: <strong>36734418111</strong>, IFSC: <strong>SBIN0002109</strong>, MICR: <strong>769002007</strong>, SWIFT: <strong>SBININBBI37</strong><br /><br />
          UPI ID: <strong>2804180418@sbi</strong>; Merchant Name: <strong>Conference NIT Rourkela</strong>
        </p>
        <div className="qr-code-container">
          <img src={qrCodeImg} alt="Payment QR Code" className="qr-code-img" />
        </div>
        <div className="registration-form-btn-container">
          <a
            href="https://forms.gle/PhY572TxGeKepC6s9"
            className="registration-form-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fill Registration Form
          </a>
        </div>
      </section>
    </div>
  );
};

export default RegistrationPage;
