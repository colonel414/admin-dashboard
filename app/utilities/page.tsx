'use client';
import React, { useState, useEffect } from 'react';
import Chart from './chart';

const initialUsageData = {
    water: 10, // gallons
    electricity: 10, // kWh
};

const UsagePage: React.FC = () => {
    const [usageData, setUsageData] = useState(initialUsageData);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setUsageData(prevUsageData => ({
                water: prevUsageData.water * 1.10, // Increase by 2% every hour
                electricity: prevUsageData.electricity * 1.10, // Increase by 2% every hour
            }));
        }, 60000); // 1 hour in milliseconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-8">Utilities Usage</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white shadow-md rounded-md p-6">
                    <h2 className="text-lg font-bold mb-2">Water Usage</h2>
                    <p className="text-xl">{usageData.water.toFixed(2)} gallons</p>
                </div>
                <div className="bg-white shadow-md rounded-md p-6">
                    <h2 className="text-lg font-bold mb-2">Electricity Usage</h2>
                    <p className="text-xl">{usageData.electricity.toFixed(2)} kWh</p>
                </div>
            </div>
            {/* <Chart /> */}
        </div>

    );
};

export default UsagePage;
