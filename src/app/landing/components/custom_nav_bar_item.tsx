export interface CustomNavBarItemParams {
  title: string;
  href?: string;
}
export default function CustomNavBarItem(params: CustomNavBarItemParams) {
  return (
    <a
      href={params.href}
      className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[3px] after:bg-primary hover:after:w-full after:transition-all after:duration-300 text-text-primary"
    >
      {params.title}
    </a>
  );
}
