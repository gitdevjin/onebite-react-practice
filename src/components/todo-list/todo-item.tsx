// import { useDeleteTodo } from '@/store/todos';
import { useUpdateTodoMutation } from '@/hooks/mutations/use-update-todo-mutation';
import { Button } from '../ui/button';
import type { Todo } from '@/types';
import { Link } from 'react-router';
import { useDeleteTodoMutation } from '@/hooks/mutations/use-delete-todo-mutation';
import { UseTodoDataById } from '@/hooks/queries/use-todo-data-by-id';

export default function TodoItem({ id }: { id: string }) {
   // const deleteTodo = useDeleteTodo();
   const { data: todo } = UseTodoDataById(id, 'LIST');
   if (!todo) throw new Error('Todo Data Undefined');
   const { content, isDone } = todo;

   const { mutate: deleteTodo, isPending: isDeleting } =
      useDeleteTodoMutation();

   const { mutate } = useUpdateTodoMutation();

   const handleDeleteClick = () => {
      deleteTodo(id);
      // deleteTodo(id);
   };

   const handleCheckBoxClick = () => {
      mutate({
         id,
         isDone: !isDone,
      });
   };
   return (
      <div className="flex items-center justify-between border p-2">
         <div className="flex gap-5">
            <input
               disabled={isDeleting}
               onClick={handleCheckBoxClick}
               type={'checkbox'}
               checked={isDone}
            />
            <Link to={`/todolist/${id}`}>{content}</Link>
         </div>
         <Button
            disabled={isDeleting}
            variant={'destructive'}
            onClick={handleDeleteClick}>
            Delete
         </Button>
      </div>
   );
}
