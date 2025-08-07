import { useId, useState, type JSX } from "react";
import { travelogues } from "../../constants";
import { FaEye, FaHeart, FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export const ItineraryUser = (): JSX.Element => {
  const id = useId();
  const [likedItems, setLikedItems] = useState<Record<number, boolean>>({});

  const handleLike = (itemId: number) => {
    setLikedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <div className="min-h-screen  transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {travelogues.map((item, index) => (
              <motion.div
                key={id + index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className={`rounded-xl shadow-lg overflow-hidden h-full flex flex-col
                  bg-white dark:bg-dark-quaternary
                  border border-gray-200 dark:border-dark-secondary
                  transition-all duration-300`}>
                {/* تصویر سفرنامه */}
                <motion.div
                  className="relative h-48 md:h-56 lg:h-64 overflow-hidden flex-shrink-0"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white text-lg md:text-xl font-bold truncate">
                      {item.title}
                    </h3>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) =>
                        i < Math.floor(item.rating) ? (
                          <FaStar key={i} className="text-yellow-400 text-xs" />
                        ) : (
                          <FaRegStar
                            key={i}
                            className="text-yellow-400 text-xs"
                          />
                        )
                      )}
                      <span className="text-white text-xs mr-1">
                        {item.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* محتوای کارت */}
                <div className="p-4 flex-grow flex flex-col">
                  {/* اطلاعات کاربر */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <motion.img
                        src={item.user.avatar}
                        alt={item.user.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
                        loading="lazy"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      />
                      <div className="mr-3">
                        <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          {item.user.name}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {item.date} • {item.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                      <span className="text-xs font-medium">
                        رتبه {item.user.rank}
                      </span>
                    </div>
                  </div>

                  {/* مقصد سفر */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.destination.map((dest, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                        {dest}
                      </motion.span>
                    ))}
                  </div>

                  {/* توضیحات */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 flex-grow">
                    {item.description}
                  </p>

                  {/* آمار و تعاملات */}
                  <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-3">
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <FaEye className="ml-1" />
                      <span>{item.views.toLocaleString("fa-IR")}</span>
                    </div>
                    <motion.button
                      onClick={() => handleLike(item.id)}
                      className="flex items-center text-red-500 text-sm"
                      aria-label="like"
                      whileTap={{ scale: 1.3 }}
                      transition={{ duration: 0.2 }}>
                      {likedItems[item.id] ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}>
                          <FaHeart />
                        </motion.div>
                      ) : (
                        <FaRegHeart />
                      )}
                      <span className="mr-1">
                        {likedItems[item.id] ? item.likes + 1 : item.likes}
                      </span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
