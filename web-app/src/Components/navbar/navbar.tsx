import { Button, Divider, Flex } from '@chakra-ui/react';
import LogoBanner from 'Components/LogoBanner';
import React from 'react';

export default function Navbar({ show }: Props) {
  return (
    <React.Fragment>
      <Flex direction={'row'} justifyContent={'space-between'}>
        {!show ? (
          <div style={{ backgroundColor: '#EFEFEF', width: window.innerWidth / 4 }}>
            <LogoBanner />
          </div>
        ) : (
          <div style={{ width: window.innerWidth / 4 }}>
            <LogoBanner />
          </div>
        )}
        <Flex alignItems={'center'}>
          {show && (
            <Button bgColor="#99AF8C" width="sm" color="#E9E9E9">
              <a href="/catalog">Mon Catalogue</a>
            </Button>
          )}
          <Button variant={'ghost'}>
            <a href="/mon-compte">Mon Compte</a>
          </Button>
        </Flex>
      </Flex>
      {/* <Divider /> */}
    </React.Fragment>
  );
}

type Props = {
  show: boolean;
};
{
  /* export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onButtonClick = () => {
    console.log('aaa');
  };

  return (
    <div id="navFix">
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={9} width={['100%']}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} id="myDIV">
            <Button className="btnRes">
              <a href="#Home">
                {' '}
                <b>Home</b>
              </a>
            </Button>

            <Button className="btnRes">
              <a href="#About">
                <b>About</b>
              </a>
            </Button>

            <Button className="btnRes">
              <a href="#Skills">
                {' '}
                <b>Skills</b>
              </a>
            </Button>

            <Button className="btnRes">
              <a href="#Projects">
                <b>Projects</b>
              </a>
            </Button>

            <Button className="btnRes">
              <a href="#Contact">
                <b>Contact</b>
              </a>
            </Button>
          </HStack>
        </Flex>
      </Box>
    </div>
  );
} */
}
