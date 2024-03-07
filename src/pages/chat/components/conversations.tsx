import { CircleUserRoundIcon } from 'lucide-react'

export function Conversations() {
  return (
    <li className="flex cursor-pointer select-none items-center justify-center gap-2 rounded-md p-4 ring-2 ring-muted transition-colors hover:bg-muted">
      <CircleUserRoundIcon
        className="-mt-2 size-12 text-primary"
        strokeWidth={1}
      />
      <div className="flex w-full flex-col gap-1 overflow-hidden">
        <span className="overflow-hidden text-ellipsis whitespace-nowrap pr-1 text-base font-bold text-secondary-foreground">
          Marcelo
        </span>
        <span className="font-bol flex justify-between  text-xs font-bold text-muted-foreground">
          <span className="overflow-hidden text-ellipsis whitespace-nowrap pr-4 text-[10px]">
            Moto peças pecém
          </span>
        </span>
      </div>
    </li>
  )
}
