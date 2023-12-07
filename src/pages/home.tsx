import { Container } from '@/components'
import { CreatePost } from '@/components/create-post'
import { Post } from '@/modules/post'

export const HomePage = () => {
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