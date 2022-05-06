import { HamburgerIcon } from '@chakra-ui/icons';
import { Drawer, DrawerCloseButton, DrawerContent, Flex, IconButton, Image, useDisclosure, DrawerHeader, DrawerBody } from '@chakra-ui/react'
import Link from 'next/link';
import { useRef } from 'react';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <Flex
        as="nav"
        w="100%"
        h={["4rem", "4rem", "6rem", "6rem"]}
        backgroundColor="#343434"
        align="center"
        justify="center"
        >
            <Flex
            align="center"
            justify="space-between"
            maxW="1200px"
            w="100%"
            >
                <Image
                src="Concesionaria.png"
                alt="e/concesionaria"
                w={["100px", "100px", "300px", "300px"]}
                />
                <IconButton 
                ref={btnRef}
                backgroundColor="transparent"  
                color="white"
                _hover={{ backgroundColor: "transparent"}}
                icon={<HamburgerIcon/>} 
                display={["block", "block", "none", "none"]}
                onClick={onOpen}/>
                <Drawer
                    size="full"
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    backgroundColor="#343434"
                >
                    <DrawerContent>
                        <DrawerCloseButton/>
                        <DrawerHeader>
                            Concesionaria
                        </DrawerHeader>
                        <DrawerBody>
                            <Flex
                            direction="column"
                            fontSize="xl"
                            fontWeight="600"
                            gap="2rem"
                            mt="2rem"
                            >
                                <Link href="#">
                                    Nosotros
                                </Link>
                                <Link href="#">
                                    Autos
                                </Link>
                                <Link href="#">
                                    Posventa
                                </Link>
                                <Link href="#">
                                    Novedades
                                </Link>
                            </Flex>
                        </DrawerBody>
                    </DrawerContent>

                </Drawer>

                <Flex
                display={["none", "none", "flex", "flex"]}
                align="center"
                justify="space-between"
                w="60%"
                color="white"
                fontSize="xl"
                fontWeight={700}
                >
                    <Link href="#">
                        Nosotros
                    </Link>
                    <Link href="#">
                        Autos
                    </Link>
                    <Link href="#">
                        Posventa
                    </Link>
                    <Link href="#">
                        Novedades
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Navbar