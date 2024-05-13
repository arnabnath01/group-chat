"use client";

import React from 'react'
import { Input } from "@/components/ui/input";
import { supabaseBrowser } from '@/lib/supabase/browser';
import { toast } from 'sonner';

const ChatInput = () => {

    const supabase = supabaseBrowser();
    const sendMessage = async (text:string) => {
    // call supabase function to send message
    const {error} =await supabase.from('messages').insert({text})

    if(error){
        toast.error(error.message)
    }

    }
  return (
    <div className=''>
        <div className="flex flex-row m-2 ">
            <div className="h-10 w-10 bg-green-500 rounded-full"></div>
            <div>
            <div>
                <h1 className="m-2">Arnab</h1>
            </div>
            </div>
        </div>
        <div className="p-5 text-blue-600">
            <Input type="text" placeholder="enter msg" 
            onKeyDown={(e)=>{
                if(e.key=='Enter'){
                    sendMessage(e.currentTarget.value)
                    e.currentTarget.value=''
                }
            }}
            />
        </div>
    </div>
  )
}

export default ChatInput