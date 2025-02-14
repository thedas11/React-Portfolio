import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import SingleInfo from './SingleInfo';
const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="daswork99@gmail.com" Image={MdOutlineMail} />
      <SingleInfo text="+91 9382110326" Image={MdOutlineLocalPhone} />
      <SingleInfo text="Durgapur, West Bengal" Image={IoLocation } />
    </div>
  )
}

export default ContactInfo
