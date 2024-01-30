import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp';

function Location() {
    return (
      <section className="px-3 py-5 bg-slate-900 lg:py-10 text-white">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
          <div className="order-2 lg:order-1 flex flex-col justify-items-center">
            <div>
              <p className="font-semibold text-4xl font-serif">Horário de Funcionamento</p>
              <p className="text-sm mb-3">Todos os dias das 9h às 15h e durante a alta temporada, das 07h às 22h</p>
            </div>
            
            <div>
              <p className="font-semibold text-4xl font-serif">Endereço</p>
              <p className="text-sm mb-3">Rua Uruguai, 43 – Balneário Nereidas, Guaratuba</p>
            </div>
            
            <p className="font-semibold text-4xl font-serif">Entre em contato</p>
            <div className="flex items-center space-x-2 mt-2">
              <a href="https://wa.me/41998988101" className="hover:scale-110"><FaWhatsapp className="text-3xl" /></a>
              <p className="text-sm">(41) 99898-8101</p>
            </div>
          
          </div>
          <div className="order-1 lg:order-2">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448.51882540187995!2d-48.5827136!3d-25.9302793!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dbfb16dd7095cf%3A0x327c6fc701b4251b!2sRestaurante%20%26%20Lanchonete%20Catarina!5e0!3m2!1spt-BR!2sbr!4v1706644999153!5m2!1spt-BR!2sbr" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    );
  }
  
  export default Location;
  