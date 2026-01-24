import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogOverlay,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import Tags from "@/components/ui/Tags";

export function CardModal({
  avatar,
  initials,
  title,
  desc,
  children,
  status,
  data,
}) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>

      {/* 👇 THIS is what adds the blur */}
      <DialogOverlay className="backdrop-blur-sm bg-black/40" />

      <DialogContent showCloseButton={false} className="bg-white">
        <Tags
          createdAt={data?.createdAt ?? null}
          status={data?.status}
          Uid={data?.id}
          Hid={data?.id}
          style={{ position: "absolute", left: "0.3%", top: "-33px" }}
          size={12}
        />
        <DialogHeader>
          <DialogTitle className={"flex items-center gap-3"}>
            <Avatar className="size-12 border border-gray-600 outline-1 outline-offset-2">
              <AvatarImage src={avatar} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            {title}
          </DialogTitle>
          <DialogDescription
            className={"max-h-[60vh] leading-normal overflow-y-auto"}
          >
            {desc}
          </DialogDescription>
          {status === "open" && (
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  className={"cursor-pointer hover:bg-gray-300"}
                  variant="outline"
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button
                type="submit"
                className="bg-green-400 text-white cursor-pointer hover:bg-green-500"
                variant="outline"
              >
                Offer Help
              </Button>
            </DialogFooter>
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
