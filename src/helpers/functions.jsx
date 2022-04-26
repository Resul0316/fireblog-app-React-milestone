//bilgi Ekleme, 
import { getDatabase } from "firebase/database";




export const AddBlog=(blog)=>{
    const db = getDatabase();
    const BlogRef=ref(db,"baglanti");
    const newBlogRef=push(BlogRef)
    set((newBlogRef),{
        user : blog.user,
        title : blog.title,
        imageUrl : blog.imageUrl,
        content: blog.content,
        date : blog.date
    })
}


