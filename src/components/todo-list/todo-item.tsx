import { useDeleteTodo } from '@/store/todos';
import { Button } from '../ui/button';
import type { Todo } from '@/types';

export default function TodoItem({ id, content }: Todo) {
   const deleteTodo = useDeleteTodo();
   const handleDeleteClick = () => {
      deleteTodo(id);
   };
   return (
      <div className="flex items-center justify-between border p-2">
         {content}{' '}
         <Button variant={'destructive'} onClick={handleDeleteClick}>
            Delete
         </Button>
      </div>
   );
}
