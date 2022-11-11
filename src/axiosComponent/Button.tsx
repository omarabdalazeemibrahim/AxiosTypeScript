import axios from "axios";
import * as React from "react";
import { useState } from "react";

type User = {
  id: number;
  email: string;
  first_name: string;
};

type GetUsersResponse = {
  data: User[];
};
const [data, setData] = useState([]);
const fetch = async () => {
  try {
    // 👇️ const data: GetUsersResponse
    const { data, status } = await axios.get<GetUsersResponse>(
      "https://reqres.in/api/users",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    console.log(JSON.stringify(data, null, 4));

    // 👇️ "response status is: 200"
    console.log("response status is: ", status);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};

const Button = () => {
  return (
    <>
      <div>Click This Button To Fetch Data </div>
      <button onClick={fetch}> Fetch Data</button>
    </>
  );
};

export default Button;
