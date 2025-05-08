import { Heart, Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0">
            <div className="font-bold text-2xl text-blue-400 mb-2">Nabeel S</div>
            <p className="text-gray-400 max-w-md">
              Crafting high-performance WordPress solutions through custom development and optimization.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/nabeel-777"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nabeel-s-ptpm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Nabeel S. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-gray-400">
           <div className="flex items-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
