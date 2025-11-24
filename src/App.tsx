import { toast, Toaster } from 'sonner';
import './App.css';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { cn } from './lib/utils';
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from './components/ui/carousel';
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from './components/ui/popover';
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from './components/ui/dialog';
import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogTitle,
   AlertDialogTrigger,
} from './components/ui/alert-dialog';

import { ChefHat } from 'lucide-react';

function App() {
   const isActive = false;
   return (
      <div className="p-5">
         <div className="flex w-100 flex-col p-20">
            <ChefHat className="h-10 w-10 fill-red-300 text-blue-300" />
            <AlertDialog>
               <AlertDialogTrigger>Open alert Dialog</AlertDialogTrigger>
               <AlertDialogContent>
                  <AlertDialogTitle>Title Alert</AlertDialogTitle>
                  <AlertDialogDescription>Description</AlertDialogDescription>
                  <div>body</div>
                  <div>
                     <AlertDialogAction
                        onClick={() => {
                           console.log('KeepGoing!');
                        }}>
                        Keep Going
                     </AlertDialogAction>
                     <AlertDialogCancel>Cancel</AlertDialogCancel>
                  </div>
               </AlertDialogContent>
            </AlertDialog>
            <Dialog>
               <DialogTrigger asChild>
                  <Button>Open Dialog</Button>
               </DialogTrigger>
               <DialogContent>
                  <DialogHeader>
                     <DialogTitle>title</DialogTitle>
                     <DialogDescription>Description</DialogDescription>
                  </DialogHeader>
                  <div>This is Body part of Dialog</div>
               </DialogContent>
            </Dialog>
            <Popover>
               <PopoverTrigger asChild>
                  <Button> Open Button </Button>
               </PopoverTrigger>
               <PopoverContent side={'top'}>
                  This is Modal Content! Very Easy!
               </PopoverContent>
            </Popover>
            <Carousel>
               <CarouselContent>
                  <CarouselItem className="basis-1/3">1</CarouselItem>
                  <CarouselItem className="basis-1/3">2</CarouselItem>
                  <CarouselItem className="basis-1/3">3</CarouselItem>
                  <CarouselItem className="basis-1/3">4</CarouselItem>
                  <CarouselItem className="basis-1/3">5</CarouselItem>
               </CarouselContent>
               <CarouselPrevious />
               <CarouselNext />
            </Carousel>
         </div>

         <Toaster />
         <div
            className={cn(
               'w-100 text-2xl',
               isActive ? 'text-green-400' : 'text-red-400',
            )}>
            is active?
         </div>
         <div className="text-2xl font-bold underline">Hello World</div>
         <Input placeholder="type here.." />
         <Textarea />
         <Button
            onClick={() => {
               toast('toast!', {
                  position: 'top-center',
               });
            }}
            className="hover:cursor-pointer">
            Hello World Button
         </Button>
         <Button variant={'destructive'}>button</Button>
         <Button variant={'ghost'}>button</Button>
         <Button variant={'link'}>button</Button>
         <Button variant={'outline'}>button</Button>
         <Button variant={'secondary'}>button</Button>
         <div className="text-primary">Primary</div>
         <div className="text-muted bg-destructive">Muted</div>
         <div className="text-destructive">Destructive</div>
      </div>
   );
}

export default App;
