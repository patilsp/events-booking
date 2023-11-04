"use client"
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input"


export function SiteFooter() {
  return (
    <footer className="get-app bottom-0 h-80 w-full bg-primary">
       <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
        >
      <div className="flex flex-col space-y-4 px-10 py-20 sm:flex-row sm:justify-between sm:space-x-4 sm:space-y-0">
        <div className="flex flex-1 items-start justify-start">        
          <Link href="/" className="flex items-center space-x-2">
            <Image
                src="/images/logo.png"
                alt="demo"
                height={40}
                width={40}
                className="h-6 w-6"
            />
            <span className="inline-block font-bold text-white">{siteConfig.name}</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center space-x-4">
          <div className="flex justify-between gap-10 md:w-full">
            <div className="sm:w-1/4 md:w-full">
              <h3 className="text-sm font-semibold text-white">Company</h3>
              <ul className="mb-2 mt-4 space-y-2">
                <li>                  
                    <a className="text-gray-300 hover:text-white">Home</a>                  
                </li>
                <li>                  
                    <a className="text-gray-300 hover:text-white">Features</a>                 
                </li>
               
                <li>                  
                    <a className="text-gray-300 hover:text-white">Services</a>                 
                </li>
               
              </ul>
            </div>
            <div className="sm:w-1/4 md:w-full">
              <h3 className="text-sm font-semibold text-white">Contact</h3>
              <ul className="mb-2 mt-4 space-y-2">
                <li>
                 
                    <a className="text-gray-300 hover:text-white">Contact Us</a>
                 
                </li>
                <li>
                 
                    <a className="text-gray-300 hover:text-white">FAQ</a>
                 
                </li>
                
              </ul>
            </div>
           
            <div className="sm:w-1/4 md:w-full">
              <div className="mb-4 space-y-2">
                <h3 className="text-sm font-semibold text-white">Get The Latest Information</h3>
                <Input />
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="py-20"></div>
      </motion.div>
    </footer>
  );
}
