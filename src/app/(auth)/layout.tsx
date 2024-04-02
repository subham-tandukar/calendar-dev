
export default async function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <main className="auth">
            {children}
        </main>
    );
}
