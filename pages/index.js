import dynamic from "next/dynamic";
import React from "react";
import styles from "../styles/Home.module.css";

// Dynamic Imports for Charts
import ChartOne from "../src/components/charts/ChartOne";
import ChartTwo from "../src/components/charts/ChartTwo";
import ChartThree from "../src/components/charts/ChartThree";
import ChartFour from "../src/components/charts/ChartFour";

//Comps
import BodyCopy from "../src/components/BodyCopy";
import PullQuote from "../src/components/PullQuote";
import SubHead from "../src/components/SubHead";
import Footer from "../src/components/Footer";

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

                    <BodyCopy htmlText="  By examining a survey of 9,491 US Millennials conducted by Whatsgoodly Mobile, I have explored the historical usage of key social media platforms, including Snapchat, Instagram, Facebook, and LinkedIn. <br /><br /> This data set not only tracks which platforms are most favoured but also considers the religious orientation of the participants and the economic mobility of their households. The findings offer some intriguing insights, especially for a socail media users like myself based in the United Kingdom." />

                    <PullQuote
                        text="“You open your phone and notice a notification badge on Instagram, Facebook, Snapchat, and LinkedIn. Which one do you click on first?”"
                        author="The Opening Question"
                    />

                    <SubHead
                        sectionNumber="High-pass"
                        title="Social Media Usage by Device Type
"
                    />

                    <h3 className={styles.date}>Hover over each bar to see accurate percentage</h3>

                    <ChartOne />

                    <BodyCopy htmlText="Today's digital age has a massive focus on mobile devices and have consequently become the primary means of accessing social media, especially among university students. <br /><br /> This analysis reveals that Snapchat is the most popular platform on mobile devices, accounting for 57.85% of usage, followed by Instagram at 27.30%. Facebook and LinkedIn trail behind at 12.61% and 2.24%, respectively. This indicates that students prefer more visually engaging and instant forms of communication while on the go.<br /><br /> In contrast, when using web-based platforms, Facebook leads with 27.35% usage, followed closely by Snapchat at 40.17%, Instagram at 25.64%, and LinkedIn at 6.84%. The higher Facebook usage on web platforms might be attributed to the more detailed content and longer form posts that are easier to consume on a larger screen." />

                    <SubHead
                        sectionNumber="Lower pass"
                        title="Impact of Household Income"
                    />

                    <h3 className={styles.date}>Hover over each bracket to view economic mobility vs social media usage</h3>

                    <ChartTwo />

                    <BodyCopy htmlText="Household income has interesting influences on social media platform usage among university students. For students from households earning less than $50K annually, Snapchat dominates with 61.96% usage, followed by Instagram at 24.54%. Facebook and LinkedIn see lower engagement at 10.43% and 3.07%, respectively.<br /><br /> In the middle-income bracket ($50K-$90K), Snapchat remains popular at 55.66%, while Instagram usage drops to 21.70%. Interestingly, Facebook usage increases to 18.55%, suggesting a more balanced distribution of platform preference.<br /><br /> For households earning over $240K,Snapchat leads with 47.94%, followed by Instagram at 28.87%, Facebook at 18.56%, and LinkedIn at 4.64%. This trend suggests that students from higher-income households might prefer the curated and aesthetic nature of Snapchat and Instagram over other platforms." />

                    <SubHead
                        sectionNumber="Close Pass"
                        title="Influence of Religious Orientation"
                    />

                    <h3 className={styles.date}>Hover over each religious orientation to explore social media usage</h3>

                    <ChartThree />

                    <BodyCopy htmlText="Religious orientation also plays a crucial role in determining social media platform preferences. Among Christian students, Snapchat is used by 49.05%, Instagram by 29.29%, Facebook by 16.90%, and LinkedIn by 4.76%.<br /><br /> Among Muslim students, Snapchat sees the highest usage at 64.71%, with Instagram at 17.65%, Facebook at 11.76%, and LinkedIn at 5.88%. The preference for Snapchat could be linked to its privacy features and ephemeral nature.<br /><br /> For Jewish students, the platform usage shifts significantly, with Snapchat at 46.15%, Facebook at 35.16%, Instagram at 13.19%, and LinkedIn at 5.49%. This higher Facebook usage might be due to community-focused content and group interactions." />

                    <SubHead
                        sectionNumber="Bottom line"
                        title="University-Specific Trends"
                    />

                    <h3 className={styles.date}>Hover over each bracket to view economic mobility vs social media usage</h3>

                    <ChartFour />

                    <BodyCopy htmlText="Two universities that have seen more intense police presence at the demonstrations are the University of Texas and Emory University. These institutions have exhibited distinctive patterns in social media usage among their students.<br /><br />At the University of Texas, Snapchat leads with 48.48% usage, followed by Instagram at 24.24%, Facebook at 15.15%, and LinkedIn at 12.12%. This distribution indicates a balanced engagement across various platforms, with a notable presence on LinkedIn suggesting that students value professional networking alongside their social interactions.<br /><br />At Emory University, Snapchat is the most used platform at 41.38%, while Instagram and Facebook both have 27.59% usage. LinkedIn usage is lower at 3.45%. This pattern reflects a diverse engagement with different types of social media, indicating that Emory students utilize a mix of platforms for both personal and professional purposes.<br /><br />Similarly, at Cal Poly San Luis Obispo, Snapchat usage is exceptionally high at 73.08%, followed by Instagram at 19.23%, and Facebook at 7.69%. LinkedIn usage is negligible here, reflecting a strong preference for instant and visual communication methods." />

                    <div style={{ backgroundColor: "#33333330", width: "auto", height: "2px" }}></div>

                    <SubHead
                        sectionNumber=""
                        title="Conclusion"
                    />


                    <BodyCopy htmlText="In summary, this analysis reveals historical usage patterns on social media platforms based on device type, household income, religious orientation, and university affiliation across the United States education system. These insights are vital for understanding how students communicate and organise, especially in the context of the ongoing protests related to the Gaza War. The scarcity of data from social media companies on usage numbers creates an informational vacuum, leaving us ill-informed and vulnerable to the algorithmic mechanisms these companies employ. By leveraging community-collected data like the one presented here, we can begin to map personal viewing trends. This approach will hopefully lead to a deeper understanding of the mechanics behind so-called shadow banning." />

                </div>

            </div>
            <Footer />

        </div>
        
    );
};

export default Home;
