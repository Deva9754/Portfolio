const Portfolio = () => {
  const Portfolios = [
    {
      id: 1,
      src: "https://static-00.iconduck.com/assets.00/messenger-icon-512x511-wsdhvs0c.png",
      href: "https://github.com/Deva9754/Chatify/tree/master",
      href1: "",
    },
    {
      id: 2,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_KbSaAU0XA2XTjF9pkm7-5R9j8KbWbuOgdg&s",
      href: "https://github.com/Deva9754/Flipkart",
      href1: "https://flipkartclone-devashish-sahus-projects.vercel.app/",
    },
    {
      id: 3,
      src: "https://a0.anyrgb.com/pngimg/906/338/windows-movie-maker-freemake-video-downloader-visual-effects-film-editing-video-editing-filmmaking-music-video-editing-coin-icon-design-thumbnail.png",
      href: "https://github.com/Deva9754/Netflixgpt",
      href1: "https://netflixgpt-omega.vercel.app/",
    },
    // {
    //   id: 1,
    //   src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_KbSaAU0XA2XTjF9pkm7-5R9j8KbWbuOgdg&s",
    // },
  ];

  return (
    <div
      id="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className=" max-w-sceen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className=" py-6">Check out some out of my work right here</p>
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {Portfolios.map(({ id, src, href, href1 }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-xl">
              <img
                className=" px-36 rounded-lg duration-200 hover:scale-105"
                src={src}
                alt=""
              />
              <div className="flex items-center justify-center">
                <a href={href1} target="_blank">
                  <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>{" "}
                </a>

                <a href={href} target="_blank">
                  <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
          <a href="https://assignment-01-pied.vercel.app/" target="_blank">
            <p className=" ">For more...</p>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
