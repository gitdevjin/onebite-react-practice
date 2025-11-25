import { useCountStore, useDecrease, useIncrease } from '@/store/count';
import { Button } from '../ui/button';

export default function Controller() {
   const increase = useIncrease();
   const decrease = useDecrease();
   // const { count, actions } = useCountStore();

   return (
      <div>
         <Button
            onClick={() => {
               increase();
            }}>
            +
         </Button>
         <Button onClick={decrease}>-</Button>
      </div>
   );
}
