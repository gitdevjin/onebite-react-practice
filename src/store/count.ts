import { create } from 'zustand';
import {
   combine,
   subscribeWithSelector,
   persist,
   createJSONStorage,
   devtools,
} from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// type Store = {
//    count: number;
//    increase: () => void;
//    decrease: () => void;
// };

// export const useCountStore = create<Store>(set => {
//    return {
//       count: 0,
//       increase: () => {
//          set(store => ({
//             count: store.count + 1,
//          }));
//       },
//       decrease: () => {
//          set(store => ({
//             count: store.count - 1,
//          }));
//       },
//    };
// });

export const useCountStore = create(
   devtools(
      persist(
         subscribeWithSelector(
            immer(
               combine({ count: 0 }, (set, get) => ({
                  actions: {
                     increase: () => {
                        set(state => {
                           state.count += 1;
                        });
                     },
                     decrease: () => {
                        set(state => {
                           state.count -= 1;
                        });
                     },
                  },
               })),
            ),
         ),
         {
            name: 'countStore',
            partialize: store => ({
               count: store.count,
            }),
            storage: createJSONStorage(() => sessionStorage),
         },
      ),
      {
         name: 'countStore',
      },
   ),
);

useCountStore.subscribe(
   store => store.count,
   //Listener
   (count, prevCount) => {
      console.log('prev : ', prevCount);
      console.log(count);
      const store = useCountStore.getState();
      //   useCountStore.setState((store)=>({}))
   },
   //
);

export const useCount = () => {
   const count = useCountStore(store => store.count);
   return count;
};

export const useIncrease = () => {
   const increase = useCountStore(store => store.actions.increase);
   return increase;
};

export const useDecrease = () => {
   const decrease = useCountStore(store => store.actions.decrease);
   return decrease;
};
