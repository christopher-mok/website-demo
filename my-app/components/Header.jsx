import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";

const header = () => {
    return  (
        <header className="py-8 xl:py-12 text-black bg-blue-50/20">
            <div className="container mx-auto flex justify-betwen items-center">
                {/*logo*/}
                <Link href="/">
                    <h1 className="text-4xl font-semibold flex gap-8">
                        Chris <span className="text-accent"></span>
                    </h1>
                </Link>

                {/*desktop nav & button*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav></Nav>
                    <Link href="/contact">
                        <Button>Contact Me</Button>
                    </Link>
                </div>
                
                
                </div>
        </header>
    );
};

export default header