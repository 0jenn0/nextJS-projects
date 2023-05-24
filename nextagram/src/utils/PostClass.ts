// post ㄹㅇ중심? 얘를 중심으로두고
// 다른 서브 post class 만들어서 거기에 D.I ?

export class PostClass {
  constructor(public _id: string) {}

  // getPostData(_id:string) : Post

  // handleLiked (prev =>!prev), patch.inc/dec

  // getTimeAgo : time ago js

  // sendComment
}

// 로그인한 사용자
export class SessionUserClass {
  constructor(public email: string) {}

  // getUserData(action,)
  // switch action / type acton = '_id' | 'emailId' | 'email'
  // getProfileImg
  //
}

// 가입되있는 다른 사용자
export class UserClass extends SessionUserClass {
  /**
   * private constuctor였나?
   *  constructor(private data:) -> data는 client component에서 useSession해서 받아서 넘겨주기
   */
}
