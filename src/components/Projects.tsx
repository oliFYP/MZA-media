import IPhoneReelsCarousel from "./IPhoneReelsCarousel";

export function Projects() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white ml-5">Building </span>
            <span className="text-[rgb(100,189,249)]">Authentic </span>
            <span className="text-white">Digital Presence</span>
          </h3>
          <p className="text-lg text-gray-400 leading-relaxed mb-6 ml-5">
            We partnered with a rising creator to transform their social
            presence from scattered content to a cohesive, growth-focused
            digital strategy. Through consistent posting, strategic content
            planning, and community engagement, we helped increase their
            follower base by 300% in just 6 months.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed mb-8 ml-5">
            Our complete digital management approach handled everything from
            scripting and filming to editing and strategic posting, allowing the
            creator to focus on their craft while we drove measurable growth.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="scale-90 sm:scale-100">
            <IPhoneReelsCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
