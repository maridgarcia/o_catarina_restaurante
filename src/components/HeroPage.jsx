function HeroPage() {
    const imageStyle = {
      backgroundImage: 'url(' + require('/home/marigarcia/restaurant_project/src/images/pexels-photo-2233730.jpg') + ')',
      height: '500px',
      width: "100%",
    };
  
    const overlayStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    };

  return (
    <div>
      <div className="relative overflow-hidden bg-cover bg-no-repeat text-center" style={imageStyle}>
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={overlayStyle}>
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="md:text-5xl">Bem-vindo ao Ô Catarina</h2>
              <h4 className="mb-6 text-xl font-semibold">RESTAURANTE FAMILIAR EM GUARATUBA</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
  
  export default HeroPage;
  