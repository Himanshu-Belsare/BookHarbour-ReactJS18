import { Authors } from "../data"


export const FeaturedAuthors = () => {
  return (
    <>
    <h1 className="font-bold text-4x1 my-8 text-center">Featured Images</h1>
    <div className="flex justify-around text-center">
        {
            Authors.map((author,i) => (
                <div>
                    <img src={author.profile_image} alt={author.name} className="mx-auto mb-4 w-28 h-28 rounded-lg"/>
                    <h5>{author.name}</h5>
                </div>
                
            )
            
            )
        }
    </div>
    </>
    

  )
}
