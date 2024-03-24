import InstaFeed from "@/components/rrss/InstaFeed";
export default function FeedSection() {
  return (
    <section
      className="min-h-screen flex flex-col items-center py-20 px-5"
      id="staff"
      key="staff"
    >
      <InstaFeed />
    </section>
  );
}