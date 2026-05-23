import { useState, useEffect } from 'react';

export default function WeddingInvitation() {
  const [openInvitation, setOpenInvitation] = useState(false);

  const weddingDate = new Date('2026-06-14T09:00:00').getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    return {
      days: Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
      minutes: Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
      seconds: Math.max(0, Math.floor((distance % (1000 * 60)) / 1000)),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const guestName = typeof window !== 'undefined'
    ? new URLSearchParams(window.location.search).get('to') || 'Bapak/Ibu/Saudara/i'
    : 'Bapak/Ibu/Saudara/i';

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  if (!openInvitation) {
    return (
      <div
        className="min-h-screen bg-cover bg-top flex items-center justify-center px-6 overflow-hidden relative text-white"
        style={{
          backgroundImage: "url('https://i.postimg.cc/yx1D1Q8r/1.jpg')",
          backgroundSize: '90%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center -80px',
        }}
      >
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-[#0f172a]/90"></div>

        <div className="text-center relative z-10 max-w-2xl py-16">
          <p className="uppercase tracking-[0.5em] text-amber-300 text-sm mb-6">
            The Wedding Of
          </p>

          

          <h1
            className="text-5xl md:text-7xl mt-6 leading-tight drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Arip & Zumrotul
          </h1>

          <div className="mt-6 space-y-3">
            <p className="text-amber-100 text-lg">
              Kepada Yth.
            </p>

            <div className="inline-block px-6 py-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-xl">
              <p className="text-2xl text-amber-200 font-semibold tracking-wide">
                {guestName}
              </p>
            </div>

            <p className="text-amber-100 text-lg">
              Minggu, 14 Juni 2026
            </p>
          </div>

          <button
            onClick={() => setOpenInvitation(true)}
            className="mt-10 px-10 py-4 rounded-full bg-[#f5e6c8] text-[#5b4636] font-semibold hover:scale-105 transition duration-300 shadow-2xl border-4 border-[#c8a96b]"
          >
            Buka Undangan
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[url('https://images.unsplash.com/photo-1519985176271-adb1088fa94c?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center text-white relative font-sans">
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/batthern.png')] opacity-20"></div>

      {/* floating stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random(),
              boxShadow: '0 0 12px rgba(255,255,255,0.9)',
            }}
          />
        ))}

        {/* hujan bintang */}
        {[...Array(25)].map((_, i) => (
          <div
            key={`rain-${i}`}
            className="absolute w-[2px] h-24 bg-gradient-to-b from-amber-200 to-transparent opacity-70"
            style={{
              top: `${Math.random() * -100}%`,
              left: `${Math.random() * 100}%`,
              transform: 'rotate(20deg)',
              animation: `meteor ${Math.random() * 3 + 3}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        {/* floating hearts */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`heart-${i}`}
            className="absolute text-rose-300 opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 18 + 12}px`,
              animation: `floatingHeart ${Math.random() * 6 + 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            ❤
          </div>
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Great+Vibes&display=swap');
        @keyframes floatingHeart {
          0% {
            transform: translateY(0px) scale(1);
            opacity: 0;
          }
          20% {
            opacity: 0.8;
          }
          50% {
            transform: translateY(-40px) scale(1.2);
          }
          100% {
            transform: translateY(-120px) scale(0.8);
            opacity: 0;
          }
        }

        @keyframes meteor {
          0% {
            transform: translateY(-200px) translateX(0px) rotate(20deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translateY(120vh) translateX(150px) rotate(20deg);
            opacity: 0;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
          <div className="space-y-6 text-center md:text-left">
            <p className="uppercase tracking-[0.4em] text-amber-300 text-sm">
              The Wedding Of
            </p>

            <h1
              className="text-5xl md:text-7xl leading-tight"
              style={{
                fontFamily: 'Cinzel, serif',
              }}
            >
              Arip Budi Laksono
              <span className="block text-amber-300 text-4xl my-3">&</span>
              Zumrotul Sanghadah
            </h1>

            <p className="text-amber-100 text-lg md:text-xl leading-relaxed max-w-xl">
              Dengan penuh rasa syukur kami mengundang Bapak/Ibu/Saudara/i
              untuk hadir dalam momen bahagia pernikahan kami.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              

              <a
                href="https://wa.me/6281215138619"
                target="_blank"
                className="px-8 py-4 rounded-full border border-amber-300 text-amber-100 hover:bg-white/10 transition"
              >
                RSVP WhatsApp
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-amber-400 blur-3xl opacity-20 rounded-full"></div>

            <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[40px] p-4 shadow-2xl max-w-md">
              <img
                src="https://i.postimg.cc/yx1D1Q8r/1.jpg"
                alt="Prewedding"
                className="rounded-[30px] object-cover w-full h-[550px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COUNTDOWN */}
      <section className="px-6 py-10 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            [timeLeft.days, 'Hari'],
            [timeLeft.hours, 'Jam'],
            [timeLeft.minutes, 'Menit'],
            [timeLeft.seconds, 'Detik'],
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-xl"
            >
              <h3 className="text-4xl font-bold text-amber-300">{value}</h3>
              <p className="mt-2 text-amber-100">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DETAIL ACARA */}
      <section id="detail" className="px-6 py-24 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[35px] p-10 shadow-2xl">
            <p className="text-amber-300 uppercase tracking-[0.3em] text-sm mb-3">
              Akad Nikah
            </p>

            <h2 className="text-4xl font-light mb-6">14 Juni 2026</h2>

            <div className="space-y-4 text-lg text-amber-100 leading-relaxed">
              <p>⏰ 09.00 WIB</p>
              <p>
                📍 Banceran, Selomarto,
                <br />
                Giriwoyo, Wonogiri
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[35px] p-10 shadow-2xl">
            <p className="text-amber-300 uppercase tracking-[0.3em] text-sm mb-3">
              Resepsi
            </p>

            <h2 className="text-4xl font-light mb-6">14 Juni 2026</h2>

            <div className="space-y-4 text-lg text-amber-100 leading-relaxed">
              <p>⏰ 11.00 WIB</p>
              <p>
                📍 Banceran, Selomarto,
                <br />
                Giriwoyo, Wonogiri
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROFILE */}
      <section className="px-6 py-24 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[35px] p-8 shadow-2xl text-center">
            <img
              src="https://i.postimg.cc/fTFRpTY0/3.jpg"
              alt="Mempelai Pria"
              className="w-48 h-48 object-cover rounded-full mx-auto border-4 border-amber-300 shadow-xl"
            />

            <h3
              className="text-3xl mt-6 text-amber-200"
              style={{
                fontFamily: 'Cinzel, serif',
              }}
            >
              Arip Budi Laksono
            </h3>

            <p className="mt-4 text-amber-100 leading-relaxed">
              Pria yang penuh semangat, bertanggung jawab, dan selalu
              bersyukur dalam setiap langkah kehidupan.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[35px] p-8 shadow-2xl text-center">
            <img
              src="https://i.postimg.cc/NFCjgQVS/2.jpg"
              alt="Mempelai Wanita"
              className="w-48 h-48 object-cover rounded-full mx-auto border-4 border-amber-300 shadow-xl"
            />

            <h3
              className="text-3xl mt-6 text-amber-200"
              style={{
                fontFamily: 'Cinzel, serif',
              }}
            >
              Zumrotul Sanghadah
            </h3>

            <p className="mt-4 text-amber-100 leading-relaxed">
              Wanita yang penyabar, penyayang, dan selalu berusaha menjadi
              pribadi yang lebih baik setiap harinya.
            </p>
          </div>
        </div>
      </section>

      {/* GIFT */}
      <section className="px-6 py-24 relative z-10">
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[35px] p-10 shadow-2xl text-center">
          <p className="uppercase tracking-[0.4em] text-amber-300 text-sm mb-4">
            Wedding Gift
          </p>

          <h2 className="text-4xl font-light mb-6">Amplop Digital</h2>

          <div className="bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-3xl p-8 border border-amber-200/20">
            <p className="text-amber-100 text-lg">BANK BRI</p>
            <h3 className="text-3xl font-bold mt-2 tracking-widest">
              212001009517503
            </h3>
            <p className="mt-3 text-amber-200">a.n. ARIF BUDI LAKSONO</p>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[35px] p-10 shadow-2xl">
          <h2 className="text-4xl font-light text-amber-200 mb-6">
            Lokasi Acara
          </h2>

          <p className="text-amber-100 text-lg leading-relaxed mb-8">
            Banceran, Selomarto, Giriwoyo, Wonogiri
          </p>

          <a
            href="https://www.google.com/maps/@-8.0139071,110.9686515"
            target="_blank"
            className="inline-block px-8 py-4 rounded-full bg-amber-400 text-slate-900 font-semibold hover:scale-105 transition"
          >
            Buka Google Maps
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-16 text-center border-t border-white/10">
        <h2
          className="text-5xl text-amber-200 mb-4"
          style={{
            fontFamily: 'Cinzel, serif',
          }}
        >
          Thank You
        </h2>

        <p className="text-amber-100 max-w-2xl mx-auto leading-relaxed px-6">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
        </p>

        <p
          className="mt-8 text-xl text-amber-300"
          style={{
            fontFamily: 'Cinzel, serif',
            letterSpacing: '3px',
          }}
        >
          Arip & Zumrotul
        </p>
      </footer>
    </div>
  );
}

