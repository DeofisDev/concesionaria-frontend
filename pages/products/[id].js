import { Flex, Text, Image, Center, Stack } from "@chakra-ui/react"
import Navbar from "../../src/components/Navbar"

// const car = {
//     Car: {
//         mark: {
//             name: "Toyota",
//             model: {
//                 name: "Corolla",
//             },
//         },
//         specs: {
//             tankCapacity: "1.6",
//             typeOfMotor: "V8",
//             typeOfTransmision: "Automatic",
//             tankCapacity: "500lts",
//         }
//     }
// }


const CarModel = ({car}) => {
    console.log(car)
    return (
        <>
        <Navbar/>
        <Flex 
        direction='column'
        mt="1rem"
        gap="0.5rem"
        width="100%"
        justify="center"
        align="center"
        >   
            <Flex 
            width="90%" 
            gap="0.5rem"
            fontWeight="800"
            fontSize="4xl"
            padding="1rem"
            borderLeft="5px solid #DC5131"
            justify={["center", "center", "start", "start"]}
            >
                <Text as="h1" color="#DC5131">
                    {car.Car.mark.name}
                </Text>
                <Text as="h1">
                    {car.Car.mark.model.name}
                </Text>
            </Flex>
            <Center>
                <Image 
                src="https://cdn.asofix.com/companies/13d2ec10-5ef5-11ea-8eed-536328ae2266/products/th-1625243997491.1.jpg"/>
                <Flex 
                justify="center"
                width={["100%", "100%", "80%", "80%"]}
                direction="column">
                </Flex>
            </Center>
            <Flex direction="column" align="start" w="100%">
                <Flex
                ml="2rem" 
                gap="0.5rem"
                fontWeight="800"
                fontSize="4xl"
                padding="1rem"
                justify={["center", "center", "start", "start"]}
                >
                    <Text as="h1" color="#DC5131">
                        Ficha
                    </Text>
                    <Text as="h1">
                        Tecnica
                    </Text>
                </Flex>
                <Flex gap="2rem" width="100%" align="center" justify="center">
                    <Flex direction="column" mt="2rem" width="30%">
                        <Flex 
                        borderRadius="10px 10px 0 0"
                        backgroundColor="#E78771">
                            <Text
                            as="h1"
                            fontSize="xl"
                            fontWeight="800"
                            ml="2rem"
                            py="1rem"
                            >
                                Resumen
                            </Text>
                        </Flex>
                        <Flex 
                        width="100%" 
                        direction="row" 
                        wrap="wrap"
                        borderX="2px solid #E9E9E9"
                        borderBottom="2px solid #E9E9E9"
                        paddingBottom="2rem"
                        borderRadius="0 0 10px 10px"
                        >
                            <Stack 
                            mt="2rem" 
                            px="1rem" 
                            gap="0.2rem" 
                            width="50%">
                                    <Text
                                    as="h2"
                                    >
                                        Capacidad del tanque
                                    </Text>
                                    <Text
                                    as="p"
                                    fontWeight="800"
                                    >
                                        {car.Car.specs.tankCapacity}
                                    </Text>
                            </Stack>
                            <Stack
                            mt="2rem"
                            gap="0.5rem"
                            px="1rem" 
                            width="50%"
                            >
                                <Text
                                as="h2"
                                >
                                    Capacidad del tanque
                                </Text>
                                <Text
                                as="p"
                                fontWeight="800"
                                >
                                    {car.Car.specs.tankCapacity}
                                </Text>
                            </Stack>
                            <Stack
                            px="1rem" 
                            mt="2rem"
                            gap="0.5rem"
                            width="50%"
                            >
                                <Text
                                as="h2"
                                >
                                    Tipo de motor
                                </Text>
                                <Text
                                as="p"
                                fontWeight="800"
                                >
                                    {car.Car.specs.typeOfMotor}
                                </Text>
                            </Stack>
                            <Stack
                            mt="2rem"
                            gap="0.5rem"
                            width="50%"
                            px="1rem" 
                            >
                                <Text
                                as="h2"
                                >
                                    Transmisión
                                </Text>
                                <Text
                                as="p"
                                fontWeight="800"
                                >
                                    {car.Car.specs.typeOfTransmision}
                                </Text>
                            </Stack>
                        </Flex>
                    </Flex>
                    <Flex direction="column" mt="2rem" width="60%">
                        <Flex 
                        borderRadius="10px 10px 0 0"
                        backgroundColor="#E78771">
                            <Text
                            as="h1"
                            fontSize="xl"
                            fontWeight="800"
                            ml="2rem"
                            py="1rem"
                            >
                                Equipamiento
                            </Text>
                        </Flex>
                        <Flex 
                        width="100%" 
                        direction="row" 
                        wrap="wrap"
                        borderX="2px solid #E9E9E9"
                        borderBottom="2px solid  #E9E9E9"
                        paddingBottom="2rem"
                        borderRadius="0 0 10px 10px"
                        >
                            <Stack 
                            mt="2rem" 
                            px="1rem" 
                            gap="0.2rem" 
                            width="50%">
                                    <Text
                                    as="h2"
                                    >
                                        Capacidad del tanque
                                    </Text>
                                    <Text
                                    as="p"
                                    fontWeight="800"
                                    >
                                        {car.Car.specs.tankCapacity}
                                    </Text>
                            </Stack>
                            <Stack
                            mt="2rem"
                            gap="0.5rem"
                            px="1rem" 
                            width="50%"
                            >
                                <Text
                                as="h2"
                                >
                                    Capacidad del tanque
                                </Text>
                                <Text
                                as="p"
                                fontWeight="800"
                                >
                                    {car.Car.specs.tankCapacity}
                                </Text>
                            </Stack>
                            <Stack
                            px="1rem" 
                            mt="2rem"
                            gap="0.5rem"
                            width="50%"
                            >
                                <Text
                                as="h2"
                                >
                                    Tipo de motor
                                </Text>
                                <Text
                                as="p"
                                fontWeight="800"
                                >
                                    {car.Car.specs.typeOfMotor}
                                </Text>
                            </Stack>
                            <Stack
                            mt="2rem"
                            gap="0.5rem"
                            width="50%"
                            px="1rem" 
                            >
                                <Text
                                as="h2"
                                >
                                    Transmisión
                                </Text>
                                <Text
                                as="p"
                                fontWeight="800"
                                >
                                    {car.Car.specs.typeOfTransmision}
                                </Text>
                            </Stack>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex direction="column">
                    <Text as="h2" fontSize="2xl" ml="3rem" fontWeight="bold" mt="2rem">
                        Descripcion Adicional
                    </Text>
                    <Text as="p" ml="3rem">
                    El nuevo FIAT PULSE, la última novedad de la marca a nivel regional, llega con diseño, tecnologías y detalles de performance sin igual para brindarte el mejor confort y andar.
                    </Text>
                </Flex>
            </Flex>
        </Flex>
        </>
    )
}

export default CarModel

export const getStaticPaths = async () => {
    const res = await fetch('http://192.168.100.69:9090/api/cars')
    const cars = await res.json()

    const paths = cars.Cars.map((car) => ({
        params: {id: car.id.toString()}
    }))
    return {
        paths,
        fallback: false
    }

}

export const getStaticProps = async ({params}) => {
    const res = await fetch(`http://192.168.100.69:9090/api/cars/${params.id}`)
    const data = await res.json()

    return {
        props: {
            car: data
        }
    }
}
