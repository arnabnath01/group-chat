

import { create } from "zustand";
import Message from '../../components/Message';

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
  actionMessage : Imessage | undefined; // acting some sort of actions(edit/delete)
  addMessage: (message:Imessage) => void;
  setActionMessage:(message:Imessage)=>void;

  optimisticDeleteMessage:(messageId: string)=>void;
}

export const useMessage = create<messageState>()((set) => ({
    messages: [],
    actionMessage:undefined,
    addMessage:(message)=>{
        set((state)=>({
          // adding the new message to the existing messages
            messages:[...state.messages,message]
        }))
    },
    setActionMessage:(message)=>{
      set((state)=>({
        actionMessage: message
      }))
    },

    optimisticDeleteMessage:(messageId)=>
      set((state)=>{
        return {
          messages: state.messages.filter(
            (message) => message.id !== messageId
          )
        };
      })

}));



