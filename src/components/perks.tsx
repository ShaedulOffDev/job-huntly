import { perks } from "@/mock-data"
import Image from "next/image"

const Perks = () => {
  return (
    <div className="container">
      <div className="mb-7">
        <h2 className="text-3xl text-text font-semibold">Perks & Benefits</h2>
        <p className="text-gray-500 mt-1">This job comes with several perks and benefits</p>
      </div>
      <div className="grid grid-cols-2 max-[425px]:grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8">
        {perks.map(p => (
          <div key={p.id}>
            <Image src={p.image} alt={p.title}/>
            <h2 className="text-text font-semibold my-3 text-xl">{p.title}</h2>
            <p className="text-gray-500">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Perks