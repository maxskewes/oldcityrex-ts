import { HStack, Button, Image } from '@chakra-ui/react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import storeItems from '../data/items.json';
import { formatCurrency } from '../utilities/formatCurrency'

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <HStack sx={{display: 'flex', alignItems: 'center'}}>
      <Image
        src={item.imgUrl}
        alt={item.name}
        sx={{ width: '125px', height: '75px', objectFit: 'cover' }}
      />
      <div className='me-auto'>
        {item.name}
        {quantity > 1 && (
          <span className='text-muted' style={{ fontSize: '.65em' }}>
            x{quantity}
          </span>
        )}
      </div>
      <div className='text-muted' style={{ fontSize: '.75em' }}>
        {formatCurrency(item.price * quantity)}
      </div>
      <Button variant='outline-danger' size='sm' onClick={() => removeFromCart(item.id)}>
        &times;
      </Button>
    </HStack>
  );
}
