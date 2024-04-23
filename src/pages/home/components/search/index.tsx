import { SearchContainer } from './styles'
import { GitHubContext } from '../../../../contexts/github-context'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useContextSelector } from 'use-context-selector'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Search() {
  const [gitHubIssues, fetchGitHubIssues] = useContextSelector(
    GitHubContext,
    (context) => [context.gitHubIssues, context.fetchGitHubIssues],
  )

  const totalCountOfIssues = gitHubIssues.length

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchIssues(data: SearchFormInputs) {
    fetchGitHubIssues(data.query)
  }

  return (
    <SearchContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <header>
        <h3>Publicações</h3>
        <span>{totalCountOfIssues} publicações</span>
      </header>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchContainer>
  )
}
