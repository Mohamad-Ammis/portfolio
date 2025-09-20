export default function CustomNavBarActionsSection() {
  return (
    <div className="flex gap-5 md:items-center flex-col md:flex-row  w-full justify-start items-start">
      <button
        className="hidden  relative overflow-hidden text-[var(--text-primary)] hover:text-[var(--onPrimary)] px-7 py-2 rounded-[8px] cursor-pointer transition-all duration-300 border border-[var(--primary)] 
        after:content-[''] after:absolute after:inset-0 after:bg-[var(--primary)] after:z-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
      >
        <span className="relative z-10">Contact</span>
      </button>
      {/* <ThemeSwitcher /> */}
    </div>
  );
}
