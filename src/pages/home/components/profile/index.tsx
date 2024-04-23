import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Avatar, Info, Link, ProfileContainer, Socials, Title } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div>
        <Info>
          <Title>
            <h1>Cameron Williamson</h1>

            <Link href="" target="_blank">
              GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </Title>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </Info>
        <Socials>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rocketseat</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </div>
        </Socials>
      </div>
    </ProfileContainer>
  )
}
