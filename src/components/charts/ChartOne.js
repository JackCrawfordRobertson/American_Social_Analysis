import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Label, ResponsiveContainer } from "recharts";
import { csv } from "d3-fetch";

const ChartOne = () => {
    const [data, setData] = useState([]);
    const [selectedPlatforms, setSelectedPlatforms] = useState(["Facebook", "Instagram", "Linkedin", "Snapchat"]);

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
        Snapchat: "#ffe45e",
        Instagram: "#ff6b6b",
        Linkedin: "#7fc8f8",
        Facebook: "#5aa9e6",
    };

    const legendItemStyle = {
        display: "flex",
        alignItems: "center",
        marginRight: "20px",
        marginBottom: "10px"
    };

    const legendColorStyle = {
        width: "20px",
        height: "20px",
        marginRight: "5px",
    };

    return (
        <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "left" }}>
            <div style={{ marginBottom: "20px", display: "flex", flexWrap: "wrap" }}>
                {selectedPlatforms.map((platform) => (
                    <div key={platform} style={legendItemStyle}>
                        <div style={{ ...legendColorStyle, backgroundColor: platformColors[platform] }}></div>
                        <span>{platform}</span>
                    </div>
                ))}
            </div>

            <ResponsiveContainer width="100%" height={500}>
                <BarChart data={data} margin={{ top: 10, right: 0, left: 2, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="0 0" />
                    <XAxis dataKey="SegmentType" />
                    <YAxis>
                        <Label value="Percentage" angle={-90} position="insideLeft" style={{ textAnchor: "middle" }} />
                    </YAxis>
                    <Tooltip />
                    {selectedPlatforms.map((platform) => (
                        <Bar
                            key={platform}
                            dataKey={platform}
                            stackId="a"
                            fill={platformColors[platform]}
                            fillOpacity={0.7} // Add opacity to the bars
                            isAnimationActive={true} // Enable animation
                        />
                    ))}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ChartOne;
