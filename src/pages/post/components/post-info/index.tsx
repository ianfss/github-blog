import { Info, Link, Links, PostInfoContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function PostInfo() {
  return (
    <PostInfoContainer>
      <Links>
        <Link href="/">
          <FontAwesomeIcon icon={faChevronLeft} /> Voltar
        </Link>

        <Link href="" target="_blank">
          GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
      </Links>
      <h1>JavaScript data types and data structures</h1>
      <Info>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          <span>cameronwll</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendar} />
          <span>Há 1 dia</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>5 comentários</span>
        </div>
      </Info>
    </PostInfoContainer>
  )
}
