
import Home from "@/components/Home";
import Error from "./error";


const getRooms = async () => {
  const res = await fetch(`${process.env.API_URL}/api/rooms`);
  // const res = await fetch(`http://localhost:3001/api/rooms`);
  
  return res.json();
};

export default async function HomePage() {
  const data = await getRooms();
// console.log(data, "data")

  if (data?.message) {   //can use errMessage too
    return <Error error={data} />;
  }

  return <Home data={data} />;
}




// import Home from "@/components/Home";

// export const dynamic = "force-dynamic";

// //read about data fetching, data caching and data revalidating and before that server components, client components.
// const getRooms = async () => {
//   const res = await fetch("http://localhost:3000/api/rooms", {
//     next: {
//       tags: ["Rooms"],
//     },
//   });
//   return res.json();
// };

// export default async function HomePage() {
//   const rooms = await getRooms();
//   console.log("resPerPage => ", rooms.resPerPage);

//   return <Home />;
// }