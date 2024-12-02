import hero from "../assets/shop.jpg"
const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <img className="rounded-xl w-[800px]" src={hero} alt="hero" />

            </div>
            <h1 className="text-center justify-center text-6xl font-bold text-white pb-4"> Coffee i love it</h1>
        </div>
    );
};

export default Hero;