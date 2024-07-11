import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const SecondGraph = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/Video_Games (1).xlsx'); // Ruta correcta del archivo en la carpeta public
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const arrayBuffer = await response.arrayBuffer();
                const data = new Uint8Array(arrayBuffer);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];

                const jsonData = XLSX.utils.sheet_to_json(worksheet, {
                    header: 1, // Assuming column names are in row 1 (first row)
                    defval: '', // Default value for missing cells
                });

                const cantidadDeseada = 20; // Cambia esto al número deseado

                const columnXData = jsonData.slice(1, cantidadDeseada + 1).map(row => row[5]);
                const columnYData = jsonData.slice(1, cantidadDeseada + 1).map(row => row[0]);
                const columnXDataEU = jsonData.slice(1, cantidadDeseada + 1).map(row => row[6]);
                const columnXDataJP = jsonData.slice(1, cantidadDeseada + 1).map(row => row[7]);
                const columnXDataGW = jsonData.slice(1, cantidadDeseada + 1).map(row => row[9]);
                const midata = {
                    labels: columnYData, columnXDataEU, columnXDataJP, columnXDataGW,
                    datasets: [
                        {
                            label: 'NA Sales',
                            data: columnXData,
                            tension: 0.5,
                            fill: true,
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            pointRadius: 5,
                            pointBorderColor: 'rgba(255, 99, 132)',
                            pointBackgroundColor: 'rgba(255, 99, 132)',
                        },
                        {
                            label: 'EU Sales',
                            data: columnXDataEU,
                            tension: 0.5,
                            fill: true,
                            borderColor: 'rgb(0, 99, 132)',
                            backgroundColor: 'rgba(0, 99, 132, 0.5)',
                            pointRadius: 5,
                            pointBorderColor: 'rgba(0, 99, 132)',
                            pointBackgroundColor: 'rgba(0, 99, 132)',
                        },
                        {
                            label: 'JP Sales',
                            data: columnXDataJP,
                            tension: 0.5,
                            fill: true,
                            borderColor: 'rgb(100, 99, 132)',
                            backgroundColor: 'rgba(100, 99, 132, 0.5)',
                            pointRadius: 5,
                            pointBorderColor: 'rgba(100, 99, 132)',
                            pointBackgroundColor: 'rgba(100, 99, 132)',
                        },
                        {
                            label: 'Global Sales',
                            data: columnXDataGW,
                            tension: 0.5,
                            fill: true,
                            borderColor: 'rgb(0,250,154)',
                            backgroundColor: 'rgba(0,250,154, 0.5)',
                            pointRadius: 5,
                            pointBorderColor: 'rgba(0,250,154)',
                            pointBackgroundColor: 'rgba(0,250,154)',
                        },
                    ],
                };

                setChartData(midata);

            } catch (error) {
                console.error('Error fetching the Excel file:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {chartData ? <Line data={chartData} /> : <p>Loading...</p>}
        </div>
    );
};

export default SecondGraph;
