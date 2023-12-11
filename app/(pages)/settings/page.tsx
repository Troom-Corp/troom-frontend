import { Container } from "@/UI"
import { Settings } from "@/components"

async function SettingsPage({ params }: { params: { login: string } }) {

  return (
    <Container type='main'>
      <Container type='content'>
        <Settings />
      </Container>
      <Container type='aside'>
        <p>Hello world</p>
      </Container>
    </Container>
  )
}

export default SettingsPage