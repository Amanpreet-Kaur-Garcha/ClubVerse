import ClubCard from "./ClubCard";

export default function FeaturedClubs(){

return(

<section className="max-w-7xl mx-auto py-24">

<div className="flex justify-between items-center">

<div>

<h2 className="text-5xl font-bold">

Featured Clubs

</h2>

<p className="text-gray-500 mt-2">

Handpicked communities for you.

</p>

</div>

<button className="text-indigo-600 font-semibold">

View All →

</button>

</div>

<div className="grid lg:grid-cols-3 gap-8 mt-12">

<ClubCard

large

image="/tech.jpg"

title="Tech Innovators"

description="Leading community for aspiring developers."

/>

<ClubCard

image="/robotics.jpg"

title="Robotics Club"

description="Design autonomous robots from scratch."

/>

</div>

</section>

)

}