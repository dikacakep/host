export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end(
`128.199.212.210 growtopia1.com
128.199.212.210 growtopia2.com
128.199.212.210 www.growtopia1.com
128.199.212.210 www.growtopia2.com`
  );
  return { props: {} };
}

export default function Android() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>🤖 Hosts File</h1>
      <p>Gunakan URL ini langsung di Hosts Go / PowerTunnel.</p>
    </div>
  );
}
