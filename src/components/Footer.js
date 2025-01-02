import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-12 px-4 mt-16 bg-white/80 backdrop-blur-sm border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">VQA</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Analyze your images with AI and discover hidden insights. Upload any image and ask questions to learn more about its content.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
            <div className="space-y-2">
              <a 
                href="mailto:contact@imageanalyzer.com" 
                className="text-sm text-gray-600 hover:text-purple-600 transition-colors block"
              >
                contact@VQA.com
              </a>
              <div className="flex space-x-4 pt-2">
                <a 
                  href="#" 
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-purple-100 transition-colors"
                >
                  <span className="text-sm">𝕏</span>
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-purple-100 transition-colors"
                >
                  in
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-purple-100 transition-colors"
                >
                  gh
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © {currentYear} VQA. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;