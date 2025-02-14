"use client"

import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaWhatsapp} from "react-icons/fa"

const socials = [
    {icon: <FaGithub/>, path: "https://github.com/Rdk05 "},
    {icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/radhika-kumari-863454204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
    { icon: <FaWhatsapp />, path: "https://wa.me/917597808039" },
    // {icon: <FaYoutube/>, path: ""},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index)=> {
        return (
            <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        )
      })}
    </div>
  )
}

export default Social
