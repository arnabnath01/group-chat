import React from 'react';
import ChatHeader from '../components/ChatHeader';
import { supabaseServer } from '@/lib/supabase/server';


export default async function Page (){

  const supabase =await supabaseServer();

  
  const { data } = await supabase.auth.getSession();




    return (
      <div>
        <div className="h-full border rounded-md">
         <ChatHeader user={data.session?.user}/>
        
        </div>
      </div>
    );

}

