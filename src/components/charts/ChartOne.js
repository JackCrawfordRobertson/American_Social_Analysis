import React, {useState, useEffect} from "react";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Label} from "recharts";
import {csv} from "d3-fetch";

const ChartOne = () => {
    const [ data, setData ] = useState([]);
    const [ selectedPlatforms, setSelectedPlatforms ] = useState([ "Facebook", "Instagram", "Linkedin", "Snapchat" ]);

    useEffect(() => {
        // Load data from CSV
        csv("/data/device_platform_percent.csv").then((data) => {
            setData(
                data.map((d) => ({
                    SegmentType: d["Segment Type"],
                    Facebook: +d.Facebook,
                    Instagram: +d.Instagram,
                    Linkedin: +d.Linkedin,
                    Snapchat: +d.Snapchat,
                }))
            );
        });
    }, []);

    if (data.length === 0) {
        return <div>Loading...</div>;
    }

    const platformColors = {

        Snapchat: "#ffe45e", // Very light blue
        Instagram: "#ff6b6b", // Light blue
        Linkedin: "#7fc8f8", // Medium blue
        Facebook: "#5aa9e6", // Dark blue
    };

    return (
        <div style={{height: "100%", maxWidth: "auto", display: "flex", flexDirection: "column", alignItems: "left"}}>
            <div
                style={{height: "100%", maxWidth: "auto", display: "flex", flexDirection: "column", alignItems: "left"}}
            >
                <div style={{marginBottom: "20px", minWidth: "100%", display: "flex"}}>
                    {selectedPlatforms.map((platform, index) => (
                        <div key={platform} style={{display: "flex", alignItems: "center", marginRight: "20px"}}>
                            <div
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    backgroundColor: platformColors[platform],
                                    marginRight: "5px",
                                }}
                            ></div>
                            <span>{platform}</span>
                        </div>
                    ))}
                </div>
            </div>

            <BarChart width={700} height={500} data={data} margin={{top: 20, right: 0, left: 2, bottom: 0}}>
                <CartesianGrid strokeDasharray="0 0" />
                <XAxis dataKey="SegmentType" />
                <YAxis>
                    <Label value="Percentage" angle={-90} position="insideLeft" style={{textAnchor: "middle"}} />
                </YAxis>
                <Tooltip />
                {selectedPlatforms.map((platform) => (
                    <Bar key={platform} dataKey={platform} stackId="a" fill={platformColors[platform]} />
                ))}
            </BarChart>
        </div>
    );
};

export default ChartOne;
