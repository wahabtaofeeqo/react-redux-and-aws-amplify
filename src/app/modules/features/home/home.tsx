
import { selectAll, useLoadPostsQuery } from '../../../../api/features/home-api-slice';
import { useAppSelector } from '../../../hooks';


export const Home = () => {

    const {isLoading} = useLoadPostsQuery({});
    const posts = useAppSelector(selectAll) 
    
    return (
        <>
        <div className="">
            <div className="container mx-auto">
                <h4 className='mb-4'>Posts</h4>
                {
                    isLoading ? <span>Loading...</span> : ''
                }

                {
                    posts.map((post: any, index: number) => {
                        return (
                            <div className='border my-4 p-4 rounded shadow-sm' key={index}>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Quo, earum accusantium incidunt quod aperiam dignissimos tempora provident dolor obcaecati expedita numquam est tenetur sunt cum vel ipsa eum eos labore!
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}