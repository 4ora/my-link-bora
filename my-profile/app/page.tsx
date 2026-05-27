export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-300 text-black font-sans selection:bg-pink-400 selection:text-white p-4 md:p-8 lg:p-12 overflow-x-hidden">
      
      {/* Header */}
      <header className="flex justify-between items-center mb-12 md:mb-20">
        <div className="text-3xl font-black uppercase tracking-tighter border-4 border-black bg-white px-4 py-2 shadow-[4px_4px_0_0_#000] transform -rotate-1">
          Bora Jo
        </div>
        <a 
          href="#" 
          className="hidden md:inline-block text-xl font-bold bg-pink-400 border-4 border-black px-6 py-2 shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
        >
          CONTACT ME
        </a>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Hero Section */}
        <section className="lg:col-span-8 flex flex-col justify-center">
          <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-8 md:p-12 mb-8 transform rotate-[-1deg]">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tight mb-6">
              Hi, I'm <br /> <span className="bg-green-400 px-2 inline-block -rotate-2 mt-2">Bora Jo</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold border-l-8 border-black pl-4">
              바이브코딩을 배우고 있는 의류학과 학생입니다. 패션과 기술의 결합을 탐구하며, 독창적인 아이디어를 코드로 구현하고 있습니다.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="bg-blue-400 border-4 border-black shadow-[4px_4px_0_0_#000] px-6 py-3 font-bold text-xl transform hover:scale-105 transition-transform cursor-default">
              #FASHION
            </div>
            <div className="bg-pink-400 border-4 border-black shadow-[4px_4px_0_0_#000] px-6 py-3 font-bold text-xl transform hover:scale-105 transition-transform cursor-default">
              #TECH
            </div>
            <div className="bg-white border-4 border-black shadow-[4px_4px_0_0_#000] px-6 py-3 font-bold text-xl transform hover:scale-105 transition-transform cursor-default">
              #VIBE_CODING
            </div>
          </div>
        </section>

        {/* Sidebar / Links */}
        <section className="lg:col-span-4 flex flex-col gap-6 mt-8 lg:mt-0">
          
          <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-6">
            <h2 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2">Connect</h2>
            
            <a
              href="https://www.instagram.com/4ora_/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full bg-orange-400 border-4 border-black shadow-[4px_4px_0_0_#000] p-4 mb-4 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none active:bg-orange-500 transition-all"
            >
              <span className="text-xl font-bold uppercase">Instagram</span>
              <svg className="w-8 h-8 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>


          </div>


        </section>

      </main>
      
      <footer className="mt-20 border-t-4 border-black pt-8 pb-4 text-center font-bold">
        <p className="text-lg">© {new Date().getFullYear()} BORA JO. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
