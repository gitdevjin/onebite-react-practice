import { deleteTodo } from '@/api/delete-todo';
import { QUERY_KEYS } from '@/lib/constants';
import type { Todo } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useDeleteTodoMutation() {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: deleteTodo,
      onSuccess: deletedTodo => {
         queryClient.removeQueries({
            queryKey: QUERY_KEYS.todo.detail(deletedTodo.id),
         });
         //  queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, prevTodos => {
         //     if (!prevTodos) return [];
         //     return prevTodos.filter(todo => todo.id !== deletedTodo.id);
         //  });
         queryClient.setQueryData<string[]>(QUERY_KEYS.todo.list, prevIds => {
            if (!prevIds) return [];
            return prevIds.filter(id => id !== deletedTodo.id);
         });
      },
   });
}
