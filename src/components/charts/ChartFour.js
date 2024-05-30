import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { csv } from 'd3-fetch';

const StackedBarChart = () => {
  const [data, setData] = useState([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState(["Facebook", "Instagram", "Linkedin", "Snapchat"]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Load data from CSV
    csv('/data/university_platform_percent_Further_Clean.csv').then(data => {
      const transformedData = data.map(d => ({
        SegmentDescription: d['Segment Description'],
        Facebook: +d.Facebook,
        Instagram: +d.Instagram,
        Linkedin: +d.Linkedin,
        Snapchat: +d.Snapchat
      }));
      setData(transformedData);
    }).catch(error => {
      console.error('Error loading or parsing CSV:', error);
    });

    // Handle window resize
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  const platformColors = {
    Facebook: "#5aa9e6",
    Instagram: "#ff6b6b",
    Linkedin: "#7fc8f8",
    Snapchat: "#ffe45e"
  };

  // Inline styles for legend items
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

  // Function to get responsive tick style for YAxis
  const getYAxisTickStyle = () => {
    return windowWidth <= 600 
      ? { fontSize: 10, fontFamily: 'Arial', textAnchor: 'end' }
      : { fontSize: 15, fontFamily: 'Arial', textAnchor: 'end' };
  };

  // Adjust YAxis width based on window size
  const getYAxisWidth = () => {
    return windowWidth <= 600 ? 100 : 250;
  };

  return (
    <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
      <div style={{ marginBottom: '20px', display: 'flex', flexWrap: 'wrap' }}>
        {selectedPlatforms.map((platform) => (
          <div key={platform} style={legendItemStyle}>
            <div
              style={{ ...legendColorStyle, backgroundColor: platformColors[platform] }}
            ></div>
            <span>{platform}</span>
          </div>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={850}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 0, right: 30, left: 0, bottom: 5 }} // Adjust left margin as needed
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis
            type="category"
            dataKey="SegmentDescription"
            tick={getYAxisTickStyle()} 
            width={getYAxisWidth()} // Dynamically set width
            tickMargin={10} 
          />
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

export default StackedBarChart;
