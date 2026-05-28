import { getProperties } from '@/services/properties'
import PropertyCard from './PropertyCard'

export default async function PropertyGrid() {
  const properties = await getProperties()

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  )
}
