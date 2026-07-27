type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`mx-auto w-full max-w-[1400px] px-6 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}