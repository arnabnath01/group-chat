

import { create } from "zustand";

//first we r defining how the message should look like
export type Imessage = {
  created_at: string;
  id: string;
  is_edit: boolean;
  send_by: string;
  text: string;
  users: {
    avatar_url: string | null;
    created_at: string | null;
    display_name: string | null;
    id: string;
  } | null;
};


// then here we are sying that the messages should be a array of Imessage
interface messageState {
  messages: Imessage[];
  addMessage: (message:Imessage) => void;
}

export const useMessage = create<messageState>()((set) => ({
    messages: [],
    addMessage:(message)=>{
        set((state)=>({
            messages:[...state.messages,message]
        }))
    }
}));



