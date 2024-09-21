import React from 'react'
import Blogcard from '../components/Blogcard'

function Blog() {

  const coursedata=[
 
    {
      title:"Top 15 Proven Digital Marketing Strategies to Boost Your Business",
      img:"https://i-tech.net.in/wp-content/uploads/2024/09/a-digital-billboard-with-the-text-top-15-proven-di-cDzSCv_NTHeaeism2v01lg-zkYYsISkS8iVo_rDHmsTHw.jpeg.webp",
      link:"",
       publish:"September 22, 2024/No Comments",
      description:"Top 15 Proven Digital Marketing Strategies to Boost Your Business Introduction In the fast-paced world of digital marketing, staying ahead…"
    },
    {
      title:"AI-Powered Digital Marketing: Revolutionizing Customer Engagement",
      img:"https://i-tech.net.in/wp-content/uploads/2024/09/a-futuristic-image-of-a-digital-marketing-dashboar-CeFRi16PTqmiO0SFYX7KyQ-YN4ir40_TlO_KzJRhy4-tg.jpeg.webp",
      link:"",
       publish:"September 23, 2024/No Comments",
      description:"AI-Powered Digital Marketing: A Paradigm Shift in Customer Engagement Introduction In today’s increasingly competitive digital marketplace, businesses must innovate to…"
    },
    {
      title:"SEO is not dead Its like planting a seed",
      img:"https://i-tech.net.in/wp-content/uploads/2024/09/a-blog-post-image-with-a-quote-that-says-seo-is-no-fWPxJdRdRIOPwcTvVVHVHg-ORBGkbbORCWvrvlbRPpK3g.jpeg.webp",
      link:"",
      publish:"September 21, 2024/No Comment",
      description:"SEO is not dead It’s like planting a seed, In the SEO world, opinions tend to fall into two categories: SEO…"
    }
  ]
  return (
    <>
    <div className="blog rounded-md w-full h-64 flex justify-center items-center text-6xl font-extrabold">
    Latest News
    </div>
 
    <div className="w-full h-auto p-20">
    <div className='w-full h-auto flex flex-wrap justify-start items-center  gap-4'>
       {
        coursedata.map((item,index)=>(
           <Blogcard
           key={index}
             img={item.img}
             title={item.title}
             publish={item.publish}
             description={item.description}
             link={item.link}
           />
        ))
       }     
    </div>
    </div>
 
    </>
  )
}

export default Blog