import { useRouter } from "next/router";
import { Flex } from "@chakra-ui/react";
import BtnBack from "@/components/btnBack";


const Repos = () => {
    const router = useRouter();
    const { login } = router.query;

    return (
        <Flex>
            <BtnBack />
            <div>Repos {login}</div>
        </Flex>
    );
};

export default Repos;