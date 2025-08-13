import { DATA } from '../data';

export default function Footer() {
  return (
    <footer className="border-t py-8 text-center">
      <p>© {new Date().getFullYear()} {DATA.name}. All rights reserved.</p>
    </footer>
  );
}