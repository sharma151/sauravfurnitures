export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center p-8">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-muted border-t-primary" />
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
