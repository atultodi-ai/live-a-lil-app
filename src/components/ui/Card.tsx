import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  elevated?: boolean;
  interactive?: boolean;
  className?: string;
}

export function Card({
  children,
  elevated = false,
  interactive = false,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={[
        "bg-white rounded-[var(--radius-card)]",
        elevated ? "shadow-md" : "shadow-sm",
        interactive ? "card-lift cursor-pointer" : "",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return <div className={`p-5 pb-0 ${className}`}>{children}</div>;
}

export function CardBody({ children, className = "" }: CardHeaderProps) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }: CardHeaderProps) {
  return (
    <div className={`px-5 pb-5 pt-0 border-t border-border mt-0 ${className}`}>
      {children}
    </div>
  );
}
