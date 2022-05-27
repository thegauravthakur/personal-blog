import Image from 'next/image';
import Link from 'next/link';
import tw from 'twin.macro';

export function WrittenBySection() {
    return (
        <div css={tw`sm:flex items-start space-x-6`}>
            <div css={tw`w-full`}>
                <Image
                    css={tw`p-4! block!`}
                    height={676 / 4}
                    layout='fixed'
                    src='/images/author.png'
                    width={797 / 4}
                />
            </div>
            <div>
                <h4>Written By Gaurav Thakur</h4>
                <p>
                    Gaurav is a software engineer and JavaScript enthusiast. He
                    is a full stack developer, more inclined to frontend
                    development. He enjoys talking about React, JavaScript, and
                    web development in general. He usually writes about what he
                    learns or experiences in his daily life. His roots are from
                    Kullu in Himachal Pradesh, but he now resides in Hyderabad
                    because of his job.
                    <Link href='/who-is-gaurav-thakur'>
                        <a> Learn more about Gaurav.</a>
                    </Link>
                </p>
            </div>
        </div>
    );
}
