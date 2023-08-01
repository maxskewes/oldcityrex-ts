import {
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  Image,
  Heading,
  Text,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';

type StoreItemProps = {
  id: number;
  title: string;
  band: string;
  format: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, title, band, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          src={imgUrl}
          alt={name}
          height='200px'
          sx={{ objectFit: 'cover' }}
        />
        <CardHeader>
          <Heading>{name}</Heading>
          <Heading color={'lightgrey'}>{formatCurrency(price)}</Heading>
        </CardHeader>
        <Box marginTop='auto'>
          {quantity === 0 ? (
            <Button variant='solid' w='100%' onClick={() => increaseCartQuantity(id)}>
              add to bag
            </Button>
          ) : (
            <VStack
              spacing= '.5rem'
            >
              <HStack
                spacing='.5rem'
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <VStack>
                  <Heading>{quantity}</Heading> 
                  <Text>in bag</Text>
                </VStack>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </HStack>
              <Button
                onClick={() => removeFromCart(id)}
                variant='outline'
                size='sm'
              >
                remove from bag
              </Button>
            </VStack>
          )}
        </Box>
      </CardBody>
    </Card>
  );
}
