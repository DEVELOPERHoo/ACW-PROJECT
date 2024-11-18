export const SH_API_URL =
  "https://www.i-sh.co.kr/main/lay2/program/S1T297C4476/www/brd/m_247/list.do?page=1&seq=&itm_seq_1=0&multi_itm_seq=&multi_itm_seqsStr=&isRecrnoti=Y&notType1=2&splyTy=&annType1=on&recrnotiState=now&srchFr=&srchTo=&recSrchFr=&recSrchTo=&srchTp=0&srchWord=";

export default function SH_VIEW_URL(seq: number): string {
  return `https://www.i-sh.co.kr/main/lay2/program/S1T297C4476/www/brd/m_247/view.do?page=1&seq=${seq}&itm_seq_1=1&multi_itm_seq=2&multi_itm_seqsStr=&isRecrnoti=Y&notType1=2&splyTy=&annType1=on&recrnotiState=now&srchFr=&srchTo=&recSrchFr=&recSrchTo=&srchTp=0&srchWord=`;
}

export const LH_API_URL =
  "https://apply.lh.or.kr/lhapply/apply/wt/wrtanc/selectWrtancList.do?panId=&ccrCnntSysDsCd=&srchUppAisTpCd=061339&uppAisTpCd=061339&aisTpCd=&srchAisTpCd=&prevListCo=&mi=1026&currPage=1&srchY=Y&indVal=N&viewType=&srchFilter=N&mvinQf=0&cnpCd=11&panSs=&schTy=0&startDt=2024-09-19&endDt=2024-11-19&panNm=&listCo=50";

export function LH_VIEW_URL(seq: number): string {
  return `https://apply.lh.or.kr/lhapply/apply/wt/wrtanc/selectWrtancInfo.do?panId=${seq}&ccrCnntSysDsCd=03&srchUppAisTpCd=061339&uppAisTpCd=13&aisTpCd=26&srchAisTpCd=&prevListCo=&mi=1026&currPage=1&srchY=N&indVal=N&viewType=&srchFilter=N&mvinQf=0&cnpCd=11&panSs=&schTy=0&startDt=2024-09-19&endDt=2024-11-19&panNm=&listCo=50`;
}
