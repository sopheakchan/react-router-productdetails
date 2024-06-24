import { Suspense, lazy, useEffect, useState } from "react";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import { LoadingComponent } from "./components/LoadingComponent";
import { BASE_URL } from "./utils/BaseUrl";
const CardComponent = lazy(() => import("./components/Cards/CardComponent"));

function App() {
  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    try {
      setIsLoading(true);
      const respone = await fetch(BASE_URL + "users");
      const data = await respone.json();
      console.log(data.users);
      setUsers(data.users);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => { 
    fetchData();
  }, []);

  return (
    <>
      <div className="py-5">
      </div>

      <div className="flex flex-wrap justify-center gap-7 min-h-screen items-center">
        
         {/* isLoading ? (
         <LoadingComponent />
        ) : ( */}

        <Suspense fallback ={<LoadingComponent/>}>
        {users.map((user) => (
            <div key={user?.id}>
              <CardComponent profile={user.image} lastname={user.lastName}/>
            </div>
          )
          // )
        )}
       </Suspense>
      </div>
    </>
  );
}

export default App;
