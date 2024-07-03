import { Userprops } from "@/types/usersProps"
import { Flex, Heading, Text, Image, Box } from "@chakra-ui/react"
//import Image from 'next/image'
import Link from "next/link"
import { MdLocationPin } from "react-icons/md"

const User = ({
    avatar,
    login,
    location,
    following,
    followers
}: Userprops) => {
    return (
        <Flex

        >
            <Box
                margin={'10px'}
                border={'1px solid gray'}
                borderRadius={'8px'}
                p={'10px'}
            >
                <Image
                    borderRadius={'5px'}
                    src={avatar}
                    alt={login}
                    width={150} // Defina uma largura para a imagem
                    height={150} // Defina uma altura para a imagem
                />
                <Heading as='h4' size='md' >{login}</Heading>
                {location &&
                    <Text>
                        <MdLocationPin />
                        <span>{location}</span>
                    </Text>}
                <Flex
                    flexDirection={'column'}
                >
                    <Flex>
                        <Text>Seguidores: </Text>
                        <Text>{followers}</Text>
                    </Flex>
                    <Flex>
                        <Text>Seguindo: </Text>
                        <Text>{following}</Text>
                    </Flex>
                </Flex>
                <Flex
                    cursor={'pointer'}
                >

                    <Link href={`/repos?login=${login}`}> {/* link sempre importar assim paar funcionar */}
                        <Text as="a" sx={{
                            _hover: {
                                color: 'blue',
                            },
                        }}>
                            Ver melhores projetos
                        </Text>
                    </Link>
                </Flex>
            </Box>
        </Flex>
    )
}

export default User