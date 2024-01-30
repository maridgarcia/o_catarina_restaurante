import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp';

function Header() {
    return (
      <div className="header_container bg-slate-900 flex items-center h-28">
        <a href="https://wa.me/41998988101" className="flex items-center text-1xl text-white">
          <FaWhatsapp className="text-2xl mr-2 ml-0.5" />
          <span>Entre em contato</span>
        </a>
      <h1 className="text-slate-200 text-6xl font-semibold font-serif mx-auto">Ô Catarina</h1>
      </div>
    );
  }
  
  export default Header;
  