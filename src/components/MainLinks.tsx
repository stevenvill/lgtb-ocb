import Image from "next/image";
import Link from "next/link";

/** Change links and text here */
const navLinks = [
    {
        name: 'Link 1',
        href: 'https://app.meteora.ag/pools/79raiHK7DDEGYAQ5dCgKd55GtoxaytvdDZKLEbCM3gRy',
        logo: '/meteora-logo.png',
        height: 49,
        width: 49,
        text: 'Swap on Meteora'
    },
    {
        name: 'Link 2',
        href: '/https://t.me/+kQeiojHoHmhhYTc0',
        logo: '/telegram-logo.png',
        height: 55,
        width: 55,
        text: '$LGTB on Telegram'
    },
    {
        name: 'Link 3',
        href: 'https://dexscreener.com/solana/hkkjwrtgtqepzd2uezcmbowk7jkxbvwcfxpq1gzlotot',
        logo: '/dex-screener-logo.png',
        height: 45,
        width: 45,
        text: '$LGTB DexScreener'
    },
    {
        name: 'Link 4',
        href: 'https://x.com/LGTBonSol',
        logo: '/x-logo.png',
        height: 55,
        width: 55,
        text: 'Official $LGTB Twitter (X)'
    },
    {
        name: 'Link 5',
        href: 'https://www.coingecko.com/en/coins/lets-get-this-bread',
        logo: '/coingecko-logo.png',
        height: 50,
        width: 50,
        text: '$LGTB CoinGecko'
    }
];

export default function TokenLinks() {
    return (
        <div className="bg-gradient-to-b from-[#3E7B27] to-[#85A947] p-4 md:p-8 rounded-3xl max-w-6xl mx-auto">
            <div className="flex justify-center items-start">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-4 md:p-8 flex flex-col lg:flex-row gap-6 md:gap-8 shadow-2xl w-full">
                    <div className="relative w-full lg:w-[400px] h-[300px] md:h-[500px] shrink-0">
                        <Image
                            src="/lgtb1-min.png"
                            alt="Main Logo"
                            width={400}
                            height={500}
                            priority
                            className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 h-full object-cover w-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#3E7B27]/20 to-transparent rounded-2xl" />
                    </div>

                    <div className="flex flex-col gap-3 md:gap-4 w-full">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="group bg-white/5 hover:bg-white/15 rounded-xl transition-all duration-300 
                       flex items-center gap-3 md:gap-4 p-3 md:p-4 backdrop-blur-sm border border-white/10 
                       hover:border-white/20 h-[64px] md:h-[84px] w-full"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                                    <Image
                                        src={link.logo}
                                        alt={link.name}
                                        width={link.width}
                                        height={link.height}
                                        className="drop-shadow-lg w-[30px] h-[30px] md:w-[40px] md:h-[40px] object-contain"
                                    />
                                </div>
                                <p className="text-white/90 font-medium text-sm md:text-lg group-hover:text-white transition-colors">
                                    {link.text}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}