// Grid 테이블 구조 설정
// field : grid 항목 명
// headerName : 항목이 출력되는 이름
// width : grid 필드 넓이
// type : 출력될 데이터의 형식
// editable : 수정가능여부
export const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "field1",
    headerName: "field1",
    width: 150,
    type: "number",
    editable: true,
  },
  {
    field: "field2",
    headerName: "field2",
    width: 150,
    type: "number",
    editable: true,
  },
  {
    field: "field3",
    headerName: "field3",
    width: 150,
    type: "number",
    editable: true,
  },
  {
    field: "field4",
    headerName: "field4",
    width: 150,
    type: "number",
    editable: true,
  },
  {
    field: "field5",
    headerName: "field5",
    width: 150,
    type: "number",
    editable: true,
  },
];