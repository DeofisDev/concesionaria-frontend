import { Button, Image, Text, Flex } from "@chakra-ui/react"
import Link from "next/link"

function capitalizeFirstLetter(str) {
    const lowerCase = str.toLowerCase()
    return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
  }

const CarCard = ({car}) => {
    return(
        <Flex
        direction="column"
        align="center"
        gap="1rem"
        width={["90%", "90%", "25%", "25%"]}
        border="1px solid #c9c9c9"
        boxShadow="0px 23px 19px -4px rgba(0,0,0,0.06)"
        borderRadius="0 0 20px 20px"
        borderTop="none"
        py="2rem"
        >   
            <Text
            as="h1"
            fontWeight="800"
            fontSize="xl"
            >
                {capitalizeFirstLetter(car.mark.name)}
            </Text>
            <Image src="https://www.toyota.com.ar/img_cache/widen_230_storage-submodels-caylrc6htrpng_.png"/>
            <Text
            as="h2"
            >
                Especificaciones
            </Text>
            <Link href={`products/${car.id}`}>
                <Button>
                    Ver mas
                </Button>
            </Link>
        </Flex>
    )
}

export default CarCard