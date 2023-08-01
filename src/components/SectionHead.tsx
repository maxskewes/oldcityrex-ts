import { Box, Heading, VStack, SimpleGrid } from '@chakra-ui/react';
import { ReactFragment, ReactNode } from 'react';

type SectionHeadProps = {
  sectionTitle: string;
  children: ReactNode | ReactFragment;
};

export function SectionHead({ sectionTitle, children }: SectionHeadProps) {
  return (
    <Box bg='#121212' w='full' h='auto' p={4}>
      <Heading
        variant='h1'
        color='light_grey'
        fontWeight={400}
        fontSize={[32, 40, 50, 50, 60]}
        pt={4}
        pb={8}
      >
        {sectionTitle}
      </Heading>
      {children}
    </Box>
  );
}
