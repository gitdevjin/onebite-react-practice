import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useMutation } from '@tanstack/react-query';
import { createTodo } from '@/api/create-todo';
import { useCreateTodoMutation } from '@/hooks/mutations/use-create-todo-mutations';
// import { useCreateTodo } from '@/store/todos';

export default function TodoEditor() {
   const { mutate, isPending } = useCreateTodoMutation();
   const [content, setConent] = useState('');
   // const createTodo = useCreateTodo();

   const handleClick = () => {
      if (content.trim() === '') return;
      mutate(content);
      // createTodo(content);
      setConent('');
   };
   return (
      <div className="flex gap-2">
         <Input
            value={content}
            onChange={e => setConent(e.target.value)}
            placeholder="add a new to do"
         />
         <Button disabled={isPending} onClick={handleClick}>
            Add
         </Button>
      </div>
   );
}
