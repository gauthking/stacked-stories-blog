import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

function StudioNav(props: any) {
  return (
    <div className="bg-zinc-900 px-5 py-3">
      <div className="py-2 my-2">
        <Link
          href="/"
          className="text-gray-200 font-semibold flex items-center"
        >
          <ArrowUturnLeftIcon className="h-5 w-5 mr-3" />
          Go to Blog
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNav;
