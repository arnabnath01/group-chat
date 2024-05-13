

import ChatHeader from '../components/ChatHeader';
import { supabaseServer } from '@/lib/supabase/server';
import InitUser from '../lib/store/initUser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatMessages } from '@/components/ChatMessages';
import ChatInput from '@/components/ChatInput';
import ChatAbout from '@/components/ChatAbout';

export default async function Page (){

  const supabase =await supabaseServer();

  
  const { data } = await supabase.auth.getSession();

    return (
      // {<>
      //   <div>
      //     <div className="h-full border rounded-md flex flex-col">
      //       <ChatHeader user={data.session?.user} />

      //       <div className="flex-1 bg-slate-600 flex flex-col ">

      //       <div className='flex-1'></div>

      //       <div>
      //         <div className='flex flex-row m-2'>
      //           <div className='h-10 w-10 bg-green-500 rounded-full '>
      //           </div>
      //             <div>
      //               <div>
      //                 <h1 className='m-2'>Arnab</h1>
      //               </div>

      //           </div>
      //         </div>
      //       </div>

      //         <div className=" p-5 text-blue-600">
      //           <Input type="text" placeholder="enter msg" />
      //         </div>
      //       </div>
      //     </div>
      //   </div>

      //   <InitUser user={data.session?.user} />
      // </>}

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

