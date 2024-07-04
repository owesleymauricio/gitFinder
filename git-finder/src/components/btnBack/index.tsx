import { Button } from '@chakra-ui/react'
import { useRouter, NextRouter } from 'next/router'

const BtnBack = () => {
    const router: NextRouter = useRouter()
  return (
    <>
    <Button
    width={'200px'}
    height={'60px'}
    fontSize={'30px'}
    onClick={() => router.push("/")}>
        Voltar
    </Button>
    </>
  )
}

export default BtnBack