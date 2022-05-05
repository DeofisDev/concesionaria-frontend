import { Flex, Image } from '@chakra-ui/react'
import Link from 'next/link';

const Navbar = () => {
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
                w="300px"
                />
                <Flex
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