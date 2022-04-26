//bilgi Ekleme, bilgi silme
import { getDatabase } from "firebase/database";
import { useAuthContext } from "../contexts/AuthContext";
import firebase from "./firebase";

const {blog, setBlog} = useAuthContext();

export const AddBlog=(blog)=>{
    const db = getDatabase();
    const BlogRef=ref(db,"baglanti");
    const newBlogRef=push(BlogRef)
    set((newBlogRef),{
        title : blog.title,
        url : blog.url,
        text : blog.text
}


