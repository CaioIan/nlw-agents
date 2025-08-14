import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Badge } from './ui/badge'
import { ArrowRight } from 'lucide-react'
import { dayjs } from '@/lib/dayJs'
import { useRooms } from '@/http/use-rooms'

export function RoomList() {
  const { data, isLoading } = useRooms()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Salas Recentes</CardTitle>
        <CardDescription>
          Acesso rápido às salas que você criou ou participou recentemente.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {isLoading && (
          <p className="text-muted-foreground text-sm">Carregando Salas...</p>
        )}
        {data?.map((room) => {
          return (
            <Link
              key={room.id}
              to={`/rooms/${room.id}`}
              className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent/50"
            >
              <div className="flex-1 flex flex-col gap-1">
                <h3 className="font-medium">{room.name}</h3>

                <div className="flex items-center gap-2">
                  <Badge variant={'secondary'} className="text-xs">
                    Criada em {dayjs(room.createdAt).format('YYYY')}
                  </Badge>

                  <Badge variant={'secondary'} className="text-xs">
                    {room.questionsCount} Pergunta(s)
                  </Badge>
                </div>
              </div>
              <span className="flex items-center gap-2">Entrar</span>
              <ArrowRight className="size-3" />
            </Link>
          )
        })}
      </CardContent>
    </Card>
  )
}
