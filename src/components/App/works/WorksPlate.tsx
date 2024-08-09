'use client'

import {useState, useEffect, useMemo} from 'react'
import {useRouter, useSearchParams} from 'next/navigation'

import {isMobile} from '@bozzhik/is-mobile'
import {shuffleArray} from '@/utils/shuffleArray'

import {X} from 'lucide-react'
import {Product} from '@/types/product'
import ProductCard from '#/UI/ProductCard'
import Button from '#/UI/Button'

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
  const initialFilter = searchParams.get('type') || ''

  const [filteredWorks, setFilteredWorks] = useState<Product[]>(works)
  const [filter, setFilter] = useState<string>(initialFilter)

  const types = useMemo(() => {
    const typesSet = new Set(works.map((work) => work.type))
    const orderedTypes = Object.keys(worksTypesData).filter((type) => typesSet.has(type))
    const otherTypes = Array.from(typesSet).filter((type) => !worksTypesData[type])
    return [...orderedTypes, ...otherTypes]
  }, [works])

  useEffect(() => {
    setFilteredWorks(filter === '' ? works : shuffleArray(works.filter((work) => work.type === filter)))
  }, [filter, works])

  useEffect(() => {
    if (filter) {
      router.push(`?type=${filter}`, {scroll: false})
    } else {
      router.push('', {scroll: false})
    }
  }, [filter, router])

  const handleFilterChange = (type: string) => {
    setFilter((prevFilter) => (prevFilter === type ? '' : type))
  }

  const handleClearFilters = () => {
    setFilter('')
  }

  return (
    <section data-section="filters-works" className="space-y-4">
      <div className="flex items-center justify-between sm:text-sm">
        <div className="flex gap-2.5 sm:gap-1.5">
          {types.map((type) => (
            <button key={type} onClick={() => handleFilterChange(type)} className={`hover:text-neutral-400 duration-200 ${filter === type ? 'text-neutral-400' : ''}`}>
              <Button className="px-8 text-base sm:px-6 xl:text-sm sm:text-sm" link="#" text={worksTypesData[type]?.title || type.charAt(0).toUpperCase() + type.slice(1)} />
            </button>
          ))}
        </div>

        {filter && (
          <button onClick={handleClearFilters} className="text-neutral-400">
            {isMobile ? 'Clear Filters' : <X />}
          </button>
        )}
      </div>

      <div className="flex flex-col gap-5 sm:gap-4">
        {filteredWorks.map((work) => (
          <ProductCard key={work.id} type="work" product={work} />
        ))}
      </div>
    </section>
  )
}
