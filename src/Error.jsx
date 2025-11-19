import { Navbar } from "keep-react";

const Error = () => {
    return (
        <div>
              <div>
        <Navbar></Navbar>
        <img
          className="h-[400px] w-[1800px]"
          src="/images/error-404.webp"
          alt="404 error illustration"
          loading="lazy"
          decoding="async"
        />
        </div>
        </div>
    );
};

export default Error;