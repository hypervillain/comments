import React, { ReactNode, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav className="container mx-auto p-6 flex items-center justify-between">
              <div className="flex items-center justify-between">
              <div>
                  <a className="text-2xl font-bold text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl" href="#">
                    Commmmms
                  </a>
              </div>
              <div className="flex lg:hidden">
                  <button type="button" className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400" aria-label="toggle menu">
                    <svg x-show={!isOpen} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                    </svg>

                    <svg x-show={isOpen} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
              </div>
              </div>
              <div className="absolute inset-x-0 z-20 w-full bg-white px-6 py-4 shadow-md transition-all duration-300 ease-in-out dark:bg-gray-900 lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:dark:bg-transparent">
              <div className="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0">
                  <a className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-6" href="#">
                    Top picks 😍
                  </a>
              </div>

              <a className="mt-4 block h-10 transform rounded-md border px-5 py-2 text-center text-sm capitalize text-gray-700 transition-colors duration-300 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 lg:mt-0 lg:w-auto" href="#"> Google sign-in </a>
              </div>
          </nav>
      {children}
    </div>
  )
}

export default Layout
