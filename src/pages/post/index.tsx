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
import { GitHubContext } from '../../contexts/github-context'
import { useContextSelector } from 'use-context-selector'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Markdown from 'react-markdown'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function PostPage() {
  const { number } = useParams()

  const [fetchGitHubIssue, gitHubIssue] = useContextSelector(
    GitHubContext,
    (context) => [context.fetchGitHubIssue, context.gitHubIssue],
  )

  useEffect(() => {
    fetchGitHubIssue(number!)
  }, [])

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
        <h1>{gitHubIssue.title}</h1>
        <Info>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{gitHubIssue?.user?.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendar} />
            <span>
              {gitHubIssue.created_at &&
                formatDistanceToNow(new Date(gitHubIssue.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>{gitHubIssue.comments} comentários</span>
          </div>
        </Info>
      </PostInfoContainer>
      <PostContent>
        <Markdown>{gitHubIssue.body}</Markdown>
      </PostContent>
    </PostPageContainer>
  )
}
