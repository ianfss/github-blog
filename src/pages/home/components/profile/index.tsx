import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Avatar, Info, Link, ProfileContainer, Socials, Title } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { GitHubContext } from '../../../../contexts/github-context'
import { useContextSelector } from 'use-context-selector'

export function Profile() {
  const gitHubUser = useContextSelector(
    GitHubContext,
    (context) => context.gitHubUser,
  )

  return (
    <ProfileContainer>
      <Avatar src={gitHubUser.avatar_url} alt="" />
      <div>
        <Info>
          <Title>
            <h1>{gitHubUser.name}</h1>

            <Link href={gitHubUser.url} target="_blank">
              GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </Title>
          <p>{gitHubUser.bio}</p>
        </Info>
        <Socials>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{gitHubUser.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{gitHubUser.company}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{gitHubUser.followers} seguidores</span>
          </div>
        </Socials>
      </div>
    </ProfileContainer>
  )
}
