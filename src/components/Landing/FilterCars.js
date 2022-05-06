import { Flex } from "@chakra-ui/react"
import CarCard from "./CarCard"

const cars = [
    "https://www.toyota.com.ar/img_cache/widen_230_storage-submodels-caylrc6htrpng_.png",
    "https://www.toyota.com.ar/img_cache/widen_230_storage-submodels-caylrc6htrpng_.png",
    "https://www.toyota.com.ar/img_cache/widen_230_storage-submodels-caylrc6htrpng_.png",
    "https://www.toyota.com.ar/img_cache/widen_230_storage-submodels-caylrc6htrpng_.png",
    "https://www.toyota.com.ar/img_cache/widen_230_storage-submodels-caylrc6htrpng_.png",
    "https://www.toyota.com.ar/img_cache/widen_230_storage-submodels-caylrc6htrpng_.png",
    "https://www.toyota.com.ar/img_cache/widen_230_storage-submodels-caylrc6htrpng_.png",
    "https://www.toyota.com.ar/img_cache/widen_230_storage-submodels-caylrc6htrpng_.png",
    "https://www.toyota.com.ar/img_cache/widen_230_storage-submodels-caylrc6htrpng_.png",
    "https://www.toyota.com.ar/img_cache/widen_230_storage-submodels-caylrc6htrpng_.png",
    "https://www.toyota.com.ar/img_cache/widen_230_storage-submodels-caylrc6htrpng_.png",
    "https://www.toyota.com.ar/img_cache/widen_230_storage-submodels-caylrc6htrpng_.png",
]

const FilterCars = () => {
    return (
        <Flex 
        width="100%" 
        wrap="wrap"
        justify="center"
        gap="3rem"
        mt="2rem"
        >
            {cars.map((car, index) => 
                <CarCard key={index} car={car}/>
            )}
        </Flex>
    )
}

export default FilterCars