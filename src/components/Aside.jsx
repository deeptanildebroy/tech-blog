import React from 'react'

function Aside({imageSrc, imageAlt ,className=''}) {
  return (
    <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
        <img
        alt={imageAlt}
        src={imageSrc}
        className={`absolute inset-0 h-full w-full object-cover ${className}`}
        />
    </aside>
  )
}

export default Aside