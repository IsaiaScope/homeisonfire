import { cn } from "@cn";
import { Button } from "@shadcn/button";
import { useEffect } from "react";
import { api } from "@api";

// import { type ApiRoute } from "@backend/server";
// import { hc } from "hono/client";

// const client = hc<ApiRoute>("/");

function App() {
  useEffect(() => {
    // fetch("/api/events", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error(`HTTP error! status: ${res.status}`);
    //     }
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //   });

    let a: number = 5;
    a = "";
    console.log(`🧊 ~ a: `, a);
    
    async function fetchData() {
      const res = api.events['dagggta'].$post({
        json: {
          name: "carlo",
        },
      });
      const data = await res.json();
      console.log(data);
    }
    fetchData();
  }, []);
  return (
    <div className={cn("bg-red-700 md:bg-slate-50")}>
      Home
      <Button>Ciao</Button>
    </div>
  );
}

export default App;
