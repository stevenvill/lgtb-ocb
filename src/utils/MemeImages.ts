interface MemeImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}
/* Add Images to /public/memes folder */
/* Add new meme image to this image Array to add to carousel */
/* Make sure to add all fields src, alt, width, height of new meme image(order doesnt matter) */
export const memeImages: MemeImage[] = [
  {
    src: "/memes/meme1.jpg",
    alt: "LGTB Meme 1",
    width: 855,
    height: 1280,
  },
  {
    src: "/memes/meme3.jpg",
    alt: "LGTB Meme 2",
    width: 3691,
    height: 3000,
  },
  {
    src: "/memes/meme4.jpg",
    alt: "LGTB Meme 4",
    width: 1280,
    height: 1280,
  },
  {
    src: "/memes/meme5.jpg",
    alt: "LGTB Meme 5",
    width: 1280,
    height: 1280,
  },
  {
    src: "/memes/meme6.jpg",
    alt: "LGTB Meme 6",
    width: 834,
    height: 1042,
  },
  {
    src: "/memes/meme7.jpg",
    alt: "LGTB Meme 7",
    width: 1280,
    height: 1249,
  },
  {
    src: "/memes/meme8.jpg",
    alt: "LGTB Meme 8",
    width: 1280,
    height: 1168,
  },
  {
    src: "/memes/meme9.jpg",
    alt: "LGTB Meme 9",
    width: 1280,
    height: 1280,
  },
  {
    src: "/memes/meme10.jpg",
    alt: "LGTB Meme 10",
    width: 1280,
    height: 1280,
  },
  {
    src: "/memes/meme11.jpg",
    alt: "LGTB Meme 11",
    width: 1280,
    height: 1025,
  },
];
