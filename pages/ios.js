export async function getServerSideProps(context) {
  const accept = context.req.headers['accept'] || '';
  
  if (!accept.includes('text/html')) {
    context.res.setHeader('Content-Type', 'text/plain');
    context.res.end(
`[General]

[Rule]
FINAL,DIRECT

[Host]
128.199.212.210 www.growtopia1.com
128.199.212.210 www.growtopia2.com`
    );
    return { props: {} };
  }

  return { props: {} };
}

export default function IOS() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>iOS host Page</h1>
      <p>host.</p>
    </div>
  );
}
 
