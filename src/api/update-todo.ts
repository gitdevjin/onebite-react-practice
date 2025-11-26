import { API_URL } from '@/lib/constants';
import type { Todo } from '@/types';

export async function UpdateTodo(todo: Partial<Todo> & { id: string }) {
   const response = await fetch(`${API_URL}/todos/${todo.id}`, {
      method: 'PATCH',
      body: JSON.stringify(todo),
   });

   if (!response.ok) throw new Error('Updated Failed');
   const data: Todo = await response.json();
   return data;
}
