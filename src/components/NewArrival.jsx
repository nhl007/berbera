const NewArrival = () => {
  return (
    <section className='flex flex-col justify-center items-center max-h-screen'>
      <h1 className=' text-2xl text-blue1 my-2'>NEW ARRIVAL</h1>
      <div className=' w-full flex max-h-full justify-around py-6'>
        <div className='luxury_punjabi w-[400px] h-auto flex justify-center items-center'>
          <button className='w-[150px] h-[40px] bg-blue1 text-gold flex justify-center items-center rounded-[20px]'>
            Luxury Punjabi
          </button>
        </div>
        <div className='premium_punjabi w-[400px] h-auto flex justify-center items-center'>
          <button className='w-[150px] h-[40px] bg-blue1 text-gold flex justify-center items-center rounded-[20px]'>
            Premium Punjabi
          </button>
        </div>
        <div className='regular_punjabi w-[400px] h-[500px] flex justify-center items-center'>
          <button className='w-[150px] h-[40px] bg-blue1 text-gold flex justify-center items-center rounded-[20px]'>
            Regular Punjabi
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
