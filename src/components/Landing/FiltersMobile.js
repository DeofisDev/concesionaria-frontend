import { Flex, Input, Button, Drawer, DrawerCloseButton, Text, DrawerHeader, DrawerContent, useDisclosure, Select } from '@chakra-ui/react'
import { useRef, useState } from 'react'

function FiltersMobile({filters, setFilters}) {
    const btnRef = useRef()
    const btnRef2 = useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 } = useDisclosure()
    const onChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        })
    }

    return (
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
                                name="marks"
                                value={filters.marks}
                                onChange={onChange}
                                >
                                    <option>
                                        Volkswagen
                                    </option>
                                </Select>
                                <Select 
                                placeholder="Modelos"
                                fontSize="0.8rem"
                                border="none"
                                name="models"
                                value={filters.models}
                                onChange={onChange}
                                >
                                    <option>
                                        Volkswagen
                                    </option>
                                </Select>
                                <Select 
                                placeholder="Versiones"
                                fontSize="0.8rem"
                                border="none"
                                name="versions"
                                value={filters.versions}
                                onChange={onChange}
                                >
                                    <option>
                                        Volkswagen
                                    </option>
                                </Select>
                                <Select 
                                placeholder="Transmisión"
                                fontSize="0.8rem"
                                border="none"
                                name="transmission"
                                value={filters.transmission}
                                onChange={onChange}
                                >
                                    <option>
                                        Volkswagen
                                    </option>
                                </Select>
                                <Select 
                                placeholder="Combustibles"
                                fontSize="0.8rem"
                                border="none"
                                name="fuel"
                                value={filters.fuel}
                                onChange={onChange}
                                >
                                    <option>
                                        Volkswagen
                                    </option>
                                </Select>
                                <Select 
                                placeholder="Segmentos"
                                fontSize="0.8rem"
                                border="none"
                                name="segments"
                                value={filters.segments}
                                onChange={onChange}
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
    )
}

export default FiltersMobile