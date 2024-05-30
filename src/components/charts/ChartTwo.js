import React, { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Label, ResponsiveContainer } from "recharts";
import { csv } from "d3-fetch";

const ChartTwo = () => {
    const [data, setData] = useState([]);
    const [selectedPlatforms, setSelectedPlatforms] = useState(["Facebook", "Instagram", "Linkedin", "Snapchat"]);

    useEffect(() => {
        // Load data from CSV
        csv("/data/household_income_percent.csv").then((data) => {
            setData(
                data.map((d) => ({
                    SegmentDescription: d["Segment Description"],
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
                <AreaChart data={data} margin={{ top: 0, right: 40, left: 5, bottom: -30 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="SegmentDescription" tick={{ angle: 0, textAnchor: "middle" }} interval={0} height={60} />
                    <YAxis>
                        <Label value="Percentage" angle={-90} position="insideLeft" style={{ textAnchor: "middle" }} />
                    </YAxis>
                    <Tooltip />
                    {selectedPlatforms.map((platform) => (
                        <Area
                            key={platform}
                            type="monotone"
                            dataKey={platform}
                            stackId="1"
                            stroke={platformColors[platform]}
                            fill={platformColors[platform]}
                            fillOpacity={0.7} // Add opacity to the areas
                            isAnimationActive={true} // Enable animation
                        />
                    ))}
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ChartTwo;
