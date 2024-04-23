import { ReactNode, useCallback, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { createContext } from 'use-context-selector'

interface GitHubUser {
  avatar_url: string
  name: string
  bio: string | null
  login: string
  company: string | null
  followers: number
  url: string
}

export interface GitHubIssue {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  user: GitHubUser
  labels: string[]
  state: string
  locked: boolean
  assignee: string
  assignees: string[]
  milestone: string
  comments: number
  created_at: string
  updated_at: string
  closed_at: string
  author_association: string
  active_lock_reason: string
  body: string
  timeline_url: string
  performed_via_github_app: string
  state_reason: string
  score: number
}

interface GitHubProviderProps {
  children: ReactNode
}

interface GitHubContextType {
  gitHubUser: GitHubUser
  gitHubIssues: GitHubIssue[]
  fetchGitHubUser: () => void
  fetchGitHubIssues: (query?: string) => void
  fetchGitHubIssue: (issueNumber: string) => Promise<GitHubIssue>
}

export const GitHubContext = createContext({} as GitHubContextType)

export function GitHubProvider({ children }: GitHubProviderProps) {
  const USER = 'ianfss'
  const REPO = 'github-blog'

  const [gitHubUser, setGitHubUser] = useState({} as GitHubUser)
  const [gitHubIssues, setGitHubIssues] = useState<GitHubIssue[]>([])

  const fetchGitHubUser = useCallback(async () => {
    const response = await api.get(`users/${USER}`)

    setGitHubUser(response.data)
  }, [])

  const fetchGitHubIssues = useCallback(async (query?: string) => {
    const response = await api.get('search/issues', {
      params: {
        q: query ? `${query}%20repo:${USER}/${REPO}` : `repo:${USER}/${REPO}`,
      },
    })

    const { items } = response.data

    setGitHubIssues(items)
  }, [])

  const fetchGitHubIssue = useCallback(async (issueNumber: string) => {
    const response = await api.get(
      `repos/${USER}/${REPO}/issues/${issueNumber}`,
    )

    return response.data
  }, [])

  useEffect(() => {
    fetchGitHubUser()
    fetchGitHubIssues()
  }, [fetchGitHubUser, fetchGitHubIssues, fetchGitHubIssue])

  return (
    <GitHubContext.Provider
      value={{
        gitHubUser,
        gitHubIssues,
        fetchGitHubUser,
        fetchGitHubIssues,
        fetchGitHubIssue,
      }}
    >
      {children}
    </GitHubContext.Provider>
  )
}
