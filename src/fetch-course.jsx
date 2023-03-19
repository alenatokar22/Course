const URL = "https://api.wisey.app/api/v1/core/preview-courses";

const header = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
const body =
  "eyJzdWIiOiJkOTRlNjg4NS1kM2U5LTQwY2EtYTVjYy01MDRkNjZlZDVlN2QiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MDQ3NjIsImV4cCI6MTY3OTYwNDc2Mn0";
const signature = "Qw3LF39CDp27ZxoGzt5rikJM_OTx0eNaoyFFLxxrXUM";
const token = [header, body, signature].join(".");

async function fetchData(fetchURL) {
  const headers = { Authorization: "Bearer" + " " + token };
  let response = await fetch(fetchURL, { headers });
  let data = await response.json();
  data = JSON.stringify(data);
  data = JSON.parse(data);

  return data;
}

export async function fetchCourse({ params }) {
  const idCourse = params.courseId;
  const data = await fetchData([URL, idCourse].join("/"));

  return data ? data : {};
}
