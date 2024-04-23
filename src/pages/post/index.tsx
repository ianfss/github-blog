import {
  Info,
  Link,
  Links,
  PostInfoContainer,
  PostContent,
  PostPageContainer,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { GitHubContext, GitHubIssue } from '../../contexts/github-context'
import { useContextSelector } from 'use-context-selector'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Markdown from 'react-markdown'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function PostPage() {
  const { number } = useParams()
  const [gitHubIssue, setGitHubIssue] = useState<GitHubIssue | undefined>()

  const [fetchGitHubIssue] = useContextSelector(GitHubContext, (context) => [
    context.fetchGitHubIssue,
  ])

  useEffect(() => {
    try {
      fetchGitHubIssue(number!).then((data) => {
        console.log(data)
        setGitHubIssue(data)
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  if (!gitHubIssue) {
    return
  }

  return (
    <PostPageContainer>
      <PostInfoContainer>
        <Links>
          <Link href="/">
            <FontAwesomeIcon icon={faChevronLeft} /> Voltar
          </Link>

          <Link href="{gitHubIssue.html_url}" target="_blank">
            GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </Links>
        <h1>{gitHubIssue?.title}</h1>
        <Info>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{gitHubIssue?.user.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendar} />
            <span>
              {formatDistanceToNow(new Date(gitHubIssue.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>{gitHubIssue?.comments} comentários</span>
          </div>
        </Info>
      </PostInfoContainer>
      <PostContent>
        <Markdown>{gitHubIssue?.body}</Markdown>
      </PostContent>
    </PostPageContainer>
  )
}
