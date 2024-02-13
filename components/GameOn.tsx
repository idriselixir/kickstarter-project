import React from "react";
import Image from "next/image";
import Link from "next/link";


const items = [
  {
    id: 1,
    img: "https://ksr-ugc.imgix.net/assets/041/063/580/3cc47551f4836c6c78a26513475622ba_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1684943815&auto=format&frame=1&q=92&s=8577d71e36bcb943b9ab6dd601dd803b",
    link: "/View project",
    desc: "945 people backed this",
  },
  {
    id: 2,
    img: "https://ksr-ugc.imgix.net/assets/041/284/210/22fd34db70fef87ada0186d2be174ca8_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1686683397&auto=format&frame=1&q=92&s=df34f51cf14b280622a3770aef19a028",
    link: "/View project",
    desc: "24,150 people backed this",
  },
  {
    id: 3,
    img: "https://ksr-ugc.imgix.net/assets/041/284/202/26bffe53210ecf64d210ecaad4ef6b57_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1686683346&auto=format&frame=1&q=92&s=1dfbf15b935d7d6e66c2ccee461fabb5",
    link: "/ Official site|View project",
    desc: "372 people backed this",
  },
  {
    id: 4,
    img: "https://ksr-ugc.imgix.net/assets/041/284/250/2371350e33520b2913b7820ebf8fd50d_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1686683522&auto=format&frame=1&q=92&s=a6d7f3536e79459028fcca73f09d0e4f",
    link: "/View project",
    desc: "3,030 people backed this",
  },
  {
    id: 5,
    img: "https://ksr-ugc.imgix.net/assets/041/284/216/7fa2e8d1748edbdab3e1e77a866d1e8b_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1686683416&auto=format&frame=1&q=92&s=37739319e1db28ca39fdeffceb136847",
    link: "/View project",
    desc: "15,623 people backed this",
  },
  {
    id: 6,
    img: "https://ksr-ugc.imgix.net/assets/041/284/020/00690ccb45d0d8be8d11ab82efd8187d_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1686682404&auto=format&frame=1&q=92&s=13bfe78be0afff14a66c1d5764b5e2d2",
    link: "/View project",
    desc: "3,780 people backed this",
  },
  {
    id: 7,
    img: "https://ksr-ugc.imgix.net/assets/041/284/811/d0f938e002e313b6fec237d6ce7a25e0_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1686686068&auto=format&frame=1&q=92&s=78e7ac3862ed2fdaf7d91461e8bde3d6",
    link: "/View project",
    desc: "3,652 people backed this",
  },
  {
    id: 8,
    img: "https://ksr-ugc.imgix.net/assets/041/284/225/0af7aeb275df9f8429932b44cc850ad7_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1686683438&auto=format&frame=1&q=92&s=fc46ba18d79f493920d40731c262f36b",
    link: "/View project",
    desc: "1,669 people backed this",
  },
  {
    id: 9,
    img: "https://ksr-ugc.imgix.net/assets/041/284/234/641f306775cd486bcda3cbeab2eb94c1_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1686683467&auto=format&frame=1&q=92&s=965ef09f09ef27005c62e6c412f2e161",
    link: "/View project",
    desc: "1,402 people backed this",
  },
  {
    id: 10,
    img: "https://ksr-ugc.imgix.net/assets/041/284/062/a8e95614f7a6998c6308227ff200fece_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1686682657&auto=format&frame=1&q=92&s=04a4441de45819c87f8785b24f43e97e",
    link: "/View project",
    desc: "1,599 people backed this",
  },
  {
    id: 11,
    img: "https://ksr-ugc.imgix.net/assets/041/284/238/789936efe6211b234567067be21f41a7_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1686683485&auto=format&frame=1&q=92&s=a05d21715189eb3b8e32aacf3280ecff",
    link: "/View project",
    desc: "1,599 people backed this",
  },
  {
    id: 12,
    img: "https://ksr-ugc.imgix.net/assets/041/284/204/9dce2430e7ee9b9080dc4500c514b2fc_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1686683371&auto=format&frame=1&q=92&s=cf1a34e86f3334581d34cc9e770ce23d",
    link: "/View project",
    desc: "1,599 people backed this",
  },
  {
    id: 13,
    img: "https://ksr-ugc.imgix.net/assets/041/284/244/61e2993ba2b060280790730e38a9091e_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1686683503&auto=format&frame=1&q=92&s=979c3f611536482235d157695bd3527a",
    link: "/View project",
    desc: "1,599 people backed this",
  },
  {
    id: 14,
    img: "https://ksr-ugc.imgix.net/assets/041/284/272/c6d4965edb28337e4053d87cbf5de06a_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1686683590&auto=format&frame=1&q=92&s=2c069ffa8427ceafbf055a0f437547f2",
    link: "/View project",
    desc: "1,599 people backed this",
  },
  {
    id: 15,
    img: "https://ksr-ugc.imgix.net/assets/041/284/125/2f02ab3ed2bc415f80628bc1672baf2a_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1686683025&auto=format&frame=1&q=92&s=f638149e1036323e6baa7b67b6f013d2",
    link: "/View project",
    desc: "1,599 people backed this",
  },
  {
    id: 14,
    img: "https://ksr-ugc.imgix.net/assets/019/826/908/e4853141c1b784e9379ba92135563d30_original.png?ixlib=rb-4.1.0&crop=faces&w=1552&h=873&fit=crop&v=1515625869&auto=format&frame=1&q=92&s=8c169475e09a5967eb98f0df96d13be2",
    link: "/View project",
    desc: "1,599 people backed this",
  },
];


const GameOn = () => {
  return (
    <div className="flex items-center flex-col justify-center mt-[100px] ">
      <div className=" flex justify-center items-center pt-8 font-normal text-[30px] text-center mt-11 ">
        <h1>From platformers to adventure to RPGs. Game on.</h1>
      </div>
      <div
        id="slider"
        className=" flex  justify-center flex-wrap   pt-10 w-[90%] h-auto gap-10  "
      >
        {items.map((item) => (
          <div key={item.id} className="">
            <div className="flex  flex-wrap gap-6 w-40 h-20 md:w-50 md:h-20 items-center  bg-green-500 lg:w-[200px] lg:h-[80px] xl:w-[300px] xl:h-[150px] transition-transform duration-300 transform hover:scale-110 border-[10x] border-slate-600 group">
              <Image
                src={item.img}
                alt="Play on Stream"
                fill
                className="flex flex-wrap  shadow-slate-700"
              />
              <div className="opacity-0 group-hover:opacity-100 duration-300 hover:animate-[wiggle_3s_ease-in-out_infinite] absolute inset-x-0 bottom-0   top-0 flex justify-center text-center items-center hover:bg-opacity-90 bg-green-900 text-slate-100 k font-normal">
                Play On Stream
              </div>
            </div>
            <div>
              <Link
                href={item.link}
                className="pt-10 flex justify-center items-center text-blue-600"
              >
                <button>View Project</button>
              </Link>
            </div>
            <div className="flex justify-center pt-3 items-center">
              <p className="font-normal  text-black">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center  text-center pt-6">
        <button className="rounded bg-white p-2 items-center w-auto   border-slate-500 border-[2px]  justify-center flex md:w-[200px] text-center tsm:w-auto h-[30px]">
          View More
        </button>
      </div>
    </div>
  );
};

export default GameOn;
