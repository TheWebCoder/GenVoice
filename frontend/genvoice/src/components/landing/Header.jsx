import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FileText, Menu, X } from "lucide-react";

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isAuthenticated = false
    

  return (
    <div>Header</div>
  )
}

export default Header