import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Scrollbar } from "swiper";
import { GrNext, GrPrevious } from "react-icons/gr";
import Link from "next/link";
import Avatar from "../Avatar";

import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/scollbar";

import { useRef } from "react";
import { SimpleUser } from "@/model/user";

export default function ScrollableBar({ users }: { users: SimpleUser[] }) {
  SwiperCore.use([Navigation]);
  const swiperRef = useRef<SwiperCore>();
  const buttonStyle = `bg-neutral-400 bg-opacity-30 hover:bg-neutral-500  hover:bg-opacity-50  p-3 rounded-full font-semibold text-white
    transition ease-in-out`;

  return (
    <>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        slidesPerView={5}
        spaceBetween={2}
        autoplay={false}
        loop={true}
        navigation={{ nextEl: ".next-slide", prevEl: ".prev-slide" }}
        className="w-100"
      >
        {users.map(({ username, image }) => (
          <SwiperSlide>
            <li key={username}>
              <Link
                href={`/user/${username}`}
                className="flex flex-col items-center justify-center w-20"
              >
                <Avatar image={image} highlight size="large" />
                <p className=" text-sm text-center text-ellipsis overflow-hidden">
                  {username}
                </p>
              </Link>
            </li>
          </SwiperSlide>
        ))}
        <div className="w-full z-50 flex justify-between absolute  top-1/2 -translate-y-1/2">
          <button className={`prev-slide + ${buttonStyle}`}>
            <GrPrevious />
          </button>
          <button className={`next-slide + ${buttonStyle}`}>
            <GrNext />
          </button>
        </div>
      </Swiper>
    </>
  );
}
