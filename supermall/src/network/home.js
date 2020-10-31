import request from '@/network/request'

export function getHomeMultidata(){
    const promise = new Promise ( (resolve, reject) => {
        setTimeout(()=>{
            console.log("getHomeMultidata...")
            
            const res=[{
                link:"asd",
                image:""
            }]

        },1000)
    } )
    
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