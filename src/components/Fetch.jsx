import React, { useState, useEffect } from "react";

const URL = "https://api.wisey.app/api/v1/core/preview-courses";

const header = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
const body =
  "eyJzdWIiOiJkOTRlNjg4NS1kM2U5LTQwY2EtYTVjYy01MDRkNjZlZDVlN2QiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MDQ3NjIsImV4cCI6MTY3OTYwNDc2Mn0";
const signature = "Qw3LF39CDp27ZxoGzt5rikJM_OTx0eNaoyFFLxxrXUM";
const token = [header, body, signature].join(".");

export const getFetchData = () => {
  const [dataResponse, setDataResponse] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const headers = { Authorization: "Bearer" + " " + token };
    fetch(URL, { headers })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error(NETWORK_ERROR_CODE, { cause: response.status });
      })
      .then(setDataResponse)
      .catch(setError);
  }, []);

  return { dataResponse, error };
};
