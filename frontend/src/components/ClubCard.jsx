export default function ClubCard({

image,
title,
description,
large

}){

return(

<div className={`bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl duration-300 ${large?"lg:col-span-2":""}`}>

<img
src={image}
className="w-full h-72 object-cover"
/>

<div className="p-8">

<span className="uppercase text-xs text-indigo-600 tracking-widest">

Engineering

</span>

<h2 className="text-3xl mt-3 font-semibold">

{title}

</h2>

<p className="text-gray-600 mt-3">

{description}

</p>

<button className="mt-6 text-indigo-600 font-semibold">

Learn More →

</button>

</div>

</div>

)

}