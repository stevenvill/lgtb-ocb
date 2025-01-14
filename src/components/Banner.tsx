import Image from "next/image";

/** Change banner content here */
/** to change banner image add new image to /public folder 
 * and change [bannerImage] to desired image from /public folder */
const content = {
    bannerImage: "/header.png",
    title: "LET'S GET THIS BREAD",
    subtitle: "@LGTBonSol"
};

export default function Banner() {
    return (
        <div className="relative w-full">
            <div className="relative w-full h-[300px] md:h-[500px]">
                <Image
                    src={content.bannerImage}
                    alt="Bread Banner"
                    fill
                    priority={true}
                    quality={100}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                    loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4">
                    <h1 className="text-3xl md:text-6xl font-bold text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] 
                                tracking-wider text-center px-6 py-3">
                        {content.title}
                    </h1>
                    <p className="text-lg md:text-2xl text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]
                               px-4 py-2 text-center">
                        {content.subtitle}
                    </p>
                </div>
            </div>
        </div>
    );
}