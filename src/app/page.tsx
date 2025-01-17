import ContestWinners from "@/components/ContestWinners";
import MainLinks from "@/components/MainLinks";
import MemeCarousel from "@/components/MemeCarousel";
import Tokenomics from "@/components/Tokenomics";

/** change content text here */
const content = {
  title: "Welcome to $LGTB",
  subtitle: "A New Era of Meme Coins",
  ca: 'CA: 2vFYpCh2yJhHphft1Z4XHdafEhj6XksyhFyH9tvTdKqf'
}

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-white text-center 
                   drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
        {content.title}
      </h2>

      <p className="text-base mb-4 md:text-2xl lg:text-3xl font-bold text-white text-center 
                  drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
        {content.subtitle}
      </p>
      <div className="flex justify-center">
        <span className="text-xs mb-6 md:text-xl lg:text-2xl font-bold text-white text-center">{content.ca}</span>
      </div>

      <Tokenomics />
      <MainLinks />
      <ContestWinners />
      <MemeCarousel />
    </main>
  );
}