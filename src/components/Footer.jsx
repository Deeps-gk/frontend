function Footer() {
  return (
    <footer className="bg-black text-center py-4" style={{ 
      color: '#D4AF37',
      borderTop: '1px solid #D4AF37'
    }}>
      <p className="text-sm">
        © {new Date().getFullYear()} Malnad Family Restaurant. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;