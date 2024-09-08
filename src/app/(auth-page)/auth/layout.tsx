

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center items-center w-full h-full min-h-[100dvh]">
      {children}
    </div>
  );
}
