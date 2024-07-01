import { Button, Flex, Heading, Input, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

const Search = ({loadUser}: SearchProps) => {

    const [userName, setUserName] = useState("")
    return (
        <Flex flexDirection={'column'}>
            <Heading>Busque por um usario</Heading>
            <Text>Conheça seus melhores repositorios</Text>
            <Flex>
                <Input
                 type='text'
                  placeholder='Digite sua bisca'
                  onChange={(event) => setUserName(event.target.value)}
                  marginRight={'5px'}
                  />
                <Button onClick={() => loadUser(userName)}>
                    <BsSearch />
                </Button>
            </Flex>
        </Flex>
    )
}

export default Search