import { cn } from '@/utils'

const Button = ({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        'rounded border border-primary bg-transparent px-7 py-5 font-mono text-sm text-primary transition-[var(--transition)]',
        'hover:shadow-button-hover hover:translate-x-[-5px] hover:translate-y-[-5px] hover:outline-none',
        'focus-visible:shadow-button-hover focus-visible:translate-x-[-5px] focus-visible:translate-y-[-5px] focus-visible:outline-none active:scale-95',
        className
      )}
      {...props}>
      {children}
    </button>
  )
}

export default Button
