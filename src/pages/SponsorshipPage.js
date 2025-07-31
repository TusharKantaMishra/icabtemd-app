import React from 'react';
import PageHeader from '../components/PageHeader';
import '../styles/SponsorshipPage.css';

const sponsorshipData = [
  { category: 'Diamond', inr: '500,000', usd: '5814' },
  { category: 'Platinum', inr: '350,000', usd: '4070' },
  { category: 'Gold', inr: '250,000', usd: '2907' },
  { category: 'Silver', inr: '150,000', usd: '1744' },
  { category: 'Bronze', inr: '100,000', usd: '1162' },
  { category: 'Gala Dinner', inr: '125,000', usd: '1453' },
  { category: 'Cultural Programme', inr: '100,000', usd: '1162' },
  { category: 'Lunch or Dinner', inr: '75,000', usd: '872' },
];

const advertisementData = [
  { ad: 'Back cover (Colour)', inr: '30,000', usd: '348' },
  { ad: 'Inside cover front or back (Colour)', inr: '20,000', usd: '232' },
  { ad: 'Full page (Colour)', inr: '15,000', usd: '174' },
  { ad: 'Full Page (B & W)', inr: '12,500', usd: '145' },
  { ad: 'Half Page (B & W)', inr: '10,000', usd: '116' },
  { ad: 'Stall and Banners', inr: '25,000', usd: '290' },
];

const SponsorshipPage = () => {
  return (
    <div className="sponsorship-page">
      <PageHeader title="Sponsorship" />
      <div className="sponsorship-section">
        <h2>Sponsorship</h2>
        <div className="sponsorship-table-container">
          <table className="sponsorship-table">
            <thead>
              <tr>
                <th>Sponsor Category</th>
                <th>Amount (INR)</th>
                <th>USD</th>
              </tr>
            </thead>
            <tbody>
              {sponsorshipData.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.category}</td>
                  <td>{row.inr}</td>
                  <td>{row.usd}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="sponsorship-note">
            *Details of the sponsorship will be available in the conference website.
          </div>
        </div>
      </div>
      <div className="advertisement-section">
        <h2>Advertisement Tariff</h2>
        <div className="advertisement-table-container">
          <table className="advertisement-table">
            <thead>
              <tr>
                <th>Advertisement</th>
                <th>Amount (INR)</th>
                <th>USD</th>
              </tr>
            </thead>
            <tbody>
              {advertisementData.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.ad}</td>
                  <td>{row.inr}</td>
                  <td>{row.usd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipPage;
