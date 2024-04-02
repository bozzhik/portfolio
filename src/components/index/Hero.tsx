'use client'

import {useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {fetchGithubData} from '@/lib/githubApi'

import AvatarImage from '../../assets/images/index/avatar.jpg'
import GithubIcon from '../../assets/images/icons/github.svg'
import GainIcon from '../../assets/images/icons/gain.svg'

const heroContent = {
  title: 'Maxim Bozhik',
  caption: 'I write code and make design.',
  list: {
    1: {
      text: 'Repositories',
      link: 'https://github.com/bozzhik',
      icon: GithubIcon,
    },
    2: {
      text: 'Pull Requests in 2024',
      link: 'https://github.com/bozzhik',
      icon: GithubIcon,
    },
    3: {
      text: 'Commits in 2024',
      link: 'https://github.com/bozzhik',
      icon: GainIcon,
    },
  },
  description: "Hi, I'm Maxim Bozhik, a computer science student who loves coding and design. What started as a hobby turned into my profession. Currently, I'm focused on creating exciting freelance projects.",
}

export default function Hero() {
  const [githubData, setGithubData] = useState({
    repositories: [],
    totalPullRequests: 0,
    totalCommits: 0,
  })

  const [displayedValues, setDisplayedValues] = useState({
    repositories: 0,
    totalPullRequests: 0,
    totalCommits: 0,
  })

  const [targetValues, setTargetValues] = useState({
    repositories: null,
    totalPullRequests: null,
    totalCommits: null,
  })

  const animateValue = (key: keyof typeof targetValues) => {
    let start = 0
    const end = targetValues[key] ?? 0
    const duration = 1000
    const step = Math.ceil(duration / end)

    const timer = setInterval(() => {
      start += 1
      setDisplayedValues((prevValues) => ({
        ...prevValues,
        [key]: start,
      }))
      if (start === end) {
        clearInterval(timer)
      }
    }, step)
  }

  useEffect(() => {
    const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME
    const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN

    if (!githubUsername || !githubToken) {
      console.error('GitHub username or token not provided.')
      return
    }

    fetchGithubData(githubUsername, githubToken)
      .then((data) => {
        if (data) {
          setGithubData(data)
          setTargetValues({
            repositories: data.repositories.length,
            totalPullRequests: data.totalPullRequests,
            totalCommits: data.totalCommits,
          })
        }
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [])

  useEffect(() => {
    if (targetValues.repositories !== null) {
      animateValue('repositories')
    }
    if (targetValues.totalPullRequests !== null) {
      animateValue('totalPullRequests')
    }
    if (targetValues.totalCommits !== null) {
      animateValue('totalCommits')
    }
  }, [targetValues])

  return (
    <section className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold text-white">{heroContent.title}</h1>
        <p>{heroContent.caption}</p>
      </div>

      <div className="flex flex-row items-center gap-6">
        <Image className="rounded-lg bg-custom-b-gray" width="85" height="85" src={AvatarImage} priority quality={100} alt="avatar" />

        <ul className="space-y-2">
          {Object.values(heroContent.list).map((item, index) => (
            <li key={index}>
              <Link className="flex items-center gap-3" href={item.link}>
                <Image className="s-5" src={item.icon} alt={item.text} />

                <div className="space-x-1">
                  {githubData && (
                    <span>
                      {index === 0 && displayedValues.repositories}
                      {index === 1 && displayedValues.totalPullRequests}
                      {index === 2 && displayedValues.totalCommits}
                    </span>
                  )}

                  <span>{item.text}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <p>{heroContent.description}</p>
    </section>
  )
}
