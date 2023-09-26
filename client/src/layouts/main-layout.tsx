import { Link, Outlet, useLocation } from 'react-router-dom';
import { BiUser, BiAdjust, BiCaretDown } from 'react-icons/bi';
import { Icon } from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from '@chakra-ui/react'
import { Transition } from '@headlessui/react'
import { useEffect, useState } from 'react';


export default function MainLayout() {
  const location = useLocation();
  const [isShowing, setIsShowing] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const contentWidth = isSidebarOpen ? 'w-10/12' : 'w-full';


  useEffect(() => {
    // Ekran genişliği değiştiğinde bu etkileşim çalışır
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Ekran genişliği değişikliklerini dinlemek için bir olay ekleyin
    window.addEventListener('resize', handleResize);

    // Temizlik için olay dinleyicisini kaldırın
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    useEffect(() => {
      if (windowWidth <= 900) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    }, [windowWidth]);
  

  return (
    <section>
      <div className='flex h-screen bg-gray-100'>


        <div className={`w-2/12 border-r border-gray-300 bg-blue-600 flex flex-col ${isSidebarOpen ? '' : 'hidden'}`}>
          {/* Yan menü içeriği */}
          <div className='mt-3'>
            <h1 className='text-center text-xl text-white mb-1'>Logo here.</h1>
            <hr className='mb-10 ml-3 mr-3' />
          </div>

          <div className=''>
            <div className={location.pathname === '/main' ? 'flex justify-center mt-3 p-2 text-white border-r bg-blue-700 hover:text-white duration-500' : "flex justify-center mt-3 p-2 text-white hover:bg-blue-700 bg-blue-600 duration-300"}>
              <Link to="" className='w-full text-center'><Icon className='mb-1 mr-2' as={BiAdjust} w={5} h={5} color={"white"} />Main</Link>
            </div>

            <div className={location.pathname === '/main/profile' ? 'flex justify-center mt-3 p-2 text-white border-r bg-blue-700 hover:text-white duration-500' : "flex justify-center mt-3 p-2 text-white hover:bg-blue-700 bg-blue-600  duration-300"}>
              <Link to="profile" className='w-full text-center'><Icon className='mb-1 mr-2' as={BiUser} w={5} h={5} color={"white"} />Profile</Link>
            </div>
          </div>
        </div>


        <div className={`w-10/12 p-1 ${contentWidth}`}>
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? 'Close' : 'Open'}
        </button>
          <div className='bg-blue-500 p-1 rounded-md'>
            <div className='flex justify-end'>
              <Menu>
                <MenuButton as={Button} rightIcon={<BiCaretDown />}>
                  tolga123
                </MenuButton>
                <MenuList>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem textColor={"red.500"}>Log out</MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
          <Outlet />
        </div>
      </div>

    </section>
  );
}
