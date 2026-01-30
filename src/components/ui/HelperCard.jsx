import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import StarIcon from "@/components/ui/StarIcon";
import { Icon } from "@iconify/react";

const HelperCard = ({ data, position }) => {
  return (
    <Item
      variant="outline"
      className={`border-gray-300 w-full md:w-[47%] lg:w-[32%] border-s-3 relative hover:shadow-md transition-shadow duration-300`}
    >
      <ItemMedia className="">
        <Avatar className="size-10 border-gray-600 outline-1 outline-offset-2">
          <AvatarImage src={data?.avatar} />
          {/* // Try and fix the correct initials */}
          <AvatarFallback>{data?.initials}</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <div className="absolute -right-2.5 -top-3 w-8.75 h-8.75 flex items-center justify-center">
          <Icon icon="mynaui:badge-solid" className=" size-8 text-yellow-500" />
          <span className="z-20 absolute w-3.75 h-3.75 flex justify-center items-center text-shadow-2xs">
            {position}
          </span>
        </div>
        <ItemTitle className={"flex justify-between w-full"}>
          <p>{data?.name}</p>
        </ItemTitle>
        <ItemDescription
          className={
            "line-clamp-0 text-start flex justify-between items-center flex-wrap"
          }
        >
          <span className="flex w-fit">
            {Array.from({ length: data?.rating ?? 0 })?.map((_, idx) => (
              <StarIcon key={idx} filled={true} h={12} w={12} strk={1} />
            ))}
            {data?.rating < 5 &&
              Array.from({ length: 5 - (data?.rating ?? 5) })?.map((_, idx) => (
                <StarIcon key={idx} h={12} w={12} strk={1} />
              ))}
          </span>
          <span className="text-gray-500 italic">
            {data?.totalResolved} resolved cases
          </span>
        </ItemDescription>
      </ItemContent>
    </Item>
  );
};

export default HelperCard;
