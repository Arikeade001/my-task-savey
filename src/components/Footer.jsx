import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="flex items-center space-x-2 mb-2">
            <img src="/logo.png" alt="savey logo" className="h-7 w-auto" />
          </div>
          <span className="text-gray-500 text-sm">
            Budgeting made simple, saving made easy.
          </span>
          <div className="flex space-x-3 mt-2">
            <a href="#">
              <img src="/facebook.png" alt="Facebook" className="h-6" />
            </a>
            <a href="#">
              <img src="/twitter.png" alt="Twitter" className="h-6" />
            </a>
            <a href="#">
              <img src="/instagram.png" alt="Instagram" className="h-6" />
            </a>
            <a href="#">
              <img src="/whatsapp.png" alt="WhatsApp" className="h-6" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-gray-800">Services</h4>
          <ul className="text-gray-500 text-sm space-y-1">
            <li>Savings</li>
            <li>Budgeting</li>
            <li>Spending</li>
            <li>Investing</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-gray-800">Contact</h4>
          <ul className="text-gray-500 text-sm space-y-1">
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affiliates</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-gray-800">Legal</h4>
          <ul className="text-gray-500 text-sm space-y-1">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-gray-800">Company</h4>
          <ul className="text-gray-500 text-sm space-y-1">
            <li>About Us</li>
            <li>Website</li>
            <li>Mobile</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-400 text-xs pb-4">
        Copyright © 2025 Savey Technologies. All Rights Reserved.
      </div>
      <div className="max-w-6xl mx-auto px-4 pb-8 text-[11px] text-gray-400 leading-relaxed">
        Savey is a fintech company that provides saving, budgeting, and spending
        tools to help individuals and businesses manage their finances. All
        information, content, and materials provided on our website and through
        our services are protected by copyright and other applicable laws. Any
        use of our content or materials, including but not limited to
        reproduction, distribution, modification, or transmission, without prior
        written consent from Savey is strictly prohibited. All trademarks,
        service marks, logos, and trade names displayed on our website or in
        connection with our services are the property of Savey or their
        respective owners. You may not use any of these marks without the prior
        written consent of Savey or the respective owner. At Savey, we respect
        the intellectual property rights of others and expect our users to do
        the same. If you believe that any content on our website or in
        connection with our services infringes your copyright or other
        intellectual property rights, please contact us immediately at
        support@getsavey.com. . Thank you for choosing Savey for your financial
        management needs.
      </div>
    </footer>
  );
};

export default Footer;
