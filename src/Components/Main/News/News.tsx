import CardNews, { NewsModel } from "./CardNews/CardNews";
import "./News.css";

function News(): JSX.Element {
    const News: NewsModel[] = [
        {
            id:1,
            image: "https://static.timesofisrael.com/ajn/uploads/2022/10/310112390_653823302769743_5093064867140011100_n.jpeg",
            title: "Maccabi Haifa Leads",
            date: "Monday, Jan 20, 2022",
            description: "Maccabi Haifa Football Club is an Israeli professional football club, based in the city of Haifa, Israel, a section of Maccabi Haifa sports club.",        
          },
        {
            id:2,
            image: "https://static.timesofisrael.com/ajn/uploads/2022/10/310112390_653823302769743_5093064867140011100_n.jpeg",
            title: "Maccabi Haifa Leads",
            date: "Monday, Jan 20, 2022",
            description: "Maccabi Haifa Football Club is an Israeli professional football club, based in the city of Haifa, Israel, a section of Maccabi Haifa sports club.",        
          },
    ]
    return (
        <div className="News">
			{News.map(newBlog =>  <CardNews key={newBlog.id} news={newBlog}/>)}
        </div>
    );
}

export default News;
