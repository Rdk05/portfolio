"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <motion.div initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 2, duration: 0.4, ease: "easeIn"}
      }}
      >
        <motion.div initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: "easeInOut"}
      }} className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] rounded-full overflow-hidden">
          <Image
            src="/assets/user_female.png"
            priority
            quality={100}
            width={498}
            height={498}
            alt="Profile Photo"
            className="rounded-full object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
