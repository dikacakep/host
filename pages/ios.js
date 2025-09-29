export async function getServerSideProps(context) {
  const accept = context.req.headers['accept'] || '';

  // Jika aksesnya bukan dari browser (misalnya Surge, curl, dll)
  if (!accept.includes('text/html')) {
    context.res.setHeader('Content-Type', 'text/plain');
    context.res.end(
`[General]

[Rule]
FINAL,DIRECT

[Host]
www.growtopia1.com = 128.199.212.210
www.growtopia2.com = 128.199.212.210`
    );
    return { props: {} };
  }

  // Kalau dari browser, tampilkan halaman biasa
  return { props: {} };
}

export default function IOS() {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>📱 iOS Surge Config</h1>
      <p>Buka halaman ini lewat Surge atau curl untuk mendapatkan file .conf</p>
    </div>
  );
}
