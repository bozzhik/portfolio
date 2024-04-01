'use client'

import {useEffect, useState} from 'react'
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
      text: 'Commits in 2024',
      link: 'https://github.com/bozzhik',
      icon: GainIcon,
    },
    3: {
      text: 'Pull Requests in 2024',
      link: 'https://github.com/bozzhik',
      icon: GithubIcon,
    },
  },
  description: "Hi, I'm Maxim Bozhik, a computer science student who loves coding and design. What started as a hobby turned into my profession. Currently, I'm focused on creating exciting freelance projects.",
}

export default function Hero() {
  const [githubData, setGithubData] = useState<any>(null)

  useEffect(() => {
    const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME
    const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN

    if (!githubUsername || !githubToken) {
      console.error('GitHub username or token not provided.')
      return
    }

    fetchGithubData(githubUsername, githubToken)
      .then((data) => {
        setGithubData(data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [])

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold text-white">{heroContent.title}</h1>
        <p>{heroContent.caption}</p>
      </div>
      <div className="flex flex-row items-center gap-6">
        <Image className="rounded-lg bg-custom-b-gray" width="85" height="85" src={AvatarImage} priority quality={100} alt="avatar" />
        <ul className="space-y-2">
          {Object.values(heroContent.list).map((item, index) => (
            <li key={index}>
              <a className="flex items-center gap-3" href={item.link}>
                <Image className="s-5" src={item.icon} alt={item.text} />
                <div className="space-x-1">
                  {githubData && (
                    <span>
                      {index === 0 && githubData.repositories.length}
                      {index === 1 && githubData.totalCommits}
                      {index === 2 && githubData.totalPullRequests}
                    </span>
                  )}
                  <span>{item.text}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p>{heroContent.description}</p>
    </div>
  )
}
