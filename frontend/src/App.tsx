import { cn } from "@cn";
import { Button } from "@shadcn/button";
import { useEffect } from "react";

function App() {
    useEffect(() => {
    fetch("/api/events", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className={cn("bg-red-700 md:bg-slate-50")}>
      Home
      <Button>Ciao</Button>
    </div>
  );
}

export default App;
