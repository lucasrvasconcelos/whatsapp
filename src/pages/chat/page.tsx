import { CircleUserRoundIcon } from 'lucide-react'
import { Conversations } from './components/conversations'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Resizable } from 're-resizable'

// import {
//   ResizableHandle,
//   ResizablePanel,
//   ResizablePanelGroup,
// } from '@/components/ui/resizable'

export function Chat() {
  return (
    <main className="flex h-screen bg-primary p-8">
      <Resizable
        minWidth={300}
        minHeight={'100%'}
        defaultSize={{
          width: 300,
          height: 100,
        }}
        enable={{
          top: false,
          right: true,
          bottom: false,
          left: false,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false,
        }}
      >
        <section className="relative flex h-[100%] flex-1 flex-col rounded-md bg-white p-2">
          <div className="flex items-center justify-center gap-2 rounded-md bg-primary/5 p-4 ring-2 ring-primary/40">
            <CircleUserRoundIcon
              className="-mt-4 size-12 text-primary"
              strokeWidth={1}
            />
            <div className="flex w-full flex-col gap-1 overflow-hidden">
              <span className="overflow-hidden text-ellipsis whitespace-nowrap text-base font-bold text-secondary-foreground">
                Lucas rodrigues de oliveira vasconcelos
              </span>
              <span className="font-bol flex justify-between  text-xs font-bold text-muted-foreground">
                <span className="overflow-hidden text-ellipsis whitespace-nowrap pr-4 text-[10px]">
                  JHL COMERCIO DE ALIMENTOS LTDA ME JHL COMERCIO DE ALIMENTOS
                  LTDA ME
                </span>
                <button type="button">000</button>
              </span>
            </div>
          </div>
          <div className="mt-4 h-full overflow-hidden">
            <ScrollArea className="h-[100%]">
              <ul className="space-y-2 p-1">
                <Conversations />
                <Conversations />
                <Conversations />
                <Conversations />
                <Conversations />
                <Conversations />
                <Conversations />
                <Conversations />
                <Conversations />
                <Conversations />
                <Conversations />
                <Conversations />
                <Conversations />
              </ul>
            </ScrollArea>
          </div>
        </section>
      </Resizable>
      {/* <section className="relative grid min-w-[250px] grid-cols-1 grid-rows-9 overflow-hidden rounded-md bg-white p-2">
        <div className="top-2 row-span-1 flex items-center justify-center gap-2 rounded-md bg-primary/5 p-4 ring-2 ring-primary/40">
          <CircleUserRoundIcon
            className="-mt-4 size-12 text-primary"
            strokeWidth={1}
          />
          <div className="flex w-full flex-col gap-1 overflow-hidden">
            <span className="overflow-hidden text-ellipsis whitespace-nowrap text-base font-bold text-secondary-foreground">
              Lucas rodrigues de oliveira vasconcelos
            </span>
            <span className="font-bol flex justify-between  text-xs font-bold text-muted-foreground">
              <span className="overflow-hidden text-ellipsis whitespace-nowrap pr-4 text-[10px]">
                JHL COMERCIO DE ALIMENTOS LTDA ME JHL COMERCIO DE ALIMENTOS LTDA
                ME
              </span>
              <button type="button">000</button>
            </span>
          </div>
        </div>
        <div className="row-span-8 mt-4 h-full overflow-hidden">
          <ScrollArea className="h-full">
            <ul className="space-y-2 p-1">
              <Conversations />
              <Conversations />
              <Conversations />
            </ul>
          </ScrollArea>
        </div>
      </section> */}
      <section className=""></section>
    </main>
  )
}
