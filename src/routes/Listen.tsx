import {
  Box,
  VStack,
  Text,
  Heading,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';
import { PageHead } from '../components/PageHead';
import { SectionHead } from '../components/SectionHead';

type BandCardProps = {
  image: string;
  band: string;
  description: string;
  bandcamp: string;
};

const BandCard = ({ image, band, description, bandcamp }: BandCardProps) => {
  return (
    <Box
      bg='light_grey'
      minW={200}
      maxW={400}
      minH={350}
      color='black'
      borderRadius={1}
      p={3}
      m={4}
    >
      <VStack>
        <Image pb={2} maxWidth='100%' src={image} alt={band} borderRadius={2} />
        <Heading
          fontSize={30}
          fontWeight={400}
          textAlign='center'
          color='black'
          lineHeight='1.5'
        >
          {band}
        </Heading>
        <Text textAlign='center'>{description}</Text>
        <Text
          fontFamily='Work Sans, Special Elite, Roboto'
          fontSize={20}
          textAlign='center'
          textTransform='uppercase'
          color='gray'
        >
          <a href={bandcamp}>Listen on Bandcamp</a>
        </Text>
      </VStack>
    </Box>
  );
};

export function Listen() {
  return (
    <Box>
      <PageHead pageHeading='Listen' />
      <SectionHead sectionTitle='Bands' />
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        <BandCard
          image='./images/releases/oldcity.png'
          band='Old City'
          description='Portland, OR'
          bandcamp='https://oldcity.bandcamp.com/album/future-dead-2'
        />
        <BandCard
          image='./images/bands/visions.png'
          band='Visions'
          description='Portland, OR'
          bandcamp='https://visionspdx.bandcamp.com/releases'
        />
        <BandCard
          image='./images/bands/ibm.png'
          band='Ignition Block M'
          description='Tokyo, Japan'
          bandcamp='https://ignitionblockm.bandcamp.com/album/ignition-block-m'
        />
      </SimpleGrid>
    </Box>
  );
}
