'use client'

import {useState, useEffect, useMemo} from 'react'
import {useRouter, useSearchParams} from 'next/navigation'
import {shuffleArray} from '@/utils/shuffleArray'

import {Product} from '@/types/product'
import ProductCard from '#/UI/ProductCard'

interface WorksFilterProps {
  works: Product[]
}

interface WorksTypeData {
  [key: string]: {
    title: string
  }
}

const worksTypesData: WorksTypeData = {
  landing: {title: 'Landing'},
  multipage: {title: 'Website'},
}

export default function WorkFilter({works}: WorksFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialFilter = searchParams.get('type') || 'all'

  const [filteredWorks, setFilteredWorks] = useState<Product[]>(works)
  const [filter, setFilter] = useState<string>(initialFilter)

  const types = useMemo(() => {
    const extractedTypes = Array.from(new Set(works.map((work) => work.type)))
    const orderedTypes = Object.keys(worksTypesData).filter((type) => extractedTypes.includes(type))
    const otherTypes = extractedTypes.filter((type) => !worksTypesData[type])

    return [...orderedTypes, ...otherTypes]
  }, [works])

  useEffect(() => {
    setFilteredWorks(filter === 'all' ? works : shuffleArray(works.filter((work) => work.type === filter)))
  }, [filter, works])

  useEffect(() => {
    router.push(`?type=${filter}`, {scroll: false})
  }, [filter, router])

  const handleFilterChange = (type: string) => setFilter(type)

  return (
    <>
      <div className="flex gap-2">
        <button onClick={() => handleFilterChange('all')} className={`btn ${filter === 'all' ? 'text-purple-400' : ''}`}>
          All
        </button>
        {types.map((type) => (
          <button key={type} onClick={() => handleFilterChange(type)} className={`btn ${filter === type ? 'text-purple-400' : ''}`}>
            {worksTypesData[type]?.title || type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-5 sm:gap-4">
        {filteredWorks.map((work) => (
          <ProductCard key={work.id} type="work" product={work} />
        ))}
      </div>
    </>
  )
}
