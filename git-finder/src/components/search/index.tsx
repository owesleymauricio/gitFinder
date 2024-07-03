import { Button, Flex, Heading, Input, Text } from '@chakra-ui/react'
import { useState, KeyboardEvent } from 'react'
import { BsSearch } from 'react-icons/bs'

type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

const Search = ({loadUser}: SearchProps) => {

    const [userName, setUserName] = useState("")

    const handleKeyDown = (event: KeyboardEvent) => { // essa tipagem é um evento do teclado
        if( event.key === "Enter" ){
            loadUser(userName)
        }
      
    }

    const handleSearchClick = () => {
        loadUser(userName);
        setUserName("")
    };
    
    return (
        <Flex flexDirection={'column'}>
            <Heading>Busque por um usario</Heading>
            <Text>Conheça seus melhores repositorios</Text>
            <Flex>
                <Input
                 type='text'
                  placeholder='Digite sua busca'
                  onChange={(event) => setUserName(event.target.value)}
                  marginRight={'5px'}
                  onKeyDown={handleKeyDown}
                  />
                <Button onClick={handleSearchClick}>
                    <BsSearch />
                </Button>
            </Flex>
        </Flex>
    )
}

export default Search