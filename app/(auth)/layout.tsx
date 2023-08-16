export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex items-center justify-center h-full w-full border-green-400 border-4">
      {children}
    </div>
  );
};
