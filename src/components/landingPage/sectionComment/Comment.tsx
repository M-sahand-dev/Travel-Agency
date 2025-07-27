import { type JSX, useId, useState } from "react";
import { commentUser } from "../../../constants";
import type { CommentUser, UserInteraction } from "../../../types";
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";

export const Comment = (): JSX.Element => {
  const [interactions, setInteractions] = useState<
    Record<number, UserInteraction>
  >(() => {
    const saved = localStorage.getItem("userInteractions");
    return saved ? JSON.parse(saved) : {};
  });
  const [showAllComments, setShowAllComments] = useState(false);
  const maxVisibleComments = 3;
  const id = useId();

  const handleLike = (userId: number) => {
    setInteractions((prev) => {
      const newInteractions = {
        ...prev,
        [userId]: {
          liked: !prev[userId]?.liked,
          disliked: prev[userId]?.liked
            ? false
            : prev[userId]?.disliked || false,
        },
      };
      localStorage.setItem("userInteractions", JSON.stringify(newInteractions));
      return newInteractions;
    });
  };
  const handleDislike = (userId: number) => {
    setInteractions((prev) => {
      const newInteractions = {
        ...prev,
        [userId]: {
          disliked: !prev[userId]?.disliked,
          liked: prev[userId]?.disliked ? false : prev[userId]?.liked || false,
        },
      };
      localStorage.setItem("userInteractions", JSON.stringify(newInteractions));
      return newInteractions;
    });
  };

  return (
    <div className="mt-14 ">
      <div className="container mx-auto my-14">
        <h1 className="font-bold text-lg max-lg:text-md max-sm:text-base font-Rokh">
          نظرات 💭
          <div className="absolute h-[3px] w-[45px] bg-blue-primary"></div>
        </h1>
        <div className="flex flex-col gap-4 mt-4">
          <div className=" flex flex-col gap-4">
            {commentUser
              .slice(
                0,
                showAllComments ? commentUser.length : maxVisibleComments
              )
              .map((user: CommentUser) => (
                <div
                  key={id + user.id}
                  className=" dark:bg-dark-primary bg-white  border border-dark-secondary dark:border-white-quinary  rounded-4xl flex flex-col gap-4 p-4">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user.image}
                      alt={user.userName}
                    />
                    <div className="">
                      <div className=" text-blue-primary font-bold text-5xs">
                        {user.name}
                      </div>
                      <div className=" font-normal text-gray-quinary-4 dark:text-gray-quinary-5">
                        {user.userName}
                      </div>
                    </div>
                  </div>
                  <p className="">{user.description}</p>
                  <div className="flex items-center justify-between">
                    <span className=" font-normal text-gray-quinary-4 dark:text-gray-quinary-5">
                      {user.date}
                    </span>
                    <div className="flex gap-2 items-center">
                      <button onClick={() => handleLike(user.id)}>
                        {interactions[user.id]?.liked ? (
                          <BiSolidLike className="text-blue-primary" />
                        ) : (
                          <BiLike className="text-gray-quinary-4 dark:text-gray-quinary-5" />
                        )}
                      </button>
                      <button onClick={() => handleDislike(user.id)}>
                        {interactions[user.id]?.disliked ? (
                          <BiSolidDislike className="text-blue-primary" />
                        ) : (
                          <BiDislike className="text-gray-quinary-4 dark:text-gray-quinary-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {commentUser.length > maxVisibleComments && (
            <button
              type="button"
              onClick={() => setShowAllComments(!showAllComments)}
              className="grid place-items-center w-full p-4 bg-blue-primary rounded-6xl font-bold text-2xl">
              {showAllComments ? "نمایش کمتر" : `دیدن همه `}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
