import { Link, Outlet, useLocation } from 'react-router-dom';
import { BiUser, BiAdjust } from 'react-icons/bi';
import { Icon } from '@chakra-ui/react';

export default function MainLayout() {
  const location = useLocation();

  return (
    <section>
      <div className='flex h-screen bg-gray-100'>
        <div className='w-2/12 border-r border-gray-300 bg-blue-600 flex flex-col'>
          <div className='mt-3'>
            <h1 className='text-center text-xl text-white mb-10'>Hello</h1>
          </div>
          <div className=''>          
            <div className={ location.pathname === '/main' ? 'flex justify-center mt-3 p-2 text-white border-r bg-blue-700 hover:text-white duration-500' : "flex justify-center mt-3 p-2 text-white hover:bg-blue-700 bg-blue-600 duration-300"}>
              <Link to="" className='w-full text-center'><Icon className='mb-1 mr-2' as={BiAdjust} w={5} h={5} color={"white"} />Main</Link>
            </div>

            <div className={ location.pathname === '/main/profile' ? 'flex justify-center mt-3 p-2 text-white border-r bg-blue-700 hover:text-white duration-500' : "flex justify-center mt-3 p-2 text-white hover:bg-blue-700 bg-blue-600  duration-300"}>
              <Link to="profile" className='w-full text-center'><Icon className='mb-1 mr-2' as={BiUser} w={5} h={5} color={"white"} />Profile</Link>
            </div>
          </div>
        </div>
        <div className='w-10/12 p-4'>
          <Outlet />
        </div>
      </div>

    </section>
  );
}
