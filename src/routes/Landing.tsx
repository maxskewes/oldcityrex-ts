import { Box } from '@chakra-ui/react';
import { PageHead } from '../components/PageHead';
import { SectionHead } from '../components/SectionHead';

export function Landing() {
  return (
    <Box w='full' h='auto'>
      <PageHead pageHeading='New Releases' />
      <SectionHead sectionTitle='Landing'/>
    </Box>
  );
}
