export async function getServerSideProps({ res }) {
  // Set header agar langsung ter-download sebagai file
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="GarudaPS.txt"');

  // Isi hosts.txt kamu
  res.end(
`178.128.62.224 growtopia1.com
178.128.62.224 growtopia2.com
178.128.62.224 www.growtopia1.com
178.128.62.224 www.growtopia2.com`
  );

  return { props: {} };
}

// Halaman ini tidak akan pernah ditampilkan,
// karena browser akan langsung mendownload file
export default function Hosts() {
  return null;
}
