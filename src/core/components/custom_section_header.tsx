type Props = {
  title: string;
};

export default function CustomSectionHeader({ title }: Props) {
  return (
    <p
      className="relative text-center text-2xl md:text-3xl font-bold mb-16 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-primary after:-right-6 after:top-[50%] after:translate-y-[-50%] after:rounded-full
    before:content-[''] before:absolute before:h-2 before:w-2 before:bg-primary before:-left-6 before:top-[50%] before:translate-y-[-50%] before:rounded-full
    "
    >
      {title}
    </p>
  );
}
