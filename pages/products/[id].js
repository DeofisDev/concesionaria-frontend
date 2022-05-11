import { Flex, Text, Image } from "@chakra-ui/react"
import Navbar from "../../src/components/Navbar"

const car = {
    Car: {
        mark: {
            name: "Toyota",
            model: {
                name: "Corolla",
            },
        },
        specs: {
            tankCapacity: "1.6",
            typeOfMotor: "V8",
            typeOfTransmision: "Automatic",
            tankCapacity: "500lts",
        }
    }
}


const CarModel = () => {
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
            fontWeight="600"
            fontSize="4xl"
            justify={["center", "center", "start", "start"]}
            >
                <Text as="h1">
                    {car.Car.mark.name}
                </Text>
                <Text as="h1">
                    {car.Car.mark.model.name}
                </Text>
            </Flex>
            <Flex
            w="90%"
            direction={["column", "column", "row", "row"]}
            >
                <Image 
                minWidth="60%"
                src="https://cdn.asofix.com/companies/13d2ec10-5ef5-11ea-8eed-536328ae2266/products/th-1625243997491.1.jpg"/>
                <Flex 
                justify="center"
                width={["100%", "100%", "40%", "40%"]}
                direction="column">
                    <Text as="h2" fontSize="2xl" fontWeight="800">
                        Descripción 
                    </Text>
                    <Text as="p">
                        Vas a sentir tu corazón latiendo más rápido cuando tus ojos se encuentren con cada detalle del auténtico diseño italiano del Fiat Pulse. En un perfecto equilibrio entre robustez y líneas llamativas, es imposible no enamorarse de esta
                        hermosa novedad.
                    </Text>
                </Flex>
            </Flex>
            <Flex direction="column" align="start" w="90%">
                <Text as="h1" fontSize="2xl" fontWeight="600">
                    Ficha Técnica
                </Text>
                <Flex direction="column">
                    <Text
                    as="h1"
                    >
                        Especificaciones:
                    </Text>
                    <Flex
                    gap="0.5rem"
                    >
                        <Text
                        as="h2"
                        >
                            Capacidad del tanque:
                        </Text>
                        <Text
                        as="p"
                        >
                            {car.Car.specs.tankCapacity}
                        </Text>
                    </Flex>
                    <Flex
                    gap="0.5rem"
                    >
                        <Text
                        as="h2"
                        >
                            Capacidad del tanque:
                        </Text>
                        <Text
                        as="p"
                        >
                            {car.Car.specs.tankCapacity}
                        </Text>
                    </Flex>
                    <Flex
                    gap="0.5rem"
                    >
                        <Text
                        as="h2"
                        >
                            Tipo de motor:
                        </Text>
                        <Text
                        as="p"
                        >
                            {car.Car.specs.typeOfMotor}
                        </Text>
                    </Flex>
                    <Flex
                    gap="0.5rem"
                    >
                        <Text
                        as="h2"
                        >
                            Transmisión:
                        </Text>
                        <Text
                        as="p"
                        >
                            {car.Car.specs.typeOfTransmision}
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
        </>
    )
}

export default CarModel

/* export const getStaticPaths = async () => {
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
*/