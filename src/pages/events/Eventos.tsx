import backgroundVideo2 from "../../assets/background-video-2.mp4";
import aleatory from "../../assets/aleatory-background-video.mp4";
import cocay from "../../assets/cocay-token-background-video.mov";
import zamina from "../../assets/zamina-nft-background-video.mov";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import dayOne from "../../assets/events/day-1.png";
import dayTwo from "../../assets/events/day-2.png";
import dayThree from "../../assets/events/day-3.png";
import dayFour from "../../assets/events/day-4.png";

export const Eventos: React.FC = () => {
  const handleBackClick = () => {
    console.log("Botón de regreso presionado");
  };

  const events = [
    {
      title: "DAY ONE",
      description:
        "Access for one day to all activities, taalks, meetups, live performances, music, DJ sets, dining options, holistic activities, and the Crypto Academy. Access to al three stages",
      background: dayOne,
    },
    {
      title: "DAY TWO",
      description:
        "Access for one day to all activities, taalks, meetups, live performances, music, DJ sets, dining options, holistic activities, and the Crypto Academy. Access to al three stages",
      background: dayTwo,
    },
    {
      title: "DAY THREE",
      description:
        "Access for one day to all activities, taalks, meetups, live performances, music, DJ sets, dining options, holistic activities, and the Crypto Academy. Access to al three stages",

      background: dayThree,
    },
    {
      title: "DAY FOUR",
      description:
        "Access for one day to all activities, taalks, meetups, live performances, music, DJ sets, dining options, holistic activities, and the Crypto Academy. Access to al three stages",

      background: dayFour,
    },
  ];

  return (
    <>
      <div className="relative flex h-screen w-screen overflow-hidden bg-background p-16">
        <video
          autoPlay
          loop
          muted
          className="absolute opacity-50 top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src={backgroundVideo2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative text-white flex flex-col">
          <Header onClick={handleBackClick} />

          <main className="w-screen flex items-center flex-grow">
            {/* Información del cliente */}
            <div className="absolute transform -translate-y-1/2 left-0 top-1/2  text-primary text-3xl font-bold w-1/4">
              CONOCE ACERCA DE NUESTROS CLIENTES
            </div>

            {/* Carrusel de tarjetas de clientes */}
            <div className="flex overflow-hidden mx-auto snap-x scrollbar-hide">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-64 h-96 border-2 bg-black border-primary rounded-lg  m-4 overflow-hidden"
                >
                  {/* Backgorund */}
                  {/* <video
                    autoPlay
                    loop
                    muted
                    className="absolute opacity-50 top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
                  >
                    <source src={event.background} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video> */}

                  <img src={event.background} alt={event.title} />

                  {/* Content */}
                  <header className="text-primary text-xs p-2">
                    {event.title} {">>>>>>>>>"}
                  </header>

                  <div className="h-0.5 w-full bg-primary" />

                  <div className="text-primary text-4xl font-bold mb-4 h-full flex flex-col justify-center p-2">
                    {event.title}
                  </div>

                  <button className="absolute bottom-4 left-4 text-primary font-medium border-primary hover:text-pink-700 transition border py-1 px-6 rounded-full text-xs">
                    BUY
                  </button>

                  <button className="absolute bottom-4 left-4 text-primary font-medium border-primary hover:text-pink-700 transition border py-1 px-6 rounded-full text-xs">
                    VERIFY
                  </button>
                </div>
              ))}
            </div>
          </main>

          {/* Navegación inferior */}

          <Footer />
        </div>
      </div>
    </>
  );
};