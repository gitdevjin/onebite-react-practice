import { UpdateTodo } from '@/api/update-todo';
import { QUERY_KEYS } from '@/lib/constants';
import type { Todo } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useUpdateTodoMutation() {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: UpdateTodo,
      onMutate: async updatedTodo => {
         await queryClient.cancelQueries({
            queryKey: QUERY_KEYS.todo.detail(updatedTodo.id),
         });

         const previousTodo = queryClient.getQueryData<Todo>(
            QUERY_KEYS.todo.detail(updatedTodo.id),
         );

         queryClient.setQueryData<Todo>(
            QUERY_KEYS.todo.detail(updatedTodo.id),
            prevTodo => {
               if (!prevTodo) throw new Error('Item not Found');
               return { ...prevTodo, ...updatedTodo };
            },
         );
         return { previousTodo };
         //  await queryClient.cancelQueries({
         //     queryKey: QUERY_KEYS.todo.list,
         //  });
         //  const previousTodos = queryClient.getQueryData<Todo[]>(
         //     QUERY_KEYS.todo.list,
         //  );
         //  queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, prevTodos => {
         //     if (!prevTodos) return [];
         //     return prevTodos.map(prevTodo =>
         //        prevTodo.id === updatedTodo.id
         //           ? { ...prevTodo, ...updatedTodo }
         //           : prevTodo,
         //     );
         //  });
         //  return { previousTodos };
      },
      onError: (error, variable, context) => {
         if (context && context.previousTodo) {
            queryClient.setQueryData<Todo>(
               QUERY_KEYS.todo.detail(context.previousTodo.id),
               context.previousTodo,
            );
         }
      },
      //   onSettled: () => {
      //      queryClient.invalidateQueries({
      //         queryKey: QUERY_KEYS.todo.list,
      //      });
      //   },
   });
}
