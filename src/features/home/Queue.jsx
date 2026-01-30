import { ActiveCard } from "@/components/ui/ActiveCard";
import { CardModal } from "@/components/ui/CardModal";

const helpDeskTickets = [
  {
    id: "tkt_001",

    name: "Evil Rabbit",
    avatar: "https://github.com/evilrabbit.png",
    initials: "ER",
    title: "Unable to access dashboard",
    description:
      "I keep getting logged out whenever I try to access my dashboard. This started happening after the last update and it’s affecting my workflow. Please help! i need to access my analytics and reports urgently. being logged out constantly is really frustrating. should be a quick fix, right? i don't want to switch platforms but this is making it hard to stay. Thanks!. I keep getting logged out whenever I try to access my dashboard. This started happening after the last update and it’s affecting my workflow. Please help! i need to access my analytics and reports urgently. being logged out constantly is really frustrating. should be a quick fix, right? i don't want to switch platforms but this is making it hard to stay. Thanks! being logged out constantly is really frustrating. should be a quick fix, right? i don't want to switch platforms but this is making it hard to stay. Thanks!. I keep getting logged out whenever I try to access my dashboard. This started happening after the last update and it’s affecting my workflow. Please help! i need to access my analytics and reports urgently. being logged out constantly is really frustrating. should be a quick fix, right? i don't want to switch platforms but this is making it hard to stay. Thanks!s being logged out constantly is really frustrating. should be a quick fix, right? i don't want to switch platforms but this is making it hard to stay. Thanks!. I keep getting logged out whenever I try to access my dashboard. This started happening after the last update and it’s affecting my workflow. Please help! i need to access my analytics and reports urgently. being logged out constantly is really frustrating. should be a quick fix, right? i don't want to switch platforms but this is making it hard to stay. Thanks! ",
    status: "in-progress",
    priority: "high",
    createdAt: "2026-01-18T10:32:00Z",
  },
  {
    id: "tkt_002",

    name: "Jane Doe",
    avatar: "",
    initials: "JD",
    title: "Payment not reflecting",
    description:
      "I completed a payment successfully but my account is still showing as unpaid. I have checked my email and bank alerts to confirm.",
    status: "in-progress",
    priority: "medium",
    createdAt: "2026-01-17T15:10:00Z",
  },
  {
    id: "tkt_003",

    name: "Michael Stone",
    avatar: "https://i.pravatar.cc/150?img=12",
    initials: "MS",
    title: "Feature request: Dark mode",
    description:
      "It would be really helpful to have a dark mode option, especially for users who work late hours. The current UI is great but can be harsh at night.",
    status: "in-progress",
    priority: "low",
    createdAt: "2026-01-15T08:45:00Z",
  },
  {
    id: "tkt_004",
    name: "Alice Johnson",
    avatar: "https://i.pravatar.cc/150?img=5",
    initials: "AJ",
    title: "Error 404 on profile page",
    description:
      "Whenever I try to visit my profile page, I get a 404 error. I've tried clearing my cache and using different browsers but the issue persists.",
    status: "in-progress",
    priority: "high",
    createdAt: "2026-01-19T09:20:00Z",
  },
];

const minutesAgo = (mins) =>
  new Date(Date.now() - mins * 60 * 1000).toISOString();

const waitingList = [
  {
    id: "l2e_001",
    name: "Samuel Okafor",
    avatar: "https://i.pravatar.cc/150?img=11",
    initials: "SO",
    title: "Course progress not updating",
    description:
      "I completed the JavaScript basics module, but my progress is still showing 60%. I refreshed and logged out but nothing changed.",
    status: "open",
    priority: "high",
    createdAt: minutesAgo(2), // 2 minutes ago
  },
  {
    id: "l2e_002",
    name: "Blessing Adeyemi",
    avatar: "https://i.pravatar.cc/150?img=12",
    initials: "BA",
    title: "Unable to access weekly task",
    description:
      "The Week 3 task shows a locked icon even though I completed the previous lessons.",
    status: "open",
    priority: "medium",
    createdAt: minutesAgo(5), // 5 minutes ago
  },
  {
    id: "l2e_003",
    name: "Ibrahim Musa",
    avatar: "https://i.pravatar.cc/150?img=13",
    initials: "IM",
    title: "Earnings not reflected",
    description:
      "I submitted my assignment and it was approved, but my earnings balance has not increased.",
    status: "open",
    priority: "high",
    createdAt: minutesAgo(12),
  },
  {
    id: "l2e_004",
    name: "Chioma Nwoye",
    avatar: "https://i.pravatar.cc/150?img=14",
    initials: "CN",
    title: "Video lessons keep buffering",
    description:
      "Most video lessons stop playing after a few seconds even with good internet connection.",
    status: "open",
    priority: "low",
    createdAt: minutesAgo(18),
  },
  {
    id: "l2e_005",
    name: "Daniel Akinwale",
    avatar: "https://i.pravatar.cc/150?img=15",
    initials: "DA",
    title: "Incorrect task score",
    description:
      "I followed all instructions for the HTML task, but my score seems lower than expected.",
    status: "open",
    priority: "medium",
    createdAt: minutesAgo(25),
  },
  {
    id: "l2e_006",
    name: "Fatima Bello",
    avatar: "https://i.pravatar.cc/150?img=16",
    initials: "FB",
    title: "Cannot upload assignment",
    description:
      "Whenever I try to upload my assignment file, I get an upload failed message.",
    status: "open",
    priority: "high",
    createdAt: minutesAgo(32),
  },
  {
    id: "l2e_007",
    name: "Emeka Obi",
    avatar: "https://i.pravatar.cc/150?img=17",
    initials: "EO",
    title: "Mentor feedback missing",
    description:
      "My task status says reviewed, but I can’t see any feedback from the mentor.",
    status: "open",
    priority: "low",
    createdAt: minutesAgo(45),
  },
  {
    id: "l2e_008",
    name: "Aisha Sadiq",
    avatar: "https://i.pravatar.cc/150?img=18",
    initials: "AS",
    title: "Wrong course assigned",
    description:
      "I enrolled for the frontend track, but my dashboard shows data analysis courses.",
    status: "open",
    priority: "medium",
    createdAt: minutesAgo(60),
  },
  {
    id: "l2e_009",
    name: "Joseph Onyekachi",
    avatar: "https://i.pravatar.cc/150?img=19",
    initials: "JO",
    title: "Certificate not generated",
    description:
      "I completed all required modules but the certificate download button is disabled.",
    status: "open",
    priority: "high",
    createdAt: minutesAgo(90),
  },
  {
    id: "l2e_010",
    name: "Zainab Lawal",
    avatar: "https://i.pravatar.cc/150?img=20",
    initials: "ZL",
    title: "Login session expires too fast",
    description:
      "I get logged out of my account after a few minutes of inactivity, even while learning.",
    status: "open",
    priority: "low",
    createdAt: minutesAgo(120),
  },
];

const Queue = () => {
  return (
    <div className="h-full lg:h-[97vh] p-3 bg-white lg:max-h-full">
      <h2 className="text-xl md:text-2xl lg:text-4xl font-light">SeatHelp Queue </h2>
      <p className="text-gray-500 max-w-[70%]">
        A live help queue — where help comes in due time
      </p>
      <div className="flex gap-2 items-center max-h-[calc(100vh-140px)] lg:h-[84%] mt-6 flex-col lg:max-h-117.5 overflow-auto md:overflow-hidden md:flex-row scrollbar-hide">
        {/* Left Active/Current Queue */}
        <div className="h-full self-stretch flex-1 relative mb-15 lg:mb-0">
          <div className="h-8.75 ps-3">
            <h3 className="text-xl text-green-700 font-bold">Receiving Help</h3>
          </div>

          {helpDeskTickets?.length > 3 && (
            <div
              className="pointer-events-none absolute top-9.25 left-0 right-0 h-3
                  bg-linear-to-b from-black/5 to-transparent z-10 w-[97%] mx-auto"
            />
          )}
          <div className="px-2 h-100 overflow-y-auto scrollbar-hide mt-3">
            {helpDeskTickets?.map((activeItem) => (
              <CardModal
                title={activeItem?.title}
                desc={activeItem?.description}
                avatar={activeItem?.avatar}
                initials={activeItem?.initials}
                key={activeItem.id}
                status={activeItem.status}
              >
                <ActiveCard data={activeItem} />
              </CardModal>
            ))}
          </div>
          {helpDeskTickets?.length > 3 && (
            <div
              className="pointer-events-none absolute bottom-0 left-0 right-0 h-3 
                  bg-linear-to-t from-black/5 w-[97%] mx-auto to-transparent z-10"
            />
          )}
        </div>
        {/* Right Waiting Queue */}
        <div className="h-full flex-1 self-stretch relative">
          <div className="h-8.75 ps-3">
            <h3 className="text-xl text-red-400 font-bold">Waiting for Help</h3>
          </div>
          {waitingList?.length > 3 && (
            <div
              className="pointer-events-none absolute top-9.25 left-0 right-0 h-3
                  bg-linear-to-b from-black/5 to-transparent z-10 w-[97%] mx-auto"
            />
          )}
          <div className="px-2 h-100 overflow-y-auto scrollbar-hide mt-3">
            {waitingList?.map((activeItem) => (
              <CardModal
                title={activeItem?.title}
                desc={activeItem?.description}
                avatar={activeItem?.avatar}
                initials={activeItem?.initials}
                key={activeItem.id}
                status={activeItem.status}
                data={activeItem}
              >
                <ActiveCard
                  data={activeItem}
                  fillColor="border-s-red-700"
                  clampAt={3}
                />
              </CardModal>
            ))}
          </div>
          {waitingList?.length > 3 && (
            <div
              className="pointer-events-none absolute bottom-0 left-0 right-0 h-3 
                  bg-linear-to-t from-black/5 w-[97%] mx-auto to-transparent z-10"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Queue;
