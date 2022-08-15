import { getFeaturedEvents } from "../dummy-data";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <h1>Welcome to Next js Home!</h1>
    </>
  );
}
