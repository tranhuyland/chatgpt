import { Property } from '@/types/property'

export default function PropertyCard({
  property,
}: {
  property: Property
}) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border">
      <img
        src={property.image}
        alt={property.title}
        className="w-full aspect-[4/3] object-cover"
      />

      <div className="p-5">
        <div className="font-bold text-amber-500">
          {property.price}
        </div>

        <h3 className="font-extrabold mt-2">
          {property.title}
        </h3>

        <p className="text-sm text-slate-500 mt-2">
          {property.location}
        </p>
      </div>
    </div>
  )
}
