import React from 'react';
import PageHeader from '../components/PageHeader';
import '../styles/RegistrationPage.css';

const RegistrationPage = () => {
  return (
    <div className="registration-page">
      <PageHeader title="Registration" />
      <section id="registration-fees" className="registration-section" data-aos="fade-up">
        <h2>Registration Fees</h2>
        <p>*Registration Fees is inclusive of Conference Kit, Abstract Book, Proceedings and Food.</p>
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
                <td>INR 1000</td>
                <td>INR 1000</td>
                <td>USD 150</td>
                <td>USD 150</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="accommodation" className="registration-section" data-aos="fade-up">
        <h2>Accommodation</h2>
        <p>The accommodation of the Delegates and Participants will be arranged in the Institute Guest House based on the availability and on the basis of payment. Details of the accommodation in nearby hotels is available on the website.</p>
      </section>

      <section id="payment-mode" className="registration-section" data-aos="fade-up">
        <h2>Mode of Payment</h2>
        <p>All payments can be made in the form of Demand Draft (DD): drawn in favor of ICABTEMD 2025, NIT Rourkela, payable at SBI, NIT Campus Branch, Rourkela. Bank Transfer.</p>
      </section>
    </div>
  );
};

export default RegistrationPage;
