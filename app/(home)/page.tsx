import VIEW_URL, { API_URL } from "../../contants";
import styles from "../../styles/home-list.module.css";
import GetData from "../../components/ann-info";

export default async function Home() {
  //const data = await getData(API_URL);
  const data = await GetData(API_URL);
  console.log(data);
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
              <td>{a.num}</td>
              <td className={styles.txtAL}>
                <a href={VIEW_URL(a.seq)}>{a.title}</a>
              </td>
              <td>{a.dept}</td>
              <td>{a.date}</td>
              <td>{a.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
