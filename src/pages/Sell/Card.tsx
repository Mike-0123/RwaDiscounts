import React from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}
const Card: React.FC<CardProps>= ({ imageSrc, title, description })=> {
  return (
    <div className="w-[320px] h-[260px] flex items-center flex-col font-extralight">
        <div className="w-1/2 h-60%]">
        <img src={imageSrc} alt={title} className='w-full h-full object-cover' />
        </div>
        <div className="w-[80%]">
        <div className="text-[#022b5f] w-full flex justify-center font-bold text-[15px]">
        {title}
        </div>
        <div className="w-full text-gray-600 text-[14px] text-center">
          {description}
        </div>
        </div>
    </div>
  )
}

export default Card
