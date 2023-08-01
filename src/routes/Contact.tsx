import { Box, Text, VStack } from '@chakra-ui/react';
import { PageHead } from '../components/PageHead';

export function Contact() {
  return (
    <>
      <PageHead pageHeading='Contact' />
        <VStack bg='black' h={200} textAlign='center' p={20}>
          <Text color='white' fontSize={30}>
            please email: <br /> nick@old-city-records.com
          </Text>
        </VStack>
    </>
  );
};
