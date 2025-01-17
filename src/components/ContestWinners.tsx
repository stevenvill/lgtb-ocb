import Link from "next/link";

const content = {
    message: 'Participate in our community contests',
    message2: 'Check out the Contest Winners!'
}
export default function ContestWinners() {
    return (
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-4  mt-8 md:p-8 shadow-2xl max-w-6xl mx-auto">
            <div className="relative">

                <div className="flex flex-col gap-3 md:gap-4 w-full">

                    <Link

                        href='https://docs.google.com/spreadsheets/d/1rN-6WN2xJDTl-4fkxbIl5z8JL1LGuOY3t8_DTCH2qg8/edit?gid=1494151330#gid=1494151330'
                        className="flex items-center gap-4 bg-black/20 hover:bg-black/30 rounded-xl p-4 w-full
                  transition-all duration-300 border border-white/10 hover:border-white/20"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {/* <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                                <Image
                                    src={link.logo}
                                    alt={link.name}
                                    width={link.width}
                                    height={link.height}
                                    className="drop-shadow-lg w-[30px] h-[30px] md:w-[40px] md:h-[40px] object-contain"
                                />
                            </div> */}
                        <p className="text-white/90 font-medium text-sm md:text-lg group-hover:text-white transition-colors w-full text-center">
                            {content.message} <br /> <strong>{content.message2} </strong>
                        </p>
                    </Link>

                </div>
            </div>
        </div>
    )
}