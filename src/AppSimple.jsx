function AppSimple() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Simple Hero Section */}
      <section className="hero-bg relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Moon */}
        <div className="absolute top-20 left-10 z-10 w-32 h-32 rounded-full flex items-center justify-center animate-glow">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-inner animate-[moonPulse_8s_ease-in-out_infinite]"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="/images/logo_crypto_lar.png" 
              alt="CryptoLar" 
              className="mx-auto max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-blue-200 font-body font-medium">
            16–17 de Agosto, 2025 — Florianópolis
          </p>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold mb-6 text-yellow-300">
            Onde o Ethereum se sente em casa.
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed font-body font-light mb-12">
            Duas trilhas, um hackathon, e os maiores nomes do blockchain em Florianópolis.
          </p>
        </div>
      </section>
      
      {/* Simple About Section */}
      <section className="min-h-screen py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">CryptoLar 2025</h2>
          <p className="text-xl mb-8">
            Mais que um evento — um lar temporário para construtores, sonhadores e descentralizadores.
          </p>
        </div>
      </section>
    </div>
  )
}

export default AppSimple