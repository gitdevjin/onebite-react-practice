import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useCreateTodo } from '@/store/todos';

export default function TodoEditor() {
   const [content, setConent] = useState('');
   const createTodo = useCreateTodo();

   const handleClick = () => {
      if (content.trim() === '') return;
      createTodo(content);
      setConent('');
   };
   return (
      <div className="flex gap-2">
         <Input
            value={content}
            onChange={e => setConent(e.target.value)}
            placeholder="add a new to do"
         />
         <Button onClick={handleClick}>Add</Button>
      </div>
   );
}
