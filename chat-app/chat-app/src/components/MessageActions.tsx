import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";


import { useMessage } from "@/lib/store/messages";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { toast } from "sonner";



export function DeleteAlert() {
  const actionMessage = useMessage((state) => state.actionMessage);


  // optimising the delete of msgs
  const optimisticDeleteMessage = useMessage(
    (state) => state.optimisticDeleteMessage
  );

  // deletes msgs form supabase record
  const handleDeleteMessage = async () => {
    const supabase = supabaseBrowser();

    console.log(
      "Last deleteed messages Id was: ",
      actionMessage?.id!,
      "deleted by ",
      actionMessage?.users?.display_name
    );
    optimisticDeleteMessage(actionMessage?.id!);
    const { error } = await supabase
      .from("messages")
      .delete()
      .eq("id", actionMessage?.id!);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Successfully delete a message");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button id="trigger-delete"></button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteMessage}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function EditAlert() {}
