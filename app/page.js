export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Neon Accents */}
      <header className="p-6 border-b border-jengu/30 flex justify-between items-center">
        <h1 className="text-3xl font-black neon-text italic">JENGU</h1>
        <div className="flex gap-6 text-sm font-bold">
            <a href="/browse" className="hover:text-jengu">BROWSE</a>
            <a href="/charts" className="hover:text-jengu text-jengu">CHARTS</a>
            <button className="neon-border px-4 py-1">LOGIN</button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 border-l-4 border-jengu pl-4">TRENDING IN CAMEROON</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* TrackCards would be mapped here */}
          <TrackCard track={{title: "N'Dolo", price_xaf: 200, genre: "MAKOSSA"}} />
          <TrackCard track={{title: "Bikutsi Fever", price_xaf: 200, genre: "BIKUTSI"}} />
          <TrackCard track={{title: "Mali Drill", price_xaf: 300, genre: "RAP FR"}} />
        </div>

        {/* Floating WhatsApp Support Button */}
        <a href="https://wa.me/237XXXXXXXXX" className="fixed bottom-6 right-6 p-4 rounded-full bg-[#25D366] text-white shadow-lg">
            <WhatsAppIcon />
        </a>
      </main>
    </div>
  )
}