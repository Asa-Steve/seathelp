import HelperCard from "@/components/ui/HelperCard";

const minutesAgo = (mins) =>
  new Date(Date.now() - mins * 60 * 1000).toISOString();
const data = {
  id: "l2e_006",
  name: "Fatima Bello",
  avatar: "https://i.pravatar.cc/150?img=2",
  initials: "FB",
  title: "Cannot upload assignment",
  description: "Whenever I try to upload my assignment file.",
  status: "open",
  priority: "high",
  rating: 4,
  totalResolved: 45,
  createdAt: minutesAgo(32),
};
const Leaderboard = () => {
  return (
    <div className="h-full bg-white flex items-center justify-center">
      <div className="h-full lg:h-[90%] w-[98%] p-4 flex flex-col">
        <h2 className="text-4xl font-light mb-6">Top Helpers</h2>
        <div className="flex flex-1q flex-wrap scrollbar-hide  overflow-y-auto gap-y-5 items-center justify-between px-2 py-2">
          {Array.from({ length: 12 })?.map((_, idx) => (
            <HelperCard
              key={idx}
              //Kindly change this in live / production
              data={{
                ...data,
                totalResolved:
                  idx > 0 ? data?.totalResolved * idx : data?.totalResolved,
              }}
              position={idx + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
