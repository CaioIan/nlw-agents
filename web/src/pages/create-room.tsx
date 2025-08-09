import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"

type GetRoomsAPIResponse = Array<{
  id: string;
  name: string;
}>

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/rooms")
      const result: GetRoomsAPIResponse = await response.json()

      return data;
    },
  })

  return <div>
    <h1>Create Room</h1>

    {
      isLoading && <p>Loading...</p>
    }

    <Link className="underline" to="/room">
      Go to Room
    </Link>
  </div>
}