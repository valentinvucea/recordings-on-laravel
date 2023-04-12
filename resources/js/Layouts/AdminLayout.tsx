import { useState, PropsWithChildren, ReactNode } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import { User } from '@/types';

export default function AdminLayout({ user, header, children }: PropsWithChildren<{ user: User, header?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <nav className="bg-cyan-900 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                                </Link>
                                <Link className="font-semibold text-xl text-white hover:text-gray-300 dark:text-gray-100 ml-3" href="/">
                                    Music Catalog
                                </Link>
                            </div>

                            <div className="ml-10 hidden md:flex flex flex-1 items-center">
                                <Link className="text-md text-white hover:text-gray-300 dark:text-gray-100 ml-3" href="/">
                                    Recordings
                                </Link>
                                <Link className="text-md text-white hover:text-gray-300 dark:text-gray-100 ml-3" href="/">
                                    Choirs
                                </Link>
                                <Link className="text-md text-white hover:text-gray-300 dark:text-gray-100 ml-3" href="/">
                                    Directors
                                </Link>
                                <Link className="text-md text-white hover:text-gray-300 dark:text-gray-100 ml-3" href="/">
                                    Composers
                                </Link>
                                <Link className="text-md text-white hover:text-gray-300 dark:text-gray-100 ml-3" href="/">
                                    Compositions
                                </Link>
                                <Link className="text-md text-white hover:text-gray-300 dark:text-gray-100 ml-3" href="/">
                                    Choirs-Directors
                                </Link>
                            </div>
                        </div>

                        <div className="hidden md:flex md:items-center md:ml-6">
                            <div className="ml-3 relative">
                                <Link className="inline-flex items-center text-white hover:underline dark:text-gray-100 ml-3" href={route('logout')} method="post">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="mr-1" viewBox="0 0 64 64" preserveAspectRatio="xMidYMid meet">
                                        <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill="#2287DF" stroke="none">
                                            <path d="M290 541 c-5 -11 -10 -54 -10 -96 0 -84 11 -115 40 -115 29 0 40 31 40 115 0 84 -11 115 -40 115 -11 0 -24 -9 -30 -19z" />
                                            <path d="M166 466 c-91 -91 -71 -251 41 -326 31 -21 48 -25 113 -25 65 0 82 4 113 25 61 41 91 92 95 166 3 50 0 72 -18 108 -26 56 -75 94 -99 79 -26 -16 -24 -36 9 -72 80 -91 30 -228 -87 -238 -136 -12 -204 140 -109 242 29 31 32 45 14 63 -19 19 -35 14 -72 -22z" />
                                        </g>
                                    </svg>
                                    Logout
                                </Link>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center md:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' md:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
                        <div className="px-4">
                            <div className="font-medium text-base text-white dark:text-gray-200">
                                {user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-200">{user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white dark:bg-gray-800 shadow">
                    <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
