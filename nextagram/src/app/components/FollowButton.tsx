"use client";

import { useEffect, useState } from "react";
import { followUser, isFollow } from "../../../sanity/sanity-utils";

type Props = {
  mailOfUser: string;
  mailToFollow: string;
};
export default function FollowButton({ mailOfUser, mailToFollow }: Props) {
  const [isFollowState, setIsFollowState] = useState<boolean>(false);
  // console.log("user page", mailOfUser, mailToFollow);
  useEffect(() => {
    const fetchdata = async () => {
      const result = await isFollow(mailOfUser, mailToFollow);
      setIsFollowState(result);
    };
    fetchdata();
  }, []);

  const handleClick = async () => {
    followUser(mailOfUser, mailToFollow);
    const result = await isFollow(mailOfUser, mailToFollow);
    console.log("팔로우를 하고있나? =>", result);
    setIsFollowState(result);
    console.log(isFollowState);
    // setIsFollowState((prev) => !prev);
  };

  if (isFollowState == true)
    return <button onClick={() => handleClick()}>Unfollow</button>;
  else return <button onClick={() => handleClick()}>Follow</button>;
}
