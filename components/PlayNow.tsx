import Link from "next/link";
import Image from "next/image"
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination , Navigation} from 'swiper/modules';
const items = [
    {
      id: 1,
      img: "https://ksr-ugc.imgix.net/assets/013/109/703/403ae5619800879c701794c22bc958d1_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1468953360&auto=format&frame=1&q=92&s=d565fb7d2eda06b8b5da3a1b1bfc19cb",
      link: "/View project",
      desc: "945 people backed this",
    },
    {
      id: 2,
      img: "https://ksr-ugc.imgix.net/assets/011/279/786/b30efdb1967dd5cafe7ae76778176f99_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1463676812&auto=format&frame=1&q=92&s=57be7fc37dc1bcfe333677b74e3d2a35",
      link: "/View project",
      desc: "24,150 people backed this",
    },
    {
      id: 3,
      img: "https://ksr-ugc.imgix.net/assets/015/977/413/b77cf15ce8407901538fc676a0ada61a_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1490286508&auto=format&frame=1&q=92&s=600939fb0ea92ac8df6a8acfe2490f6e",
      link: "/ Official site|View project",
      desc: "372 people backed this",
    },
    {
      id: 4,
      img: "https://ksr-ugc.imgix.net/assets/016/035/465/ee3a8f98062445039c17eeeb8136e2b5_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1490711246&auto=format&frame=1&q=92&s=d8cab5cc966c10fa1a89cf73de385128",
      link: "/View project",
      desc: "3,030 people backed this",
    },
    {
      id: 5,
      img: "https://ksr-ugc.imgix.net/assets/016/068/644/e30daff02ca5cfb7ccc6c6ce9ee1d7b0_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1490895281&auto=format&frame=1&q=92&s=3ad81e1eb0d81054f18b07f07577f4e1",
      link: "/View project",
      desc: "15,623 people backed this",
    },
    {
      id: 6,
      img: "https://ksr-ugc.imgix.net/assets/016/617/183/22928ef959ac15e97cf3cad559ac27a8_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1494440321&auto=format&frame=1&q=92&s=c36e328713c00b10c3ad328098a45980",
      link: "/View project",
      desc: "3,780 people backed this",
    },
    {
      id: 7,
      img: "https://ksr-ugc.imgix.net/assets/016/820/637/40143f839bfbde00084704526b28def9_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1495728626&auto=format&frame=1&q=92&s=b52849ba80f557a04e99ef832597ec8e",
      link: "/View project",
      desc: "3,652 people backed this",
    },
    {
      id: 8,
      img: "https://ksr-ugc.imgix.net/assets/017/573/188/d50c9e884d2b6de6d154e8159d7fbda2_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1500490334&auto=format&frame=1&q=92&s=402bc87ef0353fccc143ad29e7524d36",
      link: "/View project",
      desc: "1,669 people backed this",
    },
    {
      id: 9,
      img: "https://ksr-ugc.imgix.net/assets/017/872/423/fbfe39370d46ffb1e4a9502ef1b9deaa_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1502393420&auto=format&frame=1&q=92&s=92e682efa8837ef6da265f75231a7897",
      link: "/View project",
      desc: "1,402 people backed this",
    },
    {
      id: 10,
      img: "https://ksr-ugc.imgix.net/assets/018/441/524/34d18a7b36c77866bb1641ab83b1a3fd_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1506107240&auto=format&frame=1&q=92&s=3e1b8ab757a2ed160cc9cac43417cb6b",
      link: "/View project",
      desc: "1,599 people backed this",
    },
  ];

    
  
  const PlayNow = () => {
    const slideleft = () => {
      var slider = document.getElementById("slider");
      if (slider) {
        slider.scrollLeft = slider.scrollLeft - 500;
      }
    };
    const slideRight = () => {
      var slider = document.getElementById("slider");
      if (slider) {
        slider.scrollLeft = slider.scrollLeft + 500;
      }
    };
    return (
      <div className="flex flex-col items-center text-center justify-center pt-[50px] gap-10">
        <div className="flex flex-col text-center items-center">
          <h1 className="font-mono text-[90px] font- font-medium text-black ">
            Play now
          </h1>
          <p className="text-center text-[20px] font-normal  ">
            Over 200 games made with Kickstarter, now available on Steam
          </p>
        </div>
        <div className="flex justify-center items-center gap-4 relative w-[80%]">
         
          <Swiper
          spaceBetween={30}
          slidesPerView={2}
          pagination={
            {
              "clickable": true
            }}
            modules={[Pagination , Navigation]}
            navigation={true}
            className="mySwiper"
          >
           
            {items.map((item) => (
               <SwiperSlide key={item.id}
               className="flex  flex-col justify-center flex-wrap m-0 items-center pb-[90px]">
              <div key={item.id}>
                <div className="flex  border-[6px] border-slate-400 gap-6 w-40 h-40 md:w-60 md:h-60  bg-green-500 lg:w-[300px] lg:h-[250px] xl:w-[400px] xl:h-[350px] transition-transform duration-300 transform hover:scale-110 hover:border-hidden group">
                  <Image src={item.img} alt="Play on Stream" fill className="" />
                  <div className="opacity-0 group-hover:opacity-100 duration-300 hover:animate-[wiggle_3s_ease-in-out_infinite] absolute inset-x-0 bottom-0   top-0 flex justify-center text-center items-center hover:bg-opacity-90 bg-green-900 text-slate-100 k font-normal">
                    Play On Stream
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Link href={item.link}>
                    <button>View Project</button>
                  </Link>
                </div>
                <div className="flex items-center justify-center">
                  <p className="font-norml pt-1">{item.desc}</p>
                </div>
               
              </div>
              </SwiperSlide>
            ))}
           
          </Swiper>
        </div>
    
        <div className="flex justify-center gap-3 items-center ">
          <Image src="/twitter.png" alt="" width={30} height={30} />
          <Image src="/facebook.png" alt="" width={30} height={30} />
        </div>
       
      </div>
    );
  };
  
  export default PlayNow;

// const PlayNow = () => {
//   return (
//     // main div
//    <div>
    
//     <div>
//         <h1 className='font-normal text-[80px] mb-[50px] flex justify-center px-10 py-10  '>Play now</h1>
//         <p className='text-[22px] flex justify-center pb-15 mb-5 relative top-[-80px] '>Over 200 games made with Kickstarter, now available on Steam</p>
        
//     </div>
    
//     </div>
//   )
   
// }
  
// ;

// export default PlayNow