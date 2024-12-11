import { BlogPosts } from 'app/components/posts'

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                About Me
            </h1>
            <p className="mb-4">
                {`Hi, I’m Azhar (Aldi Yusron)—a passionate web developer 
                with a strong interest in UI/UX design and graphic design. 
                I specialize in building both functional and aesthetically pleasing websites, from frontend interfaces to backend systems. 
                With a versatile tech stack, I aim to deliver seamless and engaging web solutions.`}
            </p>
            <div className="my-8">
                <BlogPosts />
            </div>
        </section>
    )
}
