import React, {useEffect, useState} from 'react'
import './Calculate.css'
import { NavLink } from 'react-router-dom';


const carsData = [
    {
        autoType: "МАЗ-537",
        id: "5501 К5",
        massa: 50,
        fuel: 125,
        additionalCoefficient: 1.3,
        coefficientRoad: 10,
        tankBuckValue: 800,
        oilType: "М4042",
        oilLosing: 4.50,
        freezingType: "А-40",
        frezzingLosing: 0.68
    },
    {
        autoType: "МАЗ-537",
        id: "5601 К5",
        massa: 50,
        fuel: 125,
        additionalCoefficient: 1.3,
        coefficientRoad: 10,
        tankBuckValue: 800,
        oilType: "М4042",
        oilLosing: 4.50,
        freezingType: "А-40",
        frezzingLosing: 0.68
    },
    {
        autoType: "КРАЗ-6446",
        id: "7700 К5",
        massa: 30,
        fuel: 65,
        additionalCoefficient: 1.25,
        coefficientRoad: 5,
        tankBuckValue: 600,
        oilType: "15W40",
        oilLosing: 2.70,
        freezingType: "M-40",
        frezzingLosing: 0.5
    }
]


// Дані вантажів з таблиці "Вантаж"
let cargoData = [
    { id: 1, type: 'без вантажу', weight: 0 },
    { id: 2, type: 'БМП-1', weight: 13 },
    { id: 3, type: 'БТР', weight: 17 },
    { id: 4, type: 'Т-64', weight: 43 },
    { id: 5, type: 'Т-72', weight: 45 },
    { id: 6, type: 'ГМЗ-3', weight: 28 },
    { id: 7, type: 'МТЛБ', weight: 14 },
];


export default function Calculate() {
 
    const [routesNumber, setRoutesNumber] = useState(0)
    const [auto, setAuto] = useState(0)
    const [routeInputs, setRouteInputs] = useState([])
    const [cargo, setCargo] = useState(0)
    const [fuelCount, setFuelCount] = useState(0)
    const [result, setResult] = useState('')

    // const [routesNumber, setRoutesNumber] = useState(1)

    useEffect(() => {
        if(routesNumber > 0) {
            setFuelCount(0)
        }
    }, [routesNumber])

    console.log(routeInputs);

    const handleRouteChange = (index, value) => {
        const routeInputsCopy = [...routeInputs]
        if (!routeInputsCopy[index]) {
            routeInputsCopy[index] = {
                road: 0,
                offRoading: 0
            }
        }

        routeInputsCopy[index].road = +value
        setRouteInputs(routeInputsCopy)
    }

    const handleOffRoadingChange = (index, value) => {
        const routeInputsCopy = [...routeInputs]
        if (!routeInputsCopy[index]) {
            routeInputsCopy[index] = {
                road: 0,
                offRoading: 0
            }
        }

        routeInputsCopy[index].offRoading = +value
        setRouteInputs(routeInputsCopy)
    }

    const handleCargoChange = (e) => {
        if(auto !== 0 && carsData[auto].massa < cargoData[+e.target.value].weight) {
            return alert('Вага завелика!')
        }
        setCargo(+e.target.value)
    }



    const handleClick = () => {
        const selectedAuto = carsData[auto]
        const selectedCargo = cargoData[cargo]

        let totalRoadsKilometers = 0
        let totalOffRoadesKilometers = 0

        for (let i = 0; i < routeInputs.length; i++) {
            totalRoadsKilometers += routeInputs[i].road
            totalOffRoadesKilometers += routeInputs[i].offRoading
        }

        let part2 = (100 - selectedAuto.coefficientRoad) / 100

        if(routesNumber > 0) {
            let part1 = (totalRoadsKilometers * (selectedAuto.fuel + selectedAuto.additionalCoefficient * selectedCargo.weight)) / 100
            let part3 = (totalOffRoadesKilometers * (selectedAuto.fuel + selectedAuto.additionalCoefficient * selectedCargo.weight)) / 100

            let result2 = (part1 * part2 + part3).toFixed(2)

            setResult(result2 + " л. палива")

        } else {
            let part1 = fuelCount / ((selectedAuto.fuel + selectedAuto.additionalCoefficient * selectedCargo.weight) / 100)
            let result2 = (part1 / part2).toFixed(2)
            setResult(result2 + "km")
        }
    }


    return (
        <div className='main-wrapper'>
            <div className='header-program'>
            <NavLink to="/" className="home-link">на ГОЛОВНУ сторінку</NavLink> 
                <h1 className='name-program'>ПРОГРАМА ДЛЯ РОЗРАХУНКУ КІЛОМЕТРАЖУ і/або РОЗХОДУ ПАЛИВА</h1>
            </div>
            <div className="container-program">
                <div className='box-wrapper-1'>
                    <div className='photo-cars'>
                        <div className="polaroid rotate_right">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/2S7_Pion_and_KrAZ-6446%2C_Kyiv_2018%2C_53.jpg/640px-2S7_Pion_and_KrAZ-6446%2C_Kyiv_2018%2C_53.jpg" alt="Kraz" width="260" height="180" />
                            <p className="caption"><a href="https://uk.wikipedia.org/wiki/%D0%9A%D1%80%D0%90%D0%97-6446">КрАЗ-6446</a></p>
                        </div>
                        <div className="polaroid rotate_left">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/MAZ-537G_Hun_2010_1.jpg/640px-MAZ-537G_Hun_2010_1.jpg" alt="Kraz" width="260" height="200" />
                            <p className="caption"><a href="https://uk.wikipedia.org/wiki/%D0%9C%D0%90%D0%97-537">МАЗ-537</a></p>
                        </div>
                    </div>

                </div>



                <div className='box-wrapper-2'>
                    <div className='select'>
                        <div className='cars'>
                            <label htmlFor="carSelect">Авто:</label>
                            <select id="carSelect" onChange={(e) => setAuto(+e.target.value)}>
                                {carsData.map((item, index) => (<option value={index}>{item.autoType}({item.id}, {item.massa}т)</option>))}
                            </select>
                        </div>
                        <div className='cargo'>
                            <label htmlFor="cargoSelect">Вантаж:</label>
                            <select id="cargoSelect" onChange={handleCargoChange}>
                                {cargoData.map((item, index) => (<option value={index}>{item.type} ({item.weight}т)</option>))}
                            </select>
                        </div>
                    </div>


                    <div id="routeInputs">
                        {new Array(routesNumber).fill(0).map((value, index) => (
                            <><h2 className='way'>Маршрут {index + 1}</h2>

                                <div className='routes'>
                                    <div className='route'>
                                        <label htmlFor="route1Distance">Траса:</label>
                                        <input onChange={(e) => handleRouteChange(index, e.target.value)} type="number" id="route1Distance" placeholder='вкажіть відстань, км' />
                                    </div>
                                    <div className='offroad'>
                                        <label htmlFor="route1Offroad">Бездоріжжя:</label>
                                        <input onChange={(e) => handleOffRoadingChange(index, e.target.value)} type="number" id="route1Offroad" placeholder='вкажіть відстань, км' />
                                    </div>
                                </div></>
                        ))}

                        <div className='btns'>
                            <h3>Додати маршрут</h3>
                            <button className='addBtn' onClick={() => setRoutesNumber(routesNumber + 1)}>+</button>
                            <button className='subtractBtn' onClick={() => setRoutesNumber(routesNumber > 0 ? routesNumber - 1 : 0)}>-</button>
                        </div>
                    </div>



                    <div className='amountFuel'>
                        <label htmlFor="fuelAmount">Кількість палива:</label>
                        <input disabled={routesNumber > 0} value={fuelCount} type="number" id="fuelAmount" placeholder='кількість літрів' onChange={(e) => setFuelCount(e.target.value)} /><br />
                    </div>
                    <button id="calculateBtn" onClick={handleClick}>Порахувати</button>

                    {result.length > 0 && (
                        <div className='result'>{result}</div>
                    ) }

                </div>
            </div>
            <div className='header-program'>
            <NavLink to="/" className="home-link">на ГОЛОВНУ сторінку</NavLink>
                <h1>ПРОГРАМА ДЛЯ РОЗРАХУНКУ КІЛОМЕТРАЖУ і/або РОЗХОДУ ПАЛИВА</h1>
            </div>
        </div>
    )
}
