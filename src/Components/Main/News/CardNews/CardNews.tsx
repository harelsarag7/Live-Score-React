import "./CardNews.css";
export interface NewsModel {
    id: number
    image?: string,
    title: string,
    date: string,
    description: string,
    // description: string,
}

function CardNews( { news } : { news: NewsModel } ): JSX.Element {
    return (
        <div className="CardNews">
            <img className="news-blog-image" src={news.image} alt="" />
            <h4 className="news-card-title-blog">{news.title}</h4>
            <p className="news-card-date">{news.date}</p>
            <p className="news-card-description">{news.description}</p>
            <div className="action-blog">
                <span className="read-full-blog">Read Full Blog</span>
                <button className="news-card-blog-button">BLOG</button>    
            </div>    
        </div>
    );
}

export default CardNews;
