import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import { csv } from "d3-fetch";

const ResponsiveSankey = dynamic(() => import('@nivo/sankey').then(mod => mod.ResponsiveSankey), {
    ssr: false
});

const ChartThree = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Load data from CSV
        csv("/data/religious_platform_percent_filtered.csv").then((data) => {
            const nodes = [];
            const links = [];
            const segments = [...new Set(data.map(d => d["Segment Description"]))];

            // Assign distinct colors to each religious segment
            const segmentColors = {
                'Christian': '#95a5a6',
                'Jewish': '#95a5a6',
                'Muslim': '#95a5a6',
                'None/Other': '#95a5a6'
            };

            segments.forEach((segment, index) => {
                nodes.push({ id: segment, color: segmentColors[segment] });
            });

            data.forEach(d => {
                links.push({ source: d["Segment Description"], target: "Facebook", value: +d.Facebook });
                links.push({ source: d["Segment Description"], target: "Instagram", value: +d.Instagram });
                links.push({ source: d["Segment Description"], target: "Linkedin", value: +d.Linkedin });
                links.push({ source: d["Segment Description"], target: "Snapchat", value: +d.Snapchat });
            });

            // Define specific colors for target nodes
            nodes.push({ id: "Facebook", color: "#5aa9e6" });
            nodes.push({ id: "Instagram", color: "#ff6b6b" });
            nodes.push({ id: "Linkedin", color: "#7fc8f8" });
            nodes.push({ id: "Snapchat", color: "#ffe45e" });

            setData({ nodes, links });
        });
    }, []);

    if (data.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ height: '500px', width: '100%' }}>
            <ResponsiveSankey
                data={data}
                margin={{ top: 0, right: 22, bottom: 10, left: 20 }}
                align="justify"
                colors={{ datum: 'color' }} // Use the color specified in the datum
                nodeOpacity={.8}
                nodeThickness={18}
                nodeInnerPadding={3}
                nodeSpacing={24}
                nodeBorderWidth={0}
                nodeBorderColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
                linkOpacity={0.5}
                linkHoverOthersOpacity={0}
                enableLinkGradient
                labelPosition="inside"
                labelOrientation="vertical"
                labelPadding={-30}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1]] }}
                animate={true}
                motionConfig="gentle" // Enable animation with a specific motion configuration
                linkBorderWidth={2} // Add stroke width to links
                linkBorderColor={{ from: 'color', modifiers: [['darker', 1.2]] }} // Add stroke color to links
                tooltip={({ id, value, color }) => (
                    <strong style={{ color }}>
                        {id}: {value}
                    </strong>
                )}
                theme={{
                    labels: {
                        text: {
                            fill: '#000000', // Change label color to black
                            fontSize: 15,
                            fontFamily: 'Arial, Helvetica, sans-serif',
                        }
                    },
                    tooltip: {
                        container: {
                            background: '#ffffff',
                            fontSize: 15,
                            fontFamily: 'Arial, Helvetica, sans-serif',
                        },
                    },
                }}
            />
        </div>
    );
};

export default ChartThree;
