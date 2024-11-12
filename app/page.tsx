import * as cheerio from "cheerio";
import { API_URL } from "../contants";
import axios from "axios";

interface ContentType {
  seq: number;
  title: string;
  dept: string;
  date: string;
  views: number;
}

const getData = async (API_URL: string) => {
  try {
    const html = await axios.get(API_URL);
    const $ = cheerio.load(html.data);
    let content: ContentType[] = [];
    const BB = $("tbody").eq(1).find("tr");
    BB.map((idx, el) => {
      content[idx] = {
        seq: parseInt($(el).find("td:nth-child(1)").text()),
        title: $(el).find("td:nth-child(2)").text(),
        dept: $(el).find("td:nth-child(3)").text(),
        date: $(el).find("td:nth-child(4)").text(),
        views: parseInt($(el).find("td:nth-child(5)").text()),
      };
    });
    return content;
  } catch (err) {
    console.log(err);
  }
};

export default async function Home() {
  const data = await getData(API_URL);
  // jsquery map이랑 javascript의 map은 다르다
  return (
    <>
      {data.map((a, i) => (
        <div>
          <span>{a.seq}</span>
          <h3 key={i}>{a.title}</h3>
        </div>
      ))}
    </>
  );
  //return <div>{data}</div>;
}
