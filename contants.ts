export const API_URL =
  "https://www.i-sh.co.kr/main/lay2/program/S1T297C4476/www/brd/m_247/list.do?page=1&seq=&itm_seq_1=0&multi_itm_seq=&multi_itm_seqsStr=&isRecrnoti=Y&notType1=2&splyTy=&annType1=on&recrnotiState=now&srchFr=&srchTo=&recSrchFr=&recSrchTo=&srchTp=0&srchWord=";

export default function VIEW_URL(seq: number): string {
  return `https://www.i-sh.co.kr/main/lay2/program/S1T297C4476/www/brd/m_247/view.do?page=1&seq=${seq}&itm_seq_1=1&multi_itm_seq=2&multi_itm_seqsStr=&isRecrnoti=Y&notType1=2&splyTy=&annType1=on&recrnotiState=now&srchFr=&srchTo=&recSrchFr=&recSrchTo=&srchTp=0&srchWord=`;
}
