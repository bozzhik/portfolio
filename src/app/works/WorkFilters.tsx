'use client'

import {useState, useEffect} from 'react'
import {shuffleArray} from '@/utils/shuffleArray'

import {Product} from '@/types/product'
import ProductCard from '#/UI/ProductCard'

interface WorksFilterProps {
  works: Product[]
}

export default function WorkFilter({works}: WorksFilterProps) {
  const [filteredWorks, setFilteredWorks] = useState<Product[]>(works)
  const [filter, setFilter] = useState<string>('all')

  const types = Array.from(new Set(works.map((work) => work.type)))

  useEffect(() => {
    let newFilteredWorks = works
    if (filter !== 'all') {
      newFilteredWorks = works.filter((work) => work.type === filter)
    }
    setFilteredWorks(shuffleArray(newFilteredWorks))
  }, [filter, works])

  const handleFilterChange = (type: string) => {
    setFilter(type)
  }

  return (
    <>
      <div className="flex gap-2">
        <button onClick={() => handleFilterChange('all')} className={`btn ${filter === 'all' ? 'text-purple-400' : ''}`}>
          All
        </button>

        {types.map((type) => (
          <button key={type} onClick={() => handleFilterChange(type)} className={`btn ${filter === type ? 'text-purple-400' : ''}`}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-5 sm:gap-4">
        {filteredWorks.map((work) => (
          <ProductCard type="work" product={work} key={work.id} />
        ))}
      </div>
    </>
  )
}
