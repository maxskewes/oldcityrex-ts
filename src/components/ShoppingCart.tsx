import {
    VStack,
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react';
  import { useShoppingCart } from '../context/ShoppingCartContext';
  import { formatCurrency } from '../utilities/formatCurrency';
  import { CartItem } from './CartItem';
  import storeItems from '../data/items.json';
  
  type ShoppingCartProps = {
    isOpen: boolean;
  };
  
  export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart();
    return (
      <>
        <Drawer isOpen={isOpen} onClose={closeCart} placement='right'>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Cart</DrawerHeader>
            <DrawerBody>
              <VStack>
                {cartItems.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))}
                <div className='ms-auto fw-bold fs-5'>
                  Total{' '}
                  {formatCurrency(
                    cartItems.reduce((total, cartItem) => {
                      const item = storeItems.find((i) => i.id === cartItem.id);
                      return total + (item?.price || 0) * cartItem.quantity;
                    }, 0)
                  )}
                </div>
              </VStack>
              <DrawerFooter>
                <Button>Place Order</Button>
              </DrawerFooter>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  