import TodoEditor from '@/components/todo-list/todo-editor';
import TodoItem from '@/components/todo-list/todo-item';
import { useTodosData } from '@/hooks/queries/use-todos-data';

export default function TodoList() {
   const { data: todoIds, isLoading, error } = useTodosData();

   if (error) return <div>Error</div>;
   if (isLoading) return <div>Loading...</div>;

   return (
      <div className="flex flex-col gap-5 p-5">
         <h1 className="text-2xl font-bold">Todo List</h1>
         <TodoEditor />
         {todoIds?.map(id => (
            <TodoItem key={id} id={id} />
         ))}
      </div>
   );
}
