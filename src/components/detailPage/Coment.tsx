import { useId, useState, type JSX } from "react";
import { Outlet, useParams } from "react-router-dom";
import { tourProductData } from "../../constants";
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import type { UserInteraction } from "../../types";

export const Coment = (): JSX.Element => {
  const { id } = useParams();
  const currentTour = tourProductData.find((tour) => tour.id === Number(id));
  console.log(currentTour?.comment.length);

  const [interactions, setInteractions] = useState<
    Record<number, UserInteraction>
  >(() => {
    const saved = localStorage.getItem("userInteractions");
    return saved ? JSON.parse(saved) : {};
  });
  // const [showAllComments, setShowAllComments] = useState(false);
  // const maxVisibleComments = 3;
  const idTure = useId();

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
    <div>
      <div className="">
        <h5>نظرات</h5>
        <div className="">
          {currentTour?.comment.map((user) => (
            <div
              key={idTure + user.id}
              className=" dark:bg-dark-primary bg-white  border border-dark-secondary dark:border-white-quinary  rounded-4xl flex flex-col gap-4 p-4">
              <div className="flex items-center gap-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src={user.image}
                  alt={user.userName}
                />
                <div className="">
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
        {/* {currentTour?.comment.length > maxVisibleComments && (
          <button
            type="button"
            onClick={() => setShowAllComments(!showAllComments)}
            className="grid place-items-center w-full p-4 bg-blue-primary rounded-6xl font-bold text-2xl">
            {showAllComments ? "نمایش کمتر" : `دیدن همه `}
          </button>
        )} */}
      </div>
      <Outlet />
    </div>
  );
};
