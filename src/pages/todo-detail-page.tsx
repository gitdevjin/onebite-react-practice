import { UseTodoDataById } from '@/hooks/queries/use-todo-data-by-id';
import { useParams } from 'react-router';

export default function TodoDetailPage() {
   const params = useParams();
   const id = String(params.id);

   const { data, isLoading, error } = UseTodoDataById(id, 'DETAIL');

   if (isLoading) return <div>Loading...</div>;
   if (error || !data) return <div>Error</div>;
   return <div>{data.content}</div>;
}
