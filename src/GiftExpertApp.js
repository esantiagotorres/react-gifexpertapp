import React, {useState} from 'react'
import { AddCategory } from './Components/AddCategory'
import { Gifgrid } from './Components/Gifgrid';

export const GiftExpertApp = () => {

   
    const [category, setcategory] = useState(['Samurai X']);
 

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setcategory={setcategory}/>
            <hr/>
            
            <ol>

                {
                    category.map(category =>{
                        <Gifgrid
                         key={category}
                         category ={category}
                         />
                    })
                }
            </ol>
        </>
    )
}



