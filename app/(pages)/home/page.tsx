import { Container } from '@/UI'
import { Post, CreatePost } from '@/components'

const HomePage = () => {
  return (
    <Container type='main'>
      <Container type='content'>
        <CreatePost />
        <Post />
      </Container>
      <Container type='aside'>
        <div> I am Aside Hello World</div>
      </Container>
    </Container>
  )
}

export default HomePage