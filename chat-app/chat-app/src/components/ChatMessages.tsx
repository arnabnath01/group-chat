import React, { Suspense } from 'react'
import ListMessages from './ListMessages'

import InitMessages from '@/lib/store/initmessages';
import { supabaseServer } from '@/lib/supabase/server';


export default async function ChatMessages(){
//   const msgData = supabaseServer();

//   const { data } = await msgData
//     .from("messages")
//     .select("*,users(*)")
//     .order("created_at", { ascending: false });

//   console.log(data)

// const supabase = supabaseServer()
// const {data} = await supabase.from("messages").select("*,users(*)")
// console.log(data)

  const sampleData = [
    {
      created_at: "2022-01-01T00:00:00Z",
      id: "1",
      is_edit: false,
      send_by: "user1",
      text: "Hello, this is a message",
      users: {
        //   avatar_url: "https://example.com/avatar1.png",
        avatar_url: "",
        created_at: "2022-01-01T00:00:00Z",
        display_name: "User One",
        id: "user1",
      },
    },
    {
      created_at: "2022-01-02T00:00:00Z",
      id: "2",
      is_edit: false,
      send_by: "user2",
      text: "Hello, this is another message",
      users: {
        avatar_url: "",
        created_at: "2022-01-02T00:00:00Z",
        display_name: "User Two",
        id: "user2",
      },
    },
  ];

  return (
    // suspense is used to handle async data
    <Suspense fallback="loading..">

      {/* lists all the messages  */}
      <ListMessages />

      {/* data can be empty */}
      {/* <InitMessages messages={data || []} /> */}
      <InitMessages messages={sampleData || []} />
    </Suspense>
  );
}