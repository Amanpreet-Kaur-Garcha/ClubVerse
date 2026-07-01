const stats=[
{
number:"50+",
label:"Active Clubs"
},
{
number:"5000+",
label:"Students"
},
{
number:"200+",
label:"Annual Events"
}
]

export default function Stats(){

return(

<section className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

{

stats.map((item)=>(

<div
key={item.label}
className="bg-white rounded-2xl p-10 text-center shadow-sm"
>

<h2 className="text-5xl font-bold text-indigo-600">

{item.number}

</h2>

<p className="tracking-[5px] uppercase mt-4">

{item.label}

</p>

</div>

))

}

</section>

)

}