const getCars = async () => {
    const response = await fetch('/api/cars');
    const data = await response.json();
    return data;
}

const filteredCars = async ({filterByModel, filterByYear, filterByMark}) => {
    const response = await fetch(`/api/cars?model=${filterByModel}&year=${filterByYear}&mark=${filterByMark}`);
    const data = await response.json();
    return data;
}
