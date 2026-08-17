export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-10 border-t border-white/10 relative overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[100px] bg-primary/20 blur-[100px] -z-10 rounded-full" />
      
      {/* w-full እና pr-24 በመጠቀም ከፍሎቲንግ አዝራሩ ጋር ፈጽሞ እንዳይደራረብ ይደረጋል */}
      <div className="w-full px-6 sm:px-12 lg:px-20 pr-24 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <a href="#" className="text-xl font-heading font-bold text-gradient">
            Endalk Tech
          </a>
          <p className="text-sm text-muted-foreground mt-2">
            Building digital experiences that convert.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-1 text-sm text-muted-foreground text-center md:text-right">
          <p>&copy; {currentYear} Endalk Tech. All rights reserved.</p>
          <p className="text-xs text-primary/80 font-medium">
            Designed and Maintenance by Endale Gebeyehu
          </p>
        </div>
      </div>
    </footer>
  );
}