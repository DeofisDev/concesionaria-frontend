import { 
    Button, 
    Center, 
    Text, 
    Flex, 
    Input, 
    InputGroup, 
    InputLeftElement, 
    Select,
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Drawer,
    useDisclosure,
    DrawerContent,
    DrawerHeader,
    DrawerCloseButton
} from "@chakra-ui/react"
import FilterCars from "./FilterCars"
import { useRef } from "react"

const Cars = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 } = useDisclosure()

    const btnRef = useRef()
    const btnRef2 = useRef()

    return(
        <>
        <Center
        flexDirection="column"
        >
            <Text
            as="h1"
            fontSize="2xl"
            mt="2rem"
            fontWeight="800"
            >
                Catalogo de Autos
            </Text>
            <Flex
            justifyContent="center"
            gap="2rem"
            mt="2rem"
            paddingBottom="2rem"
            >
                <Button
                px="4rem"
                py="1.5rem"
                fontWeight="600"
                border="4px solid #D37301"
                borderRadius="10px"
                backgroundColor="white"
                >
                    0Km.
                </Button>
                <Button
                px="4rem"
                py="1.5rem"
                fontWeight="600"
                border="4px solid #D37301"
                borderRadius="10px"
                backgroundColor="white"
                >
                    Usados
                </Button>
            </Flex>
            <Center
            width="90%"
            gap="6rem"
            mt="2rem"
            display={["none", "none", "flex", "flex"]}
            >
                <Text
                as="h3"
                fontSize="xl"
                fontWeight="800"
                >
                    Filtros
                </Text>
                <Input
                placeholder="Escribi marca, modelo, version del auto"
                />
                <Select
                width="20%"
                placeholder="Ordenar Por"
                >
                </Select>
            </Center>
            <Flex
            width="100%"
            direction={["column", "column", "row", "row"]}
            justify="start"
            paddingLeft="2rem"
            gap="5rem"
            >
                <Flex
                direction="column"
                width="10%"
                display= {["none", "none", "flex", "flex"]}
                gap="1rem"
                mt="2rem"
                ml="2rem"
                >
                    <Select 
                    placeholder="Marcas"
                    fontSize="0.8rem"
                    border="none"
                    >
                        <option>
                            Volkswagen
                        </option>
                    </Select>
                    <Select 
                    placeholder="Modelos"
                    fontSize="0.8rem"
                    border="none"
                    >
                        <option>
                            Volkswagen
                        </option>
                    </Select>
                    <Select 
                    placeholder="Versiones"
                    fontSize="0.8rem"
                    border="none"
                    >
                        <option>
                            Volkswagen
                        </option>
                    </Select>
                    <Select 
                    placeholder="Transmisión"
                    fontSize="0.8rem"
                    border="none"
                    >
                        <option>
                            Volkswagen
                        </option>
                    </Select>
                    <Select 
                    placeholder="Combustibles"
                    fontSize="0.8rem"
                    border="none"
                    >
                        <option>
                            Volkswagen
                        </option>
                    </Select>
                    <Select 
                    placeholder="Segmentos"
                    fontSize="0.8rem"
                    border="none"
                    >
                        <option>
                            Volkswagen
                        </option>
                    </Select>
                    <Text as="h1" fontWeight="800">
                        Kilometraje
                    </Text>
                    <Flex
                    gap="1rem"
                    >
                        <Input
                        placeholder="Min."
                        fontSize="0.8rem"
                        height="2rem"
                        />
                        <Input
                        placeholder="Max."
                        fontSize="0.8rem"
                        height="2rem"
                        />
                    </Flex>
                    <Text as="h1" fontWeight="800">
                        Precio
                    </Text>
                    <Flex
                    gap="1rem"
                    >
                        <Input
                        placeholder="Min."
                        fontSize="0.8rem"
                        height="2rem"
                        />
                        <Input
                        placeholder="Max."
                        fontSize="0.8rem"
                        height="2rem"
                        />
                    </Flex>
                    <Text as="h1" fontWeight="800">
                        Año
                    </Text>
                    <Flex
                    gap="1rem"
                    >
                        <Input
                        placeholder="Min."
                        fontSize="0.8rem"
                        height="2rem"
                        />
                        <Input
                        placeholder="Max."
                        fontSize="0.8rem"
                        height="2rem"
                        />
                    </Flex>
                </Flex>
                    <Flex
                    display={["flex", "flex", "none", "none"]}
                    direction="column"
                    >
                        <Input
                        placeholder="Buscar vehiculo..."
                        />
                        <Flex
                        mt="2rem"
                        justify="center"
                        gap="2rem"
                        >
                            <Button ref={btnRef} onClick={onOpen}>
                                Filtrar por
                            </Button>
                            <Drawer
                            size="full"
                            isOpen={isOpen}
                            placement='right'
                            onClose={onClose}
                            finalFocusRef={btnRef}
                            >
                                <DrawerContent>
                                    <DrawerCloseButton/>
                                    <DrawerHeader>
                                        Filtrar por
                                    </DrawerHeader>
                                    <Flex
                                        direction="column"
                                        gap="1rem"
                                        mt="2rem"
                                        >
                                            <Select 
                                            placeholder="Marcas"
                                            fontSize="0.8rem"
                                            border="none"
                                            >
                                                <option>
                                                    Volkswagen
                                                </option>
                                            </Select>
                                            <Select 
                                            placeholder="Modelos"
                                            fontSize="0.8rem"
                                            border="none"
                                            >
                                                <option>
                                                    Volkswagen
                                                </option>
                                            </Select>
                                            <Select 
                                            placeholder="Versiones"
                                            fontSize="0.8rem"
                                            border="none"
                                            >
                                                <option>
                                                    Volkswagen
                                                </option>
                                            </Select>
                                            <Select 
                                            placeholder="Transmisión"
                                            fontSize="0.8rem"
                                            border="none"
                                            >
                                                <option>
                                                    Volkswagen
                                                </option>
                                            </Select>
                                            <Select 
                                            placeholder="Combustibles"
                                            fontSize="0.8rem"
                                            border="none"
                                            >
                                                <option>
                                                    Volkswagen
                                                </option>
                                            </Select>
                                            <Select 
                                            placeholder="Segmentos"
                                            fontSize="0.8rem"
                                            border="none"
                                            >
                                                <option>
                                                    Volkswagen
                                                </option>
                                            </Select>
                                            <Text as="h1" fontWeight="800" ml="1rem">
                                                Kilometraje
                                            </Text>
                                            <Flex
                                            gap="1rem"
                                            >
                                                <Input
                                                placeholder="Min."
                                                fontSize="0.8rem"
                                                height="2rem"
                                                />
                                                <Input
                                                placeholder="Max."
                                                fontSize="0.8rem"
                                                height="2rem"
                                                />
                                            </Flex>
                                            <Text as="h1" fontWeight="800" ml="1rem">
                                                Precio
                                            </Text>
                                            <Flex
                                            gap="1rem"
                                            >
                                                <Input
                                                placeholder="Min."
                                                fontSize="0.8rem"
                                                height="2rem"
                                                />
                                                <Input
                                                placeholder="Max."
                                                fontSize="0.8rem"
                                                height="2rem"
                                                />
                                            </Flex>
                                            <Text as="h1" fontWeight="800" ml="1rem">
                                                Año
                                            </Text>
                                            <Flex
                                            gap="1rem"
                                            >
                                                <Input
                                                placeholder="Min."
                                                fontSize="0.8rem"
                                                height="2rem"
                                                />
                                                <Input
                                                placeholder="Max."
                                                fontSize="0.8rem"
                                                height="2rem"
                                                />
                                            </Flex>
                                        </Flex>
                                </DrawerContent>
                            </Drawer>
                            <Button ref={btnRef2} onClick={onOpen2}>
                                Ordenar por
                            </Button>
                            <Drawer
                            size="full"
                            isOpen={isOpen2}
                            placement='right'
                            onClose={onClose2}
                            finalFocusRef={btnRef2}
                            >
                                <DrawerContent>
                                    <DrawerCloseButton/>
                                    <DrawerHeader>
                                        Ordenar por
                                    </DrawerHeader>
                                </DrawerContent>
                            </Drawer>
                        </Flex>
                    </Flex>
                <FilterCars/>
            </Flex>
        </Center>
        </>
    )
}

export default Cars