"use client";

import Link from "next/link";
import { ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";
import { useCart } from "@/context/cart-context";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="border-b bg-gray-300 sticky top-0 z-10 bg-gray-100 font-bold">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-brand-orange">
          MyCloudMess
        </Link>
        <Link
          href="/cart"
          className="relative md:hidden ml-[2.5rem] text-brand-orange"
        >
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary font-bold text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
        {/* Mobile menu button */}
        <Button
          size="sm"
          className="md:hidden bg-brand-orange text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6 font-bold" />
        </Button>
        <div className="md:hidden">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-brand-orange hover:bg-brand-orange"
                >
                  <User className="h-6 w-6 font-bold font-large text-white hover:bg-brand-orange" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="font-bold">
                  {user.email}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login" className="font-bold bg-brand-orange">
              <Button className="bg-brand-orange" size="sm">
                Login
              </Button>
            </Link>
          )}
        </div>
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-bold hover:text-primary text-brand-orange"
          >
            Menu
          </Link>
          <Link
            href="/about"
            className="text-sm font-bold hover:text-primary text-brand-orange"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-sm font-bold hover:text-primary text-brand-orange"
          >
            Contact
          </Link>
          <Link href="/cart" className="relative text-brand-orange">
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary font-bold text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-brand-orange hover:bg-brand-orange"
                >
                  <User className="h-6 w-6 font-bold font-large text-white hover:bg-brand-orange" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="font-bold">
                  {user.email}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login" className="font-bold bg-brand-orange">
              <Button className="bg-brand-orange" size="sm">
                Login
              </Button>
            </Link>
          )}
        </nav>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t p-4 border-radius-2 mx-2 mb-2 bg-brand-orange">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* {user ? (
              <>
                <div className="text-sm font-medium">{user.email}</div>
                <Button variant="outline" size="sm" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </Link>
            )} */}
          </nav>
        </div>
      )}
    </header>
  );
}
