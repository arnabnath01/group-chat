import { Imessage, useMessage } from "@/lib/store/messages";
import React from "react";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";


export default function Message({ message }: { message: Imessage }) {
  
  return (
    <div className="flex gap-2">
      <div>
        {/*fetching users image from message object */}
        <Image
          src={message.users?.avatar_url!}
          alt={message.users?.display_name!}
          width={40}
          height={40}
          className=" rounded-full ring-2"
        />
      </div>

      <div className="flex-1">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-1">
            <h1 className="font-bold">{message.users?.display_name}</h1>
            <h1 className="text-sm text-gray-400">
              {new Date(message.created_at).toDateString()}
            </h1>
            
          </div>
         
        </div>
        <p className="text-gray-300">{message.text}</p>
      </div>
    </div>
  );
} 

// const MessageMenu = ({ message }: { message: Imessage }) => {
//   const setActionMessage = useMessage((state) => state.setActionMessage);

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger>
//         <MoreHorizontal />
//       </DropdownMenuTrigger>
//       <DropdownMenuContent>
//         <DropdownMenuLabel>Action</DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem
//           onClick={() => {
//             document.getElementById("trigger-edit")?.click();
//             setActionMessage(message);
//           }}
//         >
//           Edit
//         </DropdownMenuItem>
//         <DropdownMenuItem
//           onClick={() => {
//             document.getElementById("trigger-delete")?.click();
//             setActionMessage(message);
//           }
//         }
//         >
//           Delete
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// };
