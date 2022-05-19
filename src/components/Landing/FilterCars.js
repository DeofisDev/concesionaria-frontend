import { Flex } from "@chakra-ui/react"
import CarCard from "./CarCard"

const FilterCars = ({cars}) => {
    return (
        <Flex 
        width="100%" 
        wrap="wrap"
        justify="center"
        gap="3rem"
        mt="2rem"
        >
            {cars?.Cars?.content?.map((car, index) => 
                <CarCard key={index} car={car}/>
            )}
        </Flex>
    )
}

export default FilterCars