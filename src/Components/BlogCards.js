import { Link } from "react-router-dom";

const blogContent = [
  {
    logo: "R",
    text: "React",
    src: "https://react.dev/"
  },

  {
    logo: "RR",
    text: "React Router",
    src: "https://reactrouter.com/en/main"
  },

  {
    logo: "RQ",
    text: "React Query",
    src: "https://tanstack.com/query/v3/"
  },

  {
    logo: "RFH",
    text: "React Form Hook",
    src: "https://react-hook-form.com/"
  },
  {
    logo: "RSC",
    text: "React Style Component",
    src: "https://styled-components.com/docs/basics"
  },
  {
    logo: "N",
    text: "Next.js",
    src: "https://nextjs.org/"
  }
];

export default function BlogCard() {
  const el = blogContent.map((item) => {
    return (
      <Link className="card" key={item.id} to={item.src} target="_blank">
        <span>{item.logo}</span>
        <p>{item.text}</p>
      </Link>
    );
  });

  return (
    <>
      <main>
        <section className="blog-section">{el}</section>
      </main>
    </>
  );
}
