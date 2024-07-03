import { Button } from '@chakra-ui/react'
import { useRouter, NextRouter } from 'next/router'

const BtnBack = () => {
    const router: NextRouter = useRouter()
  return (
    <>
    <Button onClick={() => router.push("/")}>
        Voltar
    </Button>
    </>
  )
}

export default BtnBack