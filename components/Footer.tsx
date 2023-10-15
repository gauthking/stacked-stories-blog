import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <div className="bg-[#1b1c22] flex justify-center items-center gap-4 p-7">
      <Link
        href={"https://github.com/gauthking/stacked-stories-blog"}
        target="_blank"
      >
        <GitHubIcon
          className="cursor-pointer"
          fontSize="large"
          color="warning"
        />
      </Link>
      <p className="font-signikaN text-lg text-[#adba88]">
        .made with Next13 by gauthking
      </p>
    </div>
  );
}

export default Footer;
