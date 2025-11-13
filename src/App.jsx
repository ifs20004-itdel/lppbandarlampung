import logo from "/logo.png";
import header from "./assets/header.png";
import form_pengaduan from "./assets/pengaduan.png";
import form_penitipan from "./assets/penitipan.png";
import form_kunjungan from "./assets/kunjungan.png";

function App() {
  const services = [
    {
      title: "Pengaduan",
      href: "https://forms.gle/HRwYN4iQKGPDP7Pe7",
      img: form_pengaduan,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Kunjungan",
      href: "https://forms.gle/nWo1J4JKotia32M68",
      img: form_kunjungan,
      color: "from-green-500 to-green-700",
    },
    {
      title: "Penitipan Barang",
      href: "https://forms.gle/8DrdZ4S2gKXSzg8c8",
      img: form_penitipan,
      color: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex md:flex-row flex-col items-center justify-center gap-4 mb-8">
            <img
              className="md:h-28 h-16 drop-shadow-lg"
              src={logo}
              alt="pengayoman"
            />
            <h1 className="text-center text-xl md:text-3xl font-bold uppercase text-gray-800 leading-tight">
              Lapas Perempuan Kelas IIA Bandar Lampung
            </h1>
          </div>
          <div className="relative overflow-hidden w-full md:w-5/6 mx-auto rounded-2xl shadow-2xl">
            <img className=" h-auto object-cover" src={header} alt="Header" />
            <div className="w-full mx-auto absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Layanan Kami
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-5"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 p-5">
            {services.map((service, _) => (
              <a
                key={service.title}
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block rounded-xl bg-gradient-to-r ${service.color} overflow-hidden`}
              >
                <div className="flex flex-col items-center justify-center text-center transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="object-cover w-full"
                  />
                  <span className="text-xl font-bold text-white m-2 pb-3 uppercase tracking-wide">
                    {service.title}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
