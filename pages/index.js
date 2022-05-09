import Navbar from '../src/components/Navbar'
import Carousel from '../src/components/Landing/Carousel'
import Cars from '../src/components/Landing/Cars'

export default function Home({cars}) {
  console.log(cars)

  return (
    <>
      <Navbar/>
      <Carousel/>
      <Cars cars={cars}/>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('http://192.168.100.69:9090/api/cars')
  const models = await res.json()
  return {
    props: {
      cars: models
    }
  }
}