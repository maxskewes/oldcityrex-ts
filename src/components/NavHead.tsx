import { ReactFragment, ReactNode } from 'react';
import { Box, Flex, Icon, Heading } from '@chakra-ui/react';
import { LogoHead } from './LogoHead';
import { OCLink } from './OCLink';
import { TiShoppingCart } from 'react-icons/ti';

type NavItemProps = {
  route: string;
  title: string;
  key: string;
  textAlignLeft: boolean;
};

type LinkDivProps = {
  children: ReactNode | ReactFragment;
};

const NavItem = ({ title, route, key, textAlignLeft }: NavItemProps) => {
  return (
    <Box minW={['auto', '45%', 'auto']} mx={['4px', null, 0]}>
      <OCLink to={route} key={key}>
        <Heading
          color='grey'
          fontSize={[28, 32, null, 36, 40]}
          p={0.5}
          fontWeight={400}
          textTransform='uppercase'
          sx={{ textAlign: { textAlignLeft } }}
        >
          {title}
        </Heading>
      </OCLink>
    </Box>
  );
};

const LinkDiv = ({ children, ...props }: LinkDivProps) => {
  return (
    <Flex
      py={[1]}
      ml={[2, null, null, 4]}
      mr={[2, null, 0]}
      flexDirection={['row']}
      flexWrap='wrap'
      justifyContent={'space-between'}
      alignItems={['flex-start', null, 'center']}
      flexGrow={1}
      justify='center'
      h={[100, 100, 100, 100]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavHead;

export function NavHead() {
  return (
    <Box display='flex' flexDirection='row' bg='black' h={[100]}>
      <LogoHead />
      <LinkDiv>
        <NavItem
          route={'/releases'}
          title={'Releases'}
          textAlignLeft={'true'}
        />
        <NavItem route={'/merch'} title={'Merch'} textAlignLeft={'false'} />
        <NavItem route={'/listen'} title={'Listen'} textAlignLeft />
        <NavItem route={'/contact'} title={'Contact'} textAlignLeft='false' />
        <Box
          display={['none', null, 'flex']}
          h='100%'
          pr={['0px', null, '.5em', '1em', '2em']}
          sx={{ float: 'right' }}
        >
          <OCLink to={'/cart'} key={'cart'}>
            <Icon
              as={TiShoppingCart}
              alignSelf='center'
              color='red'
              boxSize={'2em'}
              alignItems='center'
              h='100%'
            />
          </OCLink>
        </Box>
      </LinkDiv>
    </Box>
  );
}
