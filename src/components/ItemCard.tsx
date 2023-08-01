import { Box, Button, Image, Heading, VStack, Text } from '@chakra-ui/react';

type ItemCardProps = {
  title: string;
  image: string;
  band: string;
  format: string;
  price: number | string;
};

export function ItemCard({ title, image, band, format, price }: ItemCardProps) {
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
          {band}
        </Text>
        <Text textAlign='center'>{format}</Text>
        <Text fontSize={20}>
          <b>{price}</b>
        </Text>
        <Button variant='outline'>listen</Button>
        <Button variant='outline' borderWidth={3} borderRadius={18}>
          purchase
        </Button>
      </VStack>
    </Box>
  );
}
