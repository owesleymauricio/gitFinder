import { RepoProps } from "@/types/repoProps"
import { BsCodeSlash } from "react-icons/bs"
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai"
import { RiGitRepositoryLine } from "react-icons/ri"
import { Flex, Heading, Text, Link, Box } from "@chakra-ui/react"
//import Link from "next/link"

const Repo = ({
    name,
    forks_count,
    html_url,
    language,
    stargazers_count
}: RepoProps) => {
    return (
        <Flex
            flexDirection={'column'}
            borderRadius={'8px'}
            p={'10px'}
            backgroundColor={'#483D8B'}
            boxShadow={'28px 34px 15px -3px rgba(0,0,0,0.1)'}
        >
            <Heading as='h3' size='lg'>{name}</Heading>
            <Text
                display={'flex'}
                alignItems={'center'}
                gap={2}
                fontSize={'20px'}
            >
                <BsCodeSlash />
                {language}
            </Text>
            <Flex
                flexDirection={'column'}
                fontSize={'20px'}
            >
                <Flex
                alignItems={'center'}
                gap={2}
                >
                    <AiOutlineStar />
                    <Text>{stargazers_count}</Text>
                </Flex>
                <Flex
                alignItems={'center'}
                gap={2}
                >
                    <AiOutlineFork />
                    <Text>{forks_count}</Text>
                </Flex>
            </Flex>
          
            <Link
                display={'flex'}
                fontSize={'20px'}
                alignItems={'center'}
                gap={2}
                href={html_url} target="_blank">
                <RiGitRepositoryLine />
                <Text>Ver codigo</Text>
            </Link>
            
        </Flex>
    )
}

export default Repo