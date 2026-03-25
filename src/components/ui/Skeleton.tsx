interface SkeletonProps {
  className?: string;
  lines?: number;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return <div className={`skeleton ${className}`} aria-hidden="true" />;
}

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-[var(--radius-card)] shadow-sm p-5 space-y-3" aria-hidden="true">
      <Skeleton className="h-40 w-full" />
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <div className="flex gap-2">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-16" />
      </div>
    </div>
  );
}

export function NudgeSkeleton() {
  return (
    <div className="bg-amber/10 rounded-[var(--radius-card)] p-5 space-y-3 border border-amber/20" aria-hidden="true">
      <Skeleton className="h-4 w-24 bg-amber/20" />
      <Skeleton className="h-5 w-full bg-amber/10" />
      <Skeleton className="h-5 w-5/6 bg-amber/10" />
      <Skeleton className="h-10 w-32 bg-amber/20" />
    </div>
  );
}
