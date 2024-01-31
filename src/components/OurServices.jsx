import { FaUtensils } from '@react-icons/all-files/fa/FaUtensils'
import { IoFastFood  } from "@react-icons/all-files/io5/IoFastFood";

function OurServices() {
    const style = { color: "white", fontSize: "3em", display: "block", margin: "auto" }
    return (
        <div className="flex flex-col md:flex-row bg-red-600 text-white py-16">
            <div className="w-full md:w-1/3 p-4 text-center hover:scale-110 duration-200">
                <FaUtensils style={style}/>
                <h3 className="text-xl font-semibold mb-1 font-serif">Buffet variado</h3>
                <p className="text-white">Desfrute de um almoço variado - com churrasco incluso!</p>
            </div>
            <div className="w-full md:w-1/3 p-4 text-center hover:scale-110 duration-200">
                <IoFastFood  style={style} />
                <h3 className="text-xl font-semibold mb-1 font-serif">Lanches e Porções</h3>
                <p className="text-white">Na alta temporada, delicie-se com lanches e porções</p>
            </div>
            <div className="w-full md:w-1/3 p-4 text-center hover:scale-110 duration-200">
                <svg style={style} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-heart" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h6"/>
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.39 0 .754 .112 1.061 .304" />
                    <path d="M19 21.5l2.518 -2.58a1.74 1.74 0 0 0 0 -2.413a1.627 1.627 0 0 0 -2.346 0l-.168 .172l-.168 -.172a1.627 1.627 0 0 0 -2.346 0a1.74 1.74 0 0 0 0 2.412l2.51 2.59z" />
                </svg>
                <h3 className="text-xl font-semibold mb-1 font-serif">Eventos</h3>
                <p className="text-white">Transforme seus momentos especiais conosco! Oferecemos o cenário ideal para eventos personalizados</p>
            </div>
        </div>
    );
  }
  
  export default OurServices;
  