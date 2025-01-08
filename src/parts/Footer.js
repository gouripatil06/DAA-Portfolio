/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable no-multiple-empty-lines */

import React from 'react';
import Button from '../elements/Button';

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/3 flex-col ml-16 mr-8">
            <h1 className="text-xl font-bold text-theme-blue">Gouri Patil</h1>
            <p className="w-full text-lg text-gray-400 font-light">
              Growing Through Learning
              {' '}
              <br />
              At KLE University
            </p>
          </div>
          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Contact
            </h1>
            <p className="text-lg text-gray-400 font-light">
              gouripatil2125@gmail.com
            </p>
            <p className="text-lg text-gray-400 font-light">
              KLE University, Hubli, Karnataka
            </p>
          </div>
          <div className="w-1/3 ml-16 sm:ml-0 mt-0">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Social
            </h1>
            <Button href="https://github.com/gouripatil06" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              Github
            </Button>
            <Button href="mailto:gouripatil2125@gmail.com" type="link" className="flex text-lg text-gray-400 font-light hover:underline">
              Email
            </Button>
          </div>
        </div>
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-gray-400 font-light">
            Copyright 2023 - All rights reserved - Gouri Patil
          </p>
          <div className="flex-row">
            <p className="inline-block text-lg text-gray-400 font-light">
              Made with &#x2764; by&nbsp;
            </p>
            <Button href="https://github.com/gouripatil06" type="link" target="_blank" className="text-lg text-theme-purple font-light" isExternal>
              Gouri Patil
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

