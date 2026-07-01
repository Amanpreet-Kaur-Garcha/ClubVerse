import { FaArrowRight } from "react-icons/fa6";
import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-8">
      <div className="grid lg:grid-cols-5 gap-10 items-center">
        <div className="lg:col-span-3">
          <span className="inline-block bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full uppercase text-sm font-semibold tracking-widest">
            Campus Life Redefined
          </span>

          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Discover.
            <br />
            Join.
            <br />
            <span className="text-indigo-600">
              Create.
              <br />
              Experience.
            </span>
            <br />
            Campus Clubs.
          </h1>

          <p className="mt-5 text-lg text-gray-600 leading-8 max-w-xl">
            The ultimate hub for campus life. Connect with peers,
            organize high-impact events, and grow your student
            community through clubs and activities.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl shadow-lg transition">
              Explore Clubs
              <FaArrowRight />
            </button>

            <button className="border border-gray-300 hover:border-indigo-600 hover:text-indigo-600 px-8 py-4 rounded-xl transition">
              Join Now
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 flex justify-center">
          <img
            src={heroImg}
            alt="Campus Clubs"
            className="w-full max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}