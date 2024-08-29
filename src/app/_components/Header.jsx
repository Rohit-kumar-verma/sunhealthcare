"use client"
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState , useEffect} from 'react';
import Link from 'next/link';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/contact' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const router = useRouter();
  console.log(router.pathname);
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    if (router.pathname) {
      setPathname(router.pathname);
    }
  }, [router.pathname]);

  if (!pathname) {
    return null; // or a loading indicator
  }

  
  return (
    <Disclosure as="nav" className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-black-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between h-[50%] flex-shrink">
            <div className="flex flex-shrink-1 items-center">
              <Image src='logo_2.gif' alt='Logo' className='w-[44%] mr-4 ml-auto lg:ml-0' />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      router.pathname === item.href ? 'text-[#00ADB5]' : 'text-black hover:text-[#00ADB5]',
                      'px-3 py-2 rounded-md text-xl font-medium'
                    )}
                    aria-current={router.pathname === item.href ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <DisclosureButton
                as="a"
                aria-current={router.pathname === item.href ? 'page' : undefined}
                className={classNames(
                  router.pathname === item.href ? 'text-[#00ADB5]' : 'text-black-600 hover:text-[#00ADB5]',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
              >
                {item.name}
              </DisclosureButton>
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
