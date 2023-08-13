import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { GiNotebook } from 'react-icons/gi';
const NavBar = () => {
  return (
    <nav className='flex flex-col w-full px-6 bg-blue fixed top-0 left-0 z-50'>
      <div className='flex justify-between items-center my-4'>
        <h1 className=' text-gold tracking-[12px]'>BERBERA</h1>
        <div className='flex items-center gap-4 text-gold'>
          <div className='flex justify-center items-end'>
            <AiOutlineSearch className=' w-[24px] h-[24px]' />
            <input
              className=' border-b-2 placeholder:text-gold border-b-gold bg-transparent'
              placeholder='Search'
            />
          </div>
          <div className='flex flex-col justify-center items-center cursor-pointer'>
            <BsFillPersonFill /> <p>Sign In</p>
          </div>
          <div className='flex flex-col justify-center items-center cursor-pointer'>
            <GiNotebook /> Register
          </div>
          <div className='flex flex-col justify-center items-center cursor-pointer'>
            <AiOutlineShoppingCart /> Cart
          </div>
        </div>
      </div>
      <div className=' w-full h-[1px] bg-gold' />
      <div className=' flex gap-4 text-gold justify-center items-center py-1'>
        <p className=' cursor-pointer'>New Arrival</p>
        <p className=' cursor-pointer'>All Items</p>
        <p className=' cursor-pointer'>Featured</p>
        <p className=' cursor-pointer'>Sale</p>
        <p className=' cursor-pointer'>Stores</p>
      </div>
    </nav>
  );
};

export default NavBar;
