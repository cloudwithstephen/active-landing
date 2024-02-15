import { useEffect, useState, ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'default' | 'outline' | 'ghost' | 'link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children?: ReactNode;
  className?: string;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  children,
  className = '',
  loading = false,
  ...props
}) => {
  const variants = {
    default: 'bg-primary text-white hover:bg-primary/90',
    outline:
      'border dark:border-gray-500  hover:bg-pale-sky dark:hover:bg-primary/20',
    ghost: 'hover:bg-primary/10 hover:text-accent-foreground',
    link: 'text-primary dark:text-white underline-offset-4 underline',
  };

  const [activeVariant, setActiveVariant] = useState(variants[variant]);

  useEffect(() => {
    setActiveVariant(variants[variant]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant]);

  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={` ${activeVariant} ${className} relative h-10 rounded text-sm font-semibold px-3`}
    >
      {loading && (
        <span className='absolute -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2'>
          <div className='inline-block w-4 h-4 border-2 border-t-2 border-t-white border-gray-200 rounded-full animate-spin'></div>
        </span>
      )}
      <span className={loading ? 'opacity-0' : 'opacity-100'}>{children}</span>
    </button>
  );
};

export default Button;
