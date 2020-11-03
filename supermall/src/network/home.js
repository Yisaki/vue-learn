import request from '@/network/request'

export function getHomeMultidata() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getHomeMultidata...")

      const res = [
        {
          id: 0,
          link: "asd",
          image: "h",
          title: "帮助中心"
        },
        {
          id: 1,
          link: "asd",
          image: "l",
          title: "查看额度"
        },
        {
          id: 2,
          link: "asd",
          image: "refund",
          title: "还款"
        },
        {
          id: 3,
          link: "asd",
          image: "r",
          title: "红包"
        }
      ]

      resolve(res);
    }, 1000)
  })

  return promise;
}

/* request({
    baseURL:"https://api.apiopen.top",
    url:"/getJoke?page=1&count=2&type=video",
    method:"GET"
  }).then(res=>{
    console.log(res)
  }).catch(err=>{
    console.log(err)
  }) */