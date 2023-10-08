import type { NextApiRequest, NextApiResponse } from 'next';
import { draftMode } from 'next/headers';

export default function preview(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Set-Cookie', 'draftMode=true; Path=/'); // Set a cookie to indicate draft mode
    res.writeHead(307, { Location: '/preview' }); // Redirect to your main page
    res.end();
}