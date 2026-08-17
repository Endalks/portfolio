export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[100px] bg-primary/20 blur-[100px] -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center gap-4">
        <div>
          <a href="#" className="text-xl font-heading font-bold text-gradient">
            Endalk Tech
          </a>
          <p className="text-sm text-muted-foreground mt-2">
            Building digital experiences that convert.
          </p>
        </div>

        <div className="flex flex-col items-center gap-1 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Endalk Tech. All rights reserved.</p>
          <p className="text-xs text-primary/80 font-medium">
            Designed and Maintenance by Endale Gebeyehu
          </p>
        </div>
      </div>
    </footer>
  );
}