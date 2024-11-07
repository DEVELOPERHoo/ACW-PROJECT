import * as cheerio from "cheerio";
import { API_URL } from "../contants";
import axios from "axios";

interface ContentType {
  data: string;
}

const getData = async (API_URL: string) => {
  try {
    const html = await axios.get(API_URL);
    const $ = cheerio.load(html.data);
    // const BB = $(".txtL a").text();
    const BB = $("tbody").eq(1).text();
    return BB;
  } catch (err) {
    console.log(err);
  }
};

export default async function Home() {
  const data = await getData(API_URL);
  return <div>{data}</div>;
}
