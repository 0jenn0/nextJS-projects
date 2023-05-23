"use client";

import { useEffect, useState } from "react";
import {
  followUser,
  unfollowUser,
  isFollow,
} from "../../../sanity/sanity-utils";

type Props = {
  mailOfUser: string;
  mailToFollow: string;
};
export default function FollowButton({ mailOfUser, mailToFollow }: Props) {
  const [isFollowState, setIsFollowState] = useState<boolean>(false);
  const [state, setState] = useState(1);
  // console.log("user page", mailOfUser, mailToFollow);
  // useEffect(() => {
  //   const fetchdata = async () => {
  //     const result = await isFollow(mailOfUser, mailToFollow);
  //     setIsFollowState(result);
  //     console.log("useEffect", result);
  //   };
  //   fetchdata();
  // }, [setIsFollowState]);

  const handleFollow = async () => {
    // console.log("-------handleUnfollow 시작-----");
    followUser(mailOfUser, mailToFollow);
    const result = await isFollow(mailOfUser, mailToFollow);
    // console.log("팔로우를 하고있나? =>", result);
    // setIsFollowState((prev) => result);
    setIsFollowState((prev) => !prev);
    // console.log("-------handleUnfollow 시작-----");

    // console.log(isFollowState);
    // setIsFollowState((prev) => !prev);
  };

  const handleUnfollow = async () => {
    // console.log("-------handle Unfollow 시작-----");

    unfollowUser(mailOfUser, mailToFollow);
    const result = await isFollow(mailOfUser, mailToFollow);
    setIsFollowState((prev) => !prev);
    // console.log("-------handle Unfollow 끝-----");
  };

  const toggleState = () => {
    setState((prevState) => (prevState === 1 ? 2 : 1));
  };

  return (
    <>
      <span>{`${isFollowState}`}</span>
      <button
        onClick={
          isFollowState === true ? () => handleUnfollow() : () => handleFollow()
        }
      >
        {isFollowState === true ? "Unfollow" : "follow"}
      </button>
      {/* <button onClick={toggleState}>{state === 1 ? "상태 1" : "상태 2"}</button> */}
      {/* <button onClick={() => setIsFollowState((prev) => !prev)}>
        {isFollowState == false ? "follow" : "unfollow"}
      </button> */}
    </>
  );
}
