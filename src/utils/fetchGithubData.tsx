import axios from 'axios'

export async function fetchGithubData(username: string, token: string) {
  const headers = {
    Authorization: `token ${token}`,
  }

  try {
    const repositories = await axios.get(`https://api.github.com/users/${username}/repos`, {headers})
    const commits = await axios.get(`https://api.github.com/search/commits?q=author:${username}+committer-date:2024-01-01..2024-12-31`, {headers})
    const pullRequests = await axios.get(`https://api.github.com/search/issues?q=author:${username}+type:pr+created:2024-01-01..2024-12-31`, {headers})

    return {
      repositories: repositories.data,
      totalCommits: commits.data.total_count,
      totalPullRequests: pullRequests.data.total_count,
    }
  } catch (error) {
    console.error('Error fetching data from GitHub API:', error)
    return null
  }
}
