import React from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/contact',
    text: 'contact',
  },
  
  
];

export const social = [
    {
        id: 1,
        icon: < FaRegHeart/>,
        text: 'Wish List',
      },
      {
        id: 2,
        icon: <FaCartShopping />,
        text: 'Shopping Bag',
      },
      {
        id: 3,
        icon: <CgProfile />,
        text: ' Login',
      },
  
];