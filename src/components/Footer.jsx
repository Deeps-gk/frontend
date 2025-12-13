function Footer() {
  return (
    <footer className="bg-black text-yellow-400 text-center py-4 border-t border-yellow-400">
      <p className="text-sm">
        © {new Date().getFullYear()} Malnad Family Restaurant. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;