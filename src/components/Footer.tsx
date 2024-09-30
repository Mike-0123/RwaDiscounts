import React from 'react';

// Footer component in TypeScript (TSX)
const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-blue text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Sell on RwaDiscount - Hidden on medium and smaller screens */}
        <div className="hidden lg:block">
          <h2 className="text-lg font-bold mb-4">Sell on RwaDiscount</h2>
          <ul>
            <li><a href="#">How to Sell</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Seller Support</a></li>
            <li><a href="#">Seller Dashboard</a></li>
            <li><a href="#">Promotions</a></li>
          </ul>
        </div>

        {/* About the Company - Always visible */}
        <div>
          <h2 className="text-lg font-bold mb-4">About the Company</h2>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        {/* Support - Hidden on medium and smaller screens */}
        <div className="hidden lg:block">
          <h2 className="text-lg font-bold mb-4">Support</h2>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Social Media - Always visible */}
        <div>
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
