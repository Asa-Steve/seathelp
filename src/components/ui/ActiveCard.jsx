import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
/*
{
    id: "tkt_003",
  
      name: "Michael Stone",
      avatar: "https://i.pravatar.cc/150?img=12",
      initials: "MS",
  
    title: "Feature request: Dark mode",
    description:
      "It would be really helpful to have a dark mode option, especially for users who work late hours. The current UI is great but can be harsh at night.",
    status: "closed",
    priority: "low",
    createdAt: "2026-01-15T08:45:00Z",
  },
*/
export function ActiveCard({ data, fillColor = "green-600", clampAt = 2 }) {
  return (
    <div className="flex w-full md:max-w-lg flex-col gap-6 my-1 cursor-pointer">
      <Item
        variant="outline"
        className={`border-gray-300  border-s-3 ${"border-s-" + fillColor} relative hover:shadow-md transition-shadow duration-300`}
      >
        <ItemMedia>
          <Avatar className="size-10 border border-gray-600 outline-1 outline-offset-2">
            <AvatarImage src={data?.avatar} />
            <AvatarFallback>{data?.initials}</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle className={"flex justify-between w-full"}>
            <p>{data?.name}</p>
            <div className="absolute flex gap-2 right-[01%] top-1">
              {data?.status === "in-progress" && (
                <p className="bg-blue-400 px-2 py-0.5 uppercase text-[10px] font-bold text-white rounded-lg text-shadow-2xs">
                  hId: #{data?.id}
                </p>
              )}
              <p className="bg-green-600 px-2 py-0.5 uppercase text-[10px] font-bold text-white rounded-lg text-shadow-2xs">
                UId: #{data?.id}
              </p>
            </div>
          </ItemTitle>
          <ItemDescription className={`${"line-clamp-" + clampAt} text-start`}>
            {data?.description} - {data?.title}
          </ItemDescription>
        </ItemContent>
      </Item>
    </div>
  );
}
