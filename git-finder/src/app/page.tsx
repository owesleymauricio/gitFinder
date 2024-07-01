
import HomePage from "@/pages/HomePage";
import { Box, Flex, Heading } from "@chakra-ui/react";


export default function Home() {
  return (
    <Flex
      flexDirection={'column'}
      w={'100vw'}
      h={'100vh'}
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

      <Box
      backgroundColor={'#6A5ACD'}
      border={'1px solid gray'}
      borderRadius={'8px'}
      p={'20px'}
      gap={2}
      >
        <HomePage />
      </Box>
    </Flex>
  );
}
