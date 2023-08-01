import { Box, VStack, Image, Heading, Text, Button } from '@chakra-ui/react';

type AlbumCardProps = {
  image: string;
  band: string;
  title: string;
  year: number|string;
  format: string;
  dispayPrice: string;
};

export function AlbumCard({
  image,
  band,
  title,
  year,
  format,
  displayPrice,
}: AlbumCardProps) {
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
          {band}
        </Heading>
        <Text
          fontFamily='Work Sans, Special Elite, Roboto'
          fontSize={20}
          textAlign='center'
          textTransform='uppercase'
          color='gray'
        >
          {title}
        </Text>
        <Text textAlign='center'>{year}</Text>
        <Text textAlign='center'>{format}</Text>
        <Text textAlign='center'>
          <b>
        {displayPrice}
        </b>
        </Text>
        <Button variant='outline' borderWidth={3} borderRadius={18}>
          purchase
        </Button>
      </VStack>
    </Box>
  );
}
