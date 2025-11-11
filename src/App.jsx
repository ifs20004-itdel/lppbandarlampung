import logo from "/logo.png";
import header from "./assets/header.png";
import form_pengaduan from "./assets/pengaduan.jpeg";
import form_penitipan from "./assets/penitipan.jpeg";

function App() {
  return (
    <div className="container bg-gray-200 min-h-screen">
      <div className="flex flex-col mx-auto w-3/5 p-5 gap-y-5">
        <div className="flex md:flex-row flex-col items-center justify-center gap-2">
          <img className="md:h-24 h-12" src={logo} alt="pengayoman" />
          <h1 className="text-center md:text-2xl text-base font-bold uppercase ">
            Lapas Perempuan Kelas IIA Bandar Lampung
          </h1>
        </div>
        <img className="rounded-2xl shadow-2xl" src={header} alt="header" />
      </div>

      <div className="mx-auto w-3/5 p-5 gap-y-5">
        <h1 className="font-bold text-center md:text-2xl text-base uppercase">
          Layanan
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {[
            {
              title: "Pengaduan",
              href: "https://forms.gle/HRwYN4iQKGPDP7Pe7",
              img: form_pengaduan,
            },
            {
              title: "Kunjungan",
              href: "https://forms.gle/nWo1J4JKotia32M68",
              img: form_penitipan,
            },
            {
              title: "Penitipan Barang",
              href: "https://forms.gle/8DrdZ4S2gKXSzg8c8",
              img: form_penitipan,
            },
            
          ].map(({ title, href, img }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center rounded-2xl bg-gray-400 transition-all duration-300 p-4 text-center hover:shadow-2xl"
            >
              <img
                src={img}
                alt={title}
                className="object-cover  mb-4 transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-lg font-semibold text-white group-hover:text-white uppercase">
                {title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
