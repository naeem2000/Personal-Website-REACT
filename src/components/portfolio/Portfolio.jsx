import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { page1Portfolio, page2Portfolio } from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("page1")
    const [data, setData] = useState([]);
    const list = [
        {
           id: "page1",
           title: "Page1",
        },
        {
            id: "page2",
            title: "Page2",
         },
    ];

    useEffect(() => {
        switch (selected) {
            case "page1":
            setData(page1Portfolio);
            break;
            case "page2":
            setData(page2Portfolio);
            break;
            default:
                setData(page1Portfolio);
        }
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            
            <div className="container">
                {data.map((d) => (
                <div className="item">
                    <a target="_blank" rel="noreferrer" href={d.Handle}>
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                    </a>
                </div>
                ))}
            </div>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                    title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                    />
                ))}
            </ul>
        </div>
    );
}
