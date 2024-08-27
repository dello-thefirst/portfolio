import React from "react";

const Services = () => {
  return (
    <div className="w-full flex gap-5 my-10 sm:flex-col">
      <div className="w-full h-[230px] rounded-lg bg-color-1/10 p-4 flex flex-col gap-4 overflow-hidden">
        <i className="text-[50px] text-color-2 fa-solid fa-code"></i>
        <p className="text-color-1">Fullstack Development</p>

        <p className="text-color-3 text-[12px] text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni maiores
          dolor, quibusdam nostrum provident, reprehenderit nulla quidem
          sapiente possimus, quos eum? Explicabo molestiae nostrum tenetur velit
          quam id pariatur eum!
        </p>
      </div>
      <div className="w-full h-[230px] rounded-lg bg-color-1/10 p-4 flex flex-col gap-4 overflow-hidden">
        <i className="text-[50px] text-color-2 fa-light fa-mobile"></i>
        <p className="text-color-1">Mobile App Development</p>

        <p className="text-color-3 text-[12px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni maiores
          dolor, quibusdam nostrum provident, reprehenderit nulla quidem
          sapiente possimus, quos eum? Explicabo molestiae nostrum tenetur velit
          quam id pariatur eum!
        </p>
      </div>
      <div className="w-full h-[230px] rounded-lg bg-color-1/10 p-4 flex flex-col gap-4 overflow-hidden">
        <i className="text-[50px] text-color-2 fa-solid fa-pen-nib"></i>
        <p className="text-color-1">Graphic Design</p>

        <p className="text-color-3 text-[12px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni maiores
          dolor, quibusdam nostrum provident, reprehenderit nulla quidem
          sapiente possimus, quos eum? Explicabo molestiae nostrum tenetur velit
          quam id pariatur eum!
        </p>
      </div>
    </div>
  );
};

export default Services;
