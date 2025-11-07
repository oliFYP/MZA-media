import IPhoneReelsCarousel from "./IPhoneReelsCarousel";

export function Projects() {
  return (
    <section className="py-24 bg-black text-white overflow-x-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center text-center md:text-left px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        {/* TEXT BLOCK */}
        <div className="mx-auto md:mx-0 max-w-xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 break-words">
            <span className="text-white">Building </span>
            <span className="text-[rgb(100,189,249)]">Authentic </span>
            <span className="text-white">Digital Presence</span>
          </h3>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            We partnered with a rising creator to transform their social
            presence from scattered content to a cohesive, growth-focused
            digital strategy. Through consistent posting, strategic content
            planning, and community engagement, we helped increase their
            follower base by 300% in just 6 months.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            Our complete digital management approach handled everything from
            scripting and filming to editing and strategic posting, allowing the
            creator to focus on their craft while we drove measurable growth.
          </p>
        </div>

        {/* CAROUSEL BLOCK */}
        <div className="flex justify-center w-full overflow-hidden">
          <div className="scale-95 sm:scale-100 max-w-full">
            <IPhoneReelsCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
