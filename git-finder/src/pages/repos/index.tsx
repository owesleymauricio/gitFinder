import { useRouter } from "next/router";
import { Box, ChakraProvider, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { RepoProps } from "@/types/repoProps";
import { useEffect, useState } from "react";
import BtnBack from "@/components/btnBack";
import Loader from "@/components/loader";
import Repo from "@/components/repo";

const Repos = () => {
    const [repos, setRepos] = useState<RepoProps[] | [] | null>(null)
    const [isLoading, setIsLoading] = useState(false)


    const router = useRouter();
    const { login } = router.query;

    useEffect(() => {
        const loadRepos = async function (login: string) {
            setIsLoading(true)

            const res = await fetch(`https://api.github.com/users/${login}/repos`)

            const data = await res.json()

            setIsLoading(false)

            setRepos(data)
              //console.log(data)
        }

        if (login) {
            if (Array.isArray(login)) {
                loadRepos(login[0]); // Se for um array, pegue o primeiro elemento
            } else {
                loadRepos(login); // Se for uma string, use diretamente
            }
        }
    }, [login])

    if (!repos && isLoading) return <Loader />

    return (
        <ChakraProvider>
            <Flex
                flexDirection={'column'}
                w={'100vw'}
                h={'100%'}
                maxWidth={'1600px'}
                alignItems={'center'}
                fontFamily={'monospace'}
                backgroundColor={'#836FFF'}
            >
                <Heading
                    mt={'30px'}
                    mb={'10px'}
                >
                    Github Finder
                </Heading>

                <Heading as={'h2'} size={'xl'}>
                    Explore os repositorios do usuario: {login}
                </Heading>
                {repos && repos?.length === 0 && <p>Não a repositorios.</p>}
                {repos && repos.length > 0 && (
                    <SimpleGrid
                     columns={2} 
                     spacing={10}
                     p={'10px'}
                    >
                        {repos.map((repo: RepoProps) => (
                            <Repo key={repo.name} {...repo} />
                        ))}
                    </SimpleGrid>
                )}
                <Flex
                margin={'20px'}
                width={'100%'}
                maxW={'1600px'}
                marginLeft={'70px'}
                >
                <BtnBack />
                </Flex>
              
            </Flex>
        </ChakraProvider>
    );
};

export default Repos;