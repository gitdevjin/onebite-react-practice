import { createTodo } from '@/api/create-todo';
import { QUERY_KEYS } from '@/lib/constants';
import type { Todo } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useCreateTodoMutation() {
   const queryClinet = useQueryClient();
   return useMutation({
      mutationFn: createTodo,
      //event handlers during or afetr fetch()
      onMutate: () => {},
      onSettled: () => {},
      onSuccess: newTodo => {
         queryClinet.setQueryData<Todo>(
            QUERY_KEYS.todo.detail(newTodo.id),
            newTodo,
         );
         queryClinet.setQueryData<string[]>(QUERY_KEYS.todo.list, list => {
            if (!list) return [newTodo.id];
            return [...list, newTodo.id];
         });
         //  queryCliet.setQueryData<Todo[]>(QUERY_KEYS.todo.list, prevTodos => {
         //     if (!prevTodos) return [newTodo];
         //     return [...prevTodos, newTodo];
         //  });
         //  queryCliet.invalidateQueries({
         //     queryKey: QUERY_KEYS.todo.list,
         //  });
      },
      onError: error => {
         window.alert('Todo Create Failed');
         console.log(error);
      },
   });
}
