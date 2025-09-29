export async function getServerSideProps({ res }) {
  // Set header agar langsung ter-download sebagai file
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="GarudaPS.txt"');

  // Isi hosts.txt kamu
  res.end(
`# Custom hosts file
128.199.212.210 growtopia1.com
128.199.212.210 growtopia2.com
128.199.212.210 www.growtopia1.com
128.199.212.210 www.growtopia2.com`
  );

  return { props: {} };
}

// Halaman ini tidak akan pernah ditampilkan,
// karena browser akan langsung mendownload file
export default function Hosts() {
  return null;
}
