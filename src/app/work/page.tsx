export default function WorkPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 relative overflow-hidden bg-background">
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-foreground/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-foreground/5 rounded-full blur-[80px]" />
            </div>

            <div className="relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center gap-6">
                <h1 className="text-4xl md:text-6xl font-light tracking-tight text-foreground uppercase">
                    Work
                </h1>
                <div className="h-[1px] w-24 bg-foreground/20 my-2" />
                <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide lowercase">
                    (Coming Soon)
                </p>
                <p className="text-muted-foreground/60 max-w-md mx-auto mt-2 leading-relaxed">
                    I am currently curating my best projects to showcase here. Check back later to see my recent work in detail.
                </p>
            </div>
        </main>
    );
}
