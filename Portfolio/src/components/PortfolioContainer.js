import React, { useState } from 'react';
import About from './pages/AboutMe';
import Footer from './Footer';
import Navigation from './Header';

export default function PortfolioContainer() {
  const [Page, setPage] = useState('Home');

  const pageSelect = () => {
    if (Page === 'About') {
      return <About />;
    }
    return <About />;
  };

  const pageChange = (page) => setPage(page);

  return (
    <div>
      <Navigation currentPage={Page} pageChange={pageChange} />
      {pageSelect()}
      <Footer />
    </div>
  );
}
