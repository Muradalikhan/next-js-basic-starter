import EventBanner from "../component/events/event-banner";
import { getFeaturedEvents } from "../dummy-data";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1 className="center">Welcome to NextEvents!</h1>
      <EventBanner />
    </div>
  );
}
