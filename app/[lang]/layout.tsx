export default function RootLayout({
  params,
  children,
}: {
  params: { lang: 'en' | 'es' | 'de' };
  children: React.ReactNode;
}) {
  return (
    <html lang={params.lang}>
      <head />
      <body style={{ backgroundColor: 'black', color: 'white' }}>
        {children}
      </body>
    </html>
  );
}
