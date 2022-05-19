export const getCars = async (filters) => {
    console.log(filters)
    const res = await fetch('http://192.168.100.69:9090/api/cars?start=1&end=2')
    const data = await res.json()
    console.log(data)
    return data
}
