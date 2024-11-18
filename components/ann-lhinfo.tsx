import * as cheerio from "cheerio";
import axios from "axios";

interface ContentType {
  num: number;
  category: string;
  title: string;
  region: string;
  date: string;
  state: string;
  views: number;
  seq: number;
}

export default async function LhGetData(API_URL: string) {
  try {
    const html = await axios.get(API_URL);
    const $ = cheerio.load(html.data);
    let content: ContentType[] = [];
    const annData = $(".bbs_ListA tbody").find("tr");
    annData.map((idx, el) => {
      content[idx] = {
        num: parseInt($(el).find("td:nth-child(1)").text()),
        category: $(el).find(".mVw.cate.col1").text(),
        title: $(el).find(".mVw.bbs_tit").text(),
        region: $(el).find(".mVw.cate.col2").text(),
        date: $(el).find("td:nth-child(6)").text(),
        state: $(el).find(".mVw.stt").text(),
        views: parseInt(
          $(el).find("td:nth-child(9)").text().replace(/,/g, ""),
          10
        ), //, 붙은거 제거 후 number 진행
        seq: parseInt($(el).find("td:nth-child(3) a").attr("data-id1")),
      };
    });
    return content;
  } catch (err) {
    console.log(err);
  }
}
