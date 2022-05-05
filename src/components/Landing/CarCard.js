import { Button, Image, Text, Flex } from "@chakra-ui/react"

const CarCard = ({car}) => {
    console.log(car)
    return(
        <Flex
        direction="column"
        align="center"
        gap="1rem"
        width="30%"
        border="1px solid black"
        borderRadius="0 0 20px 20px"
        borderTop="none"
        py="2rem"
        >   
            <Text
            as="h1"
            fontWeight="800"
            fontSize="xl"
            >
                Auto
            </Text>
            <Image src={car}/>
            <Text
            as="h2"
            >
                Especificaciones
            </Text>
            <Button>
                Ver mas
            </Button>
        </Flex>
    )
}

export default CarCard