"use client";
import { Imessage, useMessage } from "@/lib/store/messages";
import { useEffect, useRef } from "react";
import Message from './Message';

export default function ListMessages() {

    const { messages } = useMessage((state) => state);


  return (
    <>
    <div className="flex-1 flex-col p-5 h-full overflow-y-auto">
        <div className="flex-1"></div>
        <div className="space-y-7">
            {
                messages.map((value,index) =>{
                    return (
                        <Message key={index} message={value} />
                    );
                })
            }
        </div>
        
    </div>
    </>
  );
}



