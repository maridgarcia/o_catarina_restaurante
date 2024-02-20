import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp';

function Header() {
    return (
      <div className="header-container">
        <header className="bg-white text-center sm:h-28 md:h-32 lg:h-40 xl:h-48 flex flex-col sm:flex-row justify-around items-center">
          <div className="header-content">
              <div className="header-container">
                <h1 className="text-red-600 text-6xl font-semibold font-serif sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Ô Catarina</h1>
            </div>
          </div>
            <a href="https://wa.me/41998988101" className="flex sm:justify-end text-1xl text-red-600 underline">
              <FaWhatsapp className="text-2xl mr-2 ml-0.5" />
              <p>Entre em contato</p>
            </a>
        </header>
      </div>
    );
  }
  
  export default Header;
  