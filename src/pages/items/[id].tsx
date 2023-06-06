import { NextPage } from "next";
import Button from "@/components/Button";
import Heart from "@/assets/common/ico_heart.svg";

const ItemDetail: NextPage = () => {
  const items = new Array(6).fill(null).map((_, i) => i + 1);
  return (
    <div className="px-4 py-10">
      <div className="mb-8">
        <div className="h-96 bg-slate-200" />
        <div className="flex cursor-pointer py-3 border-t border-b items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-slate-100 " />
          <div className="">
            <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
            <p className="text-ss font-medium text-gray-500">
              View profile &rarr;
            </p>
          </div>
        </div>
        <div className="mt-5 ">
          <h1 className="text-3xl font-bold text-gray-900">Galaxy S50</h1>
          <span className="text-3xl block mt-3 text-gray-900">$140</span>
          <p className="text-base my-6 text-gray-700 ">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
          <div className="flex items-center justify-between space-x-2">
            <Button classnames="mt-0 flex-1 py-3">Talk to seller</Button>
            <button className="p-3 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-500 rounded-md">
              <Heart
                className="w-6 h-6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Similar items</h2>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {items.map((_, i) => (
            <div key={i}>
              <div className="h-56 w-full mb-4 bg-slate-100 " />
              <h3 className="text-gray-700 -mb-1">Galaxy S60</h3>
              <span className="text-sm font-medium text-gray-900">$6</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
