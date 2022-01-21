import React from 'react';
//let hpLogo = require('../svg/icons8-harry-potter.svg');

import hpLogo from '../svg/icons8-harry-potter.svg';

export default function Nav(props){

    return(
        <nav className="flex items-center justify-between flex-wrap p-6 bg-red-500 ">
           
            <img src={hpLogo} alt="logo" className="w-10 h-10 mr-2"/>
                

            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                    <p>Button</p>
                </button>
            </div>

            <div className="w-full block  flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a href="" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                        Home
                    </a>
                    <a href="" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                        All Students
                    </a>
                    <a href="" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                        Hogwarts Houses
                    </a>
                    <a href="" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                        Hogwarts Students
                    </a>
                </div>
            </div>

        </nav>
    )
}