

import ChatHeader from '../components/ChatHeader';
import { supabaseServer } from '@/lib/supabase/server';
import InitUser from '../lib/store/initUser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ChatInput from '@/components/ChatInput';
import ChatAbout from '@/components/ChatAbout';
import ChatMessages from '@/components/ChatMessages';

export default async function Page (){

  const supabase =await supabaseServer();

  // using getSession(), instead of getUser() for faster authentication
  const { data } = await supabase.auth.getSession();

    return (
     
      <>
        <div className="max-w-3xl mx-auto md:py-10 h-screen">
          <div className=" h-full border rounded-md flex flex-col relative ">
            <ChatHeader user={data.session?.user} />

            {data.session?.user ? (
              <>
                <ChatMessages />
                <ChatInput />
              </>
            ) : (
              <ChatAbout />
            )}
          </div>
        </div>
        <InitUser user={data.session?.user} />
      </>
    );

}

