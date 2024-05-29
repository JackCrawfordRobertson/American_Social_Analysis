import dynamic from "next/dynamic";
import React from "react";
import styles from "../styles/Home.module.css";

// Dynamic Imports for Charts
import ChartOne from "../src/components/charts/ChartOne";

//Comps
import BodyCopy from "../src/components/BodyCopy";
import PullQuote from "../src/components/PullQuote";
import SubHead from "../src/components/SubHead";

const Home = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.body}>
                    <h1 className={styles.mainTitle}>
                        Digital Protest: How Social Media Shapes University Activism Amid the Gaza Conflict
                    </h1>

                    <h3 className={styles.date}>31 May, 2024</h3>

                    <BodyCopy
                        htmlText="With protests and demonstrations taking place in universities across the United States in response to Israel's war on Gaza following the 7th October attacks, what role has social media played in the coordination and communication of student activities across the United States? <br /><br />
                        This question inspired by our conversation, I decided to delve deeper into the role of social media in these protests."
                    />

                    <PullQuote
                        text="“Can the preferences of Snapchat, Instagram, and Facebook reveal deeper insights into student activism?”"
                        author="My Curiosity"
                    />

                    <BodyCopy htmlText="  By examining a survey of 9,491 US Millennials conducted by Whatsgoodly Mobile, I have explored the historical usage of key social media platforms, including Snapchat, Instagram, Facebook, and LinkedIn. <br /><br /> This data set not only tracks which platforms are most favoured but also considers the religious orientation of the participants and the economic mobility of their households. The findings offer some intriguing insights, especially for a socail media users like myself based in the United Kingdom." />

                    <SubHead
                        sectionNumber="High-pass"
                        title="Social Media Usage by Device Type
"
                    />

                    <h3 className={styles.date}>Hover over each bar to see accurate percentage</h3>

                    <ChartOne />

                    <BodyCopy
                        htmlText="Today's digital age has a massive focus on mobile devices and have consequently become the primary means of accessing social media, especially among university students. <br /><br />This analysis reveals that Snapchat is the most popular platform on mobile devices, accounting for 57.85% of usage, followed by Instagram at 27.30%. Facebook and LinkedIn trail behind at 12.61% and 2.24%, respectively. This indicates that students prefer more visually engaging and instant forms of communication while on the go.<br /><br /> In contrast, when using web-based platforms, Facebook leads with 27.35% usage, followed closely by Snapchat at 40.17%, Instagram at 25.64%, and LinkedIn at 6.84%. The higher Facebook usage on web platforms might be attributed to the more detailed content and longer form posts that are easier to consume on a larger screen."
                    />


                    
                </div>
            </div>
        </div>
    );
};

export default Home;
