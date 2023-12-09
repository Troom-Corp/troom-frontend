import { Container } from "@/UI"
import { Profile } from "@/components"

async function ProfilePage({ params }: {params: { login: string } }) {

  return (
    <Container type='main'>
      <Container type='content'>
        <Profile params={params.login} />
      </Container>
      <Container type='aside'>
        <p>Hello world</p> 
      </Container>
    </Container>
  )
}

export default ProfilePage