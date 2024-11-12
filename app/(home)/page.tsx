import * as cheerio from "cheerio";
import { API_URL } from "../../contants";
import axios from "axios";
import styles from "../../styles/home-list.module.css";

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
    <div className={styles.listTable}>
      <table>
        <colgroup>
          <col style={{ width: "10%" }} />
          <col style={{ width: "auto" }} />
          <col style={{ width: "160px" }} />
          <col style={{ width: "100px" }} />
          <col style={{ width: "80px" }} />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>담당부서</th>
            <th>등록일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {data.map((a, i) => (
            <tr key={i}>
              <td>{a.seq}</td>
              <td className={styles.txtAL}>{a.title}</td>
              <td>{a.dept}</td>
              <td>{a.date}</td>
              <td>{a.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  //return <div>{data}</div>;
}
