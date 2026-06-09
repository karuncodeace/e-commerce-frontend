import Link from "next/link";

export const adminNavlinks = [
    {
        name: "Admin Profile",
        href: "/admin/profile",
    },
    {
        name: "Admin Products",
        href: "/admin/products",
    },
    {
        name :"Manage Orders",
        href: "/admin/orders",
    },
    {
        name :"Manage Categories",
        href: "/admin/categories",
    }
    
]


export default function AdminNavBar() {
    
    return(
        <nav aria-label="Admin navigation" className=" ml-auto flex shrink-0 items-center gap-2 sm:gap-4">
            <ul className="flex items-center gap-1 text-[14px] font-sans leading-none text-black">
                {adminNavlinks.map((link) => (
                    <li key={link.name}>
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}