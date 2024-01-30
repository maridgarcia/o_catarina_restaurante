function AboutUs() {
    return (
      <section class="px-3 py-5 bg-slate-900 lg:py-10 text-white">
          <div class="grid lg:grid-cols-2 items-center justify-items-center gap-5">
            <div class="order-1 lg:order-2 flex flex-col ">
              <h3 className="md:text-5xl">Sobre nós</h3>
              <p className="">Bem-vindo ao nosso cantinho à beira-mar.</p>
              <p>Somos um restaurante familiar, apaixonados por comida caseira e hospitalidade calorosa.</p>
              <p>Originários de Santa Catarina, trazemos o sabor autêntico do litoral para o seu prato.</p>
              <p>Nosso cardápio apresenta churrasco e um buffet que reflete a tradição da boa comida caseira.</p>
              <p>Venha se deliciar conosco, onde cada refeição é uma experiência que combina o melhor da culinária catarinense com a descontração à beira-mar!</p>
            </div>
            <div class="order-2 lg:order-1">
              <img class="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]" src={require('/home/marigarcia/restaurant_project/src/images/pexels-photo-4007053.jpeg')} alt="" />
            </div>
          </div>
      </section>
    );
  }
  
  export default AboutUs;
  