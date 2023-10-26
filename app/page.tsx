import Home from "@/components/Home";
import Error from "./error";

export const metadata = {
  title: "HomePage - BookIT",
};

const getRooms = async (searchParams: string) => {
  const urlParams = new URLSearchParams(searchParams);
  const queryString = urlParams.toString();

  const res = await fetch(`${process.env.API_URL}/api/rooms?${queryString}`, {
    cache: "no-cache",
  });
  return res.json();
};

export default async function HomePage({
  searchParams,
}: {
  searchParams: string;
}) {
  const data = await getRooms(searchParams);

  if (data?.message) {
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