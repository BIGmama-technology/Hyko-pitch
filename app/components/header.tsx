export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-2  px-[15%] min-h-[64px] flex justify-start items-center">
      <h1 className="text-2xl font-bold">{children}</h1>
    </div>
  );
}
