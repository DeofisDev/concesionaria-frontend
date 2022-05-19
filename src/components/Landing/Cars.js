import { 
    Button, 
    Center, 
    Text, 
    Flex, 
    Input, 
    Select,
} from "@chakra-ui/react"
import FilterCars from "./FilterCars"
import FiltersMobile from "./FiltersMobile"
import { useState } from "react"
import Filters from "./Filters"
import { getCars } from '../helpers/Apihelper'


const Cars = ({cars}) => {
    const [filters, setFilters] = useState({
        marks: "",
        models: "",
        versions: "",
        transmission: "",
        fuel: "",
        segments: ""
    })
    console.log(filters)
    
    /*
    useEffect(() => {
        const cars = async () => { 
            getCars(filters)
        }
        cars()
    }, [filters])
    */

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
                <Filters filters={filters} setFilters={setFilters}/>
                <FiltersMobile filters={filters} setFilters={Filters}/>
                <FilterCars cars={cars}/>
            </Flex>
        </Center>
        </>
    )
}

export default Cars