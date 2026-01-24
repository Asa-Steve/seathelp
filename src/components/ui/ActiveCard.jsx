import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import Tags from "@/components/ui/Tags";

export function ActiveCard({
  data,
  fillColor = "border-s-green-600",
  clampAt = 2,
}) {
  return (
    <div className="flex w-full md:max-w-lg flex-col gap-6 my-1 cursor-pointer">
      <Item
        variant="outline"
        className={`border-gray-300  border-s-3 ${fillColor} relative hover:shadow-md transition-shadow duration-300`}
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
            <Tags
              createdAt={data?.createdAt ?? null}
              status={data?.status}
              Uid={data?.id}
              Hid={data?.id}
              style={{ position: "absolute", right: "1%", top: "4px" }}
            />
          </ItemTitle>
          <ItemDescription className={`${"line-clamp-" + clampAt} text-start`}>
            <span className="font-semibold italic">{data?.title} </span>- {data?.description}
          </ItemDescription>
        </ItemContent>
      </Item>
    </div>
  );
}
