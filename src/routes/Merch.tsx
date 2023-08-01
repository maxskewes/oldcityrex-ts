import {
  Box,
  VStack,
  Image,
  Heading,
  Text,
  Button,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';
import { PageHead } from '../components/PageHead';
import { SectionHead } from '../components/SectionHead';

type MerchCardProps = {
  image: string;
  title: string;
  subtitle: string;
  format: string;
  price: number | string;
};

const MerchCard = ({
  image,
  title,
  subtitle,
  format,
  price,
}: MerchCardProps) => {
  return (
    <Box
      backgroundColor='lightgrey'
      minW={200}
      maxW={400}
      minH={350}
      color='black'
      borderRadius={1}
      p={3}
      m={4}
    >
      <VStack>
        <Image
          pb={2}
          maxWidth='100%'
          src={image}
          alt={title}
          borderRadius={2}
        />
        <Heading
          fontSize={30}
          fontWeight={400}
          textAlign='center'
          color='black'
          lineHeight='1.5'
        >
          {title}
        </Heading>
        <Text
          fontFamily='Work Sans, Special Elite, Roboto'
          fontSize={20}
          textAlign='center'
          textTransform='uppercase'
          color='gray'
        >
          {subtitle}
        </Text>
        <Text textAlign='center'>{format}</Text>
        <Text fontSize={20}>
          <b>{price}</b>
        </Text>
        <Button variant='outline' borderWidth={3} borderRadius={18}>
          purchase
        </Button>
      </VStack>
    </Box>
  );
};

export function Merch() {
  return (
    <Box>
      <PageHead pageHeading='Merch' />
      <SectionHead sectionTitle='T-Shirts'>
        <SimpleGrid columns={[1, 2]} spacing={10} maxWidth={'800px'}>
          <MerchCard
            image='/images/merch/ocr-shirt.jpeg'
            title='Old City Records T-Shirt'
            subtitle='White Ink on Black'
            format='Small, Med, Large, XL'
            price='$15'
          />
          <MerchCard
            image='/images/merch/oldcity-shirt.jpeg'
            title='Old City T-Shirt'
            subtitle='White Ink on Black'
            format='Small, Med, Large, XL'
            price='$15'
          />
        </SimpleGrid>
      </SectionHead>
    </Box>
  );
}
