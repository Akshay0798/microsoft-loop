"use client"
import { SmilePlus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function CreateWorkspace() {

    const [coverImage,setCoverImage]=useState('/cover.png');

  return (
    <div className="p-10 md:px-36 lg:px-52 xl:px-80 py-20">
      <div>
        
        {/* cover Image */}
        <div className="relative group cursor-pointer">
            <h2 className="hidden absolute p-4 w-full h-full items-center group-hover:flex justify-center">
              Change Cover
            </h2>
            <div className="group-hover:opacity-40">
              <Image
                src={coverImage}
                width={400}
                height={400}
                className="w-full h-[180px] object-cover rounded-t-xl"
              />
            </div>
          </div>
        
        {/* input Section */}
        <div className='p-12'>
            <h2 className='font-medium text-xl'>
                Create a new workspace
            </h2>
            <h2 className='text-sm mt-2'>
                This is a shared space where you can collaborate wth your team.You can always rename it later.
            </h2>
            
        </div>

      </div>
    </div>
  );
}

export default CreateWorkspace;
