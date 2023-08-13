const HeroSection = () => {
  return (
    <section className=' min-h-screen hero_container flex relative'>
      <div className=' absolute bottom-[120px] flex flex-col my-auto bg-blue w-full justify-center items-center text-gold py-4'>
        <h1 className=' mb-1  tracking-widest text-xl w-[380px]'>
          TIMELESS LUXURY PREMIUM WEAR FOR MEN
        </h1>
        <div className='flex gap-4 justify-between w-[400px]'>
          <button className='w-[110px] h-[40px] bg-blue1 text-gold flex justify-center items-center rounded-[20px]'>
            Shop Now
          </button>
          <button className='w-[110px] h-[40px] bg-blue1 text-gold flex justify-center items-center rounded-[20px]'>
            New Arrival
          </button>
          <button className=' w-[110px] h-[40px] bg-blue1 text-gold flex justify-center items-center rounded-[20px]'>
            Store
          </button>
        </div>
      </div>
      <div className=' absolute bottom-4 w-full  flex justify-center items-center gap-4'>
        <div className=' w-3 h-3 rounded-full bg-white' />
        <div className=' w-3 h-3 rounded-full bg-white' />
        <div className=' w-3 h-3 rounded-full bg-white ' />
      </div>
    </section>
  );
};

export default HeroSection;
