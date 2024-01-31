import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp';

function Header() {
    return (
      <div className="header_container bg-white flex items-center h-28">
        <a href="https://wa.me/41998988101" className="flex items-center text-1xl text-red-600 underline">
          <FaWhatsapp className="text-2xl mr-2 ml-0.5" />
          <span>Entre em contato</span>
        </a>
      <h1 className="text-red-600 text-6xl font-semibold font-serif" style={{marginLeft: "30%"}}>Ô Catarina</h1>
      </div>
    );
  }
  
  export default Header;
  