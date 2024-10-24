import React from 'react'
import { Link, useParams } from 'react-router-dom';
import BlogdetailsSidebar from './BlogDetailsSidebar';
import Posts from '../../data/Posts.json';

const BlogDetailsMain = () => {
    const { id } = useParams();
    const blogPost = Posts.find(post => post.id === parseInt(id));

    if (!blogPost) {
        return <div>Post not found!</div>;
    }
    return (
        <div className="rts-blog-details section__padding">
            <div className="container">
                <div className="row g-40">
                    <div className="col-lg-8">
                        <article className="blog-details">
                            <div className="blog-details__featured-image">
                                <img
                                    src={`/assets/images/blog/${blogPost.bannerImg}`}
                                    alt={blogPost.title}
                                />
                            </div>
                            <div className="blog-details__article-meta mt--40">
                                <Link to="#">
                                    <span>
                                        <i className="fa-light fa-user" />
                                    </span>
                                    {blogPost.author}
                                </Link>
                                <span>
                                    <span>
                                        <i className="fa-light fa-clock" />
                                    </span>
                                    {blogPost.publishedDate}
                                </span>
                                <Link to="#">
                                    <span>
                                        <i className="fa-sharp fa-light fa-tags" />
                                    </span>
                                    {blogPost.category}
                                </Link>
                            </div>
                            <h3 className="blog-title">
                            {blogPost.title}
                            </h3>
                            <p>
                                Collaboratively pontificate bleeding edge resources with inexpensive
                                methodologies globally initiate multidisciplinary compatible
                                architectures pidiously repurpose leading edge growth strategies
                                with just in time web readiness communicate timely meta services{" "}
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                dolorum officia iure, culpa nesciunt omnis voluptas libero hic dicta
                                vitae nulla quisquam modi deserunt, voluptatibus reprehenderit non
                                ipsum exercitationem maxime cum! Veniam quaerat, incidunt odio sunt
                                voluptatum nostrum quod dolorem et iusto magni, laborum ut a atque
                                voluptatibus voluptates corrupti consequatur? Neque tempora totam
                                blanditiis doloribus omnis ducimus consequuntur quod ipsum repellat
                                iure, in molestiae magnam quia! Ullam natus illo, voluptates nemo
                                fuga laboriosam distinctio nisi consequuntur quia aut repudiandae
                                delectus cumque officia ab minima suscipit voluptate ea velit hic
                                sint quas dignissimos autem qui earum! Incidunt iure inventore qui.
                            </p>
                            <blockquote className="rts-blockquote">
                                <h4>Building smart business solution for you</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Explicabo repellat vero dicta velit, doloribus, fugit
                                    exercitationem sapiente quibusdam voluptatibus deserunt quasi
                                    alias ducimus corrupti Lorem ipsum dolor sit amet..
                                </p>
                                <span>Maria Sarapoba</span>
                            </blockquote>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                                aliquid perferendis magni nihil beatae, delectus recusandae minus
                                sequi molestiae iste, perspiciatis expedita amet suscipit?
                                Consequatur accusantium sed voluptatem et nulla dicta tempora. Error
                                numquam earum, adipisci quod, placeat voluptatibus similique sunt
                                quis saepe omnis itaque. Vero saepe eius iste, veritatis voluptas
                                tenetur, porro repellat rem, quia fugiat ad sunt architecto amet
                                expedita. Quibusdam recusandae adipisci ipsa tenetur, nostrum quasi
                                ut veritatis et rerum! Amet odio nam animi adipisci reprehenderit
                                nostrum repellat labore dignissimos. Tenetur distinctio possimus
                                veritatis quasi unde rem nesciunt maiores vel eveniet id! Eveniet
                                deserunt atque molestiae alias!
                            </p>
                            <div className="row mb-5">
                                <div className="col-md-6">
                                    <div className="post-image">
                                        <img src="/assets/images/blog/post-1.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="post-image">
                                        <img src="/assets/images/blog/post-2.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <h3 className="sub-title fw-bold">
                                Building smart business solution for you
                            </h3>
                            <p>
                                Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis
                                vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin
                                eget in venenatis. Tortor montes platea iaculis posuere per mauris,
                                eros porta blandit curabitur ullamcorper varius nostra ante risus
                                egestas.{" "}
                            </p>
                            <div className="row mb-5 align-items-center">
                                <div className="col-md-5">
                                    <div className="post-image mb-5 mb-lg-0">
                                        <img src="/assets/images/blog/post-3.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="check-area-details">
                                        <div className="single-check">
                                            <i className="far fa-check-circle" />
                                            <span>How will activities traditional manufacturing</span>
                                        </div>
                                        <div className="single-check">
                                            <i className="far fa-check-circle" />
                                            <span>All these digital and projects aim to enhance</span>
                                        </div>
                                        <div className="single-check">
                                            <i className="far fa-check-circle" />
                                            <span>I monitor my software that takes screenshots</span>
                                        </div>
                                        <div className="single-check">
                                            <i className="far fa-check-circle" />
                                            <span>Laoreet dolore niacin sodium glutimate</span>
                                        </div>
                                        <div className="single-check">
                                            <i className="far fa-check-circle" />
                                            <span>Minim veniam sodium glutimate nostrud</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facere
                                architecto obcaecati quam temporibus aut sunt, perferendis mollitia
                                nisi, vel hic nostrum? Numquam eos autem vel rem minima sint natus,
                                voluptatem voluptatum quia nulla fugiat reprehenderit porro, harum
                                fuga? Neque explicabo voluptatem expedita consectetur in, sunt nisi
                                non id doloremque.
                            </p>
                        </article>
                        <div className="blog-info">
                            <div className="blog-tags">
                                <div className="tags-title">tags:</div>
                                <div className="blog-tags__list">
                                    <Link to="#">Service</Link>
                                    <Link to="#">Hosting</Link>
                                    <Link to="#">Vps</Link>
                                    <Link to="#">Reseller</Link>
                                </div>
                            </div>
                            <div className="blog-share">
                                <div className="share">Share:</div>
                                <div className="social__media--list">
                                    <Link to="#" className="media">
                                        <i className="fa-brands fa-facebook-f" />
                                    </Link>
                                    <Link to="#" className="media">
                                        <i className="fa-brands fa-instagram" />
                                    </Link>
                                    <Link to="#" className="media">
                                        <i className="fa-brands fa-linkedin" />
                                    </Link>
                                    <Link to="#" className="media">
                                        <i className="fa-brands fa-twitter" />
                                    </Link>
                                    <Link to="#" className="media">
                                        <i className="fa-brands fa-behance" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="blog-author">
                            <div className="blog-author__info">
                                <div className="author-image">
                                    <img src="/assets/images/blog/author.jpg" alt="" />
                                </div>
                                <div className="author-content">
                                    <Link to="#">Maria Sara Khan</Link>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Tempora, temporibus?
                                    </p>
                                    <div className="social__media--list">
                                        <Link to="#" className="media">
                                            <i className="fa-brands fa-facebook-f" />
                                        </Link>
                                        <Link to="#" className="media">
                                            <i className="fa-brands fa-instagram" />
                                        </Link>
                                        <Link to="#" className="media">
                                            <i className="fa-brands fa-linkedin" />
                                        </Link>
                                        <Link to="#" className="media">
                                            <i className="fa-brands fa-twitter" />
                                        </Link>
                                        <Link to="#" className="media">
                                            <i className="fa-brands fa-behance" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-comment mb-5 mb-lg-0">
                            <div className="blog-comment__template">
                                <h4>Share your opinion here !</h4>
                                <form action="#" className="comment-template">
                                    <div className="input-area">
                                        <input type="text" placeholder="Enter your name" required />
                                        <input type="text" placeholder="Enter your email" required />
                                    </div>
                                    <div className="input-area-full">
                                        <input
                                            type="text"
                                            placeholder="Enter your Subject"
                                            required
                                        />
                                    </div>
                                    <textarea
                                        name="msg"
                                        className="input-area-full w-full"
                                        placeholder="Enter Your Message"
                                        defaultValue={""}
                                    />
                                    <button
                                        className="rts-btn rts-btn-secondary w-auto"
                                        type="submit"
                                    >
                                        Submit Review
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <BlogdetailsSidebar />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BlogDetailsMain;