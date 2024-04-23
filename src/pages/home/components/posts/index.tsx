import { Post, PostsContainer } from './styles'
import { GitHubContext } from '../../../../contexts/github-context'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Markdown from 'react-markdown'
import { useContextSelector } from 'use-context-selector'

export function Posts() {
  const [gitHubIssues] = useContextSelector(GitHubContext, (context) => [
    context.gitHubIssues,
  ])

  return (
    <PostsContainer>
      {gitHubIssues.map((gitHubIssue) => (
        <Post to={`/post/${gitHubIssue.number}`} key={gitHubIssue.number}>
          <header>
            <h3>{gitHubIssue.title}</h3>
            <span>
              {formatDistanceToNow(new Date(gitHubIssue.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          </header>
          <Markdown>{`${gitHubIssue.body.substring(0, 140)}...`}</Markdown>
        </Post>
      ))}
    </PostsContainer>
  )
}
