import * as cheerio from "cheerio";
import axios from "axios";

interface ContentType {
  num: number;
  title: string;
  dept: string;
  date: string;
  views: number;
  seq: number;
}

export default async function ShGetData(API_URL: string) {
  try {
    const html = await axios.get(API_URL);
    const $ = cheerio.load(html.data);
    let content: ContentType[] = [];
    const annData = $("tbody").eq(1).find("tr");
    annData.map((idx, el) => {
      content[idx] = {
        num: parseInt($(el).find("td:nth-child(1)").text()),
        title: $(el).find("td:nth-child(2)").text(),
        dept: $(el).find("td:nth-child(3)").text(),
        date: $(el).find("td:nth-child(4)").text(),
        views: parseInt($(el).find("td:nth-child(5)").text()),
        seq: NormalizationTag($(el).find("td:nth-child(2) a").attr("onclick")),
      };
    });
    return content;
  } catch (err) {
    console.log(err);
  }
}

function NormalizationTag(tag: string) {
  const words = tag;
  const id = words.match(/getDetailView\('(\d+)'\)/)[1];
  return parseInt(id);
}
