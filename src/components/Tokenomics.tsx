import Image from "next/image";
import Link from "next/link";

/** Remove comments to bring back tokenomics */
/** Change Content here */
const content = {
    lgtbTokenImage: "/avi.png",
    // tokenomicsImage: "/tokenomics.jpg",
    title: "LGTB Tokenomics",
    callToAction: "Earn real, passive income",
    callToAction2: 'through daily staking rewards.',
    callToActionLink: 'https://m3m3.meteora.ag/farms/HkkjwRtgtqepZd2uEZcmBoWK7JkxBVWCfXpq1GzLoToT'
}

export default function Tokenomics() {
    return (
        // <div className="bg-gradient-to-t from-[#3E7B27] to-[#85A947] p-4 md:p-8 rounded-3xl max-w-6xl mx-auto">
        //     <div className="flex justify-center items-start">
        //         <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-4 md:p-8 flex flex-col gap-6 md:gap-8 shadow-2xl w-full">
        //             {/* <div className="relative w-full aspect-[16/9] md:aspect-[16/9]">
        //                 <Image
        //                     src={content.tokenomicsImage}
        //                     alt="LGTB Tokenomics"
        //                     fill
        //                     className="rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 object-contain bg-[#3E7B27]/20"
        //                     priority
        //                 />
        //             </div> */}
        //             <div className="flex flex-col md:flex-row gap-5 text-center md:text-left items-center">
        //                 <Image
        //                     src={content.lgtbTokenImage}
        //                     alt="LGTB Frog Logo"
        //                     width={96}
        //                     height={96}
        //                     className="rounded-full shadow-lg"
        //                 />
        //                 <Link
        //                     key={content.callToActionLink}
        //                     href='stake and earn'
        //                     className="group bg-white/5 hover:bg-white/15 rounded-xl transition-all duration-300 
        //                flex items-center gap-3 md:gap-4 p-3 md:p-4 backdrop-blur-sm border border-white/10 
        //                hover:border-white/20 h-[64px] md:h-[84px] w-full"
        //                     target="_blank"
        //                     rel="noopener noreferrer"
        //                 >
        //                     <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
        //                         <Image
        //                             src='/meteora-logo.png'
        //                             alt='meteora'
        //                             width={49}
        //                             height={49}
        //                             className="drop-shadow-lg w-[30px] h-[30px] md:w-[40px] md:h-[40px] object-contain"
        //                         />
        //                     </div>
        //                     <p className="text-white/90 font-medium text-sm md:text-lg group-hover:text-white transition-colors">
        //                         <strong>{content.callToAction}</strong> {content.callToAction2}
        //                     </p>
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="bg-gradient-to-t from-[#3E7B27] to-[#85A947] p-4 rounded-3xl max-w-6xl mx-auto">
            <div className="bg-black/10 rounded-2xl p-6">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <Image
                        src={content.lgtbTokenImage}
                        alt="LGTB Frog Logo"
                        width={80}
                        height={80}
                        className="rounded-full"
                    />
                    <Link
                        href='https://m3m3.meteora.ag/farms/HkkjwRtgtqepZd2uEZcmBoWK7JkxBVWCfXpq1GzLoToT'
                        className="flex items-center gap-4 bg-black/20 hover:bg-black/30 rounded-xl p-4 w-full
                  transition-all duration-300 border border-white/10 hover:border-white/20"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src='/meteora-logo.png'
                            alt='meteora'
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                        <p className="text-white font-medium">
                            <strong>{content.callToAction}</strong> {content.callToAction2}
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}