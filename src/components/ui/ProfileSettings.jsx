import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UpdateProfileForm from "@/components/ui/UpdateProfileForm";
import { format } from "date-fns";
import { Checkbox } from "@/components/ui/checkbox";

const userData = {
  fullName: "Asadu Stephen O.",
  img: "",
  displayName: "_Port:3000",
  email: "asa@example.com",
  joined: new Date("1965-08-08"),
  resolved: 550,
  isTopContributor: true,
};

const ProfileSettings = () => {
  return (
    <div className="h-full md:pt-5 px-5 pt-1 bg-white">
      <h2 className="text-4xl font-light mt-4 mb-6">Profile Settings</h2>
      <div className="h-[calc(100%-90px)] overflow-auto scrollbar-hide flex md:flex-row flex-col gap-3">
        {/* Left DP  */}
        <div className="rounded-lg mb-10 sm:mb-0 md:w-80 md:border-0 border border-gray-100 h-full flex w-full flex-col sm:flex-row md:flex-col gap-2 p-2">
          <div className="h-60 w-full sm:w-80 md:w-full rounded-lg">
            {userData?.img && userData?.img !== "" ? (
              <>
                <img src={userData?.img ?? ""} />i ran
              </>
            ) : (
              <Icon
                className="text-gray-400 border-gray-200 rounded-lg border w-full h-full"
                icon="ph:user-thin"
              />
            )}
          </div>
          <div className="h-fit md:border md:w-full sm:w-[calc(100%-320px)] border-gray-100 text-gray-500 italic p-3 flex flex-col gap-1 rounded-lg">
            <span className="flex items-center gap-2">
              <Icon icon="system-uicons:mail" width={20} /> {userData?.email}
            </span>
            <span className="flex items-center gap-2">
              <Icon icon="stash:data-date-light" width={20} />
              Joined since {format(userData?.joined, "dd MMMM, yyyy")}
            </span>
            <span className="flex items-center gap-2">
              <Icon icon="ic:outline-auto-fix-high" width={20} /> Resolved{" "}
              {userData?.resolved} cases
            </span>
            {userData?.isTopContributor && (
              <span className="flex items-center gap-2">
                <Icon icon="ph:crown-thin" width={20} />
                You're a top contributor
              </span>
            )}
          </div>
        </div>
        {/* Right Side  */}
        <div className="flex-1 p-2 flex flex-col gap-2">
          <div className="h-[85%] flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">Bio</h2>
            <div className="px-4 py-4 min-h-30 bg-gray-50 rounded-lg flex justify-center flex-col gap-2">
              <h3 className="text-xl font-light">
                <span className="font-light">Full Name :</span>{" "}
                {userData?.fullName}
              </h3>
              <h3 className="text-xl font-light">
                <span className="font-light">Display Name :</span>{" "}
                {userData?.displayName}
              </h3>
            </div>
            <h2 className="text-2xl font-semibold mt-10 md:mt-3 ">
              Preferences
            </h2>
            <div className="px-4 min-h-30 py-4 bg-gray-50 rounded-lg justify-center flex flex-col gap-2">
              <div className="flex gap-2 flex-col">
                <p className="font-light text-xl flex items-center gap-2">
                  show fullname only:{" "}
                  <Checkbox
                    checked={true}
                    disabled
                    className={"cursor-default!"}
                  />
                </p>
                <p className="font-light text-xl flex items-center gap-2">
                  show display name only:{" "}
                  <Checkbox
                    checked={false}
                    disabled
                    className={"cursor-default!"}
                  />
                </p>
                <p className="font-light text-xl flex items-center gap-2">
                  appear anonymous to users:{" "}
                  <Checkbox
                    checked={false}
                    disabled
                    className={"cursor-default!"}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 items-end justify-end flex pe-2 my-6 md:my-0">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className={
                    "bg-green-600 text-white my-auto cursor-pointer hover:bg-green-700"
                  }
                >
                  Update Profile
                </Button>
              </DialogTrigger>
              <DialogOverlay className="backdrop-blur-sm bg-black/40" />
              <DialogContent
                showCloseButton={false}
                className="bg-white w-fit sm:max-w-none"
                aria-describedby={undefined}
              >
                <DialogTitle className={"flex items-center gap-3"}>
                  Update Profile
                </DialogTitle>
                <UpdateProfileForm userData={userData} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
